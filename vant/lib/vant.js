(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("vant", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["vant"] = factory(require("vue"));
	else
		root["vant"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isAndroid; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


var isServer = vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer;

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function get(object, path) {
  var keys = path.split('.');
  var result = object;

  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });

  return result;
}

var camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}

function isAndroid() {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(3);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(42)('wks');
var uid = __webpack_require__(41);
var Symbol = __webpack_require__(6).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(19);
var createDesc = __webpack_require__(45);
module.exports = __webpack_require__(14) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(7);
var ctx = __webpack_require__(21);
var hide = __webpack_require__(10);
var has = __webpack_require__(17);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cancel; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/**
 * requestAnimationFrame polyfill
 */



var prev = Date.now();

/* istanbul ignore next */
function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}

/* istanbul ignore next */
var root = _index__WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "f"] ? global : window;

/* istanbul ignore next */
var iRaf = root.requestAnimationFrame || root.webkitRequestAnimationFrame || fallback;

/* istanbul ignore next */
var iCancel = root.cancelAnimationFrame || root.webkitCancelAnimationFrame || root.clearTimeout;

function raf(fn) {
  return iRaf.call(root, fn);
}

function cancel(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(48)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(18)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(86);
var toPrimitive = __webpack_require__(85);
var dP = Object.defineProperty;

exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(20);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(20);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(19).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(5)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(27);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(42)('keys');
var uid = __webpack_require__(41);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(44);
var defined = __webpack_require__(27);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(83);
var enumBugKeys = __webpack_require__(40);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var document = __webpack_require__(6).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(49), __esModule: true };

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var isObject = __webpack_require__(15);
var newPromiseCapability = __webpack_require__(22);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var invoke = __webpack_require__(56);
var html = __webpack_require__(37);
var cel = __webpack_require__(30);
var global = __webpack_require__(6);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(16)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(8);
var aFunction = __webpack_require__(20);
var SPECIES = __webpack_require__(5)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(16);
var TAG = __webpack_require__(5)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(6).document;
module.exports = document && document.documentElement;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(38);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(71);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(13);
var $iterCreate = __webpack_require__(70);
var setToStringTag = __webpack_require__(23);
var getPrototypeOf = __webpack_require__(67);
var ITERATOR = __webpack_require__(5)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 41 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(26);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(16);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vue-Lazyload.js v1.2.6
 * (c) 2018 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";function t(t){return t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function e(t){t=t||{};var e=arguments.length,i=0;if(1===e)return t;for(;++i<e;){var o=arguments[i];g(t)&&(t=o),r(o)&&n(t,o)}return t}function n(t,n){m(t,n);for(var o in n)if("__proto__"!==o&&i(n,o)){var a=n[o];r(a)?("undefined"===L(t[o])&&"function"===L(a)&&(t[o]=a),t[o]=e(t[o]||{},a)):t[o]=a}return t}function r(t){return"object"===L(t)||"function"===L(t)}function i(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function o(t,e){if(t.length){var n=t.indexOf(e);return n>-1?t.splice(n,1):void 0}}function a(t,e){for(var n=!1,r=0,i=t.length;r<i;r++)if(e(t[r])){n=!0;break}return n}function s(t,e){if("IMG"===t.tagName&&t.getAttribute("data-srcset")){var n=t.getAttribute("data-srcset"),r=[],i=t.parentNode,o=i.offsetWidth*e,a=void 0,s=void 0,u=void 0;n=n.trim().split(","),n.map(function(t){t=t.trim(),a=t.lastIndexOf(" "),-1===a?(s=t,u=999998):(s=t.substr(0,a),u=parseInt(t.substr(a+1,t.length-a-2),10)),r.push([u,s])}),r.sort(function(t,e){if(t[0]<e[0])return-1;if(t[0]>e[0])return 1;if(t[0]===e[0]){if(-1!==e[1].indexOf(".webp",e[1].length-5))return 1;if(-1!==t[1].indexOf(".webp",t[1].length-5))return-1}return 0});for(var l="",d=void 0,c=r.length,h=0;h<c;h++)if(d=r[h],d[0]>=o){l=d[1];break}return l}}function u(t,e){for(var n=void 0,r=0,i=t.length;r<i;r++)if(e(t[r])){n=t[r];break}return n}function l(){if(!E)return!1;var t=!0,e=document;try{var n=e.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",e.body.appendChild(n),t=!n.offsetWidth,e.body.removeChild(n)}catch(e){t=!1}return t}function d(t,e){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,a=arguments,s=function(){r=Date.now(),n=!1,t.apply(o,a)};i>=e?s():n=setTimeout(s,e)}}}function c(t){return null!==t&&"object"===(void 0===t?"undefined":p(t))}function h(t){if(!(t instanceof Object))return[];if(Object.keys)return Object.keys(t);var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e}function f(t){for(var e=t.length,n=[],r=0;r<e;r++)n.push(t[r]);return n}function v(){}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},y=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),g=function(t){return null==t||"function"!=typeof t&&"object"!==(void 0===t?"undefined":p(t))},m=function(t,e){if(null===t||void 0===t)throw new TypeError("expected first argument to be an object.");if(void 0===e||"undefined"==typeof Symbol)return t;if("function"!=typeof Object.getOwnPropertySymbols)return t;for(var n=Object.prototype.propertyIsEnumerable,r=Object(t),i=arguments.length,o=0;++o<i;)for(var a=Object(arguments[o]),s=Object.getOwnPropertySymbols(a),u=0;u<s.length;u++){var l=s[u];n.call(a,l)&&(r[l]=a[l])}return r},w=Object.prototype.toString,L=function(e){var n=void 0===e?"undefined":p(e);return"undefined"===n?"undefined":null===e?"null":!0===e||!1===e||e instanceof Boolean?"boolean":"string"===n||e instanceof String?"string":"number"===n||e instanceof Number?"number":"function"===n||e instanceof Function?void 0!==e.constructor.name&&"Generator"===e.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(e)?"array":e instanceof RegExp?"regexp":e instanceof Date?"date":(n=w.call(e),"[object RegExp]"===n?"regexp":"[object Date]"===n?"date":"[object Arguments]"===n?"arguments":"[object Error]"===n?"error":"[object Promise]"===n?"promise":t(e)?"buffer":"[object Set]"===n?"set":"[object WeakSet]"===n?"weakset":"[object Map]"===n?"map":"[object WeakMap]"===n?"weakmap":"[object Symbol]"===n?"symbol":"[object Map Iterator]"===n?"mapiterator":"[object Set Iterator]"===n?"setiterator":"[object String Iterator]"===n?"stringiterator":"[object Array Iterator]"===n?"arrayiterator":"[object Int8Array]"===n?"int8array":"[object Uint8Array]"===n?"uint8array":"[object Uint8ClampedArray]"===n?"uint8clampedarray":"[object Int16Array]"===n?"int16array":"[object Uint16Array]"===n?"uint16array":"[object Int32Array]"===n?"int32array":"[object Uint32Array]"===n?"uint32array":"[object Float32Array]"===n?"float32array":"[object Float64Array]"===n?"float64array":"object")},_=e,E="undefined"!=typeof window,A=E&&"IntersectionObserver"in window,k={event:"event",observer:"observer"},z=function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}if(E)return"function"==typeof window.CustomEvent?window.CustomEvent:(t.prototype=window.Event.prototype,t)}(),j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return E?window.devicePixelRatio||t:t},T=function(){if(E){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}}(),S={on:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];T?t.addEventListener(e,n,{capture:r,passive:!0}):t.addEventListener(e,n,r)},off:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.removeEventListener(e,n,r)}},I=function(t,e,n){var r=new Image;r.src=t.src,r.onload=function(){e({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src})},r.onerror=function(t){n(t)}},O=function(t,e){return"undefined"!=typeof getComputedStyle?getComputedStyle(t,null).getPropertyValue(e):t.style[e]},$=function(t){return O(t,"overflow")+O(t,"overflow-y")+O(t,"overflow-x")},x=function(t){if(E){if(!(t instanceof HTMLElement))return window;for(var e=t;e&&e!==document.body&&e!==document.documentElement&&e.parentNode;){if(/(scroll|auto)/.test($(e)))return e;e=e.parentNode}return window}},H={},Q=function(){function t(e){var n=e.el,r=e.src,i=e.error,o=e.loading,a=e.bindType,s=e.$parent,u=e.options,l=e.elRenderer;b(this,t),this.el=n,this.src=r,this.error=i,this.loading=o,this.bindType=a,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=s,this.elRenderer=l,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return y(t,[{key:"initState",value:function(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(t){this.performanceData[t]=Date.now()}},{key:"update",value:function(t){var e=t.src,n=t.loading,r=t.error,i=this.src;this.src=e,this.loading=n,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var t=this;h(this.options.filter).map(function(e){t.options.filter[e](t,t.options)})}},{key:"renderLoading",value:function(t){var e=this;I({src:this.loading},function(n){e.render("loading",!1),t()},function(){t(),e.options.silent||console.warn("VueLazyload log: load failed with loading image("+e.loading+")")})}},{key:"load",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void e()):this.state.loaded||H[this.src]?(this.state.loaded=!0,e(),this.render("loaded",!0)):void this.renderLoading(function(){t.attempt++,t.record("loadStart"),I({src:t.src},function(n){t.naturalHeight=n.naturalHeight,t.naturalWidth=n.naturalWidth,t.state.loaded=!0,t.state.error=!1,t.record("loadEnd"),t.render("loaded",!1),H[t.src]=1,e()},function(e){!t.options.silent&&console.error(e),t.state.error=!0,t.state.loaded=!1,t.render("error",!1)})})}},{key:"render",value:function(t,e){this.elRenderer(this,t,e)}},{key:"performance",value:function(){var t="loading",e=0;return this.state.loaded&&(t="loaded",e=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(t="error"),{src:this.src,state:t,time:e}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),t}(),C="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",R=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],W={rootMargin:"0px",threshold:0},B=function(t){return function(){function e(t){var n=t.preLoad,r=t.error,i=t.throttleWait,o=t.preLoadTop,a=t.dispatchEvent,s=t.loading,u=t.attempt,c=t.silent,h=void 0===c||c,f=t.scale,v=t.listenEvents,p=(t.hasbind,t.filter),y=t.adapter,g=t.observer,m=t.observerOptions;b(this,e),this.version="1.2.6",this.mode=k.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:h,dispatchEvent:!!a,throttleWait:i||200,preLoad:n||1.3,preLoadTop:o||0,error:r||C,loading:s||C,attempt:u||3,scale:f||j(f),ListenEvents:v||R,hasbind:!1,supportWebp:l(),filter:p||{},adapter:y||{},observer:!!g,observerOptions:m||W},this._initEvent(),this.lazyLoadHandler=d(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?k.observer:k.event)}return y(e,[{key:"config",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_(this.options,t)}},{key:"performance",value:function(){var t=[];return this.ListenerQueue.map(function(e){t.push(e.performance())}),t}},{key:"addLazyBox",value:function(t){this.ListenerQueue.push(t),E&&(this._addListenerTarget(window),this._observer&&this._observer.observe(t.el),t.$el&&t.$el.parentNode&&this._addListenerTarget(t.$el.parentNode))}},{key:"add",value:function(e,n,r){var i=this;if(a(this.ListenerQueue,function(t){return t.el===e}))return this.update(e,n),t.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),u=o.src,l=o.loading,d=o.error;t.nextTick(function(){u=s(e,i.options.scale)||u,i._observer&&i._observer.observe(e);var o=Object.keys(n.modifiers)[0],a=void 0;o&&(a=r.context.$refs[o],a=a?a.$el||a:document.getElementById(o)),a||(a=x(e));var c=new Q({bindType:n.arg,$parent:a,el:e,loading:l,error:d,src:u,elRenderer:i._elRenderer.bind(i),options:i.options});i.ListenerQueue.push(c),E&&(i._addListenerTarget(window),i._addListenerTarget(a)),i.lazyLoadHandler(),t.nextTick(function(){return i.lazyLoadHandler()})})}},{key:"update",value:function(e,n){var r=this,i=this._valueFormatter(n.value),o=i.src,a=i.loading,l=i.error;o=s(e,this.options.scale)||o;var d=u(this.ListenerQueue,function(t){return t.el===e});d&&d.update({src:o,loading:a,error:l}),this._observer&&(this._observer.unobserve(e),this._observer.observe(e)),this.lazyLoadHandler(),t.nextTick(function(){return r.lazyLoadHandler()})}},{key:"remove",value:function(t){if(t){this._observer&&this._observer.unobserve(t);var e=u(this.ListenerQueue,function(e){return e.el===t});e&&(this._removeListenerTarget(e.$parent),this._removeListenerTarget(window),o(this.ListenerQueue,e)&&e.destroy())}}},{key:"removeComponent",value:function(t){t&&(o(this.ListenerQueue,t),this._observer&&this._observer.unobserve(t.el),t.$parent&&t.$el.parentNode&&this._removeListenerTarget(t.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(t){var e=this;A||t!==k.observer||(t=k.event),this.mode=t,t===k.event?(this._observer&&(this.ListenerQueue.forEach(function(t){e._observer.unobserve(t.el)}),this._observer=null),this.TargetQueue.forEach(function(t){e._initListen(t.el,!0)})):(this.TargetQueue.forEach(function(t){e._initListen(t.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(t){if(t){var e=u(this.TargetQueue,function(e){return e.el===t});return e?e.childrenCount++:(e={el:t,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===k.event&&this._initListen(e.el,!0),this.TargetQueue.push(e)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(t){var e=this;this.TargetQueue.forEach(function(n,r){n.el===t&&(--n.childrenCount||(e._initListen(n.el,!1),e.TargetQueue.splice(r,1),n=null))})}},{key:"_initListen",value:function(t,e){var n=this;this.options.ListenEvents.forEach(function(r){return S[e?"on":"off"](t,r,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var t=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(e,n){t.Event.listeners[e]||(t.Event.listeners[e]=[]),t.Event.listeners[e].push(n)},this.$once=function(e,n){function r(){i.$off(e,r),n.apply(i,arguments)}var i=t;t.$on(e,r)},this.$off=function(e,n){if(!n){if(!t.Event.listeners[e])return;return void(t.Event.listeners[e].length=0)}o(t.Event.listeners[e],n)},this.$emit=function(e,n,r){t.Event.listeners[e]&&t.Event.listeners[e].forEach(function(t){return t(n,r)})}}},{key:"_lazyLoadHandler",value:function(){var t=this,e=[];this.ListenerQueue.forEach(function(t,n){if(!t.state.error&&t.state.loaded)return e.push(t);t.checkInView()&&t.load()}),e.forEach(function(e){return o(t.ListenerQueue,e)})}},{key:"_initIntersectionObserver",value:function(){var t=this;A&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(e){t._observer.observe(e.el)}))}},{key:"_observerHandler",value:function(t,e){var n=this;t.forEach(function(t){t.isIntersecting&&n.ListenerQueue.forEach(function(e){if(e.el===t.target){if(e.state.loaded)return n._observer.unobserve(e.el);e.load()}})})}},{key:"_elRenderer",value:function(t,e,n){if(t.el){var r=t.el,i=t.bindType,o=void 0;switch(e){case"loading":o=t.loading;break;case"error":o=t.error;break;default:o=t.src}if(i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",e),this.$emit(e,t,n),this.options.adapter[e]&&this.options.adapter[e](t,this.options),this.options.dispatchEvent){var a=new z(e,{detail:t});r.dispatchEvent(a)}}}},{key:"_valueFormatter",value:function(t){var e=t,n=this.options.loading,r=this.options.error;return c(t)&&(t.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+t),e=t.src,n=t.loading||this.options.loading,r=t.error||this.options.error),{src:e,loading:n,error:r}}}]),e}()},D=function(t){return{props:{tag:{type:String,default:"div"}},render:function(t){return!1===this.show?t(this.tag):t(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,t.addLazyBox(this),t.lazyLoadHandler()},beforeDestroy:function(){t.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),E&&this.rect.top<window.innerHeight*t.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*t.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}},V=function(){function t(e){var n=e.lazy;b(this,t),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return y(t,[{key:"bind",value:function(t,e,n){var r=new N({el:t,binding:e,vnode:n,lazy:this.lazy});this._queue.push(r)}},{key:"update",value:function(t,e,n){var r=u(this._queue,function(e){return e.el===t});r&&r.update({el:t,binding:e,vnode:n})}},{key:"unbind",value:function(t,e,n){var r=u(this._queue,function(e){return e.el===t});r&&(r.clear(),o(this._queue,r))}}]),t}(),M={selector:"img"},N=function(){function t(e){var n=e.el,r=e.binding,i=e.vnode,o=e.lazy;b(this,t),this.el=null,this.vnode=i,this.binding=r,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:r})}return y(t,[{key:"update",value:function(t){var e=this,n=t.el,r=t.binding;this.el=n,this.options=_({},M,r.value),this.getImgs().forEach(function(t){e.lazy.add(t,_({},e.binding,{value:{src:"dataset"in t?t.dataset.src:t.getAttribute("data-src"),error:"dataset"in t?t.dataset.error:t.getAttribute("data-error"),loading:"dataset"in t?t.dataset.loading:t.getAttribute("data-loading")}}),e.vnode)})}},{key:"getImgs",value:function(){return f(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var t=this;this.getImgs().forEach(function(e){return t.lazy.remove(e)}),this.vnode=null,this.binding=null,this.lazy=null}}]),t}(),P=function(t){return{props:{src:[String,Object],tag:{type:String,default:"img"}},render:function(t){return t(this.tag,{attrs:{src:this.renderSrc}},this.$slots.default)},data:function(){return{el:null,options:{src:"",error:"",loading:"",attempt:t.options.attempt},state:{loaded:!1,error:!1,attempt:0},rect:{},renderSrc:""}},watch:{src:function(){this.init(),t.addLazyBox(this),t.lazyLoadHandler()}},created:function(){this.init(),this.renderSrc=this.options.loading},mounted:function(){this.el=this.$el,t.addLazyBox(this),t.lazyLoadHandler()},beforeDestroy:function(){t.removeComponent(this)},methods:{init:function(){var e=t._valueFormatter(this.src),n=e.src,r=e.loading,i=e.error;this.state.loaded=!1,this.options.src=n,this.options.error=i,this.options.loading=r,this.renderSrc=this.options.loading},getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),E&&this.rect.top<window.innerHeight*t.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*t.options.preLoad&&this.rect.right>0},load:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;if(this.state.attempt>this.options.attempt-1&&this.state.error)return t.options.silent||console.log("VueLazyload log: "+this.options.src+" tried too more than "+this.options.attempt+" times"),void n();var r=this.options.src;I({src:r},function(t){var n=t.src;e.renderSrc=n,e.state.loaded=!0},function(t){e.state.attempt++,e.renderSrc=e.options.error,e.state.error=!0})}}}};return{install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=B(t),r=new n(e),i=new V({lazy:r}),o="2"===t.version.split(".")[0];t.prototype.$Lazyload=r,e.lazyComponent&&t.component("lazy-component",D(r)),e.lazyImage&&t.component("lazy-image",P(r)),o?(t.directive("lazy",{bind:r.add.bind(r),update:r.update.bind(r),componentUpdated:r.lazyLoadHandler.bind(r),unbind:r.remove.bind(r)}),t.directive("lazy-container",{bind:i.bind.bind(i),update:i.update.bind(i),unbind:i.unbind.bind(i)})):(t.directive("lazy",{bind:r.lazyLoadHandler.bind(r),update:function(t,e){_(this.vm.$refs,this.vm.$els),r.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){r.remove(this.el)}}),t.directive("lazy-container",{update:function(t,e){i.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){i.unbind(this.el)}}))}}});


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__(3);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(2);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);

// EXTERNAL MODULE: ./es/utils/index.js
var utils = __webpack_require__(0);

// CONCATENATED MODULE: ./es/utils/deep-assign.js


var deep_assign_hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!Object(utils["d" /* isDef */])(val) || deep_assign_hasOwnProperty.call(to, key) && !Object(utils["d" /* isDef */])(to[key])) {
    return;
  }

  if (!deep_assign_hasOwnProperty.call(to, key) || !Object(utils["e" /* isObj */])(val)) {
    to[key] = val;
  } else {
    to[key] = deep_assign_assign(Object(to[key]), from[key]);
  }
}

function deep_assign_assign(to, from) {
  for (var key in from) {
    if (deep_assign_hasOwnProperty.call(from, key)) {
      assignKey(to, from, key);
    }
  }
  return to;
}
// CONCATENATED MODULE: ./es/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  name: '名字',
  tel: '联系电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  contact: '联系人',
  loadingTip: '加载中...',
  nameEmpty: '请填写名字',
  confirmDelete: '确定要删除么',
  telInvalid: '请填写正确的联系电话',
  telPlaceholder: '手机或固定电话',
  vanContactCard: {
    addText: '添加订单联系人信息'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCouponCell: {
    title: '优惠券码',
    tips: '使用优惠',
    reduce: '省',
    count: function count(_count) {
      return '\u60A8\u6709 ' + _count + ' \u4E2A\u53EF\u7528\u4F18\u60E0';
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    disabled: '不可用优惠',
    placeholder: '请输入优惠码'
  },
  vanCouponItem: {
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + '\u6298';
    },
    condition: function condition(_condition) {
      return '\u6EE1' + _condition + '\u5143\u53EF\u7528';
    }
  },
  vanAddressEdit: {
    area: '收件地区',
    receiver: '收货人',
    postal: '邮政编码',
    areaEmpty: '请选择收件地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '如街道、楼层、门牌号等'
  },
  vanAddressList: {
    address: '收货地址',
    add: '新增收货地址'
  },
  vanSku: {
    unavailable: '商品已经无法购买啦',
    spec: '请先选择商品规格',
    least: '至少选择一件',
    quota: function quota(_quota) {
      return '\u9650\u8D2D' + _quota + '\u4EF6';
    },
    inventory: '库存不足',
    purchase: function purchase(count) {
      return '\u60A8\u5DF2\u8D2D\u4E70' + count + '\u4EF6';
    }
  },
  vanSkuActions: {
    cart: '加入购物车',
    buy: '立即购买'
  },
  vanSkuMessages: {
    fill: '请填写',
    upload: '请上传',
    number: '请填写正确的数字格式留言',
    email: '请填写正确的邮箱',
    id_no: '请填写正确的身份证号码',
    onePic: '仅限一张',
    placeholder: {
      id_no: '输入身份证号码',
      text: '输入文本',
      tel: '输入数字',
      email: '输入邮箱',
      date: '点击选择日期',
      time: '点击选择时间',
      textarea: '点击填写段落文本'
    }
  },
  vanSkuImgUploader: {
    or: '或',
    uploading: '正在上传...',
    rephoto: '重拍',
    photo: '拍照',
    reselect: '重新选择照片',
    select: '选择照片',
    maxSize: function maxSize(_maxSize) {
      return '\u6700\u5927\u53EF\u4E0A\u4F20\u56FE\u7247\u4E3A' + _maxSize + 'MB\uFF0C\u8BF7\u5C1D\u8BD5\u538B\u7F29\u56FE\u7247\u5C3A\u5BF8';
    }
  },
  vanSkuStepper: {
    title: '购买数量',
    remain: function remain(count) {
      return '\u5269\u4F59' + count + '\u4EF6';
    },
    quota: function quota(_quota2) {
      return '\u6BCF\u4EBA\u9650\u8D2D' + _quota2 + '\u4EF6';
    }
  }
});
// CONCATENATED MODULE: ./es/locale/index.js




var proto = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype;
var defaultLang = 'zh-CN';
var locale = {
  install: function install() {
    var _Vue$util$defineReact;

    if (proto.$vantLang) {
      return;
    }
    external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.util.defineReactive(proto, '$vantLang', defaultLang);
    external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.util.defineReactive(proto, '$vantMessages', (_Vue$util$defineReact = {}, _Vue$util$defineReact[defaultLang] = zh_CN, _Vue$util$defineReact));
  },
  use: function use(lang, messages) {
    var _add;

    proto.$vantLang = lang;
    this.add((_add = {}, _add[lang] = messages, _add));
  },
  add: function add() {
    var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    deep_assign_assign(proto.$vantMessages, messages);
  }
};

locale.install();

/* harmony default export */ var es_locale = (locale);
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__(4);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./es/mixins/bem.js

/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */

var ELEMENT = '__';
var MODS = '--';

var join = function join(name, el, symbol) {
  return el ? name + symbol + el : name;
};

var bem_prefix = function prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return prefix(name, item);
    });
  }

  var ret = {};
  keys_default()(mods).forEach(function (key) {
    ret[name + MODS + key] = mods[key];
  });
  return ret;
};

/* harmony default export */ var bem = ({
  methods: {
    b: function b(el, mods) {
      var name = this.$options.name;

      if (el && typeof el !== 'string') {
        mods = el;
        el = '';
      }
      el = join(name, el, ELEMENT);

      return mods ? [el, bem_prefix(el, mods)] : el;
    }
  }
});
// CONCATENATED MODULE: ./es/mixins/i18n.js
// component mixin


/* harmony default export */ var i18n = ({
  computed: {
    $t: function $t() {
      var name = this.$options.name;

      var prefix = name ? Object(utils["a" /* camelize */])(name) + '.' : '';

      if (false) {}

      var messages = this.$vantMessages[this.$vantLang];
      return function (path) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var message = Object(utils["b" /* get */])(messages, prefix + path) || Object(utils["b" /* get */])(messages, path);
        return typeof message === 'function' ? message.apply(null, args) : message;
      };
    }
  }
});
// CONCATENATED MODULE: ./es/utils/create-basic.js
/**
 * Create a basic component with common options
 */





var create_basic_install = function install(Vue) {
  Vue.component(this.name, this);
};

/* harmony default export */ var create_basic = (function (sfc) {
  sfc.name = 'van-' + sfc.name;
  sfc.install = sfc.install || create_basic_install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(i18n, bem);
  sfc.methods = sfc.methods || {};
  sfc.methods.isDef = utils["d" /* isDef */];

  return sfc;
});;
// CONCATENATED MODULE: ./es/icon/index.js



/* harmony default export */ var icon = (create_basic({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('i', _vm._g({ class: [_vm.b(), "van-icon-" + _vm.name], style: { color: _vm.color } }, _vm.$listeners), [_vm._t("default"), _vm.isDef(_vm.info) ? _c('div', { class: _vm.b('info') }, [_vm._v(_vm._s(_vm.info))]) : _vm._e()], 2);
  },

  name: 'icon',

  props: {
    name: String,
    info: [String, Number],
    color: String
  }
}));
// CONCATENATED MODULE: ./es/loading/index.js



/* harmony default export */ var loading = (create_basic({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b([_vm.type, _vm.color]), style: _vm.style }, [_c('span', { class: _vm.b('spinner', _vm.type) }, [_vm._l(_vm.type === 'spinner' ? 12 : 0, function (item, index) {
      return _c('i', { key: index });
    }), _vm.type === 'circular' ? _c('svg', { class: _vm.b('circular'), attrs: { "viewBox": "25 25 50 50" } }, [_c('circle', { attrs: { "cx": "50", "cy": "50", "r": "20", "fill": "none" } })]) : _vm._e()], 2)]);
  },

  name: 'loading',

  props: {
    size: String,
    type: {
      type: String,
      default: 'circular'
    },
    color: {
      type: String,
      default: 'black'
    }
  },

  computed: {
    style: function style() {
      return this.size ? {
        width: this.size,
        height: this.size
      } : {};
    }
  }
}));
// CONCATENATED MODULE: ./es/mixins/router-link.js
/**
 * add Vue-Router support
 */

/* harmony default export */ var router_link = ({
  props: {
    url: String,
    replace: Boolean,
    to: [String, Object]
  },

  methods: {
    routerLink: function routerLink() {
      var to = this.to,
          url = this.url,
          $router = this.$router,
          replace = this.replace;

      if (to && $router) {
        $router[replace ? 'replace' : 'push'](to);
      } else if (url) {
        replace ? location.replace(url) : location.href = url;
      }
    }
  }
});
// CONCATENATED MODULE: ./es/cell/index.js





/* harmony default export */ var cell = (create_basic({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.b({
        center: _vm.center,
        required: _vm.required,
        clickable: _vm.isLink || _vm.clickable
      }), { 'van-hairline': _vm.border }], on: { "click": _vm.onClick } }, [_vm._t("icon", [_vm.icon ? _c('icon', { class: _vm.b('left-icon'), attrs: { "name": _vm.icon } }) : _vm._e()]), _vm.isDef(_vm.title) || _vm.$slots.title ? _c('div', { class: _vm.b('title') }, [_vm._t("title", [_c('span', { domProps: { "textContent": _vm._s(_vm.title) } }), _vm.label ? _c('div', { class: _vm.b('label'), domProps: { "textContent": _vm._s(_vm.label) } }) : _vm._e()])], 2) : _vm._e(), _vm.isDef(_vm.value) || _vm.$slots.default ? _c('div', { class: _vm.b('value', { alone: !_vm.$slots.title && !_vm.title }) }, [_vm._t("default", [_c('span', { domProps: { "textContent": _vm._s(_vm.value) } })])], 2) : _vm._e(), _vm._t("right-icon", [_vm.isLink ? _c('icon', { class: _vm.b('right-icon', _vm.arrowDirection), attrs: { "name": "arrow" } }) : _vm._e()]), _vm._t("extra")], 2);
  },

  name: 'cell',

  components: {
    Icon: icon
  },

  mixins: [router_link],

  props: {
    icon: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    title: [String, Number],
    value: [String, Number],
    arrowDirection: String,
    border: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onClick: function onClick() {
      this.$emit('click');
      this.routerLink();
    }
  }
}));
// CONCATENATED MODULE: ./es/cell-group/index.js



/* harmony default export */ var cell_group = (create_basic({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.b(), { 'van-hairline--top-bottom': _vm.border }] }, [_vm._t("default")], 2);
  },

  name: 'cell-group',

  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
}));
// CONCATENATED MODULE: ./es/utils/create.js

/**
 * Create a component with common options
 */






/* harmony default export */ var create = (function (sfc) {
  sfc.components = assign_default()(sfc.components || {}, {
    Icon: icon,
    Loading: loading,
    Cell: cell,
    CellGroup: cell_group
  });
  return create_basic(sfc);
});;
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(1);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./es/mixins/popup/Modal.js


/* harmony default export */ var Modal = ({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "van-fade" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.visible, expression: "visible" }], staticClass: "van-modal", class: _vm.className, style: _vm.style, on: { "touchmove": function touchmove($event) {
          $event.preventDefault();$event.stopPropagation();
        }, "click": function click($event) {
          _vm.$emit('click', $event);
        } } })]);
  },

  name: 'modal',

  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object
  },

  computed: {
    style: function style() {
      return extends_default()({
        zIndex: this.zIndex
      }, this.customStyle);
    }
  }
});
// CONCATENATED MODULE: ./es/mixins/popup/context.js
/* harmony default export */ var popup_context = ({
  id: 1,
  zIndex: 2000,
  stack: [],
  lockCount: 0,

  plusKey: function plusKey(key) {
    return this[key]++;
  },

  get top() {
    return this.stack[this.stack.length - 1];
  }
});
// CONCATENATED MODULE: ./es/mixins/popup/manager.js






var defaultConfig = {
  className: '',
  customStyle: {}
};

/* harmony default export */ var manager = ({
  open: function open(vm, config) {
    /* istanbul ignore next */
    if (!popup_context.stack.some(function (item) {
      return item.vm._popupId === vm._popupId;
    })) {
      var el = vm.$el;
      var targetNode = el && el.parentNode && el.parentNode.nodeType !== 11 ? el.parentNode : document.body;
      popup_context.stack.push({ vm: vm, config: config, targetNode: targetNode });
      this.update();
    };
  },
  close: function close(id) {
    var stack = popup_context.stack;

    if (stack.length) {
      if (popup_context.top.vm._popupId === id) {
        stack.pop();
        this.update();
      } else {
        popup_context.stack = stack.filter(function (item) {
          return item.vm._popupId !== id;
        });
      }
    }
  },
  update: function update() {
    var modal = popup_context.modal;

    if (!modal) {
      modal = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(Modal))({
        el: document.createElement('div')
      });
      modal.$on('click', this.onClick);

      popup_context.modal = modal;
    }

    if (modal.$el.parentNode) {
      modal.visible = false;
    }

    if (popup_context.top) {
      var _context$top = popup_context.top,
          targetNode = _context$top.targetNode,
          config = _context$top.config;

      targetNode.appendChild(modal.$el);
      assign_default()(modal, extends_default()({}, defaultConfig, config, {
        visible: true
      }));
    }
  },

  // close popup when click modal && closeOnClickOverlay is true
  onClick: function onClick() {
    /* istanbul ignore else */
    if (popup_context.top) {
      var vm = popup_context.top.vm;

      vm.$emit('click-overlay');
      vm.closeOnClickOverlay && vm.$emit('input', false);
    }
  }
});
// CONCATENATED MODULE: ./es/utils/scroll.js


/* harmony default export */ var utils_scroll = ({
  // get nearest scroll element
  getScrollEventTarget: function getScrollEventTarget(element) {
    var rootParent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

    var currentNode = element;
    // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1 && currentNode !== rootParent) {
      var overflowY = this.getComputedStyle(currentNode).overflowY;
      if (overflowY === 'scroll' || overflowY === 'auto') {
        return currentNode;
      }
      currentNode = currentNode.parentNode;
    }
    return rootParent;
  },
  getScrollTop: function getScrollTop(element) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
  },
  setScrollTop: function setScrollTop(element, value) {
    'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
  },

  // get distance from element top to page top
  getElementTop: function getElementTop(element) {
    return (element === window ? 0 : element.getBoundingClientRect().top) + this.getScrollTop(window);
  },
  getVisibleHeight: function getVisibleHeight(element) {
    return element === window ? element.innerHeight : element.getBoundingClientRect().height;
  },

  getComputedStyle: !utils["f" /* isServer */] && document.defaultView.getComputedStyle.bind(document.defaultView)
});
// CONCATENATED MODULE: ./es/utils/event.js


var supportsPassive = false;
if (!utils["f" /* isServer */]) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

function on(target, event, handler) {
  var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  !utils["f" /* isServer */] && target.addEventListener(event, handler, supportsPassive ? { capture: false, passive: passive } : false);
}

function off(target, event, handler) {
  !utils["f" /* isServer */] && target.removeEventListener(event, handler);
}
// CONCATENATED MODULE: ./es/mixins/touch.js
/* harmony default export */ var touch = ({
  methods: {
    touchStart: function touchStart(event) {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.offsetX > this.offsetY ? 'horizontal' : this.offsetX < this.offsetY ? 'vertical' : '';
    }
  }
});
// CONCATENATED MODULE: ./es/mixins/popup/index.js






/* harmony default export */ var popup = ({
  mixins: [touch],

  props: {
    // whether to show popup
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [String, Number],
    // return the mount node for popup
    getContainer: Function,
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    value: function value(val) {
      this[val ? 'open' : 'close']();
    },
    getContainer: function getContainer() {
      this.move();
    },
    overlay: function overlay() {
      this.renderOverlay();
    }
  },

  created: function created() {
    this._popupId = 'popup-' + popup_context.plusKey('id');
  },
  mounted: function mounted() {
    if (this.getContainer) {
      this.move();
    }
    if (this.value) {
      this.open();
    }
  },
  activated: function activated() {
    /* istanbul ignore next */
    if (this.value) {
      this.open();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.close();
  },
  deactivated: function deactivated() {
    /* istanbul ignore next */
    this.close();
  },

  methods: {
    open: function open() {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return;
      }

      // 如果属性中传入了`zIndex`，则覆盖`context`中对应的`zIndex`
      if (this.zIndex !== undefined) {
        popup_context.zIndex = this.zIndex;
      }

      this.opened = true;
      this.renderOverlay();

      if (this.lockScroll) {
        on(document, 'touchstart', this.touchStart);
        on(document, 'touchmove', this.onTouchMove);
        if (!popup_context.lockCount) {
          document.body.classList.add('van-overflow-hidden');
        }
        popup_context.lockCount++;
      }
    },
    close: function close() {
      if (!this.opened) {
        return;
      }

      if (this.lockScroll) {
        popup_context.lockCount--;
        off(document, 'touchstart', this.touchStart);
        off(document, 'touchmove', this.onTouchMove);
        if (!popup_context.lockCount) {
          document.body.classList.remove('van-overflow-hidden');
        }
      }

      this.opened = false;
      manager.close(this._popupId);
      this.$emit('input', false);
    },
    move: function move() {
      if (this.getContainer) {
        this.getContainer().appendChild(this.$el);
      } else if (this.$parent) {
        this.$parent.$el.appendChild(this.$el);
      }
    },
    onTouchMove: function onTouchMove(e) {
      this.touchMove(e);
      var direction = this.deltaY > 0 ? '10' : '01';
      var el = utils_scroll.getScrollEventTarget(e.target, this.$el);
      var scrollHeight = el.scrollHeight,
          offsetHeight = el.offsetHeight,
          scrollTop = el.scrollTop;

      var status = '11';

      /* istanbul ignore next */
      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }

      /* istanbul ignore next */
      if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    renderOverlay: function renderOverlay() {
      var _this = this;

      if (this.overlay) {
        manager.open(this, {
          zIndex: popup_context.plusKey('zIndex'),
          className: this.overlayClass,
          customStyle: this.overlayStyle
        });
      } else {
        manager.close(this._popupId);
      }

      this.$nextTick(function () {
        _this.$el.style.zIndex = popup_context.plusKey('zIndex');
      });
    }
  }
});
// CONCATENATED MODULE: ./es/actionsheet/index.js




/* harmony default export */ var actionsheet = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "van-slide-bottom" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.value, expression: "value" }], class: _vm.b({ 'withtitle': _vm.title }) }, [_vm.title ? _c('div', { staticClass: "van-hairline--top-bottom", class: _vm.b('header') }, [_c('div', { domProps: { "textContent": _vm._s(_vm.title) } }), _c('icon', { attrs: { "name": "close" }, on: { "click": _vm.onCancel } })], 1) : _c('ul', { staticClass: "van-hairline--bottom" }, _vm._l(_vm.actions, function (item) {
      return _c('li', { class: [_vm.b('item', { disabled: item.disabled }), item.className, 'van-hairline--top'], on: { "click": function click($event) {
            $event.stopPropagation();_vm.onClickItem(item);
          } } }, [!item.loading ? [_c('span', { class: _vm.b('name') }, [_vm._v(_vm._s(item.name))]), item.subname ? _c('span', { class: _vm.b('subname') }, [_vm._v(_vm._s(item.subname))]) : _vm._e()] : _c('loading', { class: _vm.b('loading'), attrs: { "size": "20px" } })], 2);
    })), _vm.cancelText ? _c('div', { class: [_vm.b('cancel'), 'van-hairline--top'], domProps: { "textContent": _vm._s(_vm.cancelText) }, on: { "click": _vm.onCancel } }) : _c('div', { class: _vm.b('content') }, [_vm._t("default")], 2)])]);
  },

  name: 'actionsheet',

  mixins: [popup],

  props: {
    value: Boolean,
    title: String,
    cancelText: String,
    actions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onClickItem: function onClickItem(item) {
      if (item.callback && !item.disabled) {
        item.callback(item);
      }
    },
    onCancel: function onCancel() {
      this.$emit('input', false);
      this.$emit('cancel');
    }
  }
}));
// CONCATENATED MODULE: ./es/field/index.js





/* harmony default export */ var field = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('cell', { class: _vm.b((_obj = {
        error: _vm.error,
        disabled: _vm.$attrs.disabled,
        'min-height': _vm.type === 'textarea' && !_vm.autosize
      }, _obj["label-" + _vm.labelAlign] = _vm.labelAlign, _obj)), attrs: { "icon": _vm.leftIcon, "title": _vm.label, "center": _vm.center, "border": _vm.border, "is-link": _vm.isLink, "required": _vm.required } }, [_vm._t("label", null, { slot: "title" }), _c('div', { class: _vm.b('body') }, [_vm.type === 'textarea' ? _c('textarea', _vm._g(_vm._b({ ref: "input", class: _vm.b('control', _vm.inputAlign), domProps: { "value": _vm.value } }, 'textarea', _vm.$attrs, false), _vm.listeners)) : _c('input', _vm._g(_vm._b({ ref: "input", class: _vm.b('control', _vm.inputAlign), attrs: { "type": _vm.type }, domProps: { "value": _vm.value } }, 'input', _vm.$attrs, false), _vm.listeners)), _vm.showClear ? _c('icon', { class: _vm.b('clear'), attrs: { "name": "clear" }, on: { "touchstart": function touchstart($event) {
          $event.preventDefault();_vm.$emit('input', '');
        } } }) : _vm._e(), _vm.$slots.icon || _vm.icon ? _c('div', { class: _vm.b('icon'), on: { "click": _vm.onClickIcon } }, [_vm._t("icon", [_c('icon', { attrs: { "name": _vm.icon } })])], 2) : _vm._e(), _vm.$slots.button ? _c('div', { class: _vm.b('button') }, [_vm._t("button")], 2) : _vm._e()], 1), _vm.errorMessage ? _c('div', { class: _vm.b('error-message'), domProps: { "textContent": _vm._s(_vm.errorMessage) } }) : _vm._e()], 2);
    var _obj;
  },

  name: 'field',

  inheritAttrs: false,

  props: {
    value: [String, Number],
    icon: String,
    label: String,
    error: Boolean,
    center: Boolean,
    isLink: Boolean,
    leftIcon: String,
    required: Boolean,
    clearable: Boolean,
    labelAlign: String,
    inputAlign: String,
    onIconClick: Function,
    autosize: [Boolean, Object],
    errorMessage: String,
    type: {
      type: String,
      default: 'text'
    },
    border: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      focused: false
    };
  },

  watch: {
    value: function value() {
      this.$nextTick(this.adjustSize);
    }
  },

  mounted: function mounted() {
    this.$nextTick(this.adjustSize);
  },

  computed: {
    showClear: function showClear() {
      return this.clearable && this.focused && this.value !== '' && this.isDef(this.value);
    },
    listeners: function listeners() {
      return extends_default()({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      });
    }
  },

  methods: {
    blur: function blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    onInput: function onInput(event) {
      this.$emit('input', event.target.value);
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
    },
    onClickIcon: function onClickIcon() {
      this.$emit('click-icon');
      this.onIconClick && this.onIconClick();
    },
    onKeypress: function onKeypress(event) {
      if (this.type === 'number') {
        var keyCode = event.keyCode;

        var allowPoint = String(this.value).indexOf('.') === -1;
        var isValidKey = keyCode >= 48 && keyCode <= 57 || keyCode === 46 && allowPoint || keyCode === 45;
        if (!isValidKey) {
          event.preventDefault();
        }
      }
      this.$emit('keypress', event);
    },
    adjustSize: function adjustSize() {
      var input = this.$refs.input;

      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';

      var height = input.scrollHeight;
      if (Object(utils["e" /* isObj */])(this.autosize)) {
        var _autosize = this.autosize,
            maxHeight = _autosize.maxHeight,
            minHeight = _autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }
        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/button/index.js



/* harmony default export */ var es_button = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.tag, { tag: "component", class: _vm.b([_vm.type, _vm.size, {
        block: _vm.block,
        loading: _vm.loading,
        disabled: _vm.disabled,
        unclickable: _vm.disabled || _vm.loading,
        'bottom-action': _vm.bottomAction
      }]), attrs: { "type": _vm.nativeType, "disabled": _vm.disabled }, on: { "click": _vm.onClick } }, [_vm.loading ? _c('loading', { attrs: { "size": "20px", "color": _vm.type === 'default' ? 'black' : 'white' } }) : _vm._e(), _c('span', { class: _vm.b('text') }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2)], 1);
  },

  name: 'button',

  props: {
    text: String,
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },

  methods: {
    onClick: function onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/popup/index.js




/* harmony default export */ var es_popup = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": _vm.currentTransition } }, [_vm.inited || !_vm.lazyRender ? _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.value, expression: "value" }], class: _vm.b((_obj = {}, _obj[_vm.position] = _vm.position, _obj)) }, [_vm._t("default")], 2) : _vm._e()]);
    var _obj;
  },

  name: 'popup',

  mixins: [popup],

  props: {
    transition: String,
    lazyRender: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },

  data: function data() {
    return {
      inited: this.value
    };
  },

  computed: {
    currentTransition: function currentTransition() {
      return this.transition || (this.position === '' ? 'van-fade' : 'popup-slide-' + this.position);
    }
  },

  watch: {
    value: function value() {
      this.inited = this.inited || this.value;
    }
  }
}));
// CONCATENATED MODULE: ./es/toast/toast.js




var STYLE_LIST = ['success', 'fail', 'loading'];

/* harmony default export */ var toast_toast = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "van-fade" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.value, expression: "value" }], class: _vm.b([_vm.style, _vm.position]) }, [_vm.style === 'text' ? _c('div', [_vm._v(_vm._s(_vm.message))]) : _vm._e(), _vm.style === 'html' ? _c('div', { domProps: { "innerHTML": _vm._s(_vm.message) } }) : _vm._e(), _vm.style === 'default' ? [_vm.type === 'loading' ? _c('loading', { attrs: { "color": "white", "type": _vm.loadingType } }) : _c('icon', { class: _vm.b('icon'), attrs: { "name": _vm.type } }), _vm.isDef(_vm.message) ? _c('div', { class: _vm.b('text') }, [_vm._v(_vm._s(_vm.message))]) : _vm._e()] : _vm._e()], 2)]);
  },

  name: 'toast',

  mixins: [popup],

  props: {
    forbidClick: Boolean,
    message: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    loadingType: {
      type: String,
      default: 'circular'
    },
    position: {
      type: String,
      default: 'middle'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      clickable: false
    };
  },

  computed: {
    style: function style() {
      return STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type;
    }
  },

  mounted: function mounted() {
    this.toggleClickale();
  },

  watch: {
    value: function value() {
      this.toggleClickale();
    },
    forbidClick: function forbidClick() {
      this.toggleClickale();
    }
  },

  methods: {
    toggleClickale: function toggleClickale() {
      var clickable = this.value && this.forbidClick;
      if (this.clickable !== clickable) {
        this.clickable = clickable;
        var action = clickable ? 'add' : 'remove';
        document.body.classList[action]('van-toast--unclickable');
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/toast/index.js






var defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  value: true,
  duration: 3000,
  position: 'middle',
  loadingType: 'circular',
  forbidClick: false,
  overlayStyle: {}
};
var toast_parseOptions = function parseOptions(message) {
  return Object(utils["e" /* isObj */])(message) ? message : { message: message };
};

var queue = [];
var singleton = true;
var currentOptions = extends_default()({}, defaultOptions);

function createInstance() {
  if (!queue.length || !singleton) {
    var toast = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(toast_toast))({
      el: document.createElement('div')
    });
    document.body.appendChild(toast.$el);
    queue.push(toast);
  }
  return queue[queue.length - 1];
};

// transform toast options to popup props
function transformer(options) {
  options.overlay = options.mask;
  return options;
}

function Toast() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var toast = createInstance();

  options = extends_default()({}, currentOptions, toast_parseOptions(options), {
    clear: function clear() {
      toast.value = false;
    }
  });

  assign_default()(toast, transformer(options));
  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
    }, options.duration);
  }

  return toast;
};

var toast_createMethod = function createMethod(type) {
  return function (options) {
    return Toast(extends_default()({
      type: type }, toast_parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  Toast[method] = toast_createMethod(method);
});

Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (singleton) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

Toast.setDefaultOptions = function (options) {
  assign_default()(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = extends_default()({}, defaultOptions);
};

Toast.allowMultiple = function () {
  var allow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  singleton = !allow;
};

Toast.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(toast_toast);
};

external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$toast = Toast;

/* harmony default export */ var es_toast = (Toast);
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__(9);
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./es/dialog/dialog.js





/* harmony default export */ var dialog = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "van-dialog-bounce" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.value, expression: "value" }], class: [_vm.b(), _vm.className] }, [_vm.title ? _c('div', { class: _vm.b('header', { isolated: !_vm.message && !_vm.$slots.default }), domProps: { "textContent": _vm._s(_vm.title) } }) : _vm._e(), _vm.message || _vm.$slots.default ? _c('div', { class: _vm.b('content') }, [_vm._t("default", [_vm.message ? _c('div', { class: _vm.b('message', { 'has-title': _vm.title }), domProps: { "innerHTML": _vm._s(_vm.message) } }) : _vm._e()])], 2) : _vm._e(), _c('div', { staticClass: "van-hairline--top", class: _vm.b('footer', { 'buttons': _vm.showCancelButton && _vm.showConfirmButton }) }, [_c('van-button', { directives: [{ name: "show", rawName: "v-show", value: _vm.showCancelButton, expression: "showCancelButton" }], class: _vm.b('cancel'), attrs: { "loading": _vm.loading.cancel, "size": "large" }, on: { "click": function click($event) {
          _vm.handleAction('cancel');
        } } }, [_vm._v("\n        " + _vm._s(_vm.cancelButtonText || _vm.$t('cancel')) + "\n      ")]), _c('van-button', { directives: [{ name: "show", rawName: "v-show", value: _vm.showConfirmButton, expression: "showConfirmButton" }], class: [_vm.b('confirm'), { 'van-hairline--left': _vm.showCancelButton && _vm.showConfirmButton }], attrs: { "size": "large", "loading": _vm.loading.confirm }, on: { "click": function click($event) {
          _vm.handleAction('confirm');
        } } }, [_vm._v("\n        " + _vm._s(_vm.confirmButtonText || _vm.$t('confirm')) + "\n      ")])], 1)])]);
  },

  name: 'dialog',

  components: {
    VanButton: es_button
  },

  mixins: [popup],

  props: {
    title: String,
    message: String,
    callback: Function,
    className: [String, Object, Array],
    beforeClose: Function,
    confirmButtonText: String,
    cancelButtonText: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },

  methods: {
    handleAction: function handleAction(action) {
      var _this = this;

      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, function (state) {
          if (state !== false) {
            _this.onClose(action);
          }
          _this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },
    onClose: function onClose(action) {
      this.$emit('input', false);
      this.$emit(action);
      this.callback && this.callback(action);
    }
  }
}));
// CONCATENATED MODULE: ./es/dialog/index.js






var instance = void 0;

var dialog_initInstance = function initInstance() {
  instance = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(dialog))({
    el: document.createElement('div')
  });

  instance.$on('input', function (value) {
    instance.value = value;
  });

  document.body.appendChild(instance.$el);
};

var dialog_Dialog = function Dialog(options) {
  return new promise_default.a(function (resolve, reject) {
    if (!instance) {
      dialog_initInstance();
    }

    assign_default()(instance, extends_default()({
      resolve: resolve,
      reject: reject
    }, options));
  });
};

dialog_Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  beforeClose: null,
  confirmButtonText: '',
  cancelButtonText: '',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  callback: function callback(action) {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};

dialog_Dialog.alert = function (options) {
  return dialog_Dialog(extends_default()({}, dialog_Dialog.currentOptions, options));
};

dialog_Dialog.confirm = function (options) {
  return dialog_Dialog(extends_default()({}, dialog_Dialog.currentOptions, {
    showCancelButton: true
  }, options));
};

dialog_Dialog.close = function () {
  if (instance) {
    instance.value = false;
  }
};

dialog_Dialog.setDefaultOptions = function (options) {
  assign_default()(dialog_Dialog.currentOptions, options);
};

dialog_Dialog.resetDefaultOptions = function () {
  dialog_Dialog.currentOptions = extends_default()({}, dialog_Dialog.defaultOptions);
};

dialog_Dialog.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(dialog);
};

external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$dialog = dialog_Dialog;
dialog_Dialog.resetDefaultOptions();

/* harmony default export */ var es_dialog = (dialog_Dialog);
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__(31);
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// CONCATENATED MODULE: ./es/picker/PickerColumn.js





var DEFAULT_DURATION = 200;
var range = function range(num, arr) {
  return Math.min(Math.max(num, arr[0]), arr[1]);
};

/* harmony default export */ var PickerColumn = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.b(), _vm.className], style: _vm.columnStyle, on: { "touchstart": _vm.onTouchStart, "touchmove": function touchmove($event) {
          $event.preventDefault();return _vm.onTouchMove($event);
        }, "touchend": _vm.onTouchEnd, "touchcancel": _vm.onTouchEnd } }, [_c('ul', { style: _vm.wrapperStyle }, _vm._l(_vm.options, function (option, index) {
      return _c('li', { staticClass: "van-ellipsis", class: _vm.b('item', {
          disabled: _vm.isDisabled(option),
          selected: index === _vm.currentIndex
        }), domProps: { "innerHTML": _vm._s(_vm.getOptionText(option)) }, on: { "click": function click($event) {
            _vm.setIndex(index, true);
          } } });
    }))]);
  },

  name: 'picker-column',

  props: {
    valueKey: String,
    className: String,
    itemHeight: Number,
    visibleItemCount: Number,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },

  data: function data() {
    return {
      startY: 0,
      offset: 0,
      duration: 0,
      startOffset: 0,
      currentIndex: this.defaultIndex
    };
  },
  created: function created() {
    this.$parent.children && this.$parent.children.push(this);
  },
  mounted: function mounted() {
    this.setIndex(this.currentIndex);
  },
  destroyed: function destroyed() {
    this.$parent.children && this.$parent.children.splice(this.$parent.children.indexOf(this), 1);
  },

  watch: {
    defaultIndex: function defaultIndex() {
      this.setIndex(this.defaultIndex);
    },
    options: function options(next, prev) {
      if (stringify_default()(next) !== stringify_default()(prev)) {
        this.setIndex(0);
      }
    }
  },

  computed: {
    count: function count() {
      return this.options.length;
    },
    baseOffset: function baseOffset() {
      return this.itemHeight * (this.visibleItemCount - 1) / 2;
    },
    columnStyle: function columnStyle() {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      };
    },
    wrapperStyle: function wrapperStyle() {
      return {
        transition: this.duration + 'ms',
        transform: 'translate3d(0, ' + (this.offset + this.baseOffset) + 'px, 0)',
        lineHeight: this.itemHeight + 'px'
      };
    },
    currentValue: function currentValue() {
      return this.options[this.currentIndex];
    }
  },

  methods: {
    onTouchStart: function onTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.startOffset = this.offset;
      this.duration = 0;
    },
    onTouchMove: function onTouchMove(event) {
      var deltaY = event.touches[0].clientY - this.startY;
      this.offset = range(this.startOffset + deltaY, [-(this.count * this.itemHeight), this.itemHeight]);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION;
        var index = range(Math.round(-this.offset / this.itemHeight), [0, this.count - 1]);
        this.setIndex(index, true);
      }
    },
    adjustIndex: function adjustIndex(index) {
      index = range(index, [0, this.count]);
      for (var i = index; i < this.count; i++) {
        if (!this.isDisabled(this.options[i])) return i;
      }
      for (var _i = index - 1; _i >= 0; _i--) {
        if (!this.isDisabled(this.options[_i])) return _i;
      }
    },
    isDisabled: function isDisabled(option) {
      return Object(utils["e" /* isObj */])(option) && option.disabled;
    },
    getOptionText: function getOptionText(option) {
      return Object(utils["e" /* isObj */])(option) && this.valueKey in option ? option[this.valueKey] : option;
    },
    setIndex: function setIndex(index, userAction) {
      index = this.adjustIndex(index);
      this.offset = -index * this.itemHeight;

      if (index !== this.currentIndex) {
        this.currentIndex = index;
        userAction && this.$emit('change', index);
      }
    },
    setValue: function setValue(value) {
      var options = this.options;

      for (var i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          this.setIndex(i);
          return;
        }
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/utils/deep-clone.js


function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  } else if (typeof obj === 'object') {
    return deep_assign_assign({}, obj);
  }
  return obj;
}
// CONCATENATED MODULE: ./es/picker/index.js





/* harmony default export */ var picker = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_vm.showToolbar ? _c('div', { staticClass: "van-hairline--top-bottom", class: _vm.b('toolbar') }, [_vm._t("default", [_c('div', { class: _vm.b('cancel'), on: { "click": function click($event) {
          _vm.emit('cancel');
        } } }, [_vm._v(_vm._s(_vm.cancelButtonText || _vm.$t('cancel')))]), _vm.title ? _c('div', { staticClass: "van-ellipsis", class: _vm.b('title'), domProps: { "textContent": _vm._s(_vm.title) } }) : _vm._e(), _c('div', { class: _vm.b('confirm'), on: { "click": function click($event) {
          _vm.emit('confirm');
        } } }, [_vm._v(_vm._s(_vm.confirmButtonText || _vm.$t('confirm')))])])], 2) : _vm._e(), _vm.loading ? _c('div', { class: _vm.b('loading') }, [_c('loading')], 1) : _vm._e(), _c('div', { class: _vm.b('columns'), style: _vm.columnsStyle, on: { "touchmove": function touchmove($event) {
          $event.preventDefault();
        } } }, [_vm._l(_vm.currentColumns, function (item, index) {
      return _c('picker-column', { key: index, attrs: { "value-key": _vm.valueKey, "options": item.values, "class-name": item.className, "default-index": item.defaultIndex, "item-height": _vm.itemHeight, "visible-item-count": _vm.visibleItemCount }, on: { "change": function change($event) {
            _vm.onChange(index);
          } } });
    }), _c('div', { staticClass: "van-hairline--top-bottom", class: _vm.b('frame'), style: _vm.frameStyle })], 2)]);
  },

  name: 'picker',

  components: {
    PickerColumn: PickerColumn
  },

  props: {
    title: String,
    loading: Boolean,
    showToolbar: Boolean,
    confirmButtonText: String,
    cancelButtonText: String,
    visibleItemCount: {
      type: Number,
      default: 5
    },
    valueKey: {
      type: String,
      default: 'text'
    },
    itemHeight: {
      type: Number,
      default: 44
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },

  data: function data() {
    return {
      children: [],
      currentColumns: []
    };
  },

  watch: {
    columns: {
      handler: function handler() {
        var columns = this.columns.map(deepClone);
        this.isSimpleColumn = columns.length && !columns[0].values;
        this.currentColumns = this.isSimpleColumn ? [{ values: columns }] : columns;
      },

      immediate: true
    }
  },

  computed: {
    frameStyle: function frameStyle() {
      return {
        height: this.itemHeight + 'px'
      };
    },
    columnsStyle: function columnsStyle() {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      };
    }
  },

  methods: {
    emit: function emit(event) {
      if (this.isSimpleColumn) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },
    onChange: function onChange(columnIndex) {
      if (this.isSimpleColumn) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },

    // get column instance by index
    getColumn: function getColumn(index) {
      return this.children[index];
    },

    // get column value by index
    getColumnValue: function getColumnValue(index) {
      return (this.getColumn(index) || {}).currentValue;
    },

    // set column value by index
    setColumnValue: function setColumnValue(index, value) {
      var column = this.getColumn(index);
      column && column.setValue(value);
    },

    // get column option index by column index
    getColumnIndex: function getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },

    // set column option index by column index
    setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
      var column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },

    // get options of column by index
    getColumnValues: function getColumnValues(index) {
      return (this.currentColumns[index] || {}).values;
    },

    // set options of column by index
    setColumnValues: function setColumnValues(index, options) {
      var column = this.currentColumns[index];
      if (column) {
        column.values = options;
      }
    },

    // get values of all columns
    getValues: function getValues() {
      return this.children.map(function (child) {
        return child.currentValue;
      });
    },

    // set values of all columns
    setValues: function setValues(values) {
      var _this = this;

      values.forEach(function (value, index) {
        _this.setColumnValue(index, value);
      });
    },

    // get indexes of all columns
    getIndexes: function getIndexes() {
      return this.children.map(function (child) {
        return child.currentIndex;
      });
    },

    // set indexes of all columns
    setIndexes: function setIndexes(indexes) {
      var _this2 = this;

      indexes.forEach(function (optionIndex, columnIndex) {
        _this2.setColumnIndex(columnIndex, optionIndex);
      });
    }
  }
}));
// CONCATENATED MODULE: ./es/area/index.js






/* harmony default export */ var es_area = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('picker', { ref: "picker", class: _vm.b(), attrs: { "show-toolbar": "", "value-key": "name", "title": _vm.title, "loading": _vm.loading, "columns": _vm.columns, "item-height": _vm.itemHeight, "visible-item-count": _vm.visibleItemCount }, on: { "change": _vm.onChange, "confirm": function confirm($event) {
          _vm.$emit('confirm', $event);
        }, "cancel": function cancel($event) {
          _vm.$emit('cancel', $event);
        } } });
  },

  name: 'area',

  components: {
    Picker: picker
  },

  props: {
    value: String,
    title: String,
    loading: Boolean,
    areaList: Object,
    itemHeight: Number,
    visibleItemCount: Number,
    columnsNum: {
      type: [String, Number],
      default: 3
    }
  },

  computed: {
    listValid: function listValid() {
      return this.areaList && Object(utils["e" /* isObj */])(this.areaList.province_list);
    },
    columns: function columns() {
      if (!this.listValid) {
        return [];
      }

      var code = this.getCode();
      return [{ values: this.getList('province') }, { values: this.getList('city', code.slice(0, 2)) }, { values: this.getList('county', code.slice(0, 4)) }].slice(0, +this.columnsNum);
    }
  },

  watch: {
    columns: {
      handler: function handler() {
        this.$nextTick(this.setIndex);
      },

      immediate: true
    }
  },

  methods: {
    setIndex: function setIndex() {
      var code = this.getCode();
      this.$refs.picker && this.$refs.picker.setIndexes([this.getIndex('province', code), this.getIndex('city', code), this.getIndex('county', code)]);
    },
    getCode: function getCode() {
      return this.value || this.listValid && keys_default()(this.areaList.county_list)[0] || '';
    },

    // get list by code
    getList: function getList(type, code) {
      var result = [];
      if (!this.listValid || type !== 'province' && !code) {
        return result;
      }

      var list = this.areaList[type + '_list'];
      result = keys_default()(list).map(function (code) {
        return {
          code: code,
          name: list[code]
        };
      });

      if (code) {
        result = result.filter(function (item) {
          return item.code.indexOf(code) === 0;
        });
      }

      return result;
    },

    // get index by code
    getIndex: function getIndex(type, code) {
      var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      var list = this.getList(type, code.slice(0, compareNum - 2));
      code = code.slice(0, compareNum);

      for (var i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },
    onChange: function onChange(picker, values, index) {
      var code = values[index].code;

      if (index === 0) {
        var cityList = this.getList('city', code.slice(0, 2));
        picker.setColumnValues(1, cityList);
        code = cityList[0].code;
      }

      picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      this.$emit('change', picker, values, index);
    },
    getValues: function getValues() {
      return this.$refs.picker ? this.$refs.picker.getValues() : [];
    }
  }
}));
// CONCATENATED MODULE: ./es/address-edit/Detail.js





/* harmony default export */ var Detail = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('field', _vm._g({ ref: "field", attrs: { "rows": "1", "autosize": "", "clearable": !_vm.isAndroid, "type": "textarea", "maxlength": "200", "value": _vm.value, "error": _vm.error, "label": _vm.$t('label'), "placeholder": _vm.$t('placeholder') } }, _vm.$listeners), [_vm.showIcon && _vm.isAndroid ? _c('span', { class: _vm.b('finish'), attrs: { "slot": "icon" }, on: { "click": function click($event) {
          _vm.$refs.field.blur();
        } }, slot: "icon" }, [_vm._v("\n      " + _vm._s(_vm.$t('complete')) + "\n    ")]) : _vm._e()]), _vm._l(_vm.searchResult, function (express) {
      return _vm.showSearchList ? _c('cell', { key: express.name + express.address, attrs: { "title": express.name, "label": express.address, "icon": "location", "clickable": "" }, on: { "click": function click($event) {
            _vm.onSelect(express);
          } } }) : _vm._e();
    })], 2);
  },

  name: 'address-edit-detail',

  components: {
    Field: field
  },

  props: {
    value: String,
    error: Boolean,
    focused: Boolean,
    searchResult: Array,
    showSearchResult: Boolean
  },

  created: function created() {
    this.isAndroid = Object(utils["c" /* isAndroid */])();
  },

  computed: {
    showSearchList: function showSearchList() {
      return this.showSearchResult && this.focused && this.searchResult.length;
    },
    showIcon: function showIcon() {
      return this.value && this.focused;
    }
  },

  methods: {
    onSelect: function onSelect(express) {
      this.$emit('input', ((express.address || '') + ' ' + (express.name || '')).trim());
      this.$emit('select-search', express);
    }
  }
}));
// CONCATENATED MODULE: ./es/switch/index.js



/* harmony default export */ var es_switch = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b({
        on: _vm.value,
        disabled: _vm.disabled
      }), style: _vm.style, on: { "click": _vm.onClick } }, [_c('div', { class: _vm.b('node') }, [_vm.loading ? _c('loading', { class: _vm.b('loading') }) : _vm._e()], 1)]);
  },

  name: 'switch',

  props: {
    value: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: '30px'
    }
  },

  computed: {
    style: function style() {
      return {
        fontSize: this.size
      };
    }
  },

  methods: {
    onClick: function onClick() {
      if (!this.disabled && !this.loading) {
        this.$emit('input', !this.value);
        this.$emit('change', !this.value);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/switch-cell/index.js




/* harmony default export */ var switch_cell = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('cell', { class: _vm.b(), attrs: { "center": "", "title": _vm.title, "border": _vm.border } }, [_c('van-switch', _vm._b({ on: { "input": function input($event) {
          _vm.$emit('input', $event);
        } } }, 'van-switch', _vm.$props, false))], 1);
  },

  name: 'switch-cell',

  components: {
    VanSwitch: es_switch
  },

  props: {
    title: String,
    value: Boolean,
    border: Boolean,
    loading: Boolean,
    disabled: Boolean
  },

  watch: {
    value: function value() {
      this.$emit('change', this.value);
    }
  }
}));
// CONCATENATED MODULE: ./es/utils/validate/mobile.js
function mobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return (/^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9\-]{10,13}$/.test(value)
  );
}
// CONCATENATED MODULE: ./es/address-edit/index.js




/* eslint-disable camelcase */












var defaultData = {
  name: '',
  tel: '',
  province: '',
  city: '',
  county: '',
  area_code: '',
  postal_code: '',
  address_detail: '',
  is_default: false
};

/* harmony default export */ var address_edit = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('cell-group', [_c('field', { attrs: { "maxlength": "15", "placeholder": _vm.$t('name'), "label": _vm.$t('receiver'), "error": _vm.errorInfo.name }, on: { "focus": function focus($event) {
          _vm.onFocus('name');
        } }, model: { value: _vm.data.name, callback: function callback($$v) {
          _vm.$set(_vm.data, "name", $$v);
        }, expression: "data.name" } }), _c('field', { attrs: { "type": "tel", "label": _vm.$t('tel'), "placeholder": _vm.$t('telPlaceholder'), "error": _vm.errorInfo.tel }, on: { "focus": function focus($event) {
          _vm.onFocus('tel');
        } }, model: { value: _vm.data.tel, callback: function callback($$v) {
          _vm.$set(_vm.data, "tel", $$v);
        }, expression: "data.tel" } }), _c('field', { attrs: { "readonly": "", "label": _vm.$t('area'), "placeholder": _vm.$t('area'), "value": _vm.areaText }, on: { "click": function click($event) {
          _vm.showArea = true;
        } } }), _c('address-edit-detail', { attrs: { "focused": _vm.detailFocused, "value": _vm.data.address_detail, "error": _vm.errorInfo.address_detail, "search-result": _vm.searchResult, "show-search-result": _vm.showSearchResult }, on: { "focus": function focus($event) {
          _vm.onFocus('address_detail');
        }, "blur": function blur($event) {
          _vm.detailFocused = false;
        }, "input": _vm.onChangeDetail, "select-search": function selectSearch($event) {
          _vm.$emit('select-search', $event);
        } } }), _vm.showPostal ? _c('field', { directives: [{ name: "show", rawName: "v-show", value: !_vm.hideBottomFields, expression: "!hideBottomFields" }], staticClass: "van-hairline--top", attrs: { "type": "tel", "maxlength": "6", "label": _vm.$t('postal'), "placeholder": _vm.$t('postal'), "error": _vm.errorInfo.postal_code }, on: { "focus": function focus($event) {
          _vm.onFocus('postal_code');
        } }, model: { value: _vm.data.postal_code, callback: function callback($$v) {
          _vm.$set(_vm.data, "postal_code", $$v);
        }, expression: "data.postal_code" } }) : _vm._e(), _vm._t("default"), _vm.showSetDefault ? _c('switch-cell', { directives: [{ name: "show", rawName: "v-show", value: !_vm.hideBottomFields, expression: "!hideBottomFields" }], attrs: { "title": _vm.$t('defaultAddress') }, model: { value: _vm.data.is_default, callback: function callback($$v) {
          _vm.$set(_vm.data, "is_default", $$v);
        }, expression: "data.is_default" } }) : _vm._e()], 2), _c('div', { directives: [{ name: "show", rawName: "v-show", value: !_vm.hideBottomFields, expression: "!hideBottomFields" }], class: _vm.b('buttons') }, [_c('van-button', { attrs: { "block": "", "loading": _vm.isSaving, "type": "primary" }, on: { "click": _vm.onSave } }, [_vm._v("\n      " + _vm._s(_vm.saveButtonText || _vm.$t('save')) + "\n    ")]), _vm.isEdit ? _c('van-button', { attrs: { "block": "", "loading": _vm.isDeleting }, on: { "click": _vm.onDelete } }, [_vm._v("\n      " + _vm._s(_vm.deleteButtonText || _vm.$t('delete')) + "\n    ")]) : _vm._e()], 1), _c('popup', { attrs: { "position": "bottom", "lazy-render": false, "get-container": _vm.getAreaContainer }, model: { value: _vm.showArea, callback: function callback($$v) {
          _vm.showArea = $$v;
        }, expression: "showArea" } }, [_c('van-area', { ref: "area", attrs: { "loading": !_vm.areaListLoaded, "value": _vm.data.area_code, "area-list": _vm.areaList }, on: { "confirm": _vm.onAreaConfirm, "cancel": function cancel($event) {
          _vm.showArea = false;
        } } })], 1)], 1);
  },

  name: 'address-edit',

  components: {
    Field: field,
    Popup: es_popup,
    VanArea: es_area,
    VanButton: es_button,
    SwitchCell: switch_cell,
    AddressEditDetail: Detail
  },

  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    showDelete: Boolean,
    showPostal: Boolean,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    saveButtonText: String,
    deleteButtonText: String,
    addressInfo: {
      type: Object,
      default: function _default() {
        return extends_default()({}, defaultData);
      }
    },
    searchResult: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    telValidator: {
      type: Function,
      default: mobile
    }
  },

  data: function data() {
    return {
      data: {},
      showArea: false,
      detailFocused: false,
      errorInfo: {
        tel: false,
        name: false,
        postal_code: false,
        address_detail: false
      }
    };
  },

  computed: {
    // hide bottom field when use search && detail get focused
    hideBottomFields: function hideBottomFields() {
      return this.searchResult.length && this.detailFocused;
    },
    areaListLoaded: function areaListLoaded() {
      return Object(utils["e" /* isObj */])(this.areaList) && keys_default()(this.areaList).length;
    },
    isEdit: function isEdit() {
      return this.showDelete || !!this.data.id;
    },
    areaText: function areaText() {
      var _data = this.data,
          province = _data.province,
          city = _data.city,
          county = _data.county,
          area_code = _data.area_code;

      return province && city && county && area_code ? province + ' ' + city + ' ' + county : '';
    }
  },

  watch: {
    addressInfo: {
      handler: function handler(val) {
        this.data = extends_default()({}, defaultData, val);

        this.setAreaCode(val.area_code);
      },

      deep: true,
      immediate: true
    },

    areaList: function areaList() {
      this.setAreaCode(this.data.area_code);
    }
  },

  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'address_detail';
      this.$emit('focus', key);
    },
    onChangeDetail: function onChangeDetail(val) {
      this.data.address_detail = val;
      this.$emit('change-detail', val);
    },
    onAreaConfirm: function onAreaConfirm(values) {
      this.showArea = false;
      this.data.area_code = values[2].code;
      this.assignAreaValues(values);
      this.$emit('change-area', values);
    },
    assignAreaValues: function assignAreaValues(values) {
      assign_default()(this.data, {
        province: values[0] ? values[0].name : '',
        city: values[1] ? values[1].name : '',
        county: values[2] ? values[2].name : ''
      });
    },
    onSave: function onSave() {
      var _this = this;

      var items = ['name', 'tel', 'area_code', 'address_detail'];

      if (this.showPostal) {
        items.push('postal_code');
      }

      var isValid = items.every(function (item) {
        var msg = _this.getErrorMessage(item);
        if (msg) {
          _this.errorInfo[item] = true;
          es_toast(msg);
        }
        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    getErrorMessage: function getErrorMessage(key) {
      var value = this.data[key].trim();
      var $t = this.$t;

      switch (key) {
        case 'name':
          return value ? '' : $t('nameEmpty');
        case 'tel':
          return this.telValidator(value) ? '' : $t('telInvalid');
        case 'area_code':
          return value ? '' : $t('areaEmpty');
        case 'address_detail':
          return value ? '' : $t('addressEmpty');
        case 'postal_code':
          return value && !/^\d{6}$/.test(value) ? $t('postalEmpty') : '';
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      es_dialog.confirm({
        title: this.$t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      }).catch(function () {
        _this2.$emit('cancel-delete', _this2.data);
      });
    },

    // get values of area component
    getArea: function getArea() {
      return this.$refs.area ? this.$refs.area.getValues() : [];
    },

    // set area code to area component
    setAreaCode: function setAreaCode(code) {
      var _this3 = this;

      this.data.area_code = code || '';
      this.$nextTick(function () {
        _this3.$nextTick(function () {
          var area = _this3.$refs.area;

          if (area) {
            _this3.assignAreaValues(area.getValues());
          }
        });
      });
    },
    getAreaContainer: function getAreaContainer() {
      return document.body;
    }
  }
}));
// CONCATENATED MODULE: ./es/mixins/find-parent.js
/**
 * find parent component by name
 */

/* harmony default export */ var find_parent = ({
  data: function data() {
    return {
      parent: null
    };
  },

  methods: {
    findParent: function findParent(name) {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.name === name) {
          this.parent = parent;
          break;
        }
        parent = parent.$parent;
      }
    }
  }
});
// CONCATENATED MODULE: ./es/radio/index.js




/* harmony default export */ var es_radio = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b({ disabled: _vm.isDisabled }), on: { "click": function click($event) {
          _vm.$emit('click');
        } } }, [_c('span', { class: _vm.b('input') }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], class: _vm.b('control'), attrs: { "type": "radio", "disabled": _vm.isDisabled }, domProps: { "value": _vm.name, "checked": _vm._q(_vm.currentValue, _vm.name) }, on: { "change": function change($event) {
          _vm.currentValue = _vm.name;
        } } }), _c('icon', { attrs: { "name": _vm.currentValue === _vm.name ? 'checked' : 'check' } })], 1), _vm.$slots.default ? _c('span', { class: _vm.b('label'), on: { "click": _vm.onClickLabel } }, [_vm._t("default")], 2) : _vm._e()]);
  },

  name: 'radio',

  mixins: [find_parent],

  props: {
    name: null,
    value: null,
    disabled: Boolean
  },

  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        (this.parent || this).$emit('input', val);
      }
    },

    isDisabled: function isDisabled() {
      return this.parent ? this.parent.disabled || this.disabled : this.disabled;
    }
  },

  created: function created() {
    this.findParent('van-radio-group');
  },

  methods: {
    onClickLabel: function onClickLabel() {
      if (!this.isDisabled) {
        this.currentValue = this.name;
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/radio-group/index.js



/* harmony default export */ var radio_group = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_vm._t("default")], 2);
  },

  name: 'radio-group',

  props: {
    value: null,
    disabled: Boolean
  },

  watch: {
    value: function value(_value) {
      this.$emit('change', _value);
    }
  }
}));
// CONCATENATED MODULE: ./es/address-list/index.js





/* harmony default export */ var address_list = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('radio-group', { class: _vm.b('group'), attrs: { "value": _vm.value }, on: { "input": function input($event) {
          _vm.$emit('input', $event);
        } } }, [_c('cell-group', _vm._l(_vm.list, function (item, index) {
      return _c('cell', { key: item.id, attrs: { "is-link": "" } }, [_c('radio', { attrs: { "name": item.id }, on: { "click": function click($event) {
            _vm.$emit('select', item, index);
          } } }, [_c('div', { class: _vm.b('name') }, [_vm._v(_vm._s(item.name) + "，" + _vm._s(item.tel))]), _c('div', { class: _vm.b('address') }, [_vm._v(_vm._s(_vm.$t('address')) + "：" + _vm._s(item.address))])]), _c('icon', { class: _vm.b('edit'), attrs: { "slot": "right-icon", "name": "edit" }, on: { "click": function click($event) {
            _vm.$emit('edit', item, index);
          } }, slot: "right-icon" })], 1);
    }))], 1), _c('cell', { staticClass: "van-hairline--top", class: _vm.b('add'), attrs: { "icon": "add", "is-link": "", "title": _vm.addButtonText || _vm.$t('add') }, on: { "click": function click($event) {
          _vm.$emit('add');
        } } })], 1);
  },

  name: 'address-list',

  components: {
    Radio: es_radio,
    RadioGroup: radio_group
  },

  props: {
    addButtonText: String,
    value: [String, Number],
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/badge/index.js



/* harmony default export */ var badge = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { class: [_vm.b({ select: _vm.select }), 'van-hairline'], attrs: { "href": _vm.url }, on: { "click": _vm.onClick } }, [_vm.isDef(_vm.info) ? _c('div', { class: _vm.b('info') }, [_vm._v(_vm._s(_vm.info))]) : _vm._e(), _vm._v("\n  " + _vm._s(_vm.title) + "\n")]);
  },

  name: 'badge',

  props: {
    url: String,
    info: [String, Number],
    title: String
  },

  beforeCreate: function beforeCreate() {
    this.$parent.badges.push(this);
  },

  computed: {
    select: function select() {
      return this.$parent.badges.indexOf(this) === this.$parent.activeKey;
    }
  },

  methods: {
    onClick: function onClick() {
      this.$emit('click', this.$parent.badges.indexOf(this));
    }
  }
}));
// CONCATENATED MODULE: ./es/badge-group/index.js



/* harmony default export */ var badge_group = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-hairline--top-bottom", class: _vm.b() }, [_vm._t("default")], 2);
  },

  name: 'badge-group',

  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },

  data: function data() {
    return {
      badges: []
    };
  }
}));
// CONCATENATED MODULE: ./es/card/index.js



/* harmony default export */ var card = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b({ center: _vm.centered }) }, [_c('div', { class: _vm.b('thumb') }, [_vm._t("thumb", [_c('img', { class: _vm.b('img'), attrs: { "src": _vm.thumb } })])], 2), _c('div', { class: _vm.b('content') }, [_vm._t("title", [_vm.title || _vm.isDef(_vm.price) ? _c('div', { class: _vm.b('row') }, [_vm.title ? _c('div', { class: _vm.b('title') }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm.isDef(_vm.price) ? _c('div', { class: _vm.b('price') }, [_vm._v(_vm._s(_vm.currency) + " " + _vm._s(_vm.price))]) : _vm._e()]) : _vm._e()]), _vm._t("desc", [_vm.desc || _vm.isDef(_vm.num) ? _c('div', { class: _vm.b('row') }, [_vm.desc ? _c('div', { class: _vm.b('desc') }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e(), _vm.isDef(_vm.num) ? _c('div', { class: _vm.b('num') }, [_vm._v("x " + _vm._s(_vm.num))]) : _vm._e()]) : _vm._e()]), _vm._t("tags")], 2), _vm.$slots.footer ? _c('div', { class: _vm.b('footer') }, [_vm._t("footer")], 2) : _vm._e()]);
  },

  name: 'card',

  props: {
    thumb: String,
    title: String,
    desc: String,
    centered: Boolean,
    num: [Number, String],
    price: [Number, String],
    currency: {
      type: String,
      default: '¥'
    }
  }
}));
// CONCATENATED MODULE: ./es/utils/clickoutside.js
/**
 * v-clickoutside
 *
 * ```vue
 * <div v-clickoutside="onClose">
 * ```
 */



var clickoutside_context = '@@clickoutsideContext';

/* harmony default export */ var clickoutside = ({
  bind: function bind(el, binding) {
    var handler = function handler(event) {
      if (!el.contains(event.target)) {
        el[clickoutside_context].callback();
      }
    };

    el[clickoutside_context] = {
      handler: handler,
      callback: binding.value,
      arg: binding.arg || 'click'
    };

    on(document, el[clickoutside_context].arg, handler);
  },
  update: function update(el, binding) {
    el[clickoutside_context].callback = binding.value;
  },
  unbind: function unbind(el) {
    off(document, el[clickoutside_context].arg, el[clickoutside_context].handler);
  },
  install: function install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
});
// CONCATENATED MODULE: ./es/cell-swipe/index.js





var THRESHOLD = 0.15;

/* harmony default export */ var cell_swipe = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "clickoutside", rawName: "v-clickoutside:touchstart", value: _vm.onClick, expression: "onClick", arg: "touchstart" }], class: _vm.b(), on: { "click": function click($event) {
          _vm.onClick('cell');
        }, "touchstart": _vm.startDrag, "touchmove": _vm.onDrag, "touchend": _vm.endDrag, "touchcancel": _vm.endDrag } }, [_c('div', { class: _vm.b('wrapper'), style: _vm.wrapperStyle, on: { "transitionend": function transitionend($event) {
          _vm.swipe = false;
        } } }, [_vm.leftWidth ? _c('div', { class: _vm.b('left'), on: { "click": function click($event) {
          $event.stopPropagation();_vm.onClick('left');
        } } }, [_vm._t("left")], 2) : _vm._e(), _vm._t("default"), _vm.rightWidth ? _c('div', { class: _vm.b('right'), on: { "click": function click($event) {
          $event.stopPropagation();_vm.onClick('right');
        } } }, [_vm._t("right")], 2) : _vm._e()], 2)]);
  },

  name: 'cell-swipe',

  mixins: [touch],

  props: {
    onClose: Function,
    leftWidth: {
      type: Number,
      default: 0
    },
    rightWidth: {
      type: Number,
      default: 0
    }
  },

  directives: {
    Clickoutside: clickoutside
  },

  data: function data() {
    return {
      offset: 0,
      draging: false
    };
  },

  computed: {
    wrapperStyle: function wrapperStyle() {
      return {
        transform: 'translate3d(' + this.offset + 'px, 0, 0)',
        transition: this.draging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)'
      };
    }
  },

  methods: {
    close: function close() {
      this.offset = 0;
    },
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },
    swipeMove: function swipeMove() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.offset = offset;
      offset && (this.swiping = true);
      !offset && (this.opened = false);
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var offset = this.offset,
          leftWidth = this.leftWidth,
          rightWidth = this.rightWidth;

      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD;

      // right
      if (direction > 0 && -offset > rightWidth * threshold && rightWidth > 0) {
        this.swipeMove(-rightWidth);
        this.resetSwipeStatus();
        // left
      } else if (direction < 0 && offset > leftWidth * threshold && leftWidth > 0) {
        this.swipeMove(leftWidth);
        this.resetSwipeStatus();
      } else {
        this.swipeMove();
      }
    },
    startDrag: function startDrag(event) {
      this.draging = true;
      this.touchStart(event);

      if (this.opened) {
        this.startX -= this.offset;
      }
    },
    onDrag: function onDrag(event) {
      this.touchMove(event);
      var deltaX = this.deltaX;

      if (deltaX < 0 && (-deltaX > this.rightWidth || !this.rightWidth) || deltaX > 0 && (deltaX > this.leftWidth || deltaX > 0 && !this.leftWidth)) {
        return;
      }

      if (this.direction === 'horizontal') {
        event.preventDefault();
        this.swipeMove(deltaX);
      };
    },
    endDrag: function endDrag() {
      this.draging = false;
      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? -1 : 1);
      };
    },
    onClick: function onClick() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'outside';

      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this);
      } else {
        this.swipeMove(0);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/checkbox/index.js




/* harmony default export */ var es_checkbox = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('icon', { class: [_vm.b('icon'), "van-checkbox--" + _vm.shape, {
        'van-checkbox--disabled': _vm.isDisabled,
        'van-checkbox--checked': _vm.checked
      }], attrs: { "name": "success" }, on: { "click": _vm.onClick } }), _vm.$slots.default ? _c('span', { class: _vm.b('label'), on: { "click": function click($event) {
          _vm.onClick('label');
        } } }, [_vm._t("default")], 2) : _vm._e()], 1);
  },

  name: 'checkbox',

  mixins: [find_parent],

  props: {
    name: null,
    value: null,
    disabled: Boolean,
    labelDisabled: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: 'round'
    }
  },

  computed: {
    checked: {
      get: function get() {
        return this.parent ? this.parent.value.indexOf(this.name) !== -1 : this.value;
      },
      set: function set(val) {
        var parent = this.parent;

        if (parent) {
          var parentValue = this.parent.value.slice();
          if (val) {
            if (parent.max && parentValue.length >= parent.max) {
              return;
            }
            /* istanbul ignore else */
            if (parentValue.indexOf(this.name) === -1) {
              parentValue.push(this.name);
              parent.$emit('input', parentValue);
            }
          } else {
            var index = parentValue.indexOf(this.name);
            /* istanbul ignore else */
            if (index !== -1) {
              parentValue.splice(index, 1);
              parent.$emit('input', parentValue);
            }
          }
        } else {
          this.$emit('input', val);
        }
      }
    },

    isDisabled: function isDisabled() {
      return this.parent && this.parent.disabled || this.disabled;
    }
  },

  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },

  created: function created() {
    this.findParent('van-checkbox-group');
  },

  methods: {
    onClick: function onClick(target) {
      if (!this.isDisabled && !(target === 'label' && this.labelDisabled)) {
        this.checked = !this.checked;
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/checkbox-group/index.js



/* harmony default export */ var checkbox_group = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_vm._t("default")], 2);
  },

  name: 'checkbox-group',

  props: {
    value: Array,
    disabled: Boolean,
    max: {
      default: 0,
      type: Number
    }
  },

  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  }
}));
// EXTERNAL MODULE: ./es/utils/raf.js
var raf = __webpack_require__(12);

// CONCATENATED MODULE: ./es/circle/index.js




/* harmony default export */ var circle = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b(), style: _vm.style }, [_c('svg', { attrs: { "viewBox": "0 0 1060 1060" } }, [_c('path', { class: _vm.b('hover'), style: _vm.hoverStyle, attrs: { "d": _vm.path } }), _c('path', { class: _vm.b('layer'), style: _vm.layerStyle, attrs: { "d": _vm.path } })]), _vm._t("default", [_c('div', { class: _vm.b('text') }, [_vm._v(_vm._s(_vm.text))])])], 2);
  },

  name: 'circle',

  props: {
    text: String,
    value: Number,
    speed: Number,
    size: {
      type: String,
      default: '100px'
    },
    fill: {
      type: String,
      default: 'none'
    },
    rate: {
      type: Number,
      default: 100
    },
    layerColor: {
      type: String,
      default: '#fff'
    },
    color: {
      type: String,
      default: '#38f'
    },
    strokeWidth: {
      type: Number,
      default: 40
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },

  beforeCreate: function beforeCreate() {
    this.perimeter = 3140;
    this.path = 'M 530 530 m -500, 0 a 500, 500 0 1, 1 1000, 0 a 500, 500 0 1, 1 -1000, 0';
  },

  computed: {
    style: function style() {
      return {
        width: this.size,
        height: this.size
      };
    },
    layerStyle: function layerStyle() {
      var offset = this.perimeter * (100 - this.value) / 100;
      offset = this.clockwise ? offset : this.perimeter * 2 - offset;
      return {
        stroke: '' + this.color,
        strokeDashoffset: offset + 'px',
        strokeWidth: this.strokeWidth + 1 + 'px'
      };
    },
    hoverStyle: function hoverStyle() {
      return {
        fill: '' + this.fill,
        stroke: '' + this.layerColor,
        strokeWidth: this.strokeWidth + 'px'
      };
    }
  },

  watch: {
    rate: {
      handler: function handler() {
        this.startTime = Date.now();
        this.startRate = this.value;
        this.endRate = this.format(this.rate);
        this.increase = this.endRate > this.startRate;
        this.duration = Math.abs((this.startRate - this.endRate) * 1000 / this.speed);
        if (this.speed) {
          Object(raf["a" /* cancel */])(this.rafId);
          this.rafId = Object(raf["b" /* raf */])(this.animate);
        } else {
          this.$emit('input', this.endRate);
        }
      },

      immediate: true
    }
  },

  methods: {
    animate: function animate() {
      var now = Date.now();
      var progress = Math.min((now - this.startTime) / this.duration, 1);
      var rate = progress * (this.endRate - this.startRate) + this.startRate;
      this.$emit('input', this.format(parseFloat(rate.toFixed(1))));
      if (this.increase ? rate < this.endRate : rate > this.endRate) {
        this.rafId = Object(raf["b" /* raf */])(this.animate);
      }
    },
    format: function format(rate) {
      return Math.min(Math.max(rate, 0), 100);
    }
  }
}));
// CONCATENATED MODULE: ./es/col/index.js



/* harmony default export */ var col = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.tag, { tag: "component", class: _vm.b((_obj = {}, _obj[_vm.span] = _vm.span, _obj["offset-" + _vm.offset] = _vm.offset, _obj)), style: _vm.style }, [_vm._t("default")], 2);
    var _obj;
  },

  name: 'col',

  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div'
    }
  },

  computed: {
    gutter: function gutter() {
      return this.$parent && Number(this.$parent.gutter) || 0;
    },
    style: function style() {
      var padding = this.gutter / 2 + "px";
      return this.gutter ? { paddingLeft: padding, paddingRight: padding } : {};
    }
  }
}));
// CONCATENATED MODULE: ./es/collapse/index.js



/* harmony default export */ var collapse = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-hairline--top-bottom", class: _vm.b() }, [_vm._t("default")], 2);
  },

  name: 'collapse',

  props: {
    accordion: Boolean,
    value: [String, Number, Array]
  },

  data: function data() {
    return {
      items: []
    };
  },

  methods: {
    switch: function _switch(name, expanded) {
      if (!this.accordion) {
        name = expanded ? this.value.concat(name) : this.value.filter(function (activeName) {
          return activeName !== name;
        });
      }
      this.$emit('change', name);
      this.$emit('input', name);
    }
  }
}));
// CONCATENATED MODULE: ./es/collapse-item/index.js




/* harmony default export */ var collapse_item = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.b({ expanded: _vm.expanded }), { 'van-hairline--top': _vm.index }] }, [_c('cell', { class: _vm.b('title'), attrs: { "is-link": "" }, on: { "click": _vm.onClick } }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.expanded, expression: "expanded" }], class: _vm.b('content') }, [_vm._t("default")], 2)], 1);
  },

  name: 'collapse-item',

  mixins: [find_parent],

  props: {
    name: [String, Number],
    title: String
  },

  computed: {
    items: function items() {
      return this.parent.items;
    },
    index: function index() {
      return this.items.indexOf(this);
    },
    currentName: function currentName() {
      return this.isDef(this.name) ? this.name : this.index;
    },
    expanded: function expanded() {
      var _this = this;

      var value = this.parent.value;

      return this.parent.accordion ? value === this.currentName : value.some(function (name) {
        return name === _this.currentName;
      });
    }
  },

  created: function created() {
    this.findParent('van-collapse');
    this.items.push(this);
  },
  destroyed: function destroyed() {
    this.items.splice(this.index, 1);
  },

  methods: {
    onClick: function onClick() {
      var parent = this.parent;

      var name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      this.parent.switch(name, !this.expanded);
    }
  }
}));
// CONCATENATED MODULE: ./es/contact-card/index.js



/* harmony default export */ var contact_card = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b([_vm.type, { uneditable: !_vm.editable }]), on: { "click": _vm.onClick } }, [_c('div', { class: _vm.b('content') }, [_vm.type === 'add' ? [_c('icon', { class: _vm.b('icon'), attrs: { "name": "add2" } }), _c('div', { class: _vm.b('text') }, [_vm._v(_vm._s(_vm.addText || _vm.$t('addText')))])] : _vm.type === 'edit' ? [_c('icon', { class: _vm.b('icon'), attrs: { "name": "contact" } }), _c('div', { class: _vm.b('text') }, [_c('div', [_vm._v(_vm._s(_vm.$t('contact')) + "：" + _vm._s(_vm.name))]), _c('div', [_vm._v(_vm._s(_vm.$t('tel')) + "：" + _vm._s(_vm.tel))])])] : _vm._e()], 2), _vm.editable ? _c('icon', { class: _vm.b('arrow'), attrs: { "name": "arrow" } }) : _vm._e()], 1);
  },

  name: 'contact-card',

  props: {
    tel: String,
    name: String,
    addText: String,
    editable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'add'
    }
  },

  methods: {
    onClick: function onClick(event) {
      if (this.editable) {
        this.$emit('click', event);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/contact-edit/index.js









var defaultContact = {
  id: '',
  tel: '',
  name: ''
};

/* harmony default export */ var contact_edit = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('cell-group', [_c('field', { attrs: { "maxlength": "30", "label": _vm.$t('contact'), "placeholder": _vm.$t('name'), "error": _vm.errorInfo.name }, on: { "focus": function focus($event) {
          _vm.onFocus('name');
        } }, model: { value: _vm.data.name, callback: function callback($$v) {
          _vm.$set(_vm.data, "name", $$v);
        }, expression: "data.name" } }), _c('field', { attrs: { "type": "tel", "label": _vm.$t('tel'), "placeholder": _vm.$t('telPlaceholder'), "error": _vm.errorInfo.tel }, on: { "focus": function focus($event) {
          _vm.onFocus('tel');
        } }, model: { value: _vm.data.tel, callback: function callback($$v) {
          _vm.$set(_vm.data, "tel", $$v);
        }, expression: "data.tel" } })], 1), _c('div', { class: _vm.b('buttons') }, [_c('van-button', { attrs: { "block": "", "loading": _vm.isSaving, "type": "primary" }, on: { "click": _vm.onSave } }, [_vm._v(_vm._s(_vm.$t('save')))]), _vm.isEdit ? _c('van-button', { attrs: { "block": "", "loading": _vm.isDeleting }, on: { "click": _vm.onDelete } }, [_vm._v(_vm._s(_vm.$t('delete')))]) : _vm._e()], 1)], 1);
  },

  name: 'contact-edit',

  components: {
    Field: field,
    VanButton: es_button
  },

  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    contactInfo: {
      type: Object,
      default: function _default() {
        return extends_default()({}, defaultContact);
      }
    },
    telValidator: {
      type: Function,
      default: mobile
    }
  },

  data: function data() {
    return {
      data: extends_default()({}, this.defaultContact, this.contactInfo),
      errorInfo: {
        name: false,
        tel: false
      }
    };
  },

  watch: {
    contactInfo: function contactInfo(val) {
      this.data = val;
    }
  },

  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key].trim();
      switch (key) {
        case 'name':
          return value ? '' : this.$t('nameEmpty');
        case 'tel':
          return this.telValidator(value) ? '' : this.$t('telInvalid');
      }
    },
    onSave: function onSave() {
      var _this = this;

      var isValid = ['name', 'tel'].every(function (item) {
        var msg = _this.getErrorMessageByKey(item);
        if (msg) {
          _this.errorInfo[item] = true;
          es_toast(msg);
        }
        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      es_dialog.confirm({
        message: this.$t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      });
    }
  }
}));
// CONCATENATED MODULE: ./es/contact-list/index.js





/* harmony default export */ var contact_list = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('radio-group', { attrs: { "value": _vm.value }, on: { "input": function input($event) {
          _vm.$emit('input', $event);
        } } }, [_c('cell-group', _vm._l(_vm.list, function (item, index) {
      return _c('cell', { key: item.id, attrs: { "is-link": "" } }, [_c('radio', { attrs: { "name": item.id }, on: { "click": function click($event) {
            _vm.$emit('select', item, index);
          } } }, [_c('p', { class: _vm.b('text') }, [_vm._v(_vm._s(_vm.$t('contact')) + "：" + _vm._s(item.name))]), _c('p', { class: _vm.b('text') }, [_vm._v(_vm._s(_vm.$t('tel')) + "：" + _vm._s(item.tel))])]), _c('icon', { class: _vm.b('edit'), attrs: { "slot": "right-icon", "name": "edit" }, on: { "click": function click($event) {
            _vm.$emit('edit', item, index);
          } }, slot: "right-icon" })], 1);
    }))], 1), _c('cell', { staticClass: "van-hairline--top", class: _vm.b('add'), attrs: { "icon": "add", "is-link": "", "title": _vm.addText || _vm.$t('addText') }, on: { "click": function click($event) {
          _vm.$emit('add');
        } } })], 1);
  },

  name: 'contact-list',

  components: {
    Radio: es_radio,
    RadioGroup: radio_group
  },

  props: {
    value: {},
    addText: String,
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/coupon-cell/index.js



/* harmony default export */ var coupon_cell = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('cell-group', { class: _vm.b() }, [_c('cell', { attrs: { "title": _vm.title || _vm.$t('title'), "value": _vm.value, "is-link": _vm.editable }, on: { "click": function click($event) {
          _vm.$emit('click');
        } } })], 1);
  },

  name: 'coupon-cell',

  model: {
    prop: 'chosenCoupon'
  },

  props: {
    title: String,
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    editable: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    value: function value() {
      var coupons = this.coupons;

      var coupon = coupons[this.chosenCoupon];
      if (coupon) {
        return this.$t('reduce') + '\uFFE5' + (coupon.value / 100).toFixed(2);
      }
      return coupons.length === 0 ? this.$t('tips') : this.$t('count', coupons.length);
    }
  }
}));
// CONCATENATED MODULE: ./es/coupon-list/Item.js



/* harmony default export */ var Item = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b({ disabled: _vm.disabled }) }, [_c('div', { class: _vm.b('head') }, [_c('div', { class: _vm.b('lines') }), _c('div', { class: _vm.b('gradient') }, [_c('h2', { domProps: { "innerHTML": _vm._s(_vm.faceAmount) } }), _c('p', [_vm._v(_vm._s(_vm.conditionMessage))])])]), _c('div', { class: _vm.b('body') }, [_c('h2', [_vm._v(_vm._s(_vm.data.name))]), _c('span', [_vm._v(_vm._s(_vm.validPeriod))]), _vm.disabled && _vm.data.reason ? _c('p', [_vm._v(_vm._s(_vm.data.reason))]) : _vm._e(), _vm.chosen ? _c('div', { class: _vm.b('corner') }, [_c('icon', { attrs: { "name": "success" } })], 1) : _vm._e()])]);
  },

  name: 'coupon-item',

  props: {
    data: Object,
    chosen: Boolean,
    disabled: Boolean
  },

  computed: {
    validPeriod: function validPeriod() {
      return this.getDate(this.data.start_at) + '-' + this.getDate(this.data.end_at);
    },
    faceAmount: function faceAmount() {
      return this.data.denominations !== 0 ? '<span>\xA5</span> ' + this.formatAmount(this.data.denominations) : this.data.discount !== 0 ? this.formatDiscount(this.data.discount) : '';
    },
    conditionMessage: function conditionMessage() {
      var condition = this.data.origin_condition;
      condition = condition % 100 === 0 ? Math.round(condition / 100) : (condition / 100).toFixed(2);
      return this.data.origin_condition === 0 ? this.$t('unlimited') : this.$t('condition', condition);
    }
  },

  methods: {
    getDate: function getDate(timeStamp) {
      var date = new Date(timeStamp * 1000);
      return date.getFullYear() + '.' + this.padZero(date.getMonth() + 1) + '.' + this.padZero(date.getDate());
    },
    padZero: function padZero(num) {
      return (num < 10 ? '0' : '') + num;
    },
    formatDiscount: function formatDiscount(discount) {
      return this.$t('discount', '' + (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1));
    },
    formatAmount: function formatAmount(amount) {
      return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
    }
  }
}));
// CONCATENATED MODULE: ./es/coupon-list/index.js






/* harmony default export */ var coupon_list = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_vm.showExchangeBar ? _c('cell-group', { class: _vm.b('top') }, [_c('field', { staticClass: "van-hairline--surround", class: _vm.b('field'), attrs: { "clearable": "", "placeholder": _vm.inputPlaceholder || _vm.$t('placeholder'), "maxlength": 20 }, model: { value: _vm.currentCode, callback: function callback($$v) {
          _vm.currentCode = $$v;
        }, expression: "currentCode" } }), _c('van-button', { class: _vm.b('exchange'), attrs: { "size": "small", "type": "danger", "text": _vm.exchangeButtonText || _vm.$t('exchange'), "loading": _vm.exchangeButtonLoading, "disabled": _vm.buttonDisabled }, on: { "click": _vm.onClickExchangeButton } })], 1) : _vm._e(), _c('div', { ref: "list", class: _vm.b('list', { 'with-exchange': _vm.showExchangeBar }) }, [_vm._l(_vm.coupons, function (item, index) {
      return _c('coupon-item', { key: item.id || item.name, ref: "card", refInFor: true, attrs: { "data": item, "chosen": index === _vm.chosenCoupon }, nativeOn: { "click": function click($event) {
            _vm.$emit('change', index);
          } } });
    }), _vm.disabledCoupons.length ? _c('h3', [_vm._v(_vm._s(_vm.disabledListTitle || _vm.$t('disabled')))]) : _vm._e(), _vm._l(_vm.disabledCoupons, function (item) {
      return _c('coupon-item', { key: item.id || item.name, attrs: { "disabled": "", "data": item } });
    }), !_vm.coupons.length && !_vm.disabledCoupons.length ? _c('div', { class: _vm.b('empty') }, [_c('img', { attrs: { "src": "https://img.yzcdn.cn/v2/image/wap/trade/new_order/empty@2x.png" } }), _c('p', [_vm._v(_vm._s(_vm.$t('empty')))])]) : _vm._e()], 2), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.showCloseButton, expression: "showCloseButton" }], staticClass: "van-hairline--top", class: _vm.b('close'), domProps: { "textContent": _vm._s(_vm.closeButtonText || _vm.$t('close')) }, on: { "click": function click($event) {
          _vm.$emit('change', -1);
        } } })], 1);
  },

  name: 'coupon-list',

  components: {
    VanButton: es_button,
    Field: field,
    CouponItem: Item
  },

  model: {
    prop: 'code'
  },

  props: {
    code: String,
    closeButtonText: String,
    inputPlaceholder: String,
    disabledListTitle: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      default: 1
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabledCoupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    displayedCouponIndex: {
      type: Number,
      default: -1
    },
    showExchangeBar: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      currentCode: this.code || ''
    };
  },

  computed: {
    buttonDisabled: function buttonDisabled() {
      return !this.exchangeButtonLoading && (this.exchangeButtonDisabled || this.currentCode.length < this.exchangeMinLength);
    }
  },

  watch: {
    code: function code(_code) {
      this.currentCode = _code;
    },
    currentCode: function currentCode(code) {
      this.$emit('input', code);
    },
    displayedCouponIndex: function displayedCouponIndex(val) {
      this.scrollToShowCoupon(val);
    }
  },

  mounted: function mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },

  methods: {
    onClickExchangeButton: function onClickExchangeButton() {
      this.$emit('exchange', this.currentCode);

      // auto clear currentCode when not use v-model
      if (!this.code) {
        this.currentCode = '';
      }
    },

    // scroll to show specific coupon
    scrollToShowCoupon: function scrollToShowCoupon(index) {
      var _this = this;

      if (index === -1) {
        return;
      }

      this.$nextTick(function () {
        var _$refs = _this.$refs,
            card = _$refs.card,
            list = _$refs.list;

        /* istanbul ignore next */

        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    }
  }
}));
// CONCATENATED MODULE: ./es/datetime-picker/index.js




var currentYear = new Date().getFullYear();
var isValidDate = function isValidDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
};

/* harmony default export */ var datetime_picker = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('picker', { ref: "picker", attrs: { "title": _vm.title, "columns": _vm.columns, "item-height": _vm.itemHeight, "show-toolbar": _vm.showToolbar, "visible-item-count": _vm.visibleItemCount, "confirm-button-text": _vm.confirmButtonText, "cancel-button-text": _vm.cancelButtonText }, on: { "change": _vm.onChange, "confirm": _vm.onConfirm, "cancel": function cancel($event) {
          _vm.$emit('cancel');
        } } });
  },

  name: 'datetime-picker',

  components: {
    Picker: picker
  },

  props: {
    value: {},
    title: String,
    itemHeight: Number,
    visibleItemCount: Number,
    confirmButtonText: String,
    cancelButtonText: String,
    type: {
      type: String,
      default: 'datetime'
    },
    showToolbar: {
      type: Boolean,
      default: true
    },
    format: {
      type: String,
      default: 'YYYY.MM.DD HH时 mm分'
    },
    minDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear - 10, 0, 1);
      },
      validator: isValidDate
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear + 10, 11, 31);
      },
      validator: isValidDate
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    }
  },

  data: function data() {
    return {
      innerValue: this.correctValue(this.value)
    };
  },

  watch: {
    value: function value(val) {
      val = this.correctValue(val);
      var isEqual = this.type === 'time' ? val === this.innerValue : val.valueOf() === this.innerValue.valueOf();
      if (!isEqual) this.innerValue = val;
    },
    innerValue: function innerValue(val) {
      this.updateColumnValue(val);
      this.$emit('input', val);
    }
  },

  computed: {
    ranges: function ranges() {
      if (this.type === 'time') {
        return [[this.minHour, this.maxHour], [0, 59]];
      }

      var _getBoundary = this.getBoundary('max', this.innerValue),
          maxYear = _getBoundary.maxYear,
          maxDate = _getBoundary.maxDate,
          maxMonth = _getBoundary.maxMonth,
          maxHour = _getBoundary.maxHour,
          maxMinute = _getBoundary.maxMinute;

      var _getBoundary2 = this.getBoundary('min', this.innerValue),
          minYear = _getBoundary2.minYear,
          minDate = _getBoundary2.minDate,
          minMonth = _getBoundary2.minMonth,
          minHour = _getBoundary2.minHour,
          minMinute = _getBoundary2.minMinute;

      var result = [[minYear, maxYear], [minMonth, maxMonth], [minDate, maxDate], [minHour, maxHour], [minMinute, maxMinute]];

      if (this.type === 'date') result.splice(3, 2);
      if (this.type === 'year-month') result.splice(2, 3);
      return result;
    },
    columns: function columns() {
      var _this = this;

      var results = this.ranges.map(function (range) {
        var values = _this.times(range[1] - range[0] + 1, function (index) {
          var value = range[0] + index;
          return value < 10 ? '0' + value : '' + value;
        });

        return {
          values: values
        };
      });
      return results;
    }
  },

  methods: {
    correctValue: function correctValue(value) {
      // validate value
      var isDateType = this.type !== 'time';
      if (isDateType && !isValidDate(value)) {
        value = this.minDate;
      } else if (!value) {
        var _minHour = this.minHour;

        value = (_minHour > 10 ? _minHour : '0' + _minHour) + ':00';
      }

      // time type
      if (!isDateType) {
        var _value$split = value.split(':'),
            hour = _value$split[0],
            minute = _value$split[1];

        var correctedHour = Math.max(hour, this.minHour);
        correctedHour = Math.min(correctedHour, this.maxHour);
        correctedHour = ('00' + correctedHour).slice(-2);

        return correctedHour + ':' + minute;
      }

      // date type

      var _getBoundary3 = this.getBoundary('max', value),
          maxYear = _getBoundary3.maxYear,
          maxDate = _getBoundary3.maxDate,
          maxMonth = _getBoundary3.maxMonth,
          maxHour = _getBoundary3.maxHour,
          maxMinute = _getBoundary3.maxMinute;

      var _getBoundary4 = this.getBoundary('min', value),
          minYear = _getBoundary4.minYear,
          minDate = _getBoundary4.minDate,
          minMonth = _getBoundary4.minMonth,
          minHour = _getBoundary4.minHour,
          minMinute = _getBoundary4.minMinute;

      var minDay = new Date(minYear, minMonth - 1, minDate, minHour, minMinute);
      var maxDay = new Date(maxYear, maxMonth - 1, maxDate, maxHour, maxMinute);
      value = Math.max(value, minDay);
      value = Math.min(value, maxDay);

      return new Date(value);
    },
    times: function times(n, iteratee) {
      var index = -1;
      var result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    },
    getBoundary: function getBoundary(type, value) {
      var _ref;

      var boundary = this[type + 'Date'];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;

      if (type === 'max') {
        month = 12;
        date = this.getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;
        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();
          if (value.getDate() === date) {
            hour = boundary.getHours();
            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return _ref = {}, _ref[type + 'Year'] = year, _ref[type + 'Month'] = month, _ref[type + 'Date'] = date, _ref[type + 'Hour'] = hour, _ref[type + 'Minute'] = minute, _ref;
    },
    getTrueValue: function getTrueValue(formattedValue) {
      if (!formattedValue) return;
      while (isNaN(parseInt(formattedValue, 10))) {
        formattedValue = formattedValue.slice(1);
      }
      return parseInt(formattedValue, 10);
    },
    getMonthEndDay: function getMonthEndDay(year, month) {
      if (this.isShortMonth(month)) {
        return 30;
      } else if (month === 2) {
        return this.isLeapYear(year) ? 29 : 28;
      } else {
        return 31;
      }
    },
    isLeapYear: function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },
    isShortMonth: function isShortMonth(month) {
      return [4, 6, 9, 11].indexOf(month) > -1;
    },
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    onChange: function onChange(picker) {
      var _this2 = this;

      var values = picker.getValues();
      var value = void 0;

      if (this.type === 'time') {
        value = values.join(':');
      } else {
        var year = this.getTrueValue(values[0]);
        var month = this.getTrueValue(values[1]);
        var maxDate = this.getMonthEndDay(year, month);
        var date = this.getTrueValue(values[2]);
        if (this.type === 'year-month') {
          date = 1;
        }
        date = date > maxDate ? maxDate : date;
        var hour = 0;
        var minute = 0;
        if (this.type === 'datetime') {
          hour = this.getTrueValue(values[3]);
          minute = this.getTrueValue(values[4]);
        }
        value = new Date(year, month - 1, date, hour, minute);
      }
      value = this.correctValue(value);
      this.innerValue = value;
      this.$nextTick(function () {
        _this2.$emit('change', picker);
      });
    },
    updateColumnValue: function updateColumnValue(value) {
      var _this3 = this;

      var values = [];
      if (this.type === 'time') {
        var currentValue = value.split(':');
        values = [currentValue[0], currentValue[1]];
      } else {
        values = ['' + value.getFullYear(), ('0' + (value.getMonth() + 1)).slice(-2), ('0' + value.getDate()).slice(-2)];
        if (this.type === 'datetime') {
          values.push(('0' + value.getHours()).slice(-2), ('0' + value.getMinutes()).slice(-2));
        }
        if (this.type === 'year-month') {
          values = values.slice(0, 2);
        }
      }

      this.$nextTick(function () {
        _this3.setColumnByValues(values);
      });
    },
    setColumnByValues: function setColumnByValues(values) {
      if (!this.$refs.picker) {
        return;
      }
      this.$refs.picker.setValues(values);
    }
  },

  mounted: function mounted() {
    this.updateColumnValue(this.innerValue);
  }
}));
// CONCATENATED MODULE: ./es/goods-action/index.js



/* harmony default export */ var goods_action = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_vm._t("default")], 2);
  },

  name: 'goods-action'
}));
// CONCATENATED MODULE: ./es/goods-action-big-btn/index.js





/* harmony default export */ var goods_action_big_btn = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('van-button', { class: _vm.b(), attrs: { "tag": "a", "href": _vm.url, "type": _vm.primary ? 'primary' : 'default', "bottom-action": "" }, on: { "click": _vm.onClick } }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2);
  },

  name: 'goods-action-big-btn',

  mixins: [router_link],

  components: {
    VanButton: es_button
  },

  props: {
    url: String,
    text: String,
    primary: Boolean
  },

  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  }
}));
// CONCATENATED MODULE: ./es/goods-action-mini-btn/index.js




/* harmony default export */ var goods_action_mini_btn = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { staticClass: "van-hairline", class: _vm.b(), attrs: { "href": _vm.url }, on: { "click": _vm.onClick } }, [_c('icon', { class: [_vm.b('icon'), _vm.iconClass], attrs: { "info": _vm.info, "name": _vm.icon } }), _vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2);
  },

  name: 'goods-action-mini-btn',

  mixins: [router_link],

  props: {
    url: String,
    text: String,
    info: [String, Number],
    icon: String,
    iconClass: String
  },

  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  }
}));
// CONCATENATED MODULE: ./es/swipe/index.js




/* harmony default export */ var swipe = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('div', { class: _vm.b('track'), style: _vm.trackStyle, on: { "touchstart": _vm.onTouchStart, "touchmove": _vm.onTouchMove, "touchend": _vm.onTouchEnd, "touchcancel": _vm.onTouchEnd, "transitionend": function transitionend($event) {
          _vm.$emit('change', _vm.activeIndicator);
        } } }, [_vm._t("default")], 2), _vm.showIndicators && _vm.count > 1 ? _c('div', { class: _vm.b('indicators', { vertical: _vm.vertical }) }, _vm._l(_vm.count, function (index) {
      return _c('i', { class: _vm.b('indicator', { active: index - 1 === _vm.activeIndicator }) });
    })) : _vm._e()]);
  },

  name: 'swipe',

  mixins: [touch],

  props: {
    autoplay: Number,
    vertical: Boolean,
    loop: {
      type: Boolean,
      default: true
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },

  data: function data() {
    return {
      width: 0,
      height: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },
  mounted: function mounted() {
    this.initialize();
  },
  destroyed: function destroyed() {
    this.clear();
  },

  watch: {
    swipes: function swipes() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (!_autoplay) {
        this.clear();
      } else {
        this.autoPlay();
      }
    }
  },

  computed: {
    count: function count() {
      return this.swipes.length;
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'height' : 'width'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    trackStyle: function trackStyle() {
      var _ref;

      return _ref = {}, _ref[this.vertical ? 'height' : 'width'] = this.trackSize + 'px', _ref.transitionDuration = (this.swiping ? 0 : this.duration) + 'ms', _ref.transform = 'translate' + (this.vertical ? 'Y' : 'X') + '(' + this.offset + 'px)', _ref;
    }
  },

  methods: {
    // initialize swipe position
    initialize: function initialize() {
      clearTimeout(this.timer);
      if (this.$el) {
        var rect = this.$el.getBoundingClientRect();
        this.width = rect.width;
        this.height = rect.height;
      }
      this.swiping = true;
      this.active = this.initialSwipe;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;

      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable) return;

      this.touchMove(event);

      if (this.vertical && this.direction === 'vertical' || this.direction === 'horizontal') {
        event.preventDefault();
        event.stopPropagation();
      }

      this.move(0, Math.min(Math.max(this.delta, -this.size), this.size));
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable) return;

      if (this.delta) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        this.move(offset > 50 ? this.delta > 0 ? -1 : 1 : 0);
        this.swiping = false;
      }

      this.autoPlay();
    },
    move: function move() {
      var move = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var delta = this.delta,
          active = this.active,
          count = this.count,
          swipes = this.swipes,
          trackSize = this.trackSize;

      var atFirst = active === 0;
      var atLast = active === count - 1;
      var outOfBounds = !this.loop && (atFirst && (offset > 0 || move < 0) || atLast && (offset < 0 || move > 0));

      if (outOfBounds || count <= 1) {
        return;
      }

      if (move) {
        if (active === -1) {
          swipes[count - 1].offset = 0;
        }
        swipes[0].offset = atLast && move > 0 ? trackSize : 0;

        this.active += move;
      } else {
        if (atFirst) {
          swipes[count - 1].offset = delta > 0 ? -trackSize : 0;
        } else if (atLast) {
          swipes[0].offset = delta < 0 ? trackSize : 0;
        }
      }
      this.offset = offset - this.active * this.size;
    },
    swipeTo: function swipeTo(index) {
      var _this = this;

      this.swiping = true;
      this.correctPosition();
      setTimeout(function () {
        _this.swiping = false;
        _this.move(index % _this.count - _this.active);
      }, 30);
    },
    correctPosition: function correctPosition() {
      if (this.active <= -1) {
        this.move(this.count);
      }
      if (this.active >= this.count) {
        this.move(-this.count);
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this2 = this;

      var autoplay = this.autoplay;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this2.swiping = true;
          _this2.correctPosition();

          setTimeout(function () {
            _this2.swiping = false;
            _this2.move(1);
            _this2.autoPlay();
          }, 30);
        }, autoplay);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/swipe-item/index.js



/* harmony default export */ var swipe_item = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b(), style: _vm.style }, [_vm._t("default")], 2);
  },

  name: 'swipe-item',

  data: function data() {
    return {
      offset: 0
    };
  },

  computed: {
    style: function style() {
      var _$parent = this.$parent,
          vertical = _$parent.vertical,
          width = _$parent.width,
          height = _$parent.height;

      return {
        width: width + 'px',
        height: vertical ? height + 'px' : '100%',
        transform: 'translate' + (vertical ? 'Y' : 'X') + '(' + this.offset + 'px)'
      };
    }
  },

  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  }
}));
// CONCATENATED MODULE: ./es/image-preview/image-preview.js






/* harmony default export */ var image_preview = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.value, expression: "value" }], class: _vm.b(), on: { "touchstart": _vm.onTouchStart, "touchend": _vm.onTouchEnd, "touchcancel": _vm.onTouchEnd } }, [_c('swipe', { ref: "swipe", attrs: { "initial-swipe": _vm.startPosition } }, _vm._l(_vm.images, function (item, index) {
      return _c('swipe-item', { key: index }, [_c('img', { class: _vm.b('image'), attrs: { "src": item } })]);
    }))], 1);
  },

  name: 'image-preview',

  mixins: [popup],

  components: {
    Swipe: swipe,
    SwipeItem: swipe_item
  },

  props: {
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    startPosition: {
      type: Number,
      default: 0
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onTouchStart: function onTouchStart() {
      this.touchStartTime = new Date();
    },
    onTouchEnd: function onTouchEnd(event) {
      event.preventDefault();

      var deltaTime = new Date() - this.touchStartTime;
      var _$refs$swipe = this.$refs.swipe,
          offsetX = _$refs$swipe.offsetX,
          offsetY = _$refs$swipe.offsetY;

      // prevent long tap to close component

      if (deltaTime < 500 && offsetX < 10 && offsetY < 10) {
        this.$emit('input', false);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/image-preview/index.js



var image_preview_instance = void 0;

var image_preview_initInstance = function initInstance() {
  image_preview_instance = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(image_preview))({
    el: document.createElement('div')
  });
  document.body.appendChild(image_preview_instance.$el);
};

var ImagePreview = function ImagePreview(images) {
  var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!image_preview_instance) {
    image_preview_initInstance();
  }

  image_preview_instance.images = images;
  image_preview_instance.startPosition = startPosition;
  image_preview_instance.value = true;
  image_preview_instance.$on('input', function (show) {
    image_preview_instance.value = show;
  });

  return image_preview_instance;
};

ImagePreview.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(image_preview);
};

/* harmony default export */ var es_image_preview = (ImagePreview);
// EXTERNAL MODULE: ./node_modules/vue-lazyload/vue-lazyload.js
var vue_lazyload = __webpack_require__(46);
var vue_lazyload_default = /*#__PURE__*/__webpack_require__.n(vue_lazyload);

// CONCATENATED MODULE: ./es/lazyload/index.js


/* harmony default export */ var lazyload = (vue_lazyload_default.a);
// CONCATENATED MODULE: ./es/list/index.js





/* harmony default export */ var es_list = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_vm._t("default"), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.loading, expression: "loading" }], class: _vm.b('loading') }, [_vm._t("loading", [_c('loading'), _c('span', { class: _vm.b('loading-text') }, [_vm._v(_vm._s(_vm.loadingText || _vm.$t('loadingTip')))])])], 2)], 2);
  },

  name: 'list',

  model: {
    prop: 'loading'
  },

  props: {
    loading: Boolean,
    finished: Boolean,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    loadingText: String
  },

  mounted: function mounted() {
    this.scroller = utils_scroll.getScrollEventTarget(this.$el);
    this.handler(true);

    if (this.immediateCheck) {
      this.$nextTick(this.onScroll);
    }
  },
  destroyed: function destroyed() {
    this.handler(false);
  },
  activated: function activated() {
    this.handler(true);
  },
  deactivated: function deactivated() {
    this.handler(false);
  },

  watch: {
    loading: function loading() {
      this.$nextTick(this.onScroll);
    },
    finished: function finished() {
      this.$nextTick(this.onScroll);
    }
  },

  methods: {
    onScroll: function onScroll() {
      if (this.loading || this.finished) {
        return;
      }

      var el = this.$el;
      var scroller = this.scroller;

      var scrollerHeight = utils_scroll.getVisibleHeight(scroller);

      /* istanbul ignore next */
      if (!scrollerHeight || utils_scroll.getComputedStyle(el).display === 'none' || el.offsetParent === null) {
        return;
      }

      var scrollTop = utils_scroll.getScrollTop(scroller);
      var targetBottom = scrollTop + scrollerHeight;

      var reachBottom = false;

      /* istanbul ignore next */
      if (el === scroller) {
        reachBottom = scroller.scrollHeight - targetBottom < this.offset;
      } else {
        var elBottom = utils_scroll.getElementTop(el) - utils_scroll.getElementTop(scroller) + utils_scroll.getVisibleHeight(el);
        reachBottom = elBottom - scrollerHeight < this.offset;
      }

      /* istanbul ignore else */
      if (reachBottom) {
        this.$emit('input', true);
        this.$emit('load');
      }
    },
    handler: function handler(bind) {
      /* istanbul ignore else */
      if (this.binded !== bind) {
        this.binded = bind;
        (bind ? on : off)(this.scroller, 'scroll', this.onScroll);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/nav-bar/index.js



/* harmony default export */ var nav_bar = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-hairline--bottom", class: _vm.b({ fixed: _vm.fixed }), style: _vm.style }, [_c('div', { class: _vm.b('left'), on: { "click": function click($event) {
          _vm.$emit('click-left');
        } } }, [_vm._t("left", [_vm.leftArrow ? _c('icon', { class: _vm.b('arrow'), attrs: { "name": "arrow" } }) : _vm._e(), _vm.leftText ? _c('span', { class: _vm.b('text'), domProps: { "textContent": _vm._s(_vm.leftText) } }) : _vm._e()])], 2), _c('div', { staticClass: "van-ellipsis", class: _vm.b('title') }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _c('div', { class: _vm.b('right'), on: { "click": function click($event) {
          _vm.$emit('click-right');
        } } }, [_vm._t("right", [_vm.rightText ? _c('span', { class: _vm.b('text'), domProps: { "textContent": _vm._s(_vm.rightText) } }) : _vm._e()])], 2)]);
  },

  name: 'nav-bar',

  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    fixed: Boolean,
    zIndex: {
      type: Number,
      default: 1
    }
  },

  computed: {
    style: function style() {
      return {
        zIndex: this.zIndex
      };
    }
  }
}));
// CONCATENATED MODULE: ./es/notice-bar/index.js



/* harmony default export */ var notice_bar = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.showNoticeBar, expression: "showNoticeBar" }], class: _vm.b({ withicon: _vm.mode }), style: _vm.barStyle, on: { "click": function click($event) {
          _vm.$emit('click');
        } } }, [_vm.leftIcon ? _c('div', { class: _vm.b('left-icon') }, [_c('img', { attrs: { "src": _vm.leftIcon } })]) : _vm._e(), _c('div', { ref: "wrap", class: _vm.b('wrap') }, [_c('div', { ref: "content", class: [_vm.b('content'), _vm.animationClass], style: _vm.contentStyle, on: { "animationend": _vm.onAnimationEnd, "webkitAnimationEnd": _vm.onAnimationEnd } }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2)]), _vm.iconName ? _c('icon', { class: _vm.b('right-icon'), attrs: { "name": _vm.iconName }, on: { "click": _vm.onClickIcon } }) : _vm._e()], 1);
  },

  name: 'notice-bar',

  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    background: String,
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },

  data: function data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    };
  },

  computed: {
    iconName: function iconName() {
      return this.mode === 'closeable' ? 'close' : this.mode === 'link' ? 'arrow' : '';
    },
    barStyle: function barStyle() {
      return {
        color: this.color,
        background: this.background
      };
    },
    contentStyle: function contentStyle() {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      };
    }
  },

  watch: {
    text: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          var _$refs = _this.$refs,
              wrap = _$refs.wrap,
              content = _$refs.content;

          if (!wrap || !content) {
            return;
          }

          var wrapWidth = wrap.getBoundingClientRect().width;
          var offsetWidth = content.getBoundingClientRect().width;
          if (_this.scrollable && offsetWidth > wrapWidth) {
            _this.wrapWidth = wrapWidth;
            _this.offsetWidth = offsetWidth;
            _this.duration = offsetWidth / _this.speed;
            _this.animationClass = _this.b('play');
          }
        });
      },

      immediate: true
    }
  },

  methods: {
    onClickIcon: function onClickIcon() {
      this.showNoticeBar = this.mode !== 'closeable';
    },
    onAnimationEnd: function onAnimationEnd() {
      var _this2 = this;

      this.firstRound = false;
      this.$nextTick(function () {
        _this2.duration = (_this2.offsetWidth + _this2.wrapWidth) / _this2.speed;
        _this2.animationClass = _this2.b('play--infinite');
      });
    }
  }
}));
// CONCATENATED MODULE: ./es/number-keyboard/Key.js



/* harmony default export */ var Key = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('i', { staticClass: "van-hairline", class: [_vm.b(), _vm.className], domProps: { "textContent": _vm._s(_vm.text) }, on: { "touchstart": function touchstart($event) {
          $event.stopPropagation();$event.preventDefault();return _vm.onFocus($event);
        }, "touchmove": _vm.onBlur, "touchend": _vm.onBlur, "touchcancel": _vm.onBlur } });
  },

  name: 'key',

  props: {
    text: [String, Number],
    type: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },

  data: function data() {
    return {
      active: false
    };
  },

  computed: {
    className: function className() {
      var _this = this;

      var types = this.type.slice(0);
      this.active && types.push('active');

      return types.map(function (type) {
        return _this.b([type]);
      });
    }
  },

  methods: {
    onFocus: function onFocus() {
      this.active = true;
      this.$emit('press', this.text);
    },
    onBlur: function onBlur() {
      this.active = false;
    }
  }
}));
// CONCATENATED MODULE: ./es/number-keyboard/index.js




/* harmony default export */ var number_keyboard = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": _vm.transition ? 'van-slide-bottom' : '' } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.show, expression: "show" }], class: _vm.b([_vm.theme]), style: _vm.style, on: { "touchstart": function touchstart($event) {
          $event.stopPropagation();
        }, "animationend": _vm.onAnimationEnd, "webkitAnimationEnd": _vm.onAnimationEnd } }, [_vm.title || _vm.showTitleClose ? _c('div', { staticClass: "van-hairline--top", class: _vm.b('title') }, [_c('span', { domProps: { "textContent": _vm._s(_vm.title) } }), _vm.showTitleClose ? _c('span', { class: _vm.b('close'), domProps: { "textContent": _vm._s(_vm.closeButtonText) }, on: { "click": _vm.onClose } }) : _vm._e()]) : _vm._e(), _c('div', { class: _vm.b('body') }, _vm._l(_vm.keys, function (key) {
      return _c('key', { key: key.text, attrs: { "text": key.text, "type": key.type }, on: { "press": _vm.onPressKey } });
    })), _vm.theme === 'custom' ? _c('div', { class: _vm.b('sidebar') }, [_c('key', { attrs: { "text": 'delete', "type": ['delete', 'big'] }, on: { "press": _vm.onPressKey } }), _c('key', { attrs: { "text": _vm.closeButtonText, "type": ['green', 'big'] }, on: { "press": _vm.onPressKey } })], 1) : _vm._e()])]);
  },

  name: 'number-keyboard',

  components: { Key: Key },

  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    theme: {
      type: String,
      default: 'default'
    },
    extraKey: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 100
    },
    transition: {
      type: Boolean,
      default: true
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    }
  },

  mounted: function mounted() {
    this.handler(true);
  },
  destroyed: function destroyed() {
    this.handler(false);
  },
  activated: function activated() {
    this.handler(true);
  },
  deactivated: function deactivated() {
    this.handler(false);
  },

  watch: {
    show: function show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    }
  },

  computed: {
    keys: function keys() {
      var keys = [];
      for (var i = 1; i <= 9; i++) {
        keys.push({ text: i });
      }

      switch (this.theme) {
        case 'default':
          keys.push({ text: this.extraKey, type: ['gray'] }, { text: 0 }, { text: 'delete', type: ['gray', 'delete'] });
          break;
        case 'custom':
          keys.push({ text: 0, type: ['middle'] }, { text: this.extraKey });
          break;
      }

      return keys;
    },
    style: function style() {
      return {
        zIndex: this.zIndex
      };
    },
    showTitleClose: function showTitleClose() {
      return this.closeButtonText && this.theme === 'default';
    }
  },

  methods: {
    handler: function handler(action) {
      if (action !== this.handlerStatus && this.hideOnClickOutside) {
        this.handlerStatus = action;
        document.body[(action ? 'add' : 'remove') + 'EventListener']('touchstart', this.onBlur);
      }
    },
    onBlur: function onBlur() {
      this.$emit('blur');
    },
    onClose: function onClose() {
      this.$emit('close');
      this.onBlur();
    },
    onAnimationEnd: function onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    },
    onPressKey: function onPressKey(text) {
      if (text === '') {
        return;
      }

      if (text === 'delete') {
        this.$emit('delete');
      } else if (text === this.closeButtonText) {
        this.onClose();
      } else {
        this.$emit('input', text);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/pagination/index.js



/* harmony default export */ var pagination = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', { class: _vm.b({ simple: !_vm.isMultiMode }) }, [_c('li', { staticClass: "van-hairline", class: [_vm.b('item', { disabled: _vm.value === 1 }), _vm.b('prev')], on: { "click": function click($event) {
          _vm.selectPage(_vm.value - 1);
        } } }, [_vm._v("\n    " + _vm._s(_vm.prevText || _vm.$t('prev')) + "\n  ")]), _vm._l(_vm.pages, function (page) {
      return _vm.isMultiMode ? _c('li', { staticClass: "van-hairline", class: [_vm.b('item', { active: page.active }), _vm.b('page')], on: { "click": function click($event) {
            _vm.selectPage(page.number);
          } } }, [_vm._v("\n    " + _vm._s(page.text) + "\n  ")]) : _vm._e();
    }), !_vm.isMultiMode ? _c('li', { class: _vm.b('page-desc') }, [_vm._t("pageDesc", [_vm._v(_vm._s(_vm.pageDesc))])], 2) : _vm._e(), _c('li', { staticClass: "van-hairline", class: [_vm.b('item', { disabled: _vm.value === _vm.computedPageCount }), _vm.b('next')], on: { "click": function click($event) {
          _vm.selectPage(_vm.value + 1);
        } } }, [_vm._v("\n    " + _vm._s(_vm.nextText || _vm.$t('next')) + "\n  ")])], 2);
  },

  name: 'pagination',

  props: {
    value: Number,
    prevText: String,
    nextText: String,
    pageCount: Number,
    forceEllipses: Boolean,
    mode: {
      type: String,
      default: 'multi'
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    showPageSize: {
      type: Number,
      default: 5
    },
    totalItems: {
      type: Number,
      default: 0
    }
  },

  computed: {
    isMultiMode: function isMultiMode() {
      return this.mode === 'multi';
    },
    computedPageCount: function computedPageCount() {
      var count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },
    pageDesc: function pageDesc() {
      return this.value + '/' + this.computedPageCount;
    },
    pages: function pages() {
      var pages = [];
      var pageCount = this.computedPageCount;

      // Default page limits
      var startPage = 1;
      var endPage = pageCount;
      var isMaxSized = this.showPageSize !== undefined && this.showPageSize < pageCount;

      // recompute if showPageSize
      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(this.showPageSize / 2), 1);
        endPage = startPage + this.showPageSize - 1;

        // Adjust if limit is exceeded
        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - this.showPageSize + 1;
        }
      }

      // Add page number links
      for (var number = startPage; number <= endPage; number++) {
        var page = this.makePage(number, number, number === this.value);
        pages.push(page);
      }

      // Add links to move between page sets
      if (isMaxSized && this.showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          var previousPageSet = this.makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          var nextPageSet = this.makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    }
  },

  watch: {
    value: {
      handler: function handler(page) {
        this.selectPage(page || this.value);
      },

      immediate: true
    }
  },

  methods: {
    selectPage: function selectPage(page) {
      page = Math.max(1, page);
      page = Math.min(this.computedPageCount, page);
      if (this.value !== page) {
        this.$emit('input', page);
        this.$emit('change', page);
      }
    },
    makePage: function makePage(number, text, active) {
      return { number: number, text: text, active: active };
    }
  }
}));
// CONCATENATED MODULE: ./es/panel/index.js



/* harmony default export */ var panel = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('cell-group', { class: _vm.b() }, [_vm._t("header", [_c('cell', { class: _vm.b('header'), attrs: { "title": _vm.title, "label": _vm.desc, "value": _vm.status } })]), _c('div', { class: _vm.b('content') }, [_vm._t("default")], 2), _vm.$slots.footer ? _c('div', { staticClass: "van-hairline--top", class: _vm.b('footer') }, [_vm._t("footer")], 2) : _vm._e()], 2);
  },

  name: 'panel',
  props: {
    desc: String,
    title: String,
    status: String
  }
}));
// CONCATENATED MODULE: ./es/password-input/index.js



/* harmony default export */ var password_input = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('ul', { staticClass: "van-hairline--surround", class: _vm.b('security'), on: { "touchstart": function touchstart($event) {
          $event.stopPropagation();_vm.$emit('focus');
        } } }, _vm._l(_vm.points, function (visibility) {
      return _c('li', { staticClass: "van-hairline" }, [_c('i', { style: "visibility: " + visibility })]);
    })), _vm.errorInfo || _vm.info ? _c('div', { class: _vm.b(_vm.errorInfo ? 'error-info' : 'info'), domProps: { "textContent": _vm._s(_vm.errorInfo || _vm.info) } }) : _vm._e()]);
  },

  name: 'password-input',

  props: {
    info: String,
    errorInfo: String,
    value: {
      type: String,
      default: ''
    },
    length: {
      type: Number,
      default: 6
    }
  },

  computed: {
    points: function points() {
      var arr = [];
      for (var i = 0; i < this.length; i++) {
        arr[i] = this.value[i] ? 'visible' : 'hidden';
      }
      return arr;
    }
  }
}));
// CONCATENATED MODULE: ./es/progress/index.js



/* harmony default export */ var es_progress = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('span', { class: _vm.b('portion', { 'with-pivot': _vm.showPivot }), style: _vm.portionStyle }, [_vm.showPivot ? _c('span', { ref: "pivot", class: _vm.b('pivot'), style: _vm.pivotStyle }, [_vm._v(_vm._s(_vm.pivotText))]) : _vm._e()])]);
  },

  name: 'progress',

  props: {
    inactive: Boolean,
    pivotColor: String,
    percentage: {
      type: Number,
      required: true,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    showPivot: {
      type: Boolean,
      default: true
    },
    pivotText: {
      type: String,
      default: function _default() {
        return this.percentage + '%';
      }
    },
    color: {
      type: String,
      default: '#38f'
    },
    textColor: {
      type: String,
      default: '#fff'
    }
  },

  data: function data() {
    return {
      pivotWidth: 0,
      progressWidth: 0
    };
  },

  computed: {
    currentColor: function currentColor() {
      return this.inactive ? '#cacaca' : this.color;
    },
    pivotStyle: function pivotStyle() {
      return {
        color: this.textColor,
        background: this.pivotColor || this.currentColor
      };
    },
    portionStyle: function portionStyle() {
      return {
        width: (this.progressWidth - this.pivotWidth) * this.percentage / 100 + 'px',
        background: this.currentColor
      };
    }
  },

  mounted: function mounted() {
    this.getWidth();
  },

  watch: {
    showPivot: function showPivot() {
      this.getWidth();
    },
    pivotText: function pivotText() {
      this.getWidth();
    }
  },

  methods: {
    getWidth: function getWidth() {
      this.progressWidth = this.$el.offsetWidth;
      this.pivotWidth = this.$refs.pivot ? this.$refs.pivot.offsetWidth : 0;
    }
  }
}));
// CONCATENATED MODULE: ./es/pull-refresh/index.js





/* harmony default export */ var pull_refresh = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('div', { class: _vm.b('track'), style: _vm.style, on: { "touchstart": _vm.onTouchStart, "touchmove": _vm.onTouchMove, "touchend": _vm.onTouchEnd, "touchcancel": _vm.onTouchEnd } }, [_c('div', { class: _vm.b('head') }, [_vm.status === 'normal' ? _vm._t("normal") : _vm._e(), _vm.status === 'pulling' ? _vm._t("pulling", [_c('span', { class: _vm.b('text') }, [_vm._v(_vm._s(_vm.pullingText || _vm.$t('pulling')))])]) : _vm._e(), _vm.status === 'loosing' ? _vm._t("loosing", [_c('span', { class: _vm.b('text') }, [_vm._v(_vm._s(_vm.loosingText || _vm.$t('loosing')))])]) : _vm._e(), _vm.status === 'loading' ? _vm._t("loading", [_c('div', { class: _vm.b('loading') }, [_c('loading'), _c('span', [_vm._v(_vm._s(_vm.loadingText || _vm.$t('loadingTip')))])], 1)]) : _vm._e()], 2), _vm._t("default")], 2)]);
  },

  name: 'pull-refresh',

  mixins: [touch],

  props: {
    disabled: Boolean,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    value: {
      type: Boolean,
      required: true
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 50
    }
  },

  data: function data() {
    return {
      status: 'normal',
      height: 0,
      duration: 0
    };
  },

  computed: {
    style: function style() {
      return {
        transition: this.duration + 'ms',
        transform: 'translate3d(0,' + this.height + 'px, 0)'
      };
    },
    untouchable: function untouchable() {
      return this.status === 'loading' || this.disabled;
    }
  },

  mounted: function mounted() {
    this.scrollEl = utils_scroll.getScrollEventTarget(this.$el);
  },

  watch: {
    value: function value(val) {
      this.duration = this.animationDuration;
      this.getStatus(val ? this.headHeight : 0, val);
    }
  },

  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.untouchable) {
        return;
      }
      if (this.getCeiling()) {
        this.duration = 0;
        this.touchStart(event);
      }
    },
    onTouchMove: function onTouchMove(event) {
      if (this.untouchable) {
        return;
      }

      this.touchMove(event);

      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0;
        this.startY = event.touches[0].clientY;
        this.deltaY = 0;
      }

      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.getStatus(this.ease(this.deltaY));
          event.preventDefault();
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (this.untouchable) {
        return;
      }

      if (this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;
        if (this.status === 'loosing') {
          this.getStatus(this.headHeight, true);
          this.$emit('input', true);
          this.$emit('refresh');
        } else {
          this.getStatus(0);
        }
      }
    },
    getCeiling: function getCeiling() {
      this.ceiling = utils_scroll.getScrollTop(this.scrollEl) === 0;
      return this.ceiling;
    },
    ease: function ease(height) {
      var headHeight = this.headHeight;

      return height < headHeight ? height : height < headHeight * 2 ? Math.round(headHeight + (height - headHeight) / 2) : Math.round(headHeight * 1.5 + (height - headHeight * 2) / 4);
    },
    getStatus: function getStatus(height, isLoading) {
      this.height = height;

      var status = isLoading ? 'loading' : height === 0 ? 'normal' : height < this.headHeight ? 'pulling' : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/rate/index.js



/* harmony default export */ var es_rate = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, _vm._l(_vm.list, function (isFull, index) {
      return _c('svg', { class: _vm.b('item'), style: _vm.style, attrs: { "fill": _vm.disabled ? _vm.disabledColor : isFull ? _vm.color : _vm.voidColor, "viewBox": "0 0 32 32" }, on: { "click": function click($event) {
            _vm.onSelect(index);
          } } }, [_c('path', { attrs: { "d": isFull ? 'M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z' : 'M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z' } })]);
    }));
  },

  name: 'rate',

  props: {
    size: {
      type: Number,
      default: 20
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#ffd21e'
    },
    voidColor: {
      type: String,
      default: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      default: '#bdbdbd'
    },
    count: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    }
  },

  computed: {
    style: function style() {
      return {
        width: this.size + 'px'
      };
    },
    list: function list() {
      var _this = this;

      return Array.apply(null, { length: this.count }).map(function (value, index) {
        return index < _this.value;
      });
    }
  },

  methods: {
    onSelect: function onSelect(index) {
      if (!this.disabled) {
        this.$emit('input', index + 1);
        this.$emit('change', index + 1);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/row/index.js



/* harmony default export */ var row = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.tag, { tag: "component", class: _vm.b((_obj = {
        flex: _vm.flex
      }, _obj["align-" + _vm.align] = _vm.flex && _vm.align, _obj["justify-" + _vm.justify] = _vm.flex && _vm.justify, _obj)), style: _vm.style }, [_vm._t("default")], 2);
    var _obj;
  },

  name: 'row',

  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },

  computed: {
    flex: function flex() {
      return this.type === 'flex';
    },
    style: function style() {
      var margin = "-" + Number(this.gutter) / 2 + "px";
      return this.gutter ? { marginLeft: margin, marginRight: margin } : {};
    }
  }
}));
// CONCATENATED MODULE: ./es/search/index.js





/* harmony default export */ var search = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b({ 'show-action': _vm.showAction }), style: { background: _vm.background } }, [_c('icon', { attrs: { "name": "search" } }), _c('field', _vm._g(_vm._b({ attrs: { "clearable": "", "type": "search", "value": _vm.value, "border": false } }, 'field', _vm.$attrs, false), _vm.listeners)), _vm.showAction ? _c('div', { class: _vm.b('action') }, [_vm._t("action", [_c('div', { class: _vm.b('cancel'), on: { "click": _vm.onBack } }, [_vm._v(_vm._s(_vm.$t('cancel')))])])], 2) : _vm._e()], 1);
  },

  name: 'search',

  inheritAttrs: false,

  components: {
    Field: field
  },

  props: {
    value: String,
    showAction: Boolean,
    background: {
      type: String,
      default: '#f2f2f2'
    }
  },

  computed: {
    listeners: function listeners() {
      return extends_default()({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress
      });
    }
  },

  methods: {
    onInput: function onInput(value) {
      this.$emit('input', value);
    },
    onKeypress: function onKeypress(event) {
      // press enter
      if (event.keyCode === 13) {
        event.preventDefault();
        this.$emit('search', this.value);
      }
      this.$emit('keypress', event);
    },
    onBack: function onBack() {
      this.$emit('input', '');
      this.$emit('cancel');
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuHeader.js



/* harmony default export */ var SkuHeader = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-hairline--bottom", class: _vm.b() }, [_c('div', { class: _vm.b('img-wrap') }, [_c('img', { attrs: { "src": _vm.goodsImg } })]), _c('div', { class: _vm.b('goods-info') }, [_c('div', { staticClass: "van-sku__goods-name van-ellipsis" }, [_vm._v(_vm._s(_vm.goods.title))]), _vm._t("default"), _c('icon', { staticClass: "van-sku__close-icon", attrs: { "name": "close" }, on: { "click": function click($event) {
          _vm.skuEventBus.$emit('sku:close');
        } } })], 2)]);
  },

  name: 'sku-header',

  props: {
    sku: Object,
    goods: Object,
    skuEventBus: Object,
    selectedSku: Object
  },

  computed: {
    goodsImg: function goodsImg() {
      var s1Id = this.selectedSku.s1;
      var skuImg = this.getSkuImg(s1Id);
      // 优先使用选中sku的图片
      return skuImg || this.goods.picture;
    }
  },

  methods: {
    getSkuImg: function getSkuImg(id) {
      if (!id) return;

      // 目前skuImg都挂载在skuTree中s1那类sku上
      var treeItem = this.sku.tree.filter(function (treeItem) {
        return treeItem.k_s === 's1';
      })[0] || {};

      if (!treeItem.v) {
        return;
      }

      var matchedSku = treeItem.v.filter(function (skuValue) {
        return skuValue.id === id;
      })[0];
      if (matchedSku && matchedSku.imgUrl) {
        return matchedSku.imgUrl;
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuRow.js



/* harmony default export */ var SkuRow = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('div', { class: _vm.b('title') }, [_vm._v(_vm._s(_vm.skuRow.k) + "：")]), _vm._t("default")], 2);
  },

  name: 'sku-row',

  props: {
    skuRow: Object
  }
}));
// CONCATENATED MODULE: ./es/sku/constants.js
var LIMIT_TYPE = {
  QUOTA_LIMIT: 0,
  STOCK_LIMIT: 1
};

var UNSELECTED_SKU_VALUE_ID = '';

/* harmony default export */ var constants = ({
  LIMIT_TYPE: LIMIT_TYPE,
  UNSELECTED_SKU_VALUE_ID: UNSELECTED_SKU_VALUE_ID
});
// CONCATENATED MODULE: ./es/sku/utils/skuHelper.js




/*
  normalize sku tree

  [
    {
      count: 2,
      k: "品种", // 规格名称 skuKeyName
      k_id: "1200", // skuKeyId
      k_s: "s1" // skuKeyStr
      v: [ // skuValues
        { // skuValue
          id: "1201", // skuValueId
          name: "萌" // 具体的规格值 skuValueName
        }, {
          id: "973",
          name: "帅"
        }
      ]
    },
    ...
  ]
                |
                v
  {
    s1: [{
      id: "1201",
      name: "萌"
    }, {
      id: "973",
      name: "帅"
    }],
    ...
  }
 */
var normalizeSkuTree = function normalizeSkuTree(skuTree) {
  var normalizedTree = {};
  skuTree.forEach(function (treeItem) {
    normalizedTree[treeItem.k_s] = treeItem.v;
  });
  return normalizedTree;
};

// 判断是否所有的sku都已经选中
var skuHelper_isAllSelected = function isAllSelected(skuTree, selectedSku) {
  // 筛选selectedSku对象中key值不为空的值
  var selected = keys_default()(selectedSku).filter(function (skuKeyStr) {
    return selectedSku[skuKeyStr] !== UNSELECTED_SKU_VALUE_ID;
  });
  return skuTree.length === selected.length;
};

// 根据已选择的sku获取skuComb
var skuHelper_getSkuComb = function getSkuComb(skuList, selectedSku) {
  var skuComb = skuList.filter(function (skuComb) {
    return keys_default()(selectedSku).every(function (skuKeyStr) {
      return String(skuComb[skuKeyStr]) === String(selectedSku[skuKeyStr]); // eslint-disable-line
    });
  });
  return skuComb[0];
};

// 获取已选择的sku名称
var skuHelper_getSelectedSkuValues = function getSelectedSkuValues(skuTree, selectedSku) {
  var normalizedTree = normalizeSkuTree(skuTree);
  return keys_default()(selectedSku).reduce(function (selectedValues, skuKeyStr) {
    var skuValues = normalizedTree[skuKeyStr];
    var skuValueId = selectedSku[skuKeyStr];

    if (skuValueId !== UNSELECTED_SKU_VALUE_ID) {
      var skuValue = skuValues.filter(function (skuValue) {
        return skuValue.id === skuValueId;
      })[0];
      skuValue && selectedValues.push(skuValue);
    }
    return selectedValues;
  }, []);
};

// 判断sku是否可选
var skuHelper_isSkuChoosable = function isSkuChoosable(skuList, selectedSku, skuToChoose) {
  var _Object$assign2;

  var key = skuToChoose.key,
      valueId = skuToChoose.valueId;
  // 先假设sku已选中，拼入已选中sku对象中

  var matchedSku = assign_default()({}, selectedSku, (_Object$assign2 = {}, _Object$assign2[key] = valueId, _Object$assign2));
  // 再判断剩余sku是否全部不可选，若不可选则当前sku不可选中
  var skusToCheck = keys_default()(matchedSku).filter(function (skuKey) {
    return matchedSku[skuKey] !== UNSELECTED_SKU_VALUE_ID;
  });
  var filteredSku = skuList.filter(function (sku) {
    return skusToCheck.every(function (skuKey) {
      return String(matchedSku[skuKey]) === String(sku[skuKey]);
    });
  });

  var stock = filteredSku.reduce(function (total, sku) {
    return total += sku.stock_num;
  }, 0);
  return stock > 0;
};

/* harmony default export */ var skuHelper = ({
  normalizeSkuTree: normalizeSkuTree,
  getSkuComb: skuHelper_getSkuComb,
  getSelectedSkuValues: skuHelper_getSelectedSkuValues,
  isAllSelected: skuHelper_isAllSelected,
  isSkuChoosable: skuHelper_isSkuChoosable
});
// CONCATENATED MODULE: ./es/sku/components/SkuRowItem.js





/* harmony default export */ var SkuRowItem = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { staticClass: "van-sku-row__item", class: {
        'van-sku-row__item--active': _vm.isChoosed,
        'van-sku-row__item--disabled': !_vm.isChoosable
      }, on: { "click": _vm.onSelect } }, [_vm._v("\n  " + _vm._s(_vm.skuValue.name) + "\n")]);
  },

  name: 'sku-row-item',

  props: {
    skuEventBus: Object,
    skuValue: Object,
    skuList: Array,
    selectedSku: Object,
    skuKeyStr: String
  },

  computed: {
    isChoosed: function isChoosed() {
      return this.skuValue.id === this.selectedSku[this.skuKeyStr];
    },
    isChoosable: function isChoosable() {
      return skuHelper_isSkuChoosable(this.skuList, this.selectedSku, {
        key: this.skuKeyStr,
        valueId: this.skuValue.id
      });
    }
  },

  methods: {
    onSelect: function onSelect() {
      if (this.isChoosable) {
        this.skuEventBus.$emit('sku:select', extends_default()({}, this.skuValue, {
          skuKeyStr: this.skuKeyStr
        }));
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/stepper/index.js



/* harmony default export */ var stepper = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('button', { class: _vm.b('minus', { disabled: _vm.minusDisabled }), on: { "click": function click($event) {
          _vm.onChange('minus');
        } } }), _c('input', { class: _vm.b('input'), attrs: { "type": "number", "disabled": _vm.disabled || _vm.disableInput }, domProps: { "value": _vm.currentValue }, on: { "input": _vm.onInput, "keypress": _vm.onKeypress, "blur": _vm.onBlur } }), _c('button', { class: _vm.b('plus', { disabled: _vm.plusDisabled }), on: { "click": function click($event) {
          _vm.onChange('plus');
        } } })]);
  },

  name: 'stepper',

  props: {
    value: {},
    integer: Boolean,
    disabled: Boolean,
    disableInput: Boolean,
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: Infinity
    },
    step: {
      type: [String, Number],
      default: 1
    },
    defaultValue: {
      type: [String, Number],
      default: 1
    }
  },

  data: function data() {
    var value = this.value ? +this.value : +this.defaultValue;
    var correctedValue = this.correctValue(value);
    if (value !== correctedValue) {
      value = correctedValue;
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },

  computed: {
    minusDisabled: function minusDisabled() {
      var min = +this.min;
      var step = +this.step;
      var currentValue = +this.currentValue;
      return min === currentValue || currentValue - step < min || this.disabled;
    },
    plusDisabled: function plusDisabled() {
      var max = +this.max;
      var step = +this.step;
      var currentValue = +this.currentValue;
      return max === currentValue || currentValue + step > max || this.disabled;
    }
  },

  watch: {
    value: function value(val) {
      if (val !== '') {
        val = this.correctValue(+val);
        if (val !== this.currentValue) {
          this.currentValue = val;
        }
      }
    }
  },

  methods: {
    correctValue: function correctValue(value) {
      return isNaN(value) ? this.min : Math.max(this.min, Math.min(this.max, value));
    },
    onInput: function onInput(event) {
      var value = event.target.value;

      this.currentValue = value ? this.correctValue(+value) : value;
      event.target.value = this.currentValue;
      this.emitInput();
    },
    onChange: function onChange(type) {
      if (this.minusDisabled && type === 'minus' || this.plusDisabled && type === 'plus') {
        this.$emit('overlimit', type);
        return;
      }

      var step = +this.step;
      var currentValue = +this.currentValue;
      this.currentValue = type === 'minus' ? currentValue - step : currentValue + step;
      this.emitInput();
      this.$emit(type);
    },
    onKeypress: function onKeypress(event) {
      if (this.integer && event.keyCode === 46) {
        event.preventDefault();
      }
    },
    onBlur: function onBlur(event) {
      if (!this.value) {
        this.currentValue = +this.min;
        this.emitInput();
      }
      this.$emit('blur', event);
    },
    emitInput: function emitInput() {
      this.$emit('input', this.currentValue);
      this.$emit('change', this.currentValue);
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuStepper.js





var QUOTA_LIMIT = LIMIT_TYPE.QUOTA_LIMIT,
    STOCK_LIMIT = LIMIT_TYPE.STOCK_LIMIT;

/* harmony default export */ var SkuStepper = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-sku-stepper-stock" }, [_c('div', { staticClass: "van-sku-stepper-container" }, [_c('div', { staticClass: "van-sku__stepper-title" }, [_vm._v(_vm._s(_vm.stepperTitle || _vm.$t('title')) + "：")]), _c('stepper', { staticClass: "van-sku__stepper", attrs: { "min": 1, "max": _vm.stepperLimit, "disable-input": _vm.disableStepperInput }, on: { "overlimit": _vm.onOverLimit, "change": _vm.onChange }, model: { value: _vm.currentNum, callback: function callback($$v) {
          _vm.currentNum = $$v;
        }, expression: "currentNum" } })], 1), !_vm.hideStock ? _c('div', { staticClass: "van-sku__stock" }, [_vm._v(_vm._s(_vm.$t('remain', _vm.stock)))]) : _vm._e(), _vm.quotaText ? _c('div', { staticClass: "van-sku__quota" }, [_vm._v(_vm._s(_vm.quotaText))]) : _vm._e()]);
  },

  name: 'sku-stepper',

  components: {
    Stepper: stepper
  },

  props: {
    skuEventBus: Object,
    skuStockNum: Number,
    selectedSku: Object,
    selectedSkuComb: Object,
    selectedNum: Number,
    stepperTitle: String,
    quota: Number,
    quotaUsed: Number,
    hideStock: Boolean,
    disableStepperInput: Boolean,
    customStepperConfig: Object
  },

  data: function data() {
    return {
      currentNum: this.selectedNum,
      // 购买限制类型: 限购/库存
      limitType: STOCK_LIMIT
    };
  },

  watch: {
    currentNum: function currentNum(num) {
      this.skuEventBus.$emit('sku:numChange', num);
    },
    stepperLimit: function stepperLimit(limit) {
      if (limit < this.currentNum) {
        this.currentNum = limit;
      }
    }
  },

  computed: {
    stock: function stock() {
      if (this.selectedSkuComb) {
        return this.selectedSkuComb.stock_num;
      }
      return this.skuStockNum;
    },
    quotaText: function quotaText() {
      var quotaText = this.customStepperConfig.quotaText;

      var text = '';

      if (quotaText) {
        text = quotaText;
      } else if (this.quota > 0) {
        text = this.$t('quota', this.quota);
      }

      return text;
    },
    stepperLimit: function stepperLimit() {
      var quotaLimit = this.quota - this.quotaUsed;
      var limit = void 0;

      // 无限购时直接取库存，有限购时取限购数和库存数中小的那个
      if (this.quota > 0 && quotaLimit <= this.stock) {
        // 修正负的limit
        limit = quotaLimit < 0 ? 0 : quotaLimit;
        this.limitType = QUOTA_LIMIT;
      } else {
        limit = this.stock;
        this.limitType = STOCK_LIMIT;
      }

      return limit;
    }
  },

  methods: {
    setCurrentNum: function setCurrentNum(num) {
      this.currentNum = num;
    },
    onOverLimit: function onOverLimit(action) {
      this.skuEventBus.$emit('sku:overLimit', {
        action: action,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed
      });
    },
    onChange: function onChange(currentValue) {
      var handleStepperChange = this.customStepperConfig.handleStepperChange;

      handleStepperChange && handleStepperChange(currentValue);
      this.$emit('change', currentValue);
    }
  }
}));
// CONCATENATED MODULE: ./es/utils/validate/email.js
/* eslint-disable */
function email(value) {
  var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  return reg.test(value);
}
// CONCATENATED MODULE: ./es/utils/validate/number.js
function number(value) {
  return (/^\d+$/.test(value)
  );
}
// CONCATENATED MODULE: ./es/uploader/index.js




/* harmony default export */ var uploader = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_vm._t("default"), _c('input', _vm._b({ ref: "input", class: _vm.b('input'), attrs: { "type": "file", "accept": _vm.accept, "disabled": _vm.disabled }, on: { "change": _vm.onChange } }, 'input', _vm.$attrs, false))], 2);
  },

  name: 'uploader',

  inheritAttrs: false,

  props: {
    disabled: Boolean,
    beforeRead: Function,
    afterRead: Function,
    accept: {
      type: String,
      default: 'image/*'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    }
  },

  methods: {
    onChange: function onChange(event) {
      var _this = this;

      var files = event.target.files;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files, 0);
      if (!files || this.beforeRead && !this.beforeRead(files)) {
        return;
      }

      if (Array.isArray(files)) {
        promise_default.a.all(files.map(this.readFile)).then(function (contents) {
          var oversize = false;
          var payload = files.map(function (file, index) {
            if (file.size > _this.maxSize) {
              oversize = true;
            }

            return {
              file: files[index],
              content: contents[index]
            };
          });

          _this.onAfterRead(payload, oversize);
        });
      } else {
        this.readFile(files).then(function (content) {
          _this.onAfterRead({ file: files, content: content }, files.size > _this.maxSize);
        });
      }
    },
    readFile: function readFile(file) {
      var _this2 = this;

      return new promise_default.a(function (resolve) {
        var reader = new FileReader();

        reader.onload = function (event) {
          resolve(event.target.result);
        };

        if (_this2.resultType === 'dataUrl') {
          reader.readAsDataURL(file);
        } else if (_this2.resultType === 'text') {
          reader.readAsText(file);
        }
      });
    },
    onAfterRead: function onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files);
      } else {
        this.afterRead && this.afterRead(files);
        this.$refs.input && (this.$refs.input.value = '');
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuImgUploader.js




/* harmony default export */ var SkuImgUploader = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('van-uploader', { attrs: { "disabled": !!_vm.paddingImg, "after-read": _vm.afterReadFile, "max-size": _vm.maxSize * 1024 * 1024 }, on: { "oversize": function oversize($event) {
          _vm.$toast(_vm.$t('maxSize', _vm.maxSize));
        } } }, [_c('div', { class: _vm.b('header') }, [_vm.paddingImg ? _c('div', [_vm._v(_vm._s(_vm.$t('uploading')))]) : [_c('icon', { attrs: { "name": "photograph" } }), _c('span', { staticClass: "label" }, [_vm._v(_vm._s(_vm.$t(_vm.value ? 'rephoto' : 'photo')))]), _vm._v(" " + _vm._s(_vm.$t('or')) + "\n        "), _c('icon', { attrs: { "name": "photo" } }), _c('span', { staticClass: "label" }, [_vm._v(_vm._s(_vm.$t(_vm.value ? 'reselect' : 'select')))])]], 2)]), _vm.paddingImg || _vm.imgList.length > 0 ? _c('div', { staticClass: "van-clearfix" }, [_vm._l(_vm.imgList, function (img) {
      return _c('div', { class: _vm.b('img') }, [_c('img', { attrs: { "src": img } }), _c('icon', { class: _vm.b('delete'), attrs: { "name": "clear" }, on: { "click": function click($event) {
            _vm.$emit('input', '');
          } } })], 1);
    }), _vm.paddingImg ? _c('div', { class: _vm.b('img') }, [_c('img', { attrs: { "src": _vm.paddingImg } }), _c('loading', { class: _vm.b('uploading'), attrs: { "type": "spinner", "color": "black" } })], 1) : _vm._e()], 2) : _vm._e()], 1);
  },

  name: 'sku-img-uploader',

  components: {
    VanUploader: uploader
  },

  props: {
    value: String,
    uploadImg: {
      type: Function,
      required: true
    },
    maxSize: {
      type: Number,
      default: 6
    }
  },

  data: function data() {
    return {
      // 正在上传的图片base 64
      paddingImg: ''
    };
  },

  computed: {
    imgList: function imgList() {
      return this.value && !this.paddingImg ? [this.value] : [];
    }
  },

  methods: {
    afterReadFile: function afterReadFile(file) {
      var _this = this;

      // 上传文件
      this.paddingImg = file.content;
      this.uploadImg(file.file, file.content).then(function (img) {
        _this.$emit('input', img);
        _this.$nextTick(function () {
          _this.paddingImg = '';
        });
      }).catch(function () {
        _this.paddingImg = '';
      });
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuMessages.js







/* harmony default export */ var SkuMessages = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('cell-group', { class: _vm.b() }, [_vm._l(_vm.messages, function (message, index) {
      return [message.type === 'image' ? _c('cell', { key: _vm.goodsId + "-" + index, class: _vm.b('image-cell'), attrs: { "label": _vm.$t('onePic'), "required": message.required == '1', "title": message.name } }, [_c('sku-img-uploader', { attrs: { "upload-img": _vm.messageConfig.uploadImg, "max-size": _vm.messageConfig.uploadMaxSize }, model: { value: _vm.messageValues[index].value, callback: function callback($$v) {
            _vm.$set(_vm.messageValues[index], "value", $$v);
          }, expression: "messageValues[index].value" } })], 1) : _c('field', { key: _vm.goodsId + "-" + index, attrs: { "maxlength": "200", "required": message.required == '1', "label": message.name, "placeholder": _vm.getPlaceholder(message), "type": _vm.getType(message) }, model: { value: _vm.messageValues[index].value, callback: function callback($$v) {
            _vm.$set(_vm.messageValues[index], "value", $$v);
          }, expression: "messageValues[index].value" } })];
    })], 2);
  },

  name: 'sku-messages',

  components: {
    SkuImgUploader: SkuImgUploader,
    Field: field
  },

  props: {
    messages: Array,
    messageConfig: Object,
    goodsId: [Number, String]
  },

  data: function data() {
    return {
      messageValues: this.resetMessageValues(this.messages)
    };
  },

  watch: {
    messages: function messages(val) {
      this.messageValues = this.resetMessageValues(val);
    }
  },

  computed: {
    messagePlaceholderMap: function messagePlaceholderMap() {
      return this.messageConfig.placeholderMap || {};
    }
  },

  methods: {
    resetMessageValues: function resetMessageValues(messages) {
      return (messages || []).map(function () {
        return { value: '' };
      });
    },
    getType: function getType(message) {
      if (+message.multiple === 1) {
        return 'textarea';
      }
      if (message.type === 'id_no') {
        return 'text';
      }
      return message.datetime > 0 ? 'datetime-local' : message.type;
    },
    getMessages: function getMessages() {
      var _this = this;

      var messages = {};

      this.messageValues.forEach(function (item, index) {
        var value = item.value;
        if (_this.messages[index].datetime > 0) {
          value = value.replace(/T/g, ' ');
        }
        messages['message_' + index] = value;
      });

      return messages;
    },
    getCartMessages: function getCartMessages() {
      var _this2 = this;

      var messages = {};

      this.messageValues.forEach(function (item, index) {
        var value = item.value;
        var message = _this2.messages[index];
        if (message.datetime > 0) {
          value = value.replace(/T/g, ' ');
        }
        messages[message.name] = value;
      });

      return messages;
    },
    getPlaceholder: function getPlaceholder(message) {
      var type = +message.multiple === 1 ? 'textarea' : message.type;
      return this.messagePlaceholderMap[type] || this.$t('placeholder.' + type);
    },
    validateMessages: function validateMessages() {
      var values = this.messageValues;

      for (var i = 0; i < values.length; i++) {
        var value = values[i].value;
        var message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (message.required == '1') {
            // eslint-disable-line
            var textType = message.type === 'image' ? 'upload' : 'fill';
            return this.$t(textType) + message.name;
          }
        } else {
          if (message.type === 'tel' && !number(value)) {
            return this.$t('number');
          }
          if (message.type === 'email' && !email(value)) {
            return this.$t('email');
          }
          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return this.$t('id_no');
          }
        }
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuActions.js




/* harmony default export */ var SkuActions = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_vm.showAddCartBtn ? _c('van-button', { attrs: { "bottom-action": "", "text": _vm.$t('cart') }, on: { "click": function click($event) {
          _vm.skuEventBus.$emit('sku:addCart');
        } } }) : _vm._e(), _c('van-button', { attrs: { "type": "primary", "bottom-action": "", "text": _vm.buyText || _vm.$t('buy') }, on: { "click": function click($event) {
          _vm.skuEventBus.$emit('sku:buy');
        } } })], 1);
  },

  name: 'sku-actions',

  components: {
    VanButton: es_button
  },

  props: {
    buyText: String,
    skuEventBus: Object,
    showAddCartBtn: Boolean
  }
}));
// CONCATENATED MODULE: ./es/sku/Sku.js




/* eslint-disable camelcase */













var Sku_QUOTA_LIMIT = LIMIT_TYPE.QUOTA_LIMIT;

/* harmony default export */ var Sku = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return !_vm.isSkuEmpty ? _c('popup', { staticClass: "van-sku-container", attrs: { "position": "bottom", "close-on-click-overlay": _vm.closeOnClickOverlay, "get-container": _vm.getContainer }, model: { value: _vm.show, callback: function callback($$v) {
          _vm.show = $$v;
        }, expression: "show" } }, [_vm._t("sku-header", [_c('sku-header', { attrs: { "sku-event-bus": _vm.skuEventBus, "selected-sku": _vm.selectedSku, "goods": _vm.goods, "sku": _vm.sku } }, [_vm._t("sku-header-price", [_c('div', { staticClass: "van-sku__goods-price" }, [_c('span', { staticClass: "van-sku__price-symbol" }, [_vm._v("￥")]), _c('span', { staticClass: "van-sku__price-num" }, [_vm._v(_vm._s(_vm.price))])])], { price: _vm.price, selectedSkuComb: _vm.selectedSkuComb })], 2)], { skuEventBus: _vm.skuEventBus, selectedSku: _vm.selectedSku, selectedSkuComb: _vm.selectedSkuComb }), _c('div', { staticClass: "van-sku-body", style: _vm.bodyStyle }, [_vm._t("sku-body-top", null, { selectedSku: _vm.selectedSku, skuEventBus: _vm.skuEventBus }), _vm._t("sku-group", [_vm.hasSku ? _c('div', { staticClass: "van-sku-group-container van-hairline--bottom" }, _vm._l(_vm.skuTree, function (skuTreeItem, index) {
      return _c('sku-row', { key: index, attrs: { "sku-row": skuTreeItem } }, _vm._l(skuTreeItem.v, function (skuValue, index) {
        return _c('sku-row-item', { key: index, attrs: { "sku-key-str": skuTreeItem.k_s, "sku-value": skuValue, "sku-event-bus": _vm.skuEventBus, "selected-sku": _vm.selectedSku, "sku-list": _vm.sku.list } });
      }));
    })) : _vm._e()], { selectedSku: _vm.selectedSku, skuEventBus: _vm.skuEventBus }), _vm._t("extra-sku-group", null, { skuEventBus: _vm.skuEventBus }), _vm._t("sku-stepper", [_c('sku-stepper', { ref: "skuStepper", attrs: { "sku-event-bus": _vm.skuEventBus, "selected-sku": _vm.selectedSku, "selected-sku-comb": _vm.selectedSkuComb, "selected-num": _vm.selectedNum, "stepper-title": _vm.stepperTitle, "sku-stock-num": _vm.sku.stock_num, "quota": _vm.quota, "quota-used": _vm.quotaUsed, "disable-stepper-input": _vm.disableStepperInput, "hide-stock": _vm.hideStock, "custom-stepper-config": _vm.customStepperConfig }, on: { "change": function change($event) {
          _vm.$emit('stepper-change', $event);
        } } })], { skuEventBus: _vm.skuEventBus, selectedSku: _vm.selectedSku, selectedSkuComb: _vm.selectedSkuComb, selectedNum: _vm.selectedNum }), _vm._t("sku-messages", [_c('sku-messages', { ref: "skuMessages", attrs: { "goods-id": _vm.goodsId, "message-config": _vm.messageConfig, "messages": _vm.sku.messages } })])], 2), _vm._t("sku-actions", [_c('sku-actions', { attrs: { "sku-event-bus": _vm.skuEventBus, "buy-text": _vm.buyText, "show-add-cart-btn": _vm.showAddCartBtn } })], { skuEventBus: _vm.skuEventBus })], 2) : _vm._e();
  },

  name: 'sku',

  components: {
    Popup: es_popup,
    SkuHeader: SkuHeader,
    SkuRow: SkuRow,
    SkuRowItem: SkuRowItem,
    SkuStepper: SkuStepper,
    SkuMessages: SkuMessages,
    SkuActions: SkuActions
  },

  props: {
    sku: Object,
    goods: Object,
    value: Boolean,
    buyText: String,
    goodsId: [Number, String],
    stepperTitle: String,
    hideStock: Boolean,
    getContainer: Function,
    resetStepperOnHide: Boolean,
    resetSelectedSkuOnHide: Boolean,
    disableStepperInput: Boolean,
    closeOnClickOverlay: Boolean,
    initialSku: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
    },
    showAddCartBtn: {
      type: Boolean,
      default: true
    },
    bodyOffsetTop: {
      type: Number,
      default: 200
    },
    messageConfig: {
      type: Object,
      default: function _default() {
        return {
          placeholderMap: {},
          uploadImg: function uploadImg() {
            return promise_default.a.resolve();
          },
          uploadMaxSize: 5
        };
      }
    },
    customStepperConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },

  data: function data() {
    return {
      selectedSku: {},
      selectedNum: 1,
      show: this.value
    };
  },

  watch: {
    show: function show(val) {
      this.$emit('input', val);
      if (!val) {
        var selectedSkuValues = skuHelper_getSelectedSkuValues(this.sku.tree, this.selectedSku);

        this.$emit('sku-close', {
          selectedSkuValues: selectedSkuValues,
          selectedNum: this.selectedNum,
          selectedSkuComb: this.selectedSkuComb
        });

        if (this.resetStepperOnHide) {
          this.$refs.skuStepper && this.$refs.skuStepper.setCurrentNum(1);
        }

        if (this.resetSelectedSkuOnHide) {
          this.resetSelectedSku(this.skuTree);
        }
      }
    },
    value: function value(val) {
      this.show = val;
    },
    skuTree: function skuTree(val) {
      this.resetSelectedSku(val);
    }
  },

  computed: {
    bodyStyle: function bodyStyle() {
      if (this.$isServer) {
        return;
      }

      // header高度82px, sku actions高度50px，如果改动了样式自己传下bodyOffsetTop调整下
      var maxHeight = window.innerHeight - this.bodyOffsetTop;

      return {
        maxHeight: maxHeight + 'px'
      };
    },
    isSkuCombSelected: function isSkuCombSelected() {
      return skuHelper_isAllSelected(this.sku.tree, this.selectedSku);
    },
    isSkuEmpty: function isSkuEmpty() {
      return keys_default()(this.sku).length === 0;
    },
    hasSku: function hasSku() {
      return !this.sku.none_sku;
    },
    selectedSkuComb: function selectedSkuComb() {
      if (!this.hasSku) {
        return {
          id: this.sku.collection_id,
          price: Math.round(this.sku.price * 100),
          stock_num: this.sku.stock_num
        };
      } else if (this.isSkuCombSelected) {
        return skuHelper_getSkuComb(this.sku.list, this.selectedSku);
      }
      return null;
    },
    price: function price() {
      if (this.selectedSkuComb) {
        return (this.selectedSkuComb.price / 100).toFixed(2);
      }
      // sku.price是一个格式化好的价格区间
      return this.sku.price;
    },
    skuTree: function skuTree() {
      return this.sku.tree || [];
    }
  },

  created: function created() {
    var skuEventBus = new external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a();
    this.skuEventBus = skuEventBus;

    skuEventBus.$on('sku:close', this.onClose);
    skuEventBus.$on('sku:select', this.onSelect);
    skuEventBus.$on('sku:numChange', this.onNumChange);
    skuEventBus.$on('sku:overLimit', this.onOverLimit);
    skuEventBus.$on('sku:addCart', this.onAddCart);
    skuEventBus.$on('sku:buy', this.onBuy);

    this.resetSelectedSku(this.skuTree);
    // 组件初始化后的钩子，抛出skuEventBus
    this.$emit('after-sku-create', skuEventBus);
  },

  methods: {
    resetSelectedSku: function resetSelectedSku(skuTree) {
      var _this = this;

      this.selectedSku = {};
      // 重置selectedSku
      skuTree.forEach(function (item) {
        _this.selectedSku[item.k_s] = _this.initialSku[item.k_s] || UNSELECTED_SKU_VALUE_ID;
      });
      // 只有一个sku规格值时默认选中
      skuTree.forEach(function (item) {
        var key = item.k_s;
        var valueId = item.v[0].id;
        if (item.v.length === 1 && skuHelper_isSkuChoosable(_this.sku.list, _this.selectedSku, { key: key, valueId: valueId })) {
          _this.selectedSku[key] = valueId;
        }
      });
    },
    getSkuMessages: function getSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getMessages() : {};
    },
    getSkuCartMessages: function getSkuCartMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getCartMessages() : {};
    },
    validateSkuMessages: function validateSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.validateMessages() : '';
    },
    validateSku: function validateSku() {
      if (this.selectedNum === 0) {
        return this.$t('unavailable');
      }

      if (this.isSkuCombSelected) {
        return this.validateSkuMessages();
      }

      return this.$t('spec');
    },
    onClose: function onClose() {
      this.show = false;
    },
    onSelect: function onSelect(skuValue) {
      var _extends2, _extends3;

      // 点击已选中的sku时则取消选中
      this.selectedSku = this.selectedSku[skuValue.skuKeyStr] === skuValue.id ? extends_default()({}, this.selectedSku, (_extends2 = {}, _extends2[skuValue.skuKeyStr] = UNSELECTED_SKU_VALUE_ID, _extends2)) : extends_default()({}, this.selectedSku, (_extends3 = {}, _extends3[skuValue.skuKeyStr] = skuValue.id, _extends3));

      this.$emit('sku-selected', {
        skuValue: skuValue,
        selectedSku: this.selectedSku,
        selectedSkuComb: this.selectedSkuComb
      });
    },
    onNumChange: function onNumChange(num) {
      this.selectedNum = num;
    },
    onOverLimit: function onOverLimit(data) {
      var action = data.action,
          limitType = data.limitType,
          quota = data.quota,
          quotaUsed = data.quotaUsed;
      var handleOverLimit = this.customStepperConfig.handleOverLimit;

      if (handleOverLimit) {
        handleOverLimit(data);
        return;
      }

      if (action === 'minus') {
        es_toast(this.$t('least'));
      } else if (action === 'plus') {
        if (limitType === Sku_QUOTA_LIMIT) {
          var msg = this.$t('quota', quota);
          if (quotaUsed > 0) msg += '\uFF0C' + this.$t('purchase', quotaUsed);
          es_toast(msg);
        } else {
          es_toast(this.$t('inventory'));
        }
      }
    },
    onAddCart: function onAddCart() {
      this.onBuyOrAddCart('add-cart');
    },
    onBuy: function onBuy() {
      this.onBuyOrAddCart('buy-clicked');
    },
    onBuyOrAddCart: function onBuyOrAddCart(type) {
      var error = this.validateSku();
      if (error) {
        es_toast(error);
      } else {
        this.$emit(type, this.getSkuData());
      }
    },
    getSkuData: function getSkuData() {
      return {
        goodsId: this.goodsId,
        selectedNum: this.selectedNum,
        selectedSkuComb: this.selectedSkuComb,
        messages: this.getSkuMessages(),
        cartMessages: this.getSkuCartMessages()
      };
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/index.js










Sku.SkuActions = SkuActions;
Sku.SkuHeader = SkuHeader;
Sku.SkuMessages = SkuMessages;
Sku.SkuStepper = SkuStepper;
Sku.SkuRow = SkuRow;
Sku.SkuRowItem = SkuRowItem;
Sku.skuHelper = skuHelper;
Sku.skuConstants = constants;

/* harmony default export */ var sku = (Sku);
// CONCATENATED MODULE: ./es/slider/index.js




/* harmony default export */ var slider = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b({ disabled: _vm.disabled }), on: { "click": function click($event) {
          $event.stopPropagation();return _vm.onClick($event);
        } } }, [_c('div', { class: _vm.b('bar'), style: _vm.barStyle }, [_c('span', { class: _vm.b('button'), on: { "touchstart": _vm.onTouchStart, "touchmove": function touchmove($event) {
          $event.preventDefault();$event.stopPropagation();return _vm.onTouchMove($event);
        }, "touchend": _vm.onTouchEnd, "touchcancel": _vm.onTouchEnd } })])]);
  },

  name: 'slider',

  mixins: [touch],

  props: {
    disabled: Boolean,
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    barHeight: {
      type: String,
      default: '2px'
    }
  },

  computed: {
    barStyle: function barStyle() {
      return {
        width: this.format(this.value) + '%',
        height: this.barHeight
      };
    }
  },

  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.disabled) return;

      this.touchStart(event);
      this.startValue = this.format(this.value);
    },
    onTouchMove: function onTouchMove(event) {
      if (this.disabled) return;

      this.touchMove(event);
      var rect = this.$el.getBoundingClientRect();
      var diff = this.deltaX / rect.width * 100;
      this.updateValue(this.startValue + diff);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.disabled) return;
      this.updateValue(this.value, true);
    },
    onClick: function onClick(event) {
      if (this.disabled) return;

      var rect = this.$el.getBoundingClientRect();
      var value = (event.clientX - rect.left) / rect.width * 100;
      this.updateValue(value, true);
    },
    updateValue: function updateValue(value, end) {
      value = this.format(value);
      this.$emit('input', value);

      if (end) {
        this.$emit('change', value);
      }
    },
    format: function format(value) {
      return Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step;
    }
  }
}));
// CONCATENATED MODULE: ./es/step/index.js



/* harmony default export */ var step = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-hairline", class: _vm.b([_vm.$parent.direction, (_obj = {}, _obj[_vm.status] = _vm.status, _obj)]) }, [_c('div', { class: _vm.b('title'), style: _vm.titleStyle }, [_vm._t("default")], 2), _c('div', { class: _vm.b('circle-container') }, [_vm.status !== 'process' ? _c('i', { class: _vm.b('circle') }) : _c('icon', { style: { color: _vm.$parent.activeColor }, attrs: { "name": "checked" } })], 1), _c('div', { class: _vm.b('line') })]);
    var _obj;
  },

  name: 'step',

  beforeCreate: function beforeCreate() {
    this.$parent.steps.push(this);
  },

  computed: {
    status: function status() {
      var index = this.$parent.steps.indexOf(this);
      var active = this.$parent.active;

      if (index < active) {
        return 'finish';
      } else if (index === active) {
        return 'process';
      }
    },
    titleStyle: function titleStyle() {
      return this.status === 'process' ? {
        color: this.$parent.activeColor
      } : {};
    }
  }
}));
// CONCATENATED MODULE: ./es/steps/index.js



/* harmony default export */ var steps = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b([_vm.direction]) }, [_vm.title || _vm.description ? _c('div', { class: _vm.b('status') }, [_vm.icon || _vm.$slots.icon ? _c('div', { class: _vm.b('icon') }, [_vm._t("icon", [_c('icon', { class: _vm.iconClass, attrs: { "name": _vm.icon } })])], 2) : _vm._e(), _c('div', { class: _vm.b('message') }, [_c('div', { class: _vm.b('title'), domProps: { "textContent": _vm._s(_vm.title) } }), _c('div', { staticClass: "van-ellipsis", class: _vm.b('desc'), domProps: { "textContent": _vm._s(_vm.description) } })]), _vm._t("message-extra")], 2) : _vm._e(), _c('div', { class: _vm.b('items', { alone: !_vm.title && !_vm.description }) }, [_vm._t("default")], 2)]);
  },

  name: 'steps',

  props: {
    icon: String,
    title: String,
    active: Number,
    iconClass: String,
    description: String,
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: '#06bf04'
    }
  },

  data: function data() {
    return {
      steps: []
    };
  }
}));
// CONCATENATED MODULE: ./es/submit-bar/index.js




/* harmony default export */ var submit_bar = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_vm.tip || _vm.$slots.tip ? _c('div', { class: _vm.b('tip') }, [_vm._v("\n    " + _vm._s(_vm.tip)), _vm._t("tip")], 2) : _vm._e(), _c('div', { class: _vm.b('bar') }, [_vm._t("default"), _c('div', { class: _vm.b('price') }, [_vm.hasPrice ? [_c('span', [_vm._v(_vm._s(_vm.label || _vm.$t('label')))]), _c('span', { class: _vm.b('price-integer') }, [_vm._v(_vm._s(_vm.currency) + _vm._s(_vm.priceInterger) + ".")]), _c('span', { class: _vm.b('price-decimal') }, [_vm._v(_vm._s(_vm.priceDecimal))])] : _vm._e()], 2), _c('van-button', { attrs: { "type": _vm.buttonType, "disabled": _vm.disabled, "loading": _vm.loading }, on: { "click": function click($event) {
          _vm.$emit('submit');
        } } }, [_vm._v("\n      " + _vm._s(_vm.loading ? '' : _vm.buttonText) + "\n    ")])], 2)]);
  },

  name: 'submit-bar',

  components: {
    VanButton: es_button
  },

  props: {
    tip: String,
    type: Number,
    price: Number,
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    currency: {
      type: String,
      default: '¥'
    },
    buttonType: {
      type: String,
      default: 'danger'
    }
  },

  computed: {
    hasPrice: function hasPrice() {
      return typeof this.price === 'number';
    },
    priceInterger: function priceInterger() {
      return Math.floor(this.price / 100);
    },
    priceDecimal: function priceDecimal() {
      var decimal = Math.floor(this.price % 100);
      return (decimal < 10 ? '0' : '') + decimal;
    }
  }
}));
// CONCATENATED MODULE: ./es/tab/index.js




/* harmony default export */ var tab = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.isSelected, expression: "isSelected" }], class: _vm.b('pane') }, [_vm.inited ? _vm._t("default") : _vm._e(), _vm.$slots.title ? _c('div', { ref: "title" }, [_vm._t("title")], 2) : _vm._e()], 2);
  },

  name: 'tab',

  mixins: [find_parent],

  props: {
    title: String,
    disabled: Boolean
  },

  data: function data() {
    return {
      inited: false
    };
  },

  computed: {
    index: function index() {
      return this.parent.tabs.indexOf(this);
    },
    isSelected: function isSelected() {
      return this.index === this.parent.curActive;
    }
  },

  watch: {
    'parent.curActive': function parentCurActive() {
      this.inited = this.inited || this.isSelected;
    },
    title: function title() {
      this.parent.setLine();
    }
  },

  created: function created() {
    this.findParent('van-tabs');
    this.parent.tabs.push(this);
  },
  mounted: function mounted() {
    if (this.$slots.title) {
      this.parent.renderTitle(this.$refs.title, this.index);
    }
  },
  destroyed: function destroyed() {
    this.parent.tabs.splice(this.index, 1);
  }
}));
// CONCATENATED MODULE: ./es/tabbar/index.js



/* harmony default export */ var tabbar = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-hairline--top-bottom", class: _vm.b({ fixed: _vm.fixed }), style: _vm.style }, [_vm._t("default")], 2);
  },

  name: 'tabbar',

  data: function data() {
    return {
      items: []
    };
  },

  props: {
    value: Number,
    fixed: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },

  computed: {
    style: function style() {
      return {
        zIndex: this.zIndex
      };
    }
  },

  watch: {
    items: function items() {
      this.setActiveItem();
    },
    value: function value() {
      this.setActiveItem();
    }
  },

  methods: {
    setActiveItem: function setActiveItem() {
      var _this = this;

      this.items.forEach(function (item, index) {
        item.active = index === _this.value;
      });
    },
    onChange: function onChange(active) {
      this.$emit('input', active);
      this.$emit('change', active);
    }
  }
}));
// CONCATENATED MODULE: ./es/tabbar-item/index.js




/* harmony default export */ var tabbar_item = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b({ active: _vm.active }), on: { "click": _vm.onClick } }, [_c('div', { class: _vm.b('icon', { dot: _vm.dot }) }, [_vm._t("icon", [_vm.icon ? _c('icon', { attrs: { "name": _vm.icon } }) : _vm._e()], { active: _vm.active }), _vm.isDef(_vm.info) ? _c('div', { staticClass: "van-icon__info" }, [_vm._v(_vm._s(_vm.info))]) : _vm._e()], 2), _c('div', { class: _vm.b('text') }, [_vm._t("default", null, { active: _vm.active })], 2)]);
  },

  name: 'tabbar-item',

  mixins: [router_link],

  props: {
    icon: String,
    dot: Boolean,
    info: [String, Number]
  },

  data: function data() {
    return {
      active: false
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.items.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
  },

  methods: {
    onClick: function onClick(event) {
      this.$parent.onChange(this.$parent.items.indexOf(this));
      this.$emit('click', event);
      this.routerLink();
    }
  }
}));
// CONCATENATED MODULE: ./es/tabs/index.js







/* harmony default export */ var tabs = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b([_vm.type]) }, [_c('div', { ref: "wrap", class: [_vm.b('wrap', [_vm.position, { scrollable: _vm.scrollable }]), { 'van-hairline--top-bottom': _vm.type === 'line' }] }, [_c('div', { ref: "nav", class: _vm.b('nav', [_vm.type]) }, [_vm.type === 'line' ? _c('div', { class: _vm.b('line'), style: _vm.lineStyle }) : _vm._e(), _vm._l(_vm.tabs, function (tab, index) {
      return _c('div', { ref: "tabs", refInFor: true, staticClass: "van-tab", class: {
          'van-tab--active': index === _vm.curActive,
          'van-tab--disabled': tab.disabled
        }, on: { "click": function click($event) {
            _vm.onClick(index);
          } } }, [_c('span', { ref: "title", refInFor: true, staticClass: "van-ellipsis" }, [_vm._v(_vm._s(tab.title))])]);
    })], 2)]), _c('div', { ref: "content", class: _vm.b('content') }, [_vm._t("default")], 2)]);
  },

  name: 'tabs',

  mixins: [touch],

  model: {
    prop: 'active'
  },

  props: {
    sticky: Boolean,
    lineWidth: Number,
    swipeable: Boolean,
    active: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    duration: {
      type: Number,
      default: 0.2
    },
    swipeThreshold: {
      type: Number,
      default: 4
    }
  },

  data: function data() {
    return {
      tabs: [],
      position: 'content-top',
      curActive: 0,
      lineStyle: {},
      events: {
        resize: false,
        sticky: false,
        swipeable: false
      }
    };
  },

  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.tabs.length > this.swipeThreshold;
    }
  },

  watch: {
    active: function active(val) {
      if (val !== this.curActive) {
        this.correctActive(val);
      }
    },
    tabs: function tabs(_tabs) {
      this.correctActive(this.curActive || this.active);
      this.setLine();
    },
    curActive: function curActive() {
      this.scrollIntoView();
      this.setLine();

      // scroll to correct position
      if (this.position === 'page-top' || this.position === 'content-bottom') {
        utils_scroll.setScrollTop(this.scrollEl, utils_scroll.getElementTop(this.$el));
      }
    },
    sticky: function sticky() {
      this.handlers(true);
    },
    swipeable: function swipeable() {
      this.handlers(true);
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.correctActive(this.active);
    this.setLine();

    this.$nextTick(function () {
      _this.handlers(true);
      _this.scrollIntoView();
    });
  },
  activated: function activated() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.handlers(true);
    });
  },
  deactivated: function deactivated() {
    this.handlers(false);
  },
  beforeDestroy: function beforeDestroy() {
    this.handlers(false);
  },

  methods: {
    // whether to bind sticky listener
    handlers: function handlers(bind) {
      var events = this.events;

      var sticky = this.sticky && bind;
      var swipeable = this.swipeable && bind;

      // listen to window resize event
      if (events.resize !== bind) {
        events.resize = bind;
        (bind ? on : off)(window, 'resize', this.setLine, true);
      }

      // listen to scroll event
      if (events.sticky !== sticky) {
        events.sticky = sticky;
        this.scrollEl = this.scrollEl || utils_scroll.getScrollEventTarget(this.$el);
        (sticky ? on : off)(this.scrollEl, 'scroll', this.onScroll, true);
        this.onScroll();
      }

      // listen to touch event
      if (events.swipeable !== swipeable) {
        events.swipeable = swipeable;
        var content = this.$refs.content;

        var action = swipeable ? on : off;

        action(content, 'touchstart', this.touchStart);
        action(content, 'touchmove', this.touchMove);
        action(content, 'touchend', this.onTouchEnd);
        action(content, 'touchcancel', this.onTouchEnd);
      }
    },

    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          curActive = this.curActive;

      var minSwipeDistance = 50;

      /* istanbul ignore else */
      if (direction === 'horizontal' && this.offsetX >= minSwipeDistance) {
        /* istanbul ignore else */
        if (deltaX > 0 && curActive !== 0) {
          this.setCurActive(curActive - 1);
        } else if (deltaX < 0 && curActive !== this.tabs.length - 1) {
          this.setCurActive(curActive + 1);
        }
      }
    },

    // adjust tab position
    onScroll: function onScroll() {
      var scrollTop = utils_scroll.getScrollTop(this.scrollEl);
      var elTopToPageTop = utils_scroll.getElementTop(this.$el);
      var elBottomToPageTop = elTopToPageTop + this.$el.offsetHeight - this.$refs.wrap.offsetHeight;
      if (scrollTop > elBottomToPageTop) {
        this.position = 'content-bottom';
      } else if (scrollTop > elTopToPageTop) {
        this.position = 'page-top';
      } else {
        this.position = 'content-top';
      }
    },

    // update nav bar style
    setLine: function setLine() {
      var _this3 = this;

      this.$nextTick(function () {
        if (!_this3.$refs.tabs || _this3.type !== 'line') {
          return;
        }

        var tab = _this3.$refs.tabs[_this3.curActive];
        var width = _this3.lineWidth || tab.offsetWidth;
        var left = tab.offsetLeft + (tab.offsetWidth - width) / 2;

        _this3.lineStyle = {
          width: width + 'px',
          transform: 'translateX(' + left + 'px)',
          transitionDuration: _this3.duration + 's'
        };
      });
    },

    // correct the value of active
    correctActive: function correctActive(active) {
      active = +active;
      var exist = this.tabs.some(function (tab) {
        return tab.index === active;
      });
      var defaultActive = (this.tabs[0] || {}).index || 0;
      this.setCurActive(exist ? active : defaultActive);
    },
    setCurActive: function setCurActive(active) {
      this.curActive = active;
      this.$emit('input', active);
    },

    // emit event when clicked
    onClick: function onClick(index) {
      var _tabs$index = this.tabs[index],
          title = _tabs$index.title,
          disabled = _tabs$index.disabled;

      if (disabled) {
        this.$emit('disabled', index, title);
      } else {
        this.$emit('click', index, title);
        this.setCurActive(index);
      }
    },

    // scroll active tab into view
    scrollIntoView: function scrollIntoView() {
      if (!this.scrollable || !this.$refs.tabs) {
        return;
      }

      var tab = this.$refs.tabs[this.curActive];
      var nav = this.$refs.nav;
      var scrollLeft = nav.scrollLeft,
          navWidth = nav.offsetWidth;
      var offsetLeft = tab.offsetLeft,
          tabWidth = tab.offsetWidth;

      this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2);
    },

    // animate the scrollLeft of nav
    scrollTo: function scrollTo(el, from, to) {
      var count = 0;
      var frames = Math.round(this.duration * 1000 / 16);
      var animate = function animate() {
        el.scrollLeft += (to - from) / frames;
        /* istanbul ignore next */
        if (++count < frames) {
          Object(raf["b" /* raf */])(animate);
        }
      };
      animate();
    },

    // render title slot of child tab
    renderTitle: function renderTitle(el, index) {
      var _this4 = this;

      this.$nextTick(function () {
        var title = _this4.$refs.title[index];
        title.parentNode.replaceChild(el, title);
      });
    }
  }
}));
// CONCATENATED MODULE: ./es/tag/index.js



/* harmony default export */ var tag = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { staticClass: "van-hairline--surround", class: _vm.b((_obj = {
        mark: _vm.mark,
        plain: _vm.plain
      }, _obj[_vm.type] = _vm.type, _obj)) }, [_vm._t("default")], 2);
    var _obj;
  },

  name: 'tag',
  props: {
    type: String,
    mark: Boolean,
    plain: Boolean
  }
}));
// CONCATENATED MODULE: ./es/tree-select/index.js




/* harmony default export */ var tree_select = (create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b(), style: { height: _vm.mainHeight + 'px' } }, [_c('div', { class: _vm.b('nav') }, _vm._l(_vm.items, function (item, index) {
      return _c('div', { staticClass: "van-ellipsis", class: _vm.b('nitem', { active: _vm.mainActiveIndex === index }), on: { "click": function click($event) {
            _vm.$emit('navclick', index);
          } } }, [_vm._v("\n      " + _vm._s(item.text) + "\n    ")]);
    })), _c('div', { class: _vm.b('content'), style: { height: _vm.itemHeight + 'px' } }, _vm._l(_vm.subItems, function (item) {
      return _c('div', { key: item.id, staticClass: "van-ellipsis", class: _vm.b('item', { active: _vm.activeId === item.id }), on: { "click": function click($event) {
            _vm.onItemSelect(item);
          } } }, [_vm._v("\n      " + _vm._s(item.text) + "\n      "), _vm.activeId === item.id ? _c('icon', { class: _vm.b('selected'), attrs: { "name": "success" } }) : _vm._e()], 1);
    }))]);
  },

  name: 'tree-select',

  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    mainActiveIndex: {
      type: Number,
      default: 0
    },
    activeId: {
      type: [Number, String],
      default: 0
    },
    maxHeight: {
      type: Number,
      default: 300
    }
  },

  computed: {
    subItems: function subItems() {
      var selectedItem = this.items[this.mainActiveIndex] || {};
      return selectedItem.children || [];
    },
    mainHeight: function mainHeight() {
      var maxHeight = Math.max(this.items.length * 44, this.subItems.length * 44);
      return Math.min(maxHeight, this.maxHeight);
    },
    itemHeight: function itemHeight() {
      return Math.min(this.subItems.length * 44, this.maxHeight);
    }
  },

  methods: {
    onItemSelect: function onItemSelect(data) {
      this.$emit('itemclick', extends_default()({}, data));
    }
  }
}));
// CONCATENATED MODULE: ./es/waterfall/directive.js



var CONTEXT = '@@Waterfall';
var OFFSET = 300;

// 绑定事件到元素上
// 读取基本的控制变量
function doBindEvent() {
  var _this = this;

  if (this.el[CONTEXT].binded) {
    return;
  }
  this.el[CONTEXT].binded = true;

  this.scrollEventListener = handleScrollEvent.bind(this);
  this.scrollEventTarget = utils_scroll.getScrollEventTarget(this.el);

  var disabledExpr = this.el.getAttribute('waterfall-disabled');
  var disabled = false;
  if (disabledExpr) {
    this.vm.$watch(disabledExpr, function (value) {
      _this.disabled = value;
      _this.scrollEventListener();
    });
    disabled = Boolean(this.vm[disabledExpr]);
  }
  this.disabled = disabled;

  var offset = this.el.getAttribute('waterfall-offset');
  this.offset = Number(offset) || OFFSET;

  on(this.scrollEventTarget, 'scroll', this.scrollEventListener, true);

  this.scrollEventListener();
}

// 处理滚动函数
function handleScrollEvent() {
  var element = this.el;
  var scrollEventTarget = this.scrollEventTarget;
  // 已被禁止的滚动处理
  if (this.disabled) return;

  var targetScrollTop = utils_scroll.getScrollTop(scrollEventTarget);
  var targetVisibleHeight = utils_scroll.getVisibleHeight(scrollEventTarget);
  // 滚动元素可视区域下边沿到滚动元素元素最顶上 距离
  var targetBottom = targetScrollTop + targetVisibleHeight;

  // 如果无元素高度，考虑为元素隐藏，直接返回
  if (!targetVisibleHeight) return;

  // 判断是否到了底
  var needLoadMoreToLower = false;
  if (element === scrollEventTarget) {
    needLoadMoreToLower = scrollEventTarget.scrollHeight - targetBottom < this.offset;
  } else {
    var elementBottom = utils_scroll.getElementTop(element) - utils_scroll.getElementTop(scrollEventTarget) + utils_scroll.getVisibleHeight(element);
    needLoadMoreToLower = elementBottom - targetVisibleHeight < this.offset;
  }
  if (needLoadMoreToLower) {
    this.cb.lower && this.cb.lower({ target: scrollEventTarget, top: targetScrollTop });
  }

  // 判断是否到了顶
  var needLoadMoreToUpper = false;
  if (element === scrollEventTarget) {
    needLoadMoreToUpper = targetScrollTop < this.offset;
  } else {
    var elementTop = utils_scroll.getElementTop(element) - utils_scroll.getElementTop(scrollEventTarget);
    needLoadMoreToUpper = elementTop + this.offset > 0;
  }
  if (needLoadMoreToUpper) {
    this.cb.upper && this.cb.upper({ target: scrollEventTarget, top: targetScrollTop });
  }
}

// 绑定事件
function startBind(el) {
  var context = el[CONTEXT];

  context.vm.$nextTick(function () {
    doBindEvent.call(el[CONTEXT]);
  });
}

// 确认何时绑事件监听函数
function doCheckStartBind(el) {
  var context = el[CONTEXT];

  if (context.vm._isMounted) {
    startBind(el);
  } else {
    context.vm.$on('hook:mounted', function () {
      startBind(el);
    });
  }
}

/* harmony default export */ var directive = (function (type) {
  return {
    bind: function bind(el, binding, vnode) {
      if (!el[CONTEXT]) {
        el[CONTEXT] = {
          el: el,
          vm: vnode.context,
          cb: {}
        };
      }
      el[CONTEXT].cb[type] = binding.value;

      doCheckStartBind(el);
    },
    update: function update(el) {
      var context = el[CONTEXT];
      context.scrollEventListener && context.scrollEventListener();
    },
    unbind: function unbind(el) {
      var context = el[CONTEXT];
      if (context.scrollEventTarget) {
        off(context.scrollEventTarget, 'scroll', context.scrollEventListener);
      }
    }
  };
});;
// CONCATENATED MODULE: ./es/waterfall/index.js


directive.install = function (Vue) {
  if (false) {}
  Vue.directive('WaterfallLower', directive('lower'));
  Vue.directive('WaterfallUpper', directive('upper'));
};

/* harmony default export */ var waterfall = (directive);
// CONCATENATED MODULE: ./es/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return es_install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Actionsheet", function() { return actionsheet; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AddressEdit", function() { return address_edit; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AddressList", function() { return address_list; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Area", function() { return es_area; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Badge", function() { return badge; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BadgeGroup", function() { return badge_group; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Button", function() { return es_button; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Card", function() { return card; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Cell", function() { return cell; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CellGroup", function() { return cell_group; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CellSwipe", function() { return cell_swipe; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Checkbox", function() { return es_checkbox; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return checkbox_group; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Circle", function() { return circle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Col", function() { return col; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Collapse", function() { return collapse; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CollapseItem", function() { return collapse_item; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ContactCard", function() { return contact_card; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ContactEdit", function() { return contact_edit; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ContactList", function() { return contact_list; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CouponCell", function() { return coupon_cell; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CouponList", function() { return coupon_list; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DatetimePicker", function() { return datetime_picker; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Dialog", function() { return es_dialog; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Field", function() { return field; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GoodsAction", function() { return goods_action; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GoodsActionBigBtn", function() { return goods_action_big_btn; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GoodsActionMiniBtn", function() { return goods_action_mini_btn; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Icon", function() { return icon; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ImagePreview", function() { return es_image_preview; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Lazyload", function() { return lazyload; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "List", function() { return es_list; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Loading", function() { return loading; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Locale", function() { return es_locale; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "NavBar", function() { return nav_bar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "NoticeBar", function() { return notice_bar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "NumberKeyboard", function() { return number_keyboard; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Pagination", function() { return pagination; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Panel", function() { return panel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PasswordInput", function() { return password_input; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Picker", function() { return picker; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Popup", function() { return es_popup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Progress", function() { return es_progress; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PullRefresh", function() { return pull_refresh; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Radio", function() { return es_radio; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return radio_group; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Rate", function() { return es_rate; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Row", function() { return row; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Search", function() { return search; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Sku", function() { return sku; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Slider", function() { return slider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Step", function() { return step; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Stepper", function() { return stepper; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Steps", function() { return steps; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SubmitBar", function() { return submit_bar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Swipe", function() { return swipe; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SwipeItem", function() { return swipe_item; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Switch", function() { return es_switch; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SwitchCell", function() { return switch_cell; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tab", function() { return tab; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tabbar", function() { return tabbar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TabbarItem", function() { return tabbar_item; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tabs", function() { return tabs; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tag", function() { return tag; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Toast", function() { return es_toast; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TreeSelect", function() { return tree_select; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Uploader", function() { return uploader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Waterfall", function() { return waterfall; });
// This file is auto gererated by build/build-entry.js





































































var version = '1.1.9';
var components = [actionsheet, address_edit, address_list, es_area, badge, badge_group, es_button, card, cell, cell_group, cell_swipe, es_checkbox, checkbox_group, circle, col, collapse, collapse_item, contact_card, contact_edit, contact_list, coupon_cell, coupon_list, datetime_picker, es_dialog, field, goods_action, goods_action_big_btn, goods_action_mini_btn, icon, es_image_preview, es_list, loading, es_locale, nav_bar, notice_bar, number_keyboard, pagination, panel, password_input, picker, es_popup, es_progress, pull_refresh, es_radio, radio_group, es_rate, row, search, sku, slider, step, stepper, steps, submit_bar, swipe, swipe_item, es_switch, switch_cell, tab, tabbar, tabbar_item, tabs, tag, es_toast, tree_select, uploader];

var es_install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  es_install(window.Vue);
}



/* harmony default export */ var es = __webpack_exports__["default"] = ({
  install: es_install,
  version: version
});

/***/ }),
/* 48 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(7);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(11);
var newPromiseCapability = __webpack_require__(22);
var perform = __webpack_require__(33);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(11);
var core = __webpack_require__(7);
var global = __webpack_require__(6);
var speciesConstructor = __webpack_require__(35);
var promiseResolve = __webpack_require__(32);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(5)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var core = __webpack_require__(7);
var dP = __webpack_require__(19);
var DESCRIPTORS = __webpack_require__(14);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(10);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var macrotask = __webpack_require__(34).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(16)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(36);
var ITERATOR = __webpack_require__(5)('iterator');
var Iterators = __webpack_require__(13);
module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(13);
var ITERATOR = __webpack_require__(5)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(8);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var call = __webpack_require__(59);
var isArrayIter = __webpack_require__(58);
var anObject = __webpack_require__(8);
var toLength = __webpack_require__(43);
var getIterFn = __webpack_require__(57);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(38);
var global = __webpack_require__(6);
var ctx = __webpack_require__(21);
var classof = __webpack_require__(36);
var $export = __webpack_require__(11);
var isObject = __webpack_require__(15);
var aFunction = __webpack_require__(20);
var anInstance = __webpack_require__(61);
var forOf = __webpack_require__(60);
var speciesConstructor = __webpack_require__(35);
var task = __webpack_require__(34).set;
var microtask = __webpack_require__(55)();
var newPromiseCapabilityModule = __webpack_require__(22);
var perform = __webpack_require__(33);
var promiseResolve = __webpack_require__(32);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(5)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(54)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(23)($Promise, PROMISE);
__webpack_require__(53)(PROMISE);
Wrapper = __webpack_require__(7)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(52)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(64);
var step = __webpack_require__(63);
var Iterators = __webpack_require__(13);
var toIObject = __webpack_require__(28);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(39)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
var global = __webpack_require__(6);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(13);
var TO_STRING_TAG = __webpack_require__(5)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(24);
var IE_PROTO = __webpack_require__(25)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(19);
var anObject = __webpack_require__(8);
var getKeys = __webpack_require__(29);

module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(8);
var dPs = __webpack_require__(68);
var enumBugKeys = __webpack_require__(40);
var IE_PROTO = __webpack_require__(25)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(30)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(37).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(69);
var descriptor = __webpack_require__(45);
var setToStringTag = __webpack_require__(23);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(5)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26);
var defined = __webpack_require__(27);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(72)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(39)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 74 */
/***/ (function(module, exports) {



/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
__webpack_require__(73);
__webpack_require__(66);
__webpack_require__(62);
__webpack_require__(51);
__webpack_require__(50);
module.exports = __webpack_require__(7).Promise;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(11);
var core = __webpack_require__(7);
var fails = __webpack_require__(18);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(24);
var $keys = __webpack_require__(29);

__webpack_require__(76)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
module.exports = __webpack_require__(7).Object.keys;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(28);
var toLength = __webpack_require__(43);
var toAbsoluteIndex = __webpack_require__(81);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(28);
var arrayIndexOf = __webpack_require__(82)(false);
var IE_PROTO = __webpack_require__(25)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(29);
var gOPS = __webpack_require__(80);
var pIE = __webpack_require__(79);
var toObject = __webpack_require__(24);
var IObject = __webpack_require__(44);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(18)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(15);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(14) && !__webpack_require__(18)(function () {
  return Object.defineProperty(__webpack_require__(30)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(11);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(84) });


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
module.exports = __webpack_require__(7).Object.assign;


/***/ })
/******/ ]);
});