"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,p=d["".concat(l,".").concat(m)]||d[m]||h[m]||o;return n?r.createElement(p,i(i({ref:t},c),{},{components:n})):r.createElement(p,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),s=n(6550),l=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=p({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=n(2389);const g="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==s&&(d(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:h},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},1060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(4996);const s={id:"helium-troubleshooting",title:"WXM-WS2000 Troubleshooting",sidebar_label:"WXM-WS2000 Troubleshooting",slug:"/helium-bundle/helium-troubleshooting"},l=void 0,u={unversionedId:"wxm-devices/helium-bundle/helium-troubleshooting",id:"wxm-devices/helium-bundle/helium-troubleshooting",title:"WXM-WS2000 Troubleshooting",description:"if you experience connection issues while claiming a helium device,  make sure you are near the station.",source:"@site/docs/wxm-devices/helium-bundle/helium-troubleshooting.mdx",sourceDirName:"wxm-devices/helium-bundle",slug:"/helium-bundle/helium-troubleshooting",permalink:"/helium-bundle/helium-troubleshooting",draft:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/wxm-devices/helium-bundle/helium-troubleshooting.mdx",tags:[],version:"current",frontMatter:{id:"helium-troubleshooting",title:"WXM-WS2000 Troubleshooting",sidebar_label:"WXM-WS2000 Troubleshooting",slug:"/helium-bundle/helium-troubleshooting"},sidebar:"docs",previous:{title:"Installing the WXM-WS2000",permalink:"/wxm-devices/helium-bundle/helium-install-weather-station"},next:{title:"Maintenance of WXM-WS2000",permalink:"/wxm-devices/wifi-helium-bundle/helium-maintenance"}},c={},d=[{value:"The updating process lasts forever",id:"the-updating-process-lasts-forever",level:3},{value:"Asks to pair but fails",id:"asks-to-pair-but-fails",level:3},{value:"My station is not detected during scanning",id:"my-station-is-not-detected-during-scanning",level:3},{value:"The process does not start or is stopped before it is completed",id:"the-process-does-not-start-or-is-stopped-before-it-is-completed",level:3},{value:"The app cannot connect to the station after successfully pairing",id:"the-app-cannot-connect-to-the-station-after-successfully-pairing",level:3}],h=(m="TabItem",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const p={toc:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"if you experience connection issues while claiming a helium device,  make sure you are near the station."))),(0,a.kt)("h3",{id:"the-updating-process-lasts-forever"},"The updating process lasts forever"),(0,a.kt)("div",{class:"explanation small-big"},(0,a.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/reset_station.svg")}),(0,a.kt)("span",null,(0,a.kt)("p",null,"If the process hangs and does not proceed or if pairing fails, try a factory reset.\nTo factory reset, hold down the middle button on the bottom of the weather station, count to ~10 and release. The LED will start flashing very quickly as an indication that the factory reset has succeeded and then the station will restart."))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"asks-to-pair-but-fails"},"Asks to pair but fails"),(0,a.kt)("div",{class:"explanation small-big"},(0,a.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/fail-pairing.svg")}),(0,a.kt)("span",null,(0,a.kt)("p",null,"Restart your station. Pairing is only allowed in the first 5 minutes after the station is started. After 5 minutes the station refuses pairing. If the problem persists, do a factory reset and try again. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The Helium station is reset to factory settings by pressing and holding the reset button for ~5 seconds. When released, a pulsating red indicator should be displayed to the right of it. This indicates a successful reset to the factory settings of the helium station."),(0,a.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/reset_station.svg")})))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"my-station-is-not-detected-during-scanning"},"My station is not detected during scanning"),(0,a.kt)("div",{class:"explanation small-big"},(0,a.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/no-device-found.svg")}),(0,a.kt)("span",null,(0,a.kt)("p",null,"Make sure the device has started.  Press the reset button at the bottom of the weather station. The light at the bottom of the station will flash a few times. the light at the bottom of the station will flash a few times indicating that the restart was successful.\nIf it continues to go undetected, try scanning again from a closer distance. The operating bluetooth range of the station is around 10m/32ft with few obstacles."))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"the-process-does-not-start-or-is-stopped-before-it-is-completed"},"The process does not start or is stopped before it is completed"),(0,a.kt)("div",{class:"explanation small-big"},(0,a.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/scanning-failed.svg")}),(0,a.kt)("span",null,(0,a.kt)("p",null,"Close the application and start the process again. If the problem persists, press the reset button at the bottom of the weather station and try again. Finally, try doing a factory reset."))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"the-app-cannot-connect-to-the-station-after-successfully-pairing"},"The app cannot connect to the station after successfully pairing"),(0,a.kt)("div",{class:"explanation small-big"},(0,a.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/connection-failed.svg")}),(0,a.kt)("span",null,'If the claiming process is repeated more than twice without completion, attempt to unpair your weather station and start over. If you encounter connection problems during the claiming, make sure that you are near to the weather station at all times. The solution to the above is to visit the Bluetooth settings of the mobile phone, find the station in the paired devices and "forget the device". This flow is different on Android and iOS.')),(0,a.kt)("h3",null,"How to forget/unpair your device"),(0,a.kt)(o.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,a.kt)(h,{value:"android",mdxType:"TabItem"},(0,a.kt)("div",{class:"explanation small-big"},(0,a.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/troubleshoot-android-1.png")}),(0,a.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/troubleshoot-android-2.png")}),(0,a.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/troubleshoot-android-3.png")}))),(0,a.kt)(h,{value:"ios",mdxType:"TabItem"},(0,a.kt)("div",{class:"explanation small-big"},(0,a.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/troubleshoot-iOS-1.png")}),(0,a.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/troubleshoot-iOS-2.png")}),(0,a.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/troubleshoot-iOS-3.png")})))))}f.isMDXComponent=!0}}]);