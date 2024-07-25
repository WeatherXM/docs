"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1846],{1347:(e,n,i)=>{i.d(n,{A:()=>s});i(6540);var t=i(8215);const l={tabItem:"tabItem_Ymn6"};var r=i(4848);function s(e){let{children:n,hidden:i,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,s),hidden:i,children:n})}},3384:(e,n,i)=>{i.d(n,{A:()=>g});var t=i(6540),l=i(8215),r=i(5236),s=i(6347),a=i(8385),o=i(5793),d=i(7422),c=i(4100);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:l}}=e;return{value:n,label:i,attributes:t,default:l}}))}(i);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function m(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:i}=e;const l=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,o.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function p(e){const{defaultValue:n,queryString:i=!1,groupId:l}=e,r=h(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[d,u]=x({queryString:i,groupId:l}),[p,w]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,c.Dv)(i);return[l,(0,t.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:l}),v=(()=>{const e=d??p;return m({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),w(e)}),[u,w,r]),tabValues:r}}var w=i(195);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=i(4848);function b(e){let{className:n,block:i,selectedValue:t,selectValue:s,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,i=o.indexOf(n),l=a[i].value;l!==t&&(d(n),s(l))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const i=o.indexOf(e.currentTarget)+1;n=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(e.currentTarget)-1;n=o[i]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":i},n),children:a.map((e=>{let{value:n,label:i,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...r,className:(0,l.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function f(e){let{lazy:n,children:i,selectedValue:l}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=p(e);return(0,j.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(f,{...n,...e})]})}function g(e){const n=(0,w.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},1853:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var t=i(4848),l=i(8453),r=i(8189),s=i(1090),a=i(3384),o=i(1347);const d={id:"wxm-ws1000-introduction",title:"Introduction of M5 bundle (WB1000)",hide_title:!1,sidebar_label:"Introduction",slug:"/wxm-devices/wifi-m5-bundle/wxm-ws1000-introduction",hide_table_of_contents:!1},c=void 0,u={id:"wxm-devices/wifi-m5-bundle/wxm-ws1000-introduction",title:"Introduction of M5 bundle (WB1000)",description:"You're now the proud owner of a WeatherXM Station. Welcome to the People's Weather Network!",source:"@site/docs/wxm-devices/wifi-m5-bundle/wxm-ws1000-introduction.mdx",sourceDirName:"wxm-devices/wifi-m5-bundle",slug:"/wxm-devices/wifi-m5-bundle/wxm-ws1000-introduction",permalink:"/wxm-devices/wifi-m5-bundle/wxm-ws1000-introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/wxm-devices/wifi-m5-bundle/wxm-ws1000-introduction.mdx",tags:[],version:"current",frontMatter:{id:"wxm-ws1000-introduction",title:"Introduction of M5 bundle (WB1000)",hide_title:!1,sidebar_label:"Introduction",slug:"/wxm-devices/wifi-m5-bundle/wxm-ws1000-introduction",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Introduction",permalink:"/introduction"},next:{title:"Box Contents",permalink:"/wxm-devices/wifi-m5-bundle/m5-contents"}},h={},m=[{value:"Next steps",id:"next-steps",level:2},{value:"Check the box contents",id:"check-the-box-contents",level:3},{value:"Assemble your weather station",id:"assemble-your-weather-station",level:3},{value:"Install your weather station",id:"install-your-weather-station",level:3},{value:"Connect and claim station",id:"connect-and-claim-station",level:3},{value:"Add your ERC20 compatible wallet",id:"add-your-erc20-compatible-wallet",level:3},{value:"Features and Specifications",id:"features-and-specifications",level:2},{value:"WG1000 Gateway",id:"wg1000-gateway",level:3},{value:"WS1000 Weather Station",id:"ws1000-weather-station",level:3},{value:"Temperature:",id:"temperature",level:4},{value:"Relative Humidity:",id:"relative-humidity",level:4},{value:"Rain Volume:",id:"rain-volume",level:4},{value:"Wind Speed:",id:"wind-speed",level:4},{value:"Wind Direction:",id:"wind-direction",level:4},{value:"Illuminance:",id:"illuminance",level:4},{value:"Pressure:",id:"pressure",level:4},{value:"Sensor :",id:"sensor-",level:4},{value:"Temperature:",id:"temperature-1",level:4},{value:"Relative Humidity:",id:"relative-humidity-1",level:4},{value:"Rain Volume:",id:"rain-volume-1",level:4},{value:"Wind Speed:",id:"wind-speed-1",level:4},{value:"Wind Direction:",id:"wind-direction-1",level:4},{value:"Illuminance:",id:"illuminance-1",level:4},{value:"Pressure:",id:"pressure-1",level:4},{value:"Sensor :",id:"sensor--1",level:4}];function x(e){const n={h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{className:"subtitle",children:"You're now the proud owner of a WeatherXM Station. Welcome to the People's Weather Network!"}),"\n",(0,t.jsx)("div",{class:"control",children:(0,t.jsx)("img",{src:(0,r.Ay)("img/home/m5.png")})}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsx)(n.p,{children:"You just got your station, or, you will soon!\nLet's see what are the necessary steps in order to properly assemble, install, claim and enable it to send data in order to receive $WXM reward tokens."}),"\n",(0,t.jsx)(n.h3,{id:"check-the-box-contents",children:"Check the box contents"}),"\n",(0,t.jsx)(n.p,{children:"Make sure that everything is in order and you're all set to proceed with station assembly."}),"\n",(0,t.jsx)(s.A,{to:"/wxm-devices/wifi-m5-bundle/m5-contents",children:"View Contents"}),"\n",(0,t.jsx)(n.h3,{id:"assemble-your-weather-station",children:"Assemble your weather station"}),"\n",(0,t.jsxs)(n.p,{children:["Assemble all parts and make sure all sensors work as expected. For this step, ",(0,t.jsx)(n.strong,{children:"you will need 2 AA batteries that are not included in the box."})]}),"\n",(0,t.jsx)(s.A,{to:"/wxm-devices/wifi-m5-bundle/assemble-m5",children:"View Station Assembly Instructions"}),"\n",(0,t.jsx)(n.h3,{id:"install-your-weather-station",children:"Install your weather station"}),"\n",(0,t.jsxs)(n.p,{children:["This is one of the most important steps, as proper installation is key in order to collect valid weather data. For this step, ",(0,t.jsx)(n.strong,{children:"you will need a pole that is at least 2m/6.5ft and a way to secure it in place (both not included in the box)."})," Here you will also see the best practices on how to properly install the station according to WMO."]}),"\n",(0,t.jsx)(s.A,{to:"/wxm-devices/wifi-m5-bundle/install-weather-station",children:"View Station Installation Instructions"}),"\n",(0,t.jsx)(n.h3,{id:"connect-and-claim-station",children:"Connect and claim station"}),"\n",(0,t.jsxs)(n.p,{children:["Once you've finished with installation, you can connect your station to your WG1000 Gateway and claim them as your own in WeatherXM network. To do this, ",(0,t.jsxs)(n.strong,{children:["you will need to download our WeatherXM app (",(0,t.jsx)(s.A,{to:"https://play.google.com/store/apps/details?id=com.weatherxm.app&hl=en&gl=US",target:"blank",children:"Android"})," and ",(0,t.jsx)(s.A,{to:"https://apps.apple.com/ie/app/weatherxm/id1629841929",target:"blank",children:"iOS"}),")."]})]}),"\n",(0,t.jsx)(s.A,{to:"/wxm-devices/wifi-m5-bundle/m5-connect-and-claim",children:"View Connect and Claim Instructions"}),"\n",(0,t.jsx)(n.h3,{id:"add-your-erc20-compatible-wallet",children:"Add your ERC20 compatible wallet"}),"\n",(0,t.jsx)(n.p,{children:"In order to receive $WXM rewards, you will need to connect an ERC20 compatible wallet which supports Arbitrum One Network. We have prepared a guide to do so using MetaMask (although it is not mandatory to use this)."}),"\n",(0,t.jsx)(s.A,{to:"/wallet/add-edit-wallet-address#how-to-create-wallet-on-metamask",children:"View Wallet Addition Instructions"}),"\n",(0,t.jsx)(n.h2,{id:"features-and-specifications",children:"Features and Specifications"}),"\n",(0,t.jsx)(n.h3,{id:"wg1000-gateway",children:"WG1000 Gateway"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Capacitive touch screen"}),"\n",(0,t.jsx)(n.li,{children:"ATECC608 hardware encryption"}),"\n",(0,t.jsx)(n.li,{children:"GPS + BLE + RF"}),"\n",(0,t.jsx)(n.li,{children:"Forwards weather data via WiFi"}),"\n",(0,t.jsx)(n.li,{children:"Powered by USB"}),"\n",(0,t.jsx)(n.li,{children:"Over-the-air firmware upgradable"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ws1000-weather-station",children:"WS1000 Weather Station"}),"\n",(0,t.jsxs)(a.A,{defaultValue:"metric",values:[{label:"Metric",value:"metric"},{label:"Imperial",value:"imperial"}],children:[(0,t.jsxs)(o.A,{value:"metric",children:[(0,t.jsx)(n.p,{children:"Powered via a small solar panel and batteries and communicates with the WG1000 Gateway via RF (Radio Frequencies).\nThe maximum distance between this station and the WG1000 Gateway is 100m with line of sight."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"temperature",children:"Temperature:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Range: -40 ~ +60\xb0C"}),"\n",(0,t.jsx)(n.li,{children:"Accuracy: 0.2\xb0C"}),"\n",(0,t.jsx)(n.li,{children:"Resolution: 0.1\xb0C"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"relative-humidity",children:"Relative Humidity:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Range: 10% ~ 99%"}),"\n",(0,t.jsx)(n.li,{children:"Accuracy: \xb15%"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"rain-volume",children:"Rain Volume:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Range: 0 ~ 300 mm/h"}),"\n",(0,t.jsx)(n.li,{children:"Accuracy: \xb110%"}),"\n",(0,t.jsx)(n.li,{children:"Resolution: 0.3mm"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"wind-speed",children:"Wind Speed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Range: 0 ~ 50m/s"}),"\n",(0,t.jsx)(n.li,{children:"Accuracy: \xb11m/s (wind speed < 5m/s), \xb110% (wind speed > 5m/s)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"wind-direction",children:"Wind Direction:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Range: 0 ~ 359 degrees"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"illuminance",children:"Illuminance:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Range: 0 ~ 200 klux"}),"\n",(0,t.jsx)(n.li,{children:"Accuracy: \xb115%"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"pressure",children:"Pressure:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Range: 300 ~ 1100 hPa (equivalent to +9000m ~ -500m above / below sea level)"}),"\n",(0,t.jsx)(n.li,{children:"Accuracy: \xb13.9Pa"}),"\n",(0,t.jsx)(n.li,{children:"Resolution: 0.06Pa"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"sensor-",children:"Sensor :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reporting Interval: 16 seconds"}),"\n"]}),"\n"]}),"\n"]})]}),(0,t.jsxs)(o.A,{value:"imperial",children:[(0,t.jsx)(n.p,{children:"Powered via a small solar panel and batteries and communicates with the WG1000 Gateway via RF (Radio Frequencies).\nThe maximum distance between this station and the WG1000 Gateway is 328ft with line of sight."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"temperature-1",children:"Temperature:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Range: -40 ~ +140 \xb0F"}),"\n",(0,t.jsx)(n.li,{children:"Accuracy: 0.2 \xb0F"}),"\n",(0,t.jsx)(n.li,{children:"Resolution: 0.1 \xb0F"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"relative-humidity-1",children:"Relative Humidity:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Range: 10% ~ 99%"}),"\n",(0,t.jsx)(n.li,{children:"Accuracy: \xb15%"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"rain-volume-1",children:"Rain Volume:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Range: 0 ~ 11.8 in/h"}),"\n",(0,t.jsx)(n.li,{children:"Accuracy: \xb110%"}),"\n",(0,t.jsx)(n.li,{children:"Resolution: 0.01 in"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"wind-speed-1",children:"Wind Speed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Range: 0 ~ 3.2 ft/s"}),"\n",(0,t.jsx)(n.li,{children:"Accuracy: \xb13.2 ft/s (wind speed < 16.4 ft/s), \xb110% (wind speed > 16.4 ft/s)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"wind-direction-1",children:"Wind Direction:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Range: 0 ~ 359 degrees"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"illuminance-1",children:"Illuminance:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Range: 0 ~ 200 klux"}),"\n",(0,t.jsx)(n.li,{children:"Accuracy: \xb115%"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"pressure-1",children:"Pressure:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Range: 300 ~ 1100 hPa (equivalent to +9000m ~ -500m above / below sea level)"}),"\n",(0,t.jsx)(n.li,{children:"Accuracy: \xb13.9Pa"}),"\n",(0,t.jsx)(n.li,{children:"Resolution: 0.06Pa"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"sensor--1",children:"Sensor :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reporting Interval: 16 seconds"}),"\n"]}),"\n"]}),"\n"]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(6540);const l={},r=t.createContext(l);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);