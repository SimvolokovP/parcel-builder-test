function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n=globalThis,r={},o={},a=n.parcelRequire08cb;null==a&&((a=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},n.parcelRequire08cb=a);var i=a.register;i("27Lyk",function(e,n){t(e.exports,"register",()=>r,t=>r=t),t(e.exports,"resolve",()=>o,t=>o=t);var r,o,a=new Map;r=function(t,e){for(var n=0;n<e.length-1;n+=2)a.set(e[n],{baseUrl:t,path:e[n+1]})},o=function(t){var e=a.get(t);if(null==e)throw Error("Could not resolve bundle with id "+t);return new URL(e.path,e.baseUrl).toString()}}),i("7gSKI",function(n,r){t(n.exports,"router",()=>u);var o=a("lqtDp"),i=a("jhHjo"),s=a("7XL3w");let c=document.getElementById("app"),u=new(e(o))("/"),l=(0,i.getHeader)(),h=(0,s.getPageContainer)();u.on("/",async()=>{h.innerHTML="";let t=(await a("aBYYL")).getMainPage();h.append(t),l.setActiveLink("home")}),u.on("/catalog",async()=>{h.innerHTML="";let t=(await a("2wHMu")).getCatalogPage();h.append(t),l.setActiveLink("catalog")}),u.on("/product/:title",async({data:t})=>{h.innerHTML="";let e=(await a("ek9mX")).getProductPage(t.title);h.append(e),l.setActiveLink()}),u.on("/basket",async()=>{h.innerHTML="";let t=(await a("5aGuV")).getBasketPage();h.append(t),l.setActiveLink("basket")}),u.on("/order",async()=>{u.navigate("/")}),u.navigate("/"),u.notFound(async()=>{h.innerHTML="";let t=(await a("aBYYL")).getMainPage();h.append(t),l.setActiveLink("home")}),u.resolve(),c.append(l.header,h)}),i("lqtDp",function(t,e){var n;"undefined"!=typeof self?self:t.exports,n=function(){return function(){var t={407:function(t,e,n){n.d(e,{default:function(){return M}});var r=/([:*])(\w+)/g,o=/\*/g,a=/\/\?/g;function i(t){return void 0===t&&(t="/"),v()?location.pathname+location.search+location.hash:t}function s(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function c(t){return"string"==typeof t}function u(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function l(t){var e=s(t).split(/\?(.*)?$/);return[s(e[0]),e.slice(1).join("")]}function h(t){for(var e={},n=t.split("&"),r=0;r<n.length;r++){var o=n[r].split("=");if(""!==o[0]){var a=decodeURIComponent(o[0]);e[a]?(Array.isArray(e[a])||(e[a]=[e[a]]),e[a].push(decodeURIComponent(o[1]||""))):e[a]=decodeURIComponent(o[1]||"")}}return e}function f(t,e){var n,i=l(s(t.currentLocationPath)),f=i[0],d=i[1],p=""===d?null:h(d),v=[];if(c(e.path)){if(n="(?:/^|^)"+s(e.path).replace(r,function(t,e,n){return v.push(n),"([^/]+)"}).replace(o,"?(?:.*)").replace(a,"/?([^/]+|)")+"$",""===s(e.path)&&""===s(f))return{url:f,queryString:d,hashString:u(t.to),route:e,data:null,params:p}}else n=e.path;var g=RegExp(n,""),m=f.match(g);if(m){var _=c(e.path)?0===v.length?null:m?m.slice(1,m.length).reduce(function(t,e,n){return null===t&&(t={}),t[v[n]]=decodeURIComponent(e),t},null):null:m.groups?m.groups:m.slice(1);return{url:s(f.replace(RegExp("^"+t.instance.root),"")),queryString:d,hashString:u(t.to),route:e,data:_,params:p}}return!1}function d(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function p(t,e){return void 0===t[e]||!0===t[e]}function v(){return"undefined"!=typeof window}function g(t,e,n){var r=e||{},o=0;!function e(){t[o]?Array.isArray(t[o])?(t.splice.apply(t,[o,1].concat(t[o][0](r)?t[o][1]:t[o][2])),e()):t[o](r,function(t){void 0===t||!0===t?(o+=1,e()):n&&n(r)}):n&&n(r)}()}function m(t,e){void 0===t.currentLocationPath&&(t.currentLocationPath=t.to=i(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),e()}function _(t,e){for(var n=0;n<t.instance.routes.length;n++){var r=f(t,t.instance.routes[n]);if(r&&(t.matches||(t.matches=[]),t.matches.push(r),"ONE"===t.resolveOptions.strategy))return void e()}e()}function k(t,e){t.navigateOptions&&(void 0!==t.navigateOptions.shouldResolve&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),void 0!==t.navigateOptions.silent&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function y(t,e){!0===t.navigateOptions.force?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),e(!1)):e()}g.if=function(t,e,n){return Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]),[t,e,n]};var L=v(),b=d();function H(t,e){if(p(t.navigateOptions,"updateBrowserURL")){var n=("/"+t.to).replace(/\/\//g,"/"),r=L&&t.resolveOptions&&!0===t.resolveOptions.hash;b?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",r?"#"+n:n),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout(function(){if(!r){var e=location.hash;location.hash="",location.hash=e}t.instance.__freezeListening=!1},1))):L&&(window.location.href=t.to)}e()}function w(t,e){var n=t.instance;n.lastResolved()?g(n.lastResolved().map(function(e){return function(n,r){if(e.route.hooks&&e.route.hooks.leave){var o=!1,a=t.instance.matchLocation(e.route.path,t.currentLocationPath,!1);o="*"!==e.route.path?!a:!(t.matches&&t.matches.find(function(t){return e.route.path===t.route.path})),p(t.navigateOptions,"callHooks")&&o?g(e.route.hooks.leave.map(function(e){return function(n,r){return e(function(e){!1===e?t.instance.__markAsClean(t):r()},t.matches&&t.matches.length>0?1===t.matches.length?t.matches[0]:t.matches:void 0)}}).concat([function(){return r()}])):r()}else r()}}),{},function(){return e()}):e()}function A(t,e){p(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),e()}var O=[function(t,e){var n=t.instance.lastResolved();if(n&&n[0]&&n[0].route===t.match.route&&n[0].url===t.match.url&&n[0].queryString===t.match.queryString)return n.forEach(function(e){e.route.hooks&&e.route.hooks.already&&p(t.navigateOptions,"callHooks")&&e.route.hooks.already.forEach(function(e){return e(t.match)})}),void e(!1);e()},function(t,e){t.match.route.hooks&&t.match.route.hooks.before&&p(t.navigateOptions,"callHooks")?g(t.match.route.hooks.before.map(function(e){return function(n,r){return e(function(e){!1===e?t.instance.__markAsClean(t):r()},t.match)}}).concat([function(){return e()}])):e()},function(t,e){p(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),e()},function(t,e){t.match.route.hooks&&t.match.route.hooks.after&&p(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach(function(e){return e(t.match)}),e()}],E=[w,function(t,e){var n=t.instance._notFoundRoute;if(n){t.notFoundHandled=!0;var r=l(t.currentLocationPath),o=r[0],a=r[1],i=u(t.to);n.path=s(o);var c={url:n.path,queryString:a,hashString:i,data:null,route:n,params:""!==a?h(a):null};t.matches=[c],t.match=c}e()},g.if(function(t){return t.notFoundHandled},O.concat([A]),[function(t,e){t.resolveOptions&&!1!==t.resolveOptions.noMatchWarning&&void 0!==t.resolveOptions.noMatchWarning||console.warn('Navigo: "'+t.currentLocationPath+"\" didn't match any of the registered routes."),e()},function(t,e){t.instance._setCurrent(null),e()}])];function x(){return(x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function R(t,e){var n=0;w(t,function r(){n!==t.matches.length?g(O,x({},t,{match:t.matches[n]}),function(){n+=1,r()}):A(t,e)})}function S(t){t.instance.__markAsClean(t)}function P(){return(P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var F="[data-navigo]";function M(t,e){var n,r=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:F},o=this,a="/",p=null,L=[],b=!1,w=d(),A=v();function O(t){return t.indexOf("#")>=0&&(t=!0===r.hash?t.split("#")[1]||"/":t.split("#")[0]),t}function x(t){return s(a+"/"+s(t))}function M(t,e,n,r){var o,a;return t=c(t)?x(t):t,{name:r||s(String(t)),path:t,handler:e,hooks:(void 0===(o=n)&&(o=[]),void 0===a&&(a={}),o.filter(function(t){return t}).forEach(function(t){["before","after","already","leave"].forEach(function(e){t[e]&&(a[e]||(a[e]=[]),a[e].push(t[e]))})}),a)}}function j(t,e){if(!o.__dirty){o.__dirty=!0;var n={instance:o,to:t=t?s(a)+"/"+s(t):void 0,currentLocationPath:t,navigateOptions:{},resolveOptions:P({},r,e)};return g([m,_,g.if(function(t){var e=t.matches;return e&&e.length>0},R,E)],n,S),!!n.matches&&n.matches}o.__waiting.push(function(){return o.resolve(t,e)})}function C(t,e){if(o.__dirty)o.__waiting.push(function(){return o.navigate(t,e)});else{o.__dirty=!0;var n={instance:o,to:t=s(a)+"/"+s(t),navigateOptions:e||{},resolveOptions:e&&e.resolveOptions?e.resolveOptions:r,currentLocationPath:O(t)};g([k,y,_,g.if(function(t){var e=t.matches;return e&&e.length>0},R,E),H,S],n,S)}}function G(){if(A)return(A?[].slice.call(document.querySelectorAll(r.linksSelector||F)):[]).forEach(function(t){"false"!==t.getAttribute("data-navigo")&&"_blank"!==t.getAttribute("target")?t.hasListenerAttached||(t.hasListenerAttached=!0,t.navigoHandler=function(e){if((e.ctrlKey||e.metaKey)&&"a"===e.target.tagName.toLowerCase())return!1;var n=t.getAttribute("href");if(null==n)return!1;if(n.match(/^(http|https)/)&&"undefined"!=typeof URL)try{var r=new URL(n);n=r.pathname+r.search}catch(t){}var a=function(t){if(!t)return{};var e,n=t.split(","),r={};return n.forEach(function(t){var n=t.split(":").map(function(t){return t.replace(/(^ +| +$)/g,"")});switch(n[0]){case"historyAPIMethod":r.historyAPIMethod=n[1];break;case"resolveOptionsStrategy":e||(e={}),e.strategy=n[1];break;case"resolveOptionsHash":e||(e={}),e.hash="true"===n[1];break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":r[n[0]]="true"===n[1]}}),e&&(r.resolveOptions=e),r}(t.getAttribute("data-navigo-options"));b||(e.preventDefault(),e.stopPropagation(),o.navigate(s(n),a))},t.addEventListener("click",t.navigoHandler)):t.hasListenerAttached&&t.removeEventListener("click",t.navigoHandler)}),o}function T(t,e,n){var r=L.find(function(e){return e.name===t}),o=null;if(r){if(o=r.path,e)for(var i in e)o=o.replace(":"+i,e[i]);o=o.match(/^\//)?o:"/"+o}return o&&n&&!n.includeRoot&&(o=o.replace(RegExp("^/"+a),"")),o}function B(t){var e=l(s(t)),r=e[0],o=e[1],a=""===o?null:h(o);return{url:r,queryString:o,hashString:u(t),route:M(r,function(){},[n],r),data:null,params:a}}function N(t,e,n){return"string"==typeof e&&(e=Z(e)),e?(e.hooks[t]||(e.hooks[t]=[]),e.hooks[t].push(n),function(){e.hooks[t]=e.hooks[t].filter(function(t){return t!==n})}):(console.warn("Route doesn't exists: "+e),function(){})}function Z(t){return"string"==typeof t?L.find(function(e){return e.name===x(t)}):L.find(function(e){return e.handler===t})}t?a=s(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=a,this.routes=L,this.destroyed=b,this.current=p,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(t){t.instance.__dirty=!1,t.instance.__waiting.length>0&&t.instance.__waiting.shift()()},this.on=function(t,e,r){var o=this;return"object"!=typeof t||t instanceof RegExp?("function"==typeof t&&(r=e,e=t,t=a),L.push(M(t,e,[n,r]))):Object.keys(t).forEach(function(e){if("function"==typeof t[e])o.on(e,t[e]);else{var r=t[e],a=r.uses,i=r.as,s=r.hooks;L.push(M(e,a,[n,s],i))}}),this},this.off=function(t){return this.routes=L=L.filter(function(e){return c(t)?s(e.path)!==s(t):"function"==typeof t?t!==e.handler:String(e.path)!==String(t)}),this},this.resolve=j,this.navigate=C,this.navigateByName=function(t,e,n){var r=T(t,e);return null!==r&&(C(r.replace(RegExp("^/?"+a),""),n),!0)},this.destroy=function(){this.routes=L=[],w&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=b=!0},this.notFound=function(t,e){return o._notFoundRoute=M("*",t,[n,e],"__NOT_FOUND__"),this},this.updatePageLinks=G,this.link=function(t){return"/"+a+"/"+s(t)},this.hooks=function(t){return n=t,this},this.extractGETParameters=function(t){return l(O(t))},this.lastResolved=function(){return p},this.generate=T,this.getLinkPath=function(t){return t.getAttribute("href")},this.match=function(t){var e={instance:o,currentLocationPath:t,to:t,navigateOptions:{},resolveOptions:r};return _(e,function(){}),!!e.matches&&e.matches},this.matchLocation=function(t,e,n){void 0!==e&&(void 0===n||n)&&(e=x(e));var r={instance:o,to:e,currentLocationPath:e};return m(r,function(){}),"string"==typeof t&&(t=void 0===n||n?x(t):t),f(r,{name:String(t),path:t,handler:function(){},hooks:{}})||!1},this.getCurrentLocation=function(){return B(s(i(a)).replace(RegExp("^"+a),""))},this.addBeforeHook=N.bind(this,"before"),this.addAfterHook=N.bind(this,"after"),this.addAlreadyHook=N.bind(this,"already"),this.addLeaveHook=N.bind(this,"leave"),this.getRoute=Z,this._pathToMatchObject=B,this._clean=s,this._checkForAHash=O,this._setCurrent=function(t){return p=o.current=t},(function(){w&&(this.__popstateListener=function(){o.__freezeListening||j()},window.addEventListener("popstate",this.__popstateListener))}).call(this),G.call(this)}}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(407)}().default},t.exports=n()}),i("jhHjo",function(e,n){t(e.exports,"getHeader",()=>s),a("7gSKI");var r=a("ktF9J"),o=a("aWmY9"),i=a("f4G8r");function s(){let t=document.createElement("header");t.classList.add("header");let e=document.createElement("div");e.classList.add("container","header__container");let n=(0,o.getLogo)();n.classList.add("header__logo");let a=(0,i.getBasketBtn)(),s=document.createElement("nav");s.classList.add("header__navigation");let c={home:(0,r.getNavigationLink)("/","Главная страница"),catalog:(0,r.getNavigationLink)("/catalog","Каталог"),basket:a};for(let t in c)s.append(c[t]);return e.append(n,s,a),t.append(e),{header:t,setActiveLink:function(t=""){for(let t in c)c[t].classList.remove("active");""!==t&&c[t].classList.add("active")}}}}),i("ktF9J",function(e,n){t(e.exports,"getNavigationLink",()=>o);var r=a("7gSKI");function o(t,e=""){let n=document.createElement("a");return n.href=t,n.classList.add("navigation-link"),n.textContent=e,n.addEventListener("click",function(e){e.preventDefault(),(0,r.router).navigate(t)}),n}}),i("aWmY9",function(n,r){t(n.exports,"getLogo",()=>i);var o=a("g45ex");function i(){let t=document.createElement("img");return t.classList.add("logo"),t.src=e(o),t}}),i("g45ex",function(t,e){t.exports=new URL("logo.5a4a40b9.svg",import.meta.url).toString()}),i("f4G8r",function(n,r){t(n.exports,"getBasketBtn",()=>s);var o=a("7gSKI"),i=a("lAveZ");function s(){let t=document.createElement("a");return t.href="/basket",t.classList.add("basket-btn"),t.innerHTML=e(i),t.addEventListener("click",function(t){t.preventDefault(),(0,o.router).navigate("/basket")}),t}}),i("lAveZ",function(t,e){t.exports='<svg fill="#f98800" width="800" height="800" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.132 2.504 4.42 9H3a1.001 1.001 0 0 0-.965 1.263l2.799 10.263A2.004 2.004 0 0 0 6.764 22h10.473c.898 0 1.692-.605 1.93-1.475l2.799-10.263A.998.998 0 0 0 21 9h-1.42l-3.712-6.496-1.736.992L17.277 9H6.723l3.145-5.504-1.736-.992zM14 13h2v5h-2v-5zm-6 0h2v5H8v-5z"/></svg>'}),i("7XL3w",function(e,n){t(e.exports,"getPageContainer",()=>r);function r(){let t=document.createElement("main");return t.classList.add("page-container","container"),t}}),i("aBYYL",function(t,e){var n=a("Gr8vk");t.exports=Promise.all([a("fFMZG")(a("27Lyk").resolve("jVVqE")),n("8Ox9Q")]).then(()=>a("ammXD"))}),i("Gr8vk",function(t,e){t.exports=function(t){return import(a("27Lyk").resolve(t))}}),i("fFMZG",function(t,e){var n=a("lovBw");t.exports=n(function(t){return new Promise(function(e,n){if([].concat(document.getElementsByTagName("link")).some(function(e){return e.href===t&&e.rel.indexOf("stylesheet")>-1})){e();return}var r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onerror=function(t){r.onerror=r.onload=null,r.remove(),n(t)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})})}),i("lovBw",function(t,e){var n={},r={},o={};t.exports=function(t,e){return function(a){var i=function(t){switch(t){case"preload":return r;case"prefetch":return o;default:return n}}(e);return i[a]?i[a]:i[a]=t.apply(null,arguments).catch(function(t){throw delete i[a],t})}}}),i("2wHMu",function(t,e){var n=a("Gr8vk");t.exports=Promise.all([a("fFMZG")(a("27Lyk").resolve("dPl1Z")),n("8RrDA")]).then(()=>a("lhH4V"))}),i("ek9mX",function(t,e){var n=a("Gr8vk");t.exports=Promise.all([a("fFMZG")(a("27Lyk").resolve("iIgGT")),n("Q3ATo")]).then(()=>a("ajogQ"))}),i("5aGuV",function(t,e){var n=a("Gr8vk");t.exports=Promise.all([a("fFMZG")(a("27Lyk").resolve("l9ZYA")),n("gCjYZ")]).then(()=>a("7xlqu"))}),i("1J6BC",function(t,e){var n=a("Gr8vk");t.exports=Promise.all([a("fFMZG")(a("27Lyk").resolve("6uCed")),n("gZHLG")]).then(()=>a("dvKNM"))}),a("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["g3LtT","index.32155808.js","fZN4a","logo.5a4a40b9.svg","8Ox9Q","main.8e141722.js","jVVqE","main.67f0ee00.css","8RrDA","catalog.6888aa2f.js","dPl1Z","catalog.3c4035bf.css","Q3ATo","product.bb115be5.js","iIgGT","product.bc101f44.css","gCjYZ","basket.074ddfb1.js","l9ZYA","basket.c25e10ef.css","gZHLG","order.4e198660.js","6uCed","order.3cdc570a.css","5h9CN","index.87c0a380.css"]')),a("7gSKI");
//# sourceMappingURL=index.32155808.js.map