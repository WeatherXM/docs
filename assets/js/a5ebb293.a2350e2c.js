"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5012],{1077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"wxm-devices/pulse/troubleshooting","title":"Troubleshooting of Pulse Bundle (WB3000)","description":"Weather Station","source":"@site/docs/wxm-devices/pulse/troubleshooting.mdx","sourceDirName":"wxm-devices/pulse","slug":"/wxm-devices/pulse/troubleshooting","permalink":"/wxm-devices/pulse/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/WeatherXM/docs/blob/main/docs/wxm-devices/pulse/troubleshooting.mdx","tags":[],"version":"current","frontMatter":{"title":"Troubleshooting of Pulse Bundle (WB3000)","sidebar_label":"Troubleshooting"},"sidebar":"docs","previous":{"title":"Maintenance","permalink":"/wxm-devices/pulse/maintenance"},"next":{"title":"Deployment Examples","permalink":"/wxm-devices/deployment-examples"}}');var i=n(4848),a=n(8453);n(1306);const s={title:"Troubleshooting of Pulse Bundle (WB3000)",sidebar_label:"Troubleshooting"},r=void 0,l={},h=[{value:"Weather Station",id:"weather-station",level:2},{value:"Data Gaps",id:"data-gaps",level:3},{value:"Station Battery Level is Low",id:"station-battery-level-is-low",level:3},{value:"Temperature looks higher than expected.",id:"temperature-looks-higher-than-expected",level:3},{value:"Other variables, such as wind direction, wind speed, rain height and humidity do not align with an official weather reporting station",id:"other-variables-such-as-wind-direction-wind-speed-rain-height-and-humidity-do-not-align-with-an-official-weather-reporting-station",level:3},{value:"One or more variables are extremely high, low, or constant for long periods of time.",id:"one-or-more-variables-are-extremely-high-low-or-constant-for-long-periods-of-time",level:3},{value:"Reported pressure appears to be very low relatively to other reference stations of national or private networks etc.",id:"reported-pressure-appears-to-be-very-low-relatively-to-other-reference-stations-of-national-or-private-networks-etc",level:3},{value:"GPS Location",id:"gps-location",level:2},{value:"Location not verified",id:"location-not-verified",level:3},{value:"Other Issues",id:"other-issues",level:2},{value:"My WG3000 Gateway is stuck/unresponsive.",id:"my-wg3000-gateway-is-stuckunresponsive",level:3},{value:"Why is my station showing offline?",id:"why-is-my-station-showing-offline",level:3}];function c(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"weather-station",children:"Weather Station"}),"\n",(0,i.jsx)(t.h3,{id:"data-gaps",children:"Data Gaps"}),"\n",(0,i.jsx)(t.p,{children:'If the error message "Data gaps" is displayed on the mobile app, the WG300 Gateway is not receiving RF signals.\nThis can be due to a variety of reasons.'}),"\n",(0,i.jsxs)(t.p,{children:["First make sure you WG3000 Gateway frequency matches your weather station (see ",(0,i.jsx)(t.a,{href:"/wxm-devices/pulse/connect-and-claim#change-frequency-optional",children:"Change frequency"}),")"]}),"\n",(0,i.jsxs)(t.p,{children:["Check the LED on the weather station (see ",(0,i.jsx)(t.a,{href:"/wxm-devices/pulse/assemble",children:"Reset Button and LED Indicator"}),") for flashing.\nThe LED should flash every 20 seconds."]}),"\n",(0,i.jsx)(t.p,{children:"If the LED is not flashing every 20 seconds, replace the batteries in the weather station.\nIf the batteries were recently replaced, check the polarity."}),"\n",(0,i.jsx)(t.p,{children:"If the above does not solve the issue, there may be a temporary loss of communication due to reception loss related to interference or other location factors.\nMake sure you use lithium non-rechargeable batteries, especially in case of cold weather environments."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"With the weather station array and WG3000 Gateway 3m/10ft away from each other,\nremove the batteries from the weather station and wait 10 seconds. Put the batteries back in."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Try to place the WG3000 Gateway at the desirable point and check that it receives data."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"If you still have intermittent problems, move the weather station and the WG3000 Gateway closer together,\nbut not closer than 1.5m/5ft or further than 50m/164ft.\nAlso check that there are no metal barriers like aluminum siding\nor metal wall framing along the line of sight between the weather station and WG3000 Gateway.\nRelocate the weather station and WG3000 Gateway as necessary to avoid obstacles.\nDepending on natural barriers you may also have to move the weather station higher and/or closer."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"It is recommended to place the WG3000 Gateway on the same pole as the weather station."})}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(t.h3,{id:"station-battery-level-is-low",children:"Station Battery Level is Low"}),"\n",(0,i.jsx)(t.p,{children:'If your Mobile App reports "Station Battery Level is Low" on the screen, the weather station will run out of battery soon.'}),"\n",(0,i.jsx)(t.p,{children:"Replace the batteries of the weather station. Make sure you use lithium non-rechargeable batteries, especially in case of cold weather environments."}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(t.h3,{id:"temperature-looks-higher-than-expected",children:"Temperature looks higher than expected."}),"\n",(0,i.jsxs)(t.p,{children:["If the temperature is slightly higher (e.g., +2 - 5\xb0C/35-41\xb0F) than expected,\nthen assure that the weather station is within a significant distance from heat sources\nlike ventilation systems and active chimneys.\nAlso make sure that the weather station is mounted on a 2m/6.5ft (or more) metallic pole and there are no obstacles close by reading ",(0,i.jsx)(t.a,{href:"/wxm-devices/pulse/install-weather-station#best-practices-for-proper-station-installation",children:"Best Practices for Proper Station Installation"}),"."]}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(t.h3,{id:"other-variables-such-as-wind-direction-wind-speed-rain-height-and-humidity-do-not-align-with-an-official-weather-reporting-station",children:"Other variables, such as wind direction, wind speed, rain height and humidity do not align with an official weather reporting station"}),"\n",(0,i.jsxs)(t.p,{children:["Even weather stations, which are close to each other, may obtain slightly different measurements,\nespecially for the variables of wind speed and wind direction. However, you should not expect significant deviations\ne.g., from a weather station, which is located within a distance of 1km/0.6mi.\nIf there are deviations, please check ",(0,i.jsx)(t.a,{href:"/wxm-devices/pulse/install-weather-station#best-practices-for-proper-station-installation",children:"Best Practices for Proper Station Installation"})," for guidelines about the installation of the weather station."]}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(t.h3,{id:"one-or-more-variables-are-extremely-high-low-or-constant-for-long-periods-of-time",children:"One or more variables are extremely high, low, or constant for long periods of time."}),"\n",(0,i.jsx)(t.p,{children:"If you notice that some variables are extreme or constant it is possible you need to replace the batteries of the weather station. Make sure you use lithium non-rechargeable batteries, especially in case of cold weather environments."}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(t.h3,{id:"reported-pressure-appears-to-be-very-low-relatively-to-other-reference-stations-of-national-or-private-networks-etc",children:"Reported pressure appears to be very low relatively to other reference stations of national or private networks etc."}),"\n",(0,i.jsx)(t.p,{children:"For now we present only the absolute pressure and not the Mean Sea Level Pressure (MSLP). That means that the displayed pressure are affected by the elevation of your area. We work to consider the elevation given by your GPS in order to show the MSLP, which is commonly used."}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(t.h2,{id:"gps-location",children:"GPS Location"}),"\n",(0,i.jsx)(t.h3,{id:"location-not-verified",children:"Location not verified"}),"\n",(0,i.jsxs)(t.p,{children:['You receive a "location not verified" error on your mobile app when the ',(0,i.jsx)(t.a,{href:"/rewards/proof-of-location",children:"Proof of Location (PoL) mechanism"})," flags your weather station because the location reported by its ",(0,i.jsx)(t.strong,{children:"GPS receiver(s)"})," is different than the location you declared during the setup and claiming of the station. This happens because either you moved the station from its initial installation site, or you declared a wrong location during the onboarding of the station on your mobile app."]}),"\n",(0,i.jsxs)(t.p,{children:['This incurs a "relocation penalty" (as mentioned in ',(0,i.jsx)(t.a,{href:"http://weatherxm.com/whitepaper",children:"the whitepaper"}),') meaning your station will be exempt from reward distribution until the weather station is moved back to the declared location or the location is updated by using the "relocate station" function on your mobile app. After the passing of ',(0,i.jsx)(t.strong,{children:"7 days"})," from fixing your location, the relocation penalty will be lifted and your station will start generating rewards as usual."]}),"\n",(0,i.jsx)(t.h2,{id:"other-issues",children:"Other Issues"}),"\n",(0,i.jsx)(t.h3,{id:"my-wg3000-gateway-is-stuckunresponsive",children:"My WG3000 Gateway is stuck/unresponsive."}),"\n",(0,i.jsxs)(t.p,{children:["Please do not restart it and contact us through ",(0,i.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support"})," to debug it and find the reason of the issue."]}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(t.h3,{id:"why-is-my-station-showing-offline",children:"Why is my station showing offline?"}),"\n",(0,i.jsx)(t.p,{children:"Assuming that the WG3000 Gateway unit is placed outdoors facing south, this may be due to a bad RF connection between that Gateway and the outdoor station.\nPlease make sure that the WG3000 Gateway is placed outdoors, ideally on the same pole as the Weather Station, to ensure the best possible connection to the cellular network and with the Weather Station."}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["if you are still experiencing issues, please contact us through ",(0,i.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support"})]})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(6540);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);