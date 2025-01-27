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
})({"fKG4q":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "df8d0f5597a0430c";
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

},{}],"2ASYY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onmonitor", ()=>onmonitor);
parcelHelpers.export(exports, "dev_list", ()=>dev_list);
parcelHelpers.export(exports, "autoconnect_enabled", ()=>autoconnect_enabled);
// switch (localStorage["autoconnect_enabled"]){
//   case "true":
//     autoconnect_enabled = true;
//     break;
//   case "false":
//     autoconnect_enabled = false;
//     break;
//   default:
//     set_autoconnect(true);
//     break;
// }
parcelHelpers.export(exports, "is_device", ()=>is_device);
parcelHelpers.export(exports, "is_connected", ()=>is_connected);
parcelHelpers.export(exports, "pair_device", ()=>pair_device);
parcelHelpers.export(exports, "list_existing", ()=>list_existing);
parcelHelpers.export(exports, "select_existing", ()=>select_existing);
parcelHelpers.export(exports, "disconnect", ()=>disconnect);
parcelHelpers.export(exports, "autoconnect", ()=>autoconnect);
parcelHelpers.export(exports, "set_autoconnect", ()=>set_autoconnect);
parcelHelpers.export(exports, "get_autoconnect", ()=>get_autoconnect);
parcelHelpers.export(exports, "monitor_usb", ()=>monitor_usb);
parcelHelpers.export(exports, "draw_device_list", ()=>draw_device_list);
parcelHelpers.export(exports, "connect_device", ()=>connect_device);
parcelHelpers.export(exports, "exploit_gabb", ()=>exploit_gabb);
parcelHelpers.export(exports, "install_app", ()=>install_app);
parcelHelpers.export(exports, "send_command_and_get_response", ()=>send_command_and_get_response);
parcelHelpers.export(exports, "send_to_device", ()=>send_to_device);
parcelHelpers.export(exports, "godo", ()=>godo);
parcelHelpers.export(exports, "log", ()=>log);
var _adbDaemonWebusb = require("@yume-chan/adb-daemon-webusb");
var _adbCredentialWeb = require("@yume-chan/adb-credential-web");
var _adbCredentialWebDefault = parcelHelpers.interopDefault(_adbCredentialWeb);
var _adb = require("@yume-chan/adb");
const konsole = document.querySelector("#konsole");
const CredentialStore = new (0, _adbCredentialWebDefault.default)();
console.log("hi friend!");
log(navigator.usb);
const Manager = (0, _adbDaemonWebusb.AdbDaemonWebUsbDeviceManager).BROWSER;
if (!Manager) {
    alert("WebUSB is not supported in this browser!\nWe need WebUSB in order to function.\nPlease try again with Google Chrome.");
    return;
} else log("Yay, you have WebUSB!");
let device = null;
let devices = null;
let connection = null;
let adb = null;
let onmonitor = null;
let dev_list = null;
let autoconnect_enabled = localStorage["autoconnect_enabled"] || "true";
function is_device() {
    return !!device;
}
function is_connected() {
    return !!connection;
}
async function pair_device() {
    await Manager.requestDevice({
        filters: [
            {
                ...(0, _adbDaemonWebusb.ADB_DEFAULT_DEVICE_FILTER),
                vendorId: 0x19D2,
                productId: 0x0452
            }
        ]
    });
    await autoconnect();
}
async function list_existing() {
    devices = await Manager.getDevices([
        {
            ...(0, _adbDaemonWebusb.ADB_DEFAULT_DEVICE_FILTER),
            vendorId: 0x19D2,
            productId: 0x0452
        }
    ]);
    return devices;
}
function select_existing(serial) {
    device = devices.filter((dev)=>{
        return dev.serial == serial;
    });
    console.log(device);
    if (device.length < 1) {
        device = null;
        return;
    }
    device = device[0];
    if (get_autoconnect()) connect_device();
}
async function disconnect() {
    if (!device) {
        log("No device connected!");
        return;
    }
    try {
        await adb.close();
    } catch (e) {
        log("Error when closing adb");
        console.error(e);
    }
    log("ADB session closed");
    adb = null;
    try {
        await device.raw.close();
    } catch (e) {
        log("Error when closing connection");
        console.error(e);
    }
    log("Connection closed");
    connection = null;
    device = null;
    if (dev_list) await draw_device_list();
    if (onmonitor) onmonitor();
}
async function autoconnect() {
    await list_existing();
    if (device && devices.filter((dev)=>{
        return dev.serial == device.serial;
    }).length < 1) device = null;
    console.log(devices);
    // if (devices.length == 0) return [];
    if (!device && get_autoconnect() && devices.length > 0) {
        device = devices[0];
        await connect_device();
        if (onmonitor) onmonitor();
    }
    if (dev_list) await draw_device_list();
    return devices;
}
function set_autoconnect(val) {
    val = "" + val;
    autoconnect_enabled = val;
    localStorage["autoconnect_enabled"] = val;
}
function get_autoconnect() {
    return autoconnect_enabled == "true";
}
function monitor_usb(dev_list_p, onmonitor_p) {
    dev_list = dev_list_p;
    onmonitor = onmonitor_p;
    navigator.usb.addEventListener("connect", ()=>{
        log("Connect event received, updating devices...");
        autoconnect();
    });
    navigator.usb.addEventListener("disconnect", ()=>{
        log("Disconnect event received, updating devices...");
        autoconnect();
    });
    log("Checking devices due to start...");
    autoconnect();
}
async function draw_device_list() {
    const list_elem = dev_list;
    if (!devices) await list_existing();
    // log(devices.toString());
    list_elem.innerHTML = `<option value="null">No device</option>`;
    for (const dev of devices){
        const opt = document.createElement("option");
        opt.textContent = `${dev.raw.productName}\t${dev.raw.manufacturerName}\t${dev.serial}`;
        opt.value = dev.serial;
        list_elem.appendChild(opt);
    }
    if (device) list_elem.value = device.serial;
    else list_elem.value = "null";
}
async function connect_device() {
    console.log("connect dev");
    if (!device) {
        console.log("Device is null");
        alert("Device is null");
        return;
    }
    connection = await device.connect();
    log("Device connection opened...");
    const transport = await (0, _adb.AdbDaemonTransport).authenticate({
        serial: device.serial,
        connection,
        credentialStore: CredentialStore
    });
    log("ADB transport opened...");
    adb = new (0, _adb.Adb)(transport);
    log("ADB connection created!");
    // console.log(adb);
    log("Android version: " + await adb.getProp("ro.build.version.release"));
    if (onmonitor) onmonitor();
}
async function exploit_gabb() {
    let res = null;
    await godo("am switch-user 0");
    res = await godo("pm list users");
    const mmus = res.stdout.matchAll(/(?<uid>\d+):MaintenanceModeUser:/g);
    for (const mmu of mmus)if (mmu.groups.uid) await godo("pm remove-user " + mmu.groups.uid);
    await godo("pm disable-user --user 0 com.gabb.packageupdater");
    await godo("pm disable-user --user 0 com.zte.zdm");
    log("Exploited (if no errors above, lol)!");
}
async function install_app(file, user) {
    if (!user) user = "current";
    //const file_input = document.querySelector("#apk");
    //const file = file_input.files[0];
    log("Acquiring sync...");
    const sync = await adb.sync();
    log("Sending APK...");
    await sync.write({
        filename: "/data/local/tmp/temp.apk",
        file: file.stream()
    });
    sync.dispose();
    log("APK sent!");
    let res = null;
    log("Installing...");
    res = await godo("pm install-create --user " + user);
    const session = res.stdout.split("[")[1].split("]")[0];
    await godo(`pm install-write ${session} tomato /data/local/tmp/temp.apk`);
    await godo(`pm install-commit ${session}`);
    await adb.rm("/data/local/tmp/temp.apk");
}
async function send_command_and_get_response(command, ignore_errors, silence_logs) {
    const process = await adb.subprocess.spawnAndWait(command, {
        protocols: [
            (0, _adb.AdbSubprocessShellProtocol)
        ]
    });
    if (process.stderr) {
        if (!silence_logs) log(process.stderr);
        if (!ignore_errors) throw process.stderr;
    }
    if (!silence_logs) log(process.stdout);
    return process;
}
async function send_to_device(file) {
    log("Acquiring sync...");
    const sync = await adb.sync();
    log("Sending...");
    await sync.write({
        filename: "/sdcard/Download/" + file.name,
        file: file.stream()
    });
    await sync.dispose();
    log("Sent!");
}
const godo = send_command_and_get_response;
function log(msg) {
    if (konsole) {
        konsole.textContent += `[${new Date().toLocaleString()}] ${msg}\n`;
        konsole.scrollTo(0, konsole.scrollHeight);
    } else console.log(msg);
    return msg;
}

},{"@yume-chan/adb-daemon-webusb":"lhbdq","@yume-chan/adb-credential-web":"iXVWq","@yume-chan/adb":"9BDFe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lhbdq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _deviceJs = require("./device.js");
parcelHelpers.exportAll(_deviceJs, exports);
var _managerJs = require("./manager.js");
parcelHelpers.exportAll(_managerJs, exports);
var _utilsJs = require("./utils.js");
parcelHelpers.exportAll(_utilsJs, exports);
var _watcherJs = require("./watcher.js");
parcelHelpers.exportAll(_watcherJs, exports);

},{"./device.js":"93OWL","./manager.js":"1sHLA","./utils.js":"jdErq","./watcher.js":"42JZJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"93OWL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ADB_DEFAULT_DEVICE_FILTER", ()=>ADB_DEFAULT_DEVICE_FILTER);
parcelHelpers.export(exports, "AdbDaemonWebUsbConnection", ()=>AdbDaemonWebUsbConnection);
parcelHelpers.export(exports, "AdbDaemonWebUsbDevice", ()=>AdbDaemonWebUsbDevice);
var _adb = require("@yume-chan/adb");
var _streamExtra = require("@yume-chan/stream-extra");
var _struct = require("@yume-chan/struct");
var _utilsJs = require("./utils.js");
const ADB_DEFAULT_DEVICE_FILTER = {
    classCode: 0xff,
    subclassCode: 0x42,
    protocolCode: 1
};
/**
 * Find the first pair of input and output endpoints from an alternate interface.
 *
 * ADB interface only has two endpoints, one for input and one for output.
 */ function findUsbEndpoints(endpoints) {
    if (endpoints.length === 0) throw new TypeError("No endpoints given");
    let inEndpoint;
    let outEndpoint;
    for (const endpoint of endpoints)switch(endpoint.direction){
        case "in":
            inEndpoint = endpoint;
            if (outEndpoint) return {
                inEndpoint,
                outEndpoint
            };
            break;
        case "out":
            outEndpoint = endpoint;
            if (inEndpoint) return {
                inEndpoint,
                outEndpoint
            };
            break;
    }
    if (!inEndpoint) throw new TypeError("No input endpoint found.");
    if (!outEndpoint) throw new TypeError("No output endpoint found.");
    throw new Error("unreachable");
}
class Uint8ArrayExactReadable {
    #data;
    #position;
    get position() {
        return this.#position;
    }
    constructor(data){
        this.#data = data;
        this.#position = 0;
    }
    readExactly(length) {
        const result = this.#data.subarray(this.#position, this.#position + length);
        this.#position += length;
        return result;
    }
}
class AdbDaemonWebUsbConnection {
    #device;
    get device() {
        return this.#device;
    }
    #inEndpoint;
    get inEndpoint() {
        return this.#inEndpoint;
    }
    #outEndpoint;
    get outEndpoint() {
        return this.#outEndpoint;
    }
    #readable;
    get readable() {
        return this.#readable;
    }
    #writable;
    get writable() {
        return this.#writable;
    }
    constructor(device, inEndpoint, outEndpoint, usbManager){
        this.#device = device;
        this.#inEndpoint = inEndpoint;
        this.#outEndpoint = outEndpoint;
        let closed1 = false;
        const duplex = new (0, _streamExtra.DuplexStreamFactory)({
            close: async ()=>{
                try {
                    closed1 = true;
                    await device.raw.close();
                } catch  {
                /* device may have already disconnected */ }
            },
            dispose: ()=>{
                closed1 = true;
                usbManager.removeEventListener("disconnect", handleUsbDisconnect);
            }
        });
        function handleUsbDisconnect(e) {
            if (e.device === device.raw) duplex.dispose().catch((0, _adb.unreachable));
        }
        usbManager.addEventListener("disconnect", handleUsbDisconnect);
        this.#readable = duplex.wrapReadable(new (0, _streamExtra.ReadableStream)({
            pull: async (controller)=>{
                const packet = await this.#transferIn();
                if (packet) controller.enqueue(packet);
                else controller.close();
            }
        }, {
            highWaterMark: 0
        }));
        const zeroMask = outEndpoint.packetSize - 1;
        this.#writable = (0, _streamExtra.pipeFrom)(duplex.createWritable(new (0, _streamExtra.MaybeConsumable).WritableStream({
            write: async (chunk)=>{
                try {
                    await device.raw.transferOut(outEndpoint.endpointNumber, chunk);
                    // In USB protocol, a not-full packet indicates the end of a transfer.
                    // If the payload size is a multiple of the packet size,
                    // we need to send an empty packet to indicate the end,
                    // so the OS will send it to the device immediately.
                    if (zeroMask && (chunk.length & zeroMask) === 0) await device.raw.transferOut(outEndpoint.endpointNumber, (0, _struct.EMPTY_UINT8_ARRAY));
                } catch (e) {
                    if (closed1) return;
                    throw e;
                }
            }
        })), new (0, _adb.AdbPacketSerializeStream)());
    }
    async #transferIn() {
        try {
            while(true){
                // ADB daemon sends each packet in two parts, the 24-byte header and the payload.
                const result = await this.#device.raw.transferIn(this.#inEndpoint.endpointNumber, this.#inEndpoint.packetSize);
                if (result.data.byteLength !== 24) continue;
                // Per spec, the `result.data` always covers the whole `buffer`.
                const buffer = new Uint8Array(result.data.buffer);
                const stream = new Uint8ArrayExactReadable(buffer);
                // Add `payload` field to its type, it's assigned below.
                const packet = (0, _adb.AdbPacketHeader).deserialize(stream);
                if (packet.magic !== (packet.command ^ 0xffffffff)) continue;
                if (packet.payloadLength !== 0) {
                    const result = await this.#device.raw.transferIn(this.#inEndpoint.endpointNumber, packet.payloadLength);
                    packet.payload = new Uint8Array(result.data.buffer);
                } else packet.payload = (0, _struct.EMPTY_UINT8_ARRAY);
                return packet;
            }
        } catch (e) {
            // On Windows, disconnecting the device will cause `NetworkError` to be thrown,
            // even before the `disconnect` event is fired.
            // We need to wait a little bit and check if the device is still connected.
            // https://github.com/WICG/webusb/issues/219
            if ((0, _utilsJs.isErrorName)(e, "NetworkError")) {
                await new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve();
                    }, 100);
                });
                if (closed) return undefined;
                else throw e;
            }
            throw e;
        }
    }
}
class AdbDaemonWebUsbDevice {
    #filters;
    #usbManager;
    #raw;
    get raw() {
        return this.#raw;
    }
    #serial;
    get serial() {
        return this.#serial;
    }
    get name() {
        return this.#raw.productName;
    }
    /**
     * Create a new instance of `AdbDaemonWebUsbConnection` using a specified `USBDevice` instance
     *
     * @param device The `USBDevice` instance obtained elsewhere.
     * @param filters The filters to use when searching for ADB interface. Defaults to {@link ADB_DEFAULT_DEVICE_FILTER}.
     */ constructor(device, filters = [
        ADB_DEFAULT_DEVICE_FILTER
    ], usbManager){
        this.#raw = device;
        this.#serial = (0, _utilsJs.getSerialNumber)(device);
        this.#filters = filters;
        this.#usbManager = usbManager;
    }
    async #claimInterface() {
        if (!this.#raw.opened) await this.#raw.open();
        const { configuration, interface_, alternate } = (0, _utilsJs.findUsbAlternateInterface)(this.#raw, this.#filters);
        if (this.#raw.configuration?.configurationValue !== configuration.configurationValue) // Note: Switching configuration is not supported on Windows,
        // but Android devices should always expose ADB function at the first (default) configuration.
        await this.#raw.selectConfiguration(configuration.configurationValue);
        if (!interface_.claimed) await this.#raw.claimInterface(interface_.interfaceNumber);
        if (interface_.alternate.alternateSetting !== alternate.alternateSetting) await this.#raw.selectAlternateInterface(interface_.interfaceNumber, alternate.alternateSetting);
        const { inEndpoint, outEndpoint } = findUsbEndpoints(alternate.endpoints);
        return [
            inEndpoint,
            outEndpoint
        ];
    }
    /**
     * Claim the device and create a pair of `AdbPacket` streams to the ADB interface.
     * @returns The pair of `AdbPacket` streams.
     */ async connect() {
        const [inEndpoint, outEndpoint] = await this.#claimInterface();
        return new AdbDaemonWebUsbConnection(this, inEndpoint, outEndpoint, this.#usbManager);
    }
}

},{"@yume-chan/adb":"9BDFe","@yume-chan/stream-extra":"jSEnK","@yume-chan/struct":"bhoSk","./utils.js":"jdErq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9BDFe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _adbJs = require("./adb.js");
parcelHelpers.exportAll(_adbJs, exports);
var _bannerJs = require("./banner.js");
parcelHelpers.exportAll(_bannerJs, exports);
var _indexJs = require("./commands/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var _indexJs1 = require("./daemon/index.js");
parcelHelpers.exportAll(_indexJs1, exports);
var _featuresJs = require("./features.js");
parcelHelpers.exportAll(_featuresJs, exports);
var _indexJs2 = require("./server/index.js");
parcelHelpers.exportAll(_indexJs2, exports);
var _indexJs3 = require("./utils/index.js");
parcelHelpers.exportAll(_indexJs3, exports);

},{"./adb.js":"cA2xS","./banner.js":"9KJu9","./commands/index.js":"dz5d7","./daemon/index.js":"6JFnO","./features.js":"gnUAS","./server/index.js":"5Jkeb","./utils/index.js":"9S5h7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cA2xS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Adb", ()=>Adb);
var _streamExtra = require("@yume-chan/stream-extra");
var _indexJs = require("./commands/index.js");
class Adb {
    transport;
    get serial() {
        return this.transport.serial;
    }
    get maxPayloadSize() {
        return this.transport.maxPayloadSize;
    }
    get banner() {
        return this.transport.banner;
    }
    get disconnected() {
        return this.transport.disconnected;
    }
    get clientFeatures() {
        return this.transport.clientFeatures;
    }
    get deviceFeatures() {
        return this.banner.features;
    }
    subprocess;
    power;
    reverse;
    tcpip;
    constructor(transport){
        this.transport = transport;
        this.subprocess = new (0, _indexJs.AdbSubprocess)(this);
        this.power = new (0, _indexJs.AdbPower)(this);
        this.reverse = new (0, _indexJs.AdbReverseCommand)(this);
        this.tcpip = new (0, _indexJs.AdbTcpIpCommand)(this);
    }
    canUseFeature(feature) {
        return this.clientFeatures.includes(feature) && this.deviceFeatures.includes(feature);
    }
    async createSocket(service) {
        return this.transport.connect(service);
    }
    async createSocketAndWait(service) {
        const socket = await this.createSocket(service);
        return await socket.readable.pipeThrough(new (0, _streamExtra.TextDecoderStream)()).pipeThrough(new (0, _streamExtra.ConcatStringStream)());
    }
    async getProp(key) {
        const stdout = await this.subprocess.spawnAndWaitLegacy([
            "getprop",
            key
        ]);
        return stdout.trim();
    }
    async rm(filenames, options) {
        const args = [
            "rm"
        ];
        if (options?.recursive) args.push("-r");
        if (options?.force) args.push("-f");
        if (Array.isArray(filenames)) for (const filename of filenames)args.push((0, _indexJs.escapeArg)(filename));
        else args.push((0, _indexJs.escapeArg)(filenames));
        // https://android.googlesource.com/platform/packages/modules/adb/+/1a0fb8846d4e6b671c8aa7f137a8c21d7b248716/client/adb_install.cpp#984
        args.push("</dev/null");
        const stdout = await this.subprocess.spawnAndWaitLegacy(args);
        return stdout;
    }
    async sync() {
        const socket = await this.createSocket("sync:");
        return new (0, _indexJs.AdbSync)(this, socket);
    }
    async framebuffer() {
        return (0, _indexJs.framebuffer)(this);
    }
    async close() {
        await this.transport.close();
    }
}

},{"@yume-chan/stream-extra":"jSEnK","./commands/index.js":"dz5d7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jSEnK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bufferedTransformJs = require("./buffered-transform.js");
parcelHelpers.exportAll(_bufferedTransformJs, exports);
var _bufferedJs = require("./buffered.js");
parcelHelpers.exportAll(_bufferedJs, exports);
var _concatJs = require("./concat.js");
parcelHelpers.exportAll(_concatJs, exports);
var _consumableJs = require("./consumable.js");
parcelHelpers.exportAll(_consumableJs, exports);
var _distributionJs = require("./distribution.js");
parcelHelpers.exportAll(_distributionJs, exports);
var _duplexJs = require("./duplex.js");
parcelHelpers.exportAll(_duplexJs, exports);
var _encodingJs = require("./encoding.js");
parcelHelpers.exportAll(_encodingJs, exports);
var _inspectJs = require("./inspect.js");
parcelHelpers.exportAll(_inspectJs, exports);
var _maybeConsumableJs = require("./maybe-consumable.js");
parcelHelpers.exportAll(_maybeConsumableJs, exports);
var _pipeFromJs = require("./pipe-from.js");
parcelHelpers.exportAll(_pipeFromJs, exports);
var _pushReadableJs = require("./push-readable.js");
parcelHelpers.exportAll(_pushReadableJs, exports);
var _splitStringJs = require("./split-string.js");
parcelHelpers.exportAll(_splitStringJs, exports);
var _streamJs = require("./stream.js");
parcelHelpers.exportAll(_streamJs, exports);
var _structDeserializeJs = require("./struct-deserialize.js");
parcelHelpers.exportAll(_structDeserializeJs, exports);
var _structSerializeJs = require("./struct-serialize.js");
parcelHelpers.exportAll(_structSerializeJs, exports);
var _taskJs = require("./task.js");
parcelHelpers.exportAll(_taskJs, exports);
var _wrapReadableJs = require("./wrap-readable.js");
parcelHelpers.exportAll(_wrapReadableJs, exports);
var _wrapWritableJs = require("./wrap-writable.js");
parcelHelpers.exportAll(_wrapWritableJs, exports);

},{"./buffered-transform.js":"57EZc","./buffered.js":"bFTAU","./concat.js":"iCJvF","./consumable.js":"liEeA","./distribution.js":"7Pw6u","./duplex.js":"fehP3","./encoding.js":"5twUP","./inspect.js":"8jQVw","./maybe-consumable.js":"lxx6O","./pipe-from.js":"87EZx","./push-readable.js":"iaOxQ","./split-string.js":"hwvTP","./stream.js":"66IZv","./struct-deserialize.js":"8LcO8","./struct-serialize.js":"2u9II","./task.js":"l2xy4","./wrap-readable.js":"jAOAp","./wrap-writable.js":"9VevF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"57EZc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// TODO: BufferedTransformStream: find better implementation
parcelHelpers.export(exports, "BufferedTransformStream", ()=>BufferedTransformStream);
var _struct = require("@yume-chan/struct");
var _bufferedJs = require("./buffered.js");
var _pushReadableJs = require("./push-readable.js");
var _streamJs = require("./stream.js");
class BufferedTransformStream {
    #readable;
    get readable() {
        return this.#readable;
    }
    #writable;
    get writable() {
        return this.#writable;
    }
    constructor(transform){
        // Convert incoming chunks to a `BufferedReadableStream`
        let sourceStreamController;
        const buffered = new (0, _bufferedJs.BufferedReadableStream)(new (0, _pushReadableJs.PushReadableStream)((controller)=>{
            sourceStreamController = controller;
        }));
        this.#readable = new (0, _streamJs.ReadableStream)({
            async pull (controller) {
                try {
                    const value = await transform(buffered);
                    controller.enqueue(value);
                } catch (e) {
                    // Treat `StructEmptyError` as a normal end.
                    // If the `transform` method doesn't have enough data to return a value,
                    // it should throw another error to indicate that.
                    if (e instanceof (0, _struct.StructEmptyError)) {
                        controller.close();
                        return;
                    }
                    throw e;
                }
            },
            cancel: (reason)=>{
                // Propagate cancel to the source stream
                // So future writes will be rejected
                return buffered.cancel(reason);
            }
        });
        this.#writable = new (0, _streamJs.WritableStream)({
            async write (chunk) {
                await sourceStreamController.enqueue(chunk);
            },
            abort () {
                sourceStreamController.close();
            },
            close () {
                sourceStreamController.close();
            }
        });
    }
}

},{"@yume-chan/struct":"bhoSk","./buffered.js":"bFTAU","./push-readable.js":"iaOxQ","./stream.js":"66IZv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bhoSk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _structJs.Struct));
var _indexJs = require("./basic/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var _structJs = require("./struct.js");
parcelHelpers.exportAll(_structJs, exports);
var _syncPromiseJs = require("./sync-promise.js");
parcelHelpers.exportAll(_syncPromiseJs, exports);
var _indexJs1 = require("./types/index.js");
parcelHelpers.exportAll(_indexJs1, exports);
var _utilsJs = require("./utils.js");
parcelHelpers.exportAll(_utilsJs, exports);

},{"./basic/index.js":"l1aNX","./struct.js":"40uG8","./sync-promise.js":"lwaVK","./types/index.js":"fcyBD","./utils.js":"b8cCl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l1aNX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _definitionJs = require("./definition.js");
parcelHelpers.exportAll(_definitionJs, exports);
var _fieldValueJs = require("./field-value.js");
parcelHelpers.exportAll(_fieldValueJs, exports);
var _optionsJs = require("./options.js");
parcelHelpers.exportAll(_optionsJs, exports);
var _streamJs = require("./stream.js");
parcelHelpers.exportAll(_streamJs, exports);
var _structValueJs = require("./struct-value.js");
parcelHelpers.exportAll(_structValueJs, exports);

},{"./definition.js":"kvxd3","./field-value.js":"kwBWY","./options.js":"2KRcd","./stream.js":"kFMyP","./struct-value.js":"biYSD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kvxd3":[function(require,module,exports) {
/**
 * A field definition defines how to deserialize a field.
 *
 * @template TOptions TypeScript type of this definition's `options`.
 * @template TValue TypeScript type of this field.
 * @template TOmitInitKey Optionally remove some fields from the init type. Should be a union of string literal types.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StructFieldDefinition", ()=>StructFieldDefinition);
class StructFieldDefinition {
    /**
     * When `T` is a type initiated `StructFieldDefinition`,
     * use `T['TValue']` to retrieve its `TValue` type parameter.
     */ TValue;
    /**
     * When `T` is a type initiated `StructFieldDefinition`,
     * use `T['TOmitInitKey']` to retrieve its `TOmitInitKey` type parameter.
     */ TOmitInitKey;
    options;
    constructor(options){
        this.options = options;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kwBWY":[function(require,module,exports) {
/**
 * A field value defines how to serialize a field.
 *
 * It may contains extra metadata about the value which are essential or
 * helpful for the serialization process.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StructFieldValue", ()=>StructFieldValue);
class StructFieldValue {
    /** Gets the definition associated with this runtime value */ definition;
    /** Gets the options of the associated `Struct` */ options;
    /** Gets the associated `Struct` instance */ struct;
    get hasCustomAccessors() {
        return this.get !== StructFieldValue.prototype.get || this.set !== StructFieldValue.prototype.set;
    }
    value;
    constructor(definition, options, struct, value){
        this.definition = definition;
        this.options = options;
        this.struct = struct;
        this.value = value;
    }
    /**
     * Gets size of this field. By default, it returns its `definition`'s size.
     *
     * When overridden in derived classes, can have custom logic to calculate the actual size.
     */ getSize() {
        return this.definition.getSize();
    }
    /**
     * When implemented in derived classes, reads current field's value.
     */ get() {
        return this.value;
    }
    /**
     * When implemented in derived classes, updates current field's value.
     */ set(value) {
        this.value = value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2KRcd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StructDefaultOptions", ()=>StructDefaultOptions);
const StructDefaultOptions = {
    littleEndian: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kFMyP":[function(require,module,exports) {
// TODO: allow over reading (returning a `Uint8Array`, an `offset` and a `length`) to avoid copying
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExactReadableEndedError", ()=>ExactReadableEndedError);
class ExactReadableEndedError extends Error {
    constructor(){
        super("ExactReadable ended");
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"biYSD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "STRUCT_VALUE_SYMBOL", ()=>STRUCT_VALUE_SYMBOL);
parcelHelpers.export(exports, "isStructValueInit", ()=>isStructValueInit);
/**
 * A struct value is a map between keys in a struct and their field values.
 */ parcelHelpers.export(exports, "StructValue", ()=>StructValue);
const STRUCT_VALUE_SYMBOL = Symbol("struct-value");
function isStructValueInit(value) {
    return typeof value === "object" && value !== null && STRUCT_VALUE_SYMBOL in value;
}
class StructValue {
    /** @internal */ fieldValues = {};
    /**
     * Gets the result struct value object
     */ value;
    constructor(prototype){
        // PERF: `Object.create(extra)` is 50% faster
        // than `Object.defineProperties(this.value, extra)`
        this.value = Object.create(prototype);
        // PERF: `Object.defineProperty` is slow
        // but we need it to be non-enumerable
        Object.defineProperty(this.value, STRUCT_VALUE_SYMBOL, {
            enumerable: false,
            value: this
        });
    }
    /**
     * Sets a `StructFieldValue` for `key`
     *
     * @param name The field name
     * @param fieldValue The associated `StructFieldValue`
     */ set(name, fieldValue) {
        this.fieldValues[name] = fieldValue;
        // PERF: `Object.defineProperty` is slow
        // use normal property when possible
        if (fieldValue.hasCustomAccessors) Object.defineProperty(this.value, name, {
            configurable: true,
            enumerable: true,
            get () {
                return fieldValue.get();
            },
            set (v) {
                fieldValue.set(v);
            }
        });
        else this.value[name] = fieldValue.get();
    }
    /**
     * Gets the `StructFieldValue` for `key`
     *
     * @param name The field name
     */ get(name) {
        return this.fieldValues[name];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"40uG8":[function(require,module,exports) {
/* eslint-disable @typescript-eslint/no-explicit-any */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StructDeserializeError", ()=>StructDeserializeError);
parcelHelpers.export(exports, "StructNotEnoughDataError", ()=>StructNotEnoughDataError);
parcelHelpers.export(exports, "StructEmptyError", ()=>StructEmptyError);
parcelHelpers.export(exports, "Struct", ()=>Struct);
var _indexJs = require("./basic/index.js");
var _syncPromiseJs = require("./sync-promise.js");
var _indexJs1 = require("./types/index.js");
class StructDeserializeError extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class StructNotEnoughDataError extends StructDeserializeError {
    constructor(){
        super("The underlying readable was ended before the struct was fully deserialized");
    }
}
class StructEmptyError extends StructDeserializeError {
    constructor(){
        super("The underlying readable doesn't contain any more struct");
    }
}
class Struct {
    TFields;
    TOmitInitKey;
    TExtra;
    TInit;
    TDeserializeResult;
    options;
    #size = 0;
    /**
     * Gets the static size (exclude fields that can change size at runtime)
     */ get size() {
        return this.#size;
    }
    #fields = [];
    get fields() {
        return this.#fields;
    }
    #extra = {};
    #postDeserialized;
    constructor(options){
        this.options = {
            ...(0, _indexJs.StructDefaultOptions),
            ...options
        };
    }
    /**
     * Appends a `StructFieldDefinition` to the `Struct
     */ field(name, definition) {
        for (const field of this.#fields)if (field[0] === name) {
            // Convert Symbol to string
            const nameString = String(name);
            throw new Error(`This struct already have a field with name '${nameString}'`);
        }
        this.#fields.push([
            name,
            definition
        ]);
        const size = definition.getSize();
        this.#size += size;
        // Force cast `this` to another type
        return this;
    }
    /**
     * Merges (flats) another `Struct`'s fields and extra fields into this one.
     *
     * `other`'s `postDeserialize` will be ignored.
     */ concat(other) {
        if (!(other instanceof Struct)) throw new TypeError("The other value must be a `Struct` instance");
        for (const field of other.#fields)this.#fields.push(field);
        this.#size += other.#size;
        Object.defineProperties(this.#extra, Object.getOwnPropertyDescriptors(other.#extra));
        return this;
    }
    #number(name, type, typeScriptType) {
        return this.field(name, new (0, _indexJs1.NumberFieldDefinition)(type, typeScriptType));
    }
    /**
     * Appends an `int8` field to the `Struct`
     */ int8(name, typeScriptType) {
        return this.#number(name, (0, _indexJs1.NumberFieldVariant).Int8, typeScriptType);
    }
    /**
     * Appends an `uint8` field to the `Struct`
     */ uint8(name, typeScriptType) {
        return this.#number(name, (0, _indexJs1.NumberFieldVariant).Uint8, typeScriptType);
    }
    /**
     * Appends an `int16` field to the `Struct`
     */ int16(name, typeScriptType) {
        return this.#number(name, (0, _indexJs1.NumberFieldVariant).Int16, typeScriptType);
    }
    /**
     * Appends an `uint16` field to the `Struct`
     */ uint16(name, typeScriptType) {
        return this.#number(name, (0, _indexJs1.NumberFieldVariant).Uint16, typeScriptType);
    }
    /**
     * Appends an `int32` field to the `Struct`
     */ int32(name, typeScriptType) {
        return this.#number(name, (0, _indexJs1.NumberFieldVariant).Int32, typeScriptType);
    }
    /**
     * Appends an `uint32` field to the `Struct`
     */ uint32(name, typeScriptType) {
        return this.#number(name, (0, _indexJs1.NumberFieldVariant).Uint32, typeScriptType);
    }
    #bigint(name, type, typeScriptType) {
        return this.field(name, new (0, _indexJs1.BigIntFieldDefinition)(type, typeScriptType));
    }
    /**
     * Appends an `int64` field to the `Struct`
     *
     * Requires native `BigInt` support
     */ int64(name, typeScriptType) {
        return this.#bigint(name, (0, _indexJs1.BigIntFieldVariant).Int64, typeScriptType);
    }
    /**
     * Appends an `uint64` field to the `Struct`
     *
     * Requires native `BigInt` support
     */ uint64(name, typeScriptType) {
        return this.#bigint(name, (0, _indexJs1.BigIntFieldVariant).Uint64, typeScriptType);
    }
    #arrayBufferLike = (name, type, options)=>{
        if ("length" in options) return this.field(name, new (0, _indexJs1.FixedLengthBufferLikeFieldDefinition)(type, options));
        else return this.field(name, new (0, _indexJs1.VariableLengthBufferLikeFieldDefinition)(type, options));
    };
    uint8Array = (name, options, typeScriptType)=>{
        return this.#arrayBufferLike(name, (0, _indexJs1.Uint8ArrayBufferFieldConverter).Instance, options, typeScriptType);
    };
    string = (name, options, typeScriptType)=>{
        return this.#arrayBufferLike(name, (0, _indexJs1.StringBufferFieldConverter).Instance, options, typeScriptType);
    };
    /**
     * Adds some extra properties into every `Struct` value.
     *
     * Extra properties will not affect serialize or deserialize process.
     *
     * Multiple calls to `extra` will merge all properties together.
     *
     * @param value
     * An object containing properties to be added to the result value. Accessors and methods are also allowed.
     */ extra(value) {
        Object.defineProperties(this.#extra, Object.getOwnPropertyDescriptors(value));
        return this;
    }
    postDeserialize(callback) {
        this.#postDeserialized = callback;
        return this;
    }
    deserialize(stream) {
        const structValue = new (0, _indexJs.StructValue)(this.#extra);
        let promise = (0, _syncPromiseJs.SyncPromise).resolve();
        const startPosition = stream.position;
        for (const [name, definition] of this.#fields)promise = promise.then(()=>definition.deserialize(this.options, stream, structValue)).then((fieldValue)=>{
            structValue.set(name, fieldValue);
        }, (e)=>{
            if (!(e instanceof (0, _indexJs.ExactReadableEndedError))) throw e;
            if (stream.position === startPosition) throw new StructEmptyError();
            else throw new StructNotEnoughDataError();
        });
        return promise.then(()=>{
            const value = structValue.value;
            // Run `postDeserialized`
            if (this.#postDeserialized) {
                const override = this.#postDeserialized.call(value, value);
                // If it returns a new value, use that as result
                // Otherwise it only inspects/mutates the object in place.
                if (override !== undefined) return override;
            }
            return value;
        }).valueOrPromise();
    }
    /**
     * Serialize a struct value to a buffer.
     * @param init Fields of the struct
     * @param output The buffer to serialize the struct to. It must be large enough to hold the entire struct. If not provided, a new buffer will be created.
     * @returns A view of `output` that contains the serialized struct, or a new buffer if `output` is not provided.
     */ serialize(init, output) {
        let structValue;
        if ((0, _indexJs.isStructValueInit)(init)) {
            structValue = init[0, _indexJs.STRUCT_VALUE_SYMBOL];
            for (const [key, value] of Object.entries(init)){
                const fieldValue = structValue.get(key);
                if (fieldValue) fieldValue.set(value);
            }
        } else {
            structValue = new (0, _indexJs.StructValue)({});
            for (const [name, definition] of this.#fields){
                const fieldValue = definition.create(this.options, structValue, init[name]);
                structValue.set(name, fieldValue);
            }
        }
        let structSize = 0;
        const fieldsInfo = [];
        for (const [name] of this.#fields){
            const fieldValue = structValue.get(name);
            const size = fieldValue.getSize();
            fieldsInfo.push({
                fieldValue,
                size
            });
            structSize += size;
        }
        if (!output) output = new Uint8Array(structSize);
        else if (output.length < structSize) throw new TypeError("Output buffer is too small");
        const dataView = new DataView(output.buffer, output.byteOffset, output.byteLength);
        let offset = 0;
        for (const { fieldValue, size } of fieldsInfo){
            fieldValue.serialize(dataView, output, offset);
            offset += size;
        }
        if (output.length !== structSize) return output.subarray(0, structSize);
        else return output;
    }
}

},{"./basic/index.js":"l1aNX","./sync-promise.js":"lwaVK","./types/index.js":"fcyBD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lwaVK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SyncPromise", ()=>SyncPromise);
const SyncPromise = {
    reject (reason) {
        return new RejectedSyncPromise(reason);
    },
    resolve (value) {
        if (typeof value === "object" && value !== null && typeof value.then === "function") {
            if (value instanceof PendingSyncPromise || value instanceof ResolvedSyncPromise || value instanceof RejectedSyncPromise) return value;
            return new PendingSyncPromise(value);
        } else return new ResolvedSyncPromise(value);
    },
    try (executor) {
        try {
            return SyncPromise.resolve(executor());
        } catch (e) {
            return SyncPromise.reject(e);
        }
    }
};
class PendingSyncPromise {
    #promise;
    constructor(promise){
        this.#promise = promise;
    }
    then(onfulfilled, onrejected) {
        return new PendingSyncPromise(this.#promise.then(onfulfilled, onrejected));
    }
    valueOrPromise() {
        return this.#promise;
    }
}
class ResolvedSyncPromise {
    #value;
    constructor(value){
        this.#value = value;
    }
    then(onfulfilled) {
        if (!onfulfilled) return this;
        return SyncPromise.try(()=>onfulfilled(this.#value));
    }
    valueOrPromise() {
        return this.#value;
    }
}
class RejectedSyncPromise {
    #reason;
    constructor(reason){
        this.#reason = reason;
    }
    then(onfulfilled, onrejected) {
        if (!onrejected) return this;
        return SyncPromise.try(()=>onrejected(this.#reason));
    }
    valueOrPromise() {
        throw this.#reason;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fcyBD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bigintJs = require("./bigint.js");
parcelHelpers.exportAll(_bigintJs, exports);
var _indexJs = require("./buffer/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var _numberJs = require("./number.js");
parcelHelpers.exportAll(_numberJs, exports);

},{"./bigint.js":"bVKBQ","./buffer/index.js":"71cwM","./number.js":"egjs5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bVKBQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BigIntFieldVariant", ()=>BigIntFieldVariant);
parcelHelpers.export(exports, "BigIntFieldDefinition", ()=>BigIntFieldDefinition);
parcelHelpers.export(exports, "BigIntFieldValue", ()=>BigIntFieldValue);
var _noDataView = require("@yume-chan/no-data-view");
var _indexJs = require("../basic/index.js");
var _syncPromiseJs = require("../sync-promise.js");
class BigIntFieldVariant {
    TTypeScriptType;
    size;
    deserialize;
    serialize;
    constructor(size, deserialize, serialize){
        this.size = size;
        this.deserialize = deserialize;
        this.serialize = serialize;
    }
    static Int64 = new BigIntFieldVariant(8, (0, _noDataView.getInt64), (0, _noDataView.setInt64));
    static Uint64 = new BigIntFieldVariant(8, (0, _noDataView.getUint64), (0, _noDataView.setUint64));
}
class BigIntFieldDefinition extends (0, _indexJs.StructFieldDefinition) {
    variant;
    constructor(variant, typescriptType){
        super();
        this.variant = variant;
    }
    getSize() {
        return this.variant.size;
    }
    create(options, struct, value) {
        return new BigIntFieldValue(this, options, struct, value);
    }
    deserialize(options, stream, struct) {
        return (0, _syncPromiseJs.SyncPromise).try(()=>{
            return stream.readExactly(this.getSize());
        }).then((array)=>{
            const value = this.variant.deserialize(array, 0, options.littleEndian);
            return this.create(options, struct, value);
        }).valueOrPromise();
    }
}
class BigIntFieldValue extends (0, _indexJs.StructFieldValue) {
    serialize(dataView, array, offset) {
        this.definition.variant.serialize(array, offset, this.value, this.options.littleEndian);
    }
}

},{"@yume-chan/no-data-view":"iBcsB","../basic/index.js":"l1aNX","../sync-promise.js":"lwaVK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBcsB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _int16Js = require("./int16.js");
parcelHelpers.exportAll(_int16Js, exports);
var _int32Js = require("./int32.js");
parcelHelpers.exportAll(_int32Js, exports);
var _int64Js = require("./int64.js");
parcelHelpers.exportAll(_int64Js, exports);
var _int8Js = require("./int8.js");
parcelHelpers.exportAll(_int8Js, exports);
var _uint16Js = require("./uint16.js");
parcelHelpers.exportAll(_uint16Js, exports);
var _uint32Js = require("./uint32.js");
parcelHelpers.exportAll(_uint32Js, exports);
var _uint64Js = require("./uint64.js");
parcelHelpers.exportAll(_uint64Js, exports);

},{"./int16.js":"f4Emn","./int32.js":"47D6k","./int64.js":"926iQ","./int8.js":"1iZK5","./uint16.js":"kkAga","./uint32.js":"7DyAK","./uint64.js":"jbIIm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4Emn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getInt16LittleEndian", ()=>getInt16LittleEndian);
parcelHelpers.export(exports, "getInt16BigEndian", ()=>getInt16BigEndian);
parcelHelpers.export(exports, "getInt16", ()=>getInt16);
parcelHelpers.export(exports, "setInt16LittleEndian", ()=>setInt16LittleEndian);
parcelHelpers.export(exports, "setInt16BigEndian", ()=>setInt16BigEndian);
parcelHelpers.export(exports, "setInt16", ()=>setInt16);
function getInt16LittleEndian(buffer, offset) {
    return (buffer[offset] | buffer[offset + 1] << 8) << 16 >> 16;
}
function getInt16BigEndian(buffer, offset) {
    return (buffer[offset] << 8 | buffer[offset + 1]) << 16 >> 16;
}
function getInt16(buffer, offset, littleEndian) {
    return littleEndian ? (buffer[offset] | buffer[offset + 1] << 8) << 16 >> 16 : (buffer[offset] << 8 | buffer[offset + 1]) << 16 >> 16;
}
function setInt16LittleEndian(buffer, offset, value) {
    buffer[offset] = value;
    buffer[offset + 1] = value >> 8;
}
function setInt16BigEndian(buffer, offset, value) {
    buffer[offset] = value >> 8;
    buffer[offset + 1] = value;
}
function setInt16(buffer, offset, value, littleEndian) {
    if (littleEndian) {
        buffer[offset] = value;
        buffer[offset + 1] = value >> 8;
    } else {
        buffer[offset] = value >> 8;
        buffer[offset + 1] = value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"47D6k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getInt32LittleEndian", ()=>getInt32LittleEndian);
parcelHelpers.export(exports, "getInt32BigEndian", ()=>getInt32BigEndian);
parcelHelpers.export(exports, "getInt32", ()=>getInt32);
parcelHelpers.export(exports, "setInt32LittleEndian", ()=>setInt32LittleEndian);
parcelHelpers.export(exports, "setInt32BigEndian", ()=>setInt32BigEndian);
parcelHelpers.export(exports, "setInt32", ()=>setInt32);
function getInt32LittleEndian(buffer, offset) {
    return buffer[offset] | buffer[offset + 1] << 8 | buffer[offset + 2] << 16 | buffer[offset + 3] << 24;
}
function getInt32BigEndian(buffer, offset) {
    return buffer[offset] << 24 | buffer[offset + 1] << 16 | buffer[offset + 2] << 8 | buffer[offset + 3];
}
function getInt32(buffer, offset, littleEndian) {
    return littleEndian ? buffer[offset] | buffer[offset + 1] << 8 | buffer[offset + 2] << 16 | buffer[offset + 3] << 24 : buffer[offset] << 24 | buffer[offset + 1] << 16 | buffer[offset + 2] << 8 | buffer[offset + 3];
}
function setInt32LittleEndian(buffer, offset, value) {
    buffer[offset] = value;
    buffer[offset + 1] = value >> 8;
    buffer[offset + 2] = value >> 16;
    buffer[offset + 3] = value >> 24;
}
function setInt32BigEndian(buffer, offset, value) {
    buffer[offset] = value >> 24;
    buffer[offset + 1] = value >> 16;
    buffer[offset + 2] = value >> 8;
    buffer[offset + 3] = value;
}
function setInt32(buffer, offset, value, littleEndian) {
    if (littleEndian) {
        buffer[offset] = value;
        buffer[offset + 1] = value >> 8;
        buffer[offset + 2] = value >> 16;
        buffer[offset + 3] = value >> 24;
    } else {
        buffer[offset] = value >> 24;
        buffer[offset + 1] = value >> 16;
        buffer[offset + 2] = value >> 8;
        buffer[offset + 3] = value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"926iQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getInt64LittleEndian", ()=>getInt64LittleEndian);
parcelHelpers.export(exports, "getInt64BigEndian", ()=>getInt64BigEndian);
parcelHelpers.export(exports, "getInt64", ()=>getInt64);
parcelHelpers.export(exports, "setInt64LittleEndian", ()=>setInt64LittleEndian);
parcelHelpers.export(exports, "setInt64BigEndian", ()=>setInt64BigEndian);
parcelHelpers.export(exports, "setInt64", ()=>setInt64);
function getInt64LittleEndian(buffer, offset) {
    return BigInt(buffer[offset]) | BigInt(buffer[offset + 1]) << 8n | BigInt(buffer[offset + 2]) << 16n | BigInt(buffer[offset + 3]) << 24n | BigInt(buffer[offset + 4]) << 32n | BigInt(buffer[offset + 5]) << 40n | BigInt(buffer[offset + 6]) << 48n | BigInt(buffer[offset + 7] << 24) << 32n;
}
function getInt64BigEndian(buffer, offset) {
    return BigInt(buffer[offset] << 24) << 32n | BigInt(buffer[offset + 1]) << 48n | BigInt(buffer[offset + 2]) << 40n | BigInt(buffer[offset + 3]) << 32n | BigInt(buffer[offset + 4]) << 24n | BigInt(buffer[offset + 5]) << 16n | BigInt(buffer[offset + 6]) << 8n | BigInt(buffer[offset + 7]);
}
function getInt64(buffer, offset, littleEndian) {
    return littleEndian ? BigInt(buffer[offset]) | BigInt(buffer[offset + 1]) << 8n | BigInt(buffer[offset + 2]) << 16n | BigInt(buffer[offset + 3]) << 24n | BigInt(buffer[offset + 4]) << 32n | BigInt(buffer[offset + 5]) << 40n | BigInt(buffer[offset + 6]) << 48n | BigInt(buffer[offset + 7] << 24) << 32n : BigInt(buffer[offset] << 24) << 32n | BigInt(buffer[offset + 1]) << 48n | BigInt(buffer[offset + 2]) << 40n | BigInt(buffer[offset + 3]) << 32n | BigInt(buffer[offset + 4]) << 24n | BigInt(buffer[offset + 5]) << 16n | BigInt(buffer[offset + 6]) << 8n | BigInt(buffer[offset + 7]);
}
function setInt64LittleEndian(buffer, offset, value) {
    buffer[offset] = Number(value & 0xffn);
    buffer[offset + 1] = Number(value >> 8n & 0xffn);
    buffer[offset + 2] = Number(value >> 16n & 0xffn);
    buffer[offset + 3] = Number(value >> 24n & 0xffn);
    buffer[offset + 4] = Number(value >> 32n & 0xffn);
    buffer[offset + 5] = Number(value >> 40n & 0xffn);
    buffer[offset + 6] = Number(value >> 48n & 0xffn);
    buffer[offset + 7] = Number(value >> 56n & 0xffn);
}
function setInt64BigEndian(buffer, offset, value) {
    buffer[offset] = Number(value >> 56n & 0xffn);
    buffer[offset + 1] = Number(value >> 48n & 0xffn);
    buffer[offset + 2] = Number(value >> 40n & 0xffn);
    buffer[offset + 3] = Number(value >> 32n & 0xffn);
    buffer[offset + 4] = Number(value >> 24n & 0xffn);
    buffer[offset + 5] = Number(value >> 16n & 0xffn);
    buffer[offset + 6] = Number(value >> 8n & 0xffn);
    buffer[offset + 7] = Number(value & 0xffn);
}
function setInt64(buffer, offset, value, littleEndian) {
    if (littleEndian) {
        buffer[offset] = Number(value & 0xffn);
        buffer[offset + 1] = Number(value >> 8n & 0xffn);
        buffer[offset + 2] = Number(value >> 16n & 0xffn);
        buffer[offset + 3] = Number(value >> 24n & 0xffn);
        buffer[offset + 4] = Number(value >> 32n & 0xffn);
        buffer[offset + 5] = Number(value >> 40n & 0xffn);
        buffer[offset + 6] = Number(value >> 48n & 0xffn);
        buffer[offset + 7] = Number(value >> 56n & 0xffn);
    } else {
        buffer[offset] = Number(value >> 56n & 0xffn);
        buffer[offset + 1] = Number(value >> 48n & 0xffn);
        buffer[offset + 2] = Number(value >> 40n & 0xffn);
        buffer[offset + 3] = Number(value >> 32n & 0xffn);
        buffer[offset + 4] = Number(value >> 24n & 0xffn);
        buffer[offset + 5] = Number(value >> 16n & 0xffn);
        buffer[offset + 6] = Number(value >> 8n & 0xffn);
        buffer[offset + 7] = Number(value & 0xffn);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1iZK5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getInt8", ()=>getInt8);
function getInt8(buffer, offset) {
    return buffer[offset] << 24 >> 24;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkAga":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUint16LittleEndian", ()=>getUint16LittleEndian);
parcelHelpers.export(exports, "getUint16BigEndian", ()=>getUint16BigEndian);
parcelHelpers.export(exports, "getUint16", ()=>getUint16);
parcelHelpers.export(exports, "setUint16LittleEndian", ()=>setUint16LittleEndian);
parcelHelpers.export(exports, "setUint16BigEndian", ()=>setUint16BigEndian);
parcelHelpers.export(exports, "setUint16", ()=>setUint16);
function getUint16LittleEndian(buffer, offset) {
    return buffer[offset] | buffer[offset + 1] << 8;
}
function getUint16BigEndian(buffer, offset) {
    return buffer[offset] << 8 | buffer[offset + 1];
}
function getUint16(buffer, offset, littleEndian) {
    return littleEndian ? buffer[offset] | buffer[offset + 1] << 8 : buffer[offset + 1] | buffer[offset] << 8;
}
function setUint16LittleEndian(buffer, offset, value) {
    buffer[offset] = value;
    buffer[offset + 1] = value >> 8;
}
function setUint16BigEndian(buffer, offset, value) {
    buffer[offset] = value >> 8;
    buffer[offset + 1] = value;
}
function setUint16(buffer, offset, value, littleEndian) {
    if (littleEndian) {
        buffer[offset] = value;
        buffer[offset + 1] = value >> 8;
    } else {
        buffer[offset] = value >> 8;
        buffer[offset + 1] = value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7DyAK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUint32LittleEndian", ()=>getUint32LittleEndian);
parcelHelpers.export(exports, "getUint32BigEndian", ()=>getUint32BigEndian);
parcelHelpers.export(exports, "getUint32", ()=>getUint32);
parcelHelpers.export(exports, "setUint32LittleEndian", ()=>setUint32LittleEndian);
parcelHelpers.export(exports, "setUint32BigEndian", ()=>setUint32BigEndian);
parcelHelpers.export(exports, "setUint32", ()=>setUint32);
function getUint32LittleEndian(buffer, offset) {
    return (buffer[offset] | buffer[offset + 1] << 8 | buffer[offset + 2] << 16 | buffer[offset + 3] << 24) >>> 0;
}
function getUint32BigEndian(buffer, offset) {
    return (buffer[offset] << 24 | buffer[offset + 1] << 16 | buffer[offset + 2] << 8 | buffer[offset + 3]) >>> 0;
}
function getUint32(buffer, offset, littleEndian) {
    return littleEndian ? (buffer[offset] | buffer[offset + 1] << 8 | buffer[offset + 2] << 16 | buffer[offset + 3] << 24) >>> 0 : (buffer[offset] << 24 | buffer[offset + 1] << 16 | buffer[offset + 2] << 8 | buffer[offset + 3]) >>> 0;
}
function setUint32LittleEndian(buffer, offset, value) {
    buffer[offset] = value;
    buffer[offset + 1] = value >> 8;
    buffer[offset + 2] = value >> 16;
    buffer[offset + 3] = value >> 24;
}
function setUint32BigEndian(buffer, offset, value) {
    buffer[offset] = value >> 24;
    buffer[offset + 1] = value >> 16;
    buffer[offset + 2] = value >> 8;
    buffer[offset + 3] = value;
}
function setUint32(buffer, offset, value, littleEndian) {
    if (littleEndian) {
        buffer[offset] = value;
        buffer[offset + 1] = value >> 8;
        buffer[offset + 2] = value >> 16;
        buffer[offset + 3] = value >> 24;
    } else {
        buffer[offset] = value >> 24;
        buffer[offset + 1] = value >> 16;
        buffer[offset + 2] = value >> 8;
        buffer[offset + 3] = value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jbIIm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUint64LittleEndian", ()=>getUint64LittleEndian);
parcelHelpers.export(exports, "getUint64BigEndian", ()=>getUint64BigEndian);
parcelHelpers.export(exports, "getUint64", ()=>getUint64);
parcelHelpers.export(exports, "setUint64LittleEndian", ()=>setUint64LittleEndian);
parcelHelpers.export(exports, "setUint64BigEndian", ()=>setUint64BigEndian);
parcelHelpers.export(exports, "setUint64", ()=>setUint64);
function getUint64LittleEndian(buffer, offset) {
    return BigInt(buffer[offset]) | BigInt(buffer[offset + 1]) << 8n | BigInt(buffer[offset + 2]) << 16n | BigInt(buffer[offset + 3]) << 24n | BigInt(buffer[offset + 4]) << 32n | BigInt(buffer[offset + 5]) << 40n | BigInt(buffer[offset + 6]) << 48n | BigInt(buffer[offset + 7]) << 56n;
}
function getUint64BigEndian(buffer, offset) {
    return BigInt(buffer[offset]) << 56n | BigInt(buffer[offset + 1]) << 48n | BigInt(buffer[offset + 2]) << 40n | BigInt(buffer[offset + 3]) << 32n | BigInt(buffer[offset + 4]) << 24n | BigInt(buffer[offset + 5]) << 16n | BigInt(buffer[offset + 6]) << 8n | BigInt(buffer[offset + 7]);
}
function getUint64(buffer, offset, littleEndian) {
    return littleEndian ? BigInt(buffer[offset]) | BigInt(buffer[offset + 1]) << 8n | BigInt(buffer[offset + 2]) << 16n | BigInt(buffer[offset + 3]) << 24n | BigInt(buffer[offset + 4]) << 32n | BigInt(buffer[offset + 5]) << 40n | BigInt(buffer[offset + 6]) << 48n | BigInt(buffer[offset + 7]) << 56n : BigInt(buffer[offset]) << 56n | BigInt(buffer[offset + 1]) << 48n | BigInt(buffer[offset + 2]) << 40n | BigInt(buffer[offset + 3]) << 32n | BigInt(buffer[offset + 4]) << 24n | BigInt(buffer[offset + 5]) << 16n | BigInt(buffer[offset + 6]) << 8n | BigInt(buffer[offset + 7]);
}
function setUint64LittleEndian(buffer, offset, value) {
    buffer[offset] = Number(value & 0xffn);
    buffer[offset + 1] = Number(value >> 8n & 0xffn);
    buffer[offset + 2] = Number(value >> 16n & 0xffn);
    buffer[offset + 3] = Number(value >> 24n & 0xffn);
    buffer[offset + 4] = Number(value >> 32n & 0xffn);
    buffer[offset + 5] = Number(value >> 40n & 0xffn);
    buffer[offset + 6] = Number(value >> 48n & 0xffn);
    buffer[offset + 7] = Number(value >> 56n & 0xffn);
}
function setUint64BigEndian(buffer, offset, value) {
    buffer[offset] = Number(value >> 56n & 0xffn);
    buffer[offset + 1] = Number(value >> 48n & 0xffn);
    buffer[offset + 2] = Number(value >> 40n & 0xffn);
    buffer[offset + 3] = Number(value >> 32n & 0xffn);
    buffer[offset + 4] = Number(value >> 24n & 0xffn);
    buffer[offset + 5] = Number(value >> 16n & 0xffn);
    buffer[offset + 6] = Number(value >> 8n & 0xffn);
    buffer[offset + 7] = Number(value & 0xffn);
}
function setUint64(buffer, offset, value, littleEndian) {
    if (littleEndian) {
        buffer[offset] = Number(value & 0xffn);
        buffer[offset + 1] = Number(value >> 8n & 0xffn);
        buffer[offset + 2] = Number(value >> 16n & 0xffn);
        buffer[offset + 3] = Number(value >> 24n & 0xffn);
        buffer[offset + 4] = Number(value >> 32n & 0xffn);
        buffer[offset + 5] = Number(value >> 40n & 0xffn);
        buffer[offset + 6] = Number(value >> 48n & 0xffn);
        buffer[offset + 7] = Number(value >> 56n & 0xffn);
    } else {
        buffer[offset] = Number(value >> 56n & 0xffn);
        buffer[offset + 1] = Number(value >> 48n & 0xffn);
        buffer[offset + 2] = Number(value >> 40n & 0xffn);
        buffer[offset + 3] = Number(value >> 32n & 0xffn);
        buffer[offset + 4] = Number(value >> 24n & 0xffn);
        buffer[offset + 5] = Number(value >> 16n & 0xffn);
        buffer[offset + 6] = Number(value >> 8n & 0xffn);
        buffer[offset + 7] = Number(value & 0xffn);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"71cwM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseJs = require("./base.js");
parcelHelpers.exportAll(_baseJs, exports);
var _fixedLengthJs = require("./fixed-length.js");
parcelHelpers.exportAll(_fixedLengthJs, exports);
var _variableLengthJs = require("./variable-length.js");
parcelHelpers.exportAll(_variableLengthJs, exports);

},{"./base.js":"6JzcD","./fixed-length.js":"igedL","./variable-length.js":"dsEU1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6JzcD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A converter for buffer-like fields.
 * It converts `Uint8Array`s to custom-typed values when deserializing,
 * and convert values back to `Uint8Array`s when serializing.
 *
 * @template TValue The type of the value that the converter converts to/from `Uint8Array`.
 * @template TTypeScriptType Optionally another type to refine `TValue`.
 * For example, `TValue` is `string`, and `TTypeScriptType` is `"foo" | "bar"`.
 * `TValue` is specified by the developer when creating an converter implementation,
 * `TTypeScriptType` is specified by the user when creating a field.
 */ parcelHelpers.export(exports, "BufferFieldConverter", ()=>BufferFieldConverter);
/** An identity converter, doesn't convert to anything else. */ parcelHelpers.export(exports, "Uint8ArrayBufferFieldConverter", ()=>Uint8ArrayBufferFieldConverter);
/** An `BufferFieldSubType` that converts between `Uint8Array` and `string` */ parcelHelpers.export(exports, "StringBufferFieldConverter", ()=>StringBufferFieldConverter);
parcelHelpers.export(exports, "EMPTY_UINT8_ARRAY", ()=>EMPTY_UINT8_ARRAY);
parcelHelpers.export(exports, "BufferLikeFieldDefinition", ()=>BufferLikeFieldDefinition);
parcelHelpers.export(exports, "BufferLikeFieldValue", ()=>BufferLikeFieldValue);
var _indexJs = require("../../basic/index.js");
var _syncPromiseJs = require("../../sync-promise.js");
var _utilsJs = require("../../utils.js");
class BufferFieldConverter {
    TTypeScriptType;
}
class Uint8ArrayBufferFieldConverter extends BufferFieldConverter {
    static Instance = new Uint8ArrayBufferFieldConverter();
    constructor(){
        super();
    }
    toBuffer(value) {
        return value;
    }
    toValue(buffer) {
        return buffer;
    }
    getSize(value) {
        return value.length;
    }
}
class StringBufferFieldConverter extends BufferFieldConverter {
    static Instance = new StringBufferFieldConverter();
    toBuffer(value) {
        return (0, _utilsJs.encodeUtf8)(value);
    }
    toValue(array) {
        return (0, _utilsJs.decodeUtf8)(array);
    }
    getSize() {
        // See the note in `BufferFieldConverter.getSize`
        return undefined;
    }
}
const EMPTY_UINT8_ARRAY = new Uint8Array(0);
class BufferLikeFieldDefinition extends (0, _indexJs.StructFieldDefinition) {
    converter;
    TTypeScriptType;
    constructor(converter, options){
        super(options);
        this.converter = converter;
    }
    getDeserializeSize(struct) {
        return this.getSize();
    }
    /**
     * When implemented in derived classes, creates a `StructFieldValue` for the current field definition.
     */ create(options, struct, value, array) {
        return new BufferLikeFieldValue(this, options, struct, value, array);
    }
    deserialize(options, stream, struct) {
        return (0, _syncPromiseJs.SyncPromise).try(()=>{
            const size = this.getDeserializeSize(struct);
            if (size === 0) return EMPTY_UINT8_ARRAY;
            else return stream.readExactly(size);
        }).then((array)=>{
            const value = this.converter.toValue(array);
            return this.create(options, struct, value, array);
        }).valueOrPromise();
    }
}
class BufferLikeFieldValue extends (0, _indexJs.StructFieldValue) {
    array;
    constructor(definition, options, struct, value, array){
        super(definition, options, struct, value);
        this.array = array;
    }
    set(value) {
        super.set(value);
        // When value changes, clear the cached `array`
        // It will be lazily calculated in `serialize()`
        this.array = undefined;
    }
    serialize(dataView, array, offset) {
        this.array ??= this.definition.converter.toBuffer(this.value);
        array.set(this.array, offset);
    }
}

},{"../../basic/index.js":"l1aNX","../../sync-promise.js":"lwaVK","../../utils.js":"b8cCl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b8cCl":[function(require,module,exports) {
/**
 * Returns a (fake) value of the given type.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "placeholder", ()=>placeholder);
parcelHelpers.export(exports, "encodeUtf8", ()=>encodeUtf8);
parcelHelpers.export(exports, "decodeUtf8", ()=>decodeUtf8);
function placeholder() {
    return undefined;
}
const { TextEncoder, TextDecoder } = globalThis;
const SharedEncoder = new TextEncoder();
const SharedDecoder = new TextDecoder();
function encodeUtf8(input) {
    return SharedEncoder.encode(input);
}
function decodeUtf8(buffer) {
    // `TextDecoder` has internal states in stream mode,
    // but this method is not for stream mode, so the instance can be reused
    return SharedDecoder.decode(buffer);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"igedL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FixedLengthBufferLikeFieldDefinition", ()=>FixedLengthBufferLikeFieldDefinition);
var _baseJs = require("./base.js");
class FixedLengthBufferLikeFieldDefinition extends (0, _baseJs.BufferLikeFieldDefinition) {
    getSize() {
        return this.options.length;
    }
}

},{"./base.js":"6JzcD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dsEU1":[function(require,module,exports) {
/* eslint-disable @typescript-eslint/no-unsafe-member-access */ /* eslint-disable @typescript-eslint/no-explicit-any */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VariableLengthBufferLikeFieldDefinition", ()=>VariableLengthBufferLikeFieldDefinition);
parcelHelpers.export(exports, "VariableLengthBufferLikeStructFieldValue", ()=>VariableLengthBufferLikeStructFieldValue);
parcelHelpers.export(exports, "VariableLengthBufferLikeFieldLengthValue", ()=>VariableLengthBufferLikeFieldLengthValue);
var _indexJs = require("../../basic/index.js");
var _baseJs = require("./base.js");
class VariableLengthBufferLikeFieldDefinition extends (0, _baseJs.BufferLikeFieldDefinition) {
    getSize() {
        return 0;
    }
    getDeserializeSize(struct) {
        let value = struct.value[this.options.lengthField];
        if (typeof value === "string") value = Number.parseInt(value, this.options.lengthFieldRadix ?? 10);
        return value;
    }
    create(options, struct, value, array) {
        return new VariableLengthBufferLikeStructFieldValue(this, options, struct, value, array);
    }
}
class VariableLengthBufferLikeStructFieldValue extends (0, _baseJs.BufferLikeFieldValue) {
    length;
    lengthFieldValue;
    constructor(definition, options, struct, value, array){
        super(definition, options, struct, value, array);
        if (array) this.length = array.length;
        // Patch the associated length field.
        const lengthField = this.definition.options.lengthField;
        const originalValue = struct.get(lengthField);
        this.lengthFieldValue = new VariableLengthBufferLikeFieldLengthValue(originalValue, this);
        struct.set(lengthField, this.lengthFieldValue);
    }
    #tryGetSize() {
        const length = this.definition.converter.getSize(this.value);
        if (length !== undefined && length < 0) throw new Error("Invalid length");
        return length;
    }
    getSize() {
        if (this.length === undefined) // first try to get the size from the converter
        this.length = this.#tryGetSize();
        if (this.length === undefined) {
            // The converter doesn't know the size, so convert the value to a buffer to get its size
            this.array = this.definition.converter.toBuffer(this.value);
            this.length = this.array.length;
        }
        return this.length;
    }
    set(value) {
        super.set(value);
        this.array = undefined;
        this.length = undefined;
    }
}
class VariableLengthBufferLikeFieldLengthValue extends (0, _indexJs.StructFieldValue) {
    originalValue;
    bufferValue;
    constructor(originalValue, bufferValue){
        super(originalValue.definition, originalValue.options, originalValue.struct, 0);
        this.originalValue = originalValue;
        this.bufferValue = bufferValue;
    }
    getSize() {
        return this.originalValue.getSize();
    }
    get() {
        let value = this.bufferValue.getSize();
        const originalValue = this.originalValue.get();
        if (typeof originalValue === "string") value = value.toString(this.bufferValue.definition.options.lengthFieldRadix ?? 10);
        return value;
    }
    set() {
    // Ignore setting
    // It will always be in sync with the buffer size
    }
    serialize(dataView, array, offset) {
        this.originalValue.set(this.get());
        this.originalValue.serialize(dataView, array, offset);
    }
}

},{"../../basic/index.js":"l1aNX","./base.js":"6JzcD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"egjs5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NumberFieldVariant", ()=>NumberFieldVariant);
parcelHelpers.export(exports, "NumberFieldDefinition", ()=>NumberFieldDefinition);
parcelHelpers.export(exports, "NumberFieldValue", ()=>NumberFieldValue);
var _noDataView = require("@yume-chan/no-data-view");
var _indexJs = require("../basic/index.js");
var _syncPromiseJs = require("../sync-promise.js");
var NumberFieldVariant;
(function(NumberFieldVariant) {
    NumberFieldVariant.Uint8 = {
        signed: false,
        size: 1,
        deserialize (array) {
            return array[0];
        },
        serialize (dataView, offset, value) {
            dataView.setUint8(offset, value);
        }
    };
    NumberFieldVariant.Int8 = {
        signed: true,
        size: 1,
        deserialize (array) {
            return (0, _noDataView.getInt8)(array, 0);
        },
        serialize (dataView, offset, value) {
            dataView.setInt8(offset, value);
        }
    };
    NumberFieldVariant.Uint16 = {
        signed: false,
        size: 2,
        deserialize (array, littleEndian) {
            // PERF: Creating many `DataView`s over small buffers is 90% slower
            // than this. Even if the `DataView` is cached, `DataView#getUint16`
            // is still 1% slower than this.
            return (0, _noDataView.getUint16)(array, 0, littleEndian);
        },
        serialize (dataView, offset, value, littleEndian) {
            dataView.setUint16(offset, value, littleEndian);
        }
    };
    NumberFieldVariant.Int16 = {
        signed: true,
        size: 2,
        deserialize (array, littleEndian) {
            return (0, _noDataView.getInt16)(array, 0, littleEndian);
        },
        serialize (dataView, offset, value, littleEndian) {
            dataView.setInt16(offset, value, littleEndian);
        }
    };
    NumberFieldVariant.Uint32 = {
        signed: false,
        size: 4,
        deserialize (array, littleEndian) {
            return (0, _noDataView.getUint32)(array, 0, littleEndian);
        },
        serialize (dataView, offset, value, littleEndian) {
            dataView.setUint32(offset, value, littleEndian);
        }
    };
    NumberFieldVariant.Int32 = {
        signed: true,
        size: 4,
        deserialize (array, littleEndian) {
            return (0, _noDataView.getInt32)(array, 0, littleEndian);
        },
        serialize (dataView, offset, value, littleEndian) {
            dataView.setInt32(offset, value, littleEndian);
        }
    };
})(NumberFieldVariant || (NumberFieldVariant = {}));
class NumberFieldDefinition extends (0, _indexJs.StructFieldDefinition) {
    variant;
    constructor(variant, typescriptType){
        super();
        this.variant = variant;
    }
    getSize() {
        return this.variant.size;
    }
    create(options, struct, value) {
        return new NumberFieldValue(this, options, struct, value);
    }
    deserialize(options, stream, struct) {
        return (0, _syncPromiseJs.SyncPromise).try(()=>{
            return stream.readExactly(this.getSize());
        }).then((array)=>{
            const value = this.variant.deserialize(array, options.littleEndian);
            return this.create(options, struct, value);
        }).valueOrPromise();
    }
}
class NumberFieldValue extends (0, _indexJs.StructFieldValue) {
    serialize(dataView, array, offset) {
        this.definition.variant.serialize(dataView, offset, this.value, this.options.littleEndian);
    }
}

},{"@yume-chan/no-data-view":"iBcsB","../basic/index.js":"l1aNX","../sync-promise.js":"lwaVK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bFTAU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BufferedReadableStream", ()=>BufferedReadableStream);
var _struct = require("@yume-chan/struct");
var _pushReadableJs = require("./push-readable.js");
const NOOP = ()=>{
// no-op
};
class BufferedReadableStream {
    #buffered;
    #bufferedOffset = 0;
    #bufferedLength = 0;
    #position = 0;
    get position() {
        return this.#position;
    }
    stream;
    reader;
    constructor(stream){
        this.stream = stream;
        this.reader = stream.getReader();
    }
    async #readSource() {
        const { done, value } = await this.reader.read();
        if (done) throw new (0, _struct.ExactReadableEndedError)();
        return value;
    }
    async #readAsync(length, initial) {
        let result;
        let index;
        if (initial) {
            result = new Uint8Array(length);
            result.set(initial);
            index = initial.length;
            length -= initial.length;
        } else {
            const array = await this.#readSource();
            if (array.length === length) {
                this.#position += length;
                return array;
            }
            if (array.length > length) {
                this.#buffered = array;
                this.#bufferedOffset = length;
                this.#bufferedLength = array.length - length;
                this.#position += length;
                return array.subarray(0, length);
            }
            result = new Uint8Array(length);
            result.set(array);
            index = array.length;
            length -= array.length;
            this.#position += array.length;
        }
        while(length > 0){
            const array = await this.#readSource();
            if (array.length === length) {
                result.set(array, index);
                this.#position += length;
                return result;
            }
            if (array.length > length) {
                this.#buffered = array;
                this.#bufferedOffset = length;
                this.#bufferedLength = array.length - length;
                result.set(array.subarray(0, length), index);
                this.#position += length;
                return result;
            }
            result.set(array, index);
            index += array.length;
            length -= array.length;
            this.#position += array.length;
        }
        return result;
    }
    /**
     *
     * @param length
     * @returns
     */ readExactly(length) {
        // PERF: Add a synchronous path for reading from internal buffer
        if (this.#buffered) {
            const array = this.#buffered;
            const offset = this.#bufferedOffset;
            if (this.#bufferedLength > length) {
                // PERF: `subarray` is slow
                // don't use it until absolutely necessary
                this.#bufferedOffset += length;
                this.#bufferedLength -= length;
                this.#position += length;
                return array.subarray(offset, offset + length);
            }
            this.#buffered = undefined;
            this.#bufferedLength = 0;
            this.#bufferedOffset = 0;
            this.#position += array.length - offset;
            return this.#readAsync(length, array.subarray(offset));
        }
        return this.#readAsync(length);
    }
    /**
     * Return a readable stream with unconsumed data (if any) and
     * all data from the wrapped stream.
     * @returns A `ReadableStream`
     */ release() {
        if (this.#bufferedLength > 0) return new (0, _pushReadableJs.PushReadableStream)(async (controller)=>{
            // Put the remaining data back to the stream
            const buffered = this.#buffered.subarray(this.#bufferedOffset);
            await controller.enqueue(buffered);
            controller.abortSignal.addEventListener("abort", ()=>{
                // NOOP: the reader might already be released
                this.reader.cancel().catch(NOOP);
            });
            // Manually pipe the stream
            while(true){
                const { done, value } = await this.reader.read();
                if (done) return;
                else await controller.enqueue(value);
            }
        });
        else {
            // Simply release the reader and return the stream
            this.reader.releaseLock();
            return this.stream;
        }
    }
    async cancel(reason) {
        await this.reader.cancel(reason);
    }
}

},{"@yume-chan/struct":"bhoSk","./push-readable.js":"iaOxQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iaOxQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PushReadableStream", ()=>PushReadableStream);
var _async = require("@yume-chan/async");
var _streamJs = require("./stream.js");
class PushReadableStream extends (0, _streamJs.ReadableStream) {
    #zeroHighWaterMarkAllowEnqueue = false;
    /**
     * Create a new `PushReadableStream` from a source.
     *
     * @param source If `source` returns a `Promise`, the stream will be closed
     * when the `Promise` is resolved, and be errored when the `Promise` is rejected.
     * @param strategy
     */ constructor(source, strategy){
        let waterMarkLow;
        const abortController = new (0, _streamJs.AbortController)();
        super({
            start: async (controller)=>{
                await Promise.resolve();
                const result = source({
                    abortSignal: abortController.signal,
                    enqueue: async (chunk)=>{
                        if (abortController.signal.aborted) // If the stream is already cancelled,
                        // throw immediately.
                        throw abortController.signal.reason;
                        if (controller.desiredSize === null) {
                            // `desiredSize` being `null` means the stream is in error state,
                            // `controller.enqueue` will throw an error for us.
                            controller.enqueue(chunk);
                            return;
                        }
                        if (this.#zeroHighWaterMarkAllowEnqueue) {
                            this.#zeroHighWaterMarkAllowEnqueue = false;
                            controller.enqueue(chunk);
                            return;
                        }
                        if (controller.desiredSize <= 0) {
                            waterMarkLow = new (0, _async.PromiseResolver)();
                            await waterMarkLow.promise;
                        }
                        // `controller.enqueue` will throw error for us
                        // if the stream is already errored.
                        controller.enqueue(chunk);
                    },
                    close () {
                        controller.close();
                    },
                    error (e) {
                        controller.error(e);
                    }
                });
                if (result && "then" in result) result.then(()=>{
                    try {
                        controller.close();
                    } catch (e) {
                    // controller already closed
                    }
                }, (e)=>{
                    controller.error(e);
                });
            },
            pull: ()=>{
                if (waterMarkLow) {
                    waterMarkLow.resolve();
                    return;
                }
                if (strategy?.highWaterMark === 0) this.#zeroHighWaterMarkAllowEnqueue = true;
            },
            cancel: (reason)=>{
                abortController.abort(reason);
                waterMarkLow?.reject(reason);
            }
        }, strategy);
    }
}

},{"@yume-chan/async":"dkY37","./stream.js":"66IZv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dkY37":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asyncOperationManager = require("./async-operation-manager");
parcelHelpers.exportAll(_asyncOperationManager, exports);
var _delay = require("./delay");
parcelHelpers.exportAll(_delay, exports);
var _promiseResolver = require("./promise-resolver");
parcelHelpers.exportAll(_promiseResolver, exports);

},{"./async-operation-manager":"2U0lC","./delay":"kAoLw","./promise-resolver":"brzFt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2U0lC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsyncOperationManager", ()=>AsyncOperationManager);
var _promiseResolver = require("./promise-resolver");
var AsyncOperationManager = function() {
    function AsyncOperationManager(startId) {
        if (startId === void 0) startId = 0;
        this.pendingResolvers = new Map();
        this.nextId = startId;
    }
    AsyncOperationManager.prototype.add = function() {
        var id = this.nextId++;
        var resolver = new (0, _promiseResolver.PromiseResolver)();
        this.pendingResolvers.set(id, resolver);
        return [
            id,
            resolver.promise
        ];
    };
    AsyncOperationManager.prototype.getResolver = function(id) {
        if (!this.pendingResolvers.has(id)) return null;
        var resolver = this.pendingResolvers.get(id);
        this.pendingResolvers.delete(id);
        return resolver;
    };
    AsyncOperationManager.prototype.resolve = function(id, result) {
        var resolver = this.getResolver(id);
        if (resolver !== null) {
            resolver.resolve(result);
            return true;
        }
        return false;
    };
    AsyncOperationManager.prototype.reject = function(id, reason) {
        var resolver = this.getResolver(id);
        if (resolver !== null) {
            resolver.reject(reason);
            return true;
        }
        return false;
    };
    return AsyncOperationManager;
}();

},{"./promise-resolver":"brzFt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"brzFt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PromiseResolver", ()=>PromiseResolver);
var PromiseResolver = function() {
    function PromiseResolver() {
        var _this = this;
        this._state = "running";
        this.resolve = function(value) {
            _this._resolve(value);
            _this._state = "resolved";
        };
        this.reject = function(reason) {
            _this._reject(reason);
            _this._state = "rejected";
        };
        this._promise = new Promise(function(resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
    }
    Object.defineProperty(PromiseResolver.prototype, "promise", {
        get: function() {
            return this._promise;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PromiseResolver.prototype, "state", {
        get: function() {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    return PromiseResolver;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kAoLw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "delay", ()=>delay);
function delay(time) {
    return new Promise(function(resolve) {
        globalThis.setTimeout(function() {
            return resolve();
        }, time);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"66IZv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbortController", ()=>AbortController);
parcelHelpers.export(exports, "ReadableStream", ()=>ReadableStream);
parcelHelpers.export(exports, "WritableStream", ()=>WritableStream);
parcelHelpers.export(exports, "TransformStream", ()=>TransformStream);
var _typesJs = require("./types.js");
parcelHelpers.exportAll(_typesJs, exports);
const Global = globalThis;
const AbortController = Global.AbortController;
const ReadableStream = Global.ReadableStream;
const WritableStream = Global.WritableStream;
const TransformStream = Global.TransformStream;

},{"./types.js":"ezGez","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ezGez":[function(require,module,exports) {
/// <reference lib="es2018.asynciterable" />
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iCJvF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// `TransformStream` only calls its `source.flush` method when its `readable` is being read.
// If the user want to use the `Promise` interface, the `flush` method will never be called,
// so the `PromiseResolver` will never be resolved.
// Thus we need to implement our own `TransformStream` using a `WritableStream` and a `ReadableStream`.
/**
 * A `TransformStream` that concatenates strings.
 *
 * Its `readable` is also a `Promise<string>`, so it's possible to `await` it to get the result.
 *
 * ```ts
 * const result: string = await readable.pipeThrough(new ConcatStringStream());
 * ```
 */ parcelHelpers.export(exports, "ConcatStringStream", ()=>ConcatStringStream);
/**
 * A `TransformStream` that concatenates `Uint8Array`s.
 *
 * If you want to decode the result as string,
 * prefer `.pipeThrough(new TextDecoderStream()).pipeThrough(new ConcatStringStream())`,
 * than `.pipeThough(new ConcatBufferStream()).pipeThrough(new TextDecoderStream())`,
 * because of JavaScript engine optimizations,
 * concatenating strings is faster than concatenating `Uint8Array`s.
 */ parcelHelpers.export(exports, "ConcatBufferStream", ()=>ConcatBufferStream);
var _async = require("@yume-chan/async");
var _struct = require("@yume-chan/struct");
var _streamJs = require("./stream.js");
class ConcatStringStream {
    // PERF: rope (concat strings) is faster than `[].join('')`
    #result = "";
    #resolver = new (0, _async.PromiseResolver)();
    #writable = new (0, _streamJs.WritableStream)({
        write: (chunk)=>{
            this.#result += chunk;
        },
        close: ()=>{
            this.#resolver.resolve(this.#result);
            this.#readableController.enqueue(this.#result);
            this.#readableController.close();
        },
        abort: (reason)=>{
            this.#resolver.reject(reason);
            this.#readableController.error(reason);
        }
    });
    get writable() {
        return this.#writable;
    }
    #readableController;
    #readable = new (0, _streamJs.ReadableStream)({
        start: (controller)=>{
            this.#readableController = controller;
        }
    });
    get readable() {
        return this.#readable;
    }
    constructor(){
        Object.defineProperties(this.#readable, {
            then: {
                get: ()=>this.#resolver.promise.then.bind(this.#resolver.promise)
            },
            catch: {
                get: ()=>this.#resolver.promise.catch.bind(this.#resolver.promise)
            },
            finally: {
                get: ()=>this.#resolver.promise.finally.bind(this.#resolver.promise)
            }
        });
    }
}
class ConcatBufferStream {
    #segments = [];
    #resolver = new (0, _async.PromiseResolver)();
    #writable = new (0, _streamJs.WritableStream)({
        write: (chunk)=>{
            this.#segments.push(chunk);
        },
        close: ()=>{
            let result;
            let offset = 0;
            switch(this.#segments.length){
                case 0:
                    result = (0, _struct.EMPTY_UINT8_ARRAY);
                    break;
                case 1:
                    result = this.#segments[0];
                    break;
                default:
                    result = new Uint8Array(this.#segments.reduce((prev, item)=>prev + item.length, 0));
                    for (const segment of this.#segments){
                        result.set(segment, offset);
                        offset += segment.length;
                    }
                    break;
            }
            this.#resolver.resolve(result);
            this.#readableController.enqueue(result);
            this.#readableController.close();
        },
        abort: (reason)=>{
            this.#resolver.reject(reason);
            this.#readableController.error(reason);
        }
    });
    get writable() {
        return this.#writable;
    }
    #readableController;
    #readable = new (0, _streamJs.ReadableStream)({
        start: (controller)=>{
            this.#readableController = controller;
        }
    });
    get readable() {
        return this.#readable;
    }
    constructor(){
        Object.defineProperties(this.#readable, {
            then: {
                get: ()=>this.#resolver.promise.then.bind(this.#resolver.promise)
            },
            catch: {
                get: ()=>this.#resolver.promise.catch.bind(this.#resolver.promise)
            },
            finally: {
                get: ()=>this.#resolver.promise.finally.bind(this.#resolver.promise)
            }
        });
    }
}

},{"@yume-chan/async":"dkY37","@yume-chan/struct":"bhoSk","./stream.js":"66IZv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"liEeA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Consumable", ()=>Consumable);
var _async = require("@yume-chan/async");
var _streamJs = require("./stream.js");
var _taskJs = require("./task.js");
function isPromiseLike(value) {
    return typeof value === "object" && value !== null && "then" in value;
}
class Consumable {
    #task;
    #resolver;
    value;
    consumed;
    constructor(value){
        this.#task = (0, _taskJs.createTask)("Consumable");
        this.value = value;
        this.#resolver = new (0, _async.PromiseResolver)();
        this.consumed = this.#resolver.promise;
    }
    consume() {
        this.#resolver.resolve();
    }
    error(error) {
        this.#resolver.reject(error);
    }
    tryConsume(callback) {
        try {
            let result = this.#task.run(()=>callback(this.value));
            if (isPromiseLike(result)) result = result.then((value)=>{
                this.#resolver.resolve();
                return value;
            }, (e)=>{
                this.#resolver.reject(e);
                throw e;
            });
            else this.#resolver.resolve();
            return result;
        } catch (e) {
            this.#resolver.reject(e);
            throw e;
        }
    }
}
(function(Consumable) {
    class WritableStream extends (0, _streamJs.WritableStream) {
        static async write(writer, value) {
            const consumable = new Consumable(value);
            await writer.write(consumable);
            await consumable.consumed;
        }
        constructor(sink, strategy){
            let wrappedStrategy;
            if (strategy) {
                wrappedStrategy = {};
                if ("highWaterMark" in strategy) wrappedStrategy.highWaterMark = strategy.highWaterMark;
                if ("size" in strategy) wrappedStrategy.size = (chunk)=>{
                    return strategy.size(chunk instanceof Consumable ? chunk.value : chunk);
                };
            }
            super({
                start (controller) {
                    return sink.start?.(controller);
                },
                async write (chunk, controller) {
                    await chunk.tryConsume((chunk)=>sink.write?.(chunk, controller));
                },
                abort (reason) {
                    return sink.abort?.(reason);
                },
                close () {
                    return sink.close?.();
                }
            }, wrappedStrategy);
        }
    }
    Consumable.WritableStream = WritableStream;
    class ReadableStream extends (0, _streamJs.ReadableStream) {
        static async enqueue(controller, chunk) {
            const output = new Consumable(chunk);
            controller.enqueue(output);
            await output.consumed;
        }
        constructor(source, strategy){
            let wrappedController;
            let wrappedStrategy;
            if (strategy) {
                wrappedStrategy = {};
                if ("highWaterMark" in strategy) wrappedStrategy.highWaterMark = strategy.highWaterMark;
                if ("size" in strategy) wrappedStrategy.size = (chunk)=>{
                    return strategy.size(chunk.value);
                };
            }
            super({
                async start (controller) {
                    wrappedController = {
                        async enqueue (chunk) {
                            await ReadableStream.enqueue(controller, chunk);
                        },
                        close () {
                            controller.close();
                        },
                        error (reason) {
                            controller.error(reason);
                        }
                    };
                    await source.start?.(wrappedController);
                },
                async pull () {
                    await source.pull?.(wrappedController);
                },
                async cancel (reason) {
                    await source.cancel?.(reason);
                }
            }, wrappedStrategy);
        }
    }
    Consumable.ReadableStream = ReadableStream;
})(Consumable || (Consumable = {}));

},{"@yume-chan/async":"dkY37","./stream.js":"66IZv","./task.js":"l2xy4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l2xy4":[function(require,module,exports) {
// `createTask` allows browser DevTools to track the call stack across async boundaries.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTask", ()=>createTask);
const { console } = globalThis;
const createTask = console?.createTask?.bind(console) ?? (()=>({
        run (callback) {
            return callback();
        }
    }));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Pw6u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Splits or combines buffers to specified size.
 */ parcelHelpers.export(exports, "BufferCombiner", ()=>BufferCombiner);
parcelHelpers.export(exports, "DistributionStream", ()=>DistributionStream);
var _consumableJs = require("./consumable.js");
var _maybeConsumableJs = require("./maybe-consumable.js");
var _streamJs = require("./stream.js");
class BufferCombiner {
    #capacity;
    #buffer;
    #offset;
    #available;
    constructor(size){
        this.#capacity = size;
        this.#buffer = new Uint8Array(size);
        this.#offset = 0;
        this.#available = size;
    }
    /**
     * Pushes data to the combiner.
     * @param data The input data to be split or combined.
     * @returns
     * A generator that yields buffers of specified size.
     * It may yield the same buffer multiple times, consume the data before calling `next`.
     */ *push(data) {
        let offset = 0;
        let available = data.length;
        if (this.#offset !== 0) {
            if (available >= this.#available) {
                this.#buffer.set(data.subarray(0, this.#available), this.#offset);
                offset += this.#available;
                available -= this.#available;
                yield this.#buffer;
                this.#offset = 0;
                this.#available = this.#capacity;
                if (available === 0) return;
            } else {
                this.#buffer.set(data, this.#offset);
                this.#offset += available;
                this.#available -= available;
                return;
            }
        }
        while(available >= this.#capacity){
            const end = offset + this.#capacity;
            yield data.subarray(offset, end);
            offset = end;
            available -= this.#capacity;
        }
        if (available > 0) {
            this.#buffer.set(data.subarray(offset), this.#offset);
            this.#offset += available;
            this.#available -= available;
        }
    }
    flush() {
        if (this.#offset === 0) return undefined;
        const output = this.#buffer.subarray(0, this.#offset);
        this.#offset = 0;
        this.#available = this.#capacity;
        return output;
    }
}
class DistributionStream extends (0, _streamJs.TransformStream) {
    constructor(size, combine = false){
        const combiner = combine ? new BufferCombiner(size) : undefined;
        super({
            async transform (chunk, controller) {
                await (0, _maybeConsumableJs.MaybeConsumable).tryConsume(chunk, async (chunk)=>{
                    if (combiner) for (const buffer of combiner.push(chunk))await (0, _consumableJs.Consumable).ReadableStream.enqueue(controller, buffer);
                    else {
                        let offset = 0;
                        let available = chunk.length;
                        while(available > 0){
                            const end = offset + size;
                            await (0, _consumableJs.Consumable).ReadableStream.enqueue(controller, chunk.subarray(offset, end));
                            offset = end;
                            available -= size;
                        }
                    }
                });
            },
            flush (controller) {
                if (combiner) {
                    const data = combiner.flush();
                    if (data) controller.enqueue(data);
                }
            }
        });
    }
}

},{"./consumable.js":"liEeA","./maybe-consumable.js":"lxx6O","./stream.js":"66IZv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxx6O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MaybeConsumable", ()=>MaybeConsumable);
var _consumableJs = require("./consumable.js");
var _streamJs = require("./stream.js");
var MaybeConsumable;
(function(MaybeConsumable) {
    function getValue(value) {
        return value instanceof (0, _consumableJs.Consumable) ? value.value : value;
    }
    MaybeConsumable.getValue = getValue;
    function tryConsume(value, callback) {
        if (value instanceof (0, _consumableJs.Consumable)) return value.tryConsume(callback);
        else return callback(value);
    }
    MaybeConsumable.tryConsume = tryConsume;
    class UnwrapStream extends (0, _streamJs.TransformStream) {
        constructor(){
            super({
                transform (chunk, controller) {
                    MaybeConsumable.tryConsume(chunk, (chunk)=>{
                        controller.enqueue(chunk);
                    });
                }
            });
        }
    }
    MaybeConsumable.UnwrapStream = UnwrapStream;
    class WritableStream extends (0, _streamJs.WritableStream) {
        constructor(sink, strategy){
            let wrappedStrategy;
            if (strategy) {
                wrappedStrategy = {};
                if ("highWaterMark" in strategy) wrappedStrategy.highWaterMark = strategy.highWaterMark;
                if ("size" in strategy) wrappedStrategy.size = (chunk)=>{
                    return strategy.size(chunk instanceof (0, _consumableJs.Consumable) ? chunk.value : chunk);
                };
            }
            super({
                start (controller) {
                    return sink.start?.(controller);
                },
                async write (chunk, controller) {
                    await MaybeConsumable.tryConsume(chunk, (chunk)=>sink.write?.(chunk, controller));
                },
                abort (reason) {
                    return sink.abort?.(reason);
                },
                close () {
                    return sink.close?.();
                }
            }, wrappedStrategy);
        }
    }
    MaybeConsumable.WritableStream = WritableStream;
})(MaybeConsumable || (MaybeConsumable = {}));

},{"./consumable.js":"liEeA","./stream.js":"66IZv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fehP3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A factory for creating a duplex stream.
 *
 * It can create multiple `ReadableStream`s and `WritableStream`s,
 * when any of them is closed, all other streams will be closed as well.
 */ parcelHelpers.export(exports, "DuplexStreamFactory", ()=>DuplexStreamFactory);
var _async = require("@yume-chan/async");
var _streamJs = require("./stream.js");
var _wrapReadableJs = require("./wrap-readable.js");
const NOOP = ()=>{
// no-op
};
class DuplexStreamFactory {
    #readableControllers = [];
    #writers = [];
    #writableClosed = false;
    get writableClosed() {
        return this.#writableClosed;
    }
    #closed = new (0, _async.PromiseResolver)();
    get closed() {
        return this.#closed.promise;
    }
    #options;
    constructor(options){
        this.#options = options ?? {};
    }
    wrapReadable(readable, strategy) {
        return new (0, _wrapReadableJs.WrapReadableStream)({
            start: (controller)=>{
                this.#readableControllers.push(controller);
                return readable;
            },
            cancel: async ()=>{
                // cancel means the local peer wants to close the connection.
                await this.close();
            },
            close: async ()=>{
                // stream end means the remote peer closed the connection first.
                await this.dispose();
            }
        }, strategy);
    }
    createWritable(stream) {
        const writer = stream.getWriter();
        this.#writers.push(writer);
        // `WritableStream` has no way to tell if the remote peer has closed the connection.
        // So it only triggers `close`.
        return new (0, _streamJs.WritableStream)({
            write: async (chunk)=>{
                await writer.write(chunk);
            },
            abort: async (reason)=>{
                await writer.abort(reason);
                await this.close();
            },
            close: async ()=>{
                // NOOP: the writer is already closed
                await writer.close().catch(NOOP);
                await this.close();
            }
        });
    }
    async close() {
        if (this.#writableClosed) return;
        this.#writableClosed = true;
        // Call `close` first, so it can still write data to `WritableStream`s.
        if (await this.#options.close?.() !== false) // `close` can return `false` to disable automatic `dispose`.
        await this.dispose();
        for (const writer of this.#writers)// NOOP: the writer is already closed
        writer.close().catch(NOOP);
    }
    async dispose() {
        this.#writableClosed = true;
        this.#closed.resolve();
        for (const controller of this.#readableControllers)try {
            controller.close();
        } catch  {
        // ignore
        }
        await this.#options.dispose?.();
    }
}

},{"@yume-chan/async":"dkY37","./stream.js":"66IZv","./wrap-readable.js":"jAOAp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jAOAp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This class has multiple usages:
 *
 * 1. Get notified when the stream is cancelled or closed.
 * 2. Synchronously create a `ReadableStream` by asynchronously return another `ReadableStream`.
 * 3. Convert native `ReadableStream`s to polyfilled ones so they can `pipe` between.
 */ parcelHelpers.export(exports, "WrapReadableStream", ()=>WrapReadableStream);
var _streamJs = require("./stream.js");
function getWrappedReadableStream(wrapper, controller) {
    if ("start" in wrapper) return wrapper.start(controller);
    else if (typeof wrapper === "function") return wrapper(controller);
    else // Can't use `wrapper instanceof ReadableStream`
    // Because we want to be compatible with any ReadableStream-like objects
    return wrapper;
}
class WrapReadableStream extends (0, _streamJs.ReadableStream) {
    readable;
    #reader;
    constructor(wrapper, strategy){
        super({
            start: async (controller)=>{
                // `start` is invoked before `ReadableStream`'s constructor finish,
                // so using `this` synchronously causes
                // "Must call super constructor in derived class before accessing 'this' or returning from derived constructor".
                // Queue a microtask to avoid this.
                await Promise.resolve();
                this.readable = await getWrappedReadableStream(wrapper, controller);
                this.#reader = this.readable.getReader();
            },
            pull: async (controller)=>{
                const result = await this.#reader.read();
                if (result.done) {
                    controller.close();
                    if ("close" in wrapper) await wrapper.close?.();
                } else controller.enqueue(result.value);
            },
            cancel: async (reason)=>{
                await this.#reader.cancel(reason);
                if ("cancel" in wrapper) await wrapper.cancel?.(reason);
            }
        }, strategy);
    }
}

},{"./stream.js":"66IZv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5twUP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextDecoderStream", ()=>TextDecoderStream);
parcelHelpers.export(exports, "TextEncoderStream", ()=>TextEncoderStream);
const Global = globalThis;
const TextDecoderStream = Global.TextDecoderStream;
const TextEncoderStream = Global.TextEncoderStream;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8jQVw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InspectStream", ()=>InspectStream);
var _streamJs = require("./stream.js");
class InspectStream extends (0, _streamJs.TransformStream) {
    constructor(callback){
        super({
            transform (chunk, controller) {
                callback(chunk);
                controller.enqueue(chunk);
            }
        });
    }
}

},{"./stream.js":"66IZv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"87EZx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Pipe `pair.readable` to `writable`, then returns `pair.writable`.
 *
 * This is the opposite of `ReadableStream#pipeThrough()`.
 *
 * @param writable The `WritableStream` to write to.
 * @param pair A `TransformStream` that converts chunks.
 * @returns `pair`'s `writable` stream.
 */ parcelHelpers.export(exports, "pipeFrom", ()=>pipeFrom);
var _streamJs = require("./stream.js");
function pipeFrom(writable, pair) {
    const writer = pair.writable.getWriter();
    const pipe = pair.readable.pipeTo(writable);
    return new (0, _streamJs.WritableStream)({
        async write (chunk) {
            await writer.write(chunk);
        },
        async close () {
            await writer.close();
            await pipe;
        }
    });
}

},{"./stream.js":"66IZv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwvTP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SplitStringStream", ()=>SplitStringStream);
var _streamJs = require("./stream.js");
function* split(input, separator) {
    let start = 0;
    while(true){
        const index = input.indexOf(separator, start);
        if (index === -1) return;
        const part = input.substring(start, index);
        yield part;
        start = index + 1;
    }
}
class SplitStringStream extends (0, _streamJs.TransformStream) {
    constructor(separator){
        super({
            transform (chunk, controller) {
                for (const part of split(chunk, separator))controller.enqueue(part);
            }
        });
    }
}

},{"./stream.js":"66IZv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8LcO8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StructDeserializeStream", ()=>StructDeserializeStream);
var _bufferedTransformJs = require("./buffered-transform.js");
class StructDeserializeStream extends (0, _bufferedTransformJs.BufferedTransformStream) {
    constructor(struct){
        super((stream)=>{
            return struct.deserialize(stream);
        });
    }
}

},{"./buffered-transform.js":"57EZc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2u9II":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StructSerializeStream", ()=>StructSerializeStream);
var _streamJs = require("./stream.js");
class StructSerializeStream extends (0, _streamJs.TransformStream) {
    constructor(struct){
        super({
            transform (chunk, controller) {
                controller.enqueue(struct.serialize(chunk));
            }
        });
    }
}

},{"./stream.js":"66IZv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9VevF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WrapWritableStream", ()=>WrapWritableStream);
var _streamJs = require("./stream.js");
async function getWrappedWritableStream(start) {
    if ("start" in start) return await start.start();
    else if (typeof start === "function") return await start();
    else // Can't use `wrapper instanceof WritableStream`
    // Because we want to be compatible with any WritableStream-like objects
    return start;
}
class WrapWritableStream extends (0, _streamJs.WritableStream) {
    writable;
    #writer;
    constructor(start){
        super({
            start: async ()=>{
                // `start` is invoked before `ReadableStream`'s constructor finish,
                // so using `this` synchronously causes
                // "Must call super constructor in derived class before accessing 'this' or returning from derived constructor".
                // Queue a microtask to avoid this.
                await Promise.resolve();
                this.writable = await getWrappedWritableStream(start);
                this.#writer = this.writable.getWriter();
            },
            write: async (chunk)=>{
                await this.#writer.write(chunk);
            },
            abort: async (reason)=>{
                await this.#writer.abort(reason);
                if (start !== this.writable && "close" in start) await start.close?.();
            },
            close: async ()=>{
                // Close the inner stream first.
                // Usually the inner stream is a logical sub-stream over the outer stream,
                // closing the outer stream first will make the inner stream incapable of
                // sending data in its `close` handler.
                await this.#writer.close();
                if (start !== this.writable && "close" in start) await start.close?.();
            }
        });
    }
    bePipedThroughFrom(transformer) {
        let promise;
        return new WrapWritableStream({
            start: ()=>{
                promise = transformer.readable.pipeTo(this);
                return transformer.writable;
            },
            async close () {
                await promise;
            }
        });
    }
}

},{"./stream.js":"66IZv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dz5d7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseJs = require("./base.js");
parcelHelpers.exportAll(_baseJs, exports);
var _framebufferJs = require("./framebuffer.js");
parcelHelpers.exportAll(_framebufferJs, exports);
var _powerJs = require("./power.js");
parcelHelpers.exportAll(_powerJs, exports);
var _reverseJs = require("./reverse.js");
parcelHelpers.exportAll(_reverseJs, exports);
var _indexJs = require("./subprocess/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var _indexJs1 = require("./sync/index.js");
parcelHelpers.exportAll(_indexJs1, exports);
var _tcpipJs = require("./tcpip.js");
parcelHelpers.exportAll(_tcpipJs, exports);

},{"./base.js":"cOyOA","./framebuffer.js":"o8fSR","./power.js":"lH77A","./reverse.js":"eYHXM","./subprocess/index.js":"9hCWq","./sync/index.js":"hnZ56","./tcpip.js":"j3VVS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cOyOA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbCommandBase", ()=>AdbCommandBase);
var _event = require("@yume-chan/event");
class AdbCommandBase extends (0, _event.AutoDisposable) {
    adb;
    constructor(adb){
        super();
        this.adb = adb;
    }
}

},{"@yume-chan/event":"ec3KT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ec3KT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _disposableJs = require("./disposable.js");
parcelHelpers.exportAll(_disposableJs, exports);
var _eventJs = require("./event.js");
parcelHelpers.exportAll(_eventJs, exports);
var _eventEmitterJs = require("./event-emitter.js");
parcelHelpers.exportAll(_eventEmitterJs, exports);
var _utilsJs = require("./utils.js");
parcelHelpers.exportAll(_utilsJs, exports);

},{"./disposable.js":"gkdr8","./event.js":"4tdsr","./event-emitter.js":"bp87f","./utils.js":"bMdau","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkdr8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AutoDisposable", ()=>AutoDisposable);
parcelHelpers.export(exports, "DisposableList", ()=>DisposableList);
class AutoDisposable {
    #disposables = [];
    constructor(){
        this.dispose = this.dispose.bind(this);
    }
    addDisposable(disposable) {
        this.#disposables.push(disposable);
        return disposable;
    }
    dispose() {
        for (const disposable of this.#disposables)disposable.dispose();
        this.#disposables = [];
    }
}
class DisposableList extends AutoDisposable {
    add(disposable) {
        return this.addDisposable(disposable);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4tdsr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bp87f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventEmitter", ()=>EventEmitter);
class EventEmitter {
    listeners = [];
    constructor(){
        this.event = this.event.bind(this);
    }
    addEventListener(info) {
        this.listeners.push(info);
        const remove = ()=>{
            const index = this.listeners.indexOf(info);
            if (index !== -1) this.listeners.splice(index, 1);
        };
        remove.dispose = remove;
        return remove;
    }
    event = (listener, thisArg, ...args)=>{
        const info = {
            listener: listener,
            thisArg,
            args
        };
        return this.addEventListener(info);
    };
    fire(e) {
        for (const info of this.listeners.slice())info.listener.apply(info.thisArg, [
            e,
            ...info.args
        ]);
    }
    dispose() {
        this.listeners.length = 0;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bMdau":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "once", ()=>once);
var _async = require("@yume-chan/async");
async function once(event) {
    const resolver = new (0, _async.PromiseResolver)();
    const dispose = event(resolver.resolve);
    const result = await resolver.promise;
    dispose();
    return result;
}

},{"@yume-chan/async":"dkY37","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"o8fSR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbFrameBufferV1", ()=>AdbFrameBufferV1);
parcelHelpers.export(exports, "AdbFrameBufferV2", ()=>AdbFrameBufferV2);
parcelHelpers.export(exports, "AdbFrameBufferError", ()=>AdbFrameBufferError);
parcelHelpers.export(exports, "AdbFrameBufferUnsupportedVersionError", ()=>AdbFrameBufferUnsupportedVersionError);
parcelHelpers.export(exports, "AdbFrameBufferForbiddenError", ()=>AdbFrameBufferForbiddenError);
parcelHelpers.export(exports, "framebuffer", ()=>framebuffer);
var _streamExtra = require("@yume-chan/stream-extra");
var _struct = require("@yume-chan/struct");
var _structDefault = parcelHelpers.interopDefault(_struct);
const Version = new (0, _structDefault.default)({
    littleEndian: true
}).uint32("version");
const AdbFrameBufferV1 = new (0, _structDefault.default)({
    littleEndian: true
}).uint32("bpp").uint32("size").uint32("width").uint32("height").uint32("red_offset").uint32("red_length").uint32("blue_offset").uint32("blue_length").uint32("green_offset").uint32("green_length").uint32("alpha_offset").uint32("alpha_length").uint8Array("data", {
    lengthField: "size"
});
const AdbFrameBufferV2 = new (0, _structDefault.default)({
    littleEndian: true
}).uint32("bpp").uint32("colorSpace").uint32("size").uint32("width").uint32("height").uint32("red_offset").uint32("red_length").uint32("blue_offset").uint32("blue_length").uint32("green_offset").uint32("green_length").uint32("alpha_offset").uint32("alpha_length").uint8Array("data", {
    lengthField: "size"
});
class AdbFrameBufferError extends Error {
    constructor(message, options){
        super(message, options);
    }
}
class AdbFrameBufferUnsupportedVersionError extends AdbFrameBufferError {
    constructor(version){
        super(`Unsupported FrameBuffer version ${version}`);
    }
}
class AdbFrameBufferForbiddenError extends AdbFrameBufferError {
    constructor(){
        super("FrameBuffer is disabled by current app");
    }
}
async function framebuffer(adb) {
    const socket = await adb.createSocket("framebuffer:");
    const stream = new (0, _streamExtra.BufferedReadableStream)(socket.readable);
    let version;
    try {
        ({ version } = await Version.deserialize(stream));
    } catch (e) {
        if (e instanceof (0, _struct.StructEmptyError)) throw new AdbFrameBufferForbiddenError();
        throw e;
    }
    switch(version){
        case 1:
            // TODO: AdbFrameBuffer: does all v1 responses uses the same color space? Add it so the command returns same format for all versions.
            return AdbFrameBufferV1.deserialize(stream);
        case 2:
            return AdbFrameBufferV2.deserialize(stream);
        default:
            throw new AdbFrameBufferUnsupportedVersionError(version);
    }
}

},{"@yume-chan/stream-extra":"jSEnK","@yume-chan/struct":"bhoSk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lH77A":[function(require,module,exports) {
// cspell: ignore bootloader
// cspell: ignore fastboot
// cspell: ignore keyevent
// cspell: ignore longpress
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbPower", ()=>AdbPower);
var _baseJs = require("./base.js");
class AdbPower extends (0, _baseJs.AdbCommandBase) {
    reboot(mode = "") {
        return this.adb.createSocketAndWait(`reboot:${mode}`);
    }
    bootloader() {
        return this.reboot("bootloader");
    }
    fastboot() {
        return this.reboot("fastboot");
    }
    recovery() {
        return this.reboot("recovery");
    }
    sideload() {
        return this.reboot("sideload");
    }
    /**
     * Reboot to Qualcomm Emergency Download (EDL) Mode.
     *
     * Only works on some Qualcomm devices.
     */ qualcommEdlMode() {
        return this.reboot("edl");
    }
    powerOff() {
        return this.adb.subprocess.spawnAndWaitLegacy([
            "reboot",
            "-p"
        ]);
    }
    powerButton(longPress = false) {
        const args = [
            "input",
            "keyevent"
        ];
        if (longPress) args.push("--longpress");
        args.push("POWER");
        return this.adb.subprocess.spawnAndWaitLegacy(args);
    }
    /**
     * Reboot to Samsung Odin download mode.
     *
     * Only works on Samsung devices.
     */ samsungOdin() {
        return this.reboot("download");
    }
}

},{"./base.js":"cOyOA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eYHXM":[function(require,module,exports) {
// cspell: ignore killforward
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbReverseError", ()=>AdbReverseError);
parcelHelpers.export(exports, "AdbReverseNotSupportedError", ()=>AdbReverseNotSupportedError);
parcelHelpers.export(exports, "AdbReverseCommand", ()=>AdbReverseCommand);
var _event = require("@yume-chan/event");
var _streamExtra = require("@yume-chan/stream-extra");
var _struct = require("@yume-chan/struct");
var _structDefault = parcelHelpers.interopDefault(_struct);
var _indexJs = require("../utils/index.js");
const AdbReverseStringResponse = new (0, _structDefault.default)().string("length", {
    length: 4
}).string("content", {
    lengthField: "length",
    lengthFieldRadix: 16
});
class AdbReverseError extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class AdbReverseNotSupportedError extends AdbReverseError {
    constructor(){
        super("ADB reverse tunnel is not supported on this device when connected wirelessly.");
    }
}
const AdbReverseErrorResponse = new (0, _structDefault.default)().concat(AdbReverseStringResponse).postDeserialize((value)=>{
    // https://issuetracker.google.com/issues/37066218
    // ADB on Android <9 can't create reverse tunnels when connected wirelessly (ADB over Wi-Fi),
    // and returns this confusing "more than one device/emulator" error.
    if (value.content === "more than one device/emulator") throw new AdbReverseNotSupportedError();
    else throw new AdbReverseError(value.content);
});
// Like `hexToNumber`, it's much faster than first converting `buffer` to a string
function decimalToNumber(buffer) {
    let value = 0;
    for (const byte of buffer){
        // Like `parseInt`, return when it encounters a non-digit character
        if (byte < 48 || byte > 57) return value;
        value = value * 10 + byte - 48;
    }
    return value;
}
const OKAY = (0, _struct.encodeUtf8)("OKAY");
class AdbReverseCommand extends (0, _event.AutoDisposable) {
    adb;
    #deviceAddressToLocalAddress = new Map();
    constructor(adb){
        super();
        this.adb = adb;
    }
    async createBufferedStream(service) {
        const socket = await this.adb.createSocket(service);
        return new (0, _streamExtra.BufferedReadableStream)(socket.readable);
    }
    async sendRequest(service) {
        const stream = await this.createBufferedStream(service);
        const response = await stream.readExactly(4);
        if (!(0, _indexJs.sequenceEqual)(response, OKAY)) await AdbReverseErrorResponse.deserialize(stream);
        return stream;
    }
    async list() {
        const stream = await this.createBufferedStream("reverse:list-forward");
        const response = await AdbReverseStringResponse.deserialize(stream);
        return response.content.split("\n").filter((line)=>!!line).map((line)=>{
            const [deviceSerial, localName, remoteName] = line.split(" ");
            return {
                deviceSerial,
                localName,
                remoteName
            };
        });
    // No need to close the stream, device will close it
    }
    /**
     * Add an already existing reverse tunnel. Depends on the transport type, this may not do anything.
     * @param deviceAddress The address to be listened on device by ADB daemon. Or `tcp:0` to choose an available TCP port.
     * @param localAddress The address that listens on the local machine.
     * @returns `tcp:{ACTUAL_LISTENING_PORT}`, If `deviceAddress` is `tcp:0`; otherwise, `deviceAddress`.
     */ async addExternal(deviceAddress, localAddress) {
        const stream = await this.sendRequest(`reverse:forward:${deviceAddress};${localAddress}`);
        // `tcp:0` tells the device to pick an available port.
        // On Android >=8, device will respond with the selected port for all `tcp:` requests.
        if (deviceAddress.startsWith("tcp:")) {
            const position = stream.position;
            try {
                const length = (0, _indexJs.hexToNumber)(await stream.readExactly(4));
                const port = decimalToNumber(await stream.readExactly(length));
                deviceAddress = `tcp:${port}`;
            } catch (e) {
                if (e instanceof (0, _struct.ExactReadableEndedError) && stream.position === position) ;
                else throw e;
            }
        }
        return deviceAddress;
    }
    /**
     * @param deviceAddress The address to be listened on device by ADB daemon. Or `tcp:0` to choose an available TCP port.
     * @param handler A callback to handle incoming connections.
     * @param localAddressThe The address that listens on the local machine. May be `undefined` to let the transport choose an appropriate one.
     * @returns `tcp:{ACTUAL_LISTENING_PORT}`, If `deviceAddress` is `tcp:0`; otherwise, `deviceAddress`.
     * @throws {AdbReverseNotSupportedError} If ADB reverse tunnel is not supported on this device when connected wirelessly.
     * @throws {AdbReverseError} If ADB daemon returns an error.
     */ async add(deviceAddress, handler, localAddress) {
        localAddress = await this.adb.transport.addReverseTunnel(handler, localAddress);
        try {
            deviceAddress = await this.addExternal(deviceAddress, localAddress);
            this.#deviceAddressToLocalAddress.set(deviceAddress, localAddress);
            return deviceAddress;
        } catch (e) {
            await this.adb.transport.removeReverseTunnel(localAddress);
            throw e;
        }
    }
    async remove(deviceAddress) {
        const localAddress = this.#deviceAddressToLocalAddress.get(deviceAddress);
        if (localAddress) await this.adb.transport.removeReverseTunnel(localAddress);
        await this.sendRequest(`reverse:killforward:${deviceAddress}`);
    // No need to close the stream, device will close it
    }
    async removeAll() {
        await this.adb.transport.clearReverseTunnels();
        this.#deviceAddressToLocalAddress.clear();
        await this.sendRequest(`reverse:killforward-all`);
    // No need to close the stream, device will close it
    }
}

},{"@yume-chan/event":"ec3KT","@yume-chan/stream-extra":"jSEnK","@yume-chan/struct":"bhoSk","../utils/index.js":"9S5h7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9S5h7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decodeUtf8", ()=>(0, _struct.decodeUtf8));
parcelHelpers.export(exports, "encodeUtf8", ()=>(0, _struct.encodeUtf8));
var _struct = require("@yume-chan/struct");
var _autoResetEventJs = require("./auto-reset-event.js");
parcelHelpers.exportAll(_autoResetEventJs, exports);
var _base64Js = require("./base64.js");
parcelHelpers.exportAll(_base64Js, exports);
var _hexJs = require("./hex.js");
parcelHelpers.exportAll(_hexJs, exports);
var _noOpJs = require("./no-op.js");
parcelHelpers.exportAll(_noOpJs, exports);
var _sequenceEqualJs = require("./sequence-equal.js");
parcelHelpers.exportAll(_sequenceEqualJs, exports);

},{"@yume-chan/struct":"bhoSk","./auto-reset-event.js":"8WcjD","./base64.js":"0206A","./hex.js":"bZwaj","./no-op.js":"8jlK3","./sequence-equal.js":"cpscE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8WcjD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AutoResetEvent", ()=>AutoResetEvent);
var _async = require("@yume-chan/async");
class AutoResetEvent {
    #set;
    #queue = [];
    constructor(initialSet = false){
        this.#set = initialSet;
    }
    wait() {
        if (!this.#set) {
            this.#set = true;
            if (this.#queue.length === 0) return Promise.resolve();
        }
        const resolver = new (0, _async.PromiseResolver)();
        this.#queue.push(resolver);
        return resolver.promise;
    }
    notifyOne() {
        if (this.#queue.length !== 0) this.#queue.pop().resolve();
        else this.#set = false;
    }
    dispose() {
        for (const item of this.#queue)item.reject(new Error("The AutoResetEvent has been disposed"));
        this.#queue.length = 0;
    }
}

},{"@yume-chan/async":"dkY37","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"0206A":[function(require,module,exports) {
// Array is faster than object literal or `Map`
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Calculate the required length of the output buffer for the given input length.
 *
 * @param inputLength Length of the input in bytes
 * @returns Length of the output in bytes
 */ parcelHelpers.export(exports, "calculateBase64EncodedLength", ()=>calculateBase64EncodedLength);
parcelHelpers.export(exports, "encodeBase64", ()=>encodeBase64);
parcelHelpers.export(exports, "decodeBase64", ()=>decodeBase64);
const charToIndex = [];
const indexToChar = [];
const paddingChar = "=".charCodeAt(0);
function addRange(start, end) {
    const charCodeStart = start.charCodeAt(0);
    const charCodeEnd = end.charCodeAt(0);
    for(let charCode = charCodeStart; charCode <= charCodeEnd; charCode += 1){
        charToIndex[charCode] = indexToChar.length;
        indexToChar.push(charCode);
    }
}
addRange("A", "Z");
addRange("a", "z");
addRange("0", "9");
addRange("+", "+");
addRange("/", "/");
function calculateBase64EncodedLength(inputLength) {
    const remainder = inputLength % 3;
    const paddingLength = remainder !== 0 ? 3 - remainder : 0;
    return [
        (inputLength + paddingLength) / 3 * 4,
        paddingLength
    ];
}
function encodeBase64(input, output) {
    const [outputLength, paddingLength] = calculateBase64EncodedLength(input.length);
    if (!output) {
        output = new Uint8Array(outputLength);
        encodeForward(input, output, paddingLength);
        return output;
    } else {
        if (output.length < outputLength) throw new TypeError("output buffer is too small");
        output = output.subarray(0, outputLength);
        // When input and output are on same ArrayBuffer,
        // we check if it's possible to encode in-place.
        if (input.buffer !== output.buffer) encodeForward(input, output, paddingLength);
        else if (output.byteOffset + output.length - (paddingLength + 1) <= input.byteOffset + input.length) // Output ends before input ends.
        // Can encode forwards, because writing output won't catch up with reading input.
        // The output end is subtracted by `(paddingLength + 1)` because
        // depending on padding length, it's possible to write 1-3 extra bytes after input ends.
        //
        // The following diagrams show how the last read from input and the last write to output
        // are not conflicting.
        //
        // spell: disable
        //
        // `paddingLength === 2` can write 3 extra bytes:
        //
        //   input:  | aaaaaabb |          |          |          |
        //   output: |  aaaaaa  |  bb0000  |    =     |    =     |
        //
        // `paddingLength === 1` can write 2 extra bytes:
        //
        //   input:  | aaaaaabb | bbbbcccc |          |          |
        //   output: |  aaaaaa  |  bbbbbb  |  cccc00  |    =     |
        //
        // `paddingLength === 0` can write 1 extra byte:
        //
        //   input:  | aaaaaabb | bbbbcccc | ccdddddd |          |
        //   output: |  aaaaaa  |  bbbbbb  |  cccccc  |  dddddd  |
        //
        // spell: enable
        encodeForward(input, output, paddingLength);
        else if (output.byteOffset >= input.byteOffset - 1) // Output starts after input starts
        // So in backwards, writing output won't catch up with reading input.
        // The input start is subtracted by `1`, Because as the first 3 bytes becomes 4 bytes,
        // it's possible to write 1 extra byte before input starts.
        // spell: disable-next-line
        //   input:  |          | aaaaaabb | bbbbcccc | ccdddddd |
        //   output: |  aaaaaa  |  bbbbbb  |  cccccc  |  dddddd  |
        // Must encode backwards.
        encodeBackward(input, output, paddingLength);
        else // Input is in the middle of output,
        // It's not possible to read either the first or the last three bytes
        // before they are overwritten by the output.
        throw new TypeError("input and output cannot overlap");
        return outputLength;
    }
}
function encodeForward(input, output, paddingLength) {
    let inputIndex = 0;
    let outputIndex = 0;
    while(inputIndex < input.length - 2){
        /* cspell: disable-next-line */ // aaaaaabb
        const x = input[inputIndex];
        inputIndex += 1;
        /* cspell: disable-next-line */ // bbbbcccc
        const y = input[inputIndex];
        inputIndex += 1;
        /* cspell: disable-next-line */ // ccdddddd
        const z = input[inputIndex];
        inputIndex += 1;
        output[outputIndex] = indexToChar[x >> 2];
        outputIndex += 1;
        output[outputIndex] = indexToChar[(x & 3) << 4 | y >> 4];
        outputIndex += 1;
        output[outputIndex] = indexToChar[(y & 15) << 2 | z >> 6];
        outputIndex += 1;
        output[outputIndex] = indexToChar[z & 63];
        outputIndex += 1;
    }
    if (paddingLength === 2) {
        /* cspell: disable-next-line */ // aaaaaabb
        const x = input[inputIndex];
        inputIndex += 1;
        output[outputIndex] = indexToChar[x >> 2];
        outputIndex += 1;
        output[outputIndex] = indexToChar[(x & 3) << 4];
        outputIndex += 1;
        output[outputIndex] = paddingChar;
        outputIndex += 1;
        output[outputIndex] = paddingChar;
    } else if (paddingLength === 1) {
        /* cspell: disable-next-line */ // aaaaaabb
        const x = input[inputIndex];
        inputIndex += 1;
        /* cspell: disable-next-line */ // bbbbcccc
        const y = input[inputIndex];
        inputIndex += 1;
        output[outputIndex] = indexToChar[x >> 2];
        outputIndex += 1;
        output[outputIndex] = indexToChar[(x & 3) << 4 | y >> 4];
        outputIndex += 1;
        output[outputIndex] = indexToChar[(y & 15) << 2];
        outputIndex += 1;
        output[outputIndex] = paddingChar;
    }
}
function encodeBackward(input, output, paddingLength) {
    let inputIndex = input.length - 1;
    let outputIndex = output.length - 1;
    if (paddingLength === 2) {
        /* cspell: disable-next-line */ // aaaaaabb
        const x = input[inputIndex];
        inputIndex -= 1;
        output[outputIndex] = paddingChar;
        outputIndex -= 1;
        output[outputIndex] = paddingChar;
        outputIndex -= 1;
        output[outputIndex] = indexToChar[(x & 3) << 4];
        outputIndex -= 1;
        output[outputIndex] = indexToChar[x >> 2];
        outputIndex -= 1;
    } else if (paddingLength === 1) {
        /* cspell: disable-next-line */ // bbbbcccc
        const y = input[inputIndex];
        inputIndex -= 1;
        /* cspell: disable-next-line */ // aaaaaabb
        const x = input[inputIndex];
        inputIndex -= 1;
        output[outputIndex] = paddingChar;
        outputIndex -= 1;
        output[outputIndex] = indexToChar[(y & 15) << 2];
        outputIndex -= 1;
        output[outputIndex] = indexToChar[(x & 3) << 4 | y >> 4];
        outputIndex -= 1;
        output[outputIndex] = indexToChar[x >> 2];
        outputIndex -= 1;
    }
    while(inputIndex >= 0){
        /* cspell: disable-next-line */ // ccdddddd
        const z = input[inputIndex];
        inputIndex -= 1;
        /* cspell: disable-next-line */ // bbbbcccc
        const y = input[inputIndex];
        inputIndex -= 1;
        /* cspell: disable-next-line */ // aaaaaabb
        const x = input[inputIndex];
        inputIndex -= 1;
        output[outputIndex] = indexToChar[z & 63];
        outputIndex -= 1;
        output[outputIndex] = indexToChar[(y & 15) << 2 | z >> 6];
        outputIndex -= 1;
        output[outputIndex] = indexToChar[(x & 3) << 4 | y >> 4];
        outputIndex -= 1;
        output[outputIndex] = indexToChar[x >> 2];
        outputIndex -= 1;
    }
}
function decodeBase64(input) {
    let padding;
    if (input[input.length - 2] === "=") padding = 2;
    else if (input[input.length - 1] === "=") padding = 1;
    else padding = 0;
    const result = new Uint8Array(input.length / 4 * 3 - padding);
    let sIndex = 0;
    let dIndex = 0;
    while(sIndex < input.length - (padding !== 0 ? 4 : 0)){
        const a = charToIndex[input.charCodeAt(sIndex)];
        sIndex += 1;
        const b = charToIndex[input.charCodeAt(sIndex)];
        sIndex += 1;
        const c = charToIndex[input.charCodeAt(sIndex)];
        sIndex += 1;
        const d = charToIndex[input.charCodeAt(sIndex)];
        sIndex += 1;
        result[dIndex] = a << 2 | (b & 48) >> 4;
        dIndex += 1;
        result[dIndex] = (b & 15) << 4 | (c & 60) >> 2;
        dIndex += 1;
        result[dIndex] = (c & 3) << 6 | d;
        dIndex += 1;
    }
    if (padding === 1) {
        const a = charToIndex[input.charCodeAt(sIndex)];
        sIndex += 1;
        const b = charToIndex[input.charCodeAt(sIndex)];
        sIndex += 1;
        const c = charToIndex[input.charCodeAt(sIndex)];
        result[dIndex] = a << 2 | (b & 48) >> 4;
        dIndex += 1;
        result[dIndex] = (b & 15) << 4 | (c & 60) >> 2;
    } else if (padding === 2) {
        const a = charToIndex[input.charCodeAt(sIndex)];
        sIndex += 1;
        const b = charToIndex[input.charCodeAt(sIndex)];
        result[dIndex] = a << 2 | (b & 48) >> 4;
    }
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bZwaj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// It's 22x faster than converting `data` to string then `Number.parseInt`
// https://jsbench.me/dglha94ozl/1
parcelHelpers.export(exports, "hexToNumber", ()=>hexToNumber);
parcelHelpers.export(exports, "write4HexDigits", ()=>write4HexDigits);
function hexCharToNumber(char) {
    if (char < 48) throw new TypeError(`Invalid hex char ${char}`);
    if (char < 58) // 0-9
    return char - 48;
    if (char < 65) throw new TypeError(`Invalid hex char ${char}`);
    if (char < 71) // A-F
    return char - 55;
    if (char < 97) throw new TypeError(`Invalid hex char ${char}`);
    if (char < 103) // a-f
    return char - 87;
    throw new TypeError(`Invalid hex char ${char}`);
}
function hexToNumber(data) {
    let result = 0;
    for(let i = 0; i < data.length; i += 1)result = result << 4 | hexCharToNumber(data[i]);
    return result;
}
function write4HexDigits(buffer, index, value) {
    const start = index;
    index += 3;
    while(index >= start && value > 0){
        const digit = value & 0xf;
        value >>= 4;
        if (digit < 10) buffer[index] = digit + 48; // '0'
        else buffer[index] = digit + 87; // 'a' - 10
        index -= 1;
    }
    while(index >= start){
        buffer[index] = 48; // '0'
        index -= 1;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8jlK3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NOOP", ()=>NOOP);
/**
 * When used in `Promise#catch`, means the promise should never throw errors.
 * An explicit way to suppress ESLint floating promise warnings.
 */ parcelHelpers.export(exports, "unreachable", ()=>unreachable);
const NOOP = ()=>{
// no-op
};
function unreachable(...args) {
    // Trigger runtime's unhandled rejection event.
    throw new Error("Unreachable. Arguments:\n" + args.join("\n"));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cpscE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sequenceEqual", ()=>sequenceEqual);
function sequenceEqual(a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i += 1){
        if (a[i] !== b[i]) return false;
    }
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hCWq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _commandJs = require("./command.js");
parcelHelpers.exportAll(_commandJs, exports);
var _indexJs = require("./protocols/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var _utilsJs = require("./utils.js");
parcelHelpers.exportAll(_utilsJs, exports);

},{"./command.js":"lHF64","./protocols/index.js":"hYMV0","./utils.js":"hSJOw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lHF64":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbSubprocess", ()=>AdbSubprocess);
var _streamExtra = require("@yume-chan/stream-extra");
var _baseJs = require("../base.js");
var _indexJs = require("./protocols/index.js");
const DEFAULT_OPTIONS = {
    protocols: [
        (0, _indexJs.AdbSubprocessShellProtocol),
        (0, _indexJs.AdbSubprocessNoneProtocol)
    ]
};
class AdbSubprocess extends (0, _baseJs.AdbCommandBase) {
    async #createProtocol(mode, command, options) {
        const { protocols } = {
            ...DEFAULT_OPTIONS,
            ...options
        };
        let Constructor;
        for (const item of protocols)// It's async so can't use `Array#find`
        if (await item.isSupported(this.adb)) {
            Constructor = item;
            break;
        }
        if (!Constructor) throw new Error("No specified protocol is supported by the device");
        if (Array.isArray(command)) command = command.join(" ");
        else if (command === undefined) // spawn the default shell
        command = "";
        return await Constructor[mode](this.adb, command);
    }
    /**
     * Spawns an executable in PTY mode.
     *
     * Redirection mode is enough for most simple commands, but PTY mode is required for
     * commands that manipulate the terminal, such as `vi` and `less`.
     * @param command The command to run. If omitted, the default shell will be spawned.
     * @param options The options for creating the `AdbSubprocessProtocol`
     * @returns A new `AdbSubprocessProtocol` instance connecting to the spawned process.
     */ shell(command, options) {
        return this.#createProtocol("pty", command, options);
    }
    /**
     * Spawns an executable and redirect the standard input/output stream.
     *
     * Redirection mode is enough for most simple commands, but PTY mode is required for
     * commands that manipulate the terminal, such as `vi` and `less`.
     * @param command The command to run, or an array of strings containing both command and args.
     * @param options The options for creating the `AdbSubprocessProtocol`
     * @returns A new `AdbSubprocessProtocol` instance connecting to the spawned process.
     */ spawn(command, options) {
        return this.#createProtocol("raw", command, options);
    }
    /**
     * Spawns a new process, waits until it exits, and returns the entire output.
     * @param command The command to run
     * @param options The options for creating the `AdbSubprocessProtocol`
     * @returns The entire output of the command
     */ async spawnAndWait(command, options) {
        const process = await this.spawn(command, options);
        const [stdout, stderr, exitCode] = await Promise.all([
            process.stdout.pipeThrough(new (0, _streamExtra.TextDecoderStream)()).pipeThrough(new (0, _streamExtra.ConcatStringStream)()),
            process.stderr.pipeThrough(new (0, _streamExtra.TextDecoderStream)()).pipeThrough(new (0, _streamExtra.ConcatStringStream)()),
            process.exit
        ]);
        return {
            stdout,
            stderr,
            exitCode
        };
    }
    /**
     * Spawns a new process, waits until it exits, and returns the entire output.
     * @param command The command to run
     * @returns The entire output of the command
     */ async spawnAndWaitLegacy(command) {
        const { stdout } = await this.spawnAndWait(command, {
            protocols: [
                (0, _indexJs.AdbSubprocessNoneProtocol)
            ]
        });
        return stdout;
    }
}

},{"@yume-chan/stream-extra":"jSEnK","../base.js":"cOyOA","./protocols/index.js":"hYMV0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hYMV0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _noneJs = require("./none.js");
parcelHelpers.exportAll(_noneJs, exports);
var _shellJs = require("./shell.js");
parcelHelpers.exportAll(_shellJs, exports);
var _typesJs = require("./types.js");
parcelHelpers.exportAll(_typesJs, exports);

},{"./none.js":"56enR","./shell.js":"jPrzR","./types.js":"ibjDX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"56enR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The legacy shell
 *
 * Features:
 * * `stderr`: No
 * * `exit` exit code: No
 * * `resize`: No
 */ parcelHelpers.export(exports, "AdbSubprocessNoneProtocol", ()=>AdbSubprocessNoneProtocol);
var _streamExtra = require("@yume-chan/stream-extra");
var _indexJs = require("../../../utils/index.js");
class AdbSubprocessNoneProtocol {
    static isSupported() {
        return true;
    }
    static async pty(adb, command) {
        return new AdbSubprocessNoneProtocol(await adb.createSocket(`shell:${command}`));
    }
    static async raw(adb, command) {
        // `shell,raw:${command}` also triggers raw mode,
        // But is not supported on Android version <7.
        return new AdbSubprocessNoneProtocol(await adb.createSocket(`exec:${command}`));
    }
    #socket;
    // Legacy shell forwards all data to stdin.
    get stdin() {
        return this.#socket.writable;
    }
    /**
     * Legacy shell mixes stdout and stderr.
     */ get stdout() {
        return this.#socket.readable;
    }
    #stderr;
    /**
     * `stderr` will always be empty.
     */ get stderr() {
        return this.#stderr;
    }
    #exit;
    get exit() {
        return this.#exit;
    }
    constructor(socket){
        this.#socket = socket;
        this.#stderr = new (0, _streamExtra.ReadableStream)({
            start: (controller)=>{
                this.#socket.closed.then(()=>controller.close()).catch((0, _indexJs.unreachable));
            }
        });
        this.#exit = socket.closed.then(()=>0);
    }
    resize() {
    // Not supported, but don't throw.
    }
    async kill() {
        await this.#socket.close();
    }
}

},{"@yume-chan/stream-extra":"jSEnK","../../../utils/index.js":"9S5h7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jPrzR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbShellProtocolId", ()=>AdbShellProtocolId);
/**
 * Shell v2 a.k.a Shell Protocol
 *
 * Features:
 * * `stderr`: Yes
 * * `exit` exit code: Yes
 * * `resize`: Yes
 */ parcelHelpers.export(exports, "AdbSubprocessShellProtocol", ()=>AdbSubprocessShellProtocol);
var _async = require("@yume-chan/async");
var _streamExtra = require("@yume-chan/stream-extra");
var _struct = require("@yume-chan/struct");
var _structDefault = parcelHelpers.interopDefault(_struct);
var _featuresJs = require("../../../features.js");
var _indexJs = require("../../../utils/index.js");
var AdbShellProtocolId;
(function(AdbShellProtocolId) {
    AdbShellProtocolId[AdbShellProtocolId["Stdin"] = 0] = "Stdin";
    AdbShellProtocolId[AdbShellProtocolId["Stdout"] = 1] = "Stdout";
    AdbShellProtocolId[AdbShellProtocolId["Stderr"] = 2] = "Stderr";
    AdbShellProtocolId[AdbShellProtocolId["Exit"] = 3] = "Exit";
    AdbShellProtocolId[AdbShellProtocolId["CloseStdin"] = 4] = "CloseStdin";
    AdbShellProtocolId[AdbShellProtocolId["WindowSizeChange"] = 5] = "WindowSizeChange";
})(AdbShellProtocolId || (AdbShellProtocolId = {}));
// This packet format is used in both direction.
const AdbShellProtocolPacket = new (0, _structDefault.default)({
    littleEndian: true
}).uint8("id", (0, _struct.placeholder)()).uint32("length").uint8Array("data", {
    lengthField: "length"
});
class AdbSubprocessShellProtocol {
    static isSupported(adb) {
        return adb.canUseFeature((0, _featuresJs.AdbFeature).ShellV2);
    }
    static async pty(adb, command) {
        // TODO: AdbShellSubprocessProtocol: Support setting `XTERM` environment variable
        return new AdbSubprocessShellProtocol(await adb.createSocket(`shell,v2,pty:${command}`));
    }
    static async raw(adb, command) {
        return new AdbSubprocessShellProtocol(await adb.createSocket(`shell,v2,raw:${command}`));
    }
    #socket;
    #writer;
    #stdin;
    get stdin() {
        return this.#stdin;
    }
    #stdout;
    get stdout() {
        return this.#stdout;
    }
    #stderr;
    get stderr() {
        return this.#stderr;
    }
    #exit = new (0, _async.PromiseResolver)();
    get exit() {
        return this.#exit.promise;
    }
    constructor(socket){
        this.#socket = socket;
        let stdoutController;
        let stderrController;
        this.#stdout = new (0, _streamExtra.PushReadableStream)((controller)=>{
            stdoutController = controller;
        });
        this.#stderr = new (0, _streamExtra.PushReadableStream)((controller)=>{
            stderrController = controller;
        });
        socket.readable.pipeThrough(new (0, _streamExtra.StructDeserializeStream)(AdbShellProtocolPacket)).pipeTo(new (0, _streamExtra.WritableStream)({
            write: async (chunk)=>{
                switch(chunk.id){
                    case AdbShellProtocolId.Exit:
                        this.#exit.resolve(chunk.data[0]);
                        break;
                    case AdbShellProtocolId.Stdout:
                        if (!stdoutController.abortSignal.aborted) await stdoutController.enqueue(chunk.data);
                        break;
                    case AdbShellProtocolId.Stderr:
                        if (!stderrController.abortSignal.aborted) await stderrController.enqueue(chunk.data);
                        break;
                }
            }
        })).then(()=>{
            stdoutController.close();
            stderrController.close();
            // If `#exit` has already resolved, this will be a no-op
            this.#exit.reject(new Error("Socket ended without exit message"));
        }, (e)=>{
            stdoutController.error(e);
            stderrController.error(e);
            // If `#exit` has already resolved, this will be a no-op
            this.#exit.reject(e);
        });
        this.#writer = this.#socket.writable.getWriter();
        this.#stdin = new (0, _streamExtra.MaybeConsumable).WritableStream({
            write: async (chunk)=>{
                await this.#writer.write(AdbShellProtocolPacket.serialize({
                    id: AdbShellProtocolId.Stdin,
                    data: chunk
                }));
            }
        });
    }
    async resize(rows, cols) {
        await this.#writer.write(AdbShellProtocolPacket.serialize({
            id: AdbShellProtocolId.WindowSizeChange,
            // The "correct" format is `${rows}x${cols},${x_pixels}x${y_pixels}`
            // However, according to https://linux.die.net/man/4/tty_ioctl
            // `x_pixels` and `y_pixels` are unused, so always sending `0` should be fine.
            data: (0, _indexJs.encodeUtf8)(`${rows}x${cols},0x0\0`)
        }));
    }
    kill() {
        return this.#socket.close();
    }
}

},{"@yume-chan/async":"dkY37","@yume-chan/stream-extra":"jSEnK","@yume-chan/struct":"bhoSk","../../../features.js":"gnUAS","../../../utils/index.js":"9S5h7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gnUAS":[function(require,module,exports) {
// The order follows
// https://cs.android.com/android/platform/superproject/+/master:packages/modules/adb/transport.cpp;l=77;drc=6d14d35d0241f6fee145f8e54ffd77252e8d29fd
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbFeature", ()=>AdbFeature);
var AdbFeature;
(function(AdbFeature) {
    AdbFeature["ShellV2"] = "shell_v2";
    AdbFeature["Cmd"] = "cmd";
    AdbFeature["StatV2"] = "stat_v2";
    AdbFeature["ListV2"] = "ls_v2";
    AdbFeature["FixedPushMkdir"] = "fixed_push_mkdir";
    AdbFeature["Abb"] = "abb";
    AdbFeature["AbbExec"] = "abb_exec";
    AdbFeature["SendReceiveV2"] = "sendrecv_v2";
    AdbFeature["DelayedAck"] = "delayed_ack";
})(AdbFeature || (AdbFeature = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ibjDX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hSJOw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "escapeArg", ()=>escapeArg);
function escapeArg(s) {
    let result = "";
    result += `'`;
    let base = 0;
    while(true){
        const found = s.indexOf(`'`, base);
        if (found === -1) {
            result += s.substring(base);
            break;
        }
        result += s.substring(base, found);
        // a'b becomes a'\'b (the backslash is not a escape character)
        result += String.raw`'\''`;
        base = found + 1;
    }
    result += `'`;
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hnZ56":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _listJs = require("./list.js");
parcelHelpers.exportAll(_listJs, exports);
var _pullJs = require("./pull.js");
parcelHelpers.exportAll(_pullJs, exports);
var _pushJs = require("./push.js");
parcelHelpers.exportAll(_pushJs, exports);
var _requestJs = require("./request.js");
parcelHelpers.exportAll(_requestJs, exports);
var _responseJs = require("./response.js");
parcelHelpers.exportAll(_responseJs, exports);
var _socketJs = require("./socket.js");
parcelHelpers.exportAll(_socketJs, exports);
var _statJs = require("./stat.js");
parcelHelpers.exportAll(_statJs, exports);
var _syncJs = require("./sync.js");
parcelHelpers.exportAll(_syncJs, exports);

},{"./list.js":"cTp6s","./pull.js":"4tA7W","./push.js":"7xK24","./request.js":"6Vs7F","./response.js":"azwGn","./socket.js":"jI1ql","./stat.js":"8cYy6","./sync.js":"g7eAo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cTp6s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbSyncEntryResponse", ()=>AdbSyncEntryResponse);
parcelHelpers.export(exports, "AdbSyncEntry2Response", ()=>AdbSyncEntry2Response);
parcelHelpers.export(exports, "adbSyncOpenDirV2", ()=>adbSyncOpenDirV2);
parcelHelpers.export(exports, "adbSyncOpenDirV1", ()=>adbSyncOpenDirV1);
parcelHelpers.export(exports, "adbSyncOpenDir", ()=>adbSyncOpenDir);
var _struct = require("@yume-chan/struct");
var _structDefault = parcelHelpers.interopDefault(_struct);
var _requestJs = require("./request.js");
var _responseJs = require("./response.js");
var _statJs = require("./stat.js");
const AdbSyncEntryResponse = new (0, _structDefault.default)({
    littleEndian: true
}).concat((0, _statJs.AdbSyncLstatResponse)).uint32("nameLength").string("name", {
    lengthField: "nameLength"
});
const AdbSyncEntry2Response = new (0, _structDefault.default)({
    littleEndian: true
}).concat((0, _statJs.AdbSyncStatResponse)).uint32("nameLength").string("name", {
    lengthField: "nameLength"
});
async function* adbSyncOpenDirV2(socket, path) {
    const locked = await socket.lock();
    try {
        await (0, _requestJs.adbSyncWriteRequest)(locked, (0, _requestJs.AdbSyncRequestId).ListV2, path);
        for await (const item of (0, _responseJs.adbSyncReadResponses)(locked, (0, _responseJs.AdbSyncResponseId).Entry2, AdbSyncEntry2Response)){
            // `LST2` can return error codes for failed `lstat` calls.
            // `LIST` just ignores them.
            // But they only contain `name` so still pretty useless.
            if (item.error !== (0, _statJs.AdbSyncStatErrorCode).SUCCESS) continue;
            yield item;
        }
    } finally{
        locked.release();
    }
}
async function* adbSyncOpenDirV1(socket, path) {
    const locked = await socket.lock();
    try {
        await (0, _requestJs.adbSyncWriteRequest)(locked, (0, _requestJs.AdbSyncRequestId).List, path);
        for await (const item of (0, _responseJs.adbSyncReadResponses)(locked, (0, _responseJs.AdbSyncResponseId).Entry, AdbSyncEntryResponse))yield item;
    } finally{
        locked.release();
    }
}
async function* adbSyncOpenDir(socket, path, v2) {
    if (v2) yield* adbSyncOpenDirV2(socket, path);
    else for await (const item of adbSyncOpenDirV1(socket, path))// Convert to same format as `AdbSyncEntry2Response` for easier consumption.
    // However it will add some overhead.
    yield {
        mode: item.mode,
        size: BigInt(item.size),
        mtime: BigInt(item.mtime),
        get type () {
            return item.type;
        },
        get permission () {
            return item.permission;
        },
        name: item.name
    };
}

},{"@yume-chan/struct":"bhoSk","./request.js":"6Vs7F","./response.js":"azwGn","./stat.js":"8cYy6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Vs7F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbSyncRequestId", ()=>AdbSyncRequestId);
parcelHelpers.export(exports, "AdbSyncNumberRequest", ()=>AdbSyncNumberRequest);
parcelHelpers.export(exports, "adbSyncWriteRequest", ()=>adbSyncWriteRequest);
var _struct = require("@yume-chan/struct");
var _structDefault = parcelHelpers.interopDefault(_struct);
var _indexJs = require("../../utils/index.js");
var _responseJs = require("./response.js");
var AdbSyncRequestId;
(function(AdbSyncRequestId) {
    AdbSyncRequestId.List = (0, _responseJs.adbSyncEncodeId)("LIST");
    AdbSyncRequestId.ListV2 = (0, _responseJs.adbSyncEncodeId)("LIS2");
    AdbSyncRequestId.Send = (0, _responseJs.adbSyncEncodeId)("SEND");
    AdbSyncRequestId.SendV2 = (0, _responseJs.adbSyncEncodeId)("SND2");
    AdbSyncRequestId.Lstat = (0, _responseJs.adbSyncEncodeId)("STAT");
    AdbSyncRequestId.Stat = (0, _responseJs.adbSyncEncodeId)("STA2");
    AdbSyncRequestId.LstatV2 = (0, _responseJs.adbSyncEncodeId)("LST2");
    AdbSyncRequestId.Data = (0, _responseJs.adbSyncEncodeId)("DATA");
    AdbSyncRequestId.Done = (0, _responseJs.adbSyncEncodeId)("DONE");
    AdbSyncRequestId.Receive = (0, _responseJs.adbSyncEncodeId)("RECV");
})(AdbSyncRequestId || (AdbSyncRequestId = {}));
const AdbSyncNumberRequest = new (0, _structDefault.default)({
    littleEndian: true
}).uint32("id").uint32("arg");
async function adbSyncWriteRequest(writable, id, value) {
    if (typeof id === "string") id = (0, _responseJs.adbSyncEncodeId)(id);
    if (typeof value === "number") {
        await writable.write(AdbSyncNumberRequest.serialize({
            id,
            arg: value
        }));
        return;
    }
    if (typeof value === "string") value = (0, _indexJs.encodeUtf8)(value);
    // `writable` is buffered, it copies inputs to an internal buffer,
    // so don't concatenate headers and data here, that will be an unnecessary copy.
    await writable.write(AdbSyncNumberRequest.serialize({
        id,
        arg: value.length
    }));
    await writable.write(value);
}

},{"@yume-chan/struct":"bhoSk","../../utils/index.js":"9S5h7","./response.js":"azwGn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"azwGn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Encode ID to numbers for faster comparison
 * @param value A 4-character string
 * @returns A 32-bit integer by encoding the string as little-endian
 */ parcelHelpers.export(exports, "adbSyncEncodeId", ()=>adbSyncEncodeId);
parcelHelpers.export(exports, "AdbSyncResponseId", ()=>AdbSyncResponseId);
parcelHelpers.export(exports, "AdbSyncError", ()=>AdbSyncError);
parcelHelpers.export(exports, "AdbSyncFailResponse", ()=>AdbSyncFailResponse);
parcelHelpers.export(exports, "adbSyncReadResponse", ()=>adbSyncReadResponse);
parcelHelpers.export(exports, "adbSyncReadResponses", ()=>adbSyncReadResponses);
var _noDataView = require("@yume-chan/no-data-view");
var _struct = require("@yume-chan/struct");
var _structDefault = parcelHelpers.interopDefault(_struct);
function encodeAsciiUnchecked(value) {
    const result = new Uint8Array(value.length);
    for(let i = 0; i < value.length; i += 1)result[i] = value.charCodeAt(i);
    return result;
}
function adbSyncEncodeId(value) {
    const buffer = encodeAsciiUnchecked(value);
    return (0, _noDataView.getUint32LittleEndian)(buffer, 0);
}
var AdbSyncResponseId;
(function(AdbSyncResponseId) {
    AdbSyncResponseId.Entry = adbSyncEncodeId("DENT");
    AdbSyncResponseId.Entry2 = adbSyncEncodeId("DNT2");
    AdbSyncResponseId.Lstat = adbSyncEncodeId("STAT");
    AdbSyncResponseId.Stat = adbSyncEncodeId("STA2");
    AdbSyncResponseId.Lstat2 = adbSyncEncodeId("LST2");
    AdbSyncResponseId.Done = adbSyncEncodeId("DONE");
    AdbSyncResponseId.Data = adbSyncEncodeId("DATA");
    AdbSyncResponseId.Ok = adbSyncEncodeId("OKAY");
    AdbSyncResponseId.Fail = adbSyncEncodeId("FAIL");
})(AdbSyncResponseId || (AdbSyncResponseId = {}));
class AdbSyncError extends Error {
}
const AdbSyncFailResponse = new (0, _structDefault.default)({
    littleEndian: true
}).uint32("messageLength").string("message", {
    lengthField: "messageLength"
}).postDeserialize((object)=>{
    throw new AdbSyncError(object.message);
});
async function adbSyncReadResponse(stream, id, type) {
    if (typeof id === "string") id = adbSyncEncodeId(id);
    const buffer = await stream.readExactly(4);
    switch((0, _noDataView.getUint32LittleEndian)(buffer, 0)){
        case AdbSyncResponseId.Fail:
            await AdbSyncFailResponse.deserialize(stream);
            throw new Error("Unreachable");
        case id:
            return await type.deserialize(stream);
        default:
            throw new Error(`Expected '${id}', but got '${(0, _struct.decodeUtf8)(buffer)}'`);
    }
}
async function* adbSyncReadResponses(stream, id, type) {
    if (typeof id === "string") id = adbSyncEncodeId(id);
    while(true){
        const buffer = await stream.readExactly(4);
        switch((0, _noDataView.getUint32LittleEndian)(buffer, 0)){
            case AdbSyncResponseId.Fail:
                await AdbSyncFailResponse.deserialize(stream);
                throw new Error("Unreachable");
            case AdbSyncResponseId.Done:
                // `DONE` responses' size are always same as the request's normal response.
                //
                // For example, `DONE` responses for `LIST` requests are 16 bytes (same as `DENT` responses),
                // but `DONE` responses for `STAT` requests are 12 bytes (same as `STAT` responses).
                await stream.readExactly(type.size);
                return;
            case id:
                yield await type.deserialize(stream);
                break;
            default:
                throw new Error(`Expected '${id}' or '${AdbSyncResponseId.Done}', but got '${(0, _struct.decodeUtf8)(buffer)}'`);
        }
    }
}

},{"@yume-chan/no-data-view":"iBcsB","@yume-chan/struct":"bhoSk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8cYy6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LinuxFileType", ()=>LinuxFileType);
parcelHelpers.export(exports, "AdbSyncLstatResponse", ()=>AdbSyncLstatResponse);
parcelHelpers.export(exports, "AdbSyncStatErrorCode", ()=>AdbSyncStatErrorCode);
parcelHelpers.export(exports, "AdbSyncStatResponse", ()=>AdbSyncStatResponse);
parcelHelpers.export(exports, "adbSyncLstat", ()=>adbSyncLstat);
parcelHelpers.export(exports, "adbSyncStat", ()=>adbSyncStat);
var _struct = require("@yume-chan/struct");
var _structDefault = parcelHelpers.interopDefault(_struct);
var _requestJs = require("./request.js");
var _responseJs = require("./response.js");
var LinuxFileType;
(function(LinuxFileType) {
    LinuxFileType[LinuxFileType["Directory"] = 4] = "Directory";
    LinuxFileType[LinuxFileType["File"] = 8] = "File";
    LinuxFileType[LinuxFileType["Link"] = 10] = "Link";
})(LinuxFileType || (LinuxFileType = {}));
const AdbSyncLstatResponse = new (0, _structDefault.default)({
    littleEndian: true
}).int32("mode").int32("size").int32("mtime").extra({
    get type () {
        return this.mode >> 12;
    },
    get permission () {
        return this.mode & 4095;
    }
}).postDeserialize((object)=>{
    if (object.mode === 0 && object.size === 0 && object.mtime === 0) throw new Error("lstat error");
});
var AdbSyncStatErrorCode;
(function(AdbSyncStatErrorCode) {
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["SUCCESS"] = 0] = "SUCCESS";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["EACCES"] = 13] = "EACCES";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["EEXIST"] = 17] = "EEXIST";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["EFAULT"] = 14] = "EFAULT";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["EFBIG"] = 27] = "EFBIG";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["EINTR"] = 4] = "EINTR";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["EINVAL"] = 22] = "EINVAL";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["EIO"] = 5] = "EIO";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["EISDIR"] = 21] = "EISDIR";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["ELOOP"] = 40] = "ELOOP";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["EMFILE"] = 24] = "EMFILE";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["ENAMETOOLONG"] = 36] = "ENAMETOOLONG";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["ENFILE"] = 23] = "ENFILE";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["ENOENT"] = 2] = "ENOENT";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["ENOMEM"] = 12] = "ENOMEM";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["ENOSPC"] = 28] = "ENOSPC";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["ENOTDIR"] = 20] = "ENOTDIR";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["EOVERFLOW"] = 75] = "EOVERFLOW";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["EPERM"] = 1] = "EPERM";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["EROFS"] = 30] = "EROFS";
    AdbSyncStatErrorCode[AdbSyncStatErrorCode["ETXTBSY"] = 26] = "ETXTBSY";
})(AdbSyncStatErrorCode || (AdbSyncStatErrorCode = {}));
const AdbSyncStatResponse = new (0, _structDefault.default)({
    littleEndian: true
}).uint32("error", (0, _struct.placeholder)()).uint64("dev").uint64("ino").uint32("mode").uint32("nlink").uint32("uid").uint32("gid").uint64("size").uint64("atime").uint64("mtime").uint64("ctime").extra({
    get type () {
        return this.mode >> 12;
    },
    get permission () {
        return this.mode & 4095;
    }
}).postDeserialize((object)=>{
    if (object.error) throw new Error(AdbSyncStatErrorCode[object.error]);
});
async function adbSyncLstat(socket, path, v2) {
    const locked = await socket.lock();
    try {
        if (v2) {
            await (0, _requestJs.adbSyncWriteRequest)(locked, (0, _requestJs.AdbSyncRequestId).LstatV2, path);
            return await (0, _responseJs.adbSyncReadResponse)(locked, (0, _responseJs.AdbSyncResponseId).Lstat2, AdbSyncStatResponse);
        } else {
            await (0, _requestJs.adbSyncWriteRequest)(locked, (0, _requestJs.AdbSyncRequestId).Lstat, path);
            const response = await (0, _responseJs.adbSyncReadResponse)(locked, (0, _responseJs.AdbSyncResponseId).Lstat, AdbSyncLstatResponse);
            return {
                mode: response.mode,
                // Convert to `BigInt` to make it compatible with `AdbSyncStatResponse`
                size: BigInt(response.size),
                mtime: BigInt(response.mtime),
                get type () {
                    return response.type;
                },
                get permission () {
                    return response.permission;
                }
            };
        }
    } finally{
        locked.release();
    }
}
async function adbSyncStat(socket, path) {
    const locked = await socket.lock();
    try {
        await (0, _requestJs.adbSyncWriteRequest)(locked, (0, _requestJs.AdbSyncRequestId).Stat, path);
        return await (0, _responseJs.adbSyncReadResponse)(locked, (0, _responseJs.AdbSyncResponseId).Stat, AdbSyncStatResponse);
    } finally{
        locked.release();
    }
}

},{"@yume-chan/struct":"bhoSk","./request.js":"6Vs7F","./response.js":"azwGn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4tA7W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbSyncDataResponse", ()=>AdbSyncDataResponse);
parcelHelpers.export(exports, "adbSyncPullGenerator", ()=>adbSyncPullGenerator);
parcelHelpers.export(exports, "adbSyncPull", ()=>adbSyncPull);
var _streamExtra = require("@yume-chan/stream-extra");
var _struct = require("@yume-chan/struct");
var _structDefault = parcelHelpers.interopDefault(_struct);
var _requestJs = require("./request.js");
var _responseJs = require("./response.js");
const AdbSyncDataResponse = new (0, _structDefault.default)({
    littleEndian: true
}).uint32("dataLength").uint8Array("data", {
    lengthField: "dataLength"
});
async function* adbSyncPullGenerator(socket, path) {
    const locked = await socket.lock();
    let done = false;
    try {
        await (0, _requestJs.adbSyncWriteRequest)(locked, (0, _requestJs.AdbSyncRequestId).Receive, path);
        for await (const packet of (0, _responseJs.adbSyncReadResponses)(locked, (0, _responseJs.AdbSyncResponseId).Data, AdbSyncDataResponse))yield packet.data;
        done = true;
    } catch (e) {
        done = true;
        throw e;
    } finally{
        if (!done) {
            // sync pull can't be cancelled, so we have to read all data
            for await (const packet of (0, _responseJs.adbSyncReadResponses)(locked, (0, _responseJs.AdbSyncResponseId).Data, AdbSyncDataResponse));
        }
        locked.release();
    }
}
function adbSyncPull(socket, path) {
    // TODO: use `ReadableStream.from` when it's supported
    return new (0, _streamExtra.PushReadableStream)(async (controller)=>{
        for await (const data of adbSyncPullGenerator(socket, path))await controller.enqueue(data);
    });
}

},{"@yume-chan/stream-extra":"jSEnK","@yume-chan/struct":"bhoSk","./request.js":"6Vs7F","./response.js":"azwGn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7xK24":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ADB_SYNC_MAX_PACKET_SIZE", ()=>ADB_SYNC_MAX_PACKET_SIZE);
parcelHelpers.export(exports, "AdbSyncOkResponse", ()=>AdbSyncOkResponse);
parcelHelpers.export(exports, "adbSyncPushV1", ()=>adbSyncPushV1);
parcelHelpers.export(exports, "AdbSyncSendV2Flags", ()=>AdbSyncSendV2Flags);
parcelHelpers.export(exports, "AdbSyncSendV2Request", ()=>AdbSyncSendV2Request);
parcelHelpers.export(exports, "adbSyncPushV2", ()=>adbSyncPushV2);
parcelHelpers.export(exports, "adbSyncPush", ()=>adbSyncPush);
var _streamExtra = require("@yume-chan/stream-extra");
var _struct = require("@yume-chan/struct");
var _structDefault = parcelHelpers.interopDefault(_struct);
var _indexJs = require("../../utils/index.js");
var _requestJs = require("./request.js");
var _responseJs = require("./response.js");
var _statJs = require("./stat.js");
const ADB_SYNC_MAX_PACKET_SIZE = 65536;
const AdbSyncOkResponse = new (0, _structDefault.default)({
    littleEndian: true
}).uint32("unused");
async function pipeFileData(locked, file, packetSize, mtime) {
    // Read and write in parallel,
    // allow error response to abort the write.
    const abortController = new (0, _streamExtra.AbortController)();
    file.pipeThrough(new (0, _streamExtra.DistributionStream)(packetSize, true)).pipeTo(new (0, _streamExtra.MaybeConsumable).WritableStream({
        write: async (chunk)=>{
            await (0, _requestJs.adbSyncWriteRequest)(locked, (0, _requestJs.AdbSyncRequestId).Data, chunk);
        }
    }), {
        signal: abortController.signal
    }).then(async ()=>{
        await (0, _requestJs.adbSyncWriteRequest)(locked, (0, _requestJs.AdbSyncRequestId).Done, mtime);
        await locked.flush();
    }, (0, _indexJs.NOOP));
    await (0, _responseJs.adbSyncReadResponse)(locked, (0, _responseJs.AdbSyncResponseId).Ok, AdbSyncOkResponse).catch((e)=>{
        abortController.abort();
        throw e;
    });
}
async function adbSyncPushV1({ socket, filename, file, type = (0, _statJs.LinuxFileType).File, permission = 438, mtime = Date.now() / 1000 | 0, packetSize = ADB_SYNC_MAX_PACKET_SIZE }) {
    const locked = await socket.lock();
    try {
        const mode = type << 12 | permission;
        const pathAndMode = `${filename},${mode.toString()}`;
        await (0, _requestJs.adbSyncWriteRequest)(locked, (0, _requestJs.AdbSyncRequestId).Send, pathAndMode);
        await pipeFileData(locked, file, packetSize, mtime);
    } finally{
        locked.release();
    }
}
var AdbSyncSendV2Flags;
(function(AdbSyncSendV2Flags) {
    AdbSyncSendV2Flags[AdbSyncSendV2Flags["None"] = 0] = "None";
    AdbSyncSendV2Flags[AdbSyncSendV2Flags["Brotli"] = 1] = "Brotli";
    /**
     * 2
     */ AdbSyncSendV2Flags[AdbSyncSendV2Flags["Lz4"] = 2] = "Lz4";
    /**
     * 4
     */ AdbSyncSendV2Flags[AdbSyncSendV2Flags["Zstd"] = 4] = "Zstd";
    AdbSyncSendV2Flags[AdbSyncSendV2Flags["DryRun"] = 2147483648] = "DryRun";
})(AdbSyncSendV2Flags || (AdbSyncSendV2Flags = {}));
const AdbSyncSendV2Request = new (0, _structDefault.default)({
    littleEndian: true
}).uint32("id").uint32("mode").uint32("flags", (0, _struct.placeholder)());
async function adbSyncPushV2({ socket, filename, file, type = (0, _statJs.LinuxFileType).File, permission = 438, mtime = Date.now() / 1000 | 0, packetSize = ADB_SYNC_MAX_PACKET_SIZE, dryRun = false }) {
    const locked = await socket.lock();
    try {
        await (0, _requestJs.adbSyncWriteRequest)(locked, (0, _requestJs.AdbSyncRequestId).SendV2, filename);
        const mode = type << 12 | permission;
        let flags = AdbSyncSendV2Flags.None;
        if (dryRun) flags |= AdbSyncSendV2Flags.DryRun;
        await locked.write(AdbSyncSendV2Request.serialize({
            id: (0, _requestJs.AdbSyncRequestId).SendV2,
            mode,
            flags
        }));
        await pipeFileData(locked, file, packetSize, mtime);
    } finally{
        locked.release();
    }
}
function adbSyncPush(options) {
    if (options.v2) return adbSyncPushV2(options);
    if (options.dryRun) throw new Error("dryRun is not supported in v1");
    return adbSyncPushV1(options);
}

},{"@yume-chan/stream-extra":"jSEnK","@yume-chan/struct":"bhoSk","../../utils/index.js":"9S5h7","./request.js":"6Vs7F","./response.js":"azwGn","./stat.js":"8cYy6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jI1ql":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbSyncSocketLocked", ()=>AdbSyncSocketLocked);
parcelHelpers.export(exports, "AdbSyncSocket", ()=>AdbSyncSocket);
var _streamExtra = require("@yume-chan/stream-extra");
var _indexJs = require("../../utils/index.js");
class AdbSyncSocketLocked {
    #writer;
    #readable;
    #socketLock;
    #writeLock = new (0, _indexJs.AutoResetEvent)();
    #combiner;
    get position() {
        return this.#readable.position;
    }
    constructor(writer, readable, bufferSize, lock){
        this.#writer = writer;
        this.#readable = readable;
        this.#socketLock = lock;
        this.#combiner = new (0, _streamExtra.BufferCombiner)(bufferSize);
    }
    async #write(buffer) {
        // `#combiner` will reuse the buffer, so we need to use the Consumable pattern
        await (0, _streamExtra.Consumable).WritableStream.write(this.#writer, buffer);
    }
    async flush() {
        try {
            await this.#writeLock.wait();
            const buffer = this.#combiner.flush();
            if (buffer) await this.#write(buffer);
        } finally{
            this.#writeLock.notifyOne();
        }
    }
    async write(data) {
        try {
            await this.#writeLock.wait();
            for (const buffer of this.#combiner.push(data))await this.#write(buffer);
        } finally{
            this.#writeLock.notifyOne();
        }
    }
    async readExactly(length) {
        // The request may still be in the internal buffer.
        // Call `flush` to send it before starting reading
        await this.flush();
        return await this.#readable.readExactly(length);
    }
    release() {
        // In theory, the writer shouldn't leave anything in the buffer,
        // but to be safe, call `flush` to throw away any remaining data.
        this.#combiner.flush();
        this.#socketLock.notifyOne();
    }
    async close() {
        await this.#readable.cancel();
    }
}
class AdbSyncSocket {
    #lock = new (0, _indexJs.AutoResetEvent)();
    #socket;
    #locked;
    constructor(socket, bufferSize){
        this.#socket = socket;
        this.#locked = new AdbSyncSocketLocked(socket.writable.getWriter(), new (0, _streamExtra.BufferedReadableStream)(socket.readable), bufferSize, this.#lock);
    }
    async lock() {
        await this.#lock.wait();
        return this.#locked;
    }
    async close() {
        await this.#locked.close();
        await this.#socket.close();
    }
}

},{"@yume-chan/stream-extra":"jSEnK","../../utils/index.js":"9S5h7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g7eAo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A simplified `dirname` function that only handles absolute unix paths.
 * @param path an absolute unix path
 * @returns the directory name of the input path
 */ parcelHelpers.export(exports, "dirname", ()=>dirname);
parcelHelpers.export(exports, "AdbSync", ()=>AdbSync);
var _event = require("@yume-chan/event");
var _featuresJs = require("../../features.js");
var _indexJs = require("../subprocess/index.js");
var _listJs = require("./list.js");
var _pullJs = require("./pull.js");
var _pushJs = require("./push.js");
var _socketJs = require("./socket.js");
var _statJs = require("./stat.js");
function dirname(path) {
    const end = path.lastIndexOf("/");
    if (end === -1) throw new Error(`Invalid path`);
    if (end === 0) return "/";
    return path.substring(0, end);
}
class AdbSync extends (0, _event.AutoDisposable) {
    _adb;
    _socket;
    #supportsStat;
    #supportsListV2;
    #fixedPushMkdir;
    #supportsSendReceiveV2;
    #needPushMkdirWorkaround;
    get supportsStat() {
        return this.#supportsStat;
    }
    get supportsListV2() {
        return this.#supportsListV2;
    }
    get fixedPushMkdir() {
        return this.#fixedPushMkdir;
    }
    get supportsSendReceiveV2() {
        return this.#supportsSendReceiveV2;
    }
    get needPushMkdirWorkaround() {
        return this.#needPushMkdirWorkaround;
    }
    constructor(adb, socket){
        super();
        this._adb = adb;
        this._socket = new (0, _socketJs.AdbSyncSocket)(socket, adb.maxPayloadSize);
        this.#supportsStat = adb.canUseFeature((0, _featuresJs.AdbFeature).StatV2);
        this.#supportsListV2 = adb.canUseFeature((0, _featuresJs.AdbFeature).ListV2);
        this.#fixedPushMkdir = adb.canUseFeature((0, _featuresJs.AdbFeature).FixedPushMkdir);
        this.#supportsSendReceiveV2 = adb.canUseFeature((0, _featuresJs.AdbFeature).SendReceiveV2);
        // https://android.googlesource.com/platform/packages/modules/adb/+/91768a57b7138166e0a3d11f79cd55909dda7014/client/file_sync_client.cpp#1361
        this.#needPushMkdirWorkaround = this._adb.canUseFeature((0, _featuresJs.AdbFeature).ShellV2) && !this.fixedPushMkdir;
    }
    /**
     * Gets information of a file or folder.
     *
     * If `path` points to a symbolic link, the returned information is about the link itself (with `type` being `LinuxFileType.Link`).
     */ async lstat(path) {
        return await (0, _statJs.adbSyncLstat)(this._socket, path, this.#supportsStat);
    }
    /**
     * Gets the information of a file or folder.
     *
     * If `path` points to a symbolic link, it will be resolved and the returned information is about the target (with `type` being `LinuxFileType.File` or `LinuxFileType.Directory`).
     */ async stat(path) {
        if (!this.#supportsStat) throw new Error("Not supported");
        return await (0, _statJs.adbSyncStat)(this._socket, path);
    }
    /**
     * Checks if `path` is a directory, or a symbolic link to a directory.
     *
     * This uses `lstat` internally, thus works on all Android versions.
     */ async isDirectory(path) {
        try {
            await this.lstat(path + "/");
            return true;
        } catch (e) {
            return false;
        }
    }
    opendir(path) {
        return (0, _listJs.adbSyncOpenDir)(this._socket, path, this.supportsListV2);
    }
    async readdir(path) {
        const results = [];
        for await (const entry of this.opendir(path))results.push(entry);
        return results;
    }
    /**
     * Reads the content of a file on device.
     *
     * @param filename The full path of the file on device to read.
     * @returns A `ReadableStream` that contains the file content.
     */ read(filename) {
        return (0, _pullJs.adbSyncPull)(this._socket, filename);
    }
    /**
     * Writes a file on device. If the file name already exists, it will be overwritten.
     *
     * @param options The content and options of the file to write.
     */ async write(options) {
        if (this.needPushMkdirWorkaround) // It may fail if `filename` already exists.
        // Ignore the result.
        // TODO: sync: test push mkdir workaround (need an Android 8 device)
        await this._adb.subprocess.spawnAndWait([
            "mkdir",
            "-p",
            (0, _indexJs.escapeArg)(dirname(options.filename))
        ]);
        await (0, _pushJs.adbSyncPush)({
            v2: this.supportsSendReceiveV2,
            socket: this._socket,
            ...options
        });
    }
    lockSocket() {
        return this._socket.lock();
    }
    async dispose() {
        super.dispose();
        await this._socket.close();
    }
}

},{"@yume-chan/event":"ec3KT","../../features.js":"gnUAS","../subprocess/index.js":"9hCWq","./list.js":"cTp6s","./pull.js":"4tA7W","./push.js":"7xK24","./socket.js":"jI1ql","./stat.js":"8cYy6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j3VVS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbTcpIpCommand", ()=>AdbTcpIpCommand);
var _baseJs = require("./base.js");
class AdbTcpIpCommand extends (0, _baseJs.AdbCommandBase) {
    #parsePort(value) {
        if (!value || value === "0") return undefined;
        return Number.parseInt(value, 10);
    }
    async getListenAddresses() {
        const serviceListenAddresses = await this.adb.getProp("service.adb.listen_addrs");
        const servicePort = await this.adb.getProp("service.adb.tcp.port");
        const persistPort = await this.adb.getProp("persist.adb.tcp.port");
        return {
            serviceListenAddresses: serviceListenAddresses != "" ? serviceListenAddresses.split(",") : [],
            servicePort: this.#parsePort(servicePort),
            persistPort: this.#parsePort(persistPort)
        };
    }
    async setPort(port) {
        if (port <= 0) throw new TypeError(`Invalid port ${port}`);
        const output = await this.adb.createSocketAndWait(`tcpip:${port}`);
        if (output !== `restarting in TCP mode port: ${port}\n`) throw new Error(output);
        return output;
    }
    async disable() {
        const output = await this.adb.createSocketAndWait("usb:");
        if (output !== "restarting in USB mode\n") throw new Error(output);
        return output;
    }
}

},{"./base.js":"cOyOA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9KJu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbBannerKey", ()=>AdbBannerKey);
parcelHelpers.export(exports, "AdbBanner", ()=>AdbBanner);
var AdbBannerKey;
(function(AdbBannerKey) {
    AdbBannerKey["Product"] = "ro.product.name";
    AdbBannerKey["Model"] = "ro.product.model";
    AdbBannerKey["Device"] = "ro.product.device";
    AdbBannerKey["Features"] = "features";
})(AdbBannerKey || (AdbBannerKey = {}));
class AdbBanner {
    static parse(banner) {
        let product;
        let model;
        let device;
        let features = [];
        const pieces = banner.split("::");
        if (pieces.length > 1) {
            const props = pieces[1];
            for (const prop of props.split(";")){
                // istanbul ignore if
                if (!prop) continue;
                const keyValue = prop.split("=");
                if (keyValue.length !== 2) continue;
                const [key, value] = keyValue;
                switch(key){
                    case AdbBannerKey.Product:
                        product = value;
                        break;
                    case AdbBannerKey.Model:
                        model = value;
                        break;
                    case AdbBannerKey.Device:
                        device = value;
                        break;
                    case AdbBannerKey.Features:
                        features = value.split(",");
                        break;
                }
            }
        }
        return new AdbBanner(product, model, device, features);
    }
    #product;
    get product() {
        return this.#product;
    }
    #model;
    get model() {
        return this.#model;
    }
    #device;
    get device() {
        return this.#device;
    }
    #features = [];
    get features() {
        return this.#features;
    }
    constructor(product, model, device, features){
        this.#product = product;
        this.#model = model;
        this.#device = device;
        this.#features = features;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6JFnO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _authJs = require("./auth.js");
parcelHelpers.exportAll(_authJs, exports);
var _cryptoJs = require("./crypto.js");
parcelHelpers.exportAll(_cryptoJs, exports);
var _deviceJs = require("./device.js");
parcelHelpers.exportAll(_deviceJs, exports);
var _dispatcherJs = require("./dispatcher.js");
parcelHelpers.exportAll(_dispatcherJs, exports);
var _packetJs = require("./packet.js");
parcelHelpers.exportAll(_packetJs, exports);
var _socketJs = require("./socket.js");
parcelHelpers.exportAll(_socketJs, exports);
var _transportJs = require("./transport.js");
parcelHelpers.exportAll(_transportJs, exports);

},{"./auth.js":"2adE8","./crypto.js":"eaFyU","./device.js":"bTlmx","./dispatcher.js":"iFOkF","./packet.js":"26H41","./socket.js":"btAee","./transport.js":"e6URK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2adE8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbAuthType", ()=>AdbAuthType);
parcelHelpers.export(exports, "AdbSignatureAuthenticator", ()=>AdbSignatureAuthenticator);
parcelHelpers.export(exports, "AdbPublicKeyAuthenticator", ()=>AdbPublicKeyAuthenticator);
parcelHelpers.export(exports, "ADB_DEFAULT_AUTHENTICATORS", ()=>ADB_DEFAULT_AUTHENTICATORS);
parcelHelpers.export(exports, "AdbAuthenticationProcessor", ()=>AdbAuthenticationProcessor);
var _async = require("@yume-chan/async");
var _struct = require("@yume-chan/struct");
var _indexJs = require("../utils/index.js");
var _cryptoJs = require("./crypto.js");
var _packetJs = require("./packet.js");
var AdbAuthType;
(function(AdbAuthType) {
    AdbAuthType[AdbAuthType["Token"] = 1] = "Token";
    AdbAuthType[AdbAuthType["Signature"] = 2] = "Signature";
    AdbAuthType[AdbAuthType["PublicKey"] = 3] = "PublicKey";
})(AdbAuthType || (AdbAuthType = {}));
const AdbSignatureAuthenticator = async function*(credentialStore, getNextRequest) {
    for await (const key of credentialStore.iterateKeys()){
        const packet = await getNextRequest();
        if (packet.arg0 !== AdbAuthType.Token) return;
        const signature = (0, _cryptoJs.rsaSign)(key.buffer, packet.payload);
        yield {
            command: (0, _packetJs.AdbCommand).Auth,
            arg0: AdbAuthType.Signature,
            arg1: 0,
            payload: signature
        };
    }
};
const AdbPublicKeyAuthenticator = async function*(credentialStore, getNextRequest) {
    const packet = await getNextRequest();
    if (packet.arg0 !== AdbAuthType.Token) return;
    let privateKey;
    for await (const key of credentialStore.iterateKeys()){
        privateKey = key;
        break;
    }
    if (!privateKey) privateKey = await credentialStore.generateKey();
    const publicKeyLength = (0, _cryptoJs.adbGetPublicKeySize)();
    const [publicKeyBase64Length] = (0, _indexJs.calculateBase64EncodedLength)(publicKeyLength);
    const nameBuffer = privateKey.name?.length ? (0, _indexJs.encodeUtf8)(privateKey.name) : (0, _struct.EMPTY_UINT8_ARRAY);
    const publicKeyBuffer = new Uint8Array(publicKeyBase64Length + (nameBuffer.length ? nameBuffer.length + 1 : 0) + // Space character + name
    1);
    (0, _cryptoJs.adbGeneratePublicKey)(privateKey.buffer, publicKeyBuffer);
    (0, _indexJs.encodeBase64)(publicKeyBuffer.subarray(0, publicKeyLength), publicKeyBuffer);
    if (nameBuffer.length) {
        publicKeyBuffer[publicKeyBase64Length] = 0x20;
        publicKeyBuffer.set(nameBuffer, publicKeyBase64Length + 1);
    }
    yield {
        command: (0, _packetJs.AdbCommand).Auth,
        arg0: AdbAuthType.PublicKey,
        arg1: 0,
        payload: publicKeyBuffer
    };
};
const ADB_DEFAULT_AUTHENTICATORS = [
    AdbSignatureAuthenticator,
    AdbPublicKeyAuthenticator
];
class AdbAuthenticationProcessor {
    authenticators;
    #credentialStore;
    #pendingRequest = new (0, _async.PromiseResolver)();
    #iterator;
    constructor(authenticators, credentialStore){
        this.authenticators = authenticators;
        this.#credentialStore = credentialStore;
    }
    #getNextRequest = ()=>{
        return this.#pendingRequest.promise;
    };
    async *#invokeAuthenticator() {
        for (const authenticator of this.authenticators)for await (const packet of authenticator(this.#credentialStore, this.#getNextRequest)){
            // If the authenticator yielded a response
            // Prepare `nextRequest` for next authentication request
            this.#pendingRequest = new (0, _async.PromiseResolver)();
            // Yield the response to outer layer
            yield packet;
        }
    }
    async process(packet) {
        if (!this.#iterator) this.#iterator = this.#invokeAuthenticator();
        this.#pendingRequest.resolve(packet);
        const result = await this.#iterator.next();
        if (result.done) throw new Error("No authenticator can handle the request");
        return result.value;
    }
    dispose() {
        this.#iterator?.return?.();
    }
}

},{"@yume-chan/async":"dkY37","@yume-chan/struct":"bhoSk","../utils/index.js":"9S5h7","./crypto.js":"eaFyU","./packet.js":"26H41","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eaFyU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Gets the `BigInt` value at the specified byte offset and length from the start of the view. There is
 * no alignment constraint; multi-byte values may be fetched from any offset.
 *
 * Only supports Big-Endian, because that's what ADB uses.
 * @param byteOffset The place in the buffer at which the value should be retrieved.
 */ parcelHelpers.export(exports, "getBigUint", ()=>getBigUint);
/**
 * Stores an arbitrary-precision positive `BigInt` value at the specified byte offset from the start of the view.
 * @param byteOffset The place in the buffer at which the value should be set.
 * @param length The number of bytes to set.
 * @param value The value to set.
 * @param littleEndian If `false` or `undefined`, a big-endian value should be written,
 * otherwise a little-endian value should be written.
 */ parcelHelpers.export(exports, "setBigUint", ()=>setBigUint);
parcelHelpers.export(exports, "rsaParsePrivateKey", ()=>rsaParsePrivateKey);
// https://en.wikipedia.org/wiki/Modular_multiplicative_inverse
// Solve for the smallest positive `x` in the equation `a * x ≡ 1 (mod m)`,
// or in other words, `a * x % m = 1`
// Taken from https://stackoverflow.com/a/51562038
// Only used with numbers smaller than 2^32 so doesn't need BigInt
parcelHelpers.export(exports, "modInverse", ()=>modInverse);
parcelHelpers.export(exports, "adbGetPublicKeySize", ()=>adbGetPublicKeySize);
parcelHelpers.export(exports, "adbGeneratePublicKey", ()=>adbGeneratePublicKey);
/**
 * Modular exponentiation.
 *
 * Calculate `(base ** exponent) % modulus` without actually calculating `(base ** exponent)`.
 *
 * See https://en.wikipedia.org/wiki/Modular_exponentiation#Implementation_in_Lua
 */ parcelHelpers.export(exports, "powMod", ()=>powMod);
parcelHelpers.export(exports, "SHA1_DIGEST_LENGTH", ()=>SHA1_DIGEST_LENGTH);
parcelHelpers.export(exports, "ASN1_SEQUENCE", ()=>ASN1_SEQUENCE);
parcelHelpers.export(exports, "ASN1_OCTET_STRING", ()=>ASN1_OCTET_STRING);
parcelHelpers.export(exports, "ASN1_NULL", ()=>ASN1_NULL);
parcelHelpers.export(exports, "ASN1_OID", ()=>ASN1_OID);
parcelHelpers.export(exports, "SHA1_DIGEST_INFO", ()=>SHA1_DIGEST_INFO);
// SubtleCrypto.sign() will hash the given data and sign the hash
// But we don't need the hashing step
// (In another word, ADB just requires the client to
// encrypt the given data with its private key)
// However SubtileCrypto.encrypt() doesn't accept 'RSASSA-PKCS1-v1_5' algorithm
// So we need to implement the encryption by ourself
parcelHelpers.export(exports, "rsaSign", ()=>rsaSign);
var _noDataView = require("@yume-chan/no-data-view");
function getBigUint(array, byteOffset, length) {
    let result = 0n;
    // Currently `length` must be a multiplication of 8
    // Support for arbitrary length can be easily added
    for(let i = byteOffset; i < byteOffset + length; i += 8){
        result <<= 64n;
        const value = (0, _noDataView.getUint64BigEndian)(array, i);
        result |= value;
    }
    return result;
}
function setBigUint(array, byteOffset, length, value, littleEndian) {
    if (littleEndian) while(value > 0n){
        (0, _noDataView.setInt64LittleEndian)(array, byteOffset, value);
        byteOffset += 8;
        value >>= 64n;
    }
    else {
        let position = byteOffset + length - 8;
        while(value > 0n){
            (0, _noDataView.setInt64BigEndian)(array, position, value);
            position -= 8;
            value >>= 64n;
        }
    }
}
// These values are correct only if
// modulus length is 2048 and
// public exponent (e) is 65537
// Anyway, that's how this library generates keys
// To support other parameters,
// a proper ASN.1 parser can be used
// References:
//
//   https://tools.ietf.org/html/rfc8017#appendix-A.1.2
//   PKCS #1: RSA Cryptography Specifications Version 2.2
//     A.1.2.  RSA Private Key Syntax
//
//   https://lapo.it/asn1js/
//   https://github.com/lapo-luchini/asn1js
//   ASN.1 JavaScript decoder
//
//   https://www.itu.int/rec/T-REC-X.690-201508-I/en
//   X.690: Specification of Distinguished Encoding Rules (DER)
const RsaPrivateKeyNOffset = 38;
const RsaPrivateKeyNLength = 256;
const RsaPrivateKeyDOffset = 303;
const RsaPrivateKeyDLength = 256;
function rsaParsePrivateKey(key) {
    const n = getBigUint(key, RsaPrivateKeyNOffset, RsaPrivateKeyNLength);
    const d = getBigUint(key, RsaPrivateKeyDOffset, RsaPrivateKeyDLength);
    return [
        n,
        d
    ];
}
function nonNegativeMod(m, d) {
    const r = m % d;
    if (r > 0) return r;
    return r + (d > 0 ? d : -d);
}
function modInverse(a, m) {
    a = nonNegativeMod(a, m);
    if (!a || m < 2) return NaN; // invalid input
    // find the gcd
    const s = [];
    let b = m;
    while(b){
        [a, b] = [
            b,
            a % b
        ];
        s.push({
            a,
            b
        });
    }
    /* istanbul ignore next */ if (a !== 1) return NaN; // inverse does not exists
    // find the inverse
    let x = 1;
    let y = 0;
    for(let i = s.length - 2; i >= 0; i -= 1)[x, y] = [
        y,
        x - y * Math.floor(s[i].a / s[i].b)
    ];
    return nonNegativeMod(y, m);
}
const ModulusLengthInBytes = 256;
const ModulusLengthInWords = ModulusLengthInBytes / 4;
function adbGetPublicKeySize() {
    return 8 + ModulusLengthInBytes + ModulusLengthInBytes + 4;
}
function adbGeneratePublicKey(privateKey, output) {
    // cspell: ignore: mincrypt
    // Android 6 and earlier has its own encryption library called mincrypt
    // This is the RSA public key format used by mincrypt:
    // https://android.googlesource.com/platform/system/core/+/bb0c180e62703c2068a1b2c9f8ba6d634bf1553c/include/mincrypt/rsa.h#46
    // `n0inv` and `rr` are pre-calculated to speed up RSA operations
    // Android 7 switched its encryption library to BoringSSL, but still keeps the key format:
    // https://android.googlesource.com/platform/system/core.git/+/91784040db2b9273687f88d8b95f729d4a61ecc2/libcrypto_utils/android_pubkey.cpp#38
    // Except when reading a key, `n0inv` and `rr` are ignored (they are still populated when generating a key):
    // https://android.googlesource.com/platform/system/core.git/+/91784040db2b9273687f88d8b95f729d4a61ecc2/libcrypto_utils/android_pubkey.cpp#55
    // The public key is a struct (in little endian) of:
    //
    // [
    //   modulusLengthInWords, // 32-bit integer, a "word" is 32-bit so it must be 2048 / 8 / 4
    //                         // (the comment in Android source code is incorrect saying "This must be ANDROID_PUBKEY_MODULUS_SIZE")
    //   n0inv,                // 32-bit integer, the modular inverse of (lower 32 bits of `n`)
    //   modulus,              // `n`
    //   rr,                   // Montgomery parameter R^2
    //   exponent,             // 32-bit integer, must be 3 or 65537
    // ]
    let outputType;
    const outputLength = adbGetPublicKeySize();
    if (!output) {
        output = new Uint8Array(outputLength);
        outputType = "Uint8Array";
    } else {
        if (output.length < outputLength) throw new TypeError("output buffer is too small");
        outputType = "number";
    }
    const outputView = new DataView(output.buffer, output.byteOffset, output.length);
    let outputOffset = 0;
    // modulusLengthInWords
    outputView.setUint32(outputOffset, ModulusLengthInWords, true);
    outputOffset += 4;
    // extract `n` from private key
    const [n] = rsaParsePrivateKey(privateKey);
    // Calculate `n0inv`
    const n0inv = -modInverse(Number(n % 2n ** 32n), 2 ** 32);
    outputView.setInt32(outputOffset, n0inv, true);
    outputOffset += 4;
    // Write `n` (a.k.a. `modulus`)
    setBigUint(output, outputOffset, ModulusLengthInBytes, n, true);
    outputOffset += ModulusLengthInBytes;
    // Calculate rr = (2 ** (rsa_size)) ** 2 % n
    const rr = 2n ** 4096n % n;
    setBigUint(output, outputOffset, ModulusLengthInBytes, rr, true);
    outputOffset += ModulusLengthInBytes;
    // exponent
    outputView.setUint32(outputOffset, 65537, true);
    outputOffset += 4;
    if (outputType === "Uint8Array") return output;
    else return outputLength;
}
function powMod(base, exponent, modulus) {
    if (modulus === 1n) return 0n;
    let r = 1n;
    base = base % modulus;
    while(exponent > 0n){
        if (BigInt.asUintN(1, exponent) === 1n) r = r * base % modulus;
        base = base * base % modulus;
        exponent >>= 1n;
    }
    return r;
}
const SHA1_DIGEST_LENGTH = 20;
const ASN1_SEQUENCE = 0x30;
const ASN1_OCTET_STRING = 0x04;
const ASN1_NULL = 0x05;
const ASN1_OID = 0x06;
const SHA1_DIGEST_INFO = new Uint8Array([
    ASN1_SEQUENCE,
    0x0d + SHA1_DIGEST_LENGTH,
    ASN1_SEQUENCE,
    0x09,
    // SHA-1 (1 3 14 3 2 26)
    ASN1_OID,
    0x05,
    43,
    14,
    3,
    2,
    26,
    ASN1_NULL,
    0x00,
    ASN1_OCTET_STRING,
    SHA1_DIGEST_LENGTH
]);
function rsaSign(privateKey, data) {
    const [n, d] = rsaParsePrivateKey(privateKey);
    // PKCS#1 padding
    const padded = new Uint8Array(256);
    let index = 0;
    padded[index] = 0;
    index += 1;
    padded[index] = 1;
    index += 1;
    const fillLength = padded.length - SHA1_DIGEST_INFO.length - data.length - 1;
    while(index < fillLength){
        padded[index] = 0xff;
        index += 1;
    }
    padded[index] = 0;
    index += 1;
    padded.set(SHA1_DIGEST_INFO, index);
    index += SHA1_DIGEST_INFO.length;
    padded.set(data, index);
    // Encryption
    // signature = padded ** d % n
    const signature = powMod(getBigUint(padded, 0, padded.length), d, n);
    // `padded` is not used anymore,
    // re-use the buffer to store the result
    setBigUint(padded, 0, padded.length, signature, false);
    return padded;
}

},{"@yume-chan/no-data-view":"iBcsB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26H41":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbCommand", ()=>AdbCommand);
parcelHelpers.export(exports, "AdbPacketHeader", ()=>AdbPacketHeader);
parcelHelpers.export(exports, "AdbPacket", ()=>AdbPacket);
parcelHelpers.export(exports, "calculateChecksum", ()=>calculateChecksum);
parcelHelpers.export(exports, "AdbPacketSerializeStream", ()=>AdbPacketSerializeStream);
var _streamExtra = require("@yume-chan/stream-extra");
var _struct = require("@yume-chan/struct");
var _structDefault = parcelHelpers.interopDefault(_struct);
var AdbCommand;
(function(AdbCommand) {
    AdbCommand[AdbCommand["Auth"] = 1213486401] = "Auth";
    AdbCommand[AdbCommand["Close"] = 1163086915] = "Close";
    AdbCommand[AdbCommand["Connect"] = 1314410051] = "Connect";
    AdbCommand[AdbCommand["Okay"] = 1497451343] = "Okay";
    AdbCommand[AdbCommand["Open"] = 1313165391] = "Open";
    AdbCommand[AdbCommand["Write"] = 1163154007] = "Write";
})(AdbCommand || (AdbCommand = {}));
const AdbPacketHeader = new (0, _structDefault.default)({
    littleEndian: true
}).uint32("command").uint32("arg0").uint32("arg1").uint32("payloadLength").uint32("checksum").int32("magic");
const AdbPacket = new (0, _structDefault.default)({
    littleEndian: true
}).concat(AdbPacketHeader).uint8Array("payload", {
    lengthField: "payloadLength"
});
function calculateChecksum(payload) {
    return payload.reduce((result, item)=>result + item, 0);
}
class AdbPacketSerializeStream extends (0, _streamExtra.TransformStream) {
    constructor(){
        const headerBuffer = new Uint8Array(AdbPacketHeader.size);
        super({
            transform: async (chunk, controller)=>{
                await chunk.tryConsume(async (chunk)=>{
                    const init = chunk;
                    init.payloadLength = init.payload.length;
                    await (0, _streamExtra.Consumable).ReadableStream.enqueue(controller, AdbPacketHeader.serialize(init, headerBuffer));
                    if (init.payloadLength) // USB protocol preserves packet boundaries,
                    // so we must write payload separately as native ADB does,
                    // otherwise the read operation on device will fail.
                    await (0, _streamExtra.Consumable).ReadableStream.enqueue(controller, init.payload);
                });
            }
        });
    }
}

},{"@yume-chan/stream-extra":"jSEnK","@yume-chan/struct":"bhoSk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bTlmx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iFOkF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The dispatcher is the "dumb" part of the connection handling logic.
 *
 * Except some options to change some minor behaviors,
 * its only job is forwarding packets between authenticated underlying streams
 * and abstracted socket objects.
 *
 * The `Adb` class is responsible for doing the authentication,
 * negotiating the options, and has shortcuts to high-level services.
 */ parcelHelpers.export(exports, "AdbPacketDispatcher", ()=>AdbPacketDispatcher);
var _async = require("@yume-chan/async");
var _noDataView = require("@yume-chan/no-data-view");
var _streamExtra = require("@yume-chan/stream-extra");
var _struct = require("@yume-chan/struct");
var _packetJs = require("./packet.js");
var _socketJs = require("./socket.js");
class AdbPacketDispatcher {
    // ADB socket id starts from 1
    // (0 means open failed)
    #initializers = new (0, _async.AsyncOperationManager)(1);
    /**
     * Socket local ID to the socket controller.
     */ #sockets = new Map();
    #writer;
    options;
    #closed = false;
    #disconnected = new (0, _async.PromiseResolver)();
    get disconnected() {
        return this.#disconnected.promise;
    }
    #incomingSocketHandlers = new Map();
    #readAbortController = new (0, _streamExtra.AbortController)();
    constructor(connection, options){
        this.options = options;
        // Don't allow negative values in dispatcher
        if (this.options.initialDelayedAckBytes < 0) this.options.initialDelayedAckBytes = 0;
        connection.readable.pipeTo(new (0, _streamExtra.WritableStream)({
            write: async (packet)=>{
                switch(packet.command){
                    case (0, _packetJs.AdbCommand).Close:
                        await this.#handleClose(packet);
                        break;
                    case (0, _packetJs.AdbCommand).Okay:
                        this.#handleOkay(packet);
                        break;
                    case (0, _packetJs.AdbCommand).Open:
                        await this.#handleOpen(packet);
                        break;
                    case (0, _packetJs.AdbCommand).Write:
                        await this.#handleWrite(packet);
                        break;
                    default:
                        // Junk data may only appear in the authentication phase,
                        // since the dispatcher only works after authentication,
                        // all packets should have a valid command.
                        // (although it's possible that Adb added new commands in the future)
                        throw new Error(`Unknown command: ${packet.command.toString(16)}`);
                }
            }
        }), {
            preventCancel: options.preserveConnection ?? false,
            signal: this.#readAbortController.signal
        }).then(()=>{
            this.#dispose();
        }, (e)=>{
            if (!this.#closed) this.#disconnected.reject(e);
            this.#dispose();
        });
        this.#writer = connection.writable.getWriter();
    }
    async #handleClose(packet) {
        // If the socket is still pending
        if (packet.arg0 === 0 && this.#initializers.reject(packet.arg1, new Error("Socket open failed"))) // Device failed to create the socket
        // (unknown service string, failed to execute command, etc.)
        // it doesn't break the connection,
        // so only reject the socket creation promise,
        // don't throw an error here.
        return;
        // From https://android.googlesource.com/platform/packages/modules/adb/+/65d18e2c1cc48b585811954892311b28a4c3d188/adb.cpp#459
        /* According to protocol.txt, p->msg.arg0 might be 0 to indicate
         * a failed OPEN only. However, due to a bug in previous ADB
         * versions, CLOSE(0, remote-id, "") was also used for normal
         * CLOSE() operations.
         */ // Ignore `arg0` and search for the socket
        const socket = this.#sockets.get(packet.arg1);
        if (socket) {
            await socket.close();
            socket.dispose();
            this.#sockets.delete(packet.arg1);
            return;
        }
    // TODO: adb: is double closing an socket a catastrophic error?
    // If the client sends two `CLSE` packets for one socket,
    // the device may also respond with two `CLSE` packets.
    }
    #handleOkay(packet) {
        let ackBytes;
        if (this.options.initialDelayedAckBytes !== 0) {
            if (packet.payload.length !== 4) throw new Error("Invalid OKAY packet. Payload size should be 4");
            ackBytes = (0, _noDataView.getUint32LittleEndian)(packet.payload, 0);
        } else {
            if (packet.payload.length !== 0) throw new Error("Invalid OKAY packet. Payload size should be 0");
            ackBytes = Infinity;
        }
        if (this.#initializers.resolve(packet.arg1, {
            remoteId: packet.arg0,
            availableWriteBytes: ackBytes
        })) // Device successfully created the socket
        return;
        const socket = this.#sockets.get(packet.arg1);
        if (socket) {
            // When delayed ack is enabled, `ackBytes` is a positive number represents
            // how many bytes the device has received from this socket.
            // When delayed ack is disabled, `ackBytes` is always `Infinity` represents
            // the device has received last `WRTE` packet from the socket.
            socket.ack(ackBytes);
            return;
        }
        // Maybe the device is responding to a packet of last connection
        // Tell the device to close the socket
        this.sendPacket((0, _packetJs.AdbCommand).Close, packet.arg1, packet.arg0, (0, _struct.EMPTY_UINT8_ARRAY));
    }
    #sendOkay(localId, remoteId, ackBytes) {
        let payload;
        if (this.options.initialDelayedAckBytes !== 0) {
            // TODO: try reusing this buffer to reduce memory allocation
            // However, that requires blocking reentrance of `sendOkay`, which might be more expensive
            payload = new Uint8Array(4);
            (0, _noDataView.setUint32LittleEndian)(payload, 0, ackBytes);
        } else payload = (0, _struct.EMPTY_UINT8_ARRAY);
        return this.sendPacket((0, _packetJs.AdbCommand).Okay, localId, remoteId, payload);
    }
    async #handleOpen(packet) {
        // Allocate a local ID for the socket from `#initializers`.
        // `AsyncOperationManager` doesn't directly support returning the next ID,
        // so use `add` + `resolve` to simulate this
        const [localId] = this.#initializers.add();
        this.#initializers.resolve(localId, undefined);
        const remoteId = packet.arg0;
        let availableWriteBytes = packet.arg1;
        let service = (0, _struct.decodeUtf8)(packet.payload);
        // ADB Daemon still adds a null character to the service string
        if (service.endsWith("\0")) service = service.substring(0, service.length - 1);
        // Check remote delayed ack enablement is consistent with local
        if (this.options.initialDelayedAckBytes === 0) {
            if (availableWriteBytes !== 0) throw new Error("Invalid OPEN packet. arg1 should be 0");
            availableWriteBytes = Infinity;
        } else {
            if (availableWriteBytes === 0) throw new Error("Invalid OPEN packet. arg1 should be greater than 0");
        }
        const handler = this.#incomingSocketHandlers.get(service);
        if (!handler) {
            await this.sendPacket((0, _packetJs.AdbCommand).Close, 0, remoteId, (0, _struct.EMPTY_UINT8_ARRAY));
            return;
        }
        const controller = new (0, _socketJs.AdbDaemonSocketController)({
            dispatcher: this,
            localId,
            remoteId,
            localCreated: false,
            service,
            availableWriteBytes
        });
        try {
            await handler(controller.socket);
            this.#sockets.set(localId, controller);
            await this.#sendOkay(localId, remoteId, this.options.initialDelayedAckBytes);
        } catch (e) {
            await this.sendPacket((0, _packetJs.AdbCommand).Close, 0, remoteId, (0, _struct.EMPTY_UINT8_ARRAY));
        }
    }
    async #handleWrite(packet) {
        const socket = this.#sockets.get(packet.arg1);
        if (!socket) throw new Error(`Unknown local socket id: ${packet.arg1}`);
        let handled = false;
        const promises = [
            (async ()=>{
                await socket.enqueue(packet.payload);
                await this.#sendOkay(packet.arg1, packet.arg0, packet.payload.length);
                handled = true;
            })()
        ];
        if (this.options.readTimeLimit) promises.push((async ()=>{
            await (0, _async.delay)(this.options.readTimeLimit);
            if (!handled) throw new Error(`readable of \`${socket.service}\` has stalled for ${this.options.readTimeLimit} milliseconds`);
        })());
        await Promise.race(promises);
    }
    async createSocket(service) {
        if (this.options.appendNullToServiceString) service += "\0";
        const [localId, initializer] = this.#initializers.add();
        await this.sendPacket((0, _packetJs.AdbCommand).Open, localId, this.options.initialDelayedAckBytes, service);
        // Fulfilled by `handleOkay`
        const { remoteId, availableWriteBytes } = await initializer;
        const controller = new (0, _socketJs.AdbDaemonSocketController)({
            dispatcher: this,
            localId,
            remoteId,
            localCreated: true,
            service,
            availableWriteBytes
        });
        this.#sockets.set(localId, controller);
        return controller.socket;
    }
    addReverseTunnel(service, handler) {
        this.#incomingSocketHandlers.set(service, handler);
    }
    removeReverseTunnel(address) {
        this.#incomingSocketHandlers.delete(address);
    }
    clearReverseTunnels() {
        this.#incomingSocketHandlers.clear();
    }
    async sendPacket(command, arg0, arg1, // PERF: It's slightly faster to not use default parameter values
    payload) {
        if (typeof payload === "string") payload = (0, _struct.encodeUtf8)(payload);
        if (payload.length > this.options.maxPayloadSize) throw new TypeError("payload too large");
        await (0, _streamExtra.Consumable).WritableStream.write(this.#writer, {
            command,
            arg0,
            arg1,
            payload,
            checksum: this.options.calculateChecksum ? (0, _packetJs.calculateChecksum)(payload) : 0,
            magic: command ^ 0xffffffff
        });
    }
    async close() {
        // Send `CLSE` packets for all sockets
        await Promise.all(Array.from(this.#sockets.values(), (socket)=>socket.close()));
        // Stop receiving
        // It's possible that we haven't received all `CLSE` confirm packets,
        // but it doesn't matter, the next connection can cope with them.
        this.#closed = true;
        this.#readAbortController.abort();
        if (this.options.preserveConnection) this.#writer.releaseLock();
        else await this.#writer.close();
    // `pipe().then()` will call `dispose`
    }
    #dispose() {
        for (const socket of this.#sockets.values())socket.dispose();
        this.#disconnected.resolve();
    }
}

},{"@yume-chan/async":"dkY37","@yume-chan/no-data-view":"iBcsB","@yume-chan/stream-extra":"jSEnK","@yume-chan/struct":"bhoSk","./packet.js":"26H41","./socket.js":"btAee","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"btAee":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbDaemonSocketController", ()=>AdbDaemonSocketController);
/**
 * A duplex stream representing a socket to ADB daemon.
 *
 * To close it, call either `socket.close()`,
 * `socket.readable.cancel()`, `socket.readable.getReader().cancel()`,
 * `socket.writable.abort()`, `socket.writable.getWriter().abort()`,
 * `socket.writable.close()` or `socket.writable.getWriter().close()`.
 */ parcelHelpers.export(exports, "AdbDaemonSocket", ()=>AdbDaemonSocket);
var _async = require("@yume-chan/async");
var _streamExtra = require("@yume-chan/stream-extra");
var _struct = require("@yume-chan/struct");
var _packetJs = require("./packet.js");
class AdbDaemonSocketController {
    #dispatcher;
    localId;
    remoteId;
    localCreated;
    service;
    #readable;
    #readableController;
    get readable() {
        return this.#readable;
    }
    #writableController;
    writable;
    #closed = false;
    #closedPromise = new (0, _async.PromiseResolver)();
    get closed() {
        return this.#closedPromise.promise;
    }
    #socket;
    get socket() {
        return this.#socket;
    }
    #availableWriteBytesChanged;
    /**
     * When delayed ack is disabled, returns `Infinity` if the socket is ready to write
     * (exactly one packet can be written no matter how large it is), or `-1` if the socket
     * is waiting for ack message.
     *
     * When delayed ack is enabled, returns a non-negative finite number indicates the number of
     * bytes that can be written to the socket before waiting for ack message.
     */ #availableWriteBytes = 0;
    constructor(options){
        this.#dispatcher = options.dispatcher;
        this.localId = options.localId;
        this.remoteId = options.remoteId;
        this.localCreated = options.localCreated;
        this.service = options.service;
        this.#readable = new (0, _streamExtra.PushReadableStream)((controller)=>{
            this.#readableController = controller;
        });
        this.writable = new (0, _streamExtra.MaybeConsumable).WritableStream({
            start: (controller)=>{
                this.#writableController = controller;
                controller.signal.addEventListener("abort", ()=>{
                    this.#availableWriteBytesChanged?.reject(controller.signal.reason);
                });
            },
            write: async (data)=>{
                const size = data.length;
                const chunkSize = this.#dispatcher.options.maxPayloadSize;
                for(let start = 0, end = chunkSize; start < size; start = end, end += chunkSize){
                    const chunk = data.subarray(start, end);
                    await this.#writeChunk(chunk);
                }
            }
        });
        this.#socket = new AdbDaemonSocket(this);
        this.#availableWriteBytes = options.availableWriteBytes;
    }
    async #writeChunk(data) {
        const length = data.length;
        while(this.#availableWriteBytes < length){
            // Only one lock is required because Web Streams API guarantees
            // that `write` is not reentrant.
            const resolver = new (0, _async.PromiseResolver)();
            this.#availableWriteBytesChanged = resolver;
            await resolver.promise;
        }
        if (this.#availableWriteBytes === Infinity) this.#availableWriteBytes = -1;
        else this.#availableWriteBytes -= length;
        await this.#dispatcher.sendPacket((0, _packetJs.AdbCommand).Write, this.localId, this.remoteId, data);
    }
    async enqueue(data) {
        // Consumers can `cancel` the `readable` if they are not interested in future data.
        // Throw away the data if that happens.
        if (this.#readableController.abortSignal.aborted) return;
        try {
            await this.#readableController.enqueue(data);
        } catch (e) {
            if (this.#readableController.abortSignal.aborted) return;
            throw e;
        }
    }
    ack(bytes) {
        this.#availableWriteBytes += bytes;
        this.#availableWriteBytesChanged?.resolve();
    }
    async close() {
        if (this.#closed) return;
        this.#closed = true;
        this.#availableWriteBytesChanged?.reject(new Error("Socket closed"));
        try {
            this.#writableController.error(new Error("Socket closed"));
        } catch  {
        // ignore
        }
        await this.#dispatcher.sendPacket((0, _packetJs.AdbCommand).Close, this.localId, this.remoteId, (0, _struct.EMPTY_UINT8_ARRAY));
    }
    dispose() {
        try {
            this.#readableController.close();
        } catch  {
        // ignore
        }
        this.#closedPromise.resolve();
    }
}
class AdbDaemonSocket {
    #controller;
    get localId() {
        return this.#controller.localId;
    }
    get remoteId() {
        return this.#controller.remoteId;
    }
    get localCreated() {
        return this.#controller.localCreated;
    }
    get service() {
        return this.#controller.service;
    }
    get readable() {
        return this.#controller.readable;
    }
    get writable() {
        return this.#controller.writable;
    }
    get closed() {
        return this.#controller.closed;
    }
    constructor(controller){
        this.#controller = controller;
    }
    close() {
        return this.#controller.close();
    }
}

},{"@yume-chan/async":"dkY37","@yume-chan/stream-extra":"jSEnK","@yume-chan/struct":"bhoSk","./packet.js":"26H41","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e6URK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ADB_DAEMON_VERSION_OMIT_CHECKSUM", ()=>ADB_DAEMON_VERSION_OMIT_CHECKSUM);
parcelHelpers.export(exports, "ADB_DAEMON_DEFAULT_FEATURES", ()=>ADB_DAEMON_DEFAULT_FEATURES);
parcelHelpers.export(exports, "ADB_DAEMON_DEFAULT_INITIAL_PAYLOAD_SIZE", ()=>ADB_DAEMON_DEFAULT_INITIAL_PAYLOAD_SIZE);
parcelHelpers.export(exports, "AdbDaemonTransport", ()=>AdbDaemonTransport);
var _async = require("@yume-chan/async");
var _streamExtra = require("@yume-chan/stream-extra");
var _struct = require("@yume-chan/struct");
var _bannerJs = require("../banner.js");
var _featuresJs = require("../features.js");
var _authJs = require("./auth.js");
var _dispatcherJs = require("./dispatcher.js");
var _packetJs = require("./packet.js");
const ADB_DAEMON_VERSION_OMIT_CHECKSUM = 0x01000001;
const ADB_DAEMON_DEFAULT_FEATURES = [
    (0, _featuresJs.AdbFeature).ShellV2,
    (0, _featuresJs.AdbFeature).Cmd,
    (0, _featuresJs.AdbFeature).StatV2,
    (0, _featuresJs.AdbFeature).ListV2,
    (0, _featuresJs.AdbFeature).FixedPushMkdir,
    "apex",
    (0, _featuresJs.AdbFeature).Abb,
    // only tells the client the symlink timestamp issue in `adb push --sync` has been fixed.
    // No special handling required.
    "fixed_push_symlink_timestamp",
    (0, _featuresJs.AdbFeature).AbbExec,
    "remount_shell",
    "track_app",
    (0, _featuresJs.AdbFeature).SendReceiveV2,
    "sendrecv_v2_brotli",
    "sendrecv_v2_lz4",
    "sendrecv_v2_zstd",
    "sendrecv_v2_dry_run_send",
    (0, _featuresJs.AdbFeature).DelayedAck
];
const ADB_DAEMON_DEFAULT_INITIAL_PAYLOAD_SIZE = 33554432;
class AdbDaemonTransport {
    /**
     * Authenticates the connection and creates an `AdbDaemonTransport` instance
     * that can be used by `Adb` class.
     *
     * If an authentication process failed,
     * no matter which value the `preserveConnection` option has,
     * the `connection` is always kept open, so it can be used in another `authenticate` call.
     */ static async authenticate({ serial, connection, credentialStore, authenticators = (0, _authJs.ADB_DEFAULT_AUTHENTICATORS), features = ADB_DAEMON_DEFAULT_FEATURES, initialDelayedAckBytes = ADB_DAEMON_DEFAULT_INITIAL_PAYLOAD_SIZE, ...options }) {
        // Initially, set to highest-supported version and payload size.
        let version = 0x01000001;
        // Android 4: 4K, Android 7: 256K, Android 9: 1M
        let maxPayloadSize = 1048576;
        const resolver = new (0, _async.PromiseResolver)();
        const authProcessor = new (0, _authJs.AdbAuthenticationProcessor)(authenticators, credentialStore);
        // Here is similar to `AdbPacketDispatcher`,
        // But the received packet types and send packet processing are different.
        const abortController = new (0, _streamExtra.AbortController)();
        const pipe = connection.readable.pipeTo(new (0, _streamExtra.WritableStream)({
            async write (packet) {
                switch(packet.command){
                    case (0, _packetJs.AdbCommand).Connect:
                        version = Math.min(version, packet.arg0);
                        maxPayloadSize = Math.min(maxPayloadSize, packet.arg1);
                        resolver.resolve((0, _struct.decodeUtf8)(packet.payload));
                        break;
                    case (0, _packetJs.AdbCommand).Auth:
                        {
                            const response = await authProcessor.process(packet);
                            await sendPacket(response);
                            break;
                        }
                    default:
                        break;
                }
            }
        }), {
            // Don't cancel the source ReadableStream on AbortSignal abort.
            preventCancel: true,
            signal: abortController.signal
        }).then(()=>{
            // If `resolver` is already settled, call `reject` won't do anything.
            resolver.reject(new Error("Connection closed unexpectedly"));
        }, (e)=>{
            resolver.reject(e);
        });
        const writer = connection.writable.getWriter();
        async function sendPacket(init) {
            // Always send checksum in auth steps
            // Because we don't know if the device needs it or not.
            init.checksum = (0, _packetJs.calculateChecksum)(init.payload);
            init.magic = init.command ^ 0xffffffff;
            await (0, _streamExtra.Consumable).WritableStream.write(writer, init);
        }
        const actualFeatures = features.slice();
        if (initialDelayedAckBytes <= 0) {
            const index = features.indexOf((0, _featuresJs.AdbFeature).DelayedAck);
            if (index !== -1) actualFeatures.splice(index, 1);
        }
        let banner;
        try {
            await sendPacket({
                command: (0, _packetJs.AdbCommand).Connect,
                arg0: version,
                arg1: maxPayloadSize,
                // The terminating `;` is required in formal definition
                // But ADB daemon (all versions) can still work without it
                payload: (0, _struct.encodeUtf8)(`host::features=${actualFeatures.join(",")}`)
            });
            banner = await resolver.promise;
        } finally{
            // When failed, release locks on `connection` so the caller can try again.
            // When success, also release locks so `AdbPacketDispatcher` can use them.
            abortController.abort();
            writer.releaseLock();
            // Wait until pipe stops (`ReadableStream` lock released)
            await pipe;
        }
        return new AdbDaemonTransport({
            serial,
            connection,
            version,
            maxPayloadSize,
            banner,
            features: actualFeatures,
            initialDelayedAckBytes,
            ...options
        });
    }
    #connection;
    get connection() {
        return this.#connection;
    }
    #dispatcher;
    #serial;
    get serial() {
        return this.#serial;
    }
    #protocolVersion;
    get protocolVersion() {
        return this.#protocolVersion;
    }
    get maxPayloadSize() {
        return this.#dispatcher.options.maxPayloadSize;
    }
    #banner;
    get banner() {
        return this.#banner;
    }
    get disconnected() {
        return this.#dispatcher.disconnected;
    }
    #clientFeatures;
    get clientFeatures() {
        return this.#clientFeatures;
    }
    constructor({ serial, connection, version, banner, features = ADB_DAEMON_DEFAULT_FEATURES, initialDelayedAckBytes, ...options }){
        this.#serial = serial;
        this.#connection = connection;
        this.#banner = (0, _bannerJs.AdbBanner).parse(banner);
        this.#clientFeatures = features;
        if (features.includes((0, _featuresJs.AdbFeature).DelayedAck)) {
            if (initialDelayedAckBytes <= 0) throw new TypeError("`initialDelayedAckBytes` must be greater than 0 when DelayedAck feature is enabled.");
            if (!this.#banner.features.includes((0, _featuresJs.AdbFeature).DelayedAck)) initialDelayedAckBytes = 0;
        } else initialDelayedAckBytes = 0;
        let calculateChecksum;
        let appendNullToServiceString;
        if (version >= ADB_DAEMON_VERSION_OMIT_CHECKSUM) {
            calculateChecksum = false;
            appendNullToServiceString = false;
        } else {
            calculateChecksum = true;
            appendNullToServiceString = true;
        }
        this.#dispatcher = new (0, _dispatcherJs.AdbPacketDispatcher)(connection, {
            calculateChecksum,
            appendNullToServiceString,
            initialDelayedAckBytes,
            ...options
        });
        this.#protocolVersion = version;
    }
    connect(service) {
        return this.#dispatcher.createSocket(service);
    }
    addReverseTunnel(handler, address) {
        if (!address) {
            const id = Math.random().toString().substring(2);
            address = `localabstract:reverse_${id}`;
        }
        this.#dispatcher.addReverseTunnel(address, handler);
        return address;
    }
    removeReverseTunnel(address) {
        this.#dispatcher.removeReverseTunnel(address);
    }
    clearReverseTunnels() {
        this.#dispatcher.clearReverseTunnels();
    }
    close() {
        return this.#dispatcher.close();
    }
}

},{"@yume-chan/async":"dkY37","@yume-chan/stream-extra":"jSEnK","@yume-chan/struct":"bhoSk","../banner.js":"9KJu9","../features.js":"gnUAS","./auth.js":"2adE8","./dispatcher.js":"iFOkF","./packet.js":"26H41","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Jkeb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _clientJs = require("./client.js");
parcelHelpers.exportAll(_clientJs, exports);
var _transportJs = require("./transport.js");
parcelHelpers.exportAll(_transportJs, exports);

},{"./client.js":"2BWb7","./transport.js":"glXsA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2BWb7":[function(require,module,exports) {
// cspell:ignore tport
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbServerClient", ()=>AdbServerClient);
parcelHelpers.export(exports, "raceSignal", ()=>raceSignal);
var _async = require("@yume-chan/async");
var _noDataView = require("@yume-chan/no-data-view");
var _streamExtra = require("@yume-chan/stream-extra");
var _struct = require("@yume-chan/struct");
var _bannerJs = require("../banner.js");
var _indexJs = require("../utils/index.js");
var _transportJs = require("./transport.js");
const OKAY = (0, _struct.encodeUtf8)("OKAY");
const FAIL = (0, _struct.encodeUtf8)("FAIL");
class AdbServerStream {
    #connection;
    #buffered;
    #writer;
    constructor(connection){
        this.#connection = connection;
        this.#buffered = new (0, _streamExtra.BufferedReadableStream)(connection.readable);
        this.#writer = connection.writable.getWriter();
    }
    readExactly(length) {
        return this.#buffered.readExactly(length);
    }
    readString() {
        return (0, _struct.SyncPromise).try(()=>this.readExactly(4)).then((buffer)=>{
            const length = (0, _indexJs.hexToNumber)(buffer);
            if (length === 0) return 0, _struct.EMPTY_UINT8_ARRAY;
            else return this.readExactly(length);
        }).then((buffer)=>{
            // TODO: Investigate using stream mode `TextDecoder` for long strings.
            // Because concatenating strings uses rope data structure,
            // which only points to the original strings and doesn't copy the data,
            // it's more efficient than concatenating `Uint8Array`s.
            //
            // ```
            // const decoder = new TextDecoder();
            // let result = '';
            // for await (const chunk of stream.iterateExactly(length)) {
            //     result += decoder.decode(chunk, { stream: true });
            // }
            // result += decoder.decode();
            // return result;
            // ```
            //
            // Although, it will be super complex to use `SyncPromise` with async iterator,
            // `stream.iterateExactly` need to return an
            // `Iterator<Uint8Array | Promise<Uint8Array>>` instead of a true async iterator.
            // Maybe `SyncPromise` should support async iterators directly.
            return (0, _struct.decodeUtf8)(buffer);
        }).valueOrPromise();
    }
    async writeString(value) {
        // TODO: investigate using `encodeUtf8("0000" + value)` then modifying the length
        // That way allocates a new string (hopefully only a rope) instead of a new buffer
        const encoded = (0, _struct.encodeUtf8)(value);
        const buffer = new Uint8Array(4 + encoded.length);
        (0, _indexJs.write4HexDigits)(buffer, 0, encoded.length);
        buffer.set(encoded, 4);
        await this.#writer.write(buffer);
    }
    async readOkay() {
        const response = await this.readExactly(4);
        if ((0, _indexJs.sequenceEqual)(response, OKAY)) // `OKAY` is followed by data length and data
        // But different services want to parse the data differently
        // So don't read the data here
        return;
        if ((0, _indexJs.sequenceEqual)(response, FAIL)) {
            const reason = await this.readString();
            throw new Error(reason);
        }
        throw new Error(`Unexpected response: ${(0, _struct.decodeUtf8)(response)}`);
    }
    release() {
        this.#writer.releaseLock();
        return {
            readable: this.#buffered.release(),
            writable: this.#connection.writable,
            closed: this.#connection.closed,
            close: ()=>this.#connection.close()
        };
    }
    async dispose() {
        await this.#buffered.cancel().catch((0, _indexJs.NOOP));
        await this.#writer.close().catch((0, _indexJs.NOOP));
        try {
            await this.#connection.close();
        } catch  {
        // ignore
        }
    }
}
class AdbServerClient {
    static VERSION = 41;
    connector;
    wireless = new AdbServerClient.WirelessCommands(this);
    mDns = new AdbServerClient.MDnsCommands(this);
    constructor(connection){
        this.connector = connection;
    }
    async createConnection(request, options) {
        const connection = await this.connector.connect(options);
        const stream = new AdbServerStream(connection);
        try {
            await stream.writeString(request);
        } catch (e) {
            await stream.dispose();
            throw e;
        }
        try {
            // `raceSignal` throws when the signal is aborted,
            // so the `catch` block can close the connection.
            await raceSignal(()=>stream.readOkay(), options?.signal);
            return stream;
        } catch (e) {
            await stream.dispose();
            throw e;
        }
    }
    /**
     * `adb version`
     */ async getVersion() {
        const connection = await this.createConnection("host:version");
        try {
            const length = (0, _indexJs.hexToNumber)(await connection.readExactly(4));
            const version = (0, _indexJs.hexToNumber)(await connection.readExactly(length));
            return version;
        } finally{
            await connection.dispose();
        }
    }
    async validateVersion() {
        const version = await this.getVersion();
        if (version !== AdbServerClient.VERSION) throw new Error(`adb server version (${version}) doesn't match this client (${AdbServerClient.VERSION})`);
    }
    /**
     * `adb kill-server`
     */ async killServer() {
        const connection = await this.createConnection("host:kill");
        await connection.dispose();
    }
    /**
     * `adb host-features`
     */ async getServerFeatures() {
        const connection = await this.createConnection("host:host-features");
        try {
            const response = await connection.readString();
            return response.split(",");
        } finally{
            await connection.dispose();
        }
    }
    parseDeviceList(value) {
        const devices = [];
        for (const line of value.split("\n")){
            if (!line) continue;
            const parts = line.split(" ").filter(Boolean);
            const serial = parts[0];
            const status = parts[1];
            if (status !== "device" && status !== "unauthorized") continue;
            let product;
            let model;
            let device;
            let transportId;
            for(let i = 2; i < parts.length; i += 1){
                const [key, value] = parts[i].split(":");
                switch(key){
                    case "product":
                        product = value;
                        break;
                    case "model":
                        model = value;
                        break;
                    case "device":
                        device = value;
                        break;
                    case "transport_id":
                        transportId = BigInt(value);
                        break;
                }
            }
            if (!transportId) throw new Error(`No transport id for device ${serial}`);
            devices.push({
                serial,
                authenticating: status === "unauthorized",
                product,
                model,
                device,
                transportId
            });
        }
        return devices;
    }
    /**
     * `adb devices -l`
     */ async getDevices() {
        const connection = await this.createConnection("host:devices-l");
        try {
            const response = await connection.readString();
            return this.parseDeviceList(response);
        } finally{
            await connection.dispose();
        }
    }
    /**
     * Track the device list.
     *
     * @param signal An optional `AbortSignal` to stop tracking
     *
     * When `signal` is aborted, `trackDevices` will return normally, instead of throwing `signal.reason`.
     */ async *trackDevices(signal) {
        const connection = await this.createConnection("host:track-devices-l");
        try {
            while(true){
                const response = await raceSignal(async ()=>await connection.readString(), signal);
                const devices = this.parseDeviceList(response);
                yield devices;
            }
        } catch (e) {
            if (e === signal?.reason) return;
        } finally{
            await connection.dispose();
        }
    }
    formatDeviceService(device, command) {
        if (!device) return `host:${command}`;
        if ("transportId" in device) return `host-transport-id:${device.transportId}:${command}`;
        if ("serial" in device) return `host-serial:${device.serial}:${command}`;
        if ("usb" in device) return `host-usb:${command}`;
        if ("tcp" in device) return `host-local:${command}`;
        throw new TypeError("Invalid device selector");
    }
    /**
     * `adb -s <device> reconnect` or `adb reconnect offline`
     */ async reconnectDevice(device) {
        const connection = await this.createConnection(device === "offline" ? "host:reconnect-offline" : this.formatDeviceService(device, "reconnect"));
        try {
            await connection.readString();
        } finally{
            await connection.dispose();
        }
    }
    /**
     * Gets the features supported by the device.
     * The transport ID of the selected device is also returned,
     * so the caller can execute other commands against the same device.
     * @param device The device selector
     * @returns The transport ID of the selected device, and the features supported by the device.
     */ async getDeviceFeatures(device) {
        // On paper, `host:features` is a host service (device features are cached in host),
        // so it shouldn't use `createDeviceConnection`,
        // which is used to forward the service to the device.
        //
        // However, `createDeviceConnection` is a two step process:
        //
        //    1. Send a switch device service to host, to switch the connection to the device.
        //    2. Send the actual service to host, let it forward the service to the device.
        //
        // In step 2, the host only forward the service to device if the service is unknown to host.
        // If the service is a host service, it's still handled by host.
        //
        // Even better, if the service needs a device selector, but the selector is not provided,
        // the service will be executed against the device selected by the switch device service.
        // So we can use all device selector formats for the host service,
        // and get the transport ID in the same time.
        const connection = await this.createDeviceConnection(device, "host:features");
        // Luckily `AdbServerClient.Socket` is compatible with `AdbServerClient.ServerConnection`
        const stream = new AdbServerStream(connection);
        try {
            const featuresString = await stream.readString();
            const features = featuresString.split(",");
            return {
                transportId: connection.transportId,
                features
            };
        } finally{
            await stream.dispose();
        }
    }
    /**
     * Creates a connection that will forward the service to device.
     * @param device The device selector
     * @param service The service to forward
     * @returns An `AdbServerClient.Socket` that can be used to communicate with the service
     */ async createDeviceConnection(device, service) {
        await this.validateVersion();
        let switchService;
        let transportId;
        if (!device) switchService = `host:tport:any`;
        else if ("transportId" in device) {
            switchService = `host:transport-id:${device.transportId}`;
            transportId = device.transportId;
        } else if ("serial" in device) switchService = `host:tport:serial:${device.serial}`;
        else if ("usb" in device) switchService = `host:tport:usb`;
        else if ("tcp" in device) switchService = `host:tport:local`;
        else throw new TypeError("Invalid device selector");
        const connection = await this.createConnection(switchService);
        try {
            await connection.writeString(service);
        } catch (e) {
            await connection.dispose();
            throw e;
        }
        try {
            if (transportId === undefined) {
                const array = await connection.readExactly(8);
                transportId = (0, _noDataView.getUint64LittleEndian)(array, 0);
            }
            await connection.readOkay();
            const socket = connection.release();
            return {
                transportId,
                service,
                readable: socket.readable,
                writable: new (0, _streamExtra.WrapWritableStream)(socket.writable).bePipedThroughFrom(new (0, _streamExtra.MaybeConsumable).UnwrapStream()),
                get closed () {
                    return socket.closed;
                },
                async close () {
                    await socket.close();
                }
            };
        } catch (e) {
            await connection.dispose();
            throw e;
        }
    }
    /**
     * Wait for a device to be connected or disconnected.
     *
     * `adb wait-for-<state>`
     *
     * @param device The device selector
     * @param state The state to wait for
     * @param options The options
     * @returns A promise that resolves when the condition is met.
     */ async waitFor(device, state, options) {
        let type;
        if (!device) type = "any";
        else if ("transportId" in device) type = "any";
        else if ("serial" in device) type = "any";
        else if ("usb" in device) type = "usb";
        else if ("tcp" in device) type = "local";
        else throw new TypeError("Invalid device selector");
        // `waitFor` can't use `connectDevice`, because the device
        // might not be available yet.
        const service = this.formatDeviceService(device, `wait-for-${type}-${state}`);
        const connection = await this.createConnection(service, options);
        try {
            await connection.readOkay();
        } finally{
            await connection.dispose();
        }
    }
    async createTransport(device) {
        const { transportId, features } = await this.getDeviceFeatures(device);
        const devices = await this.getDevices();
        const info = devices.find((device)=>device.transportId === transportId);
        const banner = new (0, _bannerJs.AdbBanner)(info?.product, info?.model, info?.device, features);
        return new (0, _transportJs.AdbServerTransport)(this, info?.serial ?? "", banner, transportId);
    }
}
async function raceSignal(callback, ...signals) {
    const abortPromise = new (0, _async.PromiseResolver)();
    function abort() {
        abortPromise.reject(this.reason);
    }
    try {
        for (const signal of signals){
            if (!signal) continue;
            if (signal.aborted) throw signal.reason;
            signal.addEventListener("abort", abort);
        }
        return await Promise.race([
            callback(),
            abortPromise.promise
        ]);
    } finally{
        for (const signal of signals){
            if (!signal) continue;
            signal.removeEventListener("abort", abort);
        }
    }
}
(function(AdbServerClient) {
    class NetworkError extends Error {
        constructor(message){
            super(message);
            this.name = "NetworkError";
        }
    }
    AdbServerClient.NetworkError = NetworkError;
    class UnauthorizedError extends Error {
        constructor(message){
            super(message);
            this.name = "UnauthorizedError";
        }
    }
    AdbServerClient.UnauthorizedError = UnauthorizedError;
    class AlreadyConnectedError extends Error {
        constructor(message){
            super(message);
            this.name = "AlreadyConnectedError";
        }
    }
    AdbServerClient.AlreadyConnectedError = AlreadyConnectedError;
    class WirelessCommands {
        #client;
        constructor(client){
            this.#client = client;
        }
        /**
         * `adb pair <password> <address>`
         */ async pair(address, password) {
            const connection = await this.#client.createConnection(`host:pair:${password}:${address}`);
            try {
                const response = await connection.readExactly(4);
                // `response` is either `FAIL`, or 4 hex digits for length of the string
                if ((0, _indexJs.sequenceEqual)(response, FAIL)) throw new Error(await connection.readString());
                const length = (0, _indexJs.hexToNumber)(response);
                // Ignore the string as it's always `Successful ...`
                await connection.readExactly(length);
            } finally{
                await connection.dispose();
            }
        }
        /**
         * `adb connect <address>`
         */ async connect(address) {
            const connection = await this.#client.createConnection(`host:connect:${address}`);
            try {
                const response = await connection.readString();
                switch(response){
                    case `already connected to ${address}`:
                        throw new AdbServerClient.AlreadyConnectedError(response);
                    case `failed to connect to ${address}`:
                    case `failed to authenticate to ${address}`:
                        throw new AdbServerClient.UnauthorizedError(response);
                    case `connected to ${address}`:
                        return;
                    default:
                        throw new AdbServerClient.NetworkError(response);
                }
            } finally{
                await connection.dispose();
            }
        }
        /**
         * `adb disconnect <address>`
         */ async disconnect(address) {
            const connection = await this.#client.createConnection(`host:disconnect:${address}`);
            try {
                await connection.readString();
            } finally{
                await connection.dispose();
            }
        }
    }
    AdbServerClient.WirelessCommands = WirelessCommands;
    class MDnsCommands {
        #client;
        constructor(client){
            this.#client = client;
        }
        async check() {
            const connection = await this.#client.createConnection("host:mdns:check");
            try {
                const response = await connection.readString();
                return !response.startsWith("ERROR:");
            } finally{
                await connection.dispose();
            }
        }
        async getServices() {
            const connection = await this.#client.createConnection("host:mdns:services");
            try {
                const response = await connection.readString();
                return response.split("\n").filter(Boolean).map((line)=>{
                    const parts = line.split("	");
                    return {
                        name: parts[0],
                        service: parts[1],
                        address: parts[2]
                    };
                });
            } finally{
                await connection.dispose();
            }
        }
    }
    AdbServerClient.MDnsCommands = MDnsCommands;
})(AdbServerClient || (AdbServerClient = {}));

},{"@yume-chan/async":"dkY37","@yume-chan/no-data-view":"iBcsB","@yume-chan/stream-extra":"jSEnK","@yume-chan/struct":"bhoSk","../banner.js":"9KJu9","../utils/index.js":"9S5h7","./transport.js":"glXsA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"glXsA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ADB_SERVER_DEFAULT_FEATURES", ()=>ADB_SERVER_DEFAULT_FEATURES);
parcelHelpers.export(exports, "AdbServerTransport", ()=>AdbServerTransport);
var _async = require("@yume-chan/async");
var _streamExtra = require("@yume-chan/stream-extra");
var _featuresJs = require("../features.js");
const ADB_SERVER_DEFAULT_FEATURES = [
    (0, _featuresJs.AdbFeature).ShellV2,
    (0, _featuresJs.AdbFeature).Cmd,
    (0, _featuresJs.AdbFeature).StatV2,
    (0, _featuresJs.AdbFeature).ListV2,
    (0, _featuresJs.AdbFeature).FixedPushMkdir,
    "apex",
    (0, _featuresJs.AdbFeature).Abb,
    // only tells the client the symlink timestamp issue in `adb push --sync` has been fixed.
    // No special handling required.
    "fixed_push_symlink_timestamp",
    (0, _featuresJs.AdbFeature).AbbExec,
    "remount_shell",
    "track_app",
    (0, _featuresJs.AdbFeature).SendReceiveV2,
    "sendrecv_v2_brotli",
    "sendrecv_v2_lz4",
    "sendrecv_v2_zstd",
    "sendrecv_v2_dry_run_send"
];
class AdbServerTransport {
    #client;
    serial;
    transportId;
    maxPayloadSize = 1048576;
    banner;
    #closed = new (0, _async.PromiseResolver)();
    #waitAbortController = new (0, _streamExtra.AbortController)();
    disconnected;
    get clientFeatures() {
        // No need to get host features (features supported by ADB server)
        // Because we create all ADB packets ourselves
        return ADB_SERVER_DEFAULT_FEATURES;
    }
    constructor(client, serial, banner, transportId){
        this.#client = client;
        this.serial = serial;
        this.banner = banner;
        this.transportId = transportId;
        this.disconnected = Promise.race([
            this.#closed.promise,
            client.waitFor({
                transportId
            }, "disconnect", {
                signal: this.#waitAbortController.signal,
                unref: true
            })
        ]);
    }
    async connect(service) {
        return await this.#client.createDeviceConnection({
            transportId: this.transportId
        }, service);
    }
    async addReverseTunnel(handler, address) {
        return await this.#client.connector.addReverseTunnel(handler, address);
    }
    async removeReverseTunnel(address) {
        await this.#client.connector.removeReverseTunnel(address);
    }
    async clearReverseTunnels() {
        await this.#client.connector.clearReverseTunnels();
    }
    close() {
        this.#closed.resolve();
        this.#waitAbortController.abort();
    }
}

},{"@yume-chan/async":"dkY37","@yume-chan/stream-extra":"jSEnK","../features.js":"gnUAS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jdErq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isErrorName", ()=>isErrorName);
parcelHelpers.export(exports, "findUsbAlternateInterface", ()=>findUsbAlternateInterface);
parcelHelpers.export(exports, "getSerialNumber", ()=>getSerialNumber);
function isErrorName(e, name) {
    // node-usb package doesn't use `DOMException`,
    // so use a looser check
    // https://github.com/node-usb/node-usb/issues/573
    return typeof e === "object" && e !== null && "name" in e && e.name === name;
}
function alternateMatchesFilter(alternate, filters) {
    return filters.some((filter)=>alternate.interfaceClass === filter.classCode && alternate.interfaceSubclass === filter.subclassCode && alternate.interfaceProtocol === filter.protocolCode);
}
function findUsbAlternateInterface(device, filters) {
    for (const configuration of device.configurations){
        for (const interface_ of configuration.interfaces)for (const alternate of interface_.alternates){
            if (alternateMatchesFilter(alternate, filters)) return {
                configuration,
                interface_,
                alternate
            };
        }
    }
    throw new TypeError("No matched alternate interface found");
}
function padNumber(value) {
    return value.toString(16).padStart(4, "0");
}
function getSerialNumber(device) {
    if (device.serialNumber) return device.serialNumber;
    return padNumber(device.vendorId) + "x" + padNumber(device.productId);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1sHLA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbDaemonWebUsbDeviceManager", ()=>AdbDaemonWebUsbDeviceManager);
var _deviceJs = require("./device.js");
var _utilsJs = require("./utils.js");
class AdbDaemonWebUsbDeviceManager {
    /**
     * Gets the instance of {@link AdbDaemonWebUsbDeviceManager} using browser WebUSB implementation.
     *
     * May be `undefined` if current runtime does not support WebUSB.
     */ static BROWSER = typeof globalThis.navigator !== "undefined" && !!globalThis.navigator.usb ? new AdbDaemonWebUsbDeviceManager(globalThis.navigator.usb) : undefined;
    #usbManager;
    /**
     * Create a new instance of {@link AdbDaemonWebUsbDeviceManager} using the specified WebUSB implementation.
     * @param usbManager A WebUSB compatible interface.
     */ constructor(usbManager){
        this.#usbManager = usbManager;
    }
    /**
     * Request access to a connected device.
     * This is a convince method for `usb.requestDevice()`.
     * @param filters
     * The filters to apply to the device list.
     *
     * It must have `classCode`, `subclassCode` and `protocolCode` fields for selecting the ADB interface,
     * but might also have `vendorId`, `productId` or `serialNumber` fields to limit the displayed device list.
     *
     * Defaults to {@link ADB_DEFAULT_DEVICE_FILTER}.
     * @returns An {@link AdbDaemonWebUsbDevice} instance if the user selected a device,
     * or `undefined` if the user cancelled the device picker.
     */ async requestDevice(options = {}) {
        if (!options.filters) options.filters = [
            (0, _deviceJs.ADB_DEFAULT_DEVICE_FILTER)
        ];
        else if (options.filters.length === 0) throw new TypeError("filters must not be empty");
        try {
            const device = await this.#usbManager.requestDevice(options);
            return new (0, _deviceJs.AdbDaemonWebUsbDevice)(device, options.filters, this.#usbManager);
        } catch (e) {
            // No device selected
            if ((0, _utilsJs.isErrorName)(e, "NotFoundError")) return undefined;
            throw e;
        }
    }
    /**
     * Get all connected and authenticated devices.
     * This is a convince method for `usb.getDevices()`.
     * @param filters
     * The filters to apply to the device list.
     *
     * It must have `classCode`, `subclassCode` and `protocolCode` fields for selecting the ADB interface,
     * but might also have `vendorId`, `productId` or `serialNumber` fields to limit the device list.
     *
     * Defaults to {@link ADB_DEFAULT_DEVICE_FILTER}.
     * @returns An array of {@link AdbDaemonWebUsbDevice} instances for all connected and authenticated devices.
     */ async getDevices(filters = [
        (0, _deviceJs.ADB_DEFAULT_DEVICE_FILTER)
    ]) {
        if (filters.length === 0) throw new TypeError("filters must not be empty");
        const devices = await this.#usbManager.getDevices();
        return devices.filter((device)=>{
            for (const filter of filters){
                if ("vendorId" in filter && device.vendorId !== filter.vendorId) continue;
                if ("productId" in filter && device.productId !== filter.productId) continue;
                if ("serialNumber" in filter && (0, _utilsJs.getSerialNumber)(device) !== filter.serialNumber) continue;
                try {
                    (0, _utilsJs.findUsbAlternateInterface)(device, filters);
                    return true;
                } catch  {
                    continue;
                }
            }
            return false;
        }).map((device)=>new (0, _deviceJs.AdbDaemonWebUsbDevice)(device, filters, this.#usbManager));
    }
}

},{"./device.js":"93OWL","./utils.js":"jdErq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"42JZJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdbDaemonWebUsbDeviceWatcher", ()=>AdbDaemonWebUsbDeviceWatcher);
class AdbDaemonWebUsbDeviceWatcher {
    #callback;
    #usbManager;
    constructor(callback, usb){
        this.#callback = callback;
        this.#usbManager = usb;
        this.#usbManager.addEventListener("connect", this.#handleConnect);
        this.#usbManager.addEventListener("disconnect", this.#handleDisconnect);
    }
    dispose() {
        this.#usbManager.removeEventListener("connect", this.#handleConnect);
        this.#usbManager.removeEventListener("disconnect", this.#handleDisconnect);
    }
    #handleConnect = (e)=>{
        this.#callback(e.device.serialNumber);
    };
    #handleDisconnect = ()=>{
        this.#callback();
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iXVWq":[function(require,module,exports) {
// cspell: ignore RSASSA
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function openDatabase() {
    return new Promise((resolve, reject)=>{
        const request = indexedDB.open("Tango", 1);
        request.onerror = ()=>{
            reject(request.error);
        };
        request.onupgradeneeded = ()=>{
            const db = request.result;
            db.createObjectStore("Authentication", {
                autoIncrement: true
            });
        };
        request.onsuccess = ()=>{
            const db = request.result;
            resolve(db);
        };
    });
}
async function saveKey(key) {
    const db = await openDatabase();
    return new Promise((resolve, reject)=>{
        const transaction = db.transaction("Authentication", "readwrite");
        const store = transaction.objectStore("Authentication");
        const putRequest = store.add(key);
        putRequest.onerror = ()=>{
            reject(putRequest.error);
        };
        putRequest.onsuccess = ()=>{
            resolve();
        };
        transaction.onerror = ()=>{
            reject(transaction.error);
        };
        transaction.oncomplete = ()=>{
            db.close();
        };
    });
}
async function getAllKeys() {
    const db = await openDatabase();
    return new Promise((resolve, reject)=>{
        const transaction = db.transaction("Authentication", "readonly");
        const store = transaction.objectStore("Authentication");
        const getRequest = store.getAll();
        getRequest.onerror = ()=>{
            reject(getRequest.error);
        };
        getRequest.onsuccess = ()=>{
            resolve(getRequest.result);
        };
        transaction.onerror = ()=>{
            reject(transaction.error);
        };
        transaction.oncomplete = ()=>{
            db.close();
        };
    });
}
class AdbWebCredentialStore {
    #appName;
    constructor(appName = "Tango"){
        this.#appName = appName;
    }
    /**
     * Generates a RSA private key and store it into LocalStorage.
     *
     * Calling this method multiple times will overwrite the previous key.
     *
     * @returns The private key in PKCS #8 format.
     */ async generateKey() {
        const { privateKey: cryptoKey } = await crypto.subtle.generateKey({
            name: "RSASSA-PKCS1-v1_5",
            modulusLength: 2048,
            // 65537
            publicExponent: new Uint8Array([
                0x01,
                0x00,
                0x01
            ]),
            hash: "SHA-1"
        }, true, [
            "sign",
            "verify"
        ]);
        const privateKey = new Uint8Array(await crypto.subtle.exportKey("pkcs8", cryptoKey));
        await saveKey(privateKey);
        return {
            buffer: privateKey,
            name: `${this.#appName}@${globalThis.location.hostname}`
        };
    }
    /**
     * Yields the stored RSA private key.
     *
     * This method returns a generator, so `for await...of...` loop should be used to read the key.
     */ async *iterateKeys() {
        for (const key of (await getAllKeys()))yield {
            buffer: key,
            name: `${this.#appName}@${globalThis.location.hostname}`
        };
    }
}
exports.default = AdbWebCredentialStore;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fKG4q"], null, "parcelRequire75f2")

//# sourceMappingURL=index.97a0430c.js.map
