"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[618],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));a(4996);const o={id:"tokenomics",title:"Tokenomics",sidebar_label:"Tokenomics",slug:"/tokenomics"},i=void 0,l={unversionedId:"project/tokenomics",id:"project/tokenomics",title:"Tokenomics",description:"WXM is a an ERC20 token to power the weather data economy.",source:"@site/docs/project/tokenomics.mdx",sourceDirName:"project",slug:"/tokenomics",permalink:"/tokenomics",draft:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/project/tokenomics.mdx",tags:[],version:"current",frontMatter:{id:"tokenomics",title:"Tokenomics",sidebar_label:"Tokenomics",slug:"/tokenomics"},sidebar:"docs",previous:{title:"Introduction",permalink:"/project"},next:{title:"Reward Mechanism",permalink:"/reward-mechanism"}},s={},d=[{value:"New approach in crowdsourcing weather data.",id:"new-approach-in-crowdsourcing-weather-data",level:3},{value:"WXM Token Distribution",id:"wxm-token-distribution",level:2},{value:"55% - Station Rewards:",id:"55---station-rewards",level:4},{value:"30% - Initial Supporters:",id:"30---initial-supporters",level:4},{value:"10% - Treasury",id:"10---treasury",level:4},{value:"5% - Liquidity support:",id:"5---liquidity-support",level:4},{value:"3% Beta Rewards:",id:"3-beta-rewards",level:4},{value:"Architecture",id:"architecture",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Rules implement on the smart contracts",id:"rules-implement-on-the-smart-contracts",level:2}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"WXM")," is a an ERC20 token to power the weather data economy."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"WeatherXM is based on an EVM compatible chain - we are currently developing on Arbitrum Sepolia Testnet.")),(0,r.kt)("h3",{id:"new-approach-in-crowdsourcing-weather-data"},"New approach in crowdsourcing weather data."),(0,r.kt)("p",null,"WeatherXM creates an entirely new weather data economy that rewards the people who deploy and maintain weather stations.\n$WXM is currently implemented in ",(0,r.kt)("a",{parentName:"p",href:"https://sepolia.arbiscan.io/address/0xbacef2640862b42eeccfeab9bf750476ae7decc6"},"Arbitrum Sepolia Testnet")," as an ERC20 token rewarding the closed beta user group."),(0,r.kt)("p",null,"Like most networks, the value of our Network is greater than the sum of its parts. Station owners are rewarded according to their contribution to the network and not based on the use of the specific data set they provided. "),(0,r.kt)("p",null,"To implement this logic, we introduce a smart contract that distributes a fixed budget of tokens (the $WXM token) to station owners and other stakeholders daily. Any customer who wants to use the Network\u2019s data or services will have to acquire $WXM."),(0,r.kt)("p",null,"The following sections describe how the smart contract issues new tokens, and how it distributes them to the Network contributors."),(0,r.kt)("h2",{id:"wxm-token-distribution"},"WXM Token Distribution"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Total supply of the WXM token is 100M (100,000,000) tokens.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Distribution"),(0,r.kt)("th",{parentName:"tr",align:null},"Percentage"),(0,r.kt)("th",{parentName:"tr",align:null},"Amount"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Station Rewards")),(0,r.kt)("td",{parentName:"tr",align:null},"52%"),(0,r.kt)("td",{parentName:"tr",align:null},"52,000,000 WXM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Initial Supporters")),(0,r.kt)("td",{parentName:"tr",align:null},"30%"),(0,r.kt)("td",{parentName:"tr",align:null},"30,000,000 WXM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Treasury")),(0,r.kt)("td",{parentName:"tr",align:null},"10%"),(0,r.kt)("td",{parentName:"tr",align:null},"10,000,000 WXM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Liquidity Support")),(0,r.kt)("td",{parentName:"tr",align:null},"5%"),(0,r.kt)("td",{parentName:"tr",align:null},"5,000,000 WXM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Beta Rewards")),(0,r.kt)("td",{parentName:"tr",align:null},"3%"),(0,r.kt)("td",{parentName:"tr",align:null},"3.000.000 WXM")))),(0,r.kt)("h4",{id:"55---station-rewards"},"55% - Station Rewards:"),(0,r.kt)("p",null,"Tokens will be used for station owners rewards. 3M of this amount will be used to gradually reward beta users."),(0,r.kt)("h4",{id:"30---initial-supporters"},"30% - Initial Supporters:"),(0,r.kt)("p",null,"30M tokens will be allocated to initial supporters of the project. They will be unlocked daily using a 10-10-80% distribution in the first 3 years."),(0,r.kt)("h4",{id:"10---treasury"},"10% - Treasury"),(0,r.kt)("p",null,"10M tokens will be allocated to the DAO treasury to support the WeatherXM ecosystem development. Tokens will be unlocked linearly during a 5 year period, starting from the day of the token launch."),(0,r.kt)("h4",{id:"5---liquidity-support"},"5% - Liquidity support:"),(0,r.kt)("p",null,"Will be used to bootstrap and support $WXM\u2019s liquidity."),(0,r.kt)("h4",{id:"3-beta-rewards"},"3% Beta Rewards:"),(0,r.kt)("p",null,"3 million tokens will be used to reward stations that contributed data to the Network during the beta phase. This is not a marketing activity intended to create buzz and awareness, but a reward mechanism for the stations that participated and formed the Network before a reward mechanism was in place."),(0,r.kt)("p",null,"More specifically, the 3,000,000 tokens will be allocated to stations based on the percentage of rewardable station-hours each station provided to the Network."),(0,r.kt)("p",null,"A rewardable station hour is an hour during which the station sent at least one valid weather data package to the network. Proof-of-Location (PoL) is not taken into account during the calculation of the Beta Rewards."),(0,r.kt)("p",null,"This provides an additional incentive for the early Network adopters to remain in the network, maximising their station data value due to seniority and providing additional incentive for early members to actively participate in future Network governance."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'To understand better the "Beta rewards" you can read the related blog post ',(0,r.kt)("a",{href:"https://blog.weatherxm.com/beta-user-rewards-b2e27b1727d7"},"here"))),(0,r.kt)("p",null,"All tokens will be minted on token launch. More specifically:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"52M tokens will be  issued linearly, 14,246 per day, and will be  distributed daily to weather station owners."),(0,r.kt)("li",{parentName:"ul"},"30M tokens will be issued daily using a 10-10-80% distribution in the first 3 years and will be distributed daily to WeatherXM AG and its Investors."),(0,r.kt)("li",{parentName:"ul"},'3M tokens will be distributed retrospectively to station owners that participated in the beta phase of the Network ("Beta Rewards").'),(0,r.kt)("li",{parentName:"ul"},"10M tokens will be linearly unlocked the first 5 years. These tokens will be used to support and fund the ecosystem development."),(0,r.kt)("li",{parentName:"ul"},"A one-off issuance of 5M tokens will take place on token launch. These tokens will be used to provide market liquidity.")),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"As more logic is transferred into smart contracts, a need for grouping of functionality and modularity emerges. That is why multiple smart contracts are now created, each with its own logic and design patterns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"WeatherXM"),(0,r.kt)("li",{parentName:"ul"},"WeatherXMData"),(0,r.kt)("li",{parentName:"ul"},"WeatherStationXM"),(0,r.kt)("li",{parentName:"ul"},"RewardPool"),(0,r.kt)("li",{parentName:"ul"},"BurnPool"),(0,r.kt)("li",{parentName:"ul"},"PriceFeedConsumer")),(0,r.kt)("p",null,"Diagrams illustrating the interaction among the smart contracts, storage slots, classes, etc can be found ",(0,r.kt)("a",{href:"https://github.com/WeatherXM/smart-contracts/tree/develop/docs/diagrams"},"here"),"."),(0,r.kt)("h2",{id:"assumptions"},"Assumptions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Different Admins can be assigned to each contract after deployment to the network by transferring ownership.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Admin has a lot of power, and is assumed to be the right, fair and just person/party. It is highly advised to have a multisig as admin, rather than just an EOA.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Company and investors tokens are allocated everyday to a target Externally-owned account (EoA) which is set by the RewardPool Admin. The Distributor, is responsible for initiating the transfer of company and investors tokens daily to the target EoA.\nWeather miners earn rewards by inflationary minting which is independent of the token burning process\nand has a circulation supply cap that once reached,\nthe daily minting will be restricted to the number of tokens daily burned, as per data & services consumed."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Externally-owned account (EOA) \u2013 controlled by anyone with the private keys")),(0,r.kt)("h2",{id:"rules-implement-on-the-smart-contracts"},"Rules implement on the smart contracts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mint only once per day (",(0,r.kt)("a",{href:"https://github.com/WeatherXM/smart-contracts/blob/develop/docs/emissions.md"},"Token Emissions"),") "),(0,r.kt)("li",{parentName:"ul"},"Anyone can initiate the minting operation daily"),(0,r.kt)("li",{parentName:"ul"},"The daily rewards are calculated externally by the rewarding mechanism and then a merkle tree root hash is submitted to the RewardPool"),(0,r.kt)("li",{parentName:"ul"},"Submitting the root hash once per day"),(0,r.kt)("li",{parentName:"ul"},"Minted tokens in circulation should never be more than maximum supply (100M)"),(0,r.kt)("li",{parentName:"ul"},"The total sum of tokens in the RewardPool must always be enough for everyone to withdraw their full allowance"),(0,r.kt)("li",{parentName:"ul"},"Allocated rewards is calculated based on 3 parameters: the cumulative amount, the address, the cycle and the proof"),(0,r.kt)("li",{parentName:"ul"},"A recipient cannot withdraw more than their allocated allowance in the RewardPool"),(0,r.kt)("li",{parentName:"ul"},"The maximum amount a recipient can withdraw is constrained by the chosen cycle and the provided proof, so use the proof for the latest cycle"),(0,r.kt)("li",{parentName:"ul"},"In each cycle, each recipient has only one valid proof"),(0,r.kt)("li",{parentName:"ul"},"Rewards are allocated daily in the RewardPool per wallet address (NOT weather station)"),(0,r.kt)("li",{parentName:"ul"},"Anyone can burn through the BurnPool contract."),(0,r.kt)("li",{parentName:"ul"},"Proof of burn (a receipt for a burn operation) is required for the provision of services"),(0,r.kt)("li",{parentName:"ul"},"The remaining tokens which are not assigned to any weather stations in a daily basis are transferred to the ",(0,r.kt)("a",{href:"https://github.com/WeatherXM/smart-contracts/blob/develop/docs/pools.md"},"Business Development pool"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more information read our public ",(0,r.kt)("a",{href:"https://github.com/WeatherXM/smart-contracts/tree/develop"},"repo")," ")))}p.isMDXComponent=!0}}]);