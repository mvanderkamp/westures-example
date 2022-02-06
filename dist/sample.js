function $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function $79c852e11afd525c$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $79c852e11afd525c$export$2e2bcd8739ae039(Constructor, protoProps, staticProps) {
    if (protoProps) $79c852e11afd525c$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $79c852e11afd525c$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}

function $b88b02e3f1122e41$var$setPrototypeOf(o1, p1) {
    $b88b02e3f1122e41$var$setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $b88b02e3f1122e41$var$setPrototypeOf(o1, p1);
}
function $b88b02e3f1122e41$export$2e2bcd8739ae039(o, p) {
    return $b88b02e3f1122e41$var$setPrototypeOf(o, p);
}


function $71d947154e31347b$export$2e2bcd8739ae039(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $b88b02e3f1122e41$export$2e2bcd8739ae039(subClass, superClass);
}

function $69f4cbe07ca22768$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}


function $057fc04a515b0dc4$export$2e2bcd8739ae039(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            $69f4cbe07ca22768$export$2e2bcd8739ae039(target, key, source[key]);
        });
    }
    return target;
}

function $2d13ec732607ea5c$export$2e2bcd8739ae039() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}


function $0c7d3b8d970d5839$var$getPrototypeOf(o1) {
    $0c7d3b8d970d5839$var$getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $0c7d3b8d970d5839$var$getPrototypeOf(o1);
}
function $0c7d3b8d970d5839$export$2e2bcd8739ae039(o) {
    return $0c7d3b8d970d5839$var$getPrototypeOf(o);
}


function $8a6741293c023ab2$export$2e2bcd8739ae039(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}


function $1670d2aa9659ac9b$export$2e2bcd8739ae039(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}


function $279074901fa73bd3$export$2e2bcd8739ae039(self, call) {
    if (call && ($1670d2aa9659ac9b$export$2e2bcd8739ae039(call) === "object" || typeof call === "function")) return call;
    return $8a6741293c023ab2$export$2e2bcd8739ae039(self);
}


function $c8df0939769db74d$export$2e2bcd8739ae039(Derived) {
    var hasNativeReflectConstruct = $2d13ec732607ea5c$export$2e2bcd8739ae039();
    return function _createSuperInternal() {
        var Super = $0c7d3b8d970d5839$export$2e2bcd8739ae039(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = $0c7d3b8d970d5839$export$2e2bcd8739ae039(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return $279074901fa73bd3$export$2e2bcd8739ae039(this, result);
    };
}



'use strict';
var $ba0181cb818a54fd$exports = {};

/**
 * The API interface for Westures. Defines a number of gestures on top of the
 * engine provided by {@link
 * https://mvanderkamp.github.io/westures-core/index.html|westures-core}.
 *
 * @namespace westures
 */ 'use strict';
/**
 * The global API interface for westures-core. Exposes all classes, constants,
 * and routines used by the package. Use responsibly.
 *
 * @namespace westures-core
 */ 'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
/*
 * Contains the Pan class.
 */ 'use strict';
/*
 * Contains the abstract Pinch class.
 */ 'use strict';
/*
 * Contains the Press class.
 */ 'use strict';
/*
 * Contains the abstract Pull class.
 */ 'use strict';
/*
 * Contains the Rotate class.
 */ 'use strict';
/*
 * Contains the Rotate class.
 */ 'use strict';
/*
 * Contains the Swipe class.
 */ 'use strict';
/*
 * Contains the Rotate class.
 */ 'use strict';
/*
 * Contains the Tap class.
 */ 'use strict';
/*
 * Contains the Track class.
 */ 'use strict';
var $ba0181cb818a54fd$var$$17807945cdde5d67$exports = {
};
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$de0d6a332419bf3c$exports = {
};
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$de0d6a332419bf3c$var$g_id = 0;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$de0d6a332419bf3c$var$Gesture = /**
 * The Gesture class that all gestures inherit from. A custom gesture class will
 * need to override some or all of the four phase "hooks": start, move, end, and
 * cancel.
 *
 * @memberof westures-core
 *
 * @param {string} type - The name of the gesture.
 * @param {Element} element - The element to which to associate the gesture.
 * @param {Function} handler - The function handler to execute when a gesture
 *    is recognized on the associated element.
 * @param {object} [options] - Generic gesture options
 * @param {westures-core.STATE_KEYS[]} [options.enableKeys=[]] - List of keys
 * which will enable the gesture. The gesture will not be recognized unless one
 * of these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the enable key is always down.
 * @param {westures-core.STATE_KEYS[]} [options.disableKeys=[]] - List of keys
 * which will disable the gesture. The gesture will not be recognized if one of
 * these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the disable key is never down.
 * @param {number} [options.minInputs=1] - The minimum number of pointers that
 * must be active for the gesture to be recognized. Uses >=.
 * @param {number} [options.maxInputs=Number.MAX_VALUE] - The maximum number of
 * pointers that may be active for the gesture to be recognized. Uses <=.
 */ /*#__PURE__*/ function() {
    function $ba0181cb818a54fd$var$$17807945cdde5d67$var$$de0d6a332419bf3c$var$Gesture(type, element, handler) {
        var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        };
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$17807945cdde5d67$var$$de0d6a332419bf3c$var$Gesture);
        if (typeof type !== 'string') throw new TypeError('Gestures require a string type / name');
        /**
     * The name of the gesture. (e.g. 'pan' or 'tap' or 'pinch').
     *
     * @type {string}
     */ this.type = type;
        /**
     * The unique identifier for each gesture. This allows for distinctions
     * across instances of Gestures that are created on the fly (e.g.
     * gesture-tap-1, gesture-tap-2).
     *
     * @type {string}
     */ this.id = "gesture-".concat(this.type, "-").concat($ba0181cb818a54fd$var$$17807945cdde5d67$var$$de0d6a332419bf3c$var$g_id++);
        /**
     * The element to which to associate the gesture.
     *
     * @type {Element}
     */ this.element = element;
        /**
     * The function handler to execute when the gesture is recognized on the
     * associated element.
     *
     * @type {Function}
     */ this.handler = handler;
        /**
     * The options. Can usually be adjusted live, though be careful doing this.
     *
     * @type {object}
     */ this.options = $057fc04a515b0dc4$export$2e2bcd8739ae039({
        }, $ba0181cb818a54fd$var$$17807945cdde5d67$var$$de0d6a332419bf3c$var$Gesture.DEFAULTS, options);
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$17807945cdde5d67$var$$de0d6a332419bf3c$var$Gesture, [
        {
            /**
   * Determines whether this gesture is enabled.
   *
   * @param {westures-core.State} state - The input state object of the current
   * region.
   *
   * @return {boolean} true if enabled, false otherwise.
   */ key: "isEnabled",
            value: function isEnabled(state) {
                var count = state.active.length;
                var event = state.event;
                var _options = this.options, enableKeys = _options.enableKeys, disableKeys = _options.disableKeys, minInputs = _options.minInputs, maxInputs = _options.maxInputs;
                return minInputs <= count && maxInputs >= count && (enableKeys.length === 0 || enableKeys.some(function(k) {
                    return event[k];
                })) && !disableKeys.some(function(k) {
                    return event[k];
                });
            }
        },
        {
            /**
   * Event hook for the start phase of a gesture.
   *
   * @param {westures-core.State} state - The input state object of the current
   * region.
   *
   * @return {?Object} Gesture is considered recognized if an Object is
   *    returned.
   */ key: "start",
            value: function start() {
                return null;
            }
        },
        {
            /**
   * Event hook for the move phase of a gesture.
   *
   * @param {westures-core.State} state - The input state object of the current
   * region.
   *
   * @return {?Object} Gesture is considered recognized if an Object is
   *    returned.
   */ key: "move",
            value: function move() {
                return null;
            }
        },
        {
            /**
   * Event hook for the end phase of a gesture.
   *
   * @param {westures-core.State} state - The input state object of the current
   * region.
   *
   * @return {?Object} Gesture is considered recognized if an Object is
   *    returned.
   */ key: "end",
            value: function end() {
                return null;
            }
        },
        {
            /**
   * Event hook for when an input is cancelled.
   *
   * @param {westures-core.State} state - The input state object of the current
   * region.
   *
   * @return {?Object} Gesture is considered recognized if an Object is
   *    returned.
   */ key: "cancel",
            value: function cancel() {
                return null;
            }
        },
        {
            /**
   * Evalutes the given gesture hook, and dispatches any data that is produced
   * by calling [recognize]{@link westures-core.Gesture#recognize}.
   *
   * @param {string} hook - Must be one of 'start', 'move', 'end', or 'cancel'.
   * @param {westures-core.State} state - The current State instance.
   */ key: "evaluateHook",
            value: function evaluateHook(hook, state) {
                var data = this[hook](state);
                if (data) this.recognize(hook, state, data);
            }
        },
        {
            /**
   * Recognize a Gesture by calling the handler. Standardizes the way the
   * handler is called so that classes extending Gesture can circumvent the
   * evaluateHook approach but still provide results that have a common format.
   *
   * Note that the properties in the "data" object will receive priority when
   * constructing the results. This can be used to override standard results
   * such as the phase or the centroid.
   *
   * @param {string} hook - Must be one of 'start', 'move', 'end', or 'cancel'.
   * @param {westures-core.State} state - current input state.
   * @param {Object} data - Results data specific to the recognized gesture.
   */ key: "recognize",
            value: function recognize(hook, state, data) {
                this.handler($057fc04a515b0dc4$export$2e2bcd8739ae039({
                    centroid: state.centroid,
                    event: state.event,
                    phase: hook,
                    type: this.type,
                    target: this.element
                }, data));
            }
        }
    ]);
    return $ba0181cb818a54fd$var$$17807945cdde5d67$var$$de0d6a332419bf3c$var$Gesture;
}();
$ba0181cb818a54fd$var$$17807945cdde5d67$var$$de0d6a332419bf3c$var$Gesture.DEFAULTS = {
    enableKeys: [],
    disableKeys: [],
    minInputs: 1,
    maxInputs: Number.MAX_VALUE
};
$ba0181cb818a54fd$var$$17807945cdde5d67$var$$de0d6a332419bf3c$exports = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$de0d6a332419bf3c$var$Gesture;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$e2125e2e71e37a0c$exports = {
};
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$0ca7bfe1c074e8ca$exports = {
};
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$6c3676f10a43b740$exports = {
};
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$6c3676f10a43b740$var$Point2D = /**
 * The Point2D class stores and operates on 2-dimensional points, represented as
 * x and y coordinates.
 *
 * @memberof westures-core
 *
 * @param {number} [ x=0 ] - The x coordinate of the point.
 * @param {number} [ y=0 ] - The y coordinate of the point.
 */ /*#__PURE__*/ function() {
    function $ba0181cb818a54fd$var$$17807945cdde5d67$var$$6c3676f10a43b740$var$Point2D() {
        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$17807945cdde5d67$var$$6c3676f10a43b740$var$Point2D);
        /**
     * The x coordinate of the point.
     *
     * @type {number}
     */ this.x = x;
        /**
     * The y coordinate of the point.
     *
     * @type {number}
     */ this.y = y;
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$17807945cdde5d67$var$$6c3676f10a43b740$var$Point2D, [
        {
            /**
   * Calculates the angle between this point and the given point.
   *
   * @param {!westures-core.Point2D} point - Projected point for calculating the
   * angle.
   *
   * @return {number} Radians along the unit circle where the projected
   * point lies.
   */ key: "angleTo",
            value: function angleTo(point) {
                return Math.atan2(point.y - this.y, point.x - this.x);
            }
        },
        {
            /**
   * Determine the angle from the centroid to each of the points.
   *
   * @param {!westures-core.Point2D[]} points - the Point2D objects to calculate
   *    the angles to.
   *
   * @returns {number[]}
   */ key: "anglesTo",
            value: function anglesTo(points) {
                var _this = this;
                return points.map(function(point) {
                    return _this.angleTo(point);
                });
            }
        },
        {
            /**
   * Determine the average distance from this point to the provided array of
   * points.
   *
   * @param {!westures-core.Point2D[]} points - the Point2D objects to calculate
   *    the average distance to.
   *
   * @return {number} The average distance from this point to the provided
   *    points.
   */ key: "averageDistanceTo",
            value: function averageDistanceTo(points) {
                return this.totalDistanceTo(points) / points.length;
            }
        },
        {
            /**
   * Clone this point.
   *
   * @return {westures-core.Point2D} A new Point2D, identical to this point.
   */ key: "clone",
            value: function clone() {
                return new $ba0181cb818a54fd$var$$17807945cdde5d67$var$$6c3676f10a43b740$var$Point2D(this.x, this.y);
            }
        },
        {
            /**
   * Calculates the distance between two points.
   *
   * @param {!westures-core.Point2D} point - Point to which the distance is
   * calculated.
   *
   * @return {number} The distance between the two points, a.k.a. the
   *    hypoteneuse.
   */ key: "distanceTo",
            value: function distanceTo(point) {
                return Math.hypot(point.x - this.x, point.y - this.y);
            }
        },
        {
            /**
   * Subtract the given point from this point.
   *
   * @param {!westures-core.Point2D} point - Point to subtract from this point.
   *
   * @return {westures-core.Point2D} A new Point2D, which is the result of (this
   * - point).
   */ key: "minus",
            value: function minus(point) {
                return new $ba0181cb818a54fd$var$$17807945cdde5d67$var$$6c3676f10a43b740$var$Point2D(this.x - point.x, this.y - point.y);
            }
        },
        {
            /**
   * Return the summation of this point to the given point.
   *
   * @param {!westures-core.Point2D} point - Point to add to this point.
   *
   * @return {westures-core.Point2D} A new Point2D, which is the addition of the
   * two points.
   */ key: "plus",
            value: function plus(point) {
                return new $ba0181cb818a54fd$var$$17807945cdde5d67$var$$6c3676f10a43b740$var$Point2D(this.x + point.x, this.y + point.y);
            }
        },
        {
            /**
   * Calculates the total distance from this point to an array of points.
   *
   * @param {!westures-core.Point2D[]} points - The array of Point2D objects to
   *    calculate the total distance to.
   *
   * @return {number} The total distance from this point to the provided points.
   */ key: "totalDistanceTo",
            value: function totalDistanceTo(points) {
                var _this = this;
                return points.reduce(function(d, p) {
                    return d + _this.distanceTo(p);
                }, 0);
            }
        }
    ], [
        {
            key: "centroid",
            value: /**
   * Calculates the centroid of a list of points.
   *
   * @param {westures-core.Point2D[]} points - The array of Point2D objects for
   * which to calculate the centroid.
   *
   * @return {westures-core.Point2D} The centroid of the provided points.
   */ function centroid() {
                var points = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                if (points.length === 0) return null;
                var total = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$6c3676f10a43b740$var$Point2D.sum(points);
                total.x /= points.length;
                total.y /= points.length;
                return total;
            }
        },
        {
            key: "sum",
            value: /**
   * Calculates the sum of the given points.
   *
   * @param {westures-core.Point2D[]} points - The Point2D objects to sum up.
   *
   * @return {westures-core.Point2D} A new Point2D representing the sum of the
   * given points.
   */ function sum() {
                var points = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                return points.reduce(function(total, pt) {
                    total.x += pt.x;
                    total.y += pt.y;
                    return total;
                }, new $ba0181cb818a54fd$var$$17807945cdde5d67$var$$6c3676f10a43b740$var$Point2D(0, 0));
            }
        }
    ]);
    return $ba0181cb818a54fd$var$$17807945cdde5d67$var$$6c3676f10a43b740$var$Point2D;
}();
$ba0181cb818a54fd$var$$17807945cdde5d67$var$$6c3676f10a43b740$exports = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$6c3676f10a43b740$var$Point2D;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports = {
};
/**
 * List of events that trigger the cancel phase.
 *
 * @memberof westures-core
 * @type {string[]}
 */ var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$CANCEL_EVENTS = [
    'blur',
    'pointercancel',
    'touchcancel',
    'mouseleave', 
];
/**
 * List of keyboard events that trigger a restart.
 *
 * @memberof westures-core
 * @type {string[]}
 */ var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$KEYBOARD_EVENTS = [
    'keydown',
    'keyup', 
];
/**
 * List of mouse events to listen to.
 *
 * @memberof westures-core
 * @type {string[]}
 */ var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$MOUSE_EVENTS = [
    'mousedown',
    'mousemove',
    'mouseup', 
];
/**
 * List of pointer events to listen to.
 *
 * @memberof westures-core
 * @type {string[]}
 */ var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$POINTER_EVENTS = [
    'pointerdown',
    'pointermove',
    'pointerup', 
];
/**
 * List of touch events to listen to.
 *
 * @memberof westures-core
 * @type {string[]}
 */ var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$TOUCH_EVENTS = [
    'touchend',
    'touchmove',
    'touchstart', 
];
/**
 * List of potentially state-modifying keys.
 * Entries are: ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].
 *
 * @memberof westures-core
 * @type {string[]}
 */ var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$STATE_KEYS = [
    'altKey',
    'ctrlKey',
    'metaKey',
    'shiftKey', 
];
/**
 * List of the 'key' values on KeyboardEvent objects of the potentially
 * state-modifying keys.
 *
 * @memberof westures-core
 * @type {string[]}
 */ var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$STATE_KEY_STRINGS = [
    'Alt',
    'Control',
    'Meta',
    'Shift', 
];
/**
 * The cancel phase.
 *
 * @memberof westures-core
 * @type {string}
 */ var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$CANCEL = 'cancel';
/**
 * The end phase.
 *
 * @memberof westures-core
 * @type {string}
 */ var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$END = 'end';
/**
 * The move phase.
 *
 * @memberof westures-core
 * @type {string}
 */ var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$MOVE = 'move';
/**
 * The start phase.
 *
 * @memberof westures-core
 * @type {string}
 */ var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$START = 'start';
/**
 * The recognized phases.
 *
 * @memberof westures-core
 * @type {list.<string>}
 */ var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$PHASES = [
    $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$START,
    $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$MOVE,
    $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$END,
    $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$CANCEL
];
/**
 * Object that normalizes the names of window events to be either of type start,
 * move, end, or cancel.
 *
 * @memberof westures-core
 * @type {object}
 */ var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$PHASE = {
    blur: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$CANCEL,
    pointercancel: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$CANCEL,
    touchcancel: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$CANCEL,
    mouseup: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$END,
    pointerup: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$END,
    touchend: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$END,
    mousemove: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$MOVE,
    pointermove: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$MOVE,
    touchmove: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$MOVE,
    mousedown: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$START,
    pointerdown: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$START,
    touchstart: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$START
};
$ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports = {
    CANCEL_EVENTS: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$CANCEL_EVENTS,
    KEYBOARD_EVENTS: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$KEYBOARD_EVENTS,
    MOUSE_EVENTS: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$MOUSE_EVENTS,
    POINTER_EVENTS: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$POINTER_EVENTS,
    TOUCH_EVENTS: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$TOUCH_EVENTS,
    STATE_KEYS: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$STATE_KEYS,
    STATE_KEY_STRINGS: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$STATE_KEY_STRINGS,
    CANCEL: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$CANCEL,
    END: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$END,
    MOVE: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$MOVE,
    START: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$START,
    PHASE: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$PHASE,
    PHASES: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$var$PHASES
};
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$0ca7bfe1c074e8ca$require$PHASE = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports.PHASE;
/**
 * @private
 * @inner
 * @memberof westures-core.PointerData
 *
 * @return {Event} The Event object which corresponds to the given identifier.
 *    Contains clientX, clientY values.
 */ function $ba0181cb818a54fd$var$$17807945cdde5d67$var$$0ca7bfe1c074e8ca$var$getEventObject(event, identifier) {
    if (event.changedTouches) return Array.from(event.changedTouches).find(function(touch) {
        return touch.identifier === identifier;
    });
    return event;
}
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$0ca7bfe1c074e8ca$var$PointerData = function $ba0181cb818a54fd$var$$17807945cdde5d67$var$$0ca7bfe1c074e8ca$var$PointerData(event, identifier) {
    $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$17807945cdde5d67$var$$0ca7bfe1c074e8ca$var$PointerData);
    var ref = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$0ca7bfe1c074e8ca$var$getEventObject(event, identifier), clientX = ref.clientX, clientY = ref.clientY;
    /**
     * The original event object.
     *
     * @type {Event}
     */ this.event = event;
    /**
     * The type or 'phase' of this batch of pointer data. 'start' or 'move' or
     * 'end' or 'cancel'
     *
     * @type {string}
     */ this.type = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$0ca7bfe1c074e8ca$require$PHASE[event.type];
    /**
     * The timestamp of the event in milliseconds elapsed since January 1, 1970,
     * 00:00:00 UTC.
     *
     * @type {number}
     */ this.time = Date.now();
    /**
     * The (x,y) coordinate of the event, wrapped in a Point2D.
     *
     * @type {westures-core.Point2D}
     */ this.point = new $ba0181cb818a54fd$var$$17807945cdde5d67$var$$6c3676f10a43b740$exports(clientX, clientY);
};
$ba0181cb818a54fd$var$$17807945cdde5d67$var$$0ca7bfe1c074e8ca$exports = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$0ca7bfe1c074e8ca$var$PointerData;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$exports = {
};
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$var$PI_2 = 2 * Math.PI;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$var$PI_NVE = -Math.PI;
/**
 * Helper function to regulate angular differences, so they don't jump from 0 to
 * 2 * PI or vice versa.
 *
 * @memberof westures-core
 *
 * @param {number} a - Angle in radians.
 * @param {number} b - Angle in radians.

 * @return {number} c, given by: c = a - b such that |c| < PI
 */ function $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$var$angularDifference(a, b) {
    var diff = a - b;
    if (diff < $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$var$PI_NVE) diff += $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$var$PI_2;
    else if (diff > Math.PI) diff -= $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$var$PI_2;
    return diff;
}
/**
 * In case event.composedPath() is not available.
 *
 * @memberof westures-core
 *
 * @param {Event} event
 *
 * @return {Element[]} The elements along the composed path of the event.
 */ function $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$var$getPropagationPath(event) {
    if (typeof event.composedPath === 'function') return event.composedPath();
    var path = [];
    for(var node = event.target; node !== document; node = node.parentNode)path.push(node);
    path.push(document);
    path.push(window);
    return path;
}
/**
 * Performs a set filter operation.
 *
 * @memberof westures-core
 *
 * @param {Set} set - The set to filter.
 * @param {Function} predicate - Function to test elements of 'set'. Receives
 * one argument: the current set element.
 *
 * @return {Set} Set consisting of elements in 'set' for which 'predicate' is
 * true.
 */ function $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$var$setFilter(set, predicate) {
    var result = new Set();
    set.forEach(function(element) {
        if (predicate(element)) result.add(element);
    });
    return result;
}
/**
 * Performs a set difference operation.
 *
 * @memberof westures-core
 *
 * @param {Set} left - Base set.
 * @param {Set} right - Set of elements to remove from 'left'.
 *
 * @return {Set} Set consisting of elements in 'left' that are not in
 * 'right'.
 */ function $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$var$setDifference(left, right) {
    return $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$var$setFilter(left, function(element) {
        return !right.has(element);
    });
}
$ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$exports = {
    angularDifference: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$var$angularDifference,
    getPropagationPath: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$var$getPropagationPath,
    setDifference: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$var$setDifference,
    setFilter: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$var$setFilter
};
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$e2125e2e71e37a0c$require$getPropagationPath = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$exports.getPropagationPath;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$e2125e2e71e37a0c$var$Input = /**
 * Tracks a single input and contains information about the current, previous,
 * and initial events.
 *
 * @memberof westures-core
 *
 * @param {(PointerEvent | MouseEvent | TouchEvent)} event - The input event
 * which will initialize this Input object.
 * @param {number} identifier - The identifier for this input, so that it can
 * be located in subsequent Event objects.
 */ /*#__PURE__*/ function() {
    function $ba0181cb818a54fd$var$$17807945cdde5d67$var$$e2125e2e71e37a0c$var$Input(event, identifier) {
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$17807945cdde5d67$var$$e2125e2e71e37a0c$var$Input);
        var currentData = new $ba0181cb818a54fd$var$$17807945cdde5d67$var$$0ca7bfe1c074e8ca$exports(event, identifier);
        /**
     * The set of elements along the original event's propagation path at the
     * time it was dispatched.
     *
     * @type {WeakSet.<Element>}
     */ this.initialElements = new WeakSet($ba0181cb818a54fd$var$$17807945cdde5d67$var$$e2125e2e71e37a0c$require$getPropagationPath(event));
        /**
     * Holds the initial data from the mousedown / touchstart / pointerdown that
     * began this input.
     *
     * @type {westures-core.PointerData}
     */ this.initial = currentData;
        /**
     * Holds the most current pointer data for this Input.
     *
     * @type {westures-core.PointerData}
     */ this.current = currentData;
        /**
     * Holds the previous pointer data for this Input.
     *
     * @type {westures-core.PointerData}
     */ this.previous = currentData;
        /**
     * The identifier for the pointer / touch / mouse button associated with
     * this input.
     *
     * @type {number}
     */ this.identifier = identifier;
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$17807945cdde5d67$var$$e2125e2e71e37a0c$var$Input, [
        {
            key: "phase",
            get: /**
   * The phase of the input: 'start' or 'move' or 'end' or 'cancel'
   *
   * @type {string}
   */ function get() {
                return this.current.type;
            }
        },
        {
            key: "startTime",
            get: /**
   * The timestamp of the initiating event for this input.
   *
   * @type {number}
   */ function get() {
                return this.initial.time;
            }
        },
        {
            key: "elapsedTime",
            get: /**
   * The amount of time elapsed between the start of this input and its latest
   * event.
   *
   * @type {number}
   */ function get() {
                return this.current.time - this.initial.time;
            }
        },
        {
            /**
   * @return {number} The distance between the initiating event for this input
   *    and its current event.
   */ key: "totalDistance",
            value: function totalDistance() {
                return this.initial.point.distanceTo(this.current.point);
            }
        },
        {
            /**
   * Saves the given raw event in PointerData form as the current data for this
   * input, pushing the old current data into the previous slot, and tossing
   * out the old previous data.
   *
   * @param {Event} event - The event object to wrap with a PointerData.
   */ key: "update",
            value: function update(event) {
                this.previous = this.current;
                this.current = new $ba0181cb818a54fd$var$$17807945cdde5d67$var$$0ca7bfe1c074e8ca$exports(event, this.identifier);
            }
        }
    ]);
    return $ba0181cb818a54fd$var$$17807945cdde5d67$var$$e2125e2e71e37a0c$var$Input;
}();
$ba0181cb818a54fd$var$$17807945cdde5d67$var$$e2125e2e71e37a0c$exports = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$e2125e2e71e37a0c$var$Input;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$exports = {
};
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$exports = {
};
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$require$CANCEL = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports.CANCEL;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$require$END = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports.END;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$require$MOVE = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports.MOVE;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$require$PHASE = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports.PHASE;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$require$START = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports.START;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$symbols = {
    inputs: Symbol.for('inputs')
};
/**
 * Set of helper functions for updating inputs based on type of input.
 * Must be called with a bound 'this', via bind(), or call(), or apply().
 *
 * @private
 * @inner
 * @memberof westure-core.State
 */ var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$update_fns = {
    TouchEvent: function TouchEvent(event) {
        var _this = this;
        Array.from(event.changedTouches).forEach(function(touch) {
            _this.updateInput(event, touch.identifier);
        });
    },
    PointerEvent: function PointerEvent(event) {
        this.updateInput(event, event.pointerId);
    },
    MouseEvent: function MouseEvent(event) {
        if (event.button === 0) this.updateInput(event, event.button);
    }
};
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$State = /**
 * Keeps track of currently active and ending input points on the interactive
 * surface.
 *
 * @memberof westures-core
 *
 * @param {Element} element - The element underpinning the associated Region.
 */ /*#__PURE__*/ function() {
    function $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$State(element) {
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$State);
        /**
     * Keep a reference to the element for the associated region.
     *
     * @type {Element}
     */ this.element = element;
        /**
     * Keeps track of the current Input objects.
     *
     * @alias [@@inputs]
     * @type {Map.<westures-core.Input>}
     * @memberof westure-core.State
     */ this[$ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$symbols.inputs] = new Map();
        /**
     * All currently valid inputs, including those that have ended.
     *
     * @type {westures-core.Input[]}
     */ this.inputs = [];
        /**
     * The array of currently active inputs, sourced from the current Input
     * objects. "Active" is defined as not being in the 'end' phase.
     *
     * @type {westures-core.Input[]}
     */ this.active = [];
        /**
     * The array of latest point data for the currently active inputs, sourced
     * from this.active.
     *
     * @type {westures-core.Point2D[]}
     */ this.activePoints = [];
        /**
     * The centroid of the currently active points.
     *
     * @type {westures-core.Point2D}
     */ this.centroid = {
        };
        /**
     * The latest event that the state processed.
     *
     * @type {Event}
     */ this.event = null;
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$State, [
        {
            /**
   * Deletes all inputs that are in the 'end' phase.
   */ key: "clearEndedInputs",
            value: function clearEndedInputs() {
                var _this = this;
                this[$ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$symbols.inputs].forEach(function(v, k) {
                    if (v.phase === 'end') _this[$ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$symbols.inputs].delete(k);
                });
            }
        },
        {
            /**
   * @param {string} phase - One of 'start', 'move', 'end', or 'cancel'.
   *
   * @return {westures-core.Input[]} Inputs in the given phase.
   */ key: "getInputsInPhase",
            value: function getInputsInPhase(phase) {
                return this.inputs.filter(function(i) {
                    return i.phase === phase;
                });
            }
        },
        {
            /**
   * @param {string} phase - One of 'start', 'move', 'end', or 'cancel'.
   *
   * @return {westures-core.Input[]} Inputs <b>not</b> in the given phase.
   */ key: "getInputsNotInPhase",
            value: function getInputsNotInPhase(phase) {
                return this.inputs.filter(function(i) {
                    return i.phase !== phase;
                });
            }
        },
        {
            /**
   * @return {boolean} True if there are no active inputs. False otherwise.
   */ key: "hasNoInputs",
            value: function hasNoInputs() {
                return this[$ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$symbols.inputs].size === 0;
            }
        },
        {
            /**
   * Update the input with the given identifier using the given event.
   *
   * @private
   *
   * @param {Event} event - The event being captured.
   * @param {number} identifier - The identifier of the input to update.
   */ key: "updateInput",
            value: function updateInput(event, identifier) {
                switch($ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$require$PHASE[event.type]){
                    case $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$require$START:
                        this[$ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$symbols.inputs].set(identifier, new $ba0181cb818a54fd$var$$17807945cdde5d67$var$$e2125e2e71e37a0c$exports(event, identifier));
                        try {
                            this.element.setPointerCapture(identifier);
                        } catch (e) {
                        // NOP: Optional operation failed.
                        }
                        break;
                    // All of 'end', 'move', and 'cancel' perform updates, hence the
                    // following fall-throughs
                    case $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$require$END:
                        try {
                            this.element.releasePointerCapture(identifier);
                        } catch (e1) {
                        // NOP: Optional operation failed.
                        }
                    case $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$require$CANCEL:
                    case $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$require$MOVE:
                        if (this[$ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$symbols.inputs].has(identifier)) this[$ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$symbols.inputs].get(identifier).update(event);
                        break;
                    default:
                        console.warn("Unrecognized event type: ".concat(event.type));
                }
            }
        },
        {
            /**
   * Updates the inputs with new information based upon a new event being fired.
   *
   * @private
   * @param {Event} event - The event being captured.
   */ key: "updateAllInputs",
            value: function updateAllInputs(event) {
                $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$update_fns[event.constructor.name].call(this, event);
                this.updateFields(event);
            }
        },
        {
            /**
   * Updates the convenience fields.
   *
   * @private
   * @param {Event} event - Event with which to update the convenience fields.
   */ key: "updateFields",
            value: function updateFields(event) {
                this.inputs = Array.from(this[$ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$symbols.inputs].values());
                this.active = this.getInputsNotInPhase('end');
                this.activePoints = this.active.map(function(i) {
                    return i.current.point;
                });
                this.centroid = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$6c3676f10a43b740$exports.centroid(this.activePoints);
                this.event = event;
            }
        }
    ]);
    return $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$State;
}();
$ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$exports = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$var$State;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$CANCEL_EVENTS = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports.CANCEL_EVENTS;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$KEYBOARD_EVENTS = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports.KEYBOARD_EVENTS;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$MOUSE_EVENTS = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports.MOUSE_EVENTS;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$POINTER_EVENTS = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports.POINTER_EVENTS;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$TOUCH_EVENTS = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports.TOUCH_EVENTS;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$STATE_KEY_STRINGS = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports.STATE_KEY_STRINGS;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$PHASE = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports.PHASE;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$CANCEL = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports.CANCEL;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$END = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports.END;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$START = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports.START;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$setDifference = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$exports.setDifference;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$setFilter = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$exports.setFilter;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$var$Region = /**
 * Allows the user to specify the control region which will listen for user
 * input events.
 *
 * @memberof westures-core
 *
 * @param {Element} element=window - The element which should listen to input
 * events.
 * @param {object} [options]
 * @param {boolean} [options.capture=false] - Whether the region uses the
 * capture phase of input events. If false, uses the bubbling phase.
 * @param {boolean} [options.preferPointer=true] - If false, the region listens
 * to mouse/touch events instead of pointer events.
 * @param {boolean} [options.preventDefault=true] - Whether the default
 * browser functionality should be disabled. This option should most likely be
 * ignored. Here there by dragons if set to false.
 * @param {string} [options.touchAction='none'] - Value to set the CSS
 * 'touch-action' property to on elements added to the region.
 */ /*#__PURE__*/ function() {
    function $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$var$Region() {
        var element = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window, options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        };
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$var$Region);
        options = $057fc04a515b0dc4$export$2e2bcd8739ae039({
        }, $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$var$Region.DEFAULTS, options);
        /**
     * The list of relations between elements, their gestures, and the handlers.
     *
     * @type {Set.<westures-core.Gesture>}
     */ this.gestures = new Set();
        /**
     * The list of active gestures for the current input session.
     *
     * @type {Set.<westures-core.Gesture>}
     */ this.activeGestures = new Set();
        /**
     * The base list of potentially active gestures for the current input
     * session.
     *
     * @type {Set.<westures-core.Gesture>}
     */ this.potentialGestures = new Set();
        /**
     * The element being bound to.
     *
     * @type {Element}
     */ this.element = element;
        /**
     * The user-supplied options for the Region.
     *
     * @type {object}
     */ this.options = options;
        /**
     * The internal state object for a Region.  Keeps track of inputs.
     *
     * @type {westures-core.State}
     */ this.state = new $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$exports(this.element);
        // Begin operating immediately.
        this.activate();
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$var$Region, [
        {
            /**
   * Activates the region by adding event listeners for all appropriate input
   * events to the region's element.
   *
   * @private
   */ key: "activate",
            value: function activate() {
                var _this = this;
                /*
     * Listening to both mouse and touch comes with the difficulty that
     * preventDefault() must be called to prevent both events from iterating
     * through the system. However I have left it as an option to the end user,
     * which defaults to calling preventDefault(), in case there's a use-case I
     * haven't considered or am not aware of.
     *
     * It also may be a good idea to keep regions small in large pages.
     *
     * See:
     *  https://www.html5rocks.com/en/mobile/touchandmouse/
     *  https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
     *  https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
     */ var eventNames = [];
                if (this.options.preferPointer && window.PointerEvent) eventNames = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$POINTER_EVENTS;
                else eventNames = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$MOUSE_EVENTS.concat($ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$TOUCH_EVENTS);
                // Bind detected browser events to the region element.
                var arbitrate = this.arbitrate.bind(this);
                eventNames.forEach(function(eventName) {
                    _this.element.addEventListener(eventName, arbitrate, {
                        capture: _this.options.capture,
                        once: false,
                        passive: false
                    });
                });
                var cancel = this.cancel.bind(this);
                $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$CANCEL_EVENTS.forEach(function(eventName) {
                    window.addEventListener(eventName, cancel);
                });
                var handleKeyboardEvent = this.handleKeyboardEvent.bind(this);
                $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$KEYBOARD_EVENTS.forEach(function(eventName) {
                    window.addEventListener(eventName, handleKeyboardEvent);
                });
            }
        },
        {
            /**
   * Handles a cancel event. Resets the state and the active / potential gesture
   * lists.
   *
   * @private
   * @param {Event} event - The event emitted from the window object.
   */ key: "cancel",
            value: function cancel(event) {
                var _this = this;
                if (this.options.preventDefault) event.preventDefault();
                this.state.inputs.forEach(function(input) {
                    input.update(event);
                });
                this.activeGestures.forEach(function(gesture) {
                    gesture.evaluateHook($ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$CANCEL, _this.state);
                });
                this.state = new $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$exports(this.element);
                this.resetActiveGestures();
            }
        },
        {
            /**
   * Handles a keyboard event, triggering a restart of any gestures that need
   * it.
   *
   * @private
   * @param {KeyboardEvent} event - The keyboard event.
   */ key: "handleKeyboardEvent",
            value: function handleKeyboardEvent(event) {
                if ($ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$STATE_KEY_STRINGS.indexOf(event.key) >= 0) {
                    var _this = this;
                    this.state.event = event;
                    var oldActiveGestures = this.activeGestures;
                    this.setActiveGestures();
                    $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$setDifference(oldActiveGestures, this.activeGestures).forEach(function(gesture) {
                        gesture.evaluateHook($ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$END, _this.state);
                    });
                    $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$setDifference(this.activeGestures, oldActiveGestures).forEach(function(gesture) {
                        gesture.evaluateHook($ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$START, _this.state);
                    });
                }
            }
        },
        {
            /**
   * Resets the active gestures.
   *
   * @private
   */ key: "resetActiveGestures",
            value: function resetActiveGestures() {
                this.potentialGestures = new Set();
                this.activeGestures = new Set();
            }
        },
        {
            /**
   * Selects active gestures from the list of potentially active gestures.
   *
   * @private
   */ key: "setActiveGestures",
            value: function setActiveGestures() {
                var _this = this;
                this.activeGestures = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$setFilter(this.potentialGestures, function(gesture) {
                    return gesture.isEnabled(_this.state);
                });
            }
        },
        {
            /**
   * Selects the potentially active gestures.
   *
   * @private
   */ key: "setPotentialGestures",
            value: function setPotentialGestures() {
                var input = this.state.inputs[0];
                this.potentialGestures = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$setFilter(this.gestures, function(gesture) {
                    return input.initialElements.has(gesture.element);
                });
            }
        },
        {
            /**
   * Selects the gestures that are active for the current input sequence.
   *
   * @private
   * @param {Event} event - The event emitted from the window object.
   * @param {boolean} isInitial - Whether this is an initial contact.
   */ key: "updateActiveGestures",
            value: function updateActiveGestures(event, isInitial) {
                if ($ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$PHASE[event.type] === $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$START) {
                    if (isInitial) this.setPotentialGestures();
                    this.setActiveGestures();
                }
            }
        },
        {
            /**
   * Evaluates whether the current input session has completed.
   *
   * @private
   * @param {Event} event - The event emitted from the window object.
   */ key: "pruneActiveGestures",
            value: function pruneActiveGestures(event) {
                if ($ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$PHASE[event.type] === $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$END) {
                    if (this.state.hasNoInputs()) this.resetActiveGestures();
                    else this.setActiveGestures();
                }
            }
        },
        {
            /**
   * All input events flow through this function. It makes sure that the input
   * state is maintained, determines which gestures to analyze based on the
   * initial position of the inputs, calls the relevant gesture hooks, and
   * dispatches gesture data.
   *
   * @private
   * @param {Event} event - The event emitted from the window object.
   */ key: "arbitrate",
            value: function arbitrate(event) {
                var isInitial = this.state.hasNoInputs();
                this.state.updateAllInputs(event);
                this.updateActiveGestures(event, isInitial);
                if (this.activeGestures.size > 0) {
                    var _this = this;
                    if (this.options.preventDefault) event.preventDefault();
                    this.activeGestures.forEach(function(gesture) {
                        gesture.evaluateHook($ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$PHASE[event.type], _this.state);
                    });
                }
                this.state.clearEndedInputs();
                this.pruneActiveGestures(event);
            }
        },
        {
            /**
   * Adds the given gesture to the region.
   *
   * @param {westures-core.Gesture} gesture - Instantiated gesture to add.
   */ key: "addGesture",
            value: function addGesture(gesture) {
                gesture.element.style.touchAction = this.options.touchAction;
                this.gestures.add(gesture);
            }
        },
        {
            /**
   * Removes the given gesture from the region.
   *
   * @param {westures-core.Gesture} gesture - Instantiated gesture to add.
   */ key: "removeGesture",
            value: function removeGesture(gesture) {
                this.gestures.delete(gesture);
                this.potentialGestures.delete(gesture);
                this.activeGestures.delete(gesture);
            }
        },
        {
            /**
   * Retrieves Gestures by their associated element.
   *
   * @param {Element} element - The element for which to find gestures.
   *
   * @return {westures-core.Gesture[]} Gestures to which the element is bound.
   */ key: "getGesturesByElement",
            value: function getGesturesByElement(element) {
                return $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$require$setFilter(this.gestures, function(gesture) {
                    return gesture.element === element;
                });
            }
        },
        {
            /**
   * Remove all gestures bound to the given element.
   *
   * @param {Element} element - The element to unbind.
   */ key: "removeGesturesByElement",
            value: function removeGesturesByElement(element) {
                var _this = this;
                this.getGesturesByElement(element).forEach(function(g) {
                    return _this.removeGesture(g);
                });
            }
        }
    ]);
    return $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$var$Region;
}();
$ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$var$Region.DEFAULTS = {
    capture: false,
    preferPointer: true,
    preventDefault: true,
    touchAction: 'none'
};
$ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$exports = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$var$Region;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$exports = {
};
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$cascade = Symbol('cascade');
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$smooth = Symbol('smooth');
/**
 * Determines whether to apply smoothing. Smoothing is on by default but turned
 * off if either:<br>
 *  1. The user explicitly requests that it be turned off.<br>
 *  2. The active pointer is not "coarse".<br>
 *
 * @see {@link
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia}
 *
 * @inner
 * @memberof westures-core.Smoothable
 *
 * @param {boolean} isRequested - Whether smoothing was requested by the user.
 *
 * @returns {boolean} Whether to apply smoothing.
 */ function $ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$smoothingIsApplicable(isRequested) {
    if (isRequested) try {
        return window.matchMedia('(pointer: coarse)').matches;
    } catch (e) {
        return true;
    }
    return false;
}
var tmp = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$smooth;
var $ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$Smoothable = /**
 * A Smoothable datatype is one that is capable of smoothing out a series of
 * values as they come in, one at a time, providing a more consistent series. It
 * does this by creating some inertia in the values using a cascading average.
 * (For those who are interested in such things, this effectively means that it
 * provides a practical application of Zeno's Dichotomy).
 *
 * @example
 * const x = new Smoothable({ identity: 1 });
 * const a = x.next(1);   // 1.0
 * const b = x.next(1.2); // 1.1
 * const c = x.next(0.9); // 1.0
 * const d = x.next(0.6); // 0.8
 * const e = x.next(1.2); // 1.0
 * const f = x.next(1.6); // 1.3
 * x.restart();
 * const g = x.next(0);   // 0.5
 *
 * @memberof westures-core
 *
 * @param {Object} [options]
 * @param {boolean} [options.applySmoothing=true] Whether to apply smoothing to
 * the data.
 * @param {*} [options.identity=0] The identity value of this smoothable data.
 */ /*#__PURE__*/ function() {
    function $ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$Smoothable() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        };
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$Smoothable);
        var final_options = $057fc04a515b0dc4$export$2e2bcd8739ae039({
        }, $ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$Smoothable.DEFAULTS, options);
        /**
     * The function through which smoothed emits are passed.
     *
     * @method
     * @param {*} data - The data to emit.
     *
     * @return {*} The smoothed out data.
     */ this.next = null;
        if ($ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$smoothingIsApplicable(final_options.applySmoothing)) this.next = this[$ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$smooth].bind(this);
        else this.next = function(data) {
            return data;
        };
        /**
     * The "identity" value of the data that will be smoothed.
     *
     * @type {*}
     * @default 0
     */ this.identity = final_options.identity;
        /**
     * The cascading average of outgoing values.
     *
     * @memberof westures-core.Smoothable
     * @alias [@@cascade]
     * @type {object}
     */ this[$ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$cascade] = this.identity;
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$Smoothable, [
        {
            /**
   * Restart the Smoothable gesture.
   */ key: "restart",
            value: function restart() {
                this[$ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$cascade] = this.identity;
            }
        },
        {
            /**
   * Smooth out the outgoing data.
   *
   * @memberof westures-core.Smoothable
   * @alias [@@smooth]
   * @param {object} data - The next batch of data to emit.
   *
   * @return {?object}
   */ key: tmp,
            value: function value(data) {
                var average = this.average(this[$ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$cascade], data);
                this[$ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$cascade] = average;
                return average;
            }
        },
        {
            /**
   * Average out two values, as part of the smoothing algorithm. Override this
   * method if the data being smoothed is not a Number.
   *
   * @param {number} a
   * @param {number} b
   *
   * @return {number} The average of 'a' and 'b'
   */ key: "average",
            value: function average(a, b) {
                return (a + b) / 2;
            }
        }
    ]);
    return $ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$Smoothable;
}();
$ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$Smoothable.DEFAULTS = {
    applySmoothing: true,
    identity: 0
};
$ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$exports = $ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$var$Smoothable;
$ba0181cb818a54fd$var$$17807945cdde5d67$exports = $057fc04a515b0dc4$export$2e2bcd8739ae039({
    Gesture: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$de0d6a332419bf3c$exports,
    Input: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$e2125e2e71e37a0c$exports,
    Point2D: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$6c3676f10a43b740$exports,
    PointerData: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$0ca7bfe1c074e8ca$exports,
    Region: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$b66a0f22c18e3e3d$exports,
    Smoothable: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$01c3d7b128023e4f$exports,
    State: $ba0181cb818a54fd$var$$17807945cdde5d67$var$$639be6fb478a6d5a$exports
}, $ba0181cb818a54fd$var$$17807945cdde5d67$var$$be6f0e84320366a7$exports, $ba0181cb818a54fd$var$$17807945cdde5d67$var$$4559ecf940edc78d$exports);
var $ba0181cb818a54fd$var$$edded22326d64913$exports = {
};
var $ba0181cb818a54fd$var$$edded22326d64913$require$Gesture = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Gesture;
var $ba0181cb818a54fd$var$$edded22326d64913$require$Point2D = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Point2D;
var $ba0181cb818a54fd$var$$edded22326d64913$require$Smoothable = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Smoothable;
var $ba0181cb818a54fd$var$$edded22326d64913$var$Pan = /**
 * Data returned when a Pan is recognized.
 *
 * @typedef {Object} PanData
 * @mixes ReturnTypes.BaseData
 *
 * @property {westures-core.Point2D} translation - The change vector from the
 * last emit.
 *
 * @memberof ReturnTypes
 */ /**
 * A Pan is defined as a normal movement in any direction.
 *
 * @extends westures-core.Gesture
 * @see {ReturnTypes.PanData}
 * @see {westures-core.Smoothable}
 * @memberof westures
 *
 * @param {Element} element - The element with which to associate the gesture.
 * @param {Function} handler - The function handler to execute when a gesture
 * is recognized on the associated element.
 * @param {object} [options] - Gesture customization options.
 * @param {westures-core.STATE_KEYS[]} [options.enableKeys=[]] - List of keys
 * which will enable the gesture. The gesture will not be recognized unless one
 * of these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the enable key is always down.
 * @param {westures-core.STATE_KEYS[]} [options.disableKeys=[]] - List of keys
 * which will disable the gesture. The gesture will not be recognized if one of
 * these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the disable key is never down.
 * @param {number} [options.minInputs=1] - The minimum number of pointers that
 * must be active for the gesture to be recognized. Uses >=.
 * @param {number} [options.maxInputs=Number.MAX_VALUE] - The maximum number of
 * pointers that may be active for the gesture to be recognized. Uses <=.
 * @param {boolean} [options.applySmoothing=true] - Whether to apply inertial
 * smoothing for systems with coarse pointers.
 */ /*#__PURE__*/ function($edded22326d64913$require$Gesture) {
    $71d947154e31347b$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$edded22326d64913$var$Pan, $edded22326d64913$require$Gesture);
    var _super = $c8df0939769db74d$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$edded22326d64913$var$Pan);
    function $ba0181cb818a54fd$var$$edded22326d64913$var$Pan(element, handler) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        };
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$edded22326d64913$var$Pan);
        var _this;
        _this = _super.call(this, 'pan', element, handler, options);
        /**
     * The previous point location.
     *
     * @type {westures-core.Point2D}
     */ _this.previous = null;
        /*
     * The outgoing data, with optional inertial smoothing.
     *
     * @override
     * @type {westures-core.Smoothable<westures-core.Point2D>}
     */ _this.outgoing = new $ba0181cb818a54fd$var$$edded22326d64913$require$Smoothable($057fc04a515b0dc4$export$2e2bcd8739ae039({
        }, options, {
            identity: new $ba0181cb818a54fd$var$$edded22326d64913$require$Point2D()
        }));
        _this.outgoing.average = function(a, b) {
            return $ba0181cb818a54fd$var$$edded22326d64913$require$Point2D.centroid([
                a,
                b
            ]);
        };
        return _this;
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$edded22326d64913$var$Pan, [
        {
            /**
   * Resets the gesture's progress by saving the current centroid of the active
   * inputs. To be called whenever the number of inputs changes.
   *
   * @param {State} state
   */ key: "restart",
            value: function restart(state) {
                this.previous = state.centroid;
                this.outgoing.restart();
            }
        },
        {
            key: "start",
            value: function start(state) {
                this.restart(state);
            }
        },
        {
            key: "move",
            value: function move(state) {
                var translation = state.centroid.minus(this.previous);
                this.previous = state.centroid;
                return {
                    translation: this.outgoing.next(translation)
                };
            }
        },
        {
            key: "end",
            value: function end(state) {
                this.restart(state);
            }
        },
        {
            key: "cancel",
            value: function cancel(state) {
                this.restart(state);
            }
        }
    ]);
    return $ba0181cb818a54fd$var$$edded22326d64913$var$Pan;
}($ba0181cb818a54fd$var$$edded22326d64913$require$Gesture);
$ba0181cb818a54fd$var$$edded22326d64913$exports = $ba0181cb818a54fd$var$$edded22326d64913$var$Pan;
var $ba0181cb818a54fd$var$$a29eb49c9650e38a$exports = {
};
var $ba0181cb818a54fd$var$$a29eb49c9650e38a$require$Gesture = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Gesture;
var $ba0181cb818a54fd$var$$a29eb49c9650e38a$require$Smoothable = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Smoothable;
var $ba0181cb818a54fd$var$$a29eb49c9650e38a$var$Pinch = /**
 * Data returned when a Pinch is recognized.
 *
 * @typedef {Object} PinchData
 * @mixes ReturnTypes.BaseData
 *
 * @property {number} distance - The average distance from an active input to
 *    the centroid.
 * @property {number} scale - The proportional change in distance since last
 * emit.
 *
 * @memberof ReturnTypes
 */ /**
 * A Pinch is defined as two or more inputs moving either together or apart.
 *
 * @extends westures-core.Gesture
 * @see {ReturnTypes.PinchData}
 * @memberof westures
 *
 * @param {Element} element - The element to which to associate the gesture.
 * @param {Function} handler - The function handler to execute when a gesture
 * is recognized on the associated element.
 * @param {object} [options] - Gesture customization options.
 * @param {westures-core.STATE_KEYS[]} [options.enableKeys=[]] - List of keys
 * which will enable the gesture. The gesture will not be recognized unless one
 * of these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the enable key is always down.
 * @param {westures-core.STATE_KEYS[]} [options.disableKeys=[]] - List of keys
 * which will disable the gesture. The gesture will not be recognized if one of
 * these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the disable key is never down.
 * @param {number} [options.minInputs=2] - The minimum number of pointers that
 * must be active for the gesture to be recognized. Uses >=.
 * @param {number} [options.maxInputs=Number.MAX_VALUE] - The maximum number of
 * pointers that may be active for the gesture to be recognized. Uses <=.
 * @param {boolean} [options.applySmoothing=true] - Whether to apply inertial
 * smoothing for systems with coarse pointers.
 */ /*#__PURE__*/ function($a29eb49c9650e38a$require$Gesture) {
    $71d947154e31347b$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$a29eb49c9650e38a$var$Pinch, $a29eb49c9650e38a$require$Gesture);
    var _super = $c8df0939769db74d$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$a29eb49c9650e38a$var$Pinch);
    function $ba0181cb818a54fd$var$$a29eb49c9650e38a$var$Pinch(element, handler) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        };
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$a29eb49c9650e38a$var$Pinch);
        var _this;
        options = $057fc04a515b0dc4$export$2e2bcd8739ae039({
        }, $ba0181cb818a54fd$var$$a29eb49c9650e38a$var$Pinch.DEFAULTS, options);
        _this = _super.call(this, 'pinch', element, handler, options);
        /**
     * The previous distance.
     *
     * @type {number}
     */ _this.previous = 0;
        /*
     * The outgoing data, with optional inertial smoothing.
     *
     * @override
     * @type {westures-core.Smoothable<number>}
     */ _this.outgoing = new $ba0181cb818a54fd$var$$a29eb49c9650e38a$require$Smoothable($057fc04a515b0dc4$export$2e2bcd8739ae039({
        }, options, {
            identity: 1
        }));
        return _this;
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$a29eb49c9650e38a$var$Pinch, [
        {
            /**
   * Initializes the gesture progress.
   *
   * @param {State} state - current input state.
   */ key: "restart",
            value: function restart(state) {
                this.previous = state.centroid.averageDistanceTo(state.activePoints);
                this.outgoing.restart();
            }
        },
        {
            key: "start",
            value: function start(state) {
                this.restart(state);
            }
        },
        {
            key: "move",
            value: function move(state) {
                var distance = state.centroid.averageDistanceTo(state.activePoints);
                var scale = distance / this.previous;
                this.previous = distance;
                return {
                    distance: distance,
                    scale: this.outgoing.next(scale)
                };
            }
        },
        {
            key: "end",
            value: function end(state) {
                this.restart(state);
            }
        },
        {
            key: "cancel",
            value: function cancel(state) {
                this.restart(state);
            }
        }
    ]);
    return $ba0181cb818a54fd$var$$a29eb49c9650e38a$var$Pinch;
}($ba0181cb818a54fd$var$$a29eb49c9650e38a$require$Gesture);
$ba0181cb818a54fd$var$$a29eb49c9650e38a$var$Pinch.DEFAULTS = Object.freeze({
    minInputs: 2
});
$ba0181cb818a54fd$var$$a29eb49c9650e38a$exports = $ba0181cb818a54fd$var$$a29eb49c9650e38a$var$Pinch;
var $ba0181cb818a54fd$var$$044241a6e313bbcb$exports = {
};
var $ba0181cb818a54fd$var$$044241a6e313bbcb$require$Gesture = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Gesture;
var $ba0181cb818a54fd$var$$044241a6e313bbcb$require$Point2D = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Point2D;
var $ba0181cb818a54fd$var$$044241a6e313bbcb$require$MOVE = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.MOVE;
var $ba0181cb818a54fd$var$$044241a6e313bbcb$var$Press = /**
 * Data returned when a Press is recognized.
 *
 * @typedef {Object} PressData
 *
 * @property {westures-core.Point2D} centroid - The current centroid of the
 * input points.
 * @property {westures-core.Point2D} initial - The initial centroid of the input
 * points.
 * @property {number} distance - The total movement since initial contact.
 *
 * @memberof ReturnTypes
 */ /**
 * A Press is defined as one or more input points being held down without
 * moving. Press gestures may be stacked by pressing with additional pointers
 * beyond the minimum, so long as none of the points move or are lifted, a Press
 * will be recognized for each additional pointer.
 *
 * @extends westures-core.Gesture
 * @see {ReturnTypes.PressData}
 * @memberof westures
 *
 * @param {Element} element - The element to which to associate the gesture.
 * @param {Function} handler - The function handler to execute when a gesture
 * is recognized on the associated element.
 * @param {object} [options] - Gesture customization options.
 * @param {westures-core.STATE_KEYS[]} [options.enableKeys=[]] - List of keys
 * which will enable the gesture. The gesture will not be recognized unless one
 * of these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the enable key is always down.
 * @param {westures-core.STATE_KEYS[]} [options.disableKeys=[]] - List of keys
 * which will disable the gesture. The gesture will not be recognized if one of
 * these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the disable key is never down.
 * @param {number} [options.minInputs=1] - The minimum number of pointers that
 * must be active for the gesture to be recognized. Uses >=.
 * @param {number} [options.maxInputs=Number.MAX_VALUE] - The maximum number of
 * pointers that may be active for the gesture to be recognized. Uses <=.
 * @param {number} [options.delay=1000] - The delay before emitting, during
 * which time the number of inputs must not go below minInputs.
 * @param {number} [options.tolerance=10] - The tolerance in pixels a user can
 * move and still allow the gesture to emit.
 */ /*#__PURE__*/ function($044241a6e313bbcb$require$Gesture) {
    $71d947154e31347b$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$044241a6e313bbcb$var$Press, $044241a6e313bbcb$require$Gesture);
    var _super = $c8df0939769db74d$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$044241a6e313bbcb$var$Press);
    function $ba0181cb818a54fd$var$$044241a6e313bbcb$var$Press(element, handler) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        };
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$044241a6e313bbcb$var$Press);
        return _super.call(this, 'press', element, handler, $057fc04a515b0dc4$export$2e2bcd8739ae039({
        }, $ba0181cb818a54fd$var$$044241a6e313bbcb$var$Press.DEFAULTS, options));
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$044241a6e313bbcb$var$Press, [
        {
            key: "start",
            value: function start(state) {
                var _this = this;
                var initial = state.centroid;
                var originalInputs = Array.from(state.active);
                setTimeout(function() {
                    var inputs = state.active.filter(function(i) {
                        return originalInputs.includes(i);
                    });
                    if (inputs.length === originalInputs.length) {
                        var centroid = $ba0181cb818a54fd$var$$044241a6e313bbcb$require$Point2D.centroid(inputs.map(function(i) {
                            return i.current.point;
                        }));
                        var distance = initial.distanceTo(centroid);
                        if (distance <= _this.options.tolerance) _this.recognize($ba0181cb818a54fd$var$$044241a6e313bbcb$require$MOVE, state, {
                            centroid: centroid,
                            distance: distance,
                            initial: initial
                        });
                    }
                }, this.options.delay);
            }
        }
    ]);
    return $ba0181cb818a54fd$var$$044241a6e313bbcb$var$Press;
}($ba0181cb818a54fd$var$$044241a6e313bbcb$require$Gesture);
$ba0181cb818a54fd$var$$044241a6e313bbcb$var$Press.DEFAULTS = Object.freeze({
    delay: 1000,
    tolerance: 10
});
$ba0181cb818a54fd$var$$044241a6e313bbcb$exports = $ba0181cb818a54fd$var$$044241a6e313bbcb$var$Press;
var $ba0181cb818a54fd$var$$b6747a8030ff7e4d$exports = {
};
var $ba0181cb818a54fd$var$$b6747a8030ff7e4d$require$Smoothable = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Smoothable;
var $ba0181cb818a54fd$var$$5618dc3399c82d06$exports = {
};
var $ba0181cb818a54fd$var$$5618dc3399c82d06$require$Gesture = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Gesture;
var $ba0181cb818a54fd$var$$5618dc3399c82d06$require$Point2D = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Point2D;
var $ba0181cb818a54fd$var$$5618dc3399c82d06$require$Smoothable = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Smoothable;
var $ba0181cb818a54fd$var$$5618dc3399c82d06$var$Pivotable = /**
 * Data returned when a Pivotable is recognized.
 *
 * @typedef {Object} SwivelData
 * @mixes ReturnTypes.BaseData
 *
 * @property {number} rotation - In radians, the change in angle since last
 * emit.
 * @property {westures-core.Point2D} pivot - The pivot point.
 *
 * @memberof ReturnTypes
 */ /**
 * A Pivotable is a single input rotating around a fixed point. The fixed point
 * is determined by the input's location at its 'start' phase.
 *
 * @extends westures.Gesture
 * @see {ReturnTypes.SwivelData}
 * @memberof westures
 *
 * @param {Element} element - The element to which to associate the gesture.
 * @param {Function} handler - The function handler to execute when a gesture
 * is recognized on the associated element.
 * @param {object} [options] - Gesture customization options.
 * @param {westures-core.STATE_KEYS[]} [options.enableKeys=[]] - List of keys
 * which will enable the gesture. The gesture will not be recognized unless one
 * of these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the enable key is always down.
 * @param {westures-core.STATE_KEYS[]} [options.disableKeys=[]] - List of keys
 * which will disable the gesture. The gesture will not be recognized if one of
 * these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the disable key is never down.
 * @param {number} [options.minInputs=1] - The minimum number of pointers that
 * must be active for the gesture to be recognized. Uses >=.
 * @param {number} [options.maxInputs=Number.MAX_VALUE] - The maximum number of
 * pointers that may be active for the gesture to be recognized. Uses <=.
 * @param {boolean} [options.applySmoothing=true] - Whether to apply inertial
 * smoothing for systems with coarse pointers.
 * @param {number} [options.deadzoneRadius=15] - The radius in pixels around the
 * start point in which to do nothing.
 * @param {Element} [options.dynamicPivot=false] - Normally the center point of
 * the gesture's element is used as the pivot. If this option is set, the
 * initial contact point with the element is used as the pivot instead.
 */ /*#__PURE__*/ function($5618dc3399c82d06$require$Gesture) {
    $71d947154e31347b$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$5618dc3399c82d06$var$Pivotable, $5618dc3399c82d06$require$Gesture);
    var _super = $c8df0939769db74d$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$5618dc3399c82d06$var$Pivotable);
    function $ba0181cb818a54fd$var$$5618dc3399c82d06$var$Pivotable() {
        var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'pivotable', element = arguments.length > 1 ? arguments[1] : void 0, handler = arguments.length > 2 ? arguments[2] : void 0, options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        };
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$5618dc3399c82d06$var$Pivotable);
        var _this;
        _this = _super.call(this, type, element, handler, $057fc04a515b0dc4$export$2e2bcd8739ae039({
        }, $ba0181cb818a54fd$var$$5618dc3399c82d06$var$Pivotable.DEFAULTS, options));
        /**
     * The pivot point of the pivotable.
     *
     * @type {westures-core.Point2D}
     */ _this.pivot = null;
        /**
     * The previous data.
     *
     * @type {number}
     */ _this.previous = 0;
        /**
     * The outgoing data.
     *
     * @type {westures-core.Smoothable}
     */ _this.outgoing = new $ba0181cb818a54fd$var$$5618dc3399c82d06$require$Smoothable(options);
        return _this;
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$5618dc3399c82d06$var$Pivotable, [
        {
            /**
   * Updates the previous data. It will be called during the 'start' and 'end'
   * phases, and should also be called during the 'move' phase implemented by
   * the subclass.
   *
   * @abstract
   * @param {State} state - the current input state.
   */ key: "updatePrevious",
            value: function updatePrevious() {
                throw 'Gestures which extend Pivotable must implement updatePrevious()';
            }
        },
        {
            /**
   * Restart the given progress object using the given input object.
   *
   * @param {State} state - current input state.
   */ key: "restart",
            value: function restart(state) {
                if (this.options.dynamicPivot) {
                    this.pivot = state.centroid;
                    this.previous = 0;
                } else {
                    this.pivot = $ba0181cb818a54fd$var$$5618dc3399c82d06$var$Pivotable.getClientCenter(this.element);
                    this.updatePrevious(state);
                }
                this.outgoing.restart();
            }
        },
        {
            key: "start",
            value: function start(state) {
                this.restart(state);
            }
        },
        {
            key: "end",
            value: function end(state) {
                if (state.active.length > 0) this.restart(state);
                else this.outgoing.restart();
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                this.outgoing.restart();
            }
        }
    ], [
        {
            key: "getClientCenter",
            value: /**
   * Determine the center point of the given element's bounding client
   * rectangle.
   *
   * @static
   *
   * @param {Element} element - The DOM element to analyze.
   * @return {westures-core.Point2D} - The center of the element's bounding
   * client rectangle.
   */ function getClientCenter(element) {
                var rect = element.getBoundingClientRect();
                return new $ba0181cb818a54fd$var$$5618dc3399c82d06$require$Point2D(rect.left + rect.width / 2, rect.top + rect.height / 2);
            }
        }
    ]);
    return $ba0181cb818a54fd$var$$5618dc3399c82d06$var$Pivotable;
}($ba0181cb818a54fd$var$$5618dc3399c82d06$require$Gesture);
$ba0181cb818a54fd$var$$5618dc3399c82d06$var$Pivotable.DEFAULTS = Object.freeze({
    deadzoneRadius: 15,
    dynamicPivot: false
});
$ba0181cb818a54fd$var$$5618dc3399c82d06$exports = $ba0181cb818a54fd$var$$5618dc3399c82d06$var$Pivotable;
var $ba0181cb818a54fd$var$$b6747a8030ff7e4d$var$Pull = /**
 * Data returned when a Pull is recognized.
 *
 * @typedef {Object} PullData
 * @mixes ReturnTypes.BaseData
 *
 * @property {number} distance - The average distance from an active input to
 * the centroid.
 * @property {number} scale - The proportional change in distance since last
 * emit.
 * @property {westures-core.Point2D} pivot - The pivot point.
 *
 * @memberof ReturnTypes
 */ /**
 * A Pull is defined as a single input moving away from or towards a pivot
 * point.
 *
 * @extends westures-core.Gesture
 * @see {ReturnTypes.PullData}
 * @memberof westures
 *
 * @param {Element} element - The element to which to associate the gesture.
 * @param {Function} handler - The function handler to execute when a gesture
 * is recognized on the associated element.
 * @param {object} [options] - Gesture customization options.
 * @param {westures-core.STATE_KEYS[]} [options.enableKeys=[]] - List of keys
 * which will enable the gesture. The gesture will not be recognized unless one
 * of these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the enable key is always down.
 * @param {westures-core.STATE_KEYS[]} [options.disableKeys=[]] - List of keys
 * which will disable the gesture. The gesture will not be recognized if one of
 * these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the disable key is never down.
 * @param {number} [options.minInputs=1] - The minimum number of pointers that
 * must be active for the gesture to be recognized. Uses >=.
 * @param {number} [options.maxInputs=Number.MAX_VALUE] - The maximum number of
 * pointers that may be active for the gesture to be recognized. Uses <=.
 * @param {boolean} [options.applySmoothing=true] - Whether to apply inertial
 * smoothing for systems with coarse pointers.
 * @param {number} [options.deadzoneRadius=15] - The radius in pixels around the
 * start point in which to do nothing.
 * @param {Element} [options.dynamicPivot=false] - Normally the center point of
 * the gesture's element is used as the pivot. If this option is set, the
 * initial contact point with the element is used as the pivot instead.
 */ /*#__PURE__*/ function($5618dc3399c82d06$exports) {
    $71d947154e31347b$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$b6747a8030ff7e4d$var$Pull, $5618dc3399c82d06$exports);
    var _super = $c8df0939769db74d$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$b6747a8030ff7e4d$var$Pull);
    function $ba0181cb818a54fd$var$$b6747a8030ff7e4d$var$Pull(element, handler) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        };
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$b6747a8030ff7e4d$var$Pull);
        var _this;
        _this = _super.call(this, 'pull', element, handler, options);
        /*
     * The outgoing data, with optional inertial smoothing.
     *
     * @override
     * @type {westures-core.Smoothable<number>}
     */ _this.outgoing = new $ba0181cb818a54fd$var$$b6747a8030ff7e4d$require$Smoothable($057fc04a515b0dc4$export$2e2bcd8739ae039({
        }, options, {
            identity: 1
        }));
        return _this;
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$b6747a8030ff7e4d$var$Pull, [
        {
            key: "updatePrevious",
            value: function updatePrevious(state) {
                this.previous = this.pivot.distanceTo(state.centroid);
            }
        },
        {
            key: "move",
            value: function move(state) {
                var pivot = this.pivot;
                var distance = pivot.distanceTo(state.centroid);
                var scale = distance / this.previous;
                var _options = this.options, deadzoneRadius = _options.deadzoneRadius;
                var rv = null;
                if (distance > deadzoneRadius && this.previous > deadzoneRadius) rv = {
                    distance: distance,
                    scale: this.outgoing.next(scale),
                    pivot: pivot
                };
                /*
     * Updating the previous distance regardless of emit prevents sudden changes
     * when the user exits the deadzone circle.
     */ this.previous = distance;
                return rv;
            }
        }
    ]);
    return $ba0181cb818a54fd$var$$b6747a8030ff7e4d$var$Pull;
}($ba0181cb818a54fd$var$$5618dc3399c82d06$exports);
$ba0181cb818a54fd$var$$b6747a8030ff7e4d$exports = $ba0181cb818a54fd$var$$b6747a8030ff7e4d$var$Pull;
var $ba0181cb818a54fd$var$$2779699df4dafe8f$exports = {
};
var $ba0181cb818a54fd$var$$2779699df4dafe8f$require$angularDifference = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.angularDifference;
var $ba0181cb818a54fd$var$$2779699df4dafe8f$require$Gesture = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Gesture;
var $ba0181cb818a54fd$var$$2779699df4dafe8f$require$Smoothable = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Smoothable;
var $ba0181cb818a54fd$var$$2779699df4dafe8f$var$Rotate = /**
 * Data returned when a Rotate is recognized.
 *
 * @typedef {Object} RotateData
 * @mixes ReturnTypes.BaseData
 *
 * @property {number} rotation - In radians, the change in angle since last
 * emit.
 *
 * @memberof ReturnTypes
 */ /**
 * A Rotate is defined as two inputs moving with a changing angle between them.
 *
 * @extends westures-core.Gesture
 * @see {ReturnTypes.RotateData}
 * @memberof westures
 *
 * @param {Element} element - The element to which to associate the gesture.
 * @param {Function} handler - The function handler to execute when a gesture
 * is recognized on the associated element.
 * @param {object} [options] - Gesture customization options.
 * @param {westures-core.STATE_KEYS[]} [options.enableKeys=[]] - List of keys
 * which will enable the gesture. The gesture will not be recognized unless one
 * of these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the enable key is always down.
 * @param {westures-core.STATE_KEYS[]} [options.disableKeys=[]] - List of keys
 * which will disable the gesture. The gesture will not be recognized if one of
 * these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the disable key is never down.
 * @param {number} [options.minInputs=2] - The minimum number of pointers that
 * must be active for the gesture to be recognized. Uses >=.
 * @param {number} [options.maxInputs=Number.MAX_VALUE] - The maximum number of
 * pointers that may be active for the gesture to be recognized. Uses <=.
 * @param {boolean} [options.applySmoothing=true] - Whether to apply inertial
 * smoothing for systems with coarse pointers.
 */ /*#__PURE__*/ function($2779699df4dafe8f$require$Gesture) {
    $71d947154e31347b$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$2779699df4dafe8f$var$Rotate, $2779699df4dafe8f$require$Gesture);
    var _super = $c8df0939769db74d$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$2779699df4dafe8f$var$Rotate);
    function $ba0181cb818a54fd$var$$2779699df4dafe8f$var$Rotate(element, handler) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        };
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$2779699df4dafe8f$var$Rotate);
        var _this;
        options = $057fc04a515b0dc4$export$2e2bcd8739ae039({
        }, $ba0181cb818a54fd$var$$2779699df4dafe8f$var$Rotate.DEFAULTS, options);
        _this = _super.call(this, 'rotate', element, handler, options);
        /**
     * Track the previous angles for each input.
     *
     * @type {number[]}
     */ _this.previousAngles = [];
        /*
     * The outgoing data, with optional inertial smoothing.
     *
     * @override
     * @type {westures-core.Smoothable<number>}
     */ _this.outgoing = new $ba0181cb818a54fd$var$$2779699df4dafe8f$require$Smoothable(options);
        return _this;
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$2779699df4dafe8f$var$Rotate, [
        {
            /**
   * Restart the gesture for a new number of inputs.
   *
   * @param {State} state - current input state.
   */ key: "restart",
            value: function restart(state) {
                this.previousAngles = state.centroid.anglesTo(state.activePoints);
                this.outgoing.restart();
            }
        },
        {
            key: "start",
            value: function start(state) {
                this.restart(state);
            }
        },
        {
            key: "move",
            value: function move(state) {
                var _this = this;
                var stagedAngles = state.centroid.anglesTo(state.activePoints);
                var angle = stagedAngles.reduce(function(total, current, index) {
                    return total + $ba0181cb818a54fd$var$$2779699df4dafe8f$require$angularDifference(current, _this.previousAngles[index]);
                }, 0);
                this.previousAngles = stagedAngles;
                var rotation = angle / state.activePoints.length;
                return {
                    rotation: this.outgoing.next(rotation)
                };
            }
        },
        {
            key: "end",
            value: function end(state) {
                this.restart(state);
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                this.outgoing.restart();
            }
        }
    ]);
    return $ba0181cb818a54fd$var$$2779699df4dafe8f$var$Rotate;
}($ba0181cb818a54fd$var$$2779699df4dafe8f$require$Gesture);
$ba0181cb818a54fd$var$$2779699df4dafe8f$var$Rotate.DEFAULTS = Object.freeze({
    minInputs: 2
});
$ba0181cb818a54fd$var$$2779699df4dafe8f$exports = $ba0181cb818a54fd$var$$2779699df4dafe8f$var$Rotate;
var $ba0181cb818a54fd$var$$29f6d3783b0fe128$exports = {
};
var $ba0181cb818a54fd$var$$29f6d3783b0fe128$require$Gesture = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Gesture;
var $ba0181cb818a54fd$var$$29f6d3783b0fe128$var$PROGRESS_STACK_SIZE = 7;
var $ba0181cb818a54fd$var$$29f6d3783b0fe128$var$MS_THRESHOLD = 300;
var $ba0181cb818a54fd$var$$29f6d3783b0fe128$var$Swipe = /**
 * Data returned when a Swipe is recognized.
 *
 * @typedef {Object} SwipeData
 * @mixes ReturnTypes.BaseData
 *
 * @property {number} velocity - The velocity of the swipe.
 * @property {number} direction - In radians, the direction of the swipe.
 * @property {westures-core.Point2D} point - The point at which the swipe ended.
 * @property {number} time - The epoch time, in ms, when the swipe ended.
 *
 * @memberof ReturnTypes
 */ /**
 * A swipe is defined as input(s) moving in the same direction in an relatively
 * increasing velocity and leaving the screen at some point before it drops
 * below it's escape velocity.
 *
 * @extends westures-core.Gesture
 * @see {ReturnTypes.SwipeData}
 * @memberof westures
 *
 * @param {Element} element - The element to which to associate the gesture.
 * @param {Function} handler - The function handler to execute when a gesture
 * is recognized on the associated element.
 * @param {object} [options] - Gesture customization options.
 * @param {westures-core.STATE_KEYS[]} [options.enableKeys=[]] - List of keys
 * which will enable the gesture. The gesture will not be recognized unless one
 * of these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the enable key is always down.
 * @param {westures-core.STATE_KEYS[]} [options.disableKeys=[]] - List of keys
 * which will disable the gesture. The gesture will not be recognized if one of
 * these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the disable key is never down.
 * @param {number} [options.minInputs=1] - The minimum number of pointers that
 * must be active for the gesture to be recognized. Uses >=.
 * @param {number} [options.maxInputs=Number.MAX_VALUE] - The maximum number of
 * pointers that may be active for the gesture to be recognized. Uses <=.
 */ /*#__PURE__*/ function($29f6d3783b0fe128$require$Gesture) {
    $71d947154e31347b$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$29f6d3783b0fe128$var$Swipe, $29f6d3783b0fe128$require$Gesture);
    var _super = $c8df0939769db74d$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$29f6d3783b0fe128$var$Swipe);
    function $ba0181cb818a54fd$var$$29f6d3783b0fe128$var$Swipe(element, handler) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        };
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$29f6d3783b0fe128$var$Swipe);
        var _this;
        _this = _super.call(this, 'swipe', element, handler, options);
        /**
     * Moves list.
     *
     * @type {object[]}
     */ _this.moves = [];
        /**
     * Data to emit when all points have ended.
     *
     * @type {ReturnTypes.SwipeData}
     */ _this.saved = null;
        return _this;
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$29f6d3783b0fe128$var$Swipe, [
        {
            /**
   * Restart the swipe state for a new numper of inputs.
   */ key: "restart",
            value: function restart() {
                this.moves = [];
                this.saved = null;
            }
        },
        {
            key: "start",
            value: function start() {
                this.restart();
            }
        },
        {
            key: "move",
            value: function move(state) {
                this.moves.push({
                    time: Date.now(),
                    point: state.centroid
                });
                if (this.moves.length > $ba0181cb818a54fd$var$$29f6d3783b0fe128$var$PROGRESS_STACK_SIZE) this.moves.splice(0, this.moves.length - $ba0181cb818a54fd$var$$29f6d3783b0fe128$var$PROGRESS_STACK_SIZE);
            }
        },
        {
            key: "end",
            value: function end(state) {
                var result = this.getResult();
                this.moves = [];
                if (state.active.length > 0) {
                    this.saved = result;
                    return null;
                }
                this.saved = null;
                return $ba0181cb818a54fd$var$$29f6d3783b0fe128$var$Swipe.validate(result);
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                this.restart();
            }
        },
        {
            /**
   * Get the swipe result.
   *
   * @returns {?ReturnTypes.SwipeData}
   */ key: "getResult",
            value: function getResult() {
                if (this.moves.length < $ba0181cb818a54fd$var$$29f6d3783b0fe128$var$PROGRESS_STACK_SIZE) return this.saved;
                var vlim = $ba0181cb818a54fd$var$$29f6d3783b0fe128$var$PROGRESS_STACK_SIZE - 1;
                var _vlim = this.moves[vlim], point = _vlim.point, time = _vlim.time;
                var velocity = $ba0181cb818a54fd$var$$29f6d3783b0fe128$var$Swipe.calc_velocity(this.moves, vlim);
                var direction = $ba0181cb818a54fd$var$$29f6d3783b0fe128$var$Swipe.calc_angle(this.moves, vlim);
                var centroid = point;
                return {
                    point: point,
                    velocity: velocity,
                    direction: direction,
                    time: time,
                    centroid: centroid
                };
            }
        }
    ], [
        {
            key: "validate",
            value: /**
   * Validates that an emit should occur with the given data.
   *
   * @static
   * @param {?ReturnTypes.SwipeData} data
   * @returns {?ReturnTypes.SwipeData}
   */ function validate(data) {
                if (data == null) return null;
                return Date.now() - data.time > $ba0181cb818a54fd$var$$29f6d3783b0fe128$var$MS_THRESHOLD ? null : data;
            }
        },
        {
            key: "calc_angle",
            value: /**
   * Calculates the angle of movement along a series of moves.
   *
   * @static
   * @see {@link https://en.wikipedia.org/wiki/Mean_of_circular_quantities}
   *
   * @param {{time: number, point: westures-core.Point2D}} moves - The moves
   * list to process.
   * @param {number} vlim - The number of moves to process.
   *
   * @return {number} The angle of the movement.
   */ function calc_angle(moves, vlim) {
                var point = moves[vlim].point;
                var sin = 0;
                var cos = 0;
                for(var i = 0; i < vlim; ++i){
                    var angle = moves[i].point.angleTo(point);
                    sin += Math.sin(angle);
                    cos += Math.cos(angle);
                }
                sin /= vlim;
                cos /= vlim;
                return Math.atan2(sin, cos);
            }
        },
        {
            key: "velocity",
            value: /**
   * Local helper function for calculating the velocity between two timestamped
   * points.
   *
   * @static
   * @param {object} start
   * @param {westures-core.Point2D} start.point
   * @param {number} start.time
   * @param {object} end
   * @param {westures-core.Point2D} end.point
   * @param {number} end.time
   *
   * @return {number} velocity from start to end point.
   */ function velocity(start, end) {
                var distance = end.point.distanceTo(start.point);
                var time = end.time - start.time + 1;
                return distance / time;
            }
        },
        {
            key: "calc_velocity",
            value: /**
   * Calculates the veloctiy of movement through a series of moves.
   *
   * @static
   * @param {{time: number, point: westures-core.Point2D}} moves - The moves
   * list to process.
   * @param {number} vlim - The number of moves to process.
   *
   * @return {number} The velocity of the moves.
   */ function calc_velocity(moves, vlim) {
                var max = 0;
                for(var i = 0; i < vlim; ++i){
                    var current = $ba0181cb818a54fd$var$$29f6d3783b0fe128$var$Swipe.velocity(moves[i], moves[i + 1]);
                    if (current > max) max = current;
                }
                return max;
            }
        }
    ]);
    return $ba0181cb818a54fd$var$$29f6d3783b0fe128$var$Swipe;
}($ba0181cb818a54fd$var$$29f6d3783b0fe128$require$Gesture);
$ba0181cb818a54fd$var$$29f6d3783b0fe128$exports = $ba0181cb818a54fd$var$$29f6d3783b0fe128$var$Swipe;
var $ba0181cb818a54fd$var$$5bf1e923ca9fec67$exports = {
};
var $ba0181cb818a54fd$var$$5bf1e923ca9fec67$require$angularDifference = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.angularDifference;
var $ba0181cb818a54fd$var$$5bf1e923ca9fec67$require$Smoothable = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Smoothable;
var $ba0181cb818a54fd$var$$5bf1e923ca9fec67$var$Swivel = /**
 * Data returned when a Swivel is recognized.
 *
 * @typedef {Object} SwivelData
 * @mixes ReturnTypes.BaseData
 *
 * @property {number} rotation - In radians, the change in angle since last
 * emit.
 * @property {westures-core.Point2D} pivot - The pivot point.
 *
 * @memberof ReturnTypes
 */ /**
 * A Swivel is a single input rotating around a fixed point. The fixed point is
 * determined by the input's location at its 'start' phase.
 *
 * @extends westures-core.Gesture
 * @see {ReturnTypes.SwivelData}
 * @memberof westures
 *
 * @param {Element} element - The element to which to associate the gesture.
 * @param {Function} handler - The function handler to execute when a gesture
 * is recognized on the associated element.
 * @param {object} [options] - Gesture customization options.
 * @param {westures-core.STATE_KEYS[]} [options.enableKeys=[]] - List of keys
 * which will enable the gesture. The gesture will not be recognized unless one
 * of these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the enable key is always down.
 * @param {westures-core.STATE_KEYS[]} [options.disableKeys=[]] - List of keys
 * which will disable the gesture. The gesture will not be recognized if one of
 * these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the disable key is never down.
 * @param {number} [options.minInputs=1] - The minimum number of pointers that
 * must be active for the gesture to be recognized. Uses >=.
 * @param {number} [options.maxInputs=Number.MAX_VALUE] - The maximum number of
 * pointers that may be active for the gesture to be recognized. Uses <=.
 * @param {boolean} [options.applySmoothing=true] - Whether to apply inertial
 * smoothing for systems with coarse pointers.
 * @param {number} [options.deadzoneRadius=15] - The radius in pixels around the
 * start point in which to do nothing.
 * @param {Element} [options.dynamicPivot=false] - Normally the center point of
 * the gesture's element is used as the pivot. If this option is set, the
 * initial contact point with the element is used as the pivot instead.
 */ /*#__PURE__*/ function($5618dc3399c82d06$exports) {
    $71d947154e31347b$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$5bf1e923ca9fec67$var$Swivel, $5618dc3399c82d06$exports);
    var _super = $c8df0939769db74d$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$5bf1e923ca9fec67$var$Swivel);
    function $ba0181cb818a54fd$var$$5bf1e923ca9fec67$var$Swivel(element, handler) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        };
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$5bf1e923ca9fec67$var$Swivel);
        var _this;
        _this = _super.call(this, 'swivel', element, handler, options);
        /*
     * The outgoing data, with optional inertial smoothing.
     *
     * @override
     * @type {westures-core.Smoothable<number>}
     */ _this.outgoing = new $ba0181cb818a54fd$var$$5bf1e923ca9fec67$require$Smoothable(options);
        return _this;
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$5bf1e923ca9fec67$var$Swivel, [
        {
            key: "updatePrevious",
            value: function updatePrevious(state) {
                this.previous = this.pivot.angleTo(state.centroid);
            }
        },
        {
            key: "move",
            value: function move(state) {
                var pivot = this.pivot;
                var angle = pivot.angleTo(state.centroid);
                var rotation = $ba0181cb818a54fd$var$$5bf1e923ca9fec67$require$angularDifference(angle, this.previous);
                var rv = null;
                if (pivot.distanceTo(state.centroid) > this.options.deadzoneRadius) rv = {
                    rotation: this.outgoing.next(rotation),
                    pivot: pivot
                };
                /*
     * Updating the previous angle regardless of emit prevents sudden flips when
     * the user exits the deadzone circle.
     */ this.previous = angle;
                return rv;
            }
        }
    ]);
    return $ba0181cb818a54fd$var$$5bf1e923ca9fec67$var$Swivel;
}($ba0181cb818a54fd$var$$5618dc3399c82d06$exports);
$ba0181cb818a54fd$var$$5bf1e923ca9fec67$exports = $ba0181cb818a54fd$var$$5bf1e923ca9fec67$var$Swivel;
var $ba0181cb818a54fd$var$$2f0219f585763ab0$exports = {
};
var $ba0181cb818a54fd$var$$2f0219f585763ab0$require$Gesture = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Gesture;
var $ba0181cb818a54fd$var$$2f0219f585763ab0$require$Point2D = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Point2D;
var $ba0181cb818a54fd$var$$2f0219f585763ab0$var$Tap = /**
 * Data returned when a Tap is recognized.
 *
 * @typedef {Object} TapData
 * @mixes ReturnTypes.BaseData
 *
 * @property {number} x - x coordinate of tap point.
 * @property {number} y - y coordinate of tap point.
 *
 * @memberof ReturnTypes
 */ /**
 * A Tap is defined as a touchstart to touchend event in quick succession.
 *
 * @extends westures-core.Gesture
 * @see {ReturnTypes.TapData}
 * @memberof westures
 *
 * @param {Element} element - The element to which to associate the gesture.
 * @param {Function} handler - The function handler to execute when a gesture
 * is recognized on the associated element.
 * @param {object} [options] - Gesture customization options.
 * @param {westures-core.STATE_KEYS[]} [options.enableKeys=[]] - List of keys
 * which will enable the gesture. The gesture will not be recognized unless one
 * of these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the enable key is always down.
 * @param {westures-core.STATE_KEYS[]} [options.disableKeys=[]] - List of keys
 * which will disable the gesture. The gesture will not be recognized if one of
 * these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the disable key is never down.
 * @param {number} [options.minInputs=1] - The minimum number of pointers that
 * must be active for the gesture to be recognized. Uses >=.
 * @param {number} [options.maxInputs=Number.MAX_VALUE] - The maximum number of
 * pointers that may be active for the gesture to be recognized. Uses <=.
 * @param {number} [options.minDelay=0] - The minimum delay between a touchstart
 * and touchend can be configured in milliseconds.
 * @param {number} [options.maxDelay=300] - The maximum delay between a
 * touchstart and touchend can be configured in milliseconds.
 * @param {number} [options.maxRetain=300] - The maximum time after a tap ends
 * before it is discarded can be configured in milliseconds. Useful for
 * multi-tap gestures, to allow things like slow "double clicks".
 * @param {number} [options.numTaps=1] - Number of taps to require.
 * @param {number} [options.tolerance=10] - The tolerance in pixels an input can
 * move before it will no longer be considered part of a tap.
 */ /*#__PURE__*/ function($2f0219f585763ab0$require$Gesture) {
    $71d947154e31347b$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$2f0219f585763ab0$var$Tap, $2f0219f585763ab0$require$Gesture);
    var _super = $c8df0939769db74d$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$2f0219f585763ab0$var$Tap);
    function $ba0181cb818a54fd$var$$2f0219f585763ab0$var$Tap(element, handler) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        };
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$2f0219f585763ab0$var$Tap);
        var _this;
        _this = _super.call(this, 'tap', element, handler, $057fc04a515b0dc4$export$2e2bcd8739ae039({
        }, $ba0181cb818a54fd$var$$2f0219f585763ab0$var$Tap.DEFAULTS, options));
        /**
     * An array of inputs that have ended recently.
     *
     * @type {Input[]}
     */ _this.taps = [];
        return _this;
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$2f0219f585763ab0$var$Tap, [
        {
            key: "end",
            value: function end(state) {
                var now = Date.now();
                var _options = this.options, minDelay = _options.minDelay, maxDelay = _options.maxDelay, maxRetain = _options.maxRetain, numTaps = _options.numTaps, tolerance = _options.tolerance;
                // Save the recently ended inputs as taps.
                this.taps = this.taps.concat(state.getInputsInPhase('end')).filter(function(input) {
                    var elapsed = input.elapsedTime;
                    var tdiff = now - input.current.time;
                    return elapsed <= maxDelay && elapsed >= minDelay && tdiff <= maxRetain;
                });
                // Validate the list of taps.
                if (this.taps.length !== numTaps || this.taps.some(function(i) {
                    return i.totalDistance() > tolerance;
                })) return null;
                var centroid = $ba0181cb818a54fd$var$$2f0219f585763ab0$require$Point2D.centroid(this.taps.map(function(i) {
                    return i.current.point;
                }));
                this.taps = []; // Critical! Used taps need to be cleared!
                return $057fc04a515b0dc4$export$2e2bcd8739ae039({
                    centroid: centroid
                }, centroid);
            }
        }
    ]);
    return $ba0181cb818a54fd$var$$2f0219f585763ab0$var$Tap;
}($ba0181cb818a54fd$var$$2f0219f585763ab0$require$Gesture);
$ba0181cb818a54fd$var$$2f0219f585763ab0$var$Tap.DEFAULTS = Object.freeze({
    minDelay: 0,
    maxDelay: 300,
    maxRetain: 300,
    numTaps: 1,
    tolerance: 10
});
$ba0181cb818a54fd$var$$2f0219f585763ab0$exports = $ba0181cb818a54fd$var$$2f0219f585763ab0$var$Tap;
var $ba0181cb818a54fd$var$$13a50dd07826f9eb$exports = {
};
var $ba0181cb818a54fd$var$$13a50dd07826f9eb$require$Gesture = $ba0181cb818a54fd$var$$17807945cdde5d67$exports.Gesture;
var $ba0181cb818a54fd$var$$13a50dd07826f9eb$var$Track = /**
 * Data returned when a Track is recognized.
 *
 * @typedef {Object} TrackData
 * @mixes ReturnTypes.BaseData
 *
 * @property {westures-core.Point2D[]} active - Points currently in 'start' or
 *    'move' phase.
 *
 * @memberof ReturnTypes
 */ /**
 * A Track gesture forwards a list of active points and their centroid on each
 * of the selected phases.
 *
 * @extends westures-core.Gesture
 * @see {ReturnTypes.TrackData}
 * @memberof westures
 *
 * @param {Element} element - The element to which to associate the gesture.
 * @param {Function} handler - The function handler to execute when a gesture
 * is recognized on the associated element.
 * @param {object} [options] - Gesture customization options.
 * @param {westures-core.STATE_KEYS[]} [options.enableKeys=[]] - List of keys
 * which will enable the gesture. The gesture will not be recognized unless one
 * of these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the enable key is always down.
 * @param {westures-core.STATE_KEYS[]} [options.disableKeys=[]] - List of keys
 * which will disable the gesture. The gesture will not be recognized if one of
 * these keys is pressed while the interaction occurs. If not specified or an
 * empty list, the gesture is treated as though the disable key is never down.
 * @param {number} [options.minInputs=1] - The minimum number of pointers that
 * must be active for the gesture to be recognized. Uses >=.
 * @param {number} [options.maxInputs=Number.MAX_VALUE] - The maximum number of
 * pointers that may be active for the gesture to be recognized. Uses <=.
 * @param {string[]} [options.phases=[]] Phases to recognize. Entries can be any
 * or all of 'start', 'move', 'end', and 'cancel'.
 */ /*#__PURE__*/ function($13a50dd07826f9eb$require$Gesture) {
    $71d947154e31347b$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$13a50dd07826f9eb$var$Track, $13a50dd07826f9eb$require$Gesture);
    var _super = $c8df0939769db74d$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$13a50dd07826f9eb$var$Track);
    function $ba0181cb818a54fd$var$$13a50dd07826f9eb$var$Track(element, handler) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        };
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $ba0181cb818a54fd$var$$13a50dd07826f9eb$var$Track);
        return _super.call(this, 'track', element, handler, $057fc04a515b0dc4$export$2e2bcd8739ae039({
        }, $ba0181cb818a54fd$var$$13a50dd07826f9eb$var$Track.DEFAULTS, options));
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($ba0181cb818a54fd$var$$13a50dd07826f9eb$var$Track, [
        {
            /**
   * Filters out the state's data, down to what should be emitted.

   * @param {State} state - current input state.
   * @return {ReturnTypes.TrackData}
   */ key: "data",
            value: function data(param) {
                var activePoints = param.activePoints;
                return {
                    active: activePoints
                };
            }
        },
        {
            key: "tracks",
            value: function tracks(phase) {
                return this.options.phases.includes(phase);
            }
        },
        {
            key: "start",
            value: function start(state) {
                return this.tracks('start') ? this.data(state) : null;
            }
        },
        {
            key: "move",
            value: function move(state) {
                return this.tracks('move') ? this.data(state) : null;
            }
        },
        {
            key: "end",
            value: function end(state) {
                return this.tracks('end') ? this.data(state) : null;
            }
        },
        {
            key: "cancel",
            value: function cancel(state) {
                return this.tracks('cancel') ? this.data(state) : null;
            }
        }
    ]);
    return $ba0181cb818a54fd$var$$13a50dd07826f9eb$var$Track;
}($ba0181cb818a54fd$var$$13a50dd07826f9eb$require$Gesture);
$ba0181cb818a54fd$var$$13a50dd07826f9eb$var$Track.DEFAULTS = Object.freeze({
    phases: Object.freeze([])
});
$ba0181cb818a54fd$var$$13a50dd07826f9eb$exports = $ba0181cb818a54fd$var$$13a50dd07826f9eb$var$Track;
$ba0181cb818a54fd$exports = $057fc04a515b0dc4$export$2e2bcd8739ae039({
    Pan: $ba0181cb818a54fd$var$$edded22326d64913$exports,
    Pinch: $ba0181cb818a54fd$var$$a29eb49c9650e38a$exports,
    Press: $ba0181cb818a54fd$var$$044241a6e313bbcb$exports,
    Pull: $ba0181cb818a54fd$var$$b6747a8030ff7e4d$exports,
    Rotate: $ba0181cb818a54fd$var$$2779699df4dafe8f$exports,
    Swipe: $ba0181cb818a54fd$var$$29f6d3783b0fe128$exports,
    Swivel: $ba0181cb818a54fd$var$$5bf1e923ca9fec67$exports,
    Tap: $ba0181cb818a54fd$var$$2f0219f585763ab0$exports,
    Track: $ba0181cb818a54fd$var$$13a50dd07826f9eb$exports
}, $ba0181cb818a54fd$var$$17807945cdde5d67$exports); /**
 * Here are the return "types" of the gestures that are included in this
 * package.
 *
 * @namespace ReturnTypes
 */  /**
 * The base data that is included for all emitted gestures.
 *
 * @typedef {Object} BaseData
 *
 * @property {westures-core.Point2D} centroid - The centroid of the input
 * points.
 * @property {Event} event - The input event which caused the gesture to be
 * recognized.
 * @property {string} phase - 'start', 'move', 'end', or 'cancel'.
 * @property {number} radius - The distance of the furthest input to the
 * centroid.
 * @property {string} type - The name of the gesture as specified by its
 * designer.
 * @property {Element} target - The bound target of the gesture.
 *
 * @memberof ReturnTypes
 */ 


var $3242e8d60429fdba$var$region = new $ba0181cb818a54fd$exports.Region();
var $3242e8d60429fdba$var$container = document.querySelector('#container');
var $3242e8d60429fdba$var$SIXTY_FPS = 1000 / 60;
var $3242e8d60429fdba$var$FRICTION = 0.95;
var $3242e8d60429fdba$var$MULTI = 7;
var $3242e8d60429fdba$var$LIMIT = 0.1;
var $3242e8d60429fdba$var$MAX_V = 7;
function $3242e8d60429fdba$var$random8Bit() {
    return Math.floor(Math.random() * 256);
}
function $3242e8d60429fdba$var$reduce(value) {
    value *= $3242e8d60429fdba$var$FRICTION;
    return Math.abs(value) < $3242e8d60429fdba$var$LIMIT ? 0 : value;
}
var $3242e8d60429fdba$var$Interactable = /**
 * Provides an interactable element using westures.
 */ /*#__PURE__*/ function() {
    function $3242e8d60429fdba$var$Interactable(name, color) {
        $9f0d1b2be8dbfb2b$export$2e2bcd8739ae039(this, $3242e8d60429fdba$var$Interactable);
        this.element = document.createElement('div');
        this.element.style.backgroundColor = color;
        this.label = document.createElement('h1');
        this.label.innerText = name;
        this.element.appendChild(this.label);
        $3242e8d60429fdba$var$container.appendChild(this.element);
        this.rotation = 0;
        this.scale = 1;
        this.x = 0;
        this.y = 0;
        this.velocityX = 0;
        this.velocityY = 0;
        this.animate = false;
        this.update_fn = this.update.bind(this);
        this.swipe_interval = null;
        this.swipe_fn = this.swipeAnimation.bind(this);
        this.setupTracking();
    }
    $79c852e11afd525c$export$2e2bcd8739ae039($3242e8d60429fdba$var$Interactable, [
        {
            /**
   * Setups up tracking of the interactable element.
   */ key: "setupTracking",
            value: function setupTracking() {
                var _this = this;
                var fns = {
                    end: function(data) {
                        if (data.active.length == 0) _this.animate = false;
                    },
                    start: function() {
                        _this.animate = true;
                        window.requestAnimationFrame(_this.update_fn);
                        clearInterval(_this.swipe_interval);
                    }
                };
                $3242e8d60429fdba$var$region.addGesture(new $ba0181cb818a54fd$exports.Track(this.element, function(data) {
                    return fns[data.phase](data);
                }, {
                    phases: Object.keys(fns)
                }));
            }
        },
        {
            key: "randomBackground",
            value: function randomBackground() {
                var R = $3242e8d60429fdba$var$random8Bit();
                var G = $3242e8d60429fdba$var$random8Bit();
                var B = $3242e8d60429fdba$var$random8Bit();
                this.element.style.backgroundColor = "rgb(".concat(R, ", ").concat(G, ", ").concat(B, ")");
            }
        },
        {
            key: "addTap",
            value: function addTap(options) {
                var _this = this;
                $3242e8d60429fdba$var$region.addGesture(new $ba0181cb818a54fd$exports.Tap(this.element, function() {
                    _this.randomBackground();
                }, options));
                return this;
            }
        },
        {
            key: "addPress",
            value: function addPress(options) {
                var _this = this;
                $3242e8d60429fdba$var$region.addGesture(new $ba0181cb818a54fd$exports.Press(this.element, function() {
                    _this.randomBackground();
                }, options));
                return this;
            }
        },
        {
            key: "addRotate",
            value: function addRotate(options) {
                var _this = this;
                $3242e8d60429fdba$var$region.addGesture(new $ba0181cb818a54fd$exports.Rotate(this.element, function(data) {
                    _this.rotation += data.rotation;
                }, options));
                return this;
            }
        },
        {
            key: "addPan",
            value: function addPan(options) {
                var _this = this;
                $3242e8d60429fdba$var$region.addGesture(new $ba0181cb818a54fd$exports.Pan(this.element, function(data) {
                    _this.x += data.translation.x;
                    _this.y += data.translation.y;
                }, options));
                return this;
            }
        },
        {
            key: "addSwipe",
            value: function addSwipe(options) {
                var _this = this;
                $3242e8d60429fdba$var$region.addGesture(new $ba0181cb818a54fd$exports.Swipe(this.element, function(data) {
                    var velocity = data.velocity > $3242e8d60429fdba$var$MAX_V ? $3242e8d60429fdba$var$MAX_V : data.velocity;
                    _this.velocityX = velocity * Math.cos(data.direction) * $3242e8d60429fdba$var$MULTI;
                    _this.velocityY = velocity * Math.sin(data.direction) * $3242e8d60429fdba$var$MULTI;
                    _this.swipe_interval = setInterval(_this.swipe_fn, $3242e8d60429fdba$var$SIXTY_FPS);
                }, options));
                return this;
            }
        },
        {
            key: "addSwivel",
            value: function addSwivel(options) {
                var _this = this;
                $3242e8d60429fdba$var$region.addGesture(new $ba0181cb818a54fd$exports.Swivel(this.element, function(data) {
                    _this.rotation += data.rotation;
                }, $057fc04a515b0dc4$export$2e2bcd8739ae039({
                    pivotCenter: this.element
                }, options)));
                return this;
            }
        },
        {
            key: "addPinch",
            value: function addPinch(options) {
                var _this = this;
                $3242e8d60429fdba$var$region.addGesture(new $ba0181cb818a54fd$exports.Pinch(this.element, function(data) {
                    _this.scale *= data.scale;
                }, options));
                return this;
            }
        },
        {
            key: "addPull",
            value: function addPull(options) {
                var _this = this;
                $3242e8d60429fdba$var$region.addGesture(new $ba0181cb818a54fd$exports.Pull(this.element, function(data) {
                    _this.scale *= data.scale;
                }, $057fc04a515b0dc4$export$2e2bcd8739ae039({
                    pivotCenter: this.element
                }, options)));
                return this;
            }
        },
        {
            key: "update",
            value: function update() {
                var rotate = "rotate(".concat(this.rotation, "rad) ");
                var translate = "translate(".concat(this.x, "px, ").concat(this.y, "px) ");
                var scale = "scale(".concat(this.scale, ") ");
                this.element.style.transform = translate + rotate + scale;
                if (this.animate) window.requestAnimationFrame(this.update_fn);
            }
        },
        {
            key: "swipeAnimation",
            value: function swipeAnimation() {
                this.x += this.velocityX;
                this.y += this.velocityY;
                this.velocityX = $3242e8d60429fdba$var$reduce(this.velocityX);
                this.velocityY = $3242e8d60429fdba$var$reduce(this.velocityY);
                if (this.velocityY === 0 && this.velocityX === 0) clearInterval(this.swipe_interval);
                window.requestAnimationFrame(this.update_fn);
            }
        }
    ]);
    return $3242e8d60429fdba$var$Interactable;
}();
/* ========================================================================== */ var $3242e8d60429fdba$var$NUM_COLOURS = 13;
var $3242e8d60429fdba$var$INTERVAL = Math.floor(360 / $3242e8d60429fdba$var$NUM_COLOURS);
var $3242e8d60429fdba$var$PALETTE = [];
// Generate a Pastel Rainbow
for(var i = 0; i < $3242e8d60429fdba$var$NUM_COLOURS; i++){
    var hue = $3242e8d60429fdba$var$INTERVAL * i;
    $3242e8d60429fdba$var$PALETTE.push("hsl(".concat(hue, ", 100%, 75%)"));
}
var $3242e8d60429fdba$var$cidx = 0;
function $3242e8d60429fdba$var$nextColour() {
    return $3242e8d60429fdba$var$PALETTE[$3242e8d60429fdba$var$cidx++];
}
// Basic gestures
new $3242e8d60429fdba$var$Interactable('TAP', $3242e8d60429fdba$var$nextColour()).addTap();
new $3242e8d60429fdba$var$Interactable('PAN', $3242e8d60429fdba$var$nextColour()).addPan();
new $3242e8d60429fdba$var$Interactable('PINCH', $3242e8d60429fdba$var$nextColour()).addPinch();
new $3242e8d60429fdba$var$Interactable('ROTATE', $3242e8d60429fdba$var$nextColour()).addRotate();
new $3242e8d60429fdba$var$Interactable('SWIPE', $3242e8d60429fdba$var$nextColour()).addSwipe();
new $3242e8d60429fdba$var$Interactable('PRESS', $3242e8d60429fdba$var$nextColour()).addPress();
new $3242e8d60429fdba$var$Interactable('SWIVEL', $3242e8d60429fdba$var$nextColour()).addSwivel();
new $3242e8d60429fdba$var$Interactable('PULL', $3242e8d60429fdba$var$nextColour()).addPull();
// Mix and match!
// new Interactable('ROTATE and SWIVEL', 'forestgreen').addRotate().addSwivel();
new $3242e8d60429fdba$var$Interactable('TAP, PAN, PINCH, SWIPE, and ROTATE\n(desktop: CTRL to SWIVEL and PULL)', $3242e8d60429fdba$var$nextColour()).addTap().addPan({
    disableKeys: [
        'ctrlKey'
    ]
}).addPinch().addRotate().addSwipe().addSwivel({
    enableKeys: [
        'ctrlKey'
    ]
}).addPull({
    enableKeys: [
        'ctrlKey'
    ]
});
new $3242e8d60429fdba$var$Interactable('QUICK DOUBLE TAP', $3242e8d60429fdba$var$nextColour()).addTap({
    numTaps: 2
});
new $3242e8d60429fdba$var$Interactable('FIVE QUICK TAPS', $3242e8d60429fdba$var$nextColour()).addTap({
    maxDelay: 1000,
    maxRetain: 1000,
    numTaps: 5
});
new $3242e8d60429fdba$var$Interactable('SLOW TAP', $3242e8d60429fdba$var$nextColour()).addTap({
    minDelay: 300,
    maxDelay: 1000
});
new $3242e8d60429fdba$var$Interactable('TWO SLOW TAPS', $3242e8d60429fdba$var$nextColour()).addTap({
    minDelay: 300,
    maxDelay: 1000,
    maxRetain: 2000,
    numTaps: 2
});


//# sourceMappingURL=sample.js.map
