"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9300],{6822:(e,t,n)=>{function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function o(e){return e instanceof r(e).Element||e instanceof Element}function i(e){return e instanceof r(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!=typeof ShadowRoot&&(e instanceof r(e).ShadowRoot||e instanceof ShadowRoot)}n.d(t,{Ay:()=>Dt});var s=Math.max,c=Math.min,u=Math.round;function f(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function p(){return!/^((?!chrome|android).)*safari/i.test(f())}function d(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var a=e.getBoundingClientRect(),s=1,c=1;t&&i(e)&&(s=e.offsetWidth>0&&u(a.width)/e.offsetWidth||1,c=e.offsetHeight>0&&u(a.height)/e.offsetHeight||1);var f=(o(e)?r(e):window).visualViewport,d=!p()&&n,l=(a.left+(d&&f?f.offsetLeft:0))/s,m=(a.top+(d&&f?f.offsetTop:0))/c,v=a.width/s,h=a.height/c;return{width:v,height:h,top:m,right:l+v,bottom:m+h,left:l,x:l,y:m}}function l(e){var t=r(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function m(e){return e?(e.nodeName||"").toLowerCase():null}function v(e){return((o(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return d(v(e)).left+l(e).scrollLeft}function g(e){return r(e).getComputedStyle(e)}function b(e){var t=g(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function y(e,t,n){void 0===n&&(n=!1);var o,a,s=i(t),c=i(t)&&function(e){var t=e.getBoundingClientRect(),n=u(t.width)/e.offsetWidth||1,r=u(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),f=v(t),p=d(e,c,n),g={scrollLeft:0,scrollTop:0},y={x:0,y:0};return(s||!s&&!n)&&(("body"!==m(t)||b(f))&&(g=(o=t)!==r(o)&&i(o)?{scrollLeft:(a=o).scrollLeft,scrollTop:a.scrollTop}:l(o)),i(t)?((y=d(t,!0)).x+=t.clientLeft,y.y+=t.clientTop):f&&(y.x=h(f))),{x:p.left+g.scrollLeft-y.x,y:p.top+g.scrollTop-y.y,width:p.width,height:p.height}}function w(e){var t=d(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function x(e){return"html"===m(e)?e:e.assignedSlot||e.parentNode||(a(e)?e.host:null)||v(e)}function O(e){return["html","body","#document"].indexOf(m(e))>=0?e.ownerDocument.body:i(e)&&b(e)?e:O(x(e))}function E(e,t){var n;void 0===t&&(t=[]);var o=O(e),i=o===(null==(n=e.ownerDocument)?void 0:n.body),a=r(o),s=i?[a].concat(a.visualViewport||[],b(o)?o:[]):o,c=t.concat(s);return i?c:c.concat(E(x(s)))}function A(e){return["table","td","th"].indexOf(m(e))>=0}function T(e){return i(e)&&"fixed"!==g(e).position?e.offsetParent:null}function j(e){for(var t=r(e),n=T(e);n&&A(n)&&"static"===g(n).position;)n=T(n);return n&&("html"===m(n)||"body"===m(n)&&"static"===g(n).position)?t:n||function(e){var t=/firefox/i.test(f());if(/Trident/i.test(f())&&i(e)&&"fixed"===g(e).position)return null;var n=x(e);for(a(n)&&(n=n.host);i(n)&&["html","body"].indexOf(m(n))<0;){var r=g(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var D="top",L="bottom",k="right",C="left",P="auto",M=[D,L,k,C],S="start",H="end",R="clippingParents",V="viewport",W="popper",B="reference",N=M.reduce((function(e,t){return e.concat([t+"-"+S,t+"-"+H])}),[]),I=[].concat(M,[P]).reduce((function(e,t){return e.concat([t,t+"-"+S,t+"-"+H])}),[]),_=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function U(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var q={placement:"bottom",modifiers:[],strategy:"absolute"};function $(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function F(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,a=void 0===i?q:i;return function(e,t,n){void 0===n&&(n=a);var i,s,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},q,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],f=!1,p={state:c,setOptions:function(n){var i="function"==typeof n?n(c.options):n;d(),c.options=Object.assign({},a,c.options,i),c.scrollParents={reference:o(e)?E(e):e.contextElement?E(e.contextElement):[],popper:E(t)};var s,f,l=function(e){var t=U(e);return _.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(r,c.options.modifiers),f=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(f).map((function(e){return f[e]}))));return c.orderedModifiers=l.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:c,name:t,instance:p,options:r}),a=function(){};u.push(i||a)}})),p.update()},forceUpdate:function(){if(!f){var e=c.elements,t=e.reference,n=e.popper;if($(t,n)){c.rects={reference:y(t,j(n),"fixed"===c.options.strategy),popper:w(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var o=c.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,u=o.name;"function"==typeof i&&(c=i({state:c,options:s,name:u,instance:p})||c)}else c.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){p.forceUpdate(),e(c)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){d(),f=!0}};if(!$(e,t))return p;function d(){u.forEach((function(e){return e()})),u=[]}return p.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var z={passive:!0};function X(e){return e.split("-")[0]}function Y(e){return e.split("-")[1]}function J(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function G(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?X(o):null,a=o?Y(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case D:t={x:s,y:n.y-r.height};break;case L:t={x:s,y:n.y+n.height};break;case k:t={x:n.x+n.width,y:c};break;case C:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=i?J(i):null;if(null!=u){var f="y"===u?"height":"width";switch(a){case S:t[u]=t[u]-(n[f]/2-r[f]/2);break;case H:t[u]=t[u]+(n[f]/2-r[f]/2)}}return t}var K={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Q(e){var t,n=e.popper,o=e.popperRect,i=e.placement,a=e.variation,s=e.offsets,c=e.position,f=e.gpuAcceleration,p=e.adaptive,d=e.roundOffsets,l=e.isFixed,m=s.x,h=void 0===m?0:m,b=s.y,y=void 0===b?0:b,w="function"==typeof d?d({x:h,y:y}):{x:h,y:y};h=w.x,y=w.y;var x=s.hasOwnProperty("x"),O=s.hasOwnProperty("y"),E=C,A=D,T=window;if(p){var P=j(n),M="clientHeight",S="clientWidth";if(P===r(n)&&"static"!==g(P=v(n)).position&&"absolute"===c&&(M="scrollHeight",S="scrollWidth"),i===D||(i===C||i===k)&&a===H)A=L,y-=(l&&P===T&&T.visualViewport?T.visualViewport.height:P[M])-o.height,y*=f?1:-1;if(i===C||(i===D||i===L)&&a===H)E=k,h-=(l&&P===T&&T.visualViewport?T.visualViewport.width:P[S])-o.width,h*=f?1:-1}var R,V=Object.assign({position:c},p&&K),W=!0===d?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:u(n*o)/o||0,y:u(r*o)/o||0}}({x:h,y:y},r(n)):{x:h,y:y};return h=W.x,y=W.y,f?Object.assign({},V,((R={})[A]=O?"0":"",R[E]=x?"0":"",R.transform=(T.devicePixelRatio||1)<=1?"translate("+h+"px, "+y+"px)":"translate3d("+h+"px, "+y+"px, 0)",R)):Object.assign({},V,((t={})[A]=O?y+"px":"",t[E]=x?h+"px":"",t.transform="",t))}const Z={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];i(o)&&m(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});i(r)&&m(r)&&(Object.assign(r.style,a),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};const ee={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=I.reduce((function(e,n){return e[n]=function(e,t,n){var r=X(e),o=[C,D].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[C,k].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}};var te={left:"right",right:"left",bottom:"top",top:"bottom"};function ne(e){return e.replace(/left|right|bottom|top/g,(function(e){return te[e]}))}var re={start:"end",end:"start"};function oe(e){return e.replace(/start|end/g,(function(e){return re[e]}))}function ie(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&a(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ae(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function se(e,t,n){return t===V?ae(function(e,t){var n=r(e),o=v(e),i=n.visualViewport,a=o.clientWidth,s=o.clientHeight,c=0,u=0;if(i){a=i.width,s=i.height;var f=p();(f||!f&&"fixed"===t)&&(c=i.offsetLeft,u=i.offsetTop)}return{width:a,height:s,x:c+h(e),y:u}}(e,n)):o(t)?function(e,t){var n=d(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):ae(function(e){var t,n=v(e),r=l(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=s(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=s(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-r.scrollLeft+h(e),u=-r.scrollTop;return"rtl"===g(o||n).direction&&(c+=s(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:c,y:u}}(v(e)))}function ce(e,t,n,r){var a="clippingParents"===t?function(e){var t=E(x(e)),n=["absolute","fixed"].indexOf(g(e).position)>=0&&i(e)?j(e):e;return o(n)?t.filter((function(e){return o(e)&&ie(e,n)&&"body"!==m(e)})):[]}(e):[].concat(t),u=[].concat(a,[n]),f=u[0],p=u.reduce((function(t,n){var o=se(e,n,r);return t.top=s(o.top,t.top),t.right=c(o.right,t.right),t.bottom=c(o.bottom,t.bottom),t.left=s(o.left,t.left),t}),se(e,f,r));return p.width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p}function ue(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function fe(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=void 0===r?e.placement:r,a=n.strategy,s=void 0===a?e.strategy:a,c=n.boundary,u=void 0===c?R:c,f=n.rootBoundary,p=void 0===f?V:f,l=n.elementContext,m=void 0===l?W:l,h=n.altBoundary,g=void 0!==h&&h,b=n.padding,y=void 0===b?0:b,w=ue("number"!=typeof y?y:fe(y,M)),x=m===W?B:W,O=e.rects.popper,E=e.elements[g?x:m],A=ce(o(E)?E:E.contextElement||v(e.elements.popper),u,p,s),T=d(e.elements.reference),j=G({reference:T,element:O,strategy:"absolute",placement:i}),C=ae(Object.assign({},O,j)),P=m===W?C:T,S={top:A.top-P.top+w.top,bottom:P.bottom-A.bottom+w.bottom,left:A.left-P.left+w.left,right:P.right-A.right+w.right},H=e.modifiersData.offset;if(m===W&&H){var N=H[i];Object.keys(S).forEach((function(e){var t=[k,L].indexOf(e)>=0?1:-1,n=[D,L].indexOf(e)>=0?"y":"x";S[e]+=N[n]*t}))}return S}function de(e,t,n){return s(e,c(t,n))}const le={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,u=void 0!==a&&a,f=n.boundary,p=n.rootBoundary,d=n.altBoundary,l=n.padding,m=n.tether,v=void 0===m||m,h=n.tetherOffset,g=void 0===h?0:h,b=pe(t,{boundary:f,rootBoundary:p,padding:l,altBoundary:d}),y=X(t.placement),x=Y(t.placement),O=!x,E=J(y),A="x"===E?"y":"x",T=t.modifiersData.popperOffsets,P=t.rects.reference,M=t.rects.popper,H="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,R="number"==typeof H?{mainAxis:H,altAxis:H}:Object.assign({mainAxis:0,altAxis:0},H),V=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(T){if(i){var B,N="y"===E?D:C,I="y"===E?L:k,_="y"===E?"height":"width",U=T[E],q=U+b[N],$=U-b[I],F=v?-M[_]/2:0,z=x===S?P[_]:M[_],G=x===S?-M[_]:-P[_],K=t.elements.arrow,Q=v&&K?w(K):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Z[N],te=Z[I],ne=de(0,P[_],Q[_]),re=O?P[_]/2-F-ne-ee-R.mainAxis:z-ne-ee-R.mainAxis,oe=O?-P[_]/2+F+ne+te+R.mainAxis:G+ne+te+R.mainAxis,ie=t.elements.arrow&&j(t.elements.arrow),ae=ie?"y"===E?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(B=null==V?void 0:V[E])?B:0,ce=U+oe-se,ue=de(v?c(q,U+re-se-ae):q,U,v?s($,ce):$);T[E]=ue,W[E]=ue-U}if(u){var fe,le="x"===E?D:C,me="x"===E?L:k,ve=T[A],he="y"===A?"height":"width",ge=ve+b[le],be=ve-b[me],ye=-1!==[D,C].indexOf(y),we=null!=(fe=null==V?void 0:V[A])?fe:0,xe=ye?ge:ve-P[he]-M[he]-we+R.altAxis,Oe=ye?ve+P[he]+M[he]-we-R.altAxis:be,Ee=v&&ye?function(e,t,n){var r=de(e,t,n);return r>n?n:r}(xe,ve,Oe):de(v?xe:ge,ve,v?Oe:be);T[A]=Ee,W[A]=Ee-ve}t.modifiersData[r]=W}},requiresIfExists:["offset"]};const me={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=X(n.placement),c=J(s),u=[C,k].indexOf(s)>=0?"height":"width";if(i&&a){var f=function(e,t){return ue("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:fe(e,M))}(o.padding,n),p=w(i),d="y"===c?D:C,l="y"===c?L:k,m=n.rects.reference[u]+n.rects.reference[c]-a[c]-n.rects.popper[u],v=a[c]-n.rects.reference[c],h=j(i),g=h?"y"===c?h.clientHeight||0:h.clientWidth||0:0,b=m/2-v/2,y=f[d],x=g-p[u]-f[l],O=g/2-p[u]/2+b,E=de(y,O,x),A=c;n.modifiersData[r]=((t={})[A]=E,t.centerOffset=E-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&ie(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function he(e){return[D,k,L,C].some((function(t){return e[t]>=0}))}var ge=F({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,c=void 0===s||s,u=r(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&f.forEach((function(e){e.addEventListener("scroll",n.update,z)})),c&&u.addEventListener("resize",n.update,z),function(){a&&f.forEach((function(e){e.removeEventListener("scroll",n.update,z)})),c&&u.removeEventListener("resize",n.update,z)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=G({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:X(t.placement),variation:Y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Q(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Q(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},Z,ee,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,f=n.boundary,p=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,m=void 0===l||l,v=n.allowedAutoPlacements,h=t.options.placement,g=X(h),b=c||(g===h||!m?[ne(h)]:function(e){if(X(e)===P)return[];var t=ne(e);return[oe(e),t,oe(t)]}(h)),y=[h].concat(b).reduce((function(e,n){return e.concat(X(n)===P?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?I:c,f=Y(r),p=f?s?N:N.filter((function(e){return Y(e)===f})):M,d=p.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=p);var l=d.reduce((function(t,n){return t[n]=pe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[X(n)],t}),{});return Object.keys(l).sort((function(e,t){return l[e]-l[t]}))}(t,{placement:n,boundary:f,rootBoundary:p,padding:u,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,A=y[0],T=0;T<y.length;T++){var j=y[T],H=X(j),R=Y(j)===S,V=[D,L].indexOf(H)>=0,W=V?"width":"height",B=pe(t,{placement:j,boundary:f,rootBoundary:p,altBoundary:d,padding:u}),_=V?R?k:C:R?L:D;w[W]>x[W]&&(_=ne(_));var U=ne(_),q=[];if(i&&q.push(B[H]<=0),s&&q.push(B[_]<=0,B[U]<=0),q.every((function(e){return e}))){A=j,E=!1;break}O.set(j,q)}if(E)for(var $=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},F=m?3:1;F>0;F--){if("break"===$(F))break}t.placement!==A&&(t.modifiersData[r]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},le,me,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=pe(t,{elementContext:"reference"}),s=pe(t,{altBoundary:!0}),c=ve(a,r),u=ve(s,o,i),f=he(c),p=he(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":p})}}]}),be="tippy-content",ye="tippy-backdrop",we="tippy-arrow",xe="tippy-svg-arrow",Oe={passive:!0,capture:!0},Ee=function(){return document.body};function Ae(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function Te(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function je(e,t){return"function"==typeof e?e.apply(void 0,t):e}function De(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function Le(e){return[].concat(e)}function ke(e,t){-1===e.indexOf(t)&&e.push(t)}function Ce(e){return e.split("-")[0]}function Pe(e){return[].slice.call(e)}function Me(e){return Object.keys(e).reduce((function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t}),{})}function Se(){return document.createElement("div")}function He(e){return["Element","Fragment"].some((function(t){return Te(e,t)}))}function Re(e){return Te(e,"MouseEvent")}function Ve(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function We(e){return He(e)?[e]:function(e){return Te(e,"NodeList")}(e)?Pe(e):Array.isArray(e)?e:Pe(document.querySelectorAll(e))}function Be(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function Ne(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function Ie(e){var t,n=Le(e)[0];return null!=n&&null!=(t=n.ownerDocument)&&t.body?n.ownerDocument:document}function _e(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}function Ue(e,t){for(var n=t;n;){var r;if(e.contains(n))return!0;n=null==n.getRootNode||null==(r=n.getRootNode())?void 0:r.host}return!1}var qe={isTouch:!1},$e=0;function Fe(){qe.isTouch||(qe.isTouch=!0,window.performance&&document.addEventListener("mousemove",ze))}function ze(){var e=performance.now();e-$e<20&&(qe.isTouch=!1,document.removeEventListener("mousemove",ze)),$e=e}function Xe(){var e=document.activeElement;if(Ve(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}var Ye=!!("undefined"!=typeof window&&"undefined"!=typeof document)&&!!window.msCrypto;var Je={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Ge=Object.assign({appendTo:Ee,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Je,{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),Ke=Object.keys(Ge);function Qe(e){var t=(e.plugins||[]).reduce((function(t,n){var r,o=n.name,i=n.defaultValue;o&&(t[o]=void 0!==e[o]?e[o]:null!=(r=Ge[o])?r:i);return t}),{});return Object.assign({},e,t)}function Ze(e,t){var n=Object.assign({},t,{content:je(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(Qe(Object.assign({},Ge,{plugins:t}))):Ke).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(o){t[n]=r}return t}),{})}(e,t.plugins));return n.aria=Object.assign({},Ge.aria,n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}var et=function(){return"innerHTML"};function tt(e,t){e[et()]=t}function nt(e){var t=Se();return!0===e?t.className=we:(t.className=xe,He(e)?t.appendChild(e):tt(t,e)),t}function rt(e,t){He(t.content)?(tt(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?tt(e,t.content):e.textContent=t.content)}function ot(e){var t=e.firstElementChild,n=Pe(t.children);return{box:t,content:n.find((function(e){return e.classList.contains(be)})),arrow:n.find((function(e){return e.classList.contains(we)||e.classList.contains(xe)})),backdrop:n.find((function(e){return e.classList.contains(ye)}))}}function it(e){var t=Se(),n=Se();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=Se();function o(n,r){var o=ot(t),i=o.box,a=o.content,s=o.arrow;r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"==typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||rt(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild(nt(r.arrow))):i.appendChild(nt(r.arrow)):s&&i.removeChild(s)}return r.className=be,r.setAttribute("data-state","hidden"),rt(r,e.props),t.appendChild(n),n.appendChild(r),o(e.props,e.props),{popper:t,onUpdate:o}}it.$$tippy=!0;var at=1,st=[],ct=[];function ut(e,t){var n,r,o,i,a,s,c,u,f=Ze(e,Object.assign({},Ge,Qe(Me(t)))),p=!1,d=!1,l=!1,m=!1,v=[],h=De(X,f.interactiveDebounce),g=at++,b=(u=f.plugins).filter((function(e,t){return u.indexOf(e)===t})),y={id:g,reference:e,popper:Se(),popperInstance:null,props:f,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:b,clearDelayTimeouts:function(){clearTimeout(n),clearTimeout(r),cancelAnimationFrame(o)},setProps:function(t){0;if(y.state.isDestroyed)return;S("onBeforeUpdate",[y,t]),F();var n=y.props,r=Ze(e,Object.assign({},n,Me(t),{ignoreAttributes:!0}));y.props=r,$(),n.interactiveDebounce!==r.interactiveDebounce&&(V(),h=De(X,r.interactiveDebounce));n.triggerTarget&&!r.triggerTarget?Le(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded");R(),M(),O&&O(n,r);y.popperInstance&&(K(),Z().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));S("onAfterUpdate",[y,t])},setContent:function(e){y.setProps({content:e})},show:function(){0;var e=y.state.isVisible,t=y.state.isDestroyed,n=!y.state.isEnabled,r=qe.isTouch&&!y.props.touch,o=Ae(y.props.duration,0,Ge.duration);if(e||t||n||r)return;if(L().hasAttribute("disabled"))return;if(S("onShow",[y],!1),!1===y.props.onShow(y))return;y.state.isVisible=!0,D()&&(x.style.visibility="visible");M(),I(),y.state.isMounted||(x.style.transition="none");if(D()){var i=C();Be([i.box,i.content],0)}s=function(){var e;if(y.state.isVisible&&!m){if(m=!0,x.offsetHeight,x.style.transition=y.props.moveTransition,D()&&y.props.animation){var t=C(),n=t.box,r=t.content;Be([n,r],o),Ne([n,r],"visible")}H(),R(),ke(ct,y),null==(e=y.popperInstance)||e.forceUpdate(),S("onMount",[y]),y.props.animation&&D()&&function(e,t){U(e,t)}(o,(function(){y.state.isShown=!0,S("onShown",[y])}))}},function(){var e,t=y.props.appendTo,n=L();e=y.props.interactive&&t===Ee||"parent"===t?n.parentNode:je(t,[n]);e.contains(x)||e.appendChild(x);y.state.isMounted=!0,K(),!1}()},hide:function(){0;var e=!y.state.isVisible,t=y.state.isDestroyed,n=!y.state.isEnabled,r=Ae(y.props.duration,1,Ge.duration);if(e||t||n)return;if(S("onHide",[y],!1),!1===y.props.onHide(y))return;y.state.isVisible=!1,y.state.isShown=!1,m=!1,p=!1,D()&&(x.style.visibility="hidden");if(V(),_(),M(!0),D()){var o=C(),i=o.box,a=o.content;y.props.animation&&(Be([i,a],r),Ne([i,a],"hidden"))}H(),R(),y.props.animation?D()&&function(e,t){U(e,(function(){!y.state.isVisible&&x.parentNode&&x.parentNode.contains(x)&&t()}))}(r,y.unmount):y.unmount()},hideWithInteractivity:function(e){0;k().addEventListener("mousemove",h),ke(st,h),h(e)},enable:function(){y.state.isEnabled=!0},disable:function(){y.hide(),y.state.isEnabled=!1},unmount:function(){0;y.state.isVisible&&y.hide();if(!y.state.isMounted)return;Q(),Z().forEach((function(e){e._tippy.unmount()})),x.parentNode&&x.parentNode.removeChild(x);ct=ct.filter((function(e){return e!==y})),y.state.isMounted=!1,S("onHidden",[y])},destroy:function(){0;if(y.state.isDestroyed)return;y.clearDelayTimeouts(),y.unmount(),F(),delete e._tippy,y.state.isDestroyed=!0,S("onDestroy",[y])}};if(!f.render)return y;var w=f.render(y),x=w.popper,O=w.onUpdate;x.setAttribute("data-tippy-root",""),x.id="tippy-"+y.id,y.popper=x,e._tippy=y,x._tippy=y;var E=b.map((function(e){return e.fn(y)})),A=e.hasAttribute("aria-expanded");return $(),R(),M(),S("onCreate",[y]),f.showOnCreate&&ee(),x.addEventListener("mouseenter",(function(){y.props.interactive&&y.state.isVisible&&y.clearDelayTimeouts()})),x.addEventListener("mouseleave",(function(){y.props.interactive&&y.props.trigger.indexOf("mouseenter")>=0&&k().addEventListener("mousemove",h)})),y;function T(){var e=y.props.touch;return Array.isArray(e)?e:[e,0]}function j(){return"hold"===T()[0]}function D(){var e;return!(null==(e=y.props.render)||!e.$$tippy)}function L(){return c||e}function k(){var e=L().parentNode;return e?Ie(e):document}function C(){return ot(x)}function P(e){return y.state.isMounted&&!y.state.isVisible||qe.isTouch||i&&"focus"===i.type?0:Ae(y.props.delay,e?0:1,Ge.delay)}function M(e){void 0===e&&(e=!1),x.style.pointerEvents=y.props.interactive&&!e?"":"none",x.style.zIndex=""+y.props.zIndex}function S(e,t,n){var r;(void 0===n&&(n=!0),E.forEach((function(n){n[e]&&n[e].apply(n,t)})),n)&&(r=y.props)[e].apply(r,t)}function H(){var t=y.props.aria;if(t.content){var n="aria-"+t.content,r=x.id;Le(y.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n);if(y.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var o=t&&t.replace(r,"").trim();o?e.setAttribute(n,o):e.removeAttribute(n)}}))}}function R(){!A&&y.props.aria.expanded&&Le(y.props.triggerTarget||e).forEach((function(e){y.props.interactive?e.setAttribute("aria-expanded",y.state.isVisible&&e===L()?"true":"false"):e.removeAttribute("aria-expanded")}))}function V(){k().removeEventListener("mousemove",h),st=st.filter((function(e){return e!==h}))}function W(t){if(!qe.isTouch||!l&&"mousedown"!==t.type){var n=t.composedPath&&t.composedPath()[0]||t.target;if(!y.props.interactive||!Ue(x,n)){if(Le(y.props.triggerTarget||e).some((function(e){return Ue(e,n)}))){if(qe.isTouch)return;if(y.state.isVisible&&y.props.trigger.indexOf("click")>=0)return}else S("onClickOutside",[y,t]);!0===y.props.hideOnClick&&(y.clearDelayTimeouts(),y.hide(),d=!0,setTimeout((function(){d=!1})),y.state.isMounted||_())}}}function B(){l=!0}function N(){l=!1}function I(){var e=k();e.addEventListener("mousedown",W,!0),e.addEventListener("touchend",W,Oe),e.addEventListener("touchstart",N,Oe),e.addEventListener("touchmove",B,Oe)}function _(){var e=k();e.removeEventListener("mousedown",W,!0),e.removeEventListener("touchend",W,Oe),e.removeEventListener("touchstart",N,Oe),e.removeEventListener("touchmove",B,Oe)}function U(e,t){var n=C().box;function r(e){e.target===n&&(_e(n,"remove",r),t())}if(0===e)return t();_e(n,"remove",a),_e(n,"add",r),a=r}function q(t,n,r){void 0===r&&(r=!1),Le(y.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),v.push({node:e,eventType:t,handler:n,options:r})}))}function $(){var e;j()&&(q("touchstart",z,{passive:!0}),q("touchend",Y,{passive:!0})),(e=y.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(q(e,z),e){case"mouseenter":q("mouseleave",Y);break;case"focus":q(Ye?"focusout":"blur",J);break;case"focusin":q("focusout",J)}}))}function F(){v.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options;t.removeEventListener(n,r,o)})),v=[]}function z(e){var t,n=!1;if(y.state.isEnabled&&!G(e)&&!d){var r="focus"===(null==(t=i)?void 0:t.type);i=e,c=e.currentTarget,R(),!y.state.isVisible&&Re(e)&&st.forEach((function(t){return t(e)})),"click"===e.type&&(y.props.trigger.indexOf("mouseenter")<0||p)&&!1!==y.props.hideOnClick&&y.state.isVisible?n=!0:ee(e),"click"===e.type&&(p=!n),n&&!r&&te(e)}}function X(e){var t=e.target,n=L().contains(t)||x.contains(t);if("mousemove"!==e.type||!n){var r=Z().concat(x).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:f}:null})).filter(Boolean);(function(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,o=e.popperState,i=e.props.interactiveBorder,a=Ce(o.placement),s=o.modifiersData.offset;if(!s)return!0;var c="bottom"===a?s.top.y:0,u="top"===a?s.bottom.y:0,f="right"===a?s.left.x:0,p="left"===a?s.right.x:0,d=t.top-r+c>i,l=r-t.bottom-u>i,m=t.left-n+f>i,v=n-t.right-p>i;return d||l||m||v}))})(r,e)&&(V(),te(e))}}function Y(e){G(e)||y.props.trigger.indexOf("click")>=0&&p||(y.props.interactive?y.hideWithInteractivity(e):te(e))}function J(e){y.props.trigger.indexOf("focusin")<0&&e.target!==L()||y.props.interactive&&e.relatedTarget&&x.contains(e.relatedTarget)||te(e)}function G(e){return!!qe.isTouch&&j()!==e.type.indexOf("touch")>=0}function K(){Q();var t=y.props,n=t.popperOptions,r=t.placement,o=t.offset,i=t.getReferenceClientRect,a=t.moveTransition,c=D()?ot(x).arrow:null,u=i?{getBoundingClientRect:i,contextElement:i.contextElement||L()}:e,f={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(D()){var n=C().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}},p=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},f];D()&&c&&p.push({name:"arrow",options:{element:c,padding:3}}),p.push.apply(p,(null==n?void 0:n.modifiers)||[]),y.popperInstance=ge(u,x,Object.assign({},n,{placement:r,onFirstUpdate:s,modifiers:p}))}function Q(){y.popperInstance&&(y.popperInstance.destroy(),y.popperInstance=null)}function Z(){return Pe(x.querySelectorAll("[data-tippy-root]"))}function ee(e){y.clearDelayTimeouts(),e&&S("onTrigger",[y,e]),I();var t=P(!0),r=T(),o=r[0],i=r[1];qe.isTouch&&"hold"===o&&i&&(t=i),t?n=setTimeout((function(){y.show()}),t):y.show()}function te(e){if(y.clearDelayTimeouts(),S("onUntrigger",[y,e]),y.state.isVisible){if(!(y.props.trigger.indexOf("mouseenter")>=0&&y.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&p)){var t=P(!1);t?r=setTimeout((function(){y.state.isVisible&&y.hide()}),t):o=requestAnimationFrame((function(){y.hide()}))}}else _()}}function ft(e,t){void 0===t&&(t={});var n=Ge.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",Fe,Oe),window.addEventListener("blur",Xe);var r=Object.assign({},t,{plugins:n}),o=We(e).reduce((function(e,t){var n=t&&ut(t,r);return n&&e.push(n),e}),[]);return He(e)?o[0]:o}ft.defaultProps=Ge,ft.setDefaultProps=function(e){Object.keys(e).forEach((function(t){Ge[t]=e[t]}))},ft.currentInput=qe;Object.assign({},Z,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}});ft.setDefaultProps({render:it});const pt=ft;var dt=n(6540),lt=n(961);function mt(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var vt="undefined"!=typeof window&&"undefined"!=typeof document;function ht(e,t){e&&("function"==typeof e&&e(t),{}.hasOwnProperty.call(e,"current")&&(e.current=t))}function gt(){return vt&&document.createElement("div")}function bt(e,t){if(e===t)return!0;if("object"==typeof e&&null!=e&&"object"==typeof t&&null!=t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e){if(!t.hasOwnProperty(n))return!1;if(!bt(e[n],t[n]))return!1}return!0}return!1}function yt(e){var t=[];return e.forEach((function(e){t.find((function(t){return bt(e,t)}))||t.push(e)})),t}function wt(e,t){var n,r;return Object.assign({},t,{popperOptions:Object.assign({},e.popperOptions,t.popperOptions,{modifiers:yt([].concat((null==(n=e.popperOptions)?void 0:n.modifiers)||[],(null==(r=t.popperOptions)?void 0:r.modifiers)||[]))})})}var xt=vt?dt.useLayoutEffect:dt.useEffect;function Ot(e){var t=(0,dt.useRef)();return t.current||(t.current="function"==typeof e?e():e),t.current}function Et(e,t,n){n.split(/\s+/).forEach((function(n){n&&e.classList[t](n)}))}var At={name:"className",defaultValue:"",fn:function(e){var t=e.popper.firstElementChild,n=function(){var t;return!!(null==(t=e.props.render)?void 0:t.$$tippy)};function r(){e.props.className&&!n()||Et(t,"add",e.props.className)}return{onCreate:r,onBeforeUpdate:function(){n()&&Et(t,"remove",e.props.className)},onAfterUpdate:r}}};function Tt(e){return function(t){var n=t.children,r=t.content,o=t.visible,i=t.singleton,a=t.render,s=t.reference,c=t.disabled,u=void 0!==c&&c,f=t.ignoreAttributes,p=void 0===f||f,d=(t.__source,t.__self,mt(t,["children","content","visible","singleton","render","reference","disabled","ignoreAttributes","__source","__self"])),l=void 0!==o,m=void 0!==i,v=(0,dt.useState)(!1),h=v[0],g=v[1],b=(0,dt.useState)({}),y=b[0],w=b[1],x=(0,dt.useState)(),O=x[0],E=x[1],A=Ot((function(){return{container:gt(),renders:1}})),T=Object.assign({ignoreAttributes:p},d,{content:A.container});l&&(T.trigger="manual",T.hideOnClick=!1),m&&(u=!0);var j=T,D=T.plugins||[];a&&(j=Object.assign({},T,{plugins:m&&null!=i.data?[].concat(D,[{fn:function(){return{onTrigger:function(e,t){var n=i.data.children.find((function(e){return e.instance.reference===t.currentTarget}));e.state.$$activeSingletonInstance=n.instance,E(n.content)}}}}]):D,render:function(){return{popper:A.container}}}));var L=[s].concat(n?[n.type]:[]);return xt((function(){var t=s;s&&s.hasOwnProperty("current")&&(t=s.current);var n=e(t||A.ref||gt(),Object.assign({},j,{plugins:[At].concat(T.plugins||[])}));return A.instance=n,u&&n.disable(),o&&n.show(),m&&i.hook({instance:n,content:r,props:j,setSingletonContent:E}),g(!0),function(){n.destroy(),null==i||i.cleanup(n)}}),L),xt((function(){var e;if(1!==A.renders){var t=A.instance;t.setProps(wt(t.props,j)),null==(e=t.popperInstance)||e.forceUpdate(),u?t.disable():t.enable(),l&&(o?t.show():t.hide()),m&&i.hook({instance:t,content:r,props:j,setSingletonContent:E})}else A.renders++})),xt((function(){var e;if(a){var t=A.instance;t.setProps({popperOptions:Object.assign({},t.props.popperOptions,{modifiers:[].concat(((null==(e=t.props.popperOptions)?void 0:e.modifiers)||[]).filter((function(e){return"$$tippyReact"!==e.name})),[{name:"$$tippyReact",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t,n=e.state,r=null==(t=n.modifiersData)?void 0:t.hide;y.placement===n.placement&&y.referenceHidden===(null==r?void 0:r.isReferenceHidden)&&y.escaped===(null==r?void 0:r.hasPopperEscaped)||w({placement:n.placement,referenceHidden:null==r?void 0:r.isReferenceHidden,escaped:null==r?void 0:r.hasPopperEscaped}),n.attributes.popper={}}}])})})}}),[y.placement,y.referenceHidden,y.escaped].concat(L)),dt.createElement(dt.Fragment,null,n?(0,dt.cloneElement)(n,{ref:function(e){A.ref=e,ht(n.ref,e)}}):null,h&&(0,lt.createPortal)(a?a(function(e){var t={"data-placement":e.placement};return e.referenceHidden&&(t["data-reference-hidden"]=""),e.escaped&&(t["data-escaped"]=""),t}(y),O,A.instance):r,A.container))}}var jt=function(e,t){return(0,dt.forwardRef)((function(n,r){var o=n.children,i=mt(n,["children"]);return dt.createElement(e,Object.assign({},t,i),o?(0,dt.cloneElement)(o,{ref:function(e){ht(r,e),ht(o.ref,e)}}):null)}))};const Dt=jt(Tt(pt))},8091:()=>{},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(6540);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);