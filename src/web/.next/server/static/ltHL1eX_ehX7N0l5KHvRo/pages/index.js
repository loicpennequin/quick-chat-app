module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/dVr":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("lF35");
var enumBugKeys = __webpack_require__("sqNC");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "/q2R":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("vpus").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "033t":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "0YH9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("YjbZ");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "1xhh":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("aEYI");
var toObject = __webpack_require__("UWyV");
var IE_PROTO = __webpack_require__("zxSf")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "21ej":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("YjbZ");
var document = __webpack_require__("vpus").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "3+yJ":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "4a9F":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("UWyV");
var $keys = __webpack_require__("/dVr");

__webpack_require__("o7Bf")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "5A7e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dG7R");

/***/ }),

/***/ "5VZI":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("bqMK");
var ITERATOR = __webpack_require__("78yb")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "5lsi":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("0YH9");
var IE8_DOM_DEFINE = __webpack_require__("wa4t");
var toPrimitive = __webpack_require__("VHRt");
var dP = Object.defineProperty;

exports.f = __webpack_require__("km9I") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "6QTg":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("5lsi");
var createDesc = __webpack_require__("uG7T");
module.exports = __webpack_require__("km9I") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "6Z8V":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "7/T5":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("033t")('meta');
var isObject = __webpack_require__("YjbZ");
var has = __webpack_require__("aEYI");
var setDesc = __webpack_require__("5lsi").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("3+yJ")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "78yb":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("8yT3")('wks');
var uid = __webpack_require__("033t");
var Symbol = __webpack_require__("vpus").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "8k7s":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lt5F");

/***/ }),

/***/ "8yT3":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("MS8/");
var global = __webpack_require__("vpus");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("BMx2") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "9R6u":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("vpus");
var core = __webpack_require__("MS8/");
var LIBRARY = __webpack_require__("BMx2");
var wksExt = __webpack_require__("gA0n");
var defineProperty = __webpack_require__("5lsi").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "AVPL":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "BMx2":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "BVu9":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("Dia3");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "BnAI":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("Pb7z");
var gOPN = __webpack_require__("hRWd").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "CCAf":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("LRYe");
__webpack_require__("Se8B");
module.exports = __webpack_require__("MS8/").Array.from;


/***/ }),

/***/ "CLPb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/websites/mini projects/react-chat/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("ysci");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: C:/websites/mini projects/react-chat/node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: C:/websites/mini projects/react-chat/node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("Td7S");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: C:/websites/mini projects/react-chat/node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("5A7e");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: C:/websites/mini projects/react-chat/node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: C:/websites/mini projects/react-chat/node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: C:/websites/mini projects/react-chat/node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "CscF":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("0YH9");
var dPs = __webpack_require__("bqtW");
var enumBugKeys = __webpack_require__("sqNC");
var IE_PROTO = __webpack_require__("zxSf")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("21ej")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("/q2R").appendChild(iframe);
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

/***/ "DMnC":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6QTg");


/***/ }),

/***/ "Dia3":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Frtj":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("Dia3");
var TAG = __webpack_require__("78yb")('toStringTag');
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

/***/ "KJxa":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("oqEd");
module.exports = __webpack_require__("MS8/").Object.assign;


/***/ }),

/***/ "KQ9h":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("78yb")('iterator');
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

/***/ "LRYe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("qAmP")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("pPI1")(String, 'String', function (iterated) {
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

/***/ "MS8/":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "OCF2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KJxa");

/***/ }),

/***/ "OOMW":
/***/ (function(module, exports) {

module.exports = require("react-final-form-hooks");

/***/ }),

/***/ "Pb7z":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("BVu9");
var defined = __webpack_require__("AVPL");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "R+Je":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("yKI3");
module.exports = __webpack_require__("MS8/").Array.isArray;


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: C:/websites/mini projects/react-chat/node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("CLPb");

// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__("pI2v");
var external_socket_io_client_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_client_);

// CONCATENATED MODULE: ../shared/constants.js
/* harmony default export */ var constants = ({
    APP_URL: 'http://localhost:8000',
    ROLES: {
        SYSTEM: 'System'
    },
    SOCKET_EVENTS: {
        CONNECTION: 'connection',
        CONNECTION_SUCCESS: 'connect',
        DISCONNECTION: 'disconnect',
        ADD_USER: 'add user',
        GET_USERS: 'get users',
        NEW_PUBLIC_MESSAGE: 'new public message',
        GET_ALL_MESSAGES: 'get all messages'
    }
});

// CONCATENATED MODULE: ./hooks/useWebsockets.js




var socket = external_socket_io_client_default()(constants.APP_URL, {
  transports: ['websocket'],
  autoConnect: false
});
function useWebsockets() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$autoConnect = _ref.autoConnect,
      autoConnect = _ref$autoConnect === void 0 ? true : _ref$autoConnect;

  var _subscriptions = Object(external_react_["useRef"])([]);

  var _cleanup = Object(external_react_["useCallback"])(function () {
    if (_subscriptions.current.length > 0) {
      _subscriptions.current.forEach(function (subscription) {
        if (socket) socket.off.apply(socket, Object(toConsumableArray["a" /* default */])(subscription));
      });

      _subscriptions.current = [];
    }
  }, [_subscriptions]);

  Object(external_react_["useEffect"])(function () {
    return function () {
      _cleanup();
    };
  }, [_cleanup]);
  var connect = Object(external_react_["useCallback"])(function () {
    if (!(socket === null || socket === void 0 ? void 0 : socket.connected)) {
      socket.open();
    }
  }, []);
  var disconnect = Object(external_react_["useCallback"])(function () {
    if (socket === null || socket === void 0 ? void 0 : socket.connected) {
      socket.disconnect();
    }
  }, []);
  var emit = Object(external_react_["useCallback"])(function () {
    if (autoConnect && !(socket === null || socket === void 0 ? void 0 : socket.connected)) {
      connect();
    }

    socket.emit.apply(socket, arguments);
  }, [autoConnect, connect]);
  var on = Object(external_react_["useCallback"])(function () {
    if (autoConnect && !(socket === null || socket === void 0 ? void 0 : socket.connected)) {
      connect();
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _subscriptions.current.push([].concat(args));

    socket.on.apply(socket, args);
  }, [autoConnect, connect]);
  var off = Object(external_react_["useCallback"])(function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    // eslint-disable-next-line no-unused-expressions
    socket === null || socket === void 0 ? void 0 : socket.off.apply(socket, args);
    _subscriptions.current = _subscriptions.current.filter(function (sub) {
      return sub[1] !== args[1];
    });
  }, []);
  return {
    connect: connect,
    disconnect: disconnect,
    emit: emit,
    on: on,
    off: off
  };
}
// EXTERNAL MODULE: ./store/actionTypes.js
var actionTypes = __webpack_require__("k2H8");

// CONCATENATED MODULE: ./hooks/useUser.js





var SOCKET_EVENTS = constants.SOCKET_EVENTS;
function useUser() {
  var _useWebsockets = useWebsockets({
    autoConnect: false
  }),
      _connect = _useWebsockets.connect,
      _disconnect = _useWebsockets.disconnect,
      on = _useWebsockets.on,
      off = _useWebsockets.off,
      emit = _useWebsockets.emit;

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return state.user;
  }),
      username = _useSelector.username,
      connected = _useSelector.connected;

  var dispatch = Object(external_react_redux_["useDispatch"])();
  var onConnection = Object(external_react_["useCallback"])(function () {
    var onDisconnect = function onDisconnect() {
      dispatch({
        type: actionTypes["b" /* SET_CONNECTED */],
        connected: false
      });
      off(SOCKET_EVENTS.CONNECTION_SUCCESS, onConnection);
      off(SOCKET_EVENTS.DISCONNECTION, onDisconnect);
    };

    dispatch(function (dispatch, getState) {
      dispatch({
        type: actionTypes["b" /* SET_CONNECTED */],
        connected: true
      });
      emit(SOCKET_EVENTS.ADD_USER, getState().user.username);
    });
    on(SOCKET_EVENTS.DISCONNECTION, onDisconnect);
  }, [dispatch, emit, off, on]);
  return {
    username: username,
    connected: connected,
    connect: function connect(username) {
      _connect();

      dispatch({
        type: actionTypes["e" /* SET_USERNAME */],
        username: username
      });
      on(SOCKET_EVENTS.CONNECTION_SUCCESS, onConnection);
    },
    disconnect: function disconnect() {
      _disconnect();
    }
  };
}
// EXTERNAL MODULE: C:/websites/mini projects/react-chat/node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("OCF2");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: C:/websites/mini projects/react-chat/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
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

  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: external "react-final-form-hooks"
var external_react_final_form_hooks_ = __webpack_require__("OOMW");

// EXTERNAL MODULE: C:/websites/mini projects/react-chat/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("8k7s");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: C:/websites/mini projects/react-chat/node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("TPw6");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: C:/websites/mini projects/react-chat/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: C:/websites/mini projects/react-chat/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/ui/TextInput/styles.js

var Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1pt7n7p-0"
})(["display:flex;flex-direction:column;"]);
var Label = external_styled_components_default.a.label.withConfig({
  displayName: "styles__Label",
  componentId: "sc-1pt7n7p-1"
})(["margin-bottom:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xs;
});
var Input = external_styled_components_default.a.input.withConfig({
  displayName: "styles__Input",
  componentId: "sc-1pt7n7p-2"
})(["border-radius:5px;border:solid 1px ", ";padding:", ";&:focus{outline:none;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.xs;
});

// CONCATENATED MODULE: ./components/ui/TextInput/index.js





var TextInput_TextInput = function TextInput(_ref) {
  var label = _ref.label,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      props = _objectWithoutProperties(_ref, ["label", "type"]);

  return external_react_default.a.createElement(Wrapper, null, label && external_react_default.a.createElement(Label, null, label), external_react_default.a.createElement(Input, _extends({
    type: "text"
  }, props)));
};

/* harmony default export */ var ui_TextInput = (TextInput_TextInput);
// CONCATENATED MODULE: ./components/ui/Button/styles.js


var getColor = function getColor(_ref) {
  var secondary = _ref.secondary,
      theme = _ref.theme;
  return theme.colors[secondary ? 'secondary' : 'primary'];
};

var BaseButton = external_styled_components_default.a.button.withConfig({
  displayName: "styles__BaseButton",
  componentId: "v1larv-0"
})(["padding:", ";text-transform:uppercase;background-color:transparent;color:", ";border:solid 2px ", ";border-radius:8px;&:hover,&:focus{border-color:transparent;background-color:", ";color:", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return "".concat(theme.spacing.xs, " ").concat(theme.spacing.sm);
}, function (props) {
  return getColor(props);
}, function (props) {
  return getColor(props);
}, function (props) {
  return getColor(props);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.textInvert;
});
var DisabledButton = external_styled_components_default()(BaseButton).withConfig({
  displayName: "styles__DisabledButton",
  componentId: "v1larv-1"
})(["background-color:var(--grey);color:var(--darkgrey);opacity:0.5;border-color:transparent;&:hover,&:focus{background-color:var(--grey);color:var(--darkgrey);}"]);

// CONCATENATED MODULE: ./components/ui/Button/index.js




var Button_Button = function Button(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  if (props.disabled) {
    return external_react_default.a.createElement(DisabledButton, props, children);
  }

  return external_react_default.a.createElement(BaseButton, props, children);
};

/* harmony default export */ var ui_Button = (Button_Button);
// CONCATENATED MODULE: ./components/LoginForm/styles.js

var styles_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "vxfo1c-0"
})(["height:100vh;display:flex;align-items:center;justify-content:center;"]);
var Form = external_styled_components_default.a.form.withConfig({
  displayName: "styles__Form",
  componentId: "vxfo1c-1"
})(["padding:", ";background-color:", ";display:flex;flex-direction:column;align-items:flex-end;"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.lg;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.foreground;
});
var InputWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__InputWrapper",
  componentId: "vxfo1c-2"
})(["margin-bottom:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.sm;
});

// CONCATENATED MODULE: ./components/LoginForm/index.js







var LoginForm_LoginForm = function LoginForm(_ref) {
  var _onSubmit = _ref.onSubmit;

  var _useForm = Object(external_react_final_form_hooks_["useForm"])({
    onSubmit: function onSubmit(_ref2) {
      var username = _ref2.username;

      _onSubmit(username);
    }
  }),
      form = _useForm.form,
      handleSubmit = _useForm.handleSubmit;

  var username = Object(external_react_final_form_hooks_["useField"])('username', form);
  return external_react_default.a.createElement(styles_Wrapper, null, external_react_default.a.createElement(Form, {
    onSubmit: handleSubmit
  }, external_react_default.a.createElement(InputWrapper, null, external_react_default.a.createElement(ui_TextInput, _extends({
    label: "Select your Username",
    required: true,
    autoComplete: "off"
  }, username.input))), external_react_default.a.createElement(ui_Button, {
    type: "submit",
    disabled: !username.input.value
  }, external_react_default.a.createElement("span", {
    role: "img",
    "aria-label": "nique sa mere l'a11y"
  }, "\uD83D\uDE80"), "Connect")));
};

/* harmony default export */ var components_LoginForm = (LoginForm_LoginForm);
// CONCATENATED MODULE: ./hooks/useUsers.js





var useUsers_SOCKET_EVENTS = constants.SOCKET_EVENTS;
function useUsers_useUser() {
  var _useWebsockets = useWebsockets(),
      on = _useWebsockets.on,
      emit = _useWebsockets.emit;

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return state.user;
  }),
      connectedUsers = _useSelector.connectedUsers;

  var dispatch = Object(external_react_redux_["useDispatch"])();
  var getUsers = Object(external_react_["useCallback"])(function (users) {
    dispatch({
      type: actionTypes["c" /* SET_CONNECTED_USERS */],
      users: users
    });
  }, [dispatch]);
  return {
    users: connectedUsers,
    getUsers: Object(external_react_["useCallback"])(function () {
      emit(useUsers_SOCKET_EVENTS.GET_USERS);
      on(useUsers_SOCKET_EVENTS.GET_USERS, getUsers);
    }, [emit, getUsers, on])
  };
}
// CONCATENATED MODULE: ./components/Chatroom/UsersList/styles.js

var UsersList_styles_Wrapper = external_styled_components_default.a.ul.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-40onmy-0"
})(["width:22ch;overflow-y:auto;border-left:solid 1px ", ";margin:0;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
});
var Item = external_styled_components_default.a.li.withConfig({
  displayName: "styles__Item",
  componentId: "sc-40onmy-1"
})(["border-bottom:solid 1px ", ";padding:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.sm;
});

// CONCATENATED MODULE: ./components/Chatroom/UsersList/index.js




var UsersList_UsersList = function UsersList() {
  var _useUsers = useUsers_useUser(),
      users = _useUsers.users,
      getUsers = _useUsers.getUsers;

  Object(external_react_["useEffect"])(function () {
    getUsers();
  }, [getUsers]);
  return external_react_default.a.createElement(UsersList_styles_Wrapper, null, users.map(function (user) {
    return external_react_default.a.createElement(Item, {
      key: user
    }, user);
  }));
};

/* harmony default export */ var Chatroom_UsersList = (UsersList_UsersList);
// CONCATENATED MODULE: ./hooks/useMessages.js





var useMessages_SOCKET_EVENTS = constants.SOCKET_EVENTS;
function useMessages_useUser() {
  var _useWebsockets = useWebsockets(),
      on = _useWebsockets.on,
      emit = _useWebsockets.emit;

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return state.message;
  }),
      messages = _useSelector.messages;

  var dispatch = Object(external_react_redux_["useDispatch"])();
  var getAllMessages = Object(external_react_["useCallback"])(function (messages) {
    dispatch({
      type: actionTypes["d" /* SET_MESSAGE_LIST */],
      messages: messages
    });
  }, [dispatch]);
  var onNewPublicMessage = Object(external_react_["useCallback"])(function (message) {
    dispatch({
      type: actionTypes["a" /* ADD_MESSAGE */],
      message: message
    });
  }, [dispatch]);
  var getMessages = Object(external_react_["useCallback"])(function () {
    emit(useMessages_SOCKET_EVENTS.GET_ALL_MESSAGES);
  }, [emit]);
  var sendPublicMessage = Object(external_react_["useCallback"])(function (message) {
    emit(useMessages_SOCKET_EVENTS.NEW_PUBLIC_MESSAGE, message);
  }, [emit]);
  return {
    messages: messages,
    getMessages: getMessages,
    sendPublicMessage: sendPublicMessage,
    listenToPublicMessages: Object(external_react_["useCallback"])(function () {
      on(useMessages_SOCKET_EVENTS.GET_ALL_MESSAGES, getAllMessages);
      on(useMessages_SOCKET_EVENTS.NEW_PUBLIC_MESSAGE, onNewPublicMessage);
    }, [getAllMessages, on, onNewPublicMessage])
  };
}
// CONCATENATED MODULE: ./components/ui/index.js



// CONCATENATED MODULE: ./components/Chatroom/MessageForm/styles.js

var styles_Form = external_styled_components_default.a.form.withConfig({
  displayName: "styles__Form",
  componentId: "sc-1m879d6-0"
})(["display:flex;align-items:center;"]);
var styles_InputWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__InputWrapper",
  componentId: "sc-1m879d6-1"
})(["flex-grow:1;"]);

// CONCATENATED MODULE: ./components/Chatroom/MessageForm/index.js








var MessageForm_MessageForm = function MessageForm() {
  var _useMessages = useMessages_useUser(),
      sendPublicMessage = _useMessages.sendPublicMessage;

  var _useUser = useUser(),
      username = _useUser.username;

  var _useForm = Object(external_react_final_form_hooks_["useForm"])({
    onSubmit: function onSubmit(_ref) {
      var message = _ref.message;
      sendPublicMessage({
        text: message,
        author: username
      });
    }
  }),
      form = _useForm.form,
      handleSubmit = _useForm.handleSubmit;

  var message = Object(external_react_final_form_hooks_["useField"])('message', form);
  return external_react_default.a.createElement(styles_Form, {
    onSubmit: handleSubmit
  }, external_react_default.a.createElement(styles_InputWrapper, null, external_react_default.a.createElement(ui_TextInput, _extends({}, message.input, {
    required: true,
    autoComplete: "off"
  }))), external_react_default.a.createElement(ui_Button, {
    type: "submit",
    disabled: !message.input.value
  }, "Send"));
};

/* harmony default export */ var Chatroom_MessageForm = (MessageForm_MessageForm);
// CONCATENATED MODULE: ./util/formatDate.js
function formatDate(date) {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  var h = date.getHours();
  var m = date.getMinutes();
  return "".concat(h < 10 ? h : '0' + h, ":").concat(m < 10 ? m : '0' + m);
}
// CONCATENATED MODULE: ./components/Chatroom/MessageList/Message/styles.js

var BaseWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__BaseWrapper",
  componentId: "pjghk2-0"
})(["padding:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xs;
});
var SystemWrapper = external_styled_components_default()(BaseWrapper).withConfig({
  displayName: "styles__SystemWrapper",
  componentId: "pjghk2-1"
})(["color:var(--grey);font-style:italic;"]);
var UserWrapper = external_styled_components_default()(BaseWrapper).withConfig({
  displayName: "styles__UserWrapper",
  componentId: "pjghk2-2"
})([""]);
var Author = external_styled_components_default.a.span.withConfig({
  displayName: "styles__Author",
  componentId: "pjghk2-3"
})(["font-weight:bold;"]);

// CONCATENATED MODULE: ./components/Chatroom/MessageList/Message/index.js





var Message_Message = function Message(_ref) {
  var message = _ref.message;
  return message.author === constants.ROLES.SYSTEM ? external_react_default.a.createElement(Message_SystemMessage, {
    message: message
  }) : external_react_default.a.createElement(Message_UserMessage, {
    message: message
  });
};

var Message_UserMessage = function UserMessage(_ref2) {
  var _ref2$message = _ref2.message,
      timestamp = _ref2$message.timestamp,
      author = _ref2$message.author,
      text = _ref2$message.text;
  return external_react_default.a.createElement(UserWrapper, null, "(", formatDate(timestamp), ") ", external_react_default.a.createElement(Author, null, author), " : ", text);
};

var Message_SystemMessage = function SystemMessage(_ref3) {
  var text = _ref3.message.text;
  return external_react_default.a.createElement(SystemWrapper, null, text);
};

/* harmony default export */ var MessageList_Message = (Message_Message);
// CONCATENATED MODULE: ./components/Chatroom/MessageList/index.js




var MessageList_MessageList = function MessageList() {
  var _useMessages = useMessages_useUser(),
      messages = _useMessages.messages,
      listenToPublicMessages = _useMessages.listenToPublicMessages,
      getMessages = _useMessages.getMessages;

  Object(external_react_["useEffect"])(function () {
    getMessages();
    listenToPublicMessages();
  }, [getMessages, listenToPublicMessages]);
  return external_react_default.a.createElement("ul", null, messages.map(function (message, index) {
    return external_react_default.a.createElement("li", {
      key: index
    }, external_react_default.a.createElement(MessageList_Message, {
      message: message
    }));
  }));
};

/* harmony default export */ var Chatroom_MessageList = (MessageList_MessageList);
// CONCATENATED MODULE: ./components/Chatroom/styles.js


var Chatroom_styles_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "toa28a-0"
})(["background-color:", ";display:grid;grid-template-columns:1fr max-content;grid-template-rows:max-content 1fr max-content;width:980px;height:85vh;filter:drop-shadow(0 0 2em hsl(0,0%,0%,0.3));"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.foreground;
});
var FullWidth = external_styled_components_default.a.div.withConfig({
  displayName: "styles__FullWidth",
  componentId: "toa28a-1"
})(["grid-column:span 2;"]);
var LogoutButton = external_styled_components_default()(ui_Button).withConfig({
  displayName: "styles__LogoutButton",
  componentId: "toa28a-2"
})(["margin-left:auto;"]);
var Header = external_styled_components_default()(FullWidth).withConfig({
  displayName: "styles__Header",
  componentId: "toa28a-3"
})(["display:flex;align-items:center;padding:", ";border-bottom:solid 1px ", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.md;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primary;
});
var Banner = external_styled_components_default.a.h1.withConfig({
  displayName: "styles__Banner",
  componentId: "toa28a-4"
})(["margin:0;padding-left:", ";color:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing.lg;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.primary;
});

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// CONCATENATED MODULE: ./components/Chatroom/index.js








var Chatroom_Chatroom = function Chatroom() {
  var _useUser = useUser(),
      username = _useUser.username,
      disconnect = _useUser.disconnect;

  return external_react_default.a.createElement(Chatroom_styles_Wrapper, null, external_react_default.a.createElement(Header, null, external_react_default.a.createElement(Banner, null, "Hello, ", username), external_react_default.a.createElement(LogoutButton, {
    secondary: true,
    onClick: disconnect
  }, external_react_default.a.createElement(fa_["FaPowerOff"], {
    style: {
      marginRight: '5px'
    }
  }), "Logout")), external_react_default.a.createElement(Chatroom_MessageList, null), external_react_default.a.createElement(Chatroom_UsersList, null), external_react_default.a.createElement(FullWidth, null, external_react_default.a.createElement(Chatroom_MessageForm, null)));
};

/* harmony default export */ var components_Chatroom = (Chatroom_Chatroom);
// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__("hKtz");

// CONCATENATED MODULE: ./pages/index.js







var pages_Home = function Home() {
  var _useUser = useUser(),
      connected = _useUser.connected,
      connect = _useUser.connect;

  var handleSubmit = Object(external_react_["useCallback"])(function (username) {
    connect(username);
  }, [connect]);
  return external_react_default.a.createElement(Main, null, connected ? external_react_default.a.createElement(components_Chatroom, null) : external_react_default.a.createElement(components_LoginForm, {
    onSubmit: handleSubmit
  }));
};

var Main = external_styled_components_default.a.main.withConfig({
  displayName: "pages__Main",
  componentId: "sc-1j0tw7a-0"
})(["min-height:100vh;display:flex;align-items:center;justify-content:center;background:", ";"], function (_ref) {
  var theme = _ref.theme;
  return Object(external_polished_["linearGradient"])({
    colorStops: [theme.colors.primary, theme.colors.secondary],
    toDirection: '130DEG',
    fallback: theme.colors.primary
  });
});
/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ }),

/***/ "RrZ7":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "Se8B":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("c9UZ");
var $export = __webpack_require__("rEAF");
var toObject = __webpack_require__("UWyV");
var call = __webpack_require__("m3hj");
var isArrayIter = __webpack_require__("5VZI");
var toLength = __webpack_require__("Y5VZ");
var createProperty = __webpack_require__("uBe4");
var getIterFn = __webpack_require__("fZ/e");

$export($export.S + $export.F * !__webpack_require__("KQ9h")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "Sv8M":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "TPw6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cpAI");

/***/ }),

/***/ "TXdN":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("5lsi").f;
var has = __webpack_require__("aEYI");
var TAG = __webpack_require__("78yb")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "Td7S":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("CCAf");

/***/ }),

/***/ "U/6a":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("Frtj");
var ITERATOR = __webpack_require__("78yb")('iterator');
var Iterators = __webpack_require__("bqMK");
module.exports = __webpack_require__("MS8/").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "UWyV":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("AVPL");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "VHRt":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("YjbZ");
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

/***/ "XQss":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("Pb7z");
var toLength = __webpack_require__("Y5VZ");
var toAbsoluteIndex = __webpack_require__("rQsC");
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

/***/ "Y5VZ":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("mHa6");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "YHde":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("km9I");
var getKeys = __webpack_require__("/dVr");
var gOPS = __webpack_require__("dg6p");
var pIE = __webpack_require__("6Z8V");
var toObject = __webpack_require__("UWyV");
var IObject = __webpack_require__("BVu9");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("3+yJ")(function () {
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
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "YjbZ":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "Yw23":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("6Z8V");
var createDesc = __webpack_require__("uG7T");
var toIObject = __webpack_require__("Pb7z");
var toPrimitive = __webpack_require__("VHRt");
var has = __webpack_require__("aEYI");
var IE8_DOM_DEFINE = __webpack_require__("wa4t");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("km9I") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "aEYI":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "aJeV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("RrZ7");
var step = __webpack_require__("kr9U");
var Iterators = __webpack_require__("bqMK");
var toIObject = __webpack_require__("Pb7z");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("pPI1")(Array, 'Array', function (iterated, kind) {
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

/***/ "bcKi":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("aJeV");
var global = __webpack_require__("vpus");
var hide = __webpack_require__("6QTg");
var Iterators = __webpack_require__("bqMK");
var TO_STRING_TAG = __webpack_require__("78yb")('toStringTag');

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

/***/ "bqMK":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "bqtW":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("5lsi");
var anObject = __webpack_require__("0YH9");
var getKeys = __webpack_require__("/dVr");

module.exports = __webpack_require__("km9I") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "c9UZ":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("Sv8M");
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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cpAI":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("4a9F");
module.exports = __webpack_require__("MS8/").Object.keys;


/***/ }),

/***/ "dG7R":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("bcKi");
__webpack_require__("LRYe");
module.exports = __webpack_require__("U/6a");


/***/ }),

/***/ "dg6p":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "fZ/e":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("Frtj");
var ITERATOR = __webpack_require__("78yb")('iterator');
var Iterators = __webpack_require__("bqMK");
module.exports = __webpack_require__("MS8/").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "gA0n":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("78yb");


/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hKtz":
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "hRWd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("lF35");
var hiddenKeys = __webpack_require__("sqNC").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "k2H8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_USERNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_CONNECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_CONNECTED_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_MESSAGE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_MESSAGE; });
var SET_USERNAME = 'SET_USERNAME';
var SET_CONNECTED = 'SET_CONNECTED';
var SET_CONNECTED_USERS = 'SET_CONNECTED_USERS';
var SET_MESSAGE_LIST = 'SET_MESSAGE_LIST';
var ADD_MESSAGE = 'ADD_MESSAGE';

/***/ }),

/***/ "km9I":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("3+yJ")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "kr9U":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "kyuf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("CscF");
var descriptor = __webpack_require__("uG7T");
var setToStringTag = __webpack_require__("TXdN");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("6QTg")(IteratorPrototype, __webpack_require__("78yb")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "lF35":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("aEYI");
var toIObject = __webpack_require__("Pb7z");
var arrayIndexOf = __webpack_require__("XQss")(false);
var IE_PROTO = __webpack_require__("zxSf")('IE_PROTO');

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

/***/ "lt5F":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("nWAv");
module.exports = __webpack_require__("MS8/").Object.getOwnPropertySymbols;


/***/ }),

/***/ "lw8j":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("Dia3");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "m3hj":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("0YH9");
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

/***/ "mHa6":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "nWAv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("vpus");
var has = __webpack_require__("aEYI");
var DESCRIPTORS = __webpack_require__("km9I");
var $export = __webpack_require__("rEAF");
var redefine = __webpack_require__("DMnC");
var META = __webpack_require__("7/T5").KEY;
var $fails = __webpack_require__("3+yJ");
var shared = __webpack_require__("8yT3");
var setToStringTag = __webpack_require__("TXdN");
var uid = __webpack_require__("033t");
var wks = __webpack_require__("78yb");
var wksExt = __webpack_require__("gA0n");
var wksDefine = __webpack_require__("9R6u");
var enumKeys = __webpack_require__("xmEN");
var isArray = __webpack_require__("lw8j");
var anObject = __webpack_require__("0YH9");
var isObject = __webpack_require__("YjbZ");
var toObject = __webpack_require__("UWyV");
var toIObject = __webpack_require__("Pb7z");
var toPrimitive = __webpack_require__("VHRt");
var createDesc = __webpack_require__("uG7T");
var _create = __webpack_require__("CscF");
var gOPNExt = __webpack_require__("BnAI");
var $GOPD = __webpack_require__("Yw23");
var $GOPS = __webpack_require__("dg6p");
var $DP = __webpack_require__("5lsi");
var $keys = __webpack_require__("/dVr");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("hRWd").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("6Z8V").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("BMx2")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("6QTg")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "o7Bf":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("rEAF");
var core = __webpack_require__("MS8/");
var fails = __webpack_require__("3+yJ");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "oqEd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("rEAF");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("YHde") });


/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "pPI1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("BMx2");
var $export = __webpack_require__("rEAF");
var redefine = __webpack_require__("DMnC");
var hide = __webpack_require__("6QTg");
var Iterators = __webpack_require__("bqMK");
var $iterCreate = __webpack_require__("kyuf");
var setToStringTag = __webpack_require__("TXdN");
var getPrototypeOf = __webpack_require__("1xhh");
var ITERATOR = __webpack_require__("78yb")('iterator');
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

/***/ "qAmP":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("mHa6");
var defined = __webpack_require__("AVPL");
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

/***/ "rEAF":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("vpus");
var core = __webpack_require__("MS8/");
var ctx = __webpack_require__("c9UZ");
var hide = __webpack_require__("6QTg");
var has = __webpack_require__("aEYI");
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

/***/ "rQsC":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("mHa6");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "sqNC":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "uBe4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("5lsi");
var createDesc = __webpack_require__("uG7T");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "uG7T":
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

/***/ "vpus":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "wa4t":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("km9I") && !__webpack_require__("3+yJ")(function () {
  return Object.defineProperty(__webpack_require__("21ej")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "xmEN":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("/dVr");
var gOPS = __webpack_require__("dg6p");
var pIE = __webpack_require__("6Z8V");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "yKI3":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("rEAF");

$export($export.S, 'Array', { isArray: __webpack_require__("lw8j") });


/***/ }),

/***/ "ysci":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R+Je");

/***/ }),

/***/ "zxSf":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("8yT3")('keys');
var uid = __webpack_require__("033t");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ })

/******/ });