"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3297],{2479:(o,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"rewards/proof-of-location","title":"Proof of Location (PoL)","description":"The Proof-of-Location algorithm evaluates location data associated with the station, their accuracy, and consistency. It generates a score which is a confidence indicator about the station\u2019s location. WeatherXM places great importance on station continuity, and discourage relocations.","source":"@site/docs/rewards/proof-of-location.mdx","sourceDirName":"rewards","slug":"/rewards/proof-of-location","permalink":"/rewards/proof-of-location","draft":false,"unlisted":false,"editUrl":"https://github.com/WeatherXM/docs/blob/main/docs/rewards/proof-of-location.mdx","tags":[],"version":"current","frontMatter":{"title":"Proof of Location (PoL)","sidebar_label":"Proof of Location  (PoL)"},"sidebar":"docs","previous":{"title":"Data Quality","permalink":"/rewards/data-quality"},"next":{"title":"Cell Capacity (CC)","permalink":"/rewards/cell-capacity"}}');var n=e(4848),i=e(8453);const r={title:"Proof of Location (PoL)",sidebar_label:"Proof of Location  (PoL)"},s=void 0,c={},l=[{value:"Proof-of-Location (PoL)",id:"proof-of-location-pol",level:2},{value:"Calculation:",id:"calculation",level:3},{value:"Relocation",id:"relocation",level:2}];function d(o){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Proof-of-Location"})," algorithm evaluates location data associated with the station, their accuracy, and consistency. It generates a score which is a confidence indicator about the station\u2019s location. WeatherXM places great importance on station continuity, and discourage relocations."]}),"\n",(0,n.jsx)(t.h2,{id:"proof-of-location-pol",children:"Proof-of-Location (PoL)"}),"\n",(0,n.jsxs)(t.p,{children:["PoL is a rational number in the range [0,1].\nA station\u2019s PoL must be greater than or equal to ",(0,n.jsx)("code",{children:"PoL_Threshold"})," to be considered for inclusion in WeatherXM's ",(0,n.jsx)(t.strong,{children:"Rewarding Mechanism"}),".\nPoL is a dynamic value, and is recalculated every time a station\u2019s location is updated."]}),"\n",(0,n.jsx)(t.h3,{id:"calculation",children:"Calculation:"}),"\n",(0,n.jsx)(t.p,{children:"Currently, PoL is calculated daily using Location Packets."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"For M5, D1 and Pulse, at least one accurate Location Packet from the previous day is required to determine the Location."}),"\n",(0,n.jsx)(t.li,{children:"For H1 stations, at least one accurate Location Packet from the previous day is required to determine the Location, if no Location Packets are available, the PoL algorithm will rely on data from the day before."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"relocation",children:"Relocation"}),"\n",(0,n.jsxs)(t.p,{children:["It is important for the Network that a station remains at the same location throughout its lifetime.\nWhen a weather station undergoes relocation, its Proof of Location score reduces to 0 for 7 days and its seniority is reset.\nAfter 7 days, the station\u2019s PoL is recalculated, and if it is greater than or equal to PoL_Threshold, the station is considered for inclusion in the ",(0,n.jsx)(t.a,{href:"https://weatherxm.network/",children:"WeatherXM Network"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Proof of Location penalty imposed to devices that went through a relocation is currently reduced to 2 days. This is a temporary measure and will be reverted back to 7 days."})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"PoL is a rational number in the range [0,1]"})})]})}function h(o={}){const{wrapper:t}={...(0,i.R)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(d,{...o})}):d(o)}},8453:(o,t,e)=>{e.d(t,{R:()=>r,x:()=>s});var a=e(6540);const n={},i=a.createContext(n);function r(o){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof o?o(t):{...t,...o}}),[t,o])}function s(o){let t;return t=o.disableParentContext?"function"==typeof o.components?o.components(n):o.components||n:r(o.components),a.createElement(i.Provider,{value:t},o.children)}}}]);