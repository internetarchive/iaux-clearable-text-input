const Qt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}};Qt();function _(n,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,t,e,i);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(o=(s<3?r(o):s>3?r(t,e,o):r(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ut=Symbol(),ft=new WeakMap;class Bt{constructor(t,e,i){if(this._$cssResult$=!0,i!==ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(dt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ft.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ft.set(e,t))}return t}toString(){return this.cssText}}const Yt=n=>new Bt(typeof n=="string"?n:n+"",void 0,ut),pt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new Bt(e,n,ut)},te=(n,t)=>{dt?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},gt=dt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Yt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tt;const mt=window.trustedTypes,ee=mt?mt.emptyScript:"",yt=window.reactiveElementPolyfillSupport,ht={toAttribute(n,t){switch(t){case Boolean:n=n?ee:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Dt=(n,t)=>t!==n&&(t==t||n==n),et={attribute:!0,type:String,converter:ht,reflect:!1,hasChanged:Dt};class x extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=et){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||et}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(gt(s))}else t!==void 0&&e.push(gt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return te(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=et){var s,o;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const c=((o=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&o!==void 0?o:ht.toAttribute)(e,i.type);this._$El=t,c==null?this.removeAttribute(r):this.setAttribute(r,c),this._$El=null}}_$AK(t,e){var i,s;const o=this.constructor,r=o._$Ev.get(t);if(r!==void 0&&this._$El!==r){const c=o.getPropertyOptions(r),l=c.converter,a=(s=(i=l==null?void 0:l.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&s!==void 0?s:ht.fromAttribute;this._$El=r,this[r]=a(e,c.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Dt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}x.finalized=!0,x.elementProperties=new Map,x.elementStyles=[],x.shadowRootOptions={mode:"open"},yt==null||yt({ReactiveElement:x}),((tt=globalThis.reactiveElementVersions)!==null&&tt!==void 0?tt:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var it;const R=globalThis.trustedTypes,At=R?R.createPolicy("lit-html",{createHTML:n=>n}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,jt="?"+y,ie=`<${jt}>`,k=document,B=(n="")=>k.createComment(n),D=n=>n===null||typeof n!="object"&&typeof n!="function",Vt=Array.isArray,se=n=>{var t;return Vt(n)||typeof((t=n)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bt=/-->/g,Et=/>/g,b=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,St=/'/g,wt=/"/g,Wt=/^(?:script|style|textarea|title)$/i,ne=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),vt=ne(1),H=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Ct=new WeakMap,oe=(n,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=o._$litPart$;if(r===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new K(t.insertBefore(B(),c),c,void 0,e!=null?e:{})}return r._$AI(n),r},P=k.createTreeWalker(k,129,null,!1),re=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=I;for(let l=0;l<e;l++){const a=n[l];let v,h,d=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===I?h[1]==="!--"?r=bt:h[1]!==void 0?r=Et:h[2]!==void 0?(Wt.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=b):h[3]!==void 0&&(r=b):r===b?h[0]===">"?(r=s!=null?s:I,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,v=h[1],r=h[3]===void 0?b:h[3]==='"'?wt:St):r===wt||r===St?r=b:r===bt||r===Et?r=I:(r=b,s=void 0);const g=r===b&&n[l+1].startsWith("/>")?" ":"";o+=r===I?a+ie:d>=0?(i.push(v),a.slice(0,d)+"$lit$"+a.slice(d)+y+g):a+y+(d===-2?(i.push(void 0),l):g)}const c=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[At!==void 0?At.createHTML(c):c,i]};class j{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const c=t.length-1,l=this.parts,[a,v]=re(t,e);if(this.el=j.createElement(a,i),P.currentNode=this.el.content,e===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=P.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(y)){const u=v[r++];if(h.push(d),u!==void 0){const g=s.getAttribute(u.toLowerCase()+"$lit$").split(y),m=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:m[2],strings:g,ctor:m[1]==="."?ae:m[1]==="?"?ce:m[1]==="@"?de:G})}else l.push({type:6,index:o})}for(const d of h)s.removeAttribute(d)}if(Wt.test(s.tagName)){const h=s.textContent.split(y),d=h.length-1;if(d>0){s.textContent=R?R.emptyScript:"";for(let u=0;u<d;u++)s.append(h[u],B()),P.nextNode(),l.push({type:2,index:++o});s.append(h[d],B())}}}else if(s.nodeType===8)if(s.data===jt)l.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(y,h+1))!==-1;)l.push({type:7,index:o}),h+=y.length-1}o++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function O(n,t,e=n,i){var s,o,r,c;if(t===H)return t;let l=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu;const a=D(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((r=(c=e)._$Cl)!==null&&r!==void 0?r:c._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=O(n,l._$AS(n,t.values),l,i)),t}class le{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:k).importNode(i,!0);P.currentNode=o;let r=P.nextNode(),c=0,l=0,a=s[0];for(;a!==void 0;){if(c===a.index){let v;a.type===2?v=new K(r,r.nextSibling,this,t):a.type===1?v=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(v=new ue(r,this,t)),this.v.push(v),a=s[++l]}c!==(a==null?void 0:a.index)&&(r=P.nextNode(),c++)}return o}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{constructor(t,e,i,s){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),D(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==H&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):se(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==p&&D(this._$AH)?this._$AA.nextSibling.data=t:this.k(k.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=j.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(i);else{const r=new le(o,this),c=r.p(this.options);r.m(i),this.k(c),this._$AH=r}}_$AC(t){let e=Ct.get(t.strings);return e===void 0&&Ct.set(t.strings,e=new j(t)),e}S(t){Vt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new K(this.M(B()),this.M(B()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class G{constructor(t,e,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=O(this,t,e,0),r=!D(t)||t!==this._$AH&&t!==H,r&&(this._$AH=t);else{const c=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=O(this,c[i+l],e,l),a===H&&(a=this._$AH[l]),r||(r=!D(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.C(t)}C(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class ae extends G{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===p?void 0:t}}const he=R?R.emptyScript:"";class ce extends G{constructor(){super(...arguments),this.type=4}C(t){t&&t!==p?this.element.setAttribute(this.name,he):this.element.removeAttribute(this.name)}}class de extends G{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=O(this,t,e,0))!==null&&i!==void 0?i:p)===H)return;const s=this._$AH,o=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==p&&(s===p||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class ue{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const xt=window.litHtmlPolyfillSupport;xt==null||xt(j,K),((it=globalThis.litHtmlVersions)!==null&&it!==void 0?it:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var st,nt;class S extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=oe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return H}}S.finalized=!0,S._$litElement$=!0,(st=globalThis.litElementHydrateSupport)===null||st===void 0||st.call(globalThis,{LitElement:S});const Pt=globalThis.litElementPolyfillSupport;Pt==null||Pt({LitElement:S});((nt=globalThis.litElementVersions)!==null&&nt!==void 0?nt:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=n=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(n,t):((e,i)=>{const{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(r){window.customElements.define(e,r)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function C(n){return(t,e)=>e!==void 0?((i,s,o)=>{s.constructor.createProperty(o,i)})(n,t,e):pe(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $t(n){return C({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=({finisher:n,descriptor:t})=>(e,i)=>{var s;if(i===void 0){const o=(s=e.originalKey)!==null&&s!==void 0?s:e.key,r=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(e.key)}:{...e,key:o};return n!=null&&(r.finisher=function(c){n(c,o)}),r}{const o=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),n==null||n(o,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kt(n,t){return ve({descriptor:e=>{const i={get(){var s,o;return(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const s=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var o,r;return this[s]===void 0&&(this[s]=(r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(n))!==null&&r!==void 0?r:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ot;((ot=window.HTMLSlotElement)===null||ot===void 0?void 0:ot.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=window,_t=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ft=Symbol(),Ut=new WeakMap;class $e{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ft)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(_t&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Ut.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ut.set(e,t))}return t}toString(){return this.cssText}}const _e=n=>new $e(typeof n=="string"?n:n+"",void 0,Ft),fe=(n,t)=>{_t?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=F.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},Rt=_t?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return _e(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rt;const J=window,kt=J.trustedTypes,ge=kt?kt.emptyScript:"",Ht=J.reactiveElementPolyfillSupport,ct={toAttribute(n,t){switch(t){case Boolean:n=n?ge:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Jt=(n,t)=>t!==n&&(t==t||n==n),lt={attribute:!0,type:String,converter:ct,reflect:!1,hasChanged:Jt};class L extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=lt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||lt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Rt(s))}else t!==void 0&&e.push(Rt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return fe(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=lt){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:ct).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:ct;this._$El=o,this[o]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Jt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}L.finalized=!0,L.elementProperties=new Map,L.elementStyles=[],L.shadowRootOptions={mode:"open"},Ht==null||Ht({ReactiveElement:L}),((rt=J.reactiveElementVersions)!==null&&rt!==void 0?rt:J.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var at;const Z=window,T=Z.trustedTypes,Ot=T?T.createPolicy("lit-html",{createHTML:n=>n}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,Zt="?"+A,me=`<${Zt}>`,N=document,X=(n="")=>N.createComment(n),V=n=>n===null||typeof n!="object"&&typeof n!="function",Xt=Array.isArray,ye=n=>Xt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tt=/-->/g,Nt=/>/g,E=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mt=/'/g,It=/"/g,Gt=/^(?:script|style|textarea|title)$/i,W=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Lt=new WeakMap,U=N.createTreeWalker(N,129,null,!1),Ae=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=z;for(let l=0;l<e;l++){const a=n[l];let v,h,d=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===z?h[1]==="!--"?r=Tt:h[1]!==void 0?r=Nt:h[2]!==void 0?(Gt.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=E):h[3]!==void 0&&(r=E):r===E?h[0]===">"?(r=s!=null?s:z,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,v=h[1],r=h[3]===void 0?E:h[3]==='"'?It:Mt):r===It||r===Mt?r=E:r===Tt||r===Nt?r=z:(r=E,s=void 0);const g=r===E&&n[l+1].startsWith("/>")?" ":"";o+=r===z?a+me:d>=0?(i.push(v),a.slice(0,d)+"$lit$"+a.slice(d)+A+g):a+A+(d===-2?(i.push(void 0),l):g)}const c=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ot!==void 0?Ot.createHTML(c):c,i]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const c=t.length-1,l=this.parts,[a,v]=Ae(t,e);if(this.el=q.createElement(a,i),U.currentNode=this.el.content,e===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=U.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(A)){const u=v[r++];if(h.push(d),u!==void 0){const g=s.getAttribute(u.toLowerCase()+"$lit$").split(A),m=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:m[2],strings:g,ctor:m[1]==="."?Ee:m[1]==="?"?we:m[1]==="@"?Ce:Y})}else l.push({type:6,index:o})}for(const d of h)s.removeAttribute(d)}if(Gt.test(s.tagName)){const h=s.textContent.split(A),d=h.length-1;if(d>0){s.textContent=T?T.emptyScript:"";for(let u=0;u<d;u++)s.append(h[u],X()),U.nextNode(),l.push({type:2,index:++o});s.append(h[d],X())}}}else if(s.nodeType===8)if(s.data===Zt)l.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(A,h+1))!==-1;)l.push({type:7,index:o}),h+=A.length-1}o++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function M(n,t,e=n,i){var s,o,r,c;if(t===W)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=V(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=M(n,l._$AS(n,t.values),l,i)),t}class be{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:N).importNode(i,!0);U.currentNode=o;let r=U.nextNode(),c=0,l=0,a=s[0];for(;a!==void 0;){if(c===a.index){let v;a.type===2?v=new Q(r,r.nextSibling,this,t):a.type===1?v=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(v=new xe(r,this,t)),this.u.push(v),a=s[++l]}c!==(a==null?void 0:a.index)&&(r=U.nextNode(),c++)}return o}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{constructor(t,e,i,s){var o;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),V(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==W&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ye(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==$&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=q.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.p(i);else{const r=new be(o,this),c=r.v(this.options);r.p(i),this.T(c),this._$AH=r}}_$AC(t){let e=Lt.get(t.strings);return e===void 0&&Lt.set(t.strings,e=new q(t)),e}k(t){Xt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.O(X()),this.O(X()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Y{constructor(t,e,i,s,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=M(this,t,e,0),r=!V(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const c=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=M(this,c[i+l],e,l),a===W&&(a=this._$AH[l]),r||(r=!V(a)||a!==this._$AH[l]),a===$?t=$:t!==$&&(t+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Ee extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}const Se=T?T.emptyScript:"";class we extends Y{constructor(){super(...arguments),this.type=4}j(t){t&&t!==$?this.element.setAttribute(this.name,Se):this.element.removeAttribute(this.name)}}class Ce extends Y{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=M(this,t,e,0))!==null&&i!==void 0?i:$)===W)return;const s=this._$AH,o=t===$&&s!==$||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==$&&(s===$||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class xe{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const zt=Z.litHtmlPolyfillSupport;zt==null||zt(q,Q),((at=Z.litHtmlVersions)!==null&&at!==void 0?at:Z.litHtmlVersions=[]).push("2.6.1");var Pe=vt`
  <svg
    height="12"
    viewBox="0 0 12 12"
    width="12"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="closeCircleTitleID closeCircleDescID"
  >
    <title id="closeCircleTitleID">Close circle icon</title>
    <desc id="closeCircleDescID">A line drawing of an X in a circle</desc>
    <path
      d="m6 0c3.3137085 0 6 2.6862915 6 6s-2.6862915 6-6 6-6-2.6862915-6-6 2.6862915-6 6-6zm-2.3406945 2.96359116c-.19486814-.13499605-.46429254-.1157109-.63785889.05785545-.19526215.19526215-.19526215.51184463 0 .70710678l2.27155339 2.27144661-2.20567981 2.20557302-.05785545.06924789c-.13499605.19486814-.1157109.46429254.05785545.6378589.19526215.19526214.51184464.19526214.70710679 0l2.20557302-2.20567981 2.20557302 2.20567981.06924789.05785545c.19486814.13499605.46429254.1157109.6378589-.05785545.19526214-.19526215.19526214-.51184464 0-.70710679l-2.20567981-2.20557302 2.27155339-2.27144661.05785545-.06924789c.13499605-.19486814.1157109-.46429254-.05785545-.63785889-.19526215-.19526215-.51184463-.19526215-.70710678 0l-2.27144661 2.27155339-2.27144661-2.27155339z"
      class="fill-color"
      fill-rule="evenodd"
    />
  </svg>
`;class Ue extends S{static get styles(){return pt`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor, #999);
      }
    `}render(){return Pe}}customElements.define("ia-icon-close-circle",Ue);let f=class extends S{constructor(){super(...arguments),this.value="",this.clearButtonScreenReaderLabel="Clear",this.focusOnClear=!0}render(){var t,e,i,s;const o=!this.value;return vt`
      <div id="container">
        <input
          id="text-input"
          type="text"
          inputmode="search"
          enterkeyhint="search"
          autocapitalize="off"
          placeholder=${(t=this.placeholder)!==null&&t!==void 0?t:p}
          .value=${(e=this.value)!==null&&e!==void 0?e:p}
          aria-controls=${(i=this.ariaControls)!==null&&i!==void 0?i:p}
          aria-label=${(s=this.screenReaderLabel)!==null&&s!==void 0?s:p}
          @input=${this.onTextInput}
          @keypress=${this.onKeyPress}
        />
        <button
          id="clear-button"
          type="button"
          ?hidden=${o}
          @click=${this.clearButtonClicked}
        >
          <ia-icon-close-circle aria-hidden="true"></ia-icon-close-circle>
          <span class="sr-only">${this.clearButtonScreenReaderLabel}</span>
        </button>
      </div>
    `}onTextInput(){this.value=this.textInput.value}onKeyPress(t){if(t.key==="Enter"){this.textInput.blur();const e=new CustomEvent("submit",{detail:this.value});this.dispatchEvent(e)}}clearButtonClicked(){const t=this.textInput.value;this.value="",this.focusOnClear&&this.textInput.focus();const e=new CustomEvent("clear",{detail:t});this.dispatchEvent(e);const i=new InputEvent("input",{inputType:"deleteContentBackward"});this.dispatchEvent(i)}};f.styles=pt`
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
      display: flex;
      justify-content: center;
      align-items: center;
      inset-block-start: var(--clear-button-top);
      inset-inline-end: var(--clear-button-right);
      height: var(--clear-button-height, var(--input-height));
      width: var(--clear-button-width, var(--input-height));
      padding: var(--clear-button-padding, 4px);
      border: var(--clear-button-border, 0);
      background: none;
      appearance: none;
      cursor: pointer;
    }

    #clear-button[hidden] {
      display: none;
    }

    ia-icon-close-circle {
      --iconWidth: 100%;
      --iconHeight: 100%;
      --iconFillColor: #2c2c2c;
      pointer-events: none;
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
  `;_([C({type:String})],f.prototype,"value",void 0);_([C({type:String})],f.prototype,"placeholder",void 0);_([C({type:String})],f.prototype,"screenReaderLabel",void 0);_([C({type:String})],f.prototype,"clearButtonScreenReaderLabel",void 0);_([C({type:String})],f.prototype,"ariaControls",void 0);_([C({type:Boolean})],f.prototype,"focusOnClear",void 0);_([Kt("#text-input")],f.prototype,"textInput",void 0);f=_([qt("ia-clearable-text-input")],f);let w=class extends S{constructor(){super(...arguments),this.lastInputResult="",this.lastClearResult="",this.lastSubmitResult=""}render(){var t;const i=(t=new URLSearchParams(window.location.search).get("query"))!==null&&t!==void 0?t:"";return vt`
      <ia-clearable-text-input
        .value=${i}
        .placeholder=${"Search..."}
        .screenReaderLabel=${"Search"}
        @clear=${this.onClear}
        @input=${this.onInput}
        @submit=${this.onSubmit}
      >
      </ia-clearable-text-input>
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
        <p ?hidden=${!this.lastSubmitResult}>
          Last submitted value was:
          <span id="submit-result">${this.lastSubmitResult}</span>
        </p>
      </div>
    `}onClear(t){const e=t.detail;this.lastClearResult=e}onInput(){this.lastInputResult=this.widget.value}onSubmit(t){this.lastSubmitResult=t.detail}toggleDarkMode(){document.body.classList.toggle("dark-mode"),this.widget.classList.toggle("dark-mode")}};w.styles=pt`
    :host {
      display: block;
      font-size: 1.6rem;
    }

    #controls {
      margin-top: 0.8rem;
    }

    ia-clearable-text-input.dark-mode {
      --input-background-color: #2c2c2c;
      --input-color: #fff;
    }
  `;_([$t()],w.prototype,"lastInputResult",void 0);_([$t()],w.prototype,"lastClearResult",void 0);_([$t()],w.prototype,"lastSubmitResult",void 0);_([Kt("ia-clearable-text-input")],w.prototype,"widget",void 0);w=_([qt("app-root")],w);