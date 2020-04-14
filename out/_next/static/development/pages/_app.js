(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/_app.js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _get; });
/* harmony import */ var _superPropBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = Object(_superPropBase__WEBPACK_IMPORTED_MODULE_0__["default"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _superPropBase; });
/* harmony import */ var _getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@sentry/browser/esm/backend.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/backend.js ***!
  \*****************************************************/
/*! exports provided: BrowserBackend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserBackend", function() { return BrowserBackend; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _eventbuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventbuilder */ "./node_modules/@sentry/browser/esm/eventbuilder.js");
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transports */ "./node_modules/@sentry/browser/esm/transports/index.js");






/**
 * The Sentry Browser SDK Backend.
 * @hidden
 */
var BrowserBackend = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BrowserBackend, _super);
    function BrowserBackend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype._setupTransport = function () {
        if (!this._options.dsn) {
            // We return the noop transport here in case there is no Dsn.
            return _super.prototype._setupTransport.call(this);
        }
        var transportOptions = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._options.transportOptions, { dsn: this._options.dsn });
        if (this._options.transport) {
            return new this._options.transport(transportOptions);
        }
        if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["supportsFetch"])()) {
            return new _transports__WEBPACK_IMPORTED_MODULE_5__["FetchTransport"](transportOptions);
        }
        return new _transports__WEBPACK_IMPORTED_MODULE_5__["XHRTransport"](transportOptions);
    };
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.eventFromException = function (exception, hint) {
        var syntheticException = (hint && hint.syntheticException) || undefined;
        var event = Object(_eventbuilder__WEBPACK_IMPORTED_MODULE_4__["eventFromUnknownInput"])(exception, syntheticException, {
            attachStacktrace: this._options.attachStacktrace,
        });
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addExceptionMechanism"])(event, {
            handled: true,
            type: 'generic',
        });
        event.level = _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Severity"].Error;
        if (hint && hint.event_id) {
            event.event_id = hint.event_id;
        }
        return _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["SyncPromise"].resolve(event);
    };
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.eventFromMessage = function (message, level, hint) {
        if (level === void 0) { level = _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Severity"].Info; }
        var syntheticException = (hint && hint.syntheticException) || undefined;
        var event = Object(_eventbuilder__WEBPACK_IMPORTED_MODULE_4__["eventFromString"])(message, syntheticException, {
            attachStacktrace: this._options.attachStacktrace,
        });
        event.level = level;
        if (hint && hint.event_id) {
            event.event_id = hint.event_id;
        }
        return _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["SyncPromise"].resolve(event);
    };
    return BrowserBackend;
}(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["BaseBackend"]));

//# sourceMappingURL=backend.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/client.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/client.js ***!
  \****************************************************/
/*! exports provided: BrowserClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserClient", function() { return BrowserClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backend */ "./node_modules/@sentry/browser/esm/backend.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./version */ "./node_modules/@sentry/browser/esm/version.js");





/**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
var BrowserClient = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BrowserClient, _super);
    /**
     * Creates a new Browser SDK instance.
     *
     * @param options Configuration options for this SDK.
     */
    function BrowserClient(options) {
        if (options === void 0) { options = {}; }
        return _super.call(this, _backend__WEBPACK_IMPORTED_MODULE_3__["BrowserBackend"], options) || this;
    }
    /**
     * @inheritDoc
     */
    BrowserClient.prototype._prepareEvent = function (event, scope, hint) {
        event.platform = event.platform || 'javascript';
        event.sdk = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event.sdk, { name: _version__WEBPACK_IMPORTED_MODULE_4__["SDK_NAME"], packages: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](((event.sdk && event.sdk.packages) || []), [
                {
                    name: 'npm:@sentry/browser',
                    version: _version__WEBPACK_IMPORTED_MODULE_4__["SDK_VERSION"],
                },
            ]), version: _version__WEBPACK_IMPORTED_MODULE_4__["SDK_VERSION"] });
        return _super.prototype._prepareEvent.call(this, event, scope, hint);
    };
    /**
     * Show a report dialog to the user to send feedback to a specific event.
     *
     * @param options Set individual options for the dialog
     */
    BrowserClient.prototype.showReportDialog = function (options) {
        if (options === void 0) { options = {}; }
        // doesn't work without a document (React Native)
        var document = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getGlobalObject"])().document;
        if (!document) {
            return;
        }
        if (!this._isEnabled()) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error('Trying to call showReportDialog with Sentry Client is disabled');
            return;
        }
        var dsn = options.dsn || this.getDsn();
        if (!options.eventId) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error('Missing `eventId` option in showReportDialog call');
            return;
        }
        if (!dsn) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error('Missing `Dsn` option in showReportDialog call');
            return;
        }
        var script = document.createElement('script');
        script.async = true;
        script.src = new _sentry_core__WEBPACK_IMPORTED_MODULE_1__["API"](dsn).getReportDialogEndpoint(options);
        if (options.onLoad) {
            script.onload = options.onLoad;
        }
        (document.head || document.body).appendChild(script);
    };
    return BrowserClient;
}(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["BaseClient"]));

//# sourceMappingURL=client.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/eventbuilder.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/eventbuilder.js ***!
  \**********************************************************/
/*! exports provided: eventFromUnknownInput, eventFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromUnknownInput", function() { return eventFromUnknownInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromString", function() { return eventFromString; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers */ "./node_modules/@sentry/browser/esm/parsers.js");
/* harmony import */ var _tracekit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracekit */ "./node_modules/@sentry/browser/esm/tracekit.js");



/** JSDoc */
function eventFromUnknownInput(exception, syntheticException, options) {
    if (options === void 0) { options = {}; }
    var event;
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["isErrorEvent"])(exception) && exception.error) {
        // If it is an ErrorEvent with `error` property, extract it to get actual Error
        var errorEvent = exception;
        exception = errorEvent.error; // tslint:disable-line:no-parameter-reassignment
        event = Object(_parsers__WEBPACK_IMPORTED_MODULE_1__["eventFromStacktrace"])(Object(_tracekit__WEBPACK_IMPORTED_MODULE_2__["computeStackTrace"])(exception));
        return event;
    }
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["isDOMError"])(exception) || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["isDOMException"])(exception)) {
        // If it is a DOMError or DOMException (which are legacy APIs, but still supported in some browsers)
        // then we just extract the name and message, as they don't provide anything else
        // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
        // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
        var domException = exception;
        var name_1 = domException.name || (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["isDOMError"])(domException) ? 'DOMError' : 'DOMException');
        var message = domException.message ? name_1 + ": " + domException.message : name_1;
        event = eventFromString(message, syntheticException, options);
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["addExceptionTypeValue"])(event, message);
        return event;
    }
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["isError"])(exception)) {
        // we have a real Error object, do nothing
        event = Object(_parsers__WEBPACK_IMPORTED_MODULE_1__["eventFromStacktrace"])(Object(_tracekit__WEBPACK_IMPORTED_MODULE_2__["computeStackTrace"])(exception));
        return event;
    }
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(exception) || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["isEvent"])(exception)) {
        // If it is plain Object or Event, serialize it manually and extract options
        // This will allow us to group events based on top-level keys
        // which is much better than creating new group when any key/value change
        var objectException = exception;
        event = Object(_parsers__WEBPACK_IMPORTED_MODULE_1__["eventFromPlainObject"])(objectException, syntheticException, options.rejection);
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["addExceptionMechanism"])(event, {
            synthetic: true,
        });
        return event;
    }
    // If none of previous checks were valid, then it means that it's not:
    // - an instance of DOMError
    // - an instance of DOMException
    // - an instance of Event
    // - an instance of Error
    // - a valid ErrorEvent (one with an error property)
    // - a plain Object
    //
    // So bail out and capture it as a simple message:
    event = eventFromString(exception, syntheticException, options);
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["addExceptionTypeValue"])(event, "" + exception, undefined);
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["addExceptionMechanism"])(event, {
        synthetic: true,
    });
    return event;
}
// this._options.attachStacktrace
/** JSDoc */
function eventFromString(input, syntheticException, options) {
    if (options === void 0) { options = {}; }
    var event = {
        message: input,
    };
    if (options.attachStacktrace && syntheticException) {
        var stacktrace = Object(_tracekit__WEBPACK_IMPORTED_MODULE_2__["computeStackTrace"])(syntheticException);
        var frames_1 = Object(_parsers__WEBPACK_IMPORTED_MODULE_1__["prepareFramesForEvent"])(stacktrace.stack);
        event.stacktrace = {
            frames: frames_1,
        };
    }
    return event;
}
//# sourceMappingURL=eventbuilder.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/exports.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/exports.js ***!
  \*****************************************************/
/*! exports provided: Severity, Status, addGlobalEventProcessor, addBreadcrumb, captureException, captureEvent, captureMessage, configureScope, getHubFromCarrier, getCurrentHub, Hub, Scope, setContext, setExtra, setExtras, setTag, setTags, setUser, withScope, BrowserClient, defaultIntegrations, forceLoad, init, lastEventId, onLoad, showReportDialog, flush, close, wrap, SDK_NAME, SDK_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return _sentry_types__WEBPACK_IMPORTED_MODULE_0__["Severity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _sentry_types__WEBPACK_IMPORTED_MODULE_0__["Status"]; });

/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["addBreadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["captureException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["captureEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["captureMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["configureScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setExtra"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setExtras"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["withScope"]; });

/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client */ "./node_modules/@sentry/browser/esm/client.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserClient", function() { return _client__WEBPACK_IMPORTED_MODULE_2__["BrowserClient"]; });

/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sdk */ "./node_modules/@sentry/browser/esm/sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultIntegrations", function() { return _sdk__WEBPACK_IMPORTED_MODULE_3__["defaultIntegrations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceLoad", function() { return _sdk__WEBPACK_IMPORTED_MODULE_3__["forceLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _sdk__WEBPACK_IMPORTED_MODULE_3__["init"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastEventId", function() { return _sdk__WEBPACK_IMPORTED_MODULE_3__["lastEventId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return _sdk__WEBPACK_IMPORTED_MODULE_3__["onLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showReportDialog", function() { return _sdk__WEBPACK_IMPORTED_MODULE_3__["showReportDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _sdk__WEBPACK_IMPORTED_MODULE_3__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "close", function() { return _sdk__WEBPACK_IMPORTED_MODULE_3__["close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _sdk__WEBPACK_IMPORTED_MODULE_3__["wrap"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./version */ "./node_modules/@sentry/browser/esm/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_NAME", function() { return _version__WEBPACK_IMPORTED_MODULE_4__["SDK_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return _version__WEBPACK_IMPORTED_MODULE_4__["SDK_VERSION"]; });






//# sourceMappingURL=exports.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/helpers.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/helpers.js ***!
  \*****************************************************/
/*! exports provided: shouldIgnoreOnError, ignoreNextOnError, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldIgnoreOnError", function() { return shouldIgnoreOnError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreNextOnError", function() { return ignoreNextOnError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");



var ignoreOnError = 0;
/**
 * @hidden
 */
function shouldIgnoreOnError() {
    return ignoreOnError > 0;
}
/**
 * @hidden
 */
function ignoreNextOnError() {
    // onerror should trigger before setTimeout
    ignoreOnError += 1;
    setTimeout(function () {
        ignoreOnError -= 1;
    });
}
/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap.
 * @returns The wrapped function.
 * @hidden
 */
function wrap(fn, options, before) {
    if (options === void 0) { options = {}; }
    // tslint:disable-next-line:strict-type-predicates
    if (typeof fn !== 'function') {
        return fn;
    }
    try {
        // We don't wanna wrap it twice
        if (fn.__sentry__) {
            return fn;
        }
        // If this has already been wrapped in the past, return that wrapped function
        if (fn.__sentry_wrapped__) {
            return fn.__sentry_wrapped__;
        }
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        // Bail on wrapping and return the function as-is (defers to window.onerror).
        return fn;
    }
    var sentryWrapped = function () {
        var args = Array.prototype.slice.call(arguments);
        // tslint:disable:no-unsafe-any
        try {
            // tslint:disable-next-line:strict-type-predicates
            if (before && typeof before === 'function') {
                before.apply(this, arguments);
            }
            var wrappedArguments = args.map(function (arg) { return wrap(arg, options); });
            if (fn.handleEvent) {
                // Attempt to invoke user-land function
                // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
                //       means the sentry.javascript SDK caught an error invoking your application code. This
                //       is expected behavior and NOT indicative of a bug with sentry.javascript.
                return fn.handleEvent.apply(this, wrappedArguments);
            }
            // Attempt to invoke user-land function
            // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
            //       means the sentry.javascript SDK caught an error invoking your application code. This
            //       is expected behavior and NOT indicative of a bug with sentry.javascript.
            return fn.apply(this, wrappedArguments);
            // tslint:enable:no-unsafe-any
        }
        catch (ex) {
            ignoreNextOnError();
            Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["withScope"])(function (scope) {
                scope.addEventProcessor(function (event) {
                    var processedEvent = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event);
                    if (options.mechanism) {
                        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionTypeValue"])(processedEvent, undefined, undefined);
                        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionMechanism"])(processedEvent, options.mechanism);
                    }
                    processedEvent.extra = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, processedEvent.extra, { arguments: args });
                    return processedEvent;
                });
                Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["captureException"])(ex);
            });
            throw ex;
        }
    };
    // Accessing some objects may throw
    // ref: https://github.com/getsentry/sentry-javascript/issues/1168
    try {
        for (var property in fn) {
            if (Object.prototype.hasOwnProperty.call(fn, property)) {
                sentryWrapped[property] = fn[property];
            }
        }
    }
    catch (_oO) { } // tslint:disable-line:no-empty
    fn.prototype = fn.prototype || {};
    sentryWrapped.prototype = fn.prototype;
    Object.defineProperty(fn, '__sentry_wrapped__', {
        enumerable: false,
        value: sentryWrapped,
    });
    // Signal that this function has been wrapped/filled already
    // for both debugging and to prevent it to being wrapped/filled twice
    Object.defineProperties(sentryWrapped, {
        __sentry__: {
            enumerable: false,
            value: true,
        },
        __sentry_original__: {
            enumerable: false,
            value: fn,
        },
    });
    // Restore original function name (not all browsers allow that)
    try {
        var descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, 'name');
        if (descriptor.configurable) {
            Object.defineProperty(sentryWrapped, 'name', {
                get: function () {
                    return fn.name;
                },
            });
        }
    }
    catch (_oO) {
        /*no-empty*/
    }
    return sentryWrapped;
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/index.js ***!
  \***************************************************/
/*! exports provided: Severity, Status, addGlobalEventProcessor, addBreadcrumb, captureException, captureEvent, captureMessage, configureScope, getHubFromCarrier, getCurrentHub, Hub, Scope, setContext, setExtra, setExtras, setTag, setTags, setUser, withScope, BrowserClient, defaultIntegrations, forceLoad, init, lastEventId, onLoad, showReportDialog, flush, close, wrap, SDK_NAME, SDK_VERSION, Integrations, Transports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Integrations", function() { return INTEGRATIONS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exports */ "./node_modules/@sentry/browser/esm/exports.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["Severity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["Status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["addBreadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["captureException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["captureEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["captureMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["configureScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setExtra"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setExtras"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["withScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserClient", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["BrowserClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultIntegrations", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["defaultIntegrations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceLoad", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["forceLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["init"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastEventId", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["lastEventId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["onLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showReportDialog", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["showReportDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "close", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["wrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_NAME", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["SDK_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["SDK_VERSION"]; });

/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/browser/esm/integrations/index.js");
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transports */ "./node_modules/@sentry/browser/esm/transports/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Transports", function() { return _transports__WEBPACK_IMPORTED_MODULE_5__; });






var windowIntegrations = {};
// This block is needed to add compatibility with the integrations packages when used with a CDN
// tslint:disable: no-unsafe-any
var _window = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getGlobalObject"])();
if (_window.Sentry && _window.Sentry.Integrations) {
    windowIntegrations = _window.Sentry.Integrations;
}
// tslint:enable: no-unsafe-any
var INTEGRATIONS = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, windowIntegrations, _sentry_core__WEBPACK_IMPORTED_MODULE_2__["Integrations"], _integrations__WEBPACK_IMPORTED_MODULE_4__);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js ***!
  \**********************************************************************/
/*! exports provided: Breadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return Breadcrumbs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");




/**
 * Default Breadcrumbs instrumentations
 * TODO: Deprecated - with v6, this will be renamed to `Instrument`
 */
var Breadcrumbs = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Breadcrumbs(options) {
        /**
         * @inheritDoc
         */
        this.name = Breadcrumbs.id;
        this._options = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ console: true, dom: true, fetch: true, history: true, sentry: true, xhr: true }, options);
    }
    /**
     * Creates breadcrumbs from console API calls
     */
    Breadcrumbs.prototype._consoleBreadcrumb = function (handlerData) {
        var breadcrumb = {
            category: 'console',
            data: {
                arguments: handlerData.args,
                logger: 'console',
            },
            level: _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Severity"].fromString(handlerData.level),
            message: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["safeJoin"])(handlerData.args, ' '),
        };
        if (handlerData.level === 'assert') {
            if (handlerData.args[0] === false) {
                breadcrumb.message = "Assertion failed: " + (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["safeJoin"])(handlerData.args.slice(1), ' ') || 'console.assert');
                breadcrumb.data.arguments = handlerData.args.slice(1);
            }
            else {
                // Don't capture a breadcrumb for passed assertions
                return;
            }
        }
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb(breadcrumb, {
            input: handlerData.args,
            level: handlerData.level,
        });
    };
    /**
     * Creates breadcrumbs from DOM API calls
     */
    Breadcrumbs.prototype._domBreadcrumb = function (handlerData) {
        var target;
        // Accessing event.target can throw (see getsentry/raven-js#838, #768)
        try {
            target = handlerData.event.target
                ? Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["htmlTreeAsString"])(handlerData.event.target)
                : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["htmlTreeAsString"])(handlerData.event);
        }
        catch (e) {
            target = '<unknown>';
        }
        if (target.length === 0) {
            return;
        }
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
            category: "ui." + handlerData.name,
            message: target,
        }, {
            event: handlerData.event,
            name: handlerData.name,
        });
    };
    /**
     * Creates breadcrumbs from XHR API calls
     */
    Breadcrumbs.prototype._xhrBreadcrumb = function (handlerData) {
        if (handlerData.endTimestamp) {
            // We only capture complete, non-sentry requests
            if (handlerData.xhr.__sentry_own_request__) {
                return;
            }
            Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
                category: 'xhr',
                data: handlerData.xhr.__sentry_xhr__,
                type: 'http',
            }, {
                xhr: handlerData.xhr,
            });
            return;
        }
        // We only capture issued sentry requests
        if (this._options.sentry && handlerData.xhr.__sentry_own_request__) {
            addSentryBreadcrumb(handlerData.args[0]);
        }
    };
    /**
     * Creates breadcrumbs from fetch API calls
     */
    Breadcrumbs.prototype._fetchBreadcrumb = function (handlerData) {
        // We only capture complete fetch requests
        if (!handlerData.endTimestamp) {
            return;
        }
        var client = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().getClient();
        var dsn = client && client.getDsn();
        if (this._options.sentry && dsn) {
            var filterUrl = new _sentry_core__WEBPACK_IMPORTED_MODULE_1__["API"](dsn).getStoreEndpoint();
            // if Sentry key appears in URL, don't capture it as a request
            // but rather as our own 'sentry' type breadcrumb
            if (filterUrl &&
                handlerData.fetchData.url.indexOf(filterUrl) !== -1 &&
                handlerData.fetchData.method === 'POST' &&
                handlerData.args[1] &&
                handlerData.args[1].body) {
                addSentryBreadcrumb(handlerData.args[1].body);
                return;
            }
        }
        if (handlerData.error) {
            Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
                category: 'fetch',
                data: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, handlerData.fetchData, { status_code: handlerData.response.status }),
                level: _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Severity"].Error,
                type: 'http',
            }, {
                data: handlerData.error,
                input: handlerData.args,
            });
        }
        else {
            Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
                category: 'fetch',
                data: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, handlerData.fetchData, { status_code: handlerData.response.status }),
                type: 'http',
            }, {
                input: handlerData.args,
                response: handlerData.response,
            });
        }
    };
    /**
     * Creates breadcrumbs from history API calls
     */
    Breadcrumbs.prototype._historyBreadcrumb = function (handlerData) {
        var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getGlobalObject"])();
        var from = handlerData.from;
        var to = handlerData.to;
        var parsedLoc = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(global.location.href);
        var parsedFrom = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(from);
        var parsedTo = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(to);
        // Initial pushState doesn't provide `from` information
        if (!parsedFrom.path) {
            parsedFrom = parsedLoc;
        }
        // Use only the path component of the URL if the URL matches the current
        // document (almost all the time when using pushState)
        if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
            // tslint:disable-next-line:no-parameter-reassignment
            to = parsedTo.relative;
        }
        if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
            // tslint:disable-next-line:no-parameter-reassignment
            from = parsedFrom.relative;
        }
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
            category: 'navigation',
            data: {
                from: from,
                to: to,
            },
        });
    };
    /**
     * Instrument browser built-ins w/ breadcrumb capturing
     *  - Console API
     *  - DOM API (click/typing)
     *  - XMLHttpRequest API
     *  - Fetch API
     *  - History API
     */
    Breadcrumbs.prototype.setupOnce = function () {
        var _this = this;
        if (this._options.console) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._consoleBreadcrumb.apply(_this, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args));
                },
                type: 'console',
            });
        }
        if (this._options.dom) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._domBreadcrumb.apply(_this, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args));
                },
                type: 'dom',
            });
        }
        if (this._options.xhr) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._xhrBreadcrumb.apply(_this, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args));
                },
                type: 'xhr',
            });
        }
        if (this._options.fetch) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._fetchBreadcrumb.apply(_this, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args));
                },
                type: 'fetch',
            });
        }
        if (this._options.history) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._historyBreadcrumb.apply(_this, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args));
                },
                type: 'history',
            });
        }
    };
    /**
     * @inheritDoc
     */
    Breadcrumbs.id = 'Breadcrumbs';
    return Breadcrumbs;
}());

/**
 * Create a breadcrumb of `sentry` from the events themselves
 */
function addSentryBreadcrumb(serializedData) {
    // There's always something that can go wrong with deserialization...
    try {
        var event_1 = JSON.parse(serializedData);
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
            category: "sentry." + (event_1.type === 'transaction' ? 'transaction' : 'event'),
            event_id: event_1.event_id,
            level: event_1.level || _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Severity"].fromString('error'),
            message: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getEventDescription"])(event_1),
        }, {
            event: event_1,
        });
    }
    catch (_oO) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].error('Error while adding sentry type breadcrumb');
    }
}
//# sourceMappingURL=breadcrumbs.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/globalhandlers.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/globalhandlers.js ***!
  \*************************************************************************/
/*! exports provided: GlobalHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalHandlers", function() { return GlobalHandlers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _eventbuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../eventbuilder */ "./node_modules/@sentry/browser/esm/eventbuilder.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./node_modules/@sentry/browser/esm/helpers.js");






/** Global handlers */
var GlobalHandlers = /** @class */ (function () {
    /** JSDoc */
    function GlobalHandlers(options) {
        /**
         * @inheritDoc
         */
        this.name = GlobalHandlers.id;
        /** JSDoc */
        this._onErrorHandlerInstalled = false;
        /** JSDoc */
        this._onUnhandledRejectionHandlerInstalled = false;
        this._options = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ onerror: true, onunhandledrejection: true }, options);
    }
    /**
     * @inheritDoc
     */
    GlobalHandlers.prototype.setupOnce = function () {
        Error.stackTraceLimit = 50;
        if (this._options.onerror) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].log('Global Handler attached: onerror');
            this._installGlobalOnErrorHandler();
        }
        if (this._options.onunhandledrejection) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].log('Global Handler attached: onunhandledrejection');
            this._installGlobalOnUnhandledRejectionHandler();
        }
    };
    /** JSDoc */
    GlobalHandlers.prototype._installGlobalOnErrorHandler = function () {
        var _this = this;
        if (this._onErrorHandlerInstalled) {
            return;
        }
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])({
            callback: function (data) {
                var error = data.error;
                var currentHub = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();
                var hasIntegration = currentHub.getIntegration(GlobalHandlers);
                var isFailedOwnDelivery = error && error.__sentry_own_request__ === true;
                if (!hasIntegration || Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["shouldIgnoreOnError"])() || isFailedOwnDelivery) {
                    return;
                }
                var client = currentHub.getClient();
                var event = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isPrimitive"])(error)
                    ? _this._eventFromIncompleteOnError(data.msg, data.url, data.line, data.column)
                    : _this._enhanceEventWithInitialFrame(Object(_eventbuilder__WEBPACK_IMPORTED_MODULE_4__["eventFromUnknownInput"])(error, undefined, {
                        attachStacktrace: client && client.getOptions().attachStacktrace,
                        rejection: false,
                    }), data.url, data.line, data.column);
                Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addExceptionMechanism"])(event, {
                    handled: false,
                    type: 'onerror',
                });
                currentHub.captureEvent(event, {
                    originalException: error,
                });
            },
            type: 'error',
        });
        this._onErrorHandlerInstalled = true;
    };
    /** JSDoc */
    GlobalHandlers.prototype._installGlobalOnUnhandledRejectionHandler = function () {
        var _this = this;
        if (this._onUnhandledRejectionHandlerInstalled) {
            return;
        }
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])({
            callback: function (e) {
                var error = e;
                // dig the object of the rejection out of known event types
                try {
                    // PromiseRejectionEvents store the object of the rejection under 'reason'
                    // see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
                    if ('reason' in e) {
                        error = e.reason;
                    }
                    // something, somewhere, (likely a browser extension) effectively casts PromiseRejectionEvents
                    // to CustomEvents, moving the `promise` and `reason` attributes of the PRE into
                    // the CustomEvent's `detail` attribute, since they're not part of CustomEvent's spec
                    // see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent and
                    // https://github.com/getsentry/sentry-javascript/issues/2380
                    else if ('detail' in e && 'reason' in e.detail) {
                        error = e.detail.reason;
                    }
                }
                catch (_oO) {
                    // no-empty
                }
                var currentHub = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();
                var hasIntegration = currentHub.getIntegration(GlobalHandlers);
                var isFailedOwnDelivery = error && error.__sentry_own_request__ === true;
                if (!hasIntegration || Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["shouldIgnoreOnError"])() || isFailedOwnDelivery) {
                    return true;
                }
                var client = currentHub.getClient();
                var event = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isPrimitive"])(error)
                    ? _this._eventFromIncompleteRejection(error)
                    : Object(_eventbuilder__WEBPACK_IMPORTED_MODULE_4__["eventFromUnknownInput"])(error, undefined, {
                        attachStacktrace: client && client.getOptions().attachStacktrace,
                        rejection: true,
                    });
                event.level = _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Severity"].Error;
                Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addExceptionMechanism"])(event, {
                    handled: false,
                    type: 'onunhandledrejection',
                });
                currentHub.captureEvent(event, {
                    originalException: error,
                });
                return;
            },
            type: 'unhandledrejection',
        });
        this._onUnhandledRejectionHandlerInstalled = true;
    };
    /**
     * This function creates a stack from an old, error-less onerror handler.
     */
    GlobalHandlers.prototype._eventFromIncompleteOnError = function (msg, url, line, column) {
        var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        // If 'message' is ErrorEvent, get real message from inside
        var message = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isErrorEvent"])(msg) ? msg.message : msg;
        var name;
        if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(message)) {
            var groups = message.match(ERROR_TYPES_RE);
            if (groups) {
                name = groups[1];
                message = groups[2];
            }
        }
        var event = {
            exception: {
                values: [
                    {
                        type: name || 'Error',
                        value: message,
                    },
                ],
            },
        };
        return this._enhanceEventWithInitialFrame(event, url, line, column);
    };
    /**
     * This function creates an Event from an TraceKitStackTrace that has part of it missing.
     */
    GlobalHandlers.prototype._eventFromIncompleteRejection = function (error) {
        return {
            exception: {
                values: [
                    {
                        type: 'UnhandledRejection',
                        value: "Non-Error promise rejection captured with value: " + error,
                    },
                ],
            },
        };
    };
    /** JSDoc */
    GlobalHandlers.prototype._enhanceEventWithInitialFrame = function (event, url, line, column) {
        event.exception = event.exception || {};
        event.exception.values = event.exception.values || [];
        event.exception.values[0] = event.exception.values[0] || {};
        event.exception.values[0].stacktrace = event.exception.values[0].stacktrace || {};
        event.exception.values[0].stacktrace.frames = event.exception.values[0].stacktrace.frames || [];
        var colno = isNaN(parseInt(column, 10)) ? undefined : column;
        var lineno = isNaN(parseInt(line, 10)) ? undefined : line;
        var filename = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(url) && url.length > 0 ? url : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getLocationHref"])();
        if (event.exception.values[0].stacktrace.frames.length === 0) {
            event.exception.values[0].stacktrace.frames.push({
                colno: colno,
                filename: filename,
                function: '?',
                in_app: true,
                lineno: lineno,
            });
        }
        return event;
    };
    /**
     * @inheritDoc
     */
    GlobalHandlers.id = 'GlobalHandlers';
    return GlobalHandlers;
}());

//# sourceMappingURL=globalhandlers.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/index.js ***!
  \****************************************************************/
/*! exports provided: GlobalHandlers, TryCatch, Breadcrumbs, LinkedErrors, UserAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalhandlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalhandlers */ "./node_modules/@sentry/browser/esm/integrations/globalhandlers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalHandlers", function() { return _globalhandlers__WEBPACK_IMPORTED_MODULE_0__["GlobalHandlers"]; });

/* harmony import */ var _trycatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trycatch */ "./node_modules/@sentry/browser/esm/integrations/trycatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TryCatch", function() { return _trycatch__WEBPACK_IMPORTED_MODULE_1__["TryCatch"]; });

/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumbs */ "./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["Breadcrumbs"]; });

/* harmony import */ var _linkederrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linkederrors */ "./node_modules/@sentry/browser/esm/integrations/linkederrors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedErrors", function() { return _linkederrors__WEBPACK_IMPORTED_MODULE_3__["LinkedErrors"]; });

/* harmony import */ var _useragent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useragent */ "./node_modules/@sentry/browser/esm/integrations/useragent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAgent", function() { return _useragent__WEBPACK_IMPORTED_MODULE_4__["UserAgent"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/linkederrors.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/linkederrors.js ***!
  \***********************************************************************/
/*! exports provided: LinkedErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedErrors", function() { return LinkedErrors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parsers */ "./node_modules/@sentry/browser/esm/parsers.js");
/* harmony import */ var _tracekit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tracekit */ "./node_modules/@sentry/browser/esm/tracekit.js");





var DEFAULT_KEY = 'cause';
var DEFAULT_LIMIT = 5;
/** Adds SDK info to an event. */
var LinkedErrors = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function LinkedErrors(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = LinkedErrors.id;
        this._key = options.key || DEFAULT_KEY;
        this._limit = options.limit || DEFAULT_LIMIT;
    }
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype.setupOnce = function () {
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"])(function (event, hint) {
            var self = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().getIntegration(LinkedErrors);
            if (self) {
                return self._handler(event, hint);
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype._handler = function (event, hint) {
        if (!event.exception || !event.exception.values || !hint || !Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isInstanceOf"])(hint.originalException, Error)) {
            return event;
        }
        var linkedErrors = this._walkErrorTree(hint.originalException, this._key);
        event.exception.values = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](linkedErrors, event.exception.values);
        return event;
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype._walkErrorTree = function (error, key, stack) {
        if (stack === void 0) { stack = []; }
        if (!Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isInstanceOf"])(error[key], Error) || stack.length + 1 >= this._limit) {
            return stack;
        }
        var stacktrace = Object(_tracekit__WEBPACK_IMPORTED_MODULE_4__["computeStackTrace"])(error[key]);
        var exception = Object(_parsers__WEBPACK_IMPORTED_MODULE_3__["exceptionFromStacktrace"])(stacktrace);
        return this._walkErrorTree(error[key], key, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([exception], stack));
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.id = 'LinkedErrors';
    return LinkedErrors;
}());

//# sourceMappingURL=linkederrors.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/trycatch.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/trycatch.js ***!
  \*******************************************************************/
/*! exports provided: TryCatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryCatch", function() { return TryCatch; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./node_modules/@sentry/browser/esm/helpers.js");


/** Wrap timer functions and event targets to catch errors and provide better meta data */
var TryCatch = /** @class */ (function () {
    function TryCatch() {
        /** JSDoc */
        this._ignoreOnError = 0;
        /**
         * @inheritDoc
         */
        this.name = TryCatch.id;
    }
    /** JSDoc */
    TryCatch.prototype._wrapTimeFunction = function (original) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var originalCallback = args[0];
            args[0] = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["wrap"])(originalCallback, {
                mechanism: {
                    data: { function: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["getFunctionName"])(original) },
                    handled: true,
                    type: 'instrument',
                },
            });
            return original.apply(this, args);
        };
    };
    /** JSDoc */
    TryCatch.prototype._wrapRAF = function (original) {
        return function (callback) {
            return original(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["wrap"])(callback, {
                mechanism: {
                    data: {
                        function: 'requestAnimationFrame',
                        handler: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["getFunctionName"])(original),
                    },
                    handled: true,
                    type: 'instrument',
                },
            }));
        };
    };
    /** JSDoc */
    TryCatch.prototype._wrapEventTarget = function (target) {
        var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"])();
        var proto = global[target] && global[target].prototype;
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["fill"])(proto, 'addEventListener', function (original) {
            return function (eventName, fn, options) {
                try {
                    // tslint:disable-next-line:no-unbound-method strict-type-predicates
                    if (typeof fn.handleEvent === 'function') {
                        fn.handleEvent = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["wrap"])(fn.handleEvent.bind(fn), {
                            mechanism: {
                                data: {
                                    function: 'handleEvent',
                                    handler: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["getFunctionName"])(fn),
                                    target: target,
                                },
                                handled: true,
                                type: 'instrument',
                            },
                        });
                    }
                }
                catch (err) {
                    // can sometimes get 'Permission denied to access property "handle Event'
                }
                return original.call(this, eventName, Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["wrap"])(fn, {
                    mechanism: {
                        data: {
                            function: 'addEventListener',
                            handler: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["getFunctionName"])(fn),
                            target: target,
                        },
                        handled: true,
                        type: 'instrument',
                    },
                }), options);
            };
        });
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["fill"])(proto, 'removeEventListener', function (original) {
            return function (eventName, fn, options) {
                var callback = fn;
                try {
                    callback = callback && (callback.__sentry_wrapped__ || callback);
                }
                catch (e) {
                    // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
                }
                return original.call(this, eventName, callback, options);
            };
        });
    };
    /** JSDoc */
    TryCatch.prototype._wrapXHR = function (originalSend) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var xhr = this; // tslint:disable-line:no-this-assignment
            var xmlHttpRequestProps = ['onload', 'onerror', 'onprogress', 'onreadystatechange'];
            xmlHttpRequestProps.forEach(function (prop) {
                if (prop in xhr && typeof xhr[prop] === 'function') {
                    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["fill"])(xhr, prop, function (original) {
                        var wrapOptions = {
                            mechanism: {
                                data: {
                                    function: prop,
                                    handler: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["getFunctionName"])(original),
                                },
                                handled: true,
                                type: 'instrument',
                            },
                        };
                        // If Instrument integration has been called before TryCatch, get the name of original function
                        if (original.__sentry_original__) {
                            wrapOptions.mechanism.data.handler = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["getFunctionName"])(original.__sentry_original__);
                        }
                        // Otherwise wrap directly
                        return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["wrap"])(original, wrapOptions);
                    });
                }
            });
            return originalSend.apply(this, args);
        };
    };
    /**
     * Wrap timer functions and event targets to catch errors
     * and provide better metadata.
     */
    TryCatch.prototype.setupOnce = function () {
        this._ignoreOnError = this._ignoreOnError;
        var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"])();
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["fill"])(global, 'setTimeout', this._wrapTimeFunction.bind(this));
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["fill"])(global, 'setInterval', this._wrapTimeFunction.bind(this));
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["fill"])(global, 'requestAnimationFrame', this._wrapRAF.bind(this));
        if ('XMLHttpRequest' in global) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["fill"])(XMLHttpRequest.prototype, 'send', this._wrapXHR.bind(this));
        }
        [
            'EventTarget',
            'Window',
            'Node',
            'ApplicationCache',
            'AudioTrackList',
            'ChannelMergerNode',
            'CryptoOperation',
            'EventSource',
            'FileReader',
            'HTMLUnknownElement',
            'IDBDatabase',
            'IDBRequest',
            'IDBTransaction',
            'KeyOperation',
            'MediaController',
            'MessagePort',
            'ModalWindow',
            'Notification',
            'SVGElementInstance',
            'Screen',
            'TextTrack',
            'TextTrackCue',
            'TextTrackList',
            'WebSocket',
            'WebSocketWorker',
            'Worker',
            'XMLHttpRequest',
            'XMLHttpRequestEventTarget',
            'XMLHttpRequestUpload',
        ].forEach(this._wrapEventTarget.bind(this));
    };
    /**
     * @inheritDoc
     */
    TryCatch.id = 'TryCatch';
    return TryCatch;
}());

//# sourceMappingURL=trycatch.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/useragent.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/useragent.js ***!
  \********************************************************************/
/*! exports provided: UserAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAgent", function() { return UserAgent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");



var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getGlobalObject"])();
/** UserAgent */
var UserAgent = /** @class */ (function () {
    function UserAgent() {
        /**
         * @inheritDoc
         */
        this.name = UserAgent.id;
    }
    /**
     * @inheritDoc
     */
    UserAgent.prototype.setupOnce = function () {
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"])(function (event) {
            if (Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().getIntegration(UserAgent)) {
                if (!global.navigator || !global.location) {
                    return event;
                }
                // Request Interface: https://docs.sentry.io/development/sdk-dev/event-payloads/request/
                var request = event.request || {};
                request.url = request.url || global.location.href;
                request.headers = request.headers || {};
                request.headers['User-Agent'] = global.navigator.userAgent;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event, { request: request });
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    UserAgent.id = 'UserAgent';
    return UserAgent;
}());

//# sourceMappingURL=useragent.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/parsers.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/parsers.js ***!
  \*****************************************************/
/*! exports provided: exceptionFromStacktrace, eventFromPlainObject, eventFromStacktrace, prepareFramesForEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exceptionFromStacktrace", function() { return exceptionFromStacktrace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromPlainObject", function() { return eventFromPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromStacktrace", function() { return eventFromStacktrace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareFramesForEvent", function() { return prepareFramesForEvent; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _tracekit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracekit */ "./node_modules/@sentry/browser/esm/tracekit.js");


var STACKTRACE_LIMIT = 50;
/**
 * This function creates an exception from an TraceKitStackTrace
 * @param stacktrace TraceKitStackTrace that will be converted to an exception
 * @hidden
 */
function exceptionFromStacktrace(stacktrace) {
    var frames = prepareFramesForEvent(stacktrace.stack);
    var exception = {
        type: stacktrace.name,
        value: stacktrace.message,
    };
    if (frames && frames.length) {
        exception.stacktrace = { frames: frames };
    }
    // tslint:disable-next-line:strict-type-predicates
    if (exception.type === undefined && exception.value === '') {
        exception.value = 'Unrecoverable error caught';
    }
    return exception;
}
/**
 * @hidden
 */
function eventFromPlainObject(exception, syntheticException, rejection) {
    var event = {
        exception: {
            values: [
                {
                    type: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["isEvent"])(exception) ? exception.constructor.name : rejection ? 'UnhandledRejection' : 'Error',
                    value: "Non-Error " + (rejection ? 'promise rejection' : 'exception') + " captured with keys: " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["extractExceptionKeysForMessage"])(exception),
                },
            ],
        },
        extra: {
            __serialized__: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["normalizeToSize"])(exception),
        },
    };
    if (syntheticException) {
        var stacktrace = Object(_tracekit__WEBPACK_IMPORTED_MODULE_1__["computeStackTrace"])(syntheticException);
        var frames_1 = prepareFramesForEvent(stacktrace.stack);
        event.stacktrace = {
            frames: frames_1,
        };
    }
    return event;
}
/**
 * @hidden
 */
function eventFromStacktrace(stacktrace) {
    var exception = exceptionFromStacktrace(stacktrace);
    return {
        exception: {
            values: [exception],
        },
    };
}
/**
 * @hidden
 */
function prepareFramesForEvent(stack) {
    if (!stack || !stack.length) {
        return [];
    }
    var localStack = stack;
    var firstFrameFunction = localStack[0].func || '';
    var lastFrameFunction = localStack[localStack.length - 1].func || '';
    // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
    if (firstFrameFunction.indexOf('captureMessage') !== -1 || firstFrameFunction.indexOf('captureException') !== -1) {
        localStack = localStack.slice(1);
    }
    // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
    if (lastFrameFunction.indexOf('sentryWrapped') !== -1) {
        localStack = localStack.slice(0, -1);
    }
    // The frame where the crash happened, should be the last entry in the array
    return localStack
        .map(function (frame) { return ({
        colno: frame.column === null ? undefined : frame.column,
        filename: frame.url || localStack[0].url,
        function: frame.func || '?',
        in_app: true,
        lineno: frame.line === null ? undefined : frame.line,
    }); })
        .slice(0, STACKTRACE_LIMIT)
        .reverse();
}
//# sourceMappingURL=parsers.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/sdk.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/sdk.js ***!
  \*************************************************/
/*! exports provided: defaultIntegrations, init, showReportDialog, lastEventId, forceLoad, onLoad, flush, close, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultIntegrations", function() { return defaultIntegrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showReportDialog", function() { return showReportDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastEventId", function() { return lastEventId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceLoad", function() { return forceLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return onLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client */ "./node_modules/@sentry/browser/esm/client.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./node_modules/@sentry/browser/esm/helpers.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/browser/esm/integrations/index.js");





var defaultIntegrations = [
    new _sentry_core__WEBPACK_IMPORTED_MODULE_0__["Integrations"].InboundFilters(),
    new _sentry_core__WEBPACK_IMPORTED_MODULE_0__["Integrations"].FunctionToString(),
    new _integrations__WEBPACK_IMPORTED_MODULE_4__["TryCatch"](),
    new _integrations__WEBPACK_IMPORTED_MODULE_4__["Breadcrumbs"](),
    new _integrations__WEBPACK_IMPORTED_MODULE_4__["GlobalHandlers"](),
    new _integrations__WEBPACK_IMPORTED_MODULE_4__["LinkedErrors"](),
    new _integrations__WEBPACK_IMPORTED_MODULE_4__["UserAgent"](),
];
/**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 *
 * ```
 *
 * import { init } from '@sentry/browser';
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { configureScope } from '@sentry/browser';
 * configureScope((scope: Scope) => {
 *   scope.setExtra({ battery: 0.7 });
 *   scope.setTag({ user_mode: 'admin' });
 *   scope.setUser({ id: '4711' });
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 * ```
 *
 * @example
 *
 * ```
 *
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 * ```
 *
 * @see {@link BrowserOptions} for documentation on configuration options.
 */
function init(options) {
    if (options === void 0) { options = {}; }
    if (options.defaultIntegrations === undefined) {
        options.defaultIntegrations = defaultIntegrations;
    }
    if (options.release === undefined) {
        var window_1 = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
        // This supports the variable that sentry-webpack-plugin injects
        if (window_1.SENTRY_RELEASE && window_1.SENTRY_RELEASE.id) {
            options.release = window_1.SENTRY_RELEASE.id;
        }
    }
    Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["initAndBind"])(_client__WEBPACK_IMPORTED_MODULE_2__["BrowserClient"], options);
}
/**
 * Present the user with a report dialog.
 *
 * @param options Everything is optional, we try to fetch all info need from the global scope.
 */
function showReportDialog(options) {
    if (options === void 0) { options = {}; }
    if (!options.eventId) {
        options.eventId = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])().lastEventId();
    }
    var client = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])().getClient();
    if (client) {
        client.showReportDialog(options);
    }
}
/**
 * This is the getter for lastEventId.
 *
 * @returns The last event id of a captured event.
 */
function lastEventId() {
    return Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])().lastEventId();
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */
function forceLoad() {
    // Noop
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */
function onLoad(callback) {
    callback();
}
/**
 * A promise that resolves when all current events have been sent.
 * If you provide a timeout and the queue takes longer to drain the promise returns false.
 *
 * @param timeout Maximum time in ms the client should wait.
 */
function flush(timeout) {
    var client = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])().getClient();
    if (client) {
        return client.flush(timeout);
    }
    return _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].reject(false);
}
/**
 * A promise that resolves when all current events have been sent.
 * If you provide a timeout and the queue takes longer to drain the promise returns false.
 *
 * @param timeout Maximum time in ms the client should wait.
 */
function close(timeout) {
    var client = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])().getClient();
    if (client) {
        return client.close(timeout);
    }
    return _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].reject(false);
}
/**
 * Wrap code within a try/catch block so the SDK is able to capture errors.
 *
 * @param fn A function to wrap.
 *
 * @returns The result of wrapped function call.
 */
function wrap(fn) {
    return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["wrap"])(fn)(); // tslint:disable-line:no-unsafe-any
}
//# sourceMappingURL=sdk.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/tracekit.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/tracekit.js ***!
  \******************************************************/
/*! exports provided: computeStackTrace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStackTrace", function() { return computeStackTrace; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// tslint:disable:object-literal-sort-keys

// global reference to slice
var UNKNOWN_FUNCTION = '?';
// Chromium based browsers: Chrome, Brave, new Opera, new Edge
var chrome = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
// gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
// generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
// We need this specific case for now because we want no other regex to match.
var gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i;
var winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
var geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/;
/** JSDoc */
function computeStackTrace(ex) {
    // tslint:disable:no-unsafe-any
    var stack = null;
    var popSize = ex && ex.framesToPop;
    try {
        // This must be tried first because Opera 10 *destroys*
        // its stacktrace property if you try to access the stack
        // property first!!
        stack = computeStackTraceFromStacktraceProp(ex);
        if (stack) {
            return popFrames(stack, popSize);
        }
    }
    catch (e) {
        // no-empty
    }
    try {
        stack = computeStackTraceFromStackProp(ex);
        if (stack) {
            return popFrames(stack, popSize);
        }
    }
    catch (e) {
        // no-empty
    }
    return {
        message: extractMessage(ex),
        name: ex && ex.name,
        stack: [],
        failed: true,
    };
}
/** JSDoc */
// tslint:disable-next-line:cyclomatic-complexity
function computeStackTraceFromStackProp(ex) {
    // tslint:disable:no-conditional-assignment
    if (!ex || !ex.stack) {
        return null;
    }
    var stack = [];
    var lines = ex.stack.split('\n');
    var isEval;
    var submatch;
    var parts;
    var element;
    for (var i = 0; i < lines.length; ++i) {
        if ((parts = chrome.exec(lines[i]))) {
            var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
            isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
            if (isEval && (submatch = chromeEval.exec(parts[2]))) {
                // throw out eval line/column and use top-most line/column number
                parts[2] = submatch[1]; // url
                parts[3] = submatch[2]; // line
                parts[4] = submatch[3]; // column
            }
            element = {
                // working with the regexp above is super painful. it is quite a hack, but just stripping the `address at `
                // prefix here seems like the quickest solution for now.
                url: parts[2] && parts[2].indexOf('address at ') === 0 ? parts[2].substr('address at '.length) : parts[2],
                func: parts[1] || UNKNOWN_FUNCTION,
                args: isNative ? [parts[2]] : [],
                line: parts[3] ? +parts[3] : null,
                column: parts[4] ? +parts[4] : null,
            };
        }
        else if ((parts = winjs.exec(lines[i]))) {
            element = {
                url: parts[2],
                func: parts[1] || UNKNOWN_FUNCTION,
                args: [],
                line: +parts[3],
                column: parts[4] ? +parts[4] : null,
            };
        }
        else if ((parts = gecko.exec(lines[i]))) {
            isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
            if (isEval && (submatch = geckoEval.exec(parts[3]))) {
                // throw out eval line/column and use top-most line number
                parts[1] = parts[1] || "eval";
                parts[3] = submatch[1];
                parts[4] = submatch[2];
                parts[5] = ''; // no column when eval
            }
            else if (i === 0 && !parts[5] && ex.columnNumber !== void 0) {
                // FireFox uses this awesome columnNumber property for its top frame
                // Also note, Firefox's column number is 0-based and everything else expects 1-based,
                // so adding 1
                // NOTE: this hack doesn't work if top-most frame is eval
                stack[0].column = ex.columnNumber + 1;
            }
            element = {
                url: parts[3],
                func: parts[1] || UNKNOWN_FUNCTION,
                args: parts[2] ? parts[2].split(',') : [],
                line: parts[4] ? +parts[4] : null,
                column: parts[5] ? +parts[5] : null,
            };
        }
        else {
            continue;
        }
        if (!element.func && element.line) {
            element.func = UNKNOWN_FUNCTION;
        }
        stack.push(element);
    }
    if (!stack.length) {
        return null;
    }
    return {
        message: extractMessage(ex),
        name: ex.name,
        stack: stack,
    };
}
/** JSDoc */
function computeStackTraceFromStacktraceProp(ex) {
    if (!ex || !ex.stacktrace) {
        return null;
    }
    // Access and store the stacktrace property before doing ANYTHING
    // else to it because Opera is not very good at providing it
    // reliably in other circumstances.
    var stacktrace = ex.stacktrace;
    var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
    var opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i;
    var lines = stacktrace.split('\n');
    var stack = [];
    var parts;
    for (var line = 0; line < lines.length; line += 2) {
        // tslint:disable:no-conditional-assignment
        var element = null;
        if ((parts = opera10Regex.exec(lines[line]))) {
            element = {
                url: parts[2],
                func: parts[3],
                args: [],
                line: +parts[1],
                column: null,
            };
        }
        else if ((parts = opera11Regex.exec(lines[line]))) {
            element = {
                url: parts[6],
                func: parts[3] || parts[4],
                args: parts[5] ? parts[5].split(',') : [],
                line: +parts[1],
                column: +parts[2],
            };
        }
        if (element) {
            if (!element.func && element.line) {
                element.func = UNKNOWN_FUNCTION;
            }
            stack.push(element);
        }
    }
    if (!stack.length) {
        return null;
    }
    return {
        message: extractMessage(ex),
        name: ex.name,
        stack: stack,
    };
}
/** Remove N number of frames from the stack */
function popFrames(stacktrace, popSize) {
    try {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, stacktrace, { stack: stacktrace.stack.slice(popSize) });
    }
    catch (e) {
        return stacktrace;
    }
}
/**
 * There are cases where stacktrace.message is an Event object
 * https://github.com/getsentry/sentry-javascript/issues/1949
 * In this specific case we try to extract stacktrace.message.error.message
 */
function extractMessage(ex) {
    var message = ex && ex.message;
    if (!message) {
        return 'No error message';
    }
    if (message.error && typeof message.error.message === 'string') {
        return message.error.message;
    }
    return message;
}
//# sourceMappingURL=tracekit.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/base.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/base.js ***!
  \*************************************************************/
/*! exports provided: BaseTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTransport", function() { return BaseTransport; });
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");


/** Base Transport class implementation */
var BaseTransport = /** @class */ (function () {
    function BaseTransport(options) {
        this.options = options;
        /** A simple buffer holding all requests. */
        this._buffer = new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["PromiseBuffer"](30);
        this.url = new _sentry_core__WEBPACK_IMPORTED_MODULE_0__["API"](this.options.dsn).getStoreEndpointWithUrlEncodedAuth();
    }
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.sendEvent = function (_) {
        throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SentryError"]('Transport Class has to implement `sendEvent` method');
    };
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.close = function (timeout) {
        return this._buffer.drain(timeout);
    };
    return BaseTransport;
}());

//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/fetch.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/fetch.js ***!
  \**************************************************************/
/*! exports provided: FetchTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchTransport", function() { return FetchTransport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./node_modules/@sentry/browser/esm/transports/base.js");




var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getGlobalObject"])();
/** `fetch` based transport */
var FetchTransport = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FetchTransport, _super);
    function FetchTransport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Locks transport after receiving 429 response */
        _this._disabledUntil = new Date(Date.now());
        return _this;
    }
    /**
     * @inheritDoc
     */
    FetchTransport.prototype.sendEvent = function (event) {
        var _this = this;
        if (new Date(Date.now()) < this._disabledUntil) {
            return Promise.reject({
                event: event,
                reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                status: 429,
            });
        }
        var defaultOptions = {
            body: JSON.stringify(event),
            method: 'POST',
            // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
            // https://caniuse.com/#feat=referrer-policy
            // It doesn't. And it throw exception instead of ignoring this parameter...
            // REF: https://github.com/getsentry/raven-js/issues/1233
            referrerPolicy: (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["supportsReferrerPolicy"])() ? 'origin' : ''),
        };
        if (this.options.headers !== undefined) {
            defaultOptions.headers = this.options.headers;
        }
        return this._buffer.add(new _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SyncPromise"](function (resolve, reject) {
            global
                .fetch(_this.url, defaultOptions)
                .then(function (response) {
                var status = _sentry_types__WEBPACK_IMPORTED_MODULE_1__["Status"].fromHttpCode(response.status);
                if (status === _sentry_types__WEBPACK_IMPORTED_MODULE_1__["Status"].Success) {
                    resolve({ status: status });
                    return;
                }
                if (status === _sentry_types__WEBPACK_IMPORTED_MODULE_1__["Status"].RateLimit) {
                    var now = Date.now();
                    _this._disabledUntil = new Date(now + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["parseRetryAfterHeader"])(now, response.headers.get('Retry-After')));
                    _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Too many requests, backing off till: " + _this._disabledUntil);
                }
                reject(response);
            })
                .catch(reject);
        }));
    };
    return FetchTransport;
}(_base__WEBPACK_IMPORTED_MODULE_3__["BaseTransport"]));

//# sourceMappingURL=fetch.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/index.js ***!
  \**************************************************************/
/*! exports provided: BaseTransport, FetchTransport, XHRTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@sentry/browser/esm/transports/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseTransport", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["BaseTransport"]; });

/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "./node_modules/@sentry/browser/esm/transports/fetch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchTransport", function() { return _fetch__WEBPACK_IMPORTED_MODULE_1__["FetchTransport"]; });

/* harmony import */ var _xhr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xhr */ "./node_modules/@sentry/browser/esm/transports/xhr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XHRTransport", function() { return _xhr__WEBPACK_IMPORTED_MODULE_2__["XHRTransport"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/xhr.js":
/*!************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/xhr.js ***!
  \************************************************************/
/*! exports provided: XHRTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRTransport", function() { return XHRTransport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./node_modules/@sentry/browser/esm/transports/base.js");




/** `XHR` based transport */
var XHRTransport = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](XHRTransport, _super);
    function XHRTransport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Locks transport after receiving 429 response */
        _this._disabledUntil = new Date(Date.now());
        return _this;
    }
    /**
     * @inheritDoc
     */
    XHRTransport.prototype.sendEvent = function (event) {
        var _this = this;
        if (new Date(Date.now()) < this._disabledUntil) {
            return Promise.reject({
                event: event,
                reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                status: 429,
            });
        }
        return this._buffer.add(new _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SyncPromise"](function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (request.readyState !== 4) {
                    return;
                }
                var status = _sentry_types__WEBPACK_IMPORTED_MODULE_1__["Status"].fromHttpCode(request.status);
                if (status === _sentry_types__WEBPACK_IMPORTED_MODULE_1__["Status"].Success) {
                    resolve({ status: status });
                    return;
                }
                if (status === _sentry_types__WEBPACK_IMPORTED_MODULE_1__["Status"].RateLimit) {
                    var now = Date.now();
                    _this._disabledUntil = new Date(now + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["parseRetryAfterHeader"])(now, request.getResponseHeader('Retry-After')));
                    _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Too many requests, backing off till: " + _this._disabledUntil);
                }
                reject(request);
            };
            request.open('POST', _this.url);
            for (var header in _this.options.headers) {
                if (_this.options.headers.hasOwnProperty(header)) {
                    request.setRequestHeader(header, _this.options.headers[header]);
                }
            }
            request.send(JSON.stringify(event));
        }));
    };
    return XHRTransport;
}(_base__WEBPACK_IMPORTED_MODULE_3__["BaseTransport"]));

//# sourceMappingURL=xhr.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/version.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/version.js ***!
  \*****************************************************/
/*! exports provided: SDK_NAME, SDK_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDK_NAME", function() { return SDK_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return SDK_VERSION; });
var SDK_NAME = 'sentry.javascript.browser';
var SDK_VERSION = '5.15.4';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/api.js":
/*!**********************************************!*\
  !*** ./node_modules/@sentry/core/esm/api.js ***!
  \**********************************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

var SENTRY_API_VERSION = '7';
/** Helper class to provide urls to different Sentry endpoints. */
var API = /** @class */ (function () {
    /** Create a new instance of API */
    function API(dsn) {
        this.dsn = dsn;
        this._dsnObject = new _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["Dsn"](dsn);
    }
    /** Returns the Dsn object. */
    API.prototype.getDsn = function () {
        return this._dsnObject;
    };
    /** Returns a string with auth headers in the url to the store endpoint. */
    API.prototype.getStoreEndpoint = function () {
        return "" + this._getBaseUrl() + this.getStoreEndpointPath();
    };
    /** Returns the store endpoint with auth added in url encoded. */
    API.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
        var dsn = this._dsnObject;
        var auth = {
            sentry_key: dsn.user,
            sentry_version: SENTRY_API_VERSION,
        };
        // Auth is intentionally sent as part of query string (NOT as custom HTTP header)
        // to avoid preflight CORS requests
        return this.getStoreEndpoint() + "?" + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["urlEncode"])(auth);
    };
    /** Returns the base path of the url including the port. */
    API.prototype._getBaseUrl = function () {
        var dsn = this._dsnObject;
        var protocol = dsn.protocol ? dsn.protocol + ":" : '';
        var port = dsn.port ? ":" + dsn.port : '';
        return protocol + "//" + dsn.host + port;
    };
    /** Returns only the path component for the store endpoint. */
    API.prototype.getStoreEndpointPath = function () {
        var dsn = this._dsnObject;
        return (dsn.path ? "/" + dsn.path : '') + "/api/" + dsn.projectId + "/store/";
    };
    /** Returns an object that can be used in request headers. */
    API.prototype.getRequestHeaders = function (clientName, clientVersion) {
        var dsn = this._dsnObject;
        var header = ["Sentry sentry_version=" + SENTRY_API_VERSION];
        header.push("sentry_client=" + clientName + "/" + clientVersion);
        header.push("sentry_key=" + dsn.user);
        if (dsn.pass) {
            header.push("sentry_secret=" + dsn.pass);
        }
        return {
            'Content-Type': 'application/json',
            'X-Sentry-Auth': header.join(', '),
        };
    };
    /** Returns the url to the report dialog endpoint. */
    API.prototype.getReportDialogEndpoint = function (dialogOptions) {
        if (dialogOptions === void 0) { dialogOptions = {}; }
        var dsn = this._dsnObject;
        var endpoint = "" + this._getBaseUrl() + (dsn.path ? "/" + dsn.path : '') + "/api/embed/error-page/";
        var encodedOptions = [];
        encodedOptions.push("dsn=" + dsn.toString());
        for (var key in dialogOptions) {
            if (key === 'user') {
                if (!dialogOptions.user) {
                    continue;
                }
                if (dialogOptions.user.name) {
                    encodedOptions.push("name=" + encodeURIComponent(dialogOptions.user.name));
                }
                if (dialogOptions.user.email) {
                    encodedOptions.push("email=" + encodeURIComponent(dialogOptions.user.email));
                }
            }
            else {
                encodedOptions.push(encodeURIComponent(key) + "=" + encodeURIComponent(dialogOptions[key]));
            }
        }
        if (encodedOptions.length) {
            return endpoint + "?" + encodedOptions.join('&');
        }
        return endpoint;
    };
    return API;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/basebackend.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/core/esm/basebackend.js ***!
  \******************************************************/
/*! exports provided: BaseBackend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseBackend", function() { return BaseBackend; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _transports_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transports/noop */ "./node_modules/@sentry/core/esm/transports/noop.js");


/**
 * This is the base implemention of a Backend.
 * @hidden
 */
var BaseBackend = /** @class */ (function () {
    /** Creates a new backend instance. */
    function BaseBackend(options) {
        this._options = options;
        if (!this._options.dsn) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].warn('No DSN provided, backend will not do anything.');
        }
        this._transport = this._setupTransport();
    }
    /**
     * Sets up the transport so it can be used later to send requests.
     */
    BaseBackend.prototype._setupTransport = function () {
        return new _transports_noop__WEBPACK_IMPORTED_MODULE_1__["NoopTransport"]();
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.eventFromException = function (_exception, _hint) {
        throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["SentryError"]('Backend has to implement `eventFromException` method');
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.eventFromMessage = function (_message, _level, _hint) {
        throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["SentryError"]('Backend has to implement `eventFromMessage` method');
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.sendEvent = function (event) {
        this._transport.sendEvent(event).then(null, function (reason) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].error("Error while sending event: " + reason);
        });
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.getTransport = function () {
        return this._transport;
    };
    return BaseBackend;
}());

//# sourceMappingURL=basebackend.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/baseclient.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/core/esm/baseclient.js ***!
  \*****************************************************/
/*! exports provided: BaseClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseClient", function() { return BaseClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./integration */ "./node_modules/@sentry/core/esm/integration.js");



/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding backend constructor and options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}. Also, the Backend instance is available via
 * {@link Client.getBackend}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event via the backend, it is passed through
 * {@link BaseClient.prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends BaseClient<NodeBackend, NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(NodeBackend, options);
 *   }
 *
 *   // ...
 * }
 */
var BaseClient = /** @class */ (function () {
    /**
     * Initializes this client instance.
     *
     * @param backendClass A constructor function to create the backend.
     * @param options Options for the client.
     */
    function BaseClient(backendClass, options) {
        /** Array of used integrations. */
        this._integrations = {};
        /** Is the client still processing a call? */
        this._processing = false;
        this._backend = new backendClass(options);
        this._options = options;
        if (options.dsn) {
            this._dsn = new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["Dsn"](options.dsn);
        }
    }
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureException = function (exception, hint, scope) {
        var _this = this;
        var eventId = hint && hint.event_id;
        this._processing = true;
        this._getBackend()
            .eventFromException(exception, hint)
            .then(function (event) { return _this._processEvent(event, hint, scope); })
            .then(function (finalEvent) {
            // We need to check for finalEvent in case beforeSend returned null
            eventId = finalEvent && finalEvent.event_id;
            _this._processing = false;
        })
            .then(null, function (reason) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].error(reason);
            _this._processing = false;
        });
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureMessage = function (message, level, hint, scope) {
        var _this = this;
        var eventId = hint && hint.event_id;
        this._processing = true;
        var promisedEvent = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"])(message)
            ? this._getBackend().eventFromMessage("" + message, level, hint)
            : this._getBackend().eventFromException(message, hint);
        promisedEvent
            .then(function (event) { return _this._processEvent(event, hint, scope); })
            .then(function (finalEvent) {
            // We need to check for finalEvent in case beforeSend returned null
            eventId = finalEvent && finalEvent.event_id;
            _this._processing = false;
        })
            .then(null, function (reason) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].error(reason);
            _this._processing = false;
        });
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureEvent = function (event, hint, scope) {
        var _this = this;
        var eventId = hint && hint.event_id;
        this._processing = true;
        this._processEvent(event, hint, scope)
            .then(function (finalEvent) {
            // We need to check for finalEvent in case beforeSend returned null
            eventId = finalEvent && finalEvent.event_id;
            _this._processing = false;
        })
            .then(null, function (reason) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].error(reason);
            _this._processing = false;
        });
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getDsn = function () {
        return this._dsn;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getOptions = function () {
        return this._options;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.flush = function (timeout) {
        var _this = this;
        return this._isClientProcessing(timeout).then(function (status) {
            clearInterval(status.interval);
            return _this._getBackend()
                .getTransport()
                .close(timeout)
                .then(function (transportFlushed) { return status.ready && transportFlushed; });
        });
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.close = function (timeout) {
        var _this = this;
        return this.flush(timeout).then(function (result) {
            _this.getOptions().enabled = false;
            return result;
        });
    };
    /**
     * Sets up the integrations
     */
    BaseClient.prototype.setupIntegrations = function () {
        if (this._isEnabled()) {
            this._integrations = Object(_integration__WEBPACK_IMPORTED_MODULE_2__["setupIntegrations"])(this._options);
        }
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getIntegration = function (integration) {
        try {
            return this._integrations[integration.id] || null;
        }
        catch (_oO) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("Cannot retrieve integration " + integration.id + " from the current Client");
            return null;
        }
    };
    /** Waits for the client to be done with processing. */
    BaseClient.prototype._isClientProcessing = function (timeout) {
        var _this = this;
        return new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"](function (resolve) {
            var ticked = 0;
            var tick = 1;
            var interval = 0;
            clearInterval(interval);
            interval = setInterval(function () {
                if (!_this._processing) {
                    resolve({
                        interval: interval,
                        ready: true,
                    });
                }
                else {
                    ticked += tick;
                    if (timeout && ticked >= timeout) {
                        resolve({
                            interval: interval,
                            ready: false,
                        });
                    }
                }
            }, tick);
        });
    };
    /** Returns the current backend. */
    BaseClient.prototype._getBackend = function () {
        return this._backend;
    };
    /** Determines whether this SDK is enabled and a valid Dsn is present. */
    BaseClient.prototype._isEnabled = function () {
        return this.getOptions().enabled !== false && this._dsn !== undefined;
    };
    /**
     * Adds common information to events.
     *
     * The information includes release and environment from `options`,
     * breadcrumbs and context (extra, tags and user) from the scope.
     *
     * Information that is already present in the event is never overwritten. For
     * nested objects, such as the context, keys are merged.
     *
     * @param event The original event.
     * @param hint May contain additional informartion about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A new event with more information.
     */
    BaseClient.prototype._prepareEvent = function (event, scope, hint) {
        var _this = this;
        var _a = this.getOptions(), environment = _a.environment, release = _a.release, dist = _a.dist, _b = _a.maxValueLength, maxValueLength = _b === void 0 ? 250 : _b, _c = _a.normalizeDepth, normalizeDepth = _c === void 0 ? 3 : _c;
        var prepared = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event);
        if (prepared.environment === undefined && environment !== undefined) {
            prepared.environment = environment;
        }
        if (prepared.release === undefined && release !== undefined) {
            prepared.release = release;
        }
        if (prepared.dist === undefined && dist !== undefined) {
            prepared.dist = dist;
        }
        if (prepared.message) {
            prepared.message = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["truncate"])(prepared.message, maxValueLength);
        }
        var exception = prepared.exception && prepared.exception.values && prepared.exception.values[0];
        if (exception && exception.value) {
            exception.value = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["truncate"])(exception.value, maxValueLength);
        }
        var request = prepared.request;
        if (request && request.url) {
            request.url = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["truncate"])(request.url, maxValueLength);
        }
        if (prepared.event_id === undefined) {
            prepared.event_id = hint && hint.event_id ? hint.event_id : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["uuid4"])();
        }
        this._addIntegrations(prepared.sdk);
        // We prepare the result here with a resolved Event.
        var result = _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].resolve(prepared);
        // This should be the last thing called, since we want that
        // {@link Hub.addEventProcessor} gets the finished prepared event.
        if (scope) {
            // In case we have a hub we reassign it.
            result = scope.applyToEvent(prepared, hint);
        }
        return result.then(function (evt) {
            // tslint:disable-next-line:strict-type-predicates
            if (typeof normalizeDepth === 'number' && normalizeDepth > 0) {
                return _this._normalizeEvent(evt, normalizeDepth);
            }
            return evt;
        });
    };
    /**
     * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
     * Normalized keys:
     * - `breadcrumbs.data`
     * - `user`
     * - `contexts`
     * - `extra`
     * @param event Event
     * @returns Normalized event
     */
    BaseClient.prototype._normalizeEvent = function (event, depth) {
        if (!event) {
            return null;
        }
        // tslint:disable:no-unsafe-any
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event, (event.breadcrumbs && {
            breadcrumbs: event.breadcrumbs.map(function (b) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, b, (b.data && {
                data: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["normalize"])(b.data, depth),
            }))); }),
        }), (event.user && {
            user: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["normalize"])(event.user, depth),
        }), (event.contexts && {
            contexts: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["normalize"])(event.contexts, depth),
        }), (event.extra && {
            extra: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["normalize"])(event.extra, depth),
        }));
    };
    /**
     * This function adds all used integrations to the SDK info in the event.
     * @param sdkInfo The sdkInfo of the event that will be filled with all integrations.
     */
    BaseClient.prototype._addIntegrations = function (sdkInfo) {
        var integrationsArray = Object.keys(this._integrations);
        if (sdkInfo && integrationsArray.length > 0) {
            sdkInfo.integrations = integrationsArray;
        }
    };
    /**
     * Processes an event (either error or message) and sends it to Sentry.
     *
     * This also adds breadcrumbs and context information to the event. However,
     * platform specific meta data (such as the User's IP address) must be added
     * by the SDK implementor.
     *
     *
     * @param event The event to send to Sentry.
     * @param hint May contain additional informartion about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
     */
    BaseClient.prototype._processEvent = function (event, hint, scope) {
        var _this = this;
        var _a = this.getOptions(), beforeSend = _a.beforeSend, sampleRate = _a.sampleRate;
        if (!this._isEnabled()) {
            return _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].reject('SDK not enabled, will not send event.');
        }
        // 1.0 === 100% events are sent
        // 0.0 === 0% events are sent
        if (typeof sampleRate === 'number' && Math.random() > sampleRate) {
            return _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].reject('This event has been sampled, will not send event.');
        }
        return new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"](function (resolve, reject) {
            _this._prepareEvent(event, scope, hint)
                .then(function (prepared) {
                if (prepared === null) {
                    reject('An event processor returned null, will not send event.');
                    return;
                }
                var finalEvent = prepared;
                var isInternalException = hint && hint.data && hint.data.__sentry__ === true;
                if (isInternalException || !beforeSend) {
                    _this._getBackend().sendEvent(finalEvent);
                    resolve(finalEvent);
                    return;
                }
                var beforeSendResult = beforeSend(prepared, hint);
                // tslint:disable-next-line:strict-type-predicates
                if (typeof beforeSendResult === 'undefined') {
                    _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].error('`beforeSend` method has to return `null` or a valid event.');
                }
                else if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isThenable"])(beforeSendResult)) {
                    _this._handleAsyncBeforeSend(beforeSendResult, resolve, reject);
                }
                else {
                    finalEvent = beforeSendResult;
                    if (finalEvent === null) {
                        _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('`beforeSend` returned `null`, will not send event.');
                        resolve(null);
                        return;
                    }
                    // From here on we are really async
                    _this._getBackend().sendEvent(finalEvent);
                    resolve(finalEvent);
                }
            })
                .then(null, function (reason) {
                _this.captureException(reason, {
                    data: {
                        __sentry__: true,
                    },
                    originalException: reason,
                });
                reject("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + reason);
            });
        });
    };
    /**
     * Resolves before send Promise and calls resolve/reject on parent SyncPromise.
     */
    BaseClient.prototype._handleAsyncBeforeSend = function (beforeSend, resolve, reject) {
        var _this = this;
        beforeSend
            .then(function (processedEvent) {
            if (processedEvent === null) {
                reject('`beforeSend` returned `null`, will not send event.');
                return;
            }
            // From here on we are really async
            _this._getBackend().sendEvent(processedEvent);
            resolve(processedEvent);
        })
            .then(null, function (e) {
            reject("beforeSend rejected with " + e);
        });
    };
    return BaseClient;
}());

//# sourceMappingURL=baseclient.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/index.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/core/esm/index.js ***!
  \************************************************/
/*! exports provided: addBreadcrumb, captureException, captureEvent, captureMessage, configureScope, setContext, setExtra, setExtras, setTag, setTags, setUser, withScope, addGlobalEventProcessor, getCurrentHub, getHubFromCarrier, Hub, Scope, API, BaseClient, BaseBackend, initAndBind, NoopTransport, Integrations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/minimal */ "./node_modules/@sentry/minimal/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["addBreadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["captureException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["captureEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["captureMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["configureScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setExtra"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setExtras"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["withScope"]; });

/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["Scope"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./node_modules/@sentry/core/esm/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["API"]; });

/* harmony import */ var _baseclient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseclient */ "./node_modules/@sentry/core/esm/baseclient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseClient", function() { return _baseclient__WEBPACK_IMPORTED_MODULE_3__["BaseClient"]; });

/* harmony import */ var _basebackend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basebackend */ "./node_modules/@sentry/core/esm/basebackend.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseBackend", function() { return _basebackend__WEBPACK_IMPORTED_MODULE_4__["BaseBackend"]; });

/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sdk */ "./node_modules/@sentry/core/esm/sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initAndBind", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["initAndBind"]; });

/* harmony import */ var _transports_noop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transports/noop */ "./node_modules/@sentry/core/esm/transports/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoopTransport", function() { return _transports_noop__WEBPACK_IMPORTED_MODULE_6__["NoopTransport"]; });

/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/core/esm/integrations/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Integrations", function() { return _integrations__WEBPACK_IMPORTED_MODULE_7__; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/integration.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integration.js ***!
  \******************************************************/
/*! exports provided: installedIntegrations, getIntegrationsToSetup, setupIntegration, setupIntegrations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installedIntegrations", function() { return installedIntegrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntegrationsToSetup", function() { return getIntegrationsToSetup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupIntegration", function() { return setupIntegration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupIntegrations", function() { return setupIntegrations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");



var installedIntegrations = [];
/** Gets integration to install */
function getIntegrationsToSetup(options) {
    var defaultIntegrations = (options.defaultIntegrations && tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](options.defaultIntegrations)) || [];
    var userIntegrations = options.integrations;
    var integrations = [];
    if (Array.isArray(userIntegrations)) {
        var userIntegrationsNames_1 = userIntegrations.map(function (i) { return i.name; });
        var pickedIntegrationsNames_1 = [];
        // Leave only unique default integrations, that were not overridden with provided user integrations
        defaultIntegrations.forEach(function (defaultIntegration) {
            if (userIntegrationsNames_1.indexOf(defaultIntegration.name) === -1 &&
                pickedIntegrationsNames_1.indexOf(defaultIntegration.name) === -1) {
                integrations.push(defaultIntegration);
                pickedIntegrationsNames_1.push(defaultIntegration.name);
            }
        });
        // Don't add same user integration twice
        userIntegrations.forEach(function (userIntegration) {
            if (pickedIntegrationsNames_1.indexOf(userIntegration.name) === -1) {
                integrations.push(userIntegration);
                pickedIntegrationsNames_1.push(userIntegration.name);
            }
        });
    }
    else if (typeof userIntegrations === 'function') {
        integrations = userIntegrations(defaultIntegrations);
        integrations = Array.isArray(integrations) ? integrations : [integrations];
    }
    else {
        integrations = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](defaultIntegrations);
    }
    // Make sure that if present, `Debug` integration will always run last
    var integrationsNames = integrations.map(function (i) { return i.name; });
    var alwaysLastToRun = 'Debug';
    if (integrationsNames.indexOf(alwaysLastToRun) !== -1) {
        integrations.push.apply(integrations, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](integrations.splice(integrationsNames.indexOf(alwaysLastToRun), 1)));
    }
    return integrations;
}
/** Setup given integration */
function setupIntegration(integration) {
    if (installedIntegrations.indexOf(integration.name) !== -1) {
        return;
    }
    integration.setupOnce(_sentry_hub__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"], _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"]);
    installedIntegrations.push(integration.name);
    _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].log("Integration installed: " + integration.name);
}
/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */
function setupIntegrations(options) {
    var integrations = {};
    getIntegrationsToSetup(options).forEach(function (integration) {
        integrations[integration.name] = integration;
        setupIntegration(integration);
    });
    return integrations;
}
//# sourceMappingURL=integration.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/integrations/functiontostring.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integrations/functiontostring.js ***!
  \************************************************************************/
/*! exports provided: FunctionToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionToString", function() { return FunctionToString; });
var originalFunctionToString;
/** Patch toString calls to return proper name for wrapped functions */
var FunctionToString = /** @class */ (function () {
    function FunctionToString() {
        /**
         * @inheritDoc
         */
        this.name = FunctionToString.id;
    }
    /**
     * @inheritDoc
     */
    FunctionToString.prototype.setupOnce = function () {
        originalFunctionToString = Function.prototype.toString;
        Function.prototype.toString = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var context = this.__sentry_original__ || this;
            // tslint:disable-next-line:no-unsafe-any
            return originalFunctionToString.apply(context, args);
        };
    };
    /**
     * @inheritDoc
     */
    FunctionToString.id = 'FunctionToString';
    return FunctionToString;
}());

//# sourceMappingURL=functiontostring.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/integrations/inboundfilters.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integrations/inboundfilters.js ***!
  \**********************************************************************/
/*! exports provided: InboundFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundFilters", function() { return InboundFilters; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");



// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
/** Inbound filters configurable by the user */
var InboundFilters = /** @class */ (function () {
    function InboundFilters(_options) {
        if (_options === void 0) { _options = {}; }
        this._options = _options;
        /**
         * @inheritDoc
         */
        this.name = InboundFilters.id;
    }
    /**
     * @inheritDoc
     */
    InboundFilters.prototype.setupOnce = function () {
        Object(_sentry_hub__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"])(function (event) {
            var hub = Object(_sentry_hub__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();
            if (!hub) {
                return event;
            }
            var self = hub.getIntegration(InboundFilters);
            if (self) {
                var client = hub.getClient();
                var clientOptions = client ? client.getOptions() : {};
                var options = self._mergeOptions(clientOptions);
                if (self._shouldDropEvent(event, options)) {
                    return null;
                }
            }
            return event;
        });
    };
    /** JSDoc */
    InboundFilters.prototype._shouldDropEvent = function (event, options) {
        if (this._isSentryError(event, options)) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getEventDescription"])(event));
            return true;
        }
        if (this._isIgnoredError(event, options)) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getEventDescription"])(event));
            return true;
        }
        if (this._isBlacklistedUrl(event, options)) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getEventDescription"])(event) + ".\nUrl: " + this._getEventFilterUrl(event));
            return true;
        }
        if (!this._isWhitelistedUrl(event, options)) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getEventDescription"])(event) + ".\nUrl: " + this._getEventFilterUrl(event));
            return true;
        }
        return false;
    };
    /** JSDoc */
    InboundFilters.prototype._isSentryError = function (event, options) {
        if (options === void 0) { options = {}; }
        if (!options.ignoreInternal) {
            return false;
        }
        try {
            return ((event &&
                event.exception &&
                event.exception.values &&
                event.exception.values[0] &&
                event.exception.values[0].type === 'SentryError') ||
                false);
        }
        catch (_oO) {
            return false;
        }
    };
    /** JSDoc */
    InboundFilters.prototype._isIgnoredError = function (event, options) {
        if (options === void 0) { options = {}; }
        if (!options.ignoreErrors || !options.ignoreErrors.length) {
            return false;
        }
        return this._getPossibleEventMessages(event).some(function (message) {
            // Not sure why TypeScript complains here...
            return options.ignoreErrors.some(function (pattern) { return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isMatchingPattern"])(message, pattern); });
        });
    };
    /** JSDoc */
    InboundFilters.prototype._isBlacklistedUrl = function (event, options) {
        if (options === void 0) { options = {}; }
        // TODO: Use Glob instead?
        if (!options.blacklistUrls || !options.blacklistUrls.length) {
            return false;
        }
        var url = this._getEventFilterUrl(event);
        return !url ? false : options.blacklistUrls.some(function (pattern) { return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isMatchingPattern"])(url, pattern); });
    };
    /** JSDoc */
    InboundFilters.prototype._isWhitelistedUrl = function (event, options) {
        if (options === void 0) { options = {}; }
        // TODO: Use Glob instead?
        if (!options.whitelistUrls || !options.whitelistUrls.length) {
            return true;
        }
        var url = this._getEventFilterUrl(event);
        return !url ? true : options.whitelistUrls.some(function (pattern) { return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isMatchingPattern"])(url, pattern); });
    };
    /** JSDoc */
    InboundFilters.prototype._mergeOptions = function (clientOptions) {
        if (clientOptions === void 0) { clientOptions = {}; }
        return {
            blacklistUrls: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]((this._options.blacklistUrls || []), (clientOptions.blacklistUrls || [])),
            ignoreErrors: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]((this._options.ignoreErrors || []), (clientOptions.ignoreErrors || []), DEFAULT_IGNORE_ERRORS),
            ignoreInternal: typeof this._options.ignoreInternal !== 'undefined' ? this._options.ignoreInternal : true,
            whitelistUrls: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]((this._options.whitelistUrls || []), (clientOptions.whitelistUrls || [])),
        };
    };
    /** JSDoc */
    InboundFilters.prototype._getPossibleEventMessages = function (event) {
        if (event.message) {
            return [event.message];
        }
        if (event.exception) {
            try {
                var _a = (event.exception.values && event.exception.values[0]) || {}, _b = _a.type, type = _b === void 0 ? '' : _b, _c = _a.value, value = _c === void 0 ? '' : _c;
                return ["" + value, type + ": " + value];
            }
            catch (oO) {
                _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Cannot extract message for event " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getEventDescription"])(event));
                return [];
            }
        }
        return [];
    };
    /** JSDoc */
    InboundFilters.prototype._getEventFilterUrl = function (event) {
        try {
            if (event.stacktrace) {
                var frames_1 = event.stacktrace.frames;
                return (frames_1 && frames_1[frames_1.length - 1].filename) || null;
            }
            if (event.exception) {
                var frames_2 = event.exception.values && event.exception.values[0].stacktrace && event.exception.values[0].stacktrace.frames;
                return (frames_2 && frames_2[frames_2.length - 1].filename) || null;
            }
            return null;
        }
        catch (oO) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Cannot extract url for event " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getEventDescription"])(event));
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    InboundFilters.id = 'InboundFilters';
    return InboundFilters;
}());

//# sourceMappingURL=inboundfilters.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/integrations/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integrations/index.js ***!
  \*************************************************************/
/*! exports provided: FunctionToString, InboundFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functiontostring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functiontostring */ "./node_modules/@sentry/core/esm/integrations/functiontostring.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionToString", function() { return _functiontostring__WEBPACK_IMPORTED_MODULE_0__["FunctionToString"]; });

/* harmony import */ var _inboundfilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inboundfilters */ "./node_modules/@sentry/core/esm/integrations/inboundfilters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InboundFilters", function() { return _inboundfilters__WEBPACK_IMPORTED_MODULE_1__["InboundFilters"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/sdk.js":
/*!**********************************************!*\
  !*** ./node_modules/@sentry/core/esm/sdk.js ***!
  \**********************************************/
/*! exports provided: initAndBind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAndBind", function() { return initAndBind; });
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");


/**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instanciate.
 * @param options Options to pass to the client.
 */
function initAndBind(clientClass, options) {
    if (options.debug === true) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].enable();
    }
    var hub = Object(_sentry_hub__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])();
    var client = new clientClass(options);
    hub.bindClient(client);
}
//# sourceMappingURL=sdk.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/transports/noop.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sentry/core/esm/transports/noop.js ***!
  \**********************************************************/
/*! exports provided: NoopTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopTransport", function() { return NoopTransport; });
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");


/** Noop transport */
var NoopTransport = /** @class */ (function () {
    function NoopTransport() {
    }
    /**
     * @inheritDoc
     */
    NoopTransport.prototype.sendEvent = function (_) {
        return _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].resolve({
            reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
            status: _sentry_types__WEBPACK_IMPORTED_MODULE_0__["Status"].Skipped,
        });
    };
    /**
     * @inheritDoc
     */
    NoopTransport.prototype.close = function (_) {
        return _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].resolve(true);
    };
    return NoopTransport;
}());

//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/@sentry/hub/esm/hub.js":
/*!*********************************************!*\
  !*** ./node_modules/@sentry/hub/esm/hub.js ***!
  \*********************************************/
/*! exports provided: API_VERSION, Hub, getMainCarrier, makeMain, getCurrentHub, getHubFromCarrier, setHubOnCarrier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return API_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return Hub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainCarrier", function() { return getMainCarrier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return makeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return getCurrentHub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return getHubFromCarrier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHubOnCarrier", function() { return setHubOnCarrier; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scope */ "./node_modules/@sentry/hub/esm/scope.js");



/**
 * API compatibility version of this hub.
 *
 * WARNING: This number should only be incresed when the global interface
 * changes a and new methods are introduced.
 *
 * @hidden
 */
var API_VERSION = 3;
/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */
var DEFAULT_BREADCRUMBS = 100;
/**
 * Absolute maximum number of breadcrumbs added to an event. The
 * `maxBreadcrumbs` option cannot be higher than this value.
 */
var MAX_BREADCRUMBS = 100;
/**
 * @inheritDoc
 */
var Hub = /** @class */ (function () {
    /**
     * Creates a new instance of the hub, will push one {@link Layer} into the
     * internal stack on creation.
     *
     * @param client bound to the hub.
     * @param scope bound to the hub.
     * @param version number, higher number means higher priority.
     */
    function Hub(client, scope, _version) {
        if (scope === void 0) { scope = new _scope__WEBPACK_IMPORTED_MODULE_2__["Scope"](); }
        if (_version === void 0) { _version = API_VERSION; }
        this._version = _version;
        /** Is a {@link Layer}[] containing the client and scope */
        this._stack = [];
        this._stack.push({ client: client, scope: scope });
    }
    /**
     * Internal helper function to call a method on the top client if it exists.
     *
     * @param method The method to call on the client.
     * @param args Arguments to pass to the client function.
     */
    Hub.prototype._invokeClient = function (method) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var top = this.getStackTop();
        if (top && top.client && top.client[method]) {
            (_a = top.client)[method].apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args, [top.scope]));
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.isOlderThan = function (version) {
        return this._version < version;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.bindClient = function (client) {
        var top = this.getStackTop();
        top.client = client;
        if (client && client.setupIntegrations) {
            client.setupIntegrations();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.pushScope = function () {
        // We want to clone the content of prev scope
        var stack = this.getStack();
        var parentScope = stack.length > 0 ? stack[stack.length - 1].scope : undefined;
        var scope = _scope__WEBPACK_IMPORTED_MODULE_2__["Scope"].clone(parentScope);
        this.getStack().push({
            client: this.getClient(),
            scope: scope,
        });
        return scope;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.popScope = function () {
        return this.getStack().pop() !== undefined;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.withScope = function (callback) {
        var scope = this.pushScope();
        try {
            callback(scope);
        }
        finally {
            this.popScope();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.getClient = function () {
        return this.getStackTop().client;
    };
    /** Returns the scope of the top stack. */
    Hub.prototype.getScope = function () {
        return this.getStackTop().scope;
    };
    /** Returns the scope stack for domains or the process. */
    Hub.prototype.getStack = function () {
        return this._stack;
    };
    /** Returns the topmost scope layer in the order domain > local > process. */
    Hub.prototype.getStackTop = function () {
        return this._stack[this._stack.length - 1];
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureException = function (exception, hint) {
        var eventId = (this._lastEventId = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["uuid4"])());
        var finalHint = hint;
        // If there's no explicit hint provided, mimick the same thing that would happen
        // in the minimal itself to create a consistent behavior.
        // We don't do this in the client, as it's the lowest level API, and doing this,
        // would prevent user from having full control over direct calls.
        if (!hint) {
            var syntheticException = void 0;
            try {
                throw new Error('Sentry syntheticException');
            }
            catch (exception) {
                syntheticException = exception;
            }
            finalHint = {
                originalException: exception,
                syntheticException: syntheticException,
            };
        }
        this._invokeClient('captureException', exception, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, finalHint, { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureMessage = function (message, level, hint) {
        var eventId = (this._lastEventId = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["uuid4"])());
        var finalHint = hint;
        // If there's no explicit hint provided, mimick the same thing that would happen
        // in the minimal itself to create a consistent behavior.
        // We don't do this in the client, as it's the lowest level API, and doing this,
        // would prevent user from having full control over direct calls.
        if (!hint) {
            var syntheticException = void 0;
            try {
                throw new Error(message);
            }
            catch (exception) {
                syntheticException = exception;
            }
            finalHint = {
                originalException: message,
                syntheticException: syntheticException,
            };
        }
        this._invokeClient('captureMessage', message, level, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, finalHint, { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureEvent = function (event, hint) {
        var eventId = (this._lastEventId = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["uuid4"])());
        this._invokeClient('captureEvent', event, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, hint, { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.lastEventId = function () {
        return this._lastEventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.addBreadcrumb = function (breadcrumb, hint) {
        var top = this.getStackTop();
        if (!top.scope || !top.client) {
            return;
        }
        var _a = (top.client.getOptions && top.client.getOptions()) || {}, _b = _a.beforeBreadcrumb, beforeBreadcrumb = _b === void 0 ? null : _b, _c = _a.maxBreadcrumbs, maxBreadcrumbs = _c === void 0 ? DEFAULT_BREADCRUMBS : _c;
        if (maxBreadcrumbs <= 0) {
            return;
        }
        var timestamp = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["timestampWithMs"])();
        var mergedBreadcrumb = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ timestamp: timestamp }, breadcrumb);
        var finalBreadcrumb = beforeBreadcrumb
            ? Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["consoleSandbox"])(function () { return beforeBreadcrumb(mergedBreadcrumb, hint); })
            : mergedBreadcrumb;
        if (finalBreadcrumb === null) {
            return;
        }
        top.scope.addBreadcrumb(finalBreadcrumb, Math.min(maxBreadcrumbs, MAX_BREADCRUMBS));
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setUser = function (user) {
        var top = this.getStackTop();
        if (!top.scope) {
            return;
        }
        top.scope.setUser(user);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setTags = function (tags) {
        var top = this.getStackTop();
        if (!top.scope) {
            return;
        }
        top.scope.setTags(tags);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setExtras = function (extras) {
        var top = this.getStackTop();
        if (!top.scope) {
            return;
        }
        top.scope.setExtras(extras);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setTag = function (key, value) {
        var top = this.getStackTop();
        if (!top.scope) {
            return;
        }
        top.scope.setTag(key, value);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setExtra = function (key, extra) {
        var top = this.getStackTop();
        if (!top.scope) {
            return;
        }
        top.scope.setExtra(key, extra);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setContext = function (name, context) {
        var top = this.getStackTop();
        if (!top.scope) {
            return;
        }
        top.scope.setContext(name, context);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.configureScope = function (callback) {
        var top = this.getStackTop();
        if (top.scope && top.client) {
            callback(top.scope);
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.run = function (callback) {
        var oldHub = makeMain(this);
        try {
            callback(this);
        }
        finally {
            makeMain(oldHub);
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.getIntegration = function (integration) {
        var client = this.getClient();
        if (!client) {
            return null;
        }
        try {
            return client.getIntegration(integration);
        }
        catch (_oO) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("Cannot retrieve integration " + integration.id + " from the current Hub");
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startSpan = function (spanOrSpanContext, forceNoChild) {
        if (forceNoChild === void 0) { forceNoChild = false; }
        return this._callExtensionMethod('startSpan', spanOrSpanContext, forceNoChild);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.traceHeaders = function () {
        return this._callExtensionMethod('traceHeaders');
    };
    /**
     * Calls global extension method and binding current instance to the function call
     */
    // @ts-ignore
    Hub.prototype._callExtensionMethod = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var carrier = getMainCarrier();
        var sentry = carrier.__SENTRY__;
        // tslint:disable-next-line: strict-type-predicates
        if (sentry && sentry.extensions && typeof sentry.extensions[method] === 'function') {
            return sentry.extensions[method].apply(this, args);
        }
        _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("Extension method " + method + " couldn't be found, doing nothing.");
    };
    return Hub;
}());

/** Returns the global shim registry. */
function getMainCarrier() {
    var carrier = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
    carrier.__SENTRY__ = carrier.__SENTRY__ || {
        extensions: {},
        hub: undefined,
    };
    return carrier;
}
/**
 * Replaces the current main hub with the passed one on the global object
 *
 * @returns The old replaced hub
 */
function makeMain(hub) {
    var registry = getMainCarrier();
    var oldHub = getHubFromCarrier(registry);
    setHubOnCarrier(registry, hub);
    return oldHub;
}
/**
 * Returns the default hub instance.
 *
 * If a hub is already registered in the global carrier but this module
 * contains a more recent version, it replaces the registered version.
 * Otherwise, the currently registered hub will be returned.
 */
function getCurrentHub() {
    // Get main carrier (global for every environment)
    var registry = getMainCarrier();
    // If there's no hub, or its an old API, assign a new one
    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
        setHubOnCarrier(registry, new Hub());
    }
    // Prefer domains over global if they are there (applicable only to Node environment)
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isNodeEnv"])()) {
        return getHubFromActiveDomain(registry);
    }
    // Return hub that lives on a global object
    return getHubFromCarrier(registry);
}
/**
 * Try to read the hub from an active domain, fallback to the registry if one doesnt exist
 * @returns discovered hub
 */
function getHubFromActiveDomain(registry) {
    try {
        var property = 'domain';
        var carrier = getMainCarrier();
        var sentry = carrier.__SENTRY__;
        // tslint:disable-next-line: strict-type-predicates
        if (!sentry || !sentry.extensions || !sentry.extensions[property]) {
            return getHubFromCarrier(registry);
        }
        var domain = sentry.extensions[property];
        var activeDomain = domain.active;
        // If there no active domain, just return global hub
        if (!activeDomain) {
            return getHubFromCarrier(registry);
        }
        // If there's no hub on current domain, or its an old API, assign a new one
        if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
            var registryHubTopStack = getHubFromCarrier(registry).getStackTop();
            setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, _scope__WEBPACK_IMPORTED_MODULE_2__["Scope"].clone(registryHubTopStack.scope)));
        }
        // Return hub that lives on a domain
        return getHubFromCarrier(activeDomain);
    }
    catch (_Oo) {
        // Return hub that lives on a global object
        return getHubFromCarrier(registry);
    }
}
/**
 * This will tell whether a carrier has a hub on it or not
 * @param carrier object
 */
function hasHubOnCarrier(carrier) {
    if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub) {
        return true;
    }
    return false;
}
/**
 * This will create a new {@link Hub} and add to the passed object on
 * __SENTRY__.hub.
 * @param carrier object
 * @hidden
 */
function getHubFromCarrier(carrier) {
    if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub) {
        return carrier.__SENTRY__.hub;
    }
    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    carrier.__SENTRY__.hub = new Hub();
    return carrier.__SENTRY__.hub;
}
/**
 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
 * @param carrier object
 * @param hub Hub
 */
function setHubOnCarrier(carrier, hub) {
    if (!carrier) {
        return false;
    }
    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    carrier.__SENTRY__.hub = hub;
    return true;
}
//# sourceMappingURL=hub.js.map

/***/ }),

/***/ "./node_modules/@sentry/hub/esm/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/hub/esm/index.js ***!
  \***********************************************/
/*! exports provided: addGlobalEventProcessor, Scope, getCurrentHub, getHubFromCarrier, getMainCarrier, Hub, makeMain, setHubOnCarrier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scope */ "./node_modules/@sentry/hub/esm/scope.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _scope__WEBPACK_IMPORTED_MODULE_0__["addGlobalEventProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _scope__WEBPACK_IMPORTED_MODULE_0__["Scope"]; });

/* harmony import */ var _hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hub */ "./node_modules/@sentry/hub/esm/hub.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _hub__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _hub__WEBPACK_IMPORTED_MODULE_1__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMainCarrier", function() { return _hub__WEBPACK_IMPORTED_MODULE_1__["getMainCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _hub__WEBPACK_IMPORTED_MODULE_1__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return _hub__WEBPACK_IMPORTED_MODULE_1__["makeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHubOnCarrier", function() { return _hub__WEBPACK_IMPORTED_MODULE_1__["setHubOnCarrier"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/hub/esm/scope.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/hub/esm/scope.js ***!
  \***********************************************/
/*! exports provided: Scope, addGlobalEventProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return addGlobalEventProcessor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");


/**
 * Holds additional event information. {@link Scope.applyToEvent} will be
 * called by the client before an event will be sent.
 */
var Scope = /** @class */ (function () {
    function Scope() {
        /** Flag if notifiying is happening. */
        this._notifyingListeners = false;
        /** Callback for client to receive scope changes. */
        this._scopeListeners = [];
        /** Callback list that will be called after {@link applyToEvent}. */
        this._eventProcessors = [];
        /** Array of breadcrumbs. */
        this._breadcrumbs = [];
        /** User */
        this._user = {};
        /** Tags */
        this._tags = {};
        /** Extra */
        this._extra = {};
        /** Contexts */
        this._context = {};
    }
    /**
     * Add internal on change listener. Used for sub SDKs that need to store the scope.
     * @hidden
     */
    Scope.prototype.addScopeListener = function (callback) {
        this._scopeListeners.push(callback);
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.addEventProcessor = function (callback) {
        this._eventProcessors.push(callback);
        return this;
    };
    /**
     * This will be called on every set call.
     */
    Scope.prototype._notifyScopeListeners = function () {
        var _this = this;
        if (!this._notifyingListeners) {
            this._notifyingListeners = true;
            setTimeout(function () {
                _this._scopeListeners.forEach(function (callback) {
                    callback(_this);
                });
                _this._notifyingListeners = false;
            });
        }
    };
    /**
     * This will be called after {@link applyToEvent} is finished.
     */
    Scope.prototype._notifyEventProcessors = function (processors, event, hint, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        return new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"](function (resolve, reject) {
            var processor = processors[index];
            // tslint:disable-next-line:strict-type-predicates
            if (event === null || typeof processor !== 'function') {
                resolve(event);
            }
            else {
                var result = processor(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event), hint);
                if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isThenable"])(result)) {
                    result
                        .then(function (final) { return _this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve); })
                        .then(null, reject);
                }
                else {
                    _this._notifyEventProcessors(processors, result, hint, index + 1)
                        .then(resolve)
                        .then(null, reject);
                }
            }
        });
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setUser = function (user) {
        this._user = user || {};
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTags = function (tags) {
        this._tags = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._tags, tags);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTag = function (key, value) {
        var _a;
        this._tags = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._tags, (_a = {}, _a[key] = value, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setExtras = function (extras) {
        this._extra = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._extra, extras);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setExtra = function (key, extra) {
        var _a;
        this._extra = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._extra, (_a = {}, _a[key] = extra, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setFingerprint = function (fingerprint) {
        this._fingerprint = fingerprint;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setLevel = function (level) {
        this._level = level;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTransaction = function (transaction) {
        this._transaction = transaction;
        if (this._span) {
            this._span.transaction = transaction;
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setContext = function (key, context) {
        var _a;
        this._context = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._context, (_a = {}, _a[key] = context, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setSpan = function (span) {
        this._span = span;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * Internal getter for Span, used in Hub.
     * @hidden
     */
    Scope.prototype.getSpan = function () {
        return this._span;
    };
    /**
     * Inherit values from the parent scope.
     * @param scope to clone.
     */
    Scope.clone = function (scope) {
        var newScope = new Scope();
        if (scope) {
            newScope._breadcrumbs = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](scope._breadcrumbs);
            newScope._tags = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, scope._tags);
            newScope._extra = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, scope._extra);
            newScope._context = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, scope._context);
            newScope._user = scope._user;
            newScope._level = scope._level;
            newScope._span = scope._span;
            newScope._transaction = scope._transaction;
            newScope._fingerprint = scope._fingerprint;
            newScope._eventProcessors = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](scope._eventProcessors);
        }
        return newScope;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.clear = function () {
        this._breadcrumbs = [];
        this._tags = {};
        this._extra = {};
        this._user = {};
        this._context = {};
        this._level = undefined;
        this._transaction = undefined;
        this._fingerprint = undefined;
        this._span = undefined;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.addBreadcrumb = function (breadcrumb, maxBreadcrumbs) {
        var mergedBreadcrumb = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ timestamp: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["timestampWithMs"])() }, breadcrumb);
        this._breadcrumbs =
            maxBreadcrumbs !== undefined && maxBreadcrumbs >= 0
                ? tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this._breadcrumbs, [mergedBreadcrumb]).slice(-maxBreadcrumbs)
                : tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this._breadcrumbs, [mergedBreadcrumb]);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.clearBreadcrumbs = function () {
        this._breadcrumbs = [];
        this._notifyScopeListeners();
        return this;
    };
    /**
     * Applies fingerprint from the scope to the event if there's one,
     * uses message if there's one instead or get rid of empty fingerprint
     */
    Scope.prototype._applyFingerprint = function (event) {
        // Make sure it's an array first and we actually have something in place
        event.fingerprint = event.fingerprint
            ? Array.isArray(event.fingerprint)
                ? event.fingerprint
                : [event.fingerprint]
            : [];
        // If we have something on the scope, then merge it with event
        if (this._fingerprint) {
            event.fingerprint = event.fingerprint.concat(this._fingerprint);
        }
        // If we have no data at all, remove empty array default
        if (event.fingerprint && !event.fingerprint.length) {
            delete event.fingerprint;
        }
    };
    /**
     * Applies the current context and fingerprint to the event.
     * Note that breadcrumbs will be added by the client.
     * Also if the event has already breadcrumbs on it, we do not merge them.
     * @param event Event
     * @param hint May contain additional informartion about the original exception.
     * @hidden
     */
    Scope.prototype.applyToEvent = function (event, hint) {
        if (this._extra && Object.keys(this._extra).length) {
            event.extra = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._extra, event.extra);
        }
        if (this._tags && Object.keys(this._tags).length) {
            event.tags = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._tags, event.tags);
        }
        if (this._user && Object.keys(this._user).length) {
            event.user = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._user, event.user);
        }
        if (this._context && Object.keys(this._context).length) {
            event.contexts = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._context, event.contexts);
        }
        if (this._level) {
            event.level = this._level;
        }
        if (this._transaction) {
            event.transaction = this._transaction;
        }
        if (this._span) {
            event.contexts = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ trace: this._span.getTraceContext() }, event.contexts);
        }
        this._applyFingerprint(event);
        event.breadcrumbs = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]((event.breadcrumbs || []), this._breadcrumbs);
        event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : undefined;
        return this._notifyEventProcessors(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](getGlobalEventProcessors(), this._eventProcessors), event, hint);
    };
    return Scope;
}());

/**
 * Retruns the global event processors.
 */
function getGlobalEventProcessors() {
    var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
    global.__SENTRY__ = global.__SENTRY__ || {};
    global.__SENTRY__.globalEventProcessors = global.__SENTRY__.globalEventProcessors || [];
    return global.__SENTRY__.globalEventProcessors;
}
/**
 * Add a EventProcessor to be kept globally.
 * @param callback EventProcessor to add
 */
function addGlobalEventProcessor(callback) {
    getGlobalEventProcessors().push(callback);
}
//# sourceMappingURL=scope.js.map

/***/ }),

/***/ "./node_modules/@sentry/minimal/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/minimal/esm/index.js ***!
  \***************************************************/
/*! exports provided: captureException, captureMessage, captureEvent, configureScope, addBreadcrumb, setContext, setExtras, setTags, setExtra, setTag, setUser, withScope, _callOnClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return captureException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return captureMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return captureEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return configureScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return addBreadcrumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return setExtras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return setTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return setExtra; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return setTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return withScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_callOnClient", function() { return _callOnClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");


/**
 * This calls a function on the current hub.
 * @param method function to call on hub.
 * @param args to pass to function.
 */
function callOnHub(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var hub = Object(_sentry_hub__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();
    if (hub && hub[method]) {
        // tslint:disable-next-line:no-unsafe-any
        return hub[method].apply(hub, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args));
    }
    throw new Error("No hub defined or " + method + " was not found on the hub, please open a bug report.");
}
/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception An exception-like object.
 * @returns The generated eventId.
 */
function captureException(exception) {
    var syntheticException;
    try {
        throw new Error('Sentry syntheticException');
    }
    catch (exception) {
        syntheticException = exception;
    }
    return callOnHub('captureException', exception, {
        originalException: exception,
        syntheticException: syntheticException,
    });
}
/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param level Define the level of the message.
 * @returns The generated eventId.
 */
function captureMessage(message, level) {
    var syntheticException;
    try {
        throw new Error(message);
    }
    catch (exception) {
        syntheticException = exception;
    }
    return callOnHub('captureMessage', message, level, {
        originalException: message,
        syntheticException: syntheticException,
    });
}
/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @returns The generated eventId.
 */
function captureEvent(event) {
    return callOnHub('captureEvent', event);
}
/**
 * Callback to set context information onto the scope.
 * @param callback Callback function that receives Scope.
 */
function configureScope(callback) {
    callOnHub('configureScope', callback);
}
/**
 * Records a new breadcrumb which will be attached to future events.
 *
 * Breadcrumbs will be added to subsequent events to provide more context on
 * user's actions prior to an error or crash.
 *
 * @param breadcrumb The breadcrumb to record.
 */
function addBreadcrumb(breadcrumb) {
    callOnHub('addBreadcrumb', breadcrumb);
}
/**
 * Sets context data with the given name.
 * @param name of the context
 * @param context Any kind of data. This data will be normailzed.
 */
function setContext(name, context) {
    callOnHub('setContext', name, context);
}
/**
 * Set an object that will be merged sent as extra data with the event.
 * @param extras Extras object to merge into current context.
 */
function setExtras(extras) {
    callOnHub('setExtras', extras);
}
/**
 * Set an object that will be merged sent as tags data with the event.
 * @param tags Tags context object to merge into current context.
 */
function setTags(tags) {
    callOnHub('setTags', tags);
}
/**
 * Set key:value that will be sent as extra data with the event.
 * @param key String of extra
 * @param extra Any kind of data. This data will be normailzed.
 */
function setExtra(key, extra) {
    callOnHub('setExtra', key, extra);
}
/**
 * Set key:value that will be sent as tags data with the event.
 * @param key String key of tag
 * @param value String value of tag
 */
function setTag(key, value) {
    callOnHub('setTag', key, value);
}
/**
 * Updates user context information for future events.
 *
 * @param user User context object to be set in the current context. Pass `null` to unset the user.
 */
function setUser(user) {
    callOnHub('setUser', user);
}
/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */
function withScope(callback) {
    callOnHub('withScope', callback);
}
/**
 * Calls a function on the latest client. Use this with caution, it's meant as
 * in "internal" helper so we don't need to expose every possible function in
 * the shim. It is not guaranteed that the client actually implements the
 * function.
 *
 * @param method The method to call on the client/client.
 * @param args Arguments to pass to the client/fontend.
 * @hidden
 */
function _callOnClient(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    callOnHub.apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](['_invokeClient', method], args));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/types/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/types/esm/index.js ***!
  \*************************************************/
/*! exports provided: LogLevel, Severity, SpanStatus, Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loglevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loglevel */ "./node_modules/@sentry/types/esm/loglevel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _loglevel__WEBPACK_IMPORTED_MODULE_0__["LogLevel"]; });

/* harmony import */ var _severity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./severity */ "./node_modules/@sentry/types/esm/severity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return _severity__WEBPACK_IMPORTED_MODULE_1__["Severity"]; });

/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./span */ "./node_modules/@sentry/types/esm/span.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpanStatus", function() { return _span__WEBPACK_IMPORTED_MODULE_2__["SpanStatus"]; });

/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status */ "./node_modules/@sentry/types/esm/status.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _status__WEBPACK_IMPORTED_MODULE_3__["Status"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/types/esm/loglevel.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/types/esm/loglevel.js ***!
  \****************************************************/
/*! exports provided: LogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/** Console logging verbosity for the SDK. */
var LogLevel;
(function (LogLevel) {
    /** No logs will be generated. */
    LogLevel[LogLevel["None"] = 0] = "None";
    /** Only SDK internal errors will be logged. */
    LogLevel[LogLevel["Error"] = 1] = "Error";
    /** Information useful for debugging the SDK will be logged. */
    LogLevel[LogLevel["Debug"] = 2] = "Debug";
    /** All SDK actions will be logged. */
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=loglevel.js.map

/***/ }),

/***/ "./node_modules/@sentry/types/esm/severity.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/types/esm/severity.js ***!
  \****************************************************/
/*! exports provided: Severity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return Severity; });
/** JSDoc */
var Severity;
(function (Severity) {
    /** JSDoc */
    Severity["Fatal"] = "fatal";
    /** JSDoc */
    Severity["Error"] = "error";
    /** JSDoc */
    Severity["Warning"] = "warning";
    /** JSDoc */
    Severity["Log"] = "log";
    /** JSDoc */
    Severity["Info"] = "info";
    /** JSDoc */
    Severity["Debug"] = "debug";
    /** JSDoc */
    Severity["Critical"] = "critical";
})(Severity || (Severity = {}));
// tslint:disable:completed-docs
// tslint:disable:no-unnecessary-qualifier no-namespace
(function (Severity) {
    /**
     * Converts a string-based level into a {@link Severity}.
     *
     * @param level string representation of Severity
     * @returns Severity
     */
    function fromString(level) {
        switch (level) {
            case 'debug':
                return Severity.Debug;
            case 'info':
                return Severity.Info;
            case 'warn':
            case 'warning':
                return Severity.Warning;
            case 'error':
                return Severity.Error;
            case 'fatal':
                return Severity.Fatal;
            case 'critical':
                return Severity.Critical;
            case 'log':
            default:
                return Severity.Log;
        }
    }
    Severity.fromString = fromString;
})(Severity || (Severity = {}));
//# sourceMappingURL=severity.js.map

/***/ }),

/***/ "./node_modules/@sentry/types/esm/span.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/types/esm/span.js ***!
  \************************************************/
/*! exports provided: SpanStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpanStatus", function() { return SpanStatus; });
/** The status of an Span. */
var SpanStatus;
(function (SpanStatus) {
    /** The operation completed successfully. */
    SpanStatus["Ok"] = "ok";
    /** Deadline expired before operation could complete. */
    SpanStatus["DeadlineExceeded"] = "deadline_exceeded";
    /** 401 Unauthorized (actually does mean unauthenticated according to RFC 7235) */
    SpanStatus["Unauthenticated"] = "unauthenticated";
    /** 403 Forbidden */
    SpanStatus["PermissionDenied"] = "permission_denied";
    /** 404 Not Found. Some requested entity (file or directory) was not found. */
    SpanStatus["NotFound"] = "not_found";
    /** 429 Too Many Requests */
    SpanStatus["ResourceExhausted"] = "resource_exhausted";
    /** Client specified an invalid argument. 4xx. */
    SpanStatus["InvalidArgument"] = "invalid_argument";
    /** 501 Not Implemented */
    SpanStatus["Unimplemented"] = "unimplemented";
    /** 503 Service Unavailable */
    SpanStatus["Unavailable"] = "unavailable";
    /** Other/generic 5xx. */
    SpanStatus["InternalError"] = "internal_error";
    /** Unknown. Any non-standard HTTP status code. */
    SpanStatus["UnknownError"] = "unknown_error";
    /** The operation was cancelled (typically by the user). */
    SpanStatus["Cancelled"] = "cancelled";
    /** Already exists (409) */
    SpanStatus["AlreadyExists"] = "already_exists";
    /** Operation was rejected because the system is not in a state required for the operation's */
    SpanStatus["FailedPrecondition"] = "failed_precondition";
    /** The operation was aborted, typically due to a concurrency issue. */
    SpanStatus["Aborted"] = "aborted";
    /** Operation was attempted past the valid range. */
    SpanStatus["OutOfRange"] = "out_of_range";
    /** Unrecoverable data loss or corruption */
    SpanStatus["DataLoss"] = "data_loss";
})(SpanStatus || (SpanStatus = {}));
// tslint:disable:no-unnecessary-qualifier no-namespace
(function (SpanStatus) {
    /**
     * Converts a HTTP status code into a {@link SpanStatus}.
     *
     * @param httpStatus The HTTP response status code.
     * @returns The span status or {@link SpanStatus.UnknownError}.
     */
    // tslint:disable-next-line:completed-docs
    function fromHttpCode(httpStatus) {
        if (httpStatus < 400) {
            return SpanStatus.Ok;
        }
        if (httpStatus >= 400 && httpStatus < 500) {
            switch (httpStatus) {
                case 401:
                    return SpanStatus.Unauthenticated;
                case 403:
                    return SpanStatus.PermissionDenied;
                case 404:
                    return SpanStatus.NotFound;
                case 409:
                    return SpanStatus.AlreadyExists;
                case 413:
                    return SpanStatus.FailedPrecondition;
                case 429:
                    return SpanStatus.ResourceExhausted;
                default:
                    return SpanStatus.InvalidArgument;
            }
        }
        if (httpStatus >= 500 && httpStatus < 600) {
            switch (httpStatus) {
                case 501:
                    return SpanStatus.Unimplemented;
                case 503:
                    return SpanStatus.Unavailable;
                case 504:
                    return SpanStatus.DeadlineExceeded;
                default:
                    return SpanStatus.InternalError;
            }
        }
        return SpanStatus.UnknownError;
    }
    SpanStatus.fromHttpCode = fromHttpCode;
})(SpanStatus || (SpanStatus = {}));
//# sourceMappingURL=span.js.map

/***/ }),

/***/ "./node_modules/@sentry/types/esm/status.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/types/esm/status.js ***!
  \**************************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/** The status of an event. */
var Status;
(function (Status) {
    /** The status could not be determined. */
    Status["Unknown"] = "unknown";
    /** The event was skipped due to configuration or callbacks. */
    Status["Skipped"] = "skipped";
    /** The event was sent to Sentry successfully. */
    Status["Success"] = "success";
    /** The client is currently rate limited and will try again later. */
    Status["RateLimit"] = "rate_limit";
    /** The event could not be processed. */
    Status["Invalid"] = "invalid";
    /** A server-side error ocurred during submission. */
    Status["Failed"] = "failed";
})(Status || (Status = {}));
// tslint:disable:completed-docs
// tslint:disable:no-unnecessary-qualifier no-namespace
(function (Status) {
    /**
     * Converts a HTTP status code into a {@link Status}.
     *
     * @param code The HTTP response status code.
     * @returns The send status or {@link Status.Unknown}.
     */
    function fromHttpCode(code) {
        if (code >= 200 && code < 300) {
            return Status.Success;
        }
        if (code === 429) {
            return Status.RateLimit;
        }
        if (code >= 400 && code < 500) {
            return Status.Invalid;
        }
        if (code >= 500) {
            return Status.Failed;
        }
        return Status.Unknown;
    }
    Status.fromHttpCode = fromHttpCode;
})(Status || (Status = {}));
//# sourceMappingURL=status.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/async.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/async.js ***!
  \*************************************************/
/*! exports provided: forget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forget", function() { return forget; });
/**
 * Consumes the promise and logs the error when it rejects.
 * @param promise A promise to forget.
 */
function forget(promise) {
    promise.then(null, function (e) {
        // TODO: Use a better logging mechanism
        console.error(e);
    });
}
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/dsn.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/utils/esm/dsn.js ***!
  \***********************************************/
/*! exports provided: Dsn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dsn", function() { return Dsn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/@sentry/utils/esm/error.js");


/** Regular expression used to parse a Dsn. */
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/;
/** Error message */
var ERROR_MESSAGE = 'Invalid Dsn';
/** The Sentry Dsn, identifying a Sentry instance and project. */
var Dsn = /** @class */ (function () {
    /** Creates a new Dsn component */
    function Dsn(from) {
        if (typeof from === 'string') {
            this._fromString(from);
        }
        else {
            this._fromComponents(from);
        }
        this._validate();
    }
    /**
     * Renders the string representation of this Dsn.
     *
     * By default, this will render the public representation without the password
     * component. To get the deprecated private representation, set `withPassword`
     * to true.
     *
     * @param withPassword When set to true, the password will be included.
     */
    Dsn.prototype.toString = function (withPassword) {
        if (withPassword === void 0) { withPassword = false; }
        // tslint:disable-next-line:no-this-assignment
        var _a = this, host = _a.host, path = _a.path, pass = _a.pass, port = _a.port, projectId = _a.projectId, protocol = _a.protocol, user = _a.user;
        return (protocol + "://" + user + (withPassword && pass ? ":" + pass : '') +
            ("@" + host + (port ? ":" + port : '') + "/" + (path ? path + "/" : path) + projectId));
    };
    /** Parses a string into this Dsn. */
    Dsn.prototype._fromString = function (str) {
        var match = DSN_REGEX.exec(str);
        if (!match) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"](ERROR_MESSAGE);
        }
        var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](match.slice(1), 6), protocol = _a[0], user = _a[1], _b = _a[2], pass = _b === void 0 ? '' : _b, host = _a[3], _c = _a[4], port = _c === void 0 ? '' : _c, lastPath = _a[5];
        var path = '';
        var projectId = lastPath;
        var split = projectId.split('/');
        if (split.length > 1) {
            path = split.slice(0, -1).join('/');
            projectId = split.pop();
        }
        this._fromComponents({ host: host, pass: pass, path: path, projectId: projectId, port: port, protocol: protocol, user: user });
    };
    /** Maps Dsn components into this instance. */
    Dsn.prototype._fromComponents = function (components) {
        this.protocol = components.protocol;
        this.user = components.user;
        this.pass = components.pass || '';
        this.host = components.host;
        this.port = components.port || '';
        this.path = components.path || '';
        this.projectId = components.projectId;
    };
    /** Validates this Dsn and throws on error. */
    Dsn.prototype._validate = function () {
        var _this = this;
        ['protocol', 'user', 'host', 'projectId'].forEach(function (component) {
            if (!_this[component]) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"](ERROR_MESSAGE);
            }
        });
        if (this.protocol !== 'http' && this.protocol !== 'https') {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"](ERROR_MESSAGE);
        }
        if (this.port && isNaN(parseInt(this.port, 10))) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"](ERROR_MESSAGE);
        }
    };
    return Dsn;
}());

//# sourceMappingURL=dsn.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/error.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/error.js ***!
  \*************************************************/
/*! exports provided: SentryError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentryError", function() { return SentryError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfill */ "./node_modules/@sentry/utils/esm/polyfill.js");


/** An error emitted by Sentry SDKs and related utilities. */
var SentryError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SentryError, _super);
    function SentryError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.message = message;
        // tslint:disable:no-unsafe-any
        _this.name = _newTarget.prototype.constructor.name;
        Object(_polyfill__WEBPACK_IMPORTED_MODULE_1__["setPrototypeOf"])(_this, _newTarget.prototype);
        return _this;
    }
    return SentryError;
}(Error));

//# sourceMappingURL=error.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/index.js ***!
  \*************************************************/
/*! exports provided: forget, SentryError, isError, isErrorEvent, isDOMError, isDOMException, isString, isPrimitive, isPlainObject, isEvent, isElement, isRegExp, isThenable, isSyntheticEvent, isInstanceOf, logger, Memo, dynamicRequire, isNodeEnv, getGlobalObject, uuid4, parseUrl, getEventDescription, consoleSandbox, addExceptionTypeValue, addExceptionMechanism, getLocationHref, htmlTreeAsString, crossPlatformPerformance, timestampWithMs, parseSemver, parseRetryAfterHeader, getFunctionName, addContextToFrame, fill, urlEncode, normalizeToSize, walk, normalize, extractExceptionKeysForMessage, dropUndefinedKeys, resolve, relative, normalizePath, isAbsolute, join, dirname, basename, PromiseBuffer, truncate, snipLine, safeJoin, isMatchingPattern, supportsErrorEvent, supportsDOMError, supportsDOMException, supportsFetch, supportsNativeFetch, supportsReportingObserver, supportsReferrerPolicy, supportsHistory, SyncPromise, addInstrumentationHandler, Dsn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async */ "./node_modules/@sentry/utils/esm/async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forget", function() { return _async__WEBPACK_IMPORTED_MODULE_0__["forget"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/@sentry/utils/esm/error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SentryError", function() { return _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"]; });

/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isErrorEvent", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isErrorEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMError", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isDOMError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMException", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isDOMException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEvent", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThenable", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isThenable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSyntheticEvent", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isSyntheticEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInstanceOf", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isInstanceOf"]; });

/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _logger__WEBPACK_IMPORTED_MODULE_3__["logger"]; });

/* harmony import */ var _memo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./memo */ "./node_modules/@sentry/utils/esm/memo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Memo", function() { return _memo__WEBPACK_IMPORTED_MODULE_4__["Memo"]; });

/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./misc */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dynamicRequire", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["dynamicRequire"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNodeEnv", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["isNodeEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalObject", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["getGlobalObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["uuid4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["parseUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEventDescription", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["getEventDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "consoleSandbox", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["consoleSandbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addExceptionTypeValue", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["addExceptionTypeValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addExceptionMechanism", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["addExceptionMechanism"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocationHref", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["getLocationHref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlTreeAsString", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["htmlTreeAsString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "crossPlatformPerformance", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["crossPlatformPerformance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestampWithMs", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["timestampWithMs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseSemver", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["parseSemver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseRetryAfterHeader", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["parseRetryAfterHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["getFunctionName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addContextToFrame", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["addContextToFrame"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return _object__WEBPACK_IMPORTED_MODULE_6__["fill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlEncode", function() { return _object__WEBPACK_IMPORTED_MODULE_6__["urlEncode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeToSize", function() { return _object__WEBPACK_IMPORTED_MODULE_6__["normalizeToSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return _object__WEBPACK_IMPORTED_MODULE_6__["walk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _object__WEBPACK_IMPORTED_MODULE_6__["normalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractExceptionKeysForMessage", function() { return _object__WEBPACK_IMPORTED_MODULE_6__["extractExceptionKeysForMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropUndefinedKeys", function() { return _object__WEBPACK_IMPORTED_MODULE_6__["dropUndefinedKeys"]; });

/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./path */ "./node_modules/@sentry/utils/esm/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return _path__WEBPACK_IMPORTED_MODULE_7__["resolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return _path__WEBPACK_IMPORTED_MODULE_7__["relative"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizePath", function() { return _path__WEBPACK_IMPORTED_MODULE_7__["normalizePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAbsolute", function() { return _path__WEBPACK_IMPORTED_MODULE_7__["isAbsolute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _path__WEBPACK_IMPORTED_MODULE_7__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return _path__WEBPACK_IMPORTED_MODULE_7__["dirname"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return _path__WEBPACK_IMPORTED_MODULE_7__["basename"]; });

/* harmony import */ var _promisebuffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./promisebuffer */ "./node_modules/@sentry/utils/esm/promisebuffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PromiseBuffer", function() { return _promisebuffer__WEBPACK_IMPORTED_MODULE_8__["PromiseBuffer"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./string */ "./node_modules/@sentry/utils/esm/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return _string__WEBPACK_IMPORTED_MODULE_9__["truncate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snipLine", function() { return _string__WEBPACK_IMPORTED_MODULE_9__["snipLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeJoin", function() { return _string__WEBPACK_IMPORTED_MODULE_9__["safeJoin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMatchingPattern", function() { return _string__WEBPACK_IMPORTED_MODULE_9__["isMatchingPattern"]; });

/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./supports */ "./node_modules/@sentry/utils/esm/supports.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsErrorEvent", function() { return _supports__WEBPACK_IMPORTED_MODULE_10__["supportsErrorEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsDOMError", function() { return _supports__WEBPACK_IMPORTED_MODULE_10__["supportsDOMError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsDOMException", function() { return _supports__WEBPACK_IMPORTED_MODULE_10__["supportsDOMException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsFetch", function() { return _supports__WEBPACK_IMPORTED_MODULE_10__["supportsFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsNativeFetch", function() { return _supports__WEBPACK_IMPORTED_MODULE_10__["supportsNativeFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsReportingObserver", function() { return _supports__WEBPACK_IMPORTED_MODULE_10__["supportsReportingObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsReferrerPolicy", function() { return _supports__WEBPACK_IMPORTED_MODULE_10__["supportsReferrerPolicy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsHistory", function() { return _supports__WEBPACK_IMPORTED_MODULE_10__["supportsHistory"]; });

/* harmony import */ var _syncpromise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./syncpromise */ "./node_modules/@sentry/utils/esm/syncpromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SyncPromise", function() { return _syncpromise__WEBPACK_IMPORTED_MODULE_11__["SyncPromise"]; });

/* harmony import */ var _instrument__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./instrument */ "./node_modules/@sentry/utils/esm/instrument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addInstrumentationHandler", function() { return _instrument__WEBPACK_IMPORTED_MODULE_12__["addInstrumentationHandler"]; });

/* harmony import */ var _dsn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dsn */ "./node_modules/@sentry/utils/esm/dsn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dsn", function() { return _dsn__WEBPACK_IMPORTED_MODULE_13__["Dsn"]; });















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/instrument.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/instrument.js ***!
  \******************************************************/
/*! exports provided: addInstrumentationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInstrumentationHandler", function() { return addInstrumentationHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./misc */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supports */ "./node_modules/@sentry/utils/esm/supports.js");
/* tslint:disable:only-arrow-functions no-unsafe-any */






var global = Object(_misc__WEBPACK_IMPORTED_MODULE_3__["getGlobalObject"])();
/**
 * Instrument native APIs to call handlers that can be used to create breadcrumbs, APM spans etc.
 *  - Console API
 *  - Fetch API
 *  - XHR API
 *  - History API
 *  - DOM API (click/typing)
 *  - Error API
 *  - UnhandledRejection API
 */
var handlers = {};
var instrumented = {};
/** Instruments given API */
function instrument(type) {
    if (instrumented[type]) {
        return;
    }
    instrumented[type] = true;
    switch (type) {
        case 'console':
            instrumentConsole();
            break;
        case 'dom':
            instrumentDOM();
            break;
        case 'xhr':
            instrumentXHR();
            break;
        case 'fetch':
            instrumentFetch();
            break;
        case 'history':
            instrumentHistory();
            break;
        case 'error':
            instrumentError();
            break;
        case 'unhandledrejection':
            instrumentUnhandledRejection();
            break;
        default:
            _logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('unknown instrumentation type:', type);
    }
}
/**
 * Add handler that will be called when given type of instrumentation triggers.
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addInstrumentationHandler(handler) {
    // tslint:disable-next-line:strict-type-predicates
    if (!handler || typeof handler.type !== 'string' || typeof handler.callback !== 'function') {
        return;
    }
    handlers[handler.type] = handlers[handler.type] || [];
    handlers[handler.type].push(handler.callback);
    instrument(handler.type);
}
/** JSDoc */
function triggerHandlers(type, data) {
    var e_1, _a;
    if (!type || !handlers[type]) {
        return;
    }
    try {
        for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](handlers[type] || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var handler = _c.value;
            try {
                handler(data);
            }
            catch (e) {
                _logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Error while triggering instrumentation handler.\nType: " + type + "\nName: " + Object(_misc__WEBPACK_IMPORTED_MODULE_3__["getFunctionName"])(handler) + "\nError: " + e);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/** JSDoc */
function instrumentConsole() {
    if (!('console' in global)) {
        return;
    }
    ['debug', 'info', 'warn', 'error', 'log', 'assert'].forEach(function (level) {
        if (!(level in global.console)) {
            return;
        }
        Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(global.console, level, function (originalConsoleLevel) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                triggerHandlers('console', { args: args, level: level });
                // this fails for some browsers. :(
                if (originalConsoleLevel) {
                    Function.prototype.apply.call(originalConsoleLevel, global.console, args);
                }
            };
        });
    });
}
/** JSDoc */
function instrumentFetch() {
    if (!Object(_supports__WEBPACK_IMPORTED_MODULE_5__["supportsNativeFetch"])()) {
        return;
    }
    Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(global, 'fetch', function (originalFetch) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var commonHandlerData = {
                args: args,
                fetchData: {
                    method: getFetchMethod(args),
                    url: getFetchUrl(args),
                },
                startTimestamp: Date.now(),
            };
            triggerHandlers('fetch', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, commonHandlerData));
            return originalFetch.apply(global, args).then(function (response) {
                triggerHandlers('fetch', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, commonHandlerData, { endTimestamp: Date.now(), response: response }));
                return response;
            }, function (error) {
                triggerHandlers('fetch', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, commonHandlerData, { endTimestamp: Date.now(), error: error }));
                throw error;
            });
        };
    });
}
/** Extract `method` from fetch call arguments */
function getFetchMethod(fetchArgs) {
    if (fetchArgs === void 0) { fetchArgs = []; }
    if ('Request' in global && Object(_is__WEBPACK_IMPORTED_MODULE_1__["isInstanceOf"])(fetchArgs[0], Request) && fetchArgs[0].method) {
        return String(fetchArgs[0].method).toUpperCase();
    }
    if (fetchArgs[1] && fetchArgs[1].method) {
        return String(fetchArgs[1].method).toUpperCase();
    }
    return 'GET';
}
/** Extract `url` from fetch call arguments */
function getFetchUrl(fetchArgs) {
    if (fetchArgs === void 0) { fetchArgs = []; }
    if (typeof fetchArgs[0] === 'string') {
        return fetchArgs[0];
    }
    if ('Request' in global && Object(_is__WEBPACK_IMPORTED_MODULE_1__["isInstanceOf"])(fetchArgs[0], Request)) {
        return fetchArgs[0].url;
    }
    return String(fetchArgs[0]);
}
/** JSDoc */
function instrumentXHR() {
    if (!('XMLHttpRequest' in global)) {
        return;
    }
    var xhrproto = XMLHttpRequest.prototype;
    Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(xhrproto, 'open', function (originalOpen) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var url = args[1];
            this.__sentry_xhr__ = {
                method: Object(_is__WEBPACK_IMPORTED_MODULE_1__["isString"])(args[0]) ? args[0].toUpperCase() : args[0],
                url: args[1],
            };
            // if Sentry key appears in URL, don't capture it as a request
            if (Object(_is__WEBPACK_IMPORTED_MODULE_1__["isString"])(url) && this.__sentry_xhr__.method === 'POST' && url.match(/sentry_key/)) {
                this.__sentry_own_request__ = true;
            }
            return originalOpen.apply(this, args);
        };
    });
    Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(xhrproto, 'send', function (originalSend) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var xhr = this; // tslint:disable-line:no-this-assignment
            var commonHandlerData = {
                args: args,
                startTimestamp: Date.now(),
                xhr: xhr,
            };
            triggerHandlers('xhr', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, commonHandlerData));
            xhr.addEventListener('readystatechange', function () {
                if (xhr.readyState === 4) {
                    try {
                        // touching statusCode in some platforms throws
                        // an exception
                        if (xhr.__sentry_xhr__) {
                            xhr.__sentry_xhr__.status_code = xhr.status;
                        }
                    }
                    catch (e) {
                        /* do nothing */
                    }
                    triggerHandlers('xhr', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, commonHandlerData, { endTimestamp: Date.now() }));
                }
            });
            return originalSend.apply(this, args);
        };
    });
}
var lastHref;
/** JSDoc */
function instrumentHistory() {
    if (!Object(_supports__WEBPACK_IMPORTED_MODULE_5__["supportsHistory"])()) {
        return;
    }
    var oldOnPopState = global.onpopstate;
    global.onpopstate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var to = global.location.href;
        // keep track of the current URL state, as we always receive only the updated state
        var from = lastHref;
        lastHref = to;
        triggerHandlers('history', {
            from: from,
            to: to,
        });
        if (oldOnPopState) {
            return oldOnPopState.apply(this, args);
        }
    };
    /** @hidden */
    function historyReplacementFunction(originalHistoryFunction) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var url = args.length > 2 ? args[2] : undefined;
            if (url) {
                // coerce to string (this is what pushState does)
                var from = lastHref;
                var to = String(url);
                // keep track of the current URL state, as we always receive only the updated state
                lastHref = to;
                triggerHandlers('history', {
                    from: from,
                    to: to,
                });
            }
            return originalHistoryFunction.apply(this, args);
        };
    }
    Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(global.history, 'pushState', historyReplacementFunction);
    Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(global.history, 'replaceState', historyReplacementFunction);
}
/** JSDoc */
function instrumentDOM() {
    if (!('document' in global)) {
        return;
    }
    // Capture breadcrumbs from any click that is unhandled / bubbled up all the way
    // to the document. Do this before we instrument addEventListener.
    global.document.addEventListener('click', domEventHandler('click', triggerHandlers.bind(null, 'dom')), false);
    global.document.addEventListener('keypress', keypressEventHandler(triggerHandlers.bind(null, 'dom')), false);
    // After hooking into document bubbled up click and keypresses events, we also hook into user handled click & keypresses.
    ['EventTarget', 'Node'].forEach(function (target) {
        var proto = global[target] && global[target].prototype;
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }
        Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(proto, 'addEventListener', function (original) {
            return function (eventName, fn, options) {
                if (fn && fn.handleEvent) {
                    if (eventName === 'click') {
                        Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(fn, 'handleEvent', function (innerOriginal) {
                            return function (event) {
                                domEventHandler('click', triggerHandlers.bind(null, 'dom'))(event);
                                return innerOriginal.call(this, event);
                            };
                        });
                    }
                    if (eventName === 'keypress') {
                        Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(fn, 'handleEvent', function (innerOriginal) {
                            return function (event) {
                                keypressEventHandler(triggerHandlers.bind(null, 'dom'))(event);
                                return innerOriginal.call(this, event);
                            };
                        });
                    }
                }
                else {
                    if (eventName === 'click') {
                        domEventHandler('click', triggerHandlers.bind(null, 'dom'), true)(this);
                    }
                    if (eventName === 'keypress') {
                        keypressEventHandler(triggerHandlers.bind(null, 'dom'))(this);
                    }
                }
                return original.call(this, eventName, fn, options);
            };
        });
        Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(proto, 'removeEventListener', function (original) {
            return function (eventName, fn, options) {
                var callback = fn;
                try {
                    callback = callback && (callback.__sentry_wrapped__ || callback);
                }
                catch (e) {
                    // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
                }
                return original.call(this, eventName, callback, options);
            };
        });
    });
}
var debounceDuration = 1000;
var debounceTimer = 0;
var keypressTimeout;
var lastCapturedEvent;
/**
 * Wraps addEventListener to capture UI breadcrumbs
 * @param name the event name (e.g. "click")
 * @param handler function that will be triggered
 * @param debounce decides whether it should wait till another event loop
 * @returns wrapped breadcrumb events handler
 * @hidden
 */
function domEventHandler(name, handler, debounce) {
    if (debounce === void 0) { debounce = false; }
    return function (event) {
        // reset keypress timeout; e.g. triggering a 'click' after
        // a 'keypress' will reset the keypress debounce so that a new
        // set of keypresses can be recorded
        keypressTimeout = undefined;
        // It's possible this handler might trigger multiple times for the same
        // event (e.g. event propagation through node ancestors). Ignore if we've
        // already captured the event.
        if (!event || lastCapturedEvent === event) {
            return;
        }
        lastCapturedEvent = event;
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }
        if (debounce) {
            debounceTimer = setTimeout(function () {
                handler({ event: event, name: name });
            });
        }
        else {
            handler({ event: event, name: name });
        }
    };
}
/**
 * Wraps addEventListener to capture keypress UI events
 * @param handler function that will be triggered
 * @returns wrapped keypress events handler
 * @hidden
 */
function keypressEventHandler(handler) {
    // TODO: if somehow user switches keypress target before
    //       debounce timeout is triggered, we will only capture
    //       a single breadcrumb from the FIRST target (acceptable?)
    return function (event) {
        var target;
        try {
            target = event.target;
        }
        catch (e) {
            // just accessing event properties can throw an exception in some rare circumstances
            // see: https://github.com/getsentry/raven-js/issues/838
            return;
        }
        var tagName = target && target.tagName;
        // only consider keypress events on actual input elements
        // this will disregard keypresses targeting body (e.g. tabbing
        // through elements, hotkeys, etc)
        if (!tagName || (tagName !== 'INPUT' && tagName !== 'TEXTAREA' && !target.isContentEditable)) {
            return;
        }
        // record first keypress in a series, but ignore subsequent
        // keypresses until debounce clears
        if (!keypressTimeout) {
            domEventHandler('input', handler)(event);
        }
        clearTimeout(keypressTimeout);
        keypressTimeout = setTimeout(function () {
            keypressTimeout = undefined;
        }, debounceDuration);
    };
}
var _oldOnErrorHandler = null;
/** JSDoc */
function instrumentError() {
    _oldOnErrorHandler = global.onerror;
    global.onerror = function (msg, url, line, column, error) {
        triggerHandlers('error', {
            column: column,
            error: error,
            line: line,
            msg: msg,
            url: url,
        });
        if (_oldOnErrorHandler) {
            return _oldOnErrorHandler.apply(this, arguments);
        }
        return false;
    };
}
var _oldOnUnhandledRejectionHandler = null;
/** JSDoc */
function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = global.onunhandledrejection;
    global.onunhandledrejection = function (e) {
        triggerHandlers('unhandledrejection', e);
        if (_oldOnUnhandledRejectionHandler) {
            return _oldOnUnhandledRejectionHandler.apply(this, arguments);
        }
        return true;
    };
}
//# sourceMappingURL=instrument.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/is.js":
/*!**********************************************!*\
  !*** ./node_modules/@sentry/utils/esm/is.js ***!
  \**********************************************/
/*! exports provided: isError, isErrorEvent, isDOMError, isDOMException, isString, isPrimitive, isPlainObject, isEvent, isElement, isRegExp, isThenable, isSyntheticEvent, isInstanceOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return isError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErrorEvent", function() { return isErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMError", function() { return isDOMError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMException", function() { return isDOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEvent", function() { return isEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isThenable", function() { return isThenable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSyntheticEvent", function() { return isSyntheticEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInstanceOf", function() { return isInstanceOf; });
/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
    switch (Object.prototype.toString.call(wat)) {
        case '[object Error]':
            return true;
        case '[object Exception]':
            return true;
        case '[object DOMException]':
            return true;
        default:
            return isInstanceOf(wat, Error);
    }
}
/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isErrorEvent(wat) {
    return Object.prototype.toString.call(wat) === '[object ErrorEvent]';
}
/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMError(wat) {
    return Object.prototype.toString.call(wat) === '[object DOMError]';
}
/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMException(wat) {
    return Object.prototype.toString.call(wat) === '[object DOMException]';
}
/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isString(wat) {
    return Object.prototype.toString.call(wat) === '[object String]';
}
/**
 * Checks whether given value's is a primitive (undefined, null, number, boolean, string)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPrimitive(wat) {
    return wat === null || (typeof wat !== 'object' && typeof wat !== 'function');
}
/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
    return Object.prototype.toString.call(wat) === '[object Object]';
}
/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isEvent(wat) {
    // tslint:disable-next-line:strict-type-predicates
    return typeof Event !== 'undefined' && isInstanceOf(wat, Event);
}
/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isElement(wat) {
    // tslint:disable-next-line:strict-type-predicates
    return typeof Element !== 'undefined' && isInstanceOf(wat, Element);
}
/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isRegExp(wat) {
    return Object.prototype.toString.call(wat) === '[object RegExp]';
}
/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
function isThenable(wat) {
    // tslint:disable:no-unsafe-any
    return Boolean(wat && wat.then && typeof wat.then === 'function');
    // tslint:enable:no-unsafe-any
}
/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isSyntheticEvent(wat) {
    // tslint:disable-next-line:no-unsafe-any
    return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}
/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */
function isInstanceOf(wat, base) {
    try {
        // tslint:disable-next-line:no-unsafe-any
        return wat instanceof base;
    }
    catch (_e) {
        return false;
    }
}
//# sourceMappingURL=is.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/logger.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/logger.js ***!
  \**************************************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misc */ "./node_modules/@sentry/utils/esm/misc.js");

// TODO: Implement different loggers for different environments
var global = Object(_misc__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"])();
/** Prefix for logging strings */
var PREFIX = 'Sentry Logger ';
/** JSDoc */
var Logger = /** @class */ (function () {
    /** JSDoc */
    function Logger() {
        this._enabled = false;
    }
    /** JSDoc */
    Logger.prototype.disable = function () {
        this._enabled = false;
    };
    /** JSDoc */
    Logger.prototype.enable = function () {
        this._enabled = true;
    };
    /** JSDoc */
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        Object(_misc__WEBPACK_IMPORTED_MODULE_0__["consoleSandbox"])(function () {
            global.console.log(PREFIX + "[Log]: " + args.join(' ')); // tslint:disable-line:no-console
        });
    };
    /** JSDoc */
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        Object(_misc__WEBPACK_IMPORTED_MODULE_0__["consoleSandbox"])(function () {
            global.console.warn(PREFIX + "[Warn]: " + args.join(' ')); // tslint:disable-line:no-console
        });
    };
    /** JSDoc */
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        Object(_misc__WEBPACK_IMPORTED_MODULE_0__["consoleSandbox"])(function () {
            global.console.error(PREFIX + "[Error]: " + args.join(' ')); // tslint:disable-line:no-console
        });
    };
    return Logger;
}());
// Ensure we only have a single logger instance, even if multiple versions of @sentry/utils are being used
global.__SENTRY__ = global.__SENTRY__ || {};
var logger = global.__SENTRY__.logger || (global.__SENTRY__.logger = new Logger());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/memo.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/memo.js ***!
  \************************************************/
/*! exports provided: Memo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Memo", function() { return Memo; });
// tslint:disable:no-unsafe-any
/**
 * Memo class used for decycle json objects. Uses WeakSet if available otherwise array.
 */
var Memo = /** @class */ (function () {
    function Memo() {
        // tslint:disable-next-line
        this._hasWeakSet = typeof WeakSet === 'function';
        this._inner = this._hasWeakSet ? new WeakSet() : [];
    }
    /**
     * Sets obj to remember.
     * @param obj Object to remember
     */
    Memo.prototype.memoize = function (obj) {
        if (this._hasWeakSet) {
            if (this._inner.has(obj)) {
                return true;
            }
            this._inner.add(obj);
            return false;
        }
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < this._inner.length; i++) {
            var value = this._inner[i];
            if (value === obj) {
                return true;
            }
        }
        this._inner.push(obj);
        return false;
    };
    /**
     * Removes object from internal storage.
     * @param obj Object to forget
     */
    Memo.prototype.unmemoize = function (obj) {
        if (this._hasWeakSet) {
            this._inner.delete(obj);
        }
        else {
            for (var i = 0; i < this._inner.length; i++) {
                if (this._inner[i] === obj) {
                    this._inner.splice(i, 1);
                    break;
                }
            }
        }
    };
    return Memo;
}());

//# sourceMappingURL=memo.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/misc.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/misc.js ***!
  \************************************************/
/*! exports provided: dynamicRequire, isNodeEnv, getGlobalObject, uuid4, parseUrl, getEventDescription, consoleSandbox, addExceptionTypeValue, addExceptionMechanism, getLocationHref, htmlTreeAsString, crossPlatformPerformance, timestampWithMs, parseSemver, parseRetryAfterHeader, getFunctionName, addContextToFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicRequire", function() { return dynamicRequire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeEnv", function() { return isNodeEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalObject", function() { return getGlobalObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return uuid4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return parseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventDescription", function() { return getEventDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleSandbox", function() { return consoleSandbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExceptionTypeValue", function() { return addExceptionTypeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExceptionMechanism", function() { return addExceptionMechanism; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationHref", function() { return getLocationHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlTreeAsString", function() { return htmlTreeAsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossPlatformPerformance", function() { return crossPlatformPerformance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestampWithMs", function() { return timestampWithMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSemver", function() { return parseSemver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRetryAfterHeader", function() { return parseRetryAfterHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return getFunctionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addContextToFrame", function() { return addContextToFrame; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string */ "./node_modules/@sentry/utils/esm/string.js");


/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */
function dynamicRequire(mod, request) {
    // tslint:disable-next-line: no-unsafe-any
    return mod.require(request);
}
/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
function isNodeEnv() {
    // tslint:disable:strict-type-predicates
    return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
}
var fallbackGlobalObject = {};
/**
 * Safely get global scope object
 *
 * @returns Global scope object
 */
function getGlobalObject() {
    return (isNodeEnv()
        ? global
        : typeof window !== 'undefined'
            ? window
            : typeof self !== 'undefined'
                ? self
                : fallbackGlobalObject);
}
/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
function uuid4() {
    var global = getGlobalObject();
    var crypto = global.crypto || global.msCrypto;
    if (!(crypto === void 0) && crypto.getRandomValues) {
        // Use window.crypto API if available
        var arr = new Uint16Array(8);
        crypto.getRandomValues(arr);
        // set 4 in byte 7
        // tslint:disable-next-line:no-bitwise
        arr[3] = (arr[3] & 0xfff) | 0x4000;
        // set 2 most significant bits of byte 9 to '10'
        // tslint:disable-next-line:no-bitwise
        arr[4] = (arr[4] & 0x3fff) | 0x8000;
        var pad = function (num) {
            var v = num.toString(16);
            while (v.length < 4) {
                v = "0" + v;
            }
            return v;
        };
        return (pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]));
    }
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // tslint:disable-next-line:no-bitwise
        var r = (Math.random() * 16) | 0;
        // tslint:disable-next-line:no-bitwise
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */
function parseUrl(url) {
    if (!url) {
        return {};
    }
    var match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
        return {};
    }
    // coerce to undefined values to empty string so we don't get 'undefined'
    var query = match[6] || '';
    var fragment = match[8] || '';
    return {
        host: match[4],
        path: match[5],
        protocol: match[2],
        relative: match[5] + query + fragment,
    };
}
/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
function getEventDescription(event) {
    if (event.message) {
        return event.message;
    }
    if (event.exception && event.exception.values && event.exception.values[0]) {
        var exception = event.exception.values[0];
        if (exception.type && exception.value) {
            return exception.type + ": " + exception.value;
        }
        return exception.type || exception.value || event.event_id || '<unknown>';
    }
    return event.event_id || '<unknown>';
}
/** JSDoc */
function consoleSandbox(callback) {
    var global = getGlobalObject();
    var levels = ['debug', 'info', 'warn', 'error', 'log', 'assert'];
    if (!('console' in global)) {
        return callback();
    }
    var originalConsole = global.console;
    var wrappedLevels = {};
    // Restore all wrapped console methods
    levels.forEach(function (level) {
        if (level in global.console && originalConsole[level].__sentry_original__) {
            wrappedLevels[level] = originalConsole[level];
            originalConsole[level] = originalConsole[level].__sentry_original__;
        }
    });
    // Perform callback manipulations
    var result = callback();
    // Revert restoration to wrapped state
    Object.keys(wrappedLevels).forEach(function (level) {
        originalConsole[level] = wrappedLevels[level];
    });
    return result;
}
/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */
function addExceptionTypeValue(event, value, type) {
    event.exception = event.exception || {};
    event.exception.values = event.exception.values || [];
    event.exception.values[0] = event.exception.values[0] || {};
    event.exception.values[0].value = event.exception.values[0].value || value || '';
    event.exception.values[0].type = event.exception.values[0].type || type || 'Error';
}
/**
 * Adds exception mechanism to a given event.
 * @param event The event to modify.
 * @param mechanism Mechanism of the mechanism.
 * @hidden
 */
function addExceptionMechanism(event, mechanism) {
    if (mechanism === void 0) { mechanism = {}; }
    // TODO: Use real type with `keyof Mechanism` thingy and maybe make it better?
    try {
        // @ts-ignore
        // tslint:disable:no-non-null-assertion
        event.exception.values[0].mechanism = event.exception.values[0].mechanism || {};
        Object.keys(mechanism).forEach(function (key) {
            // @ts-ignore
            event.exception.values[0].mechanism[key] = mechanism[key];
        });
    }
    catch (_oO) {
        // no-empty
    }
}
/**
 * A safe form of location.href
 */
function getLocationHref() {
    try {
        return document.location.href;
    }
    catch (oO) {
        return '';
    }
}
/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlTreeAsString(elem) {
    // try/catch both:
    // - accessing event.target (see getsentry/raven-js#838, #768)
    // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
    // - can throw an exception in some circumstances.
    try {
        var currentElem = elem;
        var MAX_TRAVERSE_HEIGHT = 5;
        var MAX_OUTPUT_LEN = 80;
        var out = [];
        var height = 0;
        var len = 0;
        var separator = ' > ';
        var sepLength = separator.length;
        var nextStr = void 0;
        while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
            nextStr = _htmlElementAsString(currentElem);
            // bail out if
            // - nextStr is the 'html' element
            // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
            //   (ignore this limit if we are on the first iteration)
            if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)) {
                break;
            }
            out.push(nextStr);
            len += nextStr.length;
            currentElem = currentElem.parentNode;
        }
        return out.reverse().join(separator);
    }
    catch (_oO) {
        return '<unknown>';
    }
}
/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function _htmlElementAsString(el) {
    var elem = el;
    var out = [];
    var className;
    var classes;
    var key;
    var attr;
    var i;
    if (!elem || !elem.tagName) {
        return '';
    }
    out.push(elem.tagName.toLowerCase());
    if (elem.id) {
        out.push("#" + elem.id);
    }
    className = elem.className;
    if (className && Object(_is__WEBPACK_IMPORTED_MODULE_0__["isString"])(className)) {
        classes = className.split(/\s+/);
        for (i = 0; i < classes.length; i++) {
            out.push("." + classes[i]);
        }
    }
    var attrWhitelist = ['type', 'name', 'title', 'alt'];
    for (i = 0; i < attrWhitelist.length; i++) {
        key = attrWhitelist[i];
        attr = elem.getAttribute(key);
        if (attr) {
            out.push("[" + key + "=\"" + attr + "\"]");
        }
    }
    return out.join('');
}
var INITIAL_TIME = Date.now();
var prevNow = 0;
var performanceFallback = {
    now: function () {
        var now = Date.now() - INITIAL_TIME;
        if (now < prevNow) {
            now = prevNow;
        }
        prevNow = now;
        return now;
    },
    timeOrigin: INITIAL_TIME,
};
var crossPlatformPerformance = (function () {
    if (isNodeEnv()) {
        try {
            var perfHooks = dynamicRequire(module, 'perf_hooks');
            return perfHooks.performance;
        }
        catch (_) {
            return performanceFallback;
        }
    }
    if (getGlobalObject().performance) {
        // Polyfill for performance.timeOrigin.
        //
        // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
        // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
        // tslint:disable-next-line:strict-type-predicates
        if (performance.timeOrigin === undefined) {
            // As of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always a
            // valid fallback. In the absence of a initial time provided by the browser, fallback to INITIAL_TIME.
            // @ts-ignore
            // tslint:disable-next-line:deprecation
            performance.timeOrigin = (performance.timing && performance.timing.navigationStart) || INITIAL_TIME;
        }
    }
    return getGlobalObject().performance || performanceFallback;
})();
/**
 * Returns a timestamp in seconds with milliseconds precision since the UNIX epoch calculated with the monotonic clock.
 */
function timestampWithMs() {
    return (crossPlatformPerformance.timeOrigin + crossPlatformPerformance.now()) / 1000;
}
// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
var SEMVER_REGEXP = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
/**
 * Parses input into a SemVer interface
 * @param input string representation of a semver version
 */
function parseSemver(input) {
    var match = input.match(SEMVER_REGEXP) || [];
    var major = parseInt(match[1], 10);
    var minor = parseInt(match[2], 10);
    var patch = parseInt(match[3], 10);
    return {
        buildmetadata: match[5],
        major: isNaN(major) ? undefined : major,
        minor: isNaN(minor) ? undefined : minor,
        patch: isNaN(patch) ? undefined : patch,
        prerelease: match[4],
    };
}
var defaultRetryAfter = 60 * 1000; // 60 seconds
/**
 * Extracts Retry-After value from the request header or returns default value
 * @param now current unix timestamp
 * @param header string representation of 'Retry-After' header
 */
function parseRetryAfterHeader(now, header) {
    if (!header) {
        return defaultRetryAfter;
    }
    var headerDelay = parseInt("" + header, 10);
    if (!isNaN(headerDelay)) {
        return headerDelay * 1000;
    }
    var headerDate = Date.parse("" + header);
    if (!isNaN(headerDate)) {
        return headerDate - now;
    }
    return defaultRetryAfter;
}
var defaultFunctionName = '<anonymous>';
/**
 * Safely extract function name from itself
 */
function getFunctionName(fn) {
    try {
        if (!fn || typeof fn !== 'function') {
            return defaultFunctionName;
        }
        return fn.name || defaultFunctionName;
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        return defaultFunctionName;
    }
}
/**
 * This function adds context (pre/post/line) lines to the provided frame
 *
 * @param lines string[] containing all lines
 * @param frame StackFrame that will be mutated
 * @param linesOfContext number of context lines we want to add pre/post
 */
function addContextToFrame(lines, frame, linesOfContext) {
    if (linesOfContext === void 0) { linesOfContext = 5; }
    var lineno = frame.lineno || 0;
    var maxLines = lines.length;
    var sourceLine = Math.max(Math.min(maxLines, lineno - 1), 0);
    frame.pre_context = lines
        .slice(Math.max(0, sourceLine - linesOfContext), sourceLine)
        .map(function (line) { return Object(_string__WEBPACK_IMPORTED_MODULE_1__["snipLine"])(line, 0); });
    frame.context_line = Object(_string__WEBPACK_IMPORTED_MODULE_1__["snipLine"])(lines[Math.min(maxLines - 1, sourceLine)], frame.colno || 0);
    frame.post_context = lines
        .slice(Math.min(sourceLine + 1, maxLines), sourceLine + 1 + linesOfContext)
        .map(function (line) { return Object(_string__WEBPACK_IMPORTED_MODULE_1__["snipLine"])(line, 0); });
}
//# sourceMappingURL=misc.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/object.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/object.js ***!
  \**************************************************/
/*! exports provided: fill, urlEncode, normalizeToSize, walk, normalize, extractExceptionKeysForMessage, dropUndefinedKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlEncode", function() { return urlEncode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeToSize", function() { return normalizeToSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return walk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractExceptionKeysForMessage", function() { return extractExceptionKeysForMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropUndefinedKeys", function() { return dropUndefinedKeys; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _memo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memo */ "./node_modules/@sentry/utils/esm/memo.js");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./misc */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string */ "./node_modules/@sentry/utils/esm/string.js");





/**
 * Wrap a given object method with a higher-order function
 *
 * @param source An object that contains a method to be wrapped.
 * @param name A name of method to be wrapped.
 * @param replacement A function that should be used to wrap a given method.
 * @returns void
 */
function fill(source, name, replacement) {
    if (!(name in source)) {
        return;
    }
    var original = source[name];
    var wrapped = replacement(original);
    // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
    // tslint:disable-next-line:strict-type-predicates
    if (typeof wrapped === 'function') {
        try {
            wrapped.prototype = wrapped.prototype || {};
            Object.defineProperties(wrapped, {
                __sentry_original__: {
                    enumerable: false,
                    value: original,
                },
            });
        }
        catch (_Oo) {
            // This can throw if multiple fill happens on a global object like XMLHttpRequest
            // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
        }
    }
    source[name] = wrapped;
}
/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */
function urlEncode(object) {
    return Object.keys(object)
        .map(
    // tslint:disable-next-line:no-unsafe-any
    function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]); })
        .join('&');
}
/**
 * Transforms any object into an object literal with all it's attributes
 * attached to it.
 *
 * @param value Initial source that we have to transform in order to be usable by the serializer
 */
function getWalkSource(value) {
    if (Object(_is__WEBPACK_IMPORTED_MODULE_1__["isError"])(value)) {
        var error = value;
        var err = {
            message: error.message,
            name: error.name,
            stack: error.stack,
        };
        for (var i in error) {
            if (Object.prototype.hasOwnProperty.call(error, i)) {
                err[i] = error[i];
            }
        }
        return err;
    }
    if (Object(_is__WEBPACK_IMPORTED_MODULE_1__["isEvent"])(value)) {
        var event_1 = value;
        var source = {};
        source.type = event_1.type;
        // Accessing event.target can throw (see getsentry/raven-js#838, #768)
        try {
            source.target = Object(_is__WEBPACK_IMPORTED_MODULE_1__["isElement"])(event_1.target)
                ? Object(_misc__WEBPACK_IMPORTED_MODULE_3__["htmlTreeAsString"])(event_1.target)
                : Object.prototype.toString.call(event_1.target);
        }
        catch (_oO) {
            source.target = '<unknown>';
        }
        try {
            source.currentTarget = Object(_is__WEBPACK_IMPORTED_MODULE_1__["isElement"])(event_1.currentTarget)
                ? Object(_misc__WEBPACK_IMPORTED_MODULE_3__["htmlTreeAsString"])(event_1.currentTarget)
                : Object.prototype.toString.call(event_1.currentTarget);
        }
        catch (_oO) {
            source.currentTarget = '<unknown>';
        }
        // tslint:disable-next-line:strict-type-predicates
        if (typeof CustomEvent !== 'undefined' && Object(_is__WEBPACK_IMPORTED_MODULE_1__["isInstanceOf"])(value, CustomEvent)) {
            source.detail = event_1.detail;
        }
        for (var i in event_1) {
            if (Object.prototype.hasOwnProperty.call(event_1, i)) {
                source[i] = event_1;
            }
        }
        return source;
    }
    return value;
}
/** Calculates bytes size of input string */
function utf8Length(value) {
    // tslint:disable-next-line:no-bitwise
    return ~-encodeURI(value).split(/%..|./).length;
}
/** Calculates bytes size of input object */
function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
}
/** JSDoc */
function normalizeToSize(object, 
// Default Node.js REPL depth
depth, 
// 100kB, as 200kB is max payload size, so half sounds reasonable
maxSize) {
    if (depth === void 0) { depth = 3; }
    if (maxSize === void 0) { maxSize = 100 * 1024; }
    var serialized = normalize(object, depth);
    if (jsonSize(serialized) > maxSize) {
        return normalizeToSize(object, depth - 1, maxSize);
    }
    return serialized;
}
/** Transforms any input value into a string form, either primitive value or a type of the input */
function serializeValue(value) {
    var type = Object.prototype.toString.call(value);
    // Node.js REPL notation
    if (typeof value === 'string') {
        return value;
    }
    if (type === '[object Object]') {
        return '[Object]';
    }
    if (type === '[object Array]') {
        return '[Array]';
    }
    var normalized = normalizeValue(value);
    return Object(_is__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"])(normalized) ? normalized : type;
}
/**
 * normalizeValue()
 *
 * Takes unserializable input and make it serializable friendly
 *
 * - translates undefined/NaN values to "[undefined]"/"[NaN]" respectively,
 * - serializes Error objects
 * - filter global objects
 */
// tslint:disable-next-line:cyclomatic-complexity
function normalizeValue(value, key) {
    if (key === 'domain' && value && typeof value === 'object' && value._events) {
        return '[Domain]';
    }
    if (key === 'domainEmitter') {
        return '[DomainEmitter]';
    }
    if (typeof global !== 'undefined' && value === global) {
        return '[Global]';
    }
    if (typeof window !== 'undefined' && value === window) {
        return '[Window]';
    }
    if (typeof document !== 'undefined' && value === document) {
        return '[Document]';
    }
    // React's SyntheticEvent thingy
    if (Object(_is__WEBPACK_IMPORTED_MODULE_1__["isSyntheticEvent"])(value)) {
        return '[SyntheticEvent]';
    }
    // tslint:disable-next-line:no-tautology-expression
    if (typeof value === 'number' && value !== value) {
        return '[NaN]';
    }
    if (value === void 0) {
        return '[undefined]';
    }
    if (typeof value === 'function') {
        return "[Function: " + Object(_misc__WEBPACK_IMPORTED_MODULE_3__["getFunctionName"])(value) + "]";
    }
    return value;
}
/**
 * Walks an object to perform a normalization on it
 *
 * @param key of object that's walked in current iteration
 * @param value object to be walked
 * @param depth Optional number indicating how deep should walking be performed
 * @param memo Optional Memo class handling decycling
 */
function walk(key, value, depth, memo) {
    if (depth === void 0) { depth = +Infinity; }
    if (memo === void 0) { memo = new _memo__WEBPACK_IMPORTED_MODULE_2__["Memo"](); }
    // If we reach the maximum depth, serialize whatever has left
    if (depth === 0) {
        return serializeValue(value);
    }
    // If value implements `toJSON` method, call it and return early
    // tslint:disable:no-unsafe-any
    if (value !== null && value !== undefined && typeof value.toJSON === 'function') {
        return value.toJSON();
    }
    // tslint:enable:no-unsafe-any
    // If normalized value is a primitive, there are no branches left to walk, so we can just bail out, as theres no point in going down that branch any further
    var normalized = normalizeValue(value, key);
    if (Object(_is__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"])(normalized)) {
        return normalized;
    }
    // Create source that we will use for next itterations, either objectified error object (Error type with extracted keys:value pairs) or the input itself
    var source = getWalkSource(value);
    // Create an accumulator that will act as a parent for all future itterations of that branch
    var acc = Array.isArray(value) ? [] : {};
    // If we already walked that branch, bail out, as it's circular reference
    if (memo.memoize(value)) {
        return '[Circular ~]';
    }
    // Walk all keys of the source
    for (var innerKey in source) {
        // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
        if (!Object.prototype.hasOwnProperty.call(source, innerKey)) {
            continue;
        }
        // Recursively walk through all the child nodes
        acc[innerKey] = walk(innerKey, source[innerKey], depth - 1, memo);
    }
    // Once walked through all the branches, remove the parent from memo storage
    memo.unmemoize(value);
    // Return accumulated values
    return acc;
}
/**
 * normalize()
 *
 * - Creates a copy to prevent original input mutation
 * - Skip non-enumerablers
 * - Calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializeable values (undefined/NaN/Functions) to serializable format
 * - Translates known global objects/Classes to a string representations
 * - Takes care of Error objects serialization
 * - Optionally limit depth of final output
 */
function normalize(input, depth) {
    try {
        // tslint:disable-next-line:no-unsafe-any
        return JSON.parse(JSON.stringify(input, function (key, value) { return walk(key, value, depth); }));
    }
    catch (_oO) {
        return '**non-serializable**';
    }
}
/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */
function extractExceptionKeysForMessage(exception, maxLength) {
    if (maxLength === void 0) { maxLength = 40; }
    // tslint:disable:strict-type-predicates
    var keys = Object.keys(getWalkSource(exception));
    keys.sort();
    if (!keys.length) {
        return '[object has no keys]';
    }
    if (keys[0].length >= maxLength) {
        return Object(_string__WEBPACK_IMPORTED_MODULE_4__["truncate"])(keys[0], maxLength);
    }
    for (var includedKeys = keys.length; includedKeys > 0; includedKeys--) {
        var serialized = keys.slice(0, includedKeys).join(', ');
        if (serialized.length > maxLength) {
            continue;
        }
        if (includedKeys === keys.length) {
            return serialized;
        }
        return Object(_string__WEBPACK_IMPORTED_MODULE_4__["truncate"])(serialized, maxLength);
    }
    return '';
}
/**
 * Given any object, return the new object with removed keys that value was `undefined`.
 * Works recursively on objects and arrays.
 */
function dropUndefinedKeys(val) {
    var e_1, _a;
    if (Object(_is__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(val)) {
        var obj = val;
        var rv = {};
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (typeof obj[key] !== 'undefined') {
                    rv[key] = dropUndefinedKeys(obj[key]);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return rv;
    }
    if (Array.isArray(val)) {
        return val.map(dropUndefinedKeys);
    }
    return val;
}
//# sourceMappingURL=object.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/path.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/path.js ***!
  \************************************************/
/*! exports provided: resolve, relative, normalizePath, isAbsolute, join, dirname, basename */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return resolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return relative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePath", function() { return normalizePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAbsolute", function() { return isAbsolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return dirname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return basename; });
// Slightly modified (no IE8 support, ES6) and transcribed to TypeScript
// https://raw.githubusercontent.com/calvinmetcalf/rollup-plugin-node-builtins/master/src/es6/path.js
/** JSDoc */
function normalizeArray(parts, allowAboveRoot) {
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];
        if (last === '.') {
            parts.splice(i, 1);
        }
        else if (last === '..') {
            parts.splice(i, 1);
            up++;
        }
        else if (up) {
            parts.splice(i, 1);
            up--;
        }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (allowAboveRoot) {
        for (; up--; up) {
            parts.unshift('..');
        }
    }
    return parts;
}
// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
/** JSDoc */
function splitPath(filename) {
    var parts = splitPathRe.exec(filename);
    return parts ? parts.slice(1) : [];
}
// path.resolve([from ...], to)
// posix version
/** JSDoc */
function resolve() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resolvedPath = '';
    var resolvedAbsolute = false;
    for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = i >= 0 ? args[i] : '/';
        // Skip empty entries
        if (!path) {
            continue;
        }
        resolvedPath = path + "/" + resolvedPath;
        resolvedAbsolute = path.charAt(0) === '/';
    }
    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path
    resolvedPath = normalizeArray(resolvedPath.split('/').filter(function (p) { return !!p; }), !resolvedAbsolute).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}
/** JSDoc */
function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
        if (arr[start] !== '') {
            break;
        }
    }
    var end = arr.length - 1;
    for (; end >= 0; end--) {
        if (arr[end] !== '') {
            break;
        }
    }
    if (start > end) {
        return [];
    }
    return arr.slice(start, end - start + 1);
}
// path.relative(from, to)
// posix version
/** JSDoc */
function relative(from, to) {
    // tslint:disable:no-parameter-reassignment
    from = resolve(from).substr(1);
    to = resolve(to).substr(1);
    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
        }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
}
// path.normalize(path)
// posix version
/** JSDoc */
function normalizePath(path) {
    var isPathAbsolute = isAbsolute(path);
    var trailingSlash = path.substr(-1) === '/';
    // Normalize the path
    var normalizedPath = normalizeArray(path.split('/').filter(function (p) { return !!p; }), !isPathAbsolute).join('/');
    if (!normalizedPath && !isPathAbsolute) {
        normalizedPath = '.';
    }
    if (normalizedPath && trailingSlash) {
        normalizedPath += '/';
    }
    return (isPathAbsolute ? '/' : '') + normalizedPath;
}
// posix version
/** JSDoc */
function isAbsolute(path) {
    return path.charAt(0) === '/';
}
// posix version
/** JSDoc */
function join() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return normalizePath(args.join('/'));
}
/** JSDoc */
function dirname(path) {
    var result = splitPath(path);
    var root = result[0];
    var dir = result[1];
    if (!root && !dir) {
        // No dirname whatsoever
        return '.';
    }
    if (dir) {
        // It has a dirname, strip trailing slash
        dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
}
/** JSDoc */
function basename(path, ext) {
    var f = splitPath(path)[2];
    if (ext && f.substr(ext.length * -1) === ext) {
        f = f.substr(0, f.length - ext.length);
    }
    return f;
}
//# sourceMappingURL=path.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/polyfill.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/polyfill.js ***!
  \****************************************************/
/*! exports provided: setPrototypeOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPrototypeOf", function() { return setPrototypeOf; });
var setPrototypeOf = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties); // tslint:disable-line:no-unbound-method
/**
 * setPrototypeOf polyfill using __proto__
 */
function setProtoOf(obj, proto) {
    // @ts-ignore
    obj.__proto__ = proto;
    return obj;
}
/**
 * setPrototypeOf polyfill using mixin
 */
function mixinProperties(obj, proto) {
    for (var prop in proto) {
        if (!obj.hasOwnProperty(prop)) {
            // @ts-ignore
            obj[prop] = proto[prop];
        }
    }
    return obj;
}
//# sourceMappingURL=polyfill.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/promisebuffer.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/promisebuffer.js ***!
  \*********************************************************/
/*! exports provided: PromiseBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseBuffer", function() { return PromiseBuffer; });
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./node_modules/@sentry/utils/esm/error.js");
/* harmony import */ var _syncpromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syncpromise */ "./node_modules/@sentry/utils/esm/syncpromise.js");


/** A simple queue that holds promises. */
var PromiseBuffer = /** @class */ (function () {
    function PromiseBuffer(_limit) {
        this._limit = _limit;
        /** Internal set of queued Promises */
        this._buffer = [];
    }
    /**
     * Says if the buffer is ready to take more requests
     */
    PromiseBuffer.prototype.isReady = function () {
        return this._limit === undefined || this.length() < this._limit;
    };
    /**
     * Add a promise to the queue.
     *
     * @param task Can be any PromiseLike<T>
     * @returns The original promise.
     */
    PromiseBuffer.prototype.add = function (task) {
        var _this = this;
        if (!this.isReady()) {
            return _syncpromise__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].reject(new _error__WEBPACK_IMPORTED_MODULE_0__["SentryError"]('Not adding Promise due to buffer limit reached.'));
        }
        if (this._buffer.indexOf(task) === -1) {
            this._buffer.push(task);
        }
        task
            .then(function () { return _this.remove(task); })
            .then(null, function () {
            return _this.remove(task).then(null, function () {
                // We have to add this catch here otherwise we have an unhandledPromiseRejection
                // because it's a new Promise chain.
            });
        });
        return task;
    };
    /**
     * Remove a promise to the queue.
     *
     * @param task Can be any PromiseLike<T>
     * @returns Removed promise.
     */
    PromiseBuffer.prototype.remove = function (task) {
        var removedTask = this._buffer.splice(this._buffer.indexOf(task), 1)[0];
        return removedTask;
    };
    /**
     * This function returns the number of unresolved promises in the queue.
     */
    PromiseBuffer.prototype.length = function () {
        return this._buffer.length;
    };
    /**
     * This will drain the whole queue, returns true if queue is empty or drained.
     * If timeout is provided and the queue takes longer to drain, the promise still resolves but with false.
     *
     * @param timeout Number in ms to wait until it resolves with false.
     */
    PromiseBuffer.prototype.drain = function (timeout) {
        var _this = this;
        return new _syncpromise__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"](function (resolve) {
            var capturedSetTimeout = setTimeout(function () {
                if (timeout && timeout > 0) {
                    resolve(false);
                }
            }, timeout);
            _syncpromise__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].all(_this._buffer)
                .then(function () {
                clearTimeout(capturedSetTimeout);
                resolve(true);
            })
                .then(null, function () {
                resolve(true);
            });
        });
    };
    return PromiseBuffer;
}());

//# sourceMappingURL=promisebuffer.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/string.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/string.js ***!
  \**************************************************/
/*! exports provided: truncate, snipLine, safeJoin, isMatchingPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snipLine", function() { return snipLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeJoin", function() { return safeJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMatchingPattern", function() { return isMatchingPattern; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");

/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function truncate(str, max) {
    if (max === void 0) { max = 0; }
    // tslint:disable-next-line:strict-type-predicates
    if (typeof str !== 'string' || max === 0) {
        return str;
    }
    return str.length <= max ? str : str.substr(0, max) + "...";
}
/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function snipLine(line, colno) {
    var newLine = line;
    var ll = newLine.length;
    if (ll <= 150) {
        return newLine;
    }
    if (colno > ll) {
        colno = ll; // tslint:disable-line:no-parameter-reassignment
    }
    var start = Math.max(colno - 60, 0);
    if (start < 5) {
        start = 0;
    }
    var end = Math.min(start + 140, ll);
    if (end > ll - 5) {
        end = ll;
    }
    if (end === ll) {
        start = Math.max(end - 140, 0);
    }
    newLine = newLine.slice(start, end);
    if (start > 0) {
        newLine = "'{snip} " + newLine;
    }
    if (end < ll) {
        newLine += ' {snip}';
    }
    return newLine;
}
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
        return '';
    }
    var output = [];
    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < input.length; i++) {
        var value = input[i];
        try {
            output.push(String(value));
        }
        catch (e) {
            output.push('[value cannot be serialized]');
        }
    }
    return output.join(delimiter);
}
/**
 * Checks if the value matches a regex or includes the string
 * @param value The string value to be checked against
 * @param pattern Either a regex or a string that must be contained in value
 */
function isMatchingPattern(value, pattern) {
    if (Object(_is__WEBPACK_IMPORTED_MODULE_0__["isRegExp"])(pattern)) {
        return pattern.test(value);
    }
    if (typeof pattern === 'string') {
        return value.indexOf(pattern) !== -1;
    }
    return false;
}
//# sourceMappingURL=string.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/supports.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/supports.js ***!
  \****************************************************/
/*! exports provided: supportsErrorEvent, supportsDOMError, supportsDOMException, supportsFetch, supportsNativeFetch, supportsReportingObserver, supportsReferrerPolicy, supportsHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsErrorEvent", function() { return supportsErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsDOMError", function() { return supportsDOMError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsDOMException", function() { return supportsDOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsFetch", function() { return supportsFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsNativeFetch", function() { return supportsNativeFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsReportingObserver", function() { return supportsReportingObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsReferrerPolicy", function() { return supportsReferrerPolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsHistory", function() { return supportsHistory; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc */ "./node_modules/@sentry/utils/esm/misc.js");


/**
 * Tells whether current environment supports ErrorEvent objects
 * {@link supportsErrorEvent}.
 *
 * @returns Answer to the given question.
 */
function supportsErrorEvent() {
    try {
        // tslint:disable:no-unused-expression
        new ErrorEvent('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMError objects
 * {@link supportsDOMError}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMError() {
    try {
        // It really needs 1 argument, not 0.
        // Chrome: VM89:1 Uncaught TypeError: Failed to construct 'DOMError':
        // 1 argument required, but only 0 present.
        // @ts-ignore
        // tslint:disable:no-unused-expression
        new DOMError('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMException objects
 * {@link supportsDOMException}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMException() {
    try {
        // tslint:disable:no-unused-expression
        new DOMException('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 */
function supportsFetch() {
    if (!('fetch' in Object(_misc__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])())) {
        return false;
    }
    try {
        // tslint:disable-next-line:no-unused-expression
        new Headers();
        // tslint:disable-next-line:no-unused-expression
        new Request('');
        // tslint:disable-next-line:no-unused-expression
        new Response();
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * isNativeFetch checks if the given function is a native implementation of fetch()
 */
function isNativeFetch(func) {
    return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns true if `window.fetch` is natively implemented, false otherwise
 */
function supportsNativeFetch() {
    if (!supportsFetch()) {
        return false;
    }
    var global = Object(_misc__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
    // Fast path to avoid DOM I/O
    // tslint:disable-next-line:no-unbound-method
    if (isNativeFetch(global.fetch)) {
        return true;
    }
    // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
    // so create a "pure" iframe to see if that has native fetch
    var result = false;
    var doc = global.document;
    // tslint:disable-next-line:no-unbound-method deprecation
    if (doc && typeof doc.createElement === "function") {
        try {
            var sandbox = doc.createElement('iframe');
            sandbox.hidden = true;
            doc.head.appendChild(sandbox);
            if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
                // tslint:disable-next-line:no-unbound-method
                result = isNativeFetch(sandbox.contentWindow.fetch);
            }
            doc.head.removeChild(sandbox);
        }
        catch (err) {
            _logger__WEBPACK_IMPORTED_MODULE_0__["logger"].warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', err);
        }
    }
    return result;
}
/**
 * Tells whether current environment supports ReportingObserver API
 * {@link supportsReportingObserver}.
 *
 * @returns Answer to the given question.
 */
function supportsReportingObserver() {
    // tslint:disable-next-line: no-unsafe-any
    return 'ReportingObserver' in Object(_misc__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
}
/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 */
function supportsReferrerPolicy() {
    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
    // https://caniuse.com/#feat=referrer-policy
    // It doesn't. And it throw exception instead of ignoring this parameter...
    // REF: https://github.com/getsentry/raven-js/issues/1233
    if (!supportsFetch()) {
        return false;
    }
    try {
        // tslint:disable:no-unused-expression
        new Request('_', {
            referrerPolicy: 'origin',
        });
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */
function supportsHistory() {
    // NOTE: in Chrome App environment, touching history.pushState, *even inside
    //       a try/catch block*, will cause Chrome to output an error to console.error
    // borrowed from: https://github.com/angular/angular.js/pull/13945/files
    var global = Object(_misc__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
    var chrome = global.chrome;
    // tslint:disable-next-line:no-unsafe-any
    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    var hasHistoryApi = 'history' in global && !!global.history.pushState && !!global.history.replaceState;
    return !isChromePackagedApp && hasHistoryApi;
}
//# sourceMappingURL=supports.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/syncpromise.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/syncpromise.js ***!
  \*******************************************************/
/*! exports provided: SyncPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncPromise", function() { return SyncPromise; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");

/** SyncPromise internal states */
var States;
(function (States) {
    /** Pending */
    States["PENDING"] = "PENDING";
    /** Resolved / OK */
    States["RESOLVED"] = "RESOLVED";
    /** Rejected / Error */
    States["REJECTED"] = "REJECTED";
})(States || (States = {}));
/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */
var SyncPromise = /** @class */ (function () {
    function SyncPromise(executor) {
        var _this = this;
        this._state = States.PENDING;
        this._handlers = [];
        /** JSDoc */
        this._resolve = function (value) {
            _this._setResult(States.RESOLVED, value);
        };
        /** JSDoc */
        this._reject = function (reason) {
            _this._setResult(States.REJECTED, reason);
        };
        /** JSDoc */
        this._setResult = function (state, value) {
            if (_this._state !== States.PENDING) {
                return;
            }
            if (Object(_is__WEBPACK_IMPORTED_MODULE_0__["isThenable"])(value)) {
                value.then(_this._resolve, _this._reject);
                return;
            }
            _this._state = state;
            _this._value = value;
            _this._executeHandlers();
        };
        // TODO: FIXME
        /** JSDoc */
        this._attachHandler = function (handler) {
            _this._handlers = _this._handlers.concat(handler);
            _this._executeHandlers();
        };
        /** JSDoc */
        this._executeHandlers = function () {
            if (_this._state === States.PENDING) {
                return;
            }
            var cachedHandlers = _this._handlers.slice();
            _this._handlers = [];
            cachedHandlers.forEach(function (handler) {
                if (handler.done) {
                    return;
                }
                if (_this._state === States.RESOLVED) {
                    if (handler.onfulfilled) {
                        handler.onfulfilled(_this._value);
                    }
                }
                if (_this._state === States.REJECTED) {
                    if (handler.onrejected) {
                        handler.onrejected(_this._value);
                    }
                }
                handler.done = true;
            });
        };
        try {
            executor(this._resolve, this._reject);
        }
        catch (e) {
            this._reject(e);
        }
    }
    /** JSDoc */
    SyncPromise.prototype.toString = function () {
        return '[object SyncPromise]';
    };
    /** JSDoc */
    SyncPromise.resolve = function (value) {
        return new SyncPromise(function (resolve) {
            resolve(value);
        });
    };
    /** JSDoc */
    SyncPromise.reject = function (reason) {
        return new SyncPromise(function (_, reject) {
            reject(reason);
        });
    };
    /** JSDoc */
    SyncPromise.all = function (collection) {
        return new SyncPromise(function (resolve, reject) {
            if (!Array.isArray(collection)) {
                reject(new TypeError("Promise.all requires an array as input."));
                return;
            }
            if (collection.length === 0) {
                resolve([]);
                return;
            }
            var counter = collection.length;
            var resolvedCollection = [];
            collection.forEach(function (item, index) {
                SyncPromise.resolve(item)
                    .then(function (value) {
                    resolvedCollection[index] = value;
                    counter -= 1;
                    if (counter !== 0) {
                        return;
                    }
                    resolve(resolvedCollection);
                })
                    .then(null, reject);
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.then = function (onfulfilled, onrejected) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            _this._attachHandler({
                done: false,
                onfulfilled: function (result) {
                    if (!onfulfilled) {
                        // TODO: ¯\_(ツ)_/¯
                        // TODO: FIXME
                        resolve(result);
                        return;
                    }
                    try {
                        resolve(onfulfilled(result));
                        return;
                    }
                    catch (e) {
                        reject(e);
                        return;
                    }
                },
                onrejected: function (reason) {
                    if (!onrejected) {
                        reject(reason);
                        return;
                    }
                    try {
                        resolve(onrejected(reason));
                        return;
                    }
                    catch (e) {
                        reject(e);
                        return;
                    }
                },
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.catch = function (onrejected) {
        return this.then(function (val) { return val; }, onrejected);
    };
    /** JSDoc */
    SyncPromise.prototype.finally = function (onfinally) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            var val;
            var isRejected;
            return _this.then(function (value) {
                isRejected = false;
                val = value;
                if (onfinally) {
                    onfinally();
                }
            }, function (reason) {
                isRejected = true;
                val = reason;
                if (onfinally) {
                    onfinally();
                }
            }).then(function () {
                if (isRejected) {
                    reject(val);
                    return;
                }
                resolve(val);
            });
        });
    };
    return SyncPromise;
}());

//# sourceMappingURL=syncpromise.js.map

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_ref) {
  var Component, ctx, pageProps;
  return _regeneratorRuntime.async(function appGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          Component = _ref.Component, ctx = _ref.ctx;
          _context.next = 3;
          return _regeneratorRuntime.awrap((0, _utils.loadGetInitialProps)(Component, ctx));

        case 3:
          pageProps = _context.sent;
          return _context.abrupt("return", {
            pageProps: pageProps
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

var App = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(App, _react$default$Compon);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "componentDidCatch",
    // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`.
    // @deprecated This method is no longer needed. Errors are caught at the top level
    value: function componentDidCatch(error, _errorInfo) {
      throw error;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          __N_SSG = _this$props.__N_SSG,
          __N_SSP = _this$props.__N_SSP;
      return _react["default"].createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
      // methods like getStaticProps and getServerSideProps
      !(__N_SSG || __N_SSP) ? {
        url: createUrl(router)
      } : {}));
    }
  }]);

  return App;
}(_react["default"].Component);

exports["default"] = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(function () {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(function () {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: function back() {
      if (true) warnUrl();
      router.back();
    },
    push: function push(url, as) {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/construct.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, author, license, scripts, dependencies, devDependencies, husky, jest, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"nextjs-demo\",\"version\":\"1.0.0\",\"description\":\"\",\"main\":\"index.js\",\"author\":\"\",\"license\":\"ISC\",\"scripts\":{\"dev\":\"node server\",\"build\":\"next build\",\"start\":\"cross-env NODE_ENV=production node server/index.js\",\"tsc\":\"tsc -p ./tsconfig.json\",\"eslint\":\"eslint . --ext .ts,.tsx\",\"eslint:fix\":\"eslint . --fix --ext .ts,.tsx\",\"lint\":\"prettier --check\",\"lint:fix\":\"prettier --write --config .prettierrc.js pages/**/*.tsx components/**/*.tsx constant.ts \",\"test\":\"jest --color --passWithNoTests\",\"test:watch\":\"jest --watch --updateSnapshot\",\"test:coverage\":\"jest --coverage\",\"export\":\"next build && next export && serve out\",\"static-run\":\"next export && serve out\",\"deploy\":\"rm -rf node_modules/.cache && next build && next export && touch out/.nojekyll && git add out/ && git commit -m \\\"Deploy Next.js to gh-pages\\\" && git subtree push --prefix out origin gh-pages\"},\"dependencies\":{\"@ice/store\":\"^0.3.0\",\"@ice/store-logger\":\"^0.1.0\",\"@sentry/browser\":\"^5.1.0\",\"@zeit/next-source-maps\":\"0.0.4-canary.1\",\"axios\":\"^0.19.0\",\"classnames\":\"^2.2.6\",\"express\":\"^4.17.1\",\"lodash\":\"^4.17.15\",\"next\":\"^9.0.2\",\"qs\":\"^6.9.0\",\"raven\":\"^2.6.4\",\"rc-menu\":\"^7.4.23\",\"react\":\"^16.8.6\",\"react-dom\":\"^16.8.6\",\"react-icons\":\"^3.7.0\",\"react-slick\":\"^0.24.0\",\"serve\":\"^11.3.0\"},\"devDependencies\":{\"@types/classnames\":\"^2.2.9\",\"@types/enzyme\":\"^3.10.3\",\"@types/enzyme-adapter-react-16\":\"^1.0.5\",\"@types/jest\":\"^24.0.15\",\"@types/lodash\":\"^4.14.136\",\"@types/node\":\"^12.6.8\",\"@types/qs\":\"^6.5.3\",\"@types/react\":\"^16.8.23\",\"@types/react-slick\":\"^0.23.4\",\"@typescript-eslint/eslint-plugin\":\"^1.12.0\",\"@typescript-eslint/parser\":\"^1.12.0\",\"@zeit/next-less\":\"^1.0.1\",\"@zeit/next-typescript\":\"^1.1.1\",\"autoprefixer\":\"^9.6.1\",\"babel-eslint\":\"^10.0.2\",\"babel-runtime\":\"^6.26.0\",\"cross-env\":\"^5.2.0\",\"enzyme\":\"^3.10.0\",\"enzyme-adapter-react-16\":\"^1.14.0\",\"enzyme-to-json\":\"^3.3.5\",\"eslint\":\"^6.0.1\",\"eslint-config-prettier\":\"^6.0.0\",\"eslint-plugin-flowtype\":\"^3.11.1\",\"eslint-plugin-import\":\"^2.18.0\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"eslint-plugin-prettier\":\"^3.1.0\",\"eslint-plugin-react\":\"^7.14.2\",\"eslint-plugin-react-hooks\":\"^1.6.1\",\"husky\":\"^3.0.0\",\"identity-obj-proxy\":\"^3.0.0\",\"jest\":\"^24.8.0\",\"less\":\"~3.9.0\",\"lint-staged\":\"^9.2.0\",\"postcss-loader\":\"^3.0.0\",\"postcss-pxtorem\":\"^4.0.1\",\"prettier\":\"^1.18.2\",\"ts-jest\":\"^24.0.2\",\"typescript\":\"^3.5.3\"},\"husky\":{\"hooks\":{\"pre-commit\":\"npm run tsc && npm run eslint:fix && npm run lint:fix && npm run test\"}},\"jest\":{\"verbose\":false,\"setupFiles\":[\"raf/polyfill\"],\"setupFilesAfterEnv\":[\"<rootDir>/__mocks__/enzymeSetup.ts\"],\"snapshotSerializers\":[\"enzyme-to-json/serializer\"],\"moduleNameMapper\":{\"^.+\\\\.(css|less)$\":\"identity-obj-proxy\",\"\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$\":\"<rootDir>/__mocks__/fileMock.ts\"},\"moduleFileExtensions\":[\"js\",\"ts\",\"tsx\"],\"transform\":{\"^.+\\\\.tsx?$\":\"ts-jest\"},\"testMatch\":[\"<rootDir>/__tests__/?(*.)(spec|test).ts?(x)\"],\"transformIgnorePatterns\":[\"node_modules\",\"example\"]}}");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");
/* harmony import */ var _sentry_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sentry.config */ "./sentry.config.js");
/* harmony import */ var _sentry_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sentry_config__WEBPACK_IMPORTED_MODULE_10__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





_sentry_browser__WEBPACK_IMPORTED_MODULE_9__["init"]({
  dsn: _sentry_config__WEBPACK_IMPORTED_MODULE_10___default.a.dsn,
  release: _sentry_config__WEBPACK_IMPORTED_MODULE_10___default.a.config.release
});

var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      _sentry_browser__WEBPACK_IMPORTED_MODULE_9__["withScope"](function (scope) {
        Object.keys(errorInfo).forEach(function (key) {
          scope.setExtra(key, errorInfo[key]);
        });
        _sentry_browser__WEBPACK_IMPORTED_MODULE_9__["captureException"](error);
      });

      Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp.prototype), "componentDidCatch", this).call(this, error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(next_app__WEBPACK_IMPORTED_MODULE_8__["Container"], null, __jsx(Component, pageProps));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var Component, ctx, pageProps;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Component = _ref.Component, ctx = _ref.ctx;
              pageProps = {};

              if (!Component.getInitialProps) {
                _context.next = 6;
                break;
              }

              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Component.getInitialProps(ctx));

            case 5:
              pageProps = _context.sent;

            case 6:
              return _context.abrupt("return", {
                pageProps: pageProps
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./sentry.config.js":
/*!**************************!*\
  !*** ./sentry.config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  config: {
    project: 'td-webkit',
    organization: 'leishu',
    apiKey: '04f1dce9fdf84b8cacaedb84dbb8779d68f1b0cce32c4297a6397bb4ab7f2302',
    baseSentryURL: 'http://192.168.0.201:29177/api/0',
    release: "release-".concat(__webpack_require__(/*! ./package.json */ "./package.json").version)
  },
  dsn: 'http://5d7bbe7b206b4ee9b99ae3a478298dc1:33e4b612c92740a0bbf111dcacba2993@192.168.0.201:29177/6'
};

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! /Users/sheldon/Desktop/solution/next-template/next-website/node_modules/next/dist/client/router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9icm93c2VyL2VzbS9iYWNrZW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2Jyb3dzZXIvZXNtL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9icm93c2VyL2VzbS9ldmVudGJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvYnJvd3Nlci9lc20vZXhwb3J0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9icm93c2VyL2VzbS9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2Jyb3dzZXIvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2Jyb3dzZXIvZXNtL2ludGVncmF0aW9ucy9icmVhZGNydW1icy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9icm93c2VyL2VzbS9pbnRlZ3JhdGlvbnMvZ2xvYmFsaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvYnJvd3Nlci9lc20vaW50ZWdyYXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2Jyb3dzZXIvZXNtL2ludGVncmF0aW9ucy9saW5rZWRlcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvYnJvd3Nlci9lc20vaW50ZWdyYXRpb25zL3RyeWNhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2Jyb3dzZXIvZXNtL2ludGVncmF0aW9ucy91c2VyYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvYnJvd3Nlci9lc20vcGFyc2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9icm93c2VyL2VzbS9zZGsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvYnJvd3Nlci9lc20vdHJhY2VraXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvYnJvd3Nlci9lc20vdHJhbnNwb3J0cy9iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2Jyb3dzZXIvZXNtL3RyYW5zcG9ydHMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvYnJvd3Nlci9lc20vdHJhbnNwb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9icm93c2VyL2VzbS90cmFuc3BvcnRzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9icm93c2VyL2VzbS92ZXJzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2NvcmUvZXNtL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9jb3JlL2VzbS9iYXNlYmFja2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9jb3JlL2VzbS9iYXNlY2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2NvcmUvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2NvcmUvZXNtL2ludGVncmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2NvcmUvZXNtL2ludGVncmF0aW9ucy9mdW5jdGlvbnRvc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2NvcmUvZXNtL2ludGVncmF0aW9ucy9pbmJvdW5kZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9jb3JlL2VzbS9pbnRlZ3JhdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvY29yZS9lc20vc2RrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2NvcmUvZXNtL3RyYW5zcG9ydHMvbm9vcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9odWIvZXNtL2h1Yi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9odWIvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2h1Yi9lc20vc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvbWluaW1hbC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvdHlwZXMvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3R5cGVzL2VzbS9sb2dsZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS90eXBlcy9lc20vc2V2ZXJpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvdHlwZXMvZXNtL3NwYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvdHlwZXMvZXNtL3N0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS91dGlscy9lc20vYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvdXRpbHMvZXNtL2Rzbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS91dGlscy9lc20vZXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvdXRpbHMvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3V0aWxzL2VzbS9pbnN0cnVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3V0aWxzL2VzbS9pcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS91dGlscy9lc20vbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3V0aWxzL2VzbS9tZW1vLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3V0aWxzL2VzbS9taXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3V0aWxzL2VzbS9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvdXRpbHMvZXNtL3BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvdXRpbHMvZXNtL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3V0aWxzL2VzbS9wcm9taXNlYnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3V0aWxzL2VzbS9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvdXRpbHMvZXNtL3N1cHBvcnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3V0aWxzL2VzbS9zeW5jcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmF0aXZlLXVybC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBkbGxfYzJlMTBkMTgzYjk1MGE2N2Q5ZTciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2VudHJ5LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkbGxfYzJlMTBkMTgzYjk1MGE2N2Q5ZTdcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImltcG9ydCBzdXBlclByb3BCYXNlIGZyb20gXCIuL3N1cGVyUHJvcEJhc2VcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2ZcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi4vLi4vaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgZ2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vZ2V0UHJvdG90eXBlT2ZcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBCYXNlQmFja2VuZCB9IGZyb20gJ0BzZW50cnkvY29yZSc7XG5pbXBvcnQgeyBTZXZlcml0eSB9IGZyb20gJ0BzZW50cnkvdHlwZXMnO1xuaW1wb3J0IHsgYWRkRXhjZXB0aW9uTWVjaGFuaXNtLCBzdXBwb3J0c0ZldGNoLCBTeW5jUHJvbWlzZSB9IGZyb20gJ0BzZW50cnkvdXRpbHMnO1xuaW1wb3J0IHsgZXZlbnRGcm9tU3RyaW5nLCBldmVudEZyb21Vbmtub3duSW5wdXQgfSBmcm9tICcuL2V2ZW50YnVpbGRlcic7XG5pbXBvcnQgeyBGZXRjaFRyYW5zcG9ydCwgWEhSVHJhbnNwb3J0IH0gZnJvbSAnLi90cmFuc3BvcnRzJztcbi8qKlxuICogVGhlIFNlbnRyeSBCcm93c2VyIFNESyBCYWNrZW5kLlxuICogQGhpZGRlblxuICovXG52YXIgQnJvd3NlckJhY2tlbmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoQnJvd3NlckJhY2tlbmQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQnJvd3NlckJhY2tlbmQoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBCcm93c2VyQmFja2VuZC5wcm90b3R5cGUuX3NldHVwVHJhbnNwb3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX29wdGlvbnMuZHNuKSB7XG4gICAgICAgICAgICAvLyBXZSByZXR1cm4gdGhlIG5vb3AgdHJhbnNwb3J0IGhlcmUgaW4gY2FzZSB0aGVyZSBpcyBubyBEc24uXG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5fc2V0dXBUcmFuc3BvcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdHJhbnNwb3J0T3B0aW9ucyA9IHRzbGliXzEuX19hc3NpZ24oe30sIHRoaXMuX29wdGlvbnMudHJhbnNwb3J0T3B0aW9ucywgeyBkc246IHRoaXMuX29wdGlvbnMuZHNuIH0pO1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy50cmFuc3BvcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5fb3B0aW9ucy50cmFuc3BvcnQodHJhbnNwb3J0T3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1cHBvcnRzRmV0Y2goKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBGZXRjaFRyYW5zcG9ydCh0cmFuc3BvcnRPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFhIUlRyYW5zcG9ydCh0cmFuc3BvcnRPcHRpb25zKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgQnJvd3NlckJhY2tlbmQucHJvdG90eXBlLmV2ZW50RnJvbUV4Y2VwdGlvbiA9IGZ1bmN0aW9uIChleGNlcHRpb24sIGhpbnQpIHtcbiAgICAgICAgdmFyIHN5bnRoZXRpY0V4Y2VwdGlvbiA9IChoaW50ICYmIGhpbnQuc3ludGhldGljRXhjZXB0aW9uKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBldmVudCA9IGV2ZW50RnJvbVVua25vd25JbnB1dChleGNlcHRpb24sIHN5bnRoZXRpY0V4Y2VwdGlvbiwge1xuICAgICAgICAgICAgYXR0YWNoU3RhY2t0cmFjZTogdGhpcy5fb3B0aW9ucy5hdHRhY2hTdGFja3RyYWNlLFxuICAgICAgICB9KTtcbiAgICAgICAgYWRkRXhjZXB0aW9uTWVjaGFuaXNtKGV2ZW50LCB7XG4gICAgICAgICAgICBoYW5kbGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2dlbmVyaWMnLFxuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnQubGV2ZWwgPSBTZXZlcml0eS5FcnJvcjtcbiAgICAgICAgaWYgKGhpbnQgJiYgaGludC5ldmVudF9pZCkge1xuICAgICAgICAgICAgZXZlbnQuZXZlbnRfaWQgPSBoaW50LmV2ZW50X2lkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTeW5jUHJvbWlzZS5yZXNvbHZlKGV2ZW50KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgQnJvd3NlckJhY2tlbmQucHJvdG90eXBlLmV2ZW50RnJvbU1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSwgbGV2ZWwsIGhpbnQpIHtcbiAgICAgICAgaWYgKGxldmVsID09PSB2b2lkIDApIHsgbGV2ZWwgPSBTZXZlcml0eS5JbmZvOyB9XG4gICAgICAgIHZhciBzeW50aGV0aWNFeGNlcHRpb24gPSAoaGludCAmJiBoaW50LnN5bnRoZXRpY0V4Y2VwdGlvbikgfHwgdW5kZWZpbmVkO1xuICAgICAgICB2YXIgZXZlbnQgPSBldmVudEZyb21TdHJpbmcobWVzc2FnZSwgc3ludGhldGljRXhjZXB0aW9uLCB7XG4gICAgICAgICAgICBhdHRhY2hTdGFja3RyYWNlOiB0aGlzLl9vcHRpb25zLmF0dGFjaFN0YWNrdHJhY2UsXG4gICAgICAgIH0pO1xuICAgICAgICBldmVudC5sZXZlbCA9IGxldmVsO1xuICAgICAgICBpZiAoaGludCAmJiBoaW50LmV2ZW50X2lkKSB7XG4gICAgICAgICAgICBldmVudC5ldmVudF9pZCA9IGhpbnQuZXZlbnRfaWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN5bmNQcm9taXNlLnJlc29sdmUoZXZlbnQpO1xuICAgIH07XG4gICAgcmV0dXJuIEJyb3dzZXJCYWNrZW5kO1xufShCYXNlQmFja2VuZCkpO1xuZXhwb3J0IHsgQnJvd3NlckJhY2tlbmQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhY2tlbmQuanMubWFwIiwiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEFQSSwgQmFzZUNsaWVudCB9IGZyb20gJ0BzZW50cnkvY29yZSc7XG5pbXBvcnQgeyBnZXRHbG9iYWxPYmplY3QsIGxvZ2dlciB9IGZyb20gJ0BzZW50cnkvdXRpbHMnO1xuaW1wb3J0IHsgQnJvd3NlckJhY2tlbmQgfSBmcm9tICcuL2JhY2tlbmQnO1xuaW1wb3J0IHsgU0RLX05BTUUsIFNES19WRVJTSU9OIH0gZnJvbSAnLi92ZXJzaW9uJztcbi8qKlxuICogVGhlIFNlbnRyeSBCcm93c2VyIFNESyBDbGllbnQuXG4gKlxuICogQHNlZSBCcm93c2VyT3B0aW9ucyBmb3IgZG9jdW1lbnRhdGlvbiBvbiBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gKiBAc2VlIFNlbnRyeUNsaWVudCBmb3IgdXNhZ2UgZG9jdW1lbnRhdGlvbi5cbiAqL1xudmFyIEJyb3dzZXJDbGllbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoQnJvd3NlckNsaWVudCwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IEJyb3dzZXIgU0RLIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIG9wdGlvbnMgQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGlzIFNESy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBCcm93c2VyQ2xpZW50KG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIEJyb3dzZXJCYWNrZW5kLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIEJyb3dzZXJDbGllbnQucHJvdG90eXBlLl9wcmVwYXJlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIHNjb3BlLCBoaW50KSB7XG4gICAgICAgIGV2ZW50LnBsYXRmb3JtID0gZXZlbnQucGxhdGZvcm0gfHwgJ2phdmFzY3JpcHQnO1xuICAgICAgICBldmVudC5zZGsgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBldmVudC5zZGssIHsgbmFtZTogU0RLX05BTUUsIHBhY2thZ2VzOiB0c2xpYl8xLl9fc3ByZWFkKCgoZXZlbnQuc2RrICYmIGV2ZW50LnNkay5wYWNrYWdlcykgfHwgW10pLCBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbnBtOkBzZW50cnkvYnJvd3NlcicsXG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb246IFNES19WRVJTSU9OLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKSwgdmVyc2lvbjogU0RLX1ZFUlNJT04gfSk7XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLl9wcmVwYXJlRXZlbnQuY2FsbCh0aGlzLCBldmVudCwgc2NvcGUsIGhpbnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2hvdyBhIHJlcG9ydCBkaWFsb2cgdG8gdGhlIHVzZXIgdG8gc2VuZCBmZWVkYmFjayB0byBhIHNwZWNpZmljIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIG9wdGlvbnMgU2V0IGluZGl2aWR1YWwgb3B0aW9ucyBmb3IgdGhlIGRpYWxvZ1xuICAgICAqL1xuICAgIEJyb3dzZXJDbGllbnQucHJvdG90eXBlLnNob3dSZXBvcnREaWFsb2cgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICAvLyBkb2Vzbid0IHdvcmsgd2l0aG91dCBhIGRvY3VtZW50IChSZWFjdCBOYXRpdmUpXG4gICAgICAgIHZhciBkb2N1bWVudCA9IGdldEdsb2JhbE9iamVjdCgpLmRvY3VtZW50O1xuICAgICAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdUcnlpbmcgdG8gY2FsbCBzaG93UmVwb3J0RGlhbG9nIHdpdGggU2VudHJ5IENsaWVudCBpcyBkaXNhYmxlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkc24gPSBvcHRpb25zLmRzbiB8fCB0aGlzLmdldERzbigpO1xuICAgICAgICBpZiAoIW9wdGlvbnMuZXZlbnRJZCkge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdNaXNzaW5nIGBldmVudElkYCBvcHRpb24gaW4gc2hvd1JlcG9ydERpYWxvZyBjYWxsJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkc24pIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcignTWlzc2luZyBgRHNuYCBvcHRpb24gaW4gc2hvd1JlcG9ydERpYWxvZyBjYWxsJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICBzY3JpcHQuc3JjID0gbmV3IEFQSShkc24pLmdldFJlcG9ydERpYWxvZ0VuZHBvaW50KG9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0aW9ucy5vbkxvYWQpIHtcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBvcHRpb25zLm9uTG9hZDtcbiAgICAgICAgfVxuICAgICAgICAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH07XG4gICAgcmV0dXJuIEJyb3dzZXJDbGllbnQ7XG59KEJhc2VDbGllbnQpKTtcbmV4cG9ydCB7IEJyb3dzZXJDbGllbnQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaWVudC5qcy5tYXAiLCJpbXBvcnQgeyBhZGRFeGNlcHRpb25NZWNoYW5pc20sIGFkZEV4Y2VwdGlvblR5cGVWYWx1ZSwgaXNET01FcnJvciwgaXNET01FeGNlcHRpb24sIGlzRXJyb3IsIGlzRXJyb3JFdmVudCwgaXNFdmVudCwgaXNQbGFpbk9iamVjdCwgfSBmcm9tICdAc2VudHJ5L3V0aWxzJztcbmltcG9ydCB7IGV2ZW50RnJvbVBsYWluT2JqZWN0LCBldmVudEZyb21TdGFja3RyYWNlLCBwcmVwYXJlRnJhbWVzRm9yRXZlbnQgfSBmcm9tICcuL3BhcnNlcnMnO1xuaW1wb3J0IHsgY29tcHV0ZVN0YWNrVHJhY2UgfSBmcm9tICcuL3RyYWNla2l0Jztcbi8qKiBKU0RvYyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50RnJvbVVua25vd25JbnB1dChleGNlcHRpb24sIHN5bnRoZXRpY0V4Y2VwdGlvbiwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIGV2ZW50O1xuICAgIGlmIChpc0Vycm9yRXZlbnQoZXhjZXB0aW9uKSAmJiBleGNlcHRpb24uZXJyb3IpIHtcbiAgICAgICAgLy8gSWYgaXQgaXMgYW4gRXJyb3JFdmVudCB3aXRoIGBlcnJvcmAgcHJvcGVydHksIGV4dHJhY3QgaXQgdG8gZ2V0IGFjdHVhbCBFcnJvclxuICAgICAgICB2YXIgZXJyb3JFdmVudCA9IGV4Y2VwdGlvbjtcbiAgICAgICAgZXhjZXB0aW9uID0gZXJyb3JFdmVudC5lcnJvcjsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50XG4gICAgICAgIGV2ZW50ID0gZXZlbnRGcm9tU3RhY2t0cmFjZShjb21wdXRlU3RhY2tUcmFjZShleGNlcHRpb24pKTtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cbiAgICBpZiAoaXNET01FcnJvcihleGNlcHRpb24pIHx8IGlzRE9NRXhjZXB0aW9uKGV4Y2VwdGlvbikpIHtcbiAgICAgICAgLy8gSWYgaXQgaXMgYSBET01FcnJvciBvciBET01FeGNlcHRpb24gKHdoaWNoIGFyZSBsZWdhY3kgQVBJcywgYnV0IHN0aWxsIHN1cHBvcnRlZCBpbiBzb21lIGJyb3dzZXJzKVxuICAgICAgICAvLyB0aGVuIHdlIGp1c3QgZXh0cmFjdCB0aGUgbmFtZSBhbmQgbWVzc2FnZSwgYXMgdGhleSBkb24ndCBwcm92aWRlIGFueXRoaW5nIGVsc2VcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUVycm9yXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01FeGNlcHRpb25cbiAgICAgICAgdmFyIGRvbUV4Y2VwdGlvbiA9IGV4Y2VwdGlvbjtcbiAgICAgICAgdmFyIG5hbWVfMSA9IGRvbUV4Y2VwdGlvbi5uYW1lIHx8IChpc0RPTUVycm9yKGRvbUV4Y2VwdGlvbikgPyAnRE9NRXJyb3InIDogJ0RPTUV4Y2VwdGlvbicpO1xuICAgICAgICB2YXIgbWVzc2FnZSA9IGRvbUV4Y2VwdGlvbi5tZXNzYWdlID8gbmFtZV8xICsgXCI6IFwiICsgZG9tRXhjZXB0aW9uLm1lc3NhZ2UgOiBuYW1lXzE7XG4gICAgICAgIGV2ZW50ID0gZXZlbnRGcm9tU3RyaW5nKG1lc3NhZ2UsIHN5bnRoZXRpY0V4Y2VwdGlvbiwgb3B0aW9ucyk7XG4gICAgICAgIGFkZEV4Y2VwdGlvblR5cGVWYWx1ZShldmVudCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IoZXhjZXB0aW9uKSkge1xuICAgICAgICAvLyB3ZSBoYXZlIGEgcmVhbCBFcnJvciBvYmplY3QsIGRvIG5vdGhpbmdcbiAgICAgICAgZXZlbnQgPSBldmVudEZyb21TdGFja3RyYWNlKGNvbXB1dGVTdGFja1RyYWNlKGV4Y2VwdGlvbikpO1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuICAgIGlmIChpc1BsYWluT2JqZWN0KGV4Y2VwdGlvbikgfHwgaXNFdmVudChleGNlcHRpb24pKSB7XG4gICAgICAgIC8vIElmIGl0IGlzIHBsYWluIE9iamVjdCBvciBFdmVudCwgc2VyaWFsaXplIGl0IG1hbnVhbGx5IGFuZCBleHRyYWN0IG9wdGlvbnNcbiAgICAgICAgLy8gVGhpcyB3aWxsIGFsbG93IHVzIHRvIGdyb3VwIGV2ZW50cyBiYXNlZCBvbiB0b3AtbGV2ZWwga2V5c1xuICAgICAgICAvLyB3aGljaCBpcyBtdWNoIGJldHRlciB0aGFuIGNyZWF0aW5nIG5ldyBncm91cCB3aGVuIGFueSBrZXkvdmFsdWUgY2hhbmdlXG4gICAgICAgIHZhciBvYmplY3RFeGNlcHRpb24gPSBleGNlcHRpb247XG4gICAgICAgIGV2ZW50ID0gZXZlbnRGcm9tUGxhaW5PYmplY3Qob2JqZWN0RXhjZXB0aW9uLCBzeW50aGV0aWNFeGNlcHRpb24sIG9wdGlvbnMucmVqZWN0aW9uKTtcbiAgICAgICAgYWRkRXhjZXB0aW9uTWVjaGFuaXNtKGV2ZW50LCB7XG4gICAgICAgICAgICBzeW50aGV0aWM6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuICAgIC8vIElmIG5vbmUgb2YgcHJldmlvdXMgY2hlY2tzIHdlcmUgdmFsaWQsIHRoZW4gaXQgbWVhbnMgdGhhdCBpdCdzIG5vdDpcbiAgICAvLyAtIGFuIGluc3RhbmNlIG9mIERPTUVycm9yXG4gICAgLy8gLSBhbiBpbnN0YW5jZSBvZiBET01FeGNlcHRpb25cbiAgICAvLyAtIGFuIGluc3RhbmNlIG9mIEV2ZW50XG4gICAgLy8gLSBhbiBpbnN0YW5jZSBvZiBFcnJvclxuICAgIC8vIC0gYSB2YWxpZCBFcnJvckV2ZW50IChvbmUgd2l0aCBhbiBlcnJvciBwcm9wZXJ0eSlcbiAgICAvLyAtIGEgcGxhaW4gT2JqZWN0XG4gICAgLy9cbiAgICAvLyBTbyBiYWlsIG91dCBhbmQgY2FwdHVyZSBpdCBhcyBhIHNpbXBsZSBtZXNzYWdlOlxuICAgIGV2ZW50ID0gZXZlbnRGcm9tU3RyaW5nKGV4Y2VwdGlvbiwgc3ludGhldGljRXhjZXB0aW9uLCBvcHRpb25zKTtcbiAgICBhZGRFeGNlcHRpb25UeXBlVmFsdWUoZXZlbnQsIFwiXCIgKyBleGNlcHRpb24sIHVuZGVmaW5lZCk7XG4gICAgYWRkRXhjZXB0aW9uTWVjaGFuaXNtKGV2ZW50LCB7XG4gICAgICAgIHN5bnRoZXRpYzogdHJ1ZSxcbiAgICB9KTtcbiAgICByZXR1cm4gZXZlbnQ7XG59XG4vLyB0aGlzLl9vcHRpb25zLmF0dGFjaFN0YWNrdHJhY2Vcbi8qKiBKU0RvYyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50RnJvbVN0cmluZyhpbnB1dCwgc3ludGhldGljRXhjZXB0aW9uLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgIG1lc3NhZ2U6IGlucHV0LFxuICAgIH07XG4gICAgaWYgKG9wdGlvbnMuYXR0YWNoU3RhY2t0cmFjZSAmJiBzeW50aGV0aWNFeGNlcHRpb24pIHtcbiAgICAgICAgdmFyIHN0YWNrdHJhY2UgPSBjb21wdXRlU3RhY2tUcmFjZShzeW50aGV0aWNFeGNlcHRpb24pO1xuICAgICAgICB2YXIgZnJhbWVzXzEgPSBwcmVwYXJlRnJhbWVzRm9yRXZlbnQoc3RhY2t0cmFjZS5zdGFjayk7XG4gICAgICAgIGV2ZW50LnN0YWNrdHJhY2UgPSB7XG4gICAgICAgICAgICBmcmFtZXM6IGZyYW1lc18xLFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZXZlbnQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudGJ1aWxkZXIuanMubWFwIiwiZXhwb3J0IHsgU2V2ZXJpdHksIFN0YXR1cywgfSBmcm9tICdAc2VudHJ5L3R5cGVzJztcbmV4cG9ydCB7IGFkZEdsb2JhbEV2ZW50UHJvY2Vzc29yLCBhZGRCcmVhZGNydW1iLCBjYXB0dXJlRXhjZXB0aW9uLCBjYXB0dXJlRXZlbnQsIGNhcHR1cmVNZXNzYWdlLCBjb25maWd1cmVTY29wZSwgZ2V0SHViRnJvbUNhcnJpZXIsIGdldEN1cnJlbnRIdWIsIEh1YiwgU2NvcGUsIHNldENvbnRleHQsIHNldEV4dHJhLCBzZXRFeHRyYXMsIHNldFRhZywgc2V0VGFncywgc2V0VXNlciwgd2l0aFNjb3BlLCB9IGZyb20gJ0BzZW50cnkvY29yZSc7XG5leHBvcnQgeyBCcm93c2VyQ2xpZW50IH0gZnJvbSAnLi9jbGllbnQnO1xuZXhwb3J0IHsgZGVmYXVsdEludGVncmF0aW9ucywgZm9yY2VMb2FkLCBpbml0LCBsYXN0RXZlbnRJZCwgb25Mb2FkLCBzaG93UmVwb3J0RGlhbG9nLCBmbHVzaCwgY2xvc2UsIHdyYXAgfSBmcm9tICcuL3Nkayc7XG5leHBvcnQgeyBTREtfTkFNRSwgU0RLX1ZFUlNJT04gfSBmcm9tICcuL3ZlcnNpb24nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhwb3J0cy5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgY2FwdHVyZUV4Y2VwdGlvbiwgd2l0aFNjb3BlIH0gZnJvbSAnQHNlbnRyeS9jb3JlJztcbmltcG9ydCB7IGFkZEV4Y2VwdGlvbk1lY2hhbmlzbSwgYWRkRXhjZXB0aW9uVHlwZVZhbHVlIH0gZnJvbSAnQHNlbnRyeS91dGlscyc7XG52YXIgaWdub3JlT25FcnJvciA9IDA7XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZElnbm9yZU9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIGlnbm9yZU9uRXJyb3IgPiAwO1xufVxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZ25vcmVOZXh0T25FcnJvcigpIHtcbiAgICAvLyBvbmVycm9yIHNob3VsZCB0cmlnZ2VyIGJlZm9yZSBzZXRUaW1lb3V0XG4gICAgaWdub3JlT25FcnJvciArPSAxO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZ25vcmVPbkVycm9yIC09IDE7XG4gICAgfSk7XG59XG4vKipcbiAqIEluc3RydW1lbnRzIHRoZSBnaXZlbiBmdW5jdGlvbiBhbmQgc2VuZHMgYW4gZXZlbnQgdG8gU2VudHJ5IGV2ZXJ5IHRpbWUgdGhlXG4gKiBmdW5jdGlvbiB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuICpcbiAqIEBwYXJhbSBmbiBBIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcmV0dXJucyBUaGUgd3JhcHBlZCBmdW5jdGlvbi5cbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXAoZm4sIG9wdGlvbnMsIGJlZm9yZSkge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnN0cmljdC10eXBlLXByZWRpY2F0ZXNcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBmbjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gV2UgZG9uJ3Qgd2FubmEgd3JhcCBpdCB0d2ljZVxuICAgICAgICBpZiAoZm4uX19zZW50cnlfXykge1xuICAgICAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoaXMgaGFzIGFscmVhZHkgYmVlbiB3cmFwcGVkIGluIHRoZSBwYXN0LCByZXR1cm4gdGhhdCB3cmFwcGVkIGZ1bmN0aW9uXG4gICAgICAgIGlmIChmbi5fX3NlbnRyeV93cmFwcGVkX18pIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5fX3NlbnRyeV93cmFwcGVkX187XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gSnVzdCBhY2Nlc3NpbmcgY3VzdG9tIHByb3BzIGluIHNvbWUgU2VsZW5pdW0gZW52aXJvbm1lbnRzXG4gICAgICAgIC8vIGNhbiBjYXVzZSBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBleGNlcHRpb24gKHNlZSByYXZlbi1qcyM0OTUpLlxuICAgICAgICAvLyBCYWlsIG9uIHdyYXBwaW5nIGFuZCByZXR1cm4gdGhlIGZ1bmN0aW9uIGFzLWlzIChkZWZlcnMgdG8gd2luZG93Lm9uZXJyb3IpLlxuICAgICAgICByZXR1cm4gZm47XG4gICAgfVxuICAgIHZhciBzZW50cnlXcmFwcGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLXVuc2FmZS1hbnlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpzdHJpY3QtdHlwZS1wcmVkaWNhdGVzXG4gICAgICAgICAgICBpZiAoYmVmb3JlICYmIHR5cGVvZiBiZWZvcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBiZWZvcmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB3cmFwcGVkQXJndW1lbnRzID0gYXJncy5tYXAoZnVuY3Rpb24gKGFyZykgeyByZXR1cm4gd3JhcChhcmcsIG9wdGlvbnMpOyB9KTtcbiAgICAgICAgICAgIGlmIChmbi5oYW5kbGVFdmVudCkge1xuICAgICAgICAgICAgICAgIC8vIEF0dGVtcHQgdG8gaW52b2tlIHVzZXItbGFuZCBmdW5jdGlvblxuICAgICAgICAgICAgICAgIC8vIE5PVEU6IElmIHlvdSBhcmUgYSBTZW50cnkgdXNlciwgYW5kIHlvdSBhcmUgc2VlaW5nIHRoaXMgc3RhY2sgZnJhbWUsIGl0XG4gICAgICAgICAgICAgICAgLy8gICAgICAgbWVhbnMgdGhlIHNlbnRyeS5qYXZhc2NyaXB0IFNESyBjYXVnaHQgYW4gZXJyb3IgaW52b2tpbmcgeW91ciBhcHBsaWNhdGlvbiBjb2RlLiBUaGlzXG4gICAgICAgICAgICAgICAgLy8gICAgICAgaXMgZXhwZWN0ZWQgYmVoYXZpb3IgYW5kIE5PVCBpbmRpY2F0aXZlIG9mIGEgYnVnIHdpdGggc2VudHJ5LmphdmFzY3JpcHQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuLmhhbmRsZUV2ZW50LmFwcGx5KHRoaXMsIHdyYXBwZWRBcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXR0ZW1wdCB0byBpbnZva2UgdXNlci1sYW5kIGZ1bmN0aW9uXG4gICAgICAgICAgICAvLyBOT1RFOiBJZiB5b3UgYXJlIGEgU2VudHJ5IHVzZXIsIGFuZCB5b3UgYXJlIHNlZWluZyB0aGlzIHN0YWNrIGZyYW1lLCBpdFxuICAgICAgICAgICAgLy8gICAgICAgbWVhbnMgdGhlIHNlbnRyeS5qYXZhc2NyaXB0IFNESyBjYXVnaHQgYW4gZXJyb3IgaW52b2tpbmcgeW91ciBhcHBsaWNhdGlvbiBjb2RlLiBUaGlzXG4gICAgICAgICAgICAvLyAgICAgICBpcyBleHBlY3RlZCBiZWhhdmlvciBhbmQgTk9UIGluZGljYXRpdmUgb2YgYSBidWcgd2l0aCBzZW50cnkuamF2YXNjcmlwdC5cbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCB3cmFwcGVkQXJndW1lbnRzKTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6bm8tdW5zYWZlLWFueVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgaWdub3JlTmV4dE9uRXJyb3IoKTtcbiAgICAgICAgICAgIHdpdGhTY29wZShmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgICAgICAgICAgICBzY29wZS5hZGRFdmVudFByb2Nlc3NvcihmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2Nlc3NlZEV2ZW50ID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5tZWNoYW5pc20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZEV4Y2VwdGlvblR5cGVWYWx1ZShwcm9jZXNzZWRFdmVudCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkRXhjZXB0aW9uTWVjaGFuaXNtKHByb2Nlc3NlZEV2ZW50LCBvcHRpb25zLm1lY2hhbmlzbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkRXZlbnQuZXh0cmEgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBwcm9jZXNzZWRFdmVudC5leHRyYSwgeyBhcmd1bWVudHM6IGFyZ3MgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzZWRFdmVudDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjYXB0dXJlRXhjZXB0aW9uKGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIEFjY2Vzc2luZyBzb21lIG9iamVjdHMgbWF5IHRocm93XG4gICAgLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vZ2V0c2VudHJ5L3NlbnRyeS1qYXZhc2NyaXB0L2lzc3Vlcy8xMTY4XG4gICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gZm4pIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZm4sIHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIHNlbnRyeVdyYXBwZWRbcHJvcGVydHldID0gZm5bcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChfb08pIHsgfSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWVtcHR5XG4gICAgZm4ucHJvdG90eXBlID0gZm4ucHJvdG90eXBlIHx8IHt9O1xuICAgIHNlbnRyeVdyYXBwZWQucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgJ19fc2VudHJ5X3dyYXBwZWRfXycsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBzZW50cnlXcmFwcGVkLFxuICAgIH0pO1xuICAgIC8vIFNpZ25hbCB0aGF0IHRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gd3JhcHBlZC9maWxsZWQgYWxyZWFkeVxuICAgIC8vIGZvciBib3RoIGRlYnVnZ2luZyBhbmQgdG8gcHJldmVudCBpdCB0byBiZWluZyB3cmFwcGVkL2ZpbGxlZCB0d2ljZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHNlbnRyeVdyYXBwZWQsIHtcbiAgICAgICAgX19zZW50cnlfXzoge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgX19zZW50cnlfb3JpZ2luYWxfXzoge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogZm4sXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBmdW5jdGlvbiBuYW1lIChub3QgYWxsIGJyb3dzZXJzIGFsbG93IHRoYXQpXG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNlbnRyeVdyYXBwZWQsICduYW1lJyk7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbnRyeVdyYXBwZWQsICduYW1lJywge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm4ubmFtZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKF9vTykge1xuICAgICAgICAvKm5vLWVtcHR5Ki9cbiAgICB9XG4gICAgcmV0dXJuIHNlbnRyeVdyYXBwZWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWxwZXJzLmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5leHBvcnQgKiBmcm9tICcuL2V4cG9ydHMnO1xuaW1wb3J0IHsgSW50ZWdyYXRpb25zIGFzIENvcmVJbnRlZ3JhdGlvbnMgfSBmcm9tICdAc2VudHJ5L2NvcmUnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsT2JqZWN0IH0gZnJvbSAnQHNlbnRyeS91dGlscyc7XG5pbXBvcnQgKiBhcyBCcm93c2VySW50ZWdyYXRpb25zIGZyb20gJy4vaW50ZWdyYXRpb25zJztcbmltcG9ydCAqIGFzIFRyYW5zcG9ydHMgZnJvbSAnLi90cmFuc3BvcnRzJztcbnZhciB3aW5kb3dJbnRlZ3JhdGlvbnMgPSB7fTtcbi8vIFRoaXMgYmxvY2sgaXMgbmVlZGVkIHRvIGFkZCBjb21wYXRpYmlsaXR5IHdpdGggdGhlIGludGVncmF0aW9ucyBwYWNrYWdlcyB3aGVuIHVzZWQgd2l0aCBhIENETlxuLy8gdHNsaW50OmRpc2FibGU6IG5vLXVuc2FmZS1hbnlcbnZhciBfd2luZG93ID0gZ2V0R2xvYmFsT2JqZWN0KCk7XG5pZiAoX3dpbmRvdy5TZW50cnkgJiYgX3dpbmRvdy5TZW50cnkuSW50ZWdyYXRpb25zKSB7XG4gICAgd2luZG93SW50ZWdyYXRpb25zID0gX3dpbmRvdy5TZW50cnkuSW50ZWdyYXRpb25zO1xufVxuLy8gdHNsaW50OmVuYWJsZTogbm8tdW5zYWZlLWFueVxudmFyIElOVEVHUkFUSU9OUyA9IHRzbGliXzEuX19hc3NpZ24oe30sIHdpbmRvd0ludGVncmF0aW9ucywgQ29yZUludGVncmF0aW9ucywgQnJvd3NlckludGVncmF0aW9ucyk7XG5leHBvcnQgeyBJTlRFR1JBVElPTlMgYXMgSW50ZWdyYXRpb25zLCBUcmFuc3BvcnRzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgQVBJLCBnZXRDdXJyZW50SHViIH0gZnJvbSAnQHNlbnRyeS9jb3JlJztcbmltcG9ydCB7IFNldmVyaXR5IH0gZnJvbSAnQHNlbnRyeS90eXBlcyc7XG5pbXBvcnQgeyBhZGRJbnN0cnVtZW50YXRpb25IYW5kbGVyLCBnZXRFdmVudERlc2NyaXB0aW9uLCBnZXRHbG9iYWxPYmplY3QsIGh0bWxUcmVlQXNTdHJpbmcsIGxvZ2dlciwgcGFyc2VVcmwsIHNhZmVKb2luLCB9IGZyb20gJ0BzZW50cnkvdXRpbHMnO1xuLyoqXG4gKiBEZWZhdWx0IEJyZWFkY3J1bWJzIGluc3RydW1lbnRhdGlvbnNcbiAqIFRPRE86IERlcHJlY2F0ZWQgLSB3aXRoIHY2LCB0aGlzIHdpbGwgYmUgcmVuYW1lZCB0byBgSW5zdHJ1bWVudGBcbiAqL1xudmFyIEJyZWFkY3J1bWJzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgZnVuY3Rpb24gQnJlYWRjcnVtYnMob3B0aW9ucykge1xuICAgICAgICAvKipcbiAgICAgICAgICogQGluaGVyaXREb2NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IEJyZWFkY3J1bWJzLmlkO1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gdHNsaWJfMS5fX2Fzc2lnbih7IGNvbnNvbGU6IHRydWUsIGRvbTogdHJ1ZSwgZmV0Y2g6IHRydWUsIGhpc3Rvcnk6IHRydWUsIHNlbnRyeTogdHJ1ZSwgeGhyOiB0cnVlIH0sIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGJyZWFkY3J1bWJzIGZyb20gY29uc29sZSBBUEkgY2FsbHNcbiAgICAgKi9cbiAgICBCcmVhZGNydW1icy5wcm90b3R5cGUuX2NvbnNvbGVCcmVhZGNydW1iID0gZnVuY3Rpb24gKGhhbmRsZXJEYXRhKSB7XG4gICAgICAgIHZhciBicmVhZGNydW1iID0ge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdjb25zb2xlJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGhhbmRsZXJEYXRhLmFyZ3MsXG4gICAgICAgICAgICAgICAgbG9nZ2VyOiAnY29uc29sZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGV2ZWw6IFNldmVyaXR5LmZyb21TdHJpbmcoaGFuZGxlckRhdGEubGV2ZWwpLFxuICAgICAgICAgICAgbWVzc2FnZTogc2FmZUpvaW4oaGFuZGxlckRhdGEuYXJncywgJyAnKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGhhbmRsZXJEYXRhLmxldmVsID09PSAnYXNzZXJ0Jykge1xuICAgICAgICAgICAgaWYgKGhhbmRsZXJEYXRhLmFyZ3NbMF0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWRjcnVtYi5tZXNzYWdlID0gXCJBc3NlcnRpb24gZmFpbGVkOiBcIiArIChzYWZlSm9pbihoYW5kbGVyRGF0YS5hcmdzLnNsaWNlKDEpLCAnICcpIHx8ICdjb25zb2xlLmFzc2VydCcpO1xuICAgICAgICAgICAgICAgIGJyZWFkY3J1bWIuZGF0YS5hcmd1bWVudHMgPSBoYW5kbGVyRGF0YS5hcmdzLnNsaWNlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgY2FwdHVyZSBhIGJyZWFkY3J1bWIgZm9yIHBhc3NlZCBhc3NlcnRpb25zXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldEN1cnJlbnRIdWIoKS5hZGRCcmVhZGNydW1iKGJyZWFkY3J1bWIsIHtcbiAgICAgICAgICAgIGlucHV0OiBoYW5kbGVyRGF0YS5hcmdzLFxuICAgICAgICAgICAgbGV2ZWw6IGhhbmRsZXJEYXRhLmxldmVsLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYnJlYWRjcnVtYnMgZnJvbSBET00gQVBJIGNhbGxzXG4gICAgICovXG4gICAgQnJlYWRjcnVtYnMucHJvdG90eXBlLl9kb21CcmVhZGNydW1iID0gZnVuY3Rpb24gKGhhbmRsZXJEYXRhKSB7XG4gICAgICAgIHZhciB0YXJnZXQ7XG4gICAgICAgIC8vIEFjY2Vzc2luZyBldmVudC50YXJnZXQgY2FuIHRocm93IChzZWUgZ2V0c2VudHJ5L3JhdmVuLWpzIzgzOCwgIzc2OClcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRhcmdldCA9IGhhbmRsZXJEYXRhLmV2ZW50LnRhcmdldFxuICAgICAgICAgICAgICAgID8gaHRtbFRyZWVBc1N0cmluZyhoYW5kbGVyRGF0YS5ldmVudC50YXJnZXQpXG4gICAgICAgICAgICAgICAgOiBodG1sVHJlZUFzU3RyaW5nKGhhbmRsZXJEYXRhLmV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gJzx1bmtub3duPic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBnZXRDdXJyZW50SHViKCkuYWRkQnJlYWRjcnVtYih7XG4gICAgICAgICAgICBjYXRlZ29yeTogXCJ1aS5cIiArIGhhbmRsZXJEYXRhLm5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlOiB0YXJnZXQsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGV2ZW50OiBoYW5kbGVyRGF0YS5ldmVudCxcbiAgICAgICAgICAgIG5hbWU6IGhhbmRsZXJEYXRhLm5hbWUsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBicmVhZGNydW1icyBmcm9tIFhIUiBBUEkgY2FsbHNcbiAgICAgKi9cbiAgICBCcmVhZGNydW1icy5wcm90b3R5cGUuX3hockJyZWFkY3J1bWIgPSBmdW5jdGlvbiAoaGFuZGxlckRhdGEpIHtcbiAgICAgICAgaWYgKGhhbmRsZXJEYXRhLmVuZFRpbWVzdGFtcCkge1xuICAgICAgICAgICAgLy8gV2Ugb25seSBjYXB0dXJlIGNvbXBsZXRlLCBub24tc2VudHJ5IHJlcXVlc3RzXG4gICAgICAgICAgICBpZiAoaGFuZGxlckRhdGEueGhyLl9fc2VudHJ5X293bl9yZXF1ZXN0X18pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXRDdXJyZW50SHViKCkuYWRkQnJlYWRjcnVtYih7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICd4aHInLFxuICAgICAgICAgICAgICAgIGRhdGE6IGhhbmRsZXJEYXRhLnhoci5fX3NlbnRyeV94aHJfXyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnaHR0cCcsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgeGhyOiBoYW5kbGVyRGF0YS54aHIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBvbmx5IGNhcHR1cmUgaXNzdWVkIHNlbnRyeSByZXF1ZXN0c1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5zZW50cnkgJiYgaGFuZGxlckRhdGEueGhyLl9fc2VudHJ5X293bl9yZXF1ZXN0X18pIHtcbiAgICAgICAgICAgIGFkZFNlbnRyeUJyZWFkY3J1bWIoaGFuZGxlckRhdGEuYXJnc1swXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYnJlYWRjcnVtYnMgZnJvbSBmZXRjaCBBUEkgY2FsbHNcbiAgICAgKi9cbiAgICBCcmVhZGNydW1icy5wcm90b3R5cGUuX2ZldGNoQnJlYWRjcnVtYiA9IGZ1bmN0aW9uIChoYW5kbGVyRGF0YSkge1xuICAgICAgICAvLyBXZSBvbmx5IGNhcHR1cmUgY29tcGxldGUgZmV0Y2ggcmVxdWVzdHNcbiAgICAgICAgaWYgKCFoYW5kbGVyRGF0YS5lbmRUaW1lc3RhbXApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2xpZW50ID0gZ2V0Q3VycmVudEh1YigpLmdldENsaWVudCgpO1xuICAgICAgICB2YXIgZHNuID0gY2xpZW50ICYmIGNsaWVudC5nZXREc24oKTtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuc2VudHJ5ICYmIGRzbikge1xuICAgICAgICAgICAgdmFyIGZpbHRlclVybCA9IG5ldyBBUEkoZHNuKS5nZXRTdG9yZUVuZHBvaW50KCk7XG4gICAgICAgICAgICAvLyBpZiBTZW50cnkga2V5IGFwcGVhcnMgaW4gVVJMLCBkb24ndCBjYXB0dXJlIGl0IGFzIGEgcmVxdWVzdFxuICAgICAgICAgICAgLy8gYnV0IHJhdGhlciBhcyBvdXIgb3duICdzZW50cnknIHR5cGUgYnJlYWRjcnVtYlxuICAgICAgICAgICAgaWYgKGZpbHRlclVybCAmJlxuICAgICAgICAgICAgICAgIGhhbmRsZXJEYXRhLmZldGNoRGF0YS51cmwuaW5kZXhPZihmaWx0ZXJVcmwpICE9PSAtMSAmJlxuICAgICAgICAgICAgICAgIGhhbmRsZXJEYXRhLmZldGNoRGF0YS5tZXRob2QgPT09ICdQT1NUJyAmJlxuICAgICAgICAgICAgICAgIGhhbmRsZXJEYXRhLmFyZ3NbMV0gJiZcbiAgICAgICAgICAgICAgICBoYW5kbGVyRGF0YS5hcmdzWzFdLmJvZHkpIHtcbiAgICAgICAgICAgICAgICBhZGRTZW50cnlCcmVhZGNydW1iKGhhbmRsZXJEYXRhLmFyZ3NbMV0uYm9keSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoYW5kbGVyRGF0YS5lcnJvcikge1xuICAgICAgICAgICAgZ2V0Q3VycmVudEh1YigpLmFkZEJyZWFkY3J1bWIoe1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnZmV0Y2gnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHRzbGliXzEuX19hc3NpZ24oe30sIGhhbmRsZXJEYXRhLmZldGNoRGF0YSwgeyBzdGF0dXNfY29kZTogaGFuZGxlckRhdGEucmVzcG9uc2Uuc3RhdHVzIH0pLFxuICAgICAgICAgICAgICAgIGxldmVsOiBTZXZlcml0eS5FcnJvcixcbiAgICAgICAgICAgICAgICB0eXBlOiAnaHR0cCcsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGF0YTogaGFuZGxlckRhdGEuZXJyb3IsXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGhhbmRsZXJEYXRhLmFyZ3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdldEN1cnJlbnRIdWIoKS5hZGRCcmVhZGNydW1iKHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ2ZldGNoJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB0c2xpYl8xLl9fYXNzaWduKHt9LCBoYW5kbGVyRGF0YS5mZXRjaERhdGEsIHsgc3RhdHVzX2NvZGU6IGhhbmRsZXJEYXRhLnJlc3BvbnNlLnN0YXR1cyB9KSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnaHR0cCcsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGhhbmRsZXJEYXRhLmFyZ3MsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IGhhbmRsZXJEYXRhLnJlc3BvbnNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYnJlYWRjcnVtYnMgZnJvbSBoaXN0b3J5IEFQSSBjYWxsc1xuICAgICAqL1xuICAgIEJyZWFkY3J1bWJzLnByb3RvdHlwZS5faGlzdG9yeUJyZWFkY3J1bWIgPSBmdW5jdGlvbiAoaGFuZGxlckRhdGEpIHtcbiAgICAgICAgdmFyIGdsb2JhbCA9IGdldEdsb2JhbE9iamVjdCgpO1xuICAgICAgICB2YXIgZnJvbSA9IGhhbmRsZXJEYXRhLmZyb207XG4gICAgICAgIHZhciB0byA9IGhhbmRsZXJEYXRhLnRvO1xuICAgICAgICB2YXIgcGFyc2VkTG9jID0gcGFyc2VVcmwoZ2xvYmFsLmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICB2YXIgcGFyc2VkRnJvbSA9IHBhcnNlVXJsKGZyb20pO1xuICAgICAgICB2YXIgcGFyc2VkVG8gPSBwYXJzZVVybCh0byk7XG4gICAgICAgIC8vIEluaXRpYWwgcHVzaFN0YXRlIGRvZXNuJ3QgcHJvdmlkZSBgZnJvbWAgaW5mb3JtYXRpb25cbiAgICAgICAgaWYgKCFwYXJzZWRGcm9tLnBhdGgpIHtcbiAgICAgICAgICAgIHBhcnNlZEZyb20gPSBwYXJzZWRMb2M7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXNlIG9ubHkgdGhlIHBhdGggY29tcG9uZW50IG9mIHRoZSBVUkwgaWYgdGhlIFVSTCBtYXRjaGVzIHRoZSBjdXJyZW50XG4gICAgICAgIC8vIGRvY3VtZW50IChhbG1vc3QgYWxsIHRoZSB0aW1lIHdoZW4gdXNpbmcgcHVzaFN0YXRlKVxuICAgICAgICBpZiAocGFyc2VkTG9jLnByb3RvY29sID09PSBwYXJzZWRUby5wcm90b2NvbCAmJiBwYXJzZWRMb2MuaG9zdCA9PT0gcGFyc2VkVG8uaG9zdCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnRcbiAgICAgICAgICAgIHRvID0gcGFyc2VkVG8ucmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlZExvYy5wcm90b2NvbCA9PT0gcGFyc2VkRnJvbS5wcm90b2NvbCAmJiBwYXJzZWRMb2MuaG9zdCA9PT0gcGFyc2VkRnJvbS5ob3N0KSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tcGFyYW1ldGVyLXJlYXNzaWdubWVudFxuICAgICAgICAgICAgZnJvbSA9IHBhcnNlZEZyb20ucmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0Q3VycmVudEh1YigpLmFkZEJyZWFkY3J1bWIoe1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICduYXZpZ2F0aW9uJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiBmcm9tLFxuICAgICAgICAgICAgICAgIHRvOiB0byxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW5zdHJ1bWVudCBicm93c2VyIGJ1aWx0LWlucyB3LyBicmVhZGNydW1iIGNhcHR1cmluZ1xuICAgICAqICAtIENvbnNvbGUgQVBJXG4gICAgICogIC0gRE9NIEFQSSAoY2xpY2svdHlwaW5nKVxuICAgICAqICAtIFhNTEh0dHBSZXF1ZXN0IEFQSVxuICAgICAqICAtIEZldGNoIEFQSVxuICAgICAqICAtIEhpc3RvcnkgQVBJXG4gICAgICovXG4gICAgQnJlYWRjcnVtYnMucHJvdG90eXBlLnNldHVwT25jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuY29uc29sZSkge1xuICAgICAgICAgICAgYWRkSW5zdHJ1bWVudGF0aW9uSGFuZGxlcih7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fY29uc29sZUJyZWFkY3J1bWIuYXBwbHkoX3RoaXMsIHRzbGliXzEuX19zcHJlYWQoYXJncykpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NvbnNvbGUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuZG9tKSB7XG4gICAgICAgICAgICBhZGRJbnN0cnVtZW50YXRpb25IYW5kbGVyKHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9kb21CcmVhZGNydW1iLmFwcGx5KF90aGlzLCB0c2xpYl8xLl9fc3ByZWFkKGFyZ3MpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdkb20nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMueGhyKSB7XG4gICAgICAgICAgICBhZGRJbnN0cnVtZW50YXRpb25IYW5kbGVyKHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl94aHJCcmVhZGNydW1iLmFwcGx5KF90aGlzLCB0c2xpYl8xLl9fc3ByZWFkKGFyZ3MpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICd4aHInLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuZmV0Y2gpIHtcbiAgICAgICAgICAgIGFkZEluc3RydW1lbnRhdGlvbkhhbmRsZXIoe1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2ZldGNoQnJlYWRjcnVtYi5hcHBseShfdGhpcywgdHNsaWJfMS5fX3NwcmVhZChhcmdzKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZmV0Y2gnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuaGlzdG9yeSkge1xuICAgICAgICAgICAgYWRkSW5zdHJ1bWVudGF0aW9uSGFuZGxlcih7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5faGlzdG9yeUJyZWFkY3J1bWIuYXBwbHkoX3RoaXMsIHRzbGliXzEuX19zcHJlYWQoYXJncykpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ2hpc3RvcnknLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgQnJlYWRjcnVtYnMuaWQgPSAnQnJlYWRjcnVtYnMnO1xuICAgIHJldHVybiBCcmVhZGNydW1icztcbn0oKSk7XG5leHBvcnQgeyBCcmVhZGNydW1icyB9O1xuLyoqXG4gKiBDcmVhdGUgYSBicmVhZGNydW1iIG9mIGBzZW50cnlgIGZyb20gdGhlIGV2ZW50cyB0aGVtc2VsdmVzXG4gKi9cbmZ1bmN0aW9uIGFkZFNlbnRyeUJyZWFkY3J1bWIoc2VyaWFsaXplZERhdGEpIHtcbiAgICAvLyBUaGVyZSdzIGFsd2F5cyBzb21ldGhpbmcgdGhhdCBjYW4gZ28gd3Jvbmcgd2l0aCBkZXNlcmlhbGl6YXRpb24uLi5cbiAgICB0cnkge1xuICAgICAgICB2YXIgZXZlbnRfMSA9IEpTT04ucGFyc2Uoc2VyaWFsaXplZERhdGEpO1xuICAgICAgICBnZXRDdXJyZW50SHViKCkuYWRkQnJlYWRjcnVtYih7XG4gICAgICAgICAgICBjYXRlZ29yeTogXCJzZW50cnkuXCIgKyAoZXZlbnRfMS50eXBlID09PSAndHJhbnNhY3Rpb24nID8gJ3RyYW5zYWN0aW9uJyA6ICdldmVudCcpLFxuICAgICAgICAgICAgZXZlbnRfaWQ6IGV2ZW50XzEuZXZlbnRfaWQsXG4gICAgICAgICAgICBsZXZlbDogZXZlbnRfMS5sZXZlbCB8fCBTZXZlcml0eS5mcm9tU3RyaW5nKCdlcnJvcicpLFxuICAgICAgICAgICAgbWVzc2FnZTogZ2V0RXZlbnREZXNjcmlwdGlvbihldmVudF8xKSxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XzEsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoX29PKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcignRXJyb3Igd2hpbGUgYWRkaW5nIHNlbnRyeSB0eXBlIGJyZWFkY3J1bWInKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icmVhZGNydW1icy5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudEh1YiB9IGZyb20gJ0BzZW50cnkvY29yZSc7XG5pbXBvcnQgeyBTZXZlcml0eSB9IGZyb20gJ0BzZW50cnkvdHlwZXMnO1xuaW1wb3J0IHsgYWRkRXhjZXB0aW9uTWVjaGFuaXNtLCBhZGRJbnN0cnVtZW50YXRpb25IYW5kbGVyLCBnZXRMb2NhdGlvbkhyZWYsIGlzRXJyb3JFdmVudCwgaXNQcmltaXRpdmUsIGlzU3RyaW5nLCBsb2dnZXIsIH0gZnJvbSAnQHNlbnRyeS91dGlscyc7XG5pbXBvcnQgeyBldmVudEZyb21Vbmtub3duSW5wdXQgfSBmcm9tICcuLi9ldmVudGJ1aWxkZXInO1xuaW1wb3J0IHsgc2hvdWxkSWdub3JlT25FcnJvciB9IGZyb20gJy4uL2hlbHBlcnMnO1xuLyoqIEdsb2JhbCBoYW5kbGVycyAqL1xudmFyIEdsb2JhbEhhbmRsZXJzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIGZ1bmN0aW9uIEdsb2JhbEhhbmRsZXJzKG9wdGlvbnMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbmhlcml0RG9jXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSBHbG9iYWxIYW5kbGVycy5pZDtcbiAgICAgICAgLyoqIEpTRG9jICovXG4gICAgICAgIHRoaXMuX29uRXJyb3JIYW5kbGVySW5zdGFsbGVkID0gZmFsc2U7XG4gICAgICAgIC8qKiBKU0RvYyAqL1xuICAgICAgICB0aGlzLl9vblVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZXJJbnN0YWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHRzbGliXzEuX19hc3NpZ24oeyBvbmVycm9yOiB0cnVlLCBvbnVuaGFuZGxlZHJlamVjdGlvbjogdHJ1ZSB9LCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBHbG9iYWxIYW5kbGVycy5wcm90b3R5cGUuc2V0dXBPbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBFcnJvci5zdGFja1RyYWNlTGltaXQgPSA1MDtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMub25lcnJvcikge1xuICAgICAgICAgICAgbG9nZ2VyLmxvZygnR2xvYmFsIEhhbmRsZXIgYXR0YWNoZWQ6IG9uZXJyb3InKTtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbGxHbG9iYWxPbkVycm9ySGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgICBsb2dnZXIubG9nKCdHbG9iYWwgSGFuZGxlciBhdHRhY2hlZDogb251bmhhbmRsZWRyZWplY3Rpb24nKTtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbGxHbG9iYWxPblVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgR2xvYmFsSGFuZGxlcnMucHJvdG90eXBlLl9pbnN0YWxsR2xvYmFsT25FcnJvckhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLl9vbkVycm9ySGFuZGxlckluc3RhbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFkZEluc3RydW1lbnRhdGlvbkhhbmRsZXIoe1xuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVycm9yID0gZGF0YS5lcnJvcjtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEh1YiA9IGdldEN1cnJlbnRIdWIoKTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzSW50ZWdyYXRpb24gPSBjdXJyZW50SHViLmdldEludGVncmF0aW9uKEdsb2JhbEhhbmRsZXJzKTtcbiAgICAgICAgICAgICAgICB2YXIgaXNGYWlsZWRPd25EZWxpdmVyeSA9IGVycm9yICYmIGVycm9yLl9fc2VudHJ5X293bl9yZXF1ZXN0X18gPT09IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNJbnRlZ3JhdGlvbiB8fCBzaG91bGRJZ25vcmVPbkVycm9yKCkgfHwgaXNGYWlsZWRPd25EZWxpdmVyeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjbGllbnQgPSBjdXJyZW50SHViLmdldENsaWVudCgpO1xuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IGlzUHJpbWl0aXZlKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICA/IF90aGlzLl9ldmVudEZyb21JbmNvbXBsZXRlT25FcnJvcihkYXRhLm1zZywgZGF0YS51cmwsIGRhdGEubGluZSwgZGF0YS5jb2x1bW4pXG4gICAgICAgICAgICAgICAgICAgIDogX3RoaXMuX2VuaGFuY2VFdmVudFdpdGhJbml0aWFsRnJhbWUoZXZlbnRGcm9tVW5rbm93bklucHV0KGVycm9yLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaFN0YWNrdHJhY2U6IGNsaWVudCAmJiBjbGllbnQuZ2V0T3B0aW9ucygpLmF0dGFjaFN0YWNrdHJhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Rpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KSwgZGF0YS51cmwsIGRhdGEubGluZSwgZGF0YS5jb2x1bW4pO1xuICAgICAgICAgICAgICAgIGFkZEV4Y2VwdGlvbk1lY2hhbmlzbShldmVudCwge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29uZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRIdWIuY2FwdHVyZUV2ZW50KGV2ZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXhjZXB0aW9uOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fb25FcnJvckhhbmRsZXJJbnN0YWxsZWQgPSB0cnVlO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgR2xvYmFsSGFuZGxlcnMucHJvdG90eXBlLl9pbnN0YWxsR2xvYmFsT25VbmhhbmRsZWRSZWplY3Rpb25IYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5fb25VbmhhbmRsZWRSZWplY3Rpb25IYW5kbGVySW5zdGFsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWRkSW5zdHJ1bWVudGF0aW9uSGFuZGxlcih7XG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBlO1xuICAgICAgICAgICAgICAgIC8vIGRpZyB0aGUgb2JqZWN0IG9mIHRoZSByZWplY3Rpb24gb3V0IG9mIGtub3duIGV2ZW50IHR5cGVzXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJvbWlzZVJlamVjdGlvbkV2ZW50cyBzdG9yZSB0aGUgb2JqZWN0IG9mIHRoZSByZWplY3Rpb24gdW5kZXIgJ3JlYXNvbidcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qcm9taXNlUmVqZWN0aW9uRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdyZWFzb24nIGluIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gZS5yZWFzb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gc29tZXRoaW5nLCBzb21ld2hlcmUsIChsaWtlbHkgYSBicm93c2VyIGV4dGVuc2lvbikgZWZmZWN0aXZlbHkgY2FzdHMgUHJvbWlzZVJlamVjdGlvbkV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB0byBDdXN0b21FdmVudHMsIG1vdmluZyB0aGUgYHByb21pc2VgIGFuZCBgcmVhc29uYCBhdHRyaWJ1dGVzIG9mIHRoZSBQUkUgaW50b1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgQ3VzdG9tRXZlbnQncyBgZGV0YWlsYCBhdHRyaWJ1dGUsIHNpbmNlIHRoZXkncmUgbm90IHBhcnQgb2YgQ3VzdG9tRXZlbnQncyBzcGVjXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQgYW5kXG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nZXRzZW50cnkvc2VudHJ5LWphdmFzY3JpcHQvaXNzdWVzLzIzODBcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoJ2RldGFpbCcgaW4gZSAmJiAncmVhc29uJyBpbiBlLmRldGFpbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBlLmRldGFpbC5yZWFzb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKF9vTykge1xuICAgICAgICAgICAgICAgICAgICAvLyBuby1lbXB0eVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEh1YiA9IGdldEN1cnJlbnRIdWIoKTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzSW50ZWdyYXRpb24gPSBjdXJyZW50SHViLmdldEludGVncmF0aW9uKEdsb2JhbEhhbmRsZXJzKTtcbiAgICAgICAgICAgICAgICB2YXIgaXNGYWlsZWRPd25EZWxpdmVyeSA9IGVycm9yICYmIGVycm9yLl9fc2VudHJ5X293bl9yZXF1ZXN0X18gPT09IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNJbnRlZ3JhdGlvbiB8fCBzaG91bGRJZ25vcmVPbkVycm9yKCkgfHwgaXNGYWlsZWRPd25EZWxpdmVyeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNsaWVudCA9IGN1cnJlbnRIdWIuZ2V0Q2xpZW50KCk7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gaXNQcmltaXRpdmUoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgID8gX3RoaXMuX2V2ZW50RnJvbUluY29tcGxldGVSZWplY3Rpb24oZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIDogZXZlbnRGcm9tVW5rbm93bklucHV0KGVycm9yLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaFN0YWNrdHJhY2U6IGNsaWVudCAmJiBjbGllbnQuZ2V0T3B0aW9ucygpLmF0dGFjaFN0YWNrdHJhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Rpb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGV2ZW50LmxldmVsID0gU2V2ZXJpdHkuRXJyb3I7XG4gICAgICAgICAgICAgICAgYWRkRXhjZXB0aW9uTWVjaGFuaXNtKGV2ZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb251bmhhbmRsZWRyZWplY3Rpb24nLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRIdWIuY2FwdHVyZUV2ZW50KGV2ZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXhjZXB0aW9uOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogJ3VuaGFuZGxlZHJlamVjdGlvbicsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9vblVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZXJJbnN0YWxsZWQgPSB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgc3RhY2sgZnJvbSBhbiBvbGQsIGVycm9yLWxlc3Mgb25lcnJvciBoYW5kbGVyLlxuICAgICAqL1xuICAgIEdsb2JhbEhhbmRsZXJzLnByb3RvdHlwZS5fZXZlbnRGcm9tSW5jb21wbGV0ZU9uRXJyb3IgPSBmdW5jdGlvbiAobXNnLCB1cmwsIGxpbmUsIGNvbHVtbikge1xuICAgICAgICB2YXIgRVJST1JfVFlQRVNfUkUgPSAvXig/OltVdV1uY2F1Z2h0ICg/OmV4Y2VwdGlvbjogKT8pPyg/OigoPzpFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkl8KUVycm9yKTogKT8oLiopJC9pO1xuICAgICAgICAvLyBJZiAnbWVzc2FnZScgaXMgRXJyb3JFdmVudCwgZ2V0IHJlYWwgbWVzc2FnZSBmcm9tIGluc2lkZVxuICAgICAgICB2YXIgbWVzc2FnZSA9IGlzRXJyb3JFdmVudChtc2cpID8gbXNnLm1lc3NhZ2UgOiBtc2c7XG4gICAgICAgIHZhciBuYW1lO1xuICAgICAgICBpZiAoaXNTdHJpbmcobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIHZhciBncm91cHMgPSBtZXNzYWdlLm1hdGNoKEVSUk9SX1RZUEVTX1JFKTtcbiAgICAgICAgICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gZ3JvdXBzWzFdO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBncm91cHNbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAgICAgZXhjZXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IG5hbWUgfHwgJ0Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5oYW5jZUV2ZW50V2l0aEluaXRpYWxGcmFtZShldmVudCwgdXJsLCBsaW5lLCBjb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGFuIEV2ZW50IGZyb20gYW4gVHJhY2VLaXRTdGFja1RyYWNlIHRoYXQgaGFzIHBhcnQgb2YgaXQgbWlzc2luZy5cbiAgICAgKi9cbiAgICBHbG9iYWxIYW5kbGVycy5wcm90b3R5cGUuX2V2ZW50RnJvbUluY29tcGxldGVSZWplY3Rpb24gPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4Y2VwdGlvbjoge1xuICAgICAgICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVW5oYW5kbGVkUmVqZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIk5vbi1FcnJvciBwcm9taXNlIHJlamVjdGlvbiBjYXB0dXJlZCB3aXRoIHZhbHVlOiBcIiArIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgR2xvYmFsSGFuZGxlcnMucHJvdG90eXBlLl9lbmhhbmNlRXZlbnRXaXRoSW5pdGlhbEZyYW1lID0gZnVuY3Rpb24gKGV2ZW50LCB1cmwsIGxpbmUsIGNvbHVtbikge1xuICAgICAgICBldmVudC5leGNlcHRpb24gPSBldmVudC5leGNlcHRpb24gfHwge307XG4gICAgICAgIGV2ZW50LmV4Y2VwdGlvbi52YWx1ZXMgPSBldmVudC5leGNlcHRpb24udmFsdWVzIHx8IFtdO1xuICAgICAgICBldmVudC5leGNlcHRpb24udmFsdWVzWzBdID0gZXZlbnQuZXhjZXB0aW9uLnZhbHVlc1swXSB8fCB7fTtcbiAgICAgICAgZXZlbnQuZXhjZXB0aW9uLnZhbHVlc1swXS5zdGFja3RyYWNlID0gZXZlbnQuZXhjZXB0aW9uLnZhbHVlc1swXS5zdGFja3RyYWNlIHx8IHt9O1xuICAgICAgICBldmVudC5leGNlcHRpb24udmFsdWVzWzBdLnN0YWNrdHJhY2UuZnJhbWVzID0gZXZlbnQuZXhjZXB0aW9uLnZhbHVlc1swXS5zdGFja3RyYWNlLmZyYW1lcyB8fCBbXTtcbiAgICAgICAgdmFyIGNvbG5vID0gaXNOYU4ocGFyc2VJbnQoY29sdW1uLCAxMCkpID8gdW5kZWZpbmVkIDogY29sdW1uO1xuICAgICAgICB2YXIgbGluZW5vID0gaXNOYU4ocGFyc2VJbnQobGluZSwgMTApKSA/IHVuZGVmaW5lZCA6IGxpbmU7XG4gICAgICAgIHZhciBmaWxlbmFtZSA9IGlzU3RyaW5nKHVybCkgJiYgdXJsLmxlbmd0aCA+IDAgPyB1cmwgOiBnZXRMb2NhdGlvbkhyZWYoKTtcbiAgICAgICAgaWYgKGV2ZW50LmV4Y2VwdGlvbi52YWx1ZXNbMF0uc3RhY2t0cmFjZS5mcmFtZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBldmVudC5leGNlcHRpb24udmFsdWVzWzBdLnN0YWNrdHJhY2UuZnJhbWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGNvbG5vOiBjb2xubyxcbiAgICAgICAgICAgICAgICBmaWxlbmFtZTogZmlsZW5hbWUsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb246ICc/JyxcbiAgICAgICAgICAgICAgICBpbl9hcHA6IHRydWUsXG4gICAgICAgICAgICAgICAgbGluZW5vOiBsaW5lbm8sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIEdsb2JhbEhhbmRsZXJzLmlkID0gJ0dsb2JhbEhhbmRsZXJzJztcbiAgICByZXR1cm4gR2xvYmFsSGFuZGxlcnM7XG59KCkpO1xuZXhwb3J0IHsgR2xvYmFsSGFuZGxlcnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdsb2JhbGhhbmRsZXJzLmpzLm1hcCIsImV4cG9ydCB7IEdsb2JhbEhhbmRsZXJzIH0gZnJvbSAnLi9nbG9iYWxoYW5kbGVycyc7XG5leHBvcnQgeyBUcnlDYXRjaCB9IGZyb20gJy4vdHJ5Y2F0Y2gnO1xuZXhwb3J0IHsgQnJlYWRjcnVtYnMgfSBmcm9tICcuL2JyZWFkY3J1bWJzJztcbmV4cG9ydCB7IExpbmtlZEVycm9ycyB9IGZyb20gJy4vbGlua2VkZXJyb3JzJztcbmV4cG9ydCB7IFVzZXJBZ2VudCB9IGZyb20gJy4vdXNlcmFnZW50Jztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBhZGRHbG9iYWxFdmVudFByb2Nlc3NvciwgZ2V0Q3VycmVudEh1YiB9IGZyb20gJ0BzZW50cnkvY29yZSc7XG5pbXBvcnQgeyBpc0luc3RhbmNlT2YgfSBmcm9tICdAc2VudHJ5L3V0aWxzJztcbmltcG9ydCB7IGV4Y2VwdGlvbkZyb21TdGFja3RyYWNlIH0gZnJvbSAnLi4vcGFyc2Vycyc7XG5pbXBvcnQgeyBjb21wdXRlU3RhY2tUcmFjZSB9IGZyb20gJy4uL3RyYWNla2l0JztcbnZhciBERUZBVUxUX0tFWSA9ICdjYXVzZSc7XG52YXIgREVGQVVMVF9MSU1JVCA9IDU7XG4vKiogQWRkcyBTREsgaW5mbyB0byBhbiBldmVudC4gKi9cbnZhciBMaW5rZWRFcnJvcnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBMaW5rZWRFcnJvcnMob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQGluaGVyaXREb2NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IExpbmtlZEVycm9ycy5pZDtcbiAgICAgICAgdGhpcy5fa2V5ID0gb3B0aW9ucy5rZXkgfHwgREVGQVVMVF9LRVk7XG4gICAgICAgIHRoaXMuX2xpbWl0ID0gb3B0aW9ucy5saW1pdCB8fCBERUZBVUxUX0xJTUlUO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIExpbmtlZEVycm9ycy5wcm90b3R5cGUuc2V0dXBPbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRHbG9iYWxFdmVudFByb2Nlc3NvcihmdW5jdGlvbiAoZXZlbnQsIGhpbnQpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gZ2V0Q3VycmVudEh1YigpLmdldEludGVncmF0aW9uKExpbmtlZEVycm9ycyk7XG4gICAgICAgICAgICBpZiAoc2VsZikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9oYW5kbGVyKGV2ZW50LCBoaW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIExpbmtlZEVycm9ycy5wcm90b3R5cGUuX2hhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGhpbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC5leGNlcHRpb24gfHwgIWV2ZW50LmV4Y2VwdGlvbi52YWx1ZXMgfHwgIWhpbnQgfHwgIWlzSW5zdGFuY2VPZihoaW50Lm9yaWdpbmFsRXhjZXB0aW9uLCBFcnJvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGlua2VkRXJyb3JzID0gdGhpcy5fd2Fsa0Vycm9yVHJlZShoaW50Lm9yaWdpbmFsRXhjZXB0aW9uLCB0aGlzLl9rZXkpO1xuICAgICAgICBldmVudC5leGNlcHRpb24udmFsdWVzID0gdHNsaWJfMS5fX3NwcmVhZChsaW5rZWRFcnJvcnMsIGV2ZW50LmV4Y2VwdGlvbi52YWx1ZXMpO1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIExpbmtlZEVycm9ycy5wcm90b3R5cGUuX3dhbGtFcnJvclRyZWUgPSBmdW5jdGlvbiAoZXJyb3IsIGtleSwgc3RhY2spIHtcbiAgICAgICAgaWYgKHN0YWNrID09PSB2b2lkIDApIHsgc3RhY2sgPSBbXTsgfVxuICAgICAgICBpZiAoIWlzSW5zdGFuY2VPZihlcnJvcltrZXldLCBFcnJvcikgfHwgc3RhY2subGVuZ3RoICsgMSA+PSB0aGlzLl9saW1pdCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YWNrO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGFja3RyYWNlID0gY29tcHV0ZVN0YWNrVHJhY2UoZXJyb3Jba2V5XSk7XG4gICAgICAgIHZhciBleGNlcHRpb24gPSBleGNlcHRpb25Gcm9tU3RhY2t0cmFjZShzdGFja3RyYWNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhbGtFcnJvclRyZWUoZXJyb3Jba2V5XSwga2V5LCB0c2xpYl8xLl9fc3ByZWFkKFtleGNlcHRpb25dLCBzdGFjaykpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBMaW5rZWRFcnJvcnMuaWQgPSAnTGlua2VkRXJyb3JzJztcbiAgICByZXR1cm4gTGlua2VkRXJyb3JzO1xufSgpKTtcbmV4cG9ydCB7IExpbmtlZEVycm9ycyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGlua2VkZXJyb3JzLmpzLm1hcCIsImltcG9ydCB7IGZpbGwsIGdldEZ1bmN0aW9uTmFtZSwgZ2V0R2xvYmFsT2JqZWN0IH0gZnJvbSAnQHNlbnRyeS91dGlscyc7XG5pbXBvcnQgeyB3cmFwIH0gZnJvbSAnLi4vaGVscGVycyc7XG4vKiogV3JhcCB0aW1lciBmdW5jdGlvbnMgYW5kIGV2ZW50IHRhcmdldHMgdG8gY2F0Y2ggZXJyb3JzIGFuZCBwcm92aWRlIGJldHRlciBtZXRhIGRhdGEgKi9cbnZhciBUcnlDYXRjaCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcnlDYXRjaCgpIHtcbiAgICAgICAgLyoqIEpTRG9jICovXG4gICAgICAgIHRoaXMuX2lnbm9yZU9uRXJyb3IgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGluaGVyaXREb2NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IFRyeUNhdGNoLmlkO1xuICAgIH1cbiAgICAvKiogSlNEb2MgKi9cbiAgICBUcnlDYXRjaC5wcm90b3R5cGUuX3dyYXBUaW1lRnVuY3Rpb24gPSBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvcmlnaW5hbENhbGxiYWNrID0gYXJnc1swXTtcbiAgICAgICAgICAgIGFyZ3NbMF0gPSB3cmFwKG9yaWdpbmFsQ2FsbGJhY2ssIHtcbiAgICAgICAgICAgICAgICBtZWNoYW5pc206IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBmdW5jdGlvbjogZ2V0RnVuY3Rpb25OYW1lKG9yaWdpbmFsKSB9LFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW5zdHJ1bWVudCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgVHJ5Q2F0Y2gucHJvdG90eXBlLl93cmFwUkFGID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbCh3cmFwKGNhbGxiYWNrLCB7XG4gICAgICAgICAgICAgICAgbWVjaGFuaXNtOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiAncmVxdWVzdEFuaW1hdGlvbkZyYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGdldEZ1bmN0aW9uTmFtZShvcmlnaW5hbCksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbnN0cnVtZW50JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgVHJ5Q2F0Y2gucHJvdG90eXBlLl93cmFwRXZlbnRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBnbG9iYWwgPSBnZXRHbG9iYWxPYmplY3QoKTtcbiAgICAgICAgdmFyIHByb3RvID0gZ2xvYmFsW3RhcmdldF0gJiYgZ2xvYmFsW3RhcmdldF0ucHJvdG90eXBlO1xuICAgICAgICBpZiAoIXByb3RvIHx8ICFwcm90by5oYXNPd25Qcm9wZXJ0eSB8fCAhcHJvdG8uaGFzT3duUHJvcGVydHkoJ2FkZEV2ZW50TGlzdGVuZXInKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZpbGwocHJvdG8sICdhZGRFdmVudExpc3RlbmVyJywgZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4sIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW5ib3VuZC1tZXRob2Qgc3RyaWN0LXR5cGUtcHJlZGljYXRlc1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbi5oYW5kbGVFdmVudCA9IHdyYXAoZm4uaGFuZGxlRXZlbnQuYmluZChmbiksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWNoYW5pc206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb246ICdoYW5kbGVFdmVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBnZXRGdW5jdGlvbk5hbWUoZm4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbnN0cnVtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYW4gc29tZXRpbWVzIGdldCAnUGVybWlzc2lvbiBkZW5pZWQgdG8gYWNjZXNzIHByb3BlcnR5IFwiaGFuZGxlIEV2ZW50J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWwuY2FsbCh0aGlzLCBldmVudE5hbWUsIHdyYXAoZm4sIHtcbiAgICAgICAgICAgICAgICAgICAgbWVjaGFuaXNtOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb246ICdhZGRFdmVudExpc3RlbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBnZXRGdW5jdGlvbk5hbWUoZm4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW5zdHJ1bWVudCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZpbGwocHJvdG8sICdyZW1vdmVFdmVudExpc3RlbmVyJywgZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4sIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBmbjtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrICYmIChjYWxsYmFjay5fX3NlbnRyeV93cmFwcGVkX18gfHwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmUsIGFjY2Vzc2luZyBfX3NlbnRyeV93cmFwcGVkX18gd2lsbCB0aHJvdyBpbiBzb21lIFNlbGVuaXVtIGVudmlyb25tZW50c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWwuY2FsbCh0aGlzLCBldmVudE5hbWUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgVHJ5Q2F0Y2gucHJvdG90eXBlLl93cmFwWEhSID0gZnVuY3Rpb24gKG9yaWdpbmFsU2VuZCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHhociA9IHRoaXM7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tdGhpcy1hc3NpZ25tZW50XG4gICAgICAgICAgICB2YXIgeG1sSHR0cFJlcXVlc3RQcm9wcyA9IFsnb25sb2FkJywgJ29uZXJyb3InLCAnb25wcm9ncmVzcycsICdvbnJlYWR5c3RhdGVjaGFuZ2UnXTtcbiAgICAgICAgICAgIHhtbEh0dHBSZXF1ZXN0UHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wIGluIHhociAmJiB0eXBlb2YgeGhyW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGwoeGhyLCBwcm9wLCBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3cmFwT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWNoYW5pc206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb246IHByb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBnZXRGdW5jdGlvbk5hbWUob3JpZ2luYWwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW5zdHJ1bWVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBJbnN0cnVtZW50IGludGVncmF0aW9uIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUgVHJ5Q2F0Y2gsIGdldCB0aGUgbmFtZSBvZiBvcmlnaW5hbCBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsLl9fc2VudHJ5X29yaWdpbmFsX18pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwT3B0aW9ucy5tZWNoYW5pc20uZGF0YS5oYW5kbGVyID0gZ2V0RnVuY3Rpb25OYW1lKG9yaWdpbmFsLl9fc2VudHJ5X29yaWdpbmFsX18pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHdyYXAgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwKG9yaWdpbmFsLCB3cmFwT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsU2VuZC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdyYXAgdGltZXIgZnVuY3Rpb25zIGFuZCBldmVudCB0YXJnZXRzIHRvIGNhdGNoIGVycm9yc1xuICAgICAqIGFuZCBwcm92aWRlIGJldHRlciBtZXRhZGF0YS5cbiAgICAgKi9cbiAgICBUcnlDYXRjaC5wcm90b3R5cGUuc2V0dXBPbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9pZ25vcmVPbkVycm9yID0gdGhpcy5faWdub3JlT25FcnJvcjtcbiAgICAgICAgdmFyIGdsb2JhbCA9IGdldEdsb2JhbE9iamVjdCgpO1xuICAgICAgICBmaWxsKGdsb2JhbCwgJ3NldFRpbWVvdXQnLCB0aGlzLl93cmFwVGltZUZ1bmN0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICBmaWxsKGdsb2JhbCwgJ3NldEludGVydmFsJywgdGhpcy5fd3JhcFRpbWVGdW5jdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgZmlsbChnbG9iYWwsICdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnLCB0aGlzLl93cmFwUkFGLmJpbmQodGhpcykpO1xuICAgICAgICBpZiAoJ1hNTEh0dHBSZXF1ZXN0JyBpbiBnbG9iYWwpIHtcbiAgICAgICAgICAgIGZpbGwoWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLCAnc2VuZCcsIHRoaXMuX3dyYXBYSFIuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgW1xuICAgICAgICAgICAgJ0V2ZW50VGFyZ2V0JyxcbiAgICAgICAgICAgICdXaW5kb3cnLFxuICAgICAgICAgICAgJ05vZGUnLFxuICAgICAgICAgICAgJ0FwcGxpY2F0aW9uQ2FjaGUnLFxuICAgICAgICAgICAgJ0F1ZGlvVHJhY2tMaXN0JyxcbiAgICAgICAgICAgICdDaGFubmVsTWVyZ2VyTm9kZScsXG4gICAgICAgICAgICAnQ3J5cHRvT3BlcmF0aW9uJyxcbiAgICAgICAgICAgICdFdmVudFNvdXJjZScsXG4gICAgICAgICAgICAnRmlsZVJlYWRlcicsXG4gICAgICAgICAgICAnSFRNTFVua25vd25FbGVtZW50JyxcbiAgICAgICAgICAgICdJREJEYXRhYmFzZScsXG4gICAgICAgICAgICAnSURCUmVxdWVzdCcsXG4gICAgICAgICAgICAnSURCVHJhbnNhY3Rpb24nLFxuICAgICAgICAgICAgJ0tleU9wZXJhdGlvbicsXG4gICAgICAgICAgICAnTWVkaWFDb250cm9sbGVyJyxcbiAgICAgICAgICAgICdNZXNzYWdlUG9ydCcsXG4gICAgICAgICAgICAnTW9kYWxXaW5kb3cnLFxuICAgICAgICAgICAgJ05vdGlmaWNhdGlvbicsXG4gICAgICAgICAgICAnU1ZHRWxlbWVudEluc3RhbmNlJyxcbiAgICAgICAgICAgICdTY3JlZW4nLFxuICAgICAgICAgICAgJ1RleHRUcmFjaycsXG4gICAgICAgICAgICAnVGV4dFRyYWNrQ3VlJyxcbiAgICAgICAgICAgICdUZXh0VHJhY2tMaXN0JyxcbiAgICAgICAgICAgICdXZWJTb2NrZXQnLFxuICAgICAgICAgICAgJ1dlYlNvY2tldFdvcmtlcicsXG4gICAgICAgICAgICAnV29ya2VyJyxcbiAgICAgICAgICAgICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICAgICAgICAnWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCcsXG4gICAgICAgICAgICAnWE1MSHR0cFJlcXVlc3RVcGxvYWQnLFxuICAgICAgICBdLmZvckVhY2godGhpcy5fd3JhcEV2ZW50VGFyZ2V0LmJpbmQodGhpcykpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBUcnlDYXRjaC5pZCA9ICdUcnlDYXRjaCc7XG4gICAgcmV0dXJuIFRyeUNhdGNoO1xufSgpKTtcbmV4cG9ydCB7IFRyeUNhdGNoIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cnljYXRjaC5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgYWRkR2xvYmFsRXZlbnRQcm9jZXNzb3IsIGdldEN1cnJlbnRIdWIgfSBmcm9tICdAc2VudHJ5L2NvcmUnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsT2JqZWN0IH0gZnJvbSAnQHNlbnRyeS91dGlscyc7XG52YXIgZ2xvYmFsID0gZ2V0R2xvYmFsT2JqZWN0KCk7XG4vKiogVXNlckFnZW50ICovXG52YXIgVXNlckFnZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFVzZXJBZ2VudCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbmhlcml0RG9jXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSBVc2VyQWdlbnQuaWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgVXNlckFnZW50LnByb3RvdHlwZS5zZXR1cE9uY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFkZEdsb2JhbEV2ZW50UHJvY2Vzc29yKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKGdldEN1cnJlbnRIdWIoKS5nZXRJbnRlZ3JhdGlvbihVc2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFnbG9iYWwubmF2aWdhdG9yIHx8ICFnbG9iYWwubG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXF1ZXN0IEludGVyZmFjZTogaHR0cHM6Ly9kb2NzLnNlbnRyeS5pby9kZXZlbG9wbWVudC9zZGstZGV2L2V2ZW50LXBheWxvYWRzL3JlcXVlc3QvXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBldmVudC5yZXF1ZXN0IHx8IHt9O1xuICAgICAgICAgICAgICAgIHJlcXVlc3QudXJsID0gcmVxdWVzdC51cmwgfHwgZ2xvYmFsLmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzID0gcmVxdWVzdC5oZWFkZXJzIHx8IHt9O1xuICAgICAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVyc1snVXNlci1BZ2VudCddID0gZ2xvYmFsLm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hc3NpZ24oe30sIGV2ZW50LCB7IHJlcXVlc3Q6IHJlcXVlc3QgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBVc2VyQWdlbnQuaWQgPSAnVXNlckFnZW50JztcbiAgICByZXR1cm4gVXNlckFnZW50O1xufSgpKTtcbmV4cG9ydCB7IFVzZXJBZ2VudCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlcmFnZW50LmpzLm1hcCIsImltcG9ydCB7IGV4dHJhY3RFeGNlcHRpb25LZXlzRm9yTWVzc2FnZSwgaXNFdmVudCwgbm9ybWFsaXplVG9TaXplIH0gZnJvbSAnQHNlbnRyeS91dGlscyc7XG5pbXBvcnQgeyBjb21wdXRlU3RhY2tUcmFjZSB9IGZyb20gJy4vdHJhY2VraXQnO1xudmFyIFNUQUNLVFJBQ0VfTElNSVQgPSA1MDtcbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGFuIGV4Y2VwdGlvbiBmcm9tIGFuIFRyYWNlS2l0U3RhY2tUcmFjZVxuICogQHBhcmFtIHN0YWNrdHJhY2UgVHJhY2VLaXRTdGFja1RyYWNlIHRoYXQgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gZXhjZXB0aW9uXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGNlcHRpb25Gcm9tU3RhY2t0cmFjZShzdGFja3RyYWNlKSB7XG4gICAgdmFyIGZyYW1lcyA9IHByZXBhcmVGcmFtZXNGb3JFdmVudChzdGFja3RyYWNlLnN0YWNrKTtcbiAgICB2YXIgZXhjZXB0aW9uID0ge1xuICAgICAgICB0eXBlOiBzdGFja3RyYWNlLm5hbWUsXG4gICAgICAgIHZhbHVlOiBzdGFja3RyYWNlLm1lc3NhZ2UsXG4gICAgfTtcbiAgICBpZiAoZnJhbWVzICYmIGZyYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgZXhjZXB0aW9uLnN0YWNrdHJhY2UgPSB7IGZyYW1lczogZnJhbWVzIH07XG4gICAgfVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpzdHJpY3QtdHlwZS1wcmVkaWNhdGVzXG4gICAgaWYgKGV4Y2VwdGlvbi50eXBlID09PSB1bmRlZmluZWQgJiYgZXhjZXB0aW9uLnZhbHVlID09PSAnJykge1xuICAgICAgICBleGNlcHRpb24udmFsdWUgPSAnVW5yZWNvdmVyYWJsZSBlcnJvciBjYXVnaHQnO1xuICAgIH1cbiAgICByZXR1cm4gZXhjZXB0aW9uO1xufVxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBldmVudEZyb21QbGFpbk9iamVjdChleGNlcHRpb24sIHN5bnRoZXRpY0V4Y2VwdGlvbiwgcmVqZWN0aW9uKSB7XG4gICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICBleGNlcHRpb246IHtcbiAgICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogaXNFdmVudChleGNlcHRpb24pID8gZXhjZXB0aW9uLmNvbnN0cnVjdG9yLm5hbWUgOiByZWplY3Rpb24gPyAnVW5oYW5kbGVkUmVqZWN0aW9uJyA6ICdFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIk5vbi1FcnJvciBcIiArIChyZWplY3Rpb24gPyAncHJvbWlzZSByZWplY3Rpb24nIDogJ2V4Y2VwdGlvbicpICsgXCIgY2FwdHVyZWQgd2l0aCBrZXlzOiBcIiArIGV4dHJhY3RFeGNlcHRpb25LZXlzRm9yTWVzc2FnZShleGNlcHRpb24pLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBleHRyYToge1xuICAgICAgICAgICAgX19zZXJpYWxpemVkX186IG5vcm1hbGl6ZVRvU2l6ZShleGNlcHRpb24pLFxuICAgICAgICB9LFxuICAgIH07XG4gICAgaWYgKHN5bnRoZXRpY0V4Y2VwdGlvbikge1xuICAgICAgICB2YXIgc3RhY2t0cmFjZSA9IGNvbXB1dGVTdGFja1RyYWNlKHN5bnRoZXRpY0V4Y2VwdGlvbik7XG4gICAgICAgIHZhciBmcmFtZXNfMSA9IHByZXBhcmVGcmFtZXNGb3JFdmVudChzdGFja3RyYWNlLnN0YWNrKTtcbiAgICAgICAgZXZlbnQuc3RhY2t0cmFjZSA9IHtcbiAgICAgICAgICAgIGZyYW1lczogZnJhbWVzXzEsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBldmVudDtcbn1cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRGcm9tU3RhY2t0cmFjZShzdGFja3RyYWNlKSB7XG4gICAgdmFyIGV4Y2VwdGlvbiA9IGV4Y2VwdGlvbkZyb21TdGFja3RyYWNlKHN0YWNrdHJhY2UpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGV4Y2VwdGlvbjoge1xuICAgICAgICAgICAgdmFsdWVzOiBbZXhjZXB0aW9uXSxcbiAgICAgICAgfSxcbiAgICB9O1xufVxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlRnJhbWVzRm9yRXZlbnQoc3RhY2spIHtcbiAgICBpZiAoIXN0YWNrIHx8ICFzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgbG9jYWxTdGFjayA9IHN0YWNrO1xuICAgIHZhciBmaXJzdEZyYW1lRnVuY3Rpb24gPSBsb2NhbFN0YWNrWzBdLmZ1bmMgfHwgJyc7XG4gICAgdmFyIGxhc3RGcmFtZUZ1bmN0aW9uID0gbG9jYWxTdGFja1tsb2NhbFN0YWNrLmxlbmd0aCAtIDFdLmZ1bmMgfHwgJyc7XG4gICAgLy8gSWYgc3RhY2sgc3RhcnRzIHdpdGggb25lIG9mIG91ciBBUEkgY2FsbHMsIHJlbW92ZSBpdCAoc3RhcnRzLCBtZWFuaW5nIGl0J3MgdGhlIHRvcCBvZiB0aGUgc3RhY2sgLSBha2EgbGFzdCBjYWxsKVxuICAgIGlmIChmaXJzdEZyYW1lRnVuY3Rpb24uaW5kZXhPZignY2FwdHVyZU1lc3NhZ2UnKSAhPT0gLTEgfHwgZmlyc3RGcmFtZUZ1bmN0aW9uLmluZGV4T2YoJ2NhcHR1cmVFeGNlcHRpb24nKSAhPT0gLTEpIHtcbiAgICAgICAgbG9jYWxTdGFjayA9IGxvY2FsU3RhY2suc2xpY2UoMSk7XG4gICAgfVxuICAgIC8vIElmIHN0YWNrIGVuZHMgd2l0aCBvbmUgb2Ygb3VyIGludGVybmFsIEFQSSBjYWxscywgcmVtb3ZlIGl0IChlbmRzLCBtZWFuaW5nIGl0J3MgdGhlIGJvdHRvbSBvZiB0aGUgc3RhY2sgLSBha2EgdG9wLW1vc3QgY2FsbClcbiAgICBpZiAobGFzdEZyYW1lRnVuY3Rpb24uaW5kZXhPZignc2VudHJ5V3JhcHBlZCcpICE9PSAtMSkge1xuICAgICAgICBsb2NhbFN0YWNrID0gbG9jYWxTdGFjay5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIC8vIFRoZSBmcmFtZSB3aGVyZSB0aGUgY3Jhc2ggaGFwcGVuZWQsIHNob3VsZCBiZSB0aGUgbGFzdCBlbnRyeSBpbiB0aGUgYXJyYXlcbiAgICByZXR1cm4gbG9jYWxTdGFja1xuICAgICAgICAubWFwKGZ1bmN0aW9uIChmcmFtZSkgeyByZXR1cm4gKHtcbiAgICAgICAgY29sbm86IGZyYW1lLmNvbHVtbiA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IGZyYW1lLmNvbHVtbixcbiAgICAgICAgZmlsZW5hbWU6IGZyYW1lLnVybCB8fCBsb2NhbFN0YWNrWzBdLnVybCxcbiAgICAgICAgZnVuY3Rpb246IGZyYW1lLmZ1bmMgfHwgJz8nLFxuICAgICAgICBpbl9hcHA6IHRydWUsXG4gICAgICAgIGxpbmVubzogZnJhbWUubGluZSA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IGZyYW1lLmxpbmUsXG4gICAgfSk7IH0pXG4gICAgICAgIC5zbGljZSgwLCBTVEFDS1RSQUNFX0xJTUlUKVxuICAgICAgICAucmV2ZXJzZSgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2Vycy5qcy5tYXAiLCJpbXBvcnQgeyBnZXRDdXJyZW50SHViLCBpbml0QW5kQmluZCwgSW50ZWdyYXRpb25zIGFzIENvcmVJbnRlZ3JhdGlvbnMgfSBmcm9tICdAc2VudHJ5L2NvcmUnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsT2JqZWN0LCBTeW5jUHJvbWlzZSB9IGZyb20gJ0BzZW50cnkvdXRpbHMnO1xuaW1wb3J0IHsgQnJvd3NlckNsaWVudCB9IGZyb20gJy4vY2xpZW50JztcbmltcG9ydCB7IHdyYXAgYXMgaW50ZXJuYWxXcmFwIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IEJyZWFkY3J1bWJzLCBHbG9iYWxIYW5kbGVycywgTGlua2VkRXJyb3JzLCBUcnlDYXRjaCwgVXNlckFnZW50IH0gZnJvbSAnLi9pbnRlZ3JhdGlvbnMnO1xuZXhwb3J0IHZhciBkZWZhdWx0SW50ZWdyYXRpb25zID0gW1xuICAgIG5ldyBDb3JlSW50ZWdyYXRpb25zLkluYm91bmRGaWx0ZXJzKCksXG4gICAgbmV3IENvcmVJbnRlZ3JhdGlvbnMuRnVuY3Rpb25Ub1N0cmluZygpLFxuICAgIG5ldyBUcnlDYXRjaCgpLFxuICAgIG5ldyBCcmVhZGNydW1icygpLFxuICAgIG5ldyBHbG9iYWxIYW5kbGVycygpLFxuICAgIG5ldyBMaW5rZWRFcnJvcnMoKSxcbiAgICBuZXcgVXNlckFnZW50KCksXG5dO1xuLyoqXG4gKiBUaGUgU2VudHJ5IEJyb3dzZXIgU0RLIENsaWVudC5cbiAqXG4gKiBUbyB1c2UgdGhpcyBTREssIGNhbGwgdGhlIHtAbGluayBpbml0fSBmdW5jdGlvbiBhcyBlYXJseSBhcyBwb3NzaWJsZSB3aGVuXG4gKiBsb2FkaW5nIHRoZSB3ZWIgcGFnZS4gVG8gc2V0IGNvbnRleHQgaW5mb3JtYXRpb24gb3Igc2VuZCBtYW51YWwgZXZlbnRzLCB1c2VcbiAqIHRoZSBwcm92aWRlZCBtZXRob2RzLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgXG4gKlxuICogaW1wb3J0IHsgaW5pdCB9IGZyb20gJ0BzZW50cnkvYnJvd3Nlcic7XG4gKlxuICogaW5pdCh7XG4gKiAgIGRzbjogJ19fRFNOX18nLFxuICogICAvLyAuLi5cbiAqIH0pO1xuICogYGBgXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYFxuICpcbiAqIGltcG9ydCB7IGNvbmZpZ3VyZVNjb3BlIH0gZnJvbSAnQHNlbnRyeS9icm93c2VyJztcbiAqIGNvbmZpZ3VyZVNjb3BlKChzY29wZTogU2NvcGUpID0+IHtcbiAqICAgc2NvcGUuc2V0RXh0cmEoeyBiYXR0ZXJ5OiAwLjcgfSk7XG4gKiAgIHNjb3BlLnNldFRhZyh7IHVzZXJfbW9kZTogJ2FkbWluJyB9KTtcbiAqICAgc2NvcGUuc2V0VXNlcih7IGlkOiAnNDcxMScgfSk7XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBcbiAqXG4gKiBpbXBvcnQgeyBhZGRCcmVhZGNydW1iIH0gZnJvbSAnQHNlbnRyeS9icm93c2VyJztcbiAqIGFkZEJyZWFkY3J1bWIoe1xuICogICBtZXNzYWdlOiAnTXkgQnJlYWRjcnVtYicsXG4gKiAgIC8vIC4uLlxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYFxuICpcbiAqIGltcG9ydCAqIGFzIFNlbnRyeSBmcm9tICdAc2VudHJ5L2Jyb3dzZXInO1xuICogU2VudHJ5LmNhcHR1cmVNZXNzYWdlKCdIZWxsbywgd29ybGQhJyk7XG4gKiBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihuZXcgRXJyb3IoJ0dvb2QgYnllJykpO1xuICogU2VudHJ5LmNhcHR1cmVFdmVudCh7XG4gKiAgIG1lc3NhZ2U6ICdNYW51YWwnLFxuICogICBzdGFja3RyYWNlOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgIF0sXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIEJyb3dzZXJPcHRpb25zfSBmb3IgZG9jdW1lbnRhdGlvbiBvbiBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0KG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIGlmIChvcHRpb25zLmRlZmF1bHRJbnRlZ3JhdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvcHRpb25zLmRlZmF1bHRJbnRlZ3JhdGlvbnMgPSBkZWZhdWx0SW50ZWdyYXRpb25zO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5yZWxlYXNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHdpbmRvd18xID0gZ2V0R2xvYmFsT2JqZWN0KCk7XG4gICAgICAgIC8vIFRoaXMgc3VwcG9ydHMgdGhlIHZhcmlhYmxlIHRoYXQgc2VudHJ5LXdlYnBhY2stcGx1Z2luIGluamVjdHNcbiAgICAgICAgaWYgKHdpbmRvd18xLlNFTlRSWV9SRUxFQVNFICYmIHdpbmRvd18xLlNFTlRSWV9SRUxFQVNFLmlkKSB7XG4gICAgICAgICAgICBvcHRpb25zLnJlbGVhc2UgPSB3aW5kb3dfMS5TRU5UUllfUkVMRUFTRS5pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0QW5kQmluZChCcm93c2VyQ2xpZW50LCBvcHRpb25zKTtcbn1cbi8qKlxuICogUHJlc2VudCB0aGUgdXNlciB3aXRoIGEgcmVwb3J0IGRpYWxvZy5cbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyBFdmVyeXRoaW5nIGlzIG9wdGlvbmFsLCB3ZSB0cnkgdG8gZmV0Y2ggYWxsIGluZm8gbmVlZCBmcm9tIHRoZSBnbG9iYWwgc2NvcGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93UmVwb3J0RGlhbG9nKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIGlmICghb3B0aW9ucy5ldmVudElkKSB7XG4gICAgICAgIG9wdGlvbnMuZXZlbnRJZCA9IGdldEN1cnJlbnRIdWIoKS5sYXN0RXZlbnRJZCgpO1xuICAgIH1cbiAgICB2YXIgY2xpZW50ID0gZ2V0Q3VycmVudEh1YigpLmdldENsaWVudCgpO1xuICAgIGlmIChjbGllbnQpIHtcbiAgICAgICAgY2xpZW50LnNob3dSZXBvcnREaWFsb2cob3B0aW9ucyk7XG4gICAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBnZXR0ZXIgZm9yIGxhc3RFdmVudElkLlxuICpcbiAqIEByZXR1cm5zIFRoZSBsYXN0IGV2ZW50IGlkIG9mIGEgY2FwdHVyZWQgZXZlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXN0RXZlbnRJZCgpIHtcbiAgICByZXR1cm4gZ2V0Q3VycmVudEh1YigpLmxhc3RFdmVudElkKCk7XG59XG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgaGVyZSB0byBiZSBBUEkgY29tcGF0aWJsZSB3aXRoIHRoZSBsb2FkZXIuXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JjZUxvYWQoKSB7XG4gICAgLy8gTm9vcFxufVxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGhlcmUgdG8gYmUgQVBJIGNvbXBhdGlibGUgd2l0aCB0aGUgbG9hZGVyLlxuICogQGhpZGRlblxuICovXG5leHBvcnQgZnVuY3Rpb24gb25Mb2FkKGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2soKTtcbn1cbi8qKlxuICogQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhbGwgY3VycmVudCBldmVudHMgaGF2ZSBiZWVuIHNlbnQuXG4gKiBJZiB5b3UgcHJvdmlkZSBhIHRpbWVvdXQgYW5kIHRoZSBxdWV1ZSB0YWtlcyBsb25nZXIgdG8gZHJhaW4gdGhlIHByb21pc2UgcmV0dXJucyBmYWxzZS5cbiAqXG4gKiBAcGFyYW0gdGltZW91dCBNYXhpbXVtIHRpbWUgaW4gbXMgdGhlIGNsaWVudCBzaG91bGQgd2FpdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoKHRpbWVvdXQpIHtcbiAgICB2YXIgY2xpZW50ID0gZ2V0Q3VycmVudEh1YigpLmdldENsaWVudCgpO1xuICAgIGlmIChjbGllbnQpIHtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5mbHVzaCh0aW1lb3V0KTtcbiAgICB9XG4gICAgcmV0dXJuIFN5bmNQcm9taXNlLnJlamVjdChmYWxzZSk7XG59XG4vKipcbiAqIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYWxsIGN1cnJlbnQgZXZlbnRzIGhhdmUgYmVlbiBzZW50LlxuICogSWYgeW91IHByb3ZpZGUgYSB0aW1lb3V0IGFuZCB0aGUgcXVldWUgdGFrZXMgbG9uZ2VyIHRvIGRyYWluIHRoZSBwcm9taXNlIHJldHVybnMgZmFsc2UuXG4gKlxuICogQHBhcmFtIHRpbWVvdXQgTWF4aW11bSB0aW1lIGluIG1zIHRoZSBjbGllbnQgc2hvdWxkIHdhaXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZSh0aW1lb3V0KSB7XG4gICAgdmFyIGNsaWVudCA9IGdldEN1cnJlbnRIdWIoKS5nZXRDbGllbnQoKTtcbiAgICBpZiAoY2xpZW50KSB7XG4gICAgICAgIHJldHVybiBjbGllbnQuY2xvc2UodGltZW91dCk7XG4gICAgfVxuICAgIHJldHVybiBTeW5jUHJvbWlzZS5yZWplY3QoZmFsc2UpO1xufVxuLyoqXG4gKiBXcmFwIGNvZGUgd2l0aGluIGEgdHJ5L2NhdGNoIGJsb2NrIHNvIHRoZSBTREsgaXMgYWJsZSB0byBjYXB0dXJlIGVycm9ycy5cbiAqXG4gKiBAcGFyYW0gZm4gQSBmdW5jdGlvbiB0byB3cmFwLlxuICpcbiAqIEByZXR1cm5zIFRoZSByZXN1bHQgb2Ygd3JhcHBlZCBmdW5jdGlvbiBjYWxsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcChmbikge1xuICAgIHJldHVybiBpbnRlcm5hbFdyYXAoZm4pKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tdW5zYWZlLWFueVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2RrLmpzLm1hcCIsIi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbi8vIGdsb2JhbCByZWZlcmVuY2UgdG8gc2xpY2VcbnZhciBVTktOT1dOX0ZVTkNUSU9OID0gJz8nO1xuLy8gQ2hyb21pdW0gYmFzZWQgYnJvd3NlcnM6IENocm9tZSwgQnJhdmUsIG5ldyBPcGVyYSwgbmV3IEVkZ2VcbnZhciBjaHJvbWUgPSAvXlxccyphdCAoPzooLio/KSA/XFwoKT8oKD86ZmlsZXxodHRwcz98YmxvYnxjaHJvbWUtZXh0ZW5zaW9ufGFkZHJlc3N8bmF0aXZlfGV2YWx8d2VicGFja3w8YW5vbnltb3VzPnxbLWEtel0rOnwuKmJ1bmRsZXxcXC8pLio/KSg/OjooXFxkKykpPyg/OjooXFxkKykpP1xcKT9cXHMqJC9pO1xuLy8gZ2Vja28gcmVnZXg6IGAoPzpidW5kbGV8XFxkK1xcLmpzKWA6IGBidW5kbGVgIGlzIGZvciByZWFjdCBuYXRpdmUsIGBcXGQrXFwuanNgIGFsc28gYnV0IHNwZWNpZmljYWxseSBmb3IgcmFtIGJ1bmRsZXMgYmVjYXVzZSBpdFxuLy8gZ2VuZXJhdGVzIGZpbGVuYW1lcyB3aXRob3V0IGEgcHJlZml4IGxpa2UgYGZpbGU6Ly9gIHRoZSBmaWxlbmFtZXMgaW4gdGhlIHN0YWNrdHJhY2UgYXJlIGp1c3QgNDIuanNcbi8vIFdlIG5lZWQgdGhpcyBzcGVjaWZpYyBjYXNlIGZvciBub3cgYmVjYXVzZSB3ZSB3YW50IG5vIG90aGVyIHJlZ2V4IHRvIG1hdGNoLlxudmFyIGdlY2tvID0gL15cXHMqKC4qPykoPzpcXCgoLio/KVxcKSk/KD86XnxAKT8oKD86ZmlsZXxodHRwcz98YmxvYnxjaHJvbWV8d2VicGFja3xyZXNvdXJjZXxtb3otZXh0ZW5zaW9uKS4qPzpcXC8uKj98XFxbbmF0aXZlIGNvZGVcXF18W15AXSooPzpidW5kbGV8XFxkK1xcLmpzKSkoPzo6KFxcZCspKT8oPzo6KFxcZCspKT9cXHMqJC9pO1xudmFyIHdpbmpzID0gL15cXHMqYXQgKD86KCg/OlxcW29iamVjdCBvYmplY3RcXF0pPy4rKSApP1xcKD8oKD86ZmlsZXxtcy1hcHB4fGh0dHBzP3x3ZWJwYWNrfGJsb2IpOi4qPyk6KFxcZCspKD86OihcXGQrKSk/XFwpP1xccyokL2k7XG52YXIgZ2Vja29FdmFsID0gLyhcXFMrKSBsaW5lIChcXGQrKSg/OiA+IGV2YWwgbGluZSBcXGQrKSogPiBldmFsL2k7XG52YXIgY2hyb21lRXZhbCA9IC9cXCgoXFxTKikoPzo6KFxcZCspKSg/OjooXFxkKykpXFwpLztcbi8qKiBKU0RvYyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVTdGFja1RyYWNlKGV4KSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGU6bm8tdW5zYWZlLWFueVxuICAgIHZhciBzdGFjayA9IG51bGw7XG4gICAgdmFyIHBvcFNpemUgPSBleCAmJiBleC5mcmFtZXNUb1BvcDtcbiAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIG11c3QgYmUgdHJpZWQgZmlyc3QgYmVjYXVzZSBPcGVyYSAxMCAqZGVzdHJveXMqXG4gICAgICAgIC8vIGl0cyBzdGFja3RyYWNlIHByb3BlcnR5IGlmIHlvdSB0cnkgdG8gYWNjZXNzIHRoZSBzdGFja1xuICAgICAgICAvLyBwcm9wZXJ0eSBmaXJzdCEhXG4gICAgICAgIHN0YWNrID0gY29tcHV0ZVN0YWNrVHJhY2VGcm9tU3RhY2t0cmFjZVByb3AoZXgpO1xuICAgICAgICBpZiAoc3RhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBwb3BGcmFtZXMoc3RhY2ssIHBvcFNpemUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8vIG5vLWVtcHR5XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHN0YWNrID0gY29tcHV0ZVN0YWNrVHJhY2VGcm9tU3RhY2tQcm9wKGV4KTtcbiAgICAgICAgaWYgKHN0YWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9wRnJhbWVzKHN0YWNrLCBwb3BTaXplKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvLyBuby1lbXB0eVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiBleHRyYWN0TWVzc2FnZShleCksXG4gICAgICAgIG5hbWU6IGV4ICYmIGV4Lm5hbWUsXG4gICAgICAgIHN0YWNrOiBbXSxcbiAgICAgICAgZmFpbGVkOiB0cnVlLFxuICAgIH07XG59XG4vKiogSlNEb2MgKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjeWNsb21hdGljLWNvbXBsZXhpdHlcbmZ1bmN0aW9uIGNvbXB1dGVTdGFja1RyYWNlRnJvbVN0YWNrUHJvcChleCkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLWNvbmRpdGlvbmFsLWFzc2lnbm1lbnRcbiAgICBpZiAoIWV4IHx8ICFleC5zdGFjaykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHN0YWNrID0gW107XG4gICAgdmFyIGxpbmVzID0gZXguc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgIHZhciBpc0V2YWw7XG4gICAgdmFyIHN1Ym1hdGNoO1xuICAgIHZhciBwYXJ0cztcbiAgICB2YXIgZWxlbWVudDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmICgocGFydHMgPSBjaHJvbWUuZXhlYyhsaW5lc1tpXSkpKSB7XG4gICAgICAgICAgICB2YXIgaXNOYXRpdmUgPSBwYXJ0c1syXSAmJiBwYXJ0c1syXS5pbmRleE9mKCduYXRpdmUnKSA9PT0gMDsgLy8gc3RhcnQgb2YgbGluZVxuICAgICAgICAgICAgaXNFdmFsID0gcGFydHNbMl0gJiYgcGFydHNbMl0uaW5kZXhPZignZXZhbCcpID09PSAwOyAvLyBzdGFydCBvZiBsaW5lXG4gICAgICAgICAgICBpZiAoaXNFdmFsICYmIChzdWJtYXRjaCA9IGNocm9tZUV2YWwuZXhlYyhwYXJ0c1syXSkpKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhyb3cgb3V0IGV2YWwgbGluZS9jb2x1bW4gYW5kIHVzZSB0b3AtbW9zdCBsaW5lL2NvbHVtbiBudW1iZXJcbiAgICAgICAgICAgICAgICBwYXJ0c1syXSA9IHN1Ym1hdGNoWzFdOyAvLyB1cmxcbiAgICAgICAgICAgICAgICBwYXJ0c1szXSA9IHN1Ym1hdGNoWzJdOyAvLyBsaW5lXG4gICAgICAgICAgICAgICAgcGFydHNbNF0gPSBzdWJtYXRjaFszXTsgLy8gY29sdW1uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50ID0ge1xuICAgICAgICAgICAgICAgIC8vIHdvcmtpbmcgd2l0aCB0aGUgcmVnZXhwIGFib3ZlIGlzIHN1cGVyIHBhaW5mdWwuIGl0IGlzIHF1aXRlIGEgaGFjaywgYnV0IGp1c3Qgc3RyaXBwaW5nIHRoZSBgYWRkcmVzcyBhdCBgXG4gICAgICAgICAgICAgICAgLy8gcHJlZml4IGhlcmUgc2VlbXMgbGlrZSB0aGUgcXVpY2tlc3Qgc29sdXRpb24gZm9yIG5vdy5cbiAgICAgICAgICAgICAgICB1cmw6IHBhcnRzWzJdICYmIHBhcnRzWzJdLmluZGV4T2YoJ2FkZHJlc3MgYXQgJykgPT09IDAgPyBwYXJ0c1syXS5zdWJzdHIoJ2FkZHJlc3MgYXQgJy5sZW5ndGgpIDogcGFydHNbMl0sXG4gICAgICAgICAgICAgICAgZnVuYzogcGFydHNbMV0gfHwgVU5LTk9XTl9GVU5DVElPTixcbiAgICAgICAgICAgICAgICBhcmdzOiBpc05hdGl2ZSA/IFtwYXJ0c1syXV0gOiBbXSxcbiAgICAgICAgICAgICAgICBsaW5lOiBwYXJ0c1szXSA/ICtwYXJ0c1szXSA6IG51bGwsXG4gICAgICAgICAgICAgICAgY29sdW1uOiBwYXJ0c1s0XSA/ICtwYXJ0c1s0XSA6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChwYXJ0cyA9IHdpbmpzLmV4ZWMobGluZXNbaV0pKSkge1xuICAgICAgICAgICAgZWxlbWVudCA9IHtcbiAgICAgICAgICAgICAgICB1cmw6IHBhcnRzWzJdLFxuICAgICAgICAgICAgICAgIGZ1bmM6IHBhcnRzWzFdIHx8IFVOS05PV05fRlVOQ1RJT04sXG4gICAgICAgICAgICAgICAgYXJnczogW10sXG4gICAgICAgICAgICAgICAgbGluZTogK3BhcnRzWzNdLFxuICAgICAgICAgICAgICAgIGNvbHVtbjogcGFydHNbNF0gPyArcGFydHNbNF0gOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgocGFydHMgPSBnZWNrby5leGVjKGxpbmVzW2ldKSkpIHtcbiAgICAgICAgICAgIGlzRXZhbCA9IHBhcnRzWzNdICYmIHBhcnRzWzNdLmluZGV4T2YoJyA+IGV2YWwnKSA+IC0xO1xuICAgICAgICAgICAgaWYgKGlzRXZhbCAmJiAoc3VibWF0Y2ggPSBnZWNrb0V2YWwuZXhlYyhwYXJ0c1szXSkpKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhyb3cgb3V0IGV2YWwgbGluZS9jb2x1bW4gYW5kIHVzZSB0b3AtbW9zdCBsaW5lIG51bWJlclxuICAgICAgICAgICAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0gfHwgXCJldmFsXCI7XG4gICAgICAgICAgICAgICAgcGFydHNbM10gPSBzdWJtYXRjaFsxXTtcbiAgICAgICAgICAgICAgICBwYXJ0c1s0XSA9IHN1Ym1hdGNoWzJdO1xuICAgICAgICAgICAgICAgIHBhcnRzWzVdID0gJyc7IC8vIG5vIGNvbHVtbiB3aGVuIGV2YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPT09IDAgJiYgIXBhcnRzWzVdICYmIGV4LmNvbHVtbk51bWJlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gRmlyZUZveCB1c2VzIHRoaXMgYXdlc29tZSBjb2x1bW5OdW1iZXIgcHJvcGVydHkgZm9yIGl0cyB0b3AgZnJhbWVcbiAgICAgICAgICAgICAgICAvLyBBbHNvIG5vdGUsIEZpcmVmb3gncyBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQgYW5kIGV2ZXJ5dGhpbmcgZWxzZSBleHBlY3RzIDEtYmFzZWQsXG4gICAgICAgICAgICAgICAgLy8gc28gYWRkaW5nIDFcbiAgICAgICAgICAgICAgICAvLyBOT1RFOiB0aGlzIGhhY2sgZG9lc24ndCB3b3JrIGlmIHRvcC1tb3N0IGZyYW1lIGlzIGV2YWxcbiAgICAgICAgICAgICAgICBzdGFja1swXS5jb2x1bW4gPSBleC5jb2x1bW5OdW1iZXIgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudCA9IHtcbiAgICAgICAgICAgICAgICB1cmw6IHBhcnRzWzNdLFxuICAgICAgICAgICAgICAgIGZ1bmM6IHBhcnRzWzFdIHx8IFVOS05PV05fRlVOQ1RJT04sXG4gICAgICAgICAgICAgICAgYXJnczogcGFydHNbMl0gPyBwYXJ0c1syXS5zcGxpdCgnLCcpIDogW10sXG4gICAgICAgICAgICAgICAgbGluZTogcGFydHNbNF0gPyArcGFydHNbNF0gOiBudWxsLFxuICAgICAgICAgICAgICAgIGNvbHVtbjogcGFydHNbNV0gPyArcGFydHNbNV0gOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWxlbWVudC5mdW5jICYmIGVsZW1lbnQubGluZSkge1xuICAgICAgICAgICAgZWxlbWVudC5mdW5jID0gVU5LTk9XTl9GVU5DVElPTjtcbiAgICAgICAgfVxuICAgICAgICBzdGFjay5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICBpZiAoIXN0YWNrLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogZXh0cmFjdE1lc3NhZ2UoZXgpLFxuICAgICAgICBuYW1lOiBleC5uYW1lLFxuICAgICAgICBzdGFjazogc3RhY2ssXG4gICAgfTtcbn1cbi8qKiBKU0RvYyAqL1xuZnVuY3Rpb24gY29tcHV0ZVN0YWNrVHJhY2VGcm9tU3RhY2t0cmFjZVByb3AoZXgpIHtcbiAgICBpZiAoIWV4IHx8ICFleC5zdGFja3RyYWNlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBBY2Nlc3MgYW5kIHN0b3JlIHRoZSBzdGFja3RyYWNlIHByb3BlcnR5IGJlZm9yZSBkb2luZyBBTllUSElOR1xuICAgIC8vIGVsc2UgdG8gaXQgYmVjYXVzZSBPcGVyYSBpcyBub3QgdmVyeSBnb29kIGF0IHByb3ZpZGluZyBpdFxuICAgIC8vIHJlbGlhYmx5IGluIG90aGVyIGNpcmN1bXN0YW5jZXMuXG4gICAgdmFyIHN0YWNrdHJhY2UgPSBleC5zdGFja3RyYWNlO1xuICAgIHZhciBvcGVyYTEwUmVnZXggPSAvIGxpbmUgKFxcZCspLipzY3JpcHQgKD86aW4gKT8oXFxTKykoPzo6IGluIGZ1bmN0aW9uIChcXFMrKSk/JC9pO1xuICAgIHZhciBvcGVyYTExUmVnZXggPSAvIGxpbmUgKFxcZCspLCBjb2x1bW4gKFxcZCspXFxzKig/OmluICg/Ojxhbm9ueW1vdXMgZnVuY3Rpb246IChbXj5dKyk+fChbXlxcKV0rKSlcXCgoLiopXFwpKT8gaW4gKC4qKTpcXHMqJC9pO1xuICAgIHZhciBsaW5lcyA9IHN0YWNrdHJhY2Uuc3BsaXQoJ1xcbicpO1xuICAgIHZhciBzdGFjayA9IFtdO1xuICAgIHZhciBwYXJ0cztcbiAgICBmb3IgKHZhciBsaW5lID0gMDsgbGluZSA8IGxpbmVzLmxlbmd0aDsgbGluZSArPSAyKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLWNvbmRpdGlvbmFsLWFzc2lnbm1lbnRcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBudWxsO1xuICAgICAgICBpZiAoKHBhcnRzID0gb3BlcmExMFJlZ2V4LmV4ZWMobGluZXNbbGluZV0pKSkge1xuICAgICAgICAgICAgZWxlbWVudCA9IHtcbiAgICAgICAgICAgICAgICB1cmw6IHBhcnRzWzJdLFxuICAgICAgICAgICAgICAgIGZ1bmM6IHBhcnRzWzNdLFxuICAgICAgICAgICAgICAgIGFyZ3M6IFtdLFxuICAgICAgICAgICAgICAgIGxpbmU6ICtwYXJ0c1sxXSxcbiAgICAgICAgICAgICAgICBjb2x1bW46IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChwYXJ0cyA9IG9wZXJhMTFSZWdleC5leGVjKGxpbmVzW2xpbmVdKSkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSB7XG4gICAgICAgICAgICAgICAgdXJsOiBwYXJ0c1s2XSxcbiAgICAgICAgICAgICAgICBmdW5jOiBwYXJ0c1szXSB8fCBwYXJ0c1s0XSxcbiAgICAgICAgICAgICAgICBhcmdzOiBwYXJ0c1s1XSA/IHBhcnRzWzVdLnNwbGl0KCcsJykgOiBbXSxcbiAgICAgICAgICAgICAgICBsaW5lOiArcGFydHNbMV0sXG4gICAgICAgICAgICAgICAgY29sdW1uOiArcGFydHNbMl0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQuZnVuYyAmJiBlbGVtZW50LmxpbmUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmZ1bmMgPSBVTktOT1dOX0ZVTkNUSU9OO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhY2sucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXN0YWNrLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogZXh0cmFjdE1lc3NhZ2UoZXgpLFxuICAgICAgICBuYW1lOiBleC5uYW1lLFxuICAgICAgICBzdGFjazogc3RhY2ssXG4gICAgfTtcbn1cbi8qKiBSZW1vdmUgTiBudW1iZXIgb2YgZnJhbWVzIGZyb20gdGhlIHN0YWNrICovXG5mdW5jdGlvbiBwb3BGcmFtZXMoc3RhY2t0cmFjZSwgcG9wU2l6ZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXNzaWduKHt9LCBzdGFja3RyYWNlLCB7IHN0YWNrOiBzdGFja3RyYWNlLnN0YWNrLnNsaWNlKHBvcFNpemUpIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gc3RhY2t0cmFjZTtcbiAgICB9XG59XG4vKipcbiAqIFRoZXJlIGFyZSBjYXNlcyB3aGVyZSBzdGFja3RyYWNlLm1lc3NhZ2UgaXMgYW4gRXZlbnQgb2JqZWN0XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ2V0c2VudHJ5L3NlbnRyeS1qYXZhc2NyaXB0L2lzc3Vlcy8xOTQ5XG4gKiBJbiB0aGlzIHNwZWNpZmljIGNhc2Ugd2UgdHJ5IHRvIGV4dHJhY3Qgc3RhY2t0cmFjZS5tZXNzYWdlLmVycm9yLm1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gZXh0cmFjdE1lc3NhZ2UoZXgpIHtcbiAgICB2YXIgbWVzc2FnZSA9IGV4ICYmIGV4Lm1lc3NhZ2U7XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiAnTm8gZXJyb3IgbWVzc2FnZSc7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmVycm9yICYmIHR5cGVvZiBtZXNzYWdlLmVycm9yLm1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlLmVycm9yLm1lc3NhZ2U7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhY2VraXQuanMubWFwIiwiaW1wb3J0IHsgQVBJIH0gZnJvbSAnQHNlbnRyeS9jb3JlJztcbmltcG9ydCB7IFByb21pc2VCdWZmZXIsIFNlbnRyeUVycm9yIH0gZnJvbSAnQHNlbnRyeS91dGlscyc7XG4vKiogQmFzZSBUcmFuc3BvcnQgY2xhc3MgaW1wbGVtZW50YXRpb24gKi9cbnZhciBCYXNlVHJhbnNwb3J0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJhc2VUcmFuc3BvcnQob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAvKiogQSBzaW1wbGUgYnVmZmVyIGhvbGRpbmcgYWxsIHJlcXVlc3RzLiAqL1xuICAgICAgICB0aGlzLl9idWZmZXIgPSBuZXcgUHJvbWlzZUJ1ZmZlcigzMCk7XG4gICAgICAgIHRoaXMudXJsID0gbmV3IEFQSSh0aGlzLm9wdGlvbnMuZHNuKS5nZXRTdG9yZUVuZHBvaW50V2l0aFVybEVuY29kZWRBdXRoKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgQmFzZVRyYW5zcG9ydC5wcm90b3R5cGUuc2VuZEV2ZW50ID0gZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgdGhyb3cgbmV3IFNlbnRyeUVycm9yKCdUcmFuc3BvcnQgQ2xhc3MgaGFzIHRvIGltcGxlbWVudCBgc2VuZEV2ZW50YCBtZXRob2QnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgQmFzZVRyYW5zcG9ydC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnVmZmVyLmRyYWluKHRpbWVvdXQpO1xuICAgIH07XG4gICAgcmV0dXJuIEJhc2VUcmFuc3BvcnQ7XG59KCkpO1xuZXhwb3J0IHsgQmFzZVRyYW5zcG9ydCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZS5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSAnQHNlbnRyeS90eXBlcyc7XG5pbXBvcnQgeyBnZXRHbG9iYWxPYmplY3QsIGxvZ2dlciwgcGFyc2VSZXRyeUFmdGVySGVhZGVyLCBzdXBwb3J0c1JlZmVycmVyUG9saWN5LCBTeW5jUHJvbWlzZSB9IGZyb20gJ0BzZW50cnkvdXRpbHMnO1xuaW1wb3J0IHsgQmFzZVRyYW5zcG9ydCB9IGZyb20gJy4vYmFzZSc7XG52YXIgZ2xvYmFsID0gZ2V0R2xvYmFsT2JqZWN0KCk7XG4vKiogYGZldGNoYCBiYXNlZCB0cmFuc3BvcnQgKi9cbnZhciBGZXRjaFRyYW5zcG9ydCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhGZXRjaFRyYW5zcG9ydCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGZXRjaFRyYW5zcG9ydCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKiBMb2NrcyB0cmFuc3BvcnQgYWZ0ZXIgcmVjZWl2aW5nIDQyOSByZXNwb25zZSAqL1xuICAgICAgICBfdGhpcy5fZGlzYWJsZWRVbnRpbCA9IG5ldyBEYXRlKERhdGUubm93KCkpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgRmV0Y2hUcmFuc3BvcnQucHJvdG90eXBlLnNlbmRFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobmV3IERhdGUoRGF0ZS5ub3coKSkgPCB0aGlzLl9kaXNhYmxlZFVudGlsKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICByZWFzb246IFwiVHJhbnNwb3J0IGxvY2tlZCB0aWxsIFwiICsgdGhpcy5fZGlzYWJsZWRVbnRpbCArIFwiIGR1ZSB0byB0b28gbWFueSByZXF1ZXN0cy5cIixcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDQyOSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGV2ZW50KSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgLy8gRGVzcGl0ZSBhbGwgc3RhcnMgaW4gdGhlIHNreSBzYXlpbmcgdGhhdCBFZGdlIHN1cHBvcnRzIG9sZCBkcmFmdCBzeW50YXgsIGFrYSAnbmV2ZXInLCAnYWx3YXlzJywgJ29yaWdpbicgYW5kICdkZWZhdWx0XG4gICAgICAgICAgICAvLyBodHRwczovL2Nhbml1c2UuY29tLyNmZWF0PXJlZmVycmVyLXBvbGljeVxuICAgICAgICAgICAgLy8gSXQgZG9lc24ndC4gQW5kIGl0IHRocm93IGV4Y2VwdGlvbiBpbnN0ZWFkIG9mIGlnbm9yaW5nIHRoaXMgcGFyYW1ldGVyLi4uXG4gICAgICAgICAgICAvLyBSRUY6IGh0dHBzOi8vZ2l0aHViLmNvbS9nZXRzZW50cnkvcmF2ZW4tanMvaXNzdWVzLzEyMzNcbiAgICAgICAgICAgIHJlZmVycmVyUG9saWN5OiAoc3VwcG9ydHNSZWZlcnJlclBvbGljeSgpID8gJ29yaWdpbicgOiAnJyksXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGVhZGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9ucy5oZWFkZXJzID0gdGhpcy5vcHRpb25zLmhlYWRlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1ZmZlci5hZGQobmV3IFN5bmNQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGdsb2JhbFxuICAgICAgICAgICAgICAgIC5mZXRjaChfdGhpcy51cmwsIGRlZmF1bHRPcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHZhciBzdGF0dXMgPSBTdGF0dXMuZnJvbUh0dHBDb2RlKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gU3RhdHVzLlN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHN0YXR1czogc3RhdHVzIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IFN0YXR1cy5SYXRlTGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9kaXNhYmxlZFVudGlsID0gbmV3IERhdGUobm93ICsgcGFyc2VSZXRyeUFmdGVySGVhZGVyKG5vdywgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1JldHJ5LUFmdGVyJykpKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oXCJUb28gbWFueSByZXF1ZXN0cywgYmFja2luZyBvZmYgdGlsbDogXCIgKyBfdGhpcy5fZGlzYWJsZWRVbnRpbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gRmV0Y2hUcmFuc3BvcnQ7XG59KEJhc2VUcmFuc3BvcnQpKTtcbmV4cG9ydCB7IEZldGNoVHJhbnNwb3J0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZXRjaC5qcy5tYXAiLCJleHBvcnQgeyBCYXNlVHJhbnNwb3J0IH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCB7IEZldGNoVHJhbnNwb3J0IH0gZnJvbSAnLi9mZXRjaCc7XG5leHBvcnQgeyBYSFJUcmFuc3BvcnQgfSBmcm9tICcuL3hocic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSAnQHNlbnRyeS90eXBlcyc7XG5pbXBvcnQgeyBsb2dnZXIsIHBhcnNlUmV0cnlBZnRlckhlYWRlciwgU3luY1Byb21pc2UgfSBmcm9tICdAc2VudHJ5L3V0aWxzJztcbmltcG9ydCB7IEJhc2VUcmFuc3BvcnQgfSBmcm9tICcuL2Jhc2UnO1xuLyoqIGBYSFJgIGJhc2VkIHRyYW5zcG9ydCAqL1xudmFyIFhIUlRyYW5zcG9ydCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhYSFJUcmFuc3BvcnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gWEhSVHJhbnNwb3J0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgLyoqIExvY2tzIHRyYW5zcG9ydCBhZnRlciByZWNlaXZpbmcgNDI5IHJlc3BvbnNlICovXG4gICAgICAgIF90aGlzLl9kaXNhYmxlZFVudGlsID0gbmV3IERhdGUoRGF0ZS5ub3coKSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBYSFJUcmFuc3BvcnQucHJvdG90eXBlLnNlbmRFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobmV3IERhdGUoRGF0ZS5ub3coKSkgPCB0aGlzLl9kaXNhYmxlZFVudGlsKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICByZWFzb246IFwiVHJhbnNwb3J0IGxvY2tlZCB0aWxsIFwiICsgdGhpcy5fZGlzYWJsZWRVbnRpbCArIFwiIGR1ZSB0byB0b28gbWFueSByZXF1ZXN0cy5cIixcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDQyOSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXIuYWRkKG5ldyBTeW5jUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzdGF0dXMgPSBTdGF0dXMuZnJvbUh0dHBDb2RlKHJlcXVlc3Quc3RhdHVzKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSBTdGF0dXMuU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgc3RhdHVzOiBzdGF0dXMgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gU3RhdHVzLlJhdGVMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2Rpc2FibGVkVW50aWwgPSBuZXcgRGF0ZShub3cgKyBwYXJzZVJldHJ5QWZ0ZXJIZWFkZXIobm93LCByZXF1ZXN0LmdldFJlc3BvbnNlSGVhZGVyKCdSZXRyeS1BZnRlcicpKSk7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKFwiVG9vIG1hbnkgcmVxdWVzdHMsIGJhY2tpbmcgb2ZmIHRpbGw6IFwiICsgX3RoaXMuX2Rpc2FibGVkVW50aWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWplY3QocmVxdWVzdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5vcGVuKCdQT1NUJywgX3RoaXMudXJsKTtcbiAgICAgICAgICAgIGZvciAodmFyIGhlYWRlciBpbiBfdGhpcy5vcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5oZWFkZXJzLmhhc093blByb3BlcnR5KGhlYWRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlciwgX3RoaXMub3B0aW9ucy5oZWFkZXJzW2hlYWRlcl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZChKU09OLnN0cmluZ2lmeShldmVudCkpO1xuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gWEhSVHJhbnNwb3J0O1xufShCYXNlVHJhbnNwb3J0KSk7XG5leHBvcnQgeyBYSFJUcmFuc3BvcnQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXhoci5qcy5tYXAiLCJleHBvcnQgdmFyIFNES19OQU1FID0gJ3NlbnRyeS5qYXZhc2NyaXB0LmJyb3dzZXInO1xuZXhwb3J0IHZhciBTREtfVkVSU0lPTiA9ICc1LjE1LjQnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmVyc2lvbi5qcy5tYXAiLCJpbXBvcnQgeyBEc24sIHVybEVuY29kZSB9IGZyb20gJ0BzZW50cnkvdXRpbHMnO1xudmFyIFNFTlRSWV9BUElfVkVSU0lPTiA9ICc3Jztcbi8qKiBIZWxwZXIgY2xhc3MgdG8gcHJvdmlkZSB1cmxzIHRvIGRpZmZlcmVudCBTZW50cnkgZW5kcG9pbnRzLiAqL1xudmFyIEFQSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEFQSSAqL1xuICAgIGZ1bmN0aW9uIEFQSShkc24pIHtcbiAgICAgICAgdGhpcy5kc24gPSBkc247XG4gICAgICAgIHRoaXMuX2Rzbk9iamVjdCA9IG5ldyBEc24oZHNuKTtcbiAgICB9XG4gICAgLyoqIFJldHVybnMgdGhlIERzbiBvYmplY3QuICovXG4gICAgQVBJLnByb3RvdHlwZS5nZXREc24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc25PYmplY3Q7XG4gICAgfTtcbiAgICAvKiogUmV0dXJucyBhIHN0cmluZyB3aXRoIGF1dGggaGVhZGVycyBpbiB0aGUgdXJsIHRvIHRoZSBzdG9yZSBlbmRwb2ludC4gKi9cbiAgICBBUEkucHJvdG90eXBlLmdldFN0b3JlRW5kcG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIlwiICsgdGhpcy5fZ2V0QmFzZVVybCgpICsgdGhpcy5nZXRTdG9yZUVuZHBvaW50UGF0aCgpO1xuICAgIH07XG4gICAgLyoqIFJldHVybnMgdGhlIHN0b3JlIGVuZHBvaW50IHdpdGggYXV0aCBhZGRlZCBpbiB1cmwgZW5jb2RlZC4gKi9cbiAgICBBUEkucHJvdG90eXBlLmdldFN0b3JlRW5kcG9pbnRXaXRoVXJsRW5jb2RlZEF1dGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkc24gPSB0aGlzLl9kc25PYmplY3Q7XG4gICAgICAgIHZhciBhdXRoID0ge1xuICAgICAgICAgICAgc2VudHJ5X2tleTogZHNuLnVzZXIsXG4gICAgICAgICAgICBzZW50cnlfdmVyc2lvbjogU0VOVFJZX0FQSV9WRVJTSU9OLFxuICAgICAgICB9O1xuICAgICAgICAvLyBBdXRoIGlzIGludGVudGlvbmFsbHkgc2VudCBhcyBwYXJ0IG9mIHF1ZXJ5IHN0cmluZyAoTk9UIGFzIGN1c3RvbSBIVFRQIGhlYWRlcilcbiAgICAgICAgLy8gdG8gYXZvaWQgcHJlZmxpZ2h0IENPUlMgcmVxdWVzdHNcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RvcmVFbmRwb2ludCgpICsgXCI/XCIgKyB1cmxFbmNvZGUoYXV0aCk7XG4gICAgfTtcbiAgICAvKiogUmV0dXJucyB0aGUgYmFzZSBwYXRoIG9mIHRoZSB1cmwgaW5jbHVkaW5nIHRoZSBwb3J0LiAqL1xuICAgIEFQSS5wcm90b3R5cGUuX2dldEJhc2VVcmwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkc24gPSB0aGlzLl9kc25PYmplY3Q7XG4gICAgICAgIHZhciBwcm90b2NvbCA9IGRzbi5wcm90b2NvbCA/IGRzbi5wcm90b2NvbCArIFwiOlwiIDogJyc7XG4gICAgICAgIHZhciBwb3J0ID0gZHNuLnBvcnQgPyBcIjpcIiArIGRzbi5wb3J0IDogJyc7XG4gICAgICAgIHJldHVybiBwcm90b2NvbCArIFwiLy9cIiArIGRzbi5ob3N0ICsgcG9ydDtcbiAgICB9O1xuICAgIC8qKiBSZXR1cm5zIG9ubHkgdGhlIHBhdGggY29tcG9uZW50IGZvciB0aGUgc3RvcmUgZW5kcG9pbnQuICovXG4gICAgQVBJLnByb3RvdHlwZS5nZXRTdG9yZUVuZHBvaW50UGF0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRzbiA9IHRoaXMuX2Rzbk9iamVjdDtcbiAgICAgICAgcmV0dXJuIChkc24ucGF0aCA/IFwiL1wiICsgZHNuLnBhdGggOiAnJykgKyBcIi9hcGkvXCIgKyBkc24ucHJvamVjdElkICsgXCIvc3RvcmUvXCI7XG4gICAgfTtcbiAgICAvKiogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBpbiByZXF1ZXN0IGhlYWRlcnMuICovXG4gICAgQVBJLnByb3RvdHlwZS5nZXRSZXF1ZXN0SGVhZGVycyA9IGZ1bmN0aW9uIChjbGllbnROYW1lLCBjbGllbnRWZXJzaW9uKSB7XG4gICAgICAgIHZhciBkc24gPSB0aGlzLl9kc25PYmplY3Q7XG4gICAgICAgIHZhciBoZWFkZXIgPSBbXCJTZW50cnkgc2VudHJ5X3ZlcnNpb249XCIgKyBTRU5UUllfQVBJX1ZFUlNJT05dO1xuICAgICAgICBoZWFkZXIucHVzaChcInNlbnRyeV9jbGllbnQ9XCIgKyBjbGllbnROYW1lICsgXCIvXCIgKyBjbGllbnRWZXJzaW9uKTtcbiAgICAgICAgaGVhZGVyLnB1c2goXCJzZW50cnlfa2V5PVwiICsgZHNuLnVzZXIpO1xuICAgICAgICBpZiAoZHNuLnBhc3MpIHtcbiAgICAgICAgICAgIGhlYWRlci5wdXNoKFwic2VudHJ5X3NlY3JldD1cIiArIGRzbi5wYXNzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdYLVNlbnRyeS1BdXRoJzogaGVhZGVyLmpvaW4oJywgJyksXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKiogUmV0dXJucyB0aGUgdXJsIHRvIHRoZSByZXBvcnQgZGlhbG9nIGVuZHBvaW50LiAqL1xuICAgIEFQSS5wcm90b3R5cGUuZ2V0UmVwb3J0RGlhbG9nRW5kcG9pbnQgPSBmdW5jdGlvbiAoZGlhbG9nT3B0aW9ucykge1xuICAgICAgICBpZiAoZGlhbG9nT3B0aW9ucyA9PT0gdm9pZCAwKSB7IGRpYWxvZ09wdGlvbnMgPSB7fTsgfVxuICAgICAgICB2YXIgZHNuID0gdGhpcy5fZHNuT2JqZWN0O1xuICAgICAgICB2YXIgZW5kcG9pbnQgPSBcIlwiICsgdGhpcy5fZ2V0QmFzZVVybCgpICsgKGRzbi5wYXRoID8gXCIvXCIgKyBkc24ucGF0aCA6ICcnKSArIFwiL2FwaS9lbWJlZC9lcnJvci1wYWdlL1wiO1xuICAgICAgICB2YXIgZW5jb2RlZE9wdGlvbnMgPSBbXTtcbiAgICAgICAgZW5jb2RlZE9wdGlvbnMucHVzaChcImRzbj1cIiArIGRzbi50b1N0cmluZygpKTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRpYWxvZ09wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICd1c2VyJykge1xuICAgICAgICAgICAgICAgIGlmICghZGlhbG9nT3B0aW9ucy51c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGlhbG9nT3B0aW9ucy51c2VyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlZE9wdGlvbnMucHVzaChcIm5hbWU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGlhbG9nT3B0aW9ucy51c2VyLm5hbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRpYWxvZ09wdGlvbnMudXNlci5lbWFpbCkge1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGVkT3B0aW9ucy5wdXNoKFwiZW1haWw9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGlhbG9nT3B0aW9ucy51c2VyLmVtYWlsKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5jb2RlZE9wdGlvbnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRpYWxvZ09wdGlvbnNba2V5XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlbmNvZGVkT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmRwb2ludCArIFwiP1wiICsgZW5jb2RlZE9wdGlvbnMuam9pbignJicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbmRwb2ludDtcbiAgICB9O1xuICAgIHJldHVybiBBUEk7XG59KCkpO1xuZXhwb3J0IHsgQVBJIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcGkuanMubWFwIiwiaW1wb3J0IHsgbG9nZ2VyLCBTZW50cnlFcnJvciB9IGZyb20gJ0BzZW50cnkvdXRpbHMnO1xuaW1wb3J0IHsgTm9vcFRyYW5zcG9ydCB9IGZyb20gJy4vdHJhbnNwb3J0cy9ub29wJztcbi8qKlxuICogVGhpcyBpcyB0aGUgYmFzZSBpbXBsZW1lbnRpb24gb2YgYSBCYWNrZW5kLlxuICogQGhpZGRlblxuICovXG52YXIgQmFzZUJhY2tlbmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIENyZWF0ZXMgYSBuZXcgYmFja2VuZCBpbnN0YW5jZS4gKi9cbiAgICBmdW5jdGlvbiBCYXNlQmFja2VuZChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBpZiAoIXRoaXMuX29wdGlvbnMuZHNuKSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybignTm8gRFNOIHByb3ZpZGVkLCBiYWNrZW5kIHdpbGwgbm90IGRvIGFueXRoaW5nLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydCA9IHRoaXMuX3NldHVwVHJhbnNwb3J0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIHRyYW5zcG9ydCBzbyBpdCBjYW4gYmUgdXNlZCBsYXRlciB0byBzZW5kIHJlcXVlc3RzLlxuICAgICAqL1xuICAgIEJhc2VCYWNrZW5kLnByb3RvdHlwZS5fc2V0dXBUcmFuc3BvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgTm9vcFRyYW5zcG9ydCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBCYXNlQmFja2VuZC5wcm90b3R5cGUuZXZlbnRGcm9tRXhjZXB0aW9uID0gZnVuY3Rpb24gKF9leGNlcHRpb24sIF9oaW50KSB7XG4gICAgICAgIHRocm93IG5ldyBTZW50cnlFcnJvcignQmFja2VuZCBoYXMgdG8gaW1wbGVtZW50IGBldmVudEZyb21FeGNlcHRpb25gIG1ldGhvZCcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBCYXNlQmFja2VuZC5wcm90b3R5cGUuZXZlbnRGcm9tTWVzc2FnZSA9IGZ1bmN0aW9uIChfbWVzc2FnZSwgX2xldmVsLCBfaGludCkge1xuICAgICAgICB0aHJvdyBuZXcgU2VudHJ5RXJyb3IoJ0JhY2tlbmQgaGFzIHRvIGltcGxlbWVudCBgZXZlbnRGcm9tTWVzc2FnZWAgbWV0aG9kJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIEJhc2VCYWNrZW5kLnByb3RvdHlwZS5zZW5kRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNwb3J0LnNlbmRFdmVudChldmVudCkudGhlbihudWxsLCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJFcnJvciB3aGlsZSBzZW5kaW5nIGV2ZW50OiBcIiArIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBCYXNlQmFja2VuZC5wcm90b3R5cGUuZ2V0VHJhbnNwb3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNwb3J0O1xuICAgIH07XG4gICAgcmV0dXJuIEJhc2VCYWNrZW5kO1xufSgpKTtcbmV4cG9ydCB7IEJhc2VCYWNrZW5kIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlYmFja2VuZC5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgRHNuLCBpc1ByaW1pdGl2ZSwgaXNUaGVuYWJsZSwgbG9nZ2VyLCBub3JtYWxpemUsIFN5bmNQcm9taXNlLCB0cnVuY2F0ZSwgdXVpZDQgfSBmcm9tICdAc2VudHJ5L3V0aWxzJztcbmltcG9ydCB7IHNldHVwSW50ZWdyYXRpb25zIH0gZnJvbSAnLi9pbnRlZ3JhdGlvbic7XG4vKipcbiAqIEJhc2UgaW1wbGVtZW50YXRpb24gZm9yIGFsbCBKYXZhU2NyaXB0IFNESyBjbGllbnRzLlxuICpcbiAqIENhbGwgdGhlIGNvbnN0cnVjdG9yIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgYmFja2VuZCBjb25zdHJ1Y3RvciBhbmQgb3B0aW9uc1xuICogc3BlY2lmaWMgdG8gdGhlIGNsaWVudCBzdWJjbGFzcy4gVG8gYWNjZXNzIHRoZXNlIG9wdGlvbnMgbGF0ZXIsIHVzZVxuICoge0BsaW5rIENsaWVudC5nZXRPcHRpb25zfS4gQWxzbywgdGhlIEJhY2tlbmQgaW5zdGFuY2UgaXMgYXZhaWxhYmxlIHZpYVxuICoge0BsaW5rIENsaWVudC5nZXRCYWNrZW5kfS5cbiAqXG4gKiBJZiBhIERzbiBpcyBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMsIGl0IHdpbGwgYmUgcGFyc2VkIGFuZCBzdG9yZWQuIFVzZVxuICoge0BsaW5rIENsaWVudC5nZXREc259IHRvIHJldHJpZXZlIHRoZSBEc24gYXQgYW55IG1vbWVudC4gSW4gY2FzZSB0aGUgRHNuIGlzXG4gKiBpbnZhbGlkLCB0aGUgY29uc3RydWN0b3Igd2lsbCB0aHJvdyBhIHtAbGluayBTZW50cnlFeGNlcHRpb259LiBOb3RlIHRoYXRcbiAqIHdpdGhvdXQgYSB2YWxpZCBEc24sIHRoZSBTREsgd2lsbCBub3Qgc2VuZCBhbnkgZXZlbnRzIHRvIFNlbnRyeS5cbiAqXG4gKiBCZWZvcmUgc2VuZGluZyBhbiBldmVudCB2aWEgdGhlIGJhY2tlbmQsIGl0IGlzIHBhc3NlZCB0aHJvdWdoXG4gKiB7QGxpbmsgQmFzZUNsaWVudC5wcmVwYXJlRXZlbnR9IHRvIGFkZCBTREsgaW5mb3JtYXRpb24gYW5kIHNjb3BlIGRhdGFcbiAqIChicmVhZGNydW1icyBhbmQgY29udGV4dCkuIFRvIGFkZCBtb3JlIGN1c3RvbSBpbmZvcm1hdGlvbiwgb3ZlcnJpZGUgdGhpc1xuICogbWV0aG9kIGFuZCBleHRlbmQgdGhlIHJlc3VsdGluZyBwcmVwYXJlZCBldmVudC5cbiAqXG4gKiBUbyBpc3N1ZSBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQgZXZlbnRzIChlLmcuIHZpYSBpbnN0cnVtZW50YXRpb24pLCB1c2VcbiAqIHtAbGluayBDbGllbnQuY2FwdHVyZUV2ZW50fS4gSXQgd2lsbCBwcmVwYXJlIHRoZSBldmVudCBhbmQgcGFzcyBpdCB0aHJvdWdoXG4gKiB0aGUgY2FsbGJhY2sgbGlmZWN5Y2xlLiBUbyBpc3N1ZSBhdXRvLWJyZWFkY3J1bWJzLCB1c2VcbiAqIHtAbGluayBDbGllbnQuYWRkQnJlYWRjcnVtYn0uXG4gKlxuICogQGV4YW1wbGVcbiAqIGNsYXNzIE5vZGVDbGllbnQgZXh0ZW5kcyBCYXNlQ2xpZW50PE5vZGVCYWNrZW5kLCBOb2RlT3B0aW9ucz4ge1xuICogICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogTm9kZU9wdGlvbnMpIHtcbiAqICAgICBzdXBlcihOb2RlQmFja2VuZCwgb3B0aW9ucyk7XG4gKiAgIH1cbiAqXG4gKiAgIC8vIC4uLlxuICogfVxuICovXG52YXIgQmFzZUNsaWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB0aGlzIGNsaWVudCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBiYWNrZW5kQ2xhc3MgQSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGJhY2tlbmQuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBmb3IgdGhlIGNsaWVudC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBCYXNlQ2xpZW50KGJhY2tlbmRDbGFzcywgb3B0aW9ucykge1xuICAgICAgICAvKiogQXJyYXkgb2YgdXNlZCBpbnRlZ3JhdGlvbnMuICovXG4gICAgICAgIHRoaXMuX2ludGVncmF0aW9ucyA9IHt9O1xuICAgICAgICAvKiogSXMgdGhlIGNsaWVudCBzdGlsbCBwcm9jZXNzaW5nIGEgY2FsbD8gKi9cbiAgICAgICAgdGhpcy5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9iYWNrZW5kID0gbmV3IGJhY2tlbmRDbGFzcyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGlmIChvcHRpb25zLmRzbikge1xuICAgICAgICAgICAgdGhpcy5fZHNuID0gbmV3IERzbihvcHRpb25zLmRzbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBCYXNlQ2xpZW50LnByb3RvdHlwZS5jYXB0dXJlRXhjZXB0aW9uID0gZnVuY3Rpb24gKGV4Y2VwdGlvbiwgaGludCwgc2NvcGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGV2ZW50SWQgPSBoaW50ICYmIGhpbnQuZXZlbnRfaWQ7XG4gICAgICAgIHRoaXMuX3Byb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLl9nZXRCYWNrZW5kKClcbiAgICAgICAgICAgIC5ldmVudEZyb21FeGNlcHRpb24oZXhjZXB0aW9uLCBoaW50KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5fcHJvY2Vzc0V2ZW50KGV2ZW50LCBoaW50LCBzY29wZSk7IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZmluYWxFdmVudCkge1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBmb3IgZmluYWxFdmVudCBpbiBjYXNlIGJlZm9yZVNlbmQgcmV0dXJuZWQgbnVsbFxuICAgICAgICAgICAgZXZlbnRJZCA9IGZpbmFsRXZlbnQgJiYgZmluYWxFdmVudC5ldmVudF9pZDtcbiAgICAgICAgICAgIF90aGlzLl9wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihudWxsLCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IocmVhc29uKTtcbiAgICAgICAgICAgIF90aGlzLl9wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZXZlbnRJZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgQmFzZUNsaWVudC5wcm90b3R5cGUuY2FwdHVyZU1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSwgbGV2ZWwsIGhpbnQsIHNjb3BlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBldmVudElkID0gaGludCAmJiBoaW50LmV2ZW50X2lkO1xuICAgICAgICB0aGlzLl9wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIHByb21pc2VkRXZlbnQgPSBpc1ByaW1pdGl2ZShtZXNzYWdlKVxuICAgICAgICAgICAgPyB0aGlzLl9nZXRCYWNrZW5kKCkuZXZlbnRGcm9tTWVzc2FnZShcIlwiICsgbWVzc2FnZSwgbGV2ZWwsIGhpbnQpXG4gICAgICAgICAgICA6IHRoaXMuX2dldEJhY2tlbmQoKS5ldmVudEZyb21FeGNlcHRpb24obWVzc2FnZSwgaGludCk7XG4gICAgICAgIHByb21pc2VkRXZlbnRcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuX3Byb2Nlc3NFdmVudChldmVudCwgaGludCwgc2NvcGUpOyB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGZpbmFsRXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgZm9yIGZpbmFsRXZlbnQgaW4gY2FzZSBiZWZvcmVTZW5kIHJldHVybmVkIG51bGxcbiAgICAgICAgICAgIGV2ZW50SWQgPSBmaW5hbEV2ZW50ICYmIGZpbmFsRXZlbnQuZXZlbnRfaWQ7XG4gICAgICAgICAgICBfdGhpcy5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4obnVsbCwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKHJlYXNvbik7XG4gICAgICAgICAgICBfdGhpcy5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGV2ZW50SWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIEJhc2VDbGllbnQucHJvdG90eXBlLmNhcHR1cmVFdmVudCA9IGZ1bmN0aW9uIChldmVudCwgaGludCwgc2NvcGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGV2ZW50SWQgPSBoaW50ICYmIGhpbnQuZXZlbnRfaWQ7XG4gICAgICAgIHRoaXMuX3Byb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wcm9jZXNzRXZlbnQoZXZlbnQsIGhpbnQsIHNjb3BlKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGZpbmFsRXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgZm9yIGZpbmFsRXZlbnQgaW4gY2FzZSBiZWZvcmVTZW5kIHJldHVybmVkIG51bGxcbiAgICAgICAgICAgIGV2ZW50SWQgPSBmaW5hbEV2ZW50ICYmIGZpbmFsRXZlbnQuZXZlbnRfaWQ7XG4gICAgICAgICAgICBfdGhpcy5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4obnVsbCwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKHJlYXNvbik7XG4gICAgICAgICAgICBfdGhpcy5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGV2ZW50SWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIEJhc2VDbGllbnQucHJvdG90eXBlLmdldERzbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RzbjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgQmFzZUNsaWVudC5wcm90b3R5cGUuZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIEJhc2VDbGllbnQucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ2xpZW50UHJvY2Vzc2luZyh0aW1lb3V0KS50aGVuKGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3RhdHVzLmludGVydmFsKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fZ2V0QmFja2VuZCgpXG4gICAgICAgICAgICAgICAgLmdldFRyYW5zcG9ydCgpXG4gICAgICAgICAgICAgICAgLmNsb3NlKHRpbWVvdXQpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHRyYW5zcG9ydEZsdXNoZWQpIHsgcmV0dXJuIHN0YXR1cy5yZWFkeSAmJiB0cmFuc3BvcnRGbHVzaGVkOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIEJhc2VDbGllbnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuZmx1c2godGltZW91dCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBfdGhpcy5nZXRPcHRpb25zKCkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBpbnRlZ3JhdGlvbnNcbiAgICAgKi9cbiAgICBCYXNlQ2xpZW50LnByb3RvdHlwZS5zZXR1cEludGVncmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnRlZ3JhdGlvbnMgPSBzZXR1cEludGVncmF0aW9ucyh0aGlzLl9vcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBCYXNlQ2xpZW50LnByb3RvdHlwZS5nZXRJbnRlZ3JhdGlvbiA9IGZ1bmN0aW9uIChpbnRlZ3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVncmF0aW9uc1tpbnRlZ3JhdGlvbi5pZF0gfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX29PKSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybihcIkNhbm5vdCByZXRyaWV2ZSBpbnRlZ3JhdGlvbiBcIiArIGludGVncmF0aW9uLmlkICsgXCIgZnJvbSB0aGUgY3VycmVudCBDbGllbnRcIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqIFdhaXRzIGZvciB0aGUgY2xpZW50IHRvIGJlIGRvbmUgd2l0aCBwcm9jZXNzaW5nLiAqL1xuICAgIEJhc2VDbGllbnQucHJvdG90eXBlLl9pc0NsaWVudFByb2Nlc3NpbmcgPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFN5bmNQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICB2YXIgdGlja2VkID0gMDtcbiAgICAgICAgICAgIHZhciB0aWNrID0gMTtcbiAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IDA7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX3Byb2Nlc3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbDogaW50ZXJ2YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aWNrZWQgKz0gdGljaztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQgJiYgdGlja2VkID49IHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsOiBpbnRlcnZhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRpY2spO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBSZXR1cm5zIHRoZSBjdXJyZW50IGJhY2tlbmQuICovXG4gICAgQmFzZUNsaWVudC5wcm90b3R5cGUuX2dldEJhY2tlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iYWNrZW5kO1xuICAgIH07XG4gICAgLyoqIERldGVybWluZXMgd2hldGhlciB0aGlzIFNESyBpcyBlbmFibGVkIGFuZCBhIHZhbGlkIERzbiBpcyBwcmVzZW50LiAqL1xuICAgIEJhc2VDbGllbnQucHJvdG90eXBlLl9pc0VuYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9wdGlvbnMoKS5lbmFibGVkICE9PSBmYWxzZSAmJiB0aGlzLl9kc24gIT09IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgY29tbW9uIGluZm9ybWF0aW9uIHRvIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIFRoZSBpbmZvcm1hdGlvbiBpbmNsdWRlcyByZWxlYXNlIGFuZCBlbnZpcm9ubWVudCBmcm9tIGBvcHRpb25zYCxcbiAgICAgKiBicmVhZGNydW1icyBhbmQgY29udGV4dCAoZXh0cmEsIHRhZ3MgYW5kIHVzZXIpIGZyb20gdGhlIHNjb3BlLlxuICAgICAqXG4gICAgICogSW5mb3JtYXRpb24gdGhhdCBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIGV2ZW50IGlzIG5ldmVyIG92ZXJ3cml0dGVuLiBGb3JcbiAgICAgKiBuZXN0ZWQgb2JqZWN0cywgc3VjaCBhcyB0aGUgY29udGV4dCwga2V5cyBhcmUgbWVyZ2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50IFRoZSBvcmlnaW5hbCBldmVudC5cbiAgICAgKiBAcGFyYW0gaGludCBNYXkgY29udGFpbiBhZGRpdGlvbmFsIGluZm9ybWFydGlvbiBhYm91dCB0aGUgb3JpZ2luYWwgZXhjZXB0aW9uLlxuICAgICAqIEBwYXJhbSBzY29wZSBBIHNjb3BlIGNvbnRhaW5pbmcgZXZlbnQgbWV0YWRhdGEuXG4gICAgICogQHJldHVybnMgQSBuZXcgZXZlbnQgd2l0aCBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIEJhc2VDbGllbnQucHJvdG90eXBlLl9wcmVwYXJlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIHNjb3BlLCBoaW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuZ2V0T3B0aW9ucygpLCBlbnZpcm9ubWVudCA9IF9hLmVudmlyb25tZW50LCByZWxlYXNlID0gX2EucmVsZWFzZSwgZGlzdCA9IF9hLmRpc3QsIF9iID0gX2EubWF4VmFsdWVMZW5ndGgsIG1heFZhbHVlTGVuZ3RoID0gX2IgPT09IHZvaWQgMCA/IDI1MCA6IF9iLCBfYyA9IF9hLm5vcm1hbGl6ZURlcHRoLCBub3JtYWxpemVEZXB0aCA9IF9jID09PSB2b2lkIDAgPyAzIDogX2M7XG4gICAgICAgIHZhciBwcmVwYXJlZCA9IHRzbGliXzEuX19hc3NpZ24oe30sIGV2ZW50KTtcbiAgICAgICAgaWYgKHByZXBhcmVkLmVudmlyb25tZW50ID09PSB1bmRlZmluZWQgJiYgZW52aXJvbm1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJlcGFyZWQuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlcGFyZWQucmVsZWFzZSA9PT0gdW5kZWZpbmVkICYmIHJlbGVhc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJlcGFyZWQucmVsZWFzZSA9IHJlbGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXBhcmVkLmRpc3QgPT09IHVuZGVmaW5lZCAmJiBkaXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByZXBhcmVkLmRpc3QgPSBkaXN0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVwYXJlZC5tZXNzYWdlKSB7XG4gICAgICAgICAgICBwcmVwYXJlZC5tZXNzYWdlID0gdHJ1bmNhdGUocHJlcGFyZWQubWVzc2FnZSwgbWF4VmFsdWVMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleGNlcHRpb24gPSBwcmVwYXJlZC5leGNlcHRpb24gJiYgcHJlcGFyZWQuZXhjZXB0aW9uLnZhbHVlcyAmJiBwcmVwYXJlZC5leGNlcHRpb24udmFsdWVzWzBdO1xuICAgICAgICBpZiAoZXhjZXB0aW9uICYmIGV4Y2VwdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgZXhjZXB0aW9uLnZhbHVlID0gdHJ1bmNhdGUoZXhjZXB0aW9uLnZhbHVlLCBtYXhWYWx1ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlcXVlc3QgPSBwcmVwYXJlZC5yZXF1ZXN0O1xuICAgICAgICBpZiAocmVxdWVzdCAmJiByZXF1ZXN0LnVybCkge1xuICAgICAgICAgICAgcmVxdWVzdC51cmwgPSB0cnVuY2F0ZShyZXF1ZXN0LnVybCwgbWF4VmFsdWVMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVwYXJlZC5ldmVudF9pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcmVwYXJlZC5ldmVudF9pZCA9IGhpbnQgJiYgaGludC5ldmVudF9pZCA/IGhpbnQuZXZlbnRfaWQgOiB1dWlkNCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2FkZEludGVncmF0aW9ucyhwcmVwYXJlZC5zZGspO1xuICAgICAgICAvLyBXZSBwcmVwYXJlIHRoZSByZXN1bHQgaGVyZSB3aXRoIGEgcmVzb2x2ZWQgRXZlbnQuXG4gICAgICAgIHZhciByZXN1bHQgPSBTeW5jUHJvbWlzZS5yZXNvbHZlKHByZXBhcmVkKTtcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgYmUgdGhlIGxhc3QgdGhpbmcgY2FsbGVkLCBzaW5jZSB3ZSB3YW50IHRoYXRcbiAgICAgICAgLy8ge0BsaW5rIEh1Yi5hZGRFdmVudFByb2Nlc3Nvcn0gZ2V0cyB0aGUgZmluaXNoZWQgcHJlcGFyZWQgZXZlbnQuXG4gICAgICAgIGlmIChzY29wZSkge1xuICAgICAgICAgICAgLy8gSW4gY2FzZSB3ZSBoYXZlIGEgaHViIHdlIHJlYXNzaWduIGl0LlxuICAgICAgICAgICAgcmVzdWx0ID0gc2NvcGUuYXBwbHlUb0V2ZW50KHByZXBhcmVkLCBoaW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnN0cmljdC10eXBlLXByZWRpY2F0ZXNcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygbm9ybWFsaXplRGVwdGggPT09ICdudW1iZXInICYmIG5vcm1hbGl6ZURlcHRoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5fbm9ybWFsaXplRXZlbnQoZXZ0LCBub3JtYWxpemVEZXB0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZXZ0O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYG5vcm1hbGl6ZWAgZnVuY3Rpb24gb24gbmVjZXNzYXJ5IGBFdmVudGAgYXR0cmlidXRlcyB0byBtYWtlIHRoZW0gc2FmZSBmb3Igc2VyaWFsaXphdGlvbi5cbiAgICAgKiBOb3JtYWxpemVkIGtleXM6XG4gICAgICogLSBgYnJlYWRjcnVtYnMuZGF0YWBcbiAgICAgKiAtIGB1c2VyYFxuICAgICAqIC0gYGNvbnRleHRzYFxuICAgICAqIC0gYGV4dHJhYFxuICAgICAqIEBwYXJhbSBldmVudCBFdmVudFxuICAgICAqIEByZXR1cm5zIE5vcm1hbGl6ZWQgZXZlbnRcbiAgICAgKi9cbiAgICBCYXNlQ2xpZW50LnByb3RvdHlwZS5fbm9ybWFsaXplRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGRlcHRoKSB7XG4gICAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLXVuc2FmZS1hbnlcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hc3NpZ24oe30sIGV2ZW50LCAoZXZlbnQuYnJlYWRjcnVtYnMgJiYge1xuICAgICAgICAgICAgYnJlYWRjcnVtYnM6IGV2ZW50LmJyZWFkY3J1bWJzLm1hcChmdW5jdGlvbiAoYikgeyByZXR1cm4gKHRzbGliXzEuX19hc3NpZ24oe30sIGIsIChiLmRhdGEgJiYge1xuICAgICAgICAgICAgICAgIGRhdGE6IG5vcm1hbGl6ZShiLmRhdGEsIGRlcHRoKSxcbiAgICAgICAgICAgIH0pKSk7IH0pLFxuICAgICAgICB9KSwgKGV2ZW50LnVzZXIgJiYge1xuICAgICAgICAgICAgdXNlcjogbm9ybWFsaXplKGV2ZW50LnVzZXIsIGRlcHRoKSxcbiAgICAgICAgfSksIChldmVudC5jb250ZXh0cyAmJiB7XG4gICAgICAgICAgICBjb250ZXh0czogbm9ybWFsaXplKGV2ZW50LmNvbnRleHRzLCBkZXB0aCksXG4gICAgICAgIH0pLCAoZXZlbnQuZXh0cmEgJiYge1xuICAgICAgICAgICAgZXh0cmE6IG5vcm1hbGl6ZShldmVudC5leHRyYSwgZGVwdGgpLFxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGFkZHMgYWxsIHVzZWQgaW50ZWdyYXRpb25zIHRvIHRoZSBTREsgaW5mbyBpbiB0aGUgZXZlbnQuXG4gICAgICogQHBhcmFtIHNka0luZm8gVGhlIHNka0luZm8gb2YgdGhlIGV2ZW50IHRoYXQgd2lsbCBiZSBmaWxsZWQgd2l0aCBhbGwgaW50ZWdyYXRpb25zLlxuICAgICAqL1xuICAgIEJhc2VDbGllbnQucHJvdG90eXBlLl9hZGRJbnRlZ3JhdGlvbnMgPSBmdW5jdGlvbiAoc2RrSW5mbykge1xuICAgICAgICB2YXIgaW50ZWdyYXRpb25zQXJyYXkgPSBPYmplY3Qua2V5cyh0aGlzLl9pbnRlZ3JhdGlvbnMpO1xuICAgICAgICBpZiAoc2RrSW5mbyAmJiBpbnRlZ3JhdGlvbnNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZGtJbmZvLmludGVncmF0aW9ucyA9IGludGVncmF0aW9uc0FycmF5O1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYW4gZXZlbnQgKGVpdGhlciBlcnJvciBvciBtZXNzYWdlKSBhbmQgc2VuZHMgaXQgdG8gU2VudHJ5LlxuICAgICAqXG4gICAgICogVGhpcyBhbHNvIGFkZHMgYnJlYWRjcnVtYnMgYW5kIGNvbnRleHQgaW5mb3JtYXRpb24gdG8gdGhlIGV2ZW50LiBIb3dldmVyLFxuICAgICAqIHBsYXRmb3JtIHNwZWNpZmljIG1ldGEgZGF0YSAoc3VjaCBhcyB0aGUgVXNlcidzIElQIGFkZHJlc3MpIG11c3QgYmUgYWRkZWRcbiAgICAgKiBieSB0aGUgU0RLIGltcGxlbWVudG9yLlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IHRvIHNlbmQgdG8gU2VudHJ5LlxuICAgICAqIEBwYXJhbSBoaW50IE1heSBjb250YWluIGFkZGl0aW9uYWwgaW5mb3JtYXJ0aW9uIGFib3V0IHRoZSBvcmlnaW5hbCBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHNjb3BlIEEgc2NvcGUgY29udGFpbmluZyBldmVudCBtZXRhZGF0YS5cbiAgICAgKiBAcmV0dXJucyBBIFN5bmNQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZXZlbnQgb3IgcmVqZWN0cyBpbiBjYXNlIGV2ZW50IHdhcy93aWxsIG5vdCBiZSBzZW5kLlxuICAgICAqL1xuICAgIEJhc2VDbGllbnQucHJvdG90eXBlLl9wcm9jZXNzRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGhpbnQsIHNjb3BlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuZ2V0T3B0aW9ucygpLCBiZWZvcmVTZW5kID0gX2EuYmVmb3JlU2VuZCwgc2FtcGxlUmF0ZSA9IF9hLnNhbXBsZVJhdGU7XG4gICAgICAgIGlmICghdGhpcy5faXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBTeW5jUHJvbWlzZS5yZWplY3QoJ1NESyBub3QgZW5hYmxlZCwgd2lsbCBub3Qgc2VuZCBldmVudC4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyAxLjAgPT09IDEwMCUgZXZlbnRzIGFyZSBzZW50XG4gICAgICAgIC8vIDAuMCA9PT0gMCUgZXZlbnRzIGFyZSBzZW50XG4gICAgICAgIGlmICh0eXBlb2Ygc2FtcGxlUmF0ZSA9PT0gJ251bWJlcicgJiYgTWF0aC5yYW5kb20oKSA+IHNhbXBsZVJhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBTeW5jUHJvbWlzZS5yZWplY3QoJ1RoaXMgZXZlbnQgaGFzIGJlZW4gc2FtcGxlZCwgd2lsbCBub3Qgc2VuZCBldmVudC4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFN5bmNQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIF90aGlzLl9wcmVwYXJlRXZlbnQoZXZlbnQsIHNjb3BlLCBoaW50KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChwcmVwYXJlZCkge1xuICAgICAgICAgICAgICAgIGlmIChwcmVwYXJlZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ0FuIGV2ZW50IHByb2Nlc3NvciByZXR1cm5lZCBudWxsLCB3aWxsIG5vdCBzZW5kIGV2ZW50LicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBmaW5hbEV2ZW50ID0gcHJlcGFyZWQ7XG4gICAgICAgICAgICAgICAgdmFyIGlzSW50ZXJuYWxFeGNlcHRpb24gPSBoaW50ICYmIGhpbnQuZGF0YSAmJiBoaW50LmRhdGEuX19zZW50cnlfXyA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNJbnRlcm5hbEV4Y2VwdGlvbiB8fCAhYmVmb3JlU2VuZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fZ2V0QmFja2VuZCgpLnNlbmRFdmVudChmaW5hbEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmaW5hbEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgYmVmb3JlU2VuZFJlc3VsdCA9IGJlZm9yZVNlbmQocHJlcGFyZWQsIGhpbnQpO1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpzdHJpY3QtdHlwZS1wcmVkaWNhdGVzXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBiZWZvcmVTZW5kUmVzdWx0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoJ2BiZWZvcmVTZW5kYCBtZXRob2QgaGFzIHRvIHJldHVybiBgbnVsbGAgb3IgYSB2YWxpZCBldmVudC4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNUaGVuYWJsZShiZWZvcmVTZW5kUmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5faGFuZGxlQXN5bmNCZWZvcmVTZW5kKGJlZm9yZVNlbmRSZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbEV2ZW50ID0gYmVmb3JlU2VuZFJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmFsRXZlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coJ2BiZWZvcmVTZW5kYCByZXR1cm5lZCBgbnVsbGAsIHdpbGwgbm90IHNlbmQgZXZlbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEZyb20gaGVyZSBvbiB3ZSBhcmUgcmVhbGx5IGFzeW5jXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9nZXRCYWNrZW5kKCkuc2VuZEV2ZW50KGZpbmFsRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZpbmFsRXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4obnVsbCwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgICAgICAgIF90aGlzLmNhcHR1cmVFeGNlcHRpb24ocmVhc29uLCB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fc2VudHJ5X186IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXhjZXB0aW9uOiByZWFzb24sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiRXZlbnQgcHJvY2Vzc2luZyBwaXBlbGluZSB0aHJldyBhbiBlcnJvciwgb3JpZ2luYWwgZXZlbnQgd2lsbCBub3QgYmUgc2VudC4gRGV0YWlscyBoYXZlIGJlZW4gc2VudCBhcyBhIG5ldyBldmVudC5cXG5SZWFzb246IFwiICsgcmVhc29uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIGJlZm9yZSBzZW5kIFByb21pc2UgYW5kIGNhbGxzIHJlc29sdmUvcmVqZWN0IG9uIHBhcmVudCBTeW5jUHJvbWlzZS5cbiAgICAgKi9cbiAgICBCYXNlQ2xpZW50LnByb3RvdHlwZS5faGFuZGxlQXN5bmNCZWZvcmVTZW5kID0gZnVuY3Rpb24gKGJlZm9yZVNlbmQsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBiZWZvcmVTZW5kXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocHJvY2Vzc2VkRXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzZWRFdmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlamVjdCgnYGJlZm9yZVNlbmRgIHJldHVybmVkIGBudWxsYCwgd2lsbCBub3Qgc2VuZCBldmVudC4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGcm9tIGhlcmUgb24gd2UgYXJlIHJlYWxseSBhc3luY1xuICAgICAgICAgICAgX3RoaXMuX2dldEJhY2tlbmQoKS5zZW5kRXZlbnQocHJvY2Vzc2VkRXZlbnQpO1xuICAgICAgICAgICAgcmVzb2x2ZShwcm9jZXNzZWRFdmVudCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihudWxsLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmVqZWN0KFwiYmVmb3JlU2VuZCByZWplY3RlZCB3aXRoIFwiICsgZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEJhc2VDbGllbnQ7XG59KCkpO1xuZXhwb3J0IHsgQmFzZUNsaWVudCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZWNsaWVudC5qcy5tYXAiLCJleHBvcnQgeyBhZGRCcmVhZGNydW1iLCBjYXB0dXJlRXhjZXB0aW9uLCBjYXB0dXJlRXZlbnQsIGNhcHR1cmVNZXNzYWdlLCBjb25maWd1cmVTY29wZSwgc2V0Q29udGV4dCwgc2V0RXh0cmEsIHNldEV4dHJhcywgc2V0VGFnLCBzZXRUYWdzLCBzZXRVc2VyLCB3aXRoU2NvcGUsIH0gZnJvbSAnQHNlbnRyeS9taW5pbWFsJztcbmV4cG9ydCB7IGFkZEdsb2JhbEV2ZW50UHJvY2Vzc29yLCBnZXRDdXJyZW50SHViLCBnZXRIdWJGcm9tQ2FycmllciwgSHViLCBTY29wZSB9IGZyb20gJ0BzZW50cnkvaHViJztcbmV4cG9ydCB7IEFQSSB9IGZyb20gJy4vYXBpJztcbmV4cG9ydCB7IEJhc2VDbGllbnQgfSBmcm9tICcuL2Jhc2VjbGllbnQnO1xuZXhwb3J0IHsgQmFzZUJhY2tlbmQgfSBmcm9tICcuL2Jhc2ViYWNrZW5kJztcbmV4cG9ydCB7IGluaXRBbmRCaW5kIH0gZnJvbSAnLi9zZGsnO1xuZXhwb3J0IHsgTm9vcFRyYW5zcG9ydCB9IGZyb20gJy4vdHJhbnNwb3J0cy9ub29wJztcbmltcG9ydCAqIGFzIEludGVncmF0aW9ucyBmcm9tICcuL2ludGVncmF0aW9ucyc7XG5leHBvcnQgeyBJbnRlZ3JhdGlvbnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBhZGRHbG9iYWxFdmVudFByb2Nlc3NvciwgZ2V0Q3VycmVudEh1YiB9IGZyb20gJ0BzZW50cnkvaHViJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ0BzZW50cnkvdXRpbHMnO1xuZXhwb3J0IHZhciBpbnN0YWxsZWRJbnRlZ3JhdGlvbnMgPSBbXTtcbi8qKiBHZXRzIGludGVncmF0aW9uIHRvIGluc3RhbGwgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnRlZ3JhdGlvbnNUb1NldHVwKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdEludGVncmF0aW9ucyA9IChvcHRpb25zLmRlZmF1bHRJbnRlZ3JhdGlvbnMgJiYgdHNsaWJfMS5fX3NwcmVhZChvcHRpb25zLmRlZmF1bHRJbnRlZ3JhdGlvbnMpKSB8fCBbXTtcbiAgICB2YXIgdXNlckludGVncmF0aW9ucyA9IG9wdGlvbnMuaW50ZWdyYXRpb25zO1xuICAgIHZhciBpbnRlZ3JhdGlvbnMgPSBbXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh1c2VySW50ZWdyYXRpb25zKSkge1xuICAgICAgICB2YXIgdXNlckludGVncmF0aW9uc05hbWVzXzEgPSB1c2VySW50ZWdyYXRpb25zLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gaS5uYW1lOyB9KTtcbiAgICAgICAgdmFyIHBpY2tlZEludGVncmF0aW9uc05hbWVzXzEgPSBbXTtcbiAgICAgICAgLy8gTGVhdmUgb25seSB1bmlxdWUgZGVmYXVsdCBpbnRlZ3JhdGlvbnMsIHRoYXQgd2VyZSBub3Qgb3ZlcnJpZGRlbiB3aXRoIHByb3ZpZGVkIHVzZXIgaW50ZWdyYXRpb25zXG4gICAgICAgIGRlZmF1bHRJbnRlZ3JhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZGVmYXVsdEludGVncmF0aW9uKSB7XG4gICAgICAgICAgICBpZiAodXNlckludGVncmF0aW9uc05hbWVzXzEuaW5kZXhPZihkZWZhdWx0SW50ZWdyYXRpb24ubmFtZSkgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgcGlja2VkSW50ZWdyYXRpb25zTmFtZXNfMS5pbmRleE9mKGRlZmF1bHRJbnRlZ3JhdGlvbi5uYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpbnRlZ3JhdGlvbnMucHVzaChkZWZhdWx0SW50ZWdyYXRpb24pO1xuICAgICAgICAgICAgICAgIHBpY2tlZEludGVncmF0aW9uc05hbWVzXzEucHVzaChkZWZhdWx0SW50ZWdyYXRpb24ubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBEb24ndCBhZGQgc2FtZSB1c2VyIGludGVncmF0aW9uIHR3aWNlXG4gICAgICAgIHVzZXJJbnRlZ3JhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAodXNlckludGVncmF0aW9uKSB7XG4gICAgICAgICAgICBpZiAocGlja2VkSW50ZWdyYXRpb25zTmFtZXNfMS5pbmRleE9mKHVzZXJJbnRlZ3JhdGlvbi5uYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpbnRlZ3JhdGlvbnMucHVzaCh1c2VySW50ZWdyYXRpb24pO1xuICAgICAgICAgICAgICAgIHBpY2tlZEludGVncmF0aW9uc05hbWVzXzEucHVzaCh1c2VySW50ZWdyYXRpb24ubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdXNlckludGVncmF0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpbnRlZ3JhdGlvbnMgPSB1c2VySW50ZWdyYXRpb25zKGRlZmF1bHRJbnRlZ3JhdGlvbnMpO1xuICAgICAgICBpbnRlZ3JhdGlvbnMgPSBBcnJheS5pc0FycmF5KGludGVncmF0aW9ucykgPyBpbnRlZ3JhdGlvbnMgOiBbaW50ZWdyYXRpb25zXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGludGVncmF0aW9ucyA9IHRzbGliXzEuX19zcHJlYWQoZGVmYXVsdEludGVncmF0aW9ucyk7XG4gICAgfVxuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGlmIHByZXNlbnQsIGBEZWJ1Z2AgaW50ZWdyYXRpb24gd2lsbCBhbHdheXMgcnVuIGxhc3RcbiAgICB2YXIgaW50ZWdyYXRpb25zTmFtZXMgPSBpbnRlZ3JhdGlvbnMubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLm5hbWU7IH0pO1xuICAgIHZhciBhbHdheXNMYXN0VG9SdW4gPSAnRGVidWcnO1xuICAgIGlmIChpbnRlZ3JhdGlvbnNOYW1lcy5pbmRleE9mKGFsd2F5c0xhc3RUb1J1bikgIT09IC0xKSB7XG4gICAgICAgIGludGVncmF0aW9ucy5wdXNoLmFwcGx5KGludGVncmF0aW9ucywgdHNsaWJfMS5fX3NwcmVhZChpbnRlZ3JhdGlvbnMuc3BsaWNlKGludGVncmF0aW9uc05hbWVzLmluZGV4T2YoYWx3YXlzTGFzdFRvUnVuKSwgMSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIGludGVncmF0aW9ucztcbn1cbi8qKiBTZXR1cCBnaXZlbiBpbnRlZ3JhdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwSW50ZWdyYXRpb24oaW50ZWdyYXRpb24pIHtcbiAgICBpZiAoaW5zdGFsbGVkSW50ZWdyYXRpb25zLmluZGV4T2YoaW50ZWdyYXRpb24ubmFtZSkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW50ZWdyYXRpb24uc2V0dXBPbmNlKGFkZEdsb2JhbEV2ZW50UHJvY2Vzc29yLCBnZXRDdXJyZW50SHViKTtcbiAgICBpbnN0YWxsZWRJbnRlZ3JhdGlvbnMucHVzaChpbnRlZ3JhdGlvbi5uYW1lKTtcbiAgICBsb2dnZXIubG9nKFwiSW50ZWdyYXRpb24gaW5zdGFsbGVkOiBcIiArIGludGVncmF0aW9uLm5hbWUpO1xufVxuLyoqXG4gKiBHaXZlbiBhIGxpc3Qgb2YgaW50ZWdyYXRpb24gaW5zdGFuY2VzIHRoaXMgaW5zdGFsbHMgdGhlbSBhbGwuIFdoZW4gYHdpdGhEZWZhdWx0c2AgaXMgc2V0IHRvIGB0cnVlYCB0aGVuIGFsbCBkZWZhdWx0XG4gKiBpbnRlZ3JhdGlvbnMgYXJlIGFkZGVkIHVubGVzcyB0aGV5IHdlcmUgYWxyZWFkeSBwcm92aWRlZCBiZWZvcmUuXG4gKiBAcGFyYW0gaW50ZWdyYXRpb25zIGFycmF5IG9mIGludGVncmF0aW9uIGluc3RhbmNlc1xuICogQHBhcmFtIHdpdGhEZWZhdWx0IHNob3VsZCBlbmFibGUgZGVmYXVsdCBpbnRlZ3JhdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwSW50ZWdyYXRpb25zKG9wdGlvbnMpIHtcbiAgICB2YXIgaW50ZWdyYXRpb25zID0ge307XG4gICAgZ2V0SW50ZWdyYXRpb25zVG9TZXR1cChvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnRlZ3JhdGlvbikge1xuICAgICAgICBpbnRlZ3JhdGlvbnNbaW50ZWdyYXRpb24ubmFtZV0gPSBpbnRlZ3JhdGlvbjtcbiAgICAgICAgc2V0dXBJbnRlZ3JhdGlvbihpbnRlZ3JhdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGludGVncmF0aW9ucztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVncmF0aW9uLmpzLm1hcCIsInZhciBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmc7XG4vKiogUGF0Y2ggdG9TdHJpbmcgY2FsbHMgdG8gcmV0dXJuIHByb3BlciBuYW1lIGZvciB3cmFwcGVkIGZ1bmN0aW9ucyAqL1xudmFyIEZ1bmN0aW9uVG9TdHJpbmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRnVuY3Rpb25Ub1N0cmluZygpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbmhlcml0RG9jXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSBGdW5jdGlvblRvU3RyaW5nLmlkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIEZ1bmN0aW9uVG9TdHJpbmcucHJvdG90eXBlLnNldHVwT25jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuICAgICAgICBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuX19zZW50cnlfb3JpZ2luYWxfXyB8fCB0aGlzO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVuc2FmZS1hbnlcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIEZ1bmN0aW9uVG9TdHJpbmcuaWQgPSAnRnVuY3Rpb25Ub1N0cmluZyc7XG4gICAgcmV0dXJuIEZ1bmN0aW9uVG9TdHJpbmc7XG59KCkpO1xuZXhwb3J0IHsgRnVuY3Rpb25Ub1N0cmluZyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnVuY3Rpb250b3N0cmluZy5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgYWRkR2xvYmFsRXZlbnRQcm9jZXNzb3IsIGdldEN1cnJlbnRIdWIgfSBmcm9tICdAc2VudHJ5L2h1Yic7XG5pbXBvcnQgeyBnZXRFdmVudERlc2NyaXB0aW9uLCBpc01hdGNoaW5nUGF0dGVybiwgbG9nZ2VyIH0gZnJvbSAnQHNlbnRyeS91dGlscyc7XG4vLyBcIlNjcmlwdCBlcnJvci5cIiBpcyBoYXJkIGNvZGVkIGludG8gYnJvd3NlcnMgZm9yIGVycm9ycyB0aGF0IGl0IGNhbid0IHJlYWQuXG4vLyB0aGlzIGlzIHRoZSByZXN1bHQgb2YgYSBzY3JpcHQgYmVpbmcgcHVsbGVkIGluIGZyb20gYW4gZXh0ZXJuYWwgZG9tYWluIGFuZCBDT1JTLlxudmFyIERFRkFVTFRfSUdOT1JFX0VSUk9SUyA9IFsvXlNjcmlwdCBlcnJvclxcLj8kLywgL15KYXZhc2NyaXB0IGVycm9yOiBTY3JpcHQgZXJyb3JcXC4/IG9uIGxpbmUgMCQvXTtcbi8qKiBJbmJvdW5kIGZpbHRlcnMgY29uZmlndXJhYmxlIGJ5IHRoZSB1c2VyICovXG52YXIgSW5ib3VuZEZpbHRlcnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW5ib3VuZEZpbHRlcnMoX29wdGlvbnMpIHtcbiAgICAgICAgaWYgKF9vcHRpb25zID09PSB2b2lkIDApIHsgX29wdGlvbnMgPSB7fTsgfVxuICAgICAgICB0aGlzLl9vcHRpb25zID0gX29wdGlvbnM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW5oZXJpdERvY1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gSW5ib3VuZEZpbHRlcnMuaWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgSW5ib3VuZEZpbHRlcnMucHJvdG90eXBlLnNldHVwT25jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkR2xvYmFsRXZlbnRQcm9jZXNzb3IoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaHViID0gZ2V0Q3VycmVudEh1YigpO1xuICAgICAgICAgICAgaWYgKCFodWIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2VsZiA9IGh1Yi5nZXRJbnRlZ3JhdGlvbihJbmJvdW5kRmlsdGVycyk7XG4gICAgICAgICAgICBpZiAoc2VsZikge1xuICAgICAgICAgICAgICAgIHZhciBjbGllbnQgPSBodWIuZ2V0Q2xpZW50KCk7XG4gICAgICAgICAgICAgICAgdmFyIGNsaWVudE9wdGlvbnMgPSBjbGllbnQgPyBjbGllbnQuZ2V0T3B0aW9ucygpIDoge307XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBzZWxmLl9tZXJnZU9wdGlvbnMoY2xpZW50T3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuX3Nob3VsZERyb3BFdmVudChldmVudCwgb3B0aW9ucykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIEluYm91bmRGaWx0ZXJzLnByb3RvdHlwZS5fc2hvdWxkRHJvcEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1NlbnRyeUVycm9yKGV2ZW50LCBvcHRpb25zKSkge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oXCJFdmVudCBkcm9wcGVkIGR1ZSB0byBiZWluZyBpbnRlcm5hbCBTZW50cnkgRXJyb3IuXFxuRXZlbnQ6IFwiICsgZ2V0RXZlbnREZXNjcmlwdGlvbihldmVudCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lzSWdub3JlZEVycm9yKGV2ZW50LCBvcHRpb25zKSkge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oXCJFdmVudCBkcm9wcGVkIGR1ZSB0byBiZWluZyBtYXRjaGVkIGJ5IGBpZ25vcmVFcnJvcnNgIG9wdGlvbi5cXG5FdmVudDogXCIgKyBnZXRFdmVudERlc2NyaXB0aW9uKGV2ZW50KSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faXNCbGFja2xpc3RlZFVybChldmVudCwgb3B0aW9ucykpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKFwiRXZlbnQgZHJvcHBlZCBkdWUgdG8gYmVpbmcgbWF0Y2hlZCBieSBgYmxhY2tsaXN0VXJsc2Agb3B0aW9uLlxcbkV2ZW50OiBcIiArIGdldEV2ZW50RGVzY3JpcHRpb24oZXZlbnQpICsgXCIuXFxuVXJsOiBcIiArIHRoaXMuX2dldEV2ZW50RmlsdGVyVXJsKGV2ZW50KSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lzV2hpdGVsaXN0ZWRVcmwoZXZlbnQsIG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybihcIkV2ZW50IGRyb3BwZWQgZHVlIHRvIG5vdCBiZWluZyBtYXRjaGVkIGJ5IGB3aGl0ZWxpc3RVcmxzYCBvcHRpb24uXFxuRXZlbnQ6IFwiICsgZ2V0RXZlbnREZXNjcmlwdGlvbihldmVudCkgKyBcIi5cXG5Vcmw6IFwiICsgdGhpcy5fZ2V0RXZlbnRGaWx0ZXJVcmwoZXZlbnQpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIEluYm91bmRGaWx0ZXJzLnByb3RvdHlwZS5faXNTZW50cnlFcnJvciA9IGZ1bmN0aW9uIChldmVudCwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuaWdub3JlSW50ZXJuYWwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuICgoZXZlbnQgJiZcbiAgICAgICAgICAgICAgICBldmVudC5leGNlcHRpb24gJiZcbiAgICAgICAgICAgICAgICBldmVudC5leGNlcHRpb24udmFsdWVzICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZXhjZXB0aW9uLnZhbHVlc1swXSAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmV4Y2VwdGlvbi52YWx1ZXNbMF0udHlwZSA9PT0gJ1NlbnRyeUVycm9yJykgfHxcbiAgICAgICAgICAgICAgICBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9vTykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogSlNEb2MgKi9cbiAgICBJbmJvdW5kRmlsdGVycy5wcm90b3R5cGUuX2lzSWdub3JlZEVycm9yID0gZnVuY3Rpb24gKGV2ZW50LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcnMgfHwgIW9wdGlvbnMuaWdub3JlRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRQb3NzaWJsZUV2ZW50TWVzc2FnZXMoZXZlbnQpLnNvbWUoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIC8vIE5vdCBzdXJlIHdoeSBUeXBlU2NyaXB0IGNvbXBsYWlucyBoZXJlLi4uXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5pZ25vcmVFcnJvcnMuc29tZShmdW5jdGlvbiAocGF0dGVybikgeyByZXR1cm4gaXNNYXRjaGluZ1BhdHRlcm4obWVzc2FnZSwgcGF0dGVybik7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIEluYm91bmRGaWx0ZXJzLnByb3RvdHlwZS5faXNCbGFja2xpc3RlZFVybCA9IGZ1bmN0aW9uIChldmVudCwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICAvLyBUT0RPOiBVc2UgR2xvYiBpbnN0ZWFkP1xuICAgICAgICBpZiAoIW9wdGlvbnMuYmxhY2tsaXN0VXJscyB8fCAhb3B0aW9ucy5ibGFja2xpc3RVcmxzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLl9nZXRFdmVudEZpbHRlclVybChldmVudCk7XG4gICAgICAgIHJldHVybiAhdXJsID8gZmFsc2UgOiBvcHRpb25zLmJsYWNrbGlzdFVybHMuc29tZShmdW5jdGlvbiAocGF0dGVybikgeyByZXR1cm4gaXNNYXRjaGluZ1BhdHRlcm4odXJsLCBwYXR0ZXJuKTsgfSk7XG4gICAgfTtcbiAgICAvKiogSlNEb2MgKi9cbiAgICBJbmJvdW5kRmlsdGVycy5wcm90b3R5cGUuX2lzV2hpdGVsaXN0ZWRVcmwgPSBmdW5jdGlvbiAoZXZlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgLy8gVE9ETzogVXNlIEdsb2IgaW5zdGVhZD9cbiAgICAgICAgaWYgKCFvcHRpb25zLndoaXRlbGlzdFVybHMgfHwgIW9wdGlvbnMud2hpdGVsaXN0VXJscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLl9nZXRFdmVudEZpbHRlclVybChldmVudCk7XG4gICAgICAgIHJldHVybiAhdXJsID8gdHJ1ZSA6IG9wdGlvbnMud2hpdGVsaXN0VXJscy5zb21lKGZ1bmN0aW9uIChwYXR0ZXJuKSB7IHJldHVybiBpc01hdGNoaW5nUGF0dGVybih1cmwsIHBhdHRlcm4pOyB9KTtcbiAgICB9O1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIEluYm91bmRGaWx0ZXJzLnByb3RvdHlwZS5fbWVyZ2VPcHRpb25zID0gZnVuY3Rpb24gKGNsaWVudE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGNsaWVudE9wdGlvbnMgPT09IHZvaWQgMCkgeyBjbGllbnRPcHRpb25zID0ge307IH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJsYWNrbGlzdFVybHM6IHRzbGliXzEuX19zcHJlYWQoKHRoaXMuX29wdGlvbnMuYmxhY2tsaXN0VXJscyB8fCBbXSksIChjbGllbnRPcHRpb25zLmJsYWNrbGlzdFVybHMgfHwgW10pKSxcbiAgICAgICAgICAgIGlnbm9yZUVycm9yczogdHNsaWJfMS5fX3NwcmVhZCgodGhpcy5fb3B0aW9ucy5pZ25vcmVFcnJvcnMgfHwgW10pLCAoY2xpZW50T3B0aW9ucy5pZ25vcmVFcnJvcnMgfHwgW10pLCBERUZBVUxUX0lHTk9SRV9FUlJPUlMpLFxuICAgICAgICAgICAgaWdub3JlSW50ZXJuYWw6IHR5cGVvZiB0aGlzLl9vcHRpb25zLmlnbm9yZUludGVybmFsICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuX29wdGlvbnMuaWdub3JlSW50ZXJuYWwgOiB0cnVlLFxuICAgICAgICAgICAgd2hpdGVsaXN0VXJsczogdHNsaWJfMS5fX3NwcmVhZCgodGhpcy5fb3B0aW9ucy53aGl0ZWxpc3RVcmxzIHx8IFtdKSwgKGNsaWVudE9wdGlvbnMud2hpdGVsaXN0VXJscyB8fCBbXSkpLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgSW5ib3VuZEZpbHRlcnMucHJvdG90eXBlLl9nZXRQb3NzaWJsZUV2ZW50TWVzc2FnZXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50Lm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBbZXZlbnQubWVzc2FnZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmV4Y2VwdGlvbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSAoZXZlbnQuZXhjZXB0aW9uLnZhbHVlcyAmJiBldmVudC5leGNlcHRpb24udmFsdWVzWzBdKSB8fCB7fSwgX2IgPSBfYS50eXBlLCB0eXBlID0gX2IgPT09IHZvaWQgMCA/ICcnIDogX2IsIF9jID0gX2EudmFsdWUsIHZhbHVlID0gX2MgPT09IHZvaWQgMCA/ICcnIDogX2M7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcIlwiICsgdmFsdWUsIHR5cGUgKyBcIjogXCIgKyB2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAob08pIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDYW5ub3QgZXh0cmFjdCBtZXNzYWdlIGZvciBldmVudCBcIiArIGdldEV2ZW50RGVzY3JpcHRpb24oZXZlbnQpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgSW5ib3VuZEZpbHRlcnMucHJvdG90eXBlLl9nZXRFdmVudEZpbHRlclVybCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnN0YWNrdHJhY2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJhbWVzXzEgPSBldmVudC5zdGFja3RyYWNlLmZyYW1lcztcbiAgICAgICAgICAgICAgICByZXR1cm4gKGZyYW1lc18xICYmIGZyYW1lc18xW2ZyYW1lc18xLmxlbmd0aCAtIDFdLmZpbGVuYW1lKSB8fCBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LmV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBmcmFtZXNfMiA9IGV2ZW50LmV4Y2VwdGlvbi52YWx1ZXMgJiYgZXZlbnQuZXhjZXB0aW9uLnZhbHVlc1swXS5zdGFja3RyYWNlICYmIGV2ZW50LmV4Y2VwdGlvbi52YWx1ZXNbMF0uc3RhY2t0cmFjZS5mcmFtZXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChmcmFtZXNfMiAmJiBmcmFtZXNfMltmcmFtZXNfMi5sZW5ndGggLSAxXS5maWxlbmFtZSkgfHwgbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChvTykge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ2Fubm90IGV4dHJhY3QgdXJsIGZvciBldmVudCBcIiArIGdldEV2ZW50RGVzY3JpcHRpb24oZXZlbnQpKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIEluYm91bmRGaWx0ZXJzLmlkID0gJ0luYm91bmRGaWx0ZXJzJztcbiAgICByZXR1cm4gSW5ib3VuZEZpbHRlcnM7XG59KCkpO1xuZXhwb3J0IHsgSW5ib3VuZEZpbHRlcnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluYm91bmRmaWx0ZXJzLmpzLm1hcCIsImV4cG9ydCB7IEZ1bmN0aW9uVG9TdHJpbmcgfSBmcm9tICcuL2Z1bmN0aW9udG9zdHJpbmcnO1xuZXhwb3J0IHsgSW5ib3VuZEZpbHRlcnMgfSBmcm9tICcuL2luYm91bmRmaWx0ZXJzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IGdldEN1cnJlbnRIdWIgfSBmcm9tICdAc2VudHJ5L2h1Yic7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAc2VudHJ5L3V0aWxzJztcbi8qKlxuICogSW50ZXJuYWwgZnVuY3Rpb24gdG8gY3JlYXRlIGEgbmV3IFNESyBjbGllbnQgaW5zdGFuY2UuIFRoZSBjbGllbnQgaXNcbiAqIGluc3RhbGxlZCBhbmQgdGhlbiBib3VuZCB0byB0aGUgY3VycmVudCBzY29wZS5cbiAqXG4gKiBAcGFyYW0gY2xpZW50Q2xhc3MgVGhlIGNsaWVudCBjbGFzcyB0byBpbnN0YW5jaWF0ZS5cbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gcGFzcyB0byB0aGUgY2xpZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFuZEJpbmQoY2xpZW50Q2xhc3MsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5kZWJ1ZyA9PT0gdHJ1ZSkge1xuICAgICAgICBsb2dnZXIuZW5hYmxlKCk7XG4gICAgfVxuICAgIHZhciBodWIgPSBnZXRDdXJyZW50SHViKCk7XG4gICAgdmFyIGNsaWVudCA9IG5ldyBjbGllbnRDbGFzcyhvcHRpb25zKTtcbiAgICBodWIuYmluZENsaWVudChjbGllbnQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2RrLmpzLm1hcCIsImltcG9ydCB7IFN0YXR1cyB9IGZyb20gJ0BzZW50cnkvdHlwZXMnO1xuaW1wb3J0IHsgU3luY1Byb21pc2UgfSBmcm9tICdAc2VudHJ5L3V0aWxzJztcbi8qKiBOb29wIHRyYW5zcG9ydCAqL1xudmFyIE5vb3BUcmFuc3BvcnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9vcFRyYW5zcG9ydCgpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBOb29wVHJhbnNwb3J0LnByb3RvdHlwZS5zZW5kRXZlbnQgPSBmdW5jdGlvbiAoXykge1xuICAgICAgICByZXR1cm4gU3luY1Byb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICByZWFzb246IFwiTm9vcFRyYW5zcG9ydDogRXZlbnQgaGFzIGJlZW4gc2tpcHBlZCBiZWNhdXNlIG5vIERzbiBpcyBjb25maWd1cmVkLlwiLFxuICAgICAgICAgICAgc3RhdHVzOiBTdGF0dXMuU2tpcHBlZCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIE5vb3BUcmFuc3BvcnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgcmV0dXJuIFN5bmNQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gTm9vcFRyYW5zcG9ydDtcbn0oKSk7XG5leHBvcnQgeyBOb29wVHJhbnNwb3J0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub29wLmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBjb25zb2xlU2FuZGJveCwgZ2V0R2xvYmFsT2JqZWN0LCBpc05vZGVFbnYsIGxvZ2dlciwgdGltZXN0YW1wV2l0aE1zLCB1dWlkNCB9IGZyb20gJ0BzZW50cnkvdXRpbHMnO1xuaW1wb3J0IHsgU2NvcGUgfSBmcm9tICcuL3Njb3BlJztcbi8qKlxuICogQVBJIGNvbXBhdGliaWxpdHkgdmVyc2lvbiBvZiB0aGlzIGh1Yi5cbiAqXG4gKiBXQVJOSU5HOiBUaGlzIG51bWJlciBzaG91bGQgb25seSBiZSBpbmNyZXNlZCB3aGVuIHRoZSBnbG9iYWwgaW50ZXJmYWNlXG4gKiBjaGFuZ2VzIGEgYW5kIG5ldyBtZXRob2RzIGFyZSBpbnRyb2R1Y2VkLlxuICpcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IHZhciBBUElfVkVSU0lPTiA9IDM7XG4vKipcbiAqIERlZmF1bHQgbWF4aW11bSBudW1iZXIgb2YgYnJlYWRjcnVtYnMgYWRkZWQgdG8gYW4gZXZlbnQuIENhbiBiZSBvdmVyd3JpdHRlblxuICogd2l0aCB7QGxpbmsgT3B0aW9ucy5tYXhCcmVhZGNydW1ic30uXG4gKi9cbnZhciBERUZBVUxUX0JSRUFEQ1JVTUJTID0gMTAwO1xuLyoqXG4gKiBBYnNvbHV0ZSBtYXhpbXVtIG51bWJlciBvZiBicmVhZGNydW1icyBhZGRlZCB0byBhbiBldmVudC4gVGhlXG4gKiBgbWF4QnJlYWRjcnVtYnNgIG9wdGlvbiBjYW5ub3QgYmUgaGlnaGVyIHRoYW4gdGhpcyB2YWx1ZS5cbiAqL1xudmFyIE1BWF9CUkVBRENSVU1CUyA9IDEwMDtcbi8qKlxuICogQGluaGVyaXREb2NcbiAqL1xudmFyIEh1YiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBodWIsIHdpbGwgcHVzaCBvbmUge0BsaW5rIExheWVyfSBpbnRvIHRoZVxuICAgICAqIGludGVybmFsIHN0YWNrIG9uIGNyZWF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNsaWVudCBib3VuZCB0byB0aGUgaHViLlxuICAgICAqIEBwYXJhbSBzY29wZSBib3VuZCB0byB0aGUgaHViLlxuICAgICAqIEBwYXJhbSB2ZXJzaW9uIG51bWJlciwgaGlnaGVyIG51bWJlciBtZWFucyBoaWdoZXIgcHJpb3JpdHkuXG4gICAgICovXG4gICAgZnVuY3Rpb24gSHViKGNsaWVudCwgc2NvcGUsIF92ZXJzaW9uKSB7XG4gICAgICAgIGlmIChzY29wZSA9PT0gdm9pZCAwKSB7IHNjb3BlID0gbmV3IFNjb3BlKCk7IH1cbiAgICAgICAgaWYgKF92ZXJzaW9uID09PSB2b2lkIDApIHsgX3ZlcnNpb24gPSBBUElfVkVSU0lPTjsgfVxuICAgICAgICB0aGlzLl92ZXJzaW9uID0gX3ZlcnNpb247XG4gICAgICAgIC8qKiBJcyBhIHtAbGluayBMYXllcn1bXSBjb250YWluaW5nIHRoZSBjbGllbnQgYW5kIHNjb3BlICovXG4gICAgICAgIHRoaXMuX3N0YWNrID0gW107XG4gICAgICAgIHRoaXMuX3N0YWNrLnB1c2goeyBjbGllbnQ6IGNsaWVudCwgc2NvcGU6IHNjb3BlIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBoZWxwZXIgZnVuY3Rpb24gdG8gY2FsbCBhIG1ldGhvZCBvbiB0aGUgdG9wIGNsaWVudCBpZiBpdCBleGlzdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWV0aG9kIFRoZSBtZXRob2QgdG8gY2FsbCBvbiB0aGUgY2xpZW50LlxuICAgICAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBjbGllbnQgZnVuY3Rpb24uXG4gICAgICovXG4gICAgSHViLnByb3RvdHlwZS5faW52b2tlQ2xpZW50ID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0b3AgPSB0aGlzLmdldFN0YWNrVG9wKCk7XG4gICAgICAgIGlmICh0b3AgJiYgdG9wLmNsaWVudCAmJiB0b3AuY2xpZW50W21ldGhvZF0pIHtcbiAgICAgICAgICAgIChfYSA9IHRvcC5jbGllbnQpW21ldGhvZF0uYXBwbHkoX2EsIHRzbGliXzEuX19zcHJlYWQoYXJncywgW3RvcC5zY29wZV0pKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBIdWIucHJvdG90eXBlLmlzT2xkZXJUaGFuID0gZnVuY3Rpb24gKHZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnNpb24gPCB2ZXJzaW9uO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBIdWIucHJvdG90eXBlLmJpbmRDbGllbnQgPSBmdW5jdGlvbiAoY2xpZW50KSB7XG4gICAgICAgIHZhciB0b3AgPSB0aGlzLmdldFN0YWNrVG9wKCk7XG4gICAgICAgIHRvcC5jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIGlmIChjbGllbnQgJiYgY2xpZW50LnNldHVwSW50ZWdyYXRpb25zKSB7XG4gICAgICAgICAgICBjbGllbnQuc2V0dXBJbnRlZ3JhdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBIdWIucHJvdG90eXBlLnB1c2hTY29wZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gV2Ugd2FudCB0byBjbG9uZSB0aGUgY29udGVudCBvZiBwcmV2IHNjb3BlXG4gICAgICAgIHZhciBzdGFjayA9IHRoaXMuZ2V0U3RhY2soKTtcbiAgICAgICAgdmFyIHBhcmVudFNjb3BlID0gc3RhY2subGVuZ3RoID4gMCA/IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdLnNjb3BlIDogdW5kZWZpbmVkO1xuICAgICAgICB2YXIgc2NvcGUgPSBTY29wZS5jbG9uZShwYXJlbnRTY29wZSk7XG4gICAgICAgIHRoaXMuZ2V0U3RhY2soKS5wdXNoKHtcbiAgICAgICAgICAgIGNsaWVudDogdGhpcy5nZXRDbGllbnQoKSxcbiAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzY29wZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgSHViLnByb3RvdHlwZS5wb3BTY29wZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhY2soKS5wb3AoKSAhPT0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBIdWIucHJvdG90eXBlLndpdGhTY29wZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzLnB1c2hTY29wZSgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2FsbGJhY2soc2NvcGUpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5wb3BTY29wZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIEh1Yi5wcm90b3R5cGUuZ2V0Q2xpZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGFja1RvcCgpLmNsaWVudDtcbiAgICB9O1xuICAgIC8qKiBSZXR1cm5zIHRoZSBzY29wZSBvZiB0aGUgdG9wIHN0YWNrLiAqL1xuICAgIEh1Yi5wcm90b3R5cGUuZ2V0U2NvcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0YWNrVG9wKCkuc2NvcGU7XG4gICAgfTtcbiAgICAvKiogUmV0dXJucyB0aGUgc2NvcGUgc3RhY2sgZm9yIGRvbWFpbnMgb3IgdGhlIHByb2Nlc3MuICovXG4gICAgSHViLnByb3RvdHlwZS5nZXRTdGFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWNrO1xuICAgIH07XG4gICAgLyoqIFJldHVybnMgdGhlIHRvcG1vc3Qgc2NvcGUgbGF5ZXIgaW4gdGhlIG9yZGVyIGRvbWFpbiA+IGxvY2FsID4gcHJvY2Vzcy4gKi9cbiAgICBIdWIucHJvdG90eXBlLmdldFN0YWNrVG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhY2tbdGhpcy5fc3RhY2subGVuZ3RoIC0gMV07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIEh1Yi5wcm90b3R5cGUuY2FwdHVyZUV4Y2VwdGlvbiA9IGZ1bmN0aW9uIChleGNlcHRpb24sIGhpbnQpIHtcbiAgICAgICAgdmFyIGV2ZW50SWQgPSAodGhpcy5fbGFzdEV2ZW50SWQgPSB1dWlkNCgpKTtcbiAgICAgICAgdmFyIGZpbmFsSGludCA9IGhpbnQ7XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZXhwbGljaXQgaGludCBwcm92aWRlZCwgbWltaWNrIHRoZSBzYW1lIHRoaW5nIHRoYXQgd291bGQgaGFwcGVuXG4gICAgICAgIC8vIGluIHRoZSBtaW5pbWFsIGl0c2VsZiB0byBjcmVhdGUgYSBjb25zaXN0ZW50IGJlaGF2aW9yLlxuICAgICAgICAvLyBXZSBkb24ndCBkbyB0aGlzIGluIHRoZSBjbGllbnQsIGFzIGl0J3MgdGhlIGxvd2VzdCBsZXZlbCBBUEksIGFuZCBkb2luZyB0aGlzLFxuICAgICAgICAvLyB3b3VsZCBwcmV2ZW50IHVzZXIgZnJvbSBoYXZpbmcgZnVsbCBjb250cm9sIG92ZXIgZGlyZWN0IGNhbGxzLlxuICAgICAgICBpZiAoIWhpbnQpIHtcbiAgICAgICAgICAgIHZhciBzeW50aGV0aWNFeGNlcHRpb24gPSB2b2lkIDA7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2VudHJ5IHN5bnRoZXRpY0V4Y2VwdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHN5bnRoZXRpY0V4Y2VwdGlvbiA9IGV4Y2VwdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsSGludCA9IHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV4Y2VwdGlvbjogZXhjZXB0aW9uLFxuICAgICAgICAgICAgICAgIHN5bnRoZXRpY0V4Y2VwdGlvbjogc3ludGhldGljRXhjZXB0aW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbnZva2VDbGllbnQoJ2NhcHR1cmVFeGNlcHRpb24nLCBleGNlcHRpb24sIHRzbGliXzEuX19hc3NpZ24oe30sIGZpbmFsSGludCwgeyBldmVudF9pZDogZXZlbnRJZCB9KSk7XG4gICAgICAgIHJldHVybiBldmVudElkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBIdWIucHJvdG90eXBlLmNhcHR1cmVNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UsIGxldmVsLCBoaW50KSB7XG4gICAgICAgIHZhciBldmVudElkID0gKHRoaXMuX2xhc3RFdmVudElkID0gdXVpZDQoKSk7XG4gICAgICAgIHZhciBmaW5hbEhpbnQgPSBoaW50O1xuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGV4cGxpY2l0IGhpbnQgcHJvdmlkZWQsIG1pbWljayB0aGUgc2FtZSB0aGluZyB0aGF0IHdvdWxkIGhhcHBlblxuICAgICAgICAvLyBpbiB0aGUgbWluaW1hbCBpdHNlbGYgdG8gY3JlYXRlIGEgY29uc2lzdGVudCBiZWhhdmlvci5cbiAgICAgICAgLy8gV2UgZG9uJ3QgZG8gdGhpcyBpbiB0aGUgY2xpZW50LCBhcyBpdCdzIHRoZSBsb3dlc3QgbGV2ZWwgQVBJLCBhbmQgZG9pbmcgdGhpcyxcbiAgICAgICAgLy8gd291bGQgcHJldmVudCB1c2VyIGZyb20gaGF2aW5nIGZ1bGwgY29udHJvbCBvdmVyIGRpcmVjdCBjYWxscy5cbiAgICAgICAgaWYgKCFoaW50KSB7XG4gICAgICAgICAgICB2YXIgc3ludGhldGljRXhjZXB0aW9uID0gdm9pZCAwO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgc3ludGhldGljRXhjZXB0aW9uID0gZXhjZXB0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxIaW50ID0ge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXhjZXB0aW9uOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgIHN5bnRoZXRpY0V4Y2VwdGlvbjogc3ludGhldGljRXhjZXB0aW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbnZva2VDbGllbnQoJ2NhcHR1cmVNZXNzYWdlJywgbWVzc2FnZSwgbGV2ZWwsIHRzbGliXzEuX19hc3NpZ24oe30sIGZpbmFsSGludCwgeyBldmVudF9pZDogZXZlbnRJZCB9KSk7XG4gICAgICAgIHJldHVybiBldmVudElkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBIdWIucHJvdG90eXBlLmNhcHR1cmVFdmVudCA9IGZ1bmN0aW9uIChldmVudCwgaGludCkge1xuICAgICAgICB2YXIgZXZlbnRJZCA9ICh0aGlzLl9sYXN0RXZlbnRJZCA9IHV1aWQ0KCkpO1xuICAgICAgICB0aGlzLl9pbnZva2VDbGllbnQoJ2NhcHR1cmVFdmVudCcsIGV2ZW50LCB0c2xpYl8xLl9fYXNzaWduKHt9LCBoaW50LCB7IGV2ZW50X2lkOiBldmVudElkIH0pKTtcbiAgICAgICAgcmV0dXJuIGV2ZW50SWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIEh1Yi5wcm90b3R5cGUubGFzdEV2ZW50SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0RXZlbnRJZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgSHViLnByb3RvdHlwZS5hZGRCcmVhZGNydW1iID0gZnVuY3Rpb24gKGJyZWFkY3J1bWIsIGhpbnQpIHtcbiAgICAgICAgdmFyIHRvcCA9IHRoaXMuZ2V0U3RhY2tUb3AoKTtcbiAgICAgICAgaWYgKCF0b3Auc2NvcGUgfHwgIXRvcC5jbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSAodG9wLmNsaWVudC5nZXRPcHRpb25zICYmIHRvcC5jbGllbnQuZ2V0T3B0aW9ucygpKSB8fCB7fSwgX2IgPSBfYS5iZWZvcmVCcmVhZGNydW1iLCBiZWZvcmVCcmVhZGNydW1iID0gX2IgPT09IHZvaWQgMCA/IG51bGwgOiBfYiwgX2MgPSBfYS5tYXhCcmVhZGNydW1icywgbWF4QnJlYWRjcnVtYnMgPSBfYyA9PT0gdm9pZCAwID8gREVGQVVMVF9CUkVBRENSVU1CUyA6IF9jO1xuICAgICAgICBpZiAobWF4QnJlYWRjcnVtYnMgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0aW1lc3RhbXAgPSB0aW1lc3RhbXBXaXRoTXMoKTtcbiAgICAgICAgdmFyIG1lcmdlZEJyZWFkY3J1bWIgPSB0c2xpYl8xLl9fYXNzaWduKHsgdGltZXN0YW1wOiB0aW1lc3RhbXAgfSwgYnJlYWRjcnVtYik7XG4gICAgICAgIHZhciBmaW5hbEJyZWFkY3J1bWIgPSBiZWZvcmVCcmVhZGNydW1iXG4gICAgICAgICAgICA/IGNvbnNvbGVTYW5kYm94KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJlZm9yZUJyZWFkY3J1bWIobWVyZ2VkQnJlYWRjcnVtYiwgaGludCk7IH0pXG4gICAgICAgICAgICA6IG1lcmdlZEJyZWFkY3J1bWI7XG4gICAgICAgIGlmIChmaW5hbEJyZWFkY3J1bWIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0b3Auc2NvcGUuYWRkQnJlYWRjcnVtYihmaW5hbEJyZWFkY3J1bWIsIE1hdGgubWluKG1heEJyZWFkY3J1bWJzLCBNQVhfQlJFQURDUlVNQlMpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgSHViLnByb3RvdHlwZS5zZXRVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgdmFyIHRvcCA9IHRoaXMuZ2V0U3RhY2tUb3AoKTtcbiAgICAgICAgaWYgKCF0b3Auc2NvcGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0b3Auc2NvcGUuc2V0VXNlcih1c2VyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgSHViLnByb3RvdHlwZS5zZXRUYWdzID0gZnVuY3Rpb24gKHRhZ3MpIHtcbiAgICAgICAgdmFyIHRvcCA9IHRoaXMuZ2V0U3RhY2tUb3AoKTtcbiAgICAgICAgaWYgKCF0b3Auc2NvcGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0b3Auc2NvcGUuc2V0VGFncyh0YWdzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgSHViLnByb3RvdHlwZS5zZXRFeHRyYXMgPSBmdW5jdGlvbiAoZXh0cmFzKSB7XG4gICAgICAgIHZhciB0b3AgPSB0aGlzLmdldFN0YWNrVG9wKCk7XG4gICAgICAgIGlmICghdG9wLnNjb3BlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdG9wLnNjb3BlLnNldEV4dHJhcyhleHRyYXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBIdWIucHJvdG90eXBlLnNldFRhZyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0b3AgPSB0aGlzLmdldFN0YWNrVG9wKCk7XG4gICAgICAgIGlmICghdG9wLnNjb3BlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdG9wLnNjb3BlLnNldFRhZyhrZXksIHZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgSHViLnByb3RvdHlwZS5zZXRFeHRyYSA9IGZ1bmN0aW9uIChrZXksIGV4dHJhKSB7XG4gICAgICAgIHZhciB0b3AgPSB0aGlzLmdldFN0YWNrVG9wKCk7XG4gICAgICAgIGlmICghdG9wLnNjb3BlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdG9wLnNjb3BlLnNldEV4dHJhKGtleSwgZXh0cmEpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBIdWIucHJvdG90eXBlLnNldENvbnRleHQgPSBmdW5jdGlvbiAobmFtZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgdG9wID0gdGhpcy5nZXRTdGFja1RvcCgpO1xuICAgICAgICBpZiAoIXRvcC5zY29wZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRvcC5zY29wZS5zZXRDb250ZXh0KG5hbWUsIGNvbnRleHQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBIdWIucHJvdG90eXBlLmNvbmZpZ3VyZVNjb3BlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciB0b3AgPSB0aGlzLmdldFN0YWNrVG9wKCk7XG4gICAgICAgIGlmICh0b3Auc2NvcGUgJiYgdG9wLmNsaWVudCkge1xuICAgICAgICAgICAgY2FsbGJhY2sodG9wLnNjb3BlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBIdWIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgb2xkSHViID0gbWFrZU1haW4odGhpcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjYWxsYmFjayh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIG1ha2VNYWluKG9sZEh1Yik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgSHViLnByb3RvdHlwZS5nZXRJbnRlZ3JhdGlvbiA9IGZ1bmN0aW9uIChpbnRlZ3JhdGlvbikge1xuICAgICAgICB2YXIgY2xpZW50ID0gdGhpcy5nZXRDbGllbnQoKTtcbiAgICAgICAgaWYgKCFjbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpZW50LmdldEludGVncmF0aW9uKGludGVncmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX29PKSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybihcIkNhbm5vdCByZXRyaWV2ZSBpbnRlZ3JhdGlvbiBcIiArIGludGVncmF0aW9uLmlkICsgXCIgZnJvbSB0aGUgY3VycmVudCBIdWJcIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBIdWIucHJvdG90eXBlLnN0YXJ0U3BhbiA9IGZ1bmN0aW9uIChzcGFuT3JTcGFuQ29udGV4dCwgZm9yY2VOb0NoaWxkKSB7XG4gICAgICAgIGlmIChmb3JjZU5vQ2hpbGQgPT09IHZvaWQgMCkgeyBmb3JjZU5vQ2hpbGQgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbEV4dGVuc2lvbk1ldGhvZCgnc3RhcnRTcGFuJywgc3Bhbk9yU3BhbkNvbnRleHQsIGZvcmNlTm9DaGlsZCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIEh1Yi5wcm90b3R5cGUudHJhY2VIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbEV4dGVuc2lvbk1ldGhvZCgndHJhY2VIZWFkZXJzJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxscyBnbG9iYWwgZXh0ZW5zaW9uIG1ldGhvZCBhbmQgYmluZGluZyBjdXJyZW50IGluc3RhbmNlIHRvIHRoZSBmdW5jdGlvbiBjYWxsXG4gICAgICovXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEh1Yi5wcm90b3R5cGUuX2NhbGxFeHRlbnNpb25NZXRob2QgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYXJyaWVyID0gZ2V0TWFpbkNhcnJpZXIoKTtcbiAgICAgICAgdmFyIHNlbnRyeSA9IGNhcnJpZXIuX19TRU5UUllfXztcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBzdHJpY3QtdHlwZS1wcmVkaWNhdGVzXG4gICAgICAgIGlmIChzZW50cnkgJiYgc2VudHJ5LmV4dGVuc2lvbnMgJiYgdHlwZW9mIHNlbnRyeS5leHRlbnNpb25zW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBzZW50cnkuZXh0ZW5zaW9uc1ttZXRob2RdLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGxvZ2dlci53YXJuKFwiRXh0ZW5zaW9uIG1ldGhvZCBcIiArIG1ldGhvZCArIFwiIGNvdWxkbid0IGJlIGZvdW5kLCBkb2luZyBub3RoaW5nLlwiKTtcbiAgICB9O1xuICAgIHJldHVybiBIdWI7XG59KCkpO1xuZXhwb3J0IHsgSHViIH07XG4vKiogUmV0dXJucyB0aGUgZ2xvYmFsIHNoaW0gcmVnaXN0cnkuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFpbkNhcnJpZXIoKSB7XG4gICAgdmFyIGNhcnJpZXIgPSBnZXRHbG9iYWxPYmplY3QoKTtcbiAgICBjYXJyaWVyLl9fU0VOVFJZX18gPSBjYXJyaWVyLl9fU0VOVFJZX18gfHwge1xuICAgICAgICBleHRlbnNpb25zOiB7fSxcbiAgICAgICAgaHViOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgICByZXR1cm4gY2Fycmllcjtcbn1cbi8qKlxuICogUmVwbGFjZXMgdGhlIGN1cnJlbnQgbWFpbiBodWIgd2l0aCB0aGUgcGFzc2VkIG9uZSBvbiB0aGUgZ2xvYmFsIG9iamVjdFxuICpcbiAqIEByZXR1cm5zIFRoZSBvbGQgcmVwbGFjZWQgaHViXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTWFpbihodWIpIHtcbiAgICB2YXIgcmVnaXN0cnkgPSBnZXRNYWluQ2FycmllcigpO1xuICAgIHZhciBvbGRIdWIgPSBnZXRIdWJGcm9tQ2FycmllcihyZWdpc3RyeSk7XG4gICAgc2V0SHViT25DYXJyaWVyKHJlZ2lzdHJ5LCBodWIpO1xuICAgIHJldHVybiBvbGRIdWI7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGRlZmF1bHQgaHViIGluc3RhbmNlLlxuICpcbiAqIElmIGEgaHViIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCBpbiB0aGUgZ2xvYmFsIGNhcnJpZXIgYnV0IHRoaXMgbW9kdWxlXG4gKiBjb250YWlucyBhIG1vcmUgcmVjZW50IHZlcnNpb24sIGl0IHJlcGxhY2VzIHRoZSByZWdpc3RlcmVkIHZlcnNpb24uXG4gKiBPdGhlcndpc2UsIHRoZSBjdXJyZW50bHkgcmVnaXN0ZXJlZCBodWIgd2lsbCBiZSByZXR1cm5lZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRIdWIoKSB7XG4gICAgLy8gR2V0IG1haW4gY2FycmllciAoZ2xvYmFsIGZvciBldmVyeSBlbnZpcm9ubWVudClcbiAgICB2YXIgcmVnaXN0cnkgPSBnZXRNYWluQ2FycmllcigpO1xuICAgIC8vIElmIHRoZXJlJ3Mgbm8gaHViLCBvciBpdHMgYW4gb2xkIEFQSSwgYXNzaWduIGEgbmV3IG9uZVxuICAgIGlmICghaGFzSHViT25DYXJyaWVyKHJlZ2lzdHJ5KSB8fCBnZXRIdWJGcm9tQ2FycmllcihyZWdpc3RyeSkuaXNPbGRlclRoYW4oQVBJX1ZFUlNJT04pKSB7XG4gICAgICAgIHNldEh1Yk9uQ2FycmllcihyZWdpc3RyeSwgbmV3IEh1YigpKTtcbiAgICB9XG4gICAgLy8gUHJlZmVyIGRvbWFpbnMgb3ZlciBnbG9iYWwgaWYgdGhleSBhcmUgdGhlcmUgKGFwcGxpY2FibGUgb25seSB0byBOb2RlIGVudmlyb25tZW50KVxuICAgIGlmIChpc05vZGVFbnYoKSkge1xuICAgICAgICByZXR1cm4gZ2V0SHViRnJvbUFjdGl2ZURvbWFpbihyZWdpc3RyeSk7XG4gICAgfVxuICAgIC8vIFJldHVybiBodWIgdGhhdCBsaXZlcyBvbiBhIGdsb2JhbCBvYmplY3RcbiAgICByZXR1cm4gZ2V0SHViRnJvbUNhcnJpZXIocmVnaXN0cnkpO1xufVxuLyoqXG4gKiBUcnkgdG8gcmVhZCB0aGUgaHViIGZyb20gYW4gYWN0aXZlIGRvbWFpbiwgZmFsbGJhY2sgdG8gdGhlIHJlZ2lzdHJ5IGlmIG9uZSBkb2VzbnQgZXhpc3RcbiAqIEByZXR1cm5zIGRpc2NvdmVyZWQgaHViXG4gKi9cbmZ1bmN0aW9uIGdldEh1YkZyb21BY3RpdmVEb21haW4ocmVnaXN0cnkpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgcHJvcGVydHkgPSAnZG9tYWluJztcbiAgICAgICAgdmFyIGNhcnJpZXIgPSBnZXRNYWluQ2FycmllcigpO1xuICAgICAgICB2YXIgc2VudHJ5ID0gY2Fycmllci5fX1NFTlRSWV9fO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHN0cmljdC10eXBlLXByZWRpY2F0ZXNcbiAgICAgICAgaWYgKCFzZW50cnkgfHwgIXNlbnRyeS5leHRlbnNpb25zIHx8ICFzZW50cnkuZXh0ZW5zaW9uc1twcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRIdWJGcm9tQ2FycmllcihyZWdpc3RyeSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRvbWFpbiA9IHNlbnRyeS5leHRlbnNpb25zW3Byb3BlcnR5XTtcbiAgICAgICAgdmFyIGFjdGl2ZURvbWFpbiA9IGRvbWFpbi5hY3RpdmU7XG4gICAgICAgIC8vIElmIHRoZXJlIG5vIGFjdGl2ZSBkb21haW4sIGp1c3QgcmV0dXJuIGdsb2JhbCBodWJcbiAgICAgICAgaWYgKCFhY3RpdmVEb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRIdWJGcm9tQ2FycmllcihyZWdpc3RyeSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBodWIgb24gY3VycmVudCBkb21haW4sIG9yIGl0cyBhbiBvbGQgQVBJLCBhc3NpZ24gYSBuZXcgb25lXG4gICAgICAgIGlmICghaGFzSHViT25DYXJyaWVyKGFjdGl2ZURvbWFpbikgfHwgZ2V0SHViRnJvbUNhcnJpZXIoYWN0aXZlRG9tYWluKS5pc09sZGVyVGhhbihBUElfVkVSU0lPTikpIHtcbiAgICAgICAgICAgIHZhciByZWdpc3RyeUh1YlRvcFN0YWNrID0gZ2V0SHViRnJvbUNhcnJpZXIocmVnaXN0cnkpLmdldFN0YWNrVG9wKCk7XG4gICAgICAgICAgICBzZXRIdWJPbkNhcnJpZXIoYWN0aXZlRG9tYWluLCBuZXcgSHViKHJlZ2lzdHJ5SHViVG9wU3RhY2suY2xpZW50LCBTY29wZS5jbG9uZShyZWdpc3RyeUh1YlRvcFN0YWNrLnNjb3BlKSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldHVybiBodWIgdGhhdCBsaXZlcyBvbiBhIGRvbWFpblxuICAgICAgICByZXR1cm4gZ2V0SHViRnJvbUNhcnJpZXIoYWN0aXZlRG9tYWluKTtcbiAgICB9XG4gICAgY2F0Y2ggKF9Pbykge1xuICAgICAgICAvLyBSZXR1cm4gaHViIHRoYXQgbGl2ZXMgb24gYSBnbG9iYWwgb2JqZWN0XG4gICAgICAgIHJldHVybiBnZXRIdWJGcm9tQ2FycmllcihyZWdpc3RyeSk7XG4gICAgfVxufVxuLyoqXG4gKiBUaGlzIHdpbGwgdGVsbCB3aGV0aGVyIGEgY2FycmllciBoYXMgYSBodWIgb24gaXQgb3Igbm90XG4gKiBAcGFyYW0gY2FycmllciBvYmplY3RcbiAqL1xuZnVuY3Rpb24gaGFzSHViT25DYXJyaWVyKGNhcnJpZXIpIHtcbiAgICBpZiAoY2FycmllciAmJiBjYXJyaWVyLl9fU0VOVFJZX18gJiYgY2Fycmllci5fX1NFTlRSWV9fLmh1Yikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLyoqXG4gKiBUaGlzIHdpbGwgY3JlYXRlIGEgbmV3IHtAbGluayBIdWJ9IGFuZCBhZGQgdG8gdGhlIHBhc3NlZCBvYmplY3Qgb25cbiAqIF9fU0VOVFJZX18uaHViLlxuICogQHBhcmFtIGNhcnJpZXIgb2JqZWN0XG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRIdWJGcm9tQ2FycmllcihjYXJyaWVyKSB7XG4gICAgaWYgKGNhcnJpZXIgJiYgY2Fycmllci5fX1NFTlRSWV9fICYmIGNhcnJpZXIuX19TRU5UUllfXy5odWIpIHtcbiAgICAgICAgcmV0dXJuIGNhcnJpZXIuX19TRU5UUllfXy5odWI7XG4gICAgfVxuICAgIGNhcnJpZXIuX19TRU5UUllfXyA9IGNhcnJpZXIuX19TRU5UUllfXyB8fCB7fTtcbiAgICBjYXJyaWVyLl9fU0VOVFJZX18uaHViID0gbmV3IEh1YigpO1xuICAgIHJldHVybiBjYXJyaWVyLl9fU0VOVFJZX18uaHViO1xufVxuLyoqXG4gKiBUaGlzIHdpbGwgc2V0IHBhc3NlZCB7QGxpbmsgSHVifSBvbiB0aGUgcGFzc2VkIG9iamVjdCdzIF9fU0VOVFJZX18uaHViIGF0dHJpYnV0ZVxuICogQHBhcmFtIGNhcnJpZXIgb2JqZWN0XG4gKiBAcGFyYW0gaHViIEh1YlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SHViT25DYXJyaWVyKGNhcnJpZXIsIGh1Yikge1xuICAgIGlmICghY2Fycmllcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNhcnJpZXIuX19TRU5UUllfXyA9IGNhcnJpZXIuX19TRU5UUllfXyB8fCB7fTtcbiAgICBjYXJyaWVyLl9fU0VOVFJZX18uaHViID0gaHViO1xuICAgIHJldHVybiB0cnVlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHViLmpzLm1hcCIsImV4cG9ydCB7IGFkZEdsb2JhbEV2ZW50UHJvY2Vzc29yLCBTY29wZSB9IGZyb20gJy4vc2NvcGUnO1xuZXhwb3J0IHsgZ2V0Q3VycmVudEh1YiwgZ2V0SHViRnJvbUNhcnJpZXIsIGdldE1haW5DYXJyaWVyLCBIdWIsIG1ha2VNYWluLCBzZXRIdWJPbkNhcnJpZXIgfSBmcm9tICcuL2h1Yic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZ2V0R2xvYmFsT2JqZWN0LCBpc1RoZW5hYmxlLCBTeW5jUHJvbWlzZSwgdGltZXN0YW1wV2l0aE1zIH0gZnJvbSAnQHNlbnRyeS91dGlscyc7XG4vKipcbiAqIEhvbGRzIGFkZGl0aW9uYWwgZXZlbnQgaW5mb3JtYXRpb24uIHtAbGluayBTY29wZS5hcHBseVRvRXZlbnR9IHdpbGwgYmVcbiAqIGNhbGxlZCBieSB0aGUgY2xpZW50IGJlZm9yZSBhbiBldmVudCB3aWxsIGJlIHNlbnQuXG4gKi9cbnZhciBTY29wZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY29wZSgpIHtcbiAgICAgICAgLyoqIEZsYWcgaWYgbm90aWZpeWluZyBpcyBoYXBwZW5pbmcuICovXG4gICAgICAgIHRoaXMuX25vdGlmeWluZ0xpc3RlbmVycyA9IGZhbHNlO1xuICAgICAgICAvKiogQ2FsbGJhY2sgZm9yIGNsaWVudCB0byByZWNlaXZlIHNjb3BlIGNoYW5nZXMuICovXG4gICAgICAgIHRoaXMuX3Njb3BlTGlzdGVuZXJzID0gW107XG4gICAgICAgIC8qKiBDYWxsYmFjayBsaXN0IHRoYXQgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIge0BsaW5rIGFwcGx5VG9FdmVudH0uICovXG4gICAgICAgIHRoaXMuX2V2ZW50UHJvY2Vzc29ycyA9IFtdO1xuICAgICAgICAvKiogQXJyYXkgb2YgYnJlYWRjcnVtYnMuICovXG4gICAgICAgIHRoaXMuX2JyZWFkY3J1bWJzID0gW107XG4gICAgICAgIC8qKiBVc2VyICovXG4gICAgICAgIHRoaXMuX3VzZXIgPSB7fTtcbiAgICAgICAgLyoqIFRhZ3MgKi9cbiAgICAgICAgdGhpcy5fdGFncyA9IHt9O1xuICAgICAgICAvKiogRXh0cmEgKi9cbiAgICAgICAgdGhpcy5fZXh0cmEgPSB7fTtcbiAgICAgICAgLyoqIENvbnRleHRzICovXG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSB7fTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkIGludGVybmFsIG9uIGNoYW5nZSBsaXN0ZW5lci4gVXNlZCBmb3Igc3ViIFNES3MgdGhhdCBuZWVkIHRvIHN0b3JlIHRoZSBzY29wZS5cbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgU2NvcGUucHJvdG90eXBlLmFkZFNjb3BlTGlzdGVuZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fc2NvcGVMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIFNjb3BlLnByb3RvdHlwZS5hZGRFdmVudFByb2Nlc3NvciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9ldmVudFByb2Nlc3NvcnMucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCBvbiBldmVyeSBzZXQgY2FsbC5cbiAgICAgKi9cbiAgICBTY29wZS5wcm90b3R5cGUuX25vdGlmeVNjb3BlTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuX25vdGlmeWluZ0xpc3RlbmVycykge1xuICAgICAgICAgICAgdGhpcy5fbm90aWZ5aW5nTGlzdGVuZXJzID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9zY29wZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhfdGhpcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuX25vdGlmeWluZ0xpc3RlbmVycyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIge0BsaW5rIGFwcGx5VG9FdmVudH0gaXMgZmluaXNoZWQuXG4gICAgICovXG4gICAgU2NvcGUucHJvdG90eXBlLl9ub3RpZnlFdmVudFByb2Nlc3NvcnMgPSBmdW5jdGlvbiAocHJvY2Vzc29ycywgZXZlbnQsIGhpbnQsIGluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7IGluZGV4ID0gMDsgfVxuICAgICAgICByZXR1cm4gbmV3IFN5bmNQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBwcm9jZXNzb3IgPSBwcm9jZXNzb3JzW2luZGV4XTtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpzdHJpY3QtdHlwZS1wcmVkaWNhdGVzXG4gICAgICAgICAgICBpZiAoZXZlbnQgPT09IG51bGwgfHwgdHlwZW9mIHByb2Nlc3NvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHByb2Nlc3Nvcih0c2xpYl8xLl9fYXNzaWduKHt9LCBldmVudCksIGhpbnQpO1xuICAgICAgICAgICAgICAgIGlmIChpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZmluYWwpIHsgcmV0dXJuIF90aGlzLl9ub3RpZnlFdmVudFByb2Nlc3NvcnMocHJvY2Vzc29ycywgZmluYWwsIGhpbnQsIGluZGV4ICsgMSkudGhlbihyZXNvbHZlKTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKG51bGwsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbm90aWZ5RXZlbnRQcm9jZXNzb3JzKHByb2Nlc3NvcnMsIHJlc3VsdCwgaGludCwgaW5kZXggKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKG51bGwsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgU2NvcGUucHJvdG90eXBlLnNldFVzZXIgPSBmdW5jdGlvbiAodXNlcikge1xuICAgICAgICB0aGlzLl91c2VyID0gdXNlciB8fCB7fTtcbiAgICAgICAgdGhpcy5fbm90aWZ5U2NvcGVMaXN0ZW5lcnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIFNjb3BlLnByb3RvdHlwZS5zZXRUYWdzID0gZnVuY3Rpb24gKHRhZ3MpIHtcbiAgICAgICAgdGhpcy5fdGFncyA9IHRzbGliXzEuX19hc3NpZ24oe30sIHRoaXMuX3RhZ3MsIHRhZ3MpO1xuICAgICAgICB0aGlzLl9ub3RpZnlTY29wZUxpc3RlbmVycygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgU2NvcGUucHJvdG90eXBlLnNldFRhZyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5fdGFncyA9IHRzbGliXzEuX19hc3NpZ24oe30sIHRoaXMuX3RhZ3MsIChfYSA9IHt9LCBfYVtrZXldID0gdmFsdWUsIF9hKSk7XG4gICAgICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBTY29wZS5wcm90b3R5cGUuc2V0RXh0cmFzID0gZnVuY3Rpb24gKGV4dHJhcykge1xuICAgICAgICB0aGlzLl9leHRyYSA9IHRzbGliXzEuX19hc3NpZ24oe30sIHRoaXMuX2V4dHJhLCBleHRyYXMpO1xuICAgICAgICB0aGlzLl9ub3RpZnlTY29wZUxpc3RlbmVycygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgU2NvcGUucHJvdG90eXBlLnNldEV4dHJhID0gZnVuY3Rpb24gKGtleSwgZXh0cmEpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLl9leHRyYSA9IHRzbGliXzEuX19hc3NpZ24oe30sIHRoaXMuX2V4dHJhLCAoX2EgPSB7fSwgX2Fba2V5XSA9IGV4dHJhLCBfYSkpO1xuICAgICAgICB0aGlzLl9ub3RpZnlTY29wZUxpc3RlbmVycygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgU2NvcGUucHJvdG90eXBlLnNldEZpbmdlcnByaW50ID0gZnVuY3Rpb24gKGZpbmdlcnByaW50KSB7XG4gICAgICAgIHRoaXMuX2ZpbmdlcnByaW50ID0gZmluZ2VycHJpbnQ7XG4gICAgICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBTY29wZS5wcm90b3R5cGUuc2V0TGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICAgICAgdGhpcy5fbGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5fbm90aWZ5U2NvcGVMaXN0ZW5lcnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIFNjb3BlLnByb3RvdHlwZS5zZXRUcmFuc2FjdGlvbiA9IGZ1bmN0aW9uICh0cmFuc2FjdGlvbikge1xuICAgICAgICB0aGlzLl90cmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uO1xuICAgICAgICBpZiAodGhpcy5fc3Bhbikge1xuICAgICAgICAgICAgdGhpcy5fc3Bhbi50cmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBTY29wZS5wcm90b3R5cGUuc2V0Q29udGV4dCA9IGZ1bmN0aW9uIChrZXksIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgdGhpcy5fY29udGV4dCwgKF9hID0ge30sIF9hW2tleV0gPSBjb250ZXh0LCBfYSkpO1xuICAgICAgICB0aGlzLl9ub3RpZnlTY29wZUxpc3RlbmVycygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgU2NvcGUucHJvdG90eXBlLnNldFNwYW4gPSBmdW5jdGlvbiAoc3Bhbikge1xuICAgICAgICB0aGlzLl9zcGFuID0gc3BhbjtcbiAgICAgICAgdGhpcy5fbm90aWZ5U2NvcGVMaXN0ZW5lcnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBnZXR0ZXIgZm9yIFNwYW4sIHVzZWQgaW4gSHViLlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBTY29wZS5wcm90b3R5cGUuZ2V0U3BhbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwYW47XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbmhlcml0IHZhbHVlcyBmcm9tIHRoZSBwYXJlbnQgc2NvcGUuXG4gICAgICogQHBhcmFtIHNjb3BlIHRvIGNsb25lLlxuICAgICAqL1xuICAgIFNjb3BlLmNsb25lID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICAgIHZhciBuZXdTY29wZSA9IG5ldyBTY29wZSgpO1xuICAgICAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgICAgIG5ld1Njb3BlLl9icmVhZGNydW1icyA9IHRzbGliXzEuX19zcHJlYWQoc2NvcGUuX2JyZWFkY3J1bWJzKTtcbiAgICAgICAgICAgIG5ld1Njb3BlLl90YWdzID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgc2NvcGUuX3RhZ3MpO1xuICAgICAgICAgICAgbmV3U2NvcGUuX2V4dHJhID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgc2NvcGUuX2V4dHJhKTtcbiAgICAgICAgICAgIG5ld1Njb3BlLl9jb250ZXh0ID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgc2NvcGUuX2NvbnRleHQpO1xuICAgICAgICAgICAgbmV3U2NvcGUuX3VzZXIgPSBzY29wZS5fdXNlcjtcbiAgICAgICAgICAgIG5ld1Njb3BlLl9sZXZlbCA9IHNjb3BlLl9sZXZlbDtcbiAgICAgICAgICAgIG5ld1Njb3BlLl9zcGFuID0gc2NvcGUuX3NwYW47XG4gICAgICAgICAgICBuZXdTY29wZS5fdHJhbnNhY3Rpb24gPSBzY29wZS5fdHJhbnNhY3Rpb247XG4gICAgICAgICAgICBuZXdTY29wZS5fZmluZ2VycHJpbnQgPSBzY29wZS5fZmluZ2VycHJpbnQ7XG4gICAgICAgICAgICBuZXdTY29wZS5fZXZlbnRQcm9jZXNzb3JzID0gdHNsaWJfMS5fX3NwcmVhZChzY29wZS5fZXZlbnRQcm9jZXNzb3JzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3U2NvcGU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIFNjb3BlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fYnJlYWRjcnVtYnMgPSBbXTtcbiAgICAgICAgdGhpcy5fdGFncyA9IHt9O1xuICAgICAgICB0aGlzLl9leHRyYSA9IHt9O1xuICAgICAgICB0aGlzLl91c2VyID0ge307XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSB7fTtcbiAgICAgICAgdGhpcy5fbGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3RyYW5zYWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9maW5nZXJwcmludCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fc3BhbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fbm90aWZ5U2NvcGVMaXN0ZW5lcnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIFNjb3BlLnByb3RvdHlwZS5hZGRCcmVhZGNydW1iID0gZnVuY3Rpb24gKGJyZWFkY3J1bWIsIG1heEJyZWFkY3J1bWJzKSB7XG4gICAgICAgIHZhciBtZXJnZWRCcmVhZGNydW1iID0gdHNsaWJfMS5fX2Fzc2lnbih7IHRpbWVzdGFtcDogdGltZXN0YW1wV2l0aE1zKCkgfSwgYnJlYWRjcnVtYik7XG4gICAgICAgIHRoaXMuX2JyZWFkY3J1bWJzID1cbiAgICAgICAgICAgIG1heEJyZWFkY3J1bWJzICE9PSB1bmRlZmluZWQgJiYgbWF4QnJlYWRjcnVtYnMgPj0gMFxuICAgICAgICAgICAgICAgID8gdHNsaWJfMS5fX3NwcmVhZCh0aGlzLl9icmVhZGNydW1icywgW21lcmdlZEJyZWFkY3J1bWJdKS5zbGljZSgtbWF4QnJlYWRjcnVtYnMpXG4gICAgICAgICAgICAgICAgOiB0c2xpYl8xLl9fc3ByZWFkKHRoaXMuX2JyZWFkY3J1bWJzLCBbbWVyZ2VkQnJlYWRjcnVtYl0pO1xuICAgICAgICB0aGlzLl9ub3RpZnlTY29wZUxpc3RlbmVycygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgU2NvcGUucHJvdG90eXBlLmNsZWFyQnJlYWRjcnVtYnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2JyZWFkY3J1bWJzID0gW107XG4gICAgICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBmaW5nZXJwcmludCBmcm9tIHRoZSBzY29wZSB0byB0aGUgZXZlbnQgaWYgdGhlcmUncyBvbmUsXG4gICAgICogdXNlcyBtZXNzYWdlIGlmIHRoZXJlJ3Mgb25lIGluc3RlYWQgb3IgZ2V0IHJpZCBvZiBlbXB0eSBmaW5nZXJwcmludFxuICAgICAqL1xuICAgIFNjb3BlLnByb3RvdHlwZS5fYXBwbHlGaW5nZXJwcmludCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgaXQncyBhbiBhcnJheSBmaXJzdCBhbmQgd2UgYWN0dWFsbHkgaGF2ZSBzb21ldGhpbmcgaW4gcGxhY2VcbiAgICAgICAgZXZlbnQuZmluZ2VycHJpbnQgPSBldmVudC5maW5nZXJwcmludFxuICAgICAgICAgICAgPyBBcnJheS5pc0FycmF5KGV2ZW50LmZpbmdlcnByaW50KVxuICAgICAgICAgICAgICAgID8gZXZlbnQuZmluZ2VycHJpbnRcbiAgICAgICAgICAgICAgICA6IFtldmVudC5maW5nZXJwcmludF1cbiAgICAgICAgICAgIDogW107XG4gICAgICAgIC8vIElmIHdlIGhhdmUgc29tZXRoaW5nIG9uIHRoZSBzY29wZSwgdGhlbiBtZXJnZSBpdCB3aXRoIGV2ZW50XG4gICAgICAgIGlmICh0aGlzLl9maW5nZXJwcmludCkge1xuICAgICAgICAgICAgZXZlbnQuZmluZ2VycHJpbnQgPSBldmVudC5maW5nZXJwcmludC5jb25jYXQodGhpcy5fZmluZ2VycHJpbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGhhdmUgbm8gZGF0YSBhdCBhbGwsIHJlbW92ZSBlbXB0eSBhcnJheSBkZWZhdWx0XG4gICAgICAgIGlmIChldmVudC5maW5nZXJwcmludCAmJiAhZXZlbnQuZmluZ2VycHJpbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZWxldGUgZXZlbnQuZmluZ2VycHJpbnQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIGN1cnJlbnQgY29udGV4dCBhbmQgZmluZ2VycHJpbnQgdG8gdGhlIGV2ZW50LlxuICAgICAqIE5vdGUgdGhhdCBicmVhZGNydW1icyB3aWxsIGJlIGFkZGVkIGJ5IHRoZSBjbGllbnQuXG4gICAgICogQWxzbyBpZiB0aGUgZXZlbnQgaGFzIGFscmVhZHkgYnJlYWRjcnVtYnMgb24gaXQsIHdlIGRvIG5vdCBtZXJnZSB0aGVtLlxuICAgICAqIEBwYXJhbSBldmVudCBFdmVudFxuICAgICAqIEBwYXJhbSBoaW50IE1heSBjb250YWluIGFkZGl0aW9uYWwgaW5mb3JtYXJ0aW9uIGFib3V0IHRoZSBvcmlnaW5hbCBleGNlcHRpb24uXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIFNjb3BlLnByb3RvdHlwZS5hcHBseVRvRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGhpbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V4dHJhICYmIE9iamVjdC5rZXlzKHRoaXMuX2V4dHJhKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGV2ZW50LmV4dHJhID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgdGhpcy5fZXh0cmEsIGV2ZW50LmV4dHJhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fdGFncyAmJiBPYmplY3Qua2V5cyh0aGlzLl90YWdzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGV2ZW50LnRhZ3MgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCB0aGlzLl90YWdzLCBldmVudC50YWdzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fdXNlciAmJiBPYmplY3Qua2V5cyh0aGlzLl91c2VyKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGV2ZW50LnVzZXIgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCB0aGlzLl91c2VyLCBldmVudC51c2VyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29udGV4dCAmJiBPYmplY3Qua2V5cyh0aGlzLl9jb250ZXh0KS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGV2ZW50LmNvbnRleHRzID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgdGhpcy5fY29udGV4dCwgZXZlbnQuY29udGV4dHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9sZXZlbCkge1xuICAgICAgICAgICAgZXZlbnQubGV2ZWwgPSB0aGlzLl9sZXZlbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIGV2ZW50LnRyYW5zYWN0aW9uID0gdGhpcy5fdHJhbnNhY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3NwYW4pIHtcbiAgICAgICAgICAgIGV2ZW50LmNvbnRleHRzID0gdHNsaWJfMS5fX2Fzc2lnbih7IHRyYWNlOiB0aGlzLl9zcGFuLmdldFRyYWNlQ29udGV4dCgpIH0sIGV2ZW50LmNvbnRleHRzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hcHBseUZpbmdlcnByaW50KGV2ZW50KTtcbiAgICAgICAgZXZlbnQuYnJlYWRjcnVtYnMgPSB0c2xpYl8xLl9fc3ByZWFkKChldmVudC5icmVhZGNydW1icyB8fCBbXSksIHRoaXMuX2JyZWFkY3J1bWJzKTtcbiAgICAgICAgZXZlbnQuYnJlYWRjcnVtYnMgPSBldmVudC5icmVhZGNydW1icy5sZW5ndGggPiAwID8gZXZlbnQuYnJlYWRjcnVtYnMgOiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub3RpZnlFdmVudFByb2Nlc3NvcnModHNsaWJfMS5fX3NwcmVhZChnZXRHbG9iYWxFdmVudFByb2Nlc3NvcnMoKSwgdGhpcy5fZXZlbnRQcm9jZXNzb3JzKSwgZXZlbnQsIGhpbnQpO1xuICAgIH07XG4gICAgcmV0dXJuIFNjb3BlO1xufSgpKTtcbmV4cG9ydCB7IFNjb3BlIH07XG4vKipcbiAqIFJldHJ1bnMgdGhlIGdsb2JhbCBldmVudCBwcm9jZXNzb3JzLlxuICovXG5mdW5jdGlvbiBnZXRHbG9iYWxFdmVudFByb2Nlc3NvcnMoKSB7XG4gICAgdmFyIGdsb2JhbCA9IGdldEdsb2JhbE9iamVjdCgpO1xuICAgIGdsb2JhbC5fX1NFTlRSWV9fID0gZ2xvYmFsLl9fU0VOVFJZX18gfHwge307XG4gICAgZ2xvYmFsLl9fU0VOVFJZX18uZ2xvYmFsRXZlbnRQcm9jZXNzb3JzID0gZ2xvYmFsLl9fU0VOVFJZX18uZ2xvYmFsRXZlbnRQcm9jZXNzb3JzIHx8IFtdO1xuICAgIHJldHVybiBnbG9iYWwuX19TRU5UUllfXy5nbG9iYWxFdmVudFByb2Nlc3NvcnM7XG59XG4vKipcbiAqIEFkZCBhIEV2ZW50UHJvY2Vzc29yIHRvIGJlIGtlcHQgZ2xvYmFsbHkuXG4gKiBAcGFyYW0gY2FsbGJhY2sgRXZlbnRQcm9jZXNzb3IgdG8gYWRkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRHbG9iYWxFdmVudFByb2Nlc3NvcihjYWxsYmFjaykge1xuICAgIGdldEdsb2JhbEV2ZW50UHJvY2Vzc29ycygpLnB1c2goY2FsbGJhY2spO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NvcGUuanMubWFwIiwiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRIdWIgfSBmcm9tICdAc2VudHJ5L2h1Yic7XG4vKipcbiAqIFRoaXMgY2FsbHMgYSBmdW5jdGlvbiBvbiB0aGUgY3VycmVudCBodWIuXG4gKiBAcGFyYW0gbWV0aG9kIGZ1bmN0aW9uIHRvIGNhbGwgb24gaHViLlxuICogQHBhcmFtIGFyZ3MgdG8gcGFzcyB0byBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY2FsbE9uSHViKG1ldGhvZCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIGh1YiA9IGdldEN1cnJlbnRIdWIoKTtcbiAgICBpZiAoaHViICYmIGh1YlttZXRob2RdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnNhZmUtYW55XG4gICAgICAgIHJldHVybiBodWJbbWV0aG9kXS5hcHBseShodWIsIHRzbGliXzEuX19zcHJlYWQoYXJncykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBodWIgZGVmaW5lZCBvciBcIiArIG1ldGhvZCArIFwiIHdhcyBub3QgZm91bmQgb24gdGhlIGh1YiwgcGxlYXNlIG9wZW4gYSBidWcgcmVwb3J0LlwiKTtcbn1cbi8qKlxuICogQ2FwdHVyZXMgYW4gZXhjZXB0aW9uIGV2ZW50IGFuZCBzZW5kcyBpdCB0byBTZW50cnkuXG4gKlxuICogQHBhcmFtIGV4Y2VwdGlvbiBBbiBleGNlcHRpb24tbGlrZSBvYmplY3QuXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIGV2ZW50SWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXB0dXJlRXhjZXB0aW9uKGV4Y2VwdGlvbikge1xuICAgIHZhciBzeW50aGV0aWNFeGNlcHRpb247XG4gICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZW50cnkgc3ludGhldGljRXhjZXB0aW9uJyk7XG4gICAgfVxuICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgc3ludGhldGljRXhjZXB0aW9uID0gZXhjZXB0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gY2FsbE9uSHViKCdjYXB0dXJlRXhjZXB0aW9uJywgZXhjZXB0aW9uLCB7XG4gICAgICAgIG9yaWdpbmFsRXhjZXB0aW9uOiBleGNlcHRpb24sXG4gICAgICAgIHN5bnRoZXRpY0V4Y2VwdGlvbjogc3ludGhldGljRXhjZXB0aW9uLFxuICAgIH0pO1xufVxuLyoqXG4gKiBDYXB0dXJlcyBhIG1lc3NhZ2UgZXZlbnQgYW5kIHNlbmRzIGl0IHRvIFNlbnRyeS5cbiAqXG4gKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzZW5kIHRvIFNlbnRyeS5cbiAqIEBwYXJhbSBsZXZlbCBEZWZpbmUgdGhlIGxldmVsIG9mIHRoZSBtZXNzYWdlLlxuICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCBldmVudElkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZU1lc3NhZ2UobWVzc2FnZSwgbGV2ZWwpIHtcbiAgICB2YXIgc3ludGhldGljRXhjZXB0aW9uO1xuICAgIHRyeSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICBzeW50aGV0aWNFeGNlcHRpb24gPSBleGNlcHRpb247XG4gICAgfVxuICAgIHJldHVybiBjYWxsT25IdWIoJ2NhcHR1cmVNZXNzYWdlJywgbWVzc2FnZSwgbGV2ZWwsIHtcbiAgICAgICAgb3JpZ2luYWxFeGNlcHRpb246IG1lc3NhZ2UsXG4gICAgICAgIHN5bnRoZXRpY0V4Y2VwdGlvbjogc3ludGhldGljRXhjZXB0aW9uLFxuICAgIH0pO1xufVxuLyoqXG4gKiBDYXB0dXJlcyBhIG1hbnVhbGx5IGNyZWF0ZWQgZXZlbnQgYW5kIHNlbmRzIGl0IHRvIFNlbnRyeS5cbiAqXG4gKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IHRvIHNlbmQgdG8gU2VudHJ5LlxuICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCBldmVudElkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZUV2ZW50KGV2ZW50KSB7XG4gICAgcmV0dXJuIGNhbGxPbkh1YignY2FwdHVyZUV2ZW50JywgZXZlbnQpO1xufVxuLyoqXG4gKiBDYWxsYmFjayB0byBzZXQgY29udGV4dCBpbmZvcm1hdGlvbiBvbnRvIHRoZSBzY29wZS5cbiAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIFNjb3BlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlU2NvcGUoY2FsbGJhY2spIHtcbiAgICBjYWxsT25IdWIoJ2NvbmZpZ3VyZVNjb3BlJywgY2FsbGJhY2spO1xufVxuLyoqXG4gKiBSZWNvcmRzIGEgbmV3IGJyZWFkY3J1bWIgd2hpY2ggd2lsbCBiZSBhdHRhY2hlZCB0byBmdXR1cmUgZXZlbnRzLlxuICpcbiAqIEJyZWFkY3J1bWJzIHdpbGwgYmUgYWRkZWQgdG8gc3Vic2VxdWVudCBldmVudHMgdG8gcHJvdmlkZSBtb3JlIGNvbnRleHQgb25cbiAqIHVzZXIncyBhY3Rpb25zIHByaW9yIHRvIGFuIGVycm9yIG9yIGNyYXNoLlxuICpcbiAqIEBwYXJhbSBicmVhZGNydW1iIFRoZSBicmVhZGNydW1iIHRvIHJlY29yZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEJyZWFkY3J1bWIoYnJlYWRjcnVtYikge1xuICAgIGNhbGxPbkh1YignYWRkQnJlYWRjcnVtYicsIGJyZWFkY3J1bWIpO1xufVxuLyoqXG4gKiBTZXRzIGNvbnRleHQgZGF0YSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICogQHBhcmFtIG5hbWUgb2YgdGhlIGNvbnRleHRcbiAqIEBwYXJhbSBjb250ZXh0IEFueSBraW5kIG9mIGRhdGEuIFRoaXMgZGF0YSB3aWxsIGJlIG5vcm1haWx6ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb250ZXh0KG5hbWUsIGNvbnRleHQpIHtcbiAgICBjYWxsT25IdWIoJ3NldENvbnRleHQnLCBuYW1lLCBjb250ZXh0KTtcbn1cbi8qKlxuICogU2V0IGFuIG9iamVjdCB0aGF0IHdpbGwgYmUgbWVyZ2VkIHNlbnQgYXMgZXh0cmEgZGF0YSB3aXRoIHRoZSBldmVudC5cbiAqIEBwYXJhbSBleHRyYXMgRXh0cmFzIG9iamVjdCB0byBtZXJnZSBpbnRvIGN1cnJlbnQgY29udGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEV4dHJhcyhleHRyYXMpIHtcbiAgICBjYWxsT25IdWIoJ3NldEV4dHJhcycsIGV4dHJhcyk7XG59XG4vKipcbiAqIFNldCBhbiBvYmplY3QgdGhhdCB3aWxsIGJlIG1lcmdlZCBzZW50IGFzIHRhZ3MgZGF0YSB3aXRoIHRoZSBldmVudC5cbiAqIEBwYXJhbSB0YWdzIFRhZ3MgY29udGV4dCBvYmplY3QgdG8gbWVyZ2UgaW50byBjdXJyZW50IGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRUYWdzKHRhZ3MpIHtcbiAgICBjYWxsT25IdWIoJ3NldFRhZ3MnLCB0YWdzKTtcbn1cbi8qKlxuICogU2V0IGtleTp2YWx1ZSB0aGF0IHdpbGwgYmUgc2VudCBhcyBleHRyYSBkYXRhIHdpdGggdGhlIGV2ZW50LlxuICogQHBhcmFtIGtleSBTdHJpbmcgb2YgZXh0cmFcbiAqIEBwYXJhbSBleHRyYSBBbnkga2luZCBvZiBkYXRhLiBUaGlzIGRhdGEgd2lsbCBiZSBub3JtYWlsemVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RXh0cmEoa2V5LCBleHRyYSkge1xuICAgIGNhbGxPbkh1Yignc2V0RXh0cmEnLCBrZXksIGV4dHJhKTtcbn1cbi8qKlxuICogU2V0IGtleTp2YWx1ZSB0aGF0IHdpbGwgYmUgc2VudCBhcyB0YWdzIGRhdGEgd2l0aCB0aGUgZXZlbnQuXG4gKiBAcGFyYW0ga2V5IFN0cmluZyBrZXkgb2YgdGFnXG4gKiBAcGFyYW0gdmFsdWUgU3RyaW5nIHZhbHVlIG9mIHRhZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFnKGtleSwgdmFsdWUpIHtcbiAgICBjYWxsT25IdWIoJ3NldFRhZycsIGtleSwgdmFsdWUpO1xufVxuLyoqXG4gKiBVcGRhdGVzIHVzZXIgY29udGV4dCBpbmZvcm1hdGlvbiBmb3IgZnV0dXJlIGV2ZW50cy5cbiAqXG4gKiBAcGFyYW0gdXNlciBVc2VyIGNvbnRleHQgb2JqZWN0IHRvIGJlIHNldCBpbiB0aGUgY3VycmVudCBjb250ZXh0LiBQYXNzIGBudWxsYCB0byB1bnNldCB0aGUgdXNlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZXIodXNlcikge1xuICAgIGNhbGxPbkh1Yignc2V0VXNlcicsIHVzZXIpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHNjb3BlIHdpdGggYW5kIGV4ZWN1dGVzIHRoZSBnaXZlbiBvcGVyYXRpb24gd2l0aGluLlxuICogVGhlIHNjb3BlIGlzIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCBvbmNlIHRoZSBvcGVyYXRpb25cbiAqIGZpbmlzaGVzIG9yIHRocm93cy5cbiAqXG4gKiBUaGlzIGlzIGVzc2VudGlhbGx5IGEgY29udmVuaWVuY2UgZnVuY3Rpb24gZm9yOlxuICpcbiAqICAgICBwdXNoU2NvcGUoKTtcbiAqICAgICBjYWxsYmFjaygpO1xuICogICAgIHBvcFNjb3BlKCk7XG4gKlxuICogQHBhcmFtIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBlbmNsb3NlZCBpbnRvIHB1c2gvcG9wU2NvcGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aXRoU2NvcGUoY2FsbGJhY2spIHtcbiAgICBjYWxsT25IdWIoJ3dpdGhTY29wZScsIGNhbGxiYWNrKTtcbn1cbi8qKlxuICogQ2FsbHMgYSBmdW5jdGlvbiBvbiB0aGUgbGF0ZXN0IGNsaWVudC4gVXNlIHRoaXMgd2l0aCBjYXV0aW9uLCBpdCdzIG1lYW50IGFzXG4gKiBpbiBcImludGVybmFsXCIgaGVscGVyIHNvIHdlIGRvbid0IG5lZWQgdG8gZXhwb3NlIGV2ZXJ5IHBvc3NpYmxlIGZ1bmN0aW9uIGluXG4gKiB0aGUgc2hpbS4gSXQgaXMgbm90IGd1YXJhbnRlZWQgdGhhdCB0aGUgY2xpZW50IGFjdHVhbGx5IGltcGxlbWVudHMgdGhlXG4gKiBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gbWV0aG9kIFRoZSBtZXRob2QgdG8gY2FsbCBvbiB0aGUgY2xpZW50L2NsaWVudC5cbiAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBjbGllbnQvZm9udGVuZC5cbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jYWxsT25DbGllbnQobWV0aG9kKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBjYWxsT25IdWIuYXBwbHkodm9pZCAwLCB0c2xpYl8xLl9fc3ByZWFkKFsnX2ludm9rZUNsaWVudCcsIG1ldGhvZF0sIGFyZ3MpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCB7IExvZ0xldmVsIH0gZnJvbSAnLi9sb2dsZXZlbCc7XG5leHBvcnQgeyBTZXZlcml0eSB9IGZyb20gJy4vc2V2ZXJpdHknO1xuZXhwb3J0IHsgU3BhblN0YXR1cyB9IGZyb20gJy4vc3Bhbic7XG5leHBvcnQgeyBTdGF0dXMgfSBmcm9tICcuL3N0YXR1cyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKiogQ29uc29sZSBsb2dnaW5nIHZlcmJvc2l0eSBmb3IgdGhlIFNESy4gKi9cbmV4cG9ydCB2YXIgTG9nTGV2ZWw7XG4oZnVuY3Rpb24gKExvZ0xldmVsKSB7XG4gICAgLyoqIE5vIGxvZ3Mgd2lsbCBiZSBnZW5lcmF0ZWQuICovXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcbiAgICAvKiogT25seSBTREsgaW50ZXJuYWwgZXJyb3JzIHdpbGwgYmUgbG9nZ2VkLiAqL1xuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiRXJyb3JcIl0gPSAxXSA9IFwiRXJyb3JcIjtcbiAgICAvKiogSW5mb3JtYXRpb24gdXNlZnVsIGZvciBkZWJ1Z2dpbmcgdGhlIFNESyB3aWxsIGJlIGxvZ2dlZC4gKi9cbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkRlYnVnXCJdID0gMl0gPSBcIkRlYnVnXCI7XG4gICAgLyoqIEFsbCBTREsgYWN0aW9ucyB3aWxsIGJlIGxvZ2dlZC4gKi9cbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlZlcmJvc2VcIl0gPSAzXSA9IFwiVmVyYm9zZVwiO1xufSkoTG9nTGV2ZWwgfHwgKExvZ0xldmVsID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvZ2xldmVsLmpzLm1hcCIsIi8qKiBKU0RvYyAqL1xuZXhwb3J0IHZhciBTZXZlcml0eTtcbihmdW5jdGlvbiAoU2V2ZXJpdHkpIHtcbiAgICAvKiogSlNEb2MgKi9cbiAgICBTZXZlcml0eVtcIkZhdGFsXCJdID0gXCJmYXRhbFwiO1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIFNldmVyaXR5W1wiRXJyb3JcIl0gPSBcImVycm9yXCI7XG4gICAgLyoqIEpTRG9jICovXG4gICAgU2V2ZXJpdHlbXCJXYXJuaW5nXCJdID0gXCJ3YXJuaW5nXCI7XG4gICAgLyoqIEpTRG9jICovXG4gICAgU2V2ZXJpdHlbXCJMb2dcIl0gPSBcImxvZ1wiO1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIFNldmVyaXR5W1wiSW5mb1wiXSA9IFwiaW5mb1wiO1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIFNldmVyaXR5W1wiRGVidWdcIl0gPSBcImRlYnVnXCI7XG4gICAgLyoqIEpTRG9jICovXG4gICAgU2V2ZXJpdHlbXCJDcml0aWNhbFwiXSA9IFwiY3JpdGljYWxcIjtcbn0pKFNldmVyaXR5IHx8IChTZXZlcml0eSA9IHt9KSk7XG4vLyB0c2xpbnQ6ZGlzYWJsZTpjb21wbGV0ZWQtZG9jc1xuLy8gdHNsaW50OmRpc2FibGU6bm8tdW5uZWNlc3NhcnktcXVhbGlmaWVyIG5vLW5hbWVzcGFjZVxuKGZ1bmN0aW9uIChTZXZlcml0eSkge1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgc3RyaW5nLWJhc2VkIGxldmVsIGludG8gYSB7QGxpbmsgU2V2ZXJpdHl9LlxuICAgICAqXG4gICAgICogQHBhcmFtIGxldmVsIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBTZXZlcml0eVxuICAgICAqIEByZXR1cm5zIFNldmVyaXR5XG4gICAgICovXG4gICAgZnVuY3Rpb24gZnJvbVN0cmluZyhsZXZlbCkge1xuICAgICAgICBzd2l0Y2ggKGxldmVsKSB7XG4gICAgICAgICAgICBjYXNlICdkZWJ1Zyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNldmVyaXR5LkRlYnVnO1xuICAgICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNldmVyaXR5LkluZm87XG4gICAgICAgICAgICBjYXNlICd3YXJuJzpcbiAgICAgICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiBTZXZlcml0eS5XYXJuaW5nO1xuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgIHJldHVybiBTZXZlcml0eS5FcnJvcjtcbiAgICAgICAgICAgIGNhc2UgJ2ZhdGFsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gU2V2ZXJpdHkuRmF0YWw7XG4gICAgICAgICAgICBjYXNlICdjcml0aWNhbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNldmVyaXR5LkNyaXRpY2FsO1xuICAgICAgICAgICAgY2FzZSAnbG9nJzpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNldmVyaXR5LkxvZztcbiAgICAgICAgfVxuICAgIH1cbiAgICBTZXZlcml0eS5mcm9tU3RyaW5nID0gZnJvbVN0cmluZztcbn0pKFNldmVyaXR5IHx8IChTZXZlcml0eSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZXZlcml0eS5qcy5tYXAiLCIvKiogVGhlIHN0YXR1cyBvZiBhbiBTcGFuLiAqL1xuZXhwb3J0IHZhciBTcGFuU3RhdHVzO1xuKGZ1bmN0aW9uIChTcGFuU3RhdHVzKSB7XG4gICAgLyoqIFRoZSBvcGVyYXRpb24gY29tcGxldGVkIHN1Y2Nlc3NmdWxseS4gKi9cbiAgICBTcGFuU3RhdHVzW1wiT2tcIl0gPSBcIm9rXCI7XG4gICAgLyoqIERlYWRsaW5lIGV4cGlyZWQgYmVmb3JlIG9wZXJhdGlvbiBjb3VsZCBjb21wbGV0ZS4gKi9cbiAgICBTcGFuU3RhdHVzW1wiRGVhZGxpbmVFeGNlZWRlZFwiXSA9IFwiZGVhZGxpbmVfZXhjZWVkZWRcIjtcbiAgICAvKiogNDAxIFVuYXV0aG9yaXplZCAoYWN0dWFsbHkgZG9lcyBtZWFuIHVuYXV0aGVudGljYXRlZCBhY2NvcmRpbmcgdG8gUkZDIDcyMzUpICovXG4gICAgU3BhblN0YXR1c1tcIlVuYXV0aGVudGljYXRlZFwiXSA9IFwidW5hdXRoZW50aWNhdGVkXCI7XG4gICAgLyoqIDQwMyBGb3JiaWRkZW4gKi9cbiAgICBTcGFuU3RhdHVzW1wiUGVybWlzc2lvbkRlbmllZFwiXSA9IFwicGVybWlzc2lvbl9kZW5pZWRcIjtcbiAgICAvKiogNDA0IE5vdCBGb3VuZC4gU29tZSByZXF1ZXN0ZWQgZW50aXR5IChmaWxlIG9yIGRpcmVjdG9yeSkgd2FzIG5vdCBmb3VuZC4gKi9cbiAgICBTcGFuU3RhdHVzW1wiTm90Rm91bmRcIl0gPSBcIm5vdF9mb3VuZFwiO1xuICAgIC8qKiA0MjkgVG9vIE1hbnkgUmVxdWVzdHMgKi9cbiAgICBTcGFuU3RhdHVzW1wiUmVzb3VyY2VFeGhhdXN0ZWRcIl0gPSBcInJlc291cmNlX2V4aGF1c3RlZFwiO1xuICAgIC8qKiBDbGllbnQgc3BlY2lmaWVkIGFuIGludmFsaWQgYXJndW1lbnQuIDR4eC4gKi9cbiAgICBTcGFuU3RhdHVzW1wiSW52YWxpZEFyZ3VtZW50XCJdID0gXCJpbnZhbGlkX2FyZ3VtZW50XCI7XG4gICAgLyoqIDUwMSBOb3QgSW1wbGVtZW50ZWQgKi9cbiAgICBTcGFuU3RhdHVzW1wiVW5pbXBsZW1lbnRlZFwiXSA9IFwidW5pbXBsZW1lbnRlZFwiO1xuICAgIC8qKiA1MDMgU2VydmljZSBVbmF2YWlsYWJsZSAqL1xuICAgIFNwYW5TdGF0dXNbXCJVbmF2YWlsYWJsZVwiXSA9IFwidW5hdmFpbGFibGVcIjtcbiAgICAvKiogT3RoZXIvZ2VuZXJpYyA1eHguICovXG4gICAgU3BhblN0YXR1c1tcIkludGVybmFsRXJyb3JcIl0gPSBcImludGVybmFsX2Vycm9yXCI7XG4gICAgLyoqIFVua25vd24uIEFueSBub24tc3RhbmRhcmQgSFRUUCBzdGF0dXMgY29kZS4gKi9cbiAgICBTcGFuU3RhdHVzW1wiVW5rbm93bkVycm9yXCJdID0gXCJ1bmtub3duX2Vycm9yXCI7XG4gICAgLyoqIFRoZSBvcGVyYXRpb24gd2FzIGNhbmNlbGxlZCAodHlwaWNhbGx5IGJ5IHRoZSB1c2VyKS4gKi9cbiAgICBTcGFuU3RhdHVzW1wiQ2FuY2VsbGVkXCJdID0gXCJjYW5jZWxsZWRcIjtcbiAgICAvKiogQWxyZWFkeSBleGlzdHMgKDQwOSkgKi9cbiAgICBTcGFuU3RhdHVzW1wiQWxyZWFkeUV4aXN0c1wiXSA9IFwiYWxyZWFkeV9leGlzdHNcIjtcbiAgICAvKiogT3BlcmF0aW9uIHdhcyByZWplY3RlZCBiZWNhdXNlIHRoZSBzeXN0ZW0gaXMgbm90IGluIGEgc3RhdGUgcmVxdWlyZWQgZm9yIHRoZSBvcGVyYXRpb24ncyAqL1xuICAgIFNwYW5TdGF0dXNbXCJGYWlsZWRQcmVjb25kaXRpb25cIl0gPSBcImZhaWxlZF9wcmVjb25kaXRpb25cIjtcbiAgICAvKiogVGhlIG9wZXJhdGlvbiB3YXMgYWJvcnRlZCwgdHlwaWNhbGx5IGR1ZSB0byBhIGNvbmN1cnJlbmN5IGlzc3VlLiAqL1xuICAgIFNwYW5TdGF0dXNbXCJBYm9ydGVkXCJdID0gXCJhYm9ydGVkXCI7XG4gICAgLyoqIE9wZXJhdGlvbiB3YXMgYXR0ZW1wdGVkIHBhc3QgdGhlIHZhbGlkIHJhbmdlLiAqL1xuICAgIFNwYW5TdGF0dXNbXCJPdXRPZlJhbmdlXCJdID0gXCJvdXRfb2ZfcmFuZ2VcIjtcbiAgICAvKiogVW5yZWNvdmVyYWJsZSBkYXRhIGxvc3Mgb3IgY29ycnVwdGlvbiAqL1xuICAgIFNwYW5TdGF0dXNbXCJEYXRhTG9zc1wiXSA9IFwiZGF0YV9sb3NzXCI7XG59KShTcGFuU3RhdHVzIHx8IChTcGFuU3RhdHVzID0ge30pKTtcbi8vIHRzbGludDpkaXNhYmxlOm5vLXVubmVjZXNzYXJ5LXF1YWxpZmllciBuby1uYW1lc3BhY2VcbihmdW5jdGlvbiAoU3BhblN0YXR1cykge1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgSFRUUCBzdGF0dXMgY29kZSBpbnRvIGEge0BsaW5rIFNwYW5TdGF0dXN9LlxuICAgICAqXG4gICAgICogQHBhcmFtIGh0dHBTdGF0dXMgVGhlIEhUVFAgcmVzcG9uc2Ugc3RhdHVzIGNvZGUuXG4gICAgICogQHJldHVybnMgVGhlIHNwYW4gc3RhdHVzIG9yIHtAbGluayBTcGFuU3RhdHVzLlVua25vd25FcnJvcn0uXG4gICAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBsZXRlZC1kb2NzXG4gICAgZnVuY3Rpb24gZnJvbUh0dHBDb2RlKGh0dHBTdGF0dXMpIHtcbiAgICAgICAgaWYgKGh0dHBTdGF0dXMgPCA0MDApIHtcbiAgICAgICAgICAgIHJldHVybiBTcGFuU3RhdHVzLk9rO1xuICAgICAgICB9XG4gICAgICAgIGlmIChodHRwU3RhdHVzID49IDQwMCAmJiBodHRwU3RhdHVzIDwgNTAwKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGh0dHBTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQwMTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNwYW5TdGF0dXMuVW5hdXRoZW50aWNhdGVkO1xuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3BhblN0YXR1cy5QZXJtaXNzaW9uRGVuaWVkO1xuICAgICAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3BhblN0YXR1cy5Ob3RGb3VuZDtcbiAgICAgICAgICAgICAgICBjYXNlIDQwOTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNwYW5TdGF0dXMuQWxyZWFkeUV4aXN0cztcbiAgICAgICAgICAgICAgICBjYXNlIDQxMzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNwYW5TdGF0dXMuRmFpbGVkUHJlY29uZGl0aW9uO1xuICAgICAgICAgICAgICAgIGNhc2UgNDI5OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3BhblN0YXR1cy5SZXNvdXJjZUV4aGF1c3RlZDtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3BhblN0YXR1cy5JbnZhbGlkQXJndW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGh0dHBTdGF0dXMgPj0gNTAwICYmIGh0dHBTdGF0dXMgPCA2MDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAoaHR0cFN0YXR1cykge1xuICAgICAgICAgICAgICAgIGNhc2UgNTAxOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3BhblN0YXR1cy5VbmltcGxlbWVudGVkO1xuICAgICAgICAgICAgICAgIGNhc2UgNTAzOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3BhblN0YXR1cy5VbmF2YWlsYWJsZTtcbiAgICAgICAgICAgICAgICBjYXNlIDUwNDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNwYW5TdGF0dXMuRGVhZGxpbmVFeGNlZWRlZDtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3BhblN0YXR1cy5JbnRlcm5hbEVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTcGFuU3RhdHVzLlVua25vd25FcnJvcjtcbiAgICB9XG4gICAgU3BhblN0YXR1cy5mcm9tSHR0cENvZGUgPSBmcm9tSHR0cENvZGU7XG59KShTcGFuU3RhdHVzIHx8IChTcGFuU3RhdHVzID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwYW4uanMubWFwIiwiLyoqIFRoZSBzdGF0dXMgb2YgYW4gZXZlbnQuICovXG5leHBvcnQgdmFyIFN0YXR1cztcbihmdW5jdGlvbiAoU3RhdHVzKSB7XG4gICAgLyoqIFRoZSBzdGF0dXMgY291bGQgbm90IGJlIGRldGVybWluZWQuICovXG4gICAgU3RhdHVzW1wiVW5rbm93blwiXSA9IFwidW5rbm93blwiO1xuICAgIC8qKiBUaGUgZXZlbnQgd2FzIHNraXBwZWQgZHVlIHRvIGNvbmZpZ3VyYXRpb24gb3IgY2FsbGJhY2tzLiAqL1xuICAgIFN0YXR1c1tcIlNraXBwZWRcIl0gPSBcInNraXBwZWRcIjtcbiAgICAvKiogVGhlIGV2ZW50IHdhcyBzZW50IHRvIFNlbnRyeSBzdWNjZXNzZnVsbHkuICovXG4gICAgU3RhdHVzW1wiU3VjY2Vzc1wiXSA9IFwic3VjY2Vzc1wiO1xuICAgIC8qKiBUaGUgY2xpZW50IGlzIGN1cnJlbnRseSByYXRlIGxpbWl0ZWQgYW5kIHdpbGwgdHJ5IGFnYWluIGxhdGVyLiAqL1xuICAgIFN0YXR1c1tcIlJhdGVMaW1pdFwiXSA9IFwicmF0ZV9saW1pdFwiO1xuICAgIC8qKiBUaGUgZXZlbnQgY291bGQgbm90IGJlIHByb2Nlc3NlZC4gKi9cbiAgICBTdGF0dXNbXCJJbnZhbGlkXCJdID0gXCJpbnZhbGlkXCI7XG4gICAgLyoqIEEgc2VydmVyLXNpZGUgZXJyb3Igb2N1cnJlZCBkdXJpbmcgc3VibWlzc2lvbi4gKi9cbiAgICBTdGF0dXNbXCJGYWlsZWRcIl0gPSBcImZhaWxlZFwiO1xufSkoU3RhdHVzIHx8IChTdGF0dXMgPSB7fSkpO1xuLy8gdHNsaW50OmRpc2FibGU6Y29tcGxldGVkLWRvY3Ncbi8vIHRzbGludDpkaXNhYmxlOm5vLXVubmVjZXNzYXJ5LXF1YWxpZmllciBuby1uYW1lc3BhY2VcbihmdW5jdGlvbiAoU3RhdHVzKSB7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBIVFRQIHN0YXR1cyBjb2RlIGludG8gYSB7QGxpbmsgU3RhdHVzfS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb2RlIFRoZSBIVFRQIHJlc3BvbnNlIHN0YXR1cyBjb2RlLlxuICAgICAqIEByZXR1cm5zIFRoZSBzZW5kIHN0YXR1cyBvciB7QGxpbmsgU3RhdHVzLlVua25vd259LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZyb21IdHRwQ29kZShjb2RlKSB7XG4gICAgICAgIGlmIChjb2RlID49IDIwMCAmJiBjb2RlIDwgMzAwKSB7XG4gICAgICAgICAgICByZXR1cm4gU3RhdHVzLlN1Y2Nlc3M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPT09IDQyOSkge1xuICAgICAgICAgICAgcmV0dXJuIFN0YXR1cy5SYXRlTGltaXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPj0gNDAwICYmIGNvZGUgPCA1MDApIHtcbiAgICAgICAgICAgIHJldHVybiBTdGF0dXMuSW52YWxpZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29kZSA+PSA1MDApIHtcbiAgICAgICAgICAgIHJldHVybiBTdGF0dXMuRmFpbGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdGF0dXMuVW5rbm93bjtcbiAgICB9XG4gICAgU3RhdHVzLmZyb21IdHRwQ29kZSA9IGZyb21IdHRwQ29kZTtcbn0pKFN0YXR1cyB8fCAoU3RhdHVzID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXR1cy5qcy5tYXAiLCIvKipcbiAqIENvbnN1bWVzIHRoZSBwcm9taXNlIGFuZCBsb2dzIHRoZSBlcnJvciB3aGVuIGl0IHJlamVjdHMuXG4gKiBAcGFyYW0gcHJvbWlzZSBBIHByb21pc2UgdG8gZm9yZ2V0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9yZ2V0KHByb21pc2UpIHtcbiAgICBwcm9taXNlLnRoZW4obnVsbCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gVE9ETzogVXNlIGEgYmV0dGVyIGxvZ2dpbmcgbWVjaGFuaXNtXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3luYy5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgU2VudHJ5RXJyb3IgfSBmcm9tICcuL2Vycm9yJztcbi8qKiBSZWd1bGFyIGV4cHJlc3Npb24gdXNlZCB0byBwYXJzZSBhIERzbi4gKi9cbnZhciBEU05fUkVHRVggPSAvXig/OihcXHcrKTopXFwvXFwvKD86KFxcdyspKD86OihcXHcrKSk/QCkoW1xcd1xcLi1dKykoPzo6KFxcZCspKT9cXC8oLispLztcbi8qKiBFcnJvciBtZXNzYWdlICovXG52YXIgRVJST1JfTUVTU0FHRSA9ICdJbnZhbGlkIERzbic7XG4vKiogVGhlIFNlbnRyeSBEc24sIGlkZW50aWZ5aW5nIGEgU2VudHJ5IGluc3RhbmNlIGFuZCBwcm9qZWN0LiAqL1xudmFyIERzbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiogQ3JlYXRlcyBhIG5ldyBEc24gY29tcG9uZW50ICovXG4gICAgZnVuY3Rpb24gRHNuKGZyb20pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmcm9tID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5fZnJvbVN0cmluZyhmcm9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2Zyb21Db21wb25lbnRzKGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERzbi5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgd2lsbCByZW5kZXIgdGhlIHB1YmxpYyByZXByZXNlbnRhdGlvbiB3aXRob3V0IHRoZSBwYXNzd29yZFxuICAgICAqIGNvbXBvbmVudC4gVG8gZ2V0IHRoZSBkZXByZWNhdGVkIHByaXZhdGUgcmVwcmVzZW50YXRpb24sIHNldCBgd2l0aFBhc3N3b3JkYFxuICAgICAqIHRvIHRydWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2l0aFBhc3N3b3JkIFdoZW4gc2V0IHRvIHRydWUsIHRoZSBwYXNzd29yZCB3aWxsIGJlIGluY2x1ZGVkLlxuICAgICAqL1xuICAgIERzbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAod2l0aFBhc3N3b3JkKSB7XG4gICAgICAgIGlmICh3aXRoUGFzc3dvcmQgPT09IHZvaWQgMCkgeyB3aXRoUGFzc3dvcmQgPSBmYWxzZTsgfVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdGhpcy1hc3NpZ25tZW50XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIGhvc3QgPSBfYS5ob3N0LCBwYXRoID0gX2EucGF0aCwgcGFzcyA9IF9hLnBhc3MsIHBvcnQgPSBfYS5wb3J0LCBwcm9qZWN0SWQgPSBfYS5wcm9qZWN0SWQsIHByb3RvY29sID0gX2EucHJvdG9jb2wsIHVzZXIgPSBfYS51c2VyO1xuICAgICAgICByZXR1cm4gKHByb3RvY29sICsgXCI6Ly9cIiArIHVzZXIgKyAod2l0aFBhc3N3b3JkICYmIHBhc3MgPyBcIjpcIiArIHBhc3MgOiAnJykgK1xuICAgICAgICAgICAgKFwiQFwiICsgaG9zdCArIChwb3J0ID8gXCI6XCIgKyBwb3J0IDogJycpICsgXCIvXCIgKyAocGF0aCA/IHBhdGggKyBcIi9cIiA6IHBhdGgpICsgcHJvamVjdElkKSk7XG4gICAgfTtcbiAgICAvKiogUGFyc2VzIGEgc3RyaW5nIGludG8gdGhpcyBEc24uICovXG4gICAgRHNuLnByb3RvdHlwZS5fZnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gRFNOX1JFR0VYLmV4ZWMoc3RyKTtcbiAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFNlbnRyeUVycm9yKEVSUk9SX01FU1NBR0UpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYSA9IHRzbGliXzEuX19yZWFkKG1hdGNoLnNsaWNlKDEpLCA2KSwgcHJvdG9jb2wgPSBfYVswXSwgdXNlciA9IF9hWzFdLCBfYiA9IF9hWzJdLCBwYXNzID0gX2IgPT09IHZvaWQgMCA/ICcnIDogX2IsIGhvc3QgPSBfYVszXSwgX2MgPSBfYVs0XSwgcG9ydCA9IF9jID09PSB2b2lkIDAgPyAnJyA6IF9jLCBsYXN0UGF0aCA9IF9hWzVdO1xuICAgICAgICB2YXIgcGF0aCA9ICcnO1xuICAgICAgICB2YXIgcHJvamVjdElkID0gbGFzdFBhdGg7XG4gICAgICAgIHZhciBzcGxpdCA9IHByb2plY3RJZC5zcGxpdCgnLycpO1xuICAgICAgICBpZiAoc3BsaXQubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcGF0aCA9IHNwbGl0LnNsaWNlKDAsIC0xKS5qb2luKCcvJyk7XG4gICAgICAgICAgICBwcm9qZWN0SWQgPSBzcGxpdC5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9mcm9tQ29tcG9uZW50cyh7IGhvc3Q6IGhvc3QsIHBhc3M6IHBhc3MsIHBhdGg6IHBhdGgsIHByb2plY3RJZDogcHJvamVjdElkLCBwb3J0OiBwb3J0LCBwcm90b2NvbDogcHJvdG9jb2wsIHVzZXI6IHVzZXIgfSk7XG4gICAgfTtcbiAgICAvKiogTWFwcyBEc24gY29tcG9uZW50cyBpbnRvIHRoaXMgaW5zdGFuY2UuICovXG4gICAgRHNuLnByb3RvdHlwZS5fZnJvbUNvbXBvbmVudHMgPSBmdW5jdGlvbiAoY29tcG9uZW50cykge1xuICAgICAgICB0aGlzLnByb3RvY29sID0gY29tcG9uZW50cy5wcm90b2NvbDtcbiAgICAgICAgdGhpcy51c2VyID0gY29tcG9uZW50cy51c2VyO1xuICAgICAgICB0aGlzLnBhc3MgPSBjb21wb25lbnRzLnBhc3MgfHwgJyc7XG4gICAgICAgIHRoaXMuaG9zdCA9IGNvbXBvbmVudHMuaG9zdDtcbiAgICAgICAgdGhpcy5wb3J0ID0gY29tcG9uZW50cy5wb3J0IHx8ICcnO1xuICAgICAgICB0aGlzLnBhdGggPSBjb21wb25lbnRzLnBhdGggfHwgJyc7XG4gICAgICAgIHRoaXMucHJvamVjdElkID0gY29tcG9uZW50cy5wcm9qZWN0SWQ7XG4gICAgfTtcbiAgICAvKiogVmFsaWRhdGVzIHRoaXMgRHNuIGFuZCB0aHJvd3Mgb24gZXJyb3IuICovXG4gICAgRHNuLnByb3RvdHlwZS5fdmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIFsncHJvdG9jb2wnLCAndXNlcicsICdob3N0JywgJ3Byb2plY3RJZCddLmZvckVhY2goZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgaWYgKCFfdGhpc1tjb21wb25lbnRdKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFNlbnRyeUVycm9yKEVSUk9SX01FU1NBR0UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvdG9jb2wgIT09ICdodHRwJyAmJiB0aGlzLnByb3RvY29sICE9PSAnaHR0cHMnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VudHJ5RXJyb3IoRVJST1JfTUVTU0FHRSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9ydCAmJiBpc05hTihwYXJzZUludCh0aGlzLnBvcnQsIDEwKSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW50cnlFcnJvcihFUlJPUl9NRVNTQUdFKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIERzbjtcbn0oKSk7XG5leHBvcnQgeyBEc24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRzbi5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgc2V0UHJvdG90eXBlT2YgfSBmcm9tICcuL3BvbHlmaWxsJztcbi8qKiBBbiBlcnJvciBlbWl0dGVkIGJ5IFNlbnRyeSBTREtzIGFuZCByZWxhdGVkIHV0aWxpdGllcy4gKi9cbnZhciBTZW50cnlFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhTZW50cnlFcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZW50cnlFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIHZhciBfbmV3VGFyZ2V0ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbWVzc2FnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLXVuc2FmZS1hbnlcbiAgICAgICAgX3RoaXMubmFtZSA9IF9uZXdUYXJnZXQucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIHNldFByb3RvdHlwZU9mKF90aGlzLCBfbmV3VGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFNlbnRyeUVycm9yO1xufShFcnJvcikpO1xuZXhwb3J0IHsgU2VudHJ5RXJyb3IgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9yLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vYXN5bmMnO1xuZXhwb3J0ICogZnJvbSAnLi9lcnJvcic7XG5leHBvcnQgKiBmcm9tICcuL2lzJztcbmV4cG9ydCAqIGZyb20gJy4vbG9nZ2VyJztcbmV4cG9ydCAqIGZyb20gJy4vbWVtbyc7XG5leHBvcnQgKiBmcm9tICcuL21pc2MnO1xuZXhwb3J0ICogZnJvbSAnLi9vYmplY3QnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXRoJztcbmV4cG9ydCAqIGZyb20gJy4vcHJvbWlzZWJ1ZmZlcic7XG5leHBvcnQgKiBmcm9tICcuL3N0cmluZyc7XG5leHBvcnQgKiBmcm9tICcuL3N1cHBvcnRzJztcbmV4cG9ydCAqIGZyb20gJy4vc3luY3Byb21pc2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0cnVtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZHNuJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qIHRzbGludDpkaXNhYmxlOm9ubHktYXJyb3ctZnVuY3Rpb25zIG5vLXVuc2FmZS1hbnkgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0luc3RhbmNlT2YsIGlzU3RyaW5nIH0gZnJvbSAnLi9pcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyBnZXRGdW5jdGlvbk5hbWUsIGdldEdsb2JhbE9iamVjdCB9IGZyb20gJy4vbWlzYyc7XG5pbXBvcnQgeyBmaWxsIH0gZnJvbSAnLi9vYmplY3QnO1xuaW1wb3J0IHsgc3VwcG9ydHNIaXN0b3J5LCBzdXBwb3J0c05hdGl2ZUZldGNoIH0gZnJvbSAnLi9zdXBwb3J0cyc7XG52YXIgZ2xvYmFsID0gZ2V0R2xvYmFsT2JqZWN0KCk7XG4vKipcbiAqIEluc3RydW1lbnQgbmF0aXZlIEFQSXMgdG8gY2FsbCBoYW5kbGVycyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBicmVhZGNydW1icywgQVBNIHNwYW5zIGV0Yy5cbiAqICAtIENvbnNvbGUgQVBJXG4gKiAgLSBGZXRjaCBBUElcbiAqICAtIFhIUiBBUElcbiAqICAtIEhpc3RvcnkgQVBJXG4gKiAgLSBET00gQVBJIChjbGljay90eXBpbmcpXG4gKiAgLSBFcnJvciBBUElcbiAqICAtIFVuaGFuZGxlZFJlamVjdGlvbiBBUElcbiAqL1xudmFyIGhhbmRsZXJzID0ge307XG52YXIgaW5zdHJ1bWVudGVkID0ge307XG4vKiogSW5zdHJ1bWVudHMgZ2l2ZW4gQVBJICovXG5mdW5jdGlvbiBpbnN0cnVtZW50KHR5cGUpIHtcbiAgICBpZiAoaW5zdHJ1bWVudGVkW3R5cGVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW5zdHJ1bWVudGVkW3R5cGVdID0gdHJ1ZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnY29uc29sZSc6XG4gICAgICAgICAgICBpbnN0cnVtZW50Q29uc29sZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RvbSc6XG4gICAgICAgICAgICBpbnN0cnVtZW50RE9NKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAneGhyJzpcbiAgICAgICAgICAgIGluc3RydW1lbnRYSFIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmZXRjaCc6XG4gICAgICAgICAgICBpbnN0cnVtZW50RmV0Y2goKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdoaXN0b3J5JzpcbiAgICAgICAgICAgIGluc3RydW1lbnRIaXN0b3J5KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgaW5zdHJ1bWVudEVycm9yKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndW5oYW5kbGVkcmVqZWN0aW9uJzpcbiAgICAgICAgICAgIGluc3RydW1lbnRVbmhhbmRsZWRSZWplY3Rpb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbG9nZ2VyLndhcm4oJ3Vua25vd24gaW5zdHJ1bWVudGF0aW9uIHR5cGU6JywgdHlwZSk7XG4gICAgfVxufVxuLyoqXG4gKiBBZGQgaGFuZGxlciB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gZ2l2ZW4gdHlwZSBvZiBpbnN0cnVtZW50YXRpb24gdHJpZ2dlcnMuXG4gKiBVc2UgYXQgeW91ciBvd24gcmlzaywgdGhpcyBtaWdodCBicmVhayB3aXRob3V0IGNoYW5nZWxvZyBub3RpY2UsIG9ubHkgdXNlZCBpbnRlcm5hbGx5LlxuICogQGhpZGRlblxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkSW5zdHJ1bWVudGF0aW9uSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnN0cmljdC10eXBlLXByZWRpY2F0ZXNcbiAgICBpZiAoIWhhbmRsZXIgfHwgdHlwZW9mIGhhbmRsZXIudHlwZSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGhhbmRsZXIuY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoYW5kbGVyc1toYW5kbGVyLnR5cGVdID0gaGFuZGxlcnNbaGFuZGxlci50eXBlXSB8fCBbXTtcbiAgICBoYW5kbGVyc1toYW5kbGVyLnR5cGVdLnB1c2goaGFuZGxlci5jYWxsYmFjayk7XG4gICAgaW5zdHJ1bWVudChoYW5kbGVyLnR5cGUpO1xufVxuLyoqIEpTRG9jICovXG5mdW5jdGlvbiB0cmlnZ2VySGFuZGxlcnModHlwZSwgZGF0YSkge1xuICAgIHZhciBlXzEsIF9hO1xuICAgIGlmICghdHlwZSB8fCAhaGFuZGxlcnNbdHlwZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfYiA9IHRzbGliXzEuX192YWx1ZXMoaGFuZGxlcnNbdHlwZV0gfHwgW10pLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlciA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJFcnJvciB3aGlsZSB0cmlnZ2VyaW5nIGluc3RydW1lbnRhdGlvbiBoYW5kbGVyLlxcblR5cGU6IFwiICsgdHlwZSArIFwiXFxuTmFtZTogXCIgKyBnZXRGdW5jdGlvbk5hbWUoaGFuZGxlcikgKyBcIlxcbkVycm9yOiBcIiArIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgIH1cbn1cbi8qKiBKU0RvYyAqL1xuZnVuY3Rpb24gaW5zdHJ1bWVudENvbnNvbGUoKSB7XG4gICAgaWYgKCEoJ2NvbnNvbGUnIGluIGdsb2JhbCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBbJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvcicsICdsb2cnLCAnYXNzZXJ0J10uZm9yRWFjaChmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICAgICAgaWYgKCEobGV2ZWwgaW4gZ2xvYmFsLmNvbnNvbGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZmlsbChnbG9iYWwuY29uc29sZSwgbGV2ZWwsIGZ1bmN0aW9uIChvcmlnaW5hbENvbnNvbGVMZXZlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJpZ2dlckhhbmRsZXJzKCdjb25zb2xlJywgeyBhcmdzOiBhcmdzLCBsZXZlbDogbGV2ZWwgfSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBmYWlscyBmb3Igc29tZSBicm93c2Vycy4gOihcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxDb25zb2xlTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwob3JpZ2luYWxDb25zb2xlTGV2ZWwsIGdsb2JhbC5jb25zb2xlLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8qKiBKU0RvYyAqL1xuZnVuY3Rpb24gaW5zdHJ1bWVudEZldGNoKCkge1xuICAgIGlmICghc3VwcG9ydHNOYXRpdmVGZXRjaCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmlsbChnbG9iYWwsICdmZXRjaCcsIGZ1bmN0aW9uIChvcmlnaW5hbEZldGNoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY29tbW9uSGFuZGxlckRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYXJnczogYXJncyxcbiAgICAgICAgICAgICAgICBmZXRjaERhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBnZXRGZXRjaE1ldGhvZChhcmdzKSxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBnZXRGZXRjaFVybChhcmdzKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRyaWdnZXJIYW5kbGVycygnZmV0Y2gnLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBjb21tb25IYW5kbGVyRGF0YSkpO1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRmV0Y2guYXBwbHkoZ2xvYmFsLCBhcmdzKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRyaWdnZXJIYW5kbGVycygnZmV0Y2gnLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBjb21tb25IYW5kbGVyRGF0YSwgeyBlbmRUaW1lc3RhbXA6IERhdGUubm93KCksIHJlc3BvbnNlOiByZXNwb25zZSB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckhhbmRsZXJzKCdmZXRjaCcsIHRzbGliXzEuX19hc3NpZ24oe30sIGNvbW1vbkhhbmRsZXJEYXRhLCB7IGVuZFRpbWVzdGFtcDogRGF0ZS5ub3coKSwgZXJyb3I6IGVycm9yIH0pKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuLyoqIEV4dHJhY3QgYG1ldGhvZGAgZnJvbSBmZXRjaCBjYWxsIGFyZ3VtZW50cyAqL1xuZnVuY3Rpb24gZ2V0RmV0Y2hNZXRob2QoZmV0Y2hBcmdzKSB7XG4gICAgaWYgKGZldGNoQXJncyA9PT0gdm9pZCAwKSB7IGZldGNoQXJncyA9IFtdOyB9XG4gICAgaWYgKCdSZXF1ZXN0JyBpbiBnbG9iYWwgJiYgaXNJbnN0YW5jZU9mKGZldGNoQXJnc1swXSwgUmVxdWVzdCkgJiYgZmV0Y2hBcmdzWzBdLm1ldGhvZCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKGZldGNoQXJnc1swXS5tZXRob2QpLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGlmIChmZXRjaEFyZ3NbMV0gJiYgZmV0Y2hBcmdzWzFdLm1ldGhvZCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKGZldGNoQXJnc1sxXS5tZXRob2QpLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIHJldHVybiAnR0VUJztcbn1cbi8qKiBFeHRyYWN0IGB1cmxgIGZyb20gZmV0Y2ggY2FsbCBhcmd1bWVudHMgKi9cbmZ1bmN0aW9uIGdldEZldGNoVXJsKGZldGNoQXJncykge1xuICAgIGlmIChmZXRjaEFyZ3MgPT09IHZvaWQgMCkgeyBmZXRjaEFyZ3MgPSBbXTsgfVxuICAgIGlmICh0eXBlb2YgZmV0Y2hBcmdzWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZmV0Y2hBcmdzWzBdO1xuICAgIH1cbiAgICBpZiAoJ1JlcXVlc3QnIGluIGdsb2JhbCAmJiBpc0luc3RhbmNlT2YoZmV0Y2hBcmdzWzBdLCBSZXF1ZXN0KSkge1xuICAgICAgICByZXR1cm4gZmV0Y2hBcmdzWzBdLnVybDtcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhmZXRjaEFyZ3NbMF0pO1xufVxuLyoqIEpTRG9jICovXG5mdW5jdGlvbiBpbnN0cnVtZW50WEhSKCkge1xuICAgIGlmICghKCdYTUxIdHRwUmVxdWVzdCcgaW4gZ2xvYmFsKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB4aHJwcm90byA9IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZTtcbiAgICBmaWxsKHhocnByb3RvLCAnb3BlbicsIGZ1bmN0aW9uIChvcmlnaW5hbE9wZW4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1cmwgPSBhcmdzWzFdO1xuICAgICAgICAgICAgdGhpcy5fX3NlbnRyeV94aHJfXyA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IGlzU3RyaW5nKGFyZ3NbMF0pID8gYXJnc1swXS50b1VwcGVyQ2FzZSgpIDogYXJnc1swXSxcbiAgICAgICAgICAgICAgICB1cmw6IGFyZ3NbMV0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gaWYgU2VudHJ5IGtleSBhcHBlYXJzIGluIFVSTCwgZG9uJ3QgY2FwdHVyZSBpdCBhcyBhIHJlcXVlc3RcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyh1cmwpICYmIHRoaXMuX19zZW50cnlfeGhyX18ubWV0aG9kID09PSAnUE9TVCcgJiYgdXJsLm1hdGNoKC9zZW50cnlfa2V5LykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fc2VudHJ5X293bl9yZXF1ZXN0X18gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsT3Blbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICBmaWxsKHhocnByb3RvLCAnc2VuZCcsIGZ1bmN0aW9uIChvcmlnaW5hbFNlbmQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB4aHIgPSB0aGlzOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLXRoaXMtYXNzaWdubWVudFxuICAgICAgICAgICAgdmFyIGNvbW1vbkhhbmRsZXJEYXRhID0ge1xuICAgICAgICAgICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgeGhyOiB4aHIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJpZ2dlckhhbmRsZXJzKCd4aHInLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBjb21tb25IYW5kbGVyRGF0YSkpO1xuICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0b3VjaGluZyBzdGF0dXNDb2RlIGluIHNvbWUgcGxhdGZvcm1zIHRocm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW4gZXhjZXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLl9fc2VudHJ5X3hocl9fKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9fc2VudHJ5X3hocl9fLnN0YXR1c19jb2RlID0geGhyLnN0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogZG8gbm90aGluZyAqL1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJIYW5kbGVycygneGhyJywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgY29tbW9uSGFuZGxlckRhdGEsIHsgZW5kVGltZXN0YW1wOiBEYXRlLm5vdygpIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbFNlbmQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG52YXIgbGFzdEhyZWY7XG4vKiogSlNEb2MgKi9cbmZ1bmN0aW9uIGluc3RydW1lbnRIaXN0b3J5KCkge1xuICAgIGlmICghc3VwcG9ydHNIaXN0b3J5KCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgb2xkT25Qb3BTdGF0ZSA9IGdsb2JhbC5vbnBvcHN0YXRlO1xuICAgIGdsb2JhbC5vbnBvcHN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0byA9IGdsb2JhbC5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IFVSTCBzdGF0ZSwgYXMgd2UgYWx3YXlzIHJlY2VpdmUgb25seSB0aGUgdXBkYXRlZCBzdGF0ZVxuICAgICAgICB2YXIgZnJvbSA9IGxhc3RIcmVmO1xuICAgICAgICBsYXN0SHJlZiA9IHRvO1xuICAgICAgICB0cmlnZ2VySGFuZGxlcnMoJ2hpc3RvcnknLCB7XG4gICAgICAgICAgICBmcm9tOiBmcm9tLFxuICAgICAgICAgICAgdG86IHRvLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9sZE9uUG9wU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBvbGRPblBvcFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGZ1bmN0aW9uIGhpc3RvcnlSZXBsYWNlbWVudEZ1bmN0aW9uKG9yaWdpbmFsSGlzdG9yeUZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdXJsID0gYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICAvLyBjb2VyY2UgdG8gc3RyaW5nICh0aGlzIGlzIHdoYXQgcHVzaFN0YXRlIGRvZXMpXG4gICAgICAgICAgICAgICAgdmFyIGZyb20gPSBsYXN0SHJlZjtcbiAgICAgICAgICAgICAgICB2YXIgdG8gPSBTdHJpbmcodXJsKTtcbiAgICAgICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IFVSTCBzdGF0ZSwgYXMgd2UgYWx3YXlzIHJlY2VpdmUgb25seSB0aGUgdXBkYXRlZCBzdGF0ZVxuICAgICAgICAgICAgICAgIGxhc3RIcmVmID0gdG87XG4gICAgICAgICAgICAgICAgdHJpZ2dlckhhbmRsZXJzKCdoaXN0b3J5Jywge1xuICAgICAgICAgICAgICAgICAgICBmcm9tOiBmcm9tLFxuICAgICAgICAgICAgICAgICAgICB0bzogdG8sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxIaXN0b3J5RnVuY3Rpb24uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZpbGwoZ2xvYmFsLmhpc3RvcnksICdwdXNoU3RhdGUnLCBoaXN0b3J5UmVwbGFjZW1lbnRGdW5jdGlvbik7XG4gICAgZmlsbChnbG9iYWwuaGlzdG9yeSwgJ3JlcGxhY2VTdGF0ZScsIGhpc3RvcnlSZXBsYWNlbWVudEZ1bmN0aW9uKTtcbn1cbi8qKiBKU0RvYyAqL1xuZnVuY3Rpb24gaW5zdHJ1bWVudERPTSgpIHtcbiAgICBpZiAoISgnZG9jdW1lbnQnIGluIGdsb2JhbCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBDYXB0dXJlIGJyZWFkY3J1bWJzIGZyb20gYW55IGNsaWNrIHRoYXQgaXMgdW5oYW5kbGVkIC8gYnViYmxlZCB1cCBhbGwgdGhlIHdheVxuICAgIC8vIHRvIHRoZSBkb2N1bWVudC4gRG8gdGhpcyBiZWZvcmUgd2UgaW5zdHJ1bWVudCBhZGRFdmVudExpc3RlbmVyLlxuICAgIGdsb2JhbC5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvbUV2ZW50SGFuZGxlcignY2xpY2snLCB0cmlnZ2VySGFuZGxlcnMuYmluZChudWxsLCAnZG9tJykpLCBmYWxzZSk7XG4gICAgZ2xvYmFsLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywga2V5cHJlc3NFdmVudEhhbmRsZXIodHJpZ2dlckhhbmRsZXJzLmJpbmQobnVsbCwgJ2RvbScpKSwgZmFsc2UpO1xuICAgIC8vIEFmdGVyIGhvb2tpbmcgaW50byBkb2N1bWVudCBidWJibGVkIHVwIGNsaWNrIGFuZCBrZXlwcmVzc2VzIGV2ZW50cywgd2UgYWxzbyBob29rIGludG8gdXNlciBoYW5kbGVkIGNsaWNrICYga2V5cHJlc3Nlcy5cbiAgICBbJ0V2ZW50VGFyZ2V0JywgJ05vZGUnXS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIHByb3RvID0gZ2xvYmFsW3RhcmdldF0gJiYgZ2xvYmFsW3RhcmdldF0ucHJvdG90eXBlO1xuICAgICAgICBpZiAoIXByb3RvIHx8ICFwcm90by5oYXNPd25Qcm9wZXJ0eSB8fCAhcHJvdG8uaGFzT3duUHJvcGVydHkoJ2FkZEV2ZW50TGlzdGVuZXInKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZpbGwocHJvdG8sICdhZGRFdmVudExpc3RlbmVyJywgZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4sIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZm4gJiYgZm4uaGFuZGxlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbChmbiwgJ2hhbmRsZUV2ZW50JywgZnVuY3Rpb24gKGlubmVyT3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbUV2ZW50SGFuZGxlcignY2xpY2snLCB0cmlnZ2VySGFuZGxlcnMuYmluZChudWxsLCAnZG9tJykpKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlubmVyT3JpZ2luYWwuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09ICdrZXlwcmVzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGwoZm4sICdoYW5kbGVFdmVudCcsIGZ1bmN0aW9uIChpbm5lck9yaWdpbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlwcmVzc0V2ZW50SGFuZGxlcih0cmlnZ2VySGFuZGxlcnMuYmluZChudWxsLCAnZG9tJykpKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlubmVyT3JpZ2luYWwuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21FdmVudEhhbmRsZXIoJ2NsaWNrJywgdHJpZ2dlckhhbmRsZXJzLmJpbmQobnVsbCwgJ2RvbScpLCB0cnVlKSh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAna2V5cHJlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlwcmVzc0V2ZW50SGFuZGxlcih0cmlnZ2VySGFuZGxlcnMuYmluZChudWxsLCAnZG9tJykpKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbC5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgZm4sIG9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZpbGwocHJvdG8sICdyZW1vdmVFdmVudExpc3RlbmVyJywgZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4sIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBmbjtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrICYmIChjYWxsYmFjay5fX3NlbnRyeV93cmFwcGVkX18gfHwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmUsIGFjY2Vzc2luZyBfX3NlbnRyeV93cmFwcGVkX18gd2lsbCB0aHJvdyBpbiBzb21lIFNlbGVuaXVtIGVudmlyb25tZW50c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWwuY2FsbCh0aGlzLCBldmVudE5hbWUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxudmFyIGRlYm91bmNlRHVyYXRpb24gPSAxMDAwO1xudmFyIGRlYm91bmNlVGltZXIgPSAwO1xudmFyIGtleXByZXNzVGltZW91dDtcbnZhciBsYXN0Q2FwdHVyZWRFdmVudDtcbi8qKlxuICogV3JhcHMgYWRkRXZlbnRMaXN0ZW5lciB0byBjYXB0dXJlIFVJIGJyZWFkY3J1bWJzXG4gKiBAcGFyYW0gbmFtZSB0aGUgZXZlbnQgbmFtZSAoZS5nLiBcImNsaWNrXCIpXG4gKiBAcGFyYW0gaGFuZGxlciBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkXG4gKiBAcGFyYW0gZGVib3VuY2UgZGVjaWRlcyB3aGV0aGVyIGl0IHNob3VsZCB3YWl0IHRpbGwgYW5vdGhlciBldmVudCBsb29wXG4gKiBAcmV0dXJucyB3cmFwcGVkIGJyZWFkY3J1bWIgZXZlbnRzIGhhbmRsZXJcbiAqIEBoaWRkZW5cbiAqL1xuZnVuY3Rpb24gZG9tRXZlbnRIYW5kbGVyKG5hbWUsIGhhbmRsZXIsIGRlYm91bmNlKSB7XG4gICAgaWYgKGRlYm91bmNlID09PSB2b2lkIDApIHsgZGVib3VuY2UgPSBmYWxzZTsgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gcmVzZXQga2V5cHJlc3MgdGltZW91dDsgZS5nLiB0cmlnZ2VyaW5nIGEgJ2NsaWNrJyBhZnRlclxuICAgICAgICAvLyBhICdrZXlwcmVzcycgd2lsbCByZXNldCB0aGUga2V5cHJlc3MgZGVib3VuY2Ugc28gdGhhdCBhIG5ld1xuICAgICAgICAvLyBzZXQgb2Yga2V5cHJlc3NlcyBjYW4gYmUgcmVjb3JkZWRcbiAgICAgICAga2V5cHJlc3NUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoaXMgaGFuZGxlciBtaWdodCB0cmlnZ2VyIG11bHRpcGxlIHRpbWVzIGZvciB0aGUgc2FtZVxuICAgICAgICAvLyBldmVudCAoZS5nLiBldmVudCBwcm9wYWdhdGlvbiB0aHJvdWdoIG5vZGUgYW5jZXN0b3JzKS4gSWdub3JlIGlmIHdlJ3ZlXG4gICAgICAgIC8vIGFscmVhZHkgY2FwdHVyZWQgdGhlIGV2ZW50LlxuICAgICAgICBpZiAoIWV2ZW50IHx8IGxhc3RDYXB0dXJlZEV2ZW50ID09PSBldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RDYXB0dXJlZEV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIGlmIChkZWJvdW5jZVRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoZGVib3VuY2VUaW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlYm91bmNlKSB7XG4gICAgICAgICAgICBkZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcih7IGV2ZW50OiBldmVudCwgbmFtZTogbmFtZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGFuZGxlcih7IGV2ZW50OiBldmVudCwgbmFtZTogbmFtZSB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG4vKipcbiAqIFdyYXBzIGFkZEV2ZW50TGlzdGVuZXIgdG8gY2FwdHVyZSBrZXlwcmVzcyBVSSBldmVudHNcbiAqIEBwYXJhbSBoYW5kbGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWRcbiAqIEByZXR1cm5zIHdyYXBwZWQga2V5cHJlc3MgZXZlbnRzIGhhbmRsZXJcbiAqIEBoaWRkZW5cbiAqL1xuZnVuY3Rpb24ga2V5cHJlc3NFdmVudEhhbmRsZXIoaGFuZGxlcikge1xuICAgIC8vIFRPRE86IGlmIHNvbWVob3cgdXNlciBzd2l0Y2hlcyBrZXlwcmVzcyB0YXJnZXQgYmVmb3JlXG4gICAgLy8gICAgICAgZGVib3VuY2UgdGltZW91dCBpcyB0cmlnZ2VyZWQsIHdlIHdpbGwgb25seSBjYXB0dXJlXG4gICAgLy8gICAgICAgYSBzaW5nbGUgYnJlYWRjcnVtYiBmcm9tIHRoZSBGSVJTVCB0YXJnZXQgKGFjY2VwdGFibGU/KVxuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8ganVzdCBhY2Nlc3NpbmcgZXZlbnQgcHJvcGVydGllcyBjYW4gdGhyb3cgYW4gZXhjZXB0aW9uIGluIHNvbWUgcmFyZSBjaXJjdW1zdGFuY2VzXG4gICAgICAgICAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9nZXRzZW50cnkvcmF2ZW4tanMvaXNzdWVzLzgzOFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0YWdOYW1lID0gdGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lO1xuICAgICAgICAvLyBvbmx5IGNvbnNpZGVyIGtleXByZXNzIGV2ZW50cyBvbiBhY3R1YWwgaW5wdXQgZWxlbWVudHNcbiAgICAgICAgLy8gdGhpcyB3aWxsIGRpc3JlZ2FyZCBrZXlwcmVzc2VzIHRhcmdldGluZyBib2R5IChlLmcuIHRhYmJpbmdcbiAgICAgICAgLy8gdGhyb3VnaCBlbGVtZW50cywgaG90a2V5cywgZXRjKVxuICAgICAgICBpZiAoIXRhZ05hbWUgfHwgKHRhZ05hbWUgIT09ICdJTlBVVCcgJiYgdGFnTmFtZSAhPT0gJ1RFWFRBUkVBJyAmJiAhdGFyZ2V0LmlzQ29udGVudEVkaXRhYmxlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlY29yZCBmaXJzdCBrZXlwcmVzcyBpbiBhIHNlcmllcywgYnV0IGlnbm9yZSBzdWJzZXF1ZW50XG4gICAgICAgIC8vIGtleXByZXNzZXMgdW50aWwgZGVib3VuY2UgY2xlYXJzXG4gICAgICAgIGlmICgha2V5cHJlc3NUaW1lb3V0KSB7XG4gICAgICAgICAgICBkb21FdmVudEhhbmRsZXIoJ2lucHV0JywgaGFuZGxlcikoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyVGltZW91dChrZXlwcmVzc1RpbWVvdXQpO1xuICAgICAgICBrZXlwcmVzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGtleXByZXNzVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSwgZGVib3VuY2VEdXJhdGlvbik7XG4gICAgfTtcbn1cbnZhciBfb2xkT25FcnJvckhhbmRsZXIgPSBudWxsO1xuLyoqIEpTRG9jICovXG5mdW5jdGlvbiBpbnN0cnVtZW50RXJyb3IoKSB7XG4gICAgX29sZE9uRXJyb3JIYW5kbGVyID0gZ2xvYmFsLm9uZXJyb3I7XG4gICAgZ2xvYmFsLm9uZXJyb3IgPSBmdW5jdGlvbiAobXNnLCB1cmwsIGxpbmUsIGNvbHVtbiwgZXJyb3IpIHtcbiAgICAgICAgdHJpZ2dlckhhbmRsZXJzKCdlcnJvcicsIHtcbiAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgbGluZTogbGluZSxcbiAgICAgICAgICAgIG1zZzogbXNnLFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoX29sZE9uRXJyb3JIYW5kbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gX29sZE9uRXJyb3JIYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59XG52YXIgX29sZE9uVW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlciA9IG51bGw7XG4vKiogSlNEb2MgKi9cbmZ1bmN0aW9uIGluc3RydW1lbnRVbmhhbmRsZWRSZWplY3Rpb24oKSB7XG4gICAgX29sZE9uVW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbjtcbiAgICBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0cmlnZ2VySGFuZGxlcnMoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGUpO1xuICAgICAgICBpZiAoX29sZE9uVW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIF9vbGRPblVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5zdHJ1bWVudC5qcy5tYXAiLCIvKipcbiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBvbmUgb2YgYSBmZXcgRXJyb3Igb3IgRXJyb3ItbGlrZVxuICoge0BsaW5rIGlzRXJyb3J9LlxuICpcbiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLlxuICogQHJldHVybnMgQSBib29sZWFuIHJlcHJlc2VudGluZyB0aGUgcmVzdWx0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFcnJvcih3YXQpIHtcbiAgICBzd2l0Y2ggKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3YXQpKSB7XG4gICAgICAgIGNhc2UgJ1tvYmplY3QgRXJyb3JdJzpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlICdbb2JqZWN0IEV4Y2VwdGlvbl0nOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGNhc2UgJ1tvYmplY3QgRE9NRXhjZXB0aW9uXSc6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBpc0luc3RhbmNlT2Yod2F0LCBFcnJvcik7XG4gICAgfVxufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBnaXZlbiB2YWx1ZSdzIHR5cGUgaXMgRXJyb3JFdmVudFxuICoge0BsaW5rIGlzRXJyb3JFdmVudH0uXG4gKlxuICogQHBhcmFtIHdhdCBBIHZhbHVlIHRvIGJlIGNoZWNrZWQuXG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Vycm9yRXZlbnQod2F0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3YXQpID09PSAnW29iamVjdCBFcnJvckV2ZW50XSc7XG59XG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBET01FcnJvclxuICoge0BsaW5rIGlzRE9NRXJyb3J9LlxuICpcbiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLlxuICogQHJldHVybnMgQSBib29sZWFuIHJlcHJlc2VudGluZyB0aGUgcmVzdWx0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNET01FcnJvcih3YXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdhdCkgPT09ICdbb2JqZWN0IERPTUVycm9yXSc7XG59XG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBET01FeGNlcHRpb25cbiAqIHtAbGluayBpc0RPTUV4Y2VwdGlvbn0uXG4gKlxuICogQHBhcmFtIHdhdCBBIHZhbHVlIHRvIGJlIGNoZWNrZWQuXG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RPTUV4Y2VwdGlvbih3YXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdhdCkgPT09ICdbb2JqZWN0IERPTUV4Y2VwdGlvbl0nO1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBnaXZlbiB2YWx1ZSdzIHR5cGUgaXMgYSBzdHJpbmdcbiAqIHtAbGluayBpc1N0cmluZ30uXG4gKlxuICogQHBhcmFtIHdhdCBBIHZhbHVlIHRvIGJlIGNoZWNrZWQuXG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyh3YXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdhdCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBnaXZlbiB2YWx1ZSdzIGlzIGEgcHJpbWl0aXZlICh1bmRlZmluZWQsIG51bGwsIG51bWJlciwgYm9vbGVhbiwgc3RyaW5nKVxuICoge0BsaW5rIGlzUHJpbWl0aXZlfS5cbiAqXG4gKiBAcGFyYW0gd2F0IEEgdmFsdWUgdG8gYmUgY2hlY2tlZC5cbiAqIEByZXR1cm5zIEEgYm9vbGVhbiByZXByZXNlbnRpbmcgdGhlIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHdhdCkge1xuICAgIHJldHVybiB3YXQgPT09IG51bGwgfHwgKHR5cGVvZiB3YXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB3YXQgIT09ICdmdW5jdGlvbicpO1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBnaXZlbiB2YWx1ZSdzIHR5cGUgaXMgYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHtAbGluayBpc1BsYWluT2JqZWN0fS5cbiAqXG4gKiBAcGFyYW0gd2F0IEEgdmFsdWUgdG8gYmUgY2hlY2tlZC5cbiAqIEByZXR1cm5zIEEgYm9vbGVhbiByZXByZXNlbnRpbmcgdGhlIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qod2F0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3YXQpID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgZ2l2ZW4gdmFsdWUncyB0eXBlIGlzIGFuIEV2ZW50IGluc3RhbmNlXG4gKiB7QGxpbmsgaXNFdmVudH0uXG4gKlxuICogQHBhcmFtIHdhdCBBIHZhbHVlIHRvIGJlIGNoZWNrZWQuXG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0V2ZW50KHdhdCkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpzdHJpY3QtdHlwZS1wcmVkaWNhdGVzXG4gICAgcmV0dXJuIHR5cGVvZiBFdmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNJbnN0YW5jZU9mKHdhdCwgRXZlbnQpO1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBnaXZlbiB2YWx1ZSdzIHR5cGUgaXMgYW4gRWxlbWVudCBpbnN0YW5jZVxuICoge0BsaW5rIGlzRWxlbWVudH0uXG4gKlxuICogQHBhcmFtIHdhdCBBIHZhbHVlIHRvIGJlIGNoZWNrZWQuXG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnQod2F0KSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnN0cmljdC10eXBlLXByZWRpY2F0ZXNcbiAgICByZXR1cm4gdHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGlzSW5zdGFuY2VPZih3YXQsIEVsZW1lbnQpO1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBnaXZlbiB2YWx1ZSdzIHR5cGUgaXMgYW4gcmVnZXhwXG4gKiB7QGxpbmsgaXNSZWdFeHB9LlxuICpcbiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLlxuICogQHJldHVybnMgQSBib29sZWFuIHJlcHJlc2VudGluZyB0aGUgcmVzdWx0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNSZWdFeHAod2F0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3YXQpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgZ2l2ZW4gdmFsdWUgaGFzIGEgdGhlbiBmdW5jdGlvbi5cbiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUaGVuYWJsZSh3YXQpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby11bnNhZmUtYW55XG4gICAgcmV0dXJuIEJvb2xlYW4od2F0ICYmIHdhdC50aGVuICYmIHR5cGVvZiB3YXQudGhlbiA9PT0gJ2Z1bmN0aW9uJyk7XG4gICAgLy8gdHNsaW50OmVuYWJsZTpuby11bnNhZmUtYW55XG59XG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBhIFN5bnRoZXRpY0V2ZW50XG4gKiB7QGxpbmsgaXNTeW50aGV0aWNFdmVudH0uXG4gKlxuICogQHBhcmFtIHdhdCBBIHZhbHVlIHRvIGJlIGNoZWNrZWQuXG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N5bnRoZXRpY0V2ZW50KHdhdCkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnNhZmUtYW55XG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3Qod2F0KSAmJiAnbmF0aXZlRXZlbnQnIGluIHdhdCAmJiAncHJldmVudERlZmF1bHQnIGluIHdhdCAmJiAnc3RvcFByb3BhZ2F0aW9uJyBpbiB3YXQ7XG59XG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBhbiBpbnN0YW5jZSBvZiBwcm92aWRlZCBjb25zdHJ1Y3Rvci5cbiAqIHtAbGluayBpc0luc3RhbmNlT2Z9LlxuICpcbiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLlxuICogQHBhcmFtIGJhc2UgQSBjb25zdHJ1Y3RvciB0byBiZSB1c2VkIGluIGEgY2hlY2suXG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0luc3RhbmNlT2Yod2F0LCBiYXNlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVuc2FmZS1hbnlcbiAgICAgICAgcmV0dXJuIHdhdCBpbnN0YW5jZW9mIGJhc2U7XG4gICAgfVxuICAgIGNhdGNoIChfZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMuanMubWFwIiwiaW1wb3J0IHsgY29uc29sZVNhbmRib3gsIGdldEdsb2JhbE9iamVjdCB9IGZyb20gJy4vbWlzYyc7XG4vLyBUT0RPOiBJbXBsZW1lbnQgZGlmZmVyZW50IGxvZ2dlcnMgZm9yIGRpZmZlcmVudCBlbnZpcm9ubWVudHNcbnZhciBnbG9iYWwgPSBnZXRHbG9iYWxPYmplY3QoKTtcbi8qKiBQcmVmaXggZm9yIGxvZ2dpbmcgc3RyaW5ncyAqL1xudmFyIFBSRUZJWCA9ICdTZW50cnkgTG9nZ2VyICc7XG4vKiogSlNEb2MgKi9cbnZhciBMb2dnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEpTRG9jICovXG4gICAgZnVuY3Rpb24gTG9nZ2VyKCkge1xuICAgICAgICB0aGlzLl9lbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKiBKU0RvYyAqL1xuICAgIExvZ2dlci5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZW5hYmxlZCA9IGZhbHNlO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgTG9nZ2VyLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2VuYWJsZWQgPSB0cnVlO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgTG9nZ2VyLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZVNhbmRib3goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZ2xvYmFsLmNvbnNvbGUubG9nKFBSRUZJWCArIFwiW0xvZ106IFwiICsgYXJncy5qb2luKCcgJykpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKiogSlNEb2MgKi9cbiAgICBMb2dnZXIucHJvdG90eXBlLndhcm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZVNhbmRib3goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZ2xvYmFsLmNvbnNvbGUud2FybihQUkVGSVggKyBcIltXYXJuXTogXCIgKyBhcmdzLmpvaW4oJyAnKSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tY29uc29sZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIExvZ2dlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZVNhbmRib3goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZ2xvYmFsLmNvbnNvbGUuZXJyb3IoUFJFRklYICsgXCJbRXJyb3JdOiBcIiArIGFyZ3Muam9pbignICcpKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1jb25zb2xlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIExvZ2dlcjtcbn0oKSk7XG4vLyBFbnN1cmUgd2Ugb25seSBoYXZlIGEgc2luZ2xlIGxvZ2dlciBpbnN0YW5jZSwgZXZlbiBpZiBtdWx0aXBsZSB2ZXJzaW9ucyBvZiBAc2VudHJ5L3V0aWxzIGFyZSBiZWluZyB1c2VkXG5nbG9iYWwuX19TRU5UUllfXyA9IGdsb2JhbC5fX1NFTlRSWV9fIHx8IHt9O1xudmFyIGxvZ2dlciA9IGdsb2JhbC5fX1NFTlRSWV9fLmxvZ2dlciB8fCAoZ2xvYmFsLl9fU0VOVFJZX18ubG9nZ2VyID0gbmV3IExvZ2dlcigpKTtcbmV4cG9ydCB7IGxvZ2dlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9nZ2VyLmpzLm1hcCIsIi8vIHRzbGludDpkaXNhYmxlOm5vLXVuc2FmZS1hbnlcbi8qKlxuICogTWVtbyBjbGFzcyB1c2VkIGZvciBkZWN5Y2xlIGpzb24gb2JqZWN0cy4gVXNlcyBXZWFrU2V0IGlmIGF2YWlsYWJsZSBvdGhlcndpc2UgYXJyYXkuXG4gKi9cbnZhciBNZW1vID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1lbW8oKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB0aGlzLl9oYXNXZWFrU2V0ID0gdHlwZW9mIFdlYWtTZXQgPT09ICdmdW5jdGlvbic7XG4gICAgICAgIHRoaXMuX2lubmVyID0gdGhpcy5faGFzV2Vha1NldCA/IG5ldyBXZWFrU2V0KCkgOiBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBvYmogdG8gcmVtZW1iZXIuXG4gICAgICogQHBhcmFtIG9iaiBPYmplY3QgdG8gcmVtZW1iZXJcbiAgICAgKi9cbiAgICBNZW1vLnByb3RvdHlwZS5tZW1vaXplID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAodGhpcy5faGFzV2Vha1NldCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lubmVyLmhhcyhvYmopKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pbm5lci5hZGQob2JqKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2lubmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLl9pbm5lcltpXTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gb2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5uZXIucHVzaChvYmopO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIG9iamVjdCBmcm9tIGludGVybmFsIHN0b3JhZ2UuXG4gICAgICogQHBhcmFtIG9iaiBPYmplY3QgdG8gZm9yZ2V0XG4gICAgICovXG4gICAgTWVtby5wcm90b3R5cGUudW5tZW1vaXplID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAodGhpcy5faGFzV2Vha1NldCkge1xuICAgICAgICAgICAgdGhpcy5faW5uZXIuZGVsZXRlKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2lubmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lubmVyW2ldID09PSBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5uZXIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNZW1vO1xufSgpKTtcbmV4cG9ydCB7IE1lbW8gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lbW8uanMubWFwIiwiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL2lzJztcbmltcG9ydCB7IHNuaXBMaW5lIH0gZnJvbSAnLi9zdHJpbmcnO1xuLyoqXG4gKiBSZXF1aXJlcyBhIG1vZHVsZSB3aGljaCBpcyBwcm90ZWN0ZWQgYWdhaW5zdCBidW5kbGVyIG1pbmlmaWNhdGlvbi5cbiAqXG4gKiBAcGFyYW0gcmVxdWVzdCBUaGUgbW9kdWxlIHBhdGggdG8gcmVzb2x2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZHluYW1pY1JlcXVpcmUobW9kLCByZXF1ZXN0KSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnNhZmUtYW55XG4gICAgcmV0dXJuIG1vZC5yZXF1aXJlKHJlcXVlc3QpO1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB3ZSdyZSBpbiB0aGUgTm9kZS5qcyBvciBCcm93c2VyIGVudmlyb25tZW50XG4gKlxuICogQHJldHVybnMgQW5zd2VyIHRvIGdpdmVuIHF1ZXN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVFbnYoKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGU6c3RyaWN0LXR5cGUtcHJlZGljYXRlc1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnID8gcHJvY2VzcyA6IDApID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG59XG52YXIgZmFsbGJhY2tHbG9iYWxPYmplY3QgPSB7fTtcbi8qKlxuICogU2FmZWx5IGdldCBnbG9iYWwgc2NvcGUgb2JqZWN0XG4gKlxuICogQHJldHVybnMgR2xvYmFsIHNjb3BlIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsT2JqZWN0KCkge1xuICAgIHJldHVybiAoaXNOb2RlRW52KClcbiAgICAgICAgPyBnbG9iYWxcbiAgICAgICAgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyB3aW5kb3dcbiAgICAgICAgICAgIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgPyBzZWxmXG4gICAgICAgICAgICAgICAgOiBmYWxsYmFja0dsb2JhbE9iamVjdCk7XG59XG4vKipcbiAqIFVVSUQ0IGdlbmVyYXRvclxuICpcbiAqIEByZXR1cm5zIHN0cmluZyBHZW5lcmF0ZWQgVVVJRDQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1dWlkNCgpIHtcbiAgICB2YXIgZ2xvYmFsID0gZ2V0R2xvYmFsT2JqZWN0KCk7XG4gICAgdmFyIGNyeXB0byA9IGdsb2JhbC5jcnlwdG8gfHwgZ2xvYmFsLm1zQ3J5cHRvO1xuICAgIGlmICghKGNyeXB0byA9PT0gdm9pZCAwKSAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIC8vIFVzZSB3aW5kb3cuY3J5cHRvIEFQSSBpZiBhdmFpbGFibGVcbiAgICAgICAgdmFyIGFyciA9IG5ldyBVaW50MTZBcnJheSg4KTtcbiAgICAgICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhhcnIpO1xuICAgICAgICAvLyBzZXQgNCBpbiBieXRlIDdcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYXJyWzNdID0gKGFyclszXSAmIDB4ZmZmKSB8IDB4NDAwMDtcbiAgICAgICAgLy8gc2V0IDIgbW9zdCBzaWduaWZpY2FudCBiaXRzIG9mIGJ5dGUgOSB0byAnMTAnXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFycls0XSA9IChhcnJbNF0gJiAweDNmZmYpIHwgMHg4MDAwO1xuICAgICAgICB2YXIgcGFkID0gZnVuY3Rpb24gKG51bSkge1xuICAgICAgICAgICAgdmFyIHYgPSBudW0udG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgd2hpbGUgKHYubGVuZ3RoIDwgNCkge1xuICAgICAgICAgICAgICAgIHYgPSBcIjBcIiArIHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChwYWQoYXJyWzBdKSArIHBhZChhcnJbMV0pICsgcGFkKGFyclsyXSkgKyBwYWQoYXJyWzNdKSArIHBhZChhcnJbNF0pICsgcGFkKGFycls1XSkgKyBwYWQoYXJyWzZdKSArIHBhZChhcnJbN10pKTtcbiAgICB9XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvaG93LXRvLWNyZWF0ZS1hLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0LzIxMTc1MjMjMjExNzUyM1xuICAgIHJldHVybiAneHh4eHh4eHh4eHh4NHh4eHl4eHh4eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgdmFyIHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDA7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIHZhciB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xufVxuLyoqXG4gKiBQYXJzZXMgc3RyaW5nIGZvcm0gb2YgVVJMIGludG8gYW4gb2JqZWN0XG4gKiAvLyBib3Jyb3dlZCBmcm9tIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I2FwcGVuZGl4LUJcbiAqIC8vIGludGVudGlvbmFsbHkgdXNpbmcgcmVnZXggYW5kIG5vdCA8YS8+IGhyZWYgcGFyc2luZyB0cmljayBiZWNhdXNlIFJlYWN0IE5hdGl2ZSBhbmQgb3RoZXJcbiAqIC8vIGVudmlyb25tZW50cyB3aGVyZSBET00gbWlnaHQgbm90IGJlIGF2YWlsYWJsZVxuICogQHJldHVybnMgcGFyc2VkIFVSTCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVXJsKHVybCkge1xuICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgdmFyIG1hdGNoID0gdXJsLm1hdGNoKC9eKChbXjpcXC8/I10rKTopPyhcXC9cXC8oW15cXC8/I10qKSk/KFtePyNdKikoXFw/KFteI10qKSk/KCMoLiopKT8kLyk7XG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIC8vIGNvZXJjZSB0byB1bmRlZmluZWQgdmFsdWVzIHRvIGVtcHR5IHN0cmluZyBzbyB3ZSBkb24ndCBnZXQgJ3VuZGVmaW5lZCdcbiAgICB2YXIgcXVlcnkgPSBtYXRjaFs2XSB8fCAnJztcbiAgICB2YXIgZnJhZ21lbnQgPSBtYXRjaFs4XSB8fCAnJztcbiAgICByZXR1cm4ge1xuICAgICAgICBob3N0OiBtYXRjaFs0XSxcbiAgICAgICAgcGF0aDogbWF0Y2hbNV0sXG4gICAgICAgIHByb3RvY29sOiBtYXRjaFsyXSxcbiAgICAgICAgcmVsYXRpdmU6IG1hdGNoWzVdICsgcXVlcnkgKyBmcmFnbWVudCxcbiAgICB9O1xufVxuLyoqXG4gKiBFeHRyYWN0cyBlaXRoZXIgbWVzc2FnZSBvciB0eXBlK3ZhbHVlIGZyb20gYW4gZXZlbnQgdGhhdCBjYW4gYmUgdXNlZCBmb3IgdXNlci1mYWNpbmcgbG9nc1xuICogQHJldHVybnMgZXZlbnQncyBkZXNjcmlwdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXZlbnREZXNjcmlwdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5tZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBldmVudC5tZXNzYWdlO1xuICAgIH1cbiAgICBpZiAoZXZlbnQuZXhjZXB0aW9uICYmIGV2ZW50LmV4Y2VwdGlvbi52YWx1ZXMgJiYgZXZlbnQuZXhjZXB0aW9uLnZhbHVlc1swXSkge1xuICAgICAgICB2YXIgZXhjZXB0aW9uID0gZXZlbnQuZXhjZXB0aW9uLnZhbHVlc1swXTtcbiAgICAgICAgaWYgKGV4Y2VwdGlvbi50eXBlICYmIGV4Y2VwdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGV4Y2VwdGlvbi50eXBlICsgXCI6IFwiICsgZXhjZXB0aW9uLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleGNlcHRpb24udHlwZSB8fCBleGNlcHRpb24udmFsdWUgfHwgZXZlbnQuZXZlbnRfaWQgfHwgJzx1bmtub3duPic7XG4gICAgfVxuICAgIHJldHVybiBldmVudC5ldmVudF9pZCB8fCAnPHVua25vd24+Jztcbn1cbi8qKiBKU0RvYyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnNvbGVTYW5kYm94KGNhbGxiYWNrKSB7XG4gICAgdmFyIGdsb2JhbCA9IGdldEdsb2JhbE9iamVjdCgpO1xuICAgIHZhciBsZXZlbHMgPSBbJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvcicsICdsb2cnLCAnYXNzZXJ0J107XG4gICAgaWYgKCEoJ2NvbnNvbGUnIGluIGdsb2JhbCkpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHZhciBvcmlnaW5hbENvbnNvbGUgPSBnbG9iYWwuY29uc29sZTtcbiAgICB2YXIgd3JhcHBlZExldmVscyA9IHt9O1xuICAgIC8vIFJlc3RvcmUgYWxsIHdyYXBwZWQgY29uc29sZSBtZXRob2RzXG4gICAgbGV2ZWxzLmZvckVhY2goZnVuY3Rpb24gKGxldmVsKSB7XG4gICAgICAgIGlmIChsZXZlbCBpbiBnbG9iYWwuY29uc29sZSAmJiBvcmlnaW5hbENvbnNvbGVbbGV2ZWxdLl9fc2VudHJ5X29yaWdpbmFsX18pIHtcbiAgICAgICAgICAgIHdyYXBwZWRMZXZlbHNbbGV2ZWxdID0gb3JpZ2luYWxDb25zb2xlW2xldmVsXTtcbiAgICAgICAgICAgIG9yaWdpbmFsQ29uc29sZVtsZXZlbF0gPSBvcmlnaW5hbENvbnNvbGVbbGV2ZWxdLl9fc2VudHJ5X29yaWdpbmFsX187XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBQZXJmb3JtIGNhbGxiYWNrIG1hbmlwdWxhdGlvbnNcbiAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2soKTtcbiAgICAvLyBSZXZlcnQgcmVzdG9yYXRpb24gdG8gd3JhcHBlZCBzdGF0ZVxuICAgIE9iamVjdC5rZXlzKHdyYXBwZWRMZXZlbHMpLmZvckVhY2goZnVuY3Rpb24gKGxldmVsKSB7XG4gICAgICAgIG9yaWdpbmFsQ29uc29sZVtsZXZlbF0gPSB3cmFwcGVkTGV2ZWxzW2xldmVsXTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBBZGRzIGV4Y2VwdGlvbiB2YWx1ZXMsIHR5cGUgYW5kIHZhbHVlIHRvIGFuIHN5bnRoZXRpYyBFeGNlcHRpb24uXG4gKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB2YWx1ZSBWYWx1ZSBvZiB0aGUgZXhjZXB0aW9uLlxuICogQHBhcmFtIHR5cGUgVHlwZSBvZiB0aGUgZXhjZXB0aW9uLlxuICogQGhpZGRlblxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRXhjZXB0aW9uVHlwZVZhbHVlKGV2ZW50LCB2YWx1ZSwgdHlwZSkge1xuICAgIGV2ZW50LmV4Y2VwdGlvbiA9IGV2ZW50LmV4Y2VwdGlvbiB8fCB7fTtcbiAgICBldmVudC5leGNlcHRpb24udmFsdWVzID0gZXZlbnQuZXhjZXB0aW9uLnZhbHVlcyB8fCBbXTtcbiAgICBldmVudC5leGNlcHRpb24udmFsdWVzWzBdID0gZXZlbnQuZXhjZXB0aW9uLnZhbHVlc1swXSB8fCB7fTtcbiAgICBldmVudC5leGNlcHRpb24udmFsdWVzWzBdLnZhbHVlID0gZXZlbnQuZXhjZXB0aW9uLnZhbHVlc1swXS52YWx1ZSB8fCB2YWx1ZSB8fCAnJztcbiAgICBldmVudC5leGNlcHRpb24udmFsdWVzWzBdLnR5cGUgPSBldmVudC5leGNlcHRpb24udmFsdWVzWzBdLnR5cGUgfHwgdHlwZSB8fCAnRXJyb3InO1xufVxuLyoqXG4gKiBBZGRzIGV4Y2VwdGlvbiBtZWNoYW5pc20gdG8gYSBnaXZlbiBldmVudC5cbiAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgdG8gbW9kaWZ5LlxuICogQHBhcmFtIG1lY2hhbmlzbSBNZWNoYW5pc20gb2YgdGhlIG1lY2hhbmlzbS5cbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEV4Y2VwdGlvbk1lY2hhbmlzbShldmVudCwgbWVjaGFuaXNtKSB7XG4gICAgaWYgKG1lY2hhbmlzbSA9PT0gdm9pZCAwKSB7IG1lY2hhbmlzbSA9IHt9OyB9XG4gICAgLy8gVE9ETzogVXNlIHJlYWwgdHlwZSB3aXRoIGBrZXlvZiBNZWNoYW5pc21gIHRoaW5neSBhbmQgbWF5YmUgbWFrZSBpdCBiZXR0ZXI/XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgZXZlbnQuZXhjZXB0aW9uLnZhbHVlc1swXS5tZWNoYW5pc20gPSBldmVudC5leGNlcHRpb24udmFsdWVzWzBdLm1lY2hhbmlzbSB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMobWVjaGFuaXNtKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGV2ZW50LmV4Y2VwdGlvbi52YWx1ZXNbMF0ubWVjaGFuaXNtW2tleV0gPSBtZWNoYW5pc21ba2V5XTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChfb08pIHtcbiAgICAgICAgLy8gbm8tZW1wdHlcbiAgICB9XG59XG4vKipcbiAqIEEgc2FmZSBmb3JtIG9mIGxvY2F0aW9uLmhyZWZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uSHJlZigpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcbiAgICB9XG4gICAgY2F0Y2ggKG9PKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG4vKipcbiAqIEdpdmVuIGEgY2hpbGQgRE9NIGVsZW1lbnQsIHJldHVybnMgYSBxdWVyeS1zZWxlY3RvciBzdGF0ZW1lbnQgZGVzY3JpYmluZyB0aGF0XG4gKiBhbmQgaXRzIGFuY2VzdG9yc1xuICogZS5nLiBbSFRNTEVsZW1lbnRdID0+IGJvZHkgPiBkaXYgPiBpbnB1dCNmb28uYnRuW25hbWU9YmF6XVxuICogQHJldHVybnMgZ2VuZXJhdGVkIERPTSBwYXRoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBodG1sVHJlZUFzU3RyaW5nKGVsZW0pIHtcbiAgICAvLyB0cnkvY2F0Y2ggYm90aDpcbiAgICAvLyAtIGFjY2Vzc2luZyBldmVudC50YXJnZXQgKHNlZSBnZXRzZW50cnkvcmF2ZW4tanMjODM4LCAjNzY4KVxuICAgIC8vIC0gYGh0bWxUcmVlQXNTdHJpbmdgIGJlY2F1c2UgaXQncyBjb21wbGV4LCBhbmQganVzdCBhY2Nlc3NpbmcgdGhlIERPTSBpbmNvcnJlY3RseVxuICAgIC8vIC0gY2FuIHRocm93IGFuIGV4Y2VwdGlvbiBpbiBzb21lIGNpcmN1bXN0YW5jZXMuXG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGN1cnJlbnRFbGVtID0gZWxlbTtcbiAgICAgICAgdmFyIE1BWF9UUkFWRVJTRV9IRUlHSFQgPSA1O1xuICAgICAgICB2YXIgTUFYX09VVFBVVF9MRU4gPSA4MDtcbiAgICAgICAgdmFyIG91dCA9IFtdO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gMDtcbiAgICAgICAgdmFyIGxlbiA9IDA7XG4gICAgICAgIHZhciBzZXBhcmF0b3IgPSAnID4gJztcbiAgICAgICAgdmFyIHNlcExlbmd0aCA9IHNlcGFyYXRvci5sZW5ndGg7XG4gICAgICAgIHZhciBuZXh0U3RyID0gdm9pZCAwO1xuICAgICAgICB3aGlsZSAoY3VycmVudEVsZW0gJiYgaGVpZ2h0KysgPCBNQVhfVFJBVkVSU0VfSEVJR0hUKSB7XG4gICAgICAgICAgICBuZXh0U3RyID0gX2h0bWxFbGVtZW50QXNTdHJpbmcoY3VycmVudEVsZW0pO1xuICAgICAgICAgICAgLy8gYmFpbCBvdXQgaWZcbiAgICAgICAgICAgIC8vIC0gbmV4dFN0ciBpcyB0aGUgJ2h0bWwnIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIC0gdGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nIHRoYXQgd291bGQgYmUgY3JlYXRlZCBleGNlZWRzIE1BWF9PVVRQVVRfTEVOXG4gICAgICAgICAgICAvLyAgIChpZ25vcmUgdGhpcyBsaW1pdCBpZiB3ZSBhcmUgb24gdGhlIGZpcnN0IGl0ZXJhdGlvbilcbiAgICAgICAgICAgIGlmIChuZXh0U3RyID09PSAnaHRtbCcgfHwgKGhlaWdodCA+IDEgJiYgbGVuICsgb3V0Lmxlbmd0aCAqIHNlcExlbmd0aCArIG5leHRTdHIubGVuZ3RoID49IE1BWF9PVVRQVVRfTEVOKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0LnB1c2gobmV4dFN0cik7XG4gICAgICAgICAgICBsZW4gKz0gbmV4dFN0ci5sZW5ndGg7XG4gICAgICAgICAgICBjdXJyZW50RWxlbSA9IGN1cnJlbnRFbGVtLnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dC5yZXZlcnNlKCkuam9pbihzZXBhcmF0b3IpO1xuICAgIH1cbiAgICBjYXRjaCAoX29PKSB7XG4gICAgICAgIHJldHVybiAnPHVua25vd24+JztcbiAgICB9XG59XG4vKipcbiAqIFJldHVybnMgYSBzaW1wbGUsIHF1ZXJ5LXNlbGVjdG9yIHJlcHJlc2VudGF0aW9uIG9mIGEgRE9NIGVsZW1lbnRcbiAqIGUuZy4gW0hUTUxFbGVtZW50XSA9PiBpbnB1dCNmb28uYnRuW25hbWU9YmF6XVxuICogQHJldHVybnMgZ2VuZXJhdGVkIERPTSBwYXRoXG4gKi9cbmZ1bmN0aW9uIF9odG1sRWxlbWVudEFzU3RyaW5nKGVsKSB7XG4gICAgdmFyIGVsZW0gPSBlbDtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgdmFyIGNsYXNzTmFtZTtcbiAgICB2YXIgY2xhc3NlcztcbiAgICB2YXIga2V5O1xuICAgIHZhciBhdHRyO1xuICAgIHZhciBpO1xuICAgIGlmICghZWxlbSB8fCAhZWxlbS50YWdOYW1lKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgb3V0LnB1c2goZWxlbS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmIChlbGVtLmlkKSB7XG4gICAgICAgIG91dC5wdXNoKFwiI1wiICsgZWxlbS5pZCk7XG4gICAgfVxuICAgIGNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lO1xuICAgIGlmIChjbGFzc05hbWUgJiYgaXNTdHJpbmcoY2xhc3NOYW1lKSkge1xuICAgICAgICBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvdXQucHVzaChcIi5cIiArIGNsYXNzZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBhdHRyV2hpdGVsaXN0ID0gWyd0eXBlJywgJ25hbWUnLCAndGl0bGUnLCAnYWx0J107XG4gICAgZm9yIChpID0gMDsgaSA8IGF0dHJXaGl0ZWxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAga2V5ID0gYXR0cldoaXRlbGlzdFtpXTtcbiAgICAgICAgYXR0ciA9IGVsZW0uZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgICAgICBvdXQucHVzaChcIltcIiArIGtleSArIFwiPVxcXCJcIiArIGF0dHIgKyBcIlxcXCJdXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQuam9pbignJyk7XG59XG52YXIgSU5JVElBTF9USU1FID0gRGF0ZS5ub3coKTtcbnZhciBwcmV2Tm93ID0gMDtcbnZhciBwZXJmb3JtYW5jZUZhbGxiYWNrID0ge1xuICAgIG5vdzogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKSAtIElOSVRJQUxfVElNRTtcbiAgICAgICAgaWYgKG5vdyA8IHByZXZOb3cpIHtcbiAgICAgICAgICAgIG5vdyA9IHByZXZOb3c7XG4gICAgICAgIH1cbiAgICAgICAgcHJldk5vdyA9IG5vdztcbiAgICAgICAgcmV0dXJuIG5vdztcbiAgICB9LFxuICAgIHRpbWVPcmlnaW46IElOSVRJQUxfVElNRSxcbn07XG5leHBvcnQgdmFyIGNyb3NzUGxhdGZvcm1QZXJmb3JtYW5jZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzTm9kZUVudigpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcGVyZkhvb2tzID0gZHluYW1pY1JlcXVpcmUobW9kdWxlLCAncGVyZl9ob29rcycpO1xuICAgICAgICAgICAgcmV0dXJuIHBlcmZIb29rcy5wZXJmb3JtYW5jZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlRmFsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGdldEdsb2JhbE9iamVjdCgpLnBlcmZvcm1hbmNlKSB7XG4gICAgICAgIC8vIFBvbHlmaWxsIGZvciBwZXJmb3JtYW5jZS50aW1lT3JpZ2luLlxuICAgICAgICAvL1xuICAgICAgICAvLyBXaGlsZSBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0IGlzIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgcGVyZm9ybWFuY2UudGltZU9yaWdpbiwgcGVyZm9ybWFuY2UudGltZU9yaWdpblxuICAgICAgICAvLyBpcyBub3QgYXMgd2lkZWx5IHN1cHBvcnRlZC4gTmFtZWx5LCBwZXJmb3JtYW5jZS50aW1lT3JpZ2luIGlzIHVuZGVmaW5lZCBpbiBTYWZhcmkgYXMgb2Ygd3JpdGluZy5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnN0cmljdC10eXBlLXByZWRpY2F0ZXNcbiAgICAgICAgaWYgKHBlcmZvcm1hbmNlLnRpbWVPcmlnaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gQXMgb2Ygd3JpdGluZywgcGVyZm9ybWFuY2UudGltaW5nIGlzIG5vdCBhdmFpbGFibGUgaW4gV2ViIFdvcmtlcnMgaW4gbWFpbnN0cmVhbSBicm93c2Vycywgc28gaXQgaXMgbm90IGFsd2F5cyBhXG4gICAgICAgICAgICAvLyB2YWxpZCBmYWxsYmFjay4gSW4gdGhlIGFic2VuY2Ugb2YgYSBpbml0aWFsIHRpbWUgcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXIsIGZhbGxiYWNrIHRvIElOSVRJQUxfVElNRS5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxuICAgICAgICAgICAgcGVyZm9ybWFuY2UudGltZU9yaWdpbiA9IChwZXJmb3JtYW5jZS50aW1pbmcgJiYgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCkgfHwgSU5JVElBTF9USU1FO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnZXRHbG9iYWxPYmplY3QoKS5wZXJmb3JtYW5jZSB8fCBwZXJmb3JtYW5jZUZhbGxiYWNrO1xufSkoKTtcbi8qKlxuICogUmV0dXJucyBhIHRpbWVzdGFtcCBpbiBzZWNvbmRzIHdpdGggbWlsbGlzZWNvbmRzIHByZWNpc2lvbiBzaW5jZSB0aGUgVU5JWCBlcG9jaCBjYWxjdWxhdGVkIHdpdGggdGhlIG1vbm90b25pYyBjbG9jay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVzdGFtcFdpdGhNcygpIHtcbiAgICByZXR1cm4gKGNyb3NzUGxhdGZvcm1QZXJmb3JtYW5jZS50aW1lT3JpZ2luICsgY3Jvc3NQbGF0Zm9ybVBlcmZvcm1hbmNlLm5vdygpKSAvIDEwMDA7XG59XG4vLyBodHRwczovL3NlbXZlci5vcmcvI2lzLXRoZXJlLWEtc3VnZ2VzdGVkLXJlZ3VsYXItZXhwcmVzc2lvbi1yZWdleC10by1jaGVjay1hLXNlbXZlci1zdHJpbmdcbnZhciBTRU1WRVJfUkVHRVhQID0gL14oMHxbMS05XVxcZCopXFwuKDB8WzEtOV1cXGQqKVxcLigwfFsxLTldXFxkKikoPzotKCg/OjB8WzEtOV1cXGQqfFxcZCpbYS16QS1aLV1bMC05YS16QS1aLV0qKSg/OlxcLig/OjB8WzEtOV1cXGQqfFxcZCpbYS16QS1aLV1bMC05YS16QS1aLV0qKSkqKSk/KD86XFwrKFswLTlhLXpBLVotXSsoPzpcXC5bMC05YS16QS1aLV0rKSopKT8kLztcbi8qKlxuICogUGFyc2VzIGlucHV0IGludG8gYSBTZW1WZXIgaW50ZXJmYWNlXG4gKiBAcGFyYW0gaW5wdXQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgc2VtdmVyIHZlcnNpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2VtdmVyKGlucHV0KSB7XG4gICAgdmFyIG1hdGNoID0gaW5wdXQubWF0Y2goU0VNVkVSX1JFR0VYUCkgfHwgW107XG4gICAgdmFyIG1ham9yID0gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcbiAgICB2YXIgbWlub3IgPSBwYXJzZUludChtYXRjaFsyXSwgMTApO1xuICAgIHZhciBwYXRjaCA9IHBhcnNlSW50KG1hdGNoWzNdLCAxMCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVpbGRtZXRhZGF0YTogbWF0Y2hbNV0sXG4gICAgICAgIG1ham9yOiBpc05hTihtYWpvcikgPyB1bmRlZmluZWQgOiBtYWpvcixcbiAgICAgICAgbWlub3I6IGlzTmFOKG1pbm9yKSA/IHVuZGVmaW5lZCA6IG1pbm9yLFxuICAgICAgICBwYXRjaDogaXNOYU4ocGF0Y2gpID8gdW5kZWZpbmVkIDogcGF0Y2gsXG4gICAgICAgIHByZXJlbGVhc2U6IG1hdGNoWzRdLFxuICAgIH07XG59XG52YXIgZGVmYXVsdFJldHJ5QWZ0ZXIgPSA2MCAqIDEwMDA7IC8vIDYwIHNlY29uZHNcbi8qKlxuICogRXh0cmFjdHMgUmV0cnktQWZ0ZXIgdmFsdWUgZnJvbSB0aGUgcmVxdWVzdCBoZWFkZXIgb3IgcmV0dXJucyBkZWZhdWx0IHZhbHVlXG4gKiBAcGFyYW0gbm93IGN1cnJlbnQgdW5peCB0aW1lc3RhbXBcbiAqIEBwYXJhbSBoZWFkZXIgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mICdSZXRyeS1BZnRlcicgaGVhZGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJldHJ5QWZ0ZXJIZWFkZXIobm93LCBoZWFkZXIpIHtcbiAgICBpZiAoIWhlYWRlcikge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFJldHJ5QWZ0ZXI7XG4gICAgfVxuICAgIHZhciBoZWFkZXJEZWxheSA9IHBhcnNlSW50KFwiXCIgKyBoZWFkZXIsIDEwKTtcbiAgICBpZiAoIWlzTmFOKGhlYWRlckRlbGF5KSkge1xuICAgICAgICByZXR1cm4gaGVhZGVyRGVsYXkgKiAxMDAwO1xuICAgIH1cbiAgICB2YXIgaGVhZGVyRGF0ZSA9IERhdGUucGFyc2UoXCJcIiArIGhlYWRlcik7XG4gICAgaWYgKCFpc05hTihoZWFkZXJEYXRlKSkge1xuICAgICAgICByZXR1cm4gaGVhZGVyRGF0ZSAtIG5vdztcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRSZXRyeUFmdGVyO1xufVxudmFyIGRlZmF1bHRGdW5jdGlvbk5hbWUgPSAnPGFub255bW91cz4nO1xuLyoqXG4gKiBTYWZlbHkgZXh0cmFjdCBmdW5jdGlvbiBuYW1lIGZyb20gaXRzZWxmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGdW5jdGlvbk5hbWUoZm4pIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoIWZuIHx8IHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRGdW5jdGlvbk5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZuLm5hbWUgfHwgZGVmYXVsdEZ1bmN0aW9uTmFtZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gSnVzdCBhY2Nlc3NpbmcgY3VzdG9tIHByb3BzIGluIHNvbWUgU2VsZW5pdW0gZW52aXJvbm1lbnRzXG4gICAgICAgIC8vIGNhbiBjYXVzZSBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBleGNlcHRpb24gKHNlZSByYXZlbi1qcyM0OTUpLlxuICAgICAgICByZXR1cm4gZGVmYXVsdEZ1bmN0aW9uTmFtZTtcbiAgICB9XG59XG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWRkcyBjb250ZXh0IChwcmUvcG9zdC9saW5lKSBsaW5lcyB0byB0aGUgcHJvdmlkZWQgZnJhbWVcbiAqXG4gKiBAcGFyYW0gbGluZXMgc3RyaW5nW10gY29udGFpbmluZyBhbGwgbGluZXNcbiAqIEBwYXJhbSBmcmFtZSBTdGFja0ZyYW1lIHRoYXQgd2lsbCBiZSBtdXRhdGVkXG4gKiBAcGFyYW0gbGluZXNPZkNvbnRleHQgbnVtYmVyIG9mIGNvbnRleHQgbGluZXMgd2Ugd2FudCB0byBhZGQgcHJlL3Bvc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbnRleHRUb0ZyYW1lKGxpbmVzLCBmcmFtZSwgbGluZXNPZkNvbnRleHQpIHtcbiAgICBpZiAobGluZXNPZkNvbnRleHQgPT09IHZvaWQgMCkgeyBsaW5lc09mQ29udGV4dCA9IDU7IH1cbiAgICB2YXIgbGluZW5vID0gZnJhbWUubGluZW5vIHx8IDA7XG4gICAgdmFyIG1heExpbmVzID0gbGluZXMubGVuZ3RoO1xuICAgIHZhciBzb3VyY2VMaW5lID0gTWF0aC5tYXgoTWF0aC5taW4obWF4TGluZXMsIGxpbmVubyAtIDEpLCAwKTtcbiAgICBmcmFtZS5wcmVfY29udGV4dCA9IGxpbmVzXG4gICAgICAgIC5zbGljZShNYXRoLm1heCgwLCBzb3VyY2VMaW5lIC0gbGluZXNPZkNvbnRleHQpLCBzb3VyY2VMaW5lKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChsaW5lKSB7IHJldHVybiBzbmlwTGluZShsaW5lLCAwKTsgfSk7XG4gICAgZnJhbWUuY29udGV4dF9saW5lID0gc25pcExpbmUobGluZXNbTWF0aC5taW4obWF4TGluZXMgLSAxLCBzb3VyY2VMaW5lKV0sIGZyYW1lLmNvbG5vIHx8IDApO1xuICAgIGZyYW1lLnBvc3RfY29udGV4dCA9IGxpbmVzXG4gICAgICAgIC5zbGljZShNYXRoLm1pbihzb3VyY2VMaW5lICsgMSwgbWF4TGluZXMpLCBzb3VyY2VMaW5lICsgMSArIGxpbmVzT2ZDb250ZXh0KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChsaW5lKSB7IHJldHVybiBzbmlwTGluZShsaW5lLCAwKTsgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXNjLmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzRXJyb3IsIGlzRXZlbnQsIGlzSW5zdGFuY2VPZiwgaXNQbGFpbk9iamVjdCwgaXNQcmltaXRpdmUsIGlzU3ludGhldGljRXZlbnQgfSBmcm9tICcuL2lzJztcbmltcG9ydCB7IE1lbW8gfSBmcm9tICcuL21lbW8nO1xuaW1wb3J0IHsgZ2V0RnVuY3Rpb25OYW1lLCBodG1sVHJlZUFzU3RyaW5nIH0gZnJvbSAnLi9taXNjJztcbmltcG9ydCB7IHRydW5jYXRlIH0gZnJvbSAnLi9zdHJpbmcnO1xuLyoqXG4gKiBXcmFwIGEgZ2l2ZW4gb2JqZWN0IG1ldGhvZCB3aXRoIGEgaGlnaGVyLW9yZGVyIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHNvdXJjZSBBbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG1ldGhvZCB0byBiZSB3cmFwcGVkLlxuICogQHBhcmFtIG5hbWUgQSBuYW1lIG9mIG1ldGhvZCB0byBiZSB3cmFwcGVkLlxuICogQHBhcmFtIHJlcGxhY2VtZW50IEEgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgdXNlZCB0byB3cmFwIGEgZ2l2ZW4gbWV0aG9kLlxuICogQHJldHVybnMgdm9pZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsbChzb3VyY2UsIG5hbWUsIHJlcGxhY2VtZW50KSB7XG4gICAgaWYgKCEobmFtZSBpbiBzb3VyY2UpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG9yaWdpbmFsID0gc291cmNlW25hbWVdO1xuICAgIHZhciB3cmFwcGVkID0gcmVwbGFjZW1lbnQob3JpZ2luYWwpO1xuICAgIC8vIE1ha2Ugc3VyZSBpdCdzIGEgZnVuY3Rpb24gZmlyc3QsIGFzIHdlIG5lZWQgdG8gYXR0YWNoIGFuIGVtcHR5IHByb3RvdHlwZSBmb3IgYGRlZmluZVByb3BlcnRpZXNgIHRvIHdvcmtcbiAgICAvLyBvdGhlcndpc2UgaXQnbGwgdGhyb3cgXCJUeXBlRXJyb3I6IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIGNhbGxlZCBvbiBub24tb2JqZWN0XCJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6c3RyaWN0LXR5cGUtcHJlZGljYXRlc1xuICAgIGlmICh0eXBlb2Ygd3JhcHBlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd3JhcHBlZC5wcm90b3R5cGUgPSB3cmFwcGVkLnByb3RvdHlwZSB8fCB7fTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHdyYXBwZWQsIHtcbiAgICAgICAgICAgICAgICBfX3NlbnRyeV9vcmlnaW5hbF9fOiB7XG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3JpZ2luYWwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfT28pIHtcbiAgICAgICAgICAgIC8vIFRoaXMgY2FuIHRocm93IGlmIG11bHRpcGxlIGZpbGwgaGFwcGVucyBvbiBhIGdsb2JhbCBvYmplY3QgbGlrZSBYTUxIdHRwUmVxdWVzdFxuICAgICAgICAgICAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9zZW50cnktamF2YXNjcmlwdC9pc3N1ZXMvMjA0M1xuICAgICAgICB9XG4gICAgfVxuICAgIHNvdXJjZVtuYW1lXSA9IHdyYXBwZWQ7XG59XG4vKipcbiAqIEVuY29kZXMgZ2l2ZW4gb2JqZWN0IGludG8gdXJsLWZyaWVuZGx5IGZvcm1hdFxuICpcbiAqIEBwYXJhbSBvYmplY3QgQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgc2VyaWFsaXphYmxlIHZhbHVlc1xuICogQHJldHVybnMgc3RyaW5nIEVuY29kZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVybEVuY29kZShvYmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KVxuICAgICAgICAubWFwKFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnNhZmUtYW55XG4gICAgZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChvYmplY3Rba2V5XSk7IH0pXG4gICAgICAgIC5qb2luKCcmJyk7XG59XG4vKipcbiAqIFRyYW5zZm9ybXMgYW55IG9iamVjdCBpbnRvIGFuIG9iamVjdCBsaXRlcmFsIHdpdGggYWxsIGl0J3MgYXR0cmlidXRlc1xuICogYXR0YWNoZWQgdG8gaXQuXG4gKlxuICogQHBhcmFtIHZhbHVlIEluaXRpYWwgc291cmNlIHRoYXQgd2UgaGF2ZSB0byB0cmFuc2Zvcm0gaW4gb3JkZXIgdG8gYmUgdXNhYmxlIGJ5IHRoZSBzZXJpYWxpemVyXG4gKi9cbmZ1bmN0aW9uIGdldFdhbGtTb3VyY2UodmFsdWUpIHtcbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgICAgdmFyIGVycm9yID0gdmFsdWU7XG4gICAgICAgIHZhciBlcnIgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgbmFtZTogZXJyb3IubmFtZSxcbiAgICAgICAgICAgIHN0YWNrOiBlcnJvci5zdGFjayxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBlcnJvcikge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlcnJvciwgaSkpIHtcbiAgICAgICAgICAgICAgICBlcnJbaV0gPSBlcnJvcltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyO1xuICAgIH1cbiAgICBpZiAoaXNFdmVudCh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIGV2ZW50XzEgPSB2YWx1ZTtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHt9O1xuICAgICAgICBzb3VyY2UudHlwZSA9IGV2ZW50XzEudHlwZTtcbiAgICAgICAgLy8gQWNjZXNzaW5nIGV2ZW50LnRhcmdldCBjYW4gdGhyb3cgKHNlZSBnZXRzZW50cnkvcmF2ZW4tanMjODM4LCAjNzY4KVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc291cmNlLnRhcmdldCA9IGlzRWxlbWVudChldmVudF8xLnRhcmdldClcbiAgICAgICAgICAgICAgICA/IGh0bWxUcmVlQXNTdHJpbmcoZXZlbnRfMS50YXJnZXQpXG4gICAgICAgICAgICAgICAgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZXZlbnRfMS50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfb08pIHtcbiAgICAgICAgICAgIHNvdXJjZS50YXJnZXQgPSAnPHVua25vd24+JztcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc291cmNlLmN1cnJlbnRUYXJnZXQgPSBpc0VsZW1lbnQoZXZlbnRfMS5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAgICAgICAgID8gaHRtbFRyZWVBc1N0cmluZyhldmVudF8xLmN1cnJlbnRUYXJnZXQpXG4gICAgICAgICAgICAgICAgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZXZlbnRfMS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX29PKSB7XG4gICAgICAgICAgICBzb3VyY2UuY3VycmVudFRhcmdldCA9ICc8dW5rbm93bj4nO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpzdHJpY3QtdHlwZS1wcmVkaWNhdGVzXG4gICAgICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgIT09ICd1bmRlZmluZWQnICYmIGlzSW5zdGFuY2VPZih2YWx1ZSwgQ3VzdG9tRXZlbnQpKSB7XG4gICAgICAgICAgICBzb3VyY2UuZGV0YWlsID0gZXZlbnRfMS5kZXRhaWw7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSBpbiBldmVudF8xKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV2ZW50XzEsIGkpKSB7XG4gICAgICAgICAgICAgICAgc291cmNlW2ldID0gZXZlbnRfMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vKiogQ2FsY3VsYXRlcyBieXRlcyBzaXplIG9mIGlucHV0IHN0cmluZyAqL1xuZnVuY3Rpb24gdXRmOExlbmd0aCh2YWx1ZSkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgcmV0dXJuIH4tZW5jb2RlVVJJKHZhbHVlKS5zcGxpdCgvJS4ufC4vKS5sZW5ndGg7XG59XG4vKiogQ2FsY3VsYXRlcyBieXRlcyBzaXplIG9mIGlucHV0IG9iamVjdCAqL1xuZnVuY3Rpb24ganNvblNpemUodmFsdWUpIHtcbiAgICByZXR1cm4gdXRmOExlbmd0aChKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xufVxuLyoqIEpTRG9jICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVG9TaXplKG9iamVjdCwgXG4vLyBEZWZhdWx0IE5vZGUuanMgUkVQTCBkZXB0aFxuZGVwdGgsIFxuLy8gMTAwa0IsIGFzIDIwMGtCIGlzIG1heCBwYXlsb2FkIHNpemUsIHNvIGhhbGYgc291bmRzIHJlYXNvbmFibGVcbm1heFNpemUpIHtcbiAgICBpZiAoZGVwdGggPT09IHZvaWQgMCkgeyBkZXB0aCA9IDM7IH1cbiAgICBpZiAobWF4U2l6ZSA9PT0gdm9pZCAwKSB7IG1heFNpemUgPSAxMDAgKiAxMDI0OyB9XG4gICAgdmFyIHNlcmlhbGl6ZWQgPSBub3JtYWxpemUob2JqZWN0LCBkZXB0aCk7XG4gICAgaWYgKGpzb25TaXplKHNlcmlhbGl6ZWQpID4gbWF4U2l6ZSkge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplVG9TaXplKG9iamVjdCwgZGVwdGggLSAxLCBtYXhTaXplKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG59XG4vKiogVHJhbnNmb3JtcyBhbnkgaW5wdXQgdmFsdWUgaW50byBhIHN0cmluZyBmb3JtLCBlaXRoZXIgcHJpbWl0aXZlIHZhbHVlIG9yIGEgdHlwZSBvZiB0aGUgaW5wdXQgKi9cbmZ1bmN0aW9uIHNlcmlhbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICAgIC8vIE5vZGUuanMgUkVQTCBub3RhdGlvblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgIHJldHVybiAnW09iamVjdF0nO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICByZXR1cm4gJ1tBcnJheV0nO1xuICAgIH1cbiAgICB2YXIgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICByZXR1cm4gaXNQcmltaXRpdmUobm9ybWFsaXplZCkgPyBub3JtYWxpemVkIDogdHlwZTtcbn1cbi8qKlxuICogbm9ybWFsaXplVmFsdWUoKVxuICpcbiAqIFRha2VzIHVuc2VyaWFsaXphYmxlIGlucHV0IGFuZCBtYWtlIGl0IHNlcmlhbGl6YWJsZSBmcmllbmRseVxuICpcbiAqIC0gdHJhbnNsYXRlcyB1bmRlZmluZWQvTmFOIHZhbHVlcyB0byBcIlt1bmRlZmluZWRdXCIvXCJbTmFOXVwiIHJlc3BlY3RpdmVseSxcbiAqIC0gc2VyaWFsaXplcyBFcnJvciBvYmplY3RzXG4gKiAtIGZpbHRlciBnbG9iYWwgb2JqZWN0c1xuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y3ljbG9tYXRpYy1jb21wbGV4aXR5XG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSwga2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RvbWFpbicgJiYgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5fZXZlbnRzKSB7XG4gICAgICAgIHJldHVybiAnW0RvbWFpbl0nO1xuICAgIH1cbiAgICBpZiAoa2V5ID09PSAnZG9tYWluRW1pdHRlcicpIHtcbiAgICAgICAgcmV0dXJuICdbRG9tYWluRW1pdHRlcl0nO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgPT09IGdsb2JhbCkge1xuICAgICAgICByZXR1cm4gJ1tHbG9iYWxdJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlID09PSB3aW5kb3cpIHtcbiAgICAgICAgcmV0dXJuICdbV2luZG93XSc7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlID09PSBkb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gJ1tEb2N1bWVudF0nO1xuICAgIH1cbiAgICAvLyBSZWFjdCdzIFN5bnRoZXRpY0V2ZW50IHRoaW5neVxuICAgIGlmIChpc1N5bnRoZXRpY0V2ZW50KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gJ1tTeW50aGV0aWNFdmVudF0nO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdGF1dG9sb2d5LWV4cHJlc3Npb25cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICdbTmFOXSc7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiAnW3VuZGVmaW5lZF0nO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBcIltGdW5jdGlvbjogXCIgKyBnZXRGdW5jdGlvbk5hbWUodmFsdWUpICsgXCJdXCI7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogV2Fsa3MgYW4gb2JqZWN0IHRvIHBlcmZvcm0gYSBub3JtYWxpemF0aW9uIG9uIGl0XG4gKlxuICogQHBhcmFtIGtleSBvZiBvYmplY3QgdGhhdCdzIHdhbGtlZCBpbiBjdXJyZW50IGl0ZXJhdGlvblxuICogQHBhcmFtIHZhbHVlIG9iamVjdCB0byBiZSB3YWxrZWRcbiAqIEBwYXJhbSBkZXB0aCBPcHRpb25hbCBudW1iZXIgaW5kaWNhdGluZyBob3cgZGVlcCBzaG91bGQgd2Fsa2luZyBiZSBwZXJmb3JtZWRcbiAqIEBwYXJhbSBtZW1vIE9wdGlvbmFsIE1lbW8gY2xhc3MgaGFuZGxpbmcgZGVjeWNsaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YWxrKGtleSwgdmFsdWUsIGRlcHRoLCBtZW1vKSB7XG4gICAgaWYgKGRlcHRoID09PSB2b2lkIDApIHsgZGVwdGggPSArSW5maW5pdHk7IH1cbiAgICBpZiAobWVtbyA9PT0gdm9pZCAwKSB7IG1lbW8gPSBuZXcgTWVtbygpOyB9XG4gICAgLy8gSWYgd2UgcmVhY2ggdGhlIG1heGltdW0gZGVwdGgsIHNlcmlhbGl6ZSB3aGF0ZXZlciBoYXMgbGVmdFxuICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gc2VyaWFsaXplVmFsdWUodmFsdWUpO1xuICAgIH1cbiAgICAvLyBJZiB2YWx1ZSBpbXBsZW1lbnRzIGB0b0pTT05gIG1ldGhvZCwgY2FsbCBpdCBhbmQgcmV0dXJuIGVhcmx5XG4gICAgLy8gdHNsaW50OmRpc2FibGU6bm8tdW5zYWZlLWFueVxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZS50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvSlNPTigpO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZW5hYmxlOm5vLXVuc2FmZS1hbnlcbiAgICAvLyBJZiBub3JtYWxpemVkIHZhbHVlIGlzIGEgcHJpbWl0aXZlLCB0aGVyZSBhcmUgbm8gYnJhbmNoZXMgbGVmdCB0byB3YWxrLCBzbyB3ZSBjYW4ganVzdCBiYWlsIG91dCwgYXMgdGhlcmVzIG5vIHBvaW50IGluIGdvaW5nIGRvd24gdGhhdCBicmFuY2ggYW55IGZ1cnRoZXJcbiAgICB2YXIgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlLCBrZXkpO1xuICAgIGlmIChpc1ByaW1pdGl2ZShub3JtYWxpemVkKSkge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplZDtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIHNvdXJjZSB0aGF0IHdlIHdpbGwgdXNlIGZvciBuZXh0IGl0dGVyYXRpb25zLCBlaXRoZXIgb2JqZWN0aWZpZWQgZXJyb3Igb2JqZWN0IChFcnJvciB0eXBlIHdpdGggZXh0cmFjdGVkIGtleXM6dmFsdWUgcGFpcnMpIG9yIHRoZSBpbnB1dCBpdHNlbGZcbiAgICB2YXIgc291cmNlID0gZ2V0V2Fsa1NvdXJjZSh2YWx1ZSk7XG4gICAgLy8gQ3JlYXRlIGFuIGFjY3VtdWxhdG9yIHRoYXQgd2lsbCBhY3QgYXMgYSBwYXJlbnQgZm9yIGFsbCBmdXR1cmUgaXR0ZXJhdGlvbnMgb2YgdGhhdCBicmFuY2hcbiAgICB2YXIgYWNjID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBbXSA6IHt9O1xuICAgIC8vIElmIHdlIGFscmVhZHkgd2Fsa2VkIHRoYXQgYnJhbmNoLCBiYWlsIG91dCwgYXMgaXQncyBjaXJjdWxhciByZWZlcmVuY2VcbiAgICBpZiAobWVtby5tZW1vaXplKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gJ1tDaXJjdWxhciB+XSc7XG4gICAgfVxuICAgIC8vIFdhbGsgYWxsIGtleXMgb2YgdGhlIHNvdXJjZVxuICAgIGZvciAodmFyIGlubmVyS2V5IGluIHNvdXJjZSkge1xuICAgICAgICAvLyBBdm9pZCBpdGVyYXRpbmcgb3ZlciBmaWVsZHMgaW4gdGhlIHByb3RvdHlwZSBpZiB0aGV5J3ZlIHNvbWVob3cgYmVlbiBleHBvc2VkIHRvIGVudW1lcmF0aW9uLlxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGlubmVyS2V5KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgd2FsayB0aHJvdWdoIGFsbCB0aGUgY2hpbGQgbm9kZXNcbiAgICAgICAgYWNjW2lubmVyS2V5XSA9IHdhbGsoaW5uZXJLZXksIHNvdXJjZVtpbm5lcktleV0sIGRlcHRoIC0gMSwgbWVtbyk7XG4gICAgfVxuICAgIC8vIE9uY2Ugd2Fsa2VkIHRocm91Z2ggYWxsIHRoZSBicmFuY2hlcywgcmVtb3ZlIHRoZSBwYXJlbnQgZnJvbSBtZW1vIHN0b3JhZ2VcbiAgICBtZW1vLnVubWVtb2l6ZSh2YWx1ZSk7XG4gICAgLy8gUmV0dXJuIGFjY3VtdWxhdGVkIHZhbHVlc1xuICAgIHJldHVybiBhY2M7XG59XG4vKipcbiAqIG5vcm1hbGl6ZSgpXG4gKlxuICogLSBDcmVhdGVzIGEgY29weSB0byBwcmV2ZW50IG9yaWdpbmFsIGlucHV0IG11dGF0aW9uXG4gKiAtIFNraXAgbm9uLWVudW1lcmFibGVyc1xuICogLSBDYWxscyBgdG9KU09OYCBpZiBpbXBsZW1lbnRlZFxuICogLSBSZW1vdmVzIGNpcmN1bGFyIHJlZmVyZW5jZXNcbiAqIC0gVHJhbnNsYXRlcyBub24tc2VyaWFsaXplYWJsZSB2YWx1ZXMgKHVuZGVmaW5lZC9OYU4vRnVuY3Rpb25zKSB0byBzZXJpYWxpemFibGUgZm9ybWF0XG4gKiAtIFRyYW5zbGF0ZXMga25vd24gZ2xvYmFsIG9iamVjdHMvQ2xhc3NlcyB0byBhIHN0cmluZyByZXByZXNlbnRhdGlvbnNcbiAqIC0gVGFrZXMgY2FyZSBvZiBFcnJvciBvYmplY3RzIHNlcmlhbGl6YXRpb25cbiAqIC0gT3B0aW9uYWxseSBsaW1pdCBkZXB0aCBvZiBmaW5hbCBvdXRwdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShpbnB1dCwgZGVwdGgpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW5zYWZlLWFueVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbnB1dCwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHsgcmV0dXJuIHdhbGsoa2V5LCB2YWx1ZSwgZGVwdGgpOyB9KSk7XG4gICAgfVxuICAgIGNhdGNoIChfb08pIHtcbiAgICAgICAgcmV0dXJuICcqKm5vbi1zZXJpYWxpemFibGUqKic7XG4gICAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbnkgY2FwdHVyZWQgZXhjZXB0aW9uLCBleHRyYWN0IGl0cyBrZXlzIGFuZCBjcmVhdGUgYSBzb3J0ZWRcbiAqIGFuZCB0cnVuY2F0ZWQgbGlzdCB0aGF0IHdpbGwgYmUgdXNlZCBpbnNpZGUgdGhlIGV2ZW50IG1lc3NhZ2UuXG4gKiBlZy4gYE5vbi1lcnJvciBleGNlcHRpb24gY2FwdHVyZWQgd2l0aCBrZXlzOiBmb28sIGJhciwgYmF6YFxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEV4Y2VwdGlvbktleXNGb3JNZXNzYWdlKGV4Y2VwdGlvbiwgbWF4TGVuZ3RoKSB7XG4gICAgaWYgKG1heExlbmd0aCA9PT0gdm9pZCAwKSB7IG1heExlbmd0aCA9IDQwOyB9XG4gICAgLy8gdHNsaW50OmRpc2FibGU6c3RyaWN0LXR5cGUtcHJlZGljYXRlc1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZ2V0V2Fsa1NvdXJjZShleGNlcHRpb24pKTtcbiAgICBrZXlzLnNvcnQoKTtcbiAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnW29iamVjdCBoYXMgbm8ga2V5c10nO1xuICAgIH1cbiAgICBpZiAoa2V5c1swXS5sZW5ndGggPj0gbWF4TGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVuY2F0ZShrZXlzWzBdLCBtYXhMZW5ndGgpO1xuICAgIH1cbiAgICBmb3IgKHZhciBpbmNsdWRlZEtleXMgPSBrZXlzLmxlbmd0aDsgaW5jbHVkZWRLZXlzID4gMDsgaW5jbHVkZWRLZXlzLS0pIHtcbiAgICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBrZXlzLnNsaWNlKDAsIGluY2x1ZGVkS2V5cykuam9pbignLCAnKTtcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWQubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5jbHVkZWRLZXlzID09PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydW5jYXRlKHNlcmlhbGl6ZWQsIG1heExlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cbi8qKlxuICogR2l2ZW4gYW55IG9iamVjdCwgcmV0dXJuIHRoZSBuZXcgb2JqZWN0IHdpdGggcmVtb3ZlZCBrZXlzIHRoYXQgdmFsdWUgd2FzIGB1bmRlZmluZWRgLlxuICogV29ya3MgcmVjdXJzaXZlbHkgb24gb2JqZWN0cyBhbmQgYXJyYXlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZHJvcFVuZGVmaW5lZEtleXModmFsKSB7XG4gICAgdmFyIGVfMSwgX2E7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgICB2YXIgb2JqID0gdmFsO1xuICAgICAgICB2YXIgcnYgPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gdHNsaWJfMS5fX3ZhbHVlcyhPYmplY3Qua2V5cyhvYmopKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtrZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBydltrZXldID0gZHJvcFVuZGVmaW5lZEtleXMob2JqW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBydjtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICByZXR1cm4gdmFsLm1hcChkcm9wVW5kZWZpbmVkS2V5cyk7XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYmplY3QuanMubWFwIiwiLy8gU2xpZ2h0bHkgbW9kaWZpZWQgKG5vIElFOCBzdXBwb3J0LCBFUzYpIGFuZCB0cmFuc2NyaWJlZCB0byBUeXBlU2NyaXB0XG4vLyBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2FsdmlubWV0Y2FsZi9yb2xsdXAtcGx1Z2luLW5vZGUtYnVpbHRpbnMvbWFzdGVyL3NyYy9lczYvcGF0aC5qc1xuLyoqIEpTRG9jICovXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICAgIHZhciB1cCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgICAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICAgICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB1cCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHVwKSB7XG4gICAgICAgICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB1cC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICAgICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICAgICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJ0cztcbn1cbi8vIFNwbGl0IGEgZmlsZW5hbWUgaW50byBbcm9vdCwgZGlyLCBiYXNlbmFtZSwgZXh0XSwgdW5peCB2ZXJzaW9uXG4vLyAncm9vdCcgaXMganVzdCBhIHNsYXNoLCBvciBub3RoaW5nLlxudmFyIHNwbGl0UGF0aFJlID0gL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC87XG4vKiogSlNEb2MgKi9cbmZ1bmN0aW9uIHNwbGl0UGF0aChmaWxlbmFtZSkge1xuICAgIHZhciBwYXJ0cyA9IHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpO1xuICAgIHJldHVybiBwYXJ0cyA/IHBhcnRzLnNsaWNlKDEpIDogW107XG59XG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG4vKiogSlNEb2MgKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgcmVzb2x2ZWRQYXRoID0gJyc7XG4gICAgdmFyIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gYXJncy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICAgICAgdmFyIHBhdGggPSBpID49IDAgPyBhcmdzW2ldIDogJy8nO1xuICAgICAgICAvLyBTa2lwIGVtcHR5IGVudHJpZXNcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgXCIvXCIgKyByZXNvbHZlZFBhdGg7XG4gICAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICAgIH1cbiAgICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gICAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG4gICAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gICAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJykuZmlsdGVyKGZ1bmN0aW9uIChwKSB7IHJldHVybiAhIXA7IH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuICAgIHJldHVybiAocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCB8fCAnLic7XG59XG4vKiogSlNEb2MgKi9cbmZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgICAgaWYgKGFycltlbmRdICE9PSAnJykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbn1cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG4vKiogSlNEb2MgKi9cbmV4cG9ydCBmdW5jdGlvbiByZWxhdGl2ZShmcm9tLCB0bykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnRcbiAgICBmcm9tID0gcmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gICAgdG8gPSByZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG4gICAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG4gICAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgICB9XG4gICAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcbiAgICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufVxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbi8qKiBKU0RvYyAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVBhdGgocGF0aCkge1xuICAgIHZhciBpc1BhdGhBYnNvbHV0ZSA9IGlzQWJzb2x1dGUocGF0aCk7XG4gICAgdmFyIHRyYWlsaW5nU2xhc2ggPSBwYXRoLnN1YnN0cigtMSkgPT09ICcvJztcbiAgICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgICB2YXIgbm9ybWFsaXplZFBhdGggPSBub3JtYWxpemVBcnJheShwYXRoLnNwbGl0KCcvJykuZmlsdGVyKGZ1bmN0aW9uIChwKSB7IHJldHVybiAhIXA7IH0pLCAhaXNQYXRoQWJzb2x1dGUpLmpvaW4oJy8nKTtcbiAgICBpZiAoIW5vcm1hbGl6ZWRQYXRoICYmICFpc1BhdGhBYnNvbHV0ZSkge1xuICAgICAgICBub3JtYWxpemVkUGF0aCA9ICcuJztcbiAgICB9XG4gICAgaWYgKG5vcm1hbGl6ZWRQYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICAgICAgbm9ybWFsaXplZFBhdGggKz0gJy8nO1xuICAgIH1cbiAgICByZXR1cm4gKGlzUGF0aEFic29sdXRlID8gJy8nIDogJycpICsgbm9ybWFsaXplZFBhdGg7XG59XG4vLyBwb3NpeCB2ZXJzaW9uXG4vKiogSlNEb2MgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Fic29sdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn1cbi8vIHBvc2l4IHZlcnNpb25cbi8qKiBKU0RvYyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGpvaW4oKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBub3JtYWxpemVQYXRoKGFyZ3Muam9pbignLycpKTtcbn1cbi8qKiBKU0RvYyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpcm5hbWUocGF0aCkge1xuICAgIHZhciByZXN1bHQgPSBzcGxpdFBhdGgocGF0aCk7XG4gICAgdmFyIHJvb3QgPSByZXN1bHRbMF07XG4gICAgdmFyIGRpciA9IHJlc3VsdFsxXTtcbiAgICBpZiAoIXJvb3QgJiYgIWRpcikge1xuICAgICAgICAvLyBObyBkaXJuYW1lIHdoYXRzb2V2ZXJcbiAgICAgICAgcmV0dXJuICcuJztcbiAgICB9XG4gICAgaWYgKGRpcikge1xuICAgICAgICAvLyBJdCBoYXMgYSBkaXJuYW1lLCBzdHJpcCB0cmFpbGluZyBzbGFzaFxuICAgICAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3QgKyBkaXI7XG59XG4vKiogSlNEb2MgKi9cbmV4cG9ydCBmdW5jdGlvbiBiYXNlbmFtZShwYXRoLCBleHQpIHtcbiAgICB2YXIgZiA9IHNwbGl0UGF0aChwYXRoKVsyXTtcbiAgICBpZiAoZXh0ICYmIGYuc3Vic3RyKGV4dC5sZW5ndGggKiAtMSkgPT09IGV4dCkge1xuICAgICAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgICB9XG4gICAgcmV0dXJuIGY7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLmpzLm1hcCIsImV4cG9ydCB2YXIgc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgPyBzZXRQcm90b09mIDogbWl4aW5Qcm9wZXJ0aWVzKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby11bmJvdW5kLW1ldGhvZFxuLyoqXG4gKiBzZXRQcm90b3R5cGVPZiBwb2x5ZmlsbCB1c2luZyBfX3Byb3RvX19cbiAqL1xuZnVuY3Rpb24gc2V0UHJvdG9PZihvYmosIHByb3RvKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9iai5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gb2JqO1xufVxuLyoqXG4gKiBzZXRQcm90b3R5cGVPZiBwb2x5ZmlsbCB1c2luZyBtaXhpblxuICovXG5mdW5jdGlvbiBtaXhpblByb3BlcnRpZXMob2JqLCBwcm90bykge1xuICAgIGZvciAodmFyIHByb3AgaW4gcHJvdG8pIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG9ialtwcm9wXSA9IHByb3RvW3Byb3BdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb2x5ZmlsbC5qcy5tYXAiLCJpbXBvcnQgeyBTZW50cnlFcnJvciB9IGZyb20gJy4vZXJyb3InO1xuaW1wb3J0IHsgU3luY1Byb21pc2UgfSBmcm9tICcuL3N5bmNwcm9taXNlJztcbi8qKiBBIHNpbXBsZSBxdWV1ZSB0aGF0IGhvbGRzIHByb21pc2VzLiAqL1xudmFyIFByb21pc2VCdWZmZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHJvbWlzZUJ1ZmZlcihfbGltaXQpIHtcbiAgICAgICAgdGhpcy5fbGltaXQgPSBfbGltaXQ7XG4gICAgICAgIC8qKiBJbnRlcm5hbCBzZXQgb2YgcXVldWVkIFByb21pc2VzICovXG4gICAgICAgIHRoaXMuX2J1ZmZlciA9IFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTYXlzIGlmIHRoZSBidWZmZXIgaXMgcmVhZHkgdG8gdGFrZSBtb3JlIHJlcXVlc3RzXG4gICAgICovXG4gICAgUHJvbWlzZUJ1ZmZlci5wcm90b3R5cGUuaXNSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbWl0ID09PSB1bmRlZmluZWQgfHwgdGhpcy5sZW5ndGgoKSA8IHRoaXMuX2xpbWl0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkIGEgcHJvbWlzZSB0byB0aGUgcXVldWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFzayBDYW4gYmUgYW55IFByb21pc2VMaWtlPFQ+XG4gICAgICogQHJldHVybnMgVGhlIG9yaWdpbmFsIHByb21pc2UuXG4gICAgICovXG4gICAgUHJvbWlzZUJ1ZmZlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHkoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFN5bmNQcm9taXNlLnJlamVjdChuZXcgU2VudHJ5RXJyb3IoJ05vdCBhZGRpbmcgUHJvbWlzZSBkdWUgdG8gYnVmZmVyIGxpbWl0IHJlYWNoZWQuJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9idWZmZXIuaW5kZXhPZih0YXNrKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlci5wdXNoKHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJlbW92ZSh0YXNrKTsgfSlcbiAgICAgICAgICAgIC50aGVuKG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmUodGFzaykudGhlbihudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byBhZGQgdGhpcyBjYXRjaCBoZXJlIG90aGVyd2lzZSB3ZSBoYXZlIGFuIHVuaGFuZGxlZFByb21pc2VSZWplY3Rpb25cbiAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIGl0J3MgYSBuZXcgUHJvbWlzZSBjaGFpbi5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBwcm9taXNlIHRvIHRoZSBxdWV1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YXNrIENhbiBiZSBhbnkgUHJvbWlzZUxpa2U8VD5cbiAgICAgKiBAcmV0dXJucyBSZW1vdmVkIHByb21pc2UuXG4gICAgICovXG4gICAgUHJvbWlzZUJ1ZmZlci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgdmFyIHJlbW92ZWRUYXNrID0gdGhpcy5fYnVmZmVyLnNwbGljZSh0aGlzLl9idWZmZXIuaW5kZXhPZih0YXNrKSwgMSlbMF07XG4gICAgICAgIHJldHVybiByZW1vdmVkVGFzaztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgbnVtYmVyIG9mIHVucmVzb2x2ZWQgcHJvbWlzZXMgaW4gdGhlIHF1ZXVlLlxuICAgICAqL1xuICAgIFByb21pc2VCdWZmZXIucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1ZmZlci5sZW5ndGg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgZHJhaW4gdGhlIHdob2xlIHF1ZXVlLCByZXR1cm5zIHRydWUgaWYgcXVldWUgaXMgZW1wdHkgb3IgZHJhaW5lZC5cbiAgICAgKiBJZiB0aW1lb3V0IGlzIHByb3ZpZGVkIGFuZCB0aGUgcXVldWUgdGFrZXMgbG9uZ2VyIHRvIGRyYWluLCB0aGUgcHJvbWlzZSBzdGlsbCByZXNvbHZlcyBidXQgd2l0aCBmYWxzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0aW1lb3V0IE51bWJlciBpbiBtcyB0byB3YWl0IHVudGlsIGl0IHJlc29sdmVzIHdpdGggZmFsc2UuXG4gICAgICovXG4gICAgUHJvbWlzZUJ1ZmZlci5wcm90b3R5cGUuZHJhaW4gPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFN5bmNQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICB2YXIgY2FwdHVyZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQgJiYgdGltZW91dCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgICAgICBTeW5jUHJvbWlzZS5hbGwoX3RoaXMuX2J1ZmZlcilcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNhcHR1cmVkU2V0VGltZW91dCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4obnVsbCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gUHJvbWlzZUJ1ZmZlcjtcbn0oKSk7XG5leHBvcnQgeyBQcm9taXNlQnVmZmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9taXNlYnVmZmVyLmpzLm1hcCIsImltcG9ydCB7IGlzUmVnRXhwIH0gZnJvbSAnLi9pcyc7XG4vKipcbiAqIFRydW5jYXRlcyBnaXZlbiBzdHJpbmcgdG8gdGhlIG1heGltdW0gY2hhcmFjdGVycyBjb3VudFxuICpcbiAqIEBwYXJhbSBzdHIgQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgc2VyaWFsaXphYmxlIHZhbHVlc1xuICogQHBhcmFtIG1heCBNYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIGluIHRydW5jYXRlZCBzdHJpbmdcbiAqIEByZXR1cm5zIHN0cmluZyBFbmNvZGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZShzdHIsIG1heCkge1xuICAgIGlmIChtYXggPT09IHZvaWQgMCkgeyBtYXggPSAwOyB9XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnN0cmljdC10eXBlLXByZWRpY2F0ZXNcbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycgfHwgbWF4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIHJldHVybiBzdHIubGVuZ3RoIDw9IG1heCA/IHN0ciA6IHN0ci5zdWJzdHIoMCwgbWF4KSArIFwiLi4uXCI7XG59XG4vKipcbiAqIFRoaXMgaXMgYmFzaWNhbGx5IGp1c3QgYHRyaW1fbGluZWAgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9zZW50cnkvYmxvYi9tYXN0ZXIvc3JjL3NlbnRyeS9sYW5nL2phdmFzY3JpcHQvcHJvY2Vzc29yLnB5I0w2N1xuICpcbiAqIEBwYXJhbSBzdHIgQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgc2VyaWFsaXphYmxlIHZhbHVlc1xuICogQHBhcmFtIG1heCBNYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIGluIHRydW5jYXRlZCBzdHJpbmdcbiAqIEByZXR1cm5zIHN0cmluZyBFbmNvZGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbmlwTGluZShsaW5lLCBjb2xubykge1xuICAgIHZhciBuZXdMaW5lID0gbGluZTtcbiAgICB2YXIgbGwgPSBuZXdMaW5lLmxlbmd0aDtcbiAgICBpZiAobGwgPD0gMTUwKSB7XG4gICAgICAgIHJldHVybiBuZXdMaW5lO1xuICAgIH1cbiAgICBpZiAoY29sbm8gPiBsbCkge1xuICAgICAgICBjb2xubyA9IGxsOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnRcbiAgICB9XG4gICAgdmFyIHN0YXJ0ID0gTWF0aC5tYXgoY29sbm8gLSA2MCwgMCk7XG4gICAgaWYgKHN0YXJ0IDwgNSkge1xuICAgICAgICBzdGFydCA9IDA7XG4gICAgfVxuICAgIHZhciBlbmQgPSBNYXRoLm1pbihzdGFydCArIDE0MCwgbGwpO1xuICAgIGlmIChlbmQgPiBsbCAtIDUpIHtcbiAgICAgICAgZW5kID0gbGw7XG4gICAgfVxuICAgIGlmIChlbmQgPT09IGxsKSB7XG4gICAgICAgIHN0YXJ0ID0gTWF0aC5tYXgoZW5kIC0gMTQwLCAwKTtcbiAgICB9XG4gICAgbmV3TGluZSA9IG5ld0xpbmUuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgaWYgKHN0YXJ0ID4gMCkge1xuICAgICAgICBuZXdMaW5lID0gXCIne3NuaXB9IFwiICsgbmV3TGluZTtcbiAgICB9XG4gICAgaWYgKGVuZCA8IGxsKSB7XG4gICAgICAgIG5ld0xpbmUgKz0gJyB7c25pcH0nO1xuICAgIH1cbiAgICByZXR1cm4gbmV3TGluZTtcbn1cbi8qKlxuICogSm9pbiB2YWx1ZXMgaW4gYXJyYXlcbiAqIEBwYXJhbSBpbnB1dCBhcnJheSBvZiB2YWx1ZXMgdG8gYmUgam9pbmVkIHRvZ2V0aGVyXG4gKiBAcGFyYW0gZGVsaW1pdGVyIHN0cmluZyB0byBiZSBwbGFjZWQgaW4tYmV0d2VlbiB2YWx1ZXNcbiAqIEByZXR1cm5zIEpvaW5lZCB2YWx1ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhZmVKb2luKGlucHV0LCBkZWxpbWl0ZXIpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIG91dHB1dCA9IFtdO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dFtpXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBvdXRwdXQucHVzaCgnW3ZhbHVlIGNhbm5vdCBiZSBzZXJpYWxpemVkXScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQuam9pbihkZWxpbWl0ZXIpO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHZhbHVlIG1hdGNoZXMgYSByZWdleCBvciBpbmNsdWRlcyB0aGUgc3RyaW5nXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHN0cmluZyB2YWx1ZSB0byBiZSBjaGVja2VkIGFnYWluc3RcbiAqIEBwYXJhbSBwYXR0ZXJuIEVpdGhlciBhIHJlZ2V4IG9yIGEgc3RyaW5nIHRoYXQgbXVzdCBiZSBjb250YWluZWQgaW4gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTWF0Y2hpbmdQYXR0ZXJuKHZhbHVlLCBwYXR0ZXJuKSB7XG4gICAgaWYgKGlzUmVnRXhwKHBhdHRlcm4pKSB7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5pbmRleE9mKHBhdHRlcm4pICE9PSAtMTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RyaW5nLmpzLm1hcCIsImltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IGdldEdsb2JhbE9iamVjdCB9IGZyb20gJy4vbWlzYyc7XG4vKipcbiAqIFRlbGxzIHdoZXRoZXIgY3VycmVudCBlbnZpcm9ubWVudCBzdXBwb3J0cyBFcnJvckV2ZW50IG9iamVjdHNcbiAqIHtAbGluayBzdXBwb3J0c0Vycm9yRXZlbnR9LlxuICpcbiAqIEByZXR1cm5zIEFuc3dlciB0byB0aGUgZ2l2ZW4gcXVlc3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c0Vycm9yRXZlbnQoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICAgICAgbmV3IEVycm9yRXZlbnQoJycpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbi8qKlxuICogVGVsbHMgd2hldGhlciBjdXJyZW50IGVudmlyb25tZW50IHN1cHBvcnRzIERPTUVycm9yIG9iamVjdHNcbiAqIHtAbGluayBzdXBwb3J0c0RPTUVycm9yfS5cbiAqXG4gKiBAcmV0dXJucyBBbnN3ZXIgdG8gdGhlIGdpdmVuIHF1ZXN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNET01FcnJvcigpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBJdCByZWFsbHkgbmVlZHMgMSBhcmd1bWVudCwgbm90IDAuXG4gICAgICAgIC8vIENocm9tZTogVk04OToxIFVuY2F1Z2h0IFR5cGVFcnJvcjogRmFpbGVkIHRvIGNvbnN0cnVjdCAnRE9NRXJyb3InOlxuICAgICAgICAvLyAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICAgICAgbmV3IERPTUVycm9yKCcnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4vKipcbiAqIFRlbGxzIHdoZXRoZXIgY3VycmVudCBlbnZpcm9ubWVudCBzdXBwb3J0cyBET01FeGNlcHRpb24gb2JqZWN0c1xuICoge0BsaW5rIHN1cHBvcnRzRE9NRXhjZXB0aW9ufS5cbiAqXG4gKiBAcmV0dXJucyBBbnN3ZXIgdG8gdGhlIGdpdmVuIHF1ZXN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNET01FeGNlcHRpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICAgICAgbmV3IERPTUV4Y2VwdGlvbignJyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuLyoqXG4gKiBUZWxscyB3aGV0aGVyIGN1cnJlbnQgZW52aXJvbm1lbnQgc3VwcG9ydHMgRmV0Y2ggQVBJXG4gKiB7QGxpbmsgc3VwcG9ydHNGZXRjaH0uXG4gKlxuICogQHJldHVybnMgQW5zd2VyIHRvIHRoZSBnaXZlbiBxdWVzdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzRmV0Y2goKSB7XG4gICAgaWYgKCEoJ2ZldGNoJyBpbiBnZXRHbG9iYWxPYmplY3QoKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICAgICAgbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgICAgIG5ldyBSZXF1ZXN0KCcnKTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgICAgIG5ldyBSZXNwb25zZSgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbi8qKlxuICogaXNOYXRpdmVGZXRjaCBjaGVja3MgaWYgdGhlIGdpdmVuIGZ1bmN0aW9uIGlzIGEgbmF0aXZlIGltcGxlbWVudGF0aW9uIG9mIGZldGNoKClcbiAqL1xuZnVuY3Rpb24gaXNOYXRpdmVGZXRjaChmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmMgJiYgL15mdW5jdGlvbiBmZXRjaFxcKFxcKVxccytcXHtcXHMrXFxbbmF0aXZlIGNvZGVcXF1cXHMrXFx9JC8udGVzdChmdW5jLnRvU3RyaW5nKCkpO1xufVxuLyoqXG4gKiBUZWxscyB3aGV0aGVyIGN1cnJlbnQgZW52aXJvbm1lbnQgc3VwcG9ydHMgRmV0Y2ggQVBJIG5hdGl2ZWx5XG4gKiB7QGxpbmsgc3VwcG9ydHNOYXRpdmVGZXRjaH0uXG4gKlxuICogQHJldHVybnMgdHJ1ZSBpZiBgd2luZG93LmZldGNoYCBpcyBuYXRpdmVseSBpbXBsZW1lbnRlZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c05hdGl2ZUZldGNoKCkge1xuICAgIGlmICghc3VwcG9ydHNGZXRjaCgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGdsb2JhbCA9IGdldEdsb2JhbE9iamVjdCgpO1xuICAgIC8vIEZhc3QgcGF0aCB0byBhdm9pZCBET00gSS9PXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVuYm91bmQtbWV0aG9kXG4gICAgaWYgKGlzTmF0aXZlRmV0Y2goZ2xvYmFsLmZldGNoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gd2luZG93LmZldGNoIGlzIGltcGxlbWVudGVkLCBidXQgaXMgcG9seWZpbGxlZCBvciBhbHJlYWR5IHdyYXBwZWQgKGUuZzogYnkgYSBjaHJvbWUgZXh0ZW5zaW9uKVxuICAgIC8vIHNvIGNyZWF0ZSBhIFwicHVyZVwiIGlmcmFtZSB0byBzZWUgaWYgdGhhdCBoYXMgbmF0aXZlIGZldGNoXG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVuYm91bmQtbWV0aG9kIGRlcHJlY2F0aW9uXG4gICAgaWYgKGRvYyAmJiB0eXBlb2YgZG9jLmNyZWF0ZUVsZW1lbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHNhbmRib3ggPSBkb2MuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgICAgICBzYW5kYm94LmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChzYW5kYm94KTtcbiAgICAgICAgICAgIGlmIChzYW5kYm94LmNvbnRlbnRXaW5kb3cgJiYgc2FuZGJveC5jb250ZW50V2luZG93LmZldGNoKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVuYm91bmQtbWV0aG9kXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gaXNOYXRpdmVGZXRjaChzYW5kYm94LmNvbnRlbnRXaW5kb3cuZmV0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jLmhlYWQucmVtb3ZlQ2hpbGQoc2FuZGJveCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oJ0NvdWxkIG5vdCBjcmVhdGUgc2FuZGJveCBpZnJhbWUgZm9yIHB1cmUgZmV0Y2ggY2hlY2ssIGJhaWxpbmcgdG8gd2luZG93LmZldGNoOiAnLCBlcnIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFRlbGxzIHdoZXRoZXIgY3VycmVudCBlbnZpcm9ubWVudCBzdXBwb3J0cyBSZXBvcnRpbmdPYnNlcnZlciBBUElcbiAqIHtAbGluayBzdXBwb3J0c1JlcG9ydGluZ09ic2VydmVyfS5cbiAqXG4gKiBAcmV0dXJucyBBbnN3ZXIgdG8gdGhlIGdpdmVuIHF1ZXN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNSZXBvcnRpbmdPYnNlcnZlcigpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVuc2FmZS1hbnlcbiAgICByZXR1cm4gJ1JlcG9ydGluZ09ic2VydmVyJyBpbiBnZXRHbG9iYWxPYmplY3QoKTtcbn1cbi8qKlxuICogVGVsbHMgd2hldGhlciBjdXJyZW50IGVudmlyb25tZW50IHN1cHBvcnRzIFJlZmVycmVyIFBvbGljeSBBUElcbiAqIHtAbGluayBzdXBwb3J0c1JlZmVycmVyUG9saWN5fS5cbiAqXG4gKiBAcmV0dXJucyBBbnN3ZXIgdG8gdGhlIGdpdmVuIHF1ZXN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNSZWZlcnJlclBvbGljeSgpIHtcbiAgICAvLyBEZXNwaXRlIGFsbCBzdGFycyBpbiB0aGUgc2t5IHNheWluZyB0aGF0IEVkZ2Ugc3VwcG9ydHMgb2xkIGRyYWZ0IHN5bnRheCwgYWthICduZXZlcicsICdhbHdheXMnLCAnb3JpZ2luJyBhbmQgJ2RlZmF1bHRcbiAgICAvLyBodHRwczovL2Nhbml1c2UuY29tLyNmZWF0PXJlZmVycmVyLXBvbGljeVxuICAgIC8vIEl0IGRvZXNuJ3QuIEFuZCBpdCB0aHJvdyBleGNlcHRpb24gaW5zdGVhZCBvZiBpZ25vcmluZyB0aGlzIHBhcmFtZXRlci4uLlxuICAgIC8vIFJFRjogaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9yYXZlbi1qcy9pc3N1ZXMvMTIzM1xuICAgIGlmICghc3VwcG9ydHNGZXRjaCgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICAgICAgbmV3IFJlcXVlc3QoJ18nLCB7XG4gICAgICAgICAgICByZWZlcnJlclBvbGljeTogJ29yaWdpbicsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbi8qKlxuICogVGVsbHMgd2hldGhlciBjdXJyZW50IGVudmlyb25tZW50IHN1cHBvcnRzIEhpc3RvcnkgQVBJXG4gKiB7QGxpbmsgc3VwcG9ydHNIaXN0b3J5fS5cbiAqXG4gKiBAcmV0dXJucyBBbnN3ZXIgdG8gdGhlIGdpdmVuIHF1ZXN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNIaXN0b3J5KCkge1xuICAgIC8vIE5PVEU6IGluIENocm9tZSBBcHAgZW52aXJvbm1lbnQsIHRvdWNoaW5nIGhpc3RvcnkucHVzaFN0YXRlLCAqZXZlbiBpbnNpZGVcbiAgICAvLyAgICAgICBhIHRyeS9jYXRjaCBibG9jayosIHdpbGwgY2F1c2UgQ2hyb21lIHRvIG91dHB1dCBhbiBlcnJvciB0byBjb25zb2xlLmVycm9yXG4gICAgLy8gYm9ycm93ZWQgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9wdWxsLzEzOTQ1L2ZpbGVzXG4gICAgdmFyIGdsb2JhbCA9IGdldEdsb2JhbE9iamVjdCgpO1xuICAgIHZhciBjaHJvbWUgPSBnbG9iYWwuY2hyb21lO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnNhZmUtYW55XG4gICAgdmFyIGlzQ2hyb21lUGFja2FnZWRBcHAgPSBjaHJvbWUgJiYgY2hyb21lLmFwcCAmJiBjaHJvbWUuYXBwLnJ1bnRpbWU7XG4gICAgdmFyIGhhc0hpc3RvcnlBcGkgPSAnaGlzdG9yeScgaW4gZ2xvYmFsICYmICEhZ2xvYmFsLmhpc3RvcnkucHVzaFN0YXRlICYmICEhZ2xvYmFsLmhpc3RvcnkucmVwbGFjZVN0YXRlO1xuICAgIHJldHVybiAhaXNDaHJvbWVQYWNrYWdlZEFwcCAmJiBoYXNIaXN0b3J5QXBpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3VwcG9ydHMuanMubWFwIiwiaW1wb3J0IHsgaXNUaGVuYWJsZSB9IGZyb20gJy4vaXMnO1xuLyoqIFN5bmNQcm9taXNlIGludGVybmFsIHN0YXRlcyAqL1xudmFyIFN0YXRlcztcbihmdW5jdGlvbiAoU3RhdGVzKSB7XG4gICAgLyoqIFBlbmRpbmcgKi9cbiAgICBTdGF0ZXNbXCJQRU5ESU5HXCJdID0gXCJQRU5ESU5HXCI7XG4gICAgLyoqIFJlc29sdmVkIC8gT0sgKi9cbiAgICBTdGF0ZXNbXCJSRVNPTFZFRFwiXSA9IFwiUkVTT0xWRURcIjtcbiAgICAvKiogUmVqZWN0ZWQgLyBFcnJvciAqL1xuICAgIFN0YXRlc1tcIlJFSkVDVEVEXCJdID0gXCJSRUpFQ1RFRFwiO1xufSkoU3RhdGVzIHx8IChTdGF0ZXMgPSB7fSkpO1xuLyoqXG4gKiBUaGVuYWJsZSBjbGFzcyB0aGF0IGJlaGF2ZXMgbGlrZSBhIFByb21pc2UgYW5kIGZvbGxvd3MgaXQncyBpbnRlcmZhY2VcbiAqIGJ1dCBpcyBub3QgYXN5bmMgaW50ZXJuYWxseVxuICovXG52YXIgU3luY1Byb21pc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3luY1Byb21pc2UoZXhlY3V0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBTdGF0ZXMuUEVORElORztcbiAgICAgICAgdGhpcy5faGFuZGxlcnMgPSBbXTtcbiAgICAgICAgLyoqIEpTRG9jICovXG4gICAgICAgIHRoaXMuX3Jlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIF90aGlzLl9zZXRSZXN1bHQoU3RhdGVzLlJFU09MVkVELCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKiBKU0RvYyAqL1xuICAgICAgICB0aGlzLl9yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgICBfdGhpcy5fc2V0UmVzdWx0KFN0YXRlcy5SRUpFQ1RFRCwgcmVhc29uKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEpTRG9jICovXG4gICAgICAgIHRoaXMuX3NldFJlc3VsdCA9IGZ1bmN0aW9uIChzdGF0ZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5fc3RhdGUgIT09IFN0YXRlcy5QRU5ESU5HKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudGhlbihfdGhpcy5fcmVzb2x2ZSwgX3RoaXMuX3JlamVjdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICBfdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIF90aGlzLl9leGVjdXRlSGFuZGxlcnMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVE9ETzogRklYTUVcbiAgICAgICAgLyoqIEpTRG9jICovXG4gICAgICAgIHRoaXMuX2F0dGFjaEhhbmRsZXIgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICAgICAgX3RoaXMuX2hhbmRsZXJzID0gX3RoaXMuX2hhbmRsZXJzLmNvbmNhdChoYW5kbGVyKTtcbiAgICAgICAgICAgIF90aGlzLl9leGVjdXRlSGFuZGxlcnMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEpTRG9jICovXG4gICAgICAgIHRoaXMuX2V4ZWN1dGVIYW5kbGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5fc3RhdGUgPT09IFN0YXRlcy5QRU5ESU5HKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNhY2hlZEhhbmRsZXJzID0gX3RoaXMuX2hhbmRsZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICBfdGhpcy5faGFuZGxlcnMgPSBbXTtcbiAgICAgICAgICAgIGNhY2hlZEhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlci5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLl9zdGF0ZSA9PT0gU3RhdGVzLlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyLm9uZnVsZmlsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLm9uZnVsZmlsbGVkKF90aGlzLl92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLl9zdGF0ZSA9PT0gU3RhdGVzLlJFSkVDVEVEKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyLm9ucmVqZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIub25yZWplY3RlZChfdGhpcy5fdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhhbmRsZXIuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGV4ZWN1dG9yKHRoaXMuX3Jlc29sdmUsIHRoaXMuX3JlamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogSlNEb2MgKi9cbiAgICBTeW5jUHJvbWlzZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnW29iamVjdCBTeW5jUHJvbWlzZV0nO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgU3luY1Byb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFN5bmNQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKiogSlNEb2MgKi9cbiAgICBTeW5jUHJvbWlzZS5yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHJldHVybiBuZXcgU3luY1Byb21pc2UoZnVuY3Rpb24gKF8sIHJlamVjdCkge1xuICAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgU3luY1Byb21pc2UuYWxsID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTeW5jUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29sbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcihcIlByb21pc2UuYWxsIHJlcXVpcmVzIGFuIGFycmF5IGFzIGlucHV0LlwiKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciByZXNvbHZlZENvbGxlY3Rpb24gPSBbXTtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBTeW5jUHJvbWlzZS5yZXNvbHZlKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlZENvbGxlY3Rpb25baW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXIgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkQ29sbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obnVsbCwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIFN5bmNQcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uZnVsZmlsbGVkLCBvbnJlamVjdGVkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgU3luY1Byb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgX3RoaXMuX2F0dGFjaEhhbmRsZXIoe1xuICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uZnVsZmlsbGVkOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghb25mdWxmaWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IMKvXFxfKOODhClfL8KvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBGSVhNRVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9uZnVsZmlsbGVkKHJlc3VsdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9ucmVqZWN0ZWQ6IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvbnJlamVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVhc29uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvbnJlamVjdGVkKHJlYXNvbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgU3luY1Byb21pc2UucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24gKG9ucmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWw7IH0sIG9ucmVqZWN0ZWQpO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgU3luY1Byb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbiAob25maW5hbGx5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgU3luY1Byb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHZhbDtcbiAgICAgICAgICAgIHZhciBpc1JlamVjdGVkO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaXNSZWplY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChvbmZpbmFsbHkpIHtcbiAgICAgICAgICAgICAgICAgICAgb25maW5hbGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgICAgICAgIGlzUmVqZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhbCA9IHJlYXNvbjtcbiAgICAgICAgICAgICAgICBpZiAob25maW5hbGx5KSB7XG4gICAgICAgICAgICAgICAgICAgIG9uZmluYWxseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChpc1JlamVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTeW5jUHJvbWlzZTtcbn0oKSk7XG5leHBvcnQgeyBTeW5jUHJvbWlzZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3luY3Byb21pc2UuanMubWFwIiwidmFyIGUsdD0oZT1yZXF1aXJlKFwicXVlcnlzdHJpbmdcIikpJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmXCJkZWZhdWx0XCJpbiBlP2UuZGVmYXVsdDplLHI9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIG8oZSl7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPWYoZSkpO3ZhciBvPWZ1bmN0aW9uKGUsdCxyKXt2YXIgbz1lLmF1dGgsYT1lLmhvc3RuYW1lLHM9ZS5wcm90b2NvbHx8XCJcIixoPWUucGF0aG5hbWV8fFwiXCIsYz1lLmhhc2h8fFwiXCIscD1lLnF1ZXJ5fHxcIlwiLG49ITE7bz1vP2VuY29kZVVSSUNvbXBvbmVudChvKS5yZXBsYWNlKC8lM0EvaSxcIjpcIikrXCJAXCI6XCJcIixlLmhvc3Q/bj1vK2UuaG9zdDphJiYobj1vKyh+YS5pbmRleE9mKFwiOlwiKT9cIltcIithK1wiXVwiOmEpLGUucG9ydCYmKG4rPVwiOlwiK2UucG9ydCkpLHAmJlwib2JqZWN0XCI9PXR5cGVvZiBwJiYocD10LmVuY29kZShwKSk7dmFyIGw9ZS5zZWFyY2h8fHAmJlwiP1wiK3B8fFwiXCI7cmV0dXJuIHMmJlwiOlwiIT09cy5zdWJzdHIoLTEpJiYocys9XCI6XCIpLGUuc2xhc2hlc3x8KCFzfHxyLnRlc3QocykpJiYhMSE9PW4/KG49XCIvL1wiKyhufHxcIlwiKSxoJiZcIi9cIiE9PWhbMF0mJihoPVwiL1wiK2gpKTpufHwobj1cIlwiKSxjJiZcIiNcIiE9PWNbMF0mJihjPVwiI1wiK2MpLGwmJlwiP1wiIT09bFswXSYmKGw9XCI/XCIrbCkse3Byb3RvY29sOnMsaG9zdDpuLHBhdGhuYW1lOmg9aC5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KSxzZWFyY2g6bD1sLnJlcGxhY2UoXCIjXCIsXCIlMjNcIiksaGFzaDpjfX0oZSx0LHIpO3JldHVyblwiXCIrby5wcm90b2NvbCtvLmhvc3Qrby5wYXRobmFtZStvLnNlYXJjaCtvLmhhc2h9dmFyIGE9XCJodHRwOi8vXCIscz1cIncud1wiLGg9YStzLGM9L15odHRwcz98ZnRwfGdvcGhlcnxmaWxlLyxwPS9eKC4qPykoWyM/XS4qKS8sbj0vXihbYS16MC05ListXSo6KShcXC97MCwzfSkoLiopL2ksbD0vXihbYS16MC05ListXSo6KT9cXC9cXC9cXC8qL2ksaT0vXihbYS16MC05ListXSo6KShcXC97MCwyfSlcXFsoLiopXFxdJC9pO2Z1bmN0aW9uIHUoZSl7dHJ5e3JldHVybiBkZWNvZGVVUkkoZSl9Y2F0Y2godCl7cmV0dXJuIGV9fWZ1bmN0aW9uIGYoZSxyLGEpe3ZvaWQgMD09PXImJihyPSExKSx2b2lkIDA9PT1hJiYoYT0hMSk7dmFyIGY9KGU9ZS50cmltKCkpLm1hdGNoKHApO2U9Zj91KGZbMV0pLnJlcGxhY2UoL1xcXFwvZyxcIi9cIikrZlsyXTp1KGUpLnJlcGxhY2UoL1xcXFwvZyxcIi9cIiksaS50ZXN0KGUpJiZcIi9cIiE9PWUuc2xpY2UoLTEpJiYoZSs9XCIvXCIpO3ZhciBtPSEvKF5qYXZhc2NyaXB0KS8udGVzdChlKSYmZS5tYXRjaChuKSx2PWwudGVzdChlKSxkPVwiXCI7bSYmKGMudGVzdChtWzFdKXx8KGQ9bVsxXS50b0xvd2VyQ2FzZSgpLGU9XCJcIittWzJdK21bM10pLG1bMl18fCh2PSExLGMudGVzdChtWzFdKT8oZD1tWzFdLGU9XCJcIittWzNdKTplPVwiLy9cIittWzNdKSwzIT09bVsyXS5sZW5ndGgmJjEhPT1tWzJdLmxlbmd0aHx8KGQ9bVsxXSxlPVwiL1wiK21bM10pKTt2YXIgZyxiPWUubWF0Y2goLyg6WzAtOV0rKS8pLHk9XCJcIjtiJiZiWzFdJiYzPT09YlsxXS5sZW5ndGgmJihlPWUucmVwbGFjZSh5PWJbMV0seStcIjAwXCIpKTt2YXIgdz17fSx4PVwiXCIsUj1cIlwiO3RyeXtnPW5ldyBVUkwoZSl9Y2F0Y2godCl7eD10LGR8fGF8fCEvXlxcL1xcLy8udGVzdChlKXx8L15cXC9cXC8uK1tALl0vLnRlc3QoZSl8fChSPVwiL1wiLGU9ZS5zdWJzdHIoMSkpO3RyeXtnPW5ldyBVUkwoZSxoKX1jYXRjaChlKXtyZXR1cm4gdy5wcm90b2NvbD1kLHcuaHJlZj1kLHd9fXcuc2xhc2hlcz12JiYhUix3Lmhvc3Q9Zy5ob3N0PT09cz9cIlwiOmcuaG9zdCx3Lmhvc3RuYW1lPWcuaG9zdG5hbWU9PT1zP1wiXCI6Zy5ob3N0bmFtZS5yZXBsYWNlKC8oXFxbfFxcXSkvZyxcIlwiKSx3LnByb3RvY29sPXg/ZHx8bnVsbDpnLnByb3RvY29sLHcuc2VhcmNoPWcuc2VhcmNoLnJlcGxhY2UoL1xcXFwvZyxcIiU1Q1wiKSx3Lmhhc2g9Zy5oYXNoLnJlcGxhY2UoL1xcXFwvZyxcIiU1Q1wiKTt2YXIgVT1lLnNwbGl0KFwiI1wiKTshdy5zZWFyY2gmJn5VWzBdLmluZGV4T2YoXCI/XCIpJiYody5zZWFyY2g9XCI/XCIpLHcuaGFzaHx8XCJcIiE9PVVbMV18fCh3Lmhhc2g9XCIjXCIpLHcucXVlcnk9cj90LmRlY29kZShnLnNlYXJjaC5zdWJzdHIoMSkpOncuc2VhcmNoLnN1YnN0cigxKSx3LnBhdGhuYW1lPVIrdShnLnBhdGhuYW1lKS5yZXBsYWNlKC9cIi9nLFwiJTIyXCIpLFwiYWJvdXQ6XCI9PT13LnByb3RvY29sJiZcImJsYW5rXCI9PT13LnBhdGhuYW1lJiYody5wcm90b2NvbD1cIlwiLHcucGF0aG5hbWU9XCJcIikseCYmXCIvXCIhPT1lWzBdJiYody5wYXRobmFtZT13LnBhdGhuYW1lLnN1YnN0cigxKSksZCYmIWMudGVzdChkKSYmXCIvXCIhPT1lLnNsaWNlKC0xKSYmXCIvXCI9PT13LnBhdGhuYW1lJiYody5wYXRobmFtZT1cIlwiKSx3LnBhdGg9dy5wYXRobmFtZSt3LnNlYXJjaCx3LmF1dGg9W2cudXNlcm5hbWUsZy5wYXNzd29yZF0ubWFwKGRlY29kZVVSSUNvbXBvbmVudCkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCI6XCIpLHcucG9ydD1nLnBvcnQseSYmKHcuaG9zdD13Lmhvc3QucmVwbGFjZSh5K1wiMDBcIix5KSx3LnBvcnQ9dy5wb3J0LnNsaWNlKDAsLTIpKSx3LmhyZWY9Uj9cIlwiK3cucGF0aG5hbWUrdy5zZWFyY2grdy5oYXNoOm8odyk7dmFyIGo9L14oZmlsZSkvLnRlc3Qody5ocmVmKT9bXCJob3N0XCIsXCJob3N0bmFtZVwiXTpbXTtyZXR1cm4gT2JqZWN0LmtleXModykuZm9yRWFjaChmdW5jdGlvbihlKXt+ai5pbmRleE9mKGUpfHwod1tlXT13W2VdfHxudWxsKX0pLHd9dmFyIG09L14oW2EtejAtOS4rLV0qOlxcL1xcL1xcLykoW2EtejAtOS4rLV06XFwvKik/L2ksdj0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZChlLHQpe3ZhciByPVwic3RyaW5nXCI9PXR5cGVvZiBlP2YoZSk6ZTtlPVwib2JqZWN0XCI9PXR5cGVvZiBlP28oZSk6ZTt2YXIgcz1mKHQpLGM9XCJcIjtyLnByb3RvY29sJiYhci5zbGFzaGVzJiYoYz1yLnByb3RvY29sLGU9ZS5yZXBsYWNlKHIucHJvdG9jb2wsXCJcIiksYys9XCIvXCI9PT10WzBdfHxcIi9cIj09PWVbMF0/XCIvXCI6XCJcIiksYyYmcy5wcm90b2NvbCYmKGM9XCJcIixzLnNsYXNoZXN8fChjPXMucHJvdG9jb2wsdD10LnJlcGxhY2Uocy5wcm90b2NvbCxcIlwiKSkpO3ZhciBwPWUubWF0Y2gobSk7cCYmIXMucHJvdG9jb2wmJihlPWUuc3Vic3RyKChjPXBbMV0rKHBbMl18fFwiXCIpKS5sZW5ndGgpLC9eXFwvXFwvW15cXC9dLy50ZXN0KHQpJiYoYz1jLnNsaWNlKDAsLTEpKSk7dmFyIG49bmV3IFVSTChlLGgrXCIvXCIpLGw9bmV3IFVSTCh0LG4pLnRvU3RyaW5nKCkucmVwbGFjZShoLFwiXCIpLGk9cy5wcm90b2NvbHx8ci5wcm90b2NvbDtyZXR1cm4gaSs9ci5zbGFzaGVzfHxzLnNsYXNoZXM/XCIvL1wiOlwiXCIsIWMmJmk/bD1sLnJlcGxhY2UoYSxpKTpjJiYobD1sLnJlcGxhY2UoYSxcIlwiKSksdi50ZXN0KGwpfHx+dC5pbmRleE9mKFwiLlwiKXx8XCIvXCI9PT1lLnNsaWNlKC0xKXx8XCIvXCI9PT10LnNsaWNlKC0xKXx8XCIvXCIhPT1sLnNsaWNlKC0xKXx8KGw9bC5zbGljZSgwLC0xKSksYyYmKGw9YysoXCIvXCI9PT1sWzBdP2wuc3Vic3RyKDEpOmwpKSxsfWV4cG9ydHMucGFyc2U9ZixleHBvcnRzLmZvcm1hdD1vLGV4cG9ydHMucmVzb2x2ZT1kLGV4cG9ydHMucmVzb2x2ZU9iamVjdD1mdW5jdGlvbihlLHQpe3JldHVybiBmKGQoZSx0KSl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsIlxuICAgICh3aW5kb3cuX19ORVhUX1A9d2luZG93Ll9fTkVYVF9QfHxbXSkucHVzaChbXCIvX2FwcFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBtb2QgPSByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHAuanNcIilcbiAgICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcC5qc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZighbmV4dC5yb3V0ZXIuY29tcG9uZW50c1tcIi9fYXBwXCJdKSByZXR1cm5cbiAgICAgICAgICB2YXIgdXBkYXRlZFBhZ2UgPSByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHAuanNcIilcbiAgICAgICAgICBuZXh0LnJvdXRlci51cGRhdGUoXCIvX2FwcFwiLCB1cGRhdGVkUGFnZSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBtb2RcbiAgICB9XSk7XG4gICIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmV4cG9ydHMuUm91dGVyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IG1pdHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgaXNfZHluYW1pY18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbmNvbnN0IHJvdXRlX21hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG5jb25zdCByb3V0ZV9yZWdleF8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gdmFyaWFibGUgaXMgYWx3YXlzIGEgc3RyaW5nXG4gICAgY29uc3QgcCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEg7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihwKSAhPT0gMCA/IHAgKyBwYXRoIDogcGF0aDtcbn1cbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIHBhdGhuYW1lOiBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtwYXRobmFtZX0uanNvbmAsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBlcnIuY29kZSA9ICdQQUdFX0xPQURfRVJST1InO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUsIHF1ZXJ5LCBhcywgeyBpbml0aWFsUHJvcHMsIHBhZ2VMb2FkZXIsIEFwcCwgd3JhcEFwcCwgQ29tcG9uZW50LCBlcnIsIHN1YnNjcmlwdGlvbiwgaXNGYWxsYmFjaywgfSkge1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHt9O1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIHV0aWxzXzEuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAoZS5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgICAgICAgICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgICAgICAgICAgIHVybF8xLnBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUodXJsXzEucGFyc2UoYXNQYXRoKS5wYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICAgICAgICAgICAgOiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBudWxsLCB0aGlzLmlzU3NyLCBkYXRhID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHVybF8xLnBhcnNlKGFzUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMuYXNQYXRoID1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgIGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhcztcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgY29uc3QgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhZGRCYXNlUGF0aChhcyksIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhZGRCYXNlUGF0aChhcyksIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IHV0aWxzXzEuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAgICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyLCBsb2FkRXJyb3JGYWlsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnaXBFcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcyA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICB9KSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhKCgpID0+IF9fTl9TU0dcbiAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICB0aGlzLm5vdGlmeShkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgICAqL1xuICAgIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXSh0b1JvdXRlKHBhdGhuYW1lKSksXG4gICAgICAgICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSBkZWNvZGVVUklDb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXTtcbiAgICAgICAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcChlbnRyeSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgICAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVNYXRjaGVyID0gZ2V0Um91dGVNYXRjaGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKS5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgICAgICBncm91cHMsXG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkNvbnRhaW5lcj1Db250YWluZXI7ZXhwb3J0cy5jcmVhdGVVcmw9Y3JlYXRlVXJsO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfcmVmKXt2YXJ7Q29tcG9uZW50LGN0eH09X3JlZjt2YXIgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7Ly8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbi8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4vLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG5jb21wb25lbnREaWRDYXRjaChlcnJvcixfZXJyb3JJbmZvKXt0aHJvdyBlcnJvcjt9cmVuZGVyKCl7dmFye3JvdXRlcixDb21wb25lbnQscGFnZVByb3BzLF9fTl9TU0csX19OX1NTUH09dGhpcy5wcm9wcztyZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7fSxwYWdlUHJvcHMsLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4vLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuIShfX05fU1NHfHxfX05fU1NQKT97dXJsOmNyZWF0ZVVybChyb3V0ZXIpfTp7fSkpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7dmFyIHdhcm5Db250YWluZXI7dmFyIHdhcm5Vcmw7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3dhcm5Db250YWluZXI9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUud2FybihcIldhcm5pbmc6IHRoZSBgQ29udGFpbmVyYCBpbiBgX2FwcGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRcIik7fSk7d2FyblVybD0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS5lcnJvcihcIldhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvdXJsLWRlcHJlY2F0ZWRcIik7fSk7fS8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5mdW5jdGlvbiBDb250YWluZXIocCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FybkNvbnRhaW5lcigpO3JldHVybiBwLmNoaWxkcmVuO31mdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyKXsvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxudmFye3BhdGhuYW1lLGFzUGF0aCxxdWVyeX09cm91dGVyO3JldHVybntnZXQgcXVlcnkoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHF1ZXJ5O30sZ2V0IHBhdGhuYW1lKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBwYXRobmFtZTt9LGdldCBhc1BhdGgoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIGFzUGF0aDt9LGJhY2s6KCk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cm91dGVyLmJhY2soKTt9LHB1c2g6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5wdXNoKHVybCxhcyk7fSxwdXNoVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciBwdXNoUm91dGU9YXM/aHJlZjonJzt2YXIgcHVzaFVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLHB1c2hVcmwpO30scmVwbGFjZToodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLGFzKTt9LHJlcGxhY2VUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHJlcGxhY2VSb3V0ZT1hcz9ocmVmOicnO3ZhciByZXBsYWNlVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUscmVwbGFjZVVybCk7fX07fSIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdDsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjguNlxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7XG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUpO1xufVxuXG4vKipcbiAqIEZvcmtlZCBmcm9tIGZianMvd2FybmluZzpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvZTY2YmEyMGFkNWJlNDMzZWI1NDQyM2YyYjA5N2Q4MjkzMjRkOWRlNi9wYWNrYWdlcy9mYmpzL3NyYy9fX2ZvcmtzX18vd2FybmluZy5qc1xuICpcbiAqIE9ubHkgY2hhbmdlIGlzIHdlIHVzZSBjb25zb2xlLndhcm4gaW5zdGVhZCBvZiBjb25zb2xlLmVycm9yLFxuICogYW5kIGRvIG5vdGhpbmcgd2hlbiAnY29uc29sZScgaXMgbm90IHN1cHBvcnRlZC5cbiAqIFRoaXMgcmVhbGx5IHNpbXBsaWZpZXMgdGhlIGNvZGUuXG4gKiAtLS1cbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bsb3dQcmlvcml0eVdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nJDEgPSBsb3dQcmlvcml0eVdhcm5pbmc7XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuXG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcblxuLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTtcbiAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJZiBvYmouaGFzT3duUHJvcGVydHkgaGFzIGJlZW4gb3ZlcnJpZGRlbiwgdGhlbiBjYWxsaW5nXG4vLyBvYmouaGFzT3duUHJvcGVydHkocHJvcCkgd2lsbCBicmVhay5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzA3XG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHFzLCBzZXAsIGVxLCBvcHRpb25zKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICB2YXIgb2JqID0ge307XG5cbiAgaWYgKHR5cGVvZiBxcyAhPT0gJ3N0cmluZycgfHwgcXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciByZWdleHAgPSAvXFwrL2c7XG4gIHFzID0gcXMuc3BsaXQoc2VwKTtcblxuICB2YXIgbWF4S2V5cyA9IDEwMDA7XG4gIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm1heEtleXMgPT09ICdudW1iZXInKSB7XG4gICAgbWF4S2V5cyA9IG9wdGlvbnMubWF4S2V5cztcbiAgfVxuXG4gIHZhciBsZW4gPSBxcy5sZW5ndGg7XG4gIC8vIG1heEtleXMgPD0gMCBtZWFucyB0aGF0IHdlIHNob3VsZCBub3QgbGltaXQga2V5cyBjb3VudFxuICBpZiAobWF4S2V5cyA+IDAgJiYgbGVuID4gbWF4S2V5cykge1xuICAgIGxlbiA9IG1heEtleXM7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHggPSBxc1tpXS5yZXBsYWNlKHJlZ2V4cCwgJyUyMCcpLFxuICAgICAgICBpZHggPSB4LmluZGV4T2YoZXEpLFxuICAgICAgICBrc3RyLCB2c3RyLCBrLCB2O1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBrc3RyID0geC5zdWJzdHIoMCwgaWR4KTtcbiAgICAgIHZzdHIgPSB4LnN1YnN0cihpZHggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAga3N0ciA9IHg7XG4gICAgICB2c3RyID0gJyc7XG4gICAgfVxuXG4gICAgayA9IGRlY29kZVVSSUNvbXBvbmVudChrc3RyKTtcbiAgICB2ID0gZGVjb2RlVVJJQ29tcG9uZW50KHZzdHIpO1xuXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShvYmosIGspKSB7XG4gICAgICBvYmpba10gPSB2O1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICBvYmpba10ucHVzaCh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tdID0gW29ialtrXSwgdl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeVByaW1pdGl2ZSA9IGZ1bmN0aW9uKHYpIHtcbiAgc3dpdGNoICh0eXBlb2Ygdikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gdjtcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHYgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh2KSA/IHYgOiAnJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBzZXAsIGVxLCBuYW1lKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgb2JqID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG1hcChvYmplY3RLZXlzKG9iaiksIGZ1bmN0aW9uKGspIHtcbiAgICAgIHZhciBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUoaykpICsgZXE7XG4gICAgICBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIHJldHVybiBtYXAob2JqW2tdLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5mdW5jdGlvbiBtYXAgKHhzLCBmKSB7XG4gIGlmICh4cy5tYXApIHJldHVybiB4cy5tYXAoZik7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgIHJlcy5wdXNoKGYoeHNbaV0sIGkpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHJlcy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsX2MyZTEwZDE4M2I5NTBhNjdkOWU3ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfYzJlMTBkMTgzYjk1MGE2N2Q5ZTdcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgKiBhcyBTZW50cnkgZnJvbSAnQHNlbnRyeS9icm93c2VyJztcbmltcG9ydCBzZW50cnljb25maWcgZnJvbSAnLi4vc2VudHJ5LmNvbmZpZyc7XG5cblNlbnRyeS5pbml0KHtcbiAgZHNuOiBzZW50cnljb25maWcuZHNuLFxuICByZWxlYXNlOiBzZW50cnljb25maWcuY29uZmlnLnJlbGVhc2UsXG59KTtcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcblxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XG4gICAgU2VudHJ5LndpdGhTY29wZShzY29wZSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhlcnJvckluZm8pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgc2NvcGUuc2V0RXh0cmEoa2V5LCBlcnJvckluZm9ba2V5XSk7XG4gICAgICB9KTtcblxuICAgICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24oZXJyb3IpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbmZpZzoge1xuICAgIHByb2plY3Q6ICd0ZC13ZWJraXQnLFxuICAgIG9yZ2FuaXphdGlvbjogJ2xlaXNodScsXG4gICAgYXBpS2V5OiAnMDRmMWRjZTlmZGY4NGI4Y2FjYWVkYjg0ZGJiODc3OWQ2OGYxYjBjY2UzMmM0Mjk3YTYzOTdiYjRhYjdmMjMwMicsXG4gICAgYmFzZVNlbnRyeVVSTDogJ2h0dHA6Ly8xOTIuMTY4LjAuMjAxOjI5MTc3L2FwaS8wJyxcbiAgICByZWxlYXNlOiBgcmVsZWFzZS0ke3JlcXVpcmUoJy4vcGFja2FnZS5qc29uJykudmVyc2lvbn1gLFxuICB9LFxuICBkc246XG4gICAgJ2h0dHA6Ly81ZDdiYmU3YjIwNmI0ZWU5Yjk5YWUzYTQ3ODI5OGRjMTozM2U0YjYxMmM5Mjc0MGEwYmJmMTExZGNhY2JhMjk5M0AxOTIuMTY4LjAuMjAxOjI5MTc3LzYnLFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZGxsX2MyZTEwZDE4M2I5NTBhNjdkOWU3OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2RBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5UUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6TEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDNU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeFlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyY0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdmJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3SkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3S0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2xNQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNEQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7Ozs7Ozs7OztBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7O0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFDQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUE1QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUEsbURBT0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBcENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBbkRBO0FBQUE7QUFDQTtBQW9EQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBSUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBOztBQURBO0FBQ0E7QUFBQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBaFpBO0FBQ0EsaURBSUE7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQXlZQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsakJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBQ0E7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBY0E7QUFkQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQW1CQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBdUJBO0FBeEJBO0FBQ0E7QUFEQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFpQ0E7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7Ozs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7O0FBTEE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQkE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbE9BO0FBQ0E7QUFDQSxhQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4dEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBS0E7Ozs7Ozs7OztBQTlCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQVRBO0FBQ0E7QUFpQ0E7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9