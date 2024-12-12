"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9420],{3632:(e,r,t)=>{t.d(r,{A:()=>l});t(6540);var n=t(8215);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:t,children:r})}},2707:(e,r,t)=>{t.d(r,{A:()=>v});var n=t(6540),a=t(8215),s=t(4319),l=t(6347),i=t(4280),o=t(3024),c=t(8417),u=t(4031);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function g(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=m(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[c,d]=p({queryString:t,groupId:a}),[g,x]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,u.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),w=(()=>{const e=c??g;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{w&&o(w)}),[w]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=t(6916);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function b(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const r=e.currentTarget,t=o.indexOf(r),a=i[t].value;a!==n&&(c(r),l(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",w.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function j(e){const r=g(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",w.tabList),children:[(0,f.jsx)(b,{...r,...e}),(0,f.jsx)(y,{...r,...e})]})}function v(e){const r=(0,x.A)();return(0,f.jsx)(j,{...e,children:d(e.children)},String(r))}},6755:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"rewards/rewards-claiming","title":"How to Claim Rewards","description":"Allocated and claimed tokens displayed in our mobile apps, are only those linked to your current wallet.","source":"@site/docs/rewards/rewards-claiming.mdx","sourceDirName":"rewards","slug":"/rewards/rewards-claiming","permalink":"/rewards/rewards-claiming","draft":false,"unlisted":false,"editUrl":"https://github.com/WeatherXM/docs/blob/main/docs/rewards/rewards-claiming.mdx","tags":[],"version":"current","frontMatter":{"title":"How to Claim Rewards","sidebar_label":"Rewards Claiming"},"sidebar":"docs","previous":{"title":"Troubleshooting","permalink":"/rewards/rewards-troubleshooting"},"next":{"title":"How to join Arbitrum and see your tokens","permalink":"/rewards/how-to-join-arbitrum-and-see-your-tokens"}}');var a=t(4848),s=t(8453),l=t(2707),i=t(3632),o=t(1306);const c={title:"How to Claim Rewards",sidebar_label:"Rewards Claiming"},u=void 0,d={},m=[{value:"Prerequisites for claiming rewards",id:"prerequisites-for-claiming-rewards",level:2},{value:"Claiming rewards",id:"claiming-rewards",level:2},{value:"Alternative method for claiming rewards",id:"alternative-method-for-claiming-rewards",level:3},{value:"Bridging your assets from Ethereum to Arbitrum",id:"bridging-your-assets-from-ethereum-to-arbitrum",level:2}];function h(e){const r={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsx)(r.p,{children:"Allocated and claimed tokens displayed in our mobile apps, are only those linked to your current wallet.\nThis does not include any wallets you may have used in the past."})}),"\n",(0,a.jsx)(r.h2,{id:"prerequisites-for-claiming-rewards",children:"Prerequisites for claiming rewards"}),"\n",(0,a.jsx)(r.p,{children:"In order to claim your $WXM rewards:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["You must have a wallet with Arbitrum One network configured. If you have not done so, please follow the ",(0,a.jsx)(r.a,{href:"/rewards/how-to-join-arbitrum-and-see-your-tokens",children:"Wallet Setup"}),"."]}),"\n",(0,a.jsx)(r.li,{children:"You must have some ETH in your wallet which are needed as gas fees."}),"\n"]}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(r.h2,{id:"claiming-rewards",children:"Claiming rewards"}),"\n",(0,a.jsx)(r.p,{children:"To claim your rewards:"}),"\n",(0,a.jsxs)(l.A,{defaultValue:"Mobile",values:[{label:"Claim from the WeatherXM app",value:"Mobile"},{label:"Claim through the Web",value:"Web"}],children:[(0,a.jsxs)(i.A,{value:"Mobile",children:[(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"Open the WeatherXM app."}),"\n",(0,a.jsx)(r.li,{children:'Navigate to "My Profile"'}),"\n"]}),(0,a.jsx)("img",{style:{maxHeight:"600px"},class:"marginTopBottomNormal",src:(0,o.Ay)("/img/rewards/my-profile.png"),alt:"My Profile"}),(0,a.jsxs)(r.ol,{start:"3",children:["\n",(0,a.jsx)(r.li,{children:'Then press the "Claim" button.'}),"\n",(0,a.jsx)(r.li,{children:'Follow the instructions and "connect your wallet".'}),"\n"]}),(0,a.jsx)("img",{style:{maxHeight:"600px"},class:"marginTopBottomNormal",src:(0,o.Ay)("/img/rewards/connect-wallet-arbitrum.jpg"),alt:"connect_wallet"}),(0,a.jsxs)(r.ol,{start:"5",children:["\n",(0,a.jsx)(r.li,{children:'Enter the amount you want to claim and press "Next".'}),"\n",(0,a.jsx)(r.li,{children:"Then, follow the instructions on your wallet to confirm the transaction."}),"\n"]}),(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"You have successfully claimed your rewards!"})}),(0,a.jsx)("hr",{})]}),(0,a.jsxs)(i.A,{value:"Web",children:[(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["Navigate to the ",(0,a.jsx)(r.a,{href:"https://claim.weatherxm.com/",children:"Claim dApp"}),"."]}),"\n"]}),(0,a.jsx)("img",{style:{maxWidth:"650px"},class:"marginTopBottomNormal",src:(0,o.Ay)("/img/rewards/web-claim-arbitrum.png"),alt:"My Profile"}),(0,a.jsxs)(r.ol,{start:"2",children:["\n",(0,a.jsx)(r.li,{children:"Connect you Wallet."}),"\n",(0,a.jsx)(r.li,{children:'Enter the amount you want to claim and press "Claim".'}),"\n"]}),(0,a.jsx)("img",{style:{maxHeight:"400px"},class:"marginTopBottomNormal",src:(0,o.Ay)("/img/rewards/add-amount.png")}),(0,a.jsxs)(r.ol,{start:"4",children:["\n",(0,a.jsx)(r.li,{children:"confirm the transaction on your wallet."}),"\n"]}),(0,a.jsx)("img",{style:{maxHeight:"400px"},class:"marginTopBottomNormal",src:(0,o.Ay)("/img/rewards/sign-transaction-arbitrum.png")}),(0,a.jsxs)(r.ol,{start:"5",children:["\n",(0,a.jsx)(r.li,{children:"You have successfully claimed your rewards!"}),"\n"]}),(0,a.jsx)("img",{style:{maxHeight:"400px"},class:"marginTopBottomNormal",src:(0,o.Ay)("/img/rewards/claim-success.png")})]})]}),"\n",(0,a.jsx)(r.h3,{id:"alternative-method-for-claiming-rewards",children:"Alternative method for claiming rewards"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Navigate to the ",(0,a.jsx)(r.a,{href:"https://claim.weatherxm.com/",children:"Claim dApp"}),"."]}),"\n",(0,a.jsx)("img",{style:{maxWidth:"650px"},class:"marginBottomSmall",src:(0,o.Ay)("/img/rewards/web-claim-arbitrum.png"),alt:"My Profile"}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Connect your Wallet with the WalletConnect option."}),"\n",(0,a.jsx)("img",{style:{maxHeight:"400px"},class:"marginBottomSmall",src:(0,o.Ay)("/img/rewards/wallet-connect.png"),alt:"Wallet Connect"}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Open your mobile wallet and scan the QR code with that wallet in order to connect with it."}),"\n",(0,a.jsx)(r.p,{children:"For example: Rainbow Wallet"}),"\n",(0,a.jsx)("img",{style:{maxHeight:"400px"},class:"marginBottomSmall",src:(0,o.Ay)("/img/rewards/rainbow-qr.jpeg"),alt:"Rainbow Wallet Scan QR"}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:'Enter the amount you want to claim and press "Next".'}),"\n",(0,a.jsx)("img",{style:{maxHeight:"400px"},class:"marginBottomSmall",src:(0,o.Ay)("/img/rewards/add-amount.png"),alt:"Enter Amount"}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Confirm the transaction on your mobile wallet."}),"\n",(0,a.jsx)("img",{style:{maxHeight:"400px"},class:"marginBottomSmall",src:(0,o.Ay)("/img/rewards/rainbow-confirm.jpg"),alt:"Confirm Transaction"}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"You have successfully claimed your rewards!"}),"\n",(0,a.jsx)("img",{style:{maxHeight:"400px"},class:"marginBottomSmall",src:(0,o.Ay)("/img/rewards/claim-success.png"),alt:"Claim Success"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(r.h2,{id:"bridging-your-assets-from-ethereum-to-arbitrum",children:"Bridging your assets from Ethereum to Arbitrum"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["Go to ",(0,a.jsx)(r.a,{href:"https://bridge.arbitrum.io/",children:"https://bridge.arbitrum.io/"}),"."]}),"\n",(0,a.jsx)(r.li,{children:"Then, simply enter the amount of ETH you wish to use on Arbitrum and click \u201cDeposit\u201d."}),"\n",(0,a.jsx)(r.li,{children:"Next, you will need to confirm the transaction in your wallet. Please note that this transaction is on Layer 1 and standard gas fees will apply.\nHowever, once on Arbitrum you can enjoy lower gas fees. Once the amount is correct, click \u201cConfirm\u201d."}),"\n",(0,a.jsx)(r.li,{children:"Once confirmed, you will see the transaction appear and process at the bottom of your screen. This can take a few minutes."}),"\n",(0,a.jsxs)(r.li,{children:["If you require additional support to bridge your assets, you can refer to Arbitrum\u2019s tutorial ",(0,a.jsx)(r.a,{href:"https://docs.arbitrum.io/getting-started-users",children:"here"}),"."]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"This Guide is applicable only on desktop with the MetaMask browser extension already installed."})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>i});var n=t(6540);const a={},s=n.createContext(a);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);