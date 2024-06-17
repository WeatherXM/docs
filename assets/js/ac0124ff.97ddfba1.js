"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6696],{1347:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(8215);const i={tabItem:"tabItem_Ymn6"};var o=n(4848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,r),hidden:n,children:t})}},3384:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(6540),i=n(8215),o=n(5236),r=n(6347),s=n(8385),l=n(5793),h=n(7422),c=n(4100);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}(n);return function(e){const t=(0,h.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function w(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,o=d(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[h,u]=w({queryString:n,groupId:i}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,o]=(0,c.Dv)(n);return[i,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:i}),g=(()=>{const e=h??f;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var m=n(195);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(4848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:h}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),i=s[n].value;i!==a&&(h(t),r(i))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...o,className:(0,i.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function x(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,y.jsx)(v,{...t,...e}),(0,y.jsx)(b,{...t,...e})]})}function j(e){const t=(0,m.A)();return(0,y.jsx)(x,{...e,children:u(e.children)},String(t))}},9981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(4848),i=n(8453),o=(n(3384),n(1347),n(8189));const r={id:"D1-troubleshooting",title:"WeatherXM D1 bundle Troubleshooting",sidebar_label:"WeatherXM D1 bundle Troubleshooting",slug:"/wxm-devices/D1-bundle/D1-troubleshooting"},s=void 0,l={id:"wxm-devices/D1-bundle/D1-troubleshooting",title:"WeatherXM D1 bundle Troubleshooting",description:"Weather Station",source:"@site/docs/wxm-devices/D1-bundle/D1-troubleshooting.mdx",sourceDirName:"wxm-devices/D1-bundle",slug:"/wxm-devices/D1-bundle/D1-troubleshooting",permalink:"/wxm-devices/D1-bundle/D1-troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/wxm-devices/D1-bundle/D1-troubleshooting.mdx",tags:[],version:"current",frontMatter:{id:"D1-troubleshooting",title:"WeatherXM D1 bundle Troubleshooting",sidebar_label:"WeatherXM D1 bundle Troubleshooting",slug:"/wxm-devices/D1-bundle/D1-troubleshooting"},sidebar:"docs",previous:{title:"Connect and Claim Station",permalink:"/wxm-devices/D1-bundle/D1-connect-and-claim"},next:{title:"Maintenance of WS1001",permalink:"/wxm-devices/D1-bundle/maintenance"}},h={},c=[{value:"Weather Station",id:"weather-station",level:2},{value:"Device Alert: &quot;No Weather Station Signal&quot;",id:"device-alert-no-weather-station-signal",level:3},{value:"Device Alert: &quot;Station Signal is Low&quot;",id:"device-alert-station-signal-is-low",level:3},{value:"Device Alert: &quot;Station Reported Abnormal Values&quot;",id:"device-alert-station-reported-abnormal-values",level:3},{value:"Device Alert: &quot;Station Battery Level is Low&quot;",id:"device-alert-station-battery-level-is-low",level:3},{value:"Temperature looks higher than expected.",id:"temperature-looks-higher-than-expected",level:3},{value:"Other variables, such as wind direction, wind speed, rain height and humidity do not align with an official weather reporting station",id:"other-variables-such-as-wind-direction-wind-speed-rain-height-and-humidity-do-not-align-with-an-official-weather-reporting-station",level:3},{value:"One or more variables are extremely high, low, or constant for long periods of time.",id:"one-or-more-variables-are-extremely-high-low-or-constant-for-long-periods-of-time",level:3},{value:"Pressure on WG1200 Gateway appears to be very low relatively to other reference stations of national or private networks etc.",id:"pressure-on-wg1200-gateway-appears-to-be-very-low-relatively-to-other-reference-stations-of-national-or-private-networks-etc",level:3},{value:"WiFi  Connectivity",id:"wifi--connectivity",level:2},{value:"Device Alert: &quot;No Internet connection&quot;",id:"device-alert-no-internet-connection",level:3},{value:"Wifi Repeater",id:"wifi-repeater",level:3},{value:"WG1200 Gateway not working in 5 GHz WiFi.",id:"wg1200-gateway-not-working-in-5-ghz-wifi",level:3},{value:"I don&#39;t see the Wi-Fi name &quot;WXM_WG1200&quot; for initial setup on the app.",id:"i-dont-see-the-wi-fi-name-wxm_wg1200-for-initial-setup-on-the-app",level:3},{value:"GPS Location",id:"gps-location",level:2},{value:"Location not verified",id:"location-not-verified",level:3},{value:"Other Issues",id:"other-issues",level:2},{value:"My WG1200 Gateway is stuck/unresponsive.",id:"my-wg1200-gateway-is-stuckunresponsive",level:3},{value:"What can I do if my WG1200 Gateway is switching off frequently?",id:"what-can-i-do-if-my-wg1200-gateway-is-switching-off-frequently",level:3},{value:"Why is my station showing offline?",id:"why-is-my-station-showing-offline",level:3}];function u(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"weather-station",children:"Weather Station"}),"\n",(0,a.jsx)(t.h3,{id:"device-alert-no-weather-station-signal",children:'Device Alert: "No Weather Station Signal"'}),"\n",(0,a.jsx)("img",{className:"control",src:(0,o.Ay)("/img/wxm-devices/D1-bundle/Station_no_signal.png"),style:{width:"40%",height:"auto"},alt:"No Signal"}),"\n",(0,a.jsx)(t.p,{children:'If the error message "No Weather Station Signal" is displayed on the WG1200 Gateway, the WG1200 Gateway is not receiving RF signals.\nThis can be due to a variety of reasons.\nHere are some steps to troubleshoot the issue:'}),"\n",(0,a.jsxs)(t.p,{children:["First make sure you WG1200 Gateway frequency matches your weather station (see ",(0,a.jsx)(t.a,{href:"/wxm-devices/D1-bundle/D1-connect-and-claim#change-frequency-optional",children:"Change frequency"}),")"]}),"\n",(0,a.jsxs)(t.p,{children:["Check the LED on the weather station (see ",(0,a.jsx)(t.a,{href:"/wxm-devices/D1-bundle/D1-assemble#outdoor-weather-station",children:"Reset Button and LED Indicator"}),") for flashing.\nThe LED should flash every 16 seconds."]}),"\n",(0,a.jsx)(t.p,{children:"If the LED is not flashing every 16 seconds, replace the batteries in the weather station.\nIf the batteries were recently replaced, check the polarity."}),"\n",(0,a.jsx)(t.p,{children:"If the above does not solve the issue, there may be a temporary loss of communication due to reception loss related to interference or other location factors, or the WG1200 Gateway has not been reset.\nThe solution may be as simple as powering down and up the WG1200 Gateway. Make sure you use lithium non-rechargeable batteries, especially in case of cold weather environments."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"With the weather station array and WG1200 Gateway 3m/10ft away from each other,\nremove the batteries from the weather station and wait 10 seconds. Put the batteries back in."}),"\n",(0,a.jsx)(t.li,{children:"WG1200 Gateway should display all the observations measured by the weather station."}),"\n",(0,a.jsx)(t.li,{children:"Try to place the WG1200 Gateway at the desirable point and check that it receives data.\nEnsure the power adapter if used is not too close to the WG1200 Gateway and the WG1200 Gateway is not close to other electrical noise generating devices\nsuch as TVs, monitors, computers and transmitting devices."}),"\n",(0,a.jsx)(t.li,{children:"If you still have intermittent problems, move the weather station and the WG1200 Gateway closer together,\nbut not closer than 1.5m/5ft or further than 50m/164ft.\nAlso check that there are no metal barriers like aluminum siding\nor metal wall framing along the line of sight between the weather station and WG1200 Gateway.\nRelocate the weather station and WG1200 Gateway as necessary to avoid obstacles.\nDepending on natural barriers you may also have to move the weather station higher and/or closer."}),"\n"]}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"device-alert-station-signal-is-low",children:'Device Alert: "Station Signal is Low"'}),"\n",(0,a.jsx)("img",{className:"control",src:(0,o.Ay)("/img/wxm-devices/D1-bundle/Station_signal_low.png"),style:{width:"45%",height:"auto"},alt:"Signal Low"}),"\n",(0,a.jsxs)(t.p,{children:['When the RF connection with the Weather Station is weak, the WG1200 Gateway will display "Station Signal is Low" resulting to ',(0,a.jsx)(t.a,{href:"/project/rewards-troubleshooting#weather-data-gaps",children:"Data Gaps"})," and reduced Rewards."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If the signal is low, make sure the weather station is within the range of 50m/164ft from the WG1200 Gateway."}),"\n",(0,a.jsx)(t.li,{children:"If the weather station is within the range, try to move the WG1200 Gateway in another location to improve the signal quality."}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"Low signal quality may be due to obstacles between the weather station and the WG1200 Gateway, such as walls, trees, or other buildings."})}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"device-alert-station-reported-abnormal-values",children:'Device Alert: "Station Reported Abnormal Values"'}),"\n",(0,a.jsx)("img",{className:"control",src:(0,o.Ay)("/img/wxm-devices/D1-bundle/station_abnormal_values.png"),style:{width:"45%",height:"auto"},alt:"Abnormal Values"}),"\n",(0,a.jsx)(t.p,{children:"This message is displayed when the weather station reports values that are out of the ordinary. This can be due to a variety of reasons, such as:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Spikes on the data measured."}),"\n",(0,a.jsx)(t.li,{children:"One or more variables are constant for long periods of time."}),"\n",(0,a.jsx)(t.li,{children:"A sensor may be defective."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Please make sure you have followed ",(0,a.jsx)(t.a,{href:"/wxm-devices/D1-bundle/install-weather-station#best-practices-for-proper-station-installation",children:"Best Practices for Proper Station Installation"})," for guidelines about the installation of the weather station."]}),"\n",(0,a.jsxs)(t.p,{children:["If you are still experiencing issues, please contact us through ",(0,a.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support"}),"."]}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"device-alert-station-battery-level-is-low",children:'Device Alert: "Station Battery Level is Low"'}),"\n",(0,a.jsx)("img",{className:"control",src:(0,o.Ay)("/img/wxm-devices/D1-bundle/Station_battery_low.png"),style:{width:"45%",height:"auto"},alt:"Battery Low"}),"\n",(0,a.jsx)(t.p,{children:'If your WG1200 Gateway displays "Station Battery Level is Low" on the screen, the weather station will run out of battery soon.'}),"\n",(0,a.jsx)(t.p,{children:"Replace the batteries of the weather station. Make sure you use lithium non-rechargeable batteries, especially in case of cold weather environments."}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"temperature-looks-higher-than-expected",children:"Temperature looks higher than expected."}),"\n",(0,a.jsxs)(t.p,{children:["If the temperature is slightly higher (e.g., +2 - 5\xb0C/35-41\xb0F) than expected,\nthen assure that the weather station is within a significant distance from heat sources\nlike ventilation systems and active chimneys.\nAlso make sure that the weather station is mounted on a 2m/6.5ft (or more) metallic pole and there are no obstacles close by reading ",(0,a.jsx)(t.a,{href:"/wxm-devices/D1-bundle/install-weather-station#best-practices-for-proper-station-installation",children:"Best Practices for Proper Station Installation"}),"."]}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"other-variables-such-as-wind-direction-wind-speed-rain-height-and-humidity-do-not-align-with-an-official-weather-reporting-station",children:"Other variables, such as wind direction, wind speed, rain height and humidity do not align with an official weather reporting station"}),"\n",(0,a.jsxs)(t.p,{children:["Even weather stations, which are close to each other, may obtain slightly different measurements,\nespecially for the variables of wind speed and wind direction. However, you should not expect significant deviations\ne.g., from a weather station, which is located within a distance of 1km/0.6mi.\nIf there are deviations, please check ",(0,a.jsx)(t.a,{href:"/wxm-devices/D1-bundle/install-weather-station#best-practices-for-proper-station-installation",children:"Best Practices for Proper Station Installation"})," for guidelines about the installation of the weather station."]}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"one-or-more-variables-are-extremely-high-low-or-constant-for-long-periods-of-time",children:"One or more variables are extremely high, low, or constant for long periods of time."}),"\n",(0,a.jsx)(t.p,{children:"If you notice that some variables are extreme or constant it is possible you need to replace the batteries of the weather station. Make sure you use lithium non-rechargeable batteries, especially in case of cold weather environments."}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"pressure-on-wg1200-gateway-appears-to-be-very-low-relatively-to-other-reference-stations-of-national-or-private-networks-etc",children:"Pressure on WG1200 Gateway appears to be very low relatively to other reference stations of national or private networks etc."}),"\n",(0,a.jsx)(t.p,{children:"For now we present only the absolute pressure and not the Mean Sea Level Pressure (MSLP). That means that the displayed pressure are affected by the elevation of your area. We work to consider the elevation given by your GPS in order to show the MSLP, which is commonly used."}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h2,{id:"wifi--connectivity",children:"WiFi  Connectivity"}),"\n",(0,a.jsx)(t.h3,{id:"device-alert-no-internet-connection",children:'Device Alert: "No Internet connection"'}),"\n",(0,a.jsx)("img",{className:"control",src:(0,o.Ay)("/img/wxm-devices/D1-bundle/Station_no_wifi.png"),style:{width:"45%",height:"auto"},alt:"No WiFi"}),"\n",(0,a.jsx)(t.p,{children:'When the WiFi  connection is lost, the warning "No Internet connection" is displayed on the WG1200 Gateway.\nThis can be due to a variety of reasons:\nHere are some steps to troubleshoot the issue:'}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Make sure the WiFi  network is working properly."}),"\n",(0,a.jsx)(t.li,{children:"If you have never been able to configure WiFi  to a working state, make sure your WiFi  supports 2.4 GHz signals. The gateway does not support WiFi that uses the 5 GHz spectrum."}),"\n",(0,a.jsx)(t.li,{children:"Make sure you configured the correct SSID and password."}),"\n",(0,a.jsxs)(t.li,{children:["Repeat the ",(0,a.jsx)(t.a,{href:"/wxm-devices/D1-bundle/D1-connect-and-claim#connect-wg1200-gateway-to-wifi",children:"procedure"})," if necessary to verify."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["If you are still experiencing issues, please contact us through ",(0,a.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support"}),"."]}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"wifi-repeater",children:"Wifi Repeater"}),"\n",(0,a.jsxs)(t.p,{children:["Usually, using a WiFi repeater is not an issue, but in some cases it may affect your Gateway's connection. If you are experiencing issues with your WG1200 Gateway, try to connect it directly to your router and see if the problem persists. If it does not,\nthen the issue is with the repeater. If it does, please contact us through ",(0,a.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support"}),"."]}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"wg1200-gateway-not-working-in-5-ghz-wifi",children:"WG1200 Gateway not working in 5 GHz WiFi."}),"\n",(0,a.jsxs)(t.p,{children:["WG1200 Gateway is designed to work ",(0,a.jsx)(t.strong,{children:"only"})," at the 2.4GHz frequency. Please make sure the 2.4Ghz band on your router is enabled. If you are still experiencing issues, please contact us through ",(0,a.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support"}),"."]}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"i-dont-see-the-wi-fi-name-wxm_wg1200-for-initial-setup-on-the-app",children:'I don\'t see the Wi-Fi name "WXM_WG1200" for initial setup on the app.'}),"\n",(0,a.jsxs)(t.p,{children:["It might take some time and attempts for it to connect. Please make sure that your Wi-Fi supports 2.4 GHz signals. You may also need to try from a different phone. If you are still experiencing issues, please contact us through ",(0,a.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support"}),"."]}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h2,{id:"gps-location",children:"GPS Location"}),"\n",(0,a.jsx)(t.h3,{id:"location-not-verified",children:"Location not verified"}),"\n",(0,a.jsxs)(t.p,{children:['You receive a "location not verified" error on your mobile app when the ',(0,a.jsx)(t.a,{href:"/project/proof-of-location",children:"Proof of Location (PoL) mechanism"})," flags your weather station because the location reported by its ",(0,a.jsx)(t.strong,{children:"GPS receiver(s)"})," is different than the location you declared during the setup and claiming of the station. This happens because either you moved the station from its initial installation site, or you declared a wrong location during the onboarding of the station on your mobile app."]}),"\n",(0,a.jsxs)(t.p,{children:['This incurs a "relocation penalty" (as mentioned in ',(0,a.jsx)(t.a,{href:"http://weatherxm.com/whitepaper",children:"the whitepaper"}),') meaning your station will be exempt from reward distribution until the weather station is moved back to the declared location or the location is updated by using the "relocate station" function on your mobile app. After the passing of ',(0,a.jsx)(t.strong,{children:"7 days"})," from fixing your location, the relocation penalty will be lifted and your station will start generating rewards as usual."]}),"\n",(0,a.jsx)(t.h2,{id:"other-issues",children:"Other Issues"}),"\n",(0,a.jsx)(t.h3,{id:"my-wg1200-gateway-is-stuckunresponsive",children:"My WG1200 Gateway is stuck/unresponsive."}),"\n",(0,a.jsxs)(t.p,{children:["Please do not restart it and contact us through ",(0,a.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support"})," to debug it and find the reason of the issue"]}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"what-can-i-do-if-my-wg1200-gateway-is-switching-off-frequently",children:"What can I do if my WG1200 Gateway is switching off frequently?"}),"\n",(0,a.jsx)(t.p,{children:"Please disconnect the WG1200 Gateway from the power source and plug it back to the power source. You can also try using a different USB cable and another wall adapter."}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"why-is-my-station-showing-offline",children:"Why is my station showing offline?"}),"\n",(0,a.jsx)(t.p,{children:"Assuming that the WG1200 Gateway unit is powered on, this may be due to a bad internet connection or bad RF connection between the D1 Gateway and the outdoor station."}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["if you are still experiencing issues, please contact us through ",(0,a.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support"})]})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var a=n(6540);const i={},o=a.createContext(i);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);