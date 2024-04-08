"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[248],{1347:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var o=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},3384:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(6540),a=n(4164),o=n(5236),s=n(6347),i=n(8385),l=n(5793),d=n(7422),c=n(1038);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[d,u]=p({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),j=(()=>{const e=d??b;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{j&&l(j)}),[j]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=n(195);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function w(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(d(t),s(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...o,className:(0,a.A)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,x.jsx)(w,{...e,...t}),(0,x.jsx)(k,{...e,...t})]})}function g(e){const t=(0,f.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(t))}},7421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=n(4848),a=n(8453),o=n(3384),s=n(1347),i=n(8189);const l={id:"how-to-join-arbitrum-and-see-your-tokens",title:"How to join Arbitrum Sepolia and see your tokens",sidebar_label:"How to join  Arbitrum Sepolia and see your tokens",slug:"/wallet/how-to-join-arbitrum-and-see-your-tokens"},d=void 0,c={id:"wallet/how-to-join-arbitrum-and-see-your-tokens",title:"How to join Arbitrum Sepolia and see your tokens",description:"If you don\u2019t have a wallet, create one which is recommended if you want to see test tokens.",source:"@site/docs/wallet/how-to-join-arbitrum-and-see-your-tokens.mdx",sourceDirName:"wallet",slug:"/wallet/how-to-join-arbitrum-and-see-your-tokens",permalink:"/wallet/how-to-join-arbitrum-and-see-your-tokens",draft:!1,unlisted:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/wallet/how-to-join-arbitrum-and-see-your-tokens.mdx",tags:[],version:"current",frontMatter:{id:"how-to-join-arbitrum-and-see-your-tokens",title:"How to join Arbitrum Sepolia and see your tokens",sidebar_label:"How to join  Arbitrum Sepolia and see your tokens",slug:"/wallet/how-to-join-arbitrum-and-see-your-tokens"},sidebar:"docs",previous:{title:"Add/edit wallet address",permalink:"/wallet/add-edit-wallet-address"},next:{title:"Delete WXM Account",permalink:"/account/delete-account"}},u={},h=[{value:"Add Arbitrum Sepolia Network to Metamask",id:"add-arbitrum-sepolia-network-to-metamask",level:3},{value:"Using Arbiscan",id:"using-arbiscan",level:3},{value:"Add the Arbitrum Sepolia Testnet Manually",id:"add-the-arbitrum-sepolia-testnet-manually",level:3},{value:"Add WXM token in MetaMask",id:"add-wxm-token-in-metamask",level:3},{value:"Get some free testnet ETH from a faucet",id:"get-some-free-testnet-eth-from-a-faucet",level:3}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["If you don\u2019t have a wallet, ",(0,r.jsx)(t.a,{href:"/wallet/add-edit-wallet-address#how-to-create-wallet-on-metamask",children:"create one"})," which is recommended if you want to see test tokens."]})}),"\n",(0,r.jsx)(t.h3,{id:"add-arbitrum-sepolia-network-to-metamask",children:"Add Arbitrum Sepolia Network to Metamask"}),"\n",(0,r.jsx)(t.p,{children:"Adding Arbitrum Sepolia Network support to MetaMask is a mandatory step in order to add the WXM token, view activity, and make transactions.\nMake sure you follow our step-by-step guide below for adding the Arbitrum Sepolia Network to MetaMask."}),"\n",(0,r.jsxs)(t.p,{children:["As we are currently in testnet, ",(0,r.jsx)(t.strong,{children:"you need to add the Sepolia Testnet network."})]}),"\n",(0,r.jsx)(t.p,{children:"There are two ways to do it:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/wallet/how-to-join-arbitrum-and-see-your-tokens#using-arbiscan",children:"Using Arbiscan"})," ",(0,r.jsx)(t.strong,{children:"(Only for Desktop with MetaMask browser extension already installed)"})]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/wallet/how-to-join-arbitrum-and-see-your-tokens#add-the-arbitrum-sepolia-testnet-manually",children:"Add the Arbitrum Sepolia Testnet network manually"})}),"\n"]}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(t.h3,{id:"using-arbiscan",children:"Using Arbiscan"}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:["Please make sure you have already installed ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://metamask.io/",children:"MetaMask"})}),"!"]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"This solution works only on desktop with the MetaMask browser extension already installed."})})]}),"\n",(0,r.jsxs)(o.A,{defaultValue:"sepolia",values:[{label:"Arbitrum Sepolia Testnet",value:"sepolia"},{label:"Arbitrum One Mainnet",value:"mainnet"}],children:[(0,r.jsxs)(s.A,{value:"sepolia",children:[(0,r.jsx)(t.p,{children:"You can add Arbitrum Sepolia Testnet by following the steps below:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Visit the official ",(0,r.jsx)(t.a,{href:"https://sepolia.arbiscan.io/",children:"Arbitrum Sepolia Testnet"})," and then click on the button ",(0,r.jsx)(t.code,{children:"Add to Metamask"}),"."]}),"\n"]}),(0,r.jsx)("img",{class:"marginBottomNormal",src:(0,i.A)("/img/wallet/Sepolia-testnet.png"),alt:"Arbitrum Sepolia Testnet"})]}),(0,r.jsxs)(s.A,{value:"mainnet",children:[(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["This is just for informational purposes. At this stage we are currently in testnet so ",(0,r.jsx)(t.strong,{children:"you will need to add the Sepolia Testnet network."})]})}),(0,r.jsx)(t.p,{children:"Please follow the steps to add Arbitrum One Mainnet:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Navigate to ",(0,r.jsx)(t.a,{href:"https://arbiscan.io/",children:"Arbiscan.io"})]}),"\n",(0,r.jsxs)(t.li,{children:["Scroll down to the bottom of the page and click on the button ",(0,r.jsx)(t.code,{children:"Add Arbitrum One Network"})]}),"\n"]}),(0,r.jsx)("img",{class:"marginBottomNormal",src:(0,i.A)("/img/wallet/Arbitrum-One.png"),alt:"Arbitrum One"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Once you click the button you will see a MetaMask notification, now click on ",(0,r.jsx)(t.strong,{children:"Approve"}),".\nYou will be directed to Arbitrum's Mainnet in the network dropdown list. You can now close the dialog."]}),"\n"]}),(0,r.jsx)("img",{class:"marginBottomNormal",src:(0,i.A)("/img/wallet/approve_on_metamask.png")}),(0,r.jsx)("hr",{}),(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.p,{children:"Alternatively you can add Arbitrum One Mainnet by following the steps below:"}),(0,r.jsxs)(t.p,{children:["Visit: ",(0,r.jsx)(t.a,{href:"https://chainlist.org/chain/42161",children:"Chainlist"})," and then click on the button ",(0,r.jsx)(t.code,{children:"Add to Metamask"}),"."]})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["If you face any issues adding Arbitrum Sepolia network, ",(0,r.jsx)(t.strong,{children:"Add the Sepolia Testnet Manually (steps given below)."})]}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(t.h3,{id:"add-the-arbitrum-sepolia-testnet-manually",children:"Add the Arbitrum Sepolia Testnet Manually"}),"\n",(0,r.jsx)(t.p,{children:"To add Arbitrum Sepolia Testnet, click on the Network selection dropdown and then click on Add Network and add a custom network."}),"\n",(0,r.jsx)(t.p,{children:"In the form that pops up, populate the fields as following:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Network name: Arbitrum Sepolia"}),"\n",(0,r.jsxs)(t.li,{children:["New RPC URL: The URL of an RPC Server in the Arbitrum Sepolia testnet. You can see a ",(0,r.jsx)(t.a,{href:"https://chainlist.org/chain/421614?testnets=true",children:"list of available servers here"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Chain ID: 421614"}),"\n",(0,r.jsx)(t.li,{children:"Currency Symbol: ETH"}),"\n",(0,r.jsxs)(t.li,{children:["Block Explorer URL: ",(0,r.jsx)(t.a,{href:"https://sepolia.arbiscan.com/",children:"https://sepolia.arbiscan.com/"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Once you\u2019ve added the URL in the New Network field, click on Save. You will be directly switched to Arbitrum Sepolia testnet now in the network dropdown list. You can now close the dialog."}),"\n",(0,r.jsx)(t.h3,{id:"add-wxm-token-in-metamask",children:"Add WXM token in MetaMask"}),"\n",(0,r.jsx)(t.p,{children:"For the WXM token to appear in the wallet UI, you will need to add it manually.\nNote that your wallet can still receive tokens that haven\u2019t been imported."}),"\n",(0,r.jsx)(t.admonition,{title:"IMPORTANT NOTE",type:"note",children:(0,r.jsxs)(t.p,{children:["Please make sure you have already added the ",(0,r.jsx)(t.strong,{children:"Arbitrum Sepolia Testnet"})," and have connected to it by following the guide above!"]})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["First, you will need the following details of the WXM token in order to add it:","\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Token Contract Address:"})," ",(0,r.jsx)(t.code,{children:"0xbacef2640862B42eECcFeAb9Bf750476aE7decc6"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Token Symbol:"})," ",(0,r.jsx)(t.code,{children:"WXM"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Token Decimal:"})," ",(0,r.jsx)(t.code,{children:"18"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You can verify those details on ",(0,r.jsx)(t.a,{href:"https://sepolia.arbiscan.io/address/0xbacef2640862b42eeccfeab9bf750476ae7decc6",children:"Sepolia Arbiscan"}),"."]}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["On MetaMask and click ",(0,r.jsx)(t.strong,{children:"[Import tokens]"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Paste in the WXM\u2019s contract address and MetaMask should automatically fill in the rest of the details. If not, add them manually. To finish, click ",(0,r.jsx)(t.strong,{children:"[Add Custom Token]"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click ",(0,r.jsx)(t.strong,{children:"[Import Tokens]"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"You have now successfully added the WXM token to your MetaMask wallet!"})}),"\n",(0,r.jsx)(t.h3,{id:"get-some-free-testnet-eth-from-a-faucet",children:"Get some free testnet ETH from a faucet"}),"\n",(0,r.jsxs)(t.p,{children:["In order to be able to ",(0,r.jsx)(t.a,{href:"/project/rewards-claiming",children:"claim your rewards"})," you will need some testnet ETH for the gas fees. You can take some for free\nby using ",(0,r.jsx)(t.a,{href:"https://arbitrum-faucet.com/",children:"this faucet"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(6540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);