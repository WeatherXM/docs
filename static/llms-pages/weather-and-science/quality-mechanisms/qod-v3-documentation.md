# QoD v3 Full Documentation

Canonical: https://docs.weatherxm.com/weather-and-science/quality-mechanisms/qod-v3-documentation

# Quality of Data (QoD) v3 Full Documentation

**QoD v3** (`version 3.0.0`) is WeatherXM's deterministic, single-day meteorological data quality engine. Every day (for the previous UTC day), it evaluates all active weather stations across seven core meteorological parameters — **temperature**, **relative humidity**, **atmospheric pressure**, **wind speed**, **wind direction**, **accumulated precipitation**, and **solar irradiance / illuminance** — producing per-sensor scores (`0–100`), a daily station `qod_score` (`0–1`), and structured diagnostic annotations.

## 1. Why QoD Evolved from v1 to v3

Legacy **QoD v1** (`0.0.5`) split evaluation into a daily OBC/SQC check and a trailing 7-day rolling Indoor Station Detector (ISD). While effective for catching basic out-of-bounds and flatline faults, v1 had key structural limitations:

- **7-day recovery lag:** Because ISD averaged over a 7-day trailing window, stations moved outdoors or repaired remained penalized for nearly a week.
- **No spatial cross-validation:** Drifting barometers, biased temperature sensors, and clogged rain gauges that stayed inside manufacturer bounds still scored near `100%`.
- **Hardware cadence edge cases:** Multi-minute LoRaWAN intervals (Helium 180s) and high-frequency intervals (Pulse 30s) required hardware-aware aggregation.

**QoD v3** solves all three by combining single-day (`24h`) self-sanity checks, adaptive spatial neighbor cross-validation, elevation-safe synoptic pressure tracking, and an **immutable `D-1` state machine** with 2-day confirmation hysteresis.

## 2. Architecture Overview

QoD v3 runs four sequential stages per UTC day:

1. **Hardware-Aware Telemetry Ingestion & Normalization:**
   - Enforces exact UTC day boundaries and filters sensor sentinel values before aggregation.
   - Handles each hardware bundle's native cadence cleanly (`M5`/`D1` 60s, `Helium H1/H2` 180s interval-aware precipitation recovery, `Pulse` 30s circular wind-direction vector averaging via `atan2` with an antipodal cancellation guard).
2. **Self-Sanity Checks (OBC & SQC):**
   - **Out-of-Bounds (`OBC`):** Flags physically impossible or out-of-spec values per sensor.
   - **Completeness (`NO_DATA`):** Measures missing observation slots relative to each hardware model's expected cadence.
   - **Gap-Aware Spikes (`SPIKE_INST`):** Flags abrupt, physically unrealistic step changes between consecutive readings without penalizing legitimate jumps across transmission gaps.
   - **Flatline / Stagnation (`LONG_CONST`):** Detects sensors stuck at constant values over extended windows (evaluated carefully alongside calm-wind and winter conditions).
3. **Spatial Neighbor Cross-Validation (CQC):**
   - Builds a spatial reference pool of **trusted nearby stations** (stations with verified location, sufficient coverage, non-indoor status, and healthy sensors) using adaptive distance/elevation tiers:
     - **Tier 1:** `25 km` radius (`±300 m` elevation)
     - **Tier 2:** `50 km` radius (`±300 m` elevation)
     - **Tier 3:** `100 km` radius (`±500 m` elevation)
   - Requires at least `3` trusted reference neighbors sharing `≥ 12` matched hours before issuing a spatial fault. Stations without enough nearby peers receive the informational `ISOLATED` flag and are never penalized for missing neighbors.
4. **Deployment Classification & Immutable `D-1` State Hysteresis:**
   - Classifies daily deployment quality (`OUTDOORS`, `BAD_DEPLOYMENT`, `INDOORS`, `PROBLEMATIC_ILL_SENSOR`) from daylight solar irradiance ratios, wind exposure, and temperature/humidity dynamics.
   - Applies multi-day confirmation rules via immutable `D-1 → D` state transitions so a single anomalous day never causes an unfair penalty.

## 3. Elevation-Safe Synoptic Barometer Check

Barometric pressure depends strongly on altitude (`≈12 hPa` per `100 m`). A coarse H3 cell centroid elevation or a user console sea-level pressure offset can create a steady `20–50 hPa` offset even when the barometer is physically healthy.

QoD v3 separates **broken/drifting barometers** from **elevation offsets** using a two-path check:

- **Elevation Trust Guard:** If a station has missing elevation metadata or an unverified `elevation = 0` placeholder with highland pressure (`650–970 hPa`), QoD emits `PRESSURE_REFERENCE_UNCERTAIN` (advisory, zero penalty) and excludes the station from serving as a pressure reference for neighbors.
- **Path 1 — Gross Hardware Fault:** If `≥ 6` observed hours have mean raw pressure `< 650 hPa` (adjusted dynamically for stations above `2,500 m`) or `> 1060 hPa` — and is not corroborated by `≥ 3` nearby peers — the station receives `PRESSURE_DRIFT` (pressure score `0`).
- **Path 2 — Matched-Hour Synoptic Tracking:** Against `≥ 3` trusted peers in the first qualifying tier (`25 / 50 / 100 km`), QoD computes both the steady offset (`offset_hpa`) and the hour-by-hour synoptic tracking error (`synoptic_track_err`, P90 of hourly anomaly mismatch):
  - If `≥ 80%` of matched hours exceed the tier offset threshold (`15 / 15 / 20 hPa`) **and** either `synoptic_track_err > 5.0 hPa` or `offset_hpa > 60 hPa` → **`PRESSURE_DRIFT`** (pressure score `0`).
  - If the offset is steady (`synoptic_track_err ≤ 5.0 hPa` and `offset_hpa ≤ 60 hPa`) → **`PRESSURE_OFFSET_ADVISORY`** (zero score penalty — indicates elevation or console calibration offset rather than a broken sensor).

## 4. State Machine & Hysteresis Rules (`D-1 → D`)

QoD v3 maintains a compact, deterministic per-station state carried from day `D-1` to day `D`:

| Check | Confirmation Rule | Recovery / Clear Rule | Score Impact |
|---|---|---|---|
| **Deployment (`INDOORS` / `BAD_DEPLOYMENT`)** | **2 consecutive days** of the same class (`INDOORS` or `BAD_DEPLOYMENT`) on evaluated days | **2 consecutive `OUTDOORS` days** (or `> 7` unseen days resets to `OUTDOORS`) | `INDOORS_CONFIRMED`: daily `qod_score = 0`. `BAD_DEPLOYMENT_CONFIRMED`: `qod_score × 0.5`. Single-day flags are advisory only. |
| **Stuck Anemometer (`WIND_STUCK`)** | **2 consecutive stuck days** during regional windy events (`t_min > 1°C`, `≥ 3` windy peers within `50 km`) | **2 consecutive normal days** (or cleared while `INDOORS` is confirmed) | Emits `WIND_STUCK_CONFIRMED` (advisory by default in `v3.0.0`). |
| **Clogged Rain Gauge (`BLOCKED_RAIN`)** | **`≥ 2` distinct missed storms** within a 14-day window (multi-day storms count once; requires `≥ 3` wet peers within `15 km`) | **`≥ 2` distinct caught storms** (recording `≥ 0.5 mm` and `≥ 20%` of wet-neighbor median) | Emits `RAIN_BLOCKED_CONFIRMED` (advisory by default in `v3.0.0`). |

### Sub-Zero Winter Protection
When a station's daily average temperature is **`≤ 0°C`**, freezing vetoes prevent ice-locked anemometers or winter snow/cloud cover from triggering false `INDOORS` or `WIND_STUCK` penalties.

## 5. Separation of QoD and Station Photo Verification (SPV)

In QoD v3, **`qod_score` measures strictly meteorological data quality**.

- **SPV** (`SPV_INVALID`, `SPV_OBSTRUCTION`) is logged as informational context in annotations, **never** multiplied into the meteorological `qod_score`.
- Reward policy for SPV (such as the `0.5×` multiplier for `SPV_INVALID`) is applied exclusively inside the [Reward Mechanism](/rewards/reward-mechanism). This keeps meteorological quality scores clean and consistent for both weather forecasts and commercial data consumers.

## 6. Complete QoD v3 Annotation Code Reference

### Score-Reducing Codes (Affect Daily QoD Score)

| Code | Scope | Meaning |
|---|---|---|
| `NO_DATA` | Per-sensor | Missing telemetry packets below the expected hardware cadence |
| `OBC` | Per-sensor | Readings outside physical or sensor manufacturer bounds |
| `SPIKE_INST` | Per-sensor | Unrealistic instantaneous jump between consecutive readings |
| `LONG_CONST` | Per-sensor | Sensor stuck at a constant value over an extended period |
| `TEMP_DRIFT` | Temperature | Persistent temperature bias relative to trusted nearby stations |
| `PRESSURE_DRIFT` | Pressure | Gross barometer fault, extreme offset (`> 60 hPa`), or failure to track synoptic pressure changes (`> 5 hPa` track error) |
| `PROBLEMATIC_ILL_SENSOR` | Illuminance | Corrupted or spiking solar/illuminance sensor readings |
| `INDOORS_CONFIRMED` | Station-level | Confirmed indoor deployment (`2` consecutive days) — sets daily QoD to `0` |
| `BAD_DEPLOYMENT_CONFIRMED` | Station-level | Confirmed heavily obstructed deployment (`2` consecutive days) — applies `0.5×` QoD multiplier |

### Advisory & Informational Codes (Zero QoD Penalty)

| Code | Scope | Meaning |
|---|---|---|
| `INDOORS` / `BAD_DEPLOYMENT` | Station-level | Single-day (day 1) deployment warning — not yet confirmed by 2-day hysteresis |
| `T_OVERHEAT` | Temperature | Midday radiative overheating signature (e.g., short mast over hot roof) |
| `WIND_STUCK` / `WIND_STUCK_CONFIRMED` | Wind | Zero or flat wind during regional windy conditions |
| `BLOCKED_RAIN` / `RAIN_BLOCKED_CONFIRMED` | Precipitation | Zero precipitation recorded during regional storms detected by neighbors |
| `PRESSURE_OFFSET_ADVISORY` | Pressure | Steady altitude or console offset while accurately tracking synoptic pressure changes |
| `PRESSURE_REFERENCE_UNCERTAIN` | Pressure | Missing or unverified elevation metadata prevents spatial sea-level pressure comparison |
| `SPV_INVALID` / `SPV_OBSTRUCTION` | Station / Sensor | Informational SPV status (reward multiplier applied separately in Reward Mechanism) |
| `NO_LOCATION` / `NO_ELEVATION` | Station-level | Missing location or elevation metadata |
| `LOW_SUN` | Station-level | High-latitude low solar angle / polar winter conditions |
| `ISOLATED` | Station-level | Fewer than `3` trusted neighbors within `100 km` (spatial cross-checks abstained) |
