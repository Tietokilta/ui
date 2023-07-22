import{r as g}from"./index-76fb7be0.js";import{_ as er}from"./extends-98964cd2.js";var ir={exports:{}},_={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var br=g,gr=Symbol.for("react.element"),mr=Symbol.for("react.fragment"),vr=Object.prototype.hasOwnProperty,hr=br.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yr={key:!0,ref:!0,__self:!0,__source:!0};function ar(r,e,o){var t,i={},s=null,n=null;o!==void 0&&(s=""+o),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(n=e.ref);for(t in e)vr.call(e,t)&&!yr.hasOwnProperty(t)&&(i[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)i[t]===void 0&&(i[t]=e[t]);return{$$typeof:gr,type:r,key:s,ref:n,props:i,_owner:hr.current}}_.Fragment=mr;_.jsx=ar;_.jsxs=ar;ir.exports=_;var te=ir.exports;function xr(r,e){typeof r=="function"?r(e):r!=null&&(r.current=e)}function sr(...r){return e=>r.forEach(o=>xr(o,e))}function oe(...r){return g.useCallback(sr(...r),r)}const wr=g.forwardRef((r,e)=>{const{children:o,...t}=r,i=g.Children.toArray(o),s=i.find(kr);if(s){const n=s.props.children,a=i.map(c=>c===s?g.Children.count(n)>1?g.Children.only(null):g.isValidElement(n)?n.props.children:null:c);return g.createElement(B,er({},t,{ref:e}),g.isValidElement(n)?g.cloneElement(n,void 0,a):null)}return g.createElement(B,er({},t,{ref:e}),o)});wr.displayName="Slot";const B=g.forwardRef((r,e)=>{const{children:o,...t}=r;return g.isValidElement(o)?g.cloneElement(o,{...Ar(t,o.props),ref:e?sr(e,o.ref):o.ref}):g.Children.count(o)>1?g.Children.only(null):null});B.displayName="SlotClone";const Cr=({children:r})=>g.createElement(g.Fragment,null,r);function kr(r){return g.isValidElement(r)&&r.type===Cr}function Ar(r,e){const o={...e};for(const t in e){const i=r[t],s=e[t];/^on[A-Z]/.test(t)?i&&s?o[t]=(...a)=>{s(...a),i(...a)}:i&&(o[t]=i):t==="style"?o[t]={...i,...s}:t==="className"&&(o[t]=[i,s].filter(Boolean).join(" "))}return{...r,...o}}function lr(r){var e,o,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r))for(e=0;e<r.length;e++)r[e]&&(o=lr(r[e]))&&(t&&(t+=" "),t+=o);else for(e in r)r[e]&&(t&&(t+=" "),t+=e);return t}function Sr(){for(var r,e,o=0,t="";o<arguments.length;)(r=arguments[o++])&&(e=lr(r))&&(t&&(t+=" "),t+=e);return t}function Mr(){for(var r=0,e,o,t="";r<arguments.length;)(e=arguments[r++])&&(o=cr(e))&&(t&&(t+=" "),t+=o);return t}function cr(r){if(typeof r=="string")return r;for(var e,o="",t=0;t<r.length;t++)r[t]&&(e=cr(r[t]))&&(o&&(o+=" "),o+=e);return o}var q="-";function zr(r){var e=Er(r),o=r.conflictingClassGroups,t=r.conflictingClassGroupModifiers,i=t===void 0?{}:t;function s(a){var c=a.split(q);return c[0]===""&&c.length!==1&&c.shift(),dr(c,e)||Gr(a)}function n(a,c){var u=o[a]||[];return c&&i[a]?[].concat(u,i[a]):u}return{getClassGroupId:s,getConflictingClassGroupIds:n}}function dr(r,e){var n;if(r.length===0)return e.classGroupId;var o=r[0],t=e.nextPart.get(o),i=t?dr(r.slice(1),t):void 0;if(i)return i;if(e.validators.length!==0){var s=r.join(q);return(n=e.validators.find(function(a){var c=a.validator;return c(s)}))==null?void 0:n.classGroupId}}var tr=/^\[(.+)\]$/;function Gr(r){if(tr.test(r)){var e=tr.exec(r)[1],o=e==null?void 0:e.substring(0,e.indexOf(":"));if(o)return"arbitrary.."+o}}function Er(r){var e=r.theme,o=r.prefix,t={nextPart:new Map,validators:[]},i=$r(Object.entries(r.classGroups),o);return i.forEach(function(s){var n=s[0],a=s[1];U(a,t,n,e)}),t}function U(r,e,o,t){r.forEach(function(i){if(typeof i=="string"){var s=i===""?e:or(e,i);s.classGroupId=o;return}if(typeof i=="function"){if(Ir(i)){U(i(t),e,o,t);return}e.validators.push({validator:i,classGroupId:o});return}Object.entries(i).forEach(function(n){var a=n[0],c=n[1];U(c,or(e,a),o,t)})})}function or(r,e){var o=r;return e.split(q).forEach(function(t){o.nextPart.has(t)||o.nextPart.set(t,{nextPart:new Map,validators:[]}),o=o.nextPart.get(t)}),o}function Ir(r){return r.isThemeGetter}function $r(r,e){return e?r.map(function(o){var t=o[0],i=o[1],s=i.map(function(n){return typeof n=="string"?e+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(function(a){var c=a[0],u=a[1];return[e+c,u]})):n});return[t,s]}):r}function Rr(r){if(r<1)return{get:function(){},set:function(){}};var e=0,o=new Map,t=new Map;function i(s,n){o.set(s,n),e++,e>r&&(e=0,t=o,o=new Map)}return{get:function(n){var a=o.get(n);if(a!==void 0)return a;if((a=t.get(n))!==void 0)return i(n,a),a},set:function(n,a){o.has(n)?o.set(n,a):i(n,a)}}}var ur="!";function Pr(r){var e=r.separator||":",o=e.length===1,t=e[0],i=e.length;return function(n){for(var a=[],c=0,u=0,b,p=0;p<n.length;p++){var m=n[p];if(c===0){if(m===t&&(o||n.slice(p,p+i)===e)){a.push(n.slice(u,p)),u=p+i;continue}if(m==="/"){b=p;continue}}m==="["?c++:m==="]"&&c--}var y=a.length===0?n:n.substring(u),x=y.startsWith(ur),v=x?y.substring(1):y,w=b&&b>u?b-u:void 0;return{modifiers:a,hasImportantModifier:x,baseClassName:v,maybePostfixModifierPosition:w}}}function jr(r){if(r.length<=1)return r;var e=[],o=[];return r.forEach(function(t){var i=t[0]==="[";i?(e.push.apply(e,o.sort().concat([t])),o=[]):o.push(t)}),e.push.apply(e,o.sort()),e}function Tr(r){return{cache:Rr(r.cacheSize),splitModifiers:Pr(r),...zr(r)}}var _r=/\s+/;function Nr(r,e){var o=e.splitModifiers,t=e.getClassGroupId,i=e.getConflictingClassGroupIds,s=new Set;return r.trim().split(_r).map(function(n){var a=o(n),c=a.modifiers,u=a.hasImportantModifier,b=a.baseClassName,p=a.maybePostfixModifierPosition,m=t(p?b.substring(0,p):b),y=!!p;if(!m){if(!p)return{isTailwindClass:!1,originalClassName:n};if(m=t(b),!m)return{isTailwindClass:!1,originalClassName:n};y=!1}var x=jr(c).join(":"),v=u?x+ur:x;return{isTailwindClass:!0,modifierId:v,classGroupId:m,originalClassName:n,hasPostfixModifier:y}}).reverse().filter(function(n){if(!n.isTailwindClass)return!0;var a=n.modifierId,c=n.classGroupId,u=n.hasPostfixModifier,b=a+c;return s.has(b)?!1:(s.add(b),i(c,u).forEach(function(p){return s.add(a+p)}),!0)}).reverse().map(function(n){return n.originalClassName}).join(" ")}function Or(){for(var r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];var t,i,s,n=a;function a(u){var b=e[0],p=e.slice(1),m=p.reduce(function(y,x){return x(y)},b());return t=Tr(m),i=t.cache.get,s=t.cache.set,n=c,c(u)}function c(u){var b=i(u);if(b)return b;var p=Nr(u,t);return s(u,p),p}return function(){return n(Mr.apply(null,arguments))}}function d(r){var e=function(t){return t[r]||[]};return e.isThemeGetter=!0,e}var fr=/^\[(?:([a-z-]+):)?(.+)\]$/i,Wr=/^\d+\/\d+$/,Lr=new Set(["px","full","screen"]),Vr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Br=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ur=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function C(r){return M(r)||Lr.has(r)||Wr.test(r)||F(r)}function F(r){return z(r,"length",Xr)}function Fr(r){return z(r,"size",pr)}function qr(r){return z(r,"position",pr)}function Zr(r){return z(r,"url",Yr)}function T(r){return z(r,"number",M)}function M(r){return!Number.isNaN(Number(r))}function Hr(r){return r.endsWith("%")&&M(r.slice(0,-1))}function I(r){return nr(r)||z(r,"number",nr)}function l(r){return fr.test(r)}function $(){return!0}function S(r){return Vr.test(r)}function Jr(r){return z(r,"",Kr)}function z(r,e,o){var t=fr.exec(r);return t?t[1]?t[1]===e:o(t[2]):!1}function Xr(r){return Br.test(r)}function pr(){return!1}function Yr(r){return r.startsWith("url(")}function nr(r){return Number.isInteger(Number(r))}function Kr(r){return Ur.test(r)}function Qr(){var r=d("colors"),e=d("spacing"),o=d("blur"),t=d("brightness"),i=d("borderColor"),s=d("borderRadius"),n=d("borderSpacing"),a=d("borderWidth"),c=d("contrast"),u=d("grayscale"),b=d("hueRotate"),p=d("invert"),m=d("gap"),y=d("gradientColorStops"),x=d("gradientColorStopPositions"),v=d("inset"),w=d("margin"),A=d("opacity"),k=d("padding"),Z=d("saturate"),N=d("scale"),H=d("sepia"),J=d("skew"),X=d("space"),Y=d("translate"),O=function(){return["auto","contain","none"]},W=function(){return["auto","hidden","clip","visible","scroll"]},L=function(){return["auto",l,e]},f=function(){return[l,e]},K=function(){return["",C]},R=function(){return["auto",M,l]},Q=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},P=function(){return["solid","dashed","dotted","double","none"]},D=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},V=function(){return["start","end","center","between","around","evenly","stretch"]},G=function(){return["","0",l]},rr=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},E=function(){return[M,T]},j=function(){return[M,l]};return{cacheSize:500,theme:{colors:[$],spacing:[C],blur:["none","",S,l],brightness:E(),borderColor:[r],borderRadius:["none","","full",S,l],borderSpacing:f(),borderWidth:K(),contrast:E(),grayscale:G(),hueRotate:j(),invert:G(),gap:f(),gradientColorStops:[r],gradientColorStopPositions:[Hr,F],inset:L(),margin:L(),opacity:E(),padding:f(),saturate:E(),scale:E(),sepia:G(),skew:j(),space:f(),translate:f()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[S]}],"break-after":[{"break-after":rr()}],"break-before":[{"break-before":rr()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(Q(),[l])}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",I]}],basis:[{basis:L()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",I]}],"grid-cols":[{"grid-cols":[$]}],"col-start-end":[{col:["auto",{span:["full",I]},l]}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":[$]}],"row-start-end":[{row:["auto",{span:[I]},l]}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal"].concat(V())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(V(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(V(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[k]}],px:[{px:[k]}],py:[{py:[k]}],ps:[{ps:[k]}],pe:[{pe:[k]}],pt:[{pt:[k]}],pr:[{pr:[k]}],pb:[{pb:[k]}],pl:[{pl:[k]}],m:[{m:[w]}],mx:[{mx:[w]}],my:[{my:[w]}],ms:[{ms:[w]}],me:[{me:[w]}],mt:[{mt:[w]}],mr:[{mr:[w]}],mb:[{mb:[w]}],ml:[{ml:[w]}],"space-x":[{"space-x":[X]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[X]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",l,e]}],"min-w":[{"min-w":["min","max","fit",l,C]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[S]},S,l]}],h:[{h:[l,e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",l,C]}],"max-h":[{"max-h":[l,e,"min","max","fit"]}],"font-size":[{text:["base",S,F]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",T]}],"font-family":[{font:[$]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",M,T]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",l,C]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[A]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[A]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(P(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",C]}],"underline-offset":[{"underline-offset":["auto",l,C]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:f()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[A]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(Q(),[qr])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Fr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Zr]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[A]}],"border-style":[{border:[].concat(P(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[A]}],"divide-style":[{divide:P()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:[""].concat(P())}],"outline-offset":[{"outline-offset":[l,C]}],"outline-w":[{outline:[C]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:K()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[A]}],"ring-offset-w":[{"ring-offset":[C]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",S,Jr]}],"shadow-color":[{shadow:[$]}],opacity:[{opacity:[A]}],"mix-blend":[{"mix-blend":D()}],"bg-blend":[{"bg-blend":D()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",S,l]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[p]}],saturate:[{saturate:[Z]}],sepia:[{sepia:[H]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[A]}],"backdrop-saturate":[{"backdrop-saturate":[Z]}],"backdrop-sepia":[{"backdrop-sepia":[H]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[n]}],"border-spacing-x":[{"border-spacing-x":[n]}],"border-spacing-y":[{"border-spacing-y":[n]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:j()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:j()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[N]}],"scale-x":[{"scale-x":[N]}],"scale-y":[{"scale-y":[N]}],rotate:[{rotate:[I,l]}],"translate-x":[{"translate-x":[Y]}],"translate-y":[{"translate-y":[Y]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":f()}],"scroll-mx":[{"scroll-mx":f()}],"scroll-my":[{"scroll-my":f()}],"scroll-ms":[{"scroll-ms":f()}],"scroll-me":[{"scroll-me":f()}],"scroll-mt":[{"scroll-mt":f()}],"scroll-mr":[{"scroll-mr":f()}],"scroll-mb":[{"scroll-mb":f()}],"scroll-ml":[{"scroll-ml":f()}],"scroll-p":[{"scroll-p":f()}],"scroll-px":[{"scroll-px":f()}],"scroll-py":[{"scroll-py":f()}],"scroll-ps":[{"scroll-ps":f()}],"scroll-pe":[{"scroll-pe":f()}],"scroll-pt":[{"scroll-pt":f()}],"scroll-pr":[{"scroll-pr":f()}],"scroll-pb":[{"scroll-pb":f()}],"scroll-pl":[{"scroll-pl":f()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[C,T]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var Dr=Or(Qr);function ne(...r){return Dr(Sr(r))}export{wr as $,ne as a,oe as b,Sr as c,te as j};
//# sourceMappingURL=index-557635b5.js.map
