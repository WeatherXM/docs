"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5296],{2391:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=o(4848),r=o(8453),i=o(8189);const a={title:"Rewards Troubleshooting",sidebar_label:"Troubleshooting"},s=void 0,l={id:"rewards/rewards-troubleshooting",title:"Rewards Troubleshooting",description:"A guide to interpreting mobile app error messages, understanding their meanings, and taking appropriate actions to resolve them.",source:"@site/docs/rewards/rewards-troubleshooting.mdx",sourceDirName:"rewards",slug:"/rewards/rewards-troubleshooting",permalink:"/rewards/rewards-troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/rewards/rewards-troubleshooting.mdx",tags:[],version:"current",frontMatter:{title:"Rewards Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"docs",previous:{title:"Reward Boosts",permalink:"/rewards/reward-boosts"},next:{title:"Rewards Claiming",permalink:"/rewards/rewards-claiming"}},h={},d=[{value:"No wallet",id:"no-wallet",level:2},{value:"No Station Data",id:"no-station-data",level:2},{value:"For the WG1000 WiFi gateway",id:"for-the-wg1000-wifi-gateway",level:3},{value:"For the WS-2000 (Helium version)",id:"for-the-ws-2000-helium-version",level:3},{value:"Sensor Problems",id:"sensor-problems",level:2},{value:"Out of Bounds Data",id:"out-of-bounds-data",level:4},{value:"Power cycle procedure:",id:"power-cycle-procedure",level:5},{value:"Spikes on Data",id:"spikes-on-data",level:4},{value:"Constant Values",id:"constant-values",level:4},{value:"Power cycle procedure:",id:"power-cycle-procedure-1",level:5},{value:"Frozen Sensor",id:"frozen-sensor",level:4},{value:"Weather Data Gaps",id:"weather-data-gaps",level:2},{value:"For the WG1000 WiFi gateway",id:"for-the-wg1000-wifi-gateway-1",level:3},{value:"For the WS-2000 (Helium version)",id:"for-the-ws-2000-helium-version-1",level:3},{value:"For the WG1200 WiFi Gateway",id:"for-the-wg1200-wifi-gateway",level:3},{value:"Bad Station Deployment",id:"bad-station-deployment",level:2},{value:"No location Data",id:"no-location-data",level:2},{value:"For the WG1000 - WiFi gateway",id:"for-the-wg1000---wifi-gateway",level:3},{value:"For the WS-2000 (Helium version)",id:"for-the-ws-2000-helium-version-2",level:3},{value:"Location Not Verified",id:"location-not-verified",level:2},{value:"User Relocation Penalty",id:"user-relocation-penalty",level:2}];function c(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"A guide to interpreting mobile app error messages, understanding their meanings, and taking appropriate actions to resolve them."}),"\n",(0,n.jsx)(t.h2,{id:"no-wallet",children:"No wallet"}),"\n",(0,n.jsx)(t.p,{children:"It seems that you haven't connected a wallet to your account yet. Please note that in order to receive rewards, you must connect a wallet address. Here's what you need to do:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Learn ",(0,n.jsx)(t.a,{href:"/mobile-app/wallet/add-edit-wallet-address",children:"how to add or edit a wallet address"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Then, follow the instructions for ",(0,n.jsx)(t.a,{href:"/rewards/how-to-join-arbitrum-and-see-your-tokens",children:"joining Arbitrum One and see your $WXM tokens"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Once you've completed the above steps, you'll be all set to claim your rewards. Please wait until the ",(0,n.jsx)(t.a,{href:"/rewards/reward-mechanism",children:"Reward Mechanism (RM) "}),' completes. This usually takes until the following day and see "',(0,n.jsx)(t.a,{href:"/rewards/rewards-claiming",children:"How to Claim Rewards"}),'" for further guidance.']}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsx)(t.h2,{id:"no-station-data",children:"No Station Data"}),"\n",(0,n.jsx)(t.p,{children:"It seems that your station did not transmit any data at all, which may indicate that it was either offline or not connected to the network."}),"\n",(0,n.jsx)(t.p,{children:"Here's what you need to do:"}),"\n",(0,n.jsx)(t.h3,{id:"for-the-wg1000-wifi-gateway",children:"For the WG1000 WiFi gateway"}),"\n",(0,n.jsxs)("div",{class:"explanation",children:[(0,n.jsx)("img",{src:(0,i.Ay)("/img/rewards/m5-ui-new-numbered.jpg")}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{children:["WG1000 Gateway icons explanation ",(0,n.jsx)("br",{}),"\nRed=Problem, Green= Good"]}),(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:"RF connection with the station."}),(0,n.jsx)("li",{children:"Connection to WeatherXM Network."}),(0,n.jsx)("li",{children:"GPS receiver."}),(0,n.jsx)("li",{children:"WiFi connection."})]})]})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Check that your station connection (RF) to the gateway is stable by following the guide ",(0,n.jsx)(t.a,{href:"/wxm-devices/m5/troubleshooting#weather-station-not-reporting-data-to-wg1000-gateway-there-are-dashes----on-the-display-console",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Also read through the guide to add the included external antenna ",(0,n.jsx)(t.a,{href:"/wxm-devices/m5/troubleshooting#my-station-does-not-connect-to-the-wg1000-gateway",children:"here"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Check if the station's battery level is low through mobile app settings.\nIf the battery is low, the connection between your station and the WG1000 gateway will be unstable resulting in data loss."}),"\n"]}),"\n",(0,n.jsxs)("div",{class:"explanation small-big",children:[(0,n.jsx)("img",{src:(0,i.Ay)("/img/rewards/settings-through-the-app.png")}),(0,n.jsx)("img",{src:(0,i.Ay)("/img/rewards/battery-level.png")})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Check your GPS by following the guide ",(0,n.jsx)(t.a,{href:"/wxm-devices/m5/troubleshooting#no-location-gps-data-arrow-icon-is-red",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Follow the Troubleshooting guide regarding ",(0,n.jsx)(t.a,{href:"/wxm-devices/m5/troubleshooting#no-wifi--connection",children:"No WiFi connection"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"for-the-ws-2000-helium-version",children:"For the WS-2000 (Helium version)"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Check if the station's battery level is low through mobile app settings."}),"\n",(0,n.jsxs)(t.li,{children:["Check for ",(0,n.jsx)(t.a,{href:"/wxm-devices/helium/troubleshooting#how-to-see-if-there-is-helium-coverage-in-your-area",children:"Helium coverage"})," in your area."]}),"\n"]}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsx)(t.h2,{id:"sensor-problems",children:"Sensor Problems"}),"\n",(0,n.jsxs)(t.p,{children:["If you got this error, it means our data evaluation services detected that the received weather packets, did not meet our quality standards.\nTo ensure the accuracy of the information sent by our weather stations, we evaluate all data packets using our ",(0,n.jsx)(t.a,{href:"/rewards/quality-of-data",children:"Quality of Data (QoD) algorithm"}),". For more information about this algorithm, please refer to this ",(0,n.jsx)(t.a,{href:"/rewards/quality-of-data",children:"here"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Below are some of the possible errors and the appropriate actions you can take to resolve the issues:"}),"\n",(0,n.jsx)(t.h4,{id:"out-of-bounds-data",children:"Out of Bounds Data"}),"\n",(0,n.jsxs)(t.p,{children:["It's possible that a sensor sends a completely irrational value, which implies to a faulty sensor. If this error persists for multiple days, it is recommended to perform a complete ",(0,n.jsx)(t.strong,{children:"power cycle"}),"."]}),"\n",(0,n.jsx)(t.h5,{id:"power-cycle-procedure",children:"Power cycle procedure:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Remove batteries."}),"\n",(0,n.jsx)(t.li,{children:"Cover the solar panel so the station isn't powered by the panel while the batteries are out."}),"\n",(0,n.jsx)(t.li,{children:"Press the reset button a few times to drain all stored power."}),"\n",(0,n.jsx)(t.li,{children:"Wait a few minutes."}),"\n",(0,n.jsx)(t.li,{children:"Put batteries back in place and wait for the station to boot up."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If the above doesn't work, you should contact our ",(0,n.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support team"}),"  for sensor replacement."]}),"\n",(0,n.jsx)(t.h4,{id:"spikes-on-data",children:"Spikes on Data"}),"\n",(0,n.jsxs)(t.p,{children:["One or more of your sensors are exhibiting irrational spikes. You should first check your station if it is optimally deployed and then you should contact ",(0,n.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support"}),".\nTake a look at our ",(0,n.jsx)(t.a,{href:"/wxm-devices/deployment-examples",children:"Deployment Examples"})," and ",(0,n.jsx)(t.a,{href:"/wxm-devices/m5/install-weather-station#best-practices-for-proper-station-installation",children:"Best Practices"})," to ensure that your station is deployed correctly."]}),"\n",(0,n.jsx)(t.h4,{id:"constant-values",children:"Constant Values"}),"\n",(0,n.jsxs)(t.p,{children:["One or more of your sensors report constant values which implies a bad installation, or less often, a problematic sensor. If your station is optimally installed and the constant value errors persist for a few days,\nyou should perform a ",(0,n.jsx)(t.strong,{children:"power cycle"})," and if you continue to receive it, contact ",(0,n.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Take a look at our ",(0,n.jsx)(t.a,{href:"/wxm-devices/deployment-examples",children:"Deployment Examples"})," and ",(0,n.jsx)(t.a,{href:"/wxm-devices/m5/install-weather-station#best-practices-for-proper-station-installation",children:"Best Practices"})," to ensure that your station is deployed correctly."]}),"\n",(0,n.jsx)(t.h5,{id:"power-cycle-procedure-1",children:"Power cycle procedure:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Remove batteries."}),"\n",(0,n.jsx)(t.li,{children:"Cover the solar panel so the station isn't powered by the panel while the batteries are out."}),"\n",(0,n.jsx)(t.li,{children:"Press the reset button a few times to drain all stored power."}),"\n",(0,n.jsx)(t.li,{children:"Wait a few minutes."}),"\n",(0,n.jsx)(t.li,{children:"Put batteries back in place and wait for the station to boot up."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If the above doesn't work, you should contact our ",(0,n.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support team"}),"  for sensor replacement."]}),"\n",(0,n.jsx)(t.h4,{id:"frozen-sensor",children:"Frozen Sensor"}),"\n",(0,n.jsx)(t.p,{children:"You should remove excess snow or ice from the weather station, and make sure wind cups and wind vanes rotate freely."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["If you encounter any errors, it is recommended that you observe it for a few days before reaching out to our ",(0,n.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support team"}),".\nIn case you still receive the error after a couple of days, please do not hesitate to contact our ",(0,n.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support team"})," for further guidance."]})}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsx)(t.h2,{id:"weather-data-gaps",children:"Weather Data Gaps"}),"\n",(0,n.jsx)(t.p,{children:"Some data gaps were detected during our data quality checks.\nPerhaps the indoor or outdoor units are not properly connected to the network, or to each other."}),"\n",(0,n.jsx)(t.p,{children:"Here's what you need to do:"}),"\n",(0,n.jsx)(t.h3,{id:"for-the-wg1000-wifi-gateway-1",children:"For the WG1000 WiFi gateway"}),"\n",(0,n.jsxs)("div",{class:"explanation",children:[(0,n.jsx)("img",{src:(0,i.Ay)("/img/rewards/m5-ui-new-numbered.jpg")}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{children:["WG1000 Gateway icons explanation ",(0,n.jsx)("br",{}),"\nRed=Problem, Green= Good"]}),(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:"RF connection with the station."}),(0,n.jsx)("li",{children:"Connection to WeatherXM Network."}),(0,n.jsx)("li",{children:"GPS receiver."}),(0,n.jsx)("li",{children:"WiFi connection."})]})]})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Check that your station connection (RF) to the gateway is stable by following the guide ",(0,n.jsx)(t.a,{href:"/wxm-devices/m5/troubleshooting#weather-station-not-reporting-data-to-wg1000-gateway-there-are-dashes----on-the-display-console",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Also read through the guide to add the included external antenna ",(0,n.jsx)(t.a,{href:"/wxm-devices/m5/troubleshooting#my-station-does-not-connect-to-the-wg1000-gateway",children:"here"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Check if the station's battery level is low through mobile app settings.\nIf the battery is low, the connection between your station and the WG1000 gateway will be unstable resulting in data loss."}),"\n"]}),"\n",(0,n.jsxs)("div",{class:"explanation small-big",children:[(0,n.jsx)("img",{src:(0,i.Ay)("/img/rewards/settings-through-the-app.png")}),(0,n.jsx)("img",{src:(0,i.Ay)("/img/rewards/battery-level.png")})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Check your GPS by following the guide ",(0,n.jsx)(t.a,{href:"/wxm-devices/m5/troubleshooting#no-location-gps-data-arrow-icon-is-red",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Follow the Troubleshooting guide regarding ",(0,n.jsx)(t.a,{href:"/wxm-devices/m5/troubleshooting#no-wifi--connection",children:"No WiFi connection"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"for-the-ws-2000-helium-version-1",children:"For the WS-2000 (Helium version)"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Check if the station's battery level is low through mobile app settings."}),"\n",(0,n.jsxs)(t.li,{children:["Check for ",(0,n.jsx)(t.a,{href:"/wxm-devices/helium/troubleshooting#how-to-see-if-there-is-helium-coverage-in-your-area",children:"Helium coverage"})," in your area."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"for-the-wg1200-wifi-gateway",children:"For the WG1200 WiFi Gateway"}),"\n",(0,n.jsxs)("div",{class:"explanation",children:[(0,n.jsx)("img",{src:(0,i.Ay)("/img/rewards/d1-icons.png")}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{children:["WG1200 Gateway icons explanation ",(0,n.jsx)("br",{}),"\nRed=Problem, Green= Good"]}),(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:"RF connection with the station."}),(0,n.jsx)("li",{children:"Connection to WeatherXM Network."}),(0,n.jsx)("li",{children:"GPS Receiver of the Weather Station."}),(0,n.jsx)("li",{children:"WiFi connection."})]})]})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Check that your station connection (RF) to the gateway is stable by following the guide ",(0,n.jsx)(t.a,{href:"/wxm-devices/d1/troubleshooting#device-alert-no-weather-station-signal",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["If the station's battery level a warning will appear on the ",(0,n.jsx)(t.a,{href:"/wxm-devices/d1/troubleshooting#one-or-more-variables-are-extremely-high-low-or-constant-for-long-periods-of-time",children:"WG1200 Gateway"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["In case your WG1200 GPS arrow icon is red, please contact our ",(0,n.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support team"})," for further guidance."]}),"\n",(0,n.jsxs)(t.li,{children:["Follow the Troubleshooting guide regarding ",(0,n.jsx)(t.a,{href:"/wxm-devices/d1/troubleshooting#device-alert-no-internet-connection",children:"No WiFi connection"}),"."]}),"\n"]}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsx)(t.h2,{id:"bad-station-deployment",children:"Bad Station Deployment"}),"\n",(0,n.jsxs)(t.p,{children:["It appears that your weather station could benefit from some improvements in terms of its deployment. The ",(0,n.jsx)(t.a,{href:"/rewards/quality-of-data",children:"Quality of Data (QoD) algorithm"})," evaluates all data packet received by a weather station every day, so a proper installation becomes mandatory to receive the maximum amount of rewards.\nWe recommend that you take a look at our ",(0,n.jsx)(t.a,{href:"/wxm-devices/deployment-examples",children:"Deployment Examples"})," and ",(0,n.jsx)(t.a,{href:"/wxm-devices/m5/install-weather-station#best-practices-for-proper-station-installation",children:"Best Practices"})," for inspiration on how and where to install your station."]}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsx)(t.h2,{id:"no-location-data",children:"No location Data"}),"\n",(0,n.jsxs)(t.p,{children:["Your weather station was suspended from rewards because it did not report GPS data. Please check the troubleshooting guides for your station below, before contacting our support team.",(0,n.jsx)(t.a,{href:"https://support.weatherxm.com",children:"support team"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"for-the-wg1000---wifi-gateway",children:"For the WG1000 - WiFi gateway"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/wxm-devices/m5/troubleshooting#no-location-gps-data-arrow-icon-is-red",children:"No location (GPS) data (arrow icon is red)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/wxm-devices/m5/connect-and-claim#place-wg1000-gateway-near-a-window-for-better-gps-signal",children:"Place the WG1000 near a window (for better GPS signal)"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"for-the-ws-2000-helium-version-2",children:"For the WS-2000 (Helium version)"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/wxm-devices/helium/troubleshooting#no-location-gps-data",children:"No location (GPS) data"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/wxm-devices/helium/install-weather-station",children:"Installation instructions"})}),"\n"]}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsx)(t.h2,{id:"location-not-verified",children:"Location Not Verified"}),"\n",(0,n.jsx)(t.p,{children:"It appears that the location of your weather station is different from the one you had originally set while claiming it.\nPlease verify your location through the mobile app."}),"\n",(0,n.jsxs)("div",{class:"explanation small-big",children:[(0,n.jsx)("img",{src:(0,i.Ay)("/img/rewards/settings.png")}),(0,n.jsx)("img",{src:(0,i.Ay)("/img/rewards/edit-location.png")}),(0,n.jsx)("img",{src:(0,i.Ay)("/img/rewards/edit-location-2.png")})]}),"\n",(0,n.jsxs)(t.p,{children:["In detail, the ",(0,n.jsx)(t.a,{href:"/rewards/proof-of-location",children:"Proof of Location (PoL) mechanism"})," flagged your weather station because the location reported by its GPS receiver(s) is different than the location you declared during the setup and claiming of the station."]}),"\n",(0,n.jsx)(t.p,{children:"This could happen because either you have moved your station from its initial installation site, or you had declared a wrong location during the onboarding process of the station on your mobile app."}),"\n",(0,n.jsx)(t.p,{children:'As a result, your station will not be eligible for reward distribution until it is moved back to the declared location or the location is updated by using the "relocate station" function on your mobile app.'}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"When discussing the weather, we always mention a specific location, either directly or indirectly. Therefore, the data provided by weather stations in the WeatherXM Network is meaningless unless we know the location of each station at all times.\nIt is crucial for the stability of the Network to have weather stations that can report their current location and remain stationary."})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/rewards/proof-of-location",children:"Proof of Location (PoL) mechanism"})," penalty imposed to devices that went through a relocation is currently reduced to 2 days. This is a temporary measure and will be reverted back to 7 days."]})}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsx)(t.h2,{id:"user-relocation-penalty",children:"User Relocation Penalty"}),"\n",(0,n.jsxs)(t.p,{children:["Our ",(0,n.jsx)(t.a,{href:"/rewards/proof-of-location",children:"Proof of Location (PoL) mechanism"})," reported a relocation event.\nIt seems like you used the relocation feature and you edited the location of your weather station through the app. Please wait 7 days and your weather station will start earning rewards again."]}),"\n",(0,n.jsx)(t.p,{children:"WeatherXM places great importance on station continuity, and discourage relocations therefore It is important for the Network that a station remains at the same location throughout its lifetime."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/rewards/proof-of-location",children:"Proof of Location (PoL) mechanism"})," penalty imposed to devices that went through a relocation is currently reduced to 2 days. This is a temporary measure and will be reverted back to 7 days."]})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>s});var n=o(6540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);