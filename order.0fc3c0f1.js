!function(e,t,n,r,s){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},c="function"==typeof o[r]&&o[r],i=c.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function a(t,n){if(!i[t]){if(!e[t]){var s="function"==typeof o[r]&&o[r];if(!n&&s)return s(t,!0);if(c)return c(t,!0);if(l&&"string"==typeof t)return l(t);var u=Error("Cannot find module '"+t+"'");throw u.code="MODULE_NOT_FOUND",u}f.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},f.cache={};var d=i[t]=new a.Module(t);e[t][0].call(d.exports,f,d,d.exports,this)}return i[t].exports;function f(e){var t=f.resolve(e);return!1===t?{}:a(t)}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=i,a.parent=c,a.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(a,"root",{get:function(){return o[r]}}),o[r]=a;for(var u=0;u<t.length;u++)a(t[u])}({"5goVp":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"getOrderPage",()=>c);var s=e("/src/js/components/mainTitle/mainTitle"),o=e("/src/js/components/desc/desc");function c(){let e=document.createElement("div");e.classList.add("page","catalog-page");let t=(0,s.getMainTitle)("Оформление"),n=(0,o.getDesc)("Здесь оформление заказа");return e.append(t,n),e}},{"/src/js/components/mainTitle/mainTitle":"kdFew","/src/js/components/desc/desc":"et0im","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],kdFew:[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");function s(e){let t=document.createElement("h1");return t.classList.add("main-title"),t.textContent=e,t}r.defineInteropFlag(n),r.export(n,"getMainTitle",()=>s),e("./mainTitle.css")},{"./mainTitle.css":"6w0nx","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6w0nx":[function(){},{}],et0im:[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");function s(e){let t=document.createElement("p");return t.classList.add("desc"),t.textContent=e,t}r.defineInteropFlag(n),r.export(n,"getDesc",()=>s),e("./desc.css")},{"./desc.css":"k58c1","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],k58c1:[function(){},{}]},[],0,"parcelRequire08cb");
//# sourceMappingURL=order.0fc3c0f1.js.map
