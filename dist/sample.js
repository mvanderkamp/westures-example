parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pI8B":[function(require,module,exports) {
"use strict";let e=0;class t{constructor(n,s,r,i={}){if("string"!=typeof n)throw new TypeError("Gestures require a string type / name");this.type=n,this.id=`gesture-${this.type}-${e++}`,this.element=s,this.handler=r,this.options={...t.DEFAULTS,...i}}isEnabled(e){const t=e.active.length,n=e.event,{enableKeys:s,disableKeys:r,minInputs:i,maxInputs:l}=this.options;return i<=t&&l>=t&&(0===s.length||s.some(e=>n[e]))&&!r.some(e=>n[e])}start(){return null}move(){return null}end(){return null}cancel(){return null}evaluateHook(e,t){const n=this[e](t);n&&this.recognize(e,t,n)}recognize(e,t,n){this.handler({centroid:t.centroid,event:t.event,phase:e,type:this.type,target:this.element,...n})}}t.DEFAULTS=Object.freeze({enableKeys:[],disableKeys:[],minInputs:1,maxInputs:Number.MAX_VALUE}),module.exports=t;
},{}],"pxye":[function(require,module,exports) {
"use strict";class t{constructor(t=0,e=0){this.x=t,this.y=e}angleTo(t){return Math.atan2(t.y-this.y,t.x-this.x)}averageDistanceTo(t){return this.totalDistanceTo(t)/t.length}clone(){return new t(this.x,this.y)}distanceTo(t){return Math.hypot(t.x-this.x,t.y-this.y)}minus(e){return new t(this.x-e.x,this.y-e.y)}plus(e){return new t(this.x+e.x,this.y+e.y)}totalDistanceTo(t){return t.reduce((t,e)=>t+this.distanceTo(e),0)}static centroid(e=[]){if(0===e.length)return null;const s=t.sum(e);return s.x/=e.length,s.y/=e.length,s}static sum(e=[]){return e.reduce((t,e)=>(t.x+=e.x,t.y+=e.y,t),new t(0,0))}}module.exports=t;
},{}],"IC3w":[function(require,module,exports) {
"use strict";const e=Object.freeze(["blur","pointercancel","touchcancel"]),t=Object.freeze(["keydown","keyup"]),o=Object.freeze(["mousedown","mousemove","mouseup"]),c=Object.freeze(["pointerdown","pointermove","pointerup"]),r=Object.freeze(["touchend","touchmove","touchstart"]),n=Object.freeze(["altKey","ctrlKey","metaKey","shiftKey"]),u=Object.freeze(["Alt","Control","Meta","Shift"]),E="cancel",m="end",p="move",s="start",S=Object.freeze({blur:E,pointercancel:E,touchcancel:E,mouseup:m,pointerup:m,touchend:m,mousemove:p,pointermove:p,touchmove:p,mousedown:s,pointerdown:s,touchstart:s});module.exports={CANCEL_EVENTS:e,KEYBOARD_EVENTS:t,MOUSE_EVENTS:o,POINTER_EVENTS:c,TOUCH_EVENTS:r,STATE_KEYS:n,STATE_KEY_STRINGS:u,CANCEL:E,END:m,MOVE:p,START:s,PHASE:S};
},{}],"fefs":[function(require,module,exports) {
"use strict";const t=require("./Point2D.js"),{PHASE:e}=require("./constants.js");function n(t,e){return t.changedTouches?Array.from(t.changedTouches).find(t=>t.identifier===e):t}class s{constructor(s,i){const{clientX:c,clientY:o}=n(s,i);this.event=s,this.type=e[s.type],this.time=Date.now(),this.point=new t(c,o)}}module.exports=s;
},{"./Point2D.js":"pxye","./constants.js":"IC3w"}],"kMi9":[function(require,module,exports) {
"use strict";const t=2*Math.PI,e=-Math.PI;function n(n,o){let r=n-o;return r<e?r+=t:r>Math.PI&&(r-=t),r}function o(t){if("function"==typeof t.composedPath)return t.composedPath();const e=[];for(let n=t.target;n!==document;n=n.parentNode)e.push(n);return e.push(document),e.push(window),e}function r(t,e){const n=new Set;return t.forEach(t=>{e(t)&&n.add(t)}),n}function u(t,e){return r(t,t=>!e.has(t))}module.exports=Object.freeze({angularDifference:n,getPropagationPath:o,setDifference:u,setFilter:r});
},{}],"Nqrp":[function(require,module,exports) {
"use strict";const t=require("./PointerData.js"),{getPropagationPath:i}=require("./utils.js");class e{constructor(e,r){const s=new t(e,r);this.initialElements=new WeakSet(i(e)),this.initial=s,this.current=s,this.previous=s,this.identifier=r}get phase(){return this.current.type}get startTime(){return this.initial.time}totalDistance(){return this.initial.point.distanceTo(this.current.point)}update(i){this.previous=this.current,this.current=new t(i,this.identifier)}}module.exports=e;
},{"./PointerData.js":"fefs","./utils.js":"kMi9"}],"Gdbh":[function(require,module,exports) {
"use strict";const{CANCEL:t,END:e,MOVE:s,PHASE:i,START:n}=require("./constants.js"),u=require("./Input.js"),r=require("./Point2D.js"),a=Object.freeze({inputs:Symbol.for("inputs")}),h={TouchEvent:function(t){Array.from(t.changedTouches).forEach(e=>{this.updateInput(t,e.identifier)})},PointerEvent:function(t){this.updateInput(t,t.pointerId)},MouseEvent:function(t){0===t.button&&this.updateInput(t,t.button)}};class p{constructor(t){this.element=t,this[a.inputs]=new Map,this.inputs=[],this.active=[],this.activePoints=[],this.centroid={},this.event=null}clearEndedInputs(){this[a.inputs].forEach((t,e)=>{"end"===t.phase&&this[a.inputs].delete(e)})}getInputsInPhase(t){return this.inputs.filter(e=>e.phase===t)}getInputsNotInPhase(t){return this.inputs.filter(e=>e.phase!==t)}hasNoInputs(){return 0===this[a.inputs].size}updateInput(r,h){switch(i[r.type]){case n:this[a.inputs].set(h,new u(r,h));try{this.element.setPointerCapture(h)}catch(p){}break;case e:try{this.element.releasePointerCapture(h)}catch(p){}case t:case s:this[a.inputs].has(h)&&this[a.inputs].get(h).update(r);break;default:console.warn(`Unrecognized event type: ${r.type}`)}}updateAllInputs(t){h[t.constructor.name].call(this,t),this.updateFields(t)}updateFields(t){this.inputs=Array.from(this[a.inputs].values()),this.active=this.getInputsNotInPhase("end"),this.activePoints=this.active.map(t=>t.current.point),this.centroid=r.centroid(this.activePoints),this.event=t}}module.exports=p;
},{"./constants.js":"IC3w","./Input.js":"Nqrp","./Point2D.js":"pxye"}],"SYCq":[function(require,module,exports) {
"use strict";const e=require("./State.js"),{CANCEL_EVENTS:t,KEYBOARD_EVENTS:s,MOUSE_EVENTS:i,POINTER_EVENTS:a,TOUCH_EVENTS:r,STATE_KEY_STRINGS:n,PHASE:u,CANCEL:h,END:c,START:o}=require("./constants.js"),{setDifference:v,setFilter:l}=require("./utils.js");class E{constructor(t,s={}){const i={...E.DEFAULTS,...s};this.gestures=new Set,this.activeGestures=new Set,this.potentialGestures=new Set,this.element=t,this.capture=i.capture,this.preventDefault=i.preventDefault,this.state=new e(this.element),this.activate()}activate(){let e=[];e=window.TouchEvent||window.MouseEvent?i.concat(r):a;const n=this.arbitrate.bind(this);e.forEach(e=>{this.element.addEventListener(e,n,{capture:this.capture,once:!1,passive:!1})});const u=this.cancel.bind(this);t.forEach(e=>{window.addEventListener(e,u)});const h=this.handleKeyboardEvent.bind(this);s.forEach(e=>{window.addEventListener(e,h)})}cancel(t){t.preventDefault(),this.state.inputs.forEach(e=>{e.update(t)}),this.activeGestures.forEach(e=>{e.evaluateHook(h,this.state)}),this.state=new e(this.element),this.resetActiveGestures()}handleKeyboardEvent(e){if(n.indexOf(e.key)>=0){this.state.event=e;const t=this.activeGestures;this.setActiveGestures(),v(t,this.activeGestures).forEach(e=>{e.evaluateHook(c,this.state)}),v(this.activeGestures,t).forEach(e=>{e.evaluateHook(o,this.state)})}}resetActiveGestures(){this.potentialGestures=new Set,this.activeGestures=new Set}setActiveGestures(){this.activeGestures=l(this.potentialGestures,e=>e.isEnabled(this.state))}setPotentialGestures(){const e=this.state.inputs[0];this.potentialGestures=l(this.gestures,t=>e.initialElements.has(t.element))}updateActiveGestures(e,t){u[e.type]===o&&(t&&this.setPotentialGestures(),this.setActiveGestures())}pruneActiveGestures(e){u[e.type]===c&&(this.state.hasNoInputs()?this.resetActiveGestures():this.setActiveGestures())}arbitrate(e){const t=this.state.hasNoInputs();this.state.updateAllInputs(e),this.updateActiveGestures(e,t),this.activeGestures.size>0&&(this.preventDefault&&e.preventDefault(),this.activeGestures.forEach(t=>{t.evaluateHook(u[e.type],this.state)})),this.state.clearEndedInputs(),this.pruneActiveGestures(e)}addGesture(e){this.gestures.add(e)}removeGesture(e){this.gestures.delete(e),this.potentialGestures.delete(e),this.activeGestures.delete(e)}getGesturesByElement(e){return l(this.gestures,t=>t.element===e)}removeGesturesByElement(e){this.getGesturesByElement(e).forEach(e=>this.removeGesture(e))}}E.DEFAULTS=Object.freeze({capture:!1,preventDefault:!0}),module.exports=E;
},{"./State.js":"Gdbh","./constants.js":"IC3w","./utils.js":"kMi9"}],"W9pc":[function(require,module,exports) {
"use strict";const t=Symbol("cascade"),i=Symbol("smooth");function e(t){if(t)try{return window.matchMedia("(pointer: coarse)").matches}catch(i){return!0}return!1}class s{constructor(n={}){const r={...s.DEFAULTS,...n};this.next=null,e(r.applySmoothing)?this.next=this[i].bind(this):this.next=(t=>t),this.identity=r.identity,this[t]=this.identity}restart(){this[t]=this.identity}[i](i){const e=this.average(this[t],i);return this[t]=e,e}average(t,i){return(t+i)/2}}s.DEFAULTS=Object.freeze({applySmoothing:!0,identity:0}),module.exports=s;
},{}],"kWxi":[function(require,module,exports) {
"use strict";const e=require("./src/Gesture.js"),r=require("./src/Input.js"),s=require("./src/Point2D.js"),t=require("./src/PointerData.js"),i=require("./src/Region.js"),u=require("./src/Smoothable.js"),o=require("./src/State.js"),c=require("./src/constants.js"),n=require("./src/utils.js");module.exports={Gesture:e,Input:r,Point2D:s,PointerData:t,Region:i,Smoothable:u,State:o,...c,...n};
},{"./src/Gesture.js":"pI8B","./src/Input.js":"Nqrp","./src/Point2D.js":"pxye","./src/PointerData.js":"fefs","./src/Region.js":"SYCq","./src/Smoothable.js":"W9pc","./src/State.js":"Gdbh","./src/constants.js":"IC3w","./src/utils.js":"kMi9"}],"ZpRJ":[function(require,module,exports) {
"use strict";const{Gesture:t,Point2D:e,Smoothable:s}=require("westures-core");class r extends t{constructor(t,r,i={}){super("pan",t,r,i),this.previous=null,this.outgoing=new s({...i,identity:new e}),this.outgoing.average=((t,s)=>e.centroid([t,s]))}restart(t){this.previous=t.centroid,this.outgoing.restart()}start(t){this.restart(t)}move(t){const e=t.centroid.minus(this.previous);return this.previous=t.centroid,{translation:this.outgoing.next(e)}}end(t){this.restart(t)}cancel(t){this.restart(t)}}module.exports=r;
},{"westures-core":"kWxi"}],"vi7O":[function(require,module,exports) {
"use strict";const{Gesture:t,Smoothable:e}=require("westures-core");class s extends t{constructor(t,i,r={}){super("pinch",t,i,r={...s.DEFAULTS,...r}),this.previous=0,this.outgoing=new e({...r,identity:1})}restart(t){this.previous=t.centroid.averageDistanceTo(t.activePoints),this.outgoing.restart()}start(t){this.restart(t)}move(t){const e=t.centroid.averageDistanceTo(t.activePoints),s=e/this.previous;return this.previous=e,{distance:e,scale:this.outgoing.next(s)}}end(t){this.restart(t)}cancel(t){this.restart(t)}}s.DEFAULTS=Object.freeze({minInputs:2}),module.exports=s;
},{"westures-core":"kWxi"}],"N4qL":[function(require,module,exports) {
"use strict";const{Gesture:e,Point2D:t,MOVE:i}=require("westures-core");class s extends e{constructor(e,t,i={}){super("press",e,t,i={...s.DEFAULTS,...i}),this.delay=i.delay,this.tolerance=i.tolerance}start(e){const s=e.centroid,r=new Set(e.active.map(e=>e.identifier));setTimeout(()=>{const n=e.active.filter(e=>r.has(e.identifier)),c=t.centroid(n.map(e=>e.current.point)),o=s.distanceTo(c);o<=this.tolerance&&n.length===r.size&&this.recognize(i,e,{centroid:c,distance:o,initial:s})},this.delay)}}s.DEFAULTS=Object.freeze({delay:1e3,tolerance:10}),module.exports=s;
},{"westures-core":"kWxi"}],"fj0l":[function(require,module,exports) {
"use strict";const{Gesture:t,Point2D:e,Smoothable:i}=require("westures-core");function s(t){const i=t.getBoundingClientRect();return new e(i.left+i.width/2,i.top+i.height/2)}class o extends t{constructor(t="pivotable",e,s,r={}){super(t,e,s,r),r={...o.DEFAULTS,...r},this.deadzoneRadius=r.deadzoneRadius,this.dynamicPivot=r.dynamicPivot,this.pivot=null,this.previous=0,this.outgoing=new i(r)}updatePrevious(){throw"Gestures which extend Pivotable must implement updatePrevious()"}restart(t){this.dynamicPivot?(this.pivot=t.centroid,this.previous=0):(this.pivot=s(this.element),this.updatePrevious(t)),this.outgoing.restart()}start(t){this.restart(t)}end(t){t.active.length>0?this.restart(t):this.outgoing.restart()}cancel(){this.outgoing.restart()}}o.DEFAULTS=Object.freeze({deadzoneRadius:15,dynamicPivot:!1}),o.getClientCenter=s,module.exports=o;
},{"westures-core":"kWxi"}],"fJ4H":[function(require,module,exports) {
"use strict";const{Smoothable:e}=require("westures-core"),t=require("./Pivotable.js");class s extends t{constructor(t,s,i={}){super("pull",t,s,i),this.outgoing=new e({...i,identity:1})}updatePrevious(e){this.previous=this.pivot.distanceTo(e.centroid)}move(e){const t=this.pivot,s=t.distanceTo(e.centroid),i=s/this.previous;let o=null;return s>this.deadzoneRadius&&this.previous>this.deadzoneRadius&&(o={distance:s,scale:this.outgoing.next(i),pivot:t}),this.previous=s,o}}module.exports=s;
},{"westures-core":"kWxi","./Pivotable.js":"fj0l"}],"HIRI":[function(require,module,exports) {
"use strict";const{angularDifference:t,Gesture:e,Smoothable:r}=require("westures-core");class s extends e{constructor(t,e,n={}){super("rotate",t,e,n={...s.DEFAULTS,...n}),this.previousAngles=[],this.outgoing=new r(n)}anglesFromCentroid(t){return t.active.map(e=>t.centroid.angleTo(e.current.point))}getRotation(e){const r=this.anglesFromCentroid(e),s=r.reduce((e,r,s)=>e+t(r,this.previousAngles[s]),0);return this.previousAngles=r,s/e.active.length}restart(t){this.previousAngles=this.anglesFromCentroid(t),this.outgoing.restart()}start(t){this.restart(t)}move(t){const e=this.getRotation(t);return e?{rotation:this.outgoing.next(e)}:null}end(t){this.restart(t)}cancel(){this.outgoing.restart()}}s.DEFAULTS=Object.freeze({minInputs:2}),module.exports=s;
},{"westures-core":"kWxi"}],"sOMk":[function(require,module,exports) {
"use strict";const{Gesture:t}=require("westures-core"),e=7,s=300;function i(t,e){const s=t[e].point;let i=0,n=0;for(let o=0;o<e;++o){const e=t[o].point.angleTo(s);i+=Math.sin(e),n+=Math.cos(e)}return i/=e,n/=e,Math.atan2(i,n)}function n(t,e){return e.point.distanceTo(t.point)/(e.time-t.time+1)}function o(t,e){let s=0;for(let i=0;i<e;++i){const e=n(t[i],t[i+1]);e>s&&(s=e)}return s}class r extends t{constructor(t,e,s={}){super("swipe",t,e,s),this.moves=[],this.saved=null}restart(){this.moves=[],this.saved=null}start(){this.restart()}move(t){this.moves.push({time:Date.now(),point:t.centroid}),this.moves.length>e&&this.moves.splice(0,this.moves.length-e)}end(t){const e=this.getResult();return this.moves=[],t.active.length>0?(this.saved=e,null):(this.saved=null,this.validate(e))}cancel(){this.restart()}getResult(){if(this.moves.length<e)return this.saved;const t=e-1,{point:s,time:n}=this.moves[t];return{point:s,velocity:o(this.moves,t),direction:i(this.moves,t),time:n,centroid:s}}validate(t){return null==t?null:Date.now()-t.time>s?null:t}}module.exports=r;
},{"westures-core":"kWxi"}],"IJsJ":[function(require,module,exports) {
"use strict";const{angularDifference:e,Smoothable:t}=require("westures-core"),o=require("./Pivotable.js");class i extends o{constructor(e,o,i={}){super("swivel",e,o,i),this.outgoing=new t(i)}updatePrevious(e){this.previous=this.pivot.angleTo(e.centroid)}move(t){const o=this.pivot,i=o.angleTo(t.centroid),s=e(i,this.previous);let r=null;return o.distanceTo(t.centroid)>this.deadzoneRadius&&(r={rotation:this.outgoing.next(s),pivot:o}),this.previous=i,r}}module.exports=i;
},{"westures-core":"kWxi","./Pivotable.js":"fj0l"}],"UpHq":[function(require,module,exports) {
"use strict";const{Gesture:t,Point2D:e}=require("westures-core");class s extends t{constructor(t,e,a={}){super("tap",t,e,a={...s.DEFAULTS,...a}),this.minDelay=a.minDelay,this.maxDelay=a.maxDelay,this.numTaps=a.numTaps,this.tolerance=a.tolerance,this.taps=[]}end(t){const s=Date.now();if(this.taps=this.taps.concat(t.getInputsInPhase("end")).filter(t=>{const e=s-t.startTime;return e<=this.maxDelay&&e>=this.minDelay}),this.taps.length!==this.numTaps||this.taps.some(t=>t.totalDistance()>this.tolerance))return null;const a=e.centroid(this.taps.map(t=>t.current.point));return this.taps=[],{centroid:a,...a}}}s.DEFAULTS=Object.freeze({minDelay:0,maxDelay:300,numTaps:1,tolerance:10}),module.exports=s;
},{"westures-core":"kWxi"}],"dvoR":[function(require,module,exports) {
"use strict";const{Gesture:t}=require("westures-core");class e extends t{constructor(t,s,a={}){super("track",t,s,a={...e.DEFAULTS,...a}),this.trackStart=a.phases.includes("start"),this.trackMove=a.phases.includes("move"),this.trackEnd=a.phases.includes("end"),this.trackCancel=a.phases.includes("cancel")}data({activePoints:t}){return{active:t}}start(t){return this.trackStart?this.data(t):null}move(t){return this.trackMove?this.data(t):null}end(t){return this.trackEnd?this.data(t):null}cancel(t){return this.trackCancel?this.data(t):null}}e.DEFAULTS=Object.freeze({phases:Object.freeze([])}),module.exports=e;
},{"westures-core":"kWxi"}],"L7Jq":[function(require,module,exports) {
"use strict";const r=require("westures-core"),e=require("./src/Pan.js"),s=require("./src/Pinch.js"),i=require("./src/Press.js"),c=require("./src/Pull.js"),u=require("./src/Rotate.js"),q=require("./src/Swipe.js"),j=require("./src/Swivel.js"),t=require("./src/Tap.js"),a=require("./src/Track.js");module.exports={Pan:e,Pinch:s,Press:i,Pull:c,Rotate:u,Swipe:q,Swivel:j,Tap:t,Track:a,...r};
},{"westures-core":"kWxi","./src/Pan.js":"ZpRJ","./src/Pinch.js":"vi7O","./src/Press.js":"N4qL","./src/Pull.js":"fJ4H","./src/Rotate.js":"HIRI","./src/Swipe.js":"sOMk","./src/Swivel.js":"IJsJ","./src/Tap.js":"UpHq","./src/Track.js":"dvoR"}],"x5xg":[function(require,module,exports) {
"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function t(t){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?e(Object(i),!0).forEach(function(e){n(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var s=require("westures"),o=new s.Region(document.body),c=document.querySelector("#container"),l=1e3/60,u=.95,d=7,h=.1,v=7;function p(){return Math.floor(256*Math.random())}function y(e){return e*=u,Math.abs(e)<h?0:e}for(var f=function(){function e(t,n){a(this,e),this.element=document.createElement("div"),this.element.style.backgroundColor=n,this.label=document.createElement("h1"),this.label.innerText=t,this.element.appendChild(this.label),c.appendChild(this.element),this.rotation=0,this.scale=1,this.x=0,this.y=0,this.velocityX=0,this.velocityY=0,this.animate=!1,this.update_fn=this.update.bind(this),this.swipe_interval=null,this.swipe_fn=this.swipeAnimation.bind(this),this.setupTracking()}return r(e,[{key:"setupTracking",value:function(){var e=this;o.addGesture(new s.Track(this.element,function(t){switch(t.phase){case"start":e.animate=!0,window.requestAnimationFrame(e.update_fn),clearInterval(e.swipe_interval);break;case"end":0==t.active.length&&(e.animate=!1)}},{phases:["start","end"]}))}},{key:"randomBackground",value:function(){var e=p(),t=p(),n=p();this.element.style.backgroundColor="rgb(".concat(e,", ").concat(t,", ").concat(n,")")}},{key:"addTap",value:function(e){var t=this;return o.addGesture(new s.Tap(this.element,function(){t.randomBackground()},e)),this}},{key:"addPress",value:function(e){var t=this;return o.addGesture(new s.Press(this.element,function(){t.randomBackground()},e)),this}},{key:"addRotate",value:function(e){var t=this;return o.addGesture(new s.Rotate(this.element,function(e){t.rotation+=e.rotation},e)),this}},{key:"addPan",value:function(e){var t=this;return o.addGesture(new s.Pan(this.element,function(e){t.x+=e.translation.x,t.y+=e.translation.y},e)),this}},{key:"addSwipe",value:function(e){var t=this;return o.addGesture(new s.Swipe(this.element,function(e){var n=e.velocity>v?v:e.velocity;t.velocityX=n*Math.cos(e.direction)*d,t.velocityY=n*Math.sin(e.direction)*d,t.swipe_interval=setInterval(t.swipe_fn,l)},e)),this}},{key:"addSwivel",value:function(e){var n=this;return o.addGesture(new s.Swivel(this.element,function(e){n.rotation+=e.rotation},t({pivotCenter:this.element},e))),this}},{key:"addPinch",value:function(e){var t=this;return o.addGesture(new s.Pinch(this.element,function(e){t.scale*=e.scale},e)),this}},{key:"addPull",value:function(e){var n=this;return o.addGesture(new s.Pull(this.element,function(e){n.scale*=e.scale},t({pivotCenter:this.element},e))),this}},{key:"update",value:function(){var e="rotate(".concat(this.rotation,"rad) "),t="translate(".concat(this.x,"px, ").concat(this.y,"px) "),n="scale(".concat(this.scale,") ");this.element.style.transform=t+e+n,this.animate&&window.requestAnimationFrame(this.update_fn)}},{key:"swipeAnimation",value:function(){this.x+=this.velocityX,this.y+=this.velocityY,this.velocityX=y(this.velocityX),this.velocityY=y(this.velocityY),0===this.velocityY&&0===this.velocityX&&clearInterval(this.swipe_interval),window.requestAnimationFrame(this.update_fn)}}]),e}(),w=12,m=Math.floor(360/w),P=[],b=0;b<w;b++){var k=m*b;P.push("hsl(".concat(k,", 100%, 75%)"))}var T=0;function O(){return P[T++]}new f("TAP",O()).addTap(),new f("PAN",O()).addPan(),new f("PINCH",O()).addPinch(),new f("ROTATE",O()).addRotate(),new f("SWIPE",O()).addSwipe(),new f("PRESS",O()).addPress(),new f("SWIVEL",O()).addSwivel(),new f("PULL",O()).addPull(),new f("TAP, PAN, PINCH, SWIPE, and ROTATE\n(desktop: CTRL to SWIVEL and PULL)",O()).addTap().addPan({disableKeys:["ctrlKey"]}).addPinch().addRotate().addSwipe().addSwivel({enableKeys:["ctrlKey"]}).addPull({enableKeys:["ctrlKey"]}),new f("DOUBLE TAP",O()).addTap({numTaps:2}),new f("FIVE TAPS",O()).addTap({maxDelay:1e3,numTaps:5}),new f("SLOW TAP",O()).addTap({minDelay:300,maxDelay:1e3});
},{"westures":"L7Jq"}]},{},["x5xg"], null)
//# sourceMappingURL=sample.js.map