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
})({"b5glE":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "95800f756064589e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"9j1Dd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _notiflixNotifyAio = require("notiflix/build/notiflix-notify-aio");
var _newsService = require("./news-service");
var _newsServiceDefault = parcelHelpers.interopDefault(_newsService);
var _loadModeBtn = require("./load-mode-btn");
var _loadModeBtnDefault = parcelHelpers.interopDefault(_loadModeBtn);
var _articlesHbs = require("../templates/articles.hbs");
var _articlesHbsDefault = parcelHelpers.interopDefault(_articlesHbs);
/**сделали екзепляр класа  LoadMoreBtn для анимирования кнопки Показать больше 
 и отображения процесса загрузки данных*/ const loadMoreBtn = new (0, _loadModeBtnDefault.default)({
    /**в конструкторе класа деструктуризированны свойства объекта, поэтому при создании екземпляра можем сразу перезаписать заначния */ /**добавляем selector по которому будем искать кнопку */ selector: '[data-action="load-more"]',
    /**сразу срываем кнопку */ hidden: true
});
// сделали екземпляр класса NewsApiService
// что бы получить доступ к свойствам и методам
const newsApiService = new (0, _newsServiceDefault.default)();
console.log("newsApiService:", newsApiService);
const searchForm = document.querySelector(".js-search-form");
const searchBtn = document.querySelector(".mb-2");
// const getMoreBtn = document.querySelector('[data-action="load-more"]');
const articlesContainer = document.querySelector(".js-articles-container");
searchForm.addEventListener("submit", onSearchForm);
/**повешали слушатель на кнопку через екземпляр класа */ loadMoreBtn.refs.button.addEventListener("click", onMoreBtnClick);
function onSearchForm(e) {
    e.preventDefault();
    // перезаписали значаение this.searchQuery на то что будет введено в инпуте
    newsApiService.query = e.currentTarget.elements.query.value;
    if (newsApiService.query === "") (0, _notiflixNotifyAio.Notify).warning("Вы ввели пустой запрос, проверьте правильность ввода");
    /**при сабмите формы показываем кнопку, 
     но делаем ее недоступной для нажатия и анимируем процес загрузки */ loadMoreBtn.show();
    loadMoreBtn.disable();
    /* когда сабмитим форму нужно сбросить занчение page снова до 1 
  что бы подгрузить новую коллекцию начиная с первой страницы */ newsApiService.resetPage();
    //   вызвали метод класа который запускает fetch
    /**Сюда вернули промис при успешном выполнении которого нам возвращается  data.artucles
   * получаем занчение дописывая then что бы получить масив artucles
   */ newsApiService.fetchArticles().then((article)=>{
        /** очистки страницы при сабмите формы для того что
        бы когда пользователь ввел новый запрос все предидущие статьи ушли 
        и перерерисовались новые*/ clearArticlesContainer();
        /**Перерисовка новый статей (плавная), 
     то есть пока статьи по новому запросу не загрузились старые остаються */ appendArticlesMarkup(article);
        /**когда новые данные уже загрузились снова делаем кнопку активной для нажатия, убираем спинер прокрутки */ loadMoreBtn.enable();
    });
}
function onMoreBtnClick() {
    /**когда мы уже нажали на кнопку делаем ее неактивной,
   * для предупреждения совершения пользователем слишком
   * частых нажатий и анимирования процесса загрузки */ loadMoreBtn.disable();
    // вызвали метод класа который запускает fetch
    newsApiService.fetchArticles().then((article)=>{
        appendArticlesMarkup(article);
        loadMoreBtn.enable();
    });
}
function appendArticlesMarkup(articles) {
    articlesContainer.insertAdjacentHTML("beforeend", (0, _articlesHbsDefault.default)(articles));
}
// функция для очистки страницы при сабмите формы
function clearArticlesContainer() {
    articlesContainer.innerHTML = "";
}

},{"notiflix/build/notiflix-notify-aio":"eXQLZ","./news-service":"1qRqG","../templates/articles.hbs":"ac3Sz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./load-mode-btn":"4MfNm"}],"1qRqG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const BASE_URL = "https://newsapi.org/v2/";
const API_KEY = "bb371d4eb42540c8a242cc5d4c5d1d9e";
class NewsApiService {
    constructor(){
        // сюда будем перезаписывать данные веденные в инпут
        this.searchQuery = "";
        /**  для того что бы при нажатии на кнопку подгружать следующую коллекцию 
    статей нужно при каждом успешном результате fetch уведичивать занчение
    page на 1 для того что бы при нажатии на кнопку Показать больше 
    нам приходила новая коллекция*/ this.page = 1;
    }
    // Выносим запуск fetch в отдельный метод
    fetchArticles() {
        console.log(this);
        /* для того что бы порисовать по внешнем коде из fetchArticles
     надо вернуть промис который в свою очередь вернет статьи */ return fetch(`${BASE_URL}everything?q=${this.searchQuery}&page=${this.page}&pageSize=5&language=en&apiKey=${API_KEY}`).then((response)=>response.json()).then((data)=>{
            /** если результат https запроса успешный 
        увеличиваем номер странички на 1 для получения 
        при следующем запросе новой коллекции*/ this.incrementPage();
            /** Из успешного промиса возвращаем  data.artucles
         * для отрисовки статей */ return data.articles;
        }).catch((error)=>console.log(error));
    }
    // получаем значение searchQuery (того что ввели в инпут)
    get query() {
        return this.searchQuery;
    }
    // устанавливаем новое значение для this.searchQuery
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    /**  можно создать отдельный метод для увеличения номера страницы, 
    тогда можно будет использовать не только в класе */ incrementPage() {
        this.page += 1;
    }
    /**сбрасываем номер страницы до 1, что бы при новом запросе 
 выводило только коллекцию по новому запросу начиная с 1 станицы */ resetPage() {
        this.page = 1;
    }
}
exports.default = NewsApiService;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ac3Sz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '  <li>\n    <a href="' + alias4((helper = (helper = lookupProperty(helpers, "url") || (depth0 != null ? lookupProperty(depth0, "url") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "url",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 13
                },
                "end": {
                    "line": 3,
                    "column": 20
                }
            }
        }) : helper)) + '" target="_blank" rel="noopener noreferrer">\n      <article>\n        <img src="' + alias4((helper = (helper = lookupProperty(helpers, "urlToImage") || (depth0 != null ? lookupProperty(depth0, "urlToImage") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "urlToImage",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 18
                },
                "end": {
                    "line": 5,
                    "column": 32
                }
            }
        }) : helper)) + '" alt="" width="480">\n        <h2>' + alias4((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "title",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 12
                },
                "end": {
                    "line": 6,
                    "column": 21
                }
            }
        }) : helper)) + "</h2>\n        <p>Posted by: " + alias4((helper = (helper = lookupProperty(helpers, "author") || (depth0 != null ? lookupProperty(depth0, "author") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "author",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 22
                },
                "end": {
                    "line": 7,
                    "column": 32
                }
            }
        }) : helper)) + "</p>\n        <p>" + alias4((helper = (helper = lookupProperty(helpers, "description") || (depth0 != null ? lookupProperty(depth0, "description") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "description",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 11
                },
                "end": {
                    "line": 8,
                    "column": 26
                }
            }
        }) : helper)) + "</p>\n      </article>\n    </a>\n  </li>\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0, {
            "name": "each",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 12,
                    "column": 9
                }
            }
        })) != null ? stack1 : "";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4MfNm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class LoadMoreBtn {
    /**При создании екзепляра класа мы будем создавать свойства  selector и hidden
   * когда создаем конструктор класа можем эти свойства сразу деструктуризировать
   * и также записать в свойство hidden значение по умолчанию false
   */ constructor({ selector , hidden =false  }){
        /** Сдесь мы записываем в значение  this.refs, то есть в объект с ссылками
     *  на составные елементы кнопки, вызов метода getRefs которому аргументом
     * передаем селектор кнопки по котрому мы будем получать на нее ссылку
     */ this.refs = this.getRefs(selector);
        /**если значение  hidden равно true примени метод hide() для скрытия кнопки*/ hidden && this.hide();
    }
    /**Метод для получения ссылки на кнопку и ее елементы */ getRefs(selector) {
        /**Создаем пустой объект, в который потом записываем свойства */ const refs = {};
        /** тут как раз и будет записан селектор по которму мы будем находить кнопку  */ refs.button = document.querySelector(selector);
        /**Тут мы полчаем ссылку на  span с класом label который вложен в кнопку*/ refs.label = refs.button.querySelector(".label");
        /**Получаем ссылку на  span с класом spinner который вложен в кнопку*/ refs.spinner = refs.button.querySelector(".spinner");
        /**Возвращаем из метода объект с ссылками */ return refs;
    }
    /**Метод который переводит кнопку в активное состояние */ enable() {
        /**убираем атрибут кнопки  disabled */ this.refs.button.disabled = false;
        /**меняем  textContent*/ this.refs.label.textContent = "Показать ещё";
        /**Скрываем спинер заргрузки */ this.refs.spinner.classList.add("is-hidden");
    }
    /**Метод который делает кнопку неактивной для нажатия и визуализирует 
     загрузку данных */ disable() {
        /**устанавливаем на кнопку атрибут  disabled*/ this.refs.button.disabled = true;
        /**меням текст кнопки */ this.refs.label.textContent = "Загружаем...";
        /**делаем спинер заргрузки активным */ this.refs.spinner.classList.remove("is-hidden");
    }
    /**метод котрый делает кнопку видимой */ show() {
        this.refs.button.classList.remove("is-hidden");
    }
    /**метод который скрывает кнопку */ hide() {
        this.refs.button.classList.add("is-hidden");
    }
}
exports.default = LoadMoreBtn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["b5glE","9j1Dd"], "9j1Dd", "parcelRequire10fc")

//# sourceMappingURL=pagination.6064589e.js.map
