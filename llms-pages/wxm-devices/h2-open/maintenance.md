# Maintenance of WeatherXM H2 Open Edition (WS2001)

Canonical: https://docs.weatherxm.com/wxm-devices/h2-open/maintenance

Periodic maintenance ensures that the sensor array continues to record accurate observations and that the solar collector and power systems operate without disruption.

The recommended maintenance routine is summarised below:

### 1. Rain Gauge Funnel & Tipping Bucket
Clean the rain gauge at least once every 3 months.
- Rotate the rain funnel counter-clockwise and lift it off to expose the tipping bucket mechanism.
- Clean the funnel and internal cavity with a damp cloth, removing leaves, dirt, dust, and insects.
- Check the small drain holes at the bottom of the sensor housing to ensure rainwater drains freely.
- Ensure the tipping spoon moves freely without obstruction.

  ![Maintenance diagram](image)

:::caution
Do not manually swing the tipping spoon vigorously while the station is in service if your downstream application triggers alerts on sudden high rainfall rates.
:::

### 2. Solar Panel
Wipe the surface of the solar collector at least once every 3 months using a damp cloth. Dust, bird droppings, or pollen build-up can reduce charging efficiency during overcast winter days.

### 3. Radiation Shield & Sensors
Inspect the radiation shield every 6 to 12 months. Remove any spiderwebs, debris, or insects lodging between the louvers to maintain unrestricted natural airflow around the temperature, humidity, and barometric pressure sensors.

### 4. Battery Inspection
- Inspect the AA batteries annually (or every 3–6 months in extreme freezing environments).
- If battery voltage drops (monitored via your decoded LoRaWAN battery telemetry field or the [BLE web flasher](https://flasher.weatherxm.com)), replace all AA batteries with a fresh set of non-rechargeable 1.5V batteries (Lithium recommended).
