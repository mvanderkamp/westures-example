parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"0pI8":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}var r=0,u=function(){function n(t){if(e(this,n),"string"!=typeof t)throw new TypeError("Gestures require a string type / name");this.type=t,this.id="gesture-".concat(this.type,"-").concat(r++)}return t(n,[{key:"start",value:function(){return null}},{key:"move",value:function(){return null}},{key:"end",value:function(){return null}},{key:"cancel",value:function(){return null}}]),n}();module.exports=u;
},{}],"pxye":[function(require,module,exports) {
"use strict";function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var u=e[t];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(n,u.key,u)}}function t(n,t,u){return t&&e(n.prototype,t),u&&e(n,u),n}var u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;n(this,e),this.x=t,this.y=u}return t(e,[{key:"angleTo",value:function(n){return Math.atan2(n.y-this.y,n.x-this.x)}},{key:"averageDistanceTo",value:function(n){return this.totalDistanceTo(n)/n.length}},{key:"clone",value:function(){return new e(this.x,this.y)}},{key:"distanceTo",value:function(n){return Math.hypot(n.x-this.x,n.y-this.y)}},{key:"minus",value:function(n){return new e(this.x-n.x,this.y-n.y)}},{key:"plus",value:function(n){return new e(this.x+n.x,this.y+n.y)}},{key:"totalDistanceTo",value:function(n){var e=this;return n.reduce(function(n,t){return n+e.distanceTo(t)},0)}}],[{key:"centroid",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0===n.length)return null;var t=e.sum(n);return new e(t.x/n.length,t.y/n.length)}},{key:"sum",value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce(function(n,e){return n.plus(e)},new e(0,0))}}]),e}();module.exports=u;
},{}],"HvD2":[function(require,module,exports) {
"use strict";function e(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(n){t(e,n,r[n])})}return e}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var i=function(){function t(e,r,o){n(this,t),this.element=e,this.gesture=r,this.handler=o}return o(t,[{key:"evaluateHook",value:function(t,n){var r=this.gesture[t](n);r&&this.handler(e({centroid:n.centroid,event:n.event,phase:t,radius:n.radius,type:this.gesture.type,target:this.element},r))}}]),t}();module.exports=i;
},{}],"6mU1":[function(require,module,exports) {
"use strict";var e=Object.freeze({mousedown:"start",touchstart:"start",pointerdown:"start",mousemove:"move",touchmove:"move",pointermove:"move",mouseup:"end",touchend:"end",pointerup:"end",touchcancel:"cancel",pointercancel:"cancel"});module.exports=e;
},{}],"4fef":[function(require,module,exports) {
"use strict";function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function t(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}var i=require("./Point2D.js"),r=require("./PHASE.js");function o(n,e){return n.changedTouches?Array.from(n.changedTouches).find(function(n){return n.identifier===e}):n}var a=function(){function e(t,a){n(this,e),this.originalEvent=t,this.type=r[t.type],this.time=Date.now();var u=o(t,a);this.point=new i(u.clientX,u.clientY)}return t(e,[{key:"angleTo",value:function(n){return this.point.angleTo(n.point)}},{key:"distanceTo",value:function(n){return this.point.distanceTo(n.point)}}]),e}();module.exports=a;
},{"./Point2D.js":"pxye","./PHASE.js":"6mU1"}],"Nqrp":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}var i=require("./PointerData.js");function r(t){if("function"==typeof t.composedPath)return t.composedPath();for(var e=[],n=t.target;n!==document;n=n.parentNode)e.push(n);return e.push(document),e.push(window),e}function s(t){return new WeakSet(r(t))}var u=function(){function e(n,r){t(this,e);var u=new i(n,r);this.initialElements=s(n),this.initial=u,this.current=u,this.previous=u,this.identifier=r,this.progress={}}return n(e,[{key:"getProgressOfGesture",value:function(t){return this.progress[t]||(this.progress[t]={}),this.progress[t]}},{key:"totalDistance",value:function(){return this.initial.distanceTo(this.current)}},{key:"update",value:function(t){this.previous=this.current,this.current=new i(t,this.identifier)}},{key:"wasInitiallyInside",value:function(t){return this.initialElements.has(t)}},{key:"phase",get:function(){return this.current.type}},{key:"startTime",get:function(){return this.initial.time}}]),e}();module.exports=u;
},{"./PointerData.js":"4fef"}],"Gdbh":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}var i=require("./Input.js"),s=require("./PHASE.js"),u=require("./Point2D.js"),r=Object.freeze({inputs:Symbol.for("inputs")}),a={TouchEvent:function(t){var e=this;Array.from(t.changedTouches).forEach(function(n){e.updateInput(t,n.identifier)})},PointerEvent:function(t){this.updateInput(t,t.pointerId)},MouseEvent:function(t){0===t.button&&this.updateInput(t,t.button)}},o=function(){function e(n){t(this,e),this.element=n,this[r.inputs]=new Map,this.inputs=[],this.active=[],this.activePoints=[],this.centroid={},this.event=null}return n(e,[{key:"clearEndedInputs",value:function(){var t=this;this[r.inputs].forEach(function(e,n){"end"===e.phase&&t[r.inputs].delete(n)})}},{key:"getInputsInPhase",value:function(t){return this.inputs.filter(function(e){return e.phase===t})}},{key:"getInputsNotInPhase",value:function(t){return this.inputs.filter(function(e){return e.phase!==t})}},{key:"hasNoActiveInputs",value:function(){return 0===this[r.inputs].size}},{key:"updateInput",value:function(t,e){switch(s[t.type]){case"start":this[r.inputs].set(e,new i(t,e));try{this.element.setPointerCapture(e)}catch(n){}break;case"end":try{this.element.releasePointerCapture(e)}catch(n){}case"move":case"cancel":this[r.inputs].has(e)&&this[r.inputs].get(e).update(t);break;default:console.warn("Unrecognized event type: ".concat(t.type))}}},{key:"updateAllInputs",value:function(t){a[t.constructor.name].call(this,t),this.updateFields(t)}},{key:"updateFields",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.inputs=Array.from(this[r.inputs].values()),this.active=this.getInputsNotInPhase("end"),this.activePoints=this.active.map(function(t){return t.current.point}),this.centroid=u.centroid(this.activePoints),this.radius=this.activePoints.reduce(function(e,n){var i=n.distanceTo(t.centroid);return i>e?i:e},0),e&&(this.event=e)}}]),e}();module.exports=o;
},{"./Input.js":"Nqrp","./PHASE.js":"6mU1","./Point2D.js":"pxye"}],"S+yC":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}var n=require("./Binding.js"),s=require("./State.js"),a=require("./PHASE.js"),u=["pointerdown","pointermove","pointerup"],r=["mousedown","mousemove","mouseup"],c=["touchstart","touchmove","touchend"],o=["pointercancel","touchcancel"],h=function(){function t(i){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e(this,t),this.bindings=[],this.activeBindings=[],this.isWaiting=!0,this.element=i,this.capture=n,this.preventDefault=a,this.state=new s(this.element),this.activate()}return i(t,[{key:"activate",value:function(){var e=this,t=[];t=window.TouchEvent||window.MouseEvent?r.concat(c):u;var i=this.arbitrate.bind(this);t.forEach(function(t){e.element.addEventListener(t,i,{capture:e.capture,once:!1,passive:!1})}),["blur"].concat(o).forEach(function(t){window.addEventListener(t,function(t){t.preventDefault(),e.state=new s(e.element),e.resetActiveBindings()})})}},{key:"resetActiveBindings",value:function(){this.activeBindings=[],this.isWaiting=!0}},{key:"updateActiveBindings",value:function(){if(this.isWaiting&&this.state.inputs.length>0){var e=this.state.inputs[0];this.activeBindings=this.bindings.filter(function(t){return e.wasInitiallyInside(t.element)}),this.isWaiting=!1}}},{key:"pruneActiveBindings",value:function(){this.state.hasNoActiveInputs()&&this.resetActiveBindings()}},{key:"arbitrate",value:function(e){var t=this;this.state.updateAllInputs(e),this.updateActiveBindings(),this.activeBindings.length>0&&(this.preventDefault&&e.preventDefault(),this.activeBindings.forEach(function(i){i.evaluateHook(a[e.type],t.state)})),this.state.clearEndedInputs(),this.pruneActiveBindings()}},{key:"addGesture",value:function(e,t,i){this.bindings.push(new n(e,t,i))}},{key:"getBindingsByElement",value:function(e){return this.bindings.filter(function(t){return t.element===e})}},{key:"removeGestures",value:function(e,t){var i=this;this.getBindingsByElement(e).forEach(function(e){null!=t&&e.gesture!==t||i.bindings.splice(i.bindings.indexOf(e),1)})}}]),t}();h.DEFAULTS=Object.freeze({capture:!1,preventDefault:!0}),module.exports=h;
},{"./Binding.js":"HvD2","./State.js":"Gdbh","./PHASE.js":"6mU1"}],"W9pc":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}function r(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?u(e):n}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var a=Symbol("cascade"),s=Symbol("smooth");function l(){if(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])try{return window.matchMedia("(pointer: coarse)").matches}catch(t){return!0}return!1}var y=function(t){return function(n){function f(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e(this,f),(n=r(this,i(f).call(this,t,o))).smooth=null,l(o.smoothing)?n.smooth=n[s].bind(u(n)):n.smooth=function(t){return t},n.identity=0,n[a]=n.identity,n}return c(f,t),o(f,[{key:"restart",value:function(){this[a]=this.identity}},{key:s,value:function(t,e){var n=this.smoothingAverage(this[a],t[e]);return this[a]=n,t[e]=n,t}},{key:"smoothingAverage",value:function(t,e){return(t+e)/2}}]),f}()};module.exports=y;
},{}],"kWxi":[function(require,module,exports) {
"use strict";var e=require("./src/Gesture.js"),r=require("./src/Point2D.js"),s=require("./src/Region.js"),o=require("./src/Smoothable.js");module.exports={Gesture:e,Point2D:r,Region:s,Smoothable:o};
},{"./src/Gesture.js":"0pI8","./src/Point2D.js":"pxye","./src/Region.js":"S+yC","./src/Smoothable.js":"W9pc"}],"ZpRJ":[function(require,module,exports) {
"use strict";const{Gesture:t,Point2D:e,Smoothable:s}=require("westures-core");class r extends(s(t)){constructor(t={}){const s={...r.DEFAULTS,...t};super("pan",s),this.muteKey=s.muteKey,this.minInputs=s.minInputs,this.previous=null,this.identity=new e(0,0)}restart(t){t.active.length>=this.minInputs&&(this.previous=t.centroid),super.restart()}start(t){this.restart(t)}move(t){if(t.active.length<this.minInputs)return null;if(this.muteKey&&t.event[this.muteKey])return this.restart(t),null;const e=t.centroid.minus(this.previous);return this.previous=t.centroid,this.smooth({translation:e},"translation")}end(t){this.restart(t)}cancel(t){this.restart(t)}smoothingAverage(t,s){return new e((t.x+s.x)/2,(t.y+s.y)/2)}}r.DEFAULTS=Object.freeze({minInputs:1,smoothing:!0}),module.exports=r;
},{"westures-core":"kWxi"}],"vi7O":[function(require,module,exports) {
"use strict";const{Gesture:t,Smoothable:s}=require("westures-core");class e extends(s(t)){constructor(t={}){const s={...e.DEFAULTS,...t};super("pinch",s),this.minInputs=s.minInputs,this.previous=0,this.identity=1}restart(t){if(t.active.length>=this.minInputs){const s=t.centroid.averageDistanceTo(t.activePoints);this.previous=s}super.restart()}start(t){this.restart(t)}move(t){if(t.active.length<this.minInputs)return null;const s=t.centroid.averageDistanceTo(t.activePoints),e=s/this.previous;return this.previous=s,this.smooth({distance:s,scale:e},"scale")}end(t){this.restart(t)}cancel(t){this.restart(t)}}e.DEFAULTS=Object.freeze({minInputs:2,smoothing:!0}),module.exports=e;
},{"westures-core":"kWxi"}],"N4qL":[function(require,module,exports) {
"use strict";const{Gesture:t,Point2D:i}=require("westures-core");class e extends t{constructor(t,i={}){super("press");const s={...e.DEFAULTS,...i};this.handler=t,this.delay=s.delay,this.minInputs=s.minInputs,this.tolerance=s.tolerance,this.initial=null,this.timeout=null}start(t){t.active.length===this.minInputs&&(this.initial=t.centroid,this.timeout=setTimeout(()=>this.recognize(t),this.delay))}recognize(t){const e=t.active.slice(0,this.minInputs).map(t=>t.current.point),s=i.centroid(e),n=this.initial.distanceTo(s);n<=this.tolerance&&this.handler({distance:n,centroid:s,initial:this.initial,type:this.type})}end(t){t.active.length<this.minInputs&&(clearTimeout(this.timeout),this.timeout=null)}}e.DEFAULTS=Object.freeze({delay:1e3,tolerance:10,minInputs:1}),module.exports=e;
},{"westures-core":"kWxi"}],"fJ4H":[function(require,module,exports) {
"use strict";const{Gesture:t,Point2D:e,Smoothable:i}=require("westures-core");class s extends(i(t)){constructor(t={}){const e={...s.DEFAULTS,...t};super("pinch",e),this.deadzoneRadius=e.deadzoneRadius,this.enableKey=e.enableKey,this.minInputs=e.minInputs,this.pivotCenter=e.pivotCenter,this.pivot=null,this.previous=0,this.isActive=!1,this.identity=1}enabled(t){return!this.enableKey||t[this.enableKey]}restart(t){if(t.active.length>=this.minInputs&&this.enabled(t.event)){if(this.isActive=!0,this.pivotCenter){const i=this.pivotCenter.getBoundingClientRect();this.pivot=new e(i.left+i.width/2,i.top+i.height/2),this.previous=this.pivot.distanceTo(t.centroid)}else this.pivot=t.centroid,this.previous=0;super.restart(t)}}calculateOutput(t){const e=this.pivot,i=e.distanceTo(t.centroid),s=i/this.previous;let n=null;return i>this.deadzoneRadius&&this.previous>this.deadzoneRadius&&(n={distance:i,scale:s,pivot:e}),this.previous=i,n}start(t){this.restart(t)}move(t){if(t.active.length<this.minInputs)return null;if(this.enabled(t.event)){if(this.isActive){const e=this.calculateOutput(t);return e?this.smooth(e,"scale"):null}this.restart(t)}else this.isActive=!1;return null}end(t){this.restart(t)}cancel(t){this.restart(t)}}s.DEFAULTS=Object.freeze({deadzoneRadius:15,enableKey:null,minInputs:1,pivotCenter:!1,smoothing:!0}),module.exports=s;
},{"westures-core":"kWxi"}],"KNVO":[function(require,module,exports) {
"use strict";const t=2*Math.PI;function e(e,n=0){let o=e-n;return o<-Math.PI?o+=t:o>Math.PI&&(o-=t),o}module.exports=e;
},{}],"HI+r":[function(require,module,exports) {
"use strict";const{Gesture:t,Smoothable:e}=require("westures-core"),s=require("./angularMinus.js");class r extends(e(t)){constructor(t={}){const e={...r.DEFAULTS,...t};super("rotate",e),this.minInputs=e.minInputs,this.previousAngles=[]}getAngle(t){if(t.active.length<this.minInputs)return null;let e=0;const r=[];return t.active.forEach((n,i)=>{const o=t.centroid.angleTo(n.current.point);e+=s(o,this.previousAngles[i]),r[i]=o}),e/=t.active.length,this.previousAngles=r,e}restart(t){this.previousAngles=[],this.getAngle(t),super.restart()}start(t){this.restart(t)}move(t){const e=this.getAngle(t);return e?this.smooth({rotation:e},"rotation"):null}end(t){this.restart(t)}cancel(t){this.restart(t)}}r.DEFAULTS=Object.freeze({minInputs:2,smoothing:!0}),module.exports=r;
},{"westures-core":"kWxi","./angularMinus.js":"KNVO"}],"sOMk":[function(require,module,exports) {
"use strict";const{Gesture:t}=require("westures-core"),e=1,s=7,i=300;function n(t,e){const s=t[e].point;let i=0,n=0;for(let o=0;o<e;++o){const e=t[o].point.angleTo(s);i+=Math.sin(e),n+=Math.cos(e)}return i/=e,n/=e,Math.atan2(i,n)}function o(t,e){return e.point.distanceTo(t.point)/(e.time-t.time+1)}function r(t,e){let s=0;for(let i=0;i<e;++i){const e=o(t[i],t[i+1]);e>s&&(s=e)}return s}class l extends t{constructor(){super("swipe"),this.moves=[],this.saved=null}refresh(){this.moves=[],this.saved=null}start(){this.refresh()}move(t){t.active.length>=e&&(this.moves.push({time:Date.now(),point:t.centroid}),this.moves.length>s&&this.moves.splice(0,this.moves.length-s))}end(t){const e=this.getResult();return this.moves=[],t.active.length>0?(this.saved=e,null):(this.saved=null,this.validate(e))}cancel(){this.refresh()}getResult(){if(this.moves.length<s)return this.saved;const t=s-1,{point:e,time:i}=this.moves[t];return{point:e,velocity:r(this.moves,t),direction:n(this.moves,t),time:i,centroid:e}}validate(t){return null==t?null:Date.now()-t.time>i?null:t}}module.exports=l;
},{"westures-core":"kWxi"}],"IJsJ":[function(require,module,exports) {
"use strict";const{Gesture:t,Point2D:e,Smoothable:i}=require("westures-core"),s=require("./angularMinus.js");class n extends(i(t)){constructor(t={}){const e={...n.DEFAULTS,...t};super("swivel",e),this.deadzoneRadius=e.deadzoneRadius,this.enableKey=e.enableKey,this.minInputs=e.minInputs,this.pivotCenter=e.pivotCenter,this.pivot=null,this.previous=0,this.isActive=!1}enabled(t){return!this.enableKey||t[this.enableKey]}restart(t){if(t.active.length>=this.minInputs&&this.enabled(t.event)){if(this.isActive=!0,this.pivotCenter){const i=this.pivotCenter.getBoundingClientRect();this.pivot=new e(i.left+i.width/2,i.top+i.height/2),this.previous=this.pivot.angleTo(t.centroid)}else this.pivot=t.centroid,this.previous=0;super.restart(t)}}start(t){this.restart(t)}calculateOutput(t){const e=this.pivot,i=e.angleTo(t.centroid),n=s(i,this.previous);return this.previous=i,e.distanceTo(t.centroid)>this.deadzoneRadius?{rotation:n,pivot:e}:null}move(t){if(t.active.length<this.minInputs)return null;if(this.enabled(t.event)){if(this.isActive){const e=this.calculateOutput(t);return e?this.smooth(e,"rotation"):null}this.restart(t)}else this.isActive=!1;return null}end(t){this.restart(t)}cancel(t){this.end(t)}}n.DEFAULTS=Object.freeze({deadzoneRadius:15,enableKey:null,minInputs:1,pivotCenter:!1}),module.exports=n;
},{"westures-core":"kWxi","./angularMinus.js":"KNVO"}],"Up/H":[function(require,module,exports) {
"use strict";const{Gesture:e,Point2D:t}=require("westures-core"),n=Object.freeze({MIN_DELAY_MS:0,MAX_DELAY_MS:300,NUM_INPUTS:1,MOVE_PX_TOLERANCE:10});class s extends e{constructor(e={}){super("tap"),this.minDelay=e.minDelay||n.MIN_DELAY_MS,this.maxDelay=e.maxDelay||n.MAX_DELAY_MS,this.numInputs=e.numInputs||n.NUM_INPUTS,this.tolerance=e.tolerance||n.MOVE_PX_TOLERANCE,this.ended=[]}end(e){const n=Date.now();if(this.ended=this.ended.concat(e.getInputsInPhase("end")).filter(e=>{const t=n-e.startTime;return t<=this.maxDelay&&t>=this.minDelay}),this.ended.length!==this.numInputs||this.ended.some(e=>e.totalDistance()>this.tolerance))return null;const s=t.centroid(this.ended.map(e=>e.current.point));return this.ended=[],{centroid:s,...s}}}module.exports=s;
},{"westures-core":"kWxi"}],"dvoR":[function(require,module,exports) {
"use strict";const{Gesture:t}=require("westures-core");class e extends t{constructor(t=[]){super("track"),this.trackStart=t.includes("start"),this.trackMove=t.includes("move"),this.trackEnd=t.includes("end"),this.trackCancel=t.includes("cancel")}data({activePoints:t,centroid:e}){return{active:t,centroid:e}}start(t){return this.trackStart?this.data(t):null}move(t){return this.trackMove?this.data(t):null}end(t){return this.trackEnd?this.data(t):null}cancel(t){return this.trackCancel?this.data(t):null}}module.exports=e;
},{"westures-core":"kWxi"}],"094L":[function(require,module,exports) {
"use strict";const{Gesture:e,Point2D:r,Region:s,Smoothable:i}=require("westures-core"),u=require("./src/Pan.js"),c=require("./src/Pinch.js"),t=require("./src/Press.js"),o=require("./src/Pull.js"),a=require("./src/Rotate.js"),q=require("./src/Swipe.js"),P=require("./src/Swivel.js"),j=require("./src/Tap.js"),l=require("./src/Track.js");module.exports={Gesture:e,Point2D:r,Region:s,Smoothable:i,Pan:u,Pinch:c,Press:t,Pull:o,Rotate:a,Swipe:q,Swivel:P,Tap:j,Track:l};
},{"westures-core":"kWxi","./src/Pan.js":"ZpRJ","./src/Pinch.js":"vi7O","./src/Press.js":"N4qL","./src/Pull.js":"fJ4H","./src/Rotate.js":"HI+r","./src/Swipe.js":"sOMk","./src/Swivel.js":"IJsJ","./src/Tap.js":"Up/H","./src/Track.js":"dvoR"}],"x5xg":[function(require,module,exports) {
"use strict";function e(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},i=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),i.forEach(function(n){t(e,n,a[n])})}return e}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}var r=require("westures"),s=new r.Region(document.body),o=document.querySelector("#container"),l=1e3/60,c=.95,d=7,u=.1,h=7;function v(){return Math.floor(256*Math.random())}function y(e){return e*=c,Math.abs(e)<u?0:e}for(var f=function(){function t(e,a){n(this,t),this.element=document.createElement("div"),this.element.style.backgroundColor=a,this.label=document.createElement("h1"),this.label.innerText=e,this.element.appendChild(this.label),o.appendChild(this.element),this.rotation=0,this.scale=1,this.x=0,this.y=0,this.velocityX=0,this.velocityY=0,this.animate=!1,this.update_fn=this.update.bind(this),this.swipe_interval=null,this.swipe_fn=this.swipeAnimation.bind(this),this.setupTracking()}return i(t,[{key:"setupTracking",value:function(){var e=this;s.addGesture(this.element,new r.Track(["start","end"]),function(t){switch(t.phase){case"start":e.animate=!0,window.requestAnimationFrame(e.update_fn),clearInterval(e.swipe_interval);break;case"end":0==t.active.length&&(e.animate=!1)}})}},{key:"randomBackground",value:function(){var e=v(),t=v(),n=v();this.element.style.backgroundColor="rgb(".concat(e,", ").concat(t,", ").concat(n,")")}},{key:"addTap",value:function(e){var t=this;return s.addGesture(this.element,new r.Tap(e),function(e){t.randomBackground()}),this}},{key:"addPress",value:function(e){var t=this;return s.addGesture(this.element,new r.Press(function(e){t.randomBackground()},e)),this}},{key:"addRotate",value:function(e){var t=this;return s.addGesture(this.element,new r.Rotate(e),function(e){t.rotation+=e.rotation}),this}},{key:"addPan",value:function(e){var t=this;return s.addGesture(this.element,new r.Pan(e),function(e){t.x+=e.translation.x,t.y+=e.translation.y}),this}},{key:"addSwipe",value:function(e){var t=this;return s.addGesture(this.element,new r.Swipe(e),function(e){var n=e.velocity>h?h:e.velocity;t.velocityX=n*Math.cos(e.direction)*d,t.velocityY=n*Math.sin(e.direction)*d,t.swipe_interval=setInterval(t.swipe_fn,l)}),this}},{key:"addSwivel",value:function(t){var n=this;return s.addGesture(this.element,new r.Swivel(e({pivotCenter:this.element},t)),function(e){n.rotation+=e.rotation}),this}},{key:"addPinch",value:function(e){var t=this;return s.addGesture(this.element,new r.Pinch(e),function(e){t.scale*=e.scale}),this}},{key:"addPull",value:function(t){var n=this;return s.addGesture(this.element,new r.Pull(e({pivotCenter:this.element},t)),function(e){n.scale*=e.scale}),this}},{key:"update",value:function(){var e="rotate(".concat(this.rotation,"rad) "),t="translate(".concat(this.x,"px, ").concat(this.y,"px) "),n="scale(".concat(this.scale,") ");this.element.style.transform=t+e+n,this.animate&&window.requestAnimationFrame(this.update_fn)}},{key:"swipeAnimation",value:function(){this.x+=this.velocityX,this.y+=this.velocityY,this.velocityX=y(this.velocityX),this.velocityY=y(this.velocityY),0===this.velocityY&&0===this.velocityX&&clearInterval(this.swipe_interval),window.requestAnimationFrame(this.update_fn)}}]),t}(),m=13,p=Math.floor(360/m),w=[],P=0;P<m;P++){var b=p*P;w.push("hsl(".concat(b,", 100%, 75%)"))}var k=0;function T(){return w[k++]}new f("TAP",T()).addTap(),new f("PAN",T()).addPan(),new f("PINCH",T()).addPinch(),new f("ROTATE",T()).addRotate(),new f("SWIPE",T()).addSwipe(),new f("PRESS",T()).addPress(),new f("SWIVEL",T()).addSwivel(),new f("PULL",T()).addPull(),new f("TAP, PAN, PINCH, SWIPE, and ROTATE\n(desktop: CTRL to SWIVEL and PULL)",T()).addTap().addPan({muteKey:"ctrlKey"}).addPinch().addRotate().addSwipe().addSwivel({enableKey:"ctrlKey"}).addPull({enableKey:"ctrlKey"}),new f("DOUBLE TAP",T()).addTap({numInputs:2}),new f("FIVE TAPS",T()).addTap({maxDelay:1e3,numInputs:5}),new f("SLOW TAP",T()).addTap({minDelay:300,maxDelay:1e3}),new f("MULTI PRESS",T()).addPress().addPress({minInputs:2}).addPress({minInputs:3}).addPress({minInputs:4}).addPress({minInputs:5});
},{"westures":"094L"}]},{},["x5xg"], null)
//# sourceMappingURL=sample.js.map