const pt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}};pt();function p(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var h=s.length-1;h>=0;h--)(o=s[h])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),Z=new WeakMap;class st{constructor(t,e,i){if(this._$cssResult$=!0,i!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Y&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Z.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Z.set(e,t))}return t}toString(){return this.cssText}}const vt=s=>new st(typeof s=="string"?s:s+"",void 0,Q),V=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new st(e,s,Q)},$t=(s,t)=>{Y?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=window.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)})},W=Y?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return vt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var O;const G=window.trustedTypes,gt=G?G.emptyScript:"",q=window.reactiveElementPolyfillSupport,B={toAttribute(s,t){switch(t){case Boolean:s=s?gt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},rt=(s,t)=>t!==s&&(t==t||s==s),L={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:rt};class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=L){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||L}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(W(n))}else t!==void 0&&e.push(W(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return $t(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=L){var n,r;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const h=((r=(n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&r!==void 0?r:B.toAttribute)(e,i.type);this._$El=t,h==null?this.removeAttribute(o):this.setAttribute(o,h),this._$El=null}}_$AK(t,e){var i,n;const r=this.constructor,o=r._$Ev.get(t);if(o!==void 0&&this._$El!==o){const h=r.getPropertyOptions(o),l=h.converter,a=(n=(i=l==null?void 0:l.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&n!==void 0?n:B.fromAttribute;this._$El=o,this[o]=a(e,h.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||rt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},q==null||q({ReactiveElement:b}),((O=globalThis.reactiveElementVersions)!==null&&O!==void 0?O:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const M=globalThis.trustedTypes,J=M?M.createPolicy("lit-html",{createHTML:s=>s}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,ot="?"+y,yt=`<${ot}>`,N=document,T=(s="")=>N.createComment(s),C=s=>s===null||typeof s!="object"&&typeof s!="function",lt=Array.isArray,ft=s=>{var t;return lt(s)||typeof((t=s)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,K=/-->/g,F=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,X=/'/g,tt=/"/g,at=/^(?:script|style|textarea|title)$/i,mt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),ht=mt(1),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),et=new WeakMap,bt=(s,t,e)=>{var i,n;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=r._$litPart$;if(o===void 0){const h=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new U(t.insertBefore(T(),h),h,void 0,e!=null?e:{})}return o._$AI(s),o},_=N.createTreeWalker(N,129,null,!1),_t=(s,t)=>{const e=s.length-1,i=[];let n,r=t===2?"<svg>":"",o=E;for(let l=0;l<e;l++){const a=s[l];let g,d,c=-1,v=0;for(;v<a.length&&(o.lastIndex=v,d=o.exec(a),d!==null);)v=o.lastIndex,o===E?d[1]==="!--"?o=K:d[1]!==void 0?o=F:d[2]!==void 0?(at.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=f):d[3]!==void 0&&(o=f):o===f?d[0]===">"?(o=n!=null?n:E,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,g=d[1],o=d[3]===void 0?f:d[3]==='"'?tt:X):o===tt||o===X?o=f:o===K||o===F?o=E:(o=f,n=void 0);const j=o===f&&s[l+1].startsWith("/>")?" ":"";r+=o===E?a+yt:c>=0?(i.push(g),a.slice(0,c)+"$lit$"+a.slice(c)+y+j):a+y+(c===-2?(i.push(void 0),l):j)}const h=r+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[J!==void 0?J.createHTML(h):h,i]};class I{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const h=t.length-1,l=this.parts,[a,g]=_t(t,e);if(this.el=I.createElement(a,i),_.currentNode=this.el.content,e===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(n=_.nextNode())!==null&&l.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const c of n.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(y)){const v=g[o++];if(d.push(c),v!==void 0){const j=n.getAttribute(v.toLowerCase()+"$lit$").split(y),k=/([.?@])?(.*)/.exec(v);l.push({type:1,index:r,name:k[2],strings:j,ctor:k[1]==="."?Mt:k[1]==="?"?St:k[1]==="@"?xt:D})}else l.push({type:6,index:r})}for(const c of d)n.removeAttribute(c)}if(at.test(n.tagName)){const d=n.textContent.split(y),c=d.length-1;if(c>0){n.textContent=M?M.emptyScript:"";for(let v=0;v<c;v++)n.append(d[v],T()),_.nextNode(),l.push({type:2,index:++r});n.append(d[c],T())}}}else if(n.nodeType===8)if(n.data===ot)l.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(y,d+1))!==-1;)l.push({type:7,index:r}),d+=y.length-1}r++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function x(s,t,e=s,i){var n,r,o,h;if(t===S)return t;let l=i!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[i]:e._$Cu;const a=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(s),l._$AT(s,e,i)),i!==void 0?((o=(h=e)._$Cl)!==null&&o!==void 0?o:h._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=x(s,l._$AS(s,t.values),l,i)),t}class At{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:N).importNode(i,!0);_.currentNode=r;let o=_.nextNode(),h=0,l=0,a=n[0];for(;a!==void 0;){if(h===a.index){let g;a.type===2?g=new U(o,o.nextSibling,this,t):a.type===1?g=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(g=new wt(o,this,t)),this.v.push(g),a=n[++l]}h!==(a==null?void 0:a.index)&&(o=_.nextNode(),h++)}return r}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{constructor(t,e,i,n){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),C(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==S&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):ft(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==u&&C(this._$AH)?this._$AA.nextSibling.data=t:this.k(N.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=I.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(i);else{const o=new At(r,this),h=o.p(this.options);o.m(i),this.k(h),this._$AH=o}}_$AC(t){let e=et.get(t.strings);return e===void 0&&et.set(t.strings,e=new I(t)),e}S(t){lt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new U(this.M(T()),this.M(T()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class D{constructor(t,e,i,n,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(r===void 0)t=x(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==S,o&&(this._$AH=t);else{const h=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=x(this,h[i+l],e,l),a===S&&(a=this._$AH[l]),o||(o=!C(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a!=null?a:"")+r[l+1]),this._$AH[l]=a}o&&!n&&this.C(t)}C(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Mt extends D{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===u?void 0:t}}const Nt=M?M.emptyScript:"";class St extends D{constructor(){super(...arguments),this.type=4}C(t){t&&t!==u?this.element.setAttribute(this.name,Nt):this.element.removeAttribute(this.name)}}class xt extends D{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=x(this,t,e,0))!==null&&i!==void 0?i:u)===S)return;const n=this._$AH,r=t===u&&n!==u||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==u&&(n===u||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class wt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const it=window.litHtmlPolyfillSupport;it==null||it(I,U),((z=globalThis.litHtmlVersions)!==null&&z!==void 0?z:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var P,R;class A extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=bt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return S}}A.finalized=!0,A._$litElement$=!0,(P=globalThis.litElementHydrateSupport)===null||P===void 0||P.call(globalThis,{LitElement:A});const nt=globalThis.litElementPolyfillSupport;nt==null||nt({LitElement:A});((R=globalThis.litElementVersions)!==null&&R!==void 0?R:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=s=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(s,t):((e,i)=>{const{kind:n,elements:r}=i;return{kind:n,elements:r,finisher(o){window.customElements.define(e,o)}}})(s,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}};function m(s){return(t,e)=>e!==void 0?((i,n,r)=>{n.constructor.createProperty(r,i)})(s,t,e):Et(s,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(s){return m({...s,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=({finisher:s,descriptor:t})=>(e,i)=>{var n;if(i===void 0){const r=(n=e.originalKey)!==null&&n!==void 0?n:e.key,o=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:{...e,key:r};return s!=null&&(o.finisher=function(h){s(h,r)}),o}{const r=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),s==null||s(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(s,t){return Tt({descriptor:e=>{const i={get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(s))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const n=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var r,o;return this[n]===void 0&&(this[n]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(s))!==null&&o!==void 0?o:null),this[n]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var H;((H=window.HTMLSlotElement)===null||H===void 0?void 0:H.prototype.assignedElements)!=null;var Ct=V`data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEyIiB2aWV3Qm94PSIwIDAgMTIgMTIiIHdpZHRoPSIxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im02IDBjMy4zMTM3MDg1IDAgNiAyLjY4NjI5MTUgNiA2cy0yLjY4NjI5MTUgNi02IDYtNi0yLjY4NjI5MTUtNi02IDIuNjg2MjkxNS02IDYtNnoiIGZpbGw9IiMyYzJjMmMiLz48cGF0aCBkPSJtMy42NTkzMDU1IDIuOTYzNTkxMTZjLS4xOTQ4NjgxNC0uMTM0OTk2MDUtLjQ2NDI5MjU0LS4xMTU3MTA5LS42Mzc4NTg4OS4wNTc4NTU0NS0uMTk1MjYyMTUuMTk1MjYyMTUtLjE5NTI2MjE1LjUxMTg0NDYzIDAgLjcwNzEwNjc4bDIuMjcxNTUzMzkgMi4yNzE0NDY2MS0yLjIwNTY3OTgxIDIuMjA1NTczMDItLjA1Nzg1NTQ1LjA2OTI0Nzg5Yy0uMTM0OTk2MDUuMTk0ODY4MTQtLjExNTcxMDkuNDY0MjkyNTQuMDU3ODU1NDUuNjM3ODU4OS4xOTUyNjIxNS4xOTUyNjIxNC41MTE4NDQ2NC4xOTUyNjIxNC43MDcxMDY3OSAwbDIuMjA1NTczMDItMi4yMDU2Nzk4MSAyLjIwNTU3MzAyIDIuMjA1Njc5ODEuMDY5MjQ3ODkuMDU3ODU1NDVjLjE5NDg2ODE0LjEzNDk5NjA1LjQ2NDI5MjU0LjExNTcxMDkuNjM3ODU4OS0uMDU3ODU1NDUuMTk1MjYyMTQtLjE5NTI2MjE1LjE5NTI2MjE0LS41MTE4NDQ2NCAwLS43MDcxMDY3OWwtMi4yMDU2Nzk4MS0yLjIwNTU3MzAyIDIuMjcxNTUzMzktMi4yNzE0NDY2MS4wNTc4NTU0NS0uMDY5MjQ3ODljLjEzNDk5NjA1LS4xOTQ4NjgxNC4xMTU3MTA5LS40NjQyOTI1NC0uMDU3ODU1NDUtLjYzNzg1ODg5LS4xOTUyNjIxNS0uMTk1MjYyMTUtLjUxMTg0NDYzLS4xOTUyNjIxNS0uNzA3MTA2NzggMGwtMi4yNzE0NDY2MSAyLjI3MTU1MzM5LTIuMjcxNDQ2NjEtMi4yNzE1NTMzOXoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+`;let $=class extends A{constructor(){super(...arguments),this.value="",this.clearButtonScreenReaderLabel="Clear",this.focusOnClear=!0}render(){var t,e,i,n;const r=!this.value;return ht`
      <div id="container">
        <input
          id="text-input"
          type="text"
          placeholder=${(t=this.placeholder)!==null&&t!==void 0?t:u}
          .value=${(e=this.value)!==null&&e!==void 0?e:u}
          aria-controls=${(i=this.ariaControls)!==null&&i!==void 0?i:u}
          aria-label=${(n=this.screenReaderLabel)!==null&&n!==void 0?n:u}
          @input=${this.onTextInput}
        />
        <button
          id="clear-button"
          type="button"
          ?hidden=${r}
          @click=${this.clearButtonClicked}
        >
          <span class="sr-only">${this.clearButtonScreenReaderLabel}</span>
        </button>
      </div>
    `}onTextInput(){this.value=this.textInput.value}clearButtonClicked(){const t=this.textInput.value;this.value="",this.focusOnClear&&this.textInput.focus();const e=new CustomEvent("clear",{detail:t});this.dispatchEvent(e);const i=new InputEvent("input",{inputType:"deleteContentBackward"});this.dispatchEvent(i)}};$.styles=V`
    :host {
      --input-height: 3rem;
      --clear-button-top: 0;
      --clear-button-right: 2px;
    }

    #container {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: var(--input-height);
    }

    #text-input {
      width: 100%;
      height: 100%;
      padding: var(--input-padding, 0 1rem);
      padding-inline-end: var(--input-height);
      border: var(--input-border-width, 1px) var(--input-border-style, solid)
        var(--input-border-color, #ccc);
      border-radius: var(--input-border-radius, 2rem);
      background-image: var(--input-background-image, none);
      background-color: var(--input-background-color, transparent);
      color: var(--input-color, #555);
      font-size: var(--input-font-size, 1.7rem);
      line-height: var(--input-line-height, 1.5);
      box-shadow: var(--input-box-shadow, inset 0 1px 1px rgba(0, 0, 0, 0.075));
      -webkit-box-shadow: var(
        --input-box-shadow,
        inset 0 1px 1px rgba(0, 0, 0, 0.075)
      );
    }

    #text-input:focus {
      border-color: var(--input-focused-border-color, #66afe9);
      outline: 0;
      box-shadow: var(
        --input-focused-box-shadow,
        inset 0 1px 1px rgb(0 0 0 / 8%),
        0 0 8px rgb(102 175 233 / 60%)
      );
      -webkit-box-shadow: var(
        --input-focused-box-shadow,
        inset 0 1px 1px rgb(0 0 0 / 8%),
        0 0 8px rgb(102 175 233 / 60%)
      );
    }

    #clear-button {
      position: absolute;
      inset-block-start: var(--clear-button-top);
      inset-inline-end: var(--clear-button-right);
      height: var(--clear-button-height, var(--input-height));
      width: var(--clear-button-width, var(--input-height));
      padding: var(--clear-button-padding, 0);
      border: var(--clear-button-border, 0);
      background: var(--clear-button-background-image, url('${Ct}'))
        var(--clear-button-background-position, center) /
        var(--clear-button-background-size, 75%)
        var(--clear-button-background-repeat, no-repeat)
        var(--clear-button-background-color, transparent);
      cursor: pointer;
    }

    /* Fallback support for older browsers without newer bidirectional rules */
    @supports not ((inset-block-start: 0) and (padding-inline-end: 0)) {
      #text-input {
        padding-right: var(--input-height);
      }

      #clear-button {
        top: var(--clear-button-top);
        right: var(--clear-button-right);
      }
    }

    .sr-only {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      margin: -1px !important;
      padding: 0 !important;
      border: 0 !important;
      overflow: hidden !important;
      white-space: nowrap !important;
      clip: rect(1px, 1px, 1px, 1px) !important;
      -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important;
    }
  `;p([m({type:String})],$.prototype,"value",void 0);p([m({type:String})],$.prototype,"placeholder",void 0);p([m({type:String})],$.prototype,"screenReaderLabel",void 0);p([m({type:String})],$.prototype,"clearButtonScreenReaderLabel",void 0);p([m({type:String})],$.prototype,"ariaControls",void 0);p([m({type:Boolean})],$.prototype,"focusOnClear",void 0);p([ct("#text-input")],$.prototype,"textInput",void 0);$=p([dt("clearable-text-input")],$);let w=class extends A{constructor(){super(...arguments),this.lastInputResult="",this.lastClearResult=""}render(){var t;const i=(t=new URLSearchParams(window.location.search).get("query"))!==null&&t!==void 0?t:"";return ht`
      <clearable-text-input
        .value=${i}
        .placeholder=${"Search..."}
        .screenReaderLabel=${"Search"}
        @clear=${this.onClear}
        @input=${this.onInput}
      >
      </clearable-text-input>
      <div id="controls">
        <label>
          <input type="checkbox" @change=${this.toggleDarkMode} />
          &nbsp;Simulate dark mode
        </label>
        <p>
          Current component value (updated upon each input event):
          <span id="input-result">${this.lastInputResult}</span>
        </p>
        <p ?hidden=${!this.lastClearResult}>
          Component value prior to the last clear event was:
          <span id="clear-result">${this.lastClearResult}</span>
        </p>
      </div>
    `}onClear(t){const e=t.detail;this.lastClearResult=e}onInput(){this.lastInputResult=this.widget.value}toggleDarkMode(){document.body.classList.toggle("dark-mode"),this.widget.classList.toggle("dark-mode")}};w.styles=V`
    :host {
      display: block;
      font-size: 1.6rem;
    }

    #controls {
      margin-top: 0.8rem;
    }

    clearable-text-input.dark-mode {
      --input-background-color: #2c2c2c;
      --input-color: #fff;
    }
  `;p([ut()],w.prototype,"lastInputResult",void 0);p([ut()],w.prototype,"lastClearResult",void 0);p([ct("clearable-text-input")],w.prototype,"widget",void 0);w=p([dt("app-root")],w);
