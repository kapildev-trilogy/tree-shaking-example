!function(n){var t={};function r(e){if(t[e])return t[e].exports;var u=t[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var u in n)r.d(e,u,function(t){return n[t]}.bind(null,u));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=0)}([function(n,t,r){"use strict";function e(n,t=[]){return(...r)=>(t=>t.length>=n.length?n(...t):e(n,t))([...t,...r])}r.r(t);e(function(n,t,r){return r.concat().map((e,u)=>u===t?n(r[t]):e)});function u(n,t){if(1===arguments.length)return t=>u(n,t);if(void 0===t)return[];if(!Array.isArray(t))return function(n,t){const r={};for(const e in t)n(t[e],e)&&(r[e]=t[e]);return r}(n,t);let r=-1,e=0;const o=t.length,i=[];for(;++r<o;){const u=t[r];n(u,r)&&(i[e++]=u)}return i}e(function(n,t,r){return Object.assign({},r,{[n]:t})});function o(...n){return(...t)=>{const r=n.slice();if(r.length>0){let n=r.pop()(...t);for(;r.length>0;)n=r.pop()(n);return n}}}e(function(n,t,r){return function n(t,r){return 1===arguments.length?r=>n(t,r):null==r||!0===Number.isNaN(r)?t:r}(n,function n(t,r){if(1===arguments.length)return r=>n(t,r);if(null==r)return;let e=r,u=0;const o="string"==typeof t?t.split("."):t;for(;u<o.length;){if(null==e)return;e=e[o[u]],u++}return e}(t,r))});function i(n,t){if(1===arguments.length)return t=>i(n,t);const r=[];for(let e=n;e<t;e++)r.push(e);return r}function f(n){return n%2==0}var l;console.log((l=10,o(u(f),i(2))(l)))}]);