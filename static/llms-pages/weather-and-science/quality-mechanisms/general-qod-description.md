# General QoD Description (QoD v3 & SPV)

Canonical: https://docs.weatherxm.com/weather-and-science/quality-mechanisms/general-qod-description

# General QoD Description (QoD v3 & SPV)

WeatherXM evaluates station data reliability and deployment quality using two complementary mechanisms:

- **Quality of Data (QoD v3):** A daily, deterministic meteorological quality engine that evaluates sensor telemetry, cross-validates readings against nearby trusted stations, and classifies deployment quality with 2-day confirmation hysteresis.
- **Station Photo Verification (SPV):** A human-reviewed evaluation of installation photos submitted by the station owner against World Meteorological Organization (WMO) siting guidelines.

Although both mechanisms affect daily rewards, their primary objectives are:
- To determine which stations produce data reliable enough for internal WeatherXM analytics as well as third-party B2B/enterprise weather products.
- To motivate station owners to improve their deployments and maintain healthy sensors.
- To ensure observations are high enough quality to improve hyperlocal weather forecasts.

## Quality of Data (QoD v3)

**QoD v3** (`version 3.0.0`) runs once per day for the previous UTC day and evaluates all seven meteorological parameters (temperature, humidity, pressure, wind speed, wind direction, precipitation, and solar irradiance/illuminance). It combines three layers into a single daily meteorological `qod_score` (`0` to `1`):

### 1. Self-Sanity Checks (OBC & SQC)
Evaluates each station's own telemetry stream at hardware-appropriate intervals:
- **Out-of-Bounds (`OBC`):** Flags values outside physical or manufacturer specifications.
- **Data Completeness (`NO_DATA`):** Measures missing telemetry relative to the station model's expected cadence.
- **Gap-Aware Spikes (`SPIKE_INST`):** Flags physically unrealistic jumps between consecutive measurements.
- **Flatline / Stagnation (`LONG_CONST`):** Detects sensors stuck at constant values over extended windows.

### 2. Spatial Neighbor Cross-Validation (CQC)
Compares each station against trusted nearby WeatherXM stations across adaptive tiers (`25 km`, `50 km`, `100 km`):
- **Temperature & Pressure Drift (`TEMP_DRIFT`, `PRESSURE_DRIFT`):** Catches persistent sensor bias and drifting barometers that remain inside manufacturer range limits.
- **Elevation-Safe Synoptic Barometer Tracking:** Mountain stations or stations with coarse elevation metadata are not penalized for a constant altitude offset if they accurately track hour-by-hour synoptic pressure changes (`PRESSURE_OFFSET_ADVISORY`).
- **Stuck Wind & Clogged Rain Checks (`WIND_STUCK`, `BLOCKED_RAIN`):** Flags anemometers reading zero during regional windy events and rain gauges reading zero during regional storms.

### 3. Deployment Classification & 2-Day Hysteresis
Replaces the legacy 7-day rolling ISD window with daily classification plus **2-day confirmation hysteresis**:
- A single anomalous day emits an **advisory** flag only (`INDOORS` / `BAD_DEPLOYMENT`) with **zero penalty**.
- **2 consecutive days** confirm the classification (`INDOORS_CONFIRMED` sets daily QoD to `0`; `BAD_DEPLOYMENT_CONFIRMED` applies a `0.5×` multiplier).
- **2 consecutive clean days** clear the penalty once the deployment is fixed.
- **Sub-zero winter protection (`avg_T ≤ 0°C`):** Prevents frozen anemometers in winter from triggering false `INDOORS` or `WIND_STUCK` penalties.

For full thresholds, state transitions, and the complete annotation reference, see **[QoD v3 Full Documentation](/weather-and-science/quality-mechanisms/qod-v3-documentation)**.

Table 1. Key QoD v3 annotations and their impact on daily QoD score.

| QoD v3 Annotation | Short Description | Impact on QoD Score |
|---|---|---|
| `NO_DATA` | Missing packets below expected hardware cadence | **YES** (per-sensor) |
| `OBC` | Sensor readings outside physical/manufacturer bounds | **YES** (per-sensor) |
| `SPIKE_INST` | Unrealistic instantaneous jump between readings | **YES** (per-sensor) |
| `LONG_CONST` | Sensor stuck at a constant value for too long | **YES** (per-sensor) |
| `TEMP_DRIFT` | Persistent temperature bias vs nearby trusted stations | **YES** (temperature) |
| `PRESSURE_DRIFT` | Broken/drifting barometer or failure to track synoptic pressure | **YES** (pressure) |
| `PROBLEMATIC_ILL_SENSOR` | Corrupted or spiking solar/illuminance sensor | **YES** (illuminance) |
| `INDOORS_CONFIRMED` | Confirmed indoor station (`2` consecutive days) | **YES** (`qod = 0`) |
| `BAD_DEPLOYMENT_CONFIRMED` | Confirmed heavily obstructed deployment (`2` consecutive days) | **YES** (`qod × 0.5`) |
| `INDOORS` / `BAD_DEPLOYMENT` | Single-day (day 1) deployment warning | **NO** (advisory) |
| `T_OVERHEAT` | Midday radiative overheating signature | **NO** (advisory) |
| `WIND_STUCK` / `BLOCKED_RAIN` | Suspected stuck anemometer or clogged rain gauge | **NO** (advisory) |
| `PRESSURE_OFFSET_ADVISORY` | Steady altitude/console offset with good synoptic tracking | **NO** (advisory) |
| `PRESSURE_REFERENCE_UNCERTAIN` | Missing/unverified elevation prevents sea-level pressure comparison | **NO** (advisory) |
| `LOW_SUN` / `ISOLATED` | High-latitude low sun or `< 3` nearby peers within `100 km` | **NO** (informational) |

:::info Legacy QoD v1 Documentation
Looking for the original OBC-SQC and 7-day ISD specifications? They remain available for historical reference under [Quality Mechanisms](/weather-and-science/quality-mechanisms/).
:::

## Station Photo Verification (SPV)

At WeatherXM, we aim to ensure that all station installations in our network follow, as closely as possible, the guidelines set by the <a href="https://www.eoas.ubc.ca/courses/atsc303/Instruments/wmo_guides/CIMO_Guide_2014-Met_Site_Classification.pdf" target="_blank">World Meteorological Organization (WMO)</a> (see also [our obstacle experiment](/weather-and-science/r&d/obstacle-impact-on-temp-and-wind.mdx)). The SPV mechanism evaluates the deployment of each station as depicted in the photos submitted by the user through the mobile app. Through SPV, seven key aspects of the photos are examined in order to assess both the overall deployment and the extent to which each parameter can be measured accurately.

In QoD v3, **SPV is cleanly separated from meteorological QoD**: your station's meteorological `qod_score` reflects pure sensor and siting telemetry quality, while SPV reward policy (such as the `0.5×` multiplier for invalid SPV) is applied separately in the [Reward Mechanism](/rewards/reward-mechanism).

Each photo receives a score for each of the 5 scorable aspects, and then the average score per photo is calculated. Finally, the average score of the 4 photos (one for each cardinal direction) determines the final SPV score. If there is no photo for a specific cardinal direction, the score for that direction is considered zero. The SPV scoring rules and guidelines are comprehensively described in [this document](/weather-and-science/quality-mechanisms/spv-full-documentation).

Table 2. The SPV aspects, their short description and the available score options.

| SPV Aspect | Short Description | Score Options |
|---|---|---|
| Photo Validity | Evaluation of whether the photo meets the standards set by the company | 0, 0.5, 1 |
| Temperature/Relative Humidity | Evaluation of the validity of the temperature and relative humidity measurements | 0, 0.5, 1 |
| Wind | Evaluation of the validity of the wind measurements | 0, 0.5, 1 |
| Precipitation | Evaluation of the validity of the precipitation measurements | 0, 0.5, 1 |
| Solar Irradiance | Evaluation of the validity of the solar irradiance measurements | 0, 0.5, 1 |
| Mast Height | Evaluation of the relative mast height in relation to the objects in the surrounding area | - |
| Mast Inclination | Classification of a visibly tilted mast toward a specific direction | - |
