!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!$[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(m[t]=n[t]);0==--g&&0===v&&S()}(e,t),n&&n(e,t)};var t,r=!0,o="93e8a777089113411be7",i={},s=[],a=[];function d(e){var n=_[e];if(!n)return P;var r=function(r){return n.hot.active?(_[r]?-1===_[r].parents.indexOf(e)&&_[r].parents.push(e):(s=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),P(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(n){P[e]=n}}};for(var i in P)Object.prototype.hasOwnProperty.call(P,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===p&&u("prepare"),v++,P.e(e).then(n,(function(e){throw n(),e}));function n(){v--,"prepare"===p&&(y[e]||L(e),0===v&&0===g&&S())}},r.t=function(e,n){return 1&n&&(e=r(e)),P.t(e,-2&n)},r}function c(n){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:t!==n,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);n>=0&&r._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(m={})[n]=e[n],u("ready");break;case"ready":H(n);break;case"prepare":case"check":case"dispose":case"apply":(b=b||[]).push(n)}},check:x,apply:E,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:i[n]};return t=void 0,r}var l=[],p="idle";function u(e){p=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var f,m,h,b,g=0,v=0,y={},w={},$={};function k(e){return+e+""===e?+e:e}function x(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return r=e,u("check"),(n=1e4,n=n||1e4,new Promise((function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=P.p+"eb94743-wps-hmr.json";r.open("GET",o,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}}))).then((function(e){if(!e)return u(O()?"ready":"idle"),null;w={},y={},$=e.c,h=e.h,u("prepare");var n=new Promise((function(e,n){f={resolve:e,reject:n}}));m={};return L(0),"prepare"===p&&0===v&&0===g&&S(),n}));var n}function L(e){$[e]?(w[e]=!0,g++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=P.p+"eb94743-"+e+"-wps-hmr.js",document.head.appendChild(n)}(e)):y[e]=!0}function S(){u("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then((function(){return E(r)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&n.push(k(t));e.resolve(n)}}function E(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function n(r){var a,d,c,l,p;function f(e){for(var n=[e],t={},r=n.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),i=o.id,s=o.chain;if((l=_[i])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var a=0;a<l.parents.length;a++){var d=l.parents[a],c=_[d];if(c){if(c.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([d]),moduleId:i,parentId:d};-1===n.indexOf(d)&&(c.hot._acceptedDependencies[i]?(t[d]||(t[d]=[]),g(t[d],[i])):(delete t[d],n.push(d),r.push({chain:s.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function g(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}O();var v={},y=[],w={},x=function(){console.warn("[HMR] unexpected require("+S.moduleId+") to disposed module")};for(var L in m)if(Object.prototype.hasOwnProperty.call(m,L)){var S;p=k(L),S=m[L]?f(p):{type:"disposed",moduleId:L};var E=!1,H=!1,D=!1,j="";switch(S.chain&&(j="\nUpdate propagation: "+S.chain.join(" -> ")),S.type){case"self-declined":r.onDeclined&&r.onDeclined(S),r.ignoreDeclined||(E=new Error("Aborted because of self decline: "+S.moduleId+j));break;case"declined":r.onDeclined&&r.onDeclined(S),r.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+S.moduleId+" in "+S.parentId+j));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(S),r.ignoreUnaccepted||(E=new Error("Aborted because "+p+" is not accepted"+j));break;case"accepted":r.onAccepted&&r.onAccepted(S),H=!0;break;case"disposed":r.onDisposed&&r.onDisposed(S),D=!0;break;default:throw new Error("Unexception type "+S.type)}if(E)return u("abort"),Promise.reject(E);if(H)for(p in w[p]=m[p],g(y,S.outdatedModules),S.outdatedDependencies)Object.prototype.hasOwnProperty.call(S.outdatedDependencies,p)&&(v[p]||(v[p]=[]),g(v[p],S.outdatedDependencies[p]));D&&(g(y,[S.moduleId]),w[p]=x)}var I,M=[];for(d=0;d<y.length;d++)p=y[d],_[p]&&_[p].hot._selfAccepted&&w[p]!==x&&!_[p].hot._selfInvalidated&&M.push({module:p,parents:_[p].parents.slice(),errorHandler:_[p].hot._selfAccepted});u("dispose"),Object.keys($).forEach((function(e){!1===$[e]&&function(e){delete installedChunks[e]}(e)}));var q,T,C=y.slice();for(;C.length>0;)if(p=C.pop(),l=_[p]){var A={},N=l.hot._disposeHandlers;for(c=0;c<N.length;c++)(a=N[c])(A);for(i[p]=A,l.hot.active=!1,delete _[p],delete v[p],c=0;c<l.children.length;c++){var z=_[l.children[c]];z&&((I=z.parents.indexOf(p))>=0&&z.parents.splice(I,1))}}for(p in v)if(Object.prototype.hasOwnProperty.call(v,p)&&(l=_[p]))for(T=v[p],c=0;c<T.length;c++)q=T[c],(I=l.children.indexOf(q))>=0&&l.children.splice(I,1);u("apply"),void 0!==h&&(o=h,h=void 0);for(p in m=void 0,w)Object.prototype.hasOwnProperty.call(w,p)&&(e[p]=w[p]);var R=null;for(p in v)if(Object.prototype.hasOwnProperty.call(v,p)&&(l=_[p])){T=v[p];var U=[];for(d=0;d<T.length;d++)if(q=T[d],a=l.hot._acceptedDependencies[q]){if(-1!==U.indexOf(a))continue;U.push(a)}for(d=0;d<U.length;d++){a=U[d];try{a(T)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:p,dependencyId:T[d],error:e}),r.ignoreErrored||R||(R=e)}}}for(d=0;d<M.length;d++){var W=M[d];p=W.module,s=W.parents,t=p;try{P(p)}catch(e){if("function"==typeof W.errorHandler)try{W.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:p,error:n,originalError:e}),r.ignoreErrored||R||(R=n),R||(R=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:p,error:e}),r.ignoreErrored||R||(R=e)}}if(R)return u("fail"),Promise.reject(R);if(b)return n(r).then((function(e){return y.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}));return u("idle"),new Promise((function(e){e(y)}))}(n=n||{})}function O(){if(b)return m||(m={}),b.forEach(H),b=void 0,!0}function H(n){Object.prototype.hasOwnProperty.call(m,n)||(m[n]=e[n])}var _={};function P(n){if(_[n])return _[n].exports;var t=_[n]={i:n,l:!1,exports:{},hot:c(n),parents:(a=s,s=[],a),children:[]};return e[n].call(t.exports,t,t.exports,d(n)),t.l=!0,t.exports}P.m=e,P.c=_,P.d=function(e,n,t){P.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,n){if(1&n&&(e=P(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(P.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)P.d(t,r,function(n){return e[n]}.bind(null,r));return t},P.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(n,"a",n),n},P.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},P.p="",P.h=function(){return o},d(2)(P.s=2)}([function(e,n){const{error:t,info:r,warn:o}=console,i={error:t.bind(console,"⬡ wps:"),info:r.bind(console,"⬡ wps:"),refresh:"Please refresh the page",warn:o.bind(console,"⬡ wps:")},s=()=>{},a={error:s,info:s,warn:s};e.exports=()=>window.webpackPluginServe.silent?a:i},function(e,n){e.exports={addCss:e=>{const n=document.createElement("style");n.type="text/css",e.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),document.head.appendChild(n)},addHtml:(e,n)=>{const t=document.createElement("div"),r=[];for(t.innerHTML=e.trim();t.firstChild;)r.push((n||document.body).appendChild(t.firstChild));return r},socketMessage:(e,n)=>{e.addEventListener("message",e=>{const{action:t,data:r={}}=JSON.parse(e.data);n(t,r)})}}},function(e,n,t){t(10),e.exports=t(3)},function(e,n,t){(()=>{const{run:e}=t(4);let n,r="<unknown>";try{n={compress:null,headers:null,historyFallback:!1,hmr:!0,host:null,liveReload:!0,log:{level:"info",prefix:{template:"{{level}}"},name:"webpack-plugin-serve"},open:!1,port:8080,progress:!0,ramdisk:!1,secure:!1,static:"./dist",status:!0,waitForBuild:!0,address:"[::]:8080",compilerName:null,wpsId:"eb94743"}}catch(e){const{log:n}=t(0);n.error("The entry for webpack-plugin-serve was included in your build, but it does not appear that the plugin was. Please check your configuration.")}try{r=t.h()}catch(e){}e(r,n)})()},function(e,n,t){e.exports={run:(e,n)=>{const{address:r,client:o={},progress:i,secure:s,status:a}=n;n.firstInstance=!window.webpackPluginServe,window.webpackPluginServe=window.webpackPluginServe||{compilers:{}},window.webpackPluginServe.silent=!!o.silent;const{ClientSocket:d}=t(5),{replace:c}=t(6),{error:l,info:p,warn:u}=t(0)(),f=new d(o,`${s?"wss":"ws"}://${o.address||r}/wps`),{compilerName:m}=n;if(window.webpackPluginServe.compilers[m]={},window.addEventListener("beforeunload",()=>f.close()),f.addEventListener("message",t=>{const{action:r,data:o={}}=JSON.parse(t.data),{errors:i,hash:s="<?>",warnings:a}=o||{},d=s.slice(0,7),f=n.compilerName?`(Compiler: ${n.compilerName}) `:"",h=window.webpackPluginServe.compilers[m],{wpsId:b}=o;switch(r){case"build":h.done=!1;break;case"connected":p("WebSocket connected "+f);break;case"done":h.done=!0;break;case"problems":o.errors.length&&l(`${f}Build ${d} produced errors:\n`,i),o.warnings.length&&u(`${f}Build ${d} produced warnings:\n`,a);break;case"reload":window.location.reload();break;case"replace":b&&b===n.wpsId&&c(e,s)}}),n.firstInstance){if("minimal"===i){const{init:e}=t(7);e(n,f)}else if(i){const{init:e}=t(8);e(n,f)}if(a){const{init:e}=t(9);e(n,f)}p("Hot Module Replacement is active"),n.liveReload&&p("Live Reload taking precedence over Hot Module Replacement")}}}},function(e,n,t){const{error:r,refresh:o,warn:i}=t(0)(),s=[1008,1011];e.exports={ClientSocket:class{constructor(e,...n){this.args=n,this.attempts=0,this.eventHandlers=[],this.options=e,this.retrying=!1,this.connect()}addEventListener(...e){this.eventHandlers.push(e),this.socket.addEventListener(...e)}close(){this.socket.close()}connect(){if(this.socket&&delete this.socket,this.connecting=!0,this.socket=new WebSocket(...this.args),this.options.retry?this.socket.addEventListener("close",e=>{s.includes(e.code)||(this.retrying||i("The WebSocket was closed and will attempt to reconnect"),this.reconnect())}):this.socket.onclose=()=>i("The client WebSocket was closed. "+o),this.socket.addEventListener("open",()=>{this.attempts=0,this.retrying=!1}),this.eventHandlers.length)for(const[e,n]of this.eventHandlers)this.socket.addEventListener(e,n)}reconnect(){if(this.attempts+=1,this.retrying=!0,this.attempts>10)return r("The WebSocket could not be reconnected. "+o),void(this.retrying=!1);const e=1e3*this.attempts**2;setTimeout(()=>this.connect(this.args),e)}removeEventListener(...e){const[,n]=e;this.eventHandlers=this.eventHandlers.filter(([,e])=>e===n),this.socket.removeEventListener(...e)}}}},function(e,n,t){const{error:r,info:o,refresh:i,warn:s}=t(0)();let a=!0;const d={onUnaccepted(e){s("Change in unaccepted module(s):\n",e),s(e)},onDeclined(e){s("Change in declined module(s):\n",e)},onErrored(e){r("Error in module(s):\n",e)}};e.exports={replace:async(n,t)=>{const{apply:r,check:c,status:l}=e.hot;if(t&&(a=t.includes(n)),!a){const e=l();if("abort"===e||"fail"===e)return void s(`An HMR update was triggered, but ${e}ed. ${i}`);let n;try{n=await c(!1)}catch(e){return}if(!n)return void s("No modules found for replacement. "+i);n=await r(d),n&&(a=!0,o(`Build ${t.slice(0,7)} replaced:\n`,n))}}}},function(e,n,t){const{addCss:r,addHtml:o}=t(1),i="wps-progress-minimal",s=`\n<div id="${i}" class="${i}-hidden">\n  <div id="${i}-bar"></div>\n</div>\n`,a=`\n#${i} {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 4px;\n  width: 100vw;\n  z-index: 2147483645;\n}\n\n#${i}-bar {\n  width: 0%;\n  height: 4px;\n  background-color: rgb(186, 223, 172);\n}\n\n@keyframes ${i}-fade {\n\t0% {\n\t\topacity: 1;\n\t}\n\t100% {\n\t\topacity: 0;\n\t}\n}\n\n.${i}-disappear {\n  animation: ${i}-fade .3s;\n  animation-fill-mode: forwards;\n  animation-delay: .5s;\n}\n\n.${i}-hidden {\n  display: none;\n}\n`;let d=!1;const c=e=>{document.querySelector(`#${i}-bar`).style.width=e+"%"},l=e=>{e.classList.add(i+"-disappear")};e.exports={init:(e,n)=>{e.firstInstance&&(document.addEventListener("DOMContentLoaded",()=>{r(a),o(s);const e=document.querySelector("#"+i);e.addEventListener("animationend",()=>{c(0),e.classList.add(i+"-hidden")})}),document.addEventListener("visibilitychange",()=>{if(!document.hidden&&d){const e=document.querySelector("#"+i);l(e),d=!1}})),n.addEventListener("message",e=>{const{action:n,data:t}=JSON.parse(e.data);if("progress"!==n)return;const r=Math.floor(100*t.percent),o=document.querySelector("#"+i);o.classList.remove(i+"-hidden",i+"-disappear"),1===t.percent?document.hidden?d=!0:l(o):d=!1,c(r)})}}},function(e,n,t){const{addCss:r,addHtml:o}=t(1),i="wps-progress",s=`\n#${i}{\n  width: 200px;\n  height: 200px;\n  position: fixed;\n  right: 5%;\n  top: 5%;\n  transition: opacity .25s ease-in-out;\n  z-index: 2147483645;\n}\n\n#${i}-bg {\n  fill: #282d35;\n}\n\n#${i}-fill {\n  fill: rgba(0, 0, 0, 0);\n  stroke: rgb(186, 223, 172);\n  stroke-dasharray: 219.99078369140625;\n  stroke-dashoffset: -219.99078369140625;\n  stroke-width: 10;\n  transform: rotate(90deg)translate(0px, -80px);\n}\n\n#${i}-percent {\n  font-family: 'Open Sans';\n  font-size: 18px;\n  fill: #ffffff;\n}\n\n#${i}-percent-value {\n  dominant-baseline: middle;\n  text-anchor: middle;\n}\n\n#${i}-percent-super {\n  fill: #bdc3c7;\n  font-size: .45em;\n  baseline-shift: 10%;\n}\n\n.${i}-noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default;\n}\n\n@keyframes ${i}-fade {\n\t0% {\n\t\topacity: 1;\n\t\ttransform: scale(1);\n\t\t-webkit-transform: scale(1);\n\t}\n\t100% {\n\t\topacity: 0;\n\t\ttransform: scale(0);\n\t\t-webkit-transform: scale(0);\n\t}\n}\n\n.${i}-disappear {\n  animation: ${i}-fade .3s;\n  animation-fill-mode:forwards;\n  animation-delay: .5s;\n}\n\n.${i}-hidden {\n  display: none;\n}\n\n/* Put google web font at the end, or you'll see FOUC in Firefox */\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');\n`,a=`\n<svg id="${i}" class="${i}-noselect ${i}-hidden" x="0px" y="0px" viewBox="0 0 80 80">\n  <circle id="${i}-bg" cx="50%" cy="50%" r="35"></circle>\n  <path id="${i}-fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />\n  <text id="${i}-percent" x="50%" y="51%"><tspan id="${i}-percent-value">0</tspan><tspan id="${i}-percent-super">%</tspan></text>\n</svg>\n`;let d=!1;const c=e=>{const n=document.querySelector(`#${i}-percent-value`),t=(100-e)/100*-219.99078369140625;document.querySelector(`#${i}-fill`).setAttribute("style","stroke-dashoffset: "+t),n.innerHTML=e.toString()},l=e=>{e.classList.add(i+"-disappear")};e.exports={init:(e,n)=>{e.firstInstance&&(document.addEventListener("DOMContentLoaded",()=>{r(s),o(a);const e=document.querySelector("#"+i);e.addEventListener("animationend",()=>{c(0),e.classList.add(i+"-hidden")})}),document.addEventListener("visibilitychange",()=>{if(!document.hidden&&d){const e=document.querySelector("#"+i);l(e),d=!1}})),n.addEventListener("message",e=>{const{action:n,data:t}=JSON.parse(e.data);if("progress"!==n)return;const r=Math.floor(100*t.percent),o=document.querySelector("#"+i);o&&(o.classList.remove(i+"-disappear",i+"-hidden"),1===t.percent?document.hidden?d=!0:l(o):d=!1,c(r))})}}},function(e,n,t){const{addCss:r,addHtml:o,socketMessage:i}=t(1),s="wps-status",a=`\n#${s} {\n  background: #282d35;\n  border-radius: 0.6em;\n  display: flex;\n  flex-direction: column;\n\tfont-family: 'Open Sans', Helvetica, Arial, sans-serif;\n\tfont-size: 10px;\n  height: 90%;\n  min-height: 20em;\n  left: 50%;\n  opacity: 1;\n  overflow: hidden;\n  padding-bottom: 3em;\n  position: absolute;\n  top: 2rem;\n  transform: translateX(-50%);\n  transition: opacity .25s ease-in-out;\n  width: 95%;\n  z-index: 2147483645;\n}\n\n@keyframes ${s}-hidden-display {\n\t0% {\n\t\topacity: 1;\n\t}\n\t99% {\n\t\tdisplay: inline-flex;\n\t\topacity: 0;\n\t}\n\t100% {\n\t\tdisplay: none;\n\t\topacity: 0;\n\t}\n}\n\n#${s}.${s}-hidden {\n  animation: ${s}-hidden-display .3s;\n  animation-fill-mode:forwards;\n  display: none;\n}\n\n#${s}.${s}-min {\n  animation: minimize 10s;\n  bottom: 2em;\n  cursor: pointer;\n  height: 6em;\n  left: auto;\n  min-height: 6em;\n  padding-bottom: 0;\n  position: absolute;\n  right: 2em;\n  top: auto;\n  transform: none;\n  width: 6em;\n}\n\n#${s}.${s}-min #${s}-beacon {\n  display: block;\n}\n\n#${s}-title {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: normal;\n  margin: 0;\n  padding: 0.6em 0;\n  text-align: center;\n  width: 100%;\n}\n\n#${s}.${s}-min #${s}-title {\n  display: none;\n}\n\n#${s}-title-errors {\n  color: #ff5f58;\n  font-style: normal;\n  padding-left: 1em;\n}\n\n#${s}-title-warnings {\n  color: #ffbd2e;\n  font-style: normal;\n  padding-left: 1em;\n}\n\n#${s}-problems {\n  overflow-y: auto;\n  padding: 1em 2em;\n}\n\n#${s}-problems pre {\n  color: #ddd;\n  background: #282d35;\n  display: block;\n  font-size: 1.3em;\n\tfont-family: 'Open Sans', Helvetica, Arial, sans-serif;\n  white-space: pre-wrap;\n}\n\n#${s}-problems pre em {\n  background: #ff5f58;\n  border-radius: 0.3em;\n  color: #641e16;\n  font-style: normal;\n  line-height: 3em;\n  margin-right: 0.4em;\n  padding: 0.1em 0.4em;\n  text-transform: uppercase;\n}\n\npre#${s}-warnings em {\n  background: #ffbd2e;\n  color: #3e2723;\n}\n\npre#${s}-success {\n  display: none;\n  text-align: center;\n}\n\npre#${s}-success em {\n  background: #7fb900;\n  color: #004d40;\n}\n\n#${s}-problems.${s}-success #${s}-success {\n  display: block;\n}\n\n#${s}.${s}-min #${s}-problems {\n  display: none;\n}\n\n#${s}-nav {\n  opacity: 0.5;\n  padding: 1.2em;\n  position: absolute;\n}\n\n#${s}.${s}-min #${s}-nav {\n  display: none;\n}\n\n#${s}-nav:hover {\n  opacity: 1;\n}\n\n#${s}-nav div {\n  background: #ff5f58;\n  border-radius: 1.2em;\n  cursor: pointer;\n  display: inline-block;\n  height: 1.2em;\n  position: relative;\n  width: 1.2em;\n}\n\ndiv#${s}-min {\n  background: #ffbd2e;\n  margin-left: 0.8em;\n}\n\n#${s}-beacon {\n  border-radius: 3em;\n  display: none;\n  font-size: 10px;\n  height: 3em;\n  margin: 1.6em auto;\n  position: relative;\n  width: 3em;\n}\n\n#${s}-beacon:before, #${s}-beacon:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(127,185,0, 0.2);\n  border-radius: 3em;\n  opacity: 0;\n}\n\n#${s}-beacon:before {\n  animation: ${s}-pulse 3s infinite linear;\n  transform: scale(1);\n}\n\n#${s}-beacon:after {\n  animation: ${s}-pulse 3s 2s infinite linear;\n}\n\n\n@keyframes ${s}-pulse {\n  0% {\n    opacity: 0;\n    transform: scale(0.6);\n  }\n  33% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n#${s}-beacon mark {\n  background: rgba(127, 185, 0, 1);\n  border-radius: 100% 100%;\n  height: 1em;\n  left: 1em;\n  position: absolute;\n  top: 1em;\n  width: 1em;\n}\n\n#${s}-beacon.${s}-error mark {\n  background: #ff5f58;\n}\n\n#${s}-beacon.${s}-error:before, #${s}-beacon.error:after {\n  background: rgba(255, 95, 88, 0.2);\n}\n\n#${s}-beacon.${s}-warning mark {\n  background: #ffbd2e;\n}\n\n#${s}-beacon.${s}-warning:before, #${s}-beacon.warning:after {\n  background: rgba(255, 189, 46, 0.2);\n}\n\n/* Put google web font at the end, or you'll see FOUC in Firefox */\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');\n`,d=`\n<aside id="${s}" class="${s}-hidden" title="build status">\n  <figure id="${s}-beacon">\n    <mark/>\n  </figure>\n  <nav id="${s}-nav">\n    <div id="${s}-close" title="close"></div>\n    <div id="${s}-min" title="minmize"></div>\n  </nav>\n  <h1 id="${s}-title">\n    build status\n    <em id="${s}-title-errors"></em>\n    <em id="${s}-title-warnings"></em>\n  </h1>\n  <article id="${s}-problems">\n    <pre id="${s}-success"><em>Build Successful</em></pre>\n    <pre id="${s}-errors"></pre>\n    <pre id="${s}-warnings"></pre>\n  </article>\n</aside>\n`;e.exports={init:(e,n)=>{const t=s+"-hidden";let c,l,p,u,f,m,h,b=!1;const g=()=>{u.innerHTML="",f.innerHTML="",p.classList.remove(s+"-success"),l.className="",m.innerText="",h.innerText=""};e.firstInstance&&document.addEventListener("DOMContentLoaded",()=>{r(a),[c]=o(d),l=document.querySelector(`#${s}-beacon`),p=document.querySelector(`#${s}-problems`),u=document.querySelector(`#${s}-errors`),f=document.querySelector(`#${s}-warnings`),m=document.querySelector(`#${s}-title-errors`),h=document.querySelector(`#${s}-title-warnings`);const e=document.querySelector(`#${s}-close`),n=document.querySelector(`#${s}-min`);c.addEventListener("click",()=>{c.classList.remove(s+"-min")}),e.addEventListener("click",()=>{c.classList.add(s+"-hidden")}),n.addEventListener("click",e=>{c.classList.add(s+"-min"),e.stopImmediatePropagation()})}),i(n,(e,n)=>{if(!c)return;const{compilers:r}=window.webpackPluginServe;switch(e){case"build":g();break;case"problems":(e=>{if(e.length){p.classList.remove(s+"-success"),l.classList.add(s+"-error");for(const n of e){o(`<div><em>Error</em> in ${n}</div>`,u)}m.innerText=e.length+" Error(s)"}else m.innerText="";c.classList.remove(t)})(n.errors),(e=>{if(e.length){p.classList.remove(s+"-success"),l.classList.contains(s+"-error")||l.classList.add(s+"-warning");for(const n of e){o(`<div><em>Warning</em> in ${n}</div>`,f)}h.innerText=e.length+" Warning(s)"}else h.innerText="";c.classList.remove(t)})(n.warnings),c.classList.remove(t),b=n.errors.length||n.warnings.length;break;case"replace":for(const e of Object.keys(r))if(!r[e])return;!b||u.children.length||f.children.length||(g(),b=!1,p.classList.add(s+"-success"),c.classList.remove(t),setTimeout(()=>c.classList.add(t),3e3))}})}}},function(e,n,t){"use strict";t.r(n);document.body.appendChild(((e="Hello World")=>{const n=document.createElement("div");return n.innerHTML=e,n})())}]);
//# sourceMappingURL=main.js.map