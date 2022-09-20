"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),h=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=h(n),m=o,p=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(p,s(s({ref:t},c),{},{components:n})):i.createElement(p,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var h=2;h<a;h++)s[h]=n[h];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(7462),o=(n(7294),n(3905)),a=n(4996);const s={id:"m5-install-weather-station",title:"Installing the WXM-WS1000 Weather station",sidebar_label:"Installing the WXM-WS1000",slug:"/wxm-devices/wifi-m5-bundle/install-weather-station"},r=void 0,l={unversionedId:"wxm-devices/wifi-m5-bundle/m5-install-weather-station",id:"wxm-devices/wifi-m5-bundle/m5-install-weather-station",title:"Installing the WXM-WS1000 Weather station",description:"Prerequisites for proper installation",source:"@site/docs/wxm-devices/wifi-m5-bundle/m5-install-weather-station.mdx",sourceDirName:"wxm-devices/wifi-m5-bundle",slug:"/wxm-devices/wifi-m5-bundle/install-weather-station",permalink:"/wxm-devices/wifi-m5-bundle/install-weather-station",draft:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/wxm-devices/wifi-m5-bundle/m5-install-weather-station.mdx",tags:[],version:"current",frontMatter:{id:"m5-install-weather-station",title:"Installing the WXM-WS1000 Weather station",sidebar_label:"Installing the WXM-WS1000",slug:"/wxm-devices/wifi-m5-bundle/install-weather-station"},sidebar:"docs",previous:{title:"Assembling WXM-WS1000",permalink:"/wxm-devices/wifi-m5-bundle/assemble-m5"},next:{title:"Connect and Claim Station",permalink:"/wxm-devices/wifi-m5-bundle/m5-connect-and-claim"}},h={},c=[{value:"Prerequisites for proper installation",id:"prerequisites-for-proper-installation",level:2},{value:"Best Practices for Proper Station Installation",id:"best-practices-for-proper-station-installation",level:3},{value:"Pole&#39;s Height",id:"poles-height",level:3},{value:"Tighten Pole",id:"tighten-pole",level:3},{value:"Installation Point",id:"installation-point",level:3},{value:"Video Instructions with Dr. Keppas",id:"video-instructions-with-dr-keppas",level:2},{value:"Mounting the outdoor sensor",id:"mounting-the-outdoor-sensor",level:2},{value:"Maintenance of the outdoor sensor",id:"maintenance-of-the-outdoor-sensor",level:3},{value:"Instructions for opening the rain gauge",id:"instructions-for-opening-the-rain-gauge",level:4}],d={toc:c};function u(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites-for-proper-installation"},"Prerequisites for proper installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Pole of at least 2 meters / 6.56 feet (not included)"),(0,o.kt)("li",{parentName:"ol"},"Base or bolts to secure in place (not included)"),(0,o.kt)("li",{parentName:"ol"},"Location and spacing (Best Practices for Proper Station Installation)")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"It is imperative that you properly install your weather station. This will create the necessary conditions for quality weather data collection, which are required for purpose of the WeatherXM network, and the resulting rewards. Faulty installation, will result in less to none WXM rewards.")),(0,o.kt)("h3",{id:"best-practices-for-proper-station-installation"},"Best Practices for Proper Station Installation"),(0,o.kt)("p",null,"It is very important that your weather station collects quality measurements.\nThis turns the weather station into a powerful tool for yourself and WeatherXM."),(0,o.kt)("details",{class:"accordion"},(0,o.kt)("summary",null,"Proper Installation Best Practices"),(0,o.kt)("p",null,"The values of the various meteorological parameters measured by a weather station can significantly differ depending on the obstacles\nand the material of the surfaces existing around the sensors. For this reason, there is a series of criteria that should be fulfilled:"),(0,o.kt)("h3",{id:"poles-height"},"Pole's Height"),(0,o.kt)("section",{class:"explanation horizontal"},(0,o.kt)("div",{class:"copy"},(0,o.kt)("p",null,"The pole\u2019s height, on which the outdoor sensor will be mounted, should be at least 2 meters. This means that the outdoor sensor should be placed at least 2 meters above the ground and any other horizontal or almost a horizontal surface (e.g., roof) above the sensor. The maximum acceptable pole height is 5 meters.")),(0,o.kt)("div",{class:"images"},(0,o.kt)("img",{src:(0,a.Z)("img/wxm-devices/wifi-m5-bundle/ground-height.svg")}),(0,o.kt)("img",{src:(0,a.Z)("img/wxm-devices/wifi-m5-bundle/roof-deployment.svg")}))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"tighten-pole"},"Tighten Pole"),(0,o.kt)("p",null,"The pole should be adequately tightened in order to prevent any pole oscillations in cases of strong winds.\nThis will prevent the rain gauge spoon from faulty swinging and collecting faulty precipitation measurements."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"installation-point"},"Installation Point"),(0,o.kt)("p",null,"The pole together with the outdoor sensor should be placed in an installation point, which:"),(0,o.kt)("section",{class:"explanation horizontal"},(0,o.kt)("div",{class:"copy"},(0,o.kt)("h4",null,"1. Away from heat sources"),(0,o.kt)("p",null,"Is not affected by the air or smoke flowing out of any chimneys or ventilation systems (as an illustration, consider that wind of a certain direction may move warm smoke towards the sensors). An advisable distance from a heat source is >5 meters (depending on the heat source though)")),(0,o.kt)("div",{class:"images"},(0,o.kt)("img",{src:(0,a.Z)("img/wxm-devices/wifi-m5-bundle/chimney-deployment.svg")}),(0,o.kt)("img",{src:(0,a.Z)("img/wxm-devices/wifi-m5-bundle/airflow-deployment.svg")}))),(0,o.kt)("section",{class:"explanation horizontal"},(0,o.kt)("div",{class:"copy"},(0,o.kt)("h4",null,"2. Do not get in shadowed areas"),(0,o.kt)("p",null,"Is not shadowed by any obstacles during the day (consider that the sun typically is higher during summer and lower during winter affecting the shadow caused by an item)")),(0,o.kt)("div",{class:"images"},(0,o.kt)("img",{src:(0,a.Z)("img/wxm-devices/wifi-m5-bundle/building-with-pool-in-roof.svg")}),(0,o.kt)("img",{src:(0,a.Z)("img/wxm-devices/wifi-m5-bundle/ws1000-shadow-soft.svg")}))),(0,o.kt)("section",{class:"explanation horizontal"},(0,o.kt)("div",null,(0,o.kt)("h4",null,"3. Adequate Distance"),(0,o.kt)("p",null,"Has a distance from any obstacles around, which 2-4 times larger than the height of the highest obstacle (e.g., if the highest obstacle around the installation point is a 6-meter tree, ht=6m, and the pole of the outdoor sensor is 2 meters, hp=2m, then the pole should be placed at a distance (dp) of 8-16 meters, 2 x (ht-hp) < dp < 4 x (ht-hp). In case the pole is placed on a building\u2019s roof, then the building\u2019s height should be added to the pole\u2019s height). Note that in cases of obstacles with a height >8 meters, you should consider placing the outdoor sensor at a distance 30 times the width and 15 times the height of the obstacles around.")),(0,o.kt)("div",{class:"images"},(0,o.kt)("img",{src:(0,a.Z)("img/wxm-devices/wifi-m5-bundle/wall.svg")}),(0,o.kt)("img",{src:(0,a.Z)("img/wxm-devices/wifi-m5-bundle/tree.svg")}))),(0,o.kt)("section",null,"Note that all of 1., 2. and 3. are important tips for measuring an accurate as possible temperature and humidity, while 3. is important for avoiding faulty precipitation and wind measurements.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"video-instructions-with-dr-keppas"},"Video Instructions with Dr. Keppas"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=J-dSXNLX4nk&ab_channel=WeatherXM"},(0,o.kt)("img",{alt:"Instruction on how to install the M5 WeatherXM weather station",src:n(3588).Z,width:"1252",height:"814"}))),(0,o.kt)("h2",{id:"mounting-the-outdoor-sensor"},"Mounting the outdoor sensor"),(0,o.kt)("section",{class:"explanation"},(0,o.kt)("img",{src:(0,a.Z)("img/wxm-devices/wifi-m5-bundle/pole-assembly.svg")}),(0,o.kt)("div",null,(0,o.kt)("h4",null,"Mounting and aligning sensor"),(0,o.kt)("p",null,"If this is the first time that you set up this outdoor sensor, then you should make sure that all the parts work properly before mounting the sensor on the pole outdoors. Thus, it is important that you are able to read all the measurements on the weather miner\u2019s screen, while you keep the outdoor sensor nearby (preferably not closer than 1.5m from the weather miner though). When you are about to fasten the pole on which you have tightened the outdoor sensor, look at the bubble level."))),(0,o.kt)("p",null,"After fastening the pole, the bubble should be fully inside the red circle.\nIf it is not, wind direction, speed, and rain readings may not operate correctly or accurately.\nAdjust the mounting pipe as necessary. If the bubble is close, but not quire inside the circle,\nand you cannot adjust the mounting pole, you may try small wooden or heavy cardboard shims between the outdoor sensor\nand the top of the mounting pole to achieve the desired result (this will require loosening the bolts and some experimentation).\nNow, you may tighten the bolts with a wrench."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"maintenance-of-the-outdoor-sensor"},"Maintenance of the outdoor sensor"),(0,o.kt)("p",null,"The maintenance of the outdoor sensor is an important process, which should be conducted meticulously over the suggested periods of time.\nThis process includes the cleansing of certain parts of the outdoor unit and the checking of the battery level.\nThe maintenance process is summarized in the following steps:"),(0,o.kt)("div",{class:"control"},(0,o.kt)("img",{src:(0,a.Z)("img/wxm-devices/wifi-m5-bundle/maintenance.svg")})),(0,o.kt)("h4",{id:"instructions-for-opening-the-rain-gauge"},"Instructions for opening the rain gauge"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clean the rain gauge at least once every 3 months.\nRotate the funnel counter-clockwise and lift to expose the rain gauge mechanism,\nand clean with a damp cloth. Remove any dirt, debris and insects.\nIf bug infestation is an issue, spray the array lightly with insecticide.\nIt is important not to swing the rain gauge spoon during this process,\nas the weather station will measure and record faulty precipitation.\nIn order to avoid faulty measurements, you may turn off the M5 miner until finishing the entire process.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clean the solar panel at least every 3 months with a damp cloth."),(0,o.kt)("li",{parentName:"ol"},"Remove any dirt, debris and insects from the thermo-hygro sensor every 12 months. It might be needed to open the radiation shield using a screwdriver and fully clean the thermo-hygro sensor in case there is too much debris on it."),(0,o.kt)("li",{parentName:"ol"},"Replace batteries every 1-2 years. If left in too long, the batteries may leak due to environmental challenges.\nIn harsh environments, inspect the batteries every 3 months (e.g. when cleaning the solar panel).\nWhen replacing the batteries, apply a corrosion preventive compound on the battery terminals, available at most hardware stores")))}u.isMDXComponent=!0},3588:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/video-setup-installation-bf422c8a9e5fb4700581df56249b1aae.png"}}]);