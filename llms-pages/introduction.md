# Introduction

Canonical: https://docs.weatherxm.com/introduction

How the WeatherXM network works — signed, GPS-verified station data, QoD v3 data quality, daily $WXM rewards, WeatherXM Pro, and current station models.

<h1>Introduction to WeatherXM</h1>
    <h2 className="subtitle">
      WeatherXM creates an entirely new weather data economy that rewards people
      who deploy and maintain weather stations.
    </h2>
  

  

## Introduction

**WeatherXM** is a unique weather network that relies on the power of the community to deploy and maintain weather stations.
By doing so, participants not only contribute to the network's growth but also get rewarded with the WXM token.
The network is EVM compatible and is deployed on [Arbitrum One](https://arbiscan.io/token/0xb6093b61544572ab42a0e43af08abafd41bf25a6).

WeatherXM has a vision to become the largest, most decentralised, and most distributed weather network in the world.
You can stay updated on the current state of the network on the [Explorer](https://explorer.weatherxm.com), and manage your own stations, live diagnostics, history, and rewards in the [WeatherXM Web App](https://app.weatherxm.com) ([see guide](/mobile-app/web-app)).

### Reward Mechanism

Current [Reward Mechanism v2.0](/rewards/reward-mechanism) includes significant improvements over previous versions.
Business Boost rewards have been added, with predefined criteria for fairness.
A Merkle Tree structure has been implemented for transparent reward distribution.
Users can withdraw their rewards whenever they choose to do so.
The Merkle Tree structure facilitates a verifiable and transparent mechanism for users to validate reward distribution.
These improvements aim to refine the Reward Mechanism, making it more inclusive, nuanced, and transparent to build trust among weather station owners participating in the network.
More on [Reward Mechanism](/rewards/reward-mechanism).

### Weather stations

WeatherXM weather stations are not generic sensors. They are purpose-built devices designed to operate as trusted, upgradeable data sources in a decentralised network.

All stations run custom WeatherXM firmware that is remotely updateable (FOTA updates). This allows continuous improvement of measurement techniques, calibration logic, and data processing without hardware replacement. The same update mechanism is also used to add new features over time, keeping deployed stations up to date and allowing improvements to be rolled out across the entire network in controlled way.

Every data point produced by a station is cryptographically signed at the source. Stations sample environmental data every 16–20 seconds (depending on the model), then aggregate these high-frequency readings inside the device into 1–3 minute data packets (depending on the configured mode) before signing and transmission. This signature proves that the data originated from a specific physical station and that it has not been altered in transit or storage. As a result, users can verify authenticity rather than rely on trust assumptions.

Each station also includes a GPS receiver. The reported location is cryptographically signed and can be verified ensuring that both the measurements and their geographic location originate from the device. This prevents location spoofing and enforces the integrity of hyperlocal weather data across the network.

Together, remote upgradable firmware, on device cryptographic signing, and GPS backed location verification form the technical foundation that differentiates WeatherXM stations and enables a verifiable, high quality weather data economy.

### Data Quality

[Data Quality](/rewards/data-quality) is an algorithm that assesses the quality of weather data provided by a weather station. The score it generates shows how confident we can be in the quality of the data received. Our goal is to make sure that the data we receive is meaningful and usable, and the Data Quality score helps us measure this metric. Ultimately, we want to encourage weather station owners to follow our guidelines so that they can consistently achieve the best possible Data Quality score.

To achieve this, Data Quality Algorithm relies on a range of techniques and processes designed to help us differentiate between expected and unexpected data behaviors.
More on [Data Quality](/rewards/data-quality).

### WeatherXM Pro

[WeatherXM Pro](/weatherxm-pro) is our premium service that provides enhanced access to hyperlocal weather data, advanced analytics,
and integration-ready tools — designed for professionals, developers, and businesses that rely on accurate, location-specific forecasts and hyperlocal data.

### WeatherXM Devices

Current WeatherXM station families:

- [WeatherXM D1 bundle (WB1200)](/wxm-devices/d1/introduction) — Wi-Fi
- [WeatherXM Pulse bundle (WB3000)](/wxm-devices/pulse/introduction) — 4G/LTE
- [WeatherXM H2 / H2 Open Edition](/wxm-devices/h2-open/introduction) — LoRaWAN

Legacy devices: [M5 bundle (WB1000)](/wxm-devices/m5/introduction) (Wi-Fi) and [Helium station (WS2000)](/wxm-devices/helium/introduction) (Helium LoRaWAN).

Compare current models and order at [weatherxm.com/stations](https://weatherxm.com/stations).
