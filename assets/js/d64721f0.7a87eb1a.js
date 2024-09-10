"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[423],{1347:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(8215);const i={tabItem:"tabItem_Ymn6"};var o=n(4848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,r),hidden:n,children:t})}},3384:(e,t,n)=>{n.d(t,{A:()=>b});var a=n(6540),i=n(8215),o=n(5236),r=n(6347),s=n(8385),l=n(5793),c=n(7422),d=n(4100);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,o=h(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,u]=m({queryString:n,groupId:i}),[y,w]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,o]=(0,d.Dv)(n);return[i,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:i}),g=(()=>{const e=c??y;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),w(e)}),[u,w,o]),tabValues:o}}var w=n(195);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=s[n].value;i!==a&&(c(t),r(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,i.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=y(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(f,{...t,...e})]})}function b(e){const t=(0,w.A)();return(0,x.jsx)(j,{...e,children:u(e.children)},String(t))}},1045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(4848),i=n(8453),o=(n(3384),n(1347),n(8189)),r=n(1090);const s={title:"Connect and Claim the Gateway",sidebar_label:"Gateway Claiming"},l=void 0,c={id:"wxm-devices/d1/connect-and-claim",title:"Connect and Claim the Gateway",description:"WG1200 Gateway",source:"@site/docs/wxm-devices/d1/connect-and-claim.mdx",sourceDirName:"wxm-devices/d1",slug:"/wxm-devices/d1/connect-and-claim",permalink:"/wxm-devices/d1/connect-and-claim",draft:!1,unlisted:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/wxm-devices/d1/connect-and-claim.mdx",tags:[],version:"current",frontMatter:{title:"Connect and Claim the Gateway",sidebar_label:"Gateway Claiming"},sidebar:"docs",previous:{title:"Station Installation",permalink:"/wxm-devices/d1/install-weather-station"},next:{title:"Maintenance",permalink:"/wxm-devices/d1/maintenance"}},d={},u=[{value:"WG1200 Gateway",id:"wg1200-gateway",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step by Step Instructions",id:"step-by-step-instructions",level:2},{value:"Connect WG1200 Gateway to power source and turn the gateway on",id:"connect-wg1200-gateway-to-power-source-and-turn-the-gateway-on",level:3},{value:"Change Frequency (Optional)",id:"change-frequency-optional",level:3},{value:"Steps to change the frequency",id:"steps-to-change-the-frequency",level:3},{value:"Connect WG1200 Gateway to WiFi",id:"connect-wg1200-gateway-to-wifi",level:3},{value:"Video Guide",id:"video-guide",level:4},{value:"Download WeatherXM app and login",id:"download-weatherxm-app-and-login",level:3},{value:"Tap the &quot;+&quot; button",id:"tap-the--button",level:3},{value:"Prepare for claiming your WG1200 Gateway",id:"prepare-for-claiming-your-wg1200-gateway",level:3},{value:"Navigate to WG1200 Gateway and reveal the QR code",id:"navigate-to-wg1200-gateway-and-reveal-the-qr-code",level:4},{value:"Confirm station installation Location &amp; Claim your Device",id:"confirm-station-installation-location--claim-your-device",level:3},{value:"Select the Location that you&#39;ll Install your Station",id:"select-the-location-that-youll-install-your-station",level:4}];function h(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"wg1200-gateway",children:"WG1200 Gateway"}),"\n",(0,a.jsx)("img",{"object-fit":"contain",src:(0,o.Ay)("/img/wxm-devices/d1/wg1200-gateway-side.png"),style:{width:"50%",height:"auto"}}),"\n",(0,a.jsx)(t.p,{children:"The weather station comes together with the WG1200 Gateway.\nThe WG1200 Gateway receives all the meteorological data plus the location of the weather station, which are measured and transmitted every 16 seconds by the outdoor sensor\nand displays them on its screen."}),"\n",(0,a.jsx)(t.p,{children:"In this chapter, you will find guidance to set up the WG1200 Gateway."}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"The station must be fully assembled (parts and batteries)."}),"\n",(0,a.jsx)(t.li,{children:"A working smartphone with connection to the internet."}),"\n",(0,a.jsxs)(t.li,{children:["A reliable 2.4 GHz WiFi network (",(0,a.jsx)(t.strong,{children:"5 GHz is not supported"}),") for the WG1200 Gateway to connect to."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.a,{href:"/wxm-devices/d1/connect-and-claim#download-weatherxm-app-and-login",children:"WeatherXM"})," Application installed on your smartphone."]}),"\n"]}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h2,{id:"step-by-step-instructions",children:"Step by Step Instructions"}),"\n",(0,a.jsx)(t.h3,{id:"connect-wg1200-gateway-to-power-source-and-turn-the-gateway-on",children:"Connect WG1200 Gateway to power source and turn the gateway on"}),"\n",(0,a.jsx)(t.p,{children:"The WG1200 Gateway must be connected to a power source at all times."}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:["If WG1200 Gateway turns off, you will not receive $WXM rewards, as you will not be able to share data with the WeatherXM network. ",(0,a.jsx)(t.strong,{children:"This will result in no $WXM rewards!"}),"\nWG1200 does not have a battery, so it must be connected to a power source at all times."]})}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"change-frequency-optional",children:"Change Frequency (Optional)"}),"\n",(0,a.jsxs)("div",{class:"explanation",children:[(0,a.jsx)("img",{src:(0,o.Ay)("/img/wxm-devices/d1/d1-set-freq.png")}),(0,a.jsxs)("span",{children:[(0,a.jsx)(t.p,{children:"The WG1200 Gateway's frequency must be set to match the frequency of your weather station so it can listen for the weather data it transmits. There are 2 frequencies available:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Model A: 868 MHz (default)"}),"\n",(0,a.jsx)(t.li,{children:"Model B: 915 MHz"}),"\n"]}),(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"If your weather station is 868 MHz, you don't need to change anything as it is configured to this value by default."}),"\nIf unsure, check the sticker under the station or the box that came in it."]})})]})]}),"\n",(0,a.jsx)(t.h3,{id:"steps-to-change-the-frequency",children:"Steps to change the frequency"}),"\n",(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("img",{class:"control",src:(0,o.Ay)("img/wxm-devices/d1/d1-swipe-right.png"),style:{width:"24%",height:"auto"}}),(0,a.jsx)("img",{class:"control",src:(0,o.Ay)("img/wxm-devices/d1/d1-select-freq.png"),style:{width:"24%",height:"auto"}}),(0,a.jsx)("img",{class:"control",src:(0,o.Ay)("img/wxm-devices/d1/d1-set-freq.png"),style:{width:"24%",height:"auto"}}),(0,a.jsx)("img",{class:"control",src:(0,o.Ay)("img/wxm-devices/d1/d1-select-freq.png"),style:{width:"24%",height:"auto"}})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Swipe right on the touch screen."}),"\n",(0,a.jsx)(t.li,{children:"Click the Frequency options and select the new frequency your WG1200 Gateway will listen to."}),"\n",(0,a.jsx)(t.li,{children:'A confirmation dialog will open. Read it carefully and click "Continue" or "Cancel" accordingly.'}),"\n",(0,a.jsx)(t.li,{children:"Finally, your WG1200 Gateway will restart after setting the frequency to the selected one."}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"If you don't use the correct frequency as your weather station, WG1200 Gateway will not be able to communicate with your weather station, thus you will not send any weather data and receive any $WXM rewards!"})}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"connect-wg1200-gateway-to-wifi",children:"Connect WG1200 Gateway to WiFi"}),"\n",(0,a.jsxs)("div",{style:{display:"flex"},children:[(0,a.jsx)("img",{class:"control",src:(0,o.Ay)("img/wxm-devices/d1/d1-wifi.png"),style:{width:"24%",height:"auto",marginBottom:"auto"}}),(0,a.jsx)("img",{class:"control",src:(0,o.Ay)("img/wxm-devices/d1/d1-waiting-connection.png"),style:{width:"24%",height:"auto",marginBottom:"auto"}}),(0,a.jsx)("img",{class:"control",src:(0,o.Ay)("img/wxm-devices/d1/d1-connected.png"),style:{width:"24%",height:"auto",marginBottom:"auto"}})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Swipe right on the touch screen and select the Configure WiFi option."}),"\n",(0,a.jsx)(t.li,{children:"The WG1200 Gateway will restart to enter configuration mode."}),"\n",(0,a.jsx)(t.li,{children:'An Access Point will be created with SSID "WXM_WG1200", you should connect to it from your smartphone. It is normal not having internet connection while connected to it.'}),"\n",(0,a.jsx)(t.li,{children:"Once connected, a popup will appear on your smartphone to enter your WiFi credentials."}),"\n",(0,a.jsx)(t.li,{children:'Enter your WiFi credentials and click "Save".'}),"\n",(0,a.jsx)(t.li,{children:"The WG1200 Gateway will restart and connect to your WiFi network."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"By now, your WG1200 Gateway is set and ready for claiming."}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"In case of a successful connection, and the popup doesn\u2019t open, navigate with your browser to 10.10.0.1 and follow the instructions displayed."})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:'While you are connected to the "WXM_WG1200" network, you will not have internet access.'})}),"\n",(0,a.jsx)(t.h4,{id:"video-guide",children:"Video Guide"}),"\n",(0,a.jsx)(r.A,{to:"https://www.youtube.com/watch?v=D3rz1Y01Qhg",target:"blank",children:(0,a.jsx)("img",{src:(0,o.Ay)("img/wxm-devices/d1/d1-connect-to-wifi.png")})}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"download-weatherxm-app-and-login",children:"Download WeatherXM app and login"}),"\n",(0,a.jsxs)("div",{class:"explanation",children:[(0,a.jsxs)("div",{class:"app-store",children:[(0,a.jsx)(r.A,{to:"https://play.google.com/store/apps/details?id=com.weatherxm.app&hl=en&gl=US",target:"blank",children:(0,a.jsx)("img",{src:(0,o.Ay)("img/wxm-devices/google-play-badge.svg")})}),(0,a.jsx)(r.A,{to:"https://apps.apple.com/ie/app/weatherxm/id1629841929",target:"blank",children:(0,a.jsx)("img",{src:(0,o.Ay)("img/wxm-devices/app-store-badge.svg")})})]}),(0,a.jsx)("span",{children:"Download our WeatherXM apps from their respective app store. Once you have your WeatherXM app, login to your account (you have to create a new WeatherXM account)."})]}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"tap-the--button",children:'Tap the "+" button'}),"\n",(0,a.jsxs)("div",{class:"explanation",children:[(0,a.jsx)("img",{src:(0,o.Ay)("img/wxm-devices/plus-button.svg")}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{children:"Start the Claiming Process"}),(0,a.jsx)("p",{children:(0,a.jsx)(t.p,{children:"Once you've logged in to your WeatherXM app, you will see an empty device list (assuming this is your first station setup). At the bottom right corner, you will see a \"+\" button. Tap it to start the claiming process of your station. Once you've done this, you'll be able to view all data of this station."})})]})]}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"Your first rewards will appear after 24 hours of the station being online."})}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"prepare-for-claiming-your-wg1200-gateway",children:"Prepare for claiming your WG1200 Gateway"}),"\n",(0,a.jsxs)("div",{class:"explanation",children:[(0,a.jsx)("img",{style:{width:"calc(100%*1/3 - 10px)"},src:(0,o.Ay)("img/wxm-devices/d1/d1-claim-prepare.jpeg")}),(0,a.jsxs)("div",{style:{width:"calc(100%*2/3 - 10px)"},children:[(0,a.jsx)(t.h4,{id:"navigate-to-wg1200-gateway-and-reveal-the-qr-code",children:"Navigate to WG1200 Gateway and reveal the QR code"}),(0,a.jsx)(t.p,{children:'Swipe right on the touch screen and select the "Claim Device" option, a QR code will appear.'}),(0,a.jsx)(t.p,{children:"You'll need to scan the QR code in the WeatherXM app in order to verify that you own this station and secure it for yourself."}),(0,a.jsx)("img",{class:"control",src:(0,o.Ay)("/img/wxm-devices/d1/d1-claim.gif"),style:{width:"50%",height:"auto"}}),(0,a.jsx)("img",{class:"control",src:(0,o.Ay)("/img/wxm-devices/d1/d1-qr-claim-static.png"),style:{width:"50%",height:"auto"}})]})]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"In case you have trouble scanning the QR code, you can manually type the serial number and claiming key."})}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"confirm-station-installation-location--claim-your-device",children:"Confirm station installation Location & Claim your Device"}),"\n",(0,a.jsxs)("div",{class:"explanation small-big",children:[(0,a.jsx)("img",{src:(0,o.Ay)("img/wxm-devices/d1/d1-location.png")}),(0,a.jsxs)("span",{children:[(0,a.jsx)(t.h4,{id:"select-the-location-that-youll-install-your-station",children:"Select the Location that you'll Install your Station"}),(0,a.jsx)(t.p,{children:"Allow access to your location so that the WeatherXM app knows where you are planning to install your weather station. Doing so will make it easier to complete this step."}),(0,a.jsx)(t.p,{children:"Alternatively, you can find the location manually using the map."}),(0,a.jsx)(t.p,{children:'Once you\'ve found the right location, tap on the checkbox to confirm and then tap on "Claim" button.'}),(0,a.jsxs)(t.p,{children:["All you need to do now, is to add your compatible wallet so you can receive WXM rewards. To do so, please follow the instructions in the chapter  ",(0,a.jsx)(t.a,{href:"/mobile-app/wallet/add-edit-wallet-address#how-to-create-wallet-on-metamask",children:'"Add/edit wallet address"'}),"."]}),(0,a.jsx)(t.p,{children:"That's it! You've now claimed your new weather station and you'll be able to see its data on your WeatherXM app!"}),(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"We do not track you, nor do we collect any data about your location."})}),(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"Make sure you define the location that you will install your station as precisely as possible, as this is important for the quality of data you will share with the network and thus your overall WXM rewards."})}),(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"Your first rewards will appear after 24 hours of the station being online."})})]})]}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsx)(t.mdxAdmonitionTitle,{}),(0,a.jsxs)(t.p,{children:["Usually, it takes up to 30 minutes for the station to appear on the ",(0,a.jsx)(t.a,{href:"https://explorer.weatherxm.com/stats",children:"explorer"})]})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var a=n(6540);const i={},o=a.createContext(i);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);