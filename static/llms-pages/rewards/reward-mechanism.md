# Reward Mechanism

Canonical: https://docs.weatherxm.com/rewards/reward-mechanism

## Introduction

:::info
WeatherXM runs **Reward Mechanism v2.0** on Arbitrum One, combining daily **QoD v3** meteorological scoring, **Proof of Location (PoL)**, **Station Photo Verification (SPV)**, **Cell Capacity (CC)**, **Business Boosts**, and verifiable **Merkle Tree** claims via **[claim.weatherxm.com](https://claim.weatherxm.com)**.
:::

Every day, the Reward Mechanism evaluates all claimed weather stations for the previous UTC day, allocates daily base rewards and any active boost rewards to each owner's connected wallet, and publishes a Merkle root on-chain to the **RewardPool** smart contract. Station owners can inspect their daily breakdown in the **[WeatherXM Web App](https://app.weatherxm.com)** (**Rewards** tab) or Mobile App, and withdraw accumulated `$WXM` tokens whenever they choose.

## Daily Rewards Calculation Process (v2.0)

Each daily run executes four phases:

1. **Base Rewards Calculation**
2. **Reward Boosts Calculation**
3. **Cumulative Rewards Allocation (per Wallet)**
4. **Merkle Tree Generation & On-Chain Root Submission**

### 1. Base Rewards Calculation

To be eligible for daily base rewards, a station must meet three baseline criteria:

- **Connected EVM Wallet:** The station owner has an active EVM (`0x…`) wallet address configured in **[app.weatherxm.com/profile](https://app.weatherxm.com/profile)** or the Mobile App. (If no wallet is set, daily rewards are not allocated.)
- **Data Quality (QoD v3) ≥ `data_quality_threshold`:** Daily meteorological data quality score (`0` to `1`) produced by [QoD v3](/rewards/data-quality).
- **Proof of Location (PoL) ≥ `pol_threshold`:** Daily location verification score (`0` to `1`) produced by [Proof of Location](/rewards/proof-of-location).

#### Scoring Factors

- **[Data Quality (QoD v3)](/rewards/data-quality):** Evaluates meteorological reliability via self-sanity checks, spatial neighbor cross-validation (`25–100 km`), and 2-day deployment hysteresis (`INDOORS_CONFIRMED` sets `qod_score = 0`; `BAD_DEPLOYMENT_CONFIRMED` applies `0.5×`).
- **[Station Photo Verification (SPV)](/weather-and-science/quality-mechanisms/spv-full-documentation):** Applied directly inside the Reward Mechanism (separate from meteorological QoD). Stations with invalid SPV (`SPV_INVALID`) receive a `0.5×` reward multiplier until valid installation photos are approved.
- **[Proof of Location (PoL)](/rewards/proof-of-location):** Verifies that GPS/location packets match the declared station location. Relocating a station triggers a temporary relocation penalty and resets cell seniority.
- **[Hardware Class (HC)](/rewards/hardware-class):** Groups approved weather station bundles (`M5`, `D1`, `Pulse`, `Helium H1/H2`). Currently all Hardware Classes carry equal weight (`1.0`).
- **[Cell Capacity (CC)](/rewards/cell-capacity):** Each H3 resolution-7 cell has a maximum number of rewardable stations (`capacity`). If more than `capacity` eligible stations are active in a cell, stations are ranked first by `reward_score` and then by seniority (`claimedAt`), and only the top `capacity` stations earn base rewards.

#### Daily Calculation Flow

```text
// 1. Evaluate eligibility & reward score per station
for cell in cells:
  eligible = []
  for device in cell:
    if isEmpty(device.owner.wallet):
      device.reward_reason = 'NO_WALLET'
      continue
    if device.qod_score < data_quality_threshold:
      device.reward_reason = 'DATA_QUALITY_THRESHOLD'
      continue
    if device.pol_score < pol_threshold:
      device.reward_reason = 'POL_THRESHOLD'
      continue

    spv_multiplier = 0.5 if device.spv_status == 'SPV_INVALID' else 1.0
    device.reward_score = device.pol_score * device.qod_score * spv_multiplier
    eligible.push(device)

  // 2. Enforce Cell Capacity (ranked by reward_score, tie-break by claimedAt seniority)
  eligible.sort((a, b) =>
    a.reward_score == b.reward_score ? a.claimedAt - b.claimedAt : b.reward_score - a.reward_score
  )

  for (device, rank) in eligible:
    if rank >= cell.capacity:
      device.reward_score = 0
      device.reward_reason = 'MAX_CAPACITY_REACHED'
      device.base_reward = 0
    else:
      rewardable[device.hardware_class].push(device)

// 3. Allocate daily emission across rewardable stations by Hardware Class weight
total_weights = sum(hc.count * hc.weight for hc in rewardable)
for hc in rewardable:
  hc.max_reward = daily_emission * hc.weight / total_weights
  for device in hc.devices:
    device.base_reward = device.reward_score * hc.max_reward

// 4. Add active Reward Boosts (e.g., Cell Bounties, Compensation Rewards)
for boost in active_boosts:
  for device in boost.devices:
    device.boost_reward += boost.daily_reward

// 5. Sum per active wallet & submit Merkle root on-chain
for user in users:
  if user.active_wallet:
    wallet_cumulative[user.active_wallet] += sum(d.base_reward + d.boost_reward for d in user.devices)

submit_merkle_root(build_merkle_tree(wallet_cumulative))
```

### 2. Reward Boosts Calculation

In addition to base rewards, eligible devices can earn extra `$WXM` tokens from active [Reward Boosts](/rewards/reward-boosts) (such as **Cell Bounties** or **Compensation Rewards**), funded from the Business Development Pool.

### 3. Cumulative Rewards & Merkle Tree Distribution

All daily base and boost rewards are accumulated per connected wallet address. A Merkle Tree of `(wallet, cumulative_amount)` leaves is constructed daily and its root hash is submitted on-chain to the **RewardPool** smart contract on Arbitrum One.

## Withdrawing Rewards

Station owners can claim any portion of their accumulated rewards at any time — with no lockups or expiry — via:

- **[claim.weatherxm.com](https://claim.weatherxm.com/)** (desktop/mobile browser with MetaMask or WalletConnect)
- **WeatherXM Mobile App** (My Profile → Claim)
- Direct interaction with the **RewardPool** smart contract using Merkle proofs.

See the step-by-step **[How to Claim Rewards](/rewards/rewards-claiming)** guide.

## Smart Contracts Architecture

- **`WeatherXM` (`$WXM`):** ERC-20 token contract on Arbitrum One (`0xb6093b61544572ab42a0e43af08abafd41bf25a6`).
- **`RewardPool`:** Smart contract holding allocated `$WXM` rewards and verifying Merkle proofs on withdrawal.
- **`RewardVault`:** Smart contract holding the emission pool that funds `RewardPool` daily.
- **`BusinessDevelopmentPool`:** Wallet funding active Boost programs and holding unallocated daily leftovers.

## Historical Versions (Deprecated)

<details>
<summary>Reward Mechanism v1.5 &amp; v1.0 (Pre-Mainnet / Historical Reference)</summary>

- **Reward Mechanism v1.5 (Deprecated):** Introduced Data Quality (`v1.0`), Proof-of-Location (PoL), Hardware Classes (HC), and Cell Capacity (CC) for daily base reward scoring (`reward_score = pol_score * data_quality_score`), prior to Merkle Tree withdrawals, Business Boosts, and SPV integration.
- **Reward Mechanism v1.0 (Deprecated — Testnet):** Initial testnet mechanism that distributed daily testnet tokens via bulk transfers based solely on hourly connectivity (`reward_score = hours_with_data / 24`) and having a connected wallet.

</details>

## Related Guides

- [Data Quality (QoD v3)](/rewards/data-quality)
- [Proof of Location (PoL)](/rewards/proof-of-location)
- [Station Photo Verification (SPV)](/weather-and-science/quality-mechanisms/spv-full-documentation)
- [Cell Capacity (CC)](/rewards/cell-capacity)
- [Hardware Class](/rewards/hardware-class)
- [Reward Boosts](/rewards/reward-boosts)
- [How to Claim Rewards](/rewards/rewards-claiming)
- [Rewards Troubleshooting](/rewards/rewards-troubleshooting)
