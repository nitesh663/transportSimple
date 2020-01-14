(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <form [formGroup]=\"addRoutesForm\" autocomplete=\"off\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputCity\">Start Point:</label>\n        <input type=\"text\" class=\"form-control\" id=\"startPoint\" placeholder=\"Enter Start Point\"\n          formControlName=\"startPoint\">\n      </div>\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputState\">End Point:</label>\n        <input type=\"text\" class=\"form-control\" id=\"endPoint\" placeholder=\"Enter End Point\" formControlName=\"endPoint\">\n      </div>\n      <div class=\"form-group col-md-2\">\n\n        <button type=\"submit\" class=\"form-control btn btn-primary addBtn\" (click)=\"onAddPickupPoints()\"\n          [disabled]=\"addRoutesForm.invalid\"\n          [ngStyle]=\"{'cursor': addRoutesForm.invalid? 'not-allowed':'pointer'}\">ADD</button>\n      </div>\n    </div>\n  </form>\n  <!-- <div class=\"row\">\n    <div *ngFor=\"let r of addedRoutesArr\">\n      <div class=\"col\">\n        <div class=\"circle\"></div>\n        <div class=\"st-line\"></div>\n        <div class=\"\"><img src=\"assets/images/blue.png\" /></div>\n        {{r.startPoint}} - {{r.endPoint}}\n\n      </div>\n      <div class=\"col\">\n        <div class=\"\"><img src=\"assets/images/blue.png\" /></div>\n        {{r.startPoint}} - {{r.endPoint}}\n      </div>\n    </div>\n\n  </div> -->\n\n  <div class=\"row routes-container\">\n\n    <div class=\"trip-cotainer\" *ngFor=\"let r of addedRoutesArr\">\n      <div class=\"col-2\" [ngClass]=\"{'align-self-end':r.type == 'straightline' || r.type == 'arrow' || r.type == 'connectorup' || consecutive_count == 0,\n        'align-self-start':r.type == 'levelup' || r.type == 'connectordown' }\"\n        [ngStyle]=\"{'padding-top':r.type == 'straightline' || r.type == 'arrow' ? '80px':'0px' }\">\n        <span *ngIf=\"r.type == 'levelup' || r.type == 'connectordown'\"\n          [ngStyle]=\"{'color': r.type == 'levelup'?'#8ca6b9':'black'}\">{{r.startPoint}} - {{r.endPoint}}</span>\n\n        <div class=\"wrapper\" *ngIf=\"r.type == 'straightline'\">\n          <div class=\"circle1\"></div>\n          <div class=\"st-line\"></div>\n        </div>\n\n        <div class=\"wrapper\" *ngIf=\"r.type == 'arrow'\">\n          <div class=\"circle2\"></div>\n          <div class=\"line\"></div>\n          <div class=\"point\"></div>\n        </div>\n\n        <div class=\"wrapper\" *ngIf=\"r.type == 'connectorup'\">\n          <app-connector-up></app-connector-up>\n        </div>\n\n        <div class=\"wrapper\" *ngIf=\"r.type == 'levelup'\">\n          <div class=\"circle3\"></div>\n          <div class=\"st-line2\"></div>\n        </div>\n\n        <div class=\"wrapper\" *ngIf=\"r.type == 'connectordown'\">\n          <app-connector-down></app-connector-down>\n        </div>\n\n        <span *ngIf=\"r.type != 'levelup' && r.type != 'connectordown'\"\n          [ngStyle]=\"{'color': r.type == 'straightline'?'#595fab':r.type == 'arrow'?'#0085E5':r.type == 'connectorup'?'#eaa84a':'black'}\">{{r.startPoint}}\n          -\n          {{r.endPoint}}</span>\n      </div>\n    </div>\n\n    <!-- <div class=\"col-2 align-self-end\">\n\n        <div class=\"wrapper\">\n          <div class=\"circle1\"></div>\n          <div class=\"st-line\"></div>\n        </div>\n        <span>BLR - MAA</span>\n      </div>\n      <div class=\"col-2 align-self-end\">\n        <div class=\"wrapper\">\n          <div class=\"circle2\"></div>\n          <div class=\"line\"></div>\n          <div class=\"point\"></div>\n        </div>\n\n        MAA - HYD\n      </div> -->\n\n\n    <!-- <div class=\"col-2 align-self-end\">\n      <div class=\"wrapper\">\n        <app-connector-up></app-connector-up>\n      </div>\n      BLR - HYD\n    </div> -->\n    <!-- <div class=\"col-2 align-self-start\">\n      HYB - DEL\n      <div class=\"wrapper\">\n        <div class=\"circle3\"></div>\n        <div class=\"st-line2\"></div>\n      </div>\n    </div> -->\n    <!-- <div class=\"col-2 align-self-start\">\n      HYB - DEL\n      <div class=\"wrapper\">\n        <app-connector-down></app-connector-down>\n      </div>\n    </div> -->\n    <!-- <div class=\"col-2 align-self-end\">\n      DEL - BLR\n    </div> -->\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trips/connector-down/connector-down.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trips/connector-down/connector-down.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"imgCls\"><img src=\"assets/images/cyan-connector.png\" /></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trips/connector-up/connector-up.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trips/connector-up/connector-up.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"assets/images/orange-connector.png\" />");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* // .circle {\r\n//   background-color: #595fab;\r\n//   width: 10px;\r\n//   height: 10px;\r\n//   border-radius: 50%;\r\n//   margin-left: 28%;\r\n// } */\r\n\r\n.addBtn {\r\n  margin-top: 30px;\r\n}\r\n\r\n.routes-container {\r\n  margin-top: 20px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  width: 100%;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n.trip-cotainer {\r\n  /* display: flex; */\r\n  min-width: 200px;\r\n  /* padding-top: 80px; */\r\n}\r\n\r\n.col-2 {\r\n  min-width: 100% !important;\r\n}\r\n\r\n.st-line {\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #595fab;\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  margin-top: 6px;\r\n  margin-right: 3px;\r\n  /* margin-left: 40%; */\r\n}\r\n\r\n.st-line2 {\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #8ca6b9;\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  margin-top: 6px;\r\n  margin-right: 3px;\r\n  /* margin-left: 40%; */\r\n}\r\n\r\n.col-2 {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n/* .arrow {\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #0283e5;\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  margin-top: 4px;\r\n  /* margin-left: 40%; */\r\n\r\n/* }  */\r\n\r\n.wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n.wrapper .circle1 {\r\n  background-color: #595fab;\r\n  width: 16px;\r\n  height: 14px;\r\n  border-radius: 50%;\r\n  margin-right: 3px;\r\n}\r\n\r\n.wrapper .circle2 {\r\n  background-color: #0283e5;\r\n  width: 16px;\r\n  height: 14px;\r\n  border-radius: 50%;\r\n  margin-right: 3px;\r\n}\r\n\r\n.wrapper .circle3 {\r\n  width: 16px;\r\n  height: 14px;\r\n  background-color: #fff;\r\n  border-radius: 50%;\r\n  margin-right: 3px;\r\n  border: 2px solid #8ca6b9;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n.line {\r\n  margin-top: 6px;\r\n  width: 100%;\r\n  background: #0283e5;\r\n  height: 2px;\r\n  float: left;\r\n}\r\n\r\n.point {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid transparent;\r\n  border-bottom: 4px solid transparent;\r\n  border-left: 8px solid #0283e5;\r\n  float: right;\r\n  margin-top: 1px;\r\n}\r\n\r\n.connectorup-circle {\r\n  width: 16px;\r\n  height: 14px;\r\n  background-color: #fff;\r\n  border-radius: 50%;\r\n  margin-right: 3px;\r\n  border: 2px solid #eaa84a;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztNQU1NOztBQUVOO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7Ozt3QkFPd0I7O0FBQ3hCLE9BQU87O0FBRVA7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsaUNBQWlDO0VBQ2pDLG9DQUFvQztFQUNwQyw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLy8gLmNpcmNsZSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzU5NWZhYjtcclxuLy8gICB3aWR0aDogMTBweDtcclxuLy8gICBoZWlnaHQ6IDEwcHg7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAyOCU7XHJcbi8vIH0gKi9cclxuXHJcbi5hZGRCdG4ge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5yb3V0ZXMtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbi50cmlwLWNvdGFpbmVyIHtcclxuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgLyogcGFkZGluZy10b3A6IDgwcHg7ICovXHJcbn1cclxuXHJcbi5jb2wtMiB7XHJcbiAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdC1saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1ZmFiO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAvKiBtYXJnaW4tbGVmdDogNDAlOyAqL1xyXG59XHJcblxyXG4uc3QtbGluZTIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4Y2E2Yjk7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiA0MCU7ICovXHJcbn1cclxuXHJcbi5jb2wtMiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4vKiAuYXJyb3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjgzZTU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiA0MCU7ICovXHJcbi8qIH0gICovXHJcblxyXG4ud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuLndyYXBwZXIgLmNpcmNsZTEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTVmYWI7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG5cclxuLndyYXBwZXIgLmNpcmNsZTIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjgzZTU7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG5cclxuLndyYXBwZXIgLmNpcmNsZTMge1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjOGNhNmI5O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMwMjgzZTU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5wb2ludCB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjMDI4M2U1O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5jb25uZWN0b3J1cC1jaXJjbGUge1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZWFhODRhO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let AppComponent = class AppComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.title = "transport-web-app";
        this.addedRoutesArr = [];
        this.arrlength = 0;
        this.consecutive_count = 0;
        this.addRoutesForm = this.formBuilder.group({
            startPoint: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            endPoint: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]]
        });
    }
    ngOnInit() { }
    onAddPickupPoints() {
        let startPoint = this.addRoutesForm.value.startPoint
            .substring(0, 3)
            .toUpperCase();
        let endPoint = this.addRoutesForm.value.endPoint
            .substring(0, 3)
            .toUpperCase();
        if (startPoint == endPoint) {
            alert("Start point and End point should not be same");
            return false;
        }
        this.addedRoutesArr.push({
            startPoint: startPoint,
            endPoint: endPoint
        });
        this.arrlength = this.addedRoutesArr.length;
        if (this.consecutive_count == 0)
            this.addedRoutesArr[this.arrlength - 1].type = "straightline";
        if (this.arrlength > 1) {
            if (this.addedRoutesArr[this.arrlength - 2].startPoint !=
                this.addedRoutesArr[this.arrlength - 1].startPoint &&
                this.addedRoutesArr[this.arrlength - 2].startPoint !=
                    this.addedRoutesArr[this.arrlength - 1].endPoint &&
                this.addedRoutesArr[this.arrlength - 2].endPoint ==
                    this.addedRoutesArr[this.arrlength - 1].startPoint &&
                this.addedRoutesArr[this.arrlength - 2].endPoint !=
                    this.addedRoutesArr[this.arrlength - 1].endPoint) {
                if (this.consecutive_count != 0) {
                    this.addedRoutesArr[this.arrlength - 2].type = "connectordown";
                }
                else {
                    this.addedRoutesArr[this.arrlength - 2].type = "straightline";
                }
                this.consecutive_count = 0;
            }
            else if ((this.addedRoutesArr[this.arrlength - 2].startPoint !=
                this.addedRoutesArr[this.arrlength - 1].startPoint &&
                this.addedRoutesArr[this.arrlength - 2].startPoint !=
                    this.addedRoutesArr[this.arrlength - 1].endPoint &&
                this.addedRoutesArr[this.arrlength - 2].endPoint !=
                    this.addedRoutesArr[this.arrlength - 1].startPoint &&
                this.addedRoutesArr[this.arrlength - 2].endPoint ==
                    this.addedRoutesArr[this.arrlength - 1].endPoint) ||
                (this.addedRoutesArr[this.arrlength - 2].startPoint !=
                    this.addedRoutesArr[this.arrlength - 1].startPoint &&
                    this.addedRoutesArr[this.arrlength - 2].startPoint ==
                        this.addedRoutesArr[this.arrlength - 1].endPoint &&
                    this.addedRoutesArr[this.arrlength - 2].endPoint !=
                        this.addedRoutesArr[this.arrlength - 1].startPoint &&
                    this.addedRoutesArr[this.arrlength - 2].endPoint !=
                        this.addedRoutesArr[this.arrlength - 1].endPoint)) {
                console.log("entered arrow");
                if (this.consecutive_count != 0) {
                    this.addedRoutesArr[this.arrlength - 2].type = "connectordown";
                    this.addedRoutesArr[this.arrlength - 1].type = "connectordown";
                }
                else {
                    console.log("entered arrow1");
                    this.addedRoutesArr[this.arrlength - 2].type = "arrow";
                }
                this.consecutive_count = 0;
            }
            else if (this.addedRoutesArr[this.arrlength - 2].startPoint ==
                this.addedRoutesArr[this.arrlength - 1].startPoint &&
                this.addedRoutesArr[this.arrlength - 2].startPoint !=
                    this.addedRoutesArr[this.arrlength - 1].endPoint &&
                this.addedRoutesArr[this.arrlength - 2].endPoint !=
                    this.addedRoutesArr[this.arrlength - 1].startPoint &&
                this.addedRoutesArr[this.arrlength - 2].endPoint ==
                    this.addedRoutesArr[this.arrlength - 1].endPoint) {
                ++this.consecutive_count;
                this.addedRoutesArr[this.arrlength - 2].type = "levelup";
                this.addedRoutesArr[this.arrlength - 1].type = "levelup";
                if (this.addedRoutesArr[this.arrlength - 2 - this.consecutive_count])
                    this.addedRoutesArr[this.arrlength - 2 - this.consecutive_count].type = "connectorup";
            }
            else {
            }
        }
        else {
            this.addedRoutesArr[this.arrlength - 1].type = "straightline";
            this.consecutive_count = 0;
        }
        console.log(this.addedRoutesArr);
        // console.log(this.addedRoutesArr[0]);
        // var result = this.addedRoutesArr.map(function(el) {
        //   var o = Object.assign({}, el);
        //   o.isActive = true;
        //   return o;
        // });
        // const result = this.addedRoutesArr.map(v => ({ ...v, isActive: true }));
        // console.log(result);
        this.addRoutesForm.reset();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _trips_connector_down_connector_down__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trips/connector-down/connector-down */ "./src/app/trips/connector-down/connector-down.ts");
/* harmony import */ var _trips_connector_up_connector_up__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trips/connector-up/connector-up */ "./src/app/trips/connector-up/connector-up.ts");







// import { TripsModule } from "./trips/trips.module";


let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _trips_connector_down_connector_down__WEBPACK_IMPORTED_MODULE_7__["ConnectorDownComponent"], _trips_connector_up_connector_up__WEBPACK_IMPORTED_MODULE_8__["ConnectorUpComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"]
            // TripsModule
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/trips/connector-down/connector-down.ts":
/*!********************************************************!*\
  !*** ./src/app/trips/connector-down/connector-down.ts ***!
  \********************************************************/
/*! exports provided: ConnectorDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectorDownComponent", function() { return ConnectorDownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConnectorDownComponent = class ConnectorDownComponent {
};
ConnectorDownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-connector-down",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./connector-down.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trips/connector-down/connector-down.html")).default
        //   styleUrls: ["./app.component.css"]
    })
], ConnectorDownComponent);



/***/ }),

/***/ "./src/app/trips/connector-up/connector-up.ts":
/*!****************************************************!*\
  !*** ./src/app/trips/connector-up/connector-up.ts ***!
  \****************************************************/
/*! exports provided: ConnectorUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectorUpComponent", function() { return ConnectorUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConnectorUpComponent = class ConnectorUpComponent {
};
ConnectorUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-connector-up",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./connector-up.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trips/connector-up/connector-up.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./connector.up.css */ "./src/app/trips/connector-up/connector.up.css")).default]
    })
], ConnectorUpComponent);



/***/ }),

/***/ "./src/app/trips/connector-up/connector.up.css":
/*!*****************************************************!*\
  !*** ./src/app/trips/connector-up/connector.up.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyaXBzL2Nvbm5lY3Rvci11cC9jb25uZWN0b3IudXAuY3NzIn0= */");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular-Workspace\assignments\transport-web-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map