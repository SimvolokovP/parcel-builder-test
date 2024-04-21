!function(e,t,n,r,i){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof s[r]&&s[r],a=o.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function h(t,n){if(!a[t]){if(!e[t]){var i="function"==typeof s[r]&&s[r];if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(l&&"string"==typeof t)return l(t);var u=Error("Cannot find module '"+t+"'");throw u.code="MODULE_NOT_FOUND",u}d.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},d.cache={};var c=a[t]=new h.Module(t);e[t][0].call(c.exports,d,c,c.exports,this)}return a[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:h(t)}}h.isParcelRequire=!0,h.Module=function(e){this.id=e,this.bundle=h,this.exports={}},h.modules=e,h.cache=a,h.parent=o,h.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(h,"root",{get:function(){return s[r]}}),s[r]=h;for(var u=0;u<t.length;u++)h(t[u])}({"3eFbF":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"FirebaseError",()=>o.FirebaseError),r.export(n,"SDK_VERSION",()=>k),r.export(n,"_DEFAULT_ENTRY_NAME",()=>d),r.export(n,"_addComponent",()=>g),r.export(n,"_addOrOverwriteComponent",()=>y),r.export(n,"_apps",()=>f),r.export(n,"_clearComponents",()=>I),r.export(n,"_components",()=>m),r.export(n,"_getProvider",()=>C),r.export(n,"_isFirebaseApp",()=>w),r.export(n,"_isFirebaseServerApp",()=>E),r.export(n,"_registerComponent",()=>v),r.export(n,"_removeServiceInstance",()=>b),r.export(n,"_serverApps",()=>_),r.export(n,"deleteApp",()=>A),r.export(n,"getApp",()=>D),r.export(n,"getApps",()=>R),r.export(n,"initializeApp",()=>P),r.export(n,"initializeServerApp",()=>N),r.export(n,"onLog",()=>L),r.export(n,"registerVersion",()=>O),r.export(n,"setLogLevel",()=>M);var i=e("@firebase/component"),s=e("@firebase/logger"),o=e("@firebase/util"),a=e("idb");/**
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
 */class l{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let h="@firebase/app",u="0.10.1",c=new s.Logger("@firebase/app"),d="[DEFAULT]",p={[h]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},f=new Map,_=new Map,m=new Map;function g(e,t){try{e.container.addComponent(t)}catch(n){c.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function y(e,t){e.container.addOrOverwriteComponent(t)}function v(e){let t=e.name;if(m.has(t))return c.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(m.set(t,e),f.values()))g(n,e);for(let t of _.values())g(t,e);return!0}function C(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function b(e,t,n=d){C(e,t).clearInstance(n)}function w(e){return void 0!==e.options}function E(e){return void 0!==e.settings}function I(){m.clear()}let T=new o.ErrorFactory("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
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
 */class x{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw T.create("app-deleted",{appName:this._name})}}/**
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
 */class S extends x{constructor(e,t,n,r){let i=void 0!==t.automaticDataCollectionEnabled&&t.automaticDataCollectionEnabled,s={name:n,automaticDataCollectionEnabled:i};void 0!==e.apiKey?super(e,s,r):super(e.options,s,r),this._serverConfig=Object.assign({automaticDataCollectionEnabled:i},t),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,O(h,u,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,void 0!==e&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){A(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw T.create("server-app-deleted")}}/**
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
 */let k="10.11.0";function P(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let r=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),s=r.name;if("string"!=typeof s||!s)throw T.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw T.create("no-options");let a=f.get(s);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(r,a.config))return a;throw T.create("duplicate-app",{appName:s})}let l=new i.ComponentContainer(s);for(let e of m.values())l.addComponent(e);let h=new x(n,r,l);return f.set(s,h),h}function N(e,t){let n;if((0,o.isBrowser)())throw T.create("invalid-server-app-environment");void 0===t.automaticDataCollectionEnabled&&(t.automaticDataCollectionEnabled=!1),n=w(e)?e.options:e;let r=Object.assign(Object.assign({},t),n);if(void 0!==r.releaseOnDeref&&delete r.releaseOnDeref,void 0!==t.releaseOnDeref&&"undefined"==typeof FinalizationRegistry)throw T.create("finalization-registry-not-supported",{});let s=""+[...JSON.stringify(r)].reduce((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0,0),a=_.get(s);if(a)return a.incRefCount(t.releaseOnDeref),a;let l=new i.ComponentContainer(s);for(let e of m.values())l.addComponent(e);let h=new S(n,t,s,l);return _.set(s,h),h}function D(e=d){let t=f.get(e);if(!t&&e===d&&(0,o.getDefaultAppConfig)())return P();if(!t)throw T.create("no-app",{appName:e});return t}function R(){return Array.from(f.values())}async function A(e){let t=!1,n=e.name;f.has(n)?(t=!0,f.delete(n)):_.has(n)&&0>=e.decRefCount()&&(_.delete(n),t=!0),t&&(await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function O(e,t,n){var r;let s=null!==(r=p[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);let o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){let e=[`Unable to register library "${s}" with version "${t}":`];o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),c.warn(e.join(" "));return}v(new i.Component(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}function L(e,t){if(null!==e&&"function"!=typeof e)throw T.create("invalid-log-argument");(0,s.setUserLogHandler)(e,t)}function M(e){(0,s.setLogLevel)(e)}let F="firebase-heartbeat-store",q=null;function j(){return q||(q=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(F)}catch(e){console.warn(e)}}}).catch(e=>{throw T.create("idb-open",{originalErrorMessage:e.message})})),q}async function B(e){try{let t=(await j()).transaction(F),n=await t.objectStore(F).get(U(e));return await t.done,n}catch(e){if(e instanceof o.FirebaseError)c.warn(e.message);else{let t=T.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});c.warn(t.message)}}}async function W(e,t){try{let n=(await j()).transaction(F,"readwrite"),r=n.objectStore(F);await r.put(t,U(e)),await n.done}catch(e){if(e instanceof o.FirebaseError)c.warn(e.message);else{let t=T.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});c.warn(t.message)}}}function U(e){return`${e.name}!${e.options.appId}`}class H{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new z(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=V();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=V(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),$(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function V(){return new Date().toISOString().substring(0,10)}class z{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await B(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return W(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return W(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function $(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}v(new i.Component("platform-logger",e=>new l(e),"PRIVATE")),v(new i.Component("heartbeat",e=>new H(e),"PRIVATE")),O(h,u,""),O(h,u,"esm2017"),O("fire-js","")},{"@firebase/component":"7Ufrc","@firebase/logger":"2Swcv","@firebase/util":"hGlpW",idb:"cePoi","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7Ufrc":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"Component",()=>s),r.export(n,"ComponentContainer",()=>l),r.export(n,"Provider",()=>a);var i=e("@firebase/util");class s{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */let o="[DEFAULT]";/**
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
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new i.Deferred;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===o?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},{"@firebase/util":"hGlpW","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],hGlpW:[function(e,t,n){/**
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
 */var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"CONSTANTS",()=>o),r.export(n,"DecodeBase64StringError",()=>d),r.export(n,"Deferred",()=>S),r.export(n,"ErrorFactory",()=>V),r.export(n,"FirebaseError",()=>H),r.export(n,"MAX_VALUE_MILLIS",()=>eb),r.export(n,"RANDOM_FACTOR",()=>ew),r.export(n,"Sha1",()=>el),r.export(n,"areCookiesEnabled",()=>U),r.export(n,"assert",()=>a),r.export(n,"assertionError",()=>l),r.export(n,"async",()=>ec),r.export(n,"base64",()=>c),r.export(n,"base64Decode",()=>_),r.export(n,"base64Encode",()=>p),r.export(n,"base64urlEncodeWithoutPadding",()=>f),r.export(n,"calculateBackoffMillis",()=>eE),r.export(n,"contains",()=>Z),r.export(n,"createMockUserToken",()=>k),r.export(n,"createSubscribe",()=>eh),r.export(n,"decode",()=>G),r.export(n,"deepCopy",()=>m),r.export(n,"deepEqual",()=>function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let s of r){if(!i.includes(s))return!1;let r=t[s],o=n[s];if(er(r)&&er(o)){if(!e(r,o))return!1}else if(r!==o)return!1}for(let e of i)if(!r.includes(e))return!1;return!0}),r.export(n,"deepExtend",()=>g),r.export(n,"errorPrefix",()=>ef),r.export(n,"extractQuerystring",()=>ea),r.export(n,"getDefaultAppConfig",()=>T),r.export(n,"getDefaultEmulatorHost",()=>E),r.export(n,"getDefaultEmulatorHostnameAndPort",()=>I),r.export(n,"getDefaults",()=>w),r.export(n,"getExperimentalSetting",()=>x),r.export(n,"getGlobal",()=>y),r.export(n,"getModularInstance",()=>eT),r.export(n,"getUA",()=>P),r.export(n,"isAdmin",()=>X),r.export(n,"isBrowser",()=>R),r.export(n,"isBrowserExtension",()=>A),r.export(n,"isElectron",()=>L),r.export(n,"isEmpty",()=>et),r.export(n,"isIE",()=>M),r.export(n,"isIndexedDBAvailable",()=>B),r.export(n,"isMobileCordova",()=>N),r.export(n,"isNode",()=>D),r.export(n,"isNodeSdk",()=>q),r.export(n,"isReactNative",()=>O),r.export(n,"isSafari",()=>j),r.export(n,"isUWP",()=>F),r.export(n,"isValidFormat",()=>J),r.export(n,"isValidTimestamp",()=>K),r.export(n,"issuedAtTime",()=>Q),r.export(n,"jsonEval",()=>$),r.export(n,"map",()=>en),r.export(n,"ordinal",()=>eI),r.export(n,"promiseWithTimeout",()=>ei),r.export(n,"querystring",()=>es),r.export(n,"querystringDecode",()=>eo),r.export(n,"safeGet",()=>ee),r.export(n,"stringLength",()=>ev),r.export(n,"stringToByteArray",()=>ey),r.export(n,"stringify",()=>Y),r.export(n,"uuidv4",()=>eC),r.export(n,"validateArgCount",()=>ep),r.export(n,"validateCallback",()=>em),r.export(n,"validateContextObject",()=>eg),r.export(n,"validateIndexedDBOpenable",()=>W),r.export(n,"validateNamespace",()=>e_);var i=arguments[3],s=e("d07263985281b344");let o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},a=function(e,t){if(!e)throw l(t)},l=function(e){return Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},h=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},u=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=i>>2,u=(3&i)<<4|o>>4,c=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(c=64)),r.push(n[h],n[u],n[c],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(h(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):u(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,a=++t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new d;let l=i<<2|s>>4;if(r.push(l),64!==o){let e=s<<4&240|o>>2;if(r.push(e),64!==a){let e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class d extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let p=function(e){let t=h(e);return c.encodeByteArray(t,!0)},f=function(e){return p(e).replace(/\./g,"")},_=function(e){try{return c.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function m(e){return g(void 0,e)}function g(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(let n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=g(e[n],t[n]));return e}/**
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
 */function y(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i)return i;throw Error("Unable to locate global object.")}/**
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
 */let v=()=>y().__FIREBASE_DEFAULTS__,C=()=>{if(void 0===s||void 0===s.env)return;let e=void 0;if(e)return JSON.parse(e)},b=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&_(e[1]);return t&&JSON.parse(t)},w=()=>{try{return v()||C()||b()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},E=e=>{var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},I=e=>{let t=E(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},T=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},x=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};/**
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
 */class S{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
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
 */function k(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[f(JSON.stringify({alg:"none",type:"JWT"})),f(JSON.stringify(s)),""].join(".")}/**
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
 */function P(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function N(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(P())}function D(){var e;let t=null===(e=w())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(i.process)}catch(e){return!1}}function R(){return"object"==typeof self&&self.self===self}function A(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function O(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function L(){return P().indexOf("Electron/")>=0}function M(){let e=P();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function F(){return P().indexOf("MSAppHost/")>=0}function q(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN}function j(){return!D()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function B(){try{return"object"==typeof indexedDB}catch(e){return!1}}function W(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function U(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class H extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,H.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(z,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new H(r,o,n)}}let z=/\{\$([^}]+)}/g;/**
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
 */function $(e){return JSON.parse(e)}function Y(e){return JSON.stringify(e)}/**
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
 */let G=function(e){let t={},n={},r={},i="";try{let s=e.split(".");t=$(_(s[0])||""),n=$(_(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},K=function(e){let t=G(e).claims,n=Math.floor(new Date().getTime()/1e3),r=0,i=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?r=t.nbf:t.hasOwnProperty("iat")&&(r=t.iat),i=t.hasOwnProperty("exp")?t.exp:r+86400),!!n&&!!r&&!!i&&n>=r&&n<=i},Q=function(e){let t=G(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},J=function(e){let t=G(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},X=function(e){let t=G(e).claims;return"object"==typeof t&&!0===t.admin};/**
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
 */function Z(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ee(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function et(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function en(e,t,n){let r={};for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function er(e){return null!==e&&"object"==typeof e}/**
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
 */function ei(e,t=2e3){let n=new S;return setTimeout(()=>n.reject("timeout!"),t),e.then(n.resolve,n.reject),n.promise}/**
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
 */function es(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function eo(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function ea(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
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
 */class el{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){let n,r;t||(t=0);let i=this.W_;if("string"==typeof e)for(let n=0;n<16;n++)i[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let n=0;n<16;n++)i[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=i[e-3]^i[e-8]^i[e-14]^i[e-16];i[e]=(t<<1|t>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(n=l^o&(a^l),r=1518500249):(n=o^a^l,r=1859775393):e<60?(n=o&a|l&(o|a),r=2400959708):(n=o^a^l,r=3395469782);let t=(s<<5|s>>>27)+n+h+r+i[e]&4294967295;h=l,l=a,a=(o<<30|o>>>2)&4294967295,o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let n=t-this.blockSize,r=0,i=this.buf_,s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}}function eh(e,t){let n=new eu(e,t);return n.subscribe.bind(n)}class eu{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=ed),void 0===r.error&&(r.error=ed),void 0===r.complete&&(r.complete=ed);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ec(e,t){return(...n)=>{Promise.resolve(!0).then(()=>{e(...n)}).catch(e=>{t&&t(e)})}}function ed(){}/**
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
 */let ep=function(e,t,n,r){let i;if(r<t?i="at least "+t:r>n&&(i=0===n?"none":"no more than "+n),i)throw Error(e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".")};function ef(e,t){return`${e} failed: ${t} argument `}function e_(e,t,n){if((!n||t)&&"string"!=typeof t)throw Error(ef(e,"namespace")+"must be a valid firebase namespace.")}function em(e,t,n,r){if((!r||n)&&"function"!=typeof n)throw Error(ef(e,t)+"must be a valid function.")}function eg(e,t,n,r){if((!r||n)&&("object"!=typeof n||null===n))throw Error(ef(e,t)+"must be a valid context object.")}/**
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
 */let ey=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){let t=i-55296;a(++r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:(i<65536?t[n++]=i>>12|224:(t[n++]=i>>18|240,t[n++]=i>>12&63|128),t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},ev=function(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t},eC=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},eb=144e5,ew=.5;function eE(e,t=1e3,n=2){let r=t*Math.pow(n,e);return Math.min(eb,r+Math.round(ew*r*(Math.random()-.5)*2))}/**
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
 */function eI(e){return Number.isFinite(e)?e+function(e){let t=(e=Math.abs(e))%100;if(t>=10&&t<=20)return"th";let n=e%10;return 1===n?"st":2===n?"nd":3===n?"rd":"th"}(e):`${e}`}/**
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
 */function eT(e){return e&&e._delegate?e._delegate:e}},{d07263985281b344:"5QIF0","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"5QIF0":[function(e,t,n){var r,i,s,o=t.exports={};function a(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function h(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{i="function"==typeof clearTimeout?clearTimeout:l}catch(e){i=l}}();var u=[],c=!1,d=-1;function p(){c&&s&&(c=!1,s.length?u=s.concat(u):d=-1,u.length&&f())}function f(){if(!c){var e=h(p);c=!0;for(var t=u.length;t;){for(s=u,u=[];++d<t;)s&&s[d].run();d=-1,t=u.length}s=null,c=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===l||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function _(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new _(e,t)),1!==u.length||c||h(f)},_.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],"2Swcv":[function(e,t,n){/**
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
 */var r,i,s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(n),s.export(n,"LogLevel",()=>i),s.export(n,"Logger",()=>c),s.export(n,"setLogLevel",()=>d),s.export(n,"setUserLogHandler",()=>p);let o=[];(r=i||(i={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";let a={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},l=i.INFO,h={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=h[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=l,this._logHandler=u,this._userLogHandler=null,o.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function d(e){o.forEach(t=>{t.setLogLevel(e)})}function p(e,t){for(let n of o){let r=null;t&&t.level&&(r=a[t.level]),null===e?n.userLogHandler=null:n.userLogHandler=(t,n,...s)=>{let o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],cePoi:[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"unwrap",()=>i.u),r.export(n,"wrap",()=>i.w),r.export(n,"deleteDB",()=>o),r.export(n,"openDB",()=>s);var i=e("./wrap-idb-value.js");function s(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){let a=indexedDB.open(e,t),l=(0,i.w)(a);return r&&a.addEventListener("upgradeneeded",e=>{r((0,i.w)(a.result),e.oldVersion,e.newVersion,(0,i.w)(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),l.then(e=>{o&&e.addEventListener("close",()=>o()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),l}function o(e,{blocked:t}={}){let n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",e=>t(e.oldVersion,e)),(0,i.w)(n).then(()=>void 0)}let a=["get","getKey","getAll","getAllKeys","count"],l=["put","add","delete","clear"],h=new Map;function u(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(h.get(t))return h.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=l.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||a.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return h.set(t,s),s}(0,i.r)(e=>({...e,get:(t,n,r)=>u(t,n)||e.get(t,n,r),has:(t,n)=>!!u(t,n)||e.has(t,n)}))},{"./wrap-idb-value.js":"fB1kC","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],fB1kC:[function(e,t,n){let r,i;var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(n),s.export(n,"a",()=>c),s.export(n,"i",()=>o),s.export(n,"r",()=>p),s.export(n,"u",()=>_),s.export(n,"w",()=>f);let o=(e,t)=>t.some(t=>e instanceof t),a=new WeakMap,l=new WeakMap,h=new WeakMap,u=new WeakMap,c=new WeakMap,d={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return f(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function p(e){d=e(d)}function f(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(f(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&a.set(t,e)}).catch(()=>{}),c.set(t,e),t}(e);if(u.has(e))return u.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(_(this),e),f(a.get(this))}:function(...e){return f(t.apply(_(this),e))}:function(e,...n){let r=t.call(_(this),e,...n);return h.set(r,e.sort?e.sort():[e]),f(r)}:(t instanceof IDBTransaction&&function(e){if(l.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});l.set(e,t)}(t),o(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,d):t;return n!==e&&(u.set(e,n),c.set(n,e)),n}let _=e=>c.get(e)},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7mwHT":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n);var i=e("@firebase/app");r.exportAll(i,n),/**
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
 */(0,i.registerVersion)("firebase","10.11.0","app")},{"@firebase/app":"3eFbF","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gGruC:[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n);var i=e("@firebase/database");r.exportAll(i,n)},{"@firebase/database":"dRTAP","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],dRTAP:[function(e,t,n){let r,i,s,o,a,l,h,u,c,d,p;var f,_,m=e("@parcel/transformer-js/src/esmodule-helpers.js");m.defineInteropFlag(n),m.export(n,"DataSnapshot",()=>rV),m.export(n,"Database",()=>iN),m.export(n,"OnDisconnect",()=>rq),m.export(n,"QueryConstraint",()=>it),m.export(n,"TransactionResult",()=>iU),m.export(n,"_QueryImpl",()=>rj),m.export(n,"_QueryParams",()=>tp),m.export(n,"_ReferenceImpl",()=>rH),m.export(n,"_TEST_ACCESS_forceRestClient",()=>iz),m.export(n,"_TEST_ACCESS_hijackHash",()=>iV),m.export(n,"_initStandalone",()=>i$),m.export(n,"_repoManagerDatabaseFromApp",()=>iP),m.export(n,"_setSDKVersion",()=>T),m.export(n,"_validatePathString",()=>re),m.export(n,"_validateWritablePath",()=>rn),m.export(n,"child",()=>rY),m.export(n,"connectDatabaseEmulator",()=>iL),m.export(n,"enableLogging",()=>iq),m.export(n,"endAt",()=>ii),m.export(n,"endBefore",()=>io),m.export(n,"equalTo",()=>iT),m.export(n,"forceLongPolling",()=>iA),m.export(n,"forceWebSockets",()=>iR),m.export(n,"get",()=>r1),m.export(n,"getDatabase",()=>iO),m.export(n,"goOffline",()=>iM),m.export(n,"goOnline",()=>iF),m.export(n,"increment",()=>iW),m.export(n,"limitToFirst",()=>id),m.export(n,"limitToLast",()=>i_),m.export(n,"off",()=>ie),m.export(n,"onChildAdded",()=>r5),m.export(n,"onChildChanged",()=>r9),m.export(n,"onChildMoved",()=>r8),m.export(n,"onChildRemoved",()=>r7),m.export(n,"onDisconnect",()=>rG),m.export(n,"onValue",()=>r6),m.export(n,"orderByChild",()=>ig),m.export(n,"orderByKey",()=>iv),m.export(n,"orderByPriority",()=>ib),m.export(n,"orderByValue",()=>iE),m.export(n,"push",()=>rK),m.export(n,"query",()=>ix),m.export(n,"ref",()=>rz),m.export(n,"refFromURL",()=>r$),m.export(n,"remove",()=>rQ),m.export(n,"runTransaction",()=>iH),m.export(n,"serverTimestamp",()=>iB),m.export(n,"set",()=>rJ),m.export(n,"setPriority",()=>rX),m.export(n,"setWithPriority",()=>rZ),m.export(n,"startAfter",()=>iu),m.export(n,"startAt",()=>il),m.export(n,"update",()=>r0);var g=e("@firebase/app"),y=e("@firebase/component"),v=e("@firebase/util"),C=e("@firebase/logger"),b=e("6b38617303e2f7b9");let w="@firebase/database",E="1.0.4",I="";function T(e){I=e}/**
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
 */class x{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,v.stringify)(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,v.jsonEval)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class S{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,v.contains)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */let k=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new x(t)}}catch(e){}return new S},P=k("localStorage"),N=k("sessionStorage"),D=new C.Logger("@firebase/database"),R=(p=1,function(){return p++}),A=function(e){let t=(0,v.stringToByteArray)(e),n=new v.Sha1;n.update(t);let r=n.digest();return(0,v.base64).encodeByteArray(r)},O=function(...e){let t="";for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=O.apply(null,r):"object"==typeof r?t+=(0,v.stringify)(r):t+=r,t+=" "}return t},L=null,M=!0,F=function(e,t){(0,v.assert)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(D.logLevel=C.LogLevel.VERBOSE,L=D.log.bind(D),t&&N.set("logging_enabled",!0)):"function"==typeof e?L=e:(L=null,N.remove("logging_enabled"))},q=function(...e){if(!0===M&&(M=!1,null===L&&!0===N.get("logging_enabled")&&F(!0)),L){let t=O.apply(null,e);L(t)}},j=function(e){return function(...t){q(e,...t)}},B=function(...e){let t="FIREBASE INTERNAL ERROR: "+O(...e);D.error(t)},W=function(...e){let t=`FIREBASE FATAL ERROR: ${O(...e)}`;throw D.error(t),Error(t)},U=function(...e){let t="FIREBASE WARNING: "+O(...e);D.warn(t)},H=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&U("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},V=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},z=function(e){if((0,v.isNodeSdk)()||"complete"===document.readyState)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},$="[MIN_NAME]",Y="[MAX_NAME]",G=function(e,t){if(e===t)return 0;{if(e===$||t===Y)return -1;if(t===$||e===Y)return 1;let n=en(e),r=en(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},K=function(e,t){return e===t?0:e<t?-1:1},Q=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+(0,v.stringify)(t))},J=function(e){if("object"!=typeof e||null===e)return(0,v.stringify)(e);let t=[];for(let n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,v.stringify)(t[r])+":"+J(e[t[r]]);return n+"}"},X=function(e,t){let n=e.length;if(n<=t)return[e];let r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Z(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}let ee=function(e){let t,n,r,i,s;(0,v.assert)(!V(e),"Invalid JSON number"),0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,r=Math.round(e*Math.pow(2,52-i)-4503599627370496)):(n=0,r=Math.round(e/5e-324)));let o=[];for(s=52;s;s-=1)o.push(r%2?1:0),r=Math.floor(r/2);for(s=11;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);o.push(t?1:0),o.reverse();let a=o.join(""),l="";for(s=0;s<64;s+=8){let e=parseInt(a.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()},et=RegExp("^-?(0*)\\d{1,10}$"),en=function(e){if(et.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},er=function(e){try{e()}catch(e){setTimeout(()=>{throw U("Exception was thrown by user callback.",e.stack||""),e},Math.floor(0))}},ei=function(e,t){let n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};/**
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
 */class es{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){U(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class eo{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(q("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',U(e)}}class ea{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ea.OWNER="owner";let el=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,eh="websocket",eu="long_polling";/**
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
 */class ec{constructor(e,t,n,r,i=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=P.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&P.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ed(e,t,n){let r;if((0,v.assert)("string"==typeof t,"typeof type must == string"),(0,v.assert)("object"==typeof n,"typeof params must == object"),t===eh)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===eu)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(n.ns=e.namespace);let i=[];return Z(n,(e,t)=>{i.push(e+"="+t)}),r+i.join("&")}/**
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
 */class ep{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,v.contains)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,v.deepCopy)(this.counters_)}}/**
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
 */let ef={},e_={};function em(e){let t=e.toString();return ef[t]||(ef[t]=new ep),ef[t]}/**
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
 */class eg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&er(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */let ey="start";class ev{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=j(e),this.stats_=em(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),ed(t,eu,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new eg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),z(()=>{if(this.isClosed_)return;this.scriptTagHolder=new eC((...e)=>{let[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ey)this.id=n,this.password=r;else if("close"===t)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[ey]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&el.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ev.forceAllow_=!0}static forceDisallow(){ev.forceDisallow_=!0}static isAvailable(){return!(0,v.isNodeSdk)()&&(!!ev.forceAllow_||!ev.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=(0,v.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=X((0,v.base64Encode)(t),1840);for(let e=0;e<n.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,v.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");let n={};n.dframe="t",n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=(0,v.stringify)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class eC{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,v.isNodeSdk)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=R(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=eC.createIFrame_();let n="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(n='<script>document.domain="'+document.domain+'";</script>');let r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){q("frame writing exception"),e.stack&&q(e.stack),q(e)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||q("No IE domain setting required")}catch(n){let t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;)if(this.pendingSegs[0].d.length+30+n.length<=1870){let e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}else break;return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(r),n()})}addTag(e,t){(0,v.isNodeSdk)()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{q("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}},Math.floor(1))}}let eb=null;"undefined"!=typeof MozWebSocket?eb=MozWebSocket:"undefined"!=typeof WebSocket&&(eb=WebSocket);class ew{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=j(this.connId),this.stats_=em(t),this.connURL=ew.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){let s={};return s.v="5",!(0,v.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&el.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),r&&(s.ac=r),i&&(s.p=i),ed(e,eh,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,P.set("previous_websocket_failure",!0);try{let e;if((0,v.isNodeSdk)()){let t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${I}/${b.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);let n={},r=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new eb(this.connURL,[],e)}catch(t){this.log_("Error instantiating WebSocket.");let e=t.message||t.data;e&&this.log_(e),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ew.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==eb&&!ew.forceDisallow_}static previouslyFailed(){return P.isInMemoryStorage||!0===P.get("previous_websocket_failure")}markConnectionHealthy(){P.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join("");this.frames=null;let t=(0,v.jsonEval)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,v.assert)(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=(0,v.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=X(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ew.responsesRequiredToBeHealthy=2,ew.healthyTimeout=3e4;/**
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
 */class eE{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ev,ew]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){let t=ew&&ew.isAvailable(),n=t&&!ew.previouslyFailed();if(e.webSocketOnly&&(t||U("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ew];else{let e=this.transports_=[];for(let t of eE.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);eE.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}eE.globalTransportInitialized_=!1;class eI{constructor(e,t,n,r,i,s,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=j("c:"+this.id+":"),this.transportManager_=new eE(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));let r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ei(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=Q("t",e),n=Q("d",e);if("c"===t)this.onSecondaryControl_(n);else if("d"===t)this.pendingDataMessages.push(n);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=Q("t",e),n=Q("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=Q("t",e);if("d"in e){let n=e.d;if("h"===t){let e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?B("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):B("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&U("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),ei(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ei(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(P.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class eT{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class ex{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,v.assert)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);let r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context)){r.splice(e,1);return}}validateEventType_(e){(0,v.assert)(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class eS extends ex{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,v.isMobileCordova)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new eS}getInitialEvent(e){return(0,v.assert)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class ek{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function eP(){return new ek("")}function eN(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function eD(e){return e.pieces_.length-e.pieceNum_}function eR(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ek(e.pieces_,t)}function eA(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function eO(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function eL(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ek(t,0)}function eM(e,t){let n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof ek)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{let e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ek(n,0)}function eF(e){return e.pieceNum_>=e.pieces_.length}function eq(e,t){let n=eN(e),r=eN(t);if(null===n)return t;if(n===r)return eq(eR(e),eR(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ej(e,t){let n=eO(e,0),r=eO(t,0);for(let e=0;e<n.length&&e<r.length;e++){let t=G(n[e],r[e]);if(0!==t)return t}return n.length===r.length?0:n.length<r.length?-1:1}function eB(e,t){if(eD(e)!==eD(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function eW(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(eD(e)>eD(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class eU{constructor(e,t){this.errorPrefix_=t,this.parts_=eO(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,v.stringLength)(this.parts_[e]);eH(this)}}function eH(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+eV(e))}function eV(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class ez extends ex{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new ez}getInitialEvent(e){return(0,v.assert)("visible"===e,"Unknown event type: "+e),[this.visible_]}}class e$ extends eT{constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=e$.nextPersistentConnectionId_++,this.log_=j("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!(0,v.isNodeSdk)())throw Error("Auth override specified in options, but not supported on non Node.js platforms");ez.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&eS.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){let r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,v.stringify)(i)),(0,v.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();let t=new v.Deferred,n={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:n,onComplete:e=>{let n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}}),this.outstandingGetCount_++;let r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();let i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),(0,v.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,v.assert)(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");let o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){let t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);let i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,i=>{let s=i.d,o=i.s;e$.warnOnListenWarnings_(s,t),(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,v.contains)(e,"w")){let n=(0,v.safeGet)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){let e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();U(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||(0,v.isAdmin)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=(0,v.isValidFormat)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,v.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);let i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){let i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e.s,e.d)},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();let s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){let t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,v.stringify)(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):B("Unrecognized action received from server: "+(0,v.stringify)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,v.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=new Date().getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+e$.nextConnectionId_++,i=this.lastSessionId,s=!1,o=null,a=function(){o?o.close():(s=!0,n())};this.realtime_={close:a,sendRequest:function(e){(0,v.assert)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)}};let l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[a,h]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?q("getToken() completed but was canceled"):(q("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=h&&h.token,o=new eI(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{U(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&U(e),a())}}}interrupt(e){q("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){q("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,v.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>J(e)).join("$"):"default";let r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){let n;let r=new ek(e).toString();if(this.listens.has(r)){let e=this.listens.get(r);n=e.get(t),e.delete(t),0===e.size&&this.listens.delete(r)}else n=void 0;return n}onAuthRevoked_(e,t){q("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){q("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";(0,v.isNodeSdk)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+I.replace(/\./g,"-")]=1,(0,v.isMobileCordova)()?e["framework.cordova"]=1:(0,v.isReactNative)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=eS.getInstance().currentlyOnline();return(0,v.isEmpty)(this.interruptReasons_)&&e}}e$.nextPersistentConnectionId_=0,e$.nextConnectionId_=0;/**
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
 */class eY{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new eY(e,t)}}/**
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
 */class eG{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new eY($,e),r=new eY($,t);return 0!==this.compare(n,r)}minPost(){return eY.MIN}}class eK extends eG{static get __EMPTY_NODE(){return r}static set __EMPTY_NODE(e){r=e}compare(e,t){return G(e.name,t.name)}isDefinedOn(e){throw(0,v.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return eY.MIN}maxPost(){return new eY(Y,r)}makePost(e,t){return(0,v.assert)("string"==typeof e,"KeyIndex indexValue must always be a string."),new eY(e,r)}toString(){return".key"}}let eQ=new eK;/**
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
 */class eJ{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class eX{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:eX.RED,this.left=null!=r?r:eZ.EMPTY_NODE,this.right=null!=i?i:eZ.EMPTY_NODE}copy(e,t,n,r,i){return new eX(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}removeMin_(){if(this.left.isEmpty())return eZ.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let n,r;if(n=this,0>t(e,n.key))n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return eZ.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,eX.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,eX.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){return Math.pow(2,this.check_())<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}eX.RED=!0,eX.BLACK=!1;class eZ{constructor(e,t=eZ.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new eZ(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,eX.BLACK,null,null))}remove(e){return new eZ(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,eX.BLACK,null,null))}get(e){let t;let n=this.root_;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty()){if(r)return r.key;return null}for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new eJ(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new eJ(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new eJ(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new eJ(this.root_,null,this.comparator_,!0,e)}}/**
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
 */function e0(e,t){return G(e.name,t.name)}function e1(e,t){return G(e,t)}eZ.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new eX(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};let e2=function(e){return"number"==typeof e?"number:"+ee(e):"string:"+e},e4=function(e){if(e.isLeafNode()){let t=e.val();(0,v.assert)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,v.contains)(t,".sv"),"Priority must be a string or number.")}else(0,v.assert)(e===i||e.isEmpty(),"priority of unexpected type.");(0,v.assert)(e===i||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};class e3{constructor(e,t=e3.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,v.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),e4(this.priorityNode_)}static set __childrenNodeConstructor(e){s=e}static get __childrenNodeConstructor(){return s}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new e3(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:e3.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return eF(e)?this:".priority"===eN(e)?this.priorityNode_:e3.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:e3.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let n=eN(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,v.assert)(".priority"!==n||1===eD(e),".priority must be the last token in a path"),this.updateImmediateChild(n,e3.__childrenNodeConstructor.EMPTY_NODE.updateChild(eR(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+e2(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=ee(this.value_):e+=this.value_,this.lazyHash_=A(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===e3.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof e3.__childrenNodeConstructor?-1:((0,v.assert)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,n=typeof this.value_,r=e3.VALUE_TYPE_ORDER.indexOf(t),i=e3.VALUE_TYPE_ORDER.indexOf(n);return((0,v.assert)(r>=0,"Unknown leaf type: "+t),(0,v.assert)(i>=0,"Unknown leaf type: "+n),r!==i)?i-r:"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}e3.VALUE_TYPE_ORDER=["object","boolean","number","string"];let e6=new class extends eG{compare(e,t){let n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?G(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return eY.MIN}maxPost(){return new eY(Y,new e3("[PRIORITY-POST]",a))}makePost(e,t){return new eY(t,new e3("[PRIORITY-POST]",o(e)))}toString(){return".priority"}},e5=Math.log(2);class e9{constructor(e){this.count=parseInt(Math.log(e+1)/e5,10),this.current_=this.count-1;let t=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}let e8=function(e,t,n,r){e.sort(t);let i=function(t,r){let s;let o=r-t;if(0===o)return null;if(1===o)return s=e[t],new eX(n?n(s):s,s.node,eX.BLACK,null,null);{let a=parseInt(o/2,10)+t,l=i(t,a),h=i(a+1,r);return s=e[a],new eX(n?n(s):s,s.node,eX.BLACK,l,h)}};return new eZ(r||t,function(t){let r=null,s=null,o=e.length,a=function(t,r){let s=o-t,a=o;o-=t;let h=i(s+1,a),u=e[s];l(new eX(n?n(u):u,u.node,r,null,h))},l=function(e){r?r.left=e:s=e,r=e};for(let e=0;e<t.count;++e){let n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,eX.BLACK):(a(r,eX.BLACK),a(r,eX.RED))}return s}(new e9(e.length)))},e7={};class te{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,v.assert)(e7&&e6,"ChildrenNode.ts has not been loaded"),l=l||new te({".priority":e7},{".priority":e6})}get(e){let t=(0,v.safeGet)(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof eZ?t:null}hasIndex(e){return(0,v.contains)(this.indexSet_,e.toString())}addIndex(e,t){let n;(0,v.assert)(e!==eQ,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let r=[],i=!1,s=t.getIterator(eY.Wrap),o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();n=i?e8(r,e.getCompare()):e7;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let h=Object.assign({},this.indexes_);return h[a]=n,new te(h,l)}addToIndexes(e,t){return new te((0,v.map)(this.indexes_,(n,r)=>{let i=(0,v.safeGet)(this.indexSet_,r);if((0,v.assert)(i,"Missing index implementation for "+r),n===e7){if(!i.isDefinedOn(e.node))return e7;{let n=[],r=t.getIterator(eY.Wrap),s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),e8(n,i.getCompare())}}{let r=t.get(e.name),i=n;return r&&(i=i.remove(new eY(e.name,r))),i.insert(e,e.node)}}),this.indexSet_)}removeFromIndexes(e,t){return new te((0,v.map)(this.indexes_,n=>{if(n===e7)return n;{let r=t.get(e.name);return r?n.remove(new eY(e.name,r)):n}}),this.indexSet_)}}class tt{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&e4(this.priorityNode_),this.children_.isEmpty()&&(0,v.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return h||(h=new tt(new eZ(e1),null,te.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||h}updatePriority(e){return this.children_.isEmpty()?this:new tt(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?h:t}}getChild(e){let t=eN(e);return null===t?this:this.getImmediateChild(t).getChild(eR(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,v.assert)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let n,r;let i=new eY(e,t);t.isEmpty()?(n=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(n=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));let s=n.isEmpty()?h:this.priorityNode_;return new tt(n,s,r)}}updateChild(e,t){let n=eN(e);if(null===n)return t;{(0,v.assert)(".priority"!==eN(e)||1===eD(e),".priority must be the last token in a path");let r=this.getImmediateChild(n).updateChild(eR(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},n=0,r=0,i=!0;if(this.forEachChild(e6,(s,o)=>{t[s]=o.val(e),n++,i&&tt.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1}),e||!i||!(r<2*n))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let e=[];for(let n in t)e[n]=t[n];return e}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+e2(this.getPriority().val())+":"),this.forEachChild(e6,(t,n)=>{let r=n.hash();""!==r&&(e+=":"+t+":"+r)}),this.lazyHash_=""===e?"":A(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let r=this.resolveIndex_(n);if(!r)return this.children_.getPredecessorKey(e);{let n=r.getPredecessorKey(new eY(e,t));return n?n.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let e=t.minKey();return e&&e.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new eY(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let e=t.maxKey();return e&&e.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new eY(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let n=this.children_.getIteratorFrom(e.name,eY.Wrap),r=n.peek();for(;null!=r&&0>t.compare(r,e);)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let n=this.children_.getReverseIteratorFrom(e.name,eY.Wrap),r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===tn?-1:0}withIndex(e){if(e===eQ||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new tt(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===eQ||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority())||this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(e6),n=e.getIterator(e6),r=t.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=t.getNext(),i=n.getNext()}return null===r&&null===i}}resolveIndex_(e){return e===eQ?null:this.indexMap_.get(e.toString())}}tt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;let tn=new class extends tt{constructor(){super(new eZ(e1),tt.EMPTY_NODE,te.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return tt.EMPTY_NODE}isEmpty(){return!1}};function tr(e,t=null){if(null===e)return tt.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,v.assert)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new e3(e,tr(t));if(e instanceof Array){let n=tt.EMPTY_NODE;return Z(e,(t,r)=>{if((0,v.contains)(e,t)&&"."!==t.substring(0,1)){let e=tr(r);(e.isLeafNode()||!e.isEmpty())&&(n=n.updateImmediateChild(t,e))}}),n.updatePriority(tr(t))}{let n=[],r=!1;if(Z(e,(e,t)=>{if("."!==e.substring(0,1)){let i=tr(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new eY(e,i)))}}),0===n.length)return tt.EMPTY_NODE;let i=e8(n,e0,e=>e.name,e1);if(!r)return new tt(i,tr(t),te.Default);{let e=e8(n,e6.getCompare());return new tt(i,tr(t),new te({".priority":e},{".priority":e6}))}}}Object.defineProperties(eY,{MIN:{value:new eY($,tt.EMPTY_NODE)},MAX:{value:new eY(Y,tn)}}),eK.__EMPTY_NODE=tt.EMPTY_NODE,e3.__childrenNodeConstructor=tt,i=tn,a=tn,o=tr;/**
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
 */class ti extends eG{constructor(e){super(),this.indexPath_=e,(0,v.assert)(!eF(e)&&".priority"!==eN(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?G(e.name,t.name):i}makePost(e,t){let n=tr(e);return new eY(t,tt.EMPTY_NODE.updateChild(this.indexPath_,n))}maxPost(){return new eY(Y,tt.EMPTY_NODE.updateChild(this.indexPath_,tn))}toString(){return eO(this.indexPath_,0).join("/")}}let ts=new /**
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
 */class extends eG{compare(e,t){let n=e.node.compareTo(t.node);return 0===n?G(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return eY.MIN}maxPost(){return eY.MAX}makePost(e,t){return new eY(t,tr(e))}toString(){return".value"}};/**
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
 */function to(e){return{type:"value",snapshotNode:e}}function ta(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function tl(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function th(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}/**
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
 */class tu{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){(0,v.assert)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(tl(t,o)):(0,v.assert)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(ta(t,n)):s.trackChildChange(th(t,n,o))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return null==n||(e.isLeafNode()||e.forEachChild(e6,(e,r)=>{t.hasChild(e)||n.trackChildChange(tl(e,r))}),t.isLeafNode()||t.forEachChild(e6,(t,r)=>{if(e.hasChild(t)){let i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(th(t,r,i))}else n.trackChildChange(ta(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?tt.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class tc{constructor(e){this.indexedFilter_=new tu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=tc.getStartPost_(e),this.endPost_=tc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?0>=this.index_.compare(this.getStartPost(),e):0>this.index_.compare(this.getStartPost(),e),n=this.endIsInclusive_?0>=this.index_.compare(e,this.getEndPost()):0>this.index_.compare(e,this.getEndPost());return t&&n}updateChild(e,t,n,r,i,s){return this.matches(new eY(t,n))||(n=tt.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=tt.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(tt.EMPTY_NODE);let i=this;return t.forEachChild(e6,(e,t)=>{i.matches(new eY(e,t))||(r=r.updateImmediateChild(e,tt.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(!e.hasStart())return e.getIndex().minPost();{let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}}static getEndPost_(e){if(!e.hasEnd())return e.getIndex().maxPost();{let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}}}/**
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
 */class td{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{let t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{let t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new tc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,s){return(this.rangedFilter_.matches(new eY(t,n))||(n=tt.EMPTY_NODE),e.getImmediateChild(t).equals(n))?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=tt.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=tt.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){let t=e.getNext();if(this.withinDirectionalStart(t)){if(this.withinDirectionalEnd(t))r=r.updateImmediateChild(t.name,t.node),n++;else break}}}else{let e;r=(r=t.withIndex(this.index_)).updatePriority(tt.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;for(;e.hasNext();){let t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:r=r.updateImmediateChild(t.name,tt.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){let e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();(0,v.assert)(e.numChildren()===this.limit_,"");let o=new eY(t,n),a=this.reverse_?e.getFirstChild(this.index_):e.getLastChild(this.index_),l=this.rangedFilter_.matches(o);if(e.hasChild(t)){let h=e.getImmediateChild(t),u=r.getChildAfterChild(this.index_,a,this.reverse_);for(;null!=u&&(u.name===t||e.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);let c=null==u?1:s(u,o);if(l&&!n.isEmpty()&&c>=0)return null!=i&&i.trackChildChange(th(t,n,h)),e.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(tl(t,h));let n=e.updateImmediateChild(t,tt.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=i&&i.trackChildChange(ta(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:l&&s(a,o)>=0?(null!=i&&(i.trackChildChange(tl(a.name,a.node)),i.trackChildChange(ta(t,n))),e.updateImmediateChild(t,n).updateImmediateChild(a.name,tt.EMPTY_NODE)):e}}/**
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
 */class tp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=e6}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,v.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return((0,v.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:$}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,v.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return((0,v.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:Y}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,v.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===e6}copy(){let e=new tp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tf(e,t,n){let r=e.copy();return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function t_(e,t,n){let r=e.copy();return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function tm(e,t){let n=e.copy();return n.index_=t,n}function tg(e){let t;let n={};if(e.isDefault())return n;if(e.index_===e6?t="$priority":e.index_===ts?t="$value":e.index_===eQ?t="$key":((0,v.assert)(e.index_ instanceof ti,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=(0,v.stringify)(t),e.startSet_){let t=e.startAfterSet_?"startAfter":"startAt";n[t]=(0,v.stringify)(e.indexStartValue_),e.startNameSet_&&(n[t]+=","+(0,v.stringify)(e.indexStartName_))}if(e.endSet_){let t=e.endBeforeSet_?"endBefore":"endAt";n[t]=(0,v.stringify)(e.indexEndValue_),e.endNameSet_&&(n[t]+=","+(0,v.stringify)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function ty(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==e6&&(t.i=e.index_.toString()),t}/**
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
 */class tv extends eT{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=j("p:rest:"),this.listens_={}}reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,v.assert)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){let i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);let s=tv.getListenId_(e,n),o={};this.listens_[s]=o;let a=tg(e._queryParams);this.restRequest_(i+".json",a,(e,t)=>{let a=t;404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),(0,v.safeGet)(this.listens_,s)===o&&r(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let n=tv.getListenId_(e,t);delete this.listens_[n]}get(e){let t=tg(e._queryParams),n=e._path.toString(),r=new v.Deferred;return this.restRequest_(n+".json",t,(e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,v.querystring)(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=(0,v.jsonEval)(o.responseText)}catch(e){U("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&U("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()})}}/**
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
 */class tC{constructor(){this.rootNode_=tt.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function tb(){return{value:null,children:new Map}}function tw(e,t,n){if(eF(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{let r=eN(t);e.children.has(r)||e.children.set(r,tb()),tw(e.children.get(r),t=eR(t),n)}}function tE(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}(e,(e,r)=>{tE(r,new ek(t.toString()+"/"+e),n)})}/**
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
 */class tI{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Z(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}class tT{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new tI(e),ei(this.reportStats_.bind(this),Math.floor(1e4+2e4*Math.random()))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;Z(e,(e,r)=>{r>0&&(0,v.contains)(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),ei(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function tx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tS(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tk(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(f=_||(_={}))[f.OVERWRITE=0]="OVERWRITE",f[f.MERGE=1]="MERGE",f[f.ACK_USER_WRITE=2]="ACK_USER_WRITE",f[f.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
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
 */class tP{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=_.ACK_USER_WRITE,this.source=tx()}operationForChild(e){if(!eF(this.path))return(0,v.assert)(eN(this.path)===e,"operationForChild called for unrelated child."),new tP(eR(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return(0,v.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new ek(e));return new tP(eP(),t,this.revert)}}}/**
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
 */class tN{constructor(e,t){this.source=e,this.path=t,this.type=_.LISTEN_COMPLETE}operationForChild(e){return eF(this.path)?new tN(this.source,eP()):new tN(this.source,eR(this.path))}}/**
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
 */class tD{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=_.OVERWRITE}operationForChild(e){return eF(this.path)?new tD(this.source,eP(),this.snap.getImmediateChild(e)):new tD(this.source,eR(this.path),this.snap)}}/**
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
 */class tR{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=_.MERGE}operationForChild(e){if(!eF(this.path))return(0,v.assert)(eN(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tR(this.source,eR(this.path),this.children);{let t=this.children.subtree(new ek(e));return t.isEmpty()?null:t.value?new tD(this.source,eP(),t.value):new tR(this.source,eP(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class tA{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(eF(e))return this.isFullyInitialized()&&!this.filtered_;let t=eN(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class tO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tL(e,t,n,r,i,s){let o=r.filter(e=>e.type===n);o.sort((t,n)=>(function(e,t,n){if(null==t.childName||null==n.childName)throw(0,v.assertionError)("Should only compare child_ events.");let r=new eY(t.childName,t.snapshotNode),i=new eY(n.childName,n.snapshotNode);return e.index_.compare(r,i)})(e,t,n)),o.forEach(n=>{let r=("value"===n.type||"child_removed"===n.type||(n.prevName=s.getPredecessorChildName(n.childName,n.snapshotNode,e.index_)),n);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}/**
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
 */function tM(e,t){return{eventCache:e,serverCache:t}}function tF(e,t,n,r){return tM(new tA(t,n,r),e.serverCache)}function tq(e,t,n,r){return tM(e.eventCache,new tA(t,n,r))}function tj(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function tB(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}let tW=()=>(u||(u=new eZ(K)),u);class tU{constructor(e,t=tW()){this.value=e,this.children=t}static fromObject(e){let t=new tU(null);return Z(e,(e,n)=>{t=t.set(new ek(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:eP(),value:this.value};if(eF(e))return null;{let n=eN(e),r=this.children.get(n);if(null===r)return null;{let i=r.findRootMostMatchingPathAndValue(eR(e),t);return null!=i?{path:eM(new ek(n),i.path),value:i.value}:null}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(eF(e))return this;{let t=eN(e),n=this.children.get(t);return null!==n?n.subtree(eR(e)):new tU(null)}}set(e,t){if(eF(e))return new tU(t,this.children);{let n=eN(e),r=(this.children.get(n)||new tU(null)).set(eR(e),t),i=this.children.insert(n,r);return new tU(this.value,i)}}remove(e){if(eF(e))return this.children.isEmpty()?new tU(null):new tU(null,this.children);{let t=eN(e),n=this.children.get(t);if(!n)return this;{let r;let i=n.remove(eR(e));return(r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty())?new tU(null):new tU(this.value,r)}}}get(e){if(eF(e))return this.value;{let t=eN(e),n=this.children.get(t);return n?n.get(eR(e)):null}}setTree(e,t){if(eF(e))return t;{let n;let r=eN(e),i=(this.children.get(r)||new tU(null)).setTree(eR(e),t);return n=i.isEmpty()?this.children.remove(r):this.children.insert(r,i),new tU(this.value,n)}}fold(e){return this.fold_(eP(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(eM(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,eP(),t)}findOnPath_(e,t,n){let r=!!this.value&&n(t,this.value);if(r)return r;if(eF(e))return null;{let r=eN(e),i=this.children.get(r);return i?i.findOnPath_(eR(e),eM(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,eP(),t)}foreachOnPath_(e,t,n){if(eF(e))return this;{this.value&&n(t,this.value);let r=eN(e),i=this.children.get(r);return i?i.foreachOnPath_(eR(e),eM(t,r),n):new tU(null)}}foreach(e){this.foreach_(eP(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(eM(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
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
 */class tH{constructor(e){this.writeTree_=e}static empty(){return new tH(new tU(null))}}function tV(e,t,n){if(eF(t))return new tH(new tU(n));{let r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){let i=r.path,s=r.value,o=eq(i,t);return s=s.updateChild(o,n),new tH(e.writeTree_.set(i,s))}{let r=new tU(n);return new tH(e.writeTree_.setTree(t,r))}}}function tz(e,t,n){let r=e;return Z(n,(e,n)=>{r=tV(r,eM(t,e),n)}),r}function t$(e,t){return eF(t)?tH.empty():new tH(e.writeTree_.setTree(t,new tU(null)))}function tY(e,t){return null!=tG(e,t)}function tG(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(eq(n.path,t)):null}function tK(e){let t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(e6,(e,n)=>{t.push(new eY(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new eY(e,n.value))}),t}function tQ(e,t){if(eF(t))return e;{let n=tG(e,t);return new tH(null!=n?new tU(n):e.writeTree_.subtree(t))}}function tJ(e){return e.writeTree_.isEmpty()}function tX(e,t){return function e(t,n,r){if(null!=n.value)return r.updateChild(t,n.value);{let i=null;return n.children.inorderTraversal((n,s)=>{".priority"===n?((0,v.assert)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):r=e(eM(t,n),s,r)}),r.getChild(t).isEmpty()||null===i||(r=r.updateChild(eM(t,".priority"),i)),r}}(eP(),e.writeTree_,t)}function tZ(e){return e.visible}function t0(e,t,n){let r=tH.empty();for(let i=0;i<e.length;++i){let s=e[i];if(t(s)){let e;let t=s.path;if(s.snap)eW(n,t)?r=tV(r,e=eq(n,t),s.snap):eW(t,n)&&(e=eq(t,n),r=tV(r,eP(),s.snap.getChild(e)));else if(s.children){if(eW(n,t))r=tz(r,e=eq(n,t),s.children);else if(eW(t,n)){if(eF(e=eq(t,n)))r=tz(r,eP(),s.children);else{let t=(0,v.safeGet)(s.children,eN(e));if(t){let n=t.getChild(eR(e));r=tV(r,eP(),n)}}}}else throw(0,v.assertionError)("WriteRecord should have .snap or .children")}}return r}function t1(e,t,n,r,i){if(r||i){let s=tQ(e.visibleWrites,t);return!i&&tJ(s)?n:i||null!=n||tY(s,eP())?tX(t0(e.allWrites,function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(eW(e.path,t)||eW(t,e.path))},t),n||tt.EMPTY_NODE):null}{let r=tG(e.visibleWrites,t);if(null!=r)return r;{let r=tQ(e.visibleWrites,t);return tJ(r)?n:null!=n||tY(r,eP())?tX(r,n||tt.EMPTY_NODE):null}}}function t2(e,t,n,r){return t1(e.writeTree,e.treePath,t,n,r)}function t4(e,t){return function(e,t,n){let r=tt.EMPTY_NODE,i=tG(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(e6,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(!n)return tK(tQ(e.visibleWrites,t)).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r;{let i=tQ(e.visibleWrites,t);return n.forEachChild(e6,(e,t)=>{let n=tX(tQ(i,new ek(e)),t);r=r.updateImmediateChild(e,n)}),tK(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}}(e.writeTree,e.treePath,t)}function t3(e,t,n,r){return function(e,t,n,r,i){(0,v.assert)(r||i,"Either existingEventSnap or existingServerSnap must exist");let s=eM(t,n);if(tY(e.visibleWrites,s))return null;{let t=tQ(e.visibleWrites,s);return tJ(t)?i.getChild(n):tX(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function t6(e,t){var n,r;return n=e.writeTree,r=eM(e.treePath,t),tG(n.visibleWrites,r)}function t5(e,t,n){return function(e,t,n,r){let i=eM(t,n),s=tG(e.visibleWrites,i);return null!=s?s:r.isCompleteForChild(n)?tX(tQ(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function t9(e,t){return t8(eM(e.treePath,t),e.writeTree)}function t8(e,t){return{treePath:e,writeTree:t}}/**
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
 */class t7{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;(0,v.assert)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,v.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");let r=this.changeMap.get(n);if(r){let i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,th(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,tl(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,ta(n,e.snapshotNode));else if("child_changed"===t&&"child_changed"===i)this.changeMap.set(n,th(n,e.snapshotNode,r.oldSnap));else throw(0,v.assertionError)("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}let ne=new /**
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
 */class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class nt{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=null!=this.optCompleteServerCache_?new tA(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return t5(this.writes_,e,t)}}getChildAfterChild(e,t,n){var r;let i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:tB(this.viewCache_),s=function(e,t,n,r,i,s,o){let a;let l=tQ(e.visibleWrites,t),h=tG(l,eP());if(null!=h)a=h;else{if(null==n)return[];a=tX(l,n)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{let e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o),i=n.getNext();for(;i&&e.length<1;)0!==t(i,r)&&e.push(i),i=n.getNext();return e}}((r=this.writes_).writeTree,r.treePath,i,t,0,n,e);return 0===s.length?null:s[0]}}function nn(e,t,n,r,i,s){let o=t.eventCache;if(null!=t6(r,n))return t;{let a,l;if(eF(n)){if((0,v.assert)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let n=tB(t),i=t4(r,n instanceof tt?n:tt.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{let n=t2(r,tB(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}}else{let h=eN(n);if(".priority"===h){(0,v.assert)(1===eD(n),"Can't have a priority with additional path components");let i=o.getNode(),s=t3(r,n,i,l=t.serverCache.getNode());a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{let u;let c=eR(n);if(o.isCompleteForChild(h)){l=t.serverCache.getNode();let e=t3(r,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(h).updateChild(c,e):o.getNode().getImmediateChild(h)}else u=t5(r,h,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),h,u,c,i,s):o.getNode()}}return tF(t,a,o.isFullyInitialized()||eF(n),e.filter.filtersNodes())}}function nr(e,t,n,r,i,s,o,a){let l;let h=t.serverCache,u=o?e.filter:e.filter.getIndexedFilter();if(eF(n))l=u.updateFullNode(h.getNode(),r,null);else if(u.filtersNodes()&&!h.isFiltered()){let e=h.getNode().updateChild(n,r);l=u.updateFullNode(h.getNode(),e,null)}else{let e=eN(n);if(!h.isCompleteForPath(n)&&eD(n)>1)return t;let i=eR(n),s=h.getNode().getImmediateChild(e).updateChild(i,r);l=".priority"===e?u.updatePriority(h.getNode(),s):u.updateChild(h.getNode(),e,s,i,ne,null)}let c=tq(t,l,h.isFullyInitialized()||eF(n),u.filtersNodes()),d=new nt(i,c,s);return nn(e,c,n,i,d,a)}function ni(e,t,n,r,i,s,o){let a,l;let h=t.eventCache,u=new nt(i,t,s);if(eF(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,o),a=tF(t,l,!0,e.filter.filtersNodes());else{let i=eN(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),a=tF(t,l,h.isFullyInitialized(),h.isFiltered());else{let s;let l=eR(n),c=h.getNode().getImmediateChild(i);if(eF(l))s=r;else{let e=u.getCompleteChild(i);s=null!=e?".priority"===eA(l)&&e.getChild(eL(l)).isEmpty()?e:e.updateChild(l,r):tt.EMPTY_NODE}a=c.equals(s)?t:tF(t,e.filter.updateChild(h.getNode(),i,s,l,u,o),h.isFullyInitialized(),e.filter.filtersNodes())}}return a}function ns(e,t){return e.eventCache.isCompleteForChild(t)}function no(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function na(e,t,n,r,i,s,o,a){let l;if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t;l=eF(n)?r:new tU(null).setTree(n,r);let u=t.serverCache.getNode();return l.children.inorderTraversal((n,r)=>{if(u.hasChild(n)){let l=no(e,t.serverCache.getNode().getImmediateChild(n),r);h=nr(e,h,new ek(n),l,i,s,o,a)}}),l.children.inorderTraversal((n,r)=>{let l=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!l){let l=no(e,t.serverCache.getNode().getImmediateChild(n),r);h=nr(e,h,new ek(n),l,i,s,o,a)}}),h}/**
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
 */class nl{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let n=this.query_._queryParams,r=new tu(n.getIndex()),i=n.loadsAllData()?new tu(n.getIndex()):n.hasLimit()?new td(n):new tc(n);this.processor_={filter:i};let s=t.serverCache,o=t.eventCache,a=r.updateFullNode(tt.EMPTY_NODE,s.getNode(),null),l=i.updateFullNode(tt.EMPTY_NODE,o.getNode(),null),h=new tA(a,s.isFullyInitialized(),r.filtersNodes()),u=new tA(l,o.isFullyInitialized(),i.filtersNodes());this.viewCache_=tM(u,h),this.eventGenerator_=new tO(this.query_)}get query(){return this.query_}}function nh(e){return 0===e.eventRegistrations_.length}function nu(e,t,n){let r=[];if(n){(0,v.assert)(null==t,"A cancel should cancel all event registrations.");let i=e.query._path;e.eventRegistrations_.forEach(e=>{let t=e.createCancelEvent(n,i);t&&r.push(t)})}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){let i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function nc(e,t,n,r){var i,s;t.type===_.MERGE&&null!==t.source.queryId&&((0,v.assert)(tB(e.viewCache_),"We should always have a full cache before handling merges"),(0,v.assert)(tj(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,a=function(e,t,n,r,i){let s,o;let a=new t7;if(n.type===_.OVERWRITE)n.source.fromUser?s=ni(e,t,n.path,n.snap,r,i,a):((0,v.assert)(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered()&&!eF(n.path),s=nr(e,t,n.path,n.snap,r,i,o,a));else if(n.type===_.MERGE){var l,h;let u;n.source.fromUser?(l=n.path,h=n.children,u=t,h.foreach((n,s)=>{let o=eM(l,n);ns(t,eN(o))&&(u=ni(e,u,o,s,r,i,a))}),h.foreach((n,s)=>{let o=eM(l,n);ns(t,eN(o))||(u=ni(e,u,o,s,r,i,a))}),s=u):((0,v.assert)(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered(),s=na(e,t,n.path,n.children,r,i,o,a))}else if(n.type===_.ACK_USER_WRITE)s=n.revert?function(e,t,n,r,i,s){let o;if(null!=t6(r,n))return t;{let a;let l=new nt(r,t,i),h=t.eventCache.getNode();if(eF(n)||".priority"===eN(n)){let n;if(t.serverCache.isFullyInitialized())n=t2(r,tB(t));else{let e=t.serverCache.getNode();(0,v.assert)(e instanceof tt,"serverChildren would be complete if leaf node"),n=t4(r,e)}a=e.filter.updateFullNode(h,n,s)}else{let i=eN(n),u=t5(r,i,t.serverCache);null==u&&t.serverCache.isCompleteForChild(i)&&(u=h.getImmediateChild(i)),(a=null!=u?e.filter.updateChild(h,i,u,eR(n),l,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(h,i,tt.EMPTY_NODE,eR(n),l,s):h).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=t2(r,tB(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,o,s))}return o=t.serverCache.isFullyInitialized()||null!=t6(r,eP()),tF(t,a,o,e.filter.filtersNodes())}}(e,t,n.path,r,i,a):function(e,t,n,r,i,s,o){if(null!=t6(i,n))return t;let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(eF(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return nr(e,t,n,l.getNode().getChild(n),i,s,a,o);if(!eF(n))return t;{let r=new tU(null);return l.getNode().forEachChild(eQ,(e,t)=>{r=r.set(new ek(e),t)}),na(e,t,n,r,i,s,a,o)}}{let h=new tU(null);return r.foreach((e,t)=>{let r=eM(n,e);l.isCompleteForPath(r)&&(h=h.set(e,l.getNode().getChild(r)))}),na(e,t,n,h,i,s,a,o)}}(e,t,n.path,n.affectedTree,r,i,a);else if(n.type===_.LISTEN_COMPLETE)s=function(e,t,n,r,i){let s=t.serverCache;return nn(e,tq(t,s.getNode(),s.isFullyInitialized()||eF(n),s.isFiltered()),n,r,ne,i)}(e,t,n.path,r,a);else throw(0,v.assertionError)("Unknown operation type: "+n.type);let u=a.getChanges();return function(e,t,n){let r=t.eventCache;if(r.isFullyInitialized()){let i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=tj(e);!(n.length>0)&&e.eventCache.isFullyInitialized()&&(!i||r.getNode().equals(s))&&r.getNode().getPriority().equals(s.getPriority())||n.push(to(tj(t)))}}(t,s,u),{viewCache:s,changes:u}}(e.processor_,o,t,n,r);return i=e.processor_,s=a.viewCache,(0,v.assert)(s.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),(0,v.assert)(s.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),(0,v.assert)(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,nd(e,a.changes,a.viewCache.eventCache.getNode(),null)}function nd(e,t,n,r){let i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){let i=[],s=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var n;s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))}}),tL(e,i,"child_removed",t,r,n),tL(e,i,"child_added",t,r,n),tL(e,i,"child_moved",s,r,n),tL(e,i,"child_changed",t,r,n),tL(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}class np{constructor(){this.views=new Map}}function nf(e,t,n,r){let i=t.source.queryId;if(null!==i){let s=e.views.get(i);return(0,v.assert)(null!=s,"SyncTree gave us an op for an invalid query."),nc(s,t,n,r)}{let i=[];for(let s of e.views.values())i=i.concat(nc(s,t,n,r));return i}}function n_(e,t,n,r,i){let s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=t2(n,i?r:null),s=!1;return e?s=!0:(e=r instanceof tt?t4(n,r):tt.EMPTY_NODE,s=!1),new nl(t,tM(new tA(e,s,!1),new tA(r,i,!1)))}return o}function nm(e){let t=[];for(let n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ng(e,t){let n=null;for(let r of e.views.values())n=n||function(e,t){let n=tB(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!eF(t)&&!n.getImmediateChild(eN(t)).isEmpty())?n.getChild(t):null}(r,t);return n}function ny(e,t){if(t._queryParams.loadsAllData())return nC(e);{let n=t._queryIdentifier;return e.views.get(n)}}function nv(e){return null!=nC(e)}function nC(e){for(let t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}let nb=1;class nw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new tU(null),this.pendingWriteTree_={visibleWrites:tH.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nE(e,t,n,r,i){var s,o;return(s=e.pendingWriteTree_,o=i,(0,v.assert)(r>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),s.allWrites.push({path:t,snap:n,writeId:r,visible:o}),o&&(s.visibleWrites=tV(s.visibleWrites,t,n)),s.lastWriteId=r,i)?nN(e,new tD(tx(),t,n)):[]}function nI(e,t,n=!1){let r=function(e,t){for(let n=0;n<e.allWrites.length;n++){let r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(!function(e,t){let n=e.allWrites.findIndex(e=>e.writeId===t);(0,v.assert)(n>=0,"removeWrite called with nonexistent writeId.");let r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){let t=e.allWrites[o];t.visible&&(o>=n&&function(e,t){if(e.snap)return eW(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&eW(eM(e.path,n),t))return!0;return!1}(t,r.path)?i=!1:eW(r.path,t.path)&&(s=!0)),o--}return!!i&&(s?(e.visibleWrites=t0(e.allWrites,tZ,eP()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1):r.snap?e.visibleWrites=t$(e.visibleWrites,r.path):Z(r.children,t=>{e.visibleWrites=t$(e.visibleWrites,eM(r.path,t))}),!0)}(e.pendingWriteTree_,t))return[];{let t=new tU(null);return null!=r.snap?t=t.set(eP(),!0):Z(r.children,e=>{t=t.set(new ek(e),!0)}),nN(e,new tP(r.path,t,n))}}function nT(e,t,n){return nN(e,new tD(tS(),t,n))}function nx(e,t,n,r,i=!1){let s=t._path,o=e.syncPointTree_.get(s),a=[];if(o&&("default"===t._queryIdentifier||null!=ny(o,t))){let l=function(e,t,n,r){let i=t._queryIdentifier,s=[],o=[],a=nv(e);if("default"===i)for(let[t,i]of e.views.entries())o=o.concat(nu(i,n,r)),nh(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||s.push(i.query));else{let t=e.views.get(i);t&&(o=o.concat(nu(t,n,r)),nh(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!nv(e)&&s.push(new((0,v.assert)(c,"Reference.ts has not been loaded"),c)(t._repo,t._path)),{removed:s,events:o}}(o,t,n,r);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));let h=l.removed;if(a=l.events,!i){let n=-1!==h.findIndex(e=>e._queryParams.loadsAllData()),i=e.syncPointTree_.findOnPath(s,(e,t)=>nv(t));if(n&&!i){let t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){let n=t.fold((e,t,n)=>{if(t&&nv(t))return[nC(t)];{let e=[];return t&&(e=nm(t)),Z(n,(t,n)=>{e=e.concat(n)}),e}});for(let t=0;t<n.length;++t){let r=n[t],i=r.query,s=nD(e,r);e.listenProvider_.startListening(nF(i),nR(e,i),s.hashFn,s.onComplete)}}}i||!(h.length>0)||r||(n?e.listenProvider_.stopListening(nF(t),null):h.forEach(t=>{let n=e.queryToTagMap.get(nA(t));e.listenProvider_.stopListening(nF(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){let r=t[n];if(!r._queryParams.loadsAllData()){let t=nA(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,h)}return a}function nS(e,t,n,r){let i=nO(e,r);if(null==i)return[];{let r=nL(i),s=r.path,o=r.queryId,a=eq(s,t);return nM(e,s,new tD(tk(o),a,n))}}function nk(e,t,n,r=!1){let i;let s=t._path,o=null,a=!1;e.syncPointTree_.foreachOnPath(s,(e,t)=>{let n=eq(e,s);o=o||ng(t,n),a=a||nv(t)});let l=e.syncPointTree_.get(s);l?(a=a||nv(l),o=o||ng(l,eP())):(l=new np,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=o?i=!0:(i=!1,o=tt.EMPTY_NODE,e.syncPointTree_.subtree(s).foreachChild((e,t)=>{let n=ng(t,eP());n&&(o=o.updateImmediateChild(e,n))}));let h=null!=ny(l,t);if(!h&&!t._queryParams.loadsAllData()){let n=nA(t);(0,v.assert)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");let r=nb++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let u=function(e,t,n,r,i,s){let o=n_(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),!function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){let n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(e6,(e,t)=>{r.push(ta(e,t))}),n.isFullyInitialized()&&r.push(to(n.getNode())),nd(e,r,n.getNode(),t)}(o,n)}(l,t,n,t8(s,e.pendingWriteTree_),o,i);if(!h&&!a&&!r){let n=ny(l,t);u=u.concat(function(e,t,n){let r=t._path,i=nR(e,t),s=nD(e,n),o=e.listenProvider_.startListening(nF(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)(0,v.assert)(!nv(a.value),"If we're adding a query, it shouldn't be shadowed");else{let t=a.fold((e,t,n)=>{if(!eF(e)&&t&&nv(t))return[nC(t).query];{let e=[];return t&&(e=e.concat(nm(t).map(e=>e.query))),Z(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){let r=t[n];e.listenProvider_.stopListening(nF(r),nR(e,r))}}return o}(e,t,n))}return u}function nP(e,t,n){let r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(e,n)=>{let r=ng(n,eq(e,t));if(r)return r});return t1(r,t,i,n,!0)}function nN(e,t){var n;return function e(t,n,r,i){if(eF(t.path))return function e(t,n,r,i){let s=n.get(eP());null==r&&null!=s&&(r=ng(s,eP()));let o=[];return n.children.inorderTraversal((n,s)=>{let a=r?r.getImmediateChild(n):null,l=t9(i,n),h=t.operationForChild(n);h&&(o=o.concat(e(h,s,a,l)))}),s&&(o=o.concat(nf(s,t,i,r))),o}(t,n,r,i);{let s=n.get(eP());null==r&&null!=s&&(r=ng(s,eP()));let o=[],a=eN(t.path),l=t.operationForChild(a),h=n.children.get(a);if(h&&l){let t=r?r.getImmediateChild(a):null,n=t9(i,a);o=o.concat(e(l,h,t,n))}return s&&(o=o.concat(nf(s,t,i,r))),o}}(t,e.syncPointTree_,null,(n=e.pendingWriteTree_,t8(eP(),n)))}function nD(e,t){let n=t.query,r=nR(e,n);return{hashFn:()=>(t.viewCache_.serverCache.getNode()||tt.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t){var i;return r?function(e,t,n){let r=nO(e,n);if(!r)return[];{let n=nL(r),i=n.path,s=n.queryId,o=eq(i,t);return nM(e,i,new tN(tk(s),o))}}(e,n._path,r):(i=n._path,nN(e,new tN(tS(),i)))}{let r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");let r=Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return nx(e,n,null,r)}}}}function nR(e,t){let n=nA(t);return e.queryToTagMap.get(n)}function nA(e){return e._path.toString()+"$"+e._queryIdentifier}function nO(e,t){return e.tagToQueryMap.get(t)}function nL(e){let t=e.indexOf("$");return(0,v.assert)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ek(e.substr(0,t))}}function nM(e,t,n){let r=e.syncPointTree_.get(t);return(0,v.assert)(r,"Missing sync point for query tag that we're tracking"),nf(r,n,t8(t,e.pendingWriteTree_),null)}function nF(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new((0,v.assert)(d,"Reference.ts has not been loaded"),d)(e._repo,e._path):e}/**
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
 */class nq{constructor(e){this.node_=e}getImmediateChild(e){return new nq(this.node_.getImmediateChild(e))}node(){return this.node_}}class nj{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=eM(this.path_,e);return new nj(this.syncTree_,t)}node(){return nP(this.syncTree_,this.path_)}}let nB=function(e,t,n){return e&&"object"==typeof e?((0,v.assert)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?nW(e[".sv"],t,n):"object"==typeof e[".sv"]?nU(e[".sv"],t):void(0,v.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},nW=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,v.assert)(!1,"Unexpected server value: "+e)},nU=function(e,t,n){e.hasOwnProperty("increment")||(0,v.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let r=e.increment;"number"!=typeof r&&(0,v.assert)(!1,"Unexpected increment value: "+r);let i=t.node();if((0,v.assert)(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;let s=i.getValue();return"number"!=typeof s?r:s+r},nH=function(e,t,n,r){return nz(t,new nj(n,e),r)},nV=function(e,t,n){return nz(e,new nq(t),n)};function nz(e,t,n){let r;let i=nB(e.getPriority().val(),t.getImmediateChild(".priority"),n);if(!e.isLeafNode())return r=e,i!==e.getPriority().val()&&(r=r.updatePriority(new e3(i))),e.forEachChild(e6,(e,i)=>{let s=nz(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))}),r;{let r=nB(e.getValue(),t,n);return r!==e.getValue()||i!==e.getPriority().val()?new e3(r,tr(i)):e}}/**
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
 */class n${constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function nY(e,t){let n=t instanceof ek?t:new ek(t),r=e,i=eN(n);for(;null!==i;){let e=(0,v.safeGet)(r.node.children,i)||{children:{},childCount:0};r=new n$(i,r,e),i=eN(n=eR(n))}return r}function nG(e){return e.node.value}function nK(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,n,r){let i=void 0===nG(r)&&!nQ(r),s=(0,v.contains)(t.node.children,n);i&&s?(delete t.node.children[n],t.node.childCount--,e(t)):i||s||(t.node.children[n]=r.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function nQ(e){return e.node.childCount>0}function nJ(e,t){Z(e.node.children,(n,r)=>{t(new n$(n,e,r))})}function nX(e){return new ek(null===e.parent?e.name:nX(e.parent)+"/"+e.name)}/**
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
 */let nZ=/[\[\].#$\/\u0000-\u001F\u007F]/,n0=/[\[\].#$\u0000-\u001F\u007F]/,n1=function(e){return"string"==typeof e&&0!==e.length&&!nZ.test(e)},n2=function(e){return"string"==typeof e&&0!==e.length&&!n0.test(e)},n4=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!V(e)||e&&"object"==typeof e&&(0,v.contains)(e,".sv")},n3=function(e,t,n,r){r&&void 0===t||n6((0,v.errorPrefix)(e,"value"),t,n)},n6=function(e,t,n){let r=n instanceof ek?new eU(n,e):n;if(void 0===t)throw Error(e+"contains undefined "+eV(r));if("function"==typeof t)throw Error(e+"contains a function "+eV(r)+" with contents = "+t.toString());if(V(t))throw Error(e+"contains "+t.toString()+" "+eV(r));if("string"==typeof t&&t.length>10485760/3&&(0,v.stringLength)(t)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+eV(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(Z(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!n1(t)))throw Error(e+" contains an invalid key ("+t+") "+eV(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(t),r.byteLength_+=(0,v.stringLength)(t),eH(r),n6(e,s,r),function(e){let t=e.parts_.pop();e.byteLength_-=(0,v.stringLength)(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)}),n&&i)throw Error(e+' contains ".value" child '+eV(r)+" in addition to actual children.")}},n5=function(e,t){let n,r;for(n=0;n<t.length;n++){let i=eO(r=t[n]);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!n1(i[t]))throw Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(ej);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&eW(i,r))throw Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},n9=function(e,t,n,r){if(r&&void 0===t)return;let i=(0,v.errorPrefix)(e,"values");if(!(t&&"object"==typeof t)||Array.isArray(t))throw Error(i+" must be an object containing the children to replace.");let s=[];Z(t,(e,t)=>{let r=new ek(e);if(n6(i,t,eM(n,r)),".priority"===eA(r)&&!n4(t))throw Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)}),n5(i,s)},n8=function(e,t,n){if(!n||void 0!==t){if(V(t))throw Error((0,v.errorPrefix)(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!n4(t))throw Error((0,v.errorPrefix)(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},n7=function(e,t,n,r){if((!r||void 0!==n)&&!n1(n))throw Error((0,v.errorPrefix)(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},re=function(e,t,n,r){if((!r||void 0!==n)&&!n2(n))throw Error((0,v.errorPrefix)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},rt=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),re(e,t,n,r)},rn=function(e,t){if(".info"===eN(t))throw Error(e+" failed = Can't modify data under /.info/")},rr=function(e,t){var n;let r=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!n1(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==r.length&&((n=r)&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),!n2(n)))throw Error((0,v.errorPrefix)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
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
 */class ri{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rs(e,t){let n=null;for(let r=0;r<t.length;r++){let i=t[r],s=i.getPath();null===n||eB(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function ro(e,t,n){rs(e,n),rl(e,e=>eB(e,t))}function ra(e,t,n){rs(e,n),rl(e,e=>eW(e,t)||eW(t,e))}function rl(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){let i=e.eventLists_[r];i&&(t(i.path)?(function(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(null!==n){e.events[t]=null;let r=n.getEventRunner();L&&q("event: "+n.toString()),er(r)}}}(e.eventLists_[r]),e.eventLists_[r]=null):n=!1)}n&&(e.eventLists_=[]),e.recursionDepth_--}/**
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
 */let rh="repo_interrupt";class ru{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ri,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tb(),this.transactionQueueTree_=new n$,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rc(e){let t=e.infoData_.getNode(new ek(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function rd(e){var t;return(t=t={timestamp:rc(e)}).timestamp=t.timestamp||new Date().getTime(),t}function rp(e,t,n,r,i){e.dataUpdateCount++;let s=new ek(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i){if(r){let t=(0,v.map)(n,e=>tr(e));o=function(e,t,n,r){let i=nO(e,r);if(!i)return[];{let r=nL(i),s=r.path,o=r.queryId,a=eq(s,t),l=tU.fromObject(n);return nM(e,s,new tR(tk(o),a,l))}}(e.serverSyncTree_,s,t,i)}else{let t=tr(n);o=nS(e.serverSyncTree_,s,t,i)}}else if(r){let t=(0,v.map)(n,e=>tr(e));o=function(e,t,n){let r=tU.fromObject(n);return nN(e,new tR(tS(),t,r))}(e.serverSyncTree_,s,t)}else{let t=tr(n);o=nT(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=rT(e,s)),ra(e.eventQueue_,a,o)}function rf(e,t){r_(e,"connected",t),!1===t&&function(e){rb(e,"onDisconnectEvents");let t=rd(e),n=tb();tE(e.onDisconnect_,eP(),(r,i)=>{let s=nH(r,i,e.serverSyncTree_,t);tw(n,r,s)});let r=[];tE(n,eP(),(t,n)=>{r=r.concat(nT(e.serverSyncTree_,t,n));let i=rP(e,t);rT(e,i)}),e.onDisconnect_=tb(),ra(e.eventQueue_,eP(),r)}(e)}function r_(e,t,n){let r=new ek("/.info/"+t),i=tr(n);e.infoData_.updateSnapshot(r,i);let s=nT(e.infoSyncTree_,r,i);ra(e.eventQueue_,r,s)}function rm(e){return e.nextWriteId_++}function rg(e,t,n,r,i){rb(e,"set",{path:t.toString(),value:n,priority:r});let s=rd(e),o=tr(n,r),a=nV(o,nP(e.serverSyncTree_,t),s),l=rm(e),h=nE(e.serverSyncTree_,t,a,l,!0);rs(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),(n,r)=>{let s="ok"===n;s||U("set at "+t+" failed: "+n);let o=nI(e.serverSyncTree_,l,!s);ra(e.eventQueue_,t,o),rw(e,i,n,r)});let u=rP(e,t);rT(e,u),ra(e.eventQueue_,u,[])}function ry(e,t,n,r){let i=tr(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),(n,s)=>{"ok"===n&&tw(e.onDisconnect_,t,i),rw(e,r,n,s)})}function rv(e,t,n){let r;r=".info"===eN(t._path)?nx(e.infoSyncTree_,t,n):nx(e.serverSyncTree_,t,n),ro(e.eventQueue_,t._path,r)}function rC(e){e.persistentConnection_&&e.persistentConnection_.interrupt(rh)}function rb(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),q(n,...t)}function rw(e,t,n,r){t&&er(()=>{if("ok"===n)t(null);else{let e=(n||"error").toUpperCase(),i=e;r&&(i+=": "+r);let s=Error(i);s.code=e,t(s)}})}function rE(e,t,n){return nP(e.serverSyncTree_,t,n)||tt.EMPTY_NODE}function rI(e,t=e.transactionQueueTree_){if(t||rk(e,t),nG(t)){let n=rS(e,t);(0,v.assert)(n.length>0,"Sending zero length transaction queue"),n.every(e=>0===e.status)&&function(e,t,n){let r=rE(e,t,n.map(e=>e.currentWriteId)),i=r,s=r.hash();for(let e=0;e<n.length;e++){let r=n[e];(0,v.assert)(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;let s=eq(t,r.path);i=i.updateChild(s,r.currentOutputSnapshotRaw)}let o=i.val(!0);e.server_.put(t.toString(),o,r=>{rb(e,"transaction put response",{path:t.toString(),status:r});let i=[];if("ok"===r){let r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(nI(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();rk(e,nY(e.transactionQueueTree_,t)),rI(e,e.transactionQueueTree_),ra(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)er(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{U("transaction at "+t.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}rT(e,t)}},s)}(e,nX(t),n)}else nQ(t)&&nJ(t,t=>{rI(e,t)})}function rT(e,t){let n=rx(e,t),r=nX(n),i=rS(e,n);return function(e,t,n){if(0===t.length)return;let r=[],i=[],s=t.filter(e=>0===e.status).map(e=>e.currentWriteId);for(let o=0;o<t.length;o++){let a=t[o],l=eq(n,a.path),h=!1,u;if((0,v.assert)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===a.status)h=!0,u=a.abortReason,i=i.concat(nI(e.serverSyncTree_,a.currentWriteId,!0));else if(0===a.status){if(a.retryCount>=25)h=!0,u="maxretry",i=i.concat(nI(e.serverSyncTree_,a.currentWriteId,!0));else{let n=rE(e,a.path,s);a.currentInputSnapshot=n;let r=t[o].update(n.val());if(void 0!==r){n6("transaction failed: Data returned ",r,a.path);let t=tr(r);"object"==typeof r&&null!=r&&(0,v.contains)(r,".priority")||(t=t.updatePriority(n.getPriority()));let o=a.currentWriteId,l=nV(t,n,rd(e));a.currentOutputSnapshotRaw=t,a.currentOutputSnapshotResolved=l,a.currentWriteId=rm(e),s.splice(s.indexOf(o),1),i=(i=i.concat(nE(e.serverSyncTree_,a.path,l,a.currentWriteId,a.applyLocally))).concat(nI(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",i=i.concat(nI(e.serverSyncTree_,a.currentWriteId,!0))}}ra(e.eventQueue_,n,i),i=[],h&&(t[o].status=2,setTimeout(t[o].unwatcher,Math.floor(0)),t[o].onComplete&&("nodata"===u?r.push(()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot)):r.push(()=>t[o].onComplete(Error(u),!1,null))))}rk(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)er(r[e]);rI(e,e.transactionQueueTree_)}(e,i,r),r}function rx(e,t){let n;let r=e.transactionQueueTree_;for(n=eN(t);null!==n&&void 0===nG(r);)r=nY(r,n),n=eN(t=eR(t));return r}function rS(e,t){let n=[];return function e(t,n,r){let i=nG(n);if(i)for(let e=0;e<i.length;e++)r.push(i[e]);nJ(n,n=>{e(t,n,r)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function rk(e,t){let n=nG(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,nK(t,n.length>0?n:void 0)}nJ(t,t=>{rk(e,t)})}function rP(e,t){let n=nX(rx(e,t)),r=nY(e.transactionQueueTree_,t);return!function(e,t,n){let r=e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,t=>{rN(e,t)}),rN(e,r),!function e(t,n,r,i){r&&!i&&n(t),nJ(t,t=>{e(t,n,!0,i)}),r&&i&&n(t)}(r,t=>{rN(e,t)}),n}function rN(e,t){let n=nG(t);if(n){let r=[],i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,v.assert)(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):((0,v.assert)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(nI(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,Error("set"),!1,null))));-1===s?nK(t,void 0):n.length=s+1,ra(e.eventQueue_,nX(t),i);for(let e=0;e<r.length;e++)er(r[e])}}let rD=function(e,t){let n=rR(e),r=n.namespace;"firebase.com"===n.domain&&W(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||W("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||H();let i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ec(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new ek(n.pathString)}},rR=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let u=e.indexOf("/");-1===u&&(u=e.length);let c=e.indexOf("?");-1===c&&(c=e.length),t=e.substring(0,Math.min(u,c)),u<c&&(i=/**
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
 */function(e){let t="",n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,c)));let d=function(e){let t={};for(let n of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===n.length)continue;let r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):U(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,c)));(h=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;let p=t.slice(0,h);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{let e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}},rA="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",rO=function(){let e=0,t=[];return function(n){let r;let i=n===e;e=n;let s=Array(8);for(r=7;r>=0;r--)s[r]=rA.charAt(n%64),n=Math.floor(n/64);(0,v.assert)(0===n,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)o+=rA.charAt(t[r]);return(0,v.assert)(20===o.length,"nextPushId: Length should be 20."),o}}();/**
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
 */class rL{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){let e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,v.stringify)(this.snapshot.exportVal())}}class rM{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class rF{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,v.assert)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class rq{constructor(e,t){this._repo=e,this._path=t}cancel(){let e=new v.Deferred;return!function(e,t,n){e.server_.onDisconnectCancel(t.toString(),(r,i)=>{"ok"===r&&function e(t,n){if(eF(n))return t.value=null,t.children.clear(),!0;if(null!==t.value){if(t.value.isLeafNode())return!1;{let r=t.value;return t.value=null,r.forEachChild(e6,(e,n)=>{tw(t,new ek(e),n)}),e(t,n)}}if(!(t.children.size>0))return!0;{let r=eN(n);return n=eR(n),t.children.has(r)&&e(t.children.get(r),n)&&t.children.delete(r),0===t.children.size}}(e.onDisconnect_,t),rw(e,n,r,i)})}(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){rn("OnDisconnect.remove",this._path);let e=new v.Deferred;return ry(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){rn("OnDisconnect.set",this._path),n3("OnDisconnect.set",e,this._path,!1);let t=new v.Deferred;return ry(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){rn("OnDisconnect.setWithPriority",this._path),n3("OnDisconnect.setWithPriority",e,this._path,!1),n8("OnDisconnect.setWithPriority",t,!1);let n=new v.Deferred;return!function(e,t,n,r,i){let s=tr(n,r);e.server_.onDisconnectPut(t.toString(),s.val(!0),(n,r)=>{"ok"===n&&tw(e.onDisconnect_,t,s),rw(e,i,n,r)})}(this._repo,this._path,e,t,n.wrapCallback(()=>{})),n.promise}update(e){rn("OnDisconnect.update",this._path),n9("OnDisconnect.update",e,this._path,!1);let t=new v.Deferred;return!function(e,t,n,r){if((0,v.isEmpty)(n)){q("onDisconnect().update() called with empty data.  Don't do anything."),rw(e,r,"ok",void 0);return}e.server_.onDisconnectMerge(t.toString(),n,(i,s)=>{"ok"===i&&Z(n,(n,r)=>{let i=tr(r);tw(e.onDisconnect_,eM(t,n),i)}),rw(e,r,i,s)})}(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class rj{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return eF(this._path)?null:eA(this._path)}get ref(){return new rH(this._repo,this._path)}get _queryIdentifier(){let e=J(ty(this._queryParams));return"{}"===e?"default":e}get _queryObject(){return ty(this._queryParams)}isEqual(e){if(!((e=(0,v.getModularInstance)(e))instanceof rj))return!1;let t=this._repo===e._repo,n=eB(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}function rB(e,t){if(!0===e._orderByCalled)throw Error(t+": You can't combine multiple orderBy calls.")}function rW(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===eQ){let r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==$)throw Error(r);if("string"!=typeof t)throw Error(i)}if(e.hasEnd()){if(e.getIndexEndName()!==Y)throw Error(r);if("string"!=typeof n)throw Error(i)}}else if(e.getIndex()===e6){if(null!=t&&!n4(t)||null!=n&&!n4(n))throw Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if((0,v.assert)(e.getIndex() instanceof ti||e.getIndex()===ts,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function rU(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class rH extends rj{constructor(e,t){super(e,t,new tp,!1)}get parent(){let e=eL(this._path);return null===e?null:new rH(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class rV{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new ek(e),n=rY(this.ref,e);return new rV(this._node.getChild(t),n,e6)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,(t,n)=>e(new rV(n,rY(this.ref,t),e6)))}hasChild(e){let t=new ek(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function rz(e,t){return(e=(0,v.getModularInstance)(e))._checkNotDeleted("ref"),void 0!==t?rY(e._root,t):e._root}function r$(e,t){(e=(0,v.getModularInstance)(e))._checkNotDeleted("refFromURL");let n=rD(t,e._repo.repoInfo_.nodeAdmin);rr("refFromURL",n);let r=n.repoInfo;return e._repo.repoInfo_.isCustomHost()||r.host===e._repo.repoInfo_.host||W("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),rz(e,n.path.toString())}function rY(e,t){return null===eN((e=(0,v.getModularInstance)(e))._path)?rt("child","path",t,!1):re("child","path",t,!1),new rH(e._repo,eM(e._path,t))}function rG(e){return new rq((e=(0,v.getModularInstance)(e))._repo,e._path)}function rK(e,t){let n;rn("push",(e=(0,v.getModularInstance)(e))._path),n3("push",t,e._path,!0);let r=rO(rc(e._repo)),i=rY(e,r),s=rY(e,r);return n=null!=t?rJ(s,t).then(()=>s):Promise.resolve(s),i.then=n.then.bind(n),i.catch=n.then.bind(n,void 0),i}function rQ(e){return rn("remove",e._path),rJ(e,null)}function rJ(e,t){rn("set",(e=(0,v.getModularInstance)(e))._path),n3("set",t,e._path,!1);let n=new v.Deferred;return rg(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function rX(e,t){rn("setPriority",(e=(0,v.getModularInstance)(e))._path),n8("setPriority",t,!1);let n=new v.Deferred;return rg(e._repo,eM(e._path,".priority"),t,null,n.wrapCallback(()=>{})),n.promise}function rZ(e,t,n){if(rn("setWithPriority",e._path),n3("setWithPriority",t,e._path,!1),n8("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";let r=new v.Deferred;return rg(e._repo,e._path,t,n,r.wrapCallback(()=>{})),r.promise}function r0(e,t){n9("update",t,e._path,!1);let n=new v.Deferred;return!function(e,t,n,r){rb(e,"update",{path:t.toString(),value:n});let i=!0,s=rd(e),o={};if(Z(n,(n,r)=>{i=!1,o[n]=nH(eM(t,n),tr(r),e.serverSyncTree_,s)}),i)q("update() called with empty data.  Don't do anything."),rw(e,r,"ok",void 0);else{let i=rm(e),s=function(e,t,n,r){var i;i=e.pendingWriteTree_,(0,v.assert)(r>i.lastWriteId,"Stacking an older merge on top of newer ones"),i.allWrites.push({path:t,children:n,writeId:r,visible:!0}),i.visibleWrites=tz(i.visibleWrites,t,n),i.lastWriteId=r;let s=tU.fromObject(n);return nN(e,new tR(tx(),t,s))}(e.serverSyncTree_,t,o,i);rs(e.eventQueue_,s),e.server_.merge(t.toString(),n,(n,s)=>{let o="ok"===n;o||U("update at "+t+" failed: "+n);let a=nI(e.serverSyncTree_,i,!o),l=a.length>0?rT(e,t):t;ra(e.eventQueue_,l,a),rw(e,r,n,s)}),Z(n,n=>{let r=rP(e,eM(t,n));rT(e,r)}),ra(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function r1(e){e=(0,v.getModularInstance)(e);let t=new r2(new rF(()=>{}));return(function(e,t,n){let r=function(e,t){var n;let r=t._path,i=null;e.syncPointTree_.foreachOnPath(r,(e,t)=>{let n=eq(e,r);i=i||ng(t,n)});let s=e.syncPointTree_.get(r);s?i=i||ng(s,eP()):(s=new np,e.syncPointTree_=e.syncPointTree_.set(r,s));let o=null!=i,a=o?new tA(i,!0,!1):null,l=(n=e.pendingWriteTree_,t8(t._path,n));return tj(n_(s,t,l,o?a.getNode():tt.EMPTY_NODE,o).viewCache_)}(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then(r=>{let i;let s=tr(r).withIndex(t._queryParams.getIndex());if(nk(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())i=nT(e.serverSyncTree_,t._path,s);else{let n=nR(e.serverSyncTree_,t);i=nS(e.serverSyncTree_,t._path,s,n)}return ra(e.eventQueue_,t._path,i),nx(e.serverSyncTree_,t,n,null,!0),s},n=>(rb(e,"get for query "+(0,v.stringify)(t)+" failed: "+n),Promise.reject(Error(n))))})(e._repo,e,t).then(t=>new rV(t,new rH(e._repo,e._path),e._queryParams.getIndex()))}class r2{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){let n=t._queryParams.getIndex();return new rL("value",this,new rV(e.snapshotNode,new rH(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new rM(this,e,t):null}matches(e){return e instanceof r2&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class r4{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new rM(this,e,t):null}createEvent(e,t){(0,v.assert)(null!=e.childName,"Child events should have a childName.");let n=rY(new rH(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new rL(e.type,this,new rV(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof r4&&this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext))}hasAnyCallback(){return!!this.callbackContext}}function r3(e,t,n,r,i){var s;let o,a;if("object"==typeof r&&(o=void 0,i=r),"function"==typeof r&&(o=r),i&&i.onlyOnce){let t=n,r=(n,r)=>{rv(e._repo,e,h),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}let l=new rF(n,o||void 0),h="value"===t?new r2(l):new r4(t,l);return s=e._repo,a=".info"===eN(e._path)?nk(s.infoSyncTree_,e,h):nk(s.serverSyncTree_,e,h),ro(s.eventQueue_,e._path,a),()=>rv(e._repo,e,h)}function r6(e,t,n,r){return r3(e,"value",t,n,r)}function r5(e,t,n,r){return r3(e,"child_added",t,n,r)}function r9(e,t,n,r){return r3(e,"child_changed",t,n,r)}function r8(e,t,n,r){return r3(e,"child_moved",t,n,r)}function r7(e,t,n,r){return r3(e,"child_removed",t,n,r)}function ie(e,t,n){let r=null,i=n?new rF(n):null;"value"===t?r=new r2(i):t&&(r=new r4(t,i)),rv(e._repo,e,r)}class it{}class ir extends it{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){n3("endAt",this._value,e._path,!0);let t=t_(e._queryParams,this._value,this._key);if(rU(t),rW(t),e._queryParams.hasEnd())throw Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new rj(e._repo,e._path,t,e._orderByCalled)}}function ii(e,t){return n7("endAt","key",t,!0),new ir(e,t)}class is extends it{constructor(e,t){super(),this._value=e,this._key=t,this.type="endBefore"}_apply(e){var t,n,r;let i;n3("endBefore",this._value,e._path,!1);let s=(t=e._queryParams,n=this._value,r=this._key,(i=t.index_===eQ||r?t_(t,n,r):t_(t,n,$)).endBeforeSet_=!0,i);if(rU(s),rW(s),e._queryParams.hasEnd())throw Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new rj(e._repo,e._path,s,e._orderByCalled)}}function io(e,t){return n7("endBefore","key",t,!0),new is(e,t)}class ia extends it{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){n3("startAt",this._value,e._path,!0);let t=tf(e._queryParams,this._value,this._key);if(rU(t),rW(t),e._queryParams.hasStart())throw Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new rj(e._repo,e._path,t,e._orderByCalled)}}function il(e=null,t){return n7("startAt","key",t,!0),new ia(e,t)}class ih extends it{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAfter"}_apply(e){var t,n,r;let i;n3("startAfter",this._value,e._path,!1);let s=(t=e._queryParams,n=this._value,r=this._key,(i=t.index_===eQ||r?tf(t,n,r):tf(t,n,Y)).startAfterSet_=!0,i);if(rU(s),rW(s),e._queryParams.hasStart())throw Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new rj(e._repo,e._path,s,e._orderByCalled)}}function iu(e,t){return n7("startAfter","key",t,!0),new ih(e,t)}class ic extends it{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new rj(e._repo,e._path,function(e,t){let n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}(e._queryParams,this._limit),e._orderByCalled)}}function id(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw Error("limitToFirst: First argument must be a positive integer.");return new ic(e)}class ip extends it{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new rj(e._repo,e._path,function(e,t){let n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}(e._queryParams,this._limit),e._orderByCalled)}}function i_(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw Error("limitToLast: First argument must be a positive integer.");return new ip(e)}class im extends it{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){rB(e,"orderByChild");let t=new ek(this._path);if(eF(t))throw Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");let n=new ti(t),r=tm(e._queryParams,n);return rW(r),new rj(e._repo,e._path,r,!0)}}function ig(e){if("$key"===e)throw Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return re("orderByChild","path",e,!1),new im(e)}class iy extends it{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){rB(e,"orderByKey");let t=tm(e._queryParams,eQ);return rW(t),new rj(e._repo,e._path,t,!0)}}function iv(){return new iy}class iC extends it{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){rB(e,"orderByPriority");let t=tm(e._queryParams,e6);return rW(t),new rj(e._repo,e._path,t,!0)}}function ib(){return new iC}class iw extends it{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){rB(e,"orderByValue");let t=tm(e._queryParams,ts);return rW(t),new rj(e._repo,e._path,t,!0)}}function iE(){return new iw}class iI extends it{constructor(e,t){super(),this._value=e,this._key=t,this.type="equalTo"}_apply(e){if(n3("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new ir(this._value,this._key)._apply(new ia(this._value,this._key)._apply(e))}}function iT(e,t){return n7("equalTo","key",t,!0),new iI(e,t)}function ix(e,...t){let n=(0,v.getModularInstance)(e);for(let e of t)n=e._apply(n);return n}(0,v.assert)(!c,"__referenceConstructor has already been defined"),c=rH,(0,v.assert)(!d,"__referenceConstructor has already been defined"),d=rH;let iS={},ik=!1;function iP(e,t,n,r,i){var s,o;let a,l,h,u,c=r||e.options.databaseURL;void 0===c&&(e.options.projectId||W("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),q("Using default host for project ",e.options.projectId),c=`${e.options.projectId}-default-rtdb.firebaseio.com`);let d=rD(c,i),p=d.repoInfo;void 0!==b&&b.env&&(h=b.env.FIREBASE_DATABASE_EMULATOR_HOST),h?(u=!0,p=(d=rD(c=`http://${h}?ns=${p.namespace}`,i)).repoInfo):u=!d.repoInfo.secure;let f=i&&u?new ea(ea.OWNER):new eo(e.name,e.options,t);return rr("Invalid Firebase Database URL",d),eF(d.path)||W("Database URL must point to the root of a Firebase Database (not including a child path)."),new iN((s=p,o=new es(e.name,n),(a=iS[e.name])||(a={},iS[e.name]=a),(l=a[s.toURLString()])&&W("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new ru(s,ik,f,o),a[s.toURLString()]=l,l),e)}class iN{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,n){if(e.stats_=em(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new tv(e.repoInfo_,(t,n,r,i)=>{rp(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>rf(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,v.stringify)(n)}catch(e){throw Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new e$(e.repoInfo_,t,(t,n,r,i)=>{rp(e,t,n,r,i)},t=>{rf(e,t)},t=>{Z(t,(t,n)=>{r_(e,t,n)})},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let n=e.toString();return e_[n]||(e_[n]=t()),e_[n]}(e.repoInfo_,()=>new tT(e.stats_,e.server_)),e.infoData_=new tC,e.infoSyncTree_=new nw({startListening:(t,n,r,i)=>{let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=nT(e.infoSyncTree_,t._path,o),setTimeout(()=>{i("ok")},0)),s},stopListening:()=>{}}),r_(e,"connected",!1),e.serverSyncTree_=new nw({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{let s=i(n,r);ra(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new rH(this._repo,eP())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){let n=iS[t];n&&n[e.key]===e||W(`Database ${t}(${e.repoInfo_}) has already been deleted.`),rC(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&W("Cannot call "+e+" on a deleted database.")}}function iD(){eE.IS_TRANSPORT_INITIALIZED&&U("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function iR(){iD(),ev.forceDisallow()}function iA(){iD(),ew.forceDisallow(),ev.forceAllow()}function iO(e=(0,g.getApp)(),t){let n=(0,g._getProvider)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){let e=(0,v.getDefaultEmulatorHostnameAndPort)("database");e&&iL(n,...e)}return n}function iL(e,t,n,r={}){var i;let s;(e=(0,v.getModularInstance)(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&W("Cannot call useEmulator() after instance has already been initialized.");let o=e._repoInternal;o.repoInfo_.nodeAdmin?(r.mockUserToken&&W('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ea(ea.OWNER)):r.mockUserToken&&(s=new ea("string"==typeof r.mockUserToken?r.mockUserToken:(0,v.createMockUserToken)(r.mockUserToken,e.app.options.projectId))),i=s,o.repoInfo_=new ec(`${t}:${n}`,!1,o.repoInfo_.namespace,o.repoInfo_.webSocketOnly,o.repoInfo_.nodeAdmin,o.repoInfo_.persistenceKey,o.repoInfo_.includeNamespaceInQueryParams,!0),i&&(o.authTokenProvider_=i)}function iM(e){(e=(0,v.getModularInstance)(e))._checkNotDeleted("goOffline"),rC(e._repo)}function iF(e){var t;(e=(0,v.getModularInstance)(e))._checkNotDeleted("goOnline"),(t=e._repo).persistentConnection_&&t.persistentConnection_.resume(rh)}function iq(e,t){F(e,t)}/**
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
 */let ij={".sv":"timestamp"};function iB(){return ij}function iW(e){return{".sv":{increment:e}}}/**
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
 */class iU{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function iH(e,t,n){var r;if(rn("Reference.transaction",(e=(0,v.getModularInstance)(e))._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";let i=null===(r=null==n?void 0:n.applyLocally)||void 0===r||r,s=new v.Deferred,o=r6(e,()=>{});return!function(e,t,n,r,i,s){rb(e,"transaction on "+t);let o={path:t,update:n,onComplete:r,status:null,order:R(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=rE(e,t,void 0);o.currentInputSnapshot=a;let l=o.update(a.val());if(void 0===l)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{let n;n6("transaction failed: Data returned ",l,o.path),o.status=0;let r=nY(e.transactionQueueTree_,t),i=nG(r)||[];i.push(o),nK(r,i),"object"==typeof l&&null!==l&&(0,v.contains)(l,".priority")?(n=(0,v.safeGet)(l,".priority"),(0,v.assert)(n4(n),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):n=(nP(e.serverSyncTree_,t)||tt.EMPTY_NODE).getPriority().val();let s=rd(e),h=tr(l,n),u=nV(h,a,s);o.currentOutputSnapshotRaw=h,o.currentOutputSnapshotResolved=u,o.currentWriteId=rm(e);let c=nE(e.serverSyncTree_,t,u,o.currentWriteId,o.applyLocally);ra(e.eventQueue_,t,c),rI(e,e.transactionQueueTree_)}}(e._repo,e._path,t,(t,n,r)=>{let i=null;t?s.reject(t):(i=new rV(r,new rH(e._repo,e._path),e6),s.resolve(new iU(n,i)))},o,i),s.promise}e$.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},e$.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};let iV=function(e){let t=e$.prototype.put;return e$.prototype.put=function(n,r,i,s){void 0!==s&&(s=e()),t.call(this,n,r,i,s)},function(){e$.prototype.put=t}},iz=function(e){ik=e};/**
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
 */function i$({app:e,url:t,version:n,customAuthImpl:r,customAppCheckImpl:i,nodeAdmin:s=!1}){let o;I=n;let a=new y.ComponentContainer("database-standalone"),l=new y.Provider("auth-internal",a);return i&&(o=new y.Provider("app-check-internal",a)).setComponent(new y.Component("app-check-internal",()=>i,"PRIVATE")),l.setComponent(new y.Component("auth-internal",()=>r,"PRIVATE")),iP(e,l,o,t,s)}I=g.SDK_VERSION,(0,g._registerComponent)(new(0,y.Component)("database",(e,{instanceIdentifier:t})=>iP(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t),"PUBLIC").setMultipleInstances(!0)),(0,g.registerVersion)(w,E,void 0),(0,g.registerVersion)(w,E,"esm2017")},{"6b38617303e2f7b9":"5QIF0","@firebase/app":"3eFbF","@firebase/component":"7Ufrc","@firebase/util":"hGlpW","@firebase/logger":"2Swcv","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gwBP8:[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"getPhotosList",()=>a);var i=e("../element/element"),s=e("firebase/database"),o=e("firebase/app");function a(){let e=(0,i.getElement)("div","portfolio__photos"),t=(0,i.getElement)("div","list-reset","portfolio__categories"),n=(0,i.getElement)("ul","list-reset","portfolio__list");(0,o.initializeApp)({apiKey:"AIzaSyBlFYLAI5C8bvQJHGTm85obSILYb-V620s",authDomain:"photographer-site-aae97.firebaseapp.com",databaseURL:"https://photographer-site-aae97-default-rtdb.firebaseio.com",projectId:"photographer-site-aae97",storageBucket:"photographer-site-aae97.appspot.com",messagingSenderId:"506799504003",appId:"1:506799504003:web:205497e14804b4513479b6"});let r=(0,s.getDatabase)(),a=[];function l(e){console.log(e),n.innerHTML="",e.forEach(e=>{let t=(0,i.getElement)("li","portfolio__item"),r=(0,i.getElement)("a","portfolio__item--link");r.href=`/portfolio/${e.nameEng}`,t.dataset.id=e.id;let s=(0,i.getElement)("img","portfolio__item--img");s.src=e.linkOfCover;let o=(0,i.getElement)("h4","portfolio__item--name");o.textContent=e.nameRu,t.append(s,o,r),n.append(t)})}let h=(0,i.getElement)("li","portfolio__tag");return h.addEventListener("click",()=>{document.querySelectorAll(".portfolio__tag").forEach(e=>{e.classList.remove("active")}),h.classList.add("active"),l(a)}),!function(){let e=(0,s.ref)(r),n=[];(0,s.get)((0,s.child)(e,"portfolio/")).then(e=>{console.log(e),e.forEach(e=>{n.push(e.val())}),a=n}).then(()=>{(function(e){let n=[];e.forEach(e=>{n.push(e.category)}),console.log(n),t.innerHTML="",h.classList.add("active"),h.textContent="Все",h.dataset.value="Все",t.append(h),Array.from(new Set(n)).forEach(e=>{if(!t.querySelector(`[data-value="${e}"]`)){let n=(0,i.getElement)("li","portfolio__tag");n.textContent=e,n.dataset.value=e,n.addEventListener("click",()=>{document.querySelectorAll(".portfolio__tag").forEach(e=>{e.classList.remove("active")}),n.classList.add("active"),l(a.filter(e=>e.category.toLowerCase().trim()===n.dataset.value.toLowerCase().trim()))}),t.append(n)}})})(n),l(n)})}(),e.append(t,n),e}e("./photosList.css")},{"../element/element":"glRxY","firebase/database":"gGruC","firebase/app":"7mwHT","./photosList.css":"4afAH","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"4afAH":[function(){},{}]},[],0,"parcelRequired04d");
//# sourceMappingURL=admin.4641c113.js.map
