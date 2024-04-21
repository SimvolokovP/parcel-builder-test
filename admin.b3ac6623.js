// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lbkOy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f7711ef2b3ac6623";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"htvUa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAdminPage", ()=>getAdminPage);
var _auth = require("firebase/auth");
var _element = require("../../components/element/element");
var _app = require("firebase/app");
var _database = require("firebase/database");
var _storage = require("firebase/storage");
var _adminCss = require("./admin.css");
var _photosList = require("../../components/photosList/photosList");
function getAdminPage() {
    const adminPage = (0, _element.getElement)("div", "admin");
    const container = (0, _element.getElement)("div", "container", "admin__container");
    container.classList.add("log");
    const inpLogin = (0, _element.getElement)("input", "admin__login");
    inpLogin.placeholder = "\u041B\u043E\u0433\u0438\u043D";
    inpLogin.value = "admin@mail.ru";
    const inpPassword = (0, _element.getElement)("input", "admin__password");
    inpPassword.value = "123456";
    inpPassword.placeholder = "\u041F\u0430\u0440\u043E\u043B\u044C";
    const logBtn = (0, _element.getElement)("button", "admin__btn");
    logBtn.textContent = "ok";
    const adminForm = (0, _element.getElement)("form", "admin__form");
    const inpNameRu = (0, _element.getElement)("input", "admin__input", "admin__name", "admin__input--ru");
    inpNameRu.required = "required";
    inpNameRu.placeholder = "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 Ru";
    const inpNameEng = (0, _element.getElement)("input", "admin__input", "admin__name", "admin__input--eng");
    inpNameEng.required = "required";
    inpNameEng.placeholder = "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 Eng";
    const inpCategory = (0, _element.getElement)("input", "admin__input", "admin__category");
    inpCategory.required = "required";
    inpCategory.placeholder = "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F";
    const inpCover = (0, _element.getElement)("button", "admin__cover");
    inpCover.textContent = "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u0443";
    const inpImages = (0, _element.getElement)("button", "admin__images");
    inpImages.textContent = "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E";
    inpImages.type = "button";
    const submitBtn = (0, _element.getElement)("button", "admin__submit");
    submitBtn.textContent = "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C";
    submitBtn.type = "submit";
    const imagesDiv = (0, _element.getElement)("div", "admin__preview");
    const firebaseConfig = {
        apiKey: "AIzaSyBlFYLAI5C8bvQJHGTm85obSILYb-V620s",
        authDomain: "photographer-site-aae97.firebaseapp.com",
        databaseURL: "https://photographer-site-aae97-default-rtdb.firebaseio.com",
        projectId: "photographer-site-aae97",
        storageBucket: "photographer-site-aae97.appspot.com",
        messagingSenderId: "506799504003",
        appId: "1:506799504003:web:205497e14804b4513479b6"
    };
    const app = (0, _app.initializeApp)(firebaseConfig);
    const auth = (0, _auth.getAuth)(app);
    const realdb = (0, _database.getDatabase)();
    let updatedId = "";
    let portfolio = [];
    function getPortfolioFromDB() {
        const dbref = (0, _database.ref)(realdb);
        const portfolioArray = [];
        (0, _database.get)((0, _database.child)(dbref, "portfolio/")).then((snapshot)=>{
            console.log(snapshot);
            snapshot.forEach((item)=>{
                portfolioArray.push(item.val());
            });
            portfolio = portfolioArray;
        }).then(()=>{
            createPortfolioItems(portfolio);
        });
    }
    function createPortfolioItems(portfolio) {
        container.innerHTML = "";
        const itemsList = (0, _element.getElement)("ul", "items-list", "list-reset");
        portfolio.forEach((item)=>{
            const li = (0, _element.getElement)("li", "items-list__item");
            const nameDiv = (0, _element.getElement)("div");
            const categoryDiv = (0, _element.getElement)("div");
            const actionDiv = (0, _element.getElement)("div");
            nameDiv.textContent = item.nameRu;
            categoryDiv.textContent = item.category;
            const removeBtn = (0, _element.getElement)("button");
            removeBtn.textContent = "\u0423\u0434\u0430\u043B\u0438\u0442\u044C";
            removeBtn.addEventListener("click", ()=>{
                if (confirm(`Remove this item?(${item.nameRu})`)) {
                    const itemToRemove = portfolio.find((element)=>element.id === item.id);
                    if (itemToRemove) {
                        const itemRef = (0, _database.ref)(realdb, `portfolio/${itemToRemove.id}`);
                        (0, _database.remove)(itemRef).then(()=>{
                            console.log("Item removed successfully");
                            getPortfolioFromDB();
                        }).catch((error)=>{
                            console.error("Error removing item:", error);
                        });
                    } else console.log("Item not found in portfolio");
                }
            });
            const editBtn = (0, _element.getElement)("button");
            editBtn.textContent = "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C";
            const editedName = (0, _element.getElement)("div", "edited-name");
            const editedCancel = (0, _element.getElement)("button", "edited-cancel");
            editedCancel.textContent = "\u041E\u0442\u043C\u0435\u043D\u0430";
            editedCancel.type = "button";
            editedCancel.addEventListener("click", ()=>{
                updatedId = "";
                document.querySelector(".edited-name").remove();
                document.querySelector(".edited-cancel").remove();
                submitBtn.textContent = "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C";
                inpNameRu.value = "";
                inpNameEng.value = "";
                inpCategory.value = "";
                Files = [];
                createImgPreviews();
            });
            editBtn.addEventListener("click", ()=>{
                inpNameEng.value = item.nameEng;
                inpNameRu.value = item.nameRu;
                inpCategory.value = item.category;
                updatedId = item.id;
                console.log(item.linksOfImages);
                editedName.textContent = `\u{420}\u{435}\u{434}\u{430}\u{43A}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{43D}\u{438}\u{435} ${item.nameRu}`;
                adminPanel.prepend(editedName, editedCancel);
                submitBtn.textContent = "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C";
            });
            actionDiv.append(editBtn, removeBtn);
            li.append(nameDiv, categoryDiv, actionDiv);
            itemsList.append(li);
        });
        const adminPanel = getAdminPanel();
        container.append(itemsList, adminPanel);
    }
    const randomId = ()=>{
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };
    function openFileDialog() {
        let input = document.createElement("input");
        input.type = "file";
        input.multiple = "multiple";
        input.onchange = (e)=>{
            assignImgsToFilesArray(e.target.files);
            createImgPreviews();
        };
        input.click();
    }
    let Files = [];
    let FileReaders = [];
    function assignImgsToFilesArray(thisFiles) {
        let num = Files.length + thisFiles.length;
        let loopLim = num <= 20 ? thisFiles.length : 20 - Files.length;
        for(let i = 0; i < loopLim; i++)Files.push(thisFiles[i]);
        if (num > 20) alert("!!!");
        inpImages.textContent = `\u{417}\u{430}\u{433}\u{440}\u{443}\u{436}\u{435}\u{43D}\u{43E} ${Files.length}/20`;
        console.log(Files);
    }
    function uploadAllImages(id) {
        linksOfImages = [];
        for(let i = 0; i < Files.length; i++)uploadImageToStorage(Files[i], id);
    }
    function uploadImageToStorage(imgToUpload, currentId) {
        const imgNo = Files.indexOf(imgToUpload);
        const metadata = {
            contentType: imgToUpload.type
        };
        const storage = (0, _storage.getStorage)();
        const imgAddress = "TheImages/" + currentId + "/img#" + (imgNo + 1);
        const storageRef = (0, _storage.ref)(storage, imgAddress);
        const uploadTask = (0, _storage.uploadBytesResumable)(storageRef, imgToUpload, metadata);
        uploadTask.on("state_changed", (snapshot)=>{}, (error)=>{
            alert("error");
        }, ()=>{
            (0, _storage.getDownloadURL)(uploadTask.snapshot.ref).then((downloadURL)=>{
                linksOfImages[imgNo] = downloadURL;
                addItem(currentId);
            });
        });
    }
    function addItem(id) {
        (0, _database.set)((0, _database.ref)(realdb, "portfolio/" + id), {
            nameRu: inpNameRu.value,
            nameEng: inpNameEng.value,
            linksOfImages: linksOfImages,
            linkOfCover: linksOfImages[0],
            category: inpCategory.value.trim(),
            id: id
        }).then(()=>{
            alert("\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E!");
            getPortfolioFromDB();
            updatedId = "";
            submitBtn.textContent = "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C";
            createImgPreviews();
        });
    }
    function getAdminPanel() {
        container.classList.remove("log");
        container.append(adminForm);
        adminForm.append(inpNameRu, inpNameEng, inpImages, imagesDiv, inpCategory, submitBtn);
        return adminForm;
    }
    logBtn.addEventListener("click", ()=>{
        (0, _auth.signInWithEmailAndPassword)(auth, inpLogin.value, inpPassword.value).then(()=>{
            alert("Success!");
            container.innerHTML = "";
            getPortfolioFromDB();
            container.classList.remove("log");
        }).catch((error)=>{
            alert("Error: Incorrect login or password. Please try again.");
        });
    });
    inpImages.addEventListener("click", ()=>{
        openFileDialog();
    });
    adminForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        if (inpNameEng.value !== "" && inpNameRu.value !== "" && Files.length > 0) {
            const currentId = randomId();
            if (updatedId === "") uploadAllImages(currentId);
            else uploadAllImages(updatedId);
        } else alert("error");
    });
    function createImgPreviews() {
        imagesDiv.innerHTML = "";
        for(let i = 0; i < Files.length; i++)(function(index) {
            FileReaders[index] = new FileReader();
            FileReaders[index].onload = function() {
                const div = (0, _element.getElement)("div");
                const button = (0, _element.getElement)("button");
                button.textContent = "\u0423\u0434\u0430\u043B\u0438\u0442\u044C";
                let img = document.createElement("img");
                button.addEventListener("click", ()=>{
                    for(let j = 0; j < Files.length; j++)if (Files[j].name === button.dataset.value) {
                        Files.splice(j, 1);
                        createImgPreviews(); // обновляем превью после удаления
                    }
                });
                img.id = `img-${index}`;
                img.classList.add("choose__img");
                img.src = FileReaders[index].result;
                img.dataset.value = i;
                button.type = "button";
                button.dataset.value = Files[i].name;
                div.append(img, button);
                imagesDiv.append(div);
            };
            FileReaders[index].readAsDataURL(Files[index]);
        })(i);
        inpImages.textContent = `\u{417}\u{430}\u{433}\u{440}\u{443}\u{436}\u{435}\u{43D}\u{43E} ${Files.length}/20`;
    }
    container.append(inpLogin, inpPassword, logBtn);
    adminPage.append(container);
    return adminPage;
}

},{"../../components/element/element":"b7qoT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./admin.css":"fmcYm","firebase/auth":"79vzg","firebase/app":"aM3Fo","firebase/storage":"8WX7E","firebase/database":"SJ4UY","../../components/photosList/photosList":"9iWsB"}],"fmcYm":[function() {},{}],"79vzg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _auth = require("@firebase/auth");
parcelHelpers.exportAll(_auth, exports);

},{"@firebase/auth":"khbwD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"khbwD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ActionCodeOperation", ()=>(0, _index219C3CacJs.A));
parcelHelpers.export(exports, "ActionCodeURL", ()=>(0, _index219C3CacJs.ai));
parcelHelpers.export(exports, "AuthCredential", ()=>(0, _index219C3CacJs.L));
parcelHelpers.export(exports, "AuthErrorCodes", ()=>(0, _index219C3CacJs.I));
parcelHelpers.export(exports, "EmailAuthCredential", ()=>(0, _index219C3CacJs.M));
parcelHelpers.export(exports, "EmailAuthProvider", ()=>(0, _index219C3CacJs.V));
parcelHelpers.export(exports, "FacebookAuthProvider", ()=>(0, _index219C3CacJs.W));
parcelHelpers.export(exports, "FactorId", ()=>(0, _index219C3CacJs.F));
parcelHelpers.export(exports, "GithubAuthProvider", ()=>(0, _index219C3CacJs.Y));
parcelHelpers.export(exports, "GoogleAuthProvider", ()=>(0, _index219C3CacJs.X));
parcelHelpers.export(exports, "OAuthCredential", ()=>(0, _index219C3CacJs.N));
parcelHelpers.export(exports, "OAuthProvider", ()=>(0, _index219C3CacJs.Z));
parcelHelpers.export(exports, "OperationType", ()=>(0, _index219C3CacJs.O));
parcelHelpers.export(exports, "PhoneAuthCredential", ()=>(0, _index219C3CacJs.Q));
parcelHelpers.export(exports, "PhoneAuthProvider", ()=>(0, _index219C3CacJs.P));
parcelHelpers.export(exports, "PhoneMultiFactorGenerator", ()=>(0, _index219C3CacJs.m));
parcelHelpers.export(exports, "ProviderId", ()=>(0, _index219C3CacJs.p));
parcelHelpers.export(exports, "RecaptchaVerifier", ()=>(0, _index219C3CacJs.R));
parcelHelpers.export(exports, "SAMLAuthProvider", ()=>(0, _index219C3CacJs._));
parcelHelpers.export(exports, "SignInMethod", ()=>(0, _index219C3CacJs.S));
parcelHelpers.export(exports, "TotpMultiFactorGenerator", ()=>(0, _index219C3CacJs.T));
parcelHelpers.export(exports, "TotpSecret", ()=>(0, _index219C3CacJs.n));
parcelHelpers.export(exports, "TwitterAuthProvider", ()=>(0, _index219C3CacJs.$));
parcelHelpers.export(exports, "applyActionCode", ()=>(0, _index219C3CacJs.a7));
parcelHelpers.export(exports, "beforeAuthStateChanged", ()=>(0, _index219C3CacJs.x));
parcelHelpers.export(exports, "browserLocalPersistence", ()=>(0, _index219C3CacJs.b));
parcelHelpers.export(exports, "browserPopupRedirectResolver", ()=>(0, _index219C3CacJs.k));
parcelHelpers.export(exports, "browserSessionPersistence", ()=>(0, _index219C3CacJs.a));
parcelHelpers.export(exports, "checkActionCode", ()=>(0, _index219C3CacJs.a8));
parcelHelpers.export(exports, "confirmPasswordReset", ()=>(0, _index219C3CacJs.a6));
parcelHelpers.export(exports, "connectAuthEmulator", ()=>(0, _index219C3CacJs.K));
parcelHelpers.export(exports, "createUserWithEmailAndPassword", ()=>(0, _index219C3CacJs.aa));
parcelHelpers.export(exports, "debugErrorMap", ()=>(0, _index219C3CacJs.G));
parcelHelpers.export(exports, "deleteUser", ()=>(0, _index219C3CacJs.E));
parcelHelpers.export(exports, "fetchSignInMethodsForEmail", ()=>(0, _index219C3CacJs.af));
parcelHelpers.export(exports, "getAdditionalUserInfo", ()=>(0, _index219C3CacJs.aq));
parcelHelpers.export(exports, "getAuth", ()=>(0, _index219C3CacJs.o));
parcelHelpers.export(exports, "getIdToken", ()=>(0, _index219C3CacJs.an));
parcelHelpers.export(exports, "getIdTokenResult", ()=>(0, _index219C3CacJs.ao));
parcelHelpers.export(exports, "getMultiFactorResolver", ()=>(0, _index219C3CacJs.as));
parcelHelpers.export(exports, "getRedirectResult", ()=>(0, _index219C3CacJs.j));
parcelHelpers.export(exports, "inMemoryPersistence", ()=>(0, _index219C3CacJs.U));
parcelHelpers.export(exports, "indexedDBLocalPersistence", ()=>(0, _index219C3CacJs.i));
parcelHelpers.export(exports, "initializeAuth", ()=>(0, _index219C3CacJs.J));
parcelHelpers.export(exports, "initializeRecaptchaConfig", ()=>(0, _index219C3CacJs.t));
parcelHelpers.export(exports, "isSignInWithEmailLink", ()=>(0, _index219C3CacJs.ad));
parcelHelpers.export(exports, "linkWithCredential", ()=>(0, _index219C3CacJs.a2));
parcelHelpers.export(exports, "linkWithPhoneNumber", ()=>(0, _index219C3CacJs.l));
parcelHelpers.export(exports, "linkWithPopup", ()=>(0, _index219C3CacJs.d));
parcelHelpers.export(exports, "linkWithRedirect", ()=>(0, _index219C3CacJs.g));
parcelHelpers.export(exports, "multiFactor", ()=>(0, _index219C3CacJs.at));
parcelHelpers.export(exports, "onAuthStateChanged", ()=>(0, _index219C3CacJs.y));
parcelHelpers.export(exports, "onIdTokenChanged", ()=>(0, _index219C3CacJs.w));
parcelHelpers.export(exports, "parseActionCodeURL", ()=>(0, _index219C3CacJs.aj));
parcelHelpers.export(exports, "prodErrorMap", ()=>(0, _index219C3CacJs.H));
parcelHelpers.export(exports, "reauthenticateWithCredential", ()=>(0, _index219C3CacJs.a3));
parcelHelpers.export(exports, "reauthenticateWithPhoneNumber", ()=>(0, _index219C3CacJs.r));
parcelHelpers.export(exports, "reauthenticateWithPopup", ()=>(0, _index219C3CacJs.e));
parcelHelpers.export(exports, "reauthenticateWithRedirect", ()=>(0, _index219C3CacJs.h));
parcelHelpers.export(exports, "reload", ()=>(0, _index219C3CacJs.ar));
parcelHelpers.export(exports, "revokeAccessToken", ()=>(0, _index219C3CacJs.D));
parcelHelpers.export(exports, "sendEmailVerification", ()=>(0, _index219C3CacJs.ag));
parcelHelpers.export(exports, "sendPasswordResetEmail", ()=>(0, _index219C3CacJs.a5));
parcelHelpers.export(exports, "sendSignInLinkToEmail", ()=>(0, _index219C3CacJs.ac));
parcelHelpers.export(exports, "setPersistence", ()=>(0, _index219C3CacJs.q));
parcelHelpers.export(exports, "signInAnonymously", ()=>(0, _index219C3CacJs.a0));
parcelHelpers.export(exports, "signInWithCredential", ()=>(0, _index219C3CacJs.a1));
parcelHelpers.export(exports, "signInWithCustomToken", ()=>(0, _index219C3CacJs.a4));
parcelHelpers.export(exports, "signInWithEmailAndPassword", ()=>(0, _index219C3CacJs.ab));
parcelHelpers.export(exports, "signInWithEmailLink", ()=>(0, _index219C3CacJs.ae));
parcelHelpers.export(exports, "signInWithPhoneNumber", ()=>(0, _index219C3CacJs.s));
parcelHelpers.export(exports, "signInWithPopup", ()=>(0, _index219C3CacJs.c));
parcelHelpers.export(exports, "signInWithRedirect", ()=>(0, _index219C3CacJs.f));
parcelHelpers.export(exports, "signOut", ()=>(0, _index219C3CacJs.C));
parcelHelpers.export(exports, "unlink", ()=>(0, _index219C3CacJs.ap));
parcelHelpers.export(exports, "updateCurrentUser", ()=>(0, _index219C3CacJs.B));
parcelHelpers.export(exports, "updateEmail", ()=>(0, _index219C3CacJs.al));
parcelHelpers.export(exports, "updatePassword", ()=>(0, _index219C3CacJs.am));
parcelHelpers.export(exports, "updatePhoneNumber", ()=>(0, _index219C3CacJs.u));
parcelHelpers.export(exports, "updateProfile", ()=>(0, _index219C3CacJs.ak));
parcelHelpers.export(exports, "useDeviceLanguage", ()=>(0, _index219C3CacJs.z));
parcelHelpers.export(exports, "validatePassword", ()=>(0, _index219C3CacJs.v));
parcelHelpers.export(exports, "verifyBeforeUpdateEmail", ()=>(0, _index219C3CacJs.ah));
parcelHelpers.export(exports, "verifyPasswordResetCode", ()=>(0, _index219C3CacJs.a9));
var _index219C3CacJs = require("./index-219c3cac.js");
var _app = require("@firebase/app");
var _util = require("@firebase/util");
var _logger = require("@firebase/logger");
var _tslib = require("tslib");
var _component = require("@firebase/component");

},{"./index-219c3cac.js":"iMsxL","@firebase/app":"3AcPV","@firebase/util":"ePiK6","@firebase/logger":"fZmft","tslib":"lRdW5","@firebase/component":"bi1VB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iMsxL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>TwitterAuthProvider);
parcelHelpers.export(exports, "A", ()=>ActionCodeOperation);
parcelHelpers.export(exports, "B", ()=>updateCurrentUser);
parcelHelpers.export(exports, "C", ()=>signOut);
parcelHelpers.export(exports, "D", ()=>revokeAccessToken);
parcelHelpers.export(exports, "E", ()=>deleteUser);
parcelHelpers.export(exports, "F", ()=>FactorId);
parcelHelpers.export(exports, "G", ()=>debugErrorMap);
parcelHelpers.export(exports, "H", ()=>prodErrorMap);
parcelHelpers.export(exports, "I", ()=>AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY);
parcelHelpers.export(exports, "J", ()=>initializeAuth);
parcelHelpers.export(exports, "K", ()=>connectAuthEmulator);
parcelHelpers.export(exports, "L", ()=>AuthCredential);
parcelHelpers.export(exports, "M", ()=>EmailAuthCredential);
parcelHelpers.export(exports, "N", ()=>OAuthCredential);
parcelHelpers.export(exports, "O", ()=>OperationType);
parcelHelpers.export(exports, "P", ()=>PhoneAuthProvider);
parcelHelpers.export(exports, "Q", ()=>PhoneAuthCredential);
parcelHelpers.export(exports, "R", ()=>RecaptchaVerifier);
parcelHelpers.export(exports, "S", ()=>SignInMethod);
parcelHelpers.export(exports, "T", ()=>TotpMultiFactorGenerator);
parcelHelpers.export(exports, "U", ()=>inMemoryPersistence);
parcelHelpers.export(exports, "V", ()=>EmailAuthProvider);
parcelHelpers.export(exports, "W", ()=>FacebookAuthProvider);
parcelHelpers.export(exports, "X", ()=>GoogleAuthProvider);
parcelHelpers.export(exports, "Y", ()=>GithubAuthProvider);
parcelHelpers.export(exports, "Z", ()=>OAuthProvider);
parcelHelpers.export(exports, "_", ()=>SAMLAuthProvider);
parcelHelpers.export(exports, "a", ()=>browserSessionPersistence);
parcelHelpers.export(exports, "a0", ()=>signInAnonymously);
parcelHelpers.export(exports, "a1", ()=>signInWithCredential);
parcelHelpers.export(exports, "a2", ()=>linkWithCredential);
parcelHelpers.export(exports, "a3", ()=>reauthenticateWithCredential);
parcelHelpers.export(exports, "a4", ()=>signInWithCustomToken);
parcelHelpers.export(exports, "a5", ()=>sendPasswordResetEmail);
parcelHelpers.export(exports, "a6", ()=>confirmPasswordReset);
parcelHelpers.export(exports, "a7", ()=>applyActionCode);
parcelHelpers.export(exports, "a8", ()=>checkActionCode);
parcelHelpers.export(exports, "a9", ()=>verifyPasswordResetCode);
parcelHelpers.export(exports, "aA", ()=>_isIOS7Or8);
parcelHelpers.export(exports, "aB", ()=>_createError);
parcelHelpers.export(exports, "aC", ()=>_assert);
parcelHelpers.export(exports, "aD", ()=>AuthEventManager);
parcelHelpers.export(exports, "aE", ()=>_getInstance);
parcelHelpers.export(exports, "aF", ()=>_persistenceKeyName);
parcelHelpers.export(exports, "aG", ()=>_getRedirectResult);
parcelHelpers.export(exports, "aH", ()=>_overrideRedirectResult);
parcelHelpers.export(exports, "aI", ()=>_clearRedirectOutcomes);
parcelHelpers.export(exports, "aJ", ()=>_castAuth);
parcelHelpers.export(exports, "aK", ()=>UserImpl);
parcelHelpers.export(exports, "aL", ()=>AuthImpl);
parcelHelpers.export(exports, "aM", ()=>_getClientVersion);
parcelHelpers.export(exports, "aN", ()=>_generateEventId);
parcelHelpers.export(exports, "aO", ()=>AuthPopup);
parcelHelpers.export(exports, "aP", ()=>FetchProvider);
parcelHelpers.export(exports, "aQ", ()=>SAMLAuthCredential);
parcelHelpers.export(exports, "aa", ()=>createUserWithEmailAndPassword);
parcelHelpers.export(exports, "ab", ()=>signInWithEmailAndPassword);
parcelHelpers.export(exports, "ac", ()=>sendSignInLinkToEmail);
parcelHelpers.export(exports, "ad", ()=>isSignInWithEmailLink);
parcelHelpers.export(exports, "ae", ()=>signInWithEmailLink);
parcelHelpers.export(exports, "af", ()=>fetchSignInMethodsForEmail);
parcelHelpers.export(exports, "ag", ()=>sendEmailVerification);
parcelHelpers.export(exports, "ah", ()=>verifyBeforeUpdateEmail);
parcelHelpers.export(exports, "ai", ()=>ActionCodeURL);
parcelHelpers.export(exports, "aj", ()=>parseActionCodeURL);
parcelHelpers.export(exports, "ak", ()=>updateProfile);
parcelHelpers.export(exports, "al", ()=>updateEmail);
parcelHelpers.export(exports, "am", ()=>updatePassword);
parcelHelpers.export(exports, "an", ()=>getIdToken);
parcelHelpers.export(exports, "ao", ()=>getIdTokenResult);
parcelHelpers.export(exports, "ap", ()=>unlink);
parcelHelpers.export(exports, "aq", ()=>getAdditionalUserInfo);
parcelHelpers.export(exports, "ar", ()=>reload);
parcelHelpers.export(exports, "as", ()=>getMultiFactorResolver);
parcelHelpers.export(exports, "at", ()=>multiFactor);
parcelHelpers.export(exports, "au", ()=>debugAssert);
parcelHelpers.export(exports, "av", ()=>_isIOS);
parcelHelpers.export(exports, "aw", ()=>_isAndroid);
parcelHelpers.export(exports, "ax", ()=>_fail);
parcelHelpers.export(exports, "ay", ()=>_getRedirectUrl);
parcelHelpers.export(exports, "az", ()=>_getProjectConfig);
parcelHelpers.export(exports, "b", ()=>browserLocalPersistence);
parcelHelpers.export(exports, "c", ()=>signInWithPopup);
parcelHelpers.export(exports, "d", ()=>linkWithPopup);
parcelHelpers.export(exports, "e", ()=>reauthenticateWithPopup);
parcelHelpers.export(exports, "f", ()=>signInWithRedirect);
parcelHelpers.export(exports, "g", ()=>linkWithRedirect);
parcelHelpers.export(exports, "h", ()=>reauthenticateWithRedirect);
parcelHelpers.export(exports, "i", ()=>indexedDBLocalPersistence);
parcelHelpers.export(exports, "j", ()=>getRedirectResult);
parcelHelpers.export(exports, "k", ()=>browserPopupRedirectResolver);
parcelHelpers.export(exports, "l", ()=>linkWithPhoneNumber);
parcelHelpers.export(exports, "m", ()=>PhoneMultiFactorGenerator);
parcelHelpers.export(exports, "n", ()=>TotpSecret);
parcelHelpers.export(exports, "o", ()=>getAuth);
parcelHelpers.export(exports, "p", ()=>ProviderId);
parcelHelpers.export(exports, "q", ()=>setPersistence);
parcelHelpers.export(exports, "r", ()=>reauthenticateWithPhoneNumber);
parcelHelpers.export(exports, "s", ()=>signInWithPhoneNumber);
parcelHelpers.export(exports, "t", ()=>initializeRecaptchaConfig);
parcelHelpers.export(exports, "u", ()=>updatePhoneNumber);
parcelHelpers.export(exports, "v", ()=>validatePassword);
parcelHelpers.export(exports, "w", ()=>onIdTokenChanged);
parcelHelpers.export(exports, "x", ()=>beforeAuthStateChanged);
parcelHelpers.export(exports, "y", ()=>onAuthStateChanged);
parcelHelpers.export(exports, "z", ()=>useDeviceLanguage);
var _app = require("@firebase/app");
var _util = require("@firebase/util");
var _logger = require("@firebase/logger");
var _tslib = require("tslib");
var _component = require("@firebase/component");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An enum of factors that may be used for multifactor authentication.
 *
 * @public
 */ const FactorId = {
    /** Phone as second factor */ PHONE: "phone",
    TOTP: "totp"
};
/**
 * Enumeration of supported providers.
 *
 * @public
 */ const ProviderId = {
    /** Facebook provider ID */ FACEBOOK: "facebook.com",
    /** GitHub provider ID */ GITHUB: "github.com",
    /** Google provider ID */ GOOGLE: "google.com",
    /** Password provider */ PASSWORD: "password",
    /** Phone provider */ PHONE: "phone",
    /** Twitter provider ID */ TWITTER: "twitter.com"
};
/**
 * Enumeration of supported sign-in methods.
 *
 * @public
 */ const SignInMethod = {
    /** Email link sign in method */ EMAIL_LINK: "emailLink",
    /** Email/password sign in method */ EMAIL_PASSWORD: "password",
    /** Facebook sign in method */ FACEBOOK: "facebook.com",
    /** GitHub sign in method */ GITHUB: "github.com",
    /** Google sign in method */ GOOGLE: "google.com",
    /** Phone sign in method */ PHONE: "phone",
    /** Twitter sign in method */ TWITTER: "twitter.com"
};
/**
 * Enumeration of supported operation types.
 *
 * @public
 */ const OperationType = {
    /** Operation involving linking an additional provider to an already signed-in user. */ LINK: "link",
    /** Operation involving using a provider to reauthenticate an already signed-in user. */ REAUTHENTICATE: "reauthenticate",
    /** Operation involving signing in a user. */ SIGN_IN: "signIn"
};
/**
 * An enumeration of the possible email action types.
 *
 * @public
 */ const ActionCodeOperation = {
    /** The email link sign-in action. */ EMAIL_SIGNIN: "EMAIL_SIGNIN",
    /** The password reset action. */ PASSWORD_RESET: "PASSWORD_RESET",
    /** The email revocation action. */ RECOVER_EMAIL: "RECOVER_EMAIL",
    /** The revert second factor addition email action. */ REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
    /** The revert second factor addition email action. */ VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
    /** The email verification action. */ VERIFY_EMAIL: "VERIFY_EMAIL"
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _debugErrorMap() {
    return {
        ["admin-restricted-operation" /* AuthErrorCode.ADMIN_ONLY_OPERATION */ ]: "This operation is restricted to administrators only.",
        ["argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ ]: "",
        ["app-not-authorized" /* AuthErrorCode.APP_NOT_AUTHORIZED */ ]: "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
        ["app-not-installed" /* AuthErrorCode.APP_NOT_INSTALLED */ ]: "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
        ["captcha-check-failed" /* AuthErrorCode.CAPTCHA_CHECK_FAILED */ ]: "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
        ["code-expired" /* AuthErrorCode.CODE_EXPIRED */ ]: "The SMS code has expired. Please re-send the verification code to try again.",
        ["cordova-not-ready" /* AuthErrorCode.CORDOVA_NOT_READY */ ]: "Cordova framework is not ready.",
        ["cors-unsupported" /* AuthErrorCode.CORS_UNSUPPORTED */ ]: "This browser is not supported.",
        ["credential-already-in-use" /* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */ ]: "This credential is already associated with a different user account.",
        ["custom-token-mismatch" /* AuthErrorCode.CREDENTIAL_MISMATCH */ ]: "The custom token corresponds to a different audience.",
        ["requires-recent-login" /* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */ ]: "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
        ["dependent-sdk-initialized-before-auth" /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */ ]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
        ["dynamic-link-not-activated" /* AuthErrorCode.DYNAMIC_LINK_NOT_ACTIVATED */ ]: "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
        ["email-change-needs-verification" /* AuthErrorCode.EMAIL_CHANGE_NEEDS_VERIFICATION */ ]: "Multi-factor users must always have a verified email.",
        ["email-already-in-use" /* AuthErrorCode.EMAIL_EXISTS */ ]: "The email address is already in use by another account.",
        ["emulator-config-failed" /* AuthErrorCode.EMULATOR_CONFIG_FAILED */ ]: 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
        ["expired-action-code" /* AuthErrorCode.EXPIRED_OOB_CODE */ ]: "The action code has expired.",
        ["cancelled-popup-request" /* AuthErrorCode.EXPIRED_POPUP_REQUEST */ ]: "This operation has been cancelled due to another conflicting popup being opened.",
        ["internal-error" /* AuthErrorCode.INTERNAL_ERROR */ ]: "An internal AuthError has occurred.",
        ["invalid-app-credential" /* AuthErrorCode.INVALID_APP_CREDENTIAL */ ]: "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
        ["invalid-app-id" /* AuthErrorCode.INVALID_APP_ID */ ]: "The mobile app identifier is not registed for the current project.",
        ["invalid-user-token" /* AuthErrorCode.INVALID_AUTH */ ]: "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
        ["invalid-auth-event" /* AuthErrorCode.INVALID_AUTH_EVENT */ ]: "An internal AuthError has occurred.",
        ["invalid-verification-code" /* AuthErrorCode.INVALID_CODE */ ]: "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
        ["invalid-continue-uri" /* AuthErrorCode.INVALID_CONTINUE_URI */ ]: "The continue URL provided in the request is invalid.",
        ["invalid-cordova-configuration" /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */ ]: "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
        ["invalid-custom-token" /* AuthErrorCode.INVALID_CUSTOM_TOKEN */ ]: "The custom token format is incorrect. Please check the documentation.",
        ["invalid-dynamic-link-domain" /* AuthErrorCode.INVALID_DYNAMIC_LINK_DOMAIN */ ]: "The provided dynamic link domain is not configured or authorized for the current project.",
        ["invalid-email" /* AuthErrorCode.INVALID_EMAIL */ ]: "The email address is badly formatted.",
        ["invalid-emulator-scheme" /* AuthErrorCode.INVALID_EMULATOR_SCHEME */ ]: "Emulator URL must start with a valid scheme (http:// or https://).",
        ["invalid-api-key" /* AuthErrorCode.INVALID_API_KEY */ ]: "Your API key is invalid, please check you have copied it correctly.",
        ["invalid-cert-hash" /* AuthErrorCode.INVALID_CERT_HASH */ ]: "The SHA-1 certificate hash provided is invalid.",
        ["invalid-credential" /* AuthErrorCode.INVALID_CREDENTIAL */ ]: "The supplied auth credential is incorrect, malformed or has expired.",
        ["invalid-message-payload" /* AuthErrorCode.INVALID_MESSAGE_PAYLOAD */ ]: "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
        ["invalid-multi-factor-session" /* AuthErrorCode.INVALID_MFA_SESSION */ ]: "The request does not contain a valid proof of first factor successful sign-in.",
        ["invalid-oauth-provider" /* AuthErrorCode.INVALID_OAUTH_PROVIDER */ ]: "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
        ["invalid-oauth-client-id" /* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */ ]: "The OAuth client ID provided is either invalid or does not match the specified API key.",
        ["unauthorized-domain" /* AuthErrorCode.INVALID_ORIGIN */ ]: "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
        ["invalid-action-code" /* AuthErrorCode.INVALID_OOB_CODE */ ]: "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
        ["wrong-password" /* AuthErrorCode.INVALID_PASSWORD */ ]: "The password is invalid or the user does not have a password.",
        ["invalid-persistence-type" /* AuthErrorCode.INVALID_PERSISTENCE */ ]: "The specified persistence type is invalid. It can only be local, session or none.",
        ["invalid-phone-number" /* AuthErrorCode.INVALID_PHONE_NUMBER */ ]: "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
        ["invalid-provider-id" /* AuthErrorCode.INVALID_PROVIDER_ID */ ]: "The specified provider ID is invalid.",
        ["invalid-recipient-email" /* AuthErrorCode.INVALID_RECIPIENT_EMAIL */ ]: "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
        ["invalid-sender" /* AuthErrorCode.INVALID_SENDER */ ]: "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
        ["invalid-verification-id" /* AuthErrorCode.INVALID_SESSION_INFO */ ]: "The verification ID used to create the phone auth credential is invalid.",
        ["invalid-tenant-id" /* AuthErrorCode.INVALID_TENANT_ID */ ]: "The Auth instance's tenant ID is invalid.",
        ["login-blocked" /* AuthErrorCode.LOGIN_BLOCKED */ ]: "Login blocked by user-provided method: {$originalMessage}",
        ["missing-android-pkg-name" /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */ ]: "An Android Package Name must be provided if the Android App is required to be installed.",
        ["auth-domain-config-required" /* AuthErrorCode.MISSING_AUTH_DOMAIN */ ]: "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
        ["missing-app-credential" /* AuthErrorCode.MISSING_APP_CREDENTIAL */ ]: "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
        ["missing-verification-code" /* AuthErrorCode.MISSING_CODE */ ]: "The phone auth credential was created with an empty SMS verification code.",
        ["missing-continue-uri" /* AuthErrorCode.MISSING_CONTINUE_URI */ ]: "A continue URL must be provided in the request.",
        ["missing-iframe-start" /* AuthErrorCode.MISSING_IFRAME_START */ ]: "An internal AuthError has occurred.",
        ["missing-ios-bundle-id" /* AuthErrorCode.MISSING_IOS_BUNDLE_ID */ ]: "An iOS Bundle ID must be provided if an App Store ID is provided.",
        ["missing-or-invalid-nonce" /* AuthErrorCode.MISSING_OR_INVALID_NONCE */ ]: "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
        ["missing-password" /* AuthErrorCode.MISSING_PASSWORD */ ]: "A non-empty password must be provided",
        ["missing-multi-factor-info" /* AuthErrorCode.MISSING_MFA_INFO */ ]: "No second factor identifier is provided.",
        ["missing-multi-factor-session" /* AuthErrorCode.MISSING_MFA_SESSION */ ]: "The request is missing proof of first factor successful sign-in.",
        ["missing-phone-number" /* AuthErrorCode.MISSING_PHONE_NUMBER */ ]: "To send verification codes, provide a phone number for the recipient.",
        ["missing-verification-id" /* AuthErrorCode.MISSING_SESSION_INFO */ ]: "The phone auth credential was created with an empty verification ID.",
        ["app-deleted" /* AuthErrorCode.MODULE_DESTROYED */ ]: "This instance of FirebaseApp has been deleted.",
        ["multi-factor-info-not-found" /* AuthErrorCode.MFA_INFO_NOT_FOUND */ ]: "The user does not have a second factor matching the identifier provided.",
        ["multi-factor-auth-required" /* AuthErrorCode.MFA_REQUIRED */ ]: "Proof of ownership of a second factor is required to complete sign-in.",
        ["account-exists-with-different-credential" /* AuthErrorCode.NEED_CONFIRMATION */ ]: "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
        ["network-request-failed" /* AuthErrorCode.NETWORK_REQUEST_FAILED */ ]: "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
        ["no-auth-event" /* AuthErrorCode.NO_AUTH_EVENT */ ]: "An internal AuthError has occurred.",
        ["no-such-provider" /* AuthErrorCode.NO_SUCH_PROVIDER */ ]: "User was not linked to an account with the given provider.",
        ["null-user" /* AuthErrorCode.NULL_USER */ ]: "A null user object was provided as the argument for an operation which requires a non-null user object.",
        ["operation-not-allowed" /* AuthErrorCode.OPERATION_NOT_ALLOWED */ ]: "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
        ["operation-not-supported-in-this-environment" /* AuthErrorCode.OPERATION_NOT_SUPPORTED */ ]: 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
        ["popup-blocked" /* AuthErrorCode.POPUP_BLOCKED */ ]: "Unable to establish a connection with the popup. It may have been blocked by the browser.",
        ["popup-closed-by-user" /* AuthErrorCode.POPUP_CLOSED_BY_USER */ ]: "The popup has been closed by the user before finalizing the operation.",
        ["provider-already-linked" /* AuthErrorCode.PROVIDER_ALREADY_LINKED */ ]: "User can only be linked to one identity for the given provider.",
        ["quota-exceeded" /* AuthErrorCode.QUOTA_EXCEEDED */ ]: "The project's quota for this operation has been exceeded.",
        ["redirect-cancelled-by-user" /* AuthErrorCode.REDIRECT_CANCELLED_BY_USER */ ]: "The redirect operation has been cancelled by the user before finalizing.",
        ["redirect-operation-pending" /* AuthErrorCode.REDIRECT_OPERATION_PENDING */ ]: "A redirect sign-in operation is already pending.",
        ["rejected-credential" /* AuthErrorCode.REJECTED_CREDENTIAL */ ]: "The request contains malformed or mismatching credentials.",
        ["second-factor-already-in-use" /* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */ ]: "The second factor is already enrolled on this account.",
        ["maximum-second-factor-count-exceeded" /* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */ ]: "The maximum allowed number of second factors on a user has been exceeded.",
        ["tenant-id-mismatch" /* AuthErrorCode.TENANT_ID_MISMATCH */ ]: "The provided tenant ID does not match the Auth instance's tenant ID",
        ["timeout" /* AuthErrorCode.TIMEOUT */ ]: "The operation has timed out.",
        ["user-token-expired" /* AuthErrorCode.TOKEN_EXPIRED */ ]: "The user's credential is no longer valid. The user must sign in again.",
        ["too-many-requests" /* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */ ]: "We have blocked all requests from this device due to unusual activity. Try again later.",
        ["unauthorized-continue-uri" /* AuthErrorCode.UNAUTHORIZED_DOMAIN */ ]: "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
        ["unsupported-first-factor" /* AuthErrorCode.UNSUPPORTED_FIRST_FACTOR */ ]: "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
        ["unsupported-persistence-type" /* AuthErrorCode.UNSUPPORTED_PERSISTENCE */ ]: "The current environment does not support the specified persistence type.",
        ["unsupported-tenant-operation" /* AuthErrorCode.UNSUPPORTED_TENANT_OPERATION */ ]: "This operation is not supported in a multi-tenant context.",
        ["unverified-email" /* AuthErrorCode.UNVERIFIED_EMAIL */ ]: "The operation requires a verified email.",
        ["user-cancelled" /* AuthErrorCode.USER_CANCELLED */ ]: "The user did not grant your application the permissions it requested.",
        ["user-not-found" /* AuthErrorCode.USER_DELETED */ ]: "There is no user record corresponding to this identifier. The user may have been deleted.",
        ["user-disabled" /* AuthErrorCode.USER_DISABLED */ ]: "The user account has been disabled by an administrator.",
        ["user-mismatch" /* AuthErrorCode.USER_MISMATCH */ ]: "The supplied credentials do not correspond to the previously signed in user.",
        ["user-signed-out" /* AuthErrorCode.USER_SIGNED_OUT */ ]: "",
        ["weak-password" /* AuthErrorCode.WEAK_PASSWORD */ ]: "The password must be 6 characters long or more.",
        ["web-storage-unsupported" /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */ ]: "This browser is not supported or 3rd party cookies and data may be disabled.",
        ["already-initialized" /* AuthErrorCode.ALREADY_INITIALIZED */ ]: "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
        ["missing-recaptcha-token" /* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */ ]: "The reCAPTCHA token is missing when sending request to the backend.",
        ["invalid-recaptcha-token" /* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */ ]: "The reCAPTCHA token is invalid when sending request to the backend.",
        ["invalid-recaptcha-action" /* AuthErrorCode.INVALID_RECAPTCHA_ACTION */ ]: "The reCAPTCHA action is invalid when sending request to the backend.",
        ["recaptcha-not-enabled" /* AuthErrorCode.RECAPTCHA_NOT_ENABLED */ ]: "reCAPTCHA Enterprise integration is not enabled for this project.",
        ["missing-client-type" /* AuthErrorCode.MISSING_CLIENT_TYPE */ ]: "The reCAPTCHA client type is missing when sending request to the backend.",
        ["missing-recaptcha-version" /* AuthErrorCode.MISSING_RECAPTCHA_VERSION */ ]: "The reCAPTCHA version is missing when sending request to the backend.",
        ["invalid-req-type" /* AuthErrorCode.INVALID_REQ_TYPE */ ]: "Invalid request parameters.",
        ["invalid-recaptcha-version" /* AuthErrorCode.INVALID_RECAPTCHA_VERSION */ ]: "The reCAPTCHA version is invalid when sending request to the backend.",
        ["unsupported-password-policy-schema-version" /* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */ ]: "The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",
        ["password-does-not-meet-requirements" /* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */ ]: "The password does not meet the requirements."
    };
}
function _prodErrorMap() {
    // We will include this one message in the prod error map since by the very
    // nature of this error, developers will never be able to see the message
    // using the debugErrorMap (which is installed during auth initialization).
    return {
        ["dependent-sdk-initialized-before-auth" /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */ ]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    };
}
/**
 * A verbose error map with detailed descriptions for most error codes.
 *
 * See discussion at {@link AuthErrorMap}
 *
 * @public
 */ const debugErrorMap = _debugErrorMap;
/**
 * A minimal error map with all verbose error messages stripped.
 *
 * See discussion at {@link AuthErrorMap}
 *
 * @public
 */ const prodErrorMap = _prodErrorMap;
const _DEFAULT_AUTH_ERROR_FACTORY = new (0, _util.ErrorFactory)("auth", "Firebase", _prodErrorMap());
/**
 * A map of potential `Auth` error codes, for easier comparison with errors
 * thrown by the SDK.
 *
 * @remarks
 * Note that you can't tree-shake individual keys
 * in the map, so by using the map you might substantially increase your
 * bundle size.
 *
 * @public
 */ const AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY = {
    ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
    ARGUMENT_ERROR: "auth/argument-error",
    APP_NOT_AUTHORIZED: "auth/app-not-authorized",
    APP_NOT_INSTALLED: "auth/app-not-installed",
    CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
    CODE_EXPIRED: "auth/code-expired",
    CORDOVA_NOT_READY: "auth/cordova-not-ready",
    CORS_UNSUPPORTED: "auth/cors-unsupported",
    CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
    CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
    DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
    DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
    EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
    EMAIL_EXISTS: "auth/email-already-in-use",
    EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
    EXPIRED_OOB_CODE: "auth/expired-action-code",
    EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
    INTERNAL_ERROR: "auth/internal-error",
    INVALID_API_KEY: "auth/invalid-api-key",
    INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
    INVALID_APP_ID: "auth/invalid-app-id",
    INVALID_AUTH: "auth/invalid-user-token",
    INVALID_AUTH_EVENT: "auth/invalid-auth-event",
    INVALID_CERT_HASH: "auth/invalid-cert-hash",
    INVALID_CODE: "auth/invalid-verification-code",
    INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
    INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
    INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
    INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
    INVALID_EMAIL: "auth/invalid-email",
    INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
    INVALID_IDP_RESPONSE: "auth/invalid-credential",
    INVALID_LOGIN_CREDENTIALS: "auth/invalid-credential",
    INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
    INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
    INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
    INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
    INVALID_OOB_CODE: "auth/invalid-action-code",
    INVALID_ORIGIN: "auth/unauthorized-domain",
    INVALID_PASSWORD: "auth/wrong-password",
    INVALID_PERSISTENCE: "auth/invalid-persistence-type",
    INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
    INVALID_PROVIDER_ID: "auth/invalid-provider-id",
    INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
    INVALID_SENDER: "auth/invalid-sender",
    INVALID_SESSION_INFO: "auth/invalid-verification-id",
    INVALID_TENANT_ID: "auth/invalid-tenant-id",
    MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
    MFA_REQUIRED: "auth/multi-factor-auth-required",
    MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
    MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
    MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
    MISSING_CODE: "auth/missing-verification-code",
    MISSING_CONTINUE_URI: "auth/missing-continue-uri",
    MISSING_IFRAME_START: "auth/missing-iframe-start",
    MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
    MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
    MISSING_MFA_INFO: "auth/missing-multi-factor-info",
    MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
    MISSING_PHONE_NUMBER: "auth/missing-phone-number",
    MISSING_SESSION_INFO: "auth/missing-verification-id",
    MODULE_DESTROYED: "auth/app-deleted",
    NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
    NETWORK_REQUEST_FAILED: "auth/network-request-failed",
    NULL_USER: "auth/null-user",
    NO_AUTH_EVENT: "auth/no-auth-event",
    NO_SUCH_PROVIDER: "auth/no-such-provider",
    OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
    OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
    POPUP_BLOCKED: "auth/popup-blocked",
    POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
    PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
    QUOTA_EXCEEDED: "auth/quota-exceeded",
    REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
    REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
    REJECTED_CREDENTIAL: "auth/rejected-credential",
    SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
    SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
    TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
    TIMEOUT: "auth/timeout",
    TOKEN_EXPIRED: "auth/user-token-expired",
    TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
    UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
    UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
    UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
    UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
    UNVERIFIED_EMAIL: "auth/unverified-email",
    USER_CANCELLED: "auth/user-cancelled",
    USER_DELETED: "auth/user-not-found",
    USER_DISABLED: "auth/user-disabled",
    USER_MISMATCH: "auth/user-mismatch",
    USER_SIGNED_OUT: "auth/user-signed-out",
    WEAK_PASSWORD: "auth/weak-password",
    WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
    ALREADY_INITIALIZED: "auth/already-initialized",
    RECAPTCHA_NOT_ENABLED: "auth/recaptcha-not-enabled",
    MISSING_RECAPTCHA_TOKEN: "auth/missing-recaptcha-token",
    INVALID_RECAPTCHA_TOKEN: "auth/invalid-recaptcha-token",
    INVALID_RECAPTCHA_ACTION: "auth/invalid-recaptcha-action",
    MISSING_CLIENT_TYPE: "auth/missing-client-type",
    MISSING_RECAPTCHA_VERSION: "auth/missing-recaptcha-version",
    INVALID_RECAPTCHA_VERSION: "auth/invalid-recaptcha-version",
    INVALID_REQ_TYPE: "auth/invalid-req-type"
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const logClient = new (0, _logger.Logger)("@firebase/auth");
function _logWarn(msg, ...args) {
    if (logClient.logLevel <= (0, _logger.LogLevel).WARN) logClient.warn(`Auth (${(0, _app.SDK_VERSION)}): ${msg}`, ...args);
}
function _logError(msg, ...args) {
    if (logClient.logLevel <= (0, _logger.LogLevel).ERROR) logClient.error(`Auth (${(0, _app.SDK_VERSION)}): ${msg}`, ...args);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _fail(authOrCode, ...rest) {
    throw createErrorInternal(authOrCode, ...rest);
}
function _createError(authOrCode, ...rest) {
    return createErrorInternal(authOrCode, ...rest);
}
function _errorWithCustomMessage(auth, code, message) {
    const errorMap = Object.assign(Object.assign({}, prodErrorMap()), {
        [code]: message
    });
    const factory = new (0, _util.ErrorFactory)("auth", "Firebase", errorMap);
    return factory.create(code, {
        appName: auth.name
    });
}
function _serverAppCurrentUserOperationNotSupportedError(auth) {
    return _errorWithCustomMessage(auth, "operation-not-supported-in-this-environment" /* AuthErrorCode.OPERATION_NOT_SUPPORTED */ , "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function _assertInstanceOf(auth, object, instance) {
    const constructorInstance = instance;
    if (!(object instanceof constructorInstance)) {
        if (constructorInstance.name !== object.constructor.name) _fail(auth, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        throw _errorWithCustomMessage(auth, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ , `Type of ${object.constructor.name} does not match expected instance.` + `Did you pass a reference from a different Auth SDK?`);
    }
}
function createErrorInternal(authOrCode, ...rest) {
    if (typeof authOrCode !== "string") {
        const code = rest[0];
        const fullParams = [
            ...rest.slice(1)
        ];
        if (fullParams[0]) fullParams[0].appName = authOrCode.name;
        return authOrCode._errorFactory.create(code, ...fullParams);
    }
    return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
}
function _assert(assertion, authOrCode, ...rest) {
    if (!assertion) throw createErrorInternal(authOrCode, ...rest);
}
/**
 * Unconditionally fails, throwing an internal error with the given message.
 *
 * @param failure type of failure encountered
 * @throws Error
 */ function debugFail(failure) {
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    const message = `INTERNAL ASSERTION FAILED: ` + failure;
    _logError(message);
    // NOTE: We don't use FirebaseError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
    throw new Error(message);
}
/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * @param assertion
 * @param message
 */ function debugAssert(assertion, message) {
    if (!assertion) debugFail(message);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _getCurrentUrl() {
    var _a;
    return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || "";
}
function _isHttpOrHttps() {
    return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
}
function _getCurrentScheme() {
    var _a;
    return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Determine whether the browser is working online
 */ function _isOnline() {
    if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && // Apply only for traditional web apps and Chrome extensions.
    // This is especially true for Cordova apps which have unreliable
    // navigator.onLine behavior unless cordova-plugin-network-information is
    // installed which overwrites the native navigator.onLine value and
    // defines navigator.connection.
    (_isHttpOrHttps() || (0, _util.isBrowserExtension)() || "connection" in navigator)) return navigator.onLine;
    // If we can't determine the state, assume it is online.
    return true;
}
function _getUserLanguage() {
    if (typeof navigator === "undefined") return null;
    const navigatorLanguage = navigator;
    return(// Most reliable, but only supported in Chrome/Firefox.
    navigatorLanguage.languages && navigatorLanguage.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    navigatorLanguage.language || // Couldn't determine language.
    null);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */ class Delay {
    constructor(shortDelay, longDelay){
        this.shortDelay = shortDelay;
        this.longDelay = longDelay;
        // Internal error when improperly initialized.
        debugAssert(longDelay > shortDelay, "Short delay should be less than long delay!");
        this.isMobile = (0, _util.isMobileCordova)() || (0, _util.isReactNative)();
    }
    get() {
        if (!_isOnline()) // Pick the shorter timeout.
        return Math.min(5000 /* DelayMin.OFFLINE */ , this.shortDelay);
        // If running in a mobile environment, return the long delay, otherwise
        // return the short delay.
        // This could be improved in the future to dynamically change based on other
        // variables instead of just reading the current environment.
        return this.isMobile ? this.longDelay : this.shortDelay;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _emulatorUrl(config, path) {
    debugAssert(config.emulator, "Emulator should always be set here");
    const { url } = config.emulator;
    if (!path) return url;
    return `${url}${path.startsWith("/") ? path.slice(1) : path}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FetchProvider {
    static initialize(fetchImpl, headersImpl, responseImpl) {
        this.fetchImpl = fetchImpl;
        if (headersImpl) this.headersImpl = headersImpl;
        if (responseImpl) this.responseImpl = responseImpl;
    }
    static fetch() {
        if (this.fetchImpl) return this.fetchImpl;
        if (typeof self !== "undefined" && "fetch" in self) return self.fetch;
        if (typeof globalThis !== "undefined" && globalThis.fetch) return globalThis.fetch;
        if (typeof fetch !== "undefined") return fetch;
        debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
    }
    static headers() {
        if (this.headersImpl) return this.headersImpl;
        if (typeof self !== "undefined" && "Headers" in self) return self.Headers;
        if (typeof globalThis !== "undefined" && globalThis.Headers) return globalThis.Headers;
        if (typeof Headers !== "undefined") return Headers;
        debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
    }
    static response() {
        if (this.responseImpl) return this.responseImpl;
        if (typeof self !== "undefined" && "Response" in self) return self.Response;
        if (typeof globalThis !== "undefined" && globalThis.Response) return globalThis.Response;
        if (typeof Response !== "undefined") return Response;
        debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Map from errors returned by the server to errors to developer visible errors
 */ const SERVER_ERROR_MAP = {
    // Custom token errors.
    ["CREDENTIAL_MISMATCH" /* ServerError.CREDENTIAL_MISMATCH */ ]: "custom-token-mismatch" /* AuthErrorCode.CREDENTIAL_MISMATCH */ ,
    // This can only happen if the SDK sends a bad request.
    ["MISSING_CUSTOM_TOKEN" /* ServerError.MISSING_CUSTOM_TOKEN */ ]: "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ ,
    // Create Auth URI errors.
    ["INVALID_IDENTIFIER" /* ServerError.INVALID_IDENTIFIER */ ]: "invalid-email" /* AuthErrorCode.INVALID_EMAIL */ ,
    // This can only happen if the SDK sends a bad request.
    ["MISSING_CONTINUE_URI" /* ServerError.MISSING_CONTINUE_URI */ ]: "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ ,
    // Sign in with email and password errors (some apply to sign up too).
    ["INVALID_PASSWORD" /* ServerError.INVALID_PASSWORD */ ]: "wrong-password" /* AuthErrorCode.INVALID_PASSWORD */ ,
    // This can only happen if the SDK sends a bad request.
    ["MISSING_PASSWORD" /* ServerError.MISSING_PASSWORD */ ]: "missing-password" /* AuthErrorCode.MISSING_PASSWORD */ ,
    // Thrown if Email Enumeration Protection is enabled in the project and the email or password is
    // invalid.
    ["INVALID_LOGIN_CREDENTIALS" /* ServerError.INVALID_LOGIN_CREDENTIALS */ ]: "invalid-credential" /* AuthErrorCode.INVALID_CREDENTIAL */ ,
    // Sign up with email and password errors.
    ["EMAIL_EXISTS" /* ServerError.EMAIL_EXISTS */ ]: "email-already-in-use" /* AuthErrorCode.EMAIL_EXISTS */ ,
    ["PASSWORD_LOGIN_DISABLED" /* ServerError.PASSWORD_LOGIN_DISABLED */ ]: "operation-not-allowed" /* AuthErrorCode.OPERATION_NOT_ALLOWED */ ,
    // Verify assertion for sign in with credential errors:
    ["INVALID_IDP_RESPONSE" /* ServerError.INVALID_IDP_RESPONSE */ ]: "invalid-credential" /* AuthErrorCode.INVALID_CREDENTIAL */ ,
    ["INVALID_PENDING_TOKEN" /* ServerError.INVALID_PENDING_TOKEN */ ]: "invalid-credential" /* AuthErrorCode.INVALID_CREDENTIAL */ ,
    ["FEDERATED_USER_ID_ALREADY_LINKED" /* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */ ]: "credential-already-in-use" /* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */ ,
    // This can only happen if the SDK sends a bad request.
    ["MISSING_REQ_TYPE" /* ServerError.MISSING_REQ_TYPE */ ]: "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ ,
    // Send Password reset email errors:
    ["EMAIL_NOT_FOUND" /* ServerError.EMAIL_NOT_FOUND */ ]: "user-not-found" /* AuthErrorCode.USER_DELETED */ ,
    ["RESET_PASSWORD_EXCEED_LIMIT" /* ServerError.RESET_PASSWORD_EXCEED_LIMIT */ ]: "too-many-requests" /* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */ ,
    ["EXPIRED_OOB_CODE" /* ServerError.EXPIRED_OOB_CODE */ ]: "expired-action-code" /* AuthErrorCode.EXPIRED_OOB_CODE */ ,
    ["INVALID_OOB_CODE" /* ServerError.INVALID_OOB_CODE */ ]: "invalid-action-code" /* AuthErrorCode.INVALID_OOB_CODE */ ,
    // This can only happen if the SDK sends a bad request.
    ["MISSING_OOB_CODE" /* ServerError.MISSING_OOB_CODE */ ]: "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ ,
    // Operations that require ID token in request:
    ["CREDENTIAL_TOO_OLD_LOGIN_AGAIN" /* ServerError.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */ ]: "requires-recent-login" /* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */ ,
    ["INVALID_ID_TOKEN" /* ServerError.INVALID_ID_TOKEN */ ]: "invalid-user-token" /* AuthErrorCode.INVALID_AUTH */ ,
    ["TOKEN_EXPIRED" /* ServerError.TOKEN_EXPIRED */ ]: "user-token-expired" /* AuthErrorCode.TOKEN_EXPIRED */ ,
    ["USER_NOT_FOUND" /* ServerError.USER_NOT_FOUND */ ]: "user-token-expired" /* AuthErrorCode.TOKEN_EXPIRED */ ,
    // Other errors.
    ["TOO_MANY_ATTEMPTS_TRY_LATER" /* ServerError.TOO_MANY_ATTEMPTS_TRY_LATER */ ]: "too-many-requests" /* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */ ,
    ["PASSWORD_DOES_NOT_MEET_REQUIREMENTS" /* ServerError.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */ ]: "password-does-not-meet-requirements" /* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */ ,
    // Phone Auth related errors.
    ["INVALID_CODE" /* ServerError.INVALID_CODE */ ]: "invalid-verification-code" /* AuthErrorCode.INVALID_CODE */ ,
    ["INVALID_SESSION_INFO" /* ServerError.INVALID_SESSION_INFO */ ]: "invalid-verification-id" /* AuthErrorCode.INVALID_SESSION_INFO */ ,
    ["INVALID_TEMPORARY_PROOF" /* ServerError.INVALID_TEMPORARY_PROOF */ ]: "invalid-credential" /* AuthErrorCode.INVALID_CREDENTIAL */ ,
    ["MISSING_SESSION_INFO" /* ServerError.MISSING_SESSION_INFO */ ]: "missing-verification-id" /* AuthErrorCode.MISSING_SESSION_INFO */ ,
    ["SESSION_EXPIRED" /* ServerError.SESSION_EXPIRED */ ]: "code-expired" /* AuthErrorCode.CODE_EXPIRED */ ,
    // Other action code errors when additional settings passed.
    // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
    // This is OK as this error will be caught by client side validation.
    ["MISSING_ANDROID_PACKAGE_NAME" /* ServerError.MISSING_ANDROID_PACKAGE_NAME */ ]: "missing-android-pkg-name" /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */ ,
    ["UNAUTHORIZED_DOMAIN" /* ServerError.UNAUTHORIZED_DOMAIN */ ]: "unauthorized-continue-uri" /* AuthErrorCode.UNAUTHORIZED_DOMAIN */ ,
    // getProjectConfig errors when clientId is passed.
    ["INVALID_OAUTH_CLIENT_ID" /* ServerError.INVALID_OAUTH_CLIENT_ID */ ]: "invalid-oauth-client-id" /* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */ ,
    // User actions (sign-up or deletion) disabled errors.
    ["ADMIN_ONLY_OPERATION" /* ServerError.ADMIN_ONLY_OPERATION */ ]: "admin-restricted-operation" /* AuthErrorCode.ADMIN_ONLY_OPERATION */ ,
    // Multi factor related errors.
    ["INVALID_MFA_PENDING_CREDENTIAL" /* ServerError.INVALID_MFA_PENDING_CREDENTIAL */ ]: "invalid-multi-factor-session" /* AuthErrorCode.INVALID_MFA_SESSION */ ,
    ["MFA_ENROLLMENT_NOT_FOUND" /* ServerError.MFA_ENROLLMENT_NOT_FOUND */ ]: "multi-factor-info-not-found" /* AuthErrorCode.MFA_INFO_NOT_FOUND */ ,
    ["MISSING_MFA_ENROLLMENT_ID" /* ServerError.MISSING_MFA_ENROLLMENT_ID */ ]: "missing-multi-factor-info" /* AuthErrorCode.MISSING_MFA_INFO */ ,
    ["MISSING_MFA_PENDING_CREDENTIAL" /* ServerError.MISSING_MFA_PENDING_CREDENTIAL */ ]: "missing-multi-factor-session" /* AuthErrorCode.MISSING_MFA_SESSION */ ,
    ["SECOND_FACTOR_EXISTS" /* ServerError.SECOND_FACTOR_EXISTS */ ]: "second-factor-already-in-use" /* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */ ,
    ["SECOND_FACTOR_LIMIT_EXCEEDED" /* ServerError.SECOND_FACTOR_LIMIT_EXCEEDED */ ]: "maximum-second-factor-count-exceeded" /* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */ ,
    // Blocking functions related errors.
    ["BLOCKING_FUNCTION_ERROR_RESPONSE" /* ServerError.BLOCKING_FUNCTION_ERROR_RESPONSE */ ]: "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ ,
    // Recaptcha related errors.
    ["RECAPTCHA_NOT_ENABLED" /* ServerError.RECAPTCHA_NOT_ENABLED */ ]: "recaptcha-not-enabled" /* AuthErrorCode.RECAPTCHA_NOT_ENABLED */ ,
    ["MISSING_RECAPTCHA_TOKEN" /* ServerError.MISSING_RECAPTCHA_TOKEN */ ]: "missing-recaptcha-token" /* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */ ,
    ["INVALID_RECAPTCHA_TOKEN" /* ServerError.INVALID_RECAPTCHA_TOKEN */ ]: "invalid-recaptcha-token" /* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */ ,
    ["INVALID_RECAPTCHA_ACTION" /* ServerError.INVALID_RECAPTCHA_ACTION */ ]: "invalid-recaptcha-action" /* AuthErrorCode.INVALID_RECAPTCHA_ACTION */ ,
    ["MISSING_CLIENT_TYPE" /* ServerError.MISSING_CLIENT_TYPE */ ]: "missing-client-type" /* AuthErrorCode.MISSING_CLIENT_TYPE */ ,
    ["MISSING_RECAPTCHA_VERSION" /* ServerError.MISSING_RECAPTCHA_VERSION */ ]: "missing-recaptcha-version" /* AuthErrorCode.MISSING_RECAPTCHA_VERSION */ ,
    ["INVALID_RECAPTCHA_VERSION" /* ServerError.INVALID_RECAPTCHA_VERSION */ ]: "invalid-recaptcha-version" /* AuthErrorCode.INVALID_RECAPTCHA_VERSION */ ,
    ["INVALID_REQ_TYPE" /* ServerError.INVALID_REQ_TYPE */ ]: "invalid-req-type" /* AuthErrorCode.INVALID_REQ_TYPE */ 
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DEFAULT_API_TIMEOUT_MS = new Delay(30000, 60000);
function _addTidIfNecessary(auth, request) {
    if (auth.tenantId && !request.tenantId) return Object.assign(Object.assign({}, request), {
        tenantId: auth.tenantId
    });
    return request;
}
async function _performApiRequest(auth, method, path, request, customErrorMap = {}) {
    return _performFetchWithErrorHandling(auth, customErrorMap, async ()=>{
        let body = {};
        let params = {};
        if (request) {
            if (method === "GET" /* HttpMethod.GET */ ) params = request;
            else body = {
                body: JSON.stringify(request)
            };
        }
        const query = (0, _util.querystring)(Object.assign({
            key: auth.config.apiKey
        }, params)).slice(1);
        const headers = await auth._getAdditionalHeaders();
        headers["Content-Type" /* HttpHeader.CONTENT_TYPE */ ] = "application/json";
        if (auth.languageCode) headers["X-Firebase-Locale" /* HttpHeader.X_FIREBASE_LOCALE */ ] = auth.languageCode;
        return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), Object.assign({
            method,
            headers,
            referrerPolicy: "no-referrer"
        }, body));
    });
}
async function _performFetchWithErrorHandling(auth, customErrorMap, fetchFn) {
    auth._canInitEmulator = false;
    const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
    try {
        const networkTimeout = new NetworkTimeout(auth);
        const response = await Promise.race([
            fetchFn(),
            networkTimeout.promise
        ]);
        // If we've reached this point, the fetch succeeded and the networkTimeout
        // didn't throw; clear the network timeout delay so that Node won't hang
        networkTimeout.clearNetworkTimeout();
        const json = await response.json();
        if ("needConfirmation" in json) throw _makeTaggedError(auth, "account-exists-with-different-credential" /* AuthErrorCode.NEED_CONFIRMATION */ , json);
        if (response.ok && !("errorMessage" in json)) return json;
        else {
            const errorMessage = response.ok ? json.errorMessage : json.error.message;
            const [serverErrorCode, serverErrorMessage] = errorMessage.split(" : ");
            if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED" /* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */ ) throw _makeTaggedError(auth, "credential-already-in-use" /* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */ , json);
            else if (serverErrorCode === "EMAIL_EXISTS" /* ServerError.EMAIL_EXISTS */ ) throw _makeTaggedError(auth, "email-already-in-use" /* AuthErrorCode.EMAIL_EXISTS */ , json);
            else if (serverErrorCode === "USER_DISABLED" /* ServerError.USER_DISABLED */ ) throw _makeTaggedError(auth, "user-disabled" /* AuthErrorCode.USER_DISABLED */ , json);
            const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, "-");
            if (serverErrorMessage) throw _errorWithCustomMessage(auth, authError, serverErrorMessage);
            else _fail(auth, authError);
        }
    } catch (e) {
        if (e instanceof (0, _util.FirebaseError)) throw e;
        // Changing this to a different error code will log user out when there is a network error
        // because we treat any error other than NETWORK_REQUEST_FAILED as token is invalid.
        // https://github.com/firebase/firebase-js-sdk/blob/4fbc73610d70be4e0852e7de63a39cb7897e8546/packages/auth/src/core/auth/auth_impl.ts#L309-L316
        _fail(auth, "network-request-failed" /* AuthErrorCode.NETWORK_REQUEST_FAILED */ , {
            "message": String(e)
        });
    }
}
async function _performSignInRequest(auth, method, path, request, customErrorMap = {}) {
    const serverResponse = await _performApiRequest(auth, method, path, request, customErrorMap);
    if ("mfaPendingCredential" in serverResponse) _fail(auth, "multi-factor-auth-required" /* AuthErrorCode.MFA_REQUIRED */ , {
        _serverResponse: serverResponse
    });
    return serverResponse;
}
function _getFinalTarget(auth, host, path, query) {
    const base = `${host}${path}?${query}`;
    if (!auth.config.emulator) return `${auth.config.apiScheme}://${base}`;
    return _emulatorUrl(auth.config, base);
}
function _parseEnforcementState(enforcementStateStr) {
    switch(enforcementStateStr){
        case "ENFORCE":
            return "ENFORCE" /* EnforcementState.ENFORCE */ ;
        case "AUDIT":
            return "AUDIT" /* EnforcementState.AUDIT */ ;
        case "OFF":
            return "OFF" /* EnforcementState.OFF */ ;
        default:
            return "ENFORCEMENT_STATE_UNSPECIFIED" /* EnforcementState.ENFORCEMENT_STATE_UNSPECIFIED */ ;
    }
}
class NetworkTimeout {
    constructor(auth){
        this.auth = auth;
        // Node timers and browser timers are fundamentally incompatible, but we
        // don't care about the value here
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.timer = null;
        this.promise = new Promise((_, reject)=>{
            this.timer = setTimeout(()=>{
                return reject(_createError(this.auth, "network-request-failed" /* AuthErrorCode.NETWORK_REQUEST_FAILED */ ));
            }, DEFAULT_API_TIMEOUT_MS.get());
        });
    }
    clearNetworkTimeout() {
        clearTimeout(this.timer);
    }
}
function _makeTaggedError(auth, code, response) {
    const errorParams = {
        appName: auth.name
    };
    if (response.email) errorParams.email = response.email;
    if (response.phoneNumber) errorParams.phoneNumber = response.phoneNumber;
    const error = _createError(auth, code, errorParams);
    // We know customData is defined on error because errorParams is defined
    error.customData._tokenResponse = response;
    return error;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function isV2(grecaptcha) {
    return grecaptcha !== undefined && grecaptcha.getResponse !== undefined;
}
function isEnterprise(grecaptcha) {
    return grecaptcha !== undefined && grecaptcha.enterprise !== undefined;
}
class RecaptchaConfig {
    constructor(response){
        /**
         * The reCAPTCHA site key.
         */ this.siteKey = "";
        /**
         * The list of providers and their enablement status for reCAPTCHA Enterprise.
         */ this.recaptchaEnforcementState = [];
        if (response.recaptchaKey === undefined) throw new Error("recaptchaKey undefined");
        // Example response.recaptchaKey: "projects/proj123/keys/sitekey123"
        this.siteKey = response.recaptchaKey.split("/")[3];
        this.recaptchaEnforcementState = response.recaptchaEnforcementState;
    }
    /**
     * Returns the reCAPTCHA Enterprise enforcement state for the given provider.
     *
     * @param providerStr - The provider whose enforcement state is to be returned.
     * @returns The reCAPTCHA Enterprise enforcement state for the given provider.
     */ getProviderEnforcementState(providerStr) {
        if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0) return null;
        for (const recaptchaEnforcementState of this.recaptchaEnforcementState){
            if (recaptchaEnforcementState.provider && recaptchaEnforcementState.provider === providerStr) return _parseEnforcementState(recaptchaEnforcementState.enforcementState);
        }
        return null;
    }
    /**
     * Returns true if the reCAPTCHA Enterprise enforcement state for the provider is set to ENFORCE or AUDIT.
     *
     * @param providerStr - The provider whose enablement state is to be returned.
     * @returns Whether or not reCAPTCHA Enterprise protection is enabled for the given provider.
     */ isProviderEnabled(providerStr) {
        return this.getProviderEnforcementState(providerStr) === "ENFORCE" /* EnforcementState.ENFORCE */  || this.getProviderEnforcementState(providerStr) === "AUDIT" /* EnforcementState.AUDIT */ ;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function getRecaptchaParams(auth) {
    return (await _performApiRequest(auth, "GET" /* HttpMethod.GET */ , "/v1/recaptchaParams" /* Endpoint.GET_RECAPTCHA_PARAM */ )).recaptchaSiteKey || "";
}
async function getRecaptchaConfig(auth, request) {
    return _performApiRequest(auth, "GET" /* HttpMethod.GET */ , "/v2/recaptchaConfig" /* Endpoint.GET_RECAPTCHA_CONFIG */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function deleteAccount(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:delete" /* Endpoint.DELETE_ACCOUNT */ , request);
}
async function deleteLinkedAccounts(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:update" /* Endpoint.SET_ACCOUNT_INFO */ , request);
}
async function getAccountInfo(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:lookup" /* Endpoint.GET_ACCOUNT_INFO */ , request);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function utcTimestampToDateString(utcTimestamp) {
    if (!utcTimestamp) return undefined;
    try {
        // Convert to date object.
        const date = new Date(Number(utcTimestamp));
        // Test date is valid.
        if (!isNaN(date.getTime())) // Convert to UTC date string.
        return date.toUTCString();
    } catch (e) {
    // Do nothing. undefined will be returned.
    }
    return undefined;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a JSON Web Token (JWT) used to identify the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */ function getIdToken(user, forceRefresh = false) {
    return (0, _util.getModularInstance)(user).getIdToken(forceRefresh);
}
/**
 * Returns a deserialized JSON Web Token (JWT) used to identify the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */ async function getIdTokenResult(user, forceRefresh = false) {
    const userInternal = (0, _util.getModularInstance)(user);
    const token = await userInternal.getIdToken(forceRefresh);
    const claims = _parseToken(token);
    _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
    const firebase = typeof claims.firebase === "object" ? claims.firebase : undefined;
    const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_provider"];
    return {
        claims,
        token,
        authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
        issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
        expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
        signInProvider: signInProvider || null,
        signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_second_factor"]) || null
    };
}
function secondsStringToMilliseconds(seconds) {
    return Number(seconds) * 1000;
}
function _parseToken(token) {
    const [algorithm, payload, signature] = token.split(".");
    if (algorithm === undefined || payload === undefined || signature === undefined) {
        _logError("JWT malformed, contained fewer than 3 sections");
        return null;
    }
    try {
        const decoded = (0, _util.base64Decode)(payload);
        if (!decoded) {
            _logError("Failed to decode base64 JWT payload");
            return null;
        }
        return JSON.parse(decoded);
    } catch (e) {
        _logError("Caught error parsing JWT payload as JSON", e === null || e === void 0 ? void 0 : e.toString());
        return null;
    }
}
/**
 * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
 */ function _tokenExpiresIn(token) {
    const parsedToken = _parseToken(token);
    _assert(parsedToken, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
    _assert(typeof parsedToken.exp !== "undefined", "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
    _assert(typeof parsedToken.iat !== "undefined", "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
    return Number(parsedToken.exp) - Number(parsedToken.iat);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
    if (bypassAuthState) return promise;
    try {
        return await promise;
    } catch (e) {
        if (e instanceof (0, _util.FirebaseError) && isUserInvalidated(e)) {
            if (user.auth.currentUser === user) await user.auth.signOut();
        }
        throw e;
    }
}
function isUserInvalidated({ code }) {
    return code === `auth/${"user-disabled" /* AuthErrorCode.USER_DISABLED */ }` || code === `auth/${"user-token-expired" /* AuthErrorCode.TOKEN_EXPIRED */ }`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ProactiveRefresh {
    constructor(user){
        this.user = user;
        this.isRunning = false;
        // Node timers and browser timers return fundamentally different types.
        // We don't actually care what the value is but TS won't accept unknown and
        // we can't cast properly in both environments.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.timerId = null;
        this.errorBackoff = 30000 /* Duration.RETRY_BACKOFF_MIN */ ;
    }
    _start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.schedule();
    }
    _stop() {
        if (!this.isRunning) return;
        this.isRunning = false;
        if (this.timerId !== null) clearTimeout(this.timerId);
    }
    getInterval(wasError) {
        var _a;
        if (wasError) {
            const interval = this.errorBackoff;
            this.errorBackoff = Math.min(this.errorBackoff * 2, 960000 /* Duration.RETRY_BACKOFF_MAX */ );
            return interval;
        } else {
            // Reset the error backoff
            this.errorBackoff = 30000 /* Duration.RETRY_BACKOFF_MIN */ ;
            const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
            const interval = expTime - Date.now() - 300000 /* Duration.OFFSET */ ;
            return Math.max(0, interval);
        }
    }
    schedule(wasError = false) {
        if (!this.isRunning) // Just in case...
        return;
        const interval = this.getInterval(wasError);
        this.timerId = setTimeout(async ()=>{
            await this.iteration();
        }, interval);
    }
    async iteration() {
        try {
            await this.user.getIdToken(true);
        } catch (e) {
            // Only retry on network errors
            if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"network-request-failed" /* AuthErrorCode.NETWORK_REQUEST_FAILED */ }`) this.schedule(/* wasError */ true);
            return;
        }
        this.schedule();
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class UserMetadata {
    constructor(createdAt, lastLoginAt){
        this.createdAt = createdAt;
        this.lastLoginAt = lastLoginAt;
        this._initializeTime();
    }
    _initializeTime() {
        this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
        this.creationTime = utcTimestampToDateString(this.createdAt);
    }
    _copy(metadata) {
        this.createdAt = metadata.createdAt;
        this.lastLoginAt = metadata.lastLoginAt;
        this._initializeTime();
    }
    toJSON() {
        return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
        };
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _reloadWithoutSaving(user) {
    var _a;
    const auth = user.auth;
    const idToken = await user.getIdToken();
    const response = await _logoutIfInvalidated(user, getAccountInfo(auth, {
        idToken
    }));
    _assert(response === null || response === void 0 ? void 0 : response.users.length, auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
    const coreAccount = response.users[0];
    user._notifyReloadListener(coreAccount);
    const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
    const providerData = mergeProviderData(user.providerData, newProviderData);
    // Preserves the non-nonymous status of the stored user, even if no more
    // credentials (federated or email/password) are linked to the user. If
    // the user was previously anonymous, then use provider data to update.
    // On the other hand, if it was not anonymous before, it should never be
    // considered anonymous now.
    const oldIsAnonymous = user.isAnonymous;
    const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
    const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
    const updates = {
        uid: coreAccount.localId,
        displayName: coreAccount.displayName || null,
        photoURL: coreAccount.photoUrl || null,
        email: coreAccount.email || null,
        emailVerified: coreAccount.emailVerified || false,
        phoneNumber: coreAccount.phoneNumber || null,
        tenantId: coreAccount.tenantId || null,
        providerData,
        metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
        isAnonymous
    };
    Object.assign(user, updates);
}
/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */ async function reload(user) {
    const userInternal = (0, _util.getModularInstance)(user);
    await _reloadWithoutSaving(userInternal);
    // Even though the current user hasn't changed, update
    // current user will trigger a persistence update w/ the
    // new info.
    await userInternal.auth._persistUserIfCurrent(userInternal);
    userInternal.auth._notifyListenersIfCurrent(userInternal);
}
function mergeProviderData(original, newData) {
    const deduped = original.filter((o)=>!newData.some((n)=>n.providerId === o.providerId));
    return [
        ...deduped,
        ...newData
    ];
}
function extractProviderData(providers) {
    return providers.map((_a)=>{
        var { providerId } = _a, provider = (0, _tslib.__rest)(_a, [
            "providerId"
        ]);
        return {
            providerId,
            uid: provider.rawId || "",
            displayName: provider.displayName || null,
            email: provider.email || null,
            phoneNumber: provider.phoneNumber || null,
            photoURL: provider.photoUrl || null
        };
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function requestStsToken(auth, refreshToken) {
    const response = await _performFetchWithErrorHandling(auth, {}, async ()=>{
        const body = (0, _util.querystring)({
            "grant_type": "refresh_token",
            "refresh_token": refreshToken
        }).slice(1);
        const { tokenApiHost, apiKey } = auth.config;
        const url = _getFinalTarget(auth, tokenApiHost, "/v1/token" /* Endpoint.TOKEN */ , `key=${apiKey}`);
        const headers = await auth._getAdditionalHeaders();
        headers["Content-Type" /* HttpHeader.CONTENT_TYPE */ ] = "application/x-www-form-urlencoded";
        return FetchProvider.fetch()(url, {
            method: "POST" /* HttpMethod.POST */ ,
            headers,
            body
        });
    });
    // The response comes back in snake_case. Convert to camel:
    return {
        accessToken: response.access_token,
        expiresIn: response.expires_in,
        refreshToken: response.refresh_token
    };
}
async function revokeToken(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v2/accounts:revokeToken" /* Endpoint.REVOKE_TOKEN */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */ class StsTokenManager {
    constructor(){
        this.refreshToken = null;
        this.accessToken = null;
        this.expirationTime = null;
    }
    get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 30000 /* Buffer.TOKEN_REFRESH */ ;
    }
    updateFromServerResponse(response) {
        _assert(response.idToken, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        _assert(typeof response.idToken !== "undefined", "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        _assert(typeof response.refreshToken !== "undefined", "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
        this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
    }
    updateFromIdToken(idToken) {
        _assert(idToken.length !== 0, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        const expiresIn = _tokenExpiresIn(idToken);
        this.updateTokensAndExpiration(idToken, null, expiresIn);
    }
    async getToken(auth, forceRefresh = false) {
        if (!forceRefresh && this.accessToken && !this.isExpired) return this.accessToken;
        _assert(this.refreshToken, auth, "user-token-expired" /* AuthErrorCode.TOKEN_EXPIRED */ );
        if (this.refreshToken) {
            await this.refresh(auth, this.refreshToken);
            return this.accessToken;
        }
        return null;
    }
    clearRefreshToken() {
        this.refreshToken = null;
    }
    async refresh(auth, oldToken) {
        const { accessToken, refreshToken, expiresIn } = await requestStsToken(auth, oldToken);
        this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
    }
    updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
        this.refreshToken = refreshToken || null;
        this.accessToken = accessToken || null;
        this.expirationTime = Date.now() + expiresInSec * 1000;
    }
    static fromJSON(appName, object) {
        const { refreshToken, accessToken, expirationTime } = object;
        const manager = new StsTokenManager();
        if (refreshToken) {
            _assert(typeof refreshToken === "string", "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ , {
                appName
            });
            manager.refreshToken = refreshToken;
        }
        if (accessToken) {
            _assert(typeof accessToken === "string", "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ , {
                appName
            });
            manager.accessToken = accessToken;
        }
        if (expirationTime) {
            _assert(typeof expirationTime === "number", "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ , {
                appName
            });
            manager.expirationTime = expirationTime;
        }
        return manager;
    }
    toJSON() {
        return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
        };
    }
    _assign(stsTokenManager) {
        this.accessToken = stsTokenManager.accessToken;
        this.refreshToken = stsTokenManager.refreshToken;
        this.expirationTime = stsTokenManager.expirationTime;
    }
    _clone() {
        return Object.assign(new StsTokenManager(), this.toJSON());
    }
    _performRefresh() {
        return debugFail("not implemented");
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function assertStringOrUndefined(assertion, appName) {
    _assert(typeof assertion === "string" || typeof assertion === "undefined", "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ , {
        appName
    });
}
class UserImpl {
    constructor(_a){
        var { uid, auth, stsTokenManager } = _a, opt = (0, _tslib.__rest)(_a, [
            "uid",
            "auth",
            "stsTokenManager"
        ]);
        // For the user object, provider is always Firebase.
        this.providerId = "firebase" /* ProviderId.FIREBASE */ ;
        this.proactiveRefresh = new ProactiveRefresh(this);
        this.reloadUserInfo = null;
        this.reloadListener = null;
        this.uid = uid;
        this.auth = auth;
        this.stsTokenManager = stsTokenManager;
        this.accessToken = stsTokenManager.accessToken;
        this.displayName = opt.displayName || null;
        this.email = opt.email || null;
        this.emailVerified = opt.emailVerified || false;
        this.phoneNumber = opt.phoneNumber || null;
        this.photoURL = opt.photoURL || null;
        this.isAnonymous = opt.isAnonymous || false;
        this.tenantId = opt.tenantId || null;
        this.providerData = opt.providerData ? [
            ...opt.providerData
        ] : [];
        this.metadata = new UserMetadata(opt.createdAt || undefined, opt.lastLoginAt || undefined);
    }
    async getIdToken(forceRefresh) {
        const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
        _assert(accessToken, this.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        if (this.accessToken !== accessToken) {
            this.accessToken = accessToken;
            await this.auth._persistUserIfCurrent(this);
            this.auth._notifyListenersIfCurrent(this);
        }
        return accessToken;
    }
    getIdTokenResult(forceRefresh) {
        return getIdTokenResult(this, forceRefresh);
    }
    reload() {
        return reload(this);
    }
    _assign(user) {
        if (this === user) return;
        _assert(this.uid === user.uid, this.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        this.displayName = user.displayName;
        this.photoURL = user.photoURL;
        this.email = user.email;
        this.emailVerified = user.emailVerified;
        this.phoneNumber = user.phoneNumber;
        this.isAnonymous = user.isAnonymous;
        this.tenantId = user.tenantId;
        this.providerData = user.providerData.map((userInfo)=>Object.assign({}, userInfo));
        this.metadata._copy(user.metadata);
        this.stsTokenManager._assign(user.stsTokenManager);
    }
    _clone(auth) {
        const newUser = new UserImpl(Object.assign(Object.assign({}, this), {
            auth,
            stsTokenManager: this.stsTokenManager._clone()
        }));
        newUser.metadata._copy(this.metadata);
        return newUser;
    }
    _onReload(callback) {
        // There should only ever be one listener, and that is a single instance of MultiFactorUser
        _assert(!this.reloadListener, this.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        this.reloadListener = callback;
        if (this.reloadUserInfo) {
            this._notifyReloadListener(this.reloadUserInfo);
            this.reloadUserInfo = null;
        }
    }
    _notifyReloadListener(userInfo) {
        if (this.reloadListener) this.reloadListener(userInfo);
        else // If no listener is subscribed yet, save the result so it's available when they do subscribe
        this.reloadUserInfo = userInfo;
    }
    _startProactiveRefresh() {
        this.proactiveRefresh._start();
    }
    _stopProactiveRefresh() {
        this.proactiveRefresh._stop();
    }
    async _updateTokensIfNecessary(response, reload = false) {
        let tokensRefreshed = false;
        if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
            this.stsTokenManager.updateFromServerResponse(response);
            tokensRefreshed = true;
        }
        if (reload) await _reloadWithoutSaving(this);
        await this.auth._persistUserIfCurrent(this);
        if (tokensRefreshed) this.auth._notifyListenersIfCurrent(this);
    }
    async delete() {
        if ((0, _app._isFirebaseServerApp)(this.auth.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this.auth));
        const idToken = await this.getIdToken();
        await _logoutIfInvalidated(this, deleteAccount(this.auth, {
            idToken
        }));
        this.stsTokenManager.clearRefreshToken();
        // TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
        //       cancels pending actions...
        return this.auth.signOut();
    }
    toJSON() {
        return Object.assign(Object.assign({
            uid: this.uid,
            email: this.email || undefined,
            emailVerified: this.emailVerified,
            displayName: this.displayName || undefined,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || undefined,
            phoneNumber: this.phoneNumber || undefined,
            tenantId: this.tenantId || undefined,
            providerData: this.providerData.map((userInfo)=>Object.assign({}, userInfo)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            // Redirect event ID must be maintained in case there is a pending
            // redirect event.
            _redirectEventId: this._redirectEventId
        }, this.metadata.toJSON()), {
            // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
            apiKey: this.auth.config.apiKey,
            appName: this.auth.name
        });
    }
    get refreshToken() {
        return this.stsTokenManager.refreshToken || "";
    }
    static _fromJSON(auth, object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : undefined;
        const email = (_b = object.email) !== null && _b !== void 0 ? _b : undefined;
        const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : undefined;
        const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : undefined;
        const tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : undefined;
        const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : undefined;
        const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : undefined;
        const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : undefined;
        const { uid, emailVerified, isAnonymous, providerData, stsTokenManager: plainObjectTokenManager } = object;
        _assert(uid && plainObjectTokenManager, auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
        _assert(typeof uid === "string", auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        assertStringOrUndefined(displayName, auth.name);
        assertStringOrUndefined(email, auth.name);
        _assert(typeof emailVerified === "boolean", auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        _assert(typeof isAnonymous === "boolean", auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        assertStringOrUndefined(phoneNumber, auth.name);
        assertStringOrUndefined(photoURL, auth.name);
        assertStringOrUndefined(tenantId, auth.name);
        assertStringOrUndefined(_redirectEventId, auth.name);
        assertStringOrUndefined(createdAt, auth.name);
        assertStringOrUndefined(lastLoginAt, auth.name);
        const user = new UserImpl({
            uid,
            auth,
            email,
            emailVerified,
            displayName,
            isAnonymous,
            photoURL,
            phoneNumber,
            tenantId,
            stsTokenManager,
            createdAt,
            lastLoginAt
        });
        if (providerData && Array.isArray(providerData)) user.providerData = providerData.map((userInfo)=>Object.assign({}, userInfo));
        if (_redirectEventId) user._redirectEventId = _redirectEventId;
        return user;
    }
    /**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */ static async _fromIdTokenResponse(auth, idTokenResponse, isAnonymous = false) {
        const stsTokenManager = new StsTokenManager();
        stsTokenManager.updateFromServerResponse(idTokenResponse);
        // Initialize the Firebase Auth user.
        const user = new UserImpl({
            uid: idTokenResponse.localId,
            auth,
            stsTokenManager,
            isAnonymous
        });
        // Updates the user info and data and resolves with a user instance.
        await _reloadWithoutSaving(user);
        return user;
    }
    /**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */ static async _fromGetAccountInfoResponse(auth, response, idToken) {
        const coreAccount = response.users[0];
        _assert(coreAccount.localId !== undefined, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        const providerData = coreAccount.providerUserInfo !== undefined ? extractProviderData(coreAccount.providerUserInfo) : [];
        const isAnonymous = !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
        const stsTokenManager = new StsTokenManager();
        stsTokenManager.updateFromIdToken(idToken);
        // Initialize the Firebase Auth user.
        const user = new UserImpl({
            uid: coreAccount.localId,
            auth,
            stsTokenManager,
            isAnonymous
        });
        // update the user with data from the GetAccountInfo response.
        const updates = {
            uid: coreAccount.localId,
            displayName: coreAccount.displayName || null,
            photoURL: coreAccount.photoUrl || null,
            email: coreAccount.email || null,
            emailVerified: coreAccount.emailVerified || false,
            phoneNumber: coreAccount.phoneNumber || null,
            tenantId: coreAccount.tenantId || null,
            providerData,
            metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
            isAnonymous: !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length)
        };
        Object.assign(user, updates);
        return user;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const instanceCache = new Map();
function _getInstance(cls) {
    debugAssert(cls instanceof Function, "Expected a class definition");
    let instance = instanceCache.get(cls);
    if (instance) {
        debugAssert(instance instanceof cls, "Instance stored in cache mismatched with class");
        return instance;
    }
    instance = new cls();
    instanceCache.set(cls, instance);
    return instance;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class InMemoryPersistence {
    constructor(){
        this.type = "NONE" /* PersistenceType.NONE */ ;
        this.storage = {};
    }
    async _isAvailable() {
        return true;
    }
    async _set(key, value) {
        this.storage[key] = value;
    }
    async _get(key) {
        const value = this.storage[key];
        return value === undefined ? null : value;
    }
    async _remove(key) {
        delete this.storage[key];
    }
    _addListener(_key, _listener) {
        // Listeners are not supported for in-memory storage since it cannot be shared across windows/workers
        return;
    }
    _removeListener(_key, _listener) {
        // Listeners are not supported for in-memory storage since it cannot be shared across windows/workers
        return;
    }
}
InMemoryPersistence.type = "NONE";
/**
 * An implementation of {@link Persistence} of type 'NONE'.
 *
 * @public
 */ const inMemoryPersistence = InMemoryPersistence;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _persistenceKeyName(key, apiKey, appName) {
    return `${"firebase" /* Namespace.PERSISTENCE */ }:${key}:${apiKey}:${appName}`;
}
class PersistenceUserManager {
    constructor(persistence, auth, userKey){
        this.persistence = persistence;
        this.auth = auth;
        this.userKey = userKey;
        const { config, name } = this.auth;
        this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name);
        this.fullPersistenceKey = _persistenceKeyName("persistence" /* KeyName.PERSISTENCE_USER */ , config.apiKey, name);
        this.boundEventHandler = auth._onStorageEvent.bind(auth);
        this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
    }
    setCurrentUser(user) {
        return this.persistence._set(this.fullUserKey, user.toJSON());
    }
    async getCurrentUser() {
        const blob = await this.persistence._get(this.fullUserKey);
        return blob ? UserImpl._fromJSON(this.auth, blob) : null;
    }
    removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey);
    }
    savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
    }
    async setPersistence(newPersistence) {
        if (this.persistence === newPersistence) return;
        const currentUser = await this.getCurrentUser();
        await this.removeCurrentUser();
        this.persistence = newPersistence;
        if (currentUser) return this.setCurrentUser(currentUser);
    }
    delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
    }
    static async create(auth, persistenceHierarchy, userKey = "authUser" /* KeyName.AUTH_USER */ ) {
        if (!persistenceHierarchy.length) return new PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey);
        // Eliminate any persistences that are not available
        const availablePersistences = (await Promise.all(persistenceHierarchy.map(async (persistence)=>{
            if (await persistence._isAvailable()) return persistence;
            return undefined;
        }))).filter((persistence)=>persistence);
        // Fall back to the first persistence listed, or in memory if none available
        let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
        const key = _persistenceKeyName(userKey, auth.config.apiKey, auth.name);
        // Pull out the existing user, setting the chosen persistence to that
        // persistence if the user exists.
        let userToMigrate = null;
        // Note, here we check for a user in _all_ persistences, not just the
        // ones deemed available. If we can migrate a user out of a broken
        // persistence, we will (but only if that persistence supports migration).
        for (const persistence of persistenceHierarchy)try {
            const blob = await persistence._get(key);
            if (blob) {
                const user = UserImpl._fromJSON(auth, blob); // throws for unparsable blob (wrong format)
                if (persistence !== selectedPersistence) userToMigrate = user;
                selectedPersistence = persistence;
                break;
            }
        } catch (_a) {}
        // If we find the user in a persistence that does support migration, use
        // that migration path (of only persistences that support migration)
        const migrationHierarchy = availablePersistences.filter((p)=>p._shouldAllowMigration);
        // If the persistence does _not_ allow migration, just finish off here
        if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) return new PersistenceUserManager(selectedPersistence, auth, userKey);
        selectedPersistence = migrationHierarchy[0];
        if (userToMigrate) // This normally shouldn't throw since chosenPersistence.isAvailable() is true, but if it does
        // we'll just let it bubble to surface the error.
        await selectedPersistence._set(key, userToMigrate.toJSON());
        // Attempt to clear the key in other persistences but ignore errors. This helps prevent issues
        // such as users getting stuck with a previous account after signing out and refreshing the tab.
        await Promise.all(persistenceHierarchy.map(async (persistence)=>{
            if (persistence !== selectedPersistence) try {
                await persistence._remove(key);
            } catch (_a) {}
        }));
        return new PersistenceUserManager(selectedPersistence, auth, userKey);
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Determine the browser for the purposes of reporting usage to the API
 */ function _getBrowserName(userAgent) {
    const ua = userAgent.toLowerCase();
    if (ua.includes("opera/") || ua.includes("opr/") || ua.includes("opios/")) return "Opera" /* BrowserName.OPERA */ ;
    else if (_isIEMobile(ua)) // Windows phone IEMobile browser.
    return "IEMobile" /* BrowserName.IEMOBILE */ ;
    else if (ua.includes("msie") || ua.includes("trident/")) return "IE" /* BrowserName.IE */ ;
    else if (ua.includes("edge/")) return "Edge" /* BrowserName.EDGE */ ;
    else if (_isFirefox(ua)) return "Firefox" /* BrowserName.FIREFOX */ ;
    else if (ua.includes("silk/")) return "Silk" /* BrowserName.SILK */ ;
    else if (_isBlackBerry(ua)) // Blackberry browser.
    return "Blackberry" /* BrowserName.BLACKBERRY */ ;
    else if (_isWebOS(ua)) // WebOS default browser.
    return "Webos" /* BrowserName.WEBOS */ ;
    else if (_isSafari(ua)) return "Safari" /* BrowserName.SAFARI */ ;
    else if ((ua.includes("chrome/") || _isChromeIOS(ua)) && !ua.includes("edge/")) return "Chrome" /* BrowserName.CHROME */ ;
    else if (_isAndroid(ua)) // Android stock browser.
    return "Android" /* BrowserName.ANDROID */ ;
    else {
        // Most modern browsers have name/version at end of user agent string.
        const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
        const matches = userAgent.match(re);
        if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) return matches[1];
    }
    return "Other" /* BrowserName.OTHER */ ;
}
function _isFirefox(ua = (0, _util.getUA)()) {
    return /firefox\//i.test(ua);
}
function _isSafari(userAgent = (0, _util.getUA)()) {
    const ua = userAgent.toLowerCase();
    return ua.includes("safari/") && !ua.includes("chrome/") && !ua.includes("crios/") && !ua.includes("android");
}
function _isChromeIOS(ua = (0, _util.getUA)()) {
    return /crios\//i.test(ua);
}
function _isIEMobile(ua = (0, _util.getUA)()) {
    return /iemobile/i.test(ua);
}
function _isAndroid(ua = (0, _util.getUA)()) {
    return /android/i.test(ua);
}
function _isBlackBerry(ua = (0, _util.getUA)()) {
    return /blackberry/i.test(ua);
}
function _isWebOS(ua = (0, _util.getUA)()) {
    return /webos/i.test(ua);
}
function _isIOS(ua = (0, _util.getUA)()) {
    return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
}
function _isIOS7Or8(ua = (0, _util.getUA)()) {
    return /(iPad|iPhone|iPod).*OS 7_\d/i.test(ua) || /(iPad|iPhone|iPod).*OS 8_\d/i.test(ua);
}
function _isIOSStandalone(ua = (0, _util.getUA)()) {
    var _a;
    return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
}
function _isIE10() {
    return (0, _util.isIE)() && document.documentMode === 10;
}
function _isMobileBrowser(ua = (0, _util.getUA)()) {
    // TODO: implement getBrowserName equivalent for OS.
    return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
}
function _isIframe() {
    try {
        // Check that the current window is not the top window.
        // If so, return true.
        return !!(window && window !== window.top);
    } catch (e) {
        return false;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /*
 * Determine the SDK version string
 */ function _getClientVersion(clientPlatform, frameworks = []) {
    let reportedPlatform;
    switch(clientPlatform){
        case "Browser" /* ClientPlatform.BROWSER */ :
            // In a browser environment, report the browser name.
            reportedPlatform = _getBrowserName((0, _util.getUA)());
            break;
        case "Worker" /* ClientPlatform.WORKER */ :
            // Technically a worker runs from a browser but we need to differentiate a
            // worker from a browser.
            // For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
            reportedPlatform = `${_getBrowserName((0, _util.getUA)())}-${clientPlatform}`;
            break;
        default:
            reportedPlatform = clientPlatform;
    }
    const reportedFrameworks = frameworks.length ? frameworks.join(",") : "FirebaseCore-web"; /* default value if no other framework is used */ 
    return `${reportedPlatform}/${"JsCore" /* ClientImplementation.CORE */ }/${0, _app.SDK_VERSION}/${reportedFrameworks}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AuthMiddlewareQueue {
    constructor(auth){
        this.auth = auth;
        this.queue = [];
    }
    pushCallback(callback, onAbort) {
        // The callback could be sync or async. Wrap it into a
        // function that is always async.
        const wrappedCallback = (user)=>new Promise((resolve, reject)=>{
                try {
                    const result = callback(user);
                    // Either resolve with existing promise or wrap a non-promise
                    // return value into a promise.
                    resolve(result);
                } catch (e) {
                    // Sync callback throws.
                    reject(e);
                }
            });
        // Attach the onAbort if present
        wrappedCallback.onAbort = onAbort;
        this.queue.push(wrappedCallback);
        const index = this.queue.length - 1;
        return ()=>{
            // Unsubscribe. Replace with no-op. Do not remove from array, or it will disturb
            // indexing of other elements.
            this.queue[index] = ()=>Promise.resolve();
        };
    }
    async runMiddleware(nextUser) {
        if (this.auth.currentUser === nextUser) return;
        // While running the middleware, build a temporary stack of onAbort
        // callbacks to call if one middleware callback rejects.
        const onAbortStack = [];
        try {
            for (const beforeStateCallback of this.queue){
                await beforeStateCallback(nextUser);
                // Only push the onAbort if the callback succeeds
                if (beforeStateCallback.onAbort) onAbortStack.push(beforeStateCallback.onAbort);
            }
        } catch (e) {
            // Run all onAbort, with separate try/catch to ignore any errors and
            // continue
            onAbortStack.reverse();
            for (const onAbort of onAbortStack)try {
                onAbort();
            } catch (_) {
            /* swallow error */ }
            throw this.auth._errorFactory.create("login-blocked" /* AuthErrorCode.LOGIN_BLOCKED */ , {
                originalMessage: e === null || e === void 0 ? void 0 : e.message
            });
        }
    }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Fetches the password policy for the currently set tenant or the project if no tenant is set.
 *
 * @param auth Auth object.
 * @param request Password policy request.
 * @returns Password policy response.
 */ async function _getPasswordPolicy(auth, request = {}) {
    return _performApiRequest(auth, "GET" /* HttpMethod.GET */ , "/v2/passwordPolicy" /* Endpoint.GET_PASSWORD_POLICY */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Minimum min password length enforced by the backend, even if no minimum length is set.
const MINIMUM_MIN_PASSWORD_LENGTH = 6;
/**
 * Stores password policy requirements and provides password validation against the policy.
 *
 * @internal
 */ class PasswordPolicyImpl {
    constructor(response){
        var _a, _b, _c, _d;
        // Only include custom strength options defined in the response.
        const responseOptions = response.customStrengthOptions;
        this.customStrengthOptions = {};
        // TODO: Remove once the backend is updated to include the minimum min password length instead of undefined when there is no minimum length set.
        this.customStrengthOptions.minPasswordLength = (_a = responseOptions.minPasswordLength) !== null && _a !== void 0 ? _a : MINIMUM_MIN_PASSWORD_LENGTH;
        if (responseOptions.maxPasswordLength) this.customStrengthOptions.maxPasswordLength = responseOptions.maxPasswordLength;
        if (responseOptions.containsLowercaseCharacter !== undefined) this.customStrengthOptions.containsLowercaseLetter = responseOptions.containsLowercaseCharacter;
        if (responseOptions.containsUppercaseCharacter !== undefined) this.customStrengthOptions.containsUppercaseLetter = responseOptions.containsUppercaseCharacter;
        if (responseOptions.containsNumericCharacter !== undefined) this.customStrengthOptions.containsNumericCharacter = responseOptions.containsNumericCharacter;
        if (responseOptions.containsNonAlphanumericCharacter !== undefined) this.customStrengthOptions.containsNonAlphanumericCharacter = responseOptions.containsNonAlphanumericCharacter;
        this.enforcementState = response.enforcementState;
        if (this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED") this.enforcementState = "OFF";
        // Use an empty string if no non-alphanumeric characters are specified in the response.
        this.allowedNonAlphanumericCharacters = (_c = (_b = response.allowedNonAlphanumericCharacters) === null || _b === void 0 ? void 0 : _b.join("")) !== null && _c !== void 0 ? _c : "";
        this.forceUpgradeOnSignin = (_d = response.forceUpgradeOnSignin) !== null && _d !== void 0 ? _d : false;
        this.schemaVersion = response.schemaVersion;
    }
    validatePassword(password) {
        var _a, _b, _c, _d, _e, _f;
        const status = {
            isValid: true,
            passwordPolicy: this
        };
        // Check the password length and character options.
        this.validatePasswordLengthOptions(password, status);
        this.validatePasswordCharacterOptions(password, status);
        // Combine the status into single isValid property.
        status.isValid && (status.isValid = (_a = status.meetsMinPasswordLength) !== null && _a !== void 0 ? _a : true);
        status.isValid && (status.isValid = (_b = status.meetsMaxPasswordLength) !== null && _b !== void 0 ? _b : true);
        status.isValid && (status.isValid = (_c = status.containsLowercaseLetter) !== null && _c !== void 0 ? _c : true);
        status.isValid && (status.isValid = (_d = status.containsUppercaseLetter) !== null && _d !== void 0 ? _d : true);
        status.isValid && (status.isValid = (_e = status.containsNumericCharacter) !== null && _e !== void 0 ? _e : true);
        status.isValid && (status.isValid = (_f = status.containsNonAlphanumericCharacter) !== null && _f !== void 0 ? _f : true);
        return status;
    }
    /**
     * Validates that the password meets the length options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */ validatePasswordLengthOptions(password, status) {
        const minPasswordLength = this.customStrengthOptions.minPasswordLength;
        const maxPasswordLength = this.customStrengthOptions.maxPasswordLength;
        if (minPasswordLength) status.meetsMinPasswordLength = password.length >= minPasswordLength;
        if (maxPasswordLength) status.meetsMaxPasswordLength = password.length <= maxPasswordLength;
    }
    /**
     * Validates that the password meets the character options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */ validatePasswordCharacterOptions(password, status) {
        // Assign statuses for requirements even if the password is an empty string.
        this.updatePasswordCharacterOptionsStatuses(status, /* containsLowercaseCharacter= */ false, /* containsUppercaseCharacter= */ false, /* containsNumericCharacter= */ false, /* containsNonAlphanumericCharacter= */ false);
        let passwordChar;
        for(let i = 0; i < password.length; i++){
            passwordChar = password.charAt(i);
            this.updatePasswordCharacterOptionsStatuses(status, /* containsLowercaseCharacter= */ passwordChar >= "a" && passwordChar <= "z", /* containsUppercaseCharacter= */ passwordChar >= "A" && passwordChar <= "Z", /* containsNumericCharacter= */ passwordChar >= "0" && passwordChar <= "9", /* containsNonAlphanumericCharacter= */ this.allowedNonAlphanumericCharacters.includes(passwordChar));
        }
    }
    /**
     * Updates the running validation status with the statuses for the character options.
     * Expected to be called each time a character is processed to update each option status
     * based on the current character.
     *
     * @param status Validation status.
     * @param containsLowercaseCharacter Whether the character is a lowercase letter.
     * @param containsUppercaseCharacter Whether the character is an uppercase letter.
     * @param containsNumericCharacter Whether the character is a numeric character.
     * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
     */ updatePasswordCharacterOptionsStatuses(status, containsLowercaseCharacter, containsUppercaseCharacter, containsNumericCharacter, containsNonAlphanumericCharacter) {
        if (this.customStrengthOptions.containsLowercaseLetter) status.containsLowercaseLetter || (status.containsLowercaseLetter = containsLowercaseCharacter);
        if (this.customStrengthOptions.containsUppercaseLetter) status.containsUppercaseLetter || (status.containsUppercaseLetter = containsUppercaseCharacter);
        if (this.customStrengthOptions.containsNumericCharacter) status.containsNumericCharacter || (status.containsNumericCharacter = containsNumericCharacter);
        if (this.customStrengthOptions.containsNonAlphanumericCharacter) status.containsNonAlphanumericCharacter || (status.containsNonAlphanumericCharacter = containsNonAlphanumericCharacter);
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AuthImpl {
    constructor(app, heartbeatServiceProvider, appCheckServiceProvider, config){
        this.app = app;
        this.heartbeatServiceProvider = heartbeatServiceProvider;
        this.appCheckServiceProvider = appCheckServiceProvider;
        this.config = config;
        this.currentUser = null;
        this.emulatorConfig = null;
        this.operations = Promise.resolve();
        this.authStateSubscription = new Subscription(this);
        this.idTokenSubscription = new Subscription(this);
        this.beforeStateQueue = new AuthMiddlewareQueue(this);
        this.redirectUser = null;
        this.isProactiveRefreshEnabled = false;
        this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1;
        // Any network calls will set this to true and prevent subsequent emulator
        // initialization
        this._canInitEmulator = true;
        this._isInitialized = false;
        this._deleted = false;
        this._initializationPromise = null;
        this._popupRedirectResolver = null;
        this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
        this._agentRecaptchaConfig = null;
        this._tenantRecaptchaConfigs = {};
        this._projectPasswordPolicy = null;
        this._tenantPasswordPolicies = {};
        // Tracks the last notified UID for state change listeners to prevent
        // repeated calls to the callbacks. Undefined means it's never been
        // called, whereas null means it's been called with a signed out user
        this.lastNotifiedUid = undefined;
        this.languageCode = null;
        this.tenantId = null;
        this.settings = {
            appVerificationDisabledForTesting: false
        };
        this.frameworks = [];
        this.name = app.name;
        this.clientVersion = config.sdkClientVersion;
    }
    _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
        if (popupRedirectResolver) this._popupRedirectResolver = _getInstance(popupRedirectResolver);
        // Have to check for app deletion throughout initialization (after each
        // promise resolution)
        this._initializationPromise = this.queue(async ()=>{
            var _a, _b;
            if (this._deleted) return;
            this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
            if (this._deleted) return;
            // Initialize the resolver early if necessary (only applicable to web:
            // this will cause the iframe to load immediately in certain cases)
            if ((_a = this._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) // If this fails, don't halt auth loading
            try {
                await this._popupRedirectResolver._initialize(this);
            } catch (e) {
            /* Ignore the error */ }
            await this.initializeCurrentUser(popupRedirectResolver);
            this.lastNotifiedUid = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;
            if (this._deleted) return;
            this._isInitialized = true;
        });
        return this._initializationPromise;
    }
    /**
     * If the persistence is changed in another window, the user manager will let us know
     */ async _onStorageEvent() {
        if (this._deleted) return;
        const user = await this.assertedPersistence.getCurrentUser();
        if (!this.currentUser && !user) // No change, do nothing (was signed out and remained signed out).
        return;
        // If the same user is to be synchronized.
        if (this.currentUser && user && this.currentUser.uid === user.uid) {
            // Data update, simply copy data changes.
            this._currentUser._assign(user);
            // If tokens changed from previous user tokens, this will trigger
            // notifyAuthListeners_.
            await this.currentUser.getIdToken();
            return;
        }
        // Update current Auth state. Either a new login or logout.
        // Skip blocking callbacks, they should not apply to a change in another tab.
        await this._updateCurrentUser(user, /* skipBeforeStateCallbacks */ true);
    }
    async initializeCurrentUserFromIdToken(idToken) {
        try {
            const response = await getAccountInfo(this, {
                idToken
            });
            const user = await UserImpl._fromGetAccountInfoResponse(this, response, idToken);
            await this.directlySetCurrentUser(user);
        } catch (err) {
            console.warn("FirebaseServerApp could not login user with provided authIdToken: ", err);
            await this.directlySetCurrentUser(null);
        }
    }
    async initializeCurrentUser(popupRedirectResolver) {
        var _a;
        if ((0, _app._isFirebaseServerApp)(this.app)) {
            const idToken = this.app.settings.authIdToken;
            if (idToken) // Start the auth operation in the next tick to allow a moment for the customer's app to
            // attach an emulator, if desired.
            return new Promise((resolve)=>{
                setTimeout(()=>this.initializeCurrentUserFromIdToken(idToken).then(resolve, resolve));
            });
            else return this.directlySetCurrentUser(null);
        }
        // First check to see if we have a pending redirect event.
        const previouslyStoredUser = await this.assertedPersistence.getCurrentUser();
        let futureCurrentUser = previouslyStoredUser;
        let needsTocheckMiddleware = false;
        if (popupRedirectResolver && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
            const storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
            const result = await this.tryRedirectSignIn(popupRedirectResolver);
            // If the stored user (i.e. the old "currentUser") has a redirectId that
            // matches the redirect user, then we want to initially sign in with the
            // new user object from result.
            // TODO(samgho): More thoroughly test all of this
            if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
                futureCurrentUser = result.user;
                needsTocheckMiddleware = true;
            }
        }
        // If no user in persistence, there is no current user. Set to null.
        if (!futureCurrentUser) return this.directlySetCurrentUser(null);
        if (!futureCurrentUser._redirectEventId) {
            // This isn't a redirect link operation, we can reload and bail.
            // First though, ensure that we check the middleware is happy.
            if (needsTocheckMiddleware) try {
                await this.beforeStateQueue.runMiddleware(futureCurrentUser);
            } catch (e) {
                futureCurrentUser = previouslyStoredUser;
                // We know this is available since the bit is only set when the
                // resolver is available
                this._popupRedirectResolver._overrideRedirectResult(this, ()=>Promise.reject(e));
            }
            if (futureCurrentUser) return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
            else return this.directlySetCurrentUser(null);
        }
        _assert(this._popupRedirectResolver, this, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        await this.getOrInitRedirectPersistenceManager();
        // If the redirect user's event ID matches the current user's event ID,
        // DO NOT reload the current user, otherwise they'll be cleared from storage.
        // This is important for the reauthenticateWithRedirect() flow.
        if (this.redirectUser && this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) return this.directlySetCurrentUser(futureCurrentUser);
        return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
    }
    async tryRedirectSignIn(redirectResolver) {
        // The redirect user needs to be checked (and signed in if available)
        // during auth initialization. All of the normal sign in and link/reauth
        // flows call back into auth and push things onto the promise queue. We
        // need to await the result of the redirect sign in *inside the promise
        // queue*. This presents a problem: we run into deadlock. See:
        //    ┌> [Initialization] ─────┐
        //    ┌> [<other queue tasks>] │
        //    └─ [getRedirectResult] <─┘
        //    where [] are tasks on the queue and arrows denote awaits
        // Initialization will never complete because it's waiting on something
        // that's waiting for initialization to complete!
        //
        // Instead, this method calls getRedirectResult() (stored in
        // _completeRedirectFn) with an optional parameter that instructs all of
        // the underlying auth operations to skip anything that mutates auth state.
        let result = null;
        try {
            // We know this._popupRedirectResolver is set since redirectResolver
            // is passed in. The _completeRedirectFn expects the unwrapped extern.
            result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
        } catch (e) {
            // Swallow any errors here; the code can retrieve them in
            // getRedirectResult().
            await this._setRedirectUser(null);
        }
        return result;
    }
    async reloadAndSetCurrentUserOrClear(user) {
        try {
            await _reloadWithoutSaving(user);
        } catch (e) {
            if ((e === null || e === void 0 ? void 0 : e.code) !== `auth/${"network-request-failed" /* AuthErrorCode.NETWORK_REQUEST_FAILED */ }`) // Something's wrong with the user's token. Log them out and remove
            // them from storage
            return this.directlySetCurrentUser(null);
        }
        return this.directlySetCurrentUser(user);
    }
    useDeviceLanguage() {
        this.languageCode = _getUserLanguage();
    }
    async _delete() {
        this._deleted = true;
    }
    async updateCurrentUser(userExtern) {
        if ((0, _app._isFirebaseServerApp)(this.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
        // The public updateCurrentUser method needs to make a copy of the user,
        // and also check that the project matches
        const user = userExtern ? (0, _util.getModularInstance)(userExtern) : null;
        if (user) _assert(user.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token" /* AuthErrorCode.INVALID_AUTH */ );
        return this._updateCurrentUser(user && user._clone(this));
    }
    async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
        if (this._deleted) return;
        if (user) _assert(this.tenantId === user.tenantId, this, "tenant-id-mismatch" /* AuthErrorCode.TENANT_ID_MISMATCH */ );
        if (!skipBeforeStateCallbacks) await this.beforeStateQueue.runMiddleware(user);
        return this.queue(async ()=>{
            await this.directlySetCurrentUser(user);
            this.notifyAuthListeners();
        });
    }
    async signOut() {
        if ((0, _app._isFirebaseServerApp)(this.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
        // Run first, to block _setRedirectUser() if any callbacks fail.
        await this.beforeStateQueue.runMiddleware(null);
        // Clear the redirect user when signOut is called
        if (this.redirectPersistenceManager || this._popupRedirectResolver) await this._setRedirectUser(null);
        // Prevent callbacks from being called again in _updateCurrentUser, as
        // they were already called in the first line.
        return this._updateCurrentUser(null, /* skipBeforeStateCallbacks */ true);
    }
    setPersistence(persistence) {
        if ((0, _app._isFirebaseServerApp)(this.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
        return this.queue(async ()=>{
            await this.assertedPersistence.setPersistence(_getInstance(persistence));
        });
    }
    _getRecaptchaConfig() {
        if (this.tenantId == null) return this._agentRecaptchaConfig;
        else return this._tenantRecaptchaConfigs[this.tenantId];
    }
    async validatePassword(password) {
        if (!this._getPasswordPolicyInternal()) await this._updatePasswordPolicy();
        // Password policy will be defined after fetching.
        const passwordPolicy = this._getPasswordPolicyInternal();
        // Check that the policy schema version is supported by the SDK.
        // TODO: Update this logic to use a max supported policy schema version once we have multiple schema versions.
        if (passwordPolicy.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION) return Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version" /* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */ , {}));
        return passwordPolicy.validatePassword(password);
    }
    _getPasswordPolicyInternal() {
        if (this.tenantId === null) return this._projectPasswordPolicy;
        else return this._tenantPasswordPolicies[this.tenantId];
    }
    async _updatePasswordPolicy() {
        const response = await _getPasswordPolicy(this);
        const passwordPolicy = new PasswordPolicyImpl(response);
        if (this.tenantId === null) this._projectPasswordPolicy = passwordPolicy;
        else this._tenantPasswordPolicies[this.tenantId] = passwordPolicy;
    }
    _getPersistence() {
        return this.assertedPersistence.persistence.type;
    }
    _updateErrorMap(errorMap) {
        this._errorFactory = new (0, _util.ErrorFactory)("auth", "Firebase", errorMap());
    }
    onAuthStateChanged(nextOrObserver, error, completed) {
        return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
    }
    beforeAuthStateChanged(callback, onAbort) {
        return this.beforeStateQueue.pushCallback(callback, onAbort);
    }
    onIdTokenChanged(nextOrObserver, error, completed) {
        return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
    }
    authStateReady() {
        return new Promise((resolve, reject)=>{
            if (this.currentUser) resolve();
            else {
                const unsubscribe = this.onAuthStateChanged(()=>{
                    unsubscribe();
                    resolve();
                }, reject);
            }
        });
    }
    /**
     * Revokes the given access token. Currently only supports Apple OAuth access tokens.
     */ async revokeAccessToken(token) {
        if (this.currentUser) {
            const idToken = await this.currentUser.getIdToken();
            // Generalize this to accept other providers once supported.
            const request = {
                providerId: "apple.com",
                tokenType: "ACCESS_TOKEN" /* TokenType.ACCESS_TOKEN */ ,
                token,
                idToken
            };
            if (this.tenantId != null) request.tenantId = this.tenantId;
            await revokeToken(this, request);
        }
    }
    toJSON() {
        var _a;
        return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
        };
    }
    async _setRedirectUser(user, popupRedirectResolver) {
        const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
        return user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user);
    }
    async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
        if (!this.redirectPersistenceManager) {
            const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;
            _assert(resolver, this, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
            this.redirectPersistenceManager = await PersistenceUserManager.create(this, [
                _getInstance(resolver._redirectPersistence)
            ], "redirectUser" /* KeyName.REDIRECT_USER */ );
            this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
        }
        return this.redirectPersistenceManager;
    }
    async _redirectUserForId(id) {
        var _a, _b;
        // Make sure we've cleared any pending persistence actions if we're not in
        // the initializer
        if (this._isInitialized) await this.queue(async ()=>{});
        if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) return this._currentUser;
        if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) return this.redirectUser;
        return null;
    }
    async _persistUserIfCurrent(user) {
        if (user === this.currentUser) return this.queue(async ()=>this.directlySetCurrentUser(user));
    }
    /** Notifies listeners only if the user is current */ _notifyListenersIfCurrent(user) {
        if (user === this.currentUser) this.notifyAuthListeners();
    }
    _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
    }
    _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = true;
        if (this.currentUser) this._currentUser._startProactiveRefresh();
    }
    _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = false;
        if (this.currentUser) this._currentUser._stopProactiveRefresh();
    }
    /** Returns the current user cast as the internal type */ get _currentUser() {
        return this.currentUser;
    }
    notifyAuthListeners() {
        var _a, _b;
        if (!this._isInitialized) return;
        this.idTokenSubscription.next(this.currentUser);
        const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
        if (this.lastNotifiedUid !== currentUid) {
            this.lastNotifiedUid = currentUid;
            this.authStateSubscription.next(this.currentUser);
        }
    }
    registerStateListener(subscription, nextOrObserver, error, completed) {
        if (this._deleted) return ()=>{};
        const cb = typeof nextOrObserver === "function" ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
        let isUnsubscribed = false;
        const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        _assert(promise, this, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        // The callback needs to be called asynchronously per the spec.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        promise.then(()=>{
            if (isUnsubscribed) return;
            cb(this.currentUser);
        });
        if (typeof nextOrObserver === "function") {
            const unsubscribe = subscription.addObserver(nextOrObserver, error, completed);
            return ()=>{
                isUnsubscribed = true;
                unsubscribe();
            };
        } else {
            const unsubscribe = subscription.addObserver(nextOrObserver);
            return ()=>{
                isUnsubscribed = true;
                unsubscribe();
            };
        }
    }
    /**
     * Unprotected (from race conditions) method to set the current user. This
     * should only be called from within a queued callback. This is necessary
     * because the queue shouldn't rely on another queued callback.
     */ async directlySetCurrentUser(user) {
        if (this.currentUser && this.currentUser !== user) this._currentUser._stopProactiveRefresh();
        if (user && this.isProactiveRefreshEnabled) user._startProactiveRefresh();
        this.currentUser = user;
        if (user) await this.assertedPersistence.setCurrentUser(user);
        else await this.assertedPersistence.removeCurrentUser();
    }
    queue(action) {
        // In case something errors, the callback still should be called in order
        // to keep the promise chain alive
        this.operations = this.operations.then(action, action);
        return this.operations;
    }
    get assertedPersistence() {
        _assert(this.persistenceManager, this, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        return this.persistenceManager;
    }
    _logFramework(framework) {
        if (!framework || this.frameworks.includes(framework)) return;
        this.frameworks.push(framework);
        // Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
        // "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.
        this.frameworks.sort();
        this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
    }
    _getFrameworks() {
        return this.frameworks;
    }
    async _getAdditionalHeaders() {
        var _a;
        // Additional headers on every request
        const headers = {
            ["X-Client-Version" /* HttpHeader.X_CLIENT_VERSION */ ]: this.clientVersion
        };
        if (this.app.options.appId) headers["X-Firebase-gmpid" /* HttpHeader.X_FIREBASE_GMPID */ ] = this.app.options.appId;
        // If the heartbeat service exists, add the heartbeat string
        const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider.getImmediate({
            optional: true
        })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
        if (heartbeatsHeader) headers["X-Firebase-Client" /* HttpHeader.X_FIREBASE_CLIENT */ ] = heartbeatsHeader;
        // If the App Check service exists, add the App Check token in the headers
        const appCheckToken = await this._getAppCheckToken();
        if (appCheckToken) headers["X-Firebase-AppCheck" /* HttpHeader.X_FIREBASE_APP_CHECK */ ] = appCheckToken;
        return headers;
    }
    async _getAppCheckToken() {
        var _a;
        const appCheckTokenResult = await ((_a = this.appCheckServiceProvider.getImmediate({
            optional: true
        })) === null || _a === void 0 ? void 0 : _a.getToken());
        if (appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.error) // Context: appCheck.getToken() will never throw even if an error happened.
        // In the error case, a dummy token will be returned along with an error field describing
        // the error. In general, we shouldn't care about the error condition and just use
        // the token (actual or dummy) to send requests.
        _logWarn(`Error while retrieving App Check token: ${appCheckTokenResult.error}`);
        return appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.token;
    }
}
/**
 * Method to be used to cast down to our private implmentation of Auth.
 * It will also handle unwrapping from the compat type if necessary
 *
 * @param auth Auth object passed in from developer
 */ function _castAuth(auth) {
    return (0, _util.getModularInstance)(auth);
}
/** Helper class to wrap subscriber logic */ class Subscription {
    constructor(auth){
        this.auth = auth;
        this.observer = null;
        this.addObserver = (0, _util.createSubscribe)((observer)=>this.observer = observer);
    }
    get next() {
        _assert(this.observer, this.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        return this.observer.next.bind(this.observer);
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let externalJSProvider = {
    async loadJS () {
        throw new Error("Unable to load external scripts");
    },
    recaptchaV2Script: "",
    recaptchaEnterpriseScript: "",
    gapiScript: ""
};
function _setExternalJSProvider(p) {
    externalJSProvider = p;
}
function _loadJS(url) {
    return externalJSProvider.loadJS(url);
}
function _recaptchaV2ScriptUrl() {
    return externalJSProvider.recaptchaV2Script;
}
function _recaptchaEnterpriseScriptUrl() {
    return externalJSProvider.recaptchaEnterpriseScript;
}
function _gapiScriptUrl() {
    return externalJSProvider.gapiScript;
}
function _generateCallbackName(prefix) {
    return `__${prefix}${Math.floor(Math.random() * 1000000)}`;
}
/* eslint-disable @typescript-eslint/no-require-imports */ const RECAPTCHA_ENTERPRISE_VERIFIER_TYPE = "recaptcha-enterprise";
const FAKE_TOKEN = "NO_RECAPTCHA";
class RecaptchaEnterpriseVerifier {
    /**
     *
     * @param authExtern - The corresponding Firebase {@link Auth} instance.
     *
     */ constructor(authExtern){
        /**
         * Identifies the type of application verifier (e.g. "recaptcha-enterprise").
         */ this.type = RECAPTCHA_ENTERPRISE_VERIFIER_TYPE;
        this.auth = _castAuth(authExtern);
    }
    /**
     * Executes the verification process.
     *
     * @returns A Promise for a token that can be used to assert the validity of a request.
     */ async verify(action = "verify", forceRefresh = false) {
        async function retrieveSiteKey(auth) {
            if (!forceRefresh) {
                if (auth.tenantId == null && auth._agentRecaptchaConfig != null) return auth._agentRecaptchaConfig.siteKey;
                if (auth.tenantId != null && auth._tenantRecaptchaConfigs[auth.tenantId] !== undefined) return auth._tenantRecaptchaConfigs[auth.tenantId].siteKey;
            }
            return new Promise(async (resolve, reject)=>{
                getRecaptchaConfig(auth, {
                    clientType: "CLIENT_TYPE_WEB" /* RecaptchaClientType.WEB */ ,
                    version: "RECAPTCHA_ENTERPRISE" /* RecaptchaVersion.ENTERPRISE */ 
                }).then((response)=>{
                    if (response.recaptchaKey === undefined) reject(new Error("recaptcha Enterprise site key undefined"));
                    else {
                        const config = new RecaptchaConfig(response);
                        if (auth.tenantId == null) auth._agentRecaptchaConfig = config;
                        else auth._tenantRecaptchaConfigs[auth.tenantId] = config;
                        return resolve(config.siteKey);
                    }
                }).catch((error)=>{
                    reject(error);
                });
            });
        }
        function retrieveRecaptchaToken(siteKey, resolve, reject) {
            const grecaptcha = window.grecaptcha;
            if (isEnterprise(grecaptcha)) grecaptcha.enterprise.ready(()=>{
                grecaptcha.enterprise.execute(siteKey, {
                    action
                }).then((token)=>{
                    resolve(token);
                }).catch(()=>{
                    resolve(FAKE_TOKEN);
                });
            });
            else reject(Error("No reCAPTCHA enterprise script loaded."));
        }
        return new Promise((resolve, reject)=>{
            retrieveSiteKey(this.auth).then((siteKey)=>{
                if (!forceRefresh && isEnterprise(window.grecaptcha)) retrieveRecaptchaToken(siteKey, resolve, reject);
                else {
                    if (typeof window === "undefined") {
                        reject(new Error("RecaptchaVerifier is only supported in browser"));
                        return;
                    }
                    let url = _recaptchaEnterpriseScriptUrl();
                    if (url.length !== 0) url += siteKey;
                    _loadJS(url).then(()=>{
                        retrieveRecaptchaToken(siteKey, resolve, reject);
                    }).catch((error)=>{
                        reject(error);
                    });
                }
            }).catch((error)=>{
                reject(error);
            });
        });
    }
}
async function injectRecaptchaFields(auth, request, action, captchaResp = false) {
    const verifier = new RecaptchaEnterpriseVerifier(auth);
    let captchaResponse;
    try {
        captchaResponse = await verifier.verify(action);
    } catch (error) {
        captchaResponse = await verifier.verify(action, true);
    }
    const newRequest = Object.assign({}, request);
    if (!captchaResp) Object.assign(newRequest, {
        captchaResponse
    });
    else Object.assign(newRequest, {
        "captchaResp": captchaResponse
    });
    Object.assign(newRequest, {
        "clientType": "CLIENT_TYPE_WEB" /* RecaptchaClientType.WEB */ 
    });
    Object.assign(newRequest, {
        "recaptchaVersion": "RECAPTCHA_ENTERPRISE" /* RecaptchaVersion.ENTERPRISE */ 
    });
    return newRequest;
}
async function handleRecaptchaFlow(authInstance, request, actionName, actionMethod) {
    var _a;
    if ((_a = authInstance._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER" /* RecaptchaProvider.EMAIL_PASSWORD_PROVIDER */ )) {
        const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName, actionName === "getOobCode" /* RecaptchaActionName.GET_OOB_CODE */ );
        return actionMethod(authInstance, requestWithRecaptcha);
    } else return actionMethod(authInstance, request).catch(async (error)=>{
        if (error.code === `auth/${"missing-recaptcha-token" /* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */ }`) {
            console.log(`${actionName} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
            const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName, actionName === "getOobCode" /* RecaptchaActionName.GET_OOB_CODE */ );
            return actionMethod(authInstance, requestWithRecaptcha);
        } else return Promise.reject(error);
    });
}
async function _initializeRecaptchaConfig(auth) {
    const authInternal = _castAuth(auth);
    const response = await getRecaptchaConfig(authInternal, {
        clientType: "CLIENT_TYPE_WEB" /* RecaptchaClientType.WEB */ ,
        version: "RECAPTCHA_ENTERPRISE" /* RecaptchaVersion.ENTERPRISE */ 
    });
    const config = new RecaptchaConfig(response);
    if (authInternal.tenantId == null) authInternal._agentRecaptchaConfig = config;
    else authInternal._tenantRecaptchaConfigs[authInternal.tenantId] = config;
    if (config.isProviderEnabled("EMAIL_PASSWORD_PROVIDER" /* RecaptchaProvider.EMAIL_PASSWORD_PROVIDER */ )) {
        const verifier = new RecaptchaEnterpriseVerifier(authInternal);
        verifier.verify();
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */ function initializeAuth(app, deps) {
    const provider = (0, _app._getProvider)(app, "auth");
    if (provider.isInitialized()) {
        const auth = provider.getImmediate();
        const initialOptions = provider.getOptions();
        if ((0, _util.deepEqual)(initialOptions, deps !== null && deps !== void 0 ? deps : {})) return auth;
        else _fail(auth, "already-initialized" /* AuthErrorCode.ALREADY_INITIALIZED */ );
    }
    const auth = provider.initialize({
        options: deps
    });
    return auth;
}
function _initializeAuthInstance(auth, deps) {
    const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
    const hierarchy = (Array.isArray(persistence) ? persistence : [
        persistence
    ]).map(_getInstance);
    if (deps === null || deps === void 0 ? void 0 : deps.errorMap) auth._updateErrorMap(deps.errorMap);
    // This promise is intended to float; auth initialization happens in the
    // background, meanwhile the auth object may be used by the app.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
}
/**
 * Changes the {@link Auth} instance to communicate with the Firebase Auth Emulator, instead of production
 * Firebase Auth services.
 *
 * @remarks
 * This must be called synchronously immediately following the first call to
 * {@link initializeAuth}.  Do not use with production credentials as emulator
 * traffic is not encrypted.
 *
 *
 * @example
 * ```javascript
 * connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param url - The URL at which the emulator is running (eg, 'http://localhost:9099').
 * @param options - Optional. `options.disableWarnings` defaults to `false`. Set it to
 * `true` to disable the warning banner attached to the DOM.
 *
 * @public
 */ function connectAuthEmulator(auth, url, options) {
    const authInternal = _castAuth(auth);
    _assert(authInternal._canInitEmulator, authInternal, "emulator-config-failed" /* AuthErrorCode.EMULATOR_CONFIG_FAILED */ );
    _assert(/^https?:\/\//.test(url), authInternal, "invalid-emulator-scheme" /* AuthErrorCode.INVALID_EMULATOR_SCHEME */ );
    const disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
    const protocol = extractProtocol(url);
    const { host, port } = extractHostAndPort(url);
    const portStr = port === null ? "" : `:${port}`;
    // Always replace path with "/" (even if input url had no path at all, or had a different one).
    authInternal.config.emulator = {
        url: `${protocol}//${host}${portStr}/`
    };
    authInternal.settings.appVerificationDisabledForTesting = true;
    authInternal.emulatorConfig = Object.freeze({
        host,
        port,
        protocol: protocol.replace(":", ""),
        options: Object.freeze({
            disableWarnings
        })
    });
    if (!disableWarnings) emitEmulatorWarning();
}
function extractProtocol(url) {
    const protocolEnd = url.indexOf(":");
    return protocolEnd < 0 ? "" : url.substr(0, protocolEnd + 1);
}
function extractHostAndPort(url) {
    const protocol = extractProtocol(url);
    const authority = /(\/\/)?([^?#/]+)/.exec(url.substr(protocol.length)); // Between // and /, ? or #.
    if (!authority) return {
        host: "",
        port: null
    };
    const hostAndPort = authority[2].split("@").pop() || ""; // Strip out "username:password@".
    const bracketedIPv6 = /^(\[[^\]]+\])(:|$)/.exec(hostAndPort);
    if (bracketedIPv6) {
        const host = bracketedIPv6[1];
        return {
            host,
            port: parsePort(hostAndPort.substr(host.length + 1))
        };
    } else {
        const [host, port] = hostAndPort.split(":");
        return {
            host,
            port: parsePort(port)
        };
    }
}
function parsePort(portStr) {
    if (!portStr) return null;
    const port = Number(portStr);
    if (isNaN(port)) return null;
    return port;
}
function emitEmulatorWarning() {
    function attachBanner() {
        const el = document.createElement("p");
        const sty = el.style;
        el.innerText = "Running in emulator mode. Do not use with production credentials.";
        sty.position = "fixed";
        sty.width = "100%";
        sty.backgroundColor = "#ffffff";
        sty.border = ".1em solid #000000";
        sty.color = "#b50000";
        sty.bottom = "0px";
        sty.left = "0px";
        sty.margin = "0px";
        sty.zIndex = "10000";
        sty.textAlign = "center";
        el.classList.add("firebase-emulator-warning");
        document.body.appendChild(el);
    }
    if (typeof console !== "undefined" && typeof console.info === "function") console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
    if (typeof window !== "undefined" && typeof document !== "undefined") {
        if (document.readyState === "loading") window.addEventListener("DOMContentLoaded", attachBanner);
        else attachBanner();
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */ class AuthCredential {
    /** @internal */ constructor(/**
     * The authentication provider ID for the credential.
     *
     * @remarks
     * For example, 'facebook.com', or 'google.com'.
     */ providerId, /**
     * The authentication sign in method for the credential.
     *
     * @remarks
     * For example, {@link SignInMethod}.EMAIL_PASSWORD, or
     * {@link SignInMethod}.EMAIL_LINK. This corresponds to the sign-in method
     * identifier as returned in {@link fetchSignInMethodsForEmail}.
     */ signInMethod){
        this.providerId = providerId;
        this.signInMethod = signInMethod;
    }
    /**
     * Returns a JSON-serializable representation of this object.
     *
     * @returns a JSON-serializable representation of this object.
     */ toJSON() {
        return debugFail("not implemented");
    }
    /** @internal */ _getIdTokenResponse(_auth) {
        return debugFail("not implemented");
    }
    /** @internal */ _linkToIdToken(_auth, _idToken) {
        return debugFail("not implemented");
    }
    /** @internal */ _getReauthenticationResolver(_auth) {
        return debugFail("not implemented");
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function resetPassword(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:resetPassword" /* Endpoint.RESET_PASSWORD */ , _addTidIfNecessary(auth, request));
}
async function updateEmailPassword(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:update" /* Endpoint.SET_ACCOUNT_INFO */ , request);
}
// Used for linking an email/password account to an existing idToken. Uses the same request/response
// format as updateEmailPassword.
async function linkEmailPassword(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:signUp" /* Endpoint.SIGN_UP */ , request);
}
async function applyActionCode$1(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:update" /* Endpoint.SET_ACCOUNT_INFO */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function signInWithPassword(auth, request) {
    return _performSignInRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:signInWithPassword" /* Endpoint.SIGN_IN_WITH_PASSWORD */ , _addTidIfNecessary(auth, request));
}
async function sendOobCode(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:sendOobCode" /* Endpoint.SEND_OOB_CODE */ , _addTidIfNecessary(auth, request));
}
async function sendEmailVerification$1(auth, request) {
    return sendOobCode(auth, request);
}
async function sendPasswordResetEmail$1(auth, request) {
    return sendOobCode(auth, request);
}
async function sendSignInLinkToEmail$1(auth, request) {
    return sendOobCode(auth, request);
}
async function verifyAndChangeEmail(auth, request) {
    return sendOobCode(auth, request);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function signInWithEmailLink$1(auth, request) {
    return _performSignInRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:signInWithEmailLink" /* Endpoint.SIGN_IN_WITH_EMAIL_LINK */ , _addTidIfNecessary(auth, request));
}
async function signInWithEmailLinkForLinking(auth, request) {
    return _performSignInRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:signInWithEmailLink" /* Endpoint.SIGN_IN_WITH_EMAIL_LINK */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */ class EmailAuthCredential extends AuthCredential {
    /** @internal */ constructor(/** @internal */ _email, /** @internal */ _password, signInMethod, /** @internal */ _tenantId = null){
        super("password" /* ProviderId.PASSWORD */ , signInMethod);
        this._email = _email;
        this._password = _password;
        this._tenantId = _tenantId;
    }
    /** @internal */ static _fromEmailAndPassword(email, password) {
        return new EmailAuthCredential(email, password, "password" /* SignInMethod.EMAIL_PASSWORD */ );
    }
    /** @internal */ static _fromEmailAndCode(email, oobCode, tenantId = null) {
        return new EmailAuthCredential(email, oobCode, "emailLink" /* SignInMethod.EMAIL_LINK */ , tenantId);
    }
    /** {@inheritdoc AuthCredential.toJSON} */ toJSON() {
        return {
            email: this._email,
            password: this._password,
            signInMethod: this.signInMethod,
            tenantId: this._tenantId
        };
    }
    /**
     * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
     *
     * @param json - Either `object` or the stringified representation of the object. When string is
     * provided, `JSON.parse` would be called first.
     *
     * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
     */ static fromJSON(json) {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
        if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
            if (obj.signInMethod === "password" /* SignInMethod.EMAIL_PASSWORD */ ) return this._fromEmailAndPassword(obj.email, obj.password);
            else if (obj.signInMethod === "emailLink" /* SignInMethod.EMAIL_LINK */ ) return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
        }
        return null;
    }
    /** @internal */ async _getIdTokenResponse(auth) {
        switch(this.signInMethod){
            case "password" /* SignInMethod.EMAIL_PASSWORD */ :
                const request = {
                    returnSecureToken: true,
                    email: this._email,
                    password: this._password,
                    clientType: "CLIENT_TYPE_WEB" /* RecaptchaClientType.WEB */ 
                };
                return handleRecaptchaFlow(auth, request, "signInWithPassword" /* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */ , signInWithPassword);
            case "emailLink" /* SignInMethod.EMAIL_LINK */ :
                return signInWithEmailLink$1(auth, {
                    email: this._email,
                    oobCode: this._password
                });
            default:
                _fail(auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        }
    }
    /** @internal */ async _linkToIdToken(auth, idToken) {
        switch(this.signInMethod){
            case "password" /* SignInMethod.EMAIL_PASSWORD */ :
                const request = {
                    idToken,
                    returnSecureToken: true,
                    email: this._email,
                    password: this._password,
                    clientType: "CLIENT_TYPE_WEB" /* RecaptchaClientType.WEB */ 
                };
                return handleRecaptchaFlow(auth, request, "signUpPassword" /* RecaptchaActionName.SIGN_UP_PASSWORD */ , linkEmailPassword);
            case "emailLink" /* SignInMethod.EMAIL_LINK */ :
                return signInWithEmailLinkForLinking(auth, {
                    idToken,
                    email: this._email,
                    oobCode: this._password
                });
            default:
                _fail(auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        }
    }
    /** @internal */ _getReauthenticationResolver(auth) {
        return this._getIdTokenResponse(auth);
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function signInWithIdp(auth, request) {
    return _performSignInRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:signInWithIdp" /* Endpoint.SIGN_IN_WITH_IDP */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const IDP_REQUEST_URI$1 = "http://localhost";
/**
 * Represents the OAuth credentials returned by an {@link OAuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */ class OAuthCredential extends AuthCredential {
    constructor(){
        super(...arguments);
        this.pendingToken = null;
    }
    /** @internal */ static _fromParams(params) {
        const cred = new OAuthCredential(params.providerId, params.signInMethod);
        if (params.idToken || params.accessToken) {
            // OAuth 2 and either ID token or access token.
            if (params.idToken) cred.idToken = params.idToken;
            if (params.accessToken) cred.accessToken = params.accessToken;
            // Add nonce if available and no pendingToken is present.
            if (params.nonce && !params.pendingToken) cred.nonce = params.nonce;
            if (params.pendingToken) cred.pendingToken = params.pendingToken;
        } else if (params.oauthToken && params.oauthTokenSecret) {
            // OAuth 1 and OAuth token with token secret
            cred.accessToken = params.oauthToken;
            cred.secret = params.oauthTokenSecret;
        } else _fail("argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        return cred;
    }
    /** {@inheritdoc AuthCredential.toJSON}  */ toJSON() {
        return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
        };
    }
    /**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */ static fromJSON(json) {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
        const { providerId, signInMethod } = obj, rest = (0, _tslib.__rest)(obj, [
            "providerId",
            "signInMethod"
        ]);
        if (!providerId || !signInMethod) return null;
        const cred = new OAuthCredential(providerId, signInMethod);
        cred.idToken = rest.idToken || undefined;
        cred.accessToken = rest.accessToken || undefined;
        cred.secret = rest.secret;
        cred.nonce = rest.nonce;
        cred.pendingToken = rest.pendingToken || null;
        return cred;
    }
    /** @internal */ _getIdTokenResponse(auth) {
        const request = this.buildRequest();
        return signInWithIdp(auth, request);
    }
    /** @internal */ _linkToIdToken(auth, idToken) {
        const request = this.buildRequest();
        request.idToken = idToken;
        return signInWithIdp(auth, request);
    }
    /** @internal */ _getReauthenticationResolver(auth) {
        const request = this.buildRequest();
        request.autoCreate = false;
        return signInWithIdp(auth, request);
    }
    buildRequest() {
        const request = {
            requestUri: IDP_REQUEST_URI$1,
            returnSecureToken: true
        };
        if (this.pendingToken) request.pendingToken = this.pendingToken;
        else {
            const postBody = {};
            if (this.idToken) postBody["id_token"] = this.idToken;
            if (this.accessToken) postBody["access_token"] = this.accessToken;
            if (this.secret) postBody["oauth_token_secret"] = this.secret;
            postBody["providerId"] = this.providerId;
            if (this.nonce && !this.pendingToken) postBody["nonce"] = this.nonce;
            request.postBody = (0, _util.querystring)(postBody);
        }
        return request;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function sendPhoneVerificationCode(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:sendVerificationCode" /* Endpoint.SEND_VERIFICATION_CODE */ , _addTidIfNecessary(auth, request));
}
async function signInWithPhoneNumber$1(auth, request) {
    return _performSignInRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:signInWithPhoneNumber" /* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */ , _addTidIfNecessary(auth, request));
}
async function linkWithPhoneNumber$1(auth, request) {
    const response = await _performSignInRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:signInWithPhoneNumber" /* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */ , _addTidIfNecessary(auth, request));
    if (response.temporaryProof) throw _makeTaggedError(auth, "account-exists-with-different-credential" /* AuthErrorCode.NEED_CONFIRMATION */ , response);
    return response;
}
const VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
    ["USER_NOT_FOUND" /* ServerError.USER_NOT_FOUND */ ]: "user-not-found" /* AuthErrorCode.USER_DELETED */ 
};
async function verifyPhoneNumberForExisting(auth, request) {
    const apiRequest = Object.assign(Object.assign({}, request), {
        operation: "REAUTH"
    });
    return _performSignInRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:signInWithPhoneNumber" /* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */ , _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */ class PhoneAuthCredential extends AuthCredential {
    constructor(params){
        super("phone" /* ProviderId.PHONE */ , "phone" /* SignInMethod.PHONE */ );
        this.params = params;
    }
    /** @internal */ static _fromVerification(verificationId, verificationCode) {
        return new PhoneAuthCredential({
            verificationId,
            verificationCode
        });
    }
    /** @internal */ static _fromTokenResponse(phoneNumber, temporaryProof) {
        return new PhoneAuthCredential({
            phoneNumber,
            temporaryProof
        });
    }
    /** @internal */ _getIdTokenResponse(auth) {
        return signInWithPhoneNumber$1(auth, this._makeVerificationRequest());
    }
    /** @internal */ _linkToIdToken(auth, idToken) {
        return linkWithPhoneNumber$1(auth, Object.assign({
            idToken
        }, this._makeVerificationRequest()));
    }
    /** @internal */ _getReauthenticationResolver(auth) {
        return verifyPhoneNumberForExisting(auth, this._makeVerificationRequest());
    }
    /** @internal */ _makeVerificationRequest() {
        const { temporaryProof, phoneNumber, verificationId, verificationCode } = this.params;
        if (temporaryProof && phoneNumber) return {
            temporaryProof,
            phoneNumber
        };
        return {
            sessionInfo: verificationId,
            code: verificationCode
        };
    }
    /** {@inheritdoc AuthCredential.toJSON} */ toJSON() {
        const obj = {
            providerId: this.providerId
        };
        if (this.params.phoneNumber) obj.phoneNumber = this.params.phoneNumber;
        if (this.params.temporaryProof) obj.temporaryProof = this.params.temporaryProof;
        if (this.params.verificationCode) obj.verificationCode = this.params.verificationCode;
        if (this.params.verificationId) obj.verificationId = this.params.verificationId;
        return obj;
    }
    /** Generates a phone credential based on a plain object or a JSON string. */ static fromJSON(json) {
        if (typeof json === "string") json = JSON.parse(json);
        const { verificationId, verificationCode, phoneNumber, temporaryProof } = json;
        if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) return null;
        return new PhoneAuthCredential({
            verificationId,
            verificationCode,
            phoneNumber,
            temporaryProof
        });
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */ function parseMode(mode) {
    switch(mode){
        case "recoverEmail":
            return "RECOVER_EMAIL" /* ActionCodeOperation.RECOVER_EMAIL */ ;
        case "resetPassword":
            return "PASSWORD_RESET" /* ActionCodeOperation.PASSWORD_RESET */ ;
        case "signIn":
            return "EMAIL_SIGNIN" /* ActionCodeOperation.EMAIL_SIGNIN */ ;
        case "verifyEmail":
            return "VERIFY_EMAIL" /* ActionCodeOperation.VERIFY_EMAIL */ ;
        case "verifyAndChangeEmail":
            return "VERIFY_AND_CHANGE_EMAIL" /* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */ ;
        case "revertSecondFactorAddition":
            return "REVERT_SECOND_FACTOR_ADDITION" /* ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION */ ;
        default:
            return null;
    }
}
/**
 * Helper to parse FDL links
 *
 * @param url
 */ function parseDeepLink(url) {
    const link = (0, _util.querystringDecode)((0, _util.extractQuerystring)(url))["link"];
    // Double link case (automatic redirect).
    const doubleDeepLink = link ? (0, _util.querystringDecode)((0, _util.extractQuerystring)(link))["deep_link_id"] : null;
    // iOS custom scheme links.
    const iOSDeepLink = (0, _util.querystringDecode)((0, _util.extractQuerystring)(url))["deep_link_id"];
    const iOSDoubleDeepLink = iOSDeepLink ? (0, _util.querystringDecode)((0, _util.extractQuerystring)(iOSDeepLink))["link"] : null;
    return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
/**
 * A utility class to parse email action URLs such as password reset, email verification,
 * email link sign in, etc.
 *
 * @public
 */ class ActionCodeURL {
    /**
     * @param actionLink - The link from which to extract the URL.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @internal
     */ constructor(actionLink){
        var _a, _b, _c, _d, _e, _f;
        const searchParams = (0, _util.querystringDecode)((0, _util.extractQuerystring)(actionLink));
        const apiKey = (_a = searchParams["apiKey" /* QueryField.API_KEY */ ]) !== null && _a !== void 0 ? _a : null;
        const code = (_b = searchParams["oobCode" /* QueryField.CODE */ ]) !== null && _b !== void 0 ? _b : null;
        const operation = parseMode((_c = searchParams["mode" /* QueryField.MODE */ ]) !== null && _c !== void 0 ? _c : null);
        // Validate API key, code and mode.
        _assert(apiKey && code && operation, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        this.apiKey = apiKey;
        this.operation = operation;
        this.code = code;
        this.continueUrl = (_d = searchParams["continueUrl" /* QueryField.CONTINUE_URL */ ]) !== null && _d !== void 0 ? _d : null;
        this.languageCode = (_e = searchParams["languageCode" /* QueryField.LANGUAGE_CODE */ ]) !== null && _e !== void 0 ? _e : null;
        this.tenantId = (_f = searchParams["tenantId" /* QueryField.TENANT_ID */ ]) !== null && _f !== void 0 ? _f : null;
    }
    /**
     * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
     * otherwise returns null.
     *
     * @param link  - The email action link string.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @public
     */ static parseLink(link) {
        const actionLink = parseDeepLink(link);
        try {
            return new ActionCodeURL(actionLink);
        } catch (_a) {
            return null;
        }
    }
}
/**
 * Parses the email action link string and returns an {@link ActionCodeURL} if
 * the link is valid, otherwise returns null.
 *
 * @public
 */ function parseActionCodeURL(link) {
    return ActionCodeURL.parseLink(link);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */ class EmailAuthProvider {
    constructor(){
        /**
         * Always set to {@link ProviderId}.PASSWORD, even for email link.
         */ this.providerId = EmailAuthProvider.PROVIDER_ID;
    }
    /**
     * Initialize an {@link AuthCredential} using an email and password.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credential(email, password);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * const userCredential = await signInWithEmailAndPassword(auth, email, password);
     * ```
     *
     * @param email - Email address.
     * @param password - User account password.
     * @returns The auth provider credential.
     */ static credential(email, password) {
        return EmailAuthCredential._fromEmailAndPassword(email, password);
    }
    /**
     * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
     * email link operation.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * await sendSignInLinkToEmail(auth, email);
     * // Obtain emailLink from user.
     * const userCredential = await signInWithEmailLink(auth, email, emailLink);
     * ```
     *
     * @param auth - The {@link Auth} instance used to verify the link.
     * @param email - Email address.
     * @param emailLink - Sign-in email link.
     * @returns - The auth provider credential.
     */ static credentialWithLink(email, emailLink) {
        const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
        _assert(actionCodeUrl, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
    }
}
/**
 * Always set to {@link ProviderId}.PASSWORD, even for email link.
 */ EmailAuthProvider.PROVIDER_ID = "password" /* ProviderId.PASSWORD */ ;
/**
 * Always set to {@link SignInMethod}.EMAIL_PASSWORD.
 */ EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password" /* SignInMethod.EMAIL_PASSWORD */ ;
/**
 * Always set to {@link SignInMethod}.EMAIL_LINK.
 */ EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink" /* SignInMethod.EMAIL_LINK */ ;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */ class FederatedAuthProvider {
    /**
     * Constructor for generic OAuth providers.
     *
     * @param providerId - Provider for which credentials should be generated.
     */ constructor(providerId){
        this.providerId = providerId;
        /** @internal */ this.defaultLanguageCode = null;
        /** @internal */ this.customParameters = {};
    }
    /**
     * Set the language gode.
     *
     * @param languageCode - language code
     */ setDefaultLanguage(languageCode) {
        this.defaultLanguageCode = languageCode;
    }
    /**
     * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
     * operations.
     *
     * @remarks
     * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
     * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
     *
     * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
     */ setCustomParameters(customOAuthParameters) {
        this.customParameters = customOAuthParameters;
        return this;
    }
    /**
     * Retrieve the current list of {@link CustomParameters}.
     */ getCustomParameters() {
        return this.customParameters;
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */ class BaseOAuthProvider extends FederatedAuthProvider {
    constructor(){
        super(...arguments);
        /** @internal */ this.scopes = [];
    }
    /**
     * Add an OAuth scope to the credential.
     *
     * @param scope - Provider OAuth scope to add.
     */ addScope(scope) {
        // If not already added, add scope to list.
        if (!this.scopes.includes(scope)) this.scopes.push(scope);
        return this;
    }
    /**
     * Retrieve the current list of OAuth scopes.
     */ getScopes() {
        return [
            ...this.scopes
        ];
    }
}
/**
 * Provider for generating generic {@link OAuthCredential}.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new OAuthProvider('google.com');
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a OAuth Access Token for the provider.
 *   const credential = provider.credentialFromResult(auth, result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new OAuthProvider('google.com');
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a OAuth Access Token for the provider.
 * const credential = provider.credentialFromResult(auth, result);
 * const token = credential.accessToken;
 * ```
 * @public
 */ class OAuthProvider extends BaseOAuthProvider {
    /**
     * Creates an {@link OAuthCredential} from a JSON string or a plain object.
     * @param json - A plain object or a JSON string
     */ static credentialFromJSON(json) {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
        _assert("providerId" in obj && "signInMethod" in obj, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        return OAuthCredential._fromParams(obj);
    }
    /**
     * Creates a {@link OAuthCredential} from a generic OAuth provider's access token or ID token.
     *
     * @remarks
     * The raw nonce is required when an ID token with a nonce field is provided. The SHA-256 hash of
     * the raw nonce must match the nonce field in the ID token.
     *
     * @example
     * ```javascript
     * // `googleUser` from the onsuccess Google Sign In callback.
     * // Initialize a generate OAuth provider with a `google.com` providerId.
     * const provider = new OAuthProvider('google.com');
     * const credential = provider.credential({
     *   idToken: googleUser.getAuthResponse().id_token,
     * });
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param params - Either the options object containing the ID token, access token and raw nonce
     * or the ID token string.
     */ credential(params) {
        return this._credential(Object.assign(Object.assign({}, params), {
            nonce: params.rawNonce
        }));
    }
    /** An internal credential method that accepts more permissive options */ _credential(params) {
        _assert(params.idToken || params.accessToken, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        // For OAuthCredential, sign in method is same as providerId.
        return OAuthCredential._fromParams(Object.assign(Object.assign({}, params), {
            providerId: this.providerId,
            signInMethod: this.providerId
        }));
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */ static credentialFromResult(userCredential) {
        return OAuthProvider.oauthCredentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */ static credentialFromError(error) {
        return OAuthProvider.oauthCredentialFromTaggedObject(error.customData || {});
    }
    static oauthCredentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse) return null;
        const { oauthIdToken, oauthAccessToken, oauthTokenSecret, pendingToken, nonce, providerId } = tokenResponse;
        if (!oauthAccessToken && !oauthTokenSecret && !oauthIdToken && !pendingToken) return null;
        if (!providerId) return null;
        try {
            return new OAuthProvider(providerId)._credential({
                idToken: oauthIdToken,
                accessToken: oauthAccessToken,
                nonce,
                pendingToken
            });
        } catch (e) {
            return null;
        }
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */ class FacebookAuthProvider extends BaseOAuthProvider {
    constructor(){
        super("facebook.com" /* ProviderId.FACEBOOK */ );
    }
    /**
     * Creates a credential for Facebook.
     *
     * @example
     * ```javascript
     * // `event` from the Facebook auth.authResponseChange callback.
     * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param accessToken - Facebook access token.
     */ static credential(accessToken) {
        return OAuthCredential._fromParams({
            providerId: FacebookAuthProvider.PROVIDER_ID,
            signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
            accessToken
        });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */ static credentialFromResult(userCredential) {
        return FacebookAuthProvider.credentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */ static credentialFromError(error) {
        return FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) return null;
        if (!tokenResponse.oauthAccessToken) return null;
        try {
            return FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
        } catch (_a) {
            return null;
        }
    }
}
/** Always set to {@link SignInMethod}.FACEBOOK. */ FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com" /* SignInMethod.FACEBOOK */ ;
/** Always set to {@link ProviderId}.FACEBOOK. */ FacebookAuthProvider.PROVIDER_ID = "facebook.com" /* ProviderId.FACEBOOK */ ;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */ class GoogleAuthProvider extends BaseOAuthProvider {
    constructor(){
        super("google.com" /* ProviderId.GOOGLE */ );
        this.addScope("profile");
    }
    /**
     * Creates a credential for Google. At least one of ID token and access token is required.
     *
     * @example
     * ```javascript
     * // \`googleUser\` from the onsuccess Google Sign In callback.
     * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param idToken - Google ID token.
     * @param accessToken - Google access token.
     */ static credential(idToken, accessToken) {
        return OAuthCredential._fromParams({
            providerId: GoogleAuthProvider.PROVIDER_ID,
            signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
            idToken,
            accessToken
        });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */ static credentialFromResult(userCredential) {
        return GoogleAuthProvider.credentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */ static credentialFromError(error) {
        return GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse) return null;
        const { oauthIdToken, oauthAccessToken } = tokenResponse;
        if (!oauthIdToken && !oauthAccessToken) // This could be an oauth 1 credential or a phone credential
        return null;
        try {
            return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
        } catch (_a) {
            return null;
        }
    }
}
/** Always set to {@link SignInMethod}.GOOGLE. */ GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com" /* SignInMethod.GOOGLE */ ;
/** Always set to {@link ProviderId}.GOOGLE. */ GoogleAuthProvider.PROVIDER_ID = "google.com" /* ProviderId.GOOGLE */ ;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */ class GithubAuthProvider extends BaseOAuthProvider {
    constructor(){
        super("github.com" /* ProviderId.GITHUB */ );
    }
    /**
     * Creates a credential for Github.
     *
     * @param accessToken - Github access token.
     */ static credential(accessToken) {
        return OAuthCredential._fromParams({
            providerId: GithubAuthProvider.PROVIDER_ID,
            signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
            accessToken
        });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */ static credentialFromResult(userCredential) {
        return GithubAuthProvider.credentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */ static credentialFromError(error) {
        return GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) return null;
        if (!tokenResponse.oauthAccessToken) return null;
        try {
            return GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
        } catch (_a) {
            return null;
        }
    }
}
/** Always set to {@link SignInMethod}.GITHUB. */ GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com" /* SignInMethod.GITHUB */ ;
/** Always set to {@link ProviderId}.GITHUB. */ GithubAuthProvider.PROVIDER_ID = "github.com" /* ProviderId.GITHUB */ ;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const IDP_REQUEST_URI = "http://localhost";
/**
 * @public
 */ class SAMLAuthCredential extends AuthCredential {
    /** @internal */ constructor(providerId, pendingToken){
        super(providerId, providerId);
        this.pendingToken = pendingToken;
    }
    /** @internal */ _getIdTokenResponse(auth) {
        const request = this.buildRequest();
        return signInWithIdp(auth, request);
    }
    /** @internal */ _linkToIdToken(auth, idToken) {
        const request = this.buildRequest();
        request.idToken = idToken;
        return signInWithIdp(auth, request);
    }
    /** @internal */ _getReauthenticationResolver(auth) {
        const request = this.buildRequest();
        request.autoCreate = false;
        return signInWithIdp(auth, request);
    }
    /** {@inheritdoc AuthCredential.toJSON}  */ toJSON() {
        return {
            signInMethod: this.signInMethod,
            providerId: this.providerId,
            pendingToken: this.pendingToken
        };
    }
    /**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */ static fromJSON(json) {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
        const { providerId, signInMethod, pendingToken } = obj;
        if (!providerId || !signInMethod || !pendingToken || providerId !== signInMethod) return null;
        return new SAMLAuthCredential(providerId, pendingToken);
    }
    /**
     * Helper static method to avoid exposing the constructor to end users.
     *
     * @internal
     */ static _create(providerId, pendingToken) {
        return new SAMLAuthCredential(providerId, pendingToken);
    }
    buildRequest() {
        return {
            requestUri: IDP_REQUEST_URI,
            returnSecureToken: true,
            pendingToken: this.pendingToken
        };
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const SAML_PROVIDER_PREFIX = "saml.";
/**
 * An {@link AuthProvider} for SAML.
 *
 * @public
 */ class SAMLAuthProvider extends FederatedAuthProvider {
    /**
     * Constructor. The providerId must start with "saml."
     * @param providerId - SAML provider ID.
     */ constructor(providerId){
        _assert(providerId.startsWith(SAML_PROVIDER_PREFIX), "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        super(providerId);
    }
    /**
     * Generates an {@link AuthCredential} from a {@link UserCredential} after a
     * successful SAML flow completes.
     *
     * @remarks
     *
     * For example, to get an {@link AuthCredential}, you could write the
     * following code:
     *
     * ```js
     * const userCredential = await signInWithPopup(auth, samlProvider);
     * const credential = SAMLAuthProvider.credentialFromResult(userCredential);
     * ```
     *
     * @param userCredential - The user credential.
     */ static credentialFromResult(userCredential) {
        return SAMLAuthProvider.samlCredentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */ static credentialFromError(error) {
        return SAMLAuthProvider.samlCredentialFromTaggedObject(error.customData || {});
    }
    /**
     * Creates an {@link AuthCredential} from a JSON string or a plain object.
     * @param json - A plain object or a JSON string
     */ static credentialFromJSON(json) {
        const credential = SAMLAuthCredential.fromJSON(json);
        _assert(credential, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        return credential;
    }
    static samlCredentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse) return null;
        const { pendingToken, providerId } = tokenResponse;
        if (!pendingToken || !providerId) return null;
        try {
            return SAMLAuthCredential._create(providerId, pendingToken);
        } catch (e) {
            return null;
        }
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */ class TwitterAuthProvider extends BaseOAuthProvider {
    constructor(){
        super("twitter.com" /* ProviderId.TWITTER */ );
    }
    /**
     * Creates a credential for Twitter.
     *
     * @param token - Twitter access token.
     * @param secret - Twitter secret.
     */ static credential(token, secret) {
        return OAuthCredential._fromParams({
            providerId: TwitterAuthProvider.PROVIDER_ID,
            signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
            oauthToken: token,
            oauthTokenSecret: secret
        });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */ static credentialFromResult(userCredential) {
        return TwitterAuthProvider.credentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */ static credentialFromError(error) {
        return TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse) return null;
        const { oauthAccessToken, oauthTokenSecret } = tokenResponse;
        if (!oauthAccessToken || !oauthTokenSecret) return null;
        try {
            return TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
        } catch (_a) {
            return null;
        }
    }
}
/** Always set to {@link SignInMethod}.TWITTER. */ TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com" /* SignInMethod.TWITTER */ ;
/** Always set to {@link ProviderId}.TWITTER. */ TwitterAuthProvider.PROVIDER_ID = "twitter.com" /* ProviderId.TWITTER */ ;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function signUp(auth, request) {
    return _performSignInRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:signUp" /* Endpoint.SIGN_UP */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class UserCredentialImpl {
    constructor(params){
        this.user = params.user;
        this.providerId = params.providerId;
        this._tokenResponse = params._tokenResponse;
        this.operationType = params.operationType;
    }
    static async _fromIdTokenResponse(auth, operationType, idTokenResponse, isAnonymous = false) {
        const user = await UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);
        const providerId = providerIdForResponse(idTokenResponse);
        const userCred = new UserCredentialImpl({
            user,
            providerId,
            _tokenResponse: idTokenResponse,
            operationType
        });
        return userCred;
    }
    static async _forOperation(user, operationType, response) {
        await user._updateTokensIfNecessary(response, /* reload */ true);
        const providerId = providerIdForResponse(response);
        return new UserCredentialImpl({
            user,
            providerId,
            _tokenResponse: response,
            operationType
        });
    }
}
function providerIdForResponse(response) {
    if (response.providerId) return response.providerId;
    if ("phoneNumber" in response) return "phone" /* ProviderId.PHONE */ ;
    return null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Asynchronously signs in as an anonymous user.
 *
 * @remarks
 * If there is already an anonymous user signed in, that user will be returned; otherwise, a
 * new anonymous user identity will be created and returned.
 *
 * This method is not supported by {@link Auth} instances created with a
 * {@link @firebase/app#FirebaseServerApp}.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @public
 */ async function signInAnonymously(auth) {
    var _a;
    if ((0, _app._isFirebaseServerApp)(auth.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    const authInternal = _castAuth(auth);
    await authInternal._initializationPromise;
    if ((_a = authInternal.currentUser) === null || _a === void 0 ? void 0 : _a.isAnonymous) // If an anonymous user is already signed in, no need to sign them in again.
    return new UserCredentialImpl({
        user: authInternal.currentUser,
        providerId: null,
        operationType: "signIn" /* OperationType.SIGN_IN */ 
    });
    const response = await signUp(authInternal, {
        returnSecureToken: true
    });
    const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn" /* OperationType.SIGN_IN */ , response, true);
    await authInternal._updateCurrentUser(userCredential.user);
    return userCredential;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MultiFactorError extends (0, _util.FirebaseError) {
    constructor(auth, error, operationType, user){
        var _a;
        super(error.code, error.message);
        this.operationType = operationType;
        this.user = user;
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, MultiFactorError.prototype);
        this.customData = {
            appName: auth.name,
            tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : undefined,
            _serverResponse: error.customData._serverResponse,
            operationType
        };
    }
    static _fromErrorAndOperation(auth, error, operationType, user) {
        return new MultiFactorError(auth, error, operationType, user);
    }
}
function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
    const idTokenProvider = operationType === "reauthenticate" /* OperationType.REAUTHENTICATE */  ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
    return idTokenProvider.catch((error)=>{
        if (error.code === `auth/${"multi-factor-auth-required" /* AuthErrorCode.MFA_REQUIRED */ }`) throw MultiFactorError._fromErrorAndOperation(auth, error, operationType, user);
        throw error;
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Takes a set of UserInfo provider data and converts it to a set of names
 */ function providerDataAsNames(providerData) {
    return new Set(providerData.map(({ providerId })=>providerId).filter((pid)=>!!pid));
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Unlinks a provider from a user account.
 *
 * @param user - The user.
 * @param providerId - The provider to unlink.
 *
 * @public
 */ async function unlink(user, providerId) {
    const userInternal = (0, _util.getModularInstance)(user);
    await _assertLinkedStatus(true, userInternal, providerId);
    const { providerUserInfo } = await deleteLinkedAccounts(userInternal.auth, {
        idToken: await userInternal.getIdToken(),
        deleteProvider: [
            providerId
        ]
    });
    const providersLeft = providerDataAsNames(providerUserInfo || []);
    userInternal.providerData = userInternal.providerData.filter((pd)=>providersLeft.has(pd.providerId));
    if (!providersLeft.has("phone" /* ProviderId.PHONE */ )) userInternal.phoneNumber = null;
    await userInternal.auth._persistUserIfCurrent(userInternal);
    return userInternal;
}
async function _link$1(user, credential, bypassAuthState = false) {
    const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
    return UserCredentialImpl._forOperation(user, "link" /* OperationType.LINK */ , response);
}
async function _assertLinkedStatus(expected, user, provider) {
    await _reloadWithoutSaving(user);
    const providerIds = providerDataAsNames(user.providerData);
    const code = expected === false ? "provider-already-linked" /* AuthErrorCode.PROVIDER_ALREADY_LINKED */  : "no-such-provider" /* AuthErrorCode.NO_SUCH_PROVIDER */ ;
    _assert(providerIds.has(provider) === expected, user.auth, code);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _reauthenticate(user, credential, bypassAuthState = false) {
    const { auth } = user;
    if ((0, _app._isFirebaseServerApp)(auth.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    const operationType = "reauthenticate" /* OperationType.REAUTHENTICATE */ ;
    try {
        const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);
        _assert(response.idToken, auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        const parsed = _parseToken(response.idToken);
        _assert(parsed, auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        const { sub: localId } = parsed;
        _assert(user.uid === localId, auth, "user-mismatch" /* AuthErrorCode.USER_MISMATCH */ );
        return UserCredentialImpl._forOperation(user, operationType, response);
    } catch (e) {
        // Convert user deleted error into user mismatch
        if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"user-not-found" /* AuthErrorCode.USER_DELETED */ }`) _fail(auth, "user-mismatch" /* AuthErrorCode.USER_MISMATCH */ );
        throw e;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _signInWithCredential(auth, credential, bypassAuthState = false) {
    if ((0, _app._isFirebaseServerApp)(auth.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    const operationType = "signIn" /* OperationType.SIGN_IN */ ;
    const response = await _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);
    const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);
    if (!bypassAuthState) await auth._updateCurrentUser(userCredential.user);
    return userCredential;
}
/**
 * Asynchronously signs in with the given credentials.
 *
 * @remarks
 * An {@link AuthProvider} can be used to generate the credential.
 *
 * This method is not supported by {@link Auth} instances created with a
 * {@link @firebase/app#FirebaseServerApp}.
 *
 * @param auth - The {@link Auth} instance.
 * @param credential - The auth credential.
 *
 * @public
 */ async function signInWithCredential(auth, credential) {
    return _signInWithCredential(_castAuth(auth), credential);
}
/**
 * Links the user account with the given credentials.
 *
 * @remarks
 * An {@link AuthProvider} can be used to generate the credential.
 *
 * @param user - The user.
 * @param credential - The auth credential.
 *
 * @public
 */ async function linkWithCredential(user, credential) {
    const userInternal = (0, _util.getModularInstance)(user);
    await _assertLinkedStatus(false, userInternal, credential.providerId);
    return _link$1(userInternal, credential);
}
/**
 * Re-authenticates a user using a fresh credential.
 *
 * @remarks
 * Use before operations such as {@link updatePassword} that require tokens from recent sign-in
 * attempts. This method can be used to recover from a `CREDENTIAL_TOO_OLD_LOGIN_AGAIN` error
 * or a `TOKEN_EXPIRED` error.
 *
 * This method is not supported on any {@link User} signed in by {@link Auth} instances
 * created with a {@link @firebase/app#FirebaseServerApp}.
 *
 * @param user - The user.
 * @param credential - The auth credential.
 *
 * @public
 */ async function reauthenticateWithCredential(user, credential) {
    return _reauthenticate((0, _util.getModularInstance)(user), credential);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function signInWithCustomToken$1(auth, request) {
    return _performSignInRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:signInWithCustomToken" /* Endpoint.SIGN_IN_WITH_CUSTOM_TOKEN */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Asynchronously signs in using a custom token.
 *
 * @remarks
 * Custom tokens are used to integrate Firebase Auth with existing auth systems, and must
 * be generated by an auth backend using the
 * {@link https://firebase.google.com/docs/reference/admin/node/admin.auth.Auth#createcustomtoken | createCustomToken}
 * method in the {@link https://firebase.google.com/docs/auth/admin | Admin SDK} .
 *
 * Fails with an error if the token is invalid, expired, or not accepted by the Firebase Auth service.
 *
 * This method is not supported by {@link Auth} instances created with a
 * {@link @firebase/app#FirebaseServerApp}.
 *
 * @param auth - The {@link Auth} instance.
 * @param customToken - The custom token to sign in with.
 *
 * @public
 */ async function signInWithCustomToken(auth, customToken) {
    if ((0, _app._isFirebaseServerApp)(auth.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    const authInternal = _castAuth(auth);
    const response = await signInWithCustomToken$1(authInternal, {
        token: customToken,
        returnSecureToken: true
    });
    const cred = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn" /* OperationType.SIGN_IN */ , response);
    await authInternal._updateCurrentUser(cred.user);
    return cred;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MultiFactorInfoImpl {
    constructor(factorId, response){
        this.factorId = factorId;
        this.uid = response.mfaEnrollmentId;
        this.enrollmentTime = new Date(response.enrolledAt).toUTCString();
        this.displayName = response.displayName;
    }
    static _fromServerResponse(auth, enrollment) {
        if ("phoneInfo" in enrollment) return PhoneMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
        else if ("totpInfo" in enrollment) return TotpMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
        return _fail(auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
    }
}
class PhoneMultiFactorInfoImpl extends MultiFactorInfoImpl {
    constructor(response){
        super("phone" /* FactorId.PHONE */ , response);
        this.phoneNumber = response.phoneInfo;
    }
    static _fromServerResponse(_auth, enrollment) {
        return new PhoneMultiFactorInfoImpl(enrollment);
    }
}
class TotpMultiFactorInfoImpl extends MultiFactorInfoImpl {
    constructor(response){
        super("totp" /* FactorId.TOTP */ , response);
    }
    static _fromServerResponse(_auth, enrollment) {
        return new TotpMultiFactorInfoImpl(enrollment);
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _setActionCodeSettingsOnRequest(auth, request, actionCodeSettings) {
    var _a;
    _assert(((_a = actionCodeSettings.url) === null || _a === void 0 ? void 0 : _a.length) > 0, auth, "invalid-continue-uri" /* AuthErrorCode.INVALID_CONTINUE_URI */ );
    _assert(typeof actionCodeSettings.dynamicLinkDomain === "undefined" || actionCodeSettings.dynamicLinkDomain.length > 0, auth, "invalid-dynamic-link-domain" /* AuthErrorCode.INVALID_DYNAMIC_LINK_DOMAIN */ );
    request.continueUrl = actionCodeSettings.url;
    request.dynamicLinkDomain = actionCodeSettings.dynamicLinkDomain;
    request.canHandleCodeInApp = actionCodeSettings.handleCodeInApp;
    if (actionCodeSettings.iOS) {
        _assert(actionCodeSettings.iOS.bundleId.length > 0, auth, "missing-ios-bundle-id" /* AuthErrorCode.MISSING_IOS_BUNDLE_ID */ );
        request.iOSBundleId = actionCodeSettings.iOS.bundleId;
    }
    if (actionCodeSettings.android) {
        _assert(actionCodeSettings.android.packageName.length > 0, auth, "missing-android-pkg-name" /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */ );
        request.androidInstallApp = actionCodeSettings.android.installApp;
        request.androidMinimumVersionCode = actionCodeSettings.android.minimumVersion;
        request.androidPackageName = actionCodeSettings.android.packageName;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Updates the password policy cached in the {@link Auth} instance if a policy is already
 * cached for the project or tenant.
 *
 * @remarks
 * We only fetch the password policy if the password did not meet policy requirements and
 * there is an existing policy cached. A developer must call validatePassword at least
 * once for the cache to be automatically updated.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @private
 */ async function recachePasswordPolicy(auth) {
    const authInternal = _castAuth(auth);
    if (authInternal._getPasswordPolicyInternal()) await authInternal._updatePasswordPolicy();
}
/**
 * Sends a password reset email to the given email address. This method does not throw an error when
 * there's no user account with the given email address and
 * [Email Enumeration Protection](https://cloud.google.com/identity-platform/docs/admin/email-enumeration-protection) is enabled.
 *
 * @remarks
 * To complete the password reset, call {@link confirmPasswordReset} with the code supplied in
 * the email sent to the user, along with the new password specified by the user.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await sendPasswordResetEmail(auth, 'user@example.com', actionCodeSettings);
 * // Obtain code from user.
 * await confirmPasswordReset('user@example.com', code);
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param actionCodeSettings - The {@link ActionCodeSettings}.
 *
 * @public
 */ async function sendPasswordResetEmail(auth, email, actionCodeSettings) {
    const authInternal = _castAuth(auth);
    const request = {
        requestType: "PASSWORD_RESET" /* ActionCodeOperation.PASSWORD_RESET */ ,
        email,
        clientType: "CLIENT_TYPE_WEB" /* RecaptchaClientType.WEB */ 
    };
    if (actionCodeSettings) _setActionCodeSettingsOnRequest(authInternal, request, actionCodeSettings);
    await handleRecaptchaFlow(authInternal, request, "getOobCode" /* RecaptchaActionName.GET_OOB_CODE */ , sendPasswordResetEmail$1);
}
/**
 * Completes the password reset process, given a confirmation code and new password.
 *
 * @param auth - The {@link Auth} instance.
 * @param oobCode - A confirmation code sent to the user.
 * @param newPassword - The new password.
 *
 * @public
 */ async function confirmPasswordReset(auth, oobCode, newPassword) {
    await resetPassword((0, _util.getModularInstance)(auth), {
        oobCode,
        newPassword
    }).catch(async (error)=>{
        if (error.code === `auth/${"password-does-not-meet-requirements" /* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */ }`) recachePasswordPolicy(auth);
        throw error;
    });
// Do not return the email.
}
/**
 * Applies a verification code sent to the user by email or other out-of-band mechanism.
 *
 * @param auth - The {@link Auth} instance.
 * @param oobCode - A verification code sent to the user.
 *
 * @public
 */ async function applyActionCode(auth, oobCode) {
    await applyActionCode$1((0, _util.getModularInstance)(auth), {
        oobCode
    });
}
/**
 * Checks a verification code sent to the user by email or other out-of-band mechanism.
 *
 * @returns metadata about the code.
 *
 * @param auth - The {@link Auth} instance.
 * @param oobCode - A verification code sent to the user.
 *
 * @public
 */ async function checkActionCode(auth, oobCode) {
    const authModular = (0, _util.getModularInstance)(auth);
    const response = await resetPassword(authModular, {
        oobCode
    });
    // Email could be empty only if the request type is EMAIL_SIGNIN or
    // VERIFY_AND_CHANGE_EMAIL.
    // New email should not be empty if the request type is
    // VERIFY_AND_CHANGE_EMAIL.
    // Multi-factor info could not be empty if the request type is
    // REVERT_SECOND_FACTOR_ADDITION.
    const operation = response.requestType;
    _assert(operation, authModular, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
    switch(operation){
        case "EMAIL_SIGNIN" /* ActionCodeOperation.EMAIL_SIGNIN */ :
            break;
        case "VERIFY_AND_CHANGE_EMAIL" /* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */ :
            _assert(response.newEmail, authModular, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
            break;
        case "REVERT_SECOND_FACTOR_ADDITION" /* ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION */ :
            _assert(response.mfaInfo, authModular, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        // fall through
        default:
            _assert(response.email, authModular, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
    }
    // The multi-factor info for revert second factor addition
    let multiFactorInfo = null;
    if (response.mfaInfo) multiFactorInfo = MultiFactorInfoImpl._fromServerResponse(_castAuth(authModular), response.mfaInfo);
    return {
        data: {
            email: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" /* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */  ? response.newEmail : response.email) || null,
            previousEmail: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" /* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */  ? response.email : response.newEmail) || null,
            multiFactorInfo
        },
        operation
    };
}
/**
 * Checks a password reset code sent to the user by email or other out-of-band mechanism.
 *
 * @returns the user's email address if valid.
 *
 * @param auth - The {@link Auth} instance.
 * @param code - A verification code sent to the user.
 *
 * @public
 */ async function verifyPasswordResetCode(auth, code) {
    const { data } = await checkActionCode((0, _util.getModularInstance)(auth), code);
    // Email should always be present since a code was sent to it
    return data.email;
}
/**
 * Creates a new user account associated with the specified email address and password.
 *
 * @remarks
 * On successful creation of the user account, this user will also be signed in to your application.
 *
 * User account creation can fail if the account already exists or the password is invalid.
 *
 * This method is not supported on {@link Auth} instances created with a
 * {@link @firebase/app#FirebaseServerApp}.
 *
 * Note: The email address acts as a unique identifier for the user and enables an email-based
 * password reset. This function will create a new user account and set the initial user password.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param password - The user's chosen password.
 *
 * @public
 */ async function createUserWithEmailAndPassword(auth, email, password) {
    if ((0, _app._isFirebaseServerApp)(auth.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    const authInternal = _castAuth(auth);
    const request = {
        returnSecureToken: true,
        email,
        password,
        clientType: "CLIENT_TYPE_WEB" /* RecaptchaClientType.WEB */ 
    };
    const signUpResponse = handleRecaptchaFlow(authInternal, request, "signUpPassword" /* RecaptchaActionName.SIGN_UP_PASSWORD */ , signUp);
    const response = await signUpResponse.catch((error)=>{
        if (error.code === `auth/${"password-does-not-meet-requirements" /* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */ }`) recachePasswordPolicy(auth);
        throw error;
    });
    const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn" /* OperationType.SIGN_IN */ , response);
    await authInternal._updateCurrentUser(userCredential.user);
    return userCredential;
}
/**
 * Asynchronously signs in using an email and password.
 *
 * @remarks
 * Fails with an error if the email address and password do not match.
 * When [Email Enumeration Protection](https://cloud.google.com/identity-platform/docs/admin/email-enumeration-protection) is enabled,
 * this method fails with "auth/invalid-credential" in case of an invalid email/password.
 *
 * This method is not supported on {@link Auth} instances created with a
 * {@link @firebase/app#FirebaseServerApp}.
 *
 * Note: The user's password is NOT the password used to access the user's email account. The
 * email address serves as a unique identifier for the user, and the password is used to access
 * the user's account in your Firebase project. See also: {@link createUserWithEmailAndPassword}.
 *
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The users email address.
 * @param password - The users password.
 *
 * @public
 */ function signInWithEmailAndPassword(auth, email, password) {
    if ((0, _app._isFirebaseServerApp)(auth.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    return signInWithCredential((0, _util.getModularInstance)(auth), EmailAuthProvider.credential(email, password)).catch(async (error)=>{
        if (error.code === `auth/${"password-does-not-meet-requirements" /* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */ }`) recachePasswordPolicy(auth);
        throw error;
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Sends a sign-in email link to the user with the specified email.
 *
 * @remarks
 * The sign-in operation has to always be completed in the app unlike other out of band email
 * actions (password reset and email verifications). This is because, at the end of the flow,
 * the user is expected to be signed in and their Auth state persisted within the app.
 *
 * To complete sign in with the email link, call {@link signInWithEmailLink} with the email
 * address and the email link supplied in the email sent to the user.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await sendSignInLinkToEmail(auth, 'user@example.com', actionCodeSettings);
 * // Obtain emailLink from the user.
 * if(isSignInWithEmailLink(auth, emailLink)) {
 *   await signInWithEmailLink(auth, 'user@example.com', emailLink);
 * }
 * ```
 *
 * @param authInternal - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param actionCodeSettings - The {@link ActionCodeSettings}.
 *
 * @public
 */ async function sendSignInLinkToEmail(auth, email, actionCodeSettings) {
    const authInternal = _castAuth(auth);
    const request = {
        requestType: "EMAIL_SIGNIN" /* ActionCodeOperation.EMAIL_SIGNIN */ ,
        email,
        clientType: "CLIENT_TYPE_WEB" /* RecaptchaClientType.WEB */ 
    };
    function setActionCodeSettings(request, actionCodeSettings) {
        _assert(actionCodeSettings.handleCodeInApp, authInternal, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        if (actionCodeSettings) _setActionCodeSettingsOnRequest(authInternal, request, actionCodeSettings);
    }
    setActionCodeSettings(request, actionCodeSettings);
    await handleRecaptchaFlow(authInternal, request, "getOobCode" /* RecaptchaActionName.GET_OOB_CODE */ , sendSignInLinkToEmail$1);
}
/**
 * Checks if an incoming link is a sign-in with email link suitable for {@link signInWithEmailLink}.
 *
 * @param auth - The {@link Auth} instance.
 * @param emailLink - The link sent to the user's email address.
 *
 * @public
 */ function isSignInWithEmailLink(auth, emailLink) {
    const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
    return (actionCodeUrl === null || actionCodeUrl === void 0 ? void 0 : actionCodeUrl.operation) === "EMAIL_SIGNIN" /* ActionCodeOperation.EMAIL_SIGNIN */ ;
}
/**
 * Asynchronously signs in using an email and sign-in email link.
 *
 * @remarks
 * If no link is passed, the link is inferred from the current URL.
 *
 * Fails with an error if the email address is invalid or OTP in email link expires.
 *
 * This method is not supported by {@link Auth} instances created with a
 * {@link @firebase/app#FirebaseServerApp}.
 *
 * Note: Confirm the link is a sign-in email link before calling this method firebase.auth.Auth.isSignInWithEmailLink.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await sendSignInLinkToEmail(auth, 'user@example.com', actionCodeSettings);
 * // Obtain emailLink from the user.
 * if(isSignInWithEmailLink(auth, emailLink)) {
 *   await signInWithEmailLink(auth, 'user@example.com', emailLink);
 * }
 * ```
 *
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param emailLink - The link sent to the user's email address.
 *
 * @public
 */ async function signInWithEmailLink(auth, email, emailLink) {
    if ((0, _app._isFirebaseServerApp)(auth.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    const authModular = (0, _util.getModularInstance)(auth);
    const credential = EmailAuthProvider.credentialWithLink(email, emailLink || _getCurrentUrl());
    // Check if the tenant ID in the email link matches the tenant ID on Auth
    // instance.
    _assert(credential._tenantId === (authModular.tenantId || null), authModular, "tenant-id-mismatch" /* AuthErrorCode.TENANT_ID_MISMATCH */ );
    return signInWithCredential(authModular, credential);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function createAuthUri(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:createAuthUri" /* Endpoint.CREATE_AUTH_URI */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Gets the list of possible sign in methods for the given email address. This method returns an
 * empty list when [Email Enumeration Protection](https://cloud.google.com/identity-platform/docs/admin/email-enumeration-protection) is enabled, irrespective of the number of
 * authentication methods available for the given email.
 *
 * @remarks
 * This is useful to differentiate methods of sign-in for the same provider, eg.
 * {@link EmailAuthProvider} which has 2 methods of sign-in,
 * {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 *
 * Deprecated. Migrating off of this method is recommended as a security best-practice.
 * Learn more in the Identity Platform documentation for [Email Enumeration Protection](https://cloud.google.com/identity-platform/docs/admin/email-enumeration-protection).
 * @public
 */ async function fetchSignInMethodsForEmail(auth, email) {
    // createAuthUri returns an error if continue URI is not http or https.
    // For environments like Cordova, Chrome extensions, native frameworks, file
    // systems, etc, use http://localhost as continue URL.
    const continueUri = _isHttpOrHttps() ? _getCurrentUrl() : "http://localhost";
    const request = {
        identifier: email,
        continueUri
    };
    const { signinMethods } = await createAuthUri((0, _util.getModularInstance)(auth), request);
    return signinMethods || [];
}
/**
 * Sends a verification email to a user.
 *
 * @remarks
 * The verification process is completed by calling {@link applyActionCode}.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await sendEmailVerification(user, actionCodeSettings);
 * // Obtain code from the user.
 * await applyActionCode(auth, code);
 * ```
 *
 * @param user - The user.
 * @param actionCodeSettings - The {@link ActionCodeSettings}.
 *
 * @public
 */ async function sendEmailVerification(user, actionCodeSettings) {
    const userInternal = (0, _util.getModularInstance)(user);
    const idToken = await user.getIdToken();
    const request = {
        requestType: "VERIFY_EMAIL" /* ActionCodeOperation.VERIFY_EMAIL */ ,
        idToken
    };
    if (actionCodeSettings) _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
    const { email } = await sendEmailVerification$1(userInternal.auth, request);
    if (email !== user.email) await user.reload();
}
/**
 * Sends a verification email to a new email address.
 *
 * @remarks
 * The user's email will be updated to the new one after being verified.
 *
 * If you have a custom email action handler, you can complete the verification process by calling
 * {@link applyActionCode}.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await verifyBeforeUpdateEmail(user, 'newemail@example.com', actionCodeSettings);
 * // Obtain code from the user.
 * await applyActionCode(auth, code);
 * ```
 *
 * @param user - The user.
 * @param newEmail - The new email address to be verified before update.
 * @param actionCodeSettings - The {@link ActionCodeSettings}.
 *
 * @public
 */ async function verifyBeforeUpdateEmail(user, newEmail, actionCodeSettings) {
    const userInternal = (0, _util.getModularInstance)(user);
    const idToken = await user.getIdToken();
    const request = {
        requestType: "VERIFY_AND_CHANGE_EMAIL" /* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */ ,
        idToken,
        newEmail
    };
    if (actionCodeSettings) _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
    const { email } = await verifyAndChangeEmail(userInternal.auth, request);
    if (email !== user.email) // If the local copy of the email on user is outdated, reload the
    // user.
    await user.reload();
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function updateProfile$1(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v1/accounts:update" /* Endpoint.SET_ACCOUNT_INFO */ , request);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Updates a user's profile data.
 *
 * @param user - The user.
 * @param profile - The profile's `displayName` and `photoURL` to update.
 *
 * @public
 */ async function updateProfile(user, { displayName, photoURL: photoUrl }) {
    if (displayName === undefined && photoUrl === undefined) return;
    const userInternal = (0, _util.getModularInstance)(user);
    const idToken = await userInternal.getIdToken();
    const profileRequest = {
        idToken,
        displayName,
        photoUrl,
        returnSecureToken: true
    };
    const response = await _logoutIfInvalidated(userInternal, updateProfile$1(userInternal.auth, profileRequest));
    userInternal.displayName = response.displayName || null;
    userInternal.photoURL = response.photoUrl || null;
    // Update the password provider as well
    const passwordProvider = userInternal.providerData.find(({ providerId })=>providerId === "password" /* ProviderId.PASSWORD */ );
    if (passwordProvider) {
        passwordProvider.displayName = userInternal.displayName;
        passwordProvider.photoURL = userInternal.photoURL;
    }
    await userInternal._updateTokensIfNecessary(response);
}
/**
 * Updates the user's email address.
 *
 * @remarks
 * An email will be sent to the original email address (if it was set) that allows to revoke the
 * email address change, in order to protect them from account hijacking.
 *
 * This method is not supported on any {@link User} signed in by {@link Auth} instances
 * created with a {@link @firebase/app#FirebaseServerApp}.
 *
 * Important: this is a security sensitive operation that requires the user to have recently signed
 * in. If this requirement isn't met, ask the user to authenticate again and then call
 * {@link reauthenticateWithCredential}.
 *
 * @param user - The user.
 * @param newEmail - The new email address.
 *
 * Throws "auth/operation-not-allowed" error when [Email Enumeration Protection](https://cloud.google.com/identity-platform/docs/admin/email-enumeration-protection) is enabled.
 * Deprecated - Use {@link verifyBeforeUpdateEmail} instead.
 *
 * @public
 */ function updateEmail(user, newEmail) {
    const userInternal = (0, _util.getModularInstance)(user);
    if ((0, _app._isFirebaseServerApp)(userInternal.auth.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
    return updateEmailOrPassword(userInternal, newEmail, null);
}
/**
 * Updates the user's password.
 *
 * @remarks
 * Important: this is a security sensitive operation that requires the user to have recently signed
 * in. If this requirement isn't met, ask the user to authenticate again and then call
 * {@link reauthenticateWithCredential}.
 *
 * @param user - The user.
 * @param newPassword - The new password.
 *
 * @public
 */ function updatePassword(user, newPassword) {
    return updateEmailOrPassword((0, _util.getModularInstance)(user), null, newPassword);
}
async function updateEmailOrPassword(user, email, password) {
    const { auth } = user;
    const idToken = await user.getIdToken();
    const request = {
        idToken,
        returnSecureToken: true
    };
    if (email) request.email = email;
    if (password) request.password = password;
    const response = await _logoutIfInvalidated(user, updateEmailPassword(auth, request));
    await user._updateTokensIfNecessary(response, /* reload */ true);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Parse the `AdditionalUserInfo` from the ID token response.
 *
 */ function _fromIdTokenResponse(idTokenResponse) {
    var _a, _b;
    if (!idTokenResponse) return null;
    const { providerId } = idTokenResponse;
    const profile = idTokenResponse.rawUserInfo ? JSON.parse(idTokenResponse.rawUserInfo) : {};
    const isNewUser = idTokenResponse.isNewUser || idTokenResponse.kind === "identitytoolkit#SignupNewUserResponse" /* IdTokenResponseKind.SignupNewUser */ ;
    if (!providerId && (idTokenResponse === null || idTokenResponse === void 0 ? void 0 : idTokenResponse.idToken)) {
        const signInProvider = (_b = (_a = _parseToken(idTokenResponse.idToken)) === null || _a === void 0 ? void 0 : _a.firebase) === null || _b === void 0 ? void 0 : _b["sign_in_provider"];
        if (signInProvider) {
            const filteredProviderId = signInProvider !== "anonymous" /* ProviderId.ANONYMOUS */  && signInProvider !== "custom" /* ProviderId.CUSTOM */  ? signInProvider : null;
            // Uses generic class in accordance with the legacy SDK.
            return new GenericAdditionalUserInfo(isNewUser, filteredProviderId);
        }
    }
    if (!providerId) return null;
    switch(providerId){
        case "facebook.com" /* ProviderId.FACEBOOK */ :
            return new FacebookAdditionalUserInfo(isNewUser, profile);
        case "github.com" /* ProviderId.GITHUB */ :
            return new GithubAdditionalUserInfo(isNewUser, profile);
        case "google.com" /* ProviderId.GOOGLE */ :
            return new GoogleAdditionalUserInfo(isNewUser, profile);
        case "twitter.com" /* ProviderId.TWITTER */ :
            return new TwitterAdditionalUserInfo(isNewUser, profile, idTokenResponse.screenName || null);
        case "custom" /* ProviderId.CUSTOM */ :
        case "anonymous" /* ProviderId.ANONYMOUS */ :
            return new GenericAdditionalUserInfo(isNewUser, null);
        default:
            return new GenericAdditionalUserInfo(isNewUser, providerId, profile);
    }
}
class GenericAdditionalUserInfo {
    constructor(isNewUser, providerId, profile = {}){
        this.isNewUser = isNewUser;
        this.providerId = providerId;
        this.profile = profile;
    }
}
class FederatedAdditionalUserInfoWithUsername extends GenericAdditionalUserInfo {
    constructor(isNewUser, providerId, profile, username){
        super(isNewUser, providerId, profile);
        this.username = username;
    }
}
class FacebookAdditionalUserInfo extends GenericAdditionalUserInfo {
    constructor(isNewUser, profile){
        super(isNewUser, "facebook.com" /* ProviderId.FACEBOOK */ , profile);
    }
}
class GithubAdditionalUserInfo extends FederatedAdditionalUserInfoWithUsername {
    constructor(isNewUser, profile){
        super(isNewUser, "github.com" /* ProviderId.GITHUB */ , profile, typeof (profile === null || profile === void 0 ? void 0 : profile.login) === "string" ? profile === null || profile === void 0 ? void 0 : profile.login : null);
    }
}
class GoogleAdditionalUserInfo extends GenericAdditionalUserInfo {
    constructor(isNewUser, profile){
        super(isNewUser, "google.com" /* ProviderId.GOOGLE */ , profile);
    }
}
class TwitterAdditionalUserInfo extends FederatedAdditionalUserInfoWithUsername {
    constructor(isNewUser, profile, screenName){
        super(isNewUser, "twitter.com" /* ProviderId.TWITTER */ , profile, screenName);
    }
}
/**
 * Extracts provider specific {@link AdditionalUserInfo} for the given credential.
 *
 * @param userCredential - The user credential.
 *
 * @public
 */ function getAdditionalUserInfo(userCredential) {
    const { user, _tokenResponse } = userCredential;
    if (user.isAnonymous && !_tokenResponse) // Handle the special case where signInAnonymously() gets called twice.
    // No network call is made so there's nothing to actually fill this in
    return {
        providerId: null,
        isNewUser: false,
        profile: null
    };
    return _fromIdTokenResponse(_tokenResponse);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Non-optional auth methods.
/**
 * Changes the type of persistence on the {@link Auth} instance for the currently saved
 * `Auth` session and applies this type of persistence for future sign-in requests, including
 * sign-in with redirect requests.
 *
 * @remarks
 * This makes it easy for a user signing in to specify whether their session should be
 * remembered or not. It also makes it easier to never persist the `Auth` state for applications
 * that are shared by other users or have sensitive data.
 *
 * This method does not work in a Node.js environment or with {@link Auth} instances created with a
 * {@link @firebase/app#FirebaseServerApp}.
 *
 * @example
 * ```javascript
 * setPersistence(auth, browserSessionPersistence);
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param persistence - The {@link Persistence} to use.
 * @returns A `Promise` that resolves once the persistence change has completed
 *
 * @public
 */ function setPersistence(auth, persistence) {
    return (0, _util.getModularInstance)(auth).setPersistence(persistence);
}
/**
 * Loads the reCAPTCHA configuration into the `Auth` instance.
 *
 * @remarks
 * This will load the reCAPTCHA config, which indicates whether the reCAPTCHA
 * verification flow should be triggered for each auth provider, into the
 * current Auth session.
 *
 * If initializeRecaptchaConfig() is not invoked, the auth flow will always start
 * without reCAPTCHA verification. If the provider is configured to require reCAPTCHA
 * verification, the SDK will transparently load the reCAPTCHA config and restart the
 * auth flows.
 *
 * Thus, by calling this optional method, you will reduce the latency of future auth flows.
 * Loading the reCAPTCHA config early will also enhance the signal collected by reCAPTCHA.
 *
 * This method does not work in a Node.js environment.
 *
 * @example
 * ```javascript
 * initializeRecaptchaConfig(auth);
 * ```
 *
 * @param auth - The {@link Auth} instance.
 *
 * @public
 */ function initializeRecaptchaConfig(auth) {
    return _initializeRecaptchaConfig(auth);
}
/**
 * Validates the password against the password policy configured for the project or tenant.
 *
 * @remarks
 * If no tenant ID is set on the `Auth` instance, then this method will use the password
 * policy configured for the project. Otherwise, this method will use the policy configured
 * for the tenant. If a password policy has not been configured, then the default policy
 * configured for all projects will be used.
 *
 * If an auth flow fails because a submitted password does not meet the password policy
 * requirements and this method has previously been called, then this method will use the
 * most recent policy available when called again.
 *
 * @example
 * ```javascript
 * validatePassword(auth, 'some-password');
 * ```
 *
 * @param auth The {@link Auth} instance.
 * @param password The password to validate.
 *
 * @public
 */ async function validatePassword(auth, password) {
    const authInternal = _castAuth(auth);
    return authInternal.validatePassword(password);
}
/**
 * Adds an observer for changes to the signed-in user's ID token.
 *
 * @remarks
 * This includes sign-in, sign-out, and token refresh events.
 * This will not be triggered automatically upon ID token expiration. Use {@link User.getIdToken} to refresh the ID token.
 *
 * @param auth - The {@link Auth} instance.
 * @param nextOrObserver - callback triggered on change.
 * @param error - Deprecated. This callback is never triggered. Errors
 * on signing in/out can be caught in promises returned from
 * sign-in/sign-out functions.
 * @param completed - Deprecated. This callback is never triggered.
 *
 * @public
 */ function onIdTokenChanged(auth, nextOrObserver, error, completed) {
    return (0, _util.getModularInstance)(auth).onIdTokenChanged(nextOrObserver, error, completed);
}
/**
 * Adds a blocking callback that runs before an auth state change
 * sets a new user.
 *
 * @param auth - The {@link Auth} instance.
 * @param callback - callback triggered before new user value is set.
 *   If this throws, it blocks the user from being set.
 * @param onAbort - callback triggered if a later `beforeAuthStateChanged()`
 *   callback throws, allowing you to undo any side effects.
 */ function beforeAuthStateChanged(auth, callback, onAbort) {
    return (0, _util.getModularInstance)(auth).beforeAuthStateChanged(callback, onAbort);
}
/**
 * Adds an observer for changes to the user's sign-in state.
 *
 * @remarks
 * To keep the old behavior, see {@link onIdTokenChanged}.
 *
 * @param auth - The {@link Auth} instance.
 * @param nextOrObserver - callback triggered on change.
 * @param error - Deprecated. This callback is never triggered. Errors
 * on signing in/out can be caught in promises returned from
 * sign-in/sign-out functions.
 * @param completed - Deprecated. This callback is never triggered.
 *
 * @public
 */ function onAuthStateChanged(auth, nextOrObserver, error, completed) {
    return (0, _util.getModularInstance)(auth).onAuthStateChanged(nextOrObserver, error, completed);
}
/**
 * Sets the current language to the default device/browser preference.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @public
 */ function useDeviceLanguage(auth) {
    (0, _util.getModularInstance)(auth).useDeviceLanguage();
}
/**
 * Asynchronously sets the provided user as {@link Auth.currentUser} on the
 * {@link Auth} instance.
 *
 * @remarks
 * A new instance copy of the user provided will be made and set as currentUser.
 *
 * This will trigger {@link onAuthStateChanged} and {@link onIdTokenChanged} listeners
 * like other sign in methods.
 *
 * The operation fails with an error if the user to be updated belongs to a different Firebase
 * project.
 *
 * This method is not supported by {@link Auth} instances created with a
 * {@link @firebase/app#FirebaseServerApp}.
 *
 * @param auth - The {@link Auth} instance.
 * @param user - The new {@link User}.
 *
 * @public
 */ function updateCurrentUser(auth, user) {
    return (0, _util.getModularInstance)(auth).updateCurrentUser(user);
}
/**
 * Signs out the current user.
 *
 * @remarks
 * This method is not supported by {@link Auth} instances created with a
 * {@link @firebase/app#FirebaseServerApp}.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @public
 */ function signOut(auth) {
    return (0, _util.getModularInstance)(auth).signOut();
}
/**
 * Revokes the given access token. Currently only supports Apple OAuth access tokens.
 *
 * @param auth - The {@link Auth} instance.
 * @param token - The Apple OAuth access token.
 *
 * @public
 */ function revokeAccessToken(auth, token) {
    const authInternal = _castAuth(auth);
    return authInternal.revokeAccessToken(token);
}
/**
 * Deletes and signs out the user.
 *
 * @remarks
 * Important: this is a security-sensitive operation that requires the user to have recently
 * signed in. If this requirement isn't met, ask the user to authenticate again and then call
 * {@link reauthenticateWithCredential}.
 *
 * @param user - The user.
 *
 * @public
 */ async function deleteUser(user) {
    return (0, _util.getModularInstance)(user).delete();
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MultiFactorSessionImpl {
    constructor(type, credential, user){
        this.type = type;
        this.credential = credential;
        this.user = user;
    }
    static _fromIdtoken(idToken, user) {
        return new MultiFactorSessionImpl("enroll" /* MultiFactorSessionType.ENROLL */ , idToken, user);
    }
    static _fromMfaPendingCredential(mfaPendingCredential) {
        return new MultiFactorSessionImpl("signin" /* MultiFactorSessionType.SIGN_IN */ , mfaPendingCredential);
    }
    toJSON() {
        const key = this.type === "enroll" /* MultiFactorSessionType.ENROLL */  ? "idToken" : "pendingCredential";
        return {
            multiFactorSession: {
                [key]: this.credential
            }
        };
    }
    static fromJSON(obj) {
        var _a, _b;
        if (obj === null || obj === void 0 ? void 0 : obj.multiFactorSession) {
            if ((_a = obj.multiFactorSession) === null || _a === void 0 ? void 0 : _a.pendingCredential) return MultiFactorSessionImpl._fromMfaPendingCredential(obj.multiFactorSession.pendingCredential);
            else if ((_b = obj.multiFactorSession) === null || _b === void 0 ? void 0 : _b.idToken) return MultiFactorSessionImpl._fromIdtoken(obj.multiFactorSession.idToken);
        }
        return null;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MultiFactorResolverImpl {
    constructor(session, hints, signInResolver){
        this.session = session;
        this.hints = hints;
        this.signInResolver = signInResolver;
    }
    /** @internal */ static _fromError(authExtern, error) {
        const auth = _castAuth(authExtern);
        const serverResponse = error.customData._serverResponse;
        const hints = (serverResponse.mfaInfo || []).map((enrollment)=>MultiFactorInfoImpl._fromServerResponse(auth, enrollment));
        _assert(serverResponse.mfaPendingCredential, auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        const session = MultiFactorSessionImpl._fromMfaPendingCredential(serverResponse.mfaPendingCredential);
        return new MultiFactorResolverImpl(session, hints, async (assertion)=>{
            const mfaResponse = await assertion._process(auth, session);
            // Clear out the unneeded fields from the old login response
            delete serverResponse.mfaInfo;
            delete serverResponse.mfaPendingCredential;
            // Use in the new token & refresh token in the old response
            const idTokenResponse = Object.assign(Object.assign({}, serverResponse), {
                idToken: mfaResponse.idToken,
                refreshToken: mfaResponse.refreshToken
            });
            // TODO: we should collapse this switch statement into UserCredentialImpl._forOperation and have it support the SIGN_IN case
            switch(error.operationType){
                case "signIn" /* OperationType.SIGN_IN */ :
                    const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, error.operationType, idTokenResponse);
                    await auth._updateCurrentUser(userCredential.user);
                    return userCredential;
                case "reauthenticate" /* OperationType.REAUTHENTICATE */ :
                    _assert(error.user, auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
                    return UserCredentialImpl._forOperation(error.user, error.operationType, idTokenResponse);
                default:
                    _fail(auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
            }
        });
    }
    async resolveSignIn(assertionExtern) {
        const assertion = assertionExtern;
        return this.signInResolver(assertion);
    }
}
/**
 * Provides a {@link MultiFactorResolver} suitable for completion of a
 * multi-factor flow.
 *
 * @param auth - The {@link Auth} instance.
 * @param error - The {@link MultiFactorError} raised during a sign-in, or
 * reauthentication operation.
 *
 * @public
 */ function getMultiFactorResolver(auth, error) {
    var _a;
    const authModular = (0, _util.getModularInstance)(auth);
    const errorInternal = error;
    _assert(error.customData.operationType, authModular, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
    _assert((_a = errorInternal.customData._serverResponse) === null || _a === void 0 ? void 0 : _a.mfaPendingCredential, authModular, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
    return MultiFactorResolverImpl._fromError(authModular, errorInternal);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function startEnrollPhoneMfa(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v2/accounts/mfaEnrollment:start" /* Endpoint.START_MFA_ENROLLMENT */ , _addTidIfNecessary(auth, request));
}
function finalizeEnrollPhoneMfa(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v2/accounts/mfaEnrollment:finalize" /* Endpoint.FINALIZE_MFA_ENROLLMENT */ , _addTidIfNecessary(auth, request));
}
function startEnrollTotpMfa(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v2/accounts/mfaEnrollment:start" /* Endpoint.START_MFA_ENROLLMENT */ , _addTidIfNecessary(auth, request));
}
function finalizeEnrollTotpMfa(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v2/accounts/mfaEnrollment:finalize" /* Endpoint.FINALIZE_MFA_ENROLLMENT */ , _addTidIfNecessary(auth, request));
}
function withdrawMfa(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v2/accounts/mfaEnrollment:withdraw" /* Endpoint.WITHDRAW_MFA */ , _addTidIfNecessary(auth, request));
}
class MultiFactorUserImpl {
    constructor(user){
        this.user = user;
        this.enrolledFactors = [];
        user._onReload((userInfo)=>{
            if (userInfo.mfaInfo) this.enrolledFactors = userInfo.mfaInfo.map((enrollment)=>MultiFactorInfoImpl._fromServerResponse(user.auth, enrollment));
        });
    }
    static _fromUser(user) {
        return new MultiFactorUserImpl(user);
    }
    async getSession() {
        return MultiFactorSessionImpl._fromIdtoken(await this.user.getIdToken(), this.user);
    }
    async enroll(assertionExtern, displayName) {
        const assertion = assertionExtern;
        const session = await this.getSession();
        const finalizeMfaResponse = await _logoutIfInvalidated(this.user, assertion._process(this.user.auth, session, displayName));
        // New tokens will be issued after enrollment of the new second factors.
        // They need to be updated on the user.
        await this.user._updateTokensIfNecessary(finalizeMfaResponse);
        // The user needs to be reloaded to get the new multi-factor information
        // from server. USER_RELOADED event will be triggered and `enrolledFactors`
        // will be updated.
        return this.user.reload();
    }
    async unenroll(infoOrUid) {
        const mfaEnrollmentId = typeof infoOrUid === "string" ? infoOrUid : infoOrUid.uid;
        const idToken = await this.user.getIdToken();
        try {
            const idTokenResponse = await _logoutIfInvalidated(this.user, withdrawMfa(this.user.auth, {
                idToken,
                mfaEnrollmentId
            }));
            // Remove the second factor from the user's list.
            this.enrolledFactors = this.enrolledFactors.filter(({ uid })=>uid !== mfaEnrollmentId);
            // Depending on whether the backend decided to revoke the user's session,
            // the tokenResponse may be empty. If the tokens were not updated (and they
            // are now invalid), reloading the user will discover this and invalidate
            // the user's state accordingly.
            await this.user._updateTokensIfNecessary(idTokenResponse);
            await this.user.reload();
        } catch (e) {
            throw e;
        }
    }
}
const multiFactorUserCache = new WeakMap();
/**
 * The {@link MultiFactorUser} corresponding to the user.
 *
 * @remarks
 * This is used to access all multi-factor properties and operations related to the user.
 *
 * @param user - The user.
 *
 * @public
 */ function multiFactor(user) {
    const userModular = (0, _util.getModularInstance)(user);
    if (!multiFactorUserCache.has(userModular)) multiFactorUserCache.set(userModular, MultiFactorUserImpl._fromUser(userModular));
    return multiFactorUserCache.get(userModular);
}
const STORAGE_AVAILABLE_KEY = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class BrowserPersistenceClass {
    constructor(storageRetriever, type){
        this.storageRetriever = storageRetriever;
        this.type = type;
    }
    _isAvailable() {
        try {
            if (!this.storage) return Promise.resolve(false);
            this.storage.setItem(STORAGE_AVAILABLE_KEY, "1");
            this.storage.removeItem(STORAGE_AVAILABLE_KEY);
            return Promise.resolve(true);
        } catch (_a) {
            return Promise.resolve(false);
        }
    }
    _set(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
        return Promise.resolve();
    }
    _get(key) {
        const json = this.storage.getItem(key);
        return Promise.resolve(json ? JSON.parse(json) : null);
    }
    _remove(key) {
        this.storage.removeItem(key);
        return Promise.resolve();
    }
    get storage() {
        return this.storageRetriever();
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _iframeCannotSyncWebStorage() {
    const ua = (0, _util.getUA)();
    return _isSafari(ua) || _isIOS(ua);
}
// The polling period in case events are not supported
const _POLLING_INTERVAL_MS$1 = 1000;
// The IE 10 localStorage cross tab synchronization delay in milliseconds
const IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
class BrowserLocalPersistence extends BrowserPersistenceClass {
    constructor(){
        super(()=>window.localStorage, "LOCAL" /* PersistenceType.LOCAL */ );
        this.boundEventHandler = (event, poll)=>this.onStorageEvent(event, poll);
        this.listeners = {};
        this.localCache = {};
        // setTimeout return value is platform specific
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.pollTimer = null;
        // Safari or iOS browser and embedded in an iframe.
        this.safariLocalStorageNotSynced = _iframeCannotSyncWebStorage() && _isIframe();
        // Whether to use polling instead of depending on window events
        this.fallbackToPolling = _isMobileBrowser();
        this._shouldAllowMigration = true;
    }
    forAllChangedKeys(cb) {
        // Check all keys with listeners on them.
        for (const key of Object.keys(this.listeners)){
            // Get value from localStorage.
            const newValue = this.storage.getItem(key);
            const oldValue = this.localCache[key];
            // If local map value does not match, trigger listener with storage event.
            // Differentiate this simulated event from the real storage event.
            if (newValue !== oldValue) cb(key, oldValue, newValue);
        }
    }
    onStorageEvent(event, poll = false) {
        // Key would be null in some situations, like when localStorage is cleared
        if (!event.key) {
            this.forAllChangedKeys((key, _oldValue, newValue)=>{
                this.notifyListeners(key, newValue);
            });
            return;
        }
        const key = event.key;
        // Check the mechanism how this event was detected.
        // The first event will dictate the mechanism to be used.
        if (poll) // Environment detects storage changes via polling.
        // Remove storage event listener to prevent possible event duplication.
        this.detachListener();
        else // Environment detects storage changes via storage event listener.
        // Remove polling listener to prevent possible event duplication.
        this.stopPolling();
        // Safari embedded iframe. Storage event will trigger with the delta
        // changes but no changes will be applied to the iframe localStorage.
        if (this.safariLocalStorageNotSynced) {
            // Get current iframe page value.
            const storedValue = this.storage.getItem(key);
            // Value not synchronized, synchronize manually.
            if (event.newValue !== storedValue) {
                if (event.newValue !== null) // Value changed from current value.
                this.storage.setItem(key, event.newValue);
                else // Current value deleted.
                this.storage.removeItem(key);
            } else if (this.localCache[key] === event.newValue && !poll) // Already detected and processed, do not trigger listeners again.
            return;
        }
        const triggerListeners = ()=>{
            // Keep local map up to date in case storage event is triggered before
            // poll.
            const storedValue = this.storage.getItem(key);
            if (!poll && this.localCache[key] === storedValue) // Real storage event which has already been detected, do nothing.
            // This seems to trigger in some IE browsers for some reason.
            return;
            this.notifyListeners(key, storedValue);
        };
        const storedValue = this.storage.getItem(key);
        if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) // IE 10 has this weird bug where a storage event would trigger with the
        // correct key, oldValue and newValue but localStorage.getItem(key) does
        // not yield the updated value until a few milliseconds. This ensures
        // this recovers from that situation.
        setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
        else triggerListeners();
    }
    notifyListeners(key, value) {
        this.localCache[key] = value;
        const listeners = this.listeners[key];
        if (listeners) for (const listener of Array.from(listeners))listener(value ? JSON.parse(value) : value);
    }
    startPolling() {
        this.stopPolling();
        this.pollTimer = setInterval(()=>{
            this.forAllChangedKeys((key, oldValue, newValue)=>{
                this.onStorageEvent(new StorageEvent("storage", {
                    key,
                    oldValue,
                    newValue
                }), /* poll */ true);
            });
        }, _POLLING_INTERVAL_MS$1);
    }
    stopPolling() {
        if (this.pollTimer) {
            clearInterval(this.pollTimer);
            this.pollTimer = null;
        }
    }
    attachListener() {
        window.addEventListener("storage", this.boundEventHandler);
    }
    detachListener() {
        window.removeEventListener("storage", this.boundEventHandler);
    }
    _addListener(key, listener) {
        if (Object.keys(this.listeners).length === 0) {
            // Whether browser can detect storage event when it had already been pushed to the background.
            // This may happen in some mobile browsers. A localStorage change in the foreground window
            // will not be detected in the background window via the storage event.
            // This was detected in iOS 7.x mobile browsers
            if (this.fallbackToPolling) this.startPolling();
            else this.attachListener();
        }
        if (!this.listeners[key]) {
            this.listeners[key] = new Set();
            // Populate the cache to avoid spuriously triggering on first poll.
            this.localCache[key] = this.storage.getItem(key);
        }
        this.listeners[key].add(listener);
    }
    _removeListener(key, listener) {
        if (this.listeners[key]) {
            this.listeners[key].delete(listener);
            if (this.listeners[key].size === 0) delete this.listeners[key];
        }
        if (Object.keys(this.listeners).length === 0) {
            this.detachListener();
            this.stopPolling();
        }
    }
    // Update local cache on base operations:
    async _set(key, value) {
        await super._set(key, value);
        this.localCache[key] = JSON.stringify(value);
    }
    async _get(key) {
        const value = await super._get(key);
        this.localCache[key] = JSON.stringify(value);
        return value;
    }
    async _remove(key) {
        await super._remove(key);
        delete this.localCache[key];
    }
}
BrowserLocalPersistence.type = "LOCAL";
/**
 * An implementation of {@link Persistence} of type `LOCAL` using `localStorage`
 * for the underlying storage.
 *
 * @public
 */ const browserLocalPersistence = BrowserLocalPersistence;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class BrowserSessionPersistence extends BrowserPersistenceClass {
    constructor(){
        super(()=>window.sessionStorage, "SESSION" /* PersistenceType.SESSION */ );
    }
    _addListener(_key, _listener) {
        // Listeners are not supported for session storage since it cannot be shared across windows
        return;
    }
    _removeListener(_key, _listener) {
        // Listeners are not supported for session storage since it cannot be shared across windows
        return;
    }
}
BrowserSessionPersistence.type = "SESSION";
/**
 * An implementation of {@link Persistence} of `SESSION` using `sessionStorage`
 * for the underlying storage.
 *
 * @public
 */ const browserSessionPersistence = BrowserSessionPersistence;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Shim for Promise.allSettled, note the slightly different format of `fulfilled` vs `status`.
 *
 * @param promises - Array of promises to wait on.
 */ function _allSettled(promises) {
    return Promise.all(promises.map(async (promise)=>{
        try {
            const value = await promise;
            return {
                fulfilled: true,
                value
            };
        } catch (reason) {
            return {
                fulfilled: false,
                reason
            };
        }
    }));
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface class for receiving messages.
 *
 */ class Receiver {
    constructor(eventTarget){
        this.eventTarget = eventTarget;
        this.handlersMap = {};
        this.boundEventHandler = this.handleEvent.bind(this);
    }
    /**
     * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
     *
     * @param eventTarget - An event target (such as window or self) through which the underlying
     * messages will be received.
     */ static _getInstance(eventTarget) {
        // The results are stored in an array since objects can't be keys for other
        // objects. In addition, setting a unique property on an event target as a
        // hash map key may not be allowed due to CORS restrictions.
        const existingInstance = this.receivers.find((receiver)=>receiver.isListeningto(eventTarget));
        if (existingInstance) return existingInstance;
        const newInstance = new Receiver(eventTarget);
        this.receivers.push(newInstance);
        return newInstance;
    }
    isListeningto(eventTarget) {
        return this.eventTarget === eventTarget;
    }
    /**
     * Fans out a MessageEvent to the appropriate listeners.
     *
     * @remarks
     * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
     * finished processing.
     *
     * @param event - The MessageEvent.
     *
     */ async handleEvent(event) {
        const messageEvent = event;
        const { eventId, eventType, data } = messageEvent.data;
        const handlers = this.handlersMap[eventType];
        if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) return;
        messageEvent.ports[0].postMessage({
            status: "ack" /* _Status.ACK */ ,
            eventId,
            eventType
        });
        const promises = Array.from(handlers).map(async (handler)=>handler(messageEvent.origin, data));
        const response = await _allSettled(promises);
        messageEvent.ports[0].postMessage({
            status: "done" /* _Status.DONE */ ,
            eventId,
            eventType,
            response
        });
    }
    /**
     * Subscribe an event handler for a particular event.
     *
     * @param eventType - Event name to subscribe to.
     * @param eventHandler - The event handler which should receive the events.
     *
     */ _subscribe(eventType, eventHandler) {
        if (Object.keys(this.handlersMap).length === 0) this.eventTarget.addEventListener("message", this.boundEventHandler);
        if (!this.handlersMap[eventType]) this.handlersMap[eventType] = new Set();
        this.handlersMap[eventType].add(eventHandler);
    }
    /**
     * Unsubscribe an event handler from a particular event.
     *
     * @param eventType - Event name to unsubscribe from.
     * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
     *
     */ _unsubscribe(eventType, eventHandler) {
        if (this.handlersMap[eventType] && eventHandler) this.handlersMap[eventType].delete(eventHandler);
        if (!eventHandler || this.handlersMap[eventType].size === 0) delete this.handlersMap[eventType];
        if (Object.keys(this.handlersMap).length === 0) this.eventTarget.removeEventListener("message", this.boundEventHandler);
    }
}
Receiver.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _generateEventId(prefix = "", digits = 10) {
    let random = "";
    for(let i = 0; i < digits; i++)random += Math.floor(Math.random() * 10);
    return prefix + random;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface for sending messages and waiting for a completion response.
 *
 */ class Sender {
    constructor(target){
        this.target = target;
        this.handlers = new Set();
    }
    /**
     * Unsubscribe the handler and remove it from our tracking Set.
     *
     * @param handler - The handler to unsubscribe.
     */ removeMessageHandler(handler) {
        if (handler.messageChannel) {
            handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
            handler.messageChannel.port1.close();
        }
        this.handlers.delete(handler);
    }
    /**
     * Send a message to the Receiver located at {@link target}.
     *
     * @remarks
     * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
     * receiver has had a chance to fully process the event.
     *
     * @param eventType - Type of event to send.
     * @param data - The payload of the event.
     * @param timeout - Timeout for waiting on an ACK from the receiver.
     *
     * @returns An array of settled promises from all the handlers that were listening on the receiver.
     */ async _send(eventType, data, timeout = 50 /* _TimeoutDuration.ACK */ ) {
        const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
        if (!messageChannel) throw new Error("connection_unavailable" /* _MessageError.CONNECTION_UNAVAILABLE */ );
        // Node timers and browser timers return fundamentally different types.
        // We don't actually care what the value is but TS won't accept unknown and
        // we can't cast properly in both environments.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let completionTimer;
        let handler;
        return new Promise((resolve, reject)=>{
            const eventId = _generateEventId("", 20);
            messageChannel.port1.start();
            const ackTimer = setTimeout(()=>{
                reject(new Error("unsupported_event" /* _MessageError.UNSUPPORTED_EVENT */ ));
            }, timeout);
            handler = {
                messageChannel,
                onMessage (event) {
                    const messageEvent = event;
                    if (messageEvent.data.eventId !== eventId) return;
                    switch(messageEvent.data.status){
                        case "ack" /* _Status.ACK */ :
                            // The receiver should ACK first.
                            clearTimeout(ackTimer);
                            completionTimer = setTimeout(()=>{
                                reject(new Error("timeout" /* _MessageError.TIMEOUT */ ));
                            }, 3000 /* _TimeoutDuration.COMPLETION */ );
                            break;
                        case "done" /* _Status.DONE */ :
                            // Once the receiver's handlers are finished we will get the results.
                            clearTimeout(completionTimer);
                            resolve(messageEvent.data.response);
                            break;
                        default:
                            clearTimeout(ackTimer);
                            clearTimeout(completionTimer);
                            reject(new Error("invalid_response" /* _MessageError.INVALID_RESPONSE */ ));
                            break;
                    }
                }
            };
            this.handlers.add(handler);
            messageChannel.port1.addEventListener("message", handler.onMessage);
            this.target.postMessage({
                eventType,
                eventId,
                data
            }, [
                messageChannel.port2
            ]);
        }).finally(()=>{
            if (handler) this.removeMessageHandler(handler);
        });
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */ function _window() {
    return window;
}
function _setWindowLocation(url) {
    _window().location.href = url;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _isWorker() {
    return typeof _window()["WorkerGlobalScope"] !== "undefined" && typeof _window()["importScripts"] === "function";
}
async function _getActiveServiceWorker() {
    if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) return null;
    try {
        const registration = await navigator.serviceWorker.ready;
        return registration.active;
    } catch (_a) {
        return null;
    }
}
function _getServiceWorkerController() {
    var _a;
    return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
}
function _getWorkerGlobalScope() {
    return _isWorker() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DB_NAME = "firebaseLocalStorageDb";
const DB_VERSION = 1;
const DB_OBJECTSTORE_NAME = "firebaseLocalStorage";
const DB_DATA_KEYPATH = "fbase_key";
/**
 * Promise wrapper for IDBRequest
 *
 * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
 *
 */ class DBPromise {
    constructor(request){
        this.request = request;
    }
    toPromise() {
        return new Promise((resolve, reject)=>{
            this.request.addEventListener("success", ()=>{
                resolve(this.request.result);
            });
            this.request.addEventListener("error", ()=>{
                reject(this.request.error);
            });
        });
    }
}
function getObjectStore(db, isReadWrite) {
    return db.transaction([
        DB_OBJECTSTORE_NAME
    ], isReadWrite ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME);
}
function _deleteDatabase() {
    const request = indexedDB.deleteDatabase(DB_NAME);
    return new DBPromise(request).toPromise();
}
function _openDatabase() {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    return new Promise((resolve, reject)=>{
        request.addEventListener("error", ()=>{
            reject(request.error);
        });
        request.addEventListener("upgradeneeded", ()=>{
            const db = request.result;
            try {
                db.createObjectStore(DB_OBJECTSTORE_NAME, {
                    keyPath: DB_DATA_KEYPATH
                });
            } catch (e) {
                reject(e);
            }
        });
        request.addEventListener("success", async ()=>{
            const db = request.result;
            // Strange bug that occurs in Firefox when multiple tabs are opened at the
            // same time. The only way to recover seems to be deleting the database
            // and re-initializing it.
            // https://github.com/firebase/firebase-js-sdk/issues/634
            if (!db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
                // Need to close the database or else you get a `blocked` event
                db.close();
                await _deleteDatabase();
                resolve(await _openDatabase());
            } else resolve(db);
        });
    });
}
async function _putObject(db, key, value) {
    const request = getObjectStore(db, true).put({
        [DB_DATA_KEYPATH]: key,
        value
    });
    return new DBPromise(request).toPromise();
}
async function getObject(db, key) {
    const request = getObjectStore(db, false).get(key);
    const data = await new DBPromise(request).toPromise();
    return data === undefined ? null : data.value;
}
function _deleteObject(db, key) {
    const request = getObjectStore(db, true).delete(key);
    return new DBPromise(request).toPromise();
}
const _POLLING_INTERVAL_MS = 800;
const _TRANSACTION_RETRY_COUNT = 3;
class IndexedDBLocalPersistence {
    constructor(){
        this.type = "LOCAL" /* PersistenceType.LOCAL */ ;
        this._shouldAllowMigration = true;
        this.listeners = {};
        this.localCache = {};
        // setTimeout return value is platform specific
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.pollTimer = null;
        this.pendingWrites = 0;
        this.receiver = null;
        this.sender = null;
        this.serviceWorkerReceiverAvailable = false;
        this.activeServiceWorker = null;
        // Fire & forget the service worker registration as it may never resolve
        this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(()=>{}, ()=>{});
    }
    async _openDb() {
        if (this.db) return this.db;
        this.db = await _openDatabase();
        return this.db;
    }
    async _withRetries(op) {
        let numAttempts = 0;
        while(true)try {
            const db = await this._openDb();
            return await op(db);
        } catch (e) {
            if (numAttempts++ > _TRANSACTION_RETRY_COUNT) throw e;
            if (this.db) {
                this.db.close();
                this.db = undefined;
            }
        // TODO: consider adding exponential backoff
        }
    }
    /**
     * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
     * postMessage interface to send these events to the worker ourselves.
     */ async initializeServiceWorkerMessaging() {
        return _isWorker() ? this.initializeReceiver() : this.initializeSender();
    }
    /**
     * As the worker we should listen to events from the main window.
     */ async initializeReceiver() {
        this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
        // Refresh from persistence if we receive a KeyChanged message.
        this.receiver._subscribe("keyChanged" /* _EventType.KEY_CHANGED */ , async (_origin, data)=>{
            const keys = await this._poll();
            return {
                keyProcessed: keys.includes(data.key)
            };
        });
        // Let the sender know that we are listening so they give us more timeout.
        this.receiver._subscribe("ping" /* _EventType.PING */ , async (_origin, _data)=>{
            return [
                "keyChanged" /* _EventType.KEY_CHANGED */ 
            ];
        });
    }
    /**
     * As the main window, we should let the worker know when keys change (set and remove).
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
     * may not resolve.
     */ async initializeSender() {
        var _a, _b;
        // Check to see if there's an active service worker.
        this.activeServiceWorker = await _getActiveServiceWorker();
        if (!this.activeServiceWorker) return;
        this.sender = new Sender(this.activeServiceWorker);
        // Ping the service worker to check what events they can handle.
        const results = await this.sender._send("ping" /* _EventType.PING */ , {}, 800 /* _TimeoutDuration.LONG_ACK */ );
        if (!results) return;
        if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged" /* _EventType.KEY_CHANGED */ ))) this.serviceWorkerReceiverAvailable = true;
    }
    /**
     * Let the worker know about a changed key, the exact key doesn't technically matter since the
     * worker will just trigger a full sync anyway.
     *
     * @remarks
     * For now, we only support one service worker per page.
     *
     * @param key - Storage key which changed.
     */ async notifyServiceWorker(key) {
        if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) return;
        try {
            await this.sender._send("keyChanged" /* _EventType.KEY_CHANGED */ , {
                key
            }, // Use long timeout if receiver has previously responded to a ping from us.
            this.serviceWorkerReceiverAvailable ? 800 /* _TimeoutDuration.LONG_ACK */  : 50 /* _TimeoutDuration.ACK */ );
        } catch (_a) {
        // This is a best effort approach. Ignore errors.
        }
    }
    async _isAvailable() {
        try {
            if (!indexedDB) return false;
            const db = await _openDatabase();
            await _putObject(db, STORAGE_AVAILABLE_KEY, "1");
            await _deleteObject(db, STORAGE_AVAILABLE_KEY);
            return true;
        } catch (_a) {}
        return false;
    }
    async _withPendingWrite(write) {
        this.pendingWrites++;
        try {
            await write();
        } finally{
            this.pendingWrites--;
        }
    }
    async _set(key, value) {
        return this._withPendingWrite(async ()=>{
            await this._withRetries((db)=>_putObject(db, key, value));
            this.localCache[key] = value;
            return this.notifyServiceWorker(key);
        });
    }
    async _get(key) {
        const obj = await this._withRetries((db)=>getObject(db, key));
        this.localCache[key] = obj;
        return obj;
    }
    async _remove(key) {
        return this._withPendingWrite(async ()=>{
            await this._withRetries((db)=>_deleteObject(db, key));
            delete this.localCache[key];
            return this.notifyServiceWorker(key);
        });
    }
    async _poll() {
        // TODO: check if we need to fallback if getAll is not supported
        const result = await this._withRetries((db)=>{
            const getAllRequest = getObjectStore(db, false).getAll();
            return new DBPromise(getAllRequest).toPromise();
        });
        if (!result) return [];
        // If we have pending writes in progress abort, we'll get picked up on the next poll
        if (this.pendingWrites !== 0) return [];
        const keys = [];
        const keysInResult = new Set();
        if (result.length !== 0) for (const { fbase_key: key, value } of result){
            keysInResult.add(key);
            if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
                this.notifyListeners(key, value);
                keys.push(key);
            }
        }
        for (const localKey of Object.keys(this.localCache))if (this.localCache[localKey] && !keysInResult.has(localKey)) {
            // Deleted
            this.notifyListeners(localKey, null);
            keys.push(localKey);
        }
        return keys;
    }
    notifyListeners(key, newValue) {
        this.localCache[key] = newValue;
        const listeners = this.listeners[key];
        if (listeners) for (const listener of Array.from(listeners))listener(newValue);
    }
    startPolling() {
        this.stopPolling();
        this.pollTimer = setInterval(async ()=>this._poll(), _POLLING_INTERVAL_MS);
    }
    stopPolling() {
        if (this.pollTimer) {
            clearInterval(this.pollTimer);
            this.pollTimer = null;
        }
    }
    _addListener(key, listener) {
        if (Object.keys(this.listeners).length === 0) this.startPolling();
        if (!this.listeners[key]) {
            this.listeners[key] = new Set();
            // Populate the cache to avoid spuriously triggering on first poll.
            this._get(key); // This can happen in the background async and we can return immediately.
        }
        this.listeners[key].add(listener);
    }
    _removeListener(key, listener) {
        if (this.listeners[key]) {
            this.listeners[key].delete(listener);
            if (this.listeners[key].size === 0) delete this.listeners[key];
        }
        if (Object.keys(this.listeners).length === 0) this.stopPolling();
    }
}
IndexedDBLocalPersistence.type = "LOCAL";
/**
 * An implementation of {@link Persistence} of type `LOCAL` using `indexedDB`
 * for the underlying storage.
 *
 * @public
 */ const indexedDBLocalPersistence = IndexedDBLocalPersistence;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function startSignInPhoneMfa(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v2/accounts/mfaSignIn:start" /* Endpoint.START_MFA_SIGN_IN */ , _addTidIfNecessary(auth, request));
}
function finalizeSignInPhoneMfa(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v2/accounts/mfaSignIn:finalize" /* Endpoint.FINALIZE_MFA_SIGN_IN */ , _addTidIfNecessary(auth, request));
}
function finalizeSignInTotpMfa(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */ , "/v2/accounts/mfaSignIn:finalize" /* Endpoint.FINALIZE_MFA_SIGN_IN */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _SOLVE_TIME_MS = 500;
const _EXPIRATION_TIME_MS = 60000;
const _WIDGET_ID_START = 1000000000000;
class MockReCaptcha {
    constructor(auth){
        this.auth = auth;
        this.counter = _WIDGET_ID_START;
        this._widgets = new Map();
    }
    render(container, parameters) {
        const id = this.counter;
        this._widgets.set(id, new MockWidget(container, this.auth.name, parameters || {}));
        this.counter++;
        return id;
    }
    reset(optWidgetId) {
        var _a;
        const id = optWidgetId || _WIDGET_ID_START;
        (_a = this._widgets.get(id)) === null || _a === void 0 || _a.delete();
        this._widgets.delete(id);
    }
    getResponse(optWidgetId) {
        var _a;
        const id = optWidgetId || _WIDGET_ID_START;
        return ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.getResponse()) || "";
    }
    async execute(optWidgetId) {
        var _a;
        const id = optWidgetId || _WIDGET_ID_START;
        (_a = this._widgets.get(id)) === null || _a === void 0 || _a.execute();
        return "";
    }
}
class MockWidget {
    constructor(containerOrId, appName, params){
        this.params = params;
        this.timerId = null;
        this.deleted = false;
        this.responseToken = null;
        this.clickHandler = ()=>{
            this.execute();
        };
        const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
        _assert(container, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ , {
            appName
        });
        this.container = container;
        this.isVisible = this.params.size !== "invisible";
        if (this.isVisible) this.execute();
        else this.container.addEventListener("click", this.clickHandler);
    }
    getResponse() {
        this.checkIfDeleted();
        return this.responseToken;
    }
    delete() {
        this.checkIfDeleted();
        this.deleted = true;
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
        this.container.removeEventListener("click", this.clickHandler);
    }
    execute() {
        this.checkIfDeleted();
        if (this.timerId) return;
        this.timerId = window.setTimeout(()=>{
            this.responseToken = generateRandomAlphaNumericString(50);
            const { callback, "expired-callback": expiredCallback } = this.params;
            if (callback) try {
                callback(this.responseToken);
            } catch (e) {}
            this.timerId = window.setTimeout(()=>{
                this.timerId = null;
                this.responseToken = null;
                if (expiredCallback) try {
                    expiredCallback();
                } catch (e) {}
                if (this.isVisible) this.execute();
            }, _EXPIRATION_TIME_MS);
        }, _SOLVE_TIME_MS);
    }
    checkIfDeleted() {
        if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!");
    }
}
function generateRandomAlphaNumericString(len) {
    const chars = [];
    const allowedChars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0; i < len; i++)chars.push(allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)));
    return chars.join("");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // ReCaptcha will load using the same callback, so the callback function needs
// to be kept around
const _JSLOAD_CALLBACK = _generateCallbackName("rcb");
const NETWORK_TIMEOUT_DELAY = new Delay(30000, 60000);
/**
 * Loader for the GReCaptcha library. There should only ever be one of this.
 */ class ReCaptchaLoaderImpl {
    constructor(){
        var _a;
        this.hostLanguage = "";
        this.counter = 0;
        /**
         * Check for `render()` method. `window.grecaptcha` will exist if the Enterprise
         * version of the ReCAPTCHA script was loaded by someone else (e.g. App Check) but
         * `window.grecaptcha.render()` will not. Another load will add it.
         */ this.librarySeparatelyLoaded = !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render);
    }
    load(auth, hl = "") {
        _assert(isHostLanguageValid(hl), auth, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        if (this.shouldResolveImmediately(hl) && isV2(_window().grecaptcha)) return Promise.resolve(_window().grecaptcha);
        return new Promise((resolve, reject)=>{
            const networkTimeout = _window().setTimeout(()=>{
                reject(_createError(auth, "network-request-failed" /* AuthErrorCode.NETWORK_REQUEST_FAILED */ ));
            }, NETWORK_TIMEOUT_DELAY.get());
            _window()[_JSLOAD_CALLBACK] = ()=>{
                _window().clearTimeout(networkTimeout);
                delete _window()[_JSLOAD_CALLBACK];
                const recaptcha = _window().grecaptcha;
                if (!recaptcha || !isV2(recaptcha)) {
                    reject(_createError(auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ ));
                    return;
                }
                // Wrap the greptcha render function so that we know if the developer has
                // called it separately
                const render = recaptcha.render;
                recaptcha.render = (container, params)=>{
                    const widgetId = render(container, params);
                    this.counter++;
                    return widgetId;
                };
                this.hostLanguage = hl;
                resolve(recaptcha);
            };
            const url = `${_recaptchaV2ScriptUrl()}?${(0, _util.querystring)({
                onload: _JSLOAD_CALLBACK,
                render: "explicit",
                hl
            })}`;
            _loadJS(url).catch(()=>{
                clearTimeout(networkTimeout);
                reject(_createError(auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ ));
            });
        });
    }
    clearedOneInstance() {
        this.counter--;
    }
    shouldResolveImmediately(hl) {
        var _a;
        // We can resolve immediately if:
        //   • grecaptcha is already defined AND (
        //     1. the requested language codes are the same OR
        //     2. there exists already a ReCaptcha on the page
        //     3. the library was already loaded by the app
        // In cases (2) and (3), we _can't_ reload as it would break the recaptchas
        // that are already in the page
        return !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render) && (hl === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
    }
}
function isHostLanguageValid(hl) {
    return hl.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(hl);
}
class MockReCaptchaLoaderImpl {
    async load(auth) {
        return new MockReCaptcha(auth);
    }
    clearedOneInstance() {}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const RECAPTCHA_VERIFIER_TYPE = "recaptcha";
const DEFAULT_PARAMS = {
    theme: "light",
    type: "image"
};
/**
 * An {@link https://www.google.com/recaptcha/ | reCAPTCHA}-based application verifier.
 *
 * @remarks
 * `RecaptchaVerifier` does not work in a Node.js environment.
 *
 * @public
 */ class RecaptchaVerifier {
    /**
     * @param authExtern - The corresponding Firebase {@link Auth} instance.
     *
     * @param containerOrId - The reCAPTCHA container parameter.
     *
     * @remarks
     * This has different meaning depending on whether the reCAPTCHA is hidden or visible. For a
     * visible reCAPTCHA the container must be empty. If a string is used, it has to correspond to
     * an element ID. The corresponding element must also must be in the DOM at the time of
     * initialization.
     *
     * @param parameters - The optional reCAPTCHA parameters.
     *
     * @remarks
     * Check the reCAPTCHA docs for a comprehensive list. All parameters are accepted except for
     * the sitekey. Firebase Auth backend provisions a reCAPTCHA for each project and will
     * configure this upon rendering. For an invisible reCAPTCHA, a size key must have the value
     * 'invisible'.
     */ constructor(authExtern, containerOrId, parameters = Object.assign({}, DEFAULT_PARAMS)){
        this.parameters = parameters;
        /**
         * The application verifier type.
         *
         * @remarks
         * For a reCAPTCHA verifier, this is 'recaptcha'.
         */ this.type = RECAPTCHA_VERIFIER_TYPE;
        this.destroyed = false;
        this.widgetId = null;
        this.tokenChangeListeners = new Set();
        this.renderPromise = null;
        this.recaptcha = null;
        this.auth = _castAuth(authExtern);
        this.isInvisible = this.parameters.size === "invisible";
        _assert(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment" /* AuthErrorCode.OPERATION_NOT_SUPPORTED */ );
        const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
        _assert(container, this.auth, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        this.container = container;
        this.parameters.callback = this.makeTokenCallback(this.parameters.callback);
        this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new MockReCaptchaLoaderImpl() : new ReCaptchaLoaderImpl();
        this.validateStartingState();
    // TODO: Figure out if sdk version is needed
    }
    /**
     * Waits for the user to solve the reCAPTCHA and resolves with the reCAPTCHA token.
     *
     * @returns A Promise for the reCAPTCHA token.
     */ async verify() {
        this.assertNotDestroyed();
        const id = await this.render();
        const recaptcha = this.getAssertedRecaptcha();
        const response = recaptcha.getResponse(id);
        if (response) return response;
        return new Promise((resolve)=>{
            const tokenChange = (token)=>{
                if (!token) return; // Ignore token expirations.
                this.tokenChangeListeners.delete(tokenChange);
                resolve(token);
            };
            this.tokenChangeListeners.add(tokenChange);
            if (this.isInvisible) recaptcha.execute(id);
        });
    }
    /**
     * Renders the reCAPTCHA widget on the page.
     *
     * @returns A Promise that resolves with the reCAPTCHA widget ID.
     */ render() {
        try {
            this.assertNotDestroyed();
        } catch (e) {
            // This method returns a promise. Since it's not async (we want to return the
            // _same_ promise if rendering is still occurring), the API surface should
            // reject with the error rather than just throw
            return Promise.reject(e);
        }
        if (this.renderPromise) return this.renderPromise;
        this.renderPromise = this.makeRenderPromise().catch((e)=>{
            this.renderPromise = null;
            throw e;
        });
        return this.renderPromise;
    }
    /** @internal */ _reset() {
        this.assertNotDestroyed();
        if (this.widgetId !== null) this.getAssertedRecaptcha().reset(this.widgetId);
    }
    /**
     * Clears the reCAPTCHA widget from the page and destroys the instance.
     */ clear() {
        this.assertNotDestroyed();
        this.destroyed = true;
        this._recaptchaLoader.clearedOneInstance();
        if (!this.isInvisible) this.container.childNodes.forEach((node)=>{
            this.container.removeChild(node);
        });
    }
    validateStartingState() {
        _assert(!this.parameters.sitekey, this.auth, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        _assert(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        _assert(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment" /* AuthErrorCode.OPERATION_NOT_SUPPORTED */ );
    }
    makeTokenCallback(existing) {
        return (token)=>{
            this.tokenChangeListeners.forEach((listener)=>listener(token));
            if (typeof existing === "function") existing(token);
            else if (typeof existing === "string") {
                const globalFunc = _window()[existing];
                if (typeof globalFunc === "function") globalFunc(token);
            }
        };
    }
    assertNotDestroyed() {
        _assert(!this.destroyed, this.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
    }
    async makeRenderPromise() {
        await this.init();
        if (!this.widgetId) {
            let container = this.container;
            if (!this.isInvisible) {
                const guaranteedEmpty = document.createElement("div");
                container.appendChild(guaranteedEmpty);
                container = guaranteedEmpty;
            }
            this.widgetId = this.getAssertedRecaptcha().render(container, this.parameters);
        }
        return this.widgetId;
    }
    async init() {
        _assert(_isHttpOrHttps() && !_isWorker(), this.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        await domReady();
        this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || undefined);
        const siteKey = await getRecaptchaParams(this.auth);
        _assert(siteKey, this.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        this.parameters.sitekey = siteKey;
    }
    getAssertedRecaptcha() {
        _assert(this.recaptcha, this.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        return this.recaptcha;
    }
}
function domReady() {
    let resolver = null;
    return new Promise((resolve)=>{
        if (document.readyState === "complete") {
            resolve();
            return;
        }
        // Document not ready, wait for load before resolving.
        // Save resolver, so we can remove listener in case it was externally
        // cancelled.
        resolver = ()=>resolve();
        window.addEventListener("load", resolver);
    }).catch((e)=>{
        if (resolver) window.removeEventListener("load", resolver);
        throw e;
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ConfirmationResultImpl {
    constructor(verificationId, onConfirmation){
        this.verificationId = verificationId;
        this.onConfirmation = onConfirmation;
    }
    confirm(verificationCode) {
        const authCredential = PhoneAuthCredential._fromVerification(this.verificationId, verificationCode);
        return this.onConfirmation(authCredential);
    }
}
/**
 * Asynchronously signs in using a phone number.
 *
 * @remarks
 * This method sends a code via SMS to the given
 * phone number, and returns a {@link ConfirmationResult}. After the user
 * provides the code sent to their phone, call {@link ConfirmationResult.confirm}
 * with the code to sign the user in.
 *
 * For abuse prevention, this method also requires a {@link ApplicationVerifier}.
 * This SDK includes a reCAPTCHA-based implementation, {@link RecaptchaVerifier}.
 * This function can work on other platforms that do not support the
 * {@link RecaptchaVerifier} (like React Native), but you need to use a
 * third-party {@link ApplicationVerifier} implementation.
 *
 * This method does not work in a Node.js environment or with {@link Auth} instances created with a
 * {@link @firebase/app#FirebaseServerApp}.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
 * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
 * // Obtain a verificationCode from the user.
 * const credential = await confirmationResult.confirm(verificationCode);
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param phoneNumber - The user's phone number in E.164 format (e.g. +16505550101).
 * @param appVerifier - The {@link ApplicationVerifier}.
 *
 * @public
 */ async function signInWithPhoneNumber(auth, phoneNumber, appVerifier) {
    if ((0, _app._isFirebaseServerApp)(auth.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    const authInternal = _castAuth(auth);
    const verificationId = await _verifyPhoneNumber(authInternal, phoneNumber, (0, _util.getModularInstance)(appVerifier));
    return new ConfirmationResultImpl(verificationId, (cred)=>signInWithCredential(authInternal, cred));
}
/**
 * Links the user account with the given phone number.
 *
 * @remarks
 * This method does not work in a Node.js environment.
 *
 * @param user - The user.
 * @param phoneNumber - The user's phone number in E.164 format (e.g. +16505550101).
 * @param appVerifier - The {@link ApplicationVerifier}.
 *
 * @public
 */ async function linkWithPhoneNumber(user, phoneNumber, appVerifier) {
    const userInternal = (0, _util.getModularInstance)(user);
    await _assertLinkedStatus(false, userInternal, "phone" /* ProviderId.PHONE */ );
    const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, (0, _util.getModularInstance)(appVerifier));
    return new ConfirmationResultImpl(verificationId, (cred)=>linkWithCredential(userInternal, cred));
}
/**
 * Re-authenticates a user using a fresh phone credential.
 *
 * @remarks
 * Use before operations such as {@link updatePassword} that require tokens from recent sign-in attempts.
 *
 * This method does not work in a Node.js environment or on any {@link User} signed in by
 * {@link Auth} instances created with a {@link @firebase/app#FirebaseServerApp}.
 *
 * @param user - The user.
 * @param phoneNumber - The user's phone number in E.164 format (e.g. +16505550101).
 * @param appVerifier - The {@link ApplicationVerifier}.
 *
 * @public
 */ async function reauthenticateWithPhoneNumber(user, phoneNumber, appVerifier) {
    const userInternal = (0, _util.getModularInstance)(user);
    if ((0, _app._isFirebaseServerApp)(userInternal.auth.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
    const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, (0, _util.getModularInstance)(appVerifier));
    return new ConfirmationResultImpl(verificationId, (cred)=>reauthenticateWithCredential(userInternal, cred));
}
/**
 * Returns a verification ID to be used in conjunction with the SMS code that is sent.
 *
 */ async function _verifyPhoneNumber(auth, options, verifier) {
    var _a;
    const recaptchaToken = await verifier.verify();
    try {
        _assert(typeof recaptchaToken === "string", auth, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        _assert(verifier.type === RECAPTCHA_VERIFIER_TYPE, auth, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        let phoneInfoOptions;
        if (typeof options === "string") phoneInfoOptions = {
            phoneNumber: options
        };
        else phoneInfoOptions = options;
        if ("session" in phoneInfoOptions) {
            const session = phoneInfoOptions.session;
            if ("phoneNumber" in phoneInfoOptions) {
                _assert(session.type === "enroll" /* MultiFactorSessionType.ENROLL */ , auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
                const response = await startEnrollPhoneMfa(auth, {
                    idToken: session.credential,
                    phoneEnrollmentInfo: {
                        phoneNumber: phoneInfoOptions.phoneNumber,
                        recaptchaToken
                    }
                });
                return response.phoneSessionInfo.sessionInfo;
            } else {
                _assert(session.type === "signin" /* MultiFactorSessionType.SIGN_IN */ , auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
                const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
                _assert(mfaEnrollmentId, auth, "missing-multi-factor-info" /* AuthErrorCode.MISSING_MFA_INFO */ );
                const response = await startSignInPhoneMfa(auth, {
                    mfaPendingCredential: session.credential,
                    mfaEnrollmentId,
                    phoneSignInInfo: {
                        recaptchaToken
                    }
                });
                return response.phoneResponseInfo.sessionInfo;
            }
        } else {
            const { sessionInfo } = await sendPhoneVerificationCode(auth, {
                phoneNumber: phoneInfoOptions.phoneNumber,
                recaptchaToken
            });
            return sessionInfo;
        }
    } finally{
        verifier._reset();
    }
}
/**
 * Updates the user's phone number.
 *
 * @remarks
 * This method does not work in a Node.js environment or on any {@link User} signed in by
 * {@link Auth} instances created with a {@link @firebase/app#FirebaseServerApp}.
 *
 * @example
 * ```
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * await updatePhoneNumber(user, phoneCredential);
 * ```
 *
 * @param user - The user.
 * @param credential - A credential authenticating the new phone number.
 *
 * @public
 */ async function updatePhoneNumber(user, credential) {
    const userInternal = (0, _util.getModularInstance)(user);
    if ((0, _app._isFirebaseServerApp)(userInternal.auth.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
    await _link$1(userInternal, credential);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @remarks
 * `PhoneAuthProvider` does not work in a Node.js environment.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */ class PhoneAuthProvider {
    /**
     * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
     *
     */ constructor(auth){
        /** Always set to {@link ProviderId}.PHONE. */ this.providerId = PhoneAuthProvider.PROVIDER_ID;
        this.auth = _castAuth(auth);
    }
    /**
     *
     * Starts a phone number authentication flow by sending a verification code to the given phone
     * number.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
     * E.164 format (e.g. +16505550101).
     * @param applicationVerifier - For abuse prevention, this method also requires a
     * {@link ApplicationVerifier}. This SDK includes a reCAPTCHA-based implementation,
     * {@link RecaptchaVerifier}.
     *
     * @returns A Promise for a verification ID that can be passed to
     * {@link PhoneAuthProvider.credential} to identify this flow..
     */ verifyPhoneNumber(phoneOptions, applicationVerifier) {
        return _verifyPhoneNumber(this.auth, phoneOptions, (0, _util.getModularInstance)(applicationVerifier));
    }
    /**
     * Creates a phone auth credential, given the verification ID from
     * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
     * mobile device.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = await confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
     * @param verificationCode - The verification code sent to the user's mobile device.
     *
     * @returns The auth provider credential.
     */ static credential(verificationId, verificationCode) {
        return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
    }
    /**
     * Generates an {@link AuthCredential} from a {@link UserCredential}.
     * @param userCredential - The user credential.
     */ static credentialFromResult(userCredential) {
        const credential = userCredential;
        return PhoneAuthProvider.credentialFromTaggedObject(credential);
    }
    /**
     * Returns an {@link AuthCredential} when passed an error.
     *
     * @remarks
     *
     * This method works for errors like
     * `auth/account-exists-with-different-credentials`. This is useful for
     * recovering when attempting to set a user's phone number but the number
     * in question is already tied to another account. For example, the following
     * code tries to update the current user's phone number, and if that
     * fails, links the user with the account associated with that number:
     *
     * ```js
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(number, verifier);
     * try {
     *   const code = ''; // Prompt the user for the verification code
     *   await updatePhoneNumber(
     *       auth.currentUser,
     *       PhoneAuthProvider.credential(verificationId, code));
     * } catch (e) {
     *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
     *     const cred = PhoneAuthProvider.credentialFromError(e);
     *     await linkWithCredential(auth.currentUser, cred);
     *   }
     * }
     *
     * // At this point, auth.currentUser.phoneNumber === number.
     * ```
     *
     * @param error - The error to generate a credential from.
     */ static credentialFromError(error) {
        return PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse) return null;
        const { phoneNumber, temporaryProof } = tokenResponse;
        if (phoneNumber && temporaryProof) return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
        return null;
    }
}
/** Always set to {@link ProviderId}.PHONE. */ PhoneAuthProvider.PROVIDER_ID = "phone" /* ProviderId.PHONE */ ;
/** Always set to {@link SignInMethod}.PHONE. */ PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone" /* SignInMethod.PHONE */ ;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Chooses a popup/redirect resolver to use. This prefers the override (which
 * is directly passed in), and falls back to the property set on the auth
 * object. If neither are available, this function errors w/ an argument error.
 */ function _withDefaultResolver(auth, resolverOverride) {
    if (resolverOverride) return _getInstance(resolverOverride);
    _assert(auth._popupRedirectResolver, auth, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
    return auth._popupRedirectResolver;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class IdpCredential extends AuthCredential {
    constructor(params){
        super("custom" /* ProviderId.CUSTOM */ , "custom" /* ProviderId.CUSTOM */ );
        this.params = params;
    }
    _getIdTokenResponse(auth) {
        return signInWithIdp(auth, this._buildIdpRequest());
    }
    _linkToIdToken(auth, idToken) {
        return signInWithIdp(auth, this._buildIdpRequest(idToken));
    }
    _getReauthenticationResolver(auth) {
        return signInWithIdp(auth, this._buildIdpRequest());
    }
    _buildIdpRequest(idToken) {
        const request = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: true,
            returnIdpCredential: true
        };
        if (idToken) request.idToken = idToken;
        return request;
    }
}
function _signIn(params) {
    return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
}
function _reauth(params) {
    const { auth, user } = params;
    _assert(user, auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
    return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}
async function _link(params) {
    const { auth, user } = params;
    _assert(user, auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
    return _link$1(user, new IdpCredential(params), params.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */ class AbstractPopupRedirectOperation {
    constructor(auth, filter, resolver, user, bypassAuthState = false){
        this.auth = auth;
        this.resolver = resolver;
        this.user = user;
        this.bypassAuthState = bypassAuthState;
        this.pendingPromise = null;
        this.eventManager = null;
        this.filter = Array.isArray(filter) ? filter : [
            filter
        ];
    }
    execute() {
        return new Promise(async (resolve, reject)=>{
            this.pendingPromise = {
                resolve,
                reject
            };
            try {
                this.eventManager = await this.resolver._initialize(this.auth);
                await this.onExecution();
                this.eventManager.registerConsumer(this);
            } catch (e) {
                this.reject(e);
            }
        });
    }
    async onAuthEvent(event) {
        const { urlResponse, sessionId, postBody, tenantId, error, type } = event;
        if (error) {
            this.reject(error);
            return;
        }
        const params = {
            auth: this.auth,
            requestUri: urlResponse,
            sessionId: sessionId,
            tenantId: tenantId || undefined,
            postBody: postBody || undefined,
            user: this.user,
            bypassAuthState: this.bypassAuthState
        };
        try {
            this.resolve(await this.getIdpTask(type)(params));
        } catch (e) {
            this.reject(e);
        }
    }
    onError(error) {
        this.reject(error);
    }
    getIdpTask(type) {
        switch(type){
            case "signInViaPopup" /* AuthEventType.SIGN_IN_VIA_POPUP */ :
            case "signInViaRedirect" /* AuthEventType.SIGN_IN_VIA_REDIRECT */ :
                return _signIn;
            case "linkViaPopup" /* AuthEventType.LINK_VIA_POPUP */ :
            case "linkViaRedirect" /* AuthEventType.LINK_VIA_REDIRECT */ :
                return _link;
            case "reauthViaPopup" /* AuthEventType.REAUTH_VIA_POPUP */ :
            case "reauthViaRedirect" /* AuthEventType.REAUTH_VIA_REDIRECT */ :
                return _reauth;
            default:
                _fail(this.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        }
    }
    resolve(cred) {
        debugAssert(this.pendingPromise, "Pending promise was never set");
        this.pendingPromise.resolve(cred);
        this.unregisterAndCleanUp();
    }
    reject(error) {
        debugAssert(this.pendingPromise, "Pending promise was never set");
        this.pendingPromise.reject(error);
        this.unregisterAndCleanUp();
    }
    unregisterAndCleanUp() {
        if (this.eventManager) this.eventManager.unregisterConsumer(this);
        this.pendingPromise = null;
        this.cleanUp();
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2000, 10000);
/**
 * Authenticates a Firebase client using a popup-based OAuth authentication flow.
 *
 * @remarks
 * If succeeds, returns the signed in user along with the provider's credential. If sign in was
 * unsuccessful, returns an error object containing additional information about the error.
 *
 * This method does not work in a Node.js environment or with {@link Auth} instances created with a
 * {@link @firebase/app#FirebaseServerApp}.
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = provider.credentialFromResult(auth, result);
 * const token = credential.accessToken;
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */ async function signInWithPopup(auth, provider, resolver) {
    if ((0, _app._isFirebaseServerApp)(auth.app)) return Promise.reject(_createError(auth, "operation-not-supported-in-this-environment" /* AuthErrorCode.OPERATION_NOT_SUPPORTED */ ));
    const authInternal = _castAuth(auth);
    _assertInstanceOf(auth, provider, FederatedAuthProvider);
    const resolverInternal = _withDefaultResolver(authInternal, resolver);
    const action = new PopupOperation(authInternal, "signInViaPopup" /* AuthEventType.SIGN_IN_VIA_POPUP */ , provider, resolverInternal);
    return action.executeNotNull();
}
/**
 * Reauthenticates the current user with the specified {@link OAuthProvider} using a pop-up based
 * OAuth flow.
 *
 * @remarks
 * If the reauthentication is successful, the returned result will contain the user and the
 * provider's credential.
 *
 * This method does not work in a Node.js environment or on any {@link User} signed in by
 * {@link Auth} instances created with a {@link @firebase/app#FirebaseServerApp}.
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 * // Reauthenticate using a popup.
 * await reauthenticateWithPopup(result.user, provider);
 * ```
 *
 * @param user - The user.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */ async function reauthenticateWithPopup(user, provider, resolver) {
    const userInternal = (0, _util.getModularInstance)(user);
    if ((0, _app._isFirebaseServerApp)(userInternal.auth.app)) return Promise.reject(_createError(userInternal.auth, "operation-not-supported-in-this-environment" /* AuthErrorCode.OPERATION_NOT_SUPPORTED */ ));
    _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
    const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
    const action = new PopupOperation(userInternal.auth, "reauthViaPopup" /* AuthEventType.REAUTH_VIA_POPUP */ , provider, resolverInternal, userInternal);
    return action.executeNotNull();
}
/**
 * Links the authenticated provider to the user account using a pop-up based OAuth flow.
 *
 * @remarks
 * If the linking is successful, the returned result will contain the user and the provider's credential.
 *
 * This method does not work in a Node.js environment.
 *
 * @example
 * ```javascript
 * // Sign in using some other provider.
 * const result = await signInWithEmailAndPassword(auth, email, password);
 * // Link using a popup.
 * const provider = new FacebookAuthProvider();
 * await linkWithPopup(result.user, provider);
 * ```
 *
 * @param user - The user.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */ async function linkWithPopup(user, provider, resolver) {
    const userInternal = (0, _util.getModularInstance)(user);
    _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
    const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
    const action = new PopupOperation(userInternal.auth, "linkViaPopup" /* AuthEventType.LINK_VIA_POPUP */ , provider, resolverInternal, userInternal);
    return action.executeNotNull();
}
/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 *
 */ class PopupOperation extends AbstractPopupRedirectOperation {
    constructor(auth, filter, provider, resolver, user){
        super(auth, filter, resolver, user);
        this.provider = provider;
        this.authWindow = null;
        this.pollId = null;
        if (PopupOperation.currentPopupAction) PopupOperation.currentPopupAction.cancel();
        PopupOperation.currentPopupAction = this;
    }
    async executeNotNull() {
        const result = await this.execute();
        _assert(result, this.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        return result;
    }
    async onExecution() {
        debugAssert(this.filter.length === 1, "Popup operations only handle one event");
        const eventId = _generateEventId();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], eventId);
        this.authWindow.associatedEvent = eventId;
        // Check for web storage support and origin validation _after_ the popup is
        // loaded. These operations are slow (~1 second or so) Rather than
        // waiting on them before opening the window, optimistically open the popup
        // and check for storage support at the same time. If storage support is
        // not available, this will cause the whole thing to reject properly. It
        // will also close the popup, but since the promise has already rejected,
        // the popup closed by user poll will reject into the void.
        this.resolver._originValidation(this.auth).catch((e)=>{
            this.reject(e);
        });
        this.resolver._isIframeWebStorageSupported(this.auth, (isSupported)=>{
            if (!isSupported) this.reject(_createError(this.auth, "web-storage-unsupported" /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */ ));
        });
        // Handle user closure. Notice this does *not* use await
        this.pollUserCancellation();
    }
    get eventId() {
        var _a;
        return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
    }
    cancel() {
        this.reject(_createError(this.auth, "cancelled-popup-request" /* AuthErrorCode.EXPIRED_POPUP_REQUEST */ ));
    }
    cleanUp() {
        if (this.authWindow) this.authWindow.close();
        if (this.pollId) window.clearTimeout(this.pollId);
        this.authWindow = null;
        this.pollId = null;
        PopupOperation.currentPopupAction = null;
    }
    pollUserCancellation() {
        const poll = ()=>{
            var _a, _b;
            if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
                // Make sure that there is sufficient time for whatever action to
                // complete. The window could have closed but the sign in network
                // call could still be in flight. This is specifically true for
                // Firefox or if the opener is in an iframe, in which case the oauth
                // helper closes the popup.
                this.pollId = window.setTimeout(()=>{
                    this.pollId = null;
                    this.reject(_createError(this.auth, "popup-closed-by-user" /* AuthErrorCode.POPUP_CLOSED_BY_USER */ ));
                }, 8000 /* _Timeout.AUTH_EVENT */ );
                return;
            }
            this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
        };
        poll();
    }
}
// Only one popup is ever shown at once. The lifecycle of the current popup
// can be managed / cancelled by the constructor.
PopupOperation.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PENDING_REDIRECT_KEY = "pendingRedirect";
// We only get one redirect outcome for any one auth, so just store it
// in here.
const redirectOutcomeMap = new Map();
class RedirectAction extends AbstractPopupRedirectOperation {
    constructor(auth, resolver, bypassAuthState = false){
        super(auth, [
            "signInViaRedirect" /* AuthEventType.SIGN_IN_VIA_REDIRECT */ ,
            "linkViaRedirect" /* AuthEventType.LINK_VIA_REDIRECT */ ,
            "reauthViaRedirect" /* AuthEventType.REAUTH_VIA_REDIRECT */ ,
            "unknown" /* AuthEventType.UNKNOWN */ 
        ], resolver, undefined, bypassAuthState);
        this.eventId = null;
    }
    /**
     * Override the execute function; if we already have a redirect result, then
     * just return it.
     */ async execute() {
        let readyOutcome = redirectOutcomeMap.get(this.auth._key());
        if (!readyOutcome) {
            try {
                const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
                const result = hasPendingRedirect ? await super.execute() : null;
                readyOutcome = ()=>Promise.resolve(result);
            } catch (e) {
                readyOutcome = ()=>Promise.reject(e);
            }
            redirectOutcomeMap.set(this.auth._key(), readyOutcome);
        }
        // If we're not bypassing auth state, the ready outcome should be set to
        // null.
        if (!this.bypassAuthState) redirectOutcomeMap.set(this.auth._key(), ()=>Promise.resolve(null));
        return readyOutcome();
    }
    async onAuthEvent(event) {
        if (event.type === "signInViaRedirect" /* AuthEventType.SIGN_IN_VIA_REDIRECT */ ) return super.onAuthEvent(event);
        else if (event.type === "unknown" /* AuthEventType.UNKNOWN */ ) {
            // This is a sentinel value indicating there's no pending redirect
            this.resolve(null);
            return;
        }
        if (event.eventId) {
            const user = await this.auth._redirectUserForId(event.eventId);
            if (user) {
                this.user = user;
                return super.onAuthEvent(event);
            } else this.resolve(null);
        }
    }
    async onExecution() {}
    cleanUp() {}
}
async function _getAndClearPendingRedirectStatus(resolver, auth) {
    const key = pendingRedirectKey(auth);
    const persistence = resolverPersistence(resolver);
    if (!await persistence._isAvailable()) return false;
    const hasPendingRedirect = await persistence._get(key) === "true";
    await persistence._remove(key);
    return hasPendingRedirect;
}
async function _setPendingRedirectStatus(resolver, auth) {
    return resolverPersistence(resolver)._set(pendingRedirectKey(auth), "true");
}
function _clearRedirectOutcomes() {
    redirectOutcomeMap.clear();
}
function _overrideRedirectResult(auth, result) {
    redirectOutcomeMap.set(auth._key(), result);
}
function resolverPersistence(resolver) {
    return _getInstance(resolver._redirectPersistence);
}
function pendingRedirectKey(auth) {
    return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Authenticates a Firebase client using a full-page redirect flow.
 *
 * @remarks
 * To handle the results and errors for this operation, refer to {@link getRedirectResult}.
 * Follow the {@link https://firebase.google.com/docs/auth/web/redirect-best-practices
 * | best practices} when using {@link signInWithRedirect}.
 *
 * This method does not work in a Node.js environment or with {@link Auth} instances created with a
 * {@link @firebase/app#FirebaseServerApp}.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // You can add additional scopes to the provider:
 * provider.addScope('user_birthday');
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = provider.credentialFromResult(auth, result);
 *   const token = credential.accessToken;
 * }
 * // As this API can be used for sign-in, linking and reauthentication,
 * // check the operationType to determine what triggered this redirect
 * // operation.
 * const operationType = result.operationType;
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */ function signInWithRedirect(auth, provider, resolver) {
    return _signInWithRedirect(auth, provider, resolver);
}
async function _signInWithRedirect(auth, provider, resolver) {
    if ((0, _app._isFirebaseServerApp)(auth.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    const authInternal = _castAuth(auth);
    _assertInstanceOf(auth, provider, FederatedAuthProvider);
    // Wait for auth initialization to complete, this will process pending redirects and clear the
    // PENDING_REDIRECT_KEY in persistence. This should be completed before starting a new
    // redirect and creating a PENDING_REDIRECT_KEY entry.
    await authInternal._initializationPromise;
    const resolverInternal = _withDefaultResolver(authInternal, resolver);
    await _setPendingRedirectStatus(resolverInternal, authInternal);
    return resolverInternal._openRedirect(authInternal, provider, "signInViaRedirect" /* AuthEventType.SIGN_IN_VIA_REDIRECT */ );
}
/**
 * Reauthenticates the current user with the specified {@link OAuthProvider} using a full-page redirect flow.
 * @remarks
 * To handle the results and errors for this operation, refer to {@link getRedirectResult}.
 * Follow the {@link https://firebase.google.com/docs/auth/web/redirect-best-practices
 * | best practices} when using {@link reauthenticateWithRedirect}.
 *
 * This method does not work in a Node.js environment or with {@link Auth} instances
 * created with a {@link @firebase/app#FirebaseServerApp}.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * const result = await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * // Reauthenticate using a redirect.
 * await reauthenticateWithRedirect(result.user, provider);
 * // This will again trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * ```
 *
 * @param user - The user.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */ function reauthenticateWithRedirect(user, provider, resolver) {
    return _reauthenticateWithRedirect(user, provider, resolver);
}
async function _reauthenticateWithRedirect(user, provider, resolver) {
    const userInternal = (0, _util.getModularInstance)(user);
    _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
    if ((0, _app._isFirebaseServerApp)(userInternal.auth.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
    // Wait for auth initialization to complete, this will process pending redirects and clear the
    // PENDING_REDIRECT_KEY in persistence. This should be completed before starting a new
    // redirect and creating a PENDING_REDIRECT_KEY entry.
    await userInternal.auth._initializationPromise;
    // Allow the resolver to error before persisting the redirect user
    const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
    await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
    const eventId = await prepareUserForRedirect(userInternal);
    return resolverInternal._openRedirect(userInternal.auth, provider, "reauthViaRedirect" /* AuthEventType.REAUTH_VIA_REDIRECT */ , eventId);
}
/**
 * Links the {@link OAuthProvider} to the user account using a full-page redirect flow.
 * @remarks
 * To handle the results and errors for this operation, refer to {@link getRedirectResult}.
 * Follow the {@link https://firebase.google.com/docs/auth/web/redirect-best-practices
 * | best practices} when using {@link linkWithRedirect}.
 *
 * This method does not work in a Node.js environment or with {@link Auth} instances
 * created with a {@link @firebase/app#FirebaseServerApp}.
 *
 * @example
 * ```javascript
 * // Sign in using some other provider.
 * const result = await signInWithEmailAndPassword(auth, email, password);
 * // Link using a redirect.
 * const provider = new FacebookAuthProvider();
 * await linkWithRedirect(result.user, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * ```
 *
 * @param user - The user.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */ function linkWithRedirect(user, provider, resolver) {
    return _linkWithRedirect(user, provider, resolver);
}
async function _linkWithRedirect(user, provider, resolver) {
    const userInternal = (0, _util.getModularInstance)(user);
    _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
    // Wait for auth initialization to complete, this will process pending redirects and clear the
    // PENDING_REDIRECT_KEY in persistence. This should be completed before starting a new
    // redirect and creating a PENDING_REDIRECT_KEY entry.
    await userInternal.auth._initializationPromise;
    // Allow the resolver to error before persisting the redirect user
    const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
    await _assertLinkedStatus(false, userInternal, provider.providerId);
    await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
    const eventId = await prepareUserForRedirect(userInternal);
    return resolverInternal._openRedirect(userInternal.auth, provider, "linkViaRedirect" /* AuthEventType.LINK_VIA_REDIRECT */ , eventId);
}
/**
 * Returns a {@link UserCredential} from the redirect-based sign-in flow.
 *
 * @remarks
 * If sign-in succeeded, returns the signed in user. If sign-in was unsuccessful, fails with an
 * error. If no redirect operation was called, returns `null`.
 *
 * This method does not work in a Node.js environment or with {@link Auth} instances created with a
 * {@link @firebase/app#FirebaseServerApp}.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // You can add additional scopes to the provider:
 * provider.addScope('user_birthday');
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = provider.credentialFromResult(auth, result);
 *   const token = credential.accessToken;
 * }
 * // As this API can be used for sign-in, linking and reauthentication,
 * // check the operationType to determine what triggered this redirect
 * // operation.
 * const operationType = result.operationType;
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */ async function getRedirectResult(auth, resolver) {
    await _castAuth(auth)._initializationPromise;
    return _getRedirectResult(auth, resolver, false);
}
async function _getRedirectResult(auth, resolverExtern, bypassAuthState = false) {
    if ((0, _app._isFirebaseServerApp)(auth.app)) return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    const authInternal = _castAuth(auth);
    const resolver = _withDefaultResolver(authInternal, resolverExtern);
    const action = new RedirectAction(authInternal, resolver, bypassAuthState);
    const result = await action.execute();
    if (result && !bypassAuthState) {
        delete result.user._redirectEventId;
        await authInternal._persistUserIfCurrent(result.user);
        await authInternal._setRedirectUser(null, resolverExtern);
    }
    return result;
}
async function prepareUserForRedirect(user) {
    const eventId = _generateEventId(`${user.uid}:::`);
    user._redirectEventId = eventId;
    await user.auth._setRedirectUser(user);
    await user.auth._persistUserIfCurrent(user);
    return eventId;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // The amount of time to store the UIDs of seen events; this is
// set to 10 min by default
const EVENT_DUPLICATION_CACHE_DURATION_MS = 600000;
class AuthEventManager {
    constructor(auth){
        this.auth = auth;
        this.cachedEventUids = new Set();
        this.consumers = new Set();
        this.queuedRedirectEvent = null;
        this.hasHandledPotentialRedirect = false;
        this.lastProcessedEventTime = Date.now();
    }
    registerConsumer(authEventConsumer) {
        this.consumers.add(authEventConsumer);
        if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
            this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
            this.saveEventToCache(this.queuedRedirectEvent);
            this.queuedRedirectEvent = null;
        }
    }
    unregisterConsumer(authEventConsumer) {
        this.consumers.delete(authEventConsumer);
    }
    onEvent(event) {
        // Check if the event has already been handled
        if (this.hasEventBeenHandled(event)) return false;
        let handled = false;
        this.consumers.forEach((consumer)=>{
            if (this.isEventForConsumer(event, consumer)) {
                handled = true;
                this.sendToConsumer(event, consumer);
                this.saveEventToCache(event);
            }
        });
        if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) // If we've already seen a redirect before, or this is a popup event,
        // bail now
        return handled;
        this.hasHandledPotentialRedirect = true;
        // If the redirect wasn't handled, hang on to it
        if (!handled) {
            this.queuedRedirectEvent = event;
            handled = true;
        }
        return handled;
    }
    sendToConsumer(event, consumer) {
        var _a;
        if (event.error && !isNullRedirectEvent(event)) {
            const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split("auth/")[1]) || "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ ;
            consumer.onError(_createError(this.auth, code));
        } else consumer.onAuthEvent(event);
    }
    isEventForConsumer(event, consumer) {
        const eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
        return consumer.filter.includes(event.type) && eventIdMatches;
    }
    hasEventBeenHandled(event) {
        if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) this.cachedEventUids.clear();
        return this.cachedEventUids.has(eventUid(event));
    }
    saveEventToCache(event) {
        this.cachedEventUids.add(eventUid(event));
        this.lastProcessedEventTime = Date.now();
    }
}
function eventUid(e) {
    return [
        e.type,
        e.eventId,
        e.sessionId,
        e.tenantId
    ].filter((v)=>v).join("-");
}
function isNullRedirectEvent({ type, error }) {
    return type === "unknown" /* AuthEventType.UNKNOWN */  && (error === null || error === void 0 ? void 0 : error.code) === `auth/${"no-auth-event" /* AuthErrorCode.NO_AUTH_EVENT */ }`;
}
function isRedirectEvent(event) {
    switch(event.type){
        case "signInViaRedirect" /* AuthEventType.SIGN_IN_VIA_REDIRECT */ :
        case "linkViaRedirect" /* AuthEventType.LINK_VIA_REDIRECT */ :
        case "reauthViaRedirect" /* AuthEventType.REAUTH_VIA_REDIRECT */ :
            return true;
        case "unknown" /* AuthEventType.UNKNOWN */ :
            return isNullRedirectEvent(event);
        default:
            return false;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _getProjectConfig(auth, request = {}) {
    return _performApiRequest(auth, "GET" /* HttpMethod.GET */ , "/v1/projects" /* Endpoint.GET_PROJECT_CONFIG */ , request);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
const HTTP_REGEX = /^https?/;
async function _validateOrigin(auth) {
    // Skip origin validation if we are in an emulated environment
    if (auth.config.emulator) return;
    const { authorizedDomains } = await _getProjectConfig(auth);
    for (const domain of authorizedDomains)try {
        if (matchDomain(domain)) return;
    } catch (_a) {
    // Do nothing if there's a URL error; just continue searching
    }
    // In the old SDK, this error also provides helpful messages.
    _fail(auth, "unauthorized-domain" /* AuthErrorCode.INVALID_ORIGIN */ );
}
function matchDomain(expected) {
    const currentUrl = _getCurrentUrl();
    const { protocol, hostname } = new URL(currentUrl);
    if (expected.startsWith("chrome-extension://")) {
        const ceUrl = new URL(expected);
        if (ceUrl.hostname === "" && hostname === "") // For some reason we're not parsing chrome URLs properly
        return protocol === "chrome-extension:" && expected.replace("chrome-extension://", "") === currentUrl.replace("chrome-extension://", "");
        return protocol === "chrome-extension:" && ceUrl.hostname === hostname;
    }
    if (!HTTP_REGEX.test(protocol)) return false;
    if (IP_ADDRESS_REGEX.test(expected)) // The domain has to be exactly equal to the pattern, as an IP domain will
    // only contain the IP, no extra character.
    return hostname === expected;
    // Dots in pattern should be escaped.
    const escapedDomainPattern = expected.replace(/\./g, "\\.");
    // Non ip address domains.
    // domain.com = *.domain.com OR domain.com
    const re = new RegExp("^(.+\\." + escapedDomainPattern + "|" + escapedDomainPattern + ")$", "i");
    return re.test(hostname);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const NETWORK_TIMEOUT = new Delay(30000, 60000);
/**
 * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
 * it will stop working after a retrial. This is a hack to fix this issue.
 */ function resetUnloadedGapiModules() {
    // Clear last failed gapi.load state to force next gapi.load to first
    // load the failed gapi.iframes module.
    // Get gapix.beacon context.
    const beacon = _window().___jsl;
    // Get current hint.
    if (beacon === null || beacon === void 0 ? void 0 : beacon.H) // Get gapi hint.
    for (const hint of Object.keys(beacon.H)){
        // Requested modules.
        beacon.H[hint].r = beacon.H[hint].r || [];
        // Loaded modules.
        beacon.H[hint].L = beacon.H[hint].L || [];
        // Set requested modules to a copy of the loaded modules.
        beacon.H[hint].r = [
            ...beacon.H[hint].L
        ];
        // Clear pending callbacks.
        if (beacon.CP) for(let i = 0; i < beacon.CP.length; i++)// Remove all failed pending callbacks.
        beacon.CP[i] = null;
    }
}
function loadGapi(auth) {
    return new Promise((resolve, reject)=>{
        var _a, _b, _c;
        // Function to run when gapi.load is ready.
        function loadGapiIframe() {
            // The developer may have tried to previously run gapi.load and failed.
            // Run this to fix that.
            resetUnloadedGapiModules();
            gapi.load("gapi.iframes", {
                callback: ()=>{
                    resolve(gapi.iframes.getContext());
                },
                ontimeout: ()=>{
                    // The above reset may be sufficient, but having this reset after
                    // failure ensures that if the developer calls gapi.load after the
                    // connection is re-established and before another attempt to embed
                    // the iframe, it would work and would not be broken because of our
                    // failed attempt.
                    // Timeout when gapi.iframes.Iframe not loaded.
                    resetUnloadedGapiModules();
                    reject(_createError(auth, "network-request-failed" /* AuthErrorCode.NETWORK_REQUEST_FAILED */ ));
                },
                timeout: NETWORK_TIMEOUT.get()
            });
        }
        if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) // If gapi.iframes.Iframe available, resolve.
        resolve(gapi.iframes.getContext());
        else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) // Gapi loader ready, load gapi.iframes.
        loadGapiIframe();
        else {
            // Create a new iframe callback when this is called so as not to overwrite
            // any previous defined callback. This happens if this method is called
            // multiple times in parallel and could result in the later callback
            // overwriting the previous one. This would end up with a iframe
            // timeout.
            const cbName = _generateCallbackName("iframefcb");
            // GApi loader not available, dynamically load platform.js.
            _window()[cbName] = ()=>{
                // GApi loader should be ready.
                if (!!gapi.load) loadGapiIframe();
                else // Gapi loader failed, throw error.
                reject(_createError(auth, "network-request-failed" /* AuthErrorCode.NETWORK_REQUEST_FAILED */ ));
            };
            // Load GApi loader.
            return _loadJS(`${_gapiScriptUrl()}?onload=${cbName}`).catch((e)=>reject(e));
        }
    }).catch((error)=>{
        // Reset cached promise to allow for retrial.
        cachedGApiLoader = null;
        throw error;
    });
}
let cachedGApiLoader = null;
function _loadGapi(auth) {
    cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
    return cachedGApiLoader;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PING_TIMEOUT = new Delay(5000, 15000);
const IFRAME_PATH = "__/auth/iframe";
const EMULATED_IFRAME_PATH = "emulator/auth/iframe";
const IFRAME_ATTRIBUTES = {
    style: {
        position: "absolute",
        top: "-100px",
        width: "1px",
        height: "1px"
    },
    "aria-hidden": "true",
    tabindex: "-1"
};
// Map from apiHost to endpoint ID for passing into iframe. In current SDK, apiHost can be set to
// anything (not from a list of endpoints with IDs as in legacy), so this is the closest we can get.
const EID_FROM_APIHOST = new Map([
    [
        "identitytoolkit.googleapis.com" /* DefaultConfig.API_HOST */ ,
        "p"
    ],
    [
        "staging-identitytoolkit.sandbox.googleapis.com",
        "s"
    ],
    [
        "test-identitytoolkit.sandbox.googleapis.com",
        "t"
    ] // test
]);
function getIframeUrl(auth) {
    const config = auth.config;
    _assert(config.authDomain, auth, "auth-domain-config-required" /* AuthErrorCode.MISSING_AUTH_DOMAIN */ );
    const url = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : `https://${auth.config.authDomain}/${IFRAME_PATH}`;
    const params = {
        apiKey: config.apiKey,
        appName: auth.name,
        v: (0, _app.SDK_VERSION)
    };
    const eid = EID_FROM_APIHOST.get(auth.config.apiHost);
    if (eid) params.eid = eid;
    const frameworks = auth._getFrameworks();
    if (frameworks.length) params.fw = frameworks.join(",");
    return `${url}?${(0, _util.querystring)(params).slice(1)}`;
}
async function _openIframe(auth) {
    const context = await _loadGapi(auth);
    const gapi1 = _window().gapi;
    _assert(gapi1, auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
    return context.open({
        where: document.body,
        url: getIframeUrl(auth),
        messageHandlersFilter: gapi1.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: IFRAME_ATTRIBUTES,
        dontclear: true
    }, (iframe)=>new Promise(async (resolve, reject)=>{
            await iframe.restyle({
                // Prevent iframe from closing on mouse out.
                setHideOnLeave: false
            });
            const networkError = _createError(auth, "network-request-failed" /* AuthErrorCode.NETWORK_REQUEST_FAILED */ );
            // Confirm iframe is correctly loaded.
            // To fallback on failure, set a timeout.
            const networkErrorTimer = _window().setTimeout(()=>{
                reject(networkError);
            }, PING_TIMEOUT.get());
            // Clear timer and resolve pending iframe ready promise.
            function clearTimerAndResolve() {
                _window().clearTimeout(networkErrorTimer);
                resolve(iframe);
            }
            // This returns an IThenable. However the reject part does not call
            // when the iframe is not loaded.
            iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, ()=>{
                reject(networkError);
            });
        }));
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const BASE_POPUP_OPTIONS = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no"
};
const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 600;
const TARGET_BLANK = "_blank";
const FIREFOX_EMPTY_URL = "http://localhost";
class AuthPopup {
    constructor(window1){
        this.window = window1;
        this.associatedEvent = null;
    }
    close() {
        if (this.window) try {
            this.window.close();
        } catch (e) {}
    }
}
function _open(auth, url, name, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
    const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
    const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
    let target = "";
    const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
        width: width.toString(),
        height: height.toString(),
        top,
        left
    });
    // Chrome iOS 7 and 8 is returning an undefined popup win when target is
    // specified, even though the popup is not necessarily blocked.
    const ua = (0, _util.getUA)().toLowerCase();
    if (name) target = _isChromeIOS(ua) ? TARGET_BLANK : name;
    if (_isFirefox(ua)) {
        // Firefox complains when invalid URLs are popped out. Hacky way to bypass.
        url = url || FIREFOX_EMPTY_URL;
        // Firefox disables by default scrolling on popup windows, which can create
        // issues when the user has many Google accounts, for instance.
        options.scrollbars = "yes";
    }
    const optionsString = Object.entries(options).reduce((accum, [key, value])=>`${accum}${key}=${value},`, "");
    if (_isIOSStandalone(ua) && target !== "_self") {
        openAsNewWindowIOS(url || "", target);
        return new AuthPopup(null);
    }
    // about:blank getting sanitized causing browsers like IE/Edge to display
    // brief error message before redirecting to handler.
    const newWin = window.open(url || "", target, optionsString);
    _assert(newWin, auth, "popup-blocked" /* AuthErrorCode.POPUP_BLOCKED */ );
    // Flaky on IE edge, encapsulate with a try and catch.
    try {
        newWin.focus();
    } catch (e) {}
    return new AuthPopup(newWin);
}
function openAsNewWindowIOS(url, target) {
    const el = document.createElement("a");
    el.href = url;
    el.target = target;
    const click = document.createEvent("MouseEvent");
    click.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
    el.dispatchEvent(click);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * URL for Authentication widget which will initiate the OAuth handshake
 *
 * @internal
 */ const WIDGET_PATH = "__/auth/handler";
/**
 * URL for emulated environment
 *
 * @internal
 */ const EMULATOR_WIDGET_PATH = "emulator/auth/handler";
/**
 * Fragment name for the App Check token that gets passed to the widget
 *
 * @internal
 */ const FIREBASE_APP_CHECK_FRAGMENT_ID = encodeURIComponent("fac");
async function _getRedirectUrl(auth, provider, authType, redirectUrl, eventId, additionalParams) {
    _assert(auth.config.authDomain, auth, "auth-domain-config-required" /* AuthErrorCode.MISSING_AUTH_DOMAIN */ );
    _assert(auth.config.apiKey, auth, "invalid-api-key" /* AuthErrorCode.INVALID_API_KEY */ );
    const params = {
        apiKey: auth.config.apiKey,
        appName: auth.name,
        authType,
        redirectUrl,
        v: (0, _app.SDK_VERSION),
        eventId
    };
    if (provider instanceof FederatedAuthProvider) {
        provider.setDefaultLanguage(auth.languageCode);
        params.providerId = provider.providerId || "";
        if (!(0, _util.isEmpty)(provider.getCustomParameters())) params.customParameters = JSON.stringify(provider.getCustomParameters());
        // TODO set additionalParams from the provider as well?
        for (const [key, value] of Object.entries(additionalParams || {}))params[key] = value;
    }
    if (provider instanceof BaseOAuthProvider) {
        const scopes = provider.getScopes().filter((scope)=>scope !== "");
        if (scopes.length > 0) params.scopes = scopes.join(",");
    }
    if (auth.tenantId) params.tid = auth.tenantId;
    // TODO: maybe set eid as endipointId
    // TODO: maybe set fw as Frameworks.join(",")
    const paramsDict = params;
    for (const key of Object.keys(paramsDict))if (paramsDict[key] === undefined) delete paramsDict[key];
    // Sets the App Check token to pass to the widget
    const appCheckToken = await auth._getAppCheckToken();
    const appCheckTokenFragment = appCheckToken ? `#${FIREBASE_APP_CHECK_FRAGMENT_ID}=${encodeURIComponent(appCheckToken)}` : "";
    // Start at index 1 to skip the leading '&' in the query string
    return `${getHandlerBase(auth)}?${(0, _util.querystring)(paramsDict).slice(1)}${appCheckTokenFragment}`;
}
function getHandlerBase({ config }) {
    if (!config.emulator) return `https://${config.authDomain}/${WIDGET_PATH}`;
    return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The special web storage event
 *
 */ const WEB_STORAGE_SUPPORT_KEY = "webStorageSupport";
class BrowserPopupRedirectResolver {
    constructor(){
        this.eventManagers = {};
        this.iframes = {};
        this.originValidationPromises = {};
        this._redirectPersistence = browserSessionPersistence;
        this._completeRedirectFn = _getRedirectResult;
        this._overrideRedirectResult = _overrideRedirectResult;
    }
    // Wrapping in async even though we don't await anywhere in order
    // to make sure errors are raised as promise rejections
    async _openPopup(auth, provider, authType, eventId) {
        var _a;
        debugAssert((_a = this.eventManagers[auth._key()]) === null || _a === void 0 ? void 0 : _a.manager, "_initialize() not called before _openPopup()");
        const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
        return _open(auth, url, _generateEventId());
    }
    async _openRedirect(auth, provider, authType, eventId) {
        await this._originValidation(auth);
        const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
        _setWindowLocation(url);
        return new Promise(()=>{});
    }
    _initialize(auth) {
        const key = auth._key();
        if (this.eventManagers[key]) {
            const { manager, promise } = this.eventManagers[key];
            if (manager) return Promise.resolve(manager);
            else {
                debugAssert(promise, "If manager is not set, promise should be");
                return promise;
            }
        }
        const promise = this.initAndGetManager(auth);
        this.eventManagers[key] = {
            promise
        };
        // If the promise is rejected, the key should be removed so that the
        // operation can be retried later.
        promise.catch(()=>{
            delete this.eventManagers[key];
        });
        return promise;
    }
    async initAndGetManager(auth) {
        const iframe = await _openIframe(auth);
        const manager = new AuthEventManager(auth);
        iframe.register("authEvent", (iframeEvent)=>{
            _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth, "invalid-auth-event" /* AuthErrorCode.INVALID_AUTH_EVENT */ );
            // TODO: Consider splitting redirect and popup events earlier on
            const handled = manager.onEvent(iframeEvent.authEvent);
            return {
                status: handled ? "ACK" /* GapiOutcome.ACK */  : "ERROR" /* GapiOutcome.ERROR */ 
            };
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
        this.eventManagers[auth._key()] = {
            manager
        };
        this.iframes[auth._key()] = iframe;
        return manager;
    }
    _isIframeWebStorageSupported(auth, cb) {
        const iframe = this.iframes[auth._key()];
        iframe.send(WEB_STORAGE_SUPPORT_KEY, {
            type: WEB_STORAGE_SUPPORT_KEY
        }, (result)=>{
            var _a;
            const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
            if (isSupported !== undefined) cb(!!isSupported);
            _fail(auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
    }
    _originValidation(auth) {
        const key = auth._key();
        if (!this.originValidationPromises[key]) this.originValidationPromises[key] = _validateOrigin(auth);
        return this.originValidationPromises[key];
    }
    get _shouldInitProactively() {
        // Mobile browsers and Safari need to optimistically initialize
        return _isMobileBrowser() || _isSafari() || _isIOS();
    }
}
/**
 * An implementation of {@link PopupRedirectResolver} suitable for browser
 * based applications.
 *
 * @remarks
 * This method does not work in a Node.js environment.
 *
 * @public
 */ const browserPopupRedirectResolver = BrowserPopupRedirectResolver;
class MultiFactorAssertionImpl {
    constructor(factorId){
        this.factorId = factorId;
    }
    _process(auth, session, displayName) {
        switch(session.type){
            case "enroll" /* MultiFactorSessionType.ENROLL */ :
                return this._finalizeEnroll(auth, session.credential, displayName);
            case "signin" /* MultiFactorSessionType.SIGN_IN */ :
                return this._finalizeSignIn(auth, session.credential);
            default:
                return debugFail("unexpected MultiFactorSessionType");
        }
    }
}
/**
 * {@inheritdoc PhoneMultiFactorAssertion}
 *
 * @public
 */ class PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
    constructor(credential){
        super("phone" /* FactorId.PHONE */ );
        this.credential = credential;
    }
    /** @internal */ static _fromCredential(credential) {
        return new PhoneMultiFactorAssertionImpl(credential);
    }
    /** @internal */ _finalizeEnroll(auth, idToken, displayName) {
        return finalizeEnrollPhoneMfa(auth, {
            idToken,
            displayName,
            phoneVerificationInfo: this.credential._makeVerificationRequest()
        });
    }
    /** @internal */ _finalizeSignIn(auth, mfaPendingCredential) {
        return finalizeSignInPhoneMfa(auth, {
            mfaPendingCredential,
            phoneVerificationInfo: this.credential._makeVerificationRequest()
        });
    }
}
/**
 * Provider for generating a {@link PhoneMultiFactorAssertion}.
 *
 * @public
 */ class PhoneMultiFactorGenerator {
    constructor(){}
    /**
     * Provides a {@link PhoneMultiFactorAssertion} to confirm ownership of the phone second factor.
     *
     * @remarks
     * This method does not work in a Node.js environment.
     *
     * @param phoneAuthCredential - A credential provided by {@link PhoneAuthProvider.credential}.
     * @returns A {@link PhoneMultiFactorAssertion} which can be used with
     * {@link MultiFactorResolver.resolveSignIn}
     */ static assertion(credential) {
        return PhoneMultiFactorAssertionImpl._fromCredential(credential);
    }
}
/**
 * The identifier of the phone second factor: `phone`.
 */ PhoneMultiFactorGenerator.FACTOR_ID = "phone";
/**
 * Provider for generating a {@link TotpMultiFactorAssertion}.
 *
 * @public
 */ class TotpMultiFactorGenerator {
    /**
     * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of
     * the TOTP (time-based one-time password) second factor.
     * This assertion is used to complete enrollment in TOTP second factor.
     *
     * @param secret A {@link TotpSecret} containing the shared secret key and other TOTP parameters.
     * @param oneTimePassword One-time password from TOTP App.
     * @returns A {@link TotpMultiFactorAssertion} which can be used with
     * {@link MultiFactorUser.enroll}.
     */ static assertionForEnrollment(secret, oneTimePassword) {
        return TotpMultiFactorAssertionImpl._fromSecret(secret, oneTimePassword);
    }
    /**
     * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of the TOTP second factor.
     * This assertion is used to complete signIn with TOTP as the second factor.
     *
     * @param enrollmentId identifies the enrolled TOTP second factor.
     * @param oneTimePassword One-time password from TOTP App.
     * @returns A {@link TotpMultiFactorAssertion} which can be used with
     * {@link MultiFactorResolver.resolveSignIn}.
     */ static assertionForSignIn(enrollmentId, oneTimePassword) {
        return TotpMultiFactorAssertionImpl._fromEnrollmentId(enrollmentId, oneTimePassword);
    }
    /**
     * Returns a promise to {@link TotpSecret} which contains the TOTP shared secret key and other parameters.
     * Creates a TOTP secret as part of enrolling a TOTP second factor.
     * Used for generating a QR code URL or inputting into a TOTP app.
     * This method uses the auth instance corresponding to the user in the multiFactorSession.
     *
     * @param session The {@link MultiFactorSession} that the user is part of.
     * @returns A promise to {@link TotpSecret}.
     */ static async generateSecret(session) {
        var _a;
        const mfaSession = session;
        _assert(typeof ((_a = mfaSession.user) === null || _a === void 0 ? void 0 : _a.auth) !== "undefined", "internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
        const response = await startEnrollTotpMfa(mfaSession.user.auth, {
            idToken: mfaSession.credential,
            totpEnrollmentInfo: {}
        });
        return TotpSecret._fromStartTotpMfaEnrollmentResponse(response, mfaSession.user.auth);
    }
}
/**
 * The identifier of the TOTP second factor: `totp`.
 */ TotpMultiFactorGenerator.FACTOR_ID = "totp" /* FactorId.TOTP */ ;
class TotpMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
    constructor(otp, enrollmentId, secret){
        super("totp" /* FactorId.TOTP */ );
        this.otp = otp;
        this.enrollmentId = enrollmentId;
        this.secret = secret;
    }
    /** @internal */ static _fromSecret(secret, otp) {
        return new TotpMultiFactorAssertionImpl(otp, undefined, secret);
    }
    /** @internal */ static _fromEnrollmentId(enrollmentId, otp) {
        return new TotpMultiFactorAssertionImpl(otp, enrollmentId);
    }
    /** @internal */ async _finalizeEnroll(auth, idToken, displayName) {
        _assert(typeof this.secret !== "undefined", auth, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        return finalizeEnrollTotpMfa(auth, {
            idToken,
            displayName,
            totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
        });
    }
    /** @internal */ async _finalizeSignIn(auth, mfaPendingCredential) {
        _assert(this.enrollmentId !== undefined && this.otp !== undefined, auth, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */ );
        const totpVerificationInfo = {
            verificationCode: this.otp
        };
        return finalizeSignInTotpMfa(auth, {
            mfaPendingCredential,
            mfaEnrollmentId: this.enrollmentId,
            totpVerificationInfo
        });
    }
}
/**
 * Provider for generating a {@link TotpMultiFactorAssertion}.
 *
 * Stores the shared secret key and other parameters to generate time-based OTPs.
 * Implements methods to retrieve the shared secret key and generate a QR code URL.
 * @public
 */ class TotpSecret {
    // The public members are declared outside the constructor so the docs can be generated.
    constructor(secretKey, hashingAlgorithm, codeLength, codeIntervalSeconds, enrollmentCompletionDeadline, sessionInfo, auth){
        this.sessionInfo = sessionInfo;
        this.auth = auth;
        this.secretKey = secretKey;
        this.hashingAlgorithm = hashingAlgorithm;
        this.codeLength = codeLength;
        this.codeIntervalSeconds = codeIntervalSeconds;
        this.enrollmentCompletionDeadline = enrollmentCompletionDeadline;
    }
    /** @internal */ static _fromStartTotpMfaEnrollmentResponse(response, auth) {
        return new TotpSecret(response.totpSessionInfo.sharedSecretKey, response.totpSessionInfo.hashingAlgorithm, response.totpSessionInfo.verificationCodeLength, response.totpSessionInfo.periodSec, new Date(response.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), response.totpSessionInfo.sessionInfo, auth);
    }
    /** @internal */ _makeTotpVerificationInfo(otp) {
        return {
            sessionInfo: this.sessionInfo,
            verificationCode: otp
        };
    }
    /**
     * Returns a QR code URL as described in
     * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
     * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
     * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
     *
     * @param accountName the name of the account/app along with a user identifier.
     * @param issuer issuer of the TOTP (likely the app name).
     * @returns A QR code URL string.
     */ generateQrCodeUrl(accountName, issuer) {
        var _a;
        let useDefaults = false;
        if (_isEmptyString(accountName) || _isEmptyString(issuer)) useDefaults = true;
        if (useDefaults) {
            if (_isEmptyString(accountName)) accountName = ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.email) || "unknownuser";
            if (_isEmptyString(issuer)) issuer = this.auth.name;
        }
        return `otpauth://totp/${issuer}:${accountName}?secret=${this.secretKey}&issuer=${issuer}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
    }
}
/** @internal */ function _isEmptyString(input) {
    return typeof input === "undefined" || (input === null || input === void 0 ? void 0 : input.length) === 0;
}
var name = "@firebase/auth";
var version = "1.7.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AuthInterop {
    constructor(auth){
        this.auth = auth;
        this.internalListeners = new Map();
    }
    getUid() {
        var _a;
        this.assertAuthConfigured();
        return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
    }
    async getToken(forceRefresh) {
        this.assertAuthConfigured();
        await this.auth._initializationPromise;
        if (!this.auth.currentUser) return null;
        const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
        return {
            accessToken
        };
    }
    addAuthTokenListener(listener) {
        this.assertAuthConfigured();
        if (this.internalListeners.has(listener)) return;
        const unsubscribe = this.auth.onIdTokenChanged((user)=>{
            listener((user === null || user === void 0 ? void 0 : user.stsTokenManager.accessToken) || null);
        });
        this.internalListeners.set(listener, unsubscribe);
        this.updateProactiveRefresh();
    }
    removeAuthTokenListener(listener) {
        this.assertAuthConfigured();
        const unsubscribe = this.internalListeners.get(listener);
        if (!unsubscribe) return;
        this.internalListeners.delete(listener);
        unsubscribe();
        this.updateProactiveRefresh();
    }
    assertAuthConfigured() {
        _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth" /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */ );
    }
    updateProactiveRefresh() {
        if (this.internalListeners.size > 0) this.auth._startProactiveRefresh();
        else this.auth._stopProactiveRefresh();
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function getVersionForPlatform(clientPlatform) {
    switch(clientPlatform){
        case "Node" /* ClientPlatform.NODE */ :
            return "node";
        case "ReactNative" /* ClientPlatform.REACT_NATIVE */ :
            return "rn";
        case "Worker" /* ClientPlatform.WORKER */ :
            return "webworker";
        case "Cordova" /* ClientPlatform.CORDOVA */ :
            return "cordova";
        case "WebExtension" /* ClientPlatform.WEB_EXTENSION */ :
            return "web-extension";
        default:
            return undefined;
    }
}
/** @internal */ function registerAuth(clientPlatform) {
    (0, _app._registerComponent)(new (0, _component.Component)("auth" /* _ComponentName.AUTH */ , (container, { options: deps })=>{
        const app = container.getProvider("app").getImmediate();
        const heartbeatServiceProvider = container.getProvider("heartbeat");
        const appCheckServiceProvider = container.getProvider("app-check-internal");
        const { apiKey, authDomain } = app.options;
        _assert(apiKey && !apiKey.includes(":"), "invalid-api-key" /* AuthErrorCode.INVALID_API_KEY */ , {
            appName: app.name
        });
        const config = {
            apiKey,
            authDomain,
            clientPlatform,
            apiHost: "identitytoolkit.googleapis.com" /* DefaultConfig.API_HOST */ ,
            tokenApiHost: "securetoken.googleapis.com" /* DefaultConfig.TOKEN_API_HOST */ ,
            apiScheme: "https" /* DefaultConfig.API_SCHEME */ ,
            sdkClientVersion: _getClientVersion(clientPlatform)
        };
        const authInstance = new AuthImpl(app, heartbeatServiceProvider, appCheckServiceProvider, config);
        _initializeAuthInstance(authInstance, deps);
        return authInstance;
    }, "PUBLIC" /* ComponentType.PUBLIC */ )/**
         * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
         * For why we do this, See go/firebase-next-auth-init
         */ .setInstantiationMode("EXPLICIT" /* InstantiationMode.EXPLICIT */ )/**
         * Because all firebase products that depend on auth depend on auth-internal directly,
         * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
         */ .setInstanceCreatedCallback((container, _instanceIdentifier, _instance)=>{
        const authInternalProvider = container.getProvider("auth-internal" /* _ComponentName.AUTH_INTERNAL */ );
        authInternalProvider.initialize();
    }));
    (0, _app._registerComponent)(new (0, _component.Component)("auth-internal" /* _ComponentName.AUTH_INTERNAL */ , (container)=>{
        const auth = _castAuth(container.getProvider("auth" /* _ComponentName.AUTH */ ).getImmediate());
        return ((auth)=>new AuthInterop(auth))(auth);
    }, "PRIVATE" /* ComponentType.PRIVATE */ ).setInstantiationMode("EXPLICIT" /* InstantiationMode.EXPLICIT */ ));
    (0, _app.registerVersion)(name, version, getVersionForPlatform(clientPlatform));
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    (0, _app.registerVersion)(name, version, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DEFAULT_ID_TOKEN_MAX_AGE = 300;
const authIdTokenMaxAge = (0, _util.getExperimentalSetting)("authIdTokenMaxAge") || DEFAULT_ID_TOKEN_MAX_AGE;
let lastPostedIdToken = null;
const mintCookieFactory = (url)=>async (user)=>{
        const idTokenResult = user && await user.getIdTokenResult();
        const idTokenAge = idTokenResult && (new Date().getTime() - Date.parse(idTokenResult.issuedAtTime)) / 1000;
        if (idTokenAge && idTokenAge > authIdTokenMaxAge) return;
        // Specifically trip null => undefined when logged out, to delete any existing cookie
        const idToken = idTokenResult === null || idTokenResult === void 0 ? void 0 : idTokenResult.token;
        if (lastPostedIdToken === idToken) return;
        lastPostedIdToken = idToken;
        await fetch(url, {
            method: idToken ? "POST" : "DELETE",
            headers: idToken ? {
                "Authorization": `Bearer ${idToken}`
            } : {}
        });
    };
/**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */ function getAuth(app = (0, _app.getApp)()) {
    const provider = (0, _app._getProvider)(app, "auth");
    if (provider.isInitialized()) return provider.getImmediate();
    const auth = initializeAuth(app, {
        popupRedirectResolver: browserPopupRedirectResolver,
        persistence: [
            indexedDBLocalPersistence,
            browserLocalPersistence,
            browserSessionPersistence
        ]
    });
    const authTokenSyncPath = (0, _util.getExperimentalSetting)("authTokenSyncURL");
    // Only do the Cookie exchange in a secure context
    if (authTokenSyncPath && typeof isSecureContext === "boolean" && isSecureContext) {
        // Don't allow urls (XSS possibility), only paths on the same domain
        const authTokenSyncUrl = new URL(authTokenSyncPath, location.origin);
        if (location.origin === authTokenSyncUrl.origin) {
            const mintCookie = mintCookieFactory(authTokenSyncUrl.toString());
            beforeAuthStateChanged(auth, mintCookie, ()=>mintCookie(auth.currentUser));
            onIdTokenChanged(auth, (user)=>mintCookie(user));
        }
    }
    const authEmulatorHost = (0, _util.getDefaultEmulatorHost)("auth");
    if (authEmulatorHost) connectAuthEmulator(auth, `http://${authEmulatorHost}`);
    return auth;
}
function getScriptParentElement() {
    var _a, _b;
    return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}
_setExternalJSProvider({
    loadJS (url) {
        // TODO: consider adding timeout support & cancellation
        return new Promise((resolve, reject)=>{
            const el = document.createElement("script");
            el.setAttribute("src", url);
            el.onload = resolve;
            el.onerror = (e)=>{
                const error = _createError("internal-error" /* AuthErrorCode.INTERNAL_ERROR */ );
                error.customData = e;
                reject(error);
            };
            el.type = "text/javascript";
            el.charset = "UTF-8";
            getScriptParentElement().appendChild(el);
        });
    },
    gapiScript: "https://apis.google.com/js/api.js",
    recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
    recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
registerAuth("Browser" /* ClientPlatform.BROWSER */ );

},{"@firebase/app":"3AcPV","@firebase/util":"ePiK6","@firebase/logger":"fZmft","tslib":"lRdW5","@firebase/component":"bi1VB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRdW5":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__esDecorate", ()=>__esDecorate);
parcelHelpers.export(exports, "__runInitializers", ()=>__runInitializers);
parcelHelpers.export(exports, "__propKey", ()=>__propKey);
parcelHelpers.export(exports, "__setFunctionName", ()=>__setFunctionName);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
parcelHelpers.export(exports, "__addDisposableResource", ()=>__addDisposableResource);
parcelHelpers.export(exports, "__disposeResources", ()=>__disposeResources);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
exports.default = {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8WX7E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _storage = require("@firebase/storage");
parcelHelpers.exportAll(_storage, exports);

},{"@firebase/storage":"jEcdO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jEcdO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StorageError", ()=>StorageError);
parcelHelpers.export(exports, "StorageErrorCode", ()=>StorageErrorCode);
parcelHelpers.export(exports, "StringFormat", ()=>StringFormat);
parcelHelpers.export(exports, "_FbsBlob", ()=>FbsBlob);
parcelHelpers.export(exports, "_Location", ()=>Location);
parcelHelpers.export(exports, "_TaskEvent", ()=>TaskEvent);
parcelHelpers.export(exports, "_TaskState", ()=>TaskState);
parcelHelpers.export(exports, "_UploadTask", ()=>UploadTask);
parcelHelpers.export(exports, "_dataFromString", ()=>dataFromString);
parcelHelpers.export(exports, "_getChild", ()=>_getChild);
parcelHelpers.export(exports, "_invalidArgument", ()=>invalidArgument);
parcelHelpers.export(exports, "_invalidRootOperation", ()=>invalidRootOperation);
parcelHelpers.export(exports, "connectStorageEmulator", ()=>connectStorageEmulator);
parcelHelpers.export(exports, "deleteObject", ()=>deleteObject);
parcelHelpers.export(exports, "getBlob", ()=>getBlob);
parcelHelpers.export(exports, "getBytes", ()=>getBytes);
parcelHelpers.export(exports, "getDownloadURL", ()=>getDownloadURL);
parcelHelpers.export(exports, "getMetadata", ()=>getMetadata);
parcelHelpers.export(exports, "getStorage", ()=>getStorage);
parcelHelpers.export(exports, "getStream", ()=>getStream);
parcelHelpers.export(exports, "list", ()=>list);
parcelHelpers.export(exports, "listAll", ()=>listAll);
parcelHelpers.export(exports, "ref", ()=>ref);
parcelHelpers.export(exports, "updateMetadata", ()=>updateMetadata);
parcelHelpers.export(exports, "uploadBytes", ()=>uploadBytes);
parcelHelpers.export(exports, "uploadBytesResumable", ()=>uploadBytesResumable);
parcelHelpers.export(exports, "uploadString", ()=>uploadString);
var _app = require("@firebase/app");
var _util = require("@firebase/util");
var _component = require("@firebase/component");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Constants used in the Firebase Storage library.
 */ /**
 * Domain name for firebase storage.
 */ const DEFAULT_HOST = "firebasestorage.googleapis.com";
/**
 * The key in Firebase config json for the storage bucket.
 */ const CONFIG_STORAGE_BUCKET_KEY = "storageBucket";
/**
 * 2 minutes
 *
 * The timeout for all operations except upload.
 */ const DEFAULT_MAX_OPERATION_RETRY_TIME = 120000;
/**
 * 10 minutes
 *
 * The timeout for upload.
 */ const DEFAULT_MAX_UPLOAD_RETRY_TIME = 600000;
/**
 * 1 second
 */ const DEFAULT_MIN_SLEEP_TIME_MILLIS = 1000;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An error returned by the Firebase Storage SDK.
 * @public
 */ class StorageError extends (0, _util.FirebaseError) {
    /**
     * @param code - A `StorageErrorCode` string to be prefixed with 'storage/' and
     *  added to the end of the message.
     * @param message  - Error message.
     * @param status_ - Corresponding HTTP Status Code
     */ constructor(code, message, status_ = 0){
        super(prependCode(code), `Firebase Storage: ${message} (${prependCode(code)})`);
        this.status_ = status_;
        /**
         * Stores custom error data unique to the `StorageError`.
         */ this.customData = {
            serverResponse: null
        };
        this._baseMessage = this.message;
        // Without this, `instanceof StorageError`, in tests for example,
        // returns false.
        Object.setPrototypeOf(this, StorageError.prototype);
    }
    get status() {
        return this.status_;
    }
    set status(status) {
        this.status_ = status;
    }
    /**
     * Compares a `StorageErrorCode` against this error's code, filtering out the prefix.
     */ _codeEquals(code) {
        return prependCode(code) === this.code;
    }
    /**
     * Optional response message that was added by the server.
     */ get serverResponse() {
        return this.customData.serverResponse;
    }
    set serverResponse(serverResponse) {
        this.customData.serverResponse = serverResponse;
        if (this.customData.serverResponse) this.message = `${this._baseMessage}\n${this.customData.serverResponse}`;
        else this.message = this._baseMessage;
    }
}
/**
 * @public
 * Error codes that can be attached to `StorageError` objects.
 */ var StorageErrorCode;
(function(StorageErrorCode) {
    // Shared between all platforms
    StorageErrorCode["UNKNOWN"] = "unknown";
    StorageErrorCode["OBJECT_NOT_FOUND"] = "object-not-found";
    StorageErrorCode["BUCKET_NOT_FOUND"] = "bucket-not-found";
    StorageErrorCode["PROJECT_NOT_FOUND"] = "project-not-found";
    StorageErrorCode["QUOTA_EXCEEDED"] = "quota-exceeded";
    StorageErrorCode["UNAUTHENTICATED"] = "unauthenticated";
    StorageErrorCode["UNAUTHORIZED"] = "unauthorized";
    StorageErrorCode["UNAUTHORIZED_APP"] = "unauthorized-app";
    StorageErrorCode["RETRY_LIMIT_EXCEEDED"] = "retry-limit-exceeded";
    StorageErrorCode["INVALID_CHECKSUM"] = "invalid-checksum";
    StorageErrorCode["CANCELED"] = "canceled";
    // JS specific
    StorageErrorCode["INVALID_EVENT_NAME"] = "invalid-event-name";
    StorageErrorCode["INVALID_URL"] = "invalid-url";
    StorageErrorCode["INVALID_DEFAULT_BUCKET"] = "invalid-default-bucket";
    StorageErrorCode["NO_DEFAULT_BUCKET"] = "no-default-bucket";
    StorageErrorCode["CANNOT_SLICE_BLOB"] = "cannot-slice-blob";
    StorageErrorCode["SERVER_FILE_WRONG_SIZE"] = "server-file-wrong-size";
    StorageErrorCode["NO_DOWNLOAD_URL"] = "no-download-url";
    StorageErrorCode["INVALID_ARGUMENT"] = "invalid-argument";
    StorageErrorCode["INVALID_ARGUMENT_COUNT"] = "invalid-argument-count";
    StorageErrorCode["APP_DELETED"] = "app-deleted";
    StorageErrorCode["INVALID_ROOT_OPERATION"] = "invalid-root-operation";
    StorageErrorCode["INVALID_FORMAT"] = "invalid-format";
    StorageErrorCode["INTERNAL_ERROR"] = "internal-error";
    StorageErrorCode["UNSUPPORTED_ENVIRONMENT"] = "unsupported-environment";
})(StorageErrorCode || (StorageErrorCode = {}));
function prependCode(code) {
    return "storage/" + code;
}
function unknown() {
    const message = "An unknown error occurred, please check the error payload for server response.";
    return new StorageError(StorageErrorCode.UNKNOWN, message);
}
function objectNotFound(path) {
    return new StorageError(StorageErrorCode.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
}
function quotaExceeded(bucket) {
    return new StorageError(StorageErrorCode.QUOTA_EXCEEDED, "Quota for bucket '" + bucket + "' exceeded, please view quota on " + "https://firebase.google.com/pricing/.");
}
function unauthenticated() {
    const message = "User is not authenticated, please authenticate using Firebase Authentication and try again.";
    return new StorageError(StorageErrorCode.UNAUTHENTICATED, message);
}
function unauthorizedApp() {
    return new StorageError(StorageErrorCode.UNAUTHORIZED_APP, "This app does not have permission to access Firebase Storage on this project.");
}
function unauthorized(path) {
    return new StorageError(StorageErrorCode.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
    return new StorageError(StorageErrorCode.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.");
}
function canceled() {
    return new StorageError(StorageErrorCode.CANCELED, "User canceled the upload/download.");
}
function invalidUrl(url) {
    return new StorageError(StorageErrorCode.INVALID_URL, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
    return new StorageError(StorageErrorCode.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
}
function noDefaultBucket() {
    return new StorageError(StorageErrorCode.NO_DEFAULT_BUCKET, "No default bucket found. Did you set the '" + CONFIG_STORAGE_BUCKET_KEY + "' property when initializing the app?");
}
function cannotSliceBlob() {
    return new StorageError(StorageErrorCode.CANNOT_SLICE_BLOB, "Cannot slice blob for upload. Please retry the upload.");
}
function serverFileWrongSize() {
    return new StorageError(StorageErrorCode.SERVER_FILE_WRONG_SIZE, "Server recorded incorrect upload file size, please retry the upload.");
}
function noDownloadURL() {
    return new StorageError(StorageErrorCode.NO_DOWNLOAD_URL, "The given file does not have any download URLs.");
}
function missingPolyFill(polyFill) {
    return new StorageError(StorageErrorCode.UNSUPPORTED_ENVIRONMENT, `${polyFill} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);
}
/**
 * @internal
 */ function invalidArgument(message) {
    return new StorageError(StorageErrorCode.INVALID_ARGUMENT, message);
}
function appDeleted() {
    return new StorageError(StorageErrorCode.APP_DELETED, "The Firebase app was deleted.");
}
/**
 * @param name - The name of the operation that was invalid.
 *
 * @internal
 */ function invalidRootOperation(name) {
    return new StorageError(StorageErrorCode.INVALID_ROOT_OPERATION, "The operation '" + name + "' cannot be performed on a root reference, create a non-root " + "reference using child, such as .child('file.png').");
}
/**
 * @param format - The format that was not valid.
 * @param message - A message describing the format violation.
 */ function invalidFormat(format, message) {
    return new StorageError(StorageErrorCode.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
}
/**
 * @param message - A message describing the internal error.
 */ function internalError(message) {
    throw new StorageError(StorageErrorCode.INTERNAL_ERROR, "Internal error: " + message);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Firebase Storage location data.
 *
 * @internal
 */ class Location {
    constructor(bucket, path){
        this.bucket = bucket;
        this.path_ = path;
    }
    get path() {
        return this.path_;
    }
    get isRoot() {
        return this.path.length === 0;
    }
    fullServerUrl() {
        const encode = encodeURIComponent;
        return "/b/" + encode(this.bucket) + "/o/" + encode(this.path);
    }
    bucketOnlyServerUrl() {
        const encode = encodeURIComponent;
        return "/b/" + encode(this.bucket) + "/o";
    }
    static makeFromBucketSpec(bucketString, host) {
        let bucketLocation;
        try {
            bucketLocation = Location.makeFromUrl(bucketString, host);
        } catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, "");
        }
        if (bucketLocation.path === "") return bucketLocation;
        else throw invalidDefaultBucket(bucketString);
    }
    static makeFromUrl(url, host) {
        let location = null;
        const bucketDomain = "([A-Za-z0-9.\\-_]+)";
        function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === "/") loc.path_ = loc.path_.slice(0, -1);
        }
        const gsPath = "(/(.*))?$";
        const gsRegex = new RegExp("^gs://" + bucketDomain + gsPath, "i");
        const gsIndices = {
            bucket: 1,
            path: 3
        };
        function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
        }
        const version = "v[A-Za-z0-9_]+";
        const firebaseStorageHost = host.replace(/[.]/g, "\\.");
        const firebaseStoragePath = "(/([^?#]*).*)?$";
        const firebaseStorageRegExp = new RegExp(`^https?://${firebaseStorageHost}/${version}/b/${bucketDomain}/o${firebaseStoragePath}`, "i");
        const firebaseStorageIndices = {
            bucket: 1,
            path: 3
        };
        const cloudStorageHost = host === DEFAULT_HOST ? "(?:storage.googleapis.com|storage.cloud.google.com)" : host;
        const cloudStoragePath = "([^?#]*)";
        const cloudStorageRegExp = new RegExp(`^https?://${cloudStorageHost}/${bucketDomain}/${cloudStoragePath}`, "i");
        const cloudStorageIndices = {
            bucket: 1,
            path: 2
        };
        const groups = [
            {
                regex: gsRegex,
                indices: gsIndices,
                postModify: gsModify
            },
            {
                regex: firebaseStorageRegExp,
                indices: firebaseStorageIndices,
                postModify: httpModify
            },
            {
                regex: cloudStorageRegExp,
                indices: cloudStorageIndices,
                postModify: httpModify
            }
        ];
        for(let i = 0; i < groups.length; i++){
            const group = groups[i];
            const captures = group.regex.exec(url);
            if (captures) {
                const bucketValue = captures[group.indices.bucket];
                let pathValue = captures[group.indices.path];
                if (!pathValue) pathValue = "";
                location = new Location(bucketValue, pathValue);
                group.postModify(location);
                break;
            }
        }
        if (location == null) throw invalidUrl(url);
        return location;
    }
}
/**
 * A request whose promise always fails.
 */ class FailRequest {
    constructor(error){
        this.promise_ = Promise.reject(error);
    }
    /** @inheritDoc */ getPromise() {
        return this.promise_;
    }
    /** @inheritDoc */ cancel(_appDelete = false) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Accepts a callback for an action to perform (`doRequest`),
 * and then a callback for when the backoff has completed (`backoffCompleteCb`).
 * The callback sent to start requires an argument to call (`onRequestComplete`).
 * When `start` calls `doRequest`, it passes a callback for when the request has
 * completed, `onRequestComplete`. Based on this, the backoff continues, with
 * another call to `doRequest` and the above loop continues until the timeout
 * is hit, or a successful response occurs.
 * @description
 * @param doRequest Callback to perform request
 * @param backoffCompleteCb Callback to call when backoff has been completed
 */ function start(doRequest, // eslint-disable-next-line @typescript-eslint/no-explicit-any
backoffCompleteCb, timeout) {
    // TODO(andysoto): make this code cleaner (probably refactor into an actual
    // type instead of a bunch of functions with state shared in the closure)
    let waitSeconds = 1;
    // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
    // TODO: find a way to exclude Node type definition for storage because storage only works in browser
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let retryTimeoutId = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let globalTimeoutId = null;
    let hitTimeout = false;
    let cancelState = 0;
    function canceled() {
        return cancelState === 2;
    }
    let triggeredCallback = false;
    function triggerCallback(...args) {
        if (!triggeredCallback) {
            triggeredCallback = true;
            backoffCompleteCb.apply(null, args);
        }
    }
    function callWithDelay(millis) {
        retryTimeoutId = setTimeout(()=>{
            retryTimeoutId = null;
            doRequest(responseHandler, canceled());
        }, millis);
    }
    function clearGlobalTimeout() {
        if (globalTimeoutId) clearTimeout(globalTimeoutId);
    }
    function responseHandler(success, ...args) {
        if (triggeredCallback) {
            clearGlobalTimeout();
            return;
        }
        if (success) {
            clearGlobalTimeout();
            triggerCallback.call(null, success, ...args);
            return;
        }
        const mustStop = canceled() || hitTimeout;
        if (mustStop) {
            clearGlobalTimeout();
            triggerCallback.call(null, success, ...args);
            return;
        }
        if (waitSeconds < 64) /* TODO(andysoto): don't back off so quickly if we know we're offline. */ waitSeconds *= 2;
        let waitMillis;
        if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
        } else waitMillis = (waitSeconds + Math.random()) * 1000;
        callWithDelay(waitMillis);
    }
    let stopped = false;
    function stop(wasTimeout) {
        if (stopped) return;
        stopped = true;
        clearGlobalTimeout();
        if (triggeredCallback) return;
        if (retryTimeoutId !== null) {
            if (!wasTimeout) cancelState = 2;
            clearTimeout(retryTimeoutId);
            callWithDelay(0);
        } else if (!wasTimeout) cancelState = 1;
    }
    callWithDelay(0);
    globalTimeoutId = setTimeout(()=>{
        hitTimeout = true;
        stop(true);
    }, timeout);
    return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */ function stop(id) {
    id(false);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function isJustDef(p) {
    return p !== void 0;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(p) {
    return typeof p === "function";
}
function isNonArrayObject(p) {
    return typeof p === "object" && !Array.isArray(p);
}
function isString(p) {
    return typeof p === "string" || p instanceof String;
}
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
    return typeof Blob !== "undefined";
}
function validateNumber(argument, minValue, maxValue, value) {
    if (value < minValue) throw invalidArgument(`Invalid value for '${argument}'. Expected ${minValue} or greater.`);
    if (value > maxValue) throw invalidArgument(`Invalid value for '${argument}'. Expected ${maxValue} or less.`);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function makeUrl(urlPart, host, protocol) {
    let origin = host;
    if (protocol == null) origin = `https://${host}`;
    return `${protocol}://${origin}/v0${urlPart}`;
}
function makeQueryString(params) {
    const encode = encodeURIComponent;
    let queryPart = "?";
    for(const key in params)if (params.hasOwnProperty(key)) {
        const nextPart = encode(key) + "=" + encode(params[key]);
        queryPart = queryPart + nextPart + "&";
    }
    // Chop off the extra '&' or '?' on the end
    queryPart = queryPart.slice(0, -1);
    return queryPart;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Error codes for requests made by the the XhrIo wrapper.
 */ var ErrorCode;
(function(ErrorCode) {
    ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Checks the status code to see if the action should be retried.
 *
 * @param status Current HTTP status code returned by server.
 * @param additionalRetryCodes additional retry codes to check against
 */ function isRetryStatusCode(status, additionalRetryCodes) {
    // The codes for which to retry came from this page:
    // https://cloud.google.com/storage/docs/exponential-backoff
    const isFiveHundredCode = status >= 500 && status < 600;
    const extraRetryCodes = [
        // Request Timeout: web server didn't receive full request in time.
        408,
        // Too Many Requests: you're getting rate-limited, basically.
        429
    ];
    const isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
    const isAdditionalRetryCode = additionalRetryCodes.indexOf(status) !== -1;
    return isFiveHundredCode || isExtraRetryCode || isAdditionalRetryCode;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Handles network logic for all Storage Requests, including error reporting and
 * retries with backoff.
 *
 * @param I - the type of the backend's network response.
 * @param - O the output type used by the rest of the SDK. The conversion
 * happens in the specified `callback_`.
 */ class NetworkRequest {
    constructor(url_, method_, headers_, body_, successCodes_, additionalRetryCodes_, callback_, errorCallback_, timeout_, progressCallback_, connectionFactory_, retry = true){
        this.url_ = url_;
        this.method_ = method_;
        this.headers_ = headers_;
        this.body_ = body_;
        this.successCodes_ = successCodes_;
        this.additionalRetryCodes_ = additionalRetryCodes_;
        this.callback_ = callback_;
        this.errorCallback_ = errorCallback_;
        this.timeout_ = timeout_;
        this.progressCallback_ = progressCallback_;
        this.connectionFactory_ = connectionFactory_;
        this.retry = retry;
        this.pendingConnection_ = null;
        this.backoffId_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.promise_ = new Promise((resolve, reject)=>{
            this.resolve_ = resolve;
            this.reject_ = reject;
            this.start_();
        });
    }
    /**
     * Actually starts the retry loop.
     */ start_() {
        const doTheRequest = (backoffCallback, canceled)=>{
            if (canceled) {
                backoffCallback(false, new RequestEndStatus(false, null, true));
                return;
            }
            const connection = this.connectionFactory_();
            this.pendingConnection_ = connection;
            const progressListener = (progressEvent)=>{
                const loaded = progressEvent.loaded;
                const total = progressEvent.lengthComputable ? progressEvent.total : -1;
                if (this.progressCallback_ !== null) this.progressCallback_(loaded, total);
            };
            if (this.progressCallback_ !== null) connection.addUploadProgressListener(progressListener);
            // connection.send() never rejects, so we don't need to have a error handler or use catch on the returned promise.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            connection.send(this.url_, this.method_, this.body_, this.headers_).then(()=>{
                if (this.progressCallback_ !== null) connection.removeUploadProgressListener(progressListener);
                this.pendingConnection_ = null;
                const hitServer = connection.getErrorCode() === ErrorCode.NO_ERROR;
                const status = connection.getStatus();
                if (!hitServer || isRetryStatusCode(status, this.additionalRetryCodes_) && this.retry) {
                    const wasCanceled = connection.getErrorCode() === ErrorCode.ABORT;
                    backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                    return;
                }
                const successCode = this.successCodes_.indexOf(status) !== -1;
                backoffCallback(true, new RequestEndStatus(successCode, connection));
            });
        };
        /**
         * @param requestWentThrough - True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */ const backoffDone = (requestWentThrough, status)=>{
            const resolve = this.resolve_;
            const reject = this.reject_;
            const connection = status.connection;
            if (status.wasSuccessCode) try {
                const result = this.callback_(connection, connection.getResponse());
                if (isJustDef(result)) resolve(result);
                else resolve();
            } catch (e) {
                reject(e);
            }
            else {
                if (connection !== null) {
                    const err = unknown();
                    err.serverResponse = connection.getErrorText();
                    if (this.errorCallback_) reject(this.errorCallback_(connection, err));
                    else reject(err);
                } else if (status.canceled) {
                    const err = this.appDelete_ ? appDeleted() : canceled();
                    reject(err);
                } else {
                    const err = retryLimitExceeded();
                    reject(err);
                }
            }
        };
        if (this.canceled_) backoffDone(false, new RequestEndStatus(false, null, true));
        else this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
    }
    /** @inheritDoc */ getPromise() {
        return this.promise_;
    }
    /** @inheritDoc */ cancel(appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) stop(this.backoffId_);
        if (this.pendingConnection_ !== null) this.pendingConnection_.abort();
    }
}
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled - Defaults to false.
 */ class RequestEndStatus {
    constructor(wasSuccessCode, connection, canceled){
        this.wasSuccessCode = wasSuccessCode;
        this.connection = connection;
        this.canceled = !!canceled;
    }
}
function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) headers["Authorization"] = "Firebase " + authToken;
}
function addVersionHeader_(headers, firebaseVersion) {
    headers["X-Firebase-Storage-Version"] = "webjs/" + (firebaseVersion !== null && firebaseVersion !== void 0 ? firebaseVersion : "AppManager");
}
function addGmpidHeader_(headers, appId) {
    if (appId) headers["X-Firebase-GMPID"] = appId;
}
function addAppCheckHeader_(headers, appCheckToken) {
    if (appCheckToken !== null) headers["X-Firebase-AppCheck"] = appCheckToken;
}
function makeRequest(requestInfo, appId, authToken, appCheckToken, requestFactory, firebaseVersion, retry = true) {
    const queryPart = makeQueryString(requestInfo.urlParams);
    const url = requestInfo.url + queryPart;
    const headers = Object.assign({}, requestInfo.headers);
    addGmpidHeader_(headers, appId);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers, firebaseVersion);
    addAppCheckHeader_(headers, appCheckToken);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, requestFactory, retry);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function getBlobBuilder() {
    if (typeof BlobBuilder !== "undefined") return BlobBuilder;
    else if (typeof WebKitBlobBuilder !== "undefined") return WebKitBlobBuilder;
    else return undefined;
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param args The values that will make up the resulting blob.
 * @return The blob.
 */ function getBlob$1(...args) {
    const BlobBuilder1 = getBlobBuilder();
    if (BlobBuilder1 !== undefined) {
        const bb = new BlobBuilder1();
        for(let i = 0; i < args.length; i++)bb.append(args[i]);
        return bb.getBlob();
    } else {
        if (isNativeBlobDefined()) return new Blob(args);
        else throw new StorageError(StorageErrorCode.UNSUPPORTED_ENVIRONMENT, "This browser doesn't seem to support creating Blobs");
    }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */ function sliceBlob(blob, start, end) {
    if (blob.webkitSlice) return blob.webkitSlice(start, end);
    else if (blob.mozSlice) return blob.mozSlice(start, end);
    else if (blob.slice) return blob.slice(start, end);
    return null;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Converts a Base64 encoded string to a binary string. */ function decodeBase64(encoded) {
    if (typeof atob === "undefined") throw missingPolyFill("base-64");
    return atob(encoded);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An enumeration of the possible string formats for upload.
 * @public
 */ const StringFormat = {
    /**
     * Indicates the string should be interpreted "raw", that is, as normal text.
     * The string will be interpreted as UTF-16, then uploaded as a UTF-8 byte
     * sequence.
     * Example: The string 'Hello! \\ud83d\\ude0a' becomes the byte sequence
     * 48 65 6c 6c 6f 21 20 f0 9f 98 8a
     */ RAW: "raw",
    /**
     * Indicates the string should be interpreted as base64-encoded data.
     * Padding characters (trailing '='s) are optional.
     * Example: The string 'rWmO++E6t7/rlw==' becomes the byte sequence
     * ad 69 8e fb e1 3a b7 bf eb 97
     */ BASE64: "base64",
    /**
     * Indicates the string should be interpreted as base64url-encoded data.
     * Padding characters (trailing '='s) are optional.
     * Example: The string 'rWmO--E6t7_rlw==' becomes the byte sequence
     * ad 69 8e fb e1 3a b7 bf eb 97
     */ BASE64URL: "base64url",
    /**
     * Indicates the string is a data URL, such as one obtained from
     * canvas.toDataURL().
     * Example: the string 'data:application/octet-stream;base64,aaaa'
     * becomes the byte sequence
     * 69 a6 9a
     * (the content-type "application/octet-stream" is also applied, but can
     * be overridden in the metadata object).
     */ DATA_URL: "data_url"
};
class StringData {
    constructor(data, contentType){
        this.data = data;
        this.contentType = contentType || null;
    }
}
/**
 * @internal
 */ function dataFromString(format, stringData) {
    switch(format){
        case StringFormat.RAW:
            return new StringData(utf8Bytes_(stringData));
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, stringData));
        case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
    }
    // assert(false);
    throw unknown();
}
function utf8Bytes_(value) {
    const b = [];
    for(let i = 0; i < value.length; i++){
        let c = value.charCodeAt(i);
        if (c <= 127) b.push(c);
        else if (c <= 2047) b.push(192 | c >> 6, 128 | c & 63);
        else {
            if ((c & 64512) === 55296) {
                // The start of a surrogate pair.
                const valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;
                if (!valid) // The second surrogate wasn't there.
                b.push(239, 191, 189);
                else {
                    const hi = c;
                    const lo = value.charCodeAt(++i);
                    c = 65536 | (hi & 1023) << 10 | lo & 1023;
                    b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
                }
            } else if ((c & 64512) === 56320) // Invalid low surrogate.
            b.push(239, 191, 189);
            else b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
        }
    }
    return new Uint8Array(b);
}
function percentEncodedBytes_(value) {
    let decoded;
    try {
        decoded = decodeURIComponent(value);
    } catch (e) {
        throw invalidFormat(StringFormat.DATA_URL, "Malformed data URL.");
    }
    return utf8Bytes_(decoded);
}
function base64Bytes_(format, value) {
    switch(format){
        case StringFormat.BASE64:
            {
                const hasMinus = value.indexOf("-") !== -1;
                const hasUnder = value.indexOf("_") !== -1;
                if (hasMinus || hasUnder) {
                    const invalidChar = hasMinus ? "-" : "_";
                    throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
                }
                break;
            }
        case StringFormat.BASE64URL:
            {
                const hasPlus = value.indexOf("+") !== -1;
                const hasSlash = value.indexOf("/") !== -1;
                if (hasPlus || hasSlash) {
                    const invalidChar = hasPlus ? "+" : "/";
                    throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
                }
                value = value.replace(/-/g, "+").replace(/_/g, "/");
                break;
            }
    }
    let bytes;
    try {
        bytes = decodeBase64(value);
    } catch (e) {
        if (e.message.includes("polyfill")) throw e;
        throw invalidFormat(format, "Invalid character found");
    }
    const array = new Uint8Array(bytes.length);
    for(let i = 0; i < bytes.length; i++)array[i] = bytes.charCodeAt(i);
    return array;
}
class DataURLParts {
    constructor(dataURL){
        this.base64 = false;
        this.contentType = null;
        const matches = dataURL.match(/^data:([^,]+)?,/);
        if (matches === null) throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        const middle = matches[1] || null;
        if (middle != null) {
            this.base64 = endsWith(middle, ";base64");
            this.contentType = this.base64 ? middle.substring(0, middle.length - 7) : middle;
        }
        this.rest = dataURL.substring(dataURL.indexOf(",") + 1);
    }
}
function dataURLBytes_(dataUrl) {
    const parts = new DataURLParts(dataUrl);
    if (parts.base64) return base64Bytes_(StringFormat.BASE64, parts.rest);
    else return percentEncodedBytes_(parts.rest);
}
function dataURLContentType_(dataUrl) {
    const parts = new DataURLParts(dataUrl);
    return parts.contentType;
}
function endsWith(s, end) {
    const longEnough = s.length >= end.length;
    if (!longEnough) return false;
    return s.substring(s.length - end.length) === end;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @param opt_elideCopy - If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 *
 * @internal
 */ class FbsBlob {
    constructor(data, elideCopy){
        let size = 0;
        let blobType = "";
        if (isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        } else if (data instanceof ArrayBuffer) {
            if (elideCopy) this.data_ = new Uint8Array(data);
            else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        } else if (data instanceof Uint8Array) {
            if (elideCopy) this.data_ = data;
            else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }
    size() {
        return this.size_;
    }
    type() {
        return this.type_;
    }
    slice(startByte, endByte) {
        if (isNativeBlob(this.data_)) {
            const realBlob = this.data_;
            const sliced = sliceBlob(realBlob, startByte, endByte);
            if (sliced === null) return null;
            return new FbsBlob(sliced);
        } else {
            const slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
        }
    }
    static getBlob(...args) {
        if (isNativeBlobDefined()) {
            const blobby = args.map((val)=>{
                if (val instanceof FbsBlob) return val.data_;
                else return val;
            });
            return new FbsBlob(getBlob$1.apply(null, blobby));
        } else {
            const uint8Arrays = args.map((val)=>{
                if (isString(val)) return dataFromString(StringFormat.RAW, val).data;
                else // Blobs don't exist, so this has to be a Uint8Array.
                return val.data_;
            });
            let finalLength = 0;
            uint8Arrays.forEach((array)=>{
                finalLength += array.byteLength;
            });
            const merged = new Uint8Array(finalLength);
            let index = 0;
            uint8Arrays.forEach((array)=>{
                for(let i = 0; i < array.length; i++)merged[index++] = array[i];
            });
            return new FbsBlob(merged, true);
        }
    }
    uploadData() {
        return this.data_;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */ function jsonObjectOrNull(s) {
    let obj;
    try {
        obj = JSON.parse(s);
    } catch (e) {
        return null;
    }
    if (isNonArrayObject(obj)) return obj;
    else return null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Contains helper methods for manipulating paths.
 */ /**
 * @return Null if the path is already at the root.
 */ function parent(path) {
    if (path.length === 0) return null;
    const index = path.lastIndexOf("/");
    if (index === -1) return "";
    const newPath = path.slice(0, index);
    return newPath;
}
function child(path, childPath) {
    const canonicalChildPath = childPath.split("/").filter((component)=>component.length > 0).join("/");
    if (path.length === 0) return canonicalChildPath;
    else return path + "/" + canonicalChildPath;
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */ function lastComponent(path) {
    const index = path.lastIndexOf("/", path.length - 2);
    if (index === -1) return path;
    else return path.slice(index + 1);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function noXform_(metadata, value) {
    return value;
}
class Mapping {
    constructor(server, local, writable, xform){
        this.server = server;
        this.local = local || server;
        this.writable = !!writable;
        this.xform = xform || noXform_;
    }
}
let mappings_ = null;
function xformPath(fullPath) {
    if (!isString(fullPath) || fullPath.length < 2) return fullPath;
    else return lastComponent(fullPath);
}
function getMappings() {
    if (mappings_) return mappings_;
    const mappings = [];
    mappings.push(new Mapping("bucket"));
    mappings.push(new Mapping("generation"));
    mappings.push(new Mapping("metageneration"));
    mappings.push(new Mapping("name", "fullPath", true));
    function mappingsXformPath(_metadata, fullPath) {
        return xformPath(fullPath);
    }
    const nameMapping = new Mapping("name");
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    /**
     * Coerces the second param to a number, if it is defined.
     */ function xformSize(_metadata, size) {
        if (size !== undefined) return Number(size);
        else return size;
    }
    const sizeMapping = new Mapping("size");
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping("timeCreated"));
    mappings.push(new Mapping("updated"));
    mappings.push(new Mapping("md5Hash", null, true));
    mappings.push(new Mapping("cacheControl", null, true));
    mappings.push(new Mapping("contentDisposition", null, true));
    mappings.push(new Mapping("contentEncoding", null, true));
    mappings.push(new Mapping("contentLanguage", null, true));
    mappings.push(new Mapping("contentType", null, true));
    mappings.push(new Mapping("metadata", "customMetadata", true));
    mappings_ = mappings;
    return mappings_;
}
function addRef(metadata, service) {
    function generateRef() {
        const bucket = metadata["bucket"];
        const path = metadata["fullPath"];
        const loc = new Location(bucket, path);
        return service._makeStorageReference(loc);
    }
    Object.defineProperty(metadata, "ref", {
        get: generateRef
    });
}
function fromResource(service, resource, mappings) {
    const metadata = {};
    metadata["type"] = "file";
    const len = mappings.length;
    for(let i = 0; i < len; i++){
        const mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, service);
    return metadata;
}
function fromResourceString(service, resourceString, mappings) {
    const obj = jsonObjectOrNull(resourceString);
    if (obj === null) return null;
    const resource = obj;
    return fromResource(service, resource, mappings);
}
function downloadUrlFromResourceString(metadata, resourceString, host, protocol) {
    const obj = jsonObjectOrNull(resourceString);
    if (obj === null) return null;
    if (!isString(obj["downloadTokens"])) // This can happen if objects are uploaded through GCS and retrieved
    // through list, so we don't want to throw an Error.
    return null;
    const tokens = obj["downloadTokens"];
    if (tokens.length === 0) return null;
    const encode = encodeURIComponent;
    const tokensList = tokens.split(",");
    const urls = tokensList.map((token)=>{
        const bucket = metadata["bucket"];
        const path = metadata["fullPath"];
        const urlPart = "/b/" + encode(bucket) + "/o/" + encode(path);
        const base = makeUrl(urlPart, host, protocol);
        const queryString = makeQueryString({
            alt: "media",
            token
        });
        return base + queryString;
    });
    return urls[0];
}
function toResourceString(metadata, mappings) {
    const resource = {};
    const len = mappings.length;
    for(let i = 0; i < len; i++){
        const mapping = mappings[i];
        if (mapping.writable) resource[mapping.server] = metadata[mapping.local];
    }
    return JSON.stringify(resource);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PREFIXES_KEY = "prefixes";
const ITEMS_KEY = "items";
function fromBackendResponse(service, bucket, resource) {
    const listResult = {
        prefixes: [],
        items: [],
        nextPageToken: resource["nextPageToken"]
    };
    if (resource[PREFIXES_KEY]) for (const path of resource[PREFIXES_KEY]){
        const pathWithoutTrailingSlash = path.replace(/\/$/, "");
        const reference = service._makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
        listResult.prefixes.push(reference);
    }
    if (resource[ITEMS_KEY]) for (const item of resource[ITEMS_KEY]){
        const reference = service._makeStorageReference(new Location(bucket, item["name"]));
        listResult.items.push(reference);
    }
    return listResult;
}
function fromResponseString(service, bucket, resourceString) {
    const obj = jsonObjectOrNull(resourceString);
    if (obj === null) return null;
    const resource = obj;
    return fromBackendResponse(service, bucket, resource);
}
/**
 * Contains a fully specified request.
 *
 * @param I - the type of the backend's network response.
 * @param O - the output response type used by the rest of the SDK.
 */ class RequestInfo {
    constructor(url, method, /**
     * Returns the value with which to resolve the request's promise. Only called
     * if the request is successful. Throw from this function to reject the
     * returned Request's promise with the thrown error.
     * Note: The XhrIo passed to this function may be reused after this callback
     * returns. Do not keep a reference to it in any way.
     */ handler, timeout){
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {};
        this.headers = {};
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */ this.progressCallback = null;
        this.successCodes = [
            200
        ];
        this.additionalRetryCodes = [];
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Throws the UNKNOWN StorageError if cndn is false.
 */ function handlerCheck(cndn) {
    if (!cndn) throw unknown();
}
function metadataHandler(service, mappings) {
    function handler(xhr, text) {
        const metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
    }
    return handler;
}
function listHandler(service, bucket) {
    function handler(xhr, text) {
        const listResult = fromResponseString(service, bucket, text);
        handlerCheck(listResult !== null);
        return listResult;
    }
    return handler;
}
function downloadUrlHandler(service, mappings) {
    function handler(xhr, text) {
        const metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return downloadUrlFromResourceString(metadata, text, service.host, service._protocol);
    }
    return handler;
}
function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
        let newErr;
        if (xhr.getStatus() === 401) {
            if (// This exact message string is the only consistent part of the
            // server's error response that identifies it as an App Check error.
            xhr.getErrorText().includes("Firebase App Check token is invalid")) newErr = unauthorizedApp();
            else newErr = unauthenticated();
        } else {
            if (xhr.getStatus() === 402) newErr = quotaExceeded(location.bucket);
            else if (xhr.getStatus() === 403) newErr = unauthorized(location.path);
            else newErr = err;
        }
        newErr.status = xhr.getStatus();
        newErr.serverResponse = err.serverResponse;
        return newErr;
    }
    return errorHandler;
}
function objectErrorHandler(location) {
    const shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
        let newErr = shared(xhr, err);
        if (xhr.getStatus() === 404) newErr = objectNotFound(location.path);
        newErr.serverResponse = err.serverResponse;
        return newErr;
    }
    return errorHandler;
}
function getMetadata$2(service, location, mappings) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = "GET";
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function list$2(service, location, delimiter, pageToken, maxResults) {
    const urlParams = {};
    if (location.isRoot) urlParams["prefix"] = "";
    else urlParams["prefix"] = location.path + "/";
    if (delimiter && delimiter.length > 0) urlParams["delimiter"] = delimiter;
    if (pageToken) urlParams["pageToken"] = pageToken;
    if (maxResults) urlParams["maxResults"] = maxResults;
    const urlPart = location.bucketOnlyServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = "GET";
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
function getBytes$1(service, location, maxDownloadSizeBytes) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol) + "?alt=media";
    const method = "GET";
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, (_, data)=>data, timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    if (maxDownloadSizeBytes !== undefined) {
        requestInfo.headers["Range"] = `bytes=0-${maxDownloadSizeBytes}`;
        requestInfo.successCodes = [
            200 /* OK */ ,
            206 /* Partial Content */ 
        ];
    }
    return requestInfo;
}
function getDownloadUrl(service, location, mappings) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = "GET";
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function updateMetadata$2(service, location, metadata, mappings) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = "PATCH";
    const body = toResourceString(metadata, mappings);
    const headers = {
        "Content-Type": "application/json; charset=utf-8"
    };
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function deleteObject$2(service, location) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = "DELETE";
    const timeout = service.maxOperationRetryTime;
    function handler(_xhr, _text) {}
    const requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.successCodes = [
        200,
        204
    ];
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function determineContentType_(metadata, blob) {
    return metadata && metadata["contentType"] || blob && blob.type() || "application/octet-stream";
}
function metadataForUpload_(location, blob, metadata) {
    const metadataClone = Object.assign({}, metadata);
    metadataClone["fullPath"] = location.path;
    metadataClone["size"] = blob.size();
    if (!metadataClone["contentType"]) metadataClone["contentType"] = determineContentType_(null, blob);
    return metadataClone;
}
/**
 * Prepare RequestInfo for uploads as Content-Type: multipart.
 */ function multipartUpload(service, location, mappings, blob, metadata) {
    const urlPart = location.bucketOnlyServerUrl();
    const headers = {
        "X-Goog-Upload-Protocol": "multipart"
    };
    function genBoundary() {
        let str = "";
        for(let i = 0; i < 2; i++)str = str + Math.random().toString().slice(2);
        return str;
    }
    const boundary = genBoundary();
    headers["Content-Type"] = "multipart/related; boundary=" + boundary;
    const metadata_ = metadataForUpload_(location, blob, metadata);
    const metadataString = toResourceString(metadata_, mappings);
    const preBlobPart = "--" + boundary + "\r\n" + "Content-Type: application/json; charset=utf-8\r\n\r\n" + metadataString + "\r\n--" + boundary + "\r\n" + "Content-Type: " + metadata_["contentType"] + "\r\n\r\n";
    const postBlobPart = "\r\n--" + boundary + "--";
    const body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) throw cannotSliceBlob();
    const urlParams = {
        name: metadata_["fullPath"]
    };
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = "POST";
    const timeout = service.maxUploadRetryTime;
    const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 */ class ResumableUploadStatus {
    constructor(current, total, finalized, metadata){
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
    }
}
function checkResumeHeader_(xhr, allowed) {
    let status = null;
    try {
        status = xhr.getResponseHeader("X-Goog-Upload-Status");
    } catch (e) {
        handlerCheck(false);
    }
    const allowedStatus = allowed || [
        "active"
    ];
    handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
    return status;
}
function createResumableUpload(service, location, mappings, blob, metadata) {
    const urlPart = location.bucketOnlyServerUrl();
    const metadataForUpload = metadataForUpload_(location, blob, metadata);
    const urlParams = {
        name: metadataForUpload["fullPath"]
    };
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = "POST";
    const headers = {
        "X-Goog-Upload-Protocol": "resumable",
        "X-Goog-Upload-Command": "start",
        "X-Goog-Upload-Header-Content-Length": `${blob.size()}`,
        "X-Goog-Upload-Header-Content-Type": metadataForUpload["contentType"],
        "Content-Type": "application/json; charset=utf-8"
    };
    const body = toResourceString(metadataForUpload, mappings);
    const timeout = service.maxUploadRetryTime;
    function handler(xhr) {
        checkResumeHeader_(xhr);
        let url;
        try {
            url = xhr.getResponseHeader("X-Goog-Upload-URL");
        } catch (e) {
            handlerCheck(false);
        }
        handlerCheck(isString(url));
        return url;
    }
    const requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */ function getResumableUploadStatus(service, location, url, blob) {
    const headers = {
        "X-Goog-Upload-Command": "query"
    };
    function handler(xhr) {
        const status = checkResumeHeader_(xhr, [
            "active",
            "final"
        ]);
        let sizeString = null;
        try {
            sizeString = xhr.getResponseHeader("X-Goog-Upload-Size-Received");
        } catch (e) {
            handlerCheck(false);
        }
        if (!sizeString) // null or empty string
        handlerCheck(false);
        const size = Number(sizeString);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === "final");
    }
    const method = "POST";
    const timeout = service.maxUploadRetryTime;
    const requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */ const RESUMABLE_UPLOAD_CHUNK_SIZE = 262144;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */ function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
    // TODO(andysoto): standardize on internal asserts
    // assert(!(opt_status && opt_status.finalized));
    const status_ = new ResumableUploadStatus(0, 0);
    if (status) {
        status_.current = status.current;
        status_.total = status.total;
    } else {
        status_.current = 0;
        status_.total = blob.size();
    }
    if (blob.size() !== status_.total) throw serverFileWrongSize();
    const bytesLeft = status_.total - status_.current;
    let bytesToUpload = bytesLeft;
    if (chunkSize > 0) bytesToUpload = Math.min(bytesToUpload, chunkSize);
    const startByte = status_.current;
    const endByte = startByte + bytesToUpload;
    let uploadCommand = "";
    if (bytesToUpload === 0) uploadCommand = "finalize";
    else if (bytesLeft === bytesToUpload) uploadCommand = "upload, finalize";
    else uploadCommand = "upload";
    const headers = {
        "X-Goog-Upload-Command": uploadCommand,
        "X-Goog-Upload-Offset": `${status_.current}`
    };
    const body = blob.slice(startByte, endByte);
    if (body === null) throw cannotSliceBlob();
    function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        const uploadStatus = checkResumeHeader_(xhr, [
            "active",
            "final"
        ]);
        const newCurrent = status_.current + bytesToUpload;
        const size = blob.size();
        let metadata;
        if (uploadStatus === "final") metadata = metadataHandler(service, mappings)(xhr, text);
        else metadata = null;
        return new ResumableUploadStatus(newCurrent, size, uploadStatus === "final", metadata);
    }
    const method = "POST";
    const timeout = service.maxUploadRetryTime;
    const requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.progressCallback = progressCallback || null;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An event that is triggered on a task.
 * @internal
 */ const TaskEvent = {
    /**
     * For this event,
     * <ul>
     *   <li>The `next` function is triggered on progress updates and when the
     *       task is paused/resumed with an `UploadTaskSnapshot` as the first
     *       argument.</li>
     *   <li>The `error` function is triggered if the upload is canceled or fails
     *       for another reason.</li>
     *   <li>The `complete` function is triggered if the upload completes
     *       successfully.</li>
     * </ul>
     */ STATE_CHANGED: "state_changed"
};
// type keys = keyof TaskState
/**
 * Represents the current state of a running upload.
 * @internal
 */ const TaskState = {
    /** The task is currently transferring data. */ RUNNING: "running",
    /** The task was paused by the user. */ PAUSED: "paused",
    /** The task completed successfully. */ SUCCESS: "success",
    /** The task was canceled. */ CANCELED: "canceled",
    /** The task failed with an error. */ ERROR: "error"
};
function taskStateFromInternalTaskState(state) {
    switch(state){
        case "running" /* InternalTaskState.RUNNING */ :
        case "pausing" /* InternalTaskState.PAUSING */ :
        case "canceling" /* InternalTaskState.CANCELING */ :
            return TaskState.RUNNING;
        case "paused" /* InternalTaskState.PAUSED */ :
            return TaskState.PAUSED;
        case "success" /* InternalTaskState.SUCCESS */ :
            return TaskState.SUCCESS;
        case "canceled" /* InternalTaskState.CANCELED */ :
            return TaskState.CANCELED;
        case "error" /* InternalTaskState.ERROR */ :
            return TaskState.ERROR;
        default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Observer {
    constructor(nextOrObserver, error, complete){
        const asFunctions = isFunction(nextOrObserver) || error != null || complete != null;
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = error !== null && error !== void 0 ? error : undefined;
            this.complete = complete !== null && complete !== void 0 ? complete : undefined;
        } else {
            const observer = nextOrObserver;
            this.next = observer.next;
            this.error = observer.error;
            this.complete = observer.complete;
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */ // eslint-disable-next-line @typescript-eslint/ban-types
function async(f) {
    return (...argsToForward)=>{
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(()=>f(...argsToForward));
    };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** An override for the text-based Connection. Used in tests. */ let textFactoryOverride = null;
/**
 * Network layer for browsers. We use this instead of goog.net.XhrIo because
 * goog.net.XhrIo is hyuuuuge and doesn't work in React Native on Android.
 */ class XhrConnection {
    constructor(){
        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.initXhr();
        this.errorCode_ = ErrorCode.NO_ERROR;
        this.sendPromise_ = new Promise((resolve)=>{
            this.xhr_.addEventListener("abort", ()=>{
                this.errorCode_ = ErrorCode.ABORT;
                resolve();
            });
            this.xhr_.addEventListener("error", ()=>{
                this.errorCode_ = ErrorCode.NETWORK_ERROR;
                resolve();
            });
            this.xhr_.addEventListener("load", ()=>{
                resolve();
            });
        });
    }
    send(url, method, body, headers) {
        if (this.sent_) throw internalError("cannot .send() more than once");
        this.sent_ = true;
        this.xhr_.open(method, url, true);
        if (headers !== undefined) {
            for(const key in headers)if (headers.hasOwnProperty(key)) this.xhr_.setRequestHeader(key, headers[key].toString());
        }
        if (body !== undefined) this.xhr_.send(body);
        else this.xhr_.send();
        return this.sendPromise_;
    }
    getErrorCode() {
        if (!this.sent_) throw internalError("cannot .getErrorCode() before sending");
        return this.errorCode_;
    }
    getStatus() {
        if (!this.sent_) throw internalError("cannot .getStatus() before sending");
        try {
            return this.xhr_.status;
        } catch (e) {
            return -1;
        }
    }
    getResponse() {
        if (!this.sent_) throw internalError("cannot .getResponse() before sending");
        return this.xhr_.response;
    }
    getErrorText() {
        if (!this.sent_) throw internalError("cannot .getErrorText() before sending");
        return this.xhr_.statusText;
    }
    /** Aborts the request. */ abort() {
        this.xhr_.abort();
    }
    getResponseHeader(header) {
        return this.xhr_.getResponseHeader(header);
    }
    addUploadProgressListener(listener) {
        if (this.xhr_.upload != null) this.xhr_.upload.addEventListener("progress", listener);
    }
    removeUploadProgressListener(listener) {
        if (this.xhr_.upload != null) this.xhr_.upload.removeEventListener("progress", listener);
    }
}
class XhrTextConnection extends XhrConnection {
    initXhr() {
        this.xhr_.responseType = "text";
    }
}
function newTextConnection() {
    return textFactoryOverride ? textFactoryOverride() : new XhrTextConnection();
}
class XhrBytesConnection extends XhrConnection {
    initXhr() {
        this.xhr_.responseType = "arraybuffer";
    }
}
function newBytesConnection() {
    return new XhrBytesConnection();
}
class XhrBlobConnection extends XhrConnection {
    initXhr() {
        this.xhr_.responseType = "blob";
    }
}
function newBlobConnection() {
    return new XhrBlobConnection();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 * @internal
 */ class UploadTask {
    /**
     * @param ref - The firebaseStorage.Reference object this task came
     *     from, untyped to avoid cyclic dependencies.
     * @param blob - The blob to upload.
     */ constructor(ref, blob, metadata = null){
        /**
         * Number of bytes transferred so far.
         */ this._transferred = 0;
        this._needToFetchStatus = false;
        this._needToFetchMetadata = false;
        this._observers = [];
        this._error = undefined;
        this._uploadUrl = undefined;
        this._request = undefined;
        this._chunkMultiplier = 1;
        this._resolve = undefined;
        this._reject = undefined;
        this._ref = ref;
        this._blob = blob;
        this._metadata = metadata;
        this._mappings = getMappings();
        this._resumable = this._shouldDoResumable(this._blob);
        this._state = "running" /* InternalTaskState.RUNNING */ ;
        this._errorHandler = (error)=>{
            this._request = undefined;
            this._chunkMultiplier = 1;
            if (error._codeEquals(StorageErrorCode.CANCELED)) {
                this._needToFetchStatus = true;
                this.completeTransitions_();
            } else {
                const backoffExpired = this.isExponentialBackoffExpired();
                if (isRetryStatusCode(error.status, [])) {
                    if (backoffExpired) error = retryLimitExceeded();
                    else {
                        this.sleepTime = Math.max(this.sleepTime * 2, DEFAULT_MIN_SLEEP_TIME_MILLIS);
                        this._needToFetchStatus = true;
                        this.completeTransitions_();
                        return;
                    }
                }
                this._error = error;
                this._transition("error" /* InternalTaskState.ERROR */ );
            }
        };
        this._metadataErrorHandler = (error)=>{
            this._request = undefined;
            if (error._codeEquals(StorageErrorCode.CANCELED)) this.completeTransitions_();
            else {
                this._error = error;
                this._transition("error" /* InternalTaskState.ERROR */ );
            }
        };
        this.sleepTime = 0;
        this.maxSleepTime = this._ref.storage.maxUploadRetryTime;
        this._promise = new Promise((resolve, reject)=>{
            this._resolve = resolve;
            this._reject = reject;
            this._start();
        });
        // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.
        this._promise.then(null, ()=>{});
    }
    isExponentialBackoffExpired() {
        return this.sleepTime > this.maxSleepTime;
    }
    _makeProgressCallback() {
        const sizeBefore = this._transferred;
        return (loaded)=>this._updateProgress(sizeBefore + loaded);
    }
    _shouldDoResumable(blob) {
        return blob.size() > 262144;
    }
    _start() {
        if (this._state !== "running" /* InternalTaskState.RUNNING */ ) // This can happen if someone pauses us in a resume callback, for example.
        return;
        if (this._request !== undefined) return;
        if (this._resumable) {
            if (this._uploadUrl === undefined) this._createResumable();
            else {
                if (this._needToFetchStatus) this._fetchStatus();
                else if (this._needToFetchMetadata) // Happens if we miss the metadata on upload completion.
                this._fetchMetadata();
                else this.pendingTimeout = setTimeout(()=>{
                    this.pendingTimeout = undefined;
                    this._continueUpload();
                }, this.sleepTime);
            }
        } else this._oneShotUpload();
    }
    _resolveToken(callback) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.all([
            this._ref.storage._getAuthToken(),
            this._ref.storage._getAppCheckToken()
        ]).then(([authToken, appCheckToken])=>{
            switch(this._state){
                case "running" /* InternalTaskState.RUNNING */ :
                    callback(authToken, appCheckToken);
                    break;
                case "canceling" /* InternalTaskState.CANCELING */ :
                    this._transition("canceled" /* InternalTaskState.CANCELED */ );
                    break;
                case "pausing" /* InternalTaskState.PAUSING */ :
                    this._transition("paused" /* InternalTaskState.PAUSED */ );
                    break;
            }
        });
    }
    // TODO(andysoto): assert false
    _createResumable() {
        this._resolveToken((authToken, appCheckToken)=>{
            const requestInfo = createResumableUpload(this._ref.storage, this._ref._location, this._mappings, this._blob, this._metadata);
            const createRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = createRequest;
            createRequest.getPromise().then((url)=>{
                this._request = undefined;
                this._uploadUrl = url;
                this._needToFetchStatus = false;
                this.completeTransitions_();
            }, this._errorHandler);
        });
    }
    _fetchStatus() {
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        const url = this._uploadUrl;
        this._resolveToken((authToken, appCheckToken)=>{
            const requestInfo = getResumableUploadStatus(this._ref.storage, this._ref._location, url, this._blob);
            const statusRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = statusRequest;
            statusRequest.getPromise().then((status)=>{
                status;
                this._request = undefined;
                this._updateProgress(status.current);
                this._needToFetchStatus = false;
                if (status.finalized) this._needToFetchMetadata = true;
                this.completeTransitions_();
            }, this._errorHandler);
        });
    }
    _continueUpload() {
        const chunkSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
        const status = new ResumableUploadStatus(this._transferred, this._blob.size());
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        const url = this._uploadUrl;
        this._resolveToken((authToken, appCheckToken)=>{
            let requestInfo;
            try {
                requestInfo = continueResumableUpload(this._ref._location, this._ref.storage, url, this._blob, chunkSize, this._mappings, status, this._makeProgressCallback());
            } catch (e) {
                this._error = e;
                this._transition("error" /* InternalTaskState.ERROR */ );
                return;
            }
            const uploadRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken, /*retry=*/ false // Upload requests should not be retried as each retry should be preceded by another query request. Which is handled in this file.
            );
            this._request = uploadRequest;
            uploadRequest.getPromise().then((newStatus)=>{
                this._increaseMultiplier();
                this._request = undefined;
                this._updateProgress(newStatus.current);
                if (newStatus.finalized) {
                    this._metadata = newStatus.metadata;
                    this._transition("success" /* InternalTaskState.SUCCESS */ );
                } else this.completeTransitions_();
            }, this._errorHandler);
        });
    }
    _increaseMultiplier() {
        const currentSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
        // Max chunk size is 32M.
        if (currentSize * 2 < 33554432) this._chunkMultiplier *= 2;
    }
    _fetchMetadata() {
        this._resolveToken((authToken, appCheckToken)=>{
            const requestInfo = getMetadata$2(this._ref.storage, this._ref._location, this._mappings);
            const metadataRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = metadataRequest;
            metadataRequest.getPromise().then((metadata)=>{
                this._request = undefined;
                this._metadata = metadata;
                this._transition("success" /* InternalTaskState.SUCCESS */ );
            }, this._metadataErrorHandler);
        });
    }
    _oneShotUpload() {
        this._resolveToken((authToken, appCheckToken)=>{
            const requestInfo = multipartUpload(this._ref.storage, this._ref._location, this._mappings, this._blob, this._metadata);
            const multipartRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = multipartRequest;
            multipartRequest.getPromise().then((metadata)=>{
                this._request = undefined;
                this._metadata = metadata;
                this._updateProgress(this._blob.size());
                this._transition("success" /* InternalTaskState.SUCCESS */ );
            }, this._errorHandler);
        });
    }
    _updateProgress(transferred) {
        const old = this._transferred;
        this._transferred = transferred;
        // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).
        if (this._transferred !== old) this._notifyObservers();
    }
    _transition(state) {
        if (this._state === state) return;
        switch(state){
            case "canceling" /* InternalTaskState.CANCELING */ :
            case "pausing" /* InternalTaskState.PAUSING */ :
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING);
                this._state = state;
                if (this._request !== undefined) this._request.cancel();
                else if (this.pendingTimeout) {
                    clearTimeout(this.pendingTimeout);
                    this.pendingTimeout = undefined;
                    this.completeTransitions_();
                }
                break;
            case "running" /* InternalTaskState.RUNNING */ :
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.PAUSING);
                const wasPaused = this._state === "paused" /* InternalTaskState.PAUSED */ ;
                this._state = state;
                if (wasPaused) {
                    this._notifyObservers();
                    this._start();
                }
                break;
            case "paused" /* InternalTaskState.PAUSED */ :
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSING);
                this._state = state;
                this._notifyObservers();
                break;
            case "canceled" /* InternalTaskState.CANCELED */ :
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._error = canceled();
                this._state = state;
                this._notifyObservers();
                break;
            case "error" /* InternalTaskState.ERROR */ :
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._state = state;
                this._notifyObservers();
                break;
            case "success" /* InternalTaskState.SUCCESS */ :
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._state = state;
                this._notifyObservers();
                break;
        }
    }
    completeTransitions_() {
        switch(this._state){
            case "pausing" /* InternalTaskState.PAUSING */ :
                this._transition("paused" /* InternalTaskState.PAUSED */ );
                break;
            case "canceling" /* InternalTaskState.CANCELING */ :
                this._transition("canceled" /* InternalTaskState.CANCELED */ );
                break;
            case "running" /* InternalTaskState.RUNNING */ :
                this._start();
                break;
        }
    }
    /**
     * A snapshot of the current task state.
     */ get snapshot() {
        const externalState = taskStateFromInternalTaskState(this._state);
        return {
            bytesTransferred: this._transferred,
            totalBytes: this._blob.size(),
            state: externalState,
            metadata: this._metadata,
            task: this,
            ref: this._ref
        };
    }
    /**
     * Adds a callback for an event.
     * @param type - The type of event to listen for.
     * @param nextOrObserver -
     *     The `next` function, which gets called for each item in
     *     the event stream, or an observer object with some or all of these three
     *     properties (`next`, `error`, `complete`).
     * @param error - A function that gets called with a `StorageError`
     *     if the event stream ends due to an error.
     * @param completed - A function that gets called if the
     *     event stream ends normally.
     * @returns
     *     If only the event argument is passed, returns a function you can use to
     *     add callbacks (see the examples above). If more than just the event
     *     argument is passed, returns a function you can call to unregister the
     *     callbacks.
     */ on(type, nextOrObserver, error, completed) {
        // Note: `type` isn't being used. Its type is also incorrect. TaskEvent should not be a string.
        const observer = new Observer(nextOrObserver || undefined, error || undefined, completed || undefined);
        this._addObserver(observer);
        return ()=>{
            this._removeObserver(observer);
        };
    }
    /**
     * This object behaves like a Promise, and resolves with its snapshot data
     * when the upload completes.
     * @param onFulfilled - The fulfillment callback. Promise chaining works as normal.
     * @param onRejected - The rejection callback.
     */ then(onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this._promise.then(onFulfilled, onRejected);
    }
    /**
     * Equivalent to calling `then(null, onRejected)`.
     */ catch(onRejected) {
        return this.then(null, onRejected);
    }
    /**
     * Adds the given observer.
     */ _addObserver(observer) {
        this._observers.push(observer);
        this._notifyObserver(observer);
    }
    /**
     * Removes the given observer.
     */ _removeObserver(observer) {
        const i = this._observers.indexOf(observer);
        if (i !== -1) this._observers.splice(i, 1);
    }
    _notifyObservers() {
        this._finishPromise();
        const observers = this._observers.slice();
        observers.forEach((observer)=>{
            this._notifyObserver(observer);
        });
    }
    _finishPromise() {
        if (this._resolve !== undefined) {
            let triggered = true;
            switch(taskStateFromInternalTaskState(this._state)){
                case TaskState.SUCCESS:
                    async(this._resolve.bind(null, this.snapshot))();
                    break;
                case TaskState.CANCELED:
                case TaskState.ERROR:
                    const toCall = this._reject;
                    async(toCall.bind(null, this._error))();
                    break;
                default:
                    triggered = false;
                    break;
            }
            if (triggered) {
                this._resolve = undefined;
                this._reject = undefined;
            }
        }
    }
    _notifyObserver(observer) {
        const externalState = taskStateFromInternalTaskState(this._state);
        switch(externalState){
            case TaskState.RUNNING:
            case TaskState.PAUSED:
                if (observer.next) async(observer.next.bind(observer, this.snapshot))();
                break;
            case TaskState.SUCCESS:
                if (observer.complete) async(observer.complete.bind(observer))();
                break;
            case TaskState.CANCELED:
            case TaskState.ERROR:
                if (observer.error) async(observer.error.bind(observer, this._error))();
                break;
            default:
                // TODO(andysoto): assert(false);
                if (observer.error) async(observer.error.bind(observer, this._error))();
        }
    }
    /**
     * Resumes a paused task. Has no effect on a currently running or failed task.
     * @returns True if the operation took effect, false if ignored.
     */ resume() {
        const valid = this._state === "paused" /* InternalTaskState.PAUSED */  || this._state === "pausing" /* InternalTaskState.PAUSING */ ;
        if (valid) this._transition("running" /* InternalTaskState.RUNNING */ );
        return valid;
    }
    /**
     * Pauses a currently running task. Has no effect on a paused or failed task.
     * @returns True if the operation took effect, false if ignored.
     */ pause() {
        const valid = this._state === "running" /* InternalTaskState.RUNNING */ ;
        if (valid) this._transition("pausing" /* InternalTaskState.PAUSING */ );
        return valid;
    }
    /**
     * Cancels a currently running or paused task. Has no effect on a complete or
     * failed task.
     * @returns True if the operation took effect, false if ignored.
     */ cancel() {
        const valid = this._state === "running" /* InternalTaskState.RUNNING */  || this._state === "pausing" /* InternalTaskState.PAUSING */ ;
        if (valid) this._transition("canceling" /* InternalTaskState.CANCELING */ );
        return valid;
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @internal
 * @param _location - An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */ class Reference {
    constructor(_service, location){
        this._service = _service;
        if (location instanceof Location) this._location = location;
        else this._location = Location.makeFromUrl(location, _service.host);
    }
    /**
     * Returns the URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */ toString() {
        return "gs://" + this._location.bucket + "/" + this._location.path;
    }
    _newRef(service, location) {
        return new Reference(service, location);
    }
    /**
     * A reference to the root of this object's bucket.
     */ get root() {
        const location = new Location(this._location.bucket, "");
        return this._newRef(this._service, location);
    }
    /**
     * The name of the bucket containing this reference's object.
     */ get bucket() {
        return this._location.bucket;
    }
    /**
     * The full path of this object.
     */ get fullPath() {
        return this._location.path;
    }
    /**
     * The short name of this object, which is the last component of the full path.
     * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
     */ get name() {
        return lastComponent(this._location.path);
    }
    /**
     * The `StorageService` instance this `StorageReference` is associated with.
     */ get storage() {
        return this._service;
    }
    /**
     * A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
     * this reference is the root.
     */ get parent() {
        const newPath = parent(this._location.path);
        if (newPath === null) return null;
        const location = new Location(this._location.bucket, newPath);
        return new Reference(this._service, location);
    }
    /**
     * Utility function to throw an error in methods that do not accept a root reference.
     */ _throwIfRoot(name) {
        if (this._location.path === "") throw invalidRootOperation(name);
    }
}
/**
 * Download the bytes at the object's location.
 * @returns A Promise containing the downloaded bytes.
 */ function getBytesInternal(ref, maxDownloadSizeBytes) {
    ref._throwIfRoot("getBytes");
    const requestInfo = getBytes$1(ref.storage, ref._location, maxDownloadSizeBytes);
    return ref.storage.makeRequestWithTokens(requestInfo, newBytesConnection).then((bytes)=>maxDownloadSizeBytes !== undefined ? bytes.slice(0, maxDownloadSizeBytes) : bytes);
}
/**
 * Download the bytes at the object's location.
 * @returns A Promise containing the downloaded blob.
 */ function getBlobInternal(ref, maxDownloadSizeBytes) {
    ref._throwIfRoot("getBlob");
    const requestInfo = getBytes$1(ref.storage, ref._location, maxDownloadSizeBytes);
    return ref.storage.makeRequestWithTokens(requestInfo, newBlobConnection).then((blob)=>maxDownloadSizeBytes !== undefined ? blob.slice(0, maxDownloadSizeBytes) : blob);
}
/**
 * Uploads data to this object's location.
 * The upload is not resumable.
 *
 * @param ref - StorageReference where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the newly uploaded data.
 * @returns A Promise containing an UploadResult
 */ function uploadBytes$1(ref, data, metadata) {
    ref._throwIfRoot("uploadBytes");
    const requestInfo = multipartUpload(ref.storage, ref._location, getMappings(), new FbsBlob(data, true), metadata);
    return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection).then((finalMetadata)=>{
        return {
            metadata: finalMetadata,
            ref
        };
    });
}
/**
 * Uploads data to this object's location.
 * The upload can be paused and resumed, and exposes progress updates.
 * @public
 * @param ref - StorageReference where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the newly uploaded data.
 * @returns An UploadTask
 */ function uploadBytesResumable$1(ref, data, metadata) {
    ref._throwIfRoot("uploadBytesResumable");
    return new UploadTask(ref, new FbsBlob(data), metadata);
}
/**
 * Uploads a string to this object's location.
 * The upload is not resumable.
 * @public
 * @param ref - StorageReference where string should be uploaded.
 * @param value - The string to upload.
 * @param format - The format of the string to upload.
 * @param metadata - Metadata for the newly uploaded string.
 * @returns A Promise containing an UploadResult
 */ function uploadString$1(ref, value, format = StringFormat.RAW, metadata) {
    ref._throwIfRoot("uploadString");
    const data = dataFromString(format, value);
    const metadataClone = Object.assign({}, metadata);
    if (metadataClone["contentType"] == null && data.contentType != null) metadataClone["contentType"] = data.contentType;
    return uploadBytes$1(ref, data.data, metadataClone);
}
/**
 * List all items (files) and prefixes (folders) under this storage reference.
 *
 * This is a helper method for calling list() repeatedly until there are
 * no more results. The default pagination size is 1000.
 *
 * Note: The results may not be consistent if objects are changed while this
 * operation is running.
 *
 * Warning: listAll may potentially consume too many resources if there are
 * too many results.
 * @public
 * @param ref - StorageReference to get list from.
 *
 * @returns A Promise that resolves with all the items and prefixes under
 *      the current storage reference. `prefixes` contains references to
 *      sub-directories and `items` contains references to objects in this
 *      folder. `nextPageToken` is never returned.
 */ function listAll$1(ref) {
    const accumulator = {
        prefixes: [],
        items: []
    };
    return listAllHelper(ref, accumulator).then(()=>accumulator);
}
/**
 * Separated from listAll because async functions can't use "arguments".
 * @param ref
 * @param accumulator
 * @param pageToken
 */ async function listAllHelper(ref, accumulator, pageToken) {
    const opt = {
        // maxResults is 1000 by default.
        pageToken
    };
    const nextPage = await list$1(ref, opt);
    accumulator.prefixes.push(...nextPage.prefixes);
    accumulator.items.push(...nextPage.items);
    if (nextPage.nextPageToken != null) await listAllHelper(ref, accumulator, nextPage.nextPageToken);
}
/**
 * List items (files) and prefixes (folders) under this storage reference.
 *
 * List API is only available for Firebase Rules Version 2.
 *
 * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
 * delimited folder structure.
 * Refer to GCS's List API if you want to learn more.
 *
 * To adhere to Firebase Rules's Semantics, Firebase Storage does not
 * support objects whose paths end with "/" or contain two consecutive
 * "/"s. Firebase Storage List API will filter these unsupported objects.
 * list() may fail if there are too many unsupported objects in the bucket.
 * @public
 *
 * @param ref - StorageReference to get list from.
 * @param options - See ListOptions for details.
 * @returns A Promise that resolves with the items and prefixes.
 *      `prefixes` contains references to sub-folders and `items`
 *      contains references to objects in this folder. `nextPageToken`
 *      can be used to get the rest of the results.
 */ function list$1(ref, options) {
    if (options != null) {
        if (typeof options.maxResults === "number") validateNumber("options.maxResults", /* minValue= */ 1, /* maxValue= */ 1000, options.maxResults);
    }
    const op = options || {};
    const requestInfo = list$2(ref.storage, ref._location, /*delimiter= */ "/", op.pageToken, op.maxResults);
    return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * A `Promise` that resolves with the metadata for this object. If this
 * object doesn't exist or metadata cannot be retreived, the promise is
 * rejected.
 * @public
 * @param ref - StorageReference to get metadata from.
 */ function getMetadata$1(ref) {
    ref._throwIfRoot("getMetadata");
    const requestInfo = getMetadata$2(ref.storage, ref._location, getMappings());
    return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * Updates the metadata for this object.
 * @public
 * @param ref - StorageReference to update metadata for.
 * @param metadata - The new metadata for the object.
 *     Only values that have been explicitly set will be changed. Explicitly
 *     setting a value to null will remove the metadata.
 * @returns A `Promise` that resolves
 *     with the new metadata for this object.
 *     See `firebaseStorage.Reference.prototype.getMetadata`
 */ function updateMetadata$1(ref, metadata) {
    ref._throwIfRoot("updateMetadata");
    const requestInfo = updateMetadata$2(ref.storage, ref._location, metadata, getMappings());
    return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * Returns the download URL for the given Reference.
 * @public
 * @returns A `Promise` that resolves with the download
 *     URL for this object.
 */ function getDownloadURL$1(ref) {
    ref._throwIfRoot("getDownloadURL");
    const requestInfo = getDownloadUrl(ref.storage, ref._location, getMappings());
    return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection).then((url)=>{
        if (url === null) throw noDownloadURL();
        return url;
    });
}
/**
 * Deletes the object at this location.
 * @public
 * @param ref - StorageReference for object to delete.
 * @returns A `Promise` that resolves if the deletion succeeds.
 */ function deleteObject$1(ref) {
    ref._throwIfRoot("deleteObject");
    const requestInfo = deleteObject$2(ref.storage, ref._location);
    return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * Returns reference for object obtained by appending `childPath` to `ref`.
 *
 * @param ref - StorageReference to get child of.
 * @param childPath - Child path from provided ref.
 * @returns A reference to the object obtained by
 * appending childPath, removing any duplicate, beginning, or trailing
 * slashes.
 *
 */ function _getChild$1(ref, childPath) {
    const newPath = child(ref._location.path, childPath);
    const location = new Location(ref._location.bucket, newPath);
    return new Reference(ref.storage, location);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function isUrl(path) {
    return /^[A-Za-z]+:\/\//.test(path);
}
/**
 * Returns a firebaseStorage.Reference for the given url.
 */ function refFromURL(service, url) {
    return new Reference(service, url);
}
/**
 * Returns a firebaseStorage.Reference for the given path in the default
 * bucket.
 */ function refFromPath(ref, path) {
    if (ref instanceof FirebaseStorageImpl) {
        const service = ref;
        if (service._bucket == null) throw noDefaultBucket();
        const reference = new Reference(service, service._bucket);
        if (path != null) return refFromPath(reference, path);
        else return reference;
    } else {
        // ref is a Reference
        if (path !== undefined) return _getChild$1(ref, path);
        else return ref;
    }
}
function ref$1(serviceOrRef, pathOrUrl) {
    if (pathOrUrl && isUrl(pathOrUrl)) {
        if (serviceOrRef instanceof FirebaseStorageImpl) return refFromURL(serviceOrRef, pathOrUrl);
        else throw invalidArgument("To use ref(service, url), the first argument must be a Storage instance.");
    } else return refFromPath(serviceOrRef, pathOrUrl);
}
function extractBucket(host, config) {
    const bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];
    if (bucketString == null) return null;
    return Location.makeFromBucketSpec(bucketString, host);
}
function connectStorageEmulator$1(storage, host, port, options = {}) {
    storage.host = `${host}:${port}`;
    storage._protocol = "http";
    const { mockUserToken } = options;
    if (mockUserToken) storage._overrideAuthToken = typeof mockUserToken === "string" ? mockUserToken : (0, _util.createMockUserToken)(mockUserToken, storage.app.options.projectId);
}
/**
 * A service that provides Firebase Storage Reference instances.
 * @param opt_url - gs:// url to a custom Storage Bucket
 *
 * @internal
 */ class FirebaseStorageImpl {
    constructor(/**
     * FirebaseApp associated with this StorageService instance.
     */ app, _authProvider, /**
     * @internal
     */ _appCheckProvider, /**
     * @internal
     */ _url, _firebaseVersion){
        this.app = app;
        this._authProvider = _authProvider;
        this._appCheckProvider = _appCheckProvider;
        this._url = _url;
        this._firebaseVersion = _firebaseVersion;
        this._bucket = null;
        /**
         * This string can be in the formats:
         * - host
         * - host:port
         */ this._host = DEFAULT_HOST;
        this._protocol = "https";
        this._appId = null;
        this._deleted = false;
        this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
        this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
        this._requests = new Set();
        if (_url != null) this._bucket = Location.makeFromBucketSpec(_url, this._host);
        else this._bucket = extractBucket(this._host, this.app.options);
    }
    /**
     * The host string for this service, in the form of `host` or
     * `host:port`.
     */ get host() {
        return this._host;
    }
    set host(host) {
        this._host = host;
        if (this._url != null) this._bucket = Location.makeFromBucketSpec(this._url, host);
        else this._bucket = extractBucket(host, this.app.options);
    }
    /**
     * The maximum time to retry uploads in milliseconds.
     */ get maxUploadRetryTime() {
        return this._maxUploadRetryTime;
    }
    set maxUploadRetryTime(time) {
        validateNumber("time", /* minValue=*/ 0, /* maxValue= */ Number.POSITIVE_INFINITY, time);
        this._maxUploadRetryTime = time;
    }
    /**
     * The maximum time to retry operations other than uploads or downloads in
     * milliseconds.
     */ get maxOperationRetryTime() {
        return this._maxOperationRetryTime;
    }
    set maxOperationRetryTime(time) {
        validateNumber("time", /* minValue=*/ 0, /* maxValue= */ Number.POSITIVE_INFINITY, time);
        this._maxOperationRetryTime = time;
    }
    async _getAuthToken() {
        if (this._overrideAuthToken) return this._overrideAuthToken;
        const auth = this._authProvider.getImmediate({
            optional: true
        });
        if (auth) {
            const tokenData = await auth.getToken();
            if (tokenData !== null) return tokenData.accessToken;
        }
        return null;
    }
    async _getAppCheckToken() {
        const appCheck = this._appCheckProvider.getImmediate({
            optional: true
        });
        if (appCheck) {
            const result = await appCheck.getToken();
            // TODO: What do we want to do if there is an error getting the token?
            // Context: appCheck.getToken() will never throw even if an error happened. In the error case, a dummy token will be
            // returned along with an error field describing the error. In general, we shouldn't care about the error condition and just use
            // the token (actual or dummy) to send requests.
            return result.token;
        }
        return null;
    }
    /**
     * Stop running requests and prevent more from being created.
     */ _delete() {
        if (!this._deleted) {
            this._deleted = true;
            this._requests.forEach((request)=>request.cancel());
            this._requests.clear();
        }
        return Promise.resolve();
    }
    /**
     * Returns a new firebaseStorage.Reference object referencing this StorageService
     * at the given Location.
     */ _makeStorageReference(loc) {
        return new Reference(this, loc);
    }
    /**
     * @param requestInfo - HTTP RequestInfo object
     * @param authToken - Firebase auth token
     */ _makeRequest(requestInfo, requestFactory, authToken, appCheckToken, retry = true) {
        if (!this._deleted) {
            const request = makeRequest(requestInfo, this._appId, authToken, appCheckToken, requestFactory, this._firebaseVersion, retry);
            this._requests.add(request);
            // Request removes itself from set when complete.
            request.getPromise().then(()=>this._requests.delete(request), ()=>this._requests.delete(request));
            return request;
        } else return new FailRequest(appDeleted());
    }
    async makeRequestWithTokens(requestInfo, requestFactory) {
        const [authToken, appCheckToken] = await Promise.all([
            this._getAuthToken(),
            this._getAppCheckToken()
        ]);
        return this._makeRequest(requestInfo, requestFactory, authToken, appCheckToken).getPromise();
    }
}
const name = "@firebase/storage";
const version = "0.12.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Type constant for Firebase Storage.
 */ const STORAGE_TYPE = "storage";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Downloads the data at the object's location. Returns an error if the object
 * is not found.
 *
 * To use this functionality, you have to whitelist your app's origin in your
 * Cloud Storage bucket. See also
 * https://cloud.google.com/storage/docs/configuring-cors
 *
 * @public
 * @param ref - StorageReference where data should be downloaded.
 * @param maxDownloadSizeBytes - If set, the maximum allowed size in bytes to
 * retrieve.
 * @returns A Promise containing the object's bytes
 */ function getBytes(ref, maxDownloadSizeBytes) {
    ref = (0, _util.getModularInstance)(ref);
    return getBytesInternal(ref, maxDownloadSizeBytes);
}
/**
 * Uploads data to this object's location.
 * The upload is not resumable.
 * @public
 * @param ref - {@link StorageReference} where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the data to upload.
 * @returns A Promise containing an UploadResult
 */ function uploadBytes(ref, data, metadata) {
    ref = (0, _util.getModularInstance)(ref);
    return uploadBytes$1(ref, data, metadata);
}
/**
 * Uploads a string to this object's location.
 * The upload is not resumable.
 * @public
 * @param ref - {@link StorageReference} where string should be uploaded.
 * @param value - The string to upload.
 * @param format - The format of the string to upload.
 * @param metadata - Metadata for the string to upload.
 * @returns A Promise containing an UploadResult
 */ function uploadString(ref, value, format, metadata) {
    ref = (0, _util.getModularInstance)(ref);
    return uploadString$1(ref, value, format, metadata);
}
/**
 * Uploads data to this object's location.
 * The upload can be paused and resumed, and exposes progress updates.
 * @public
 * @param ref - {@link StorageReference} where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the data to upload.
 * @returns An UploadTask
 */ function uploadBytesResumable(ref, data, metadata) {
    ref = (0, _util.getModularInstance)(ref);
    return uploadBytesResumable$1(ref, data, metadata);
}
/**
 * A `Promise` that resolves with the metadata for this object. If this
 * object doesn't exist or metadata cannot be retreived, the promise is
 * rejected.
 * @public
 * @param ref - {@link StorageReference} to get metadata from.
 */ function getMetadata(ref) {
    ref = (0, _util.getModularInstance)(ref);
    return getMetadata$1(ref);
}
/**
 * Updates the metadata for this object.
 * @public
 * @param ref - {@link StorageReference} to update metadata for.
 * @param metadata - The new metadata for the object.
 *     Only values that have been explicitly set will be changed. Explicitly
 *     setting a value to null will remove the metadata.
 * @returns A `Promise` that resolves with the new metadata for this object.
 */ function updateMetadata(ref, metadata) {
    ref = (0, _util.getModularInstance)(ref);
    return updateMetadata$1(ref, metadata);
}
/**
 * List items (files) and prefixes (folders) under this storage reference.
 *
 * List API is only available for Firebase Rules Version 2.
 *
 * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
 * delimited folder structure.
 * Refer to GCS's List API if you want to learn more.
 *
 * To adhere to Firebase Rules's Semantics, Firebase Storage does not
 * support objects whose paths end with "/" or contain two consecutive
 * "/"s. Firebase Storage List API will filter these unsupported objects.
 * list() may fail if there are too many unsupported objects in the bucket.
 * @public
 *
 * @param ref - {@link StorageReference} to get list from.
 * @param options - See {@link ListOptions} for details.
 * @returns A `Promise` that resolves with the items and prefixes.
 *      `prefixes` contains references to sub-folders and `items`
 *      contains references to objects in this folder. `nextPageToken`
 *      can be used to get the rest of the results.
 */ function list(ref, options) {
    ref = (0, _util.getModularInstance)(ref);
    return list$1(ref, options);
}
/**
 * List all items (files) and prefixes (folders) under this storage reference.
 *
 * This is a helper method for calling list() repeatedly until there are
 * no more results. The default pagination size is 1000.
 *
 * Note: The results may not be consistent if objects are changed while this
 * operation is running.
 *
 * Warning: `listAll` may potentially consume too many resources if there are
 * too many results.
 * @public
 * @param ref - {@link StorageReference} to get list from.
 *
 * @returns A `Promise` that resolves with all the items and prefixes under
 *      the current storage reference. `prefixes` contains references to
 *      sub-directories and `items` contains references to objects in this
 *      folder. `nextPageToken` is never returned.
 */ function listAll(ref) {
    ref = (0, _util.getModularInstance)(ref);
    return listAll$1(ref);
}
/**
 * Returns the download URL for the given {@link StorageReference}.
 * @public
 * @param ref - {@link StorageReference} to get the download URL for.
 * @returns A `Promise` that resolves with the download
 *     URL for this object.
 */ function getDownloadURL(ref) {
    ref = (0, _util.getModularInstance)(ref);
    return getDownloadURL$1(ref);
}
/**
 * Deletes the object at this location.
 * @public
 * @param ref - {@link StorageReference} for object to delete.
 * @returns A `Promise` that resolves if the deletion succeeds.
 */ function deleteObject(ref) {
    ref = (0, _util.getModularInstance)(ref);
    return deleteObject$1(ref);
}
function ref(serviceOrRef, pathOrUrl) {
    serviceOrRef = (0, _util.getModularInstance)(serviceOrRef);
    return ref$1(serviceOrRef, pathOrUrl);
}
/**
 * @internal
 */ function _getChild(ref, childPath) {
    return _getChild$1(ref, childPath);
}
/**
 * Gets a {@link FirebaseStorage} instance for the given Firebase app.
 * @public
 * @param app - Firebase app to get {@link FirebaseStorage} instance for.
 * @param bucketUrl - The gs:// url to your Firebase Storage Bucket.
 * If not passed, uses the app's default Storage Bucket.
 * @returns A {@link FirebaseStorage} instance.
 */ function getStorage(app = (0, _app.getApp)(), bucketUrl) {
    app = (0, _util.getModularInstance)(app);
    const storageProvider = (0, _app._getProvider)(app, STORAGE_TYPE);
    const storageInstance = storageProvider.getImmediate({
        identifier: bucketUrl
    });
    const emulator = (0, _util.getDefaultEmulatorHostnameAndPort)("storage");
    if (emulator) connectStorageEmulator(storageInstance, ...emulator);
    return storageInstance;
}
/**
 * Modify this {@link FirebaseStorage} instance to communicate with the Cloud Storage emulator.
 *
 * @param storage - The {@link FirebaseStorage} instance
 * @param host - The emulator host (ex: localhost)
 * @param port - The emulator port (ex: 5001)
 * @param options - Emulator options. `options.mockUserToken` is the mock auth
 * token to use for unit testing Security Rules.
 * @public
 */ function connectStorageEmulator(storage, host, port, options = {}) {
    connectStorageEmulator$1(storage, host, port, options);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Downloads the data at the object's location. Returns an error if the object
 * is not found.
 *
 * To use this functionality, you have to whitelist your app's origin in your
 * Cloud Storage bucket. See also
 * https://cloud.google.com/storage/docs/configuring-cors
 *
 * This API is not available in Node.
 *
 * @public
 * @param ref - StorageReference where data should be downloaded.
 * @param maxDownloadSizeBytes - If set, the maximum allowed size in bytes to
 * retrieve.
 * @returns A Promise that resolves with a Blob containing the object's bytes
 */ function getBlob(ref, maxDownloadSizeBytes) {
    ref = (0, _util.getModularInstance)(ref);
    return getBlobInternal(ref, maxDownloadSizeBytes);
}
/**
 * Downloads the data at the object's location. Raises an error event if the
 * object is not found.
 *
 * This API is only available in Node.
 *
 * @public
 * @param ref - StorageReference where data should be downloaded.
 * @param maxDownloadSizeBytes - If set, the maximum allowed size in bytes to
 * retrieve.
 * @returns A stream with the object's data as bytes
 */ function getStream(ref, maxDownloadSizeBytes) {
    throw new Error("getStream() is only supported by NodeJS builds");
}
/**
 * Cloud Storage for Firebase
 *
 * @packageDocumentation
 */ function factory(container, { instanceIdentifier: url }) {
    const app = container.getProvider("app").getImmediate();
    const authProvider = container.getProvider("auth-internal");
    const appCheckProvider = container.getProvider("app-check-internal");
    return new FirebaseStorageImpl(app, authProvider, appCheckProvider, url, (0, _app.SDK_VERSION));
}
function registerStorage() {
    (0, _app._registerComponent)(new (0, _component.Component)(STORAGE_TYPE, factory, "PUBLIC" /* ComponentType.PUBLIC */ ).setMultipleInstances(true));
    //RUNTIME_ENV will be replaced during the compilation to "node" for nodejs and an empty string for browser
    (0, _app.registerVersion)(name, version, "");
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    (0, _app.registerVersion)(name, version, "esm2017");
}
registerStorage();

},{"@firebase/app":"3AcPV","@firebase/util":"ePiK6","@firebase/component":"bi1VB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lbkOy"], null, "parcelRequired04d")

//# sourceMappingURL=admin.b3ac6623.js.map
