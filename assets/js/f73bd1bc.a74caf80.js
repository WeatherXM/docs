"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5225],{3632:(e,t,i)=>{i.d(t,{A:()=>a});i(6540);var n=i(8215);const s={tabItem:"tabItem_Ymn6"};var o=i(4848);function a(e){let{children:t,hidden:i,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:i,children:t})}},2707:(e,t,i)=>{i.d(t,{A:()=>j});var n=i(6540),s=i(8215),o=i(4319),a=i(6347),r=i(4280),l=i(3024),c=i(8417),u=i(4031);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:i}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:i,attributes:n,default:s}}=e;return{value:t,label:i,attributes:n,default:s}}))}(i);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function m(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:i}=e;const s=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function f(e){const{defaultValue:t,queryString:i=!1,groupId:s}=e,o=d(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,h]=p({queryString:i,groupId:s}),[f,g]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,u.Dv)(i);return[s,(0,n.useCallback)((e=>{i&&o.set(e)}),[i,o])]}({groupId:s}),x=(()=>{const e=c??f;return m({value:e,tabValues:o})?e:null})();(0,r.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,o]),tabValues:o}}var g=i(6916);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=i(4848);function b(e){let{className:t,block:i,selectedValue:n,selectValue:a,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,i=l.indexOf(t),s=r[i].value;s!==n&&(c(t),a(s))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;t=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;t=l[i]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":i},t),children:r.map((e=>{let{value:t,label:i,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:h,onClick:u,...o,className:(0,s.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":n===t}),children:i??t},t)}))})}function y(e){let{lazy:t,children:i,selectedValue:o}=e;const a=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,v.jsx)(b,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function j(e){const t=(0,g.A)();return(0,v.jsx)(w,{...e,children:h(e.children)},String(t))}},3860:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"wxm-devices/helium/troubleshooting","title":"Troubleshooting of WeatherXM Helium station (WS2000)","description":"if you experience connection issues while claiming a WeatherXM Helium station,  make sure you are near the station.","source":"@site/docs/wxm-devices/helium/troubleshooting.mdx","sourceDirName":"wxm-devices/helium","slug":"/wxm-devices/helium/troubleshooting","permalink":"/wxm-devices/helium/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/WeatherXM/docs/blob/main/docs/wxm-devices/helium/troubleshooting.mdx","tags":[],"version":"current","frontMatter":{"title":"Troubleshooting of WeatherXM Helium station (WS2000)","sidebar_label":"Troubleshooting"},"sidebar":"docs","previous":{"title":"Maintenance","permalink":"/wxm-devices/helium/maintenance"},"next":{"title":"Introduction","permalink":"/wxm-devices/d1/introduction"}}');var s=i(4848),o=i(8453),a=i(2707),r=i(3632),l=i(1306);const c={title:"Troubleshooting of WeatherXM Helium station (WS2000)",sidebar_label:"Troubleshooting"},u=void 0,h={},d=[{value:"The updating process lasts forever",id:"the-updating-process-lasts-forever",level:3},{value:"Asks to pair but fails",id:"asks-to-pair-but-fails",level:3},{value:"No location (GPS) data",id:"no-location-gps-data",level:3},{value:"Location not verified",id:"location-not-verified",level:3},{value:"My station is not detected during scanning",id:"my-station-is-not-detected-during-scanning",level:3},{value:"The process does not start or is stopped before it is completed",id:"the-process-does-not-start-or-is-stopped-before-it-is-completed",level:3},{value:"The app cannot connect to the station after successfully pairing",id:"the-app-cannot-connect-to-the-station-after-successfully-pairing",level:3},{value:"Factory reset",id:"factory-reset",level:3},{value:"Other Issues",id:"other-issues",level:2},{value:"How to see if there is Helium coverage in your area.",id:"how-to-see-if-there-is-helium-coverage-in-your-area",level:3},{value:"Can a WeatherXM Helium station paired with more than one device?",id:"can-a-weatherxm-helium-station-paired-with-more-than-one-device",level:3},{value:"In order for the WeatherXM Helium stations to work, should they be in a Helium hexagon or the principle is the same as for the WiFi stations?",id:"in-order-for-the-weatherxm-helium-stations-to-work-should-they-be-in-a-helium-hexagon-or-the-principle-is-the-same-as-for-the-wifi-stations",level:3}];function m(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"if you experience connection issues while claiming a WeatherXM Helium station,  make sure you are near the station."})})}),"\n",(0,s.jsx)(t.h3,{id:"the-updating-process-lasts-forever",children:"The updating process lasts forever"}),"\n",(0,s.jsxs)(t.p,{children:["If the process hangs and does not proceed or if pairing fails, try a ",(0,s.jsx)(t.a,{href:"/wxm-devices/helium/troubleshooting#factory-reset",children:"factory reset"}),"."]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(t.h3,{id:"asks-to-pair-but-fails",children:"Asks to pair but fails"}),"\n",(0,s.jsxs)("div",{class:"explanation small-big",children:[(0,s.jsx)("img",{src:(0,l.Ay)("img/wxm-devices/helium/fail-pairing.svg")}),(0,s.jsx)("span",{children:(0,s.jsxs)(t.p,{children:["Restart your station. Pairing is only allowed in the first 5 minutes after the station is started. After 5 minutes the station refuses pairing. If the problem persists, do a ",(0,s.jsx)(t.a,{href:"/wxm-devices/helium/troubleshooting#factory-reset",children:"factory reset"})," and try again."]})})]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(t.h3,{id:"no-location-gps-data",children:"No location (GPS) data"}),"\n",(0,s.jsxs)("div",{class:"explanation small-big",children:[(0,s.jsx)("img",{src:(0,l.Ay)("img/wxm-devices/helium/helium-clear-sky-view.png")}),(0,s.jsxs)("span",{children:[(0,s.jsx)(t.p,{children:'If your station reports "No location data" please make sure your station is installed properly as per the installation instructions.'}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Your station reports its location a few times per day depending on network and battery status and thus it might take some time until the location is confirmed by the WeatherXM platform."})})]})]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(t.h3,{id:"location-not-verified",children:"Location not verified"}),"\n",(0,s.jsxs)(t.p,{children:['You receive a "location not verified" error on your mobile app when the ',(0,s.jsx)(t.a,{href:"/rewards/proof-of-location",children:"Proof of Location (PoL) mechanism"})," flags your weather station because the location reported by its ",(0,s.jsx)(t.strong,{children:"GPS receiver(s)"})," is different than the location you declared during the setup and claiming of the station. This happens because either you moved the station from its initial installation site, or you declared a wrong location during the onboarding of the station on your mobile app."]}),"\n",(0,s.jsxs)(t.p,{children:['This incurs a "relocation penalty" (as mentioned in ',(0,s.jsx)(t.a,{href:"http://weatherxm.com/whitepaper",children:"the whitepaper"}),') meaning your station will be exempt from reward distribution until the weather station is moved back to the declared location or the location is updated by using the "relocate station" function on your mobile app. After the passing of ',(0,s.jsx)(t.strong,{children:"7 days"})," from fixing your location, the relocation penalty will be lifted and your station will start generating rewards as usual."]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(t.h3,{id:"my-station-is-not-detected-during-scanning",children:"My station is not detected during scanning"}),"\n",(0,s.jsxs)("div",{class:"explanation small-big",children:[(0,s.jsx)("img",{src:(0,l.Ay)("img/wxm-devices/helium/no-device-found.jpg")}),(0,s.jsx)("span",{children:(0,s.jsx)(t.p,{children:"Make sure the device has started.  Press the reset button at the bottom of the weather station. The light at the bottom of the station will flash a few times indicating that the restart was successful.\nIf it continues to go undetected, try scanning again from a closer distance. The operating bluetooth range of the station is around 10m/32ft with few obstacles."})})]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(t.h3,{id:"the-process-does-not-start-or-is-stopped-before-it-is-completed",children:"The process does not start or is stopped before it is completed"}),"\n",(0,s.jsxs)("div",{class:"explanation small-big",children:[(0,s.jsx)("img",{src:(0,l.Ay)("img/wxm-devices/helium/scanning-failed.svg")}),(0,s.jsx)("span",{children:(0,s.jsx)(t.p,{children:"Close the application and start the process again. If the problem persists, press the reset button at the bottom of the weather station and try again. Finally, try doing a factory reset."})})]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(t.h3,{id:"the-app-cannot-connect-to-the-station-after-successfully-pairing",children:"The app cannot connect to the station after successfully pairing"}),"\n",(0,s.jsxs)("div",{class:"explanation small-big",children:[(0,s.jsx)("img",{src:(0,l.Ay)("img/wxm-devices/helium/connection-failed.jpg")}),(0,s.jsx)("span",{children:(0,s.jsx)(t.p,{children:'If the claiming process is repeated more than twice without completion, attempt to unpair your weather station and start over. If you encounter connection problems during the claiming, make sure that you are near to the weather station at all times. The solution to the above is to visit the Bluetooth settings of the mobile phone, find the station in the paired devices and "forget the device". This flow is different on Android and iOS.'})})]}),"\n",(0,s.jsx)("h3",{children:"How to forget/unpair your device"}),"\n",(0,s.jsxs)(a.A,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,s.jsx)(r.A,{value:"android",children:(0,s.jsxs)("div",{class:"explanation small-big",children:[(0,s.jsx)("img",{src:(0,l.Ay)("img/wxm-devices/helium/troubleshoot-android-1.png")}),(0,s.jsx)("img",{src:(0,l.Ay)("img/wxm-devices/helium/troubleshoot-android-2.png")}),(0,s.jsx)("img",{src:(0,l.Ay)("img/wxm-devices/helium/troubleshoot-android-3.png")})]})}),(0,s.jsx)(r.A,{value:"ios",children:(0,s.jsxs)("div",{class:"explanation small-big",children:[(0,s.jsx)("img",{src:(0,l.Ay)("img/wxm-devices/helium/troubleshoot-ios-1.png")}),(0,s.jsx)("img",{src:(0,l.Ay)("img/wxm-devices/helium/troubleshoot-ios-2.png")}),(0,s.jsx)("img",{src:(0,l.Ay)("img/wxm-devices/helium/troubleshoot-ios-3.png")})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"factory-reset",children:"Factory reset"}),"\n",(0,s.jsxs)("div",{class:"explanation small-big",children:[(0,s.jsx)("img",{src:(0,l.Ay)("img/wxm-devices/helium/reset-station.svg")}),(0,s.jsx)("span",{children:(0,s.jsx)(t.p,{children:"To factory reset, hold down the middle button on the bottom of the weather station, count to ~10 and release. The LED will start flashing very quickly as an indication that the factory reset has succeeded and then the station will restart."})})]}),"\n",(0,s.jsx)(t.h2,{id:"other-issues",children:"Other Issues"}),"\n",(0,s.jsx)(t.h3,{id:"how-to-see-if-there-is-helium-coverage-in-your-area",children:"How to see if there is Helium coverage in your area."}),"\n",(0,s.jsxs)(t.p,{children:["You can check the Helium coverage in your location by either using ",(0,s.jsx)(t.a,{href:"https://app.hotspotty.net/hotspots/statistics",children:"Hotspotty"})," or ",(0,s.jsx)(t.a,{href:"https://explorer.helium.com/",children:"Helium's Explorer"}),"."]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(t.h3,{id:"can-a-weatherxm-helium-station-paired-with-more-than-one-device",children:"Can a WeatherXM Helium station paired with more than one device?"}),"\n",(0,s.jsx)(t.p,{children:"Yes, it can be paired with multiple devices."}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(t.h3,{id:"in-order-for-the-weatherxm-helium-stations-to-work-should-they-be-in-a-helium-hexagon-or-the-principle-is-the-same-as-for-the-wifi-stations",children:"In order for the WeatherXM Helium stations to work, should they be in a Helium hexagon or the principle is the same as for the WiFi stations?"}),"\n",(0,s.jsx)(t.p,{children:"WeatherXM Helium weather stations transmit data by using the helium network. In order to work properly they should be in a place where there is Helium coverage."}),"\n",(0,s.jsx)("hr",{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(6540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);