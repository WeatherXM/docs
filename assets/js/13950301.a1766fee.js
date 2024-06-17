"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3067],{8230:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=a(4848),i=a(8453);const o={id:"quality-of-data",title:"Quality of Data (QoD)",sidebar_label:"Quality of Data (QoD)",slug:"/project/quality-of-data"},s=void 0,r={id:"rewards/quality-of-data",title:"Quality of Data (QoD)",description:"QoD is currently on version 1.0. This page serves as both an informational resource about its current status and a glimpse into its future.",source:"@site/docs/rewards/quality-of-data.mdx",sourceDirName:"rewards",slug:"/project/quality-of-data",permalink:"/project/quality-of-data",draft:!1,unlisted:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/rewards/quality-of-data.mdx",tags:[],version:"current",frontMatter:{id:"quality-of-data",title:"Quality of Data (QoD)",sidebar_label:"Quality of Data (QoD)",slug:"/project/quality-of-data"},sidebar:"docs",previous:{title:"Reward Mechanism",permalink:"/reward-mechanism"},next:{title:"Proof of Location  (PoL)",permalink:"/project/proof-of-location"}},l={},d=[{value:"1. Self Check",id:"1-self-check",level:2},{value:"a. Out-of-Bounds Check (OBC)",id:"a-out-of-bounds-check-obc",level:3},{value:"b. Self Quality Check (SQC)",id:"b-self-quality-check-sqc",level:3},{value:"2. Reference Check",id:"2-reference-check",level:2},{value:"Comparative Quality Control (CQC)",id:"comparative-quality-control-cqc",level:3},{value:"3. Deployment Status",id:"3-deployment-status",level:2},{value:"a. Solar Obstacle Detector (SOD)",id:"a-solar-obstacle-detector-sod",level:3},{value:"b. Wind Obstacle Detector (WOD)",id:"b-wind-obstacle-detector-wod",level:3},{value:"c. Indoors Station Detector (ISD)",id:"c-indoors-station-detector-isd",level:3},{value:"QoD Threshold",id:"qod-threshold",level:2},{value:"References",id:"references",level:2}];function c(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"QoD is currently on version 1.0. This page serves as both an informational resource about its current status and a glimpse into its future."})}),"\n",(0,n.jsx)(t.p,{children:"QoD is an algorithm that evaluates the quality of weather data provided by a weather station.\nThe calculated score indicates the confidence level in the quality of the weather data received from a station.\nWe need meaningful and usable data and the QoD score is an attempt to quantify this metric.\nThe end goal is to encourage weather station owners to do their best to comply with the Network's guidelines in order to consistently\nachieve the best QoD score possible."}),"\n",(0,n.jsx)(t.p,{children:"It\u2019s the method we use to assess the quality of each data point we receive from WeatherXM stations.\nQoD involves a series of techniques and processes designed to help us distinguish between expected and unexpected data behaviors."}),"\n",(0,n.jsx)(t.p,{children:"This mechanism includes the following 3 control points and their respective checks:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Self Check","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Out-of-Bounds Check (OBC) (QoD v1.0)"}),"\n",(0,n.jsx)(t.li,{children:"Self Quality Check (SQC) (QoD v1.0)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Reference Check","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Comparative Quality Control (CQC) (QoD v1.3)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Deployment status","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Indoor Station Detector (ISD) (Qod v1.1)"}),"\n",(0,n.jsx)(t.li,{children:"Solar Obstacle Detector (SOD) (QoD v1.2)"}),"\n",(0,n.jsx)(t.li,{children:"Wind Obstacle Detector (WOD) (TBD)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"1-self-check",children:"1. Self Check"}),"\n",(0,n.jsx)(t.p,{children:"Self-check is the basic component of the QoD mechanism, designed to identify common faults within datasets using only the data from the weather station being investigated. Self-check should run once per day. The following steps are included:"}),"\n",(0,n.jsx)(t.h3,{id:"a-out-of-bounds-check-obc",children:"a. Out-of-Bounds Check (OBC)"}),"\n",(0,n.jsx)(t.p,{children:"OBC is a simple process that involves identifying values that fall outside the specifications set by the manufacturer for each sensor.\nAs an example, if the temperature sensor is able to measure within a temperature range of -60 to 60\xb0C, then the value 80\xb0C is considered as faulty."}),"\n",(0,n.jsx)(t.h3,{id:"b-self-quality-check-sqc",children:"b. Self Quality Check (SQC)"}),"\n",(0,n.jsx)(t.p,{children:"SQC is the process that identifies unexpected behaviour in the measured parameters, which could be attributed to a defective sensor or an improper station deployment.\nIt should be noted that OBC is included in SQC as the first step of this process.\nThe final result of this process is the annotation of the data in 3 levels:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Raw (16\u2019\u2019 or else depending on weather station\u2019s specs)"}),"\n",(0,n.jsx)(t.li,{children:"Minute (1\u2019 or 2\u2019 depending on the parameter)"}),"\n",(0,n.jsx)(t.li,{children:"Hourly (aiming to reward each of 24 slots of a day)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The following processes take place (excluding OBC):"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Re-framing the timescale of raw data at a fixed time interval (as raw data may not always be measured at a constant time-step)"}),"\n",(0,n.jsx)(t.li,{children:"Looking for time-slots with no data"}),"\n",(0,n.jsx)(t.li,{children:"Looking for constant data over a certain period (e.g., constant temperature over an hour, or constant wind speed/direction over an hour under freezing -or not- conditions)"}),"\n",(0,n.jsx)(t.li,{children:"Looking for unexpected jumps of consecutive raw data or averaged values of consecutive minutes"}),"\n",(0,n.jsx)(t.li,{children:"Calculating the percentage of valid data within a certain period (minute, hour)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The final result is text/numerical annotations and percentage of valid data over each time-slot in raw/minute/hourly level. Validity for meteorological purposes may differ compared to validity for reward purposes. Thus, there is a final annotation of each hour slot for meteorological and reward purposes."}),"\n",(0,n.jsx)(t.h2,{id:"2-reference-check",children:"2. Reference Check"}),"\n",(0,n.jsx)(t.p,{children:"This part of QoD focuses on comparing the data of a weather station with:"}),"\n",(0,n.jsx)(t.p,{children:"a. Another neighbouring reliable weather station of the WXM network"}),"\n",(0,n.jsx)(t.p,{children:"b. Another neighbouring reliable 3rd party weather station"}),"\n",(0,n.jsx)(t.p,{children:"c. 3rd party post-processed modelled weather data (a process similar to data assimilation)"}),"\n",(0,n.jsx)(t.p,{children:"The Reference Check may be able to detect abnormal behaviour of the parameters measured by a station.\nSuch a control could give insight in the quality of both data and deployment\n(e.g., temperature diurnal cycle of a station agrees with a reference timeseries, temperature of a station is usually higher because it is close to a chimney etc)."}),"\n",(0,n.jsx)(t.h3,{id:"comparative-quality-control-cqc",children:"Comparative Quality Control (CQC)"}),"\n",(0,n.jsx)(t.p,{children:"In order to apply this control we deploy the Comparative Quality Control (CQC),\nwhich falls into an internal and external version depending on the type of data used for the analysis\n(internal -using data owned by WXM- and external -using 3rd party data-).\nReference Check should run once per day together with Self Check."}),"\n",(0,n.jsx)(t.h2,{id:"3-deployment-status",children:"3. Deployment Status"}),"\n",(0,n.jsx)(t.p,{children:"The Deployment Status control can be used as an identifier of the obstacles around a weather station. As solar irradiance and wind are parameters that are fairly sensitive to obstacle interventions, two different processes have been designed to determine the quality of deployment:"}),"\n",(0,n.jsx)(t.p,{children:"a. Solar Obstacle Detector (SOD)"}),"\n",(0,n.jsx)(t.p,{children:"b. Wind Obstacle Detector (WOD)"}),"\n",(0,n.jsx)(t.p,{children:"c. Indoor Station Detector (ISD)"}),"\n",(0,n.jsx)(t.p,{children:"Both processes require a long timeseries typically of a few weeks to a few months, thus they should run once per a few months or a year.\nThis means that the Deployment Status part of QoD can only be used to characterise the deployment of a weather station."}),"\n",(0,n.jsx)(t.h3,{id:"a-solar-obstacle-detector-sod",children:"a. Solar Obstacle Detector (SOD)"}),"\n",(0,n.jsx)(t.p,{children:"This process examines the solar irradiance parameter comparing it with the theoretical solar irradiance expected for a given location and day of the year. Note that the theoretical solar irradiance is the total amount of solar irradiance that arrives at a horizontal surface on the Earth under clear sky conditions.\nBecause of that, a long period of data is required for detecting a totally clear-sky day. This method:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Detects a clear sky day"}),"\n",(0,n.jsx)(t.li,{children:"Compares theoretical and observed solar irradiance on a clear-sky day"}),"\n",(0,n.jsx)(t.li,{children:"Compares observed solar irradiance within a short period (e.g., a 5-day window), in order to find similarities (i.e., systematically decreased solar irradiance at a certain period of day)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The limitations of this method are that:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Only south horizon of a station can be examined for obstacles"}),"\n",(0,n.jsx)(t.li,{children:"The solar angle is different from a season to another, thus different obstacles may be visible at different period of the year"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Despite of such limitations, it is still a useful method for detecting obstacles that may affect solar irradiance, but also the other parameters."}),"\n",(0,n.jsx)(t.h3,{id:"b-wind-obstacle-detector-wod",children:"b. Wind Obstacle Detector (WOD)"}),"\n",(0,n.jsx)(t.p,{children:"As wind is the most demanding (in terms of fulfilling the WMO deployment criteria) parameter, this method should be able to identify any significant obstacles around a weather station."}),"\n",(0,n.jsx)(t.p,{children:"The basic idea is that we collect measurements of significant wind (e.g., >5m/s) of all the 16 direction of wind and then we compare them with wind measurements of a reference station or post processed modelled data. Then, the directions at which wind speed is significantly underestimated are suspicious for obstacles."}),"\n",(0,n.jsx)(t.p,{children:"This mechanism can be used to characterise the general deployment of a weather station, but can also identify the directions that wind measurements may not be reliable."}),"\n",(0,n.jsx)(t.h3,{id:"c-indoors-station-detector-isd",children:"c. Indoors Station Detector (ISD)"}),"\n",(0,n.jsx)(t.p,{children:"The purpose of this mechanism is to identify all the stations located in a house or a box.\nThis process requires solar irradiance, latitude, longitude and day of the year."}),"\n",(0,n.jsx)(t.h2,{id:"qod-threshold",children:"QoD Threshold"}),"\n",(0,n.jsx)(t.p,{children:"QoD_Threshold is a rational number in the range [0,1].\nThis number indicates the minimum QoD score a station must have on a given day in order to be eligible for rewards."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"QoD score is a rational number in the range [0,1]"})}),"\n",(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://weatherxm.network/",children:"WeatherXM Network"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://medium.com/weatherxm/weatherxm-qod-quality-of-data-simplified-b5a42aee7367",children:"QoD Simplified - Medium article"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.google.com/document/d/e/2PACX-1vRAkDVFpRxqZyP0CAAEtqxtE61VTpAnP02k25BB25F9HUcvIILwBX4-gKt6YP4f1L3mSN2SLNK5aKzJ/pub",children:"Technical description of the process for QoD v1.0"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>r});var n=a(6540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);