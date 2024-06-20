"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5402],{3384:(e,a,s)=>{s.d(a,{A:()=>b});var l=s(6540),n=s(8215),r=s(5236),m=s(6347),i=s(8385),t=s(5793),d=s(7422),c=s(4100);function h(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function o(e){const{values:a,children:s}=e;return(0,l.useMemo)((()=>{const e=a??function(e){return h(e).map((e=>{let{props:{value:a,label:s,attributes:l,default:n}}=e;return{value:a,label:s,attributes:l,default:n}}))}(s);return function(e){const a=(0,d.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,s])}function x(e){let{value:a,tabValues:s}=e;return s.some((e=>e.value===a))}function j(e){let{queryString:a=!1,groupId:s}=e;const n=(0,m.W6)(),r=function(e){let{queryString:a=!1,groupId:s}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:a,groupId:s});return[(0,t.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function p(e){const{defaultValue:a,queryString:s=!1,groupId:n}=e,r=o(e),[m,t]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!x({value:a,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const l=s.find((e=>e.default))??s[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:a,tabValues:r}))),[d,h]=j({queryString:s,groupId:n}),[p,u]=function(e){let{groupId:a}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,c.Dv)(s);return[n,(0,l.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:n}),g=(()=>{const e=d??p;return x({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{g&&t(g)}),[g]);return{selectedValue:m,selectValue:(0,l.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);t(e),h(e),u(e)}),[h,u,r]),tabValues:r}}var u=s(195);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var N=s(4848);function w(e){let{className:a,block:s,selectedValue:l,selectValue:m,tabValues:i}=e;const t=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const a=e.currentTarget,s=t.indexOf(a),n=i[s].value;n!==l&&(d(a),m(n))},h=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=t.indexOf(e.currentTarget)+1;a=t[s]??t[0];break}case"ArrowLeft":{const s=t.indexOf(e.currentTarget)-1;a=t[s]??t[t.length-1];break}}a?.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},a),children:i.map((e=>{let{value:a,label:s,attributes:r}=e;return(0,N.jsx)("li",{role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,ref:e=>t.push(e),onKeyDown:h,onClick:c,...r,className:(0,n.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":l===a}),children:s??a},a)}))})}function y(e){let{lazy:a,children:s,selectedValue:n}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function f(e){const a=p(e);return(0,N.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,N.jsx)(w,{...a,...e}),(0,N.jsx)(y,{...a,...e})]})}function b(e){const a=(0,u.A)();return(0,N.jsx)(f,{...e,children:h(e.children)},String(a))}},550:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var l=s(4848),n=s(8453),r=(s(3384),s(8699)),m=s(8189);const i={id:"add-edit-wallet-address",title:"Add/edit wallet address",hide_title:!1,sidebar_label:"Add/edit wallet address",slug:"/wallet/add-edit-wallet-address"},t=void 0,d={id:"wallet/add-edit-wallet-address",title:"Add/edit wallet address",description:"If you don\u2019t have a wallet, create one which is recommended if you want to see test tokens.",source:"@site/docs/wallet/add-edit-wallet-address.mdx",sourceDirName:"wallet",slug:"/wallet/add-edit-wallet-address",permalink:"/wallet/add-edit-wallet-address",draft:!1,unlisted:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/wallet/add-edit-wallet-address.mdx",tags:[],version:"current",frontMatter:{id:"add-edit-wallet-address",title:"Add/edit wallet address",hide_title:!1,sidebar_label:"Add/edit wallet address",slug:"/wallet/add-edit-wallet-address"},sidebar:"docs",previous:{title:"How to join Arbitrum and see your tokens",permalink:"/rewards/how-to-join-arbitrum-and-see-your-tokens"},next:{title:"Delete WXM Account",permalink:"/account/delete-account"}},c={},h=[{value:"Add wallet address for the first time",id:"add-wallet-address-for-the-first-time",level:2},{value:"Edit your wallet address",id:"edit-your-wallet-address",level:2},{value:"How to create wallet on Metamask",id:"how-to-create-wallet-on-metamask",level:2},{value:"Installing and setting up MetaMask",id:"installing-and-setting-up-metamask",level:2}];function o(e){const a={a:"a",admonition:"admonition",annotation:"annotation",h2:"h2",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",msup:"msup",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.admonition,{type:"tip",children:(0,l.jsxs)(a.p,{children:["If you don\u2019t have a wallet, ",(0,l.jsx)(a.a,{href:"/wallet/add-edit-wallet-address#how-to-create-wallet-on-metamask",children:"create one"})," which is recommended if you want to see test tokens."]})}),"\n",(0,l.jsx)(a.h2,{id:"add-wallet-address-for-the-first-time",children:"Add wallet address for the first time"}),"\n",(0,l.jsx)(a.p,{children:'To add your wallet address, go to settings screen and tap "My wallet", then fill or scan your wallet address where you can find at your metamask account, read and accept the terms and services and acknowledge that you have ownership and full access to this wallet.'}),"\n",(0,l.jsxs)("div",{class:"explanation small-big",children:[(0,l.jsx)(r.A,{alt:"new-wallet-address-empty",sources:{light:(0,m.Ay)("img/wallet/new-wallet-address-empty-light.jpg"),dark:(0,m.Ay)("img/wallet/new-wallet-address-empty-dark.jpg")}}),(0,l.jsx)("img",{src:(0,m.Ay)("img/wallet/new-wallet-address-screen-scan-QR.png")}),(0,l.jsx)(r.A,{alt:"new-wallet-address-empty",sources:{light:(0,m.Ay)("img/wallet/new-wallet-address-screen-confirm-wallet-addition-light.jpg"),dark:(0,m.Ay)("img/wallet/new-wallet-address-screen-confirm-wallet-addition-dark.jpg")}})]}),"\n",(0,l.jsx)("hr",{}),"\n",(0,l.jsx)(a.h2,{id:"edit-your-wallet-address",children:"Edit your wallet address"}),"\n",(0,l.jsx)(a.p,{children:'To edit or change your wallet address, go to settings screen and tap "My wallet" and tap on "Edit Wallet Address". In order to edit the Wallet Address you need to confirm you are the owner of this account.'}),"\n",(0,l.jsxs)("div",{class:"explanation small-big",children:[(0,l.jsx)(r.A,{alt:"new-wallet-address-empty",sources:{light:(0,m.Ay)("img/wallet/new-wallet-address-screen-filled-and-saved-light.jpg"),dark:(0,m.Ay)("img/wallet/new-wallet-address-screen-filled-and-saved-dark.jpg")}}),(0,l.jsx)(r.A,{alt:"new-wallet-address-empty",sources:{light:(0,m.Ay)("img/wallet/new-wallet-address-screen-confirm-and-save-light.jpg"),dark:(0,m.Ay)("img/wallet/new-wallet-address-screen-confirm-and-save-dark.jpg")}}),(0,l.jsx)(r.A,{alt:"new-wallet-address-empty",sources:{light:(0,m.Ay)("img/wallet/new-wallet-address-screen-confirm-wallet-addition-light.jpg"),dark:(0,m.Ay)("img/wallet/new-wallet-address-screen-confirm-wallet-addition-dark.jpg")}})]}),"\n",(0,l.jsx)("hr",{}),"\n",(0,l.jsx)(a.h2,{id:"how-to-create-wallet-on-metamask",children:"How to create wallet on Metamask"}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"W"}),(0,l.jsx)(a.mi,{children:"X"}),(0,l.jsx)(a.mi,{children:"M"}),(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"d"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"p"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"o"}),(0,l.jsx)(a.mi,{children:"y"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"d"}),(0,l.jsx)(a.mi,{children:"o"}),(0,l.jsx)(a.mi,{children:"n"}),(0,l.jsx)(a.mi,{children:"A"}),(0,l.jsx)(a.mi,{children:"r"}),(0,l.jsx)(a.mi,{children:"b"}),(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"r"}),(0,l.jsx)(a.mi,{children:"u"}),(0,l.jsx)(a.mi,{children:"m"}),(0,l.jsx)(a.mi,{children:"O"}),(0,l.jsx)(a.mi,{children:"n"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"N"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"w"}),(0,l.jsx)(a.mi,{children:"o"}),(0,l.jsx)(a.mi,{children:"r"}),(0,l.jsx)(a.mi,{children:"k"}),(0,l.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,l.jsx)(a.mi,{children:"W"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"u"}),(0,l.jsx)(a.mi,{children:"g"}),(0,l.jsx)(a.mi,{children:"g"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"y"}),(0,l.jsx)(a.mi,{children:"o"}),(0,l.jsx)(a.mi,{children:"u"}),(0,l.jsx)(a.mi,{children:"u"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mo,{children:"\u2217"}),(0,l.jsx)(a.mo,{children:"\u2217"}),(0,l.jsx)(a.mi,{children:"M"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"M"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"k"}),(0,l.jsx)(a.mo,{children:"\u2217"}),(0,l.jsx)(a.mo,{children:"\u2217"}),(0,l.jsx)(a.mi,{children:"w"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"w"}),(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"h"}),(0,l.jsx)(a.mi,{children:"W"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"h"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"r"}),(0,l.jsx)(a.mi,{children:"X"}),(0,l.jsx)(a.mi,{children:"M"}),(0,l.jsx)(a.mo,{separator:"true",children:","}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"w"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"h"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"v"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"x"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"n"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsx)(a.mi,{children:"v"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"y"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"d"}),(0,l.jsx)(a.mi,{children:"o"}),(0,l.jsx)(a.mi,{children:"n"}),(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,l.jsx)(a.mi,{children:"A"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"w"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"v"}),(0,l.jsx)(a.mi,{children:"o"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"v"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mo,{separator:"true",children:","}),(0,l.jsx)(a.mi,{children:"w"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"w"}),(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"o"}),(0,l.jsx)(a.mi,{children:"f"}),(0,l.jsx)(a.mi,{children:"f"}),(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsx)(a.mi,{children:"c"}),(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"u"}),(0,l.jsx)(a.mi,{children:"p"}),(0,l.jsx)(a.mi,{children:"p"}),(0,l.jsx)(a.mi,{children:"o"}),(0,l.jsx)(a.mi,{children:"r"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"v"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"r"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"w"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,l.jsx)(a.mi,{children:"B"}),(0,l.jsx)(a.mi,{children:"y"}),(0,l.jsx)(a.mi,{children:"f"}),(0,l.jsx)(a.mi,{children:"o"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"o"}),(0,l.jsx)(a.mi,{children:"w"}),(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsx)(a.mi,{children:"n"}),(0,l.jsx)(a.mi,{children:"g"}),(0,l.jsx)(a.mi,{children:"o"}),(0,l.jsx)(a.mi,{children:"u"}),(0,l.jsx)(a.mi,{children:"r"}),(0,l.jsx)(a.mi,{children:"g"}),(0,l.jsx)(a.mi,{children:"u"}),(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsx)(a.mi,{children:"d"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mo,{separator:"true",children:","}),(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsxs)(a.msup,{children:[(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"f"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsx)(a.mi,{children:"r"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"y"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsx)(a.mi,{children:"m"}),(0,l.jsx)(a.mi,{children:"p"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"o"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"u"}),(0,l.jsx)(a.mi,{children:"p"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"M"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"M"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"k"}),(0,l.jsx)(a.mi,{children:"w"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"l"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"n"}),(0,l.jsx)(a.mi,{children:"d"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"d"}),(0,l.jsx)(a.mi,{children:"d"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"c"}),(0,l.jsx)(a.mi,{children:"u"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"o"}),(0,l.jsx)(a.mi,{children:"m"}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"o"}),(0,l.jsx)(a.mi,{children:"k"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mi,{children:"n"}),(0,l.jsx)(a.mo,{stretchy:"false",children:"("}),(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsx)(a.mi,{children:"n"}),(0,l.jsx)(a.mi,{children:"o"}),(0,l.jsx)(a.mi,{children:"u"}),(0,l.jsx)(a.mi,{children:"r"}),(0,l.jsx)(a.mi,{children:"c"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"s"}),(0,l.jsx)(a.mi,{children:"e"}),(0,l.jsx)(a.mo,{separator:"true",children:","}),(0,l.jsx)(a.mi,{children:"t"}),(0,l.jsx)(a.mi,{children:"h"}),(0,l.jsx)(a.mi,{children:"e"})]}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"WXM is deployed on Arbitrum One Network. We suggest you use a **MetaMask** wallet with WeatherXM, as we have extensively tested on it. As we evolve, we will official support several wallets.\nBy following our guide, it's fairly simple to set up a MetaMask wallet and add a custom token (in our case, the "})]})})}),(0,l.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"XM"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"pl"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"oye"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"A"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"bi"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"tw"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"or"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,l.jsx)(a.span,{className:"mord",children:"."}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"es"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"ugg"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"es"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"yo"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"uu"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"se"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,l.jsx)(a.span,{className:"mord",children:"\u2217"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,l.jsx)(a.span,{className:"mord",children:"\u2217"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"ll"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"tw"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"hW"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"h"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"XM"}),(0,l.jsx)(a.span,{className:"mpunct",children:","}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"ha"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"ee"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"es"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"ni"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord",children:"."}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"A"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"ee"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mpunct",children:","}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"ll"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"ff"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"c"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"ia"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"pp"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"or"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"se"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"lw"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"ll"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(a.span,{className:"mord",children:"."}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"ll"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"in"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"gu"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mpunct",children:","}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,l.jsxs)(a.span,{className:"mord",children:[(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"msupsub",children:(0,l.jsx)(a.span,{className:"vlist-t",children:(0,l.jsx)(a.span,{className:"vlist-r",children:(0,l.jsx)(a.span,{className:"vlist",style:{height:"0.7519em"},children:(0,l.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(a.span,{className:"mord mtight",children:(0,l.jsx)(a.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"ai"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"ys"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"im"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"pl"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"ose"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"ll"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"an"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"dd"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"c"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(a.span,{className:"mopen",children:"("}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"in"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"rc"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"se"}),(0,l.jsx)(a.span,{className:"mpunct",children:","}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"h"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"e"})]})]})]}),"WXM token) on Arbitrum One Network."]}),"\n",(0,l.jsx)(a.admonition,{type:"note",children:(0,l.jsxs)(a.p,{children:["The following guide has been written with the ",(0,l.jsx)(a.strong,{children:"MetaMask browser extension"})," in mind.\nThe steps may vary on other platforms like the mobile app."]})}),"\n",(0,l.jsx)(a.h2,{id:"installing-and-setting-up-metamask",children:"Installing and setting up MetaMask"}),"\n",(0,l.jsx)(a.p,{children:"MetaMask is a crypto wallet app and browser extension."}),"\n",(0,l.jsx)(a.admonition,{type:"caution",children:(0,l.jsxs)(a.p,{children:["Only install this wallet from the ",(0,l.jsx)(a.a,{href:"https://metamask.io/download/",children:"official MetaMask website"}),"!"]})}),"\n",(0,l.jsxs)(a.ol,{children:["\n",(0,l.jsxs)(a.li,{children:["MetaMask is available to download and install on Chrome, iOS, and Android through the ",(0,l.jsx)(a.a,{href:"https://metamask.io/download/",children:"MetaMask website"}),".\nAlways check if you are using the official website to make sure you\u2019re installing the real MetaMask extension."]}),"\n",(0,l.jsx)(a.li,{children:"After installing the extension, you\u2019ll be greeted with the MetaMask welcome page. Click [Get Started] to begin."}),"\n",(0,l.jsx)(a.li,{children:"If you\u2019re creating a new wallet, click the [Create a Wallet] button. You can also import an existing wallet using its seed phrase with the [Import wallet] option."}),"\n",(0,l.jsx)(a.li,{children:"MetaMask will ask you if you\u2019d like to share anonymous usage data with them to help improve the extension. Accepting or refusing this will not affect your MetaMask usage."}),"\n",(0,l.jsx)(a.li,{children:"Choose a secure password to log in to your wallet from your browser. Note that this is not your seed phrase. The password is a security measure to prevent anyone using your device from accessing your wallet.\nIf you forget your password, you can always access your crypto with your seed phrase."}),"\n",(0,l.jsx)(a.li,{children:"After choosing your password, MetaMask will present you with information regarding your wallet\u2019s seed phrase. Make sure to read through it if you aren\u2019t familiar with how a crypto wallet works."}),"\n",(0,l.jsx)(a.li,{children:"You\u2019ll now be presented with your seed phrase. Click the lock to view the words and take note of them in the correct order. Keep the phrase in a secure place (preferably offline) and never share it with anyone.\nThis string of words is the final backup of your wallet and its contents. Click [Next] to continue."}),"\n",(0,l.jsx)(a.li,{children:"You\u2019ll now have to repeat your seed phrase by selecting the words at the bottom of the screen in the right order. Click [Confirm] once this is complete."}),"\n",(0,l.jsx)(a.li,{children:"Your MetaMask wallet will now be set up and ready to use. Click [All Done] to view your wallet."}),"\n"]}),"\n",(0,l.jsx)(a.admonition,{type:"note",children:(0,l.jsxs)(a.p,{children:["If you want to confirm the existence of your tokens in your preferred wallet, you need to add our ERC20 token's smart contract. See how ",(0,l.jsx)(a.a,{href:"/rewards/how-to-join-arbitrum-and-see-your-tokens#add-wxm-token-in-metamask",children:"here"})]})})]})}function x(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>m,x:()=>i});var l=s(6540);const n={},r=l.createContext(n);function m(e){const a=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:m(e.components),l.createElement(r.Provider,{value:a},e.children)}}}]);