!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="../",e(e.s=82)}([function(t,r,e){(function(r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r&&r)||Function("return this")()}).call(this,e(44))},function(t,r,e){var n=e(0),o=e(11),i=e(33),u=e(55),c=n.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=u&&c[t]||(u?c:i)("Symbol."+t))}},function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,r){var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,r,e){var n=e(7),o=e(8),i=e(10);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},function(t,r,e){var n=e(4);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},function(t,r,e){var n=e(2);t.exports=!n((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,r,e){var n=e(7),o=e(28),i=e(6),u=e(18),c=Object.defineProperty;r.f=n?c:function(t,r,e){if(i(t),r=u(r,!0),i(e),o)try{return c(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},function(t,r,e){var n=e(0),o=e(26).f,i=e(5),u=e(30),c=e(20),a=e(48),f=e(54);t.exports=function(t,r){var e,s,p,l,v,d=t.target,y=t.global,h=t.stat;if(e=y?n:h?n[d]||c(d,{}):(n[d]||{}).prototype)for(s in r){if(l=r[s],p=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(y?s:d+(h?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(e,s,l,t)}}},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r,e){var n=e(19),o=e(46);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.4.1",mode:n?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,r,e){var n=e(23),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,r){t.exports={}},function(t,r,e){var n=e(27),o=e(17);t.exports=function(t){return n(o(t))}},function(t,r,e){var n=e(17);t.exports=function(t){return Object(n(t))}},function(t,r){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,r){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,r,e){var n=e(4);t.exports=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,r){t.exports=!1},function(t,r,e){var n=e(0),o=e(5);t.exports=function(t,r){try{o(n,t,r)}catch(e){n[t]=r}return r}},function(t,r,e){var n=e(11),o=e(33),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,r){t.exports={}},function(t,r){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,r,e){var n=e(50),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][r]||o[t]&&o[t][r]}},function(t,r,e){var n=e(7),o=e(45),i=e(10),u=e(14),c=e(18),a=e(3),f=e(28),s=Object.getOwnPropertyDescriptor;r.f=n?s:function(t,r){if(t=u(t),r=c(r,!0),f)try{return s(t,r)}catch(t){}if(a(t,r))return i(!o.f.call(t,r),t[r])}},function(t,r,e){var n=e(2),o=e(16),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,r,e){var n=e(7),o=e(2),i=e(29);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,r,e){var n=e(0),o=e(4),i=n.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,r,e){var n=e(0),o=e(11),i=e(5),u=e(3),c=e(20),a=e(31),f=e(32),s=f.get,p=f.enforce,l=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,r,e,o){var a=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof r||u(e,"name")||i(e,"name",r),p(e).source=l.join("string"==typeof r?r:"")),t!==n?(a?!s&&t[r]&&(f=!0):delete t[r],f?t[r]=e:i(t,r,e)):f?t[r]=e:c(r,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a.call(this)}))},function(t,r,e){var n=e(11);t.exports=n("native-function-to-string",Function.toString)},function(t,r,e){var n,o,i,u=e(47),c=e(0),a=e(4),f=e(5),s=e(3),p=e(21),l=e(22),v=c.WeakMap;if(u){var d=new v,y=d.get,h=d.has,g=d.set;n=function(t,r){return g.call(d,t,r),r},o=function(t){return y.call(d,t)||{}},i=function(t){return h.call(d,t)}}else{var m=p("state");l[m]=!0,n=function(t,r){return f(t,m,r),r},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!a(r)||(e=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,r){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},function(t,r,e){var n=e(3),o=e(14),i=e(52).indexOf,u=e(22);t.exports=function(t,r){var e,c=o(t),a=0,f=[];for(e in c)!n(u,e)&&n(c,e)&&f.push(e);for(;r.length>a;)n(c,e=r[a++])&&(~i(f,e)||f.push(e));return f}},function(t,r,e){var n=e(16);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,r,e){"use strict";var n=e(18),o=e(8),i=e(10);t.exports=function(t,r,e){var u=n(r);u in t?o.f(t,u,i(0,e)):t[u]=e}},function(t,r,e){"use strict";var n=e(57).forEach,o=e(59);t.exports=o("forEach")?function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,r,e){var n=e(58);t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}},function(t,r,e){"use strict";var n,o,i,u=e(40),c=e(5),a=e(3),f=e(1),s=e(19),p=f("iterator"),l=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(n=o):l=!0),null==n&&(n={}),s||a(n,p)||c(n,p,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:l}},function(t,r,e){var n=e(3),o=e(15),i=e(21),u=e(71),c=i("IE_PROTO"),a=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),n(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,r,e){var n=e(8).f,o=e(3),i=e(1)("toStringTag");t.exports=function(t,r,e){t&&!o(t=e?t:t.prototype,i)&&n(t,i,{configurable:!0,value:r})}},function(t,r,e){var n=e(23),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},function(t,r,e){var n=e(4),o=e(35),i=e(1)("species");t.exports=function(t,r){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?n(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===r?0:r)}},function(t,r){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,r,e){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);r.f=i?function(t){var r=o(this,t);return!!r&&r.enumerable}:n},function(t,r,e){var n=e(0),o=e(20),i=n["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,r,e){var n=e(0),o=e(31),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,r,e){var n=e(3),o=e(49),i=e(26),u=e(8);t.exports=function(t,r){for(var e=o(r),c=u.f,a=i.f,f=0;f<e.length;f++){var s=e[f];n(t,s)||c(t,s,a(r,s))}}},function(t,r,e){var n=e(25),o=e(51),i=e(53),u=e(6);t.exports=n("Reflect","ownKeys")||function(t){var r=o.f(u(t)),e=i.f;return e?r.concat(e(t)):r}},function(t,r,e){t.exports=e(0)},function(t,r,e){var n=e(34),o=e(24).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,r,e){var n=e(14),o=e(12),i=e(42),u=function(t){return function(r,e,u){var c,a=n(r),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r,e){var n=e(2),o=/#|\.prototype\./,i=function(t,r){var e=c[u(t)];return e==f||e!=a&&("function"==typeof r?n(r):!!r)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,r,e){var n=e(2);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(t,r,e){"use strict";var n=e(9),o=e(37);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,r,e){var n=e(38),o=e(27),i=e(15),u=e(12),c=e(43),a=[].push,f=function(t){var r=1==t,e=2==t,f=3==t,s=4==t,p=6==t,l=5==t||p;return function(v,d,y,h){for(var g,m,x=i(v),_=o(x),S=n(d,y,3),b=u(_.length),L=0,O=h||c,w=r?O(v,b):e?O(v,0):void 0;b>L;L++)if((l||L in _)&&(m=S(g=_[L],L,x),t))if(r)w[L]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return L;case 2:a.call(w,g)}else if(s)return!1;return p?-1:f||s?s:w}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,r,e){"use strict";var n=e(2);t.exports=function(t,r){var e=[][t];return!e||!n((function(){e.call(null,r||function(){throw 1},1)}))}},function(t,r,e){var n=e(9),o=e(61);n({target:"Array",stat:!0,forced:!e(66)((function(t){Array.from(t)}))},{from:o})},function(t,r,e){"use strict";var n=e(38),o=e(15),i=e(62),u=e(63),c=e(12),a=e(36),f=e(64);t.exports=function(t){var r,e,s,p,l,v=o(t),d="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,g=void 0!==h,m=0,x=f(v);if(g&&(h=n(h,y>2?arguments[2]:void 0,2)),null==x||d==Array&&u(x))for(e=new d(r=c(v.length));r>m;m++)a(e,m,g?h(v[m],m):v[m]);else for(l=(p=x.call(v)).next,e=new d;!(s=l.call(p)).done;m++)a(e,m,g?i(p,h,[s.value,m],!0):s.value);return e.length=m,e}},function(t,r,e){var n=e(6);t.exports=function(t,r,e,o){try{return o?r(n(e)[0],e[1]):r(e)}catch(r){var i=t.return;throw void 0!==i&&n(i.call(t)),r}}},function(t,r,e){var n=e(1),o=e(13),i=n("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},function(t,r,e){var n=e(65),o=e(13),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[n(t)]}},function(t,r,e){var n=e(16),o=e(1)("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(t){var r,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),o))?e:i?n(r):"Object"==(u=n(r))&&"function"==typeof r.callee?"Arguments":u}},function(t,r,e){var n=e(1)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[n]=function(){return this},Array.from(u,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var e=!1;try{var i={};i[n]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,r,e){"use strict";var n=e(68).charAt,o=e(32),i=e(69),u=o.set,c=o.getterFor("String Iterator");i(String,"String",(function(t){u(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,r=c(this),e=r.string,o=r.index;return o>=e.length?{value:void 0,done:!0}:(t=n(e,o),r.index+=t.length,{value:t,done:!1})}))},function(t,r,e){var n=e(23),o=e(17),i=function(t){return function(r,e){var i,u,c=String(o(r)),a=n(e),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,r,e){"use strict";var n=e(9),o=e(70),i=e(40),u=e(76),c=e(41),a=e(5),f=e(30),s=e(1),p=e(19),l=e(13),v=e(39),d=v.IteratorPrototype,y=v.BUGGY_SAFARI_ITERATORS,h=s("iterator"),g=function(){return this};t.exports=function(t,r,e,s,v,m,x){o(e,r,s);var _,S,b,L=function(t){if(t===v&&j)return j;if(!y&&t in A)return A[t];switch(t){case"keys":case"values":case"entries":return function(){return new e(this,t)}}return function(){return new e(this)}},O=r+" Iterator",w=!1,A=t.prototype,E=A[h]||A["@@iterator"]||v&&A[v],j=!y&&E||L(v),T="Array"==r&&A.entries||E;if(T&&(_=i(T.call(new t)),d!==Object.prototype&&_.next&&(p||i(_)===d||(u?u(_,d):"function"!=typeof _[h]&&a(_,h,g)),c(_,O,!0,!0),p&&(l[O]=g))),"values"==v&&E&&"values"!==E.name&&(w=!0,j=function(){return E.call(this)}),p&&!x||A[h]===j||a(A,h,j),l[r]=j,v)if(S={values:L("values"),keys:m?j:L("keys"),entries:L("entries")},x)for(b in S)(y||w||!(b in A))&&f(A,b,S[b]);else n({target:r,proto:!0,forced:y||w},S);return S}},function(t,r,e){"use strict";var n=e(39).IteratorPrototype,o=e(72),i=e(10),u=e(41),c=e(13),a=function(){return this};t.exports=function(t,r,e){var f=r+" Iterator";return t.prototype=o(n,{next:i(1,e)}),u(t,f,!1,!0),c[f]=a,t}},function(t,r,e){var n=e(2);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,r,e){var n=e(6),o=e(73),i=e(24),u=e(22),c=e(75),a=e(29),f=e(21)("IE_PROTO"),s=function(){},p=function(){var t,r=a("iframe"),e=i.length;for(r.style.display="none",c.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),p=t.F;e--;)delete p.prototype[i[e]];return p()};t.exports=Object.create||function(t,r){var e;return null!==t?(s.prototype=n(t),e=new s,s.prototype=null,e[f]=t):e=p(),void 0===r?e:o(e,r)},u[f]=!0},function(t,r,e){var n=e(7),o=e(8),i=e(6),u=e(74);t.exports=n?Object.defineProperties:function(t,r){i(t);for(var e,n=u(r),c=n.length,a=0;c>a;)o.f(t,e=n[a++],r[e]);return t}},function(t,r,e){var n=e(34),o=e(24);t.exports=Object.keys||function(t){return n(t,o)}},function(t,r,e){var n=e(25);t.exports=n("document","documentElement")},function(t,r,e){var n=e(6),o=e(77);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),r=e instanceof Array}catch(t){}return function(e,i){return n(e),o(i),r?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,r,e){var n=e(4);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,r,e){var n=e(0),o=e(79),i=e(37),u=e(5);for(var c in o){var a=n[c],f=a&&a.prototype;if(f&&f.forEach!==i)try{u(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,r){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,r,e){var n=e(2),o=e(1),i=e(81),u=o("species");t.exports=function(t){return i>=51||!n((function(){var r=[];return(r.constructor={})[u]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},function(t,r,e){var n,o,i=e(0),u=e(84),c=i.process,a=c&&c.versions,f=a&&a.v8;f?o=(n=f.split("."))[0]+n[1]:u&&(!(n=u.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=u.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},function(t,r,e){"use strict";e.r(r);e(83),e(56),e(60),e(85),e(67),e(78),e(86);var n=document.querySelector(".header__link_type_login"),o=document.querySelector(".header__auth-link_mobile"),i=document.querySelector(".popup__login"),u=Array.from(document.querySelectorAll(".popup__close")),c=(document.querySelectorAll(".header__link"),document.querySelector(".popup__link_reg")),a=document.querySelector(".popup__signup"),f=document.querySelector(".popup__link_enter"),s=document.querySelectorAll(".article__mark_type_save"),p=document.querySelector(".lead__search"),l=(p.querySelector("button"),document.querySelector(".preloader")),v=document.querySelector(".not-found"),d=document.querySelector(".popup__form_login"),y=document.querySelector(".popup__form_signup"),h=Array.from(d.querySelectorAll(".popup__input")),g=Array.from(y.querySelectorAll(".popup__input")),m=h.concat(g),x=(Array.from(document.querySelectorAll(".article__text")),document.querySelector(".popup__signup-success")),_=document.querySelector(".search-results"),S=p.querySelector("input");function b(){"show me more"===S.value?(l.classList.add("hider"),_.classList.remove("hider")):(l.classList.add("hider"),v.classList.remove("hider"))}m.forEach((function(t){t.addEventListener("input",(function(){if(!t.validity.valid)return(e=(r=t).nextElementSibling).classList.add("popup__error_active"),e.textContent="Неправильно заполнено поле",void r.classList.add("popup__input_has-error");var r,e;!function(t){var r=t.nextElementSibling;t.classList.remove("popup__input_has-error"),r.textContent="",r.classList.remove("popup__error_active")}(t)}))})),o.addEventListener("click",(function(){i.classList.add("popup_is-opened")})),u.forEach((function(t){t.addEventListener("click",(function(){t.closest(".popup").classList.remove("popup_is-opened")}))})),n.addEventListener("click",(function(){i.classList.add("popup_is-opened"),i.querySelector("input").focus()})),u.forEach((function(t){t.addEventListener("click",(function(){t.closest(".popup").classList.remove("popup_is-opened")}))})),c.addEventListener("click",(function(){i.classList.remove("popup_is-opened"),a.classList.add("popup_is-opened"),a.querySelector("input").focus()})),f.addEventListener("click",(function(){a.classList.remove("popup_is-opened"),x.classList.add("popup_is-opened")})),S.addEventListener("input",(function(){"show me more"===S.value?S.setAttribute("style","color: green;"):S.removeAttribute("style","color: green;")})),p.addEventListener("submit",(function(t){t.preventDefault(),v.classList.contains("hider")||v.classList.add("hider"),l.classList.remove("hider"),setTimeout(b,3e3)})),Array.from(s).forEach((function(t){t.addEventListener("click",(function(){t.classList.toggle("article__mark_active")})),window.screen.availWidth>820&&t.addEventListener("mouseover",(function(){t.previousElementSibling.classList.remove("hider"),setTimeout((function(){t.previousElementSibling.classList.add("hider")}),2e3)}))}))},function(t,r,e){"use strict";var n=e(9),o=e(2),i=e(35),u=e(4),c=e(15),a=e(12),f=e(36),s=e(43),p=e(80),l=e(1),v=e(81),d=l("isConcatSpreadable"),y=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),h=p("concat"),g=function(t){if(!u(t))return!1;var r=t[d];return void 0!==r?!!r:i(t)};n({target:"Array",proto:!0,forced:!y||!h},{concat:function(t){var r,e,n,o,i,u=c(this),p=s(u,0),l=0;for(r=-1,n=arguments.length;r<n;r++)if(g(i=-1===r?u:arguments[r])){if(l+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,l++)e in i&&f(p,l,i[e])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(p,l++,i)}return p.length=l,p}})},function(t,r,e){var n=e(25);t.exports=n("navigator","userAgent")||""},function(t,r,e){"use strict";var n=e(9),o=e(4),i=e(35),u=e(42),c=e(12),a=e(14),f=e(36),s=e(80),p=e(1)("species"),l=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!s("slice")},{slice:function(t,r){var e,n,s,d=a(this),y=c(d.length),h=u(t,y),g=u(void 0===r?y:r,y);if(i(d)&&("function"!=typeof(e=d.constructor)||e!==Array&&!i(e.prototype)?o(e)&&null===(e=e[p])&&(e=void 0):e=void 0,e===Array||void 0===e))return l.call(d,h,g);for(n=new(void 0===e?Array:e)(v(g-h,0)),s=0;h<g;h++,s++)h in d&&f(n,s,d[h]);return n.length=s,n}})},function(t,r,e){}]);