"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[318],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,f=m["".concat(u,".").concat(c)]||m[c]||p[c]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),i=r(4996);const o={id:"helium-update-firmware",title:"Update Firmware",sidebar_label:"Update Firmware",slug:"/wxm-devices/helium-bundle/helium-update-firmware"},l=void 0,u={unversionedId:"wxm-devices/helium-bundle/helium-update-firmware",id:"wxm-devices/helium-bundle/helium-update-firmware",title:"Update Firmware",description:"Prepare device for firmware update",source:"@site/docs/wxm-devices/helium-bundle/helium-firmware-updade.mdx",sourceDirName:"wxm-devices/helium-bundle",slug:"/wxm-devices/helium-bundle/helium-update-firmware",permalink:"/wxm-devices/helium-bundle/helium-update-firmware",draft:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/wxm-devices/helium-bundle/helium-firmware-updade.mdx",tags:[],version:"current",frontMatter:{id:"helium-update-firmware",title:"Update Firmware",sidebar_label:"Update Firmware",slug:"/wxm-devices/helium-bundle/helium-update-firmware"},sidebar:"docs",previous:{title:"Connect and Claim Station",permalink:"/wxm-devices/helium-bundle/helium-connect-and-claim"},next:{title:"Installing the WXM-WS2000",permalink:"/wxm-devices/helium-bundle/helium-install-weather-station"}},s={},d=[{value:"Prepare device for firmware update",id:"prepare-device-for-firmware-update",level:3},{value:"Installing update",id:"installing-update",level:3},{value:"Successful firmware update",id:"successful-firmware-update",level:3}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"prepare-device-for-firmware-update"},"Prepare device for firmware update"),(0,a.kt)("section",{class:"explanation small-big"},(0,a.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/update-station.svg")}),(0,a.kt)("span",null,(0,a.kt)("p",null,"In order for your station to keep operating normally and receive WXM rewards, you must update the station."),(0,a.kt)("p",null,"The process is done wirelessly via bluetooth and requires you to be at a distance of ~<10m/32ft from the station."),(0,a.kt)("p",null,"This document describes the firmware update process using an Android smartphone, the process for iOS is similar."),(0,a.kt)("p",null,"Push the reset button at the bottom of your WeatherXM device to enable bluetooth pairing.This will expire in 5 minutes. After that, you will need to push it again to restart the pairing process."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"By pairing your device, WeatherXM app will be able to communicate and exchange all necessary data to continue pairing.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Make sure you don't move away from your station as you might lose bluetooth connection.")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"installing-update"},"Installing update"),(0,a.kt)("section",{class:"explanation small-big"},(0,a.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/installing-update.svg")}),(0,a.kt)("span",null,(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Do not switch off the application!")),(0,a.kt)("p",{parentName:"admonition"},"Make sure you don't move away from your station as you might lose bluetooth connection.")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"successful-firmware-update"},"Successful firmware update"),(0,a.kt)("section",{class:"explanation small-big"},(0,a.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/station-updated.svg")}),(0,a.kt)("span",null,(0,a.kt)("p",null,"That's it! You've now claimed your new WeatherXM station and you'll be able to see its data on your WeatherXM apps!"),(0,a.kt)("p",null,"All you need to do now, is to add your compatible wallet so you can receive WXM rewards. To do so, please follow the instructions in the chapter ",(0,a.kt)("a",{parentName:"p",href:"/wallet/adding-wallet"},'"Adding Wallets"'),". "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Remember that as of today, the WXM token is on testnet!")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);