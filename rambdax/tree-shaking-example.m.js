const r=function r(n,t){if(void 0===t)return function(t){return r(n,t)};for(var o=[],u=n;u<t;u++)o.push(u);return o};function n(r){return r%2==0}var t;console.log((t=10,function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];return function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];var o=r.slice();if(o.length>0){for(var u=o.pop().apply(void 0,n);o.length>0;)u=o.pop()(u);return u}}}(function r(n,t){if(void 0===t)return function(t){return r(n,t)};if(void 0===t.length)return function(r,n){var t={};for(var o in n)r(n[o],o)&&(t[o]=n[o]);return t}(n,t);for(var o=-1,u=0,e=t.length,f=[];++o<e;){var i=t[o];n(i)&&(f[u++]=i)}return f}(n),r(2))(t)));
//# sourceMappingURL=tree-shaking-example.m.js.map
