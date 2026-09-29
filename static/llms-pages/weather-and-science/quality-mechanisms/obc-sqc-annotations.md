# OBC and SQC Annotations

Canonical: https://docs.weatherxm.com/weather-and-science/quality-mechanisms/obc-sqc-annotations

# Out-of-Bounds (OBC) and Self Quality Checks (SQC) Annotations

The QoD algorithm produces annotation codes associated with various weather parameters to provide a detailed description of a specific condition for each parameter. These codes serve as a standard format of communication between the various services that use them and they will be mapped to user-friendly messages on the clients.

## Parameters under Investigation

The following is a table of all parameters characterized by QoD.

<b>Table – Parameters considered in the analysis</b>

  
    
      Parameter
      Index
    
  
  
    
      Temperature
      1
    
    
      Humidity
      2
    
    
      Wind speed
      3
    
    
      Wind direction
      4
    
    
      Pressure
      5
    
    
      Illuminance
      6
    
    
      Accumulated precipitation
      7
    
  

## Hourly Level Annotation

<b>Table – List of annotations and their definitions</b>

  
    
      Annotation
      Annotation code
      Derives from level
      Applies to
      Description
      Version
    
  
  
    
      OBC
      OBC
      Raw
      All parameters
      Values out of bounds, related to the sensor’s spec. Faulty sensor or firmware.
      1.0.0
    
    
      Raw spikes
      SPIKE_INST
      Raw
      All except precipitation and wind direction
      Two consecutive values vary more than physically possible. Faulty sensor or bad deployment.
      1.0.0
    
    
      No median
      NO_MEDIAN
      Raw
      All except precipitation and wind direction
      Not enough data points to infer the median value of the aggregated time window. Connection issues (internet or Helium network). Useful also to identify the reason for spikes.
      &lt;=1.0.2
    
    
      Unidentified spikes
      UNIDENTIFIED_SPIKE
      Raw
      All except precipitation and wind direction
      Two consecutive values vary more than physically possible, but not enough data points to infer the median and identify which values are erroneous. Faulty sensor or bad deployment.
      &gt;=1.0.4
    
    
      N/A data
      NO_DATA
      Raw
      All parameters
      No data in the aggregated time window. Connection issues (internet or Helium network).
      1.0.0
    
    
      Short Constant
      SHORT_CONST
      Raw
      All except precipitation
      Value not changed in the aggregated time window, shorter than the entire reference day (e.g. a few hours). Faulty sensor or bad deployment.
      1.0.0
    
    
      Long Constant
      LONG_CONST
      Raw
      All except humidity, illuminance, precipitation
      Value not changed for 24 hours. Faulty sensor or bad deployment.
      1.0.0
    
    
      Frozen Sensor
      FROZEN_SENSOR
      Raw
      Wind speed and wind direction
      Not measuring wind speed, wind direction is constant and temperature below zero. Frozen sensor.
      1.0.0
    
    
      Minute Spikes
      ANOMALOUS_INCREASE
      Minute
      All except precipitation and wind direction
      Two consecutive minute averages vary more than physically possible. Bad deployment (possible) / Faulty Sensor (less possible).
      1.0.0
    
    
      Unidentified change
      UNIDENTIFIED_ANOMALOUS_CHANGE
      Minute
      All except precipitation and wind direction
      Two consecutive values vary more than physically possible, but not enough data points to infer the median and identify which values are erroneous. Bad deployment (possible) / Faulty Sensor (less possible).
      &gt;=1.0.4
    
  

Note that there are two spike annotations. The one arises in raw level and the other in minute level. In order to distinguish between them, we refer to the raw spike annotation as SPIKE_INST and to the minute spike as ANOMALOUS_INCREASE. Thus, SPIKE_INST implies that there was an instant spike in one or more of the data packets that we received and is highly likely to be due to faulty sensor and less (but still) likely to be due to bad deployment. On the other hand, ANOMALOUS_INCREASE implies that there was suspicious change when comparing consecutive minute averages. This could be possibly due to bad deployment (e.g., gradual increase in temperature due to a chimney that started working), but we cannot exclude the case of faulty sensor.
UNIDENTIFIED_SPIKE and UNIDENTIFIED_ANOMALOUS_CHANGE label all values that appear suspicious for spikes or dips, in contrast to "SPIKE_INST" and "ANOMALOUS_INCREASE" annotations, which exclusively label the spike or dip value itself. This implies that the user will receive a different Quality of Data (QoD) score if either of the first two annotations is activated, compared to the two latter annotations.
