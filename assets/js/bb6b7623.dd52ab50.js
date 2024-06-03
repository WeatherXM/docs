"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[297],{826:(o,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=e(4848),a=e(8453);const i={id:"proof-of-location",title:"Proof of Location (PoL)",sidebar_label:"Proof of Location  (PoL)",slug:"/project/proof-of-location"},r=void 0,s={id:"rewards/proof-of-location",title:"Proof of Location (PoL)",description:"The Proof-of-Location algorithm evaluates location data associated with the station, their accuracy, and consistency. It generates a score which is a confidence indicator about the station\u2019s location. WeatherXM places great importance on station continuity, and discourage relocations.",source:"@site/docs/rewards/proof-of-location.mdx",sourceDirName:"rewards",slug:"/project/proof-of-location",permalink:"/project/proof-of-location",draft:!1,unlisted:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/rewards/proof-of-location.mdx",tags:[],version:"current",frontMatter:{id:"proof-of-location",title:"Proof of Location (PoL)",sidebar_label:"Proof of Location  (PoL)",slug:"/project/proof-of-location"},sidebar:"docs",previous:{title:"Quality of Data (QoD)",permalink:"/project/quality-of-data"},next:{title:"Cell Capacity (CC)",permalink:"/project/cell-capacity"}},c={},l=[{value:"Proof-of-Location (PoL):",id:"proof-of-location-pol",level:3},{value:"Relocation",id:"relocation",level:3}];function d(o){const t={a:"a",admonition:"admonition",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Proof-of-Location"})," algorithm evaluates location data associated with the station, their accuracy, and consistency. It generates a score which is a confidence indicator about the station\u2019s location. WeatherXM places great importance on station continuity, and discourage relocations."]}),"\n",(0,n.jsx)(t.h3,{id:"proof-of-location-pol",children:"Proof-of-Location (PoL):"}),"\n",(0,n.jsxs)(t.p,{children:["PoL is a rational number in the range [0,1].\nA station\u2019s PoL must be greater than or equal to PoL_Threshold to be considered for inclusion in WeatherXM's ",(0,n.jsx)(t.strong,{children:"Rewarding Mechanism"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"PoL: is calculated based on the station\u2019s location, and the station\u2019s PoL history."}),"\n",(0,n.jsx)(t.li,{children:"PoL: is a dynamic value, and is recalculated every time a station\u2019s location is updated."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"relocation",children:"Relocation"}),"\n",(0,n.jsxs)(t.p,{children:["It is important for the Network that a station remains at the same location throughout its lifetime.\nWhen a weather station undergoes relocation, its Proof of Location score reduces to 0 for 7 days and its seniority is reset.\nAfter 7 days, the station\u2019s PoL is recalculated, and if it is greater than or equal to PoL_Threshold, the station is considered for inclusion in the ",(0,n.jsx)(t.a,{href:"https://weatherxm.network/",children:"WeatherXM Network"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Proof of Location penalty imposed to devices that went through a relocation is currently reduced to 2 days. This is a temporary measure and will be reverted back to 7 days."})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"PoL is a rational number in the range [0,1]"})})]})}function h(o={}){const{wrapper:t}={...(0,a.R)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(d,{...o})}):d(o)}},8453:(o,t,e)=>{e.d(t,{R:()=>r,x:()=>s});var n=e(6540);const a={},i=n.createContext(a);function r(o){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof o?o(t):{...t,...o}}),[t,o])}function s(o){let t;return t=o.disableParentContext?"function"==typeof o.components?o.components(a):o.components||a:r(o.components),n.createElement(i.Provider,{value:t},o.children)}}}]);