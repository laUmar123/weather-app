/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/WorkSans-VariableFont_wght.ttf */ "./src/assets/WorkSans-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Work Sans';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n    --light-blue: #4ba6cf;\n    --dark-blue: #0c4a6e;\n    --orange: #ecb347;\n    --search-background-color: #06263b;\n    --faded-white: rgba(255, 255, 255, 0.603);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Work Sans', sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background: linear-gradient(to bottom, var(--light-blue), var(--dark-blue));\n    color: white;\n    display: grid;\n    grid-template-rows: 0.5fr 5fr 5fr 0.5fr;\n    row-gap: 2rem;\n}\n\nheader {\n    grid-row: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 1.5rem\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 1.3rem;\n}\n\n.title-end {\n    color: var(--orange);\n}\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n    display: none;\n}\n\n.search-form {\n    display: flex;\n    align-items: center;\n    width: 25rem;\n    position: relative;\n    transform: translateY(4px);\n    margin-right: 55px;\n}\n\n#search-bar {\n    border-radius: 20px;\n    border: none;\n    width: 100%;\n    height: 2.5rem;\n    background-color: var(--search-background-color);\n    padding: 0 0.8rem;\n    color: white;\n    font-size: 1rem;\n}\n\n#search-bar::placeholder {\n    color: white;\n}\n\n.search-button {\n    background-color: transparent;\n    border: none;\n    position: absolute;\n    z-index: 1;\n    height: 1.5rem;\n    left: 88%;\n    cursor: pointer;\n}\n\n.change-degrees {\n    width: 20rem;\n    height: 2.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 0.5rem;\n}\n\n.btn {\n    cursor: pointer;\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.fahrenheit-btn,\n.celsius-btn {\n    height: 2rem;\n    width: 4rem;\n    border-radius: 20px;\n    background-color: var(--search-background-color);\n    font-size: 1rem;\n    transition: border 60ms ease-in;\n}\n\n.fahrenheit-btn:hover,\n.celsius-btn:hover,\n.daily-weather-btn:hover,\n.hourly-weather-btn:hover,\n.active {\n    border: 2px solid white;\n}\n\n.current-day-information {\n    justify-self: center;\n    grid-row: 2;\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n    grid-template-columns: 1fr 2fr;\n    width: 43rem;\n    height: 30rem;\n}\n\n.location-details {\n    grid-row: 1;\n    grid-column: 1 / -1;\n    justify-self: center;\n    text-align: center;\n    padding: 1rem;\n}\n\n.city-details {\n    font-size: 2.5rem;\n}\n\n.day-details {\n    font-size: 1.5rem;\n    margin-top: 0.5rem;\n    color: var(--faded-white);\n    font-weight: 500;\n}\n\n.time-details {\n    border-left: 2px solid var(--faded-white);\n    padding-left: 7px;\n    margin-left: 7px;\n}\n\n.current-temp-details {\n    grid-row: 2;\n    grid-column: 1;\n    justify-self: center;\n    align-self: center;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    row-gap: 0;\n}\n\n.temp-details {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n    gap: 0.3rem;\n}\n\n.temp-details>img {\n    height: 6rem;\n    width: 6rem;\n}\n\n.temp-description {\n    font-size: 1.7rem;\n    font-weight: 400;\n}\n\n.feels-like,\n.general-description {\n    font-size: 1.5rem;\n    font-weight: 300;\n    color: var(--faded-white);\n}\n\n.extra-information {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    padding: 0.5rem;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n}\n\n.extra-information>div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n}\n\n.wind-information {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.wind-direction {\n    height: 1.7rem;\n}\n\n.extra-information h5,\n.extra-information p {\n    font-weight: 600;\n}\n\n.extra-information h5 {\n    font-size: 1.2rem;\n    color: var(--faded-white);\n}\n\n.extra-information p {\n    font-size: 1.5rem;\n}\n\n.safe,\n.amber,\n.danger {\n    border-radius: 999px;\n    width: 40%;\n    margin: 0 auto;\n}\n\n.safe {\n    background-color: rgb(51, 192, 51);\n}\n\n.amber {\n    background-color: orange;\n}\n\n.danger {\n    background-color: rgb(192, 0, 0);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,4CAAmD;AACvD;;AAEA;IACI,qBAAqB;IACrB,oBAAoB;IACpB,iBAAiB;IACjB,kCAAkC;IAClC,yCAAyC;AAC7C;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,2EAA2E;IAC3E,YAAY;IACZ,aAAa;IACb,uCAAuC;IACvC,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;;;IAII,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,cAAc;IACd,gDAAgD;IAChD,iBAAiB;IACjB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,cAAc;IACd,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,gDAAgD;IAChD,eAAe;IACf,+BAA+B;AACnC;;AAEA;;;;;IAKI,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,WAAW;IACX,aAAa;IACb,2BAA2B;IAC3B,8BAA8B;IAC9B,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,yCAAyC;IACzC,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;;IAEI,iBAAiB;IACjB,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,eAAe;IACf,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;;IAGI,oBAAoB;IACpB,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,gCAAgC;AACpC","sourcesContent":["@font-face {\n    font-family: 'Work Sans';\n    src: url('./assets/WorkSans-VariableFont_wght.ttf');\n}\n\n:root {\n    --light-blue: #4ba6cf;\n    --dark-blue: #0c4a6e;\n    --orange: #ecb347;\n    --search-background-color: #06263b;\n    --faded-white: rgba(255, 255, 255, 0.603);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Work Sans', sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background: linear-gradient(to bottom, var(--light-blue), var(--dark-blue));\n    color: white;\n    display: grid;\n    grid-template-rows: 0.5fr 5fr 5fr 0.5fr;\n    row-gap: 2rem;\n}\n\nheader {\n    grid-row: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 1.5rem\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 1.3rem;\n}\n\n.title-end {\n    color: var(--orange);\n}\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n    display: none;\n}\n\n.search-form {\n    display: flex;\n    align-items: center;\n    width: 25rem;\n    position: relative;\n    transform: translateY(4px);\n    margin-right: 55px;\n}\n\n#search-bar {\n    border-radius: 20px;\n    border: none;\n    width: 100%;\n    height: 2.5rem;\n    background-color: var(--search-background-color);\n    padding: 0 0.8rem;\n    color: white;\n    font-size: 1rem;\n}\n\n#search-bar::placeholder {\n    color: white;\n}\n\n.search-button {\n    background-color: transparent;\n    border: none;\n    position: absolute;\n    z-index: 1;\n    height: 1.5rem;\n    left: 88%;\n    cursor: pointer;\n}\n\n.change-degrees {\n    width: 20rem;\n    height: 2.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 0.5rem;\n}\n\n.btn {\n    cursor: pointer;\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.fahrenheit-btn,\n.celsius-btn {\n    height: 2rem;\n    width: 4rem;\n    border-radius: 20px;\n    background-color: var(--search-background-color);\n    font-size: 1rem;\n    transition: border 60ms ease-in;\n}\n\n.fahrenheit-btn:hover,\n.celsius-btn:hover,\n.daily-weather-btn:hover,\n.hourly-weather-btn:hover,\n.active {\n    border: 2px solid white;\n}\n\n.current-day-information {\n    justify-self: center;\n    grid-row: 2;\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n    grid-template-columns: 1fr 2fr;\n    width: 43rem;\n    height: 30rem;\n}\n\n.location-details {\n    grid-row: 1;\n    grid-column: 1 / -1;\n    justify-self: center;\n    text-align: center;\n    padding: 1rem;\n}\n\n.city-details {\n    font-size: 2.5rem;\n}\n\n.day-details {\n    font-size: 1.5rem;\n    margin-top: 0.5rem;\n    color: var(--faded-white);\n    font-weight: 500;\n}\n\n.time-details {\n    border-left: 2px solid var(--faded-white);\n    padding-left: 7px;\n    margin-left: 7px;\n}\n\n.current-temp-details {\n    grid-row: 2;\n    grid-column: 1;\n    justify-self: center;\n    align-self: center;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    row-gap: 0;\n}\n\n.temp-details {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n    gap: 0.3rem;\n}\n\n.temp-details>img {\n    height: 6rem;\n    width: 6rem;\n}\n\n.temp-description {\n    font-size: 1.7rem;\n    font-weight: 400;\n}\n\n.feels-like,\n.general-description {\n    font-size: 1.5rem;\n    font-weight: 300;\n    color: var(--faded-white);\n}\n\n.extra-information {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    padding: 0.5rem;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n}\n\n.extra-information>div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n}\n\n.wind-information {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.wind-direction {\n    height: 1.7rem;\n}\n\n.extra-information h5,\n.extra-information p {\n    font-weight: 600;\n}\n\n.extra-information h5 {\n    font-size: 1.2rem;\n    color: var(--faded-white);\n}\n\n.extra-information p {\n    font-size: 1.5rem;\n}\n\n.safe,\n.amber,\n.danger {\n    border-radius: 999px;\n    width: 40%;\n    margin: 0 auto;\n}\n\n.safe {\n    background-color: rgb(51, 192, 51);\n}\n\n.amber {\n    background-color: orange;\n}\n\n.danger {\n    background-color: rgb(192, 0, 0);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/currentTemperatureSection.js":
/*!******************************************!*\
  !*** ./src/currentTemperatureSection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentDayInformationContainer": () => (/* binding */ currentDayInformationContainer),
/* harmony export */   "onLoadDefaultWeather": () => (/* binding */ onLoadDefaultWeather)
/* harmony export */ });
/* harmony import */ var _generatorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generatorFunctions */ "./src/generatorFunctions.js");
/* harmony import */ var _retrieveInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retrieveInformation */ "./src/retrieveInformation.js");



const currentDayInformationContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['current-day-information']); //this is the container that contains all elements that will provide information about the current moment

/**
 * This function is used to create the element that will be displayed on screen to show the location and time of the city searched
 * @param {string} city the name of the city that needs to be displayed on screen 
 * @param {string} country the name of the country that needs to be displayed on screen 
 * @param {string} day the date that has converted into a string using the Intl API
 * @param {string} time the time that needs to be displayed on screen
 * @returns a DOM element that contains nested elements that display information about the location and time
 */
function displayLocationDetails(city = '', country = '', day = '', time = '') {
    const locationDetails = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['location-details']);
    const cityName = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['city'], city);
    const countryName = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['country'], country);
    const timeDetails = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['time-details'], time);
    const cityDetailsHeader = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h2', ['city-details'], ', ', cityName, countryName);
    const dayDetailsHeader = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h4', ['day-details'], day, undefined, timeDetails);
    locationDetails.append(cityDetailsHeader, dayDetailsHeader);
    return locationDetails;
};

/**
 * This function is used to display the current temperature along with its associated image
 * @param {string} image this is the path to the image that needs to be displayed 
 * @param {string} temp the string representation of the current temperature 
 * @returns a div element that has two further elements appended within it displaying the current temperature along with its associated image
 */
function tempDetailsSection(image, temp) {
    const tempDetailsContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['temp-details']);
    const currentTemp = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['temp'], temp);
    tempDetailsContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.imgGenerator)(image, undefined, ['image-weather-description']), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h2', ['current-temp'], '°', currentTemp, (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveMethodOfMeasurement)()));
    return tempDetailsContainer;
};

/**
 * This function is used to display the temperature it feels like along with the outdoor conditions
 * @param {string} description a description of outdoor conditions
 * @param {string} feelsLikeTemp a string representation of the temperature that it feels like
 * @returns a div element that has two further elements appended within it displaying the outdoor conditions at the current moment and the temperature it feels like
 */
function tempConditionsSection(description, feelsLikeTemp) {
    const tempConditionsContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['temp-conditions']);
    const feelsLikeHeader = document.createElement('h4');
    feelsLikeHeader.classList.add('feels-like');
    feelsLikeHeader.insertAdjacentHTML('afterbegin', `Feels like <span class="feels-like-temp">${feelsLikeTemp}</span>°<span class="method-of-measurement">${(0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.isMethodOfMeasurementCelsius)() === true ? 'C' : 'F'}</span>`);
    tempConditionsContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h3', ['temp-description'], description), feelsLikeHeader);
    return tempConditionsContainer;
};

/**
 * This functions job is to append the two arguments into the ucrrentTempDetails div which will then be displayed on screen
 * @param {object} tempDetailsSection a dom element object that is the first child of the currentTempDetailsContainer
 * @param {object} tempConditionsSection a dom element object that is the second child of the currentTempDetailsContainer
 * @returns a dom element object contains the two arguments passed as children
 */
function currentTempDetailsSection(tempDetailsSection, tempConditionsSection) {
    const currentTempDetailsContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['current-temp-details']);
    currentTempDetailsContainer.append(tempDetailsSection, tempConditionsSection);
    return currentTempDetailsContainer;
};

/**
 * This function is used to append all 9 arguments into the extraInformationContainer that will then be displayed onto the screen
 * @param {object} windInfo a DOM element object that is supposed to be the DOM element displaying wind direction and speed
 * @param {object} humidityInfo a DOM element object that is supposed to be the DOM element displaying humidity percentage
 * @param {object} uvInfo a DOM element object that is supposed to be the DOM element displaying uv-index 
 * @param {object} visibilityInfo a DOM element object that is supposed to be the DOM element displaying visibility distance
 * @param {object} cloudinessInfo a DOM element object that is supposed to be the DOM element displaying cloudiness percentage
 * @param {object} rainInfo a DOM element object that is supposed to be the DOM element displaying the chance of rain
 * @param {object} sunriseInfo a DOM element object that is supposed to be the DOM element displaying sunrise time
 * @param {object} sunsetInfo a DOM element object that is supposed to be the DOM element displaying sunset time
 * @param {object} moonInfo a DOM element object that is supposed to be the DOM element displaying moon-phase information
 * @returns a DOM element object that contains 9 children, which are all the arguments that have been passed
 */
function extraInformationSection(windInfo, humidityInfo, uvInfo, visibilityInfo, cloudinessInfo, rainInfo, sunriseInfo, sunsetInfo, moonInfo) {
    const extraInformationContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['extra-information']);
    extraInformationContainer.append(windInfo, humidityInfo, uvInfo, visibilityInfo, cloudinessInfo, rainInfo, sunriseInfo, sunsetInfo, moonInfo);
    return extraInformationContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays information about the wind
 * @param {string} windArrowRotation the degrees by which the arrow that is pointed north should rotate
 * @param {string} windSpeed the speed of the wind
 * @returns a DOM element object that will be used to display information about the wind speed and direction
 */
function windInformation(windArrowRotation, windSpeed) {
    const windContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['wind']);
    const windInformationContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['wind-information']);
    const windSpeedSpan = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['wind-num'], windSpeed);
    windInformationContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.imgGenerator)('./../src/assets/arrow.png', 'An arrow rotated by the window direction degrees', ['wind-direction'], windArrowRotation), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['wind-speed'], 'mph', windSpeedSpan));
    windContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'Wind'), windInformationContainer);
    return windContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays the humidity percentage
 * @param {string} humidityNumber the humidity currently 
 * @returns a DOM element object that will be used to display the humidity percentage
 */
function humidityInformation(humidityNumber) {
    const humidityContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['humidity']);
    const humidity = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['humidity-number'], humidityNumber)
    humidityContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'Humidity'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['humidity-percentage'], '%', humidity));
    return humidityContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays the uv-index
 * @param {string} uvIndexNumber the uv-index currently
 * @returns a DOM element object that will be used to display the uv-index
 */
function uvInformation(uvIndexNumber) {
    const uvContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['uv-index']);
    uvContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'UV Index'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['uv', (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.checkCategoryOfUv)(uvIndexNumber)], uvIndexNumber));
    return uvContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays the visibility distance
 * @param {string} visibilityDistance the current visibility distance
 * @returns a DOM element object that will be used to display the visibility distance
 */
function visibilityInformation(visibilityDistance) {
    const visibilityContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['visibility']);
    const visiblityDistanceSpan = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['visibility-num'], visibilityDistance);
    visibilityContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'Visibility'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['visibility-distance'], 'km', visiblityDistanceSpan));
    return visibilityContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays the current cloud percentage
 * @param {string} cloudPercentage the current cloud percentage
 * @returns a DOM element object that will be used to display the current cloud percentage
 */
function cloudinessInformation(cloudPercentage) {
    const cloudinessContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['cloudiness']);
    const cloudinessPercentageSpan = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['cloudiness-num'], cloudPercentage);
    cloudinessContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'Cloudiness'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['cloudiness-percentage'], '%', cloudinessPercentageSpan));
    return cloudinessContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays the current rain percentage
 * @param {string} rainPercentage the current rain percentage
 * @returns a DOM element object that will be used to display the current rain percentage
 */
function rainInformation(rainPercentage) {
    const rainContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['chance-of-rain']);
    const rainPercentageSpan = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['chance-of-rain-num'], rainPercentage);
    rainContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'Chance of Rain'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['chance-of-rain-percentage'], '%', rainPercentageSpan));
    return rainContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays the sunrise time
 * @param {string} sunriseTime the sunrise time for the day
 * @returns a DOM element object that will be used to display the sunrise time
 */
function sunriseInformation(sunriseTime) {
    const sunriseContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['sunrise']);
    sunriseContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'Sunrise'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['sunrise-time'], sunriseTime));
    return sunriseContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays the sunset time
 * @param {string} sunsetTime the sunset time for the day
 * @returns a DOM element object that will be used to display the sunset time
 */
function sunsetInformation(sunsetTime) {
    const sunsetContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['sunset']);
    sunsetContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'Sunset'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['sunset-time'], sunsetTime));
    return sunsetContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays the current moon phase
 * @param {string} moonPhase the current moon phase
 * @returns a DOM element object that will be used to display the current moon phase
 */
function moonInformation(moonPhase) {
    const moonphaseContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['moon-phase']);
    moonphaseContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'Moon Phase'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['phase'], moonPhase));
    return moonphaseContainer;
};

/**
 * This function is to be used when the webpage is loaded up and it fills the webpage with the required information with the default city being london
 */
async function onLoadDefaultWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=d26a8a90752f45c2a03154907230505&q=london&days=7&aqi=no&alerts=no', { mode: 'cors' });
    const londonInfo = await response.json();
    currentDayInformationContainer.append(displayLocationDetails((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveCity)(londonInfo), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveCountry)(londonInfo), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.createStandardDate)((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveDateAndTimeArr)(londonInfo)[0]), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.createStandardTime)((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveDateAndTimeArr)(londonInfo)[1])));
    currentDayInformationContainer.append(currentTempDetailsSection(tempDetailsSection((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveCurrentTempImg)(londonInfo), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveCurrentTemp)(londonInfo)), tempConditionsSection((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveCurrentCondition)(londonInfo), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveFeelsLikeTemp)(londonInfo))));
    currentDayInformationContainer.append(extraInformationSection(windInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveWindDegrees)(londonInfo), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveWindSpeed)(londonInfo)), humidityInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveHumidity)(londonInfo)),
        uvInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveUvNum)(londonInfo)), visibilityInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveVisibilityDistance)(londonInfo)), cloudinessInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveCloudinessPercentage)(londonInfo)), rainInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveChanceOfRain)(londonInfo)),
        sunriseInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveSunriseTime)(londonInfo)), sunsetInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveSunsetTime)(londonInfo)), moonInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveMoonPhase)(londonInfo))));
};



/***/ }),

/***/ "./src/generatorFunctions.js":
/*!***********************************!*\
  !*** ./src/generatorFunctions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonGenerator": () => (/* binding */ buttonGenerator),
/* harmony export */   "checkCategoryOfUv": () => (/* binding */ checkCategoryOfUv),
/* harmony export */   "divGenerator": () => (/* binding */ divGenerator),
/* harmony export */   "formGenerator": () => (/* binding */ formGenerator),
/* harmony export */   "headingGenerator": () => (/* binding */ headingGenerator),
/* harmony export */   "imgGenerator": () => (/* binding */ imgGenerator),
/* harmony export */   "inputGenerator": () => (/* binding */ inputGenerator),
/* harmony export */   "paragraphGenerator": () => (/* binding */ paragraphGenerator),
/* harmony export */   "spanGenerator": () => (/* binding */ spanGenerator)
/* harmony export */ });
/**
 * this function takes an array of classes and adds those classes to the element using a forEach loop
 * @param {Array} classes an array of classes that need to be added to the element
 * @param {object} element the element that we need to add the classes to 
 */
function addClassesToElement(classes, element) {
    classes.forEach(individualClass => element.classList.add(individualClass));
};

/**
 * this function generates a div element with its classes provided as an argument
 * @param {Array} classes an array of classes that need to be added to the div
 * @returns a div DOM element
 */
function divGenerator(classes) {
    const div = document.createElement('div');
    addClassesToElement(classes, div)
    return div;
};

/**
 * this function generates an img element, with the specified, src, alt and classes
 * @param {string} src the path to the image we want to use
 * @param {string} alt the alt description of the img incase it doesn't load
 * @param {Array} classes an array of classes that need to be added to the img
 * @returns an img element
 */
function imgGenerator(src, alt = '', classes, rotation = 0) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    addClassesToElement(classes, img);
    img.style.rotate = `${rotation}deg`
    return img;
};

/**
 * this function generates a heading of the desired size, and adds the text specified as well as the classes provided
 * @param {string} headingSize 1 of 6 sizes we want the heading to be e.g. 'h1'
 * @param {Array} classes an array of classes that need to be added to the heading
 * @param {string} text the text the heading needs to display 
 * @param {object} spanElementPreppend a dom element that we want to add before the text part of the heading
 * @param {object} spanElementAppend a dom element that we want to add after the text part of the heading
 * @returns a heading DOM element
 */
function headingGenerator(headingSize, classes, text, spanElementPreppend = '', spanElementAppend = '') {
    const heading = document.createElement(headingSize);
    heading.innerHTML = text;
    heading.prepend(spanElementPreppend)
    heading.append(spanElementAppend)
    addClassesToElement(classes, heading);
    return heading;
};

/**
 * this function generates a button with the classes and text provided
 * @param {Array} classes an array of classes that need to be added to the heading
 * @param {string} text the text needed within the button 
 * @returns a button element
 */
function buttonGenerator(classes, text) {
    const btn = document.createElement('button');
    addClassesToElement(classes, btn);
    btn.innerHTML = text;
    return btn;
};

/**
 * this function generates a span element with the classes and text provided
 * @param {Array} classes an array of classes that need to be added to the heading
 * @param {string} text the text needed within the span 
 * @returns a span element
 */
function spanGenerator(classes, text) {
    const span = document.createElement('span');
    addClassesToElement(classes, span);
    span.innerHTML = text;
    return span;
};

/**
 * this function generates a form element with the classes provided
 * @param {Array} classes an array of classes that need to be added to the form
 * @returns a form element
 */
function formGenerator(classes) {
    const form = document.createElement('form');
    addClassesToElement(classes, form);
    return form;
};

/**
 * this function generates an input element and adds the specified attributes and values to it
 * @param {Array} attributes an array of arrays where each element has the attribute, and it's associated value 
 * @returns an input element
 */
function inputGenerator(attributes) {
    const input = document.createElement('input');
    attributes.forEach(attribute => input.setAttribute(attribute[0], attribute[1]));
    return input;
};

/**
 * This function creates a paragraph element and fills it with the arguments provided
 * @param {Array} classes an array of classes that need to be added to the form
 * @param {string} text the text needed within the <p></p> 
 * @param {object} spanElementPreppend a dom element that we want to add before the text part of the paragraph
 * @param {object} spanElementAppend a dom element that we want to add after the text part of the paragraph
 * @returns a <p></p> element that is customised as specified
 */
function paragraphGenerator(classes, text, spanElementPreppend = '', spanElementAppend = '') {
    const paragraph = document.createElement('p');
    addClassesToElement(classes, paragraph);
    paragraph.innerText = text;
    paragraph.prepend(spanElementPreppend)
    paragraph.append(spanElementAppend)
    return paragraph;
};

/**
 * This function is used to help choose the correct class based on the uv-index number provided
 * @param {number} uvNum the number that we want to check whether or not it's value is a safe, amber or danger value 
 * @returns a string that classifies the value
 */
function checkCategoryOfUv(uvNum) {
    switch (true) {
        case uvNum <= 2:
            return 'safe';
        case uvNum <= 7:
            return 'amber';
        case uvNum >= 8:
            return 'danger';
    }
};



/***/ }),

/***/ "./src/headerSection.js":
/*!******************************!*\
  !*** ./src/headerSection.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _generatorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generatorFunctions */ "./src/generatorFunctions.js");


/**
 * This function creates the title section of the header
 * @returns a DOM element object that contains the title and the page logo
 */
function titleSection() {
    const titleContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['title']);
    titleContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.imgGenerator)('./../src/assets/page-icon.png', 'a circular icon depicting all 4 seasons', ['main-icon']), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h1', ['page-title'], 'Weather', undefined, (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['title-end'], 'Watch')));
    return titleContainer;
};

/**
 * This function creates the search bar section of the header
 * @returns a DOM element object that contains the search bar
 */
function headerFormSection() {
    const form = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.formGenerator)(['search-form']);
    form.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.inputGenerator)([['type', 'search'], ['id', 'search-bar'], ['placeholder', 'Search a location'], ['required', true]]), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.imgGenerator)('./../src/assets/search-icon.svg', 'A magnifying glass', ['search-button']));
    return form;
};

/**
 * This function creates the buttons used to control whether the temperature is displayed in celsius or fahrenheit
 * @returns a DOM element object that contains two buttons
 */
function headerButtons() {
    const buttonsContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['change-degrees']);
    buttonsContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.buttonGenerator)(['celsius-btn', 'btn', 'active'], '°C'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.buttonGenerator)(['fahrenheit-btn', 'btn'], '°F'));
    return buttonsContainer;
};

/**
 * This function is used to create the header with all of its content
 * @returns A DOM element object the contains everything needed in the header
 */
function header() {
    const header = document.createElement('header');
    header.append(titleSection(), headerFormSection(), headerButtons());
    return header;
};



/***/ }),

/***/ "./src/retrieveInformation.js":
/*!************************************!*\
  !*** ./src/retrieveInformation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStandardDate": () => (/* binding */ createStandardDate),
/* harmony export */   "createStandardTime": () => (/* binding */ createStandardTime),
/* harmony export */   "isMethodOfMeasurementCelsius": () => (/* binding */ isMethodOfMeasurementCelsius),
/* harmony export */   "retrieveChanceOfRain": () => (/* binding */ retrieveChanceOfRain),
/* harmony export */   "retrieveCity": () => (/* binding */ retrieveCity),
/* harmony export */   "retrieveCloudinessPercentage": () => (/* binding */ retrieveCloudinessPercentage),
/* harmony export */   "retrieveCountry": () => (/* binding */ retrieveCountry),
/* harmony export */   "retrieveCurrentCondition": () => (/* binding */ retrieveCurrentCondition),
/* harmony export */   "retrieveCurrentTemp": () => (/* binding */ retrieveCurrentTemp),
/* harmony export */   "retrieveCurrentTempImg": () => (/* binding */ retrieveCurrentTempImg),
/* harmony export */   "retrieveDateAndTimeArr": () => (/* binding */ retrieveDateAndTimeArr),
/* harmony export */   "retrieveFeelsLikeTemp": () => (/* binding */ retrieveFeelsLikeTemp),
/* harmony export */   "retrieveHumidity": () => (/* binding */ retrieveHumidity),
/* harmony export */   "retrieveMethodOfMeasurement": () => (/* binding */ retrieveMethodOfMeasurement),
/* harmony export */   "retrieveMoonPhase": () => (/* binding */ retrieveMoonPhase),
/* harmony export */   "retrieveSunriseTime": () => (/* binding */ retrieveSunriseTime),
/* harmony export */   "retrieveSunsetTime": () => (/* binding */ retrieveSunsetTime),
/* harmony export */   "retrieveUvNum": () => (/* binding */ retrieveUvNum),
/* harmony export */   "retrieveVisibilityDistance": () => (/* binding */ retrieveVisibilityDistance),
/* harmony export */   "retrieveWindDegrees": () => (/* binding */ retrieveWindDegrees),
/* harmony export */   "retrieveWindSpeed": () => (/* binding */ retrieveWindSpeed)
/* harmony export */ });
/* harmony import */ var _generatorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generatorFunctions */ "./src/generatorFunctions.js");


/**
 * This function converts the date into the GB style of date
 * @param {string or Date} date either a string or Date version can be provided and this is the date we want convert into an Intl date 
 * @returns an object that is the correct format of date
 */
function createStandardDate(date) {
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Intl.DateTimeFormat("en-GB", options).format(date.toISOString);
};

/**
 * This function is called to make the time have a 0 at the start if the number before the colon is not double digits yet
 * @param {string} time the time that needs to be padded
 * @returns a padded version of the time, e.g. if its 1:11 it gets changed to 01:11
 */
function createStandardTime(time) {
    return time.padStart(5, 0);
};

/**
 * This function retrieves the city value from the obj provided
 * @param {object} obj the .json() version of the value returned by the fetch call 
 * @returns a string that is the city name provided by the obj
 */
function retrieveCity(obj) {
    return obj.location.name;
};

/**
 * This function retrieves the country value from the obj provided
 * @param {object} obj the .json() version of the value returned by the fetch call 
 * @returns a string that is the country name provided by the obj
 */
function retrieveCountry(obj) {
    return obj.location.country;
};

/**
 * This function retrieves the date and time value from the obj provided
 * @param {object} obj the .json() version of the value returned by the fetch call 
 * @returns an Array that stores the date in index 0 and the time in index 1
 */
function retrieveDateAndTimeArr(obj) {
    return obj.location.localtime.split(' ');
};

/**
 * This functions finds whether the celsius or fahrenheit button is active so the right symbol can be displayed
 * @returns a span element with the correct symbol
 */
function retrieveMethodOfMeasurement() {
    if (document.querySelector('.celsius-btn').classList.contains('active')) return (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['method-of-measurement'], 'C');
    else if (document.querySelector('.fahrenheit-btn').classList.contains('active')) return (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['method-of-measurement'], 'F');
};

/**
 * This functions finds whether the celsius or fahrenheit button is active so the right symbol can be displayed
 * @returns a boolean value of whether or not the method of measurement is celsius
 */
function isMethodOfMeasurementCelsius() {
    if (document.querySelector('.celsius-btn').classList.contains('active')) return true;
    else if (document.querySelector('.fahrenheit-btn').classList.contains('active')) return false;
};

/**
 * This function is used to retrieve the wind degrees from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the wind degrees
 */
function retrieveWindDegrees(obj) {
    return obj.current.wind_degree;
};

/**
 * This function is used to retrieve the wind speed from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the wind speed
 */
function retrieveWindSpeed(obj) {
    return obj.current.wind_mph;
};

/**
 * This function is used to retrieve the humidity from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the humidity
 */
function retrieveHumidity(obj) {
    return obj.current.humidity
};

/**
 * This function is used to retrieve the uv-index from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the uv-index
 */
function retrieveUvNum(obj) {
    return obj.current.uv;
};

/**
 * This function is used to retrieve the visibility distance from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the visibility distance
 */
function retrieveVisibilityDistance(obj) {
    return obj.current.vis_km;
};

/**
 * This function is used to retrieve the cloudiness percentage from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the cloudiness percentage
 */
function retrieveCloudinessPercentage(obj) {
    return obj.current.cloud;
};

/**
 * This function is used to retrieve the chance of rain from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the chance of rain
 */
function retrieveChanceOfRain(obj) {
    return obj.forecast.forecastday[0].day.daily_chance_of_rain;
};

/**
 * This function is used to retrieve the sunrise time from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the sunrise time 
 */
function retrieveSunriseTime(obj) {
    return obj.forecast.forecastday[0].astro.sunrise.slice(0, -3);
};

/**
 * This function is used to retrieve the sunset time from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the sunset time
 */
function retrieveSunsetTime(obj) {
    const sunset = obj.forecast.forecastday[0].astro.sunset;
    const sunsetHour = Number(sunset[0] + sunset[1]);
    const sunsetHour24 = sunsetHour + 12;
    return sunsetHour24 + sunset.slice(2, -3);
};

/**
 * This function is used to retrieve the current moon phase from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the current moon phase
 */
function retrieveMoonPhase(obj) {
    return obj.forecast.forecastday[0].astro.moon_phase;
};

/**
 * This function is used to retrieve the current temperature image from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the current temperature image
 */
function retrieveCurrentTempImg(obj) {
    return obj.current.condition.icon;
};

/**
 * This function is used to retrieve the current temperature from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the current temperature
 */
function retrieveCurrentTemp(obj) {
    return obj.current.temp_c;
}

/**
 * This function is used to retrieve the temperature that it feels like currently from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the current temperature it feels like
 */
function retrieveFeelsLikeTemp(obj) {
    return obj.current.feelslike_c;
}

/**
 * This function is used to retrieve the current outdoor condition from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the current outdoor condition
 */
function retrieveCurrentCondition(obj) {
    return obj.current.condition.text;
}



/***/ }),

/***/ "./src/assets/WorkSans-VariableFont_wght.ttf":
/*!***************************************************!*\
  !*** ./src/assets/WorkSans-VariableFont_wght.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d233a482b8595377758.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _headerSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerSection */ "./src/headerSection.js");
/* harmony import */ var _currentTemperatureSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentTemperatureSection */ "./src/currentTemperatureSection.js");




document.body.append((0,_headerSection__WEBPACK_IMPORTED_MODULE_1__.header)(), _currentTemperatureSection__WEBPACK_IMPORTED_MODULE_2__.currentDayInformationContainer);
window.addEventListener('load', _currentTemperatureSection__WEBPACK_IMPORTED_MODULE_2__.onLoadDefaultWeather);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkpBQTBEO0FBQ3RHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCwrQkFBK0IsMkRBQTJELEdBQUcsV0FBVyw0QkFBNEIsMkJBQTJCLHdCQUF3Qix5Q0FBeUMsZ0RBQWdELEdBQUcsT0FBTyxnQkFBZ0IsaUJBQWlCLDZCQUE2QiwyQ0FBMkMsR0FBRyxVQUFVLG1CQUFtQixvQkFBb0Isa0ZBQWtGLG1CQUFtQixvQkFBb0IsOENBQThDLG9CQUFvQixHQUFHLFlBQVksa0JBQWtCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLDZCQUE2QixZQUFZLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLHdCQUF3QixHQUFHLGdCQUFnQiwyQkFBMkIsR0FBRyxrT0FBa08sb0JBQW9CLEdBQUcsa0JBQWtCLG9CQUFvQiwwQkFBMEIsbUJBQW1CLHlCQUF5QixpQ0FBaUMseUJBQXlCLEdBQUcsaUJBQWlCLDBCQUEwQixtQkFBbUIsa0JBQWtCLHFCQUFxQix1REFBdUQsd0JBQXdCLG1CQUFtQixzQkFBc0IsR0FBRyw4QkFBOEIsbUJBQW1CLEdBQUcsb0JBQW9CLG9DQUFvQyxtQkFBbUIseUJBQXlCLGlCQUFpQixxQkFBcUIsZ0JBQWdCLHNCQUFzQixHQUFHLHFCQUFxQixtQkFBbUIscUJBQXFCLG9CQUFvQiwwQkFBMEIsMkJBQTJCLGtCQUFrQixHQUFHLFVBQVUsc0JBQXNCLG1CQUFtQixtQkFBbUIsd0JBQXdCLEdBQUcsb0NBQW9DLG1CQUFtQixrQkFBa0IsMEJBQTBCLHVEQUF1RCxzQkFBc0Isc0NBQXNDLEdBQUcsaUhBQWlILDhCQUE4QixHQUFHLDhCQUE4QiwyQkFBMkIsa0JBQWtCLG9CQUFvQixrQ0FBa0MscUNBQXFDLG1CQUFtQixvQkFBb0IsR0FBRyx1QkFBdUIsa0JBQWtCLDBCQUEwQiwyQkFBMkIseUJBQXlCLG9CQUFvQixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLHlCQUF5QixnQ0FBZ0MsdUJBQXVCLEdBQUcsbUJBQW1CLGdEQUFnRCx3QkFBd0IsdUJBQXVCLEdBQUcsMkJBQTJCLGtCQUFrQixxQkFBcUIsMkJBQTJCLHlCQUF5QixtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsaUJBQWlCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQkFBMEIsc0JBQXNCLGtCQUFrQixHQUFHLHVCQUF1QixtQkFBbUIsa0JBQWtCLEdBQUcsdUJBQXVCLHdCQUF3Qix1QkFBdUIsR0FBRyx3Q0FBd0Msd0JBQXdCLHVCQUF1QixnQ0FBZ0MsR0FBRyx3QkFBd0Isb0JBQW9CLDRDQUE0Qyx5Q0FBeUMsc0JBQXNCLDBCQUEwQiw0QkFBNEIseUJBQXlCLEdBQUcsNEJBQTRCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLEdBQUcsdUJBQXVCLG9CQUFvQiwwQkFBMEIsZUFBZSxHQUFHLHFCQUFxQixxQkFBcUIsR0FBRyxrREFBa0QsdUJBQXVCLEdBQUcsMkJBQTJCLHdCQUF3QixnQ0FBZ0MsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsOEJBQThCLDJCQUEyQixpQkFBaUIscUJBQXFCLEdBQUcsV0FBVyx5Q0FBeUMsR0FBRyxZQUFZLCtCQUErQixHQUFHLGFBQWEsdUNBQXVDLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sU0FBUyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksc0NBQXNDLCtCQUErQiwwREFBMEQsR0FBRyxXQUFXLDRCQUE0QiwyQkFBMkIsd0JBQXdCLHlDQUF5QyxnREFBZ0QsR0FBRyxPQUFPLGdCQUFnQixpQkFBaUIsNkJBQTZCLDJDQUEyQyxHQUFHLFVBQVUsbUJBQW1CLG9CQUFvQixrRkFBa0YsbUJBQW1CLG9CQUFvQiw4Q0FBOEMsb0JBQW9CLEdBQUcsWUFBWSxrQkFBa0Isb0JBQW9CLHFDQUFxQywwQkFBMEIsNkJBQTZCLFlBQVksb0JBQW9CLDBCQUEwQixnQkFBZ0Isd0JBQXdCLEdBQUcsZ0JBQWdCLDJCQUEyQixHQUFHLGtPQUFrTyxvQkFBb0IsR0FBRyxrQkFBa0Isb0JBQW9CLDBCQUEwQixtQkFBbUIseUJBQXlCLGlDQUFpQyx5QkFBeUIsR0FBRyxpQkFBaUIsMEJBQTBCLG1CQUFtQixrQkFBa0IscUJBQXFCLHVEQUF1RCx3QkFBd0IsbUJBQW1CLHNCQUFzQixHQUFHLDhCQUE4QixtQkFBbUIsR0FBRyxvQkFBb0Isb0NBQW9DLG1CQUFtQix5QkFBeUIsaUJBQWlCLHFCQUFxQixnQkFBZ0Isc0JBQXNCLEdBQUcscUJBQXFCLG1CQUFtQixxQkFBcUIsb0JBQW9CLDBCQUEwQiwyQkFBMkIsa0JBQWtCLEdBQUcsVUFBVSxzQkFBc0IsbUJBQW1CLG1CQUFtQix3QkFBd0IsR0FBRyxvQ0FBb0MsbUJBQW1CLGtCQUFrQiwwQkFBMEIsdURBQXVELHNCQUFzQixzQ0FBc0MsR0FBRyxpSEFBaUgsOEJBQThCLEdBQUcsOEJBQThCLDJCQUEyQixrQkFBa0Isb0JBQW9CLGtDQUFrQyxxQ0FBcUMsbUJBQW1CLG9CQUFvQixHQUFHLHVCQUF1QixrQkFBa0IsMEJBQTBCLDJCQUEyQix5QkFBeUIsb0JBQW9CLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IseUJBQXlCLGdDQUFnQyx1QkFBdUIsR0FBRyxtQkFBbUIsZ0RBQWdELHdCQUF3Qix1QkFBdUIsR0FBRywyQkFBMkIsa0JBQWtCLHFCQUFxQiwyQkFBMkIseUJBQXlCLG1CQUFtQixvQkFBb0IsNkJBQTZCLDhCQUE4QixpQkFBaUIsR0FBRyxtQkFBbUIsb0JBQW9CLDBCQUEwQixzQkFBc0Isa0JBQWtCLEdBQUcsdUJBQXVCLG1CQUFtQixrQkFBa0IsR0FBRyx1QkFBdUIsd0JBQXdCLHVCQUF1QixHQUFHLHdDQUF3Qyx3QkFBd0IsdUJBQXVCLGdDQUFnQyxHQUFHLHdCQUF3QixvQkFBb0IsNENBQTRDLHlDQUF5QyxzQkFBc0IsMEJBQTBCLDRCQUE0Qix5QkFBeUIsR0FBRyw0QkFBNEIsb0JBQW9CLDZCQUE2QixrQkFBa0IsR0FBRyx1QkFBdUIsb0JBQW9CLDBCQUEwQixlQUFlLEdBQUcscUJBQXFCLHFCQUFxQixHQUFHLGtEQUFrRCx1QkFBdUIsR0FBRywyQkFBMkIsd0JBQXdCLGdDQUFnQyxHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyw4QkFBOEIsMkJBQTJCLGlCQUFpQixxQkFBcUIsR0FBRyxXQUFXLHlDQUF5QyxHQUFHLFlBQVksK0JBQStCLEdBQUcsYUFBYSx1Q0FBdUMsR0FBRyxtQkFBbUI7QUFDamlXO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2IwSTtBQUN5Vzs7QUFFbmYsdUNBQXVDLGlFQUFZLCtCQUErQjs7QUFFbEY7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUVBQVk7QUFDeEMscUJBQXFCLGtFQUFhO0FBQ2xDLHdCQUF3QixrRUFBYTtBQUNyQyx3QkFBd0Isa0VBQWE7QUFDckMsOEJBQThCLHFFQUFnQjtBQUM5Qyw2QkFBNkIscUVBQWdCO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUVBQVk7QUFDN0Msd0JBQXdCLGtFQUFhO0FBQ3JDLGdDQUFnQyxpRUFBWSxtREFBbUQscUVBQWdCLDJDQUEyQyxpRkFBMkI7QUFDckw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUVBQVk7QUFDaEQ7QUFDQTtBQUNBLGlHQUFpRyxjQUFjLDhDQUE4QyxrRkFBNEIsd0JBQXdCO0FBQ2pOLG1DQUFtQyxxRUFBZ0I7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsaUVBQVk7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaUVBQVk7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpRUFBWTtBQUN0QyxxQ0FBcUMsaUVBQVk7QUFDakQsMEJBQTBCLGtFQUFhO0FBQ3ZDLG9DQUFvQyxpRUFBWSwwSEFBMEgsdUVBQWtCO0FBQzVMLHlCQUF5QixxRUFBZ0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpRUFBWTtBQUMxQyxxQkFBcUIsa0VBQWE7QUFDbEMsNkJBQTZCLHFFQUFnQix3QkFBd0IsdUVBQWtCO0FBQ3ZGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUVBQVk7QUFDcEMsdUJBQXVCLHFFQUFnQix3QkFBd0IsdUVBQWtCLFFBQVEsc0VBQWlCO0FBQzFHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUVBQVk7QUFDNUMsa0NBQWtDLGtFQUFhO0FBQy9DLCtCQUErQixxRUFBZ0IsMEJBQTBCLHVFQUFrQjtBQUMzRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlFQUFZO0FBQzVDLHFDQUFxQyxrRUFBYTtBQUNsRCwrQkFBK0IscUVBQWdCLDBCQUEwQix1RUFBa0I7QUFDM0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpRUFBWTtBQUN0QywrQkFBK0Isa0VBQWE7QUFDNUMseUJBQXlCLHFFQUFnQiw4QkFBOEIsdUVBQWtCO0FBQ3pGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaUVBQVk7QUFDekMsNEJBQTRCLHFFQUFnQix1QkFBdUIsdUVBQWtCO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUVBQVk7QUFDeEMsMkJBQTJCLHFFQUFnQixzQkFBc0IsdUVBQWtCO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUVBQVk7QUFDM0MsOEJBQThCLHFFQUFnQiwwQkFBMEIsdUVBQWtCO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1SkFBdUosY0FBYztBQUNySztBQUNBLGlFQUFpRSxrRUFBWSxjQUFjLHFFQUFlLGNBQWMsd0VBQWtCLENBQUMsNEVBQXNCLGtCQUFrQix3RUFBa0IsQ0FBQyw0RUFBc0I7QUFDNU4sdUZBQXVGLDRFQUFzQixjQUFjLHlFQUFtQixxQ0FBcUMsOEVBQXdCLGNBQWMsMkVBQXFCO0FBQzlPLGtGQUFrRix5RUFBbUIsY0FBYyx1RUFBaUIsbUNBQW1DLHNFQUFnQjtBQUN2TCxzQkFBc0IsbUVBQWEscUNBQXFDLGdGQUEwQixxQ0FBcUMsa0ZBQTRCLCtCQUErQiwwRUFBb0I7QUFDdE4sMkJBQTJCLHlFQUFtQixpQ0FBaUMsd0VBQWtCLCtCQUErQix1RUFBaUI7QUFDako7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pNQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJbUo7O0FBRW5KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUVBQVk7QUFDdkMsMEJBQTBCLGlFQUFZLDZGQUE2RixxRUFBZ0IsNkNBQTZDLGtFQUFhO0FBQzdNO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrRUFBYTtBQUM5QixnQkFBZ0IsbUVBQWMsd0dBQXdHLGlFQUFZO0FBQ2xKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpRUFBWTtBQUN6Qyw0QkFBNEIsb0VBQWUsMENBQTBDLG9FQUFlO0FBQ3BHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENxRDs7QUFFckQ7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0Ysa0VBQWE7QUFDakcsNEZBQTRGLGtFQUFhO0FBQ3pHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdE1BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ29CO0FBQzBEOztBQUVuRyxxQkFBcUIsc0RBQU0sSUFBSSxzRkFBOEI7QUFDN0QsZ0NBQWdDLDRFQUFvQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2N1cnJlbnRUZW1wZXJhdHVyZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2VuZXJhdG9yRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlYWRlclNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcmV0cmlldmVJbmZvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9Xb3JrU2Fucy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1saWdodC1ibHVlOiAjNGJhNmNmO1xcbiAgICAtLWRhcmstYmx1ZTogIzBjNGE2ZTtcXG4gICAgLS1vcmFuZ2U6ICNlY2IzNDc7XFxuICAgIC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3I6ICMwNjI2M2I7XFxuICAgIC0tZmFkZWQtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1kYXJrLWJsdWUpKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDVmciA1ZnIgMC41ZnI7XFxuICAgIHJvdy1nYXA6IDJyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtXFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50aXRsZS1lbmQge1xcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxuICAgIG1hcmdpbi1yaWdodDogNTVweDtcXG59XFxuXFxuI3NlYXJjaC1iYXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwIDAuOHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNzZWFyY2gtYmFyOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBsZWZ0OiA4OCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoYW5nZS1kZWdyZWVzIHtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mYWhyZW5oZWl0LWJ0bixcXG4uY2Vsc2l1cy1idG4ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDYwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmZhaHJlbmhlaXQtYnRuOmhvdmVyLFxcbi5jZWxzaXVzLWJ0bjpob3ZlcixcXG4uZGFpbHktd2VhdGhlci1idG46aG92ZXIsXFxuLmhvdXJseS13ZWF0aGVyLWJ0bjpob3ZlcixcXG4uYWN0aXZlIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jdXJyZW50LWRheS1pbmZvcm1hdGlvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIHdpZHRoOiA0M3JlbTtcXG4gICAgaGVpZ2h0OiAzMHJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLWRldGFpbHMge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNpdHktZGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uZGF5LWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udGltZS1kZXRhaWxzIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1mYWRlZC13aGl0ZSk7XFxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xcbn1cXG5cXG4uY3VycmVudC10ZW1wLWRldGFpbHMge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDA7XFxufVxcblxcbi50ZW1wLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzPmltZyB7XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgd2lkdGg6IDZyZW07XFxufVxcblxcbi50ZW1wLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5mZWVscy1saWtlLFxcbi5nZW5lcmFsLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlZC13aGl0ZSk7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbj5kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLndpbmQtaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLndpbmQtZGlyZWN0aW9uIHtcXG4gICAgaGVpZ2h0OiAxLjdyZW07XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiBoNSxcXG4uZXh0cmEtaW5mb3JtYXRpb24gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiBoNSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uc2FmZSxcXG4uYW1iZXIsXFxuLmRhbmdlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnNhZmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDE5MiwgNTEpO1xcbn1cXG5cXG4uYW1iZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5kYW5nZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAwLCAwKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBOzs7O0lBSUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLGdEQUFnRDtJQUNoRCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdEQUFnRDtJQUNoRCxlQUFlO0lBQ2YsK0JBQStCO0FBQ25DOztBQUVBOzs7OztJQUtJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7OztJQUdJLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvV29ya1NhbnMtVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1saWdodC1ibHVlOiAjNGJhNmNmO1xcbiAgICAtLWRhcmstYmx1ZTogIzBjNGE2ZTtcXG4gICAgLS1vcmFuZ2U6ICNlY2IzNDc7XFxuICAgIC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3I6ICMwNjI2M2I7XFxuICAgIC0tZmFkZWQtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1kYXJrLWJsdWUpKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDVmciA1ZnIgMC41ZnI7XFxuICAgIHJvdy1nYXA6IDJyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtXFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50aXRsZS1lbmQge1xcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxuICAgIG1hcmdpbi1yaWdodDogNTVweDtcXG59XFxuXFxuI3NlYXJjaC1iYXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwIDAuOHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNzZWFyY2gtYmFyOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBsZWZ0OiA4OCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoYW5nZS1kZWdyZWVzIHtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mYWhyZW5oZWl0LWJ0bixcXG4uY2Vsc2l1cy1idG4ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDYwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmZhaHJlbmhlaXQtYnRuOmhvdmVyLFxcbi5jZWxzaXVzLWJ0bjpob3ZlcixcXG4uZGFpbHktd2VhdGhlci1idG46aG92ZXIsXFxuLmhvdXJseS13ZWF0aGVyLWJ0bjpob3ZlcixcXG4uYWN0aXZlIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jdXJyZW50LWRheS1pbmZvcm1hdGlvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIHdpZHRoOiA0M3JlbTtcXG4gICAgaGVpZ2h0OiAzMHJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLWRldGFpbHMge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNpdHktZGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uZGF5LWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udGltZS1kZXRhaWxzIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1mYWRlZC13aGl0ZSk7XFxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xcbn1cXG5cXG4uY3VycmVudC10ZW1wLWRldGFpbHMge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDA7XFxufVxcblxcbi50ZW1wLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzPmltZyB7XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgd2lkdGg6IDZyZW07XFxufVxcblxcbi50ZW1wLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5mZWVscy1saWtlLFxcbi5nZW5lcmFsLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlZC13aGl0ZSk7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbj5kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLndpbmQtaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLndpbmQtZGlyZWN0aW9uIHtcXG4gICAgaGVpZ2h0OiAxLjdyZW07XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiBoNSxcXG4uZXh0cmEtaW5mb3JtYXRpb24gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiBoNSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uc2FmZSxcXG4uYW1iZXIsXFxuLmRhbmdlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnNhZmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDE5MiwgNTEpO1xcbn1cXG5cXG4uYW1iZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5kYW5nZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAwLCAwKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjaGVja0NhdGVnb3J5T2ZVdiwgZGl2R2VuZXJhdG9yLCBoZWFkaW5nR2VuZXJhdG9yLCBpbWdHZW5lcmF0b3IsIHBhcmFncmFwaEdlbmVyYXRvciwgc3BhbkdlbmVyYXRvciB9IGZyb20gJy4vZ2VuZXJhdG9yRnVuY3Rpb25zJztcbmltcG9ydCB7IGNyZWF0ZVN0YW5kYXJkRGF0ZSwgY3JlYXRlU3RhbmRhcmRUaW1lLCByZXRyaWV2ZUNpdHksIHJldHJpZXZlQ291bnRyeSwgcmV0cmlldmVEYXRlQW5kVGltZUFyciwgcmV0cmlldmVNZXRob2RPZk1lYXN1cmVtZW50LCBpc01ldGhvZE9mTWVhc3VyZW1lbnRDZWxzaXVzLCByZXRyaWV2ZVdpbmREZWdyZWVzLCByZXRyaWV2ZVdpbmRTcGVlZCwgcmV0cmlldmVIdW1pZGl0eSwgcmV0cmlldmVVdk51bSwgcmV0cmlldmVWaXNpYmlsaXR5RGlzdGFuY2UsIHJldHJpZXZlQ2xvdWRpbmVzc1BlcmNlbnRhZ2UsIHJldHJpZXZlQ2hhbmNlT2ZSYWluLCByZXRyaWV2ZVN1bnJpc2VUaW1lLCByZXRyaWV2ZVN1bnNldFRpbWUsIHJldHJpZXZlTW9vblBoYXNlLCByZXRyaWV2ZUN1cnJlbnRUZW1wSW1nLCByZXRyaWV2ZUN1cnJlbnRUZW1wLCByZXRyaWV2ZUN1cnJlbnRDb25kaXRpb24sIHJldHJpZXZlRmVlbHNMaWtlVGVtcCB9IGZyb20gJy4vcmV0cmlldmVJbmZvcm1hdGlvbidcblxuY29uc3QgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnY3VycmVudC1kYXktaW5mb3JtYXRpb24nXSk7IC8vdGhpcyBpcyB0aGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgYWxsIGVsZW1lbnRzIHRoYXQgd2lsbCBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IG1vbWVudFxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBvbiBzY3JlZW4gdG8gc2hvdyB0aGUgbG9jYXRpb24gYW5kIHRpbWUgb2YgdGhlIGNpdHkgc2VhcmNoZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaXR5IHRoZSBuYW1lIG9mIHRoZSBjaXR5IHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkIG9uIHNjcmVlbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb3VudHJ5IHRoZSBuYW1lIG9mIHRoZSBjb3VudHJ5IHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkIG9uIHNjcmVlbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXkgdGhlIGRhdGUgdGhhdCBoYXMgY29udmVydGVkIGludG8gYSBzdHJpbmcgdXNpbmcgdGhlIEludGwgQVBJXG4gKiBAcGFyYW0ge3N0cmluZ30gdGltZSB0aGUgdGltZSB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZCBvbiBzY3JlZW5cbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgdGhhdCBjb250YWlucyBuZXN0ZWQgZWxlbWVudHMgdGhhdCBkaXNwbGF5IGluZm9ybWF0aW9uIGFib3V0IHRoZSBsb2NhdGlvbiBhbmQgdGltZVxuICovXG5mdW5jdGlvbiBkaXNwbGF5TG9jYXRpb25EZXRhaWxzKGNpdHkgPSAnJywgY291bnRyeSA9ICcnLCBkYXkgPSAnJywgdGltZSA9ICcnKSB7XG4gICAgY29uc3QgbG9jYXRpb25EZXRhaWxzID0gZGl2R2VuZXJhdG9yKFsnbG9jYXRpb24tZGV0YWlscyddKTtcbiAgICBjb25zdCBjaXR5TmFtZSA9IHNwYW5HZW5lcmF0b3IoWydjaXR5J10sIGNpdHkpO1xuICAgIGNvbnN0IGNvdW50cnlOYW1lID0gc3BhbkdlbmVyYXRvcihbJ2NvdW50cnknXSwgY291bnRyeSk7XG4gICAgY29uc3QgdGltZURldGFpbHMgPSBzcGFuR2VuZXJhdG9yKFsndGltZS1kZXRhaWxzJ10sIHRpbWUpO1xuICAgIGNvbnN0IGNpdHlEZXRhaWxzSGVhZGVyID0gaGVhZGluZ0dlbmVyYXRvcignaDInLCBbJ2NpdHktZGV0YWlscyddLCAnLCAnLCBjaXR5TmFtZSwgY291bnRyeU5hbWUpO1xuICAgIGNvbnN0IGRheURldGFpbHNIZWFkZXIgPSBoZWFkaW5nR2VuZXJhdG9yKCdoNCcsIFsnZGF5LWRldGFpbHMnXSwgZGF5LCB1bmRlZmluZWQsIHRpbWVEZXRhaWxzKTtcbiAgICBsb2NhdGlvbkRldGFpbHMuYXBwZW5kKGNpdHlEZXRhaWxzSGVhZGVyLCBkYXlEZXRhaWxzSGVhZGVyKTtcbiAgICByZXR1cm4gbG9jYXRpb25EZXRhaWxzO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZGlzcGxheSB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBhbG9uZyB3aXRoIGl0cyBhc3NvY2lhdGVkIGltYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgdGhpcyBpcyB0aGUgcGF0aCB0byB0aGUgaW1hZ2UgdGhhdCBuZWVkcyB0byBiZSBkaXNwbGF5ZWQgXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcCB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIFxuICogQHJldHVybnMgYSBkaXYgZWxlbWVudCB0aGF0IGhhcyB0d28gZnVydGhlciBlbGVtZW50cyBhcHBlbmRlZCB3aXRoaW4gaXQgZGlzcGxheWluZyB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBhbG9uZyB3aXRoIGl0cyBhc3NvY2lhdGVkIGltYWdlXG4gKi9cbmZ1bmN0aW9uIHRlbXBEZXRhaWxzU2VjdGlvbihpbWFnZSwgdGVtcCkge1xuICAgIGNvbnN0IHRlbXBEZXRhaWxzQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsndGVtcC1kZXRhaWxzJ10pO1xuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gc3BhbkdlbmVyYXRvcihbJ3RlbXAnXSwgdGVtcCk7XG4gICAgdGVtcERldGFpbHNDb250YWluZXIuYXBwZW5kKGltZ0dlbmVyYXRvcihpbWFnZSwgdW5kZWZpbmVkLCBbJ2ltYWdlLXdlYXRoZXItZGVzY3JpcHRpb24nXSksIGhlYWRpbmdHZW5lcmF0b3IoJ2gyJywgWydjdXJyZW50LXRlbXAnXSwgJ8KwJywgY3VycmVudFRlbXAsIHJldHJpZXZlTWV0aG9kT2ZNZWFzdXJlbWVudCgpKSk7XG4gICAgcmV0dXJuIHRlbXBEZXRhaWxzQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZGlzcGxheSB0aGUgdGVtcGVyYXR1cmUgaXQgZmVlbHMgbGlrZSBhbG9uZyB3aXRoIHRoZSBvdXRkb29yIGNvbmRpdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiBhIGRlc2NyaXB0aW9uIG9mIG91dGRvb3IgY29uZGl0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IGZlZWxzTGlrZVRlbXAgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRlbXBlcmF0dXJlIHRoYXQgaXQgZmVlbHMgbGlrZVxuICogQHJldHVybnMgYSBkaXYgZWxlbWVudCB0aGF0IGhhcyB0d28gZnVydGhlciBlbGVtZW50cyBhcHBlbmRlZCB3aXRoaW4gaXQgZGlzcGxheWluZyB0aGUgb3V0ZG9vciBjb25kaXRpb25zIGF0IHRoZSBjdXJyZW50IG1vbWVudCBhbmQgdGhlIHRlbXBlcmF0dXJlIGl0IGZlZWxzIGxpa2VcbiAqL1xuZnVuY3Rpb24gdGVtcENvbmRpdGlvbnNTZWN0aW9uKGRlc2NyaXB0aW9uLCBmZWVsc0xpa2VUZW1wKSB7XG4gICAgY29uc3QgdGVtcENvbmRpdGlvbnNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd0ZW1wLWNvbmRpdGlvbnMnXSk7XG4gICAgY29uc3QgZmVlbHNMaWtlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBmZWVsc0xpa2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZmVlbHMtbGlrZScpO1xuICAgIGZlZWxzTGlrZUhlYWRlci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgRmVlbHMgbGlrZSA8c3BhbiBjbGFzcz1cImZlZWxzLWxpa2UtdGVtcFwiPiR7ZmVlbHNMaWtlVGVtcH08L3NwYW4+wrA8c3BhbiBjbGFzcz1cIm1ldGhvZC1vZi1tZWFzdXJlbWVudFwiPiR7aXNNZXRob2RPZk1lYXN1cmVtZW50Q2Vsc2l1cygpID09PSB0cnVlID8gJ0MnIDogJ0YnfTwvc3Bhbj5gKTtcbiAgICB0ZW1wQ29uZGl0aW9uc0NvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDMnLCBbJ3RlbXAtZGVzY3JpcHRpb24nXSwgZGVzY3JpcHRpb24pLCBmZWVsc0xpa2VIZWFkZXIpO1xuICAgIHJldHVybiB0ZW1wQ29uZGl0aW9uc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbnMgam9iIGlzIHRvIGFwcGVuZCB0aGUgdHdvIGFyZ3VtZW50cyBpbnRvIHRoZSB1Y3JyZW50VGVtcERldGFpbHMgZGl2IHdoaWNoIHdpbGwgdGhlbiBiZSBkaXNwbGF5ZWQgb24gc2NyZWVuXG4gKiBAcGFyYW0ge29iamVjdH0gdGVtcERldGFpbHNTZWN0aW9uIGEgZG9tIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgdGhlIGZpcnN0IGNoaWxkIG9mIHRoZSBjdXJyZW50VGVtcERldGFpbHNDb250YWluZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSB0ZW1wQ29uZGl0aW9uc1NlY3Rpb24gYSBkb20gZWxlbWVudCBvYmplY3QgdGhhdCBpcyB0aGUgc2Vjb25kIGNoaWxkIG9mIHRoZSBjdXJyZW50VGVtcERldGFpbHNDb250YWluZXJcbiAqIEByZXR1cm5zIGEgZG9tIGVsZW1lbnQgb2JqZWN0IGNvbnRhaW5zIHRoZSB0d28gYXJndW1lbnRzIHBhc3NlZCBhcyBjaGlsZHJlblxuICovXG5mdW5jdGlvbiBjdXJyZW50VGVtcERldGFpbHNTZWN0aW9uKHRlbXBEZXRhaWxzU2VjdGlvbiwgdGVtcENvbmRpdGlvbnNTZWN0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudFRlbXBEZXRhaWxzQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnY3VycmVudC10ZW1wLWRldGFpbHMnXSk7XG4gICAgY3VycmVudFRlbXBEZXRhaWxzQ29udGFpbmVyLmFwcGVuZCh0ZW1wRGV0YWlsc1NlY3Rpb24sIHRlbXBDb25kaXRpb25zU2VjdGlvbik7XG4gICAgcmV0dXJuIGN1cnJlbnRUZW1wRGV0YWlsc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGFwcGVuZCBhbGwgOSBhcmd1bWVudHMgaW50byB0aGUgZXh0cmFJbmZvcm1hdGlvbkNvbnRhaW5lciB0aGF0IHdpbGwgdGhlbiBiZSBkaXNwbGF5ZWQgb250byB0aGUgc2NyZWVuXG4gKiBAcGFyYW0ge29iamVjdH0gd2luZEluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyB3aW5kIGRpcmVjdGlvbiBhbmQgc3BlZWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBodW1pZGl0eUluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyBodW1pZGl0eSBwZXJjZW50YWdlXG4gKiBAcGFyYW0ge29iamVjdH0gdXZJbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdGhlIERPTSBlbGVtZW50IGRpc3BsYXlpbmcgdXYtaW5kZXggXG4gKiBAcGFyYW0ge29iamVjdH0gdmlzaWJpbGl0eUluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyB2aXNpYmlsaXR5IGRpc3RhbmNlXG4gKiBAcGFyYW0ge29iamVjdH0gY2xvdWRpbmVzc0luZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyBjbG91ZGluZXNzIHBlcmNlbnRhZ2VcbiAqIEBwYXJhbSB7b2JqZWN0fSByYWluSW5mbyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHRoZSBET00gZWxlbWVudCBkaXNwbGF5aW5nIHRoZSBjaGFuY2Ugb2YgcmFpblxuICogQHBhcmFtIHtvYmplY3R9IHN1bnJpc2VJbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdGhlIERPTSBlbGVtZW50IGRpc3BsYXlpbmcgc3VucmlzZSB0aW1lXG4gKiBAcGFyYW0ge29iamVjdH0gc3Vuc2V0SW5mbyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHRoZSBET00gZWxlbWVudCBkaXNwbGF5aW5nIHN1bnNldCB0aW1lXG4gKiBAcGFyYW0ge29iamVjdH0gbW9vbkluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyBtb29uLXBoYXNlIGluZm9ybWF0aW9uXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIDkgY2hpbGRyZW4sIHdoaWNoIGFyZSBhbGwgdGhlIGFyZ3VtZW50cyB0aGF0IGhhdmUgYmVlbiBwYXNzZWRcbiAqL1xuZnVuY3Rpb24gZXh0cmFJbmZvcm1hdGlvblNlY3Rpb24od2luZEluZm8sIGh1bWlkaXR5SW5mbywgdXZJbmZvLCB2aXNpYmlsaXR5SW5mbywgY2xvdWRpbmVzc0luZm8sIHJhaW5JbmZvLCBzdW5yaXNlSW5mbywgc3Vuc2V0SW5mbywgbW9vbkluZm8pIHtcbiAgICBjb25zdCBleHRyYUluZm9ybWF0aW9uQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnZXh0cmEtaW5mb3JtYXRpb24nXSk7XG4gICAgZXh0cmFJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQod2luZEluZm8sIGh1bWlkaXR5SW5mbywgdXZJbmZvLCB2aXNpYmlsaXR5SW5mbywgY2xvdWRpbmVzc0luZm8sIHJhaW5JbmZvLCBzdW5yaXNlSW5mbywgc3Vuc2V0SW5mbywgbW9vbkluZm8pO1xuICAgIHJldHVybiBleHRyYUluZm9ybWF0aW9uQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgd2luZFxuICogQHBhcmFtIHtzdHJpbmd9IHdpbmRBcnJvd1JvdGF0aW9uIHRoZSBkZWdyZWVzIGJ5IHdoaWNoIHRoZSBhcnJvdyB0aGF0IGlzIHBvaW50ZWQgbm9ydGggc2hvdWxkIHJvdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHdpbmRTcGVlZCB0aGUgc3BlZWQgb2YgdGhlIHdpbmRcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHdpbmQgc3BlZWQgYW5kIGRpcmVjdGlvblxuICovXG5mdW5jdGlvbiB3aW5kSW5mb3JtYXRpb24od2luZEFycm93Um90YXRpb24sIHdpbmRTcGVlZCkge1xuICAgIGNvbnN0IHdpbmRDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd3aW5kJ10pO1xuICAgIGNvbnN0IHdpbmRJbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3dpbmQtaW5mb3JtYXRpb24nXSk7XG4gICAgY29uc3Qgd2luZFNwZWVkU3BhbiA9IHNwYW5HZW5lcmF0b3IoWyd3aW5kLW51bSddLCB3aW5kU3BlZWQpO1xuICAgIHdpbmRJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQoaW1nR2VuZXJhdG9yKCcuLy4uL3NyYy9hc3NldHMvYXJyb3cucG5nJywgJ0FuIGFycm93IHJvdGF0ZWQgYnkgdGhlIHdpbmRvdyBkaXJlY3Rpb24gZGVncmVlcycsIFsnd2luZC1kaXJlY3Rpb24nXSwgd2luZEFycm93Um90YXRpb24pLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWyd3aW5kLXNwZWVkJ10sICdtcGgnLCB3aW5kU3BlZWRTcGFuKSk7XG4gICAgd2luZENvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1dpbmQnKSwgd2luZEluZm9ybWF0aW9uQ29udGFpbmVyKTtcbiAgICByZXR1cm4gd2luZENvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZGl2IGVsZW1lbnQsIGFuZCBhcHBlbmRzIGEgPGg1PjwvaDU+IGFuZCA8cD48L3A+IGVsZW1lbnQgd2l0aGluIGl0IHRoYXQgZGlzcGxheXMgdGhlIGh1bWlkaXR5IHBlcmNlbnRhZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBodW1pZGl0eU51bWJlciB0aGUgaHVtaWRpdHkgY3VycmVudGx5IFxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgaHVtaWRpdHkgcGVyY2VudGFnZVxuICovXG5mdW5jdGlvbiBodW1pZGl0eUluZm9ybWF0aW9uKGh1bWlkaXR5TnVtYmVyKSB7XG4gICAgY29uc3QgaHVtaWRpdHlDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydodW1pZGl0eSddKTtcbiAgICBjb25zdCBodW1pZGl0eSA9IHNwYW5HZW5lcmF0b3IoWydodW1pZGl0eS1udW1iZXInXSwgaHVtaWRpdHlOdW1iZXIpXG4gICAgaHVtaWRpdHlDb250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2g1JywgW10sICdIdW1pZGl0eScpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydodW1pZGl0eS1wZXJjZW50YWdlJ10sICclJywgaHVtaWRpdHkpKTtcbiAgICByZXR1cm4gaHVtaWRpdHlDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSB1di1pbmRleFxuICogQHBhcmFtIHtzdHJpbmd9IHV2SW5kZXhOdW1iZXIgdGhlIHV2LWluZGV4IGN1cnJlbnRseVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgdXYtaW5kZXhcbiAqL1xuZnVuY3Rpb24gdXZJbmZvcm1hdGlvbih1dkluZGV4TnVtYmVyKSB7XG4gICAgY29uc3QgdXZDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd1di1pbmRleCddKTtcbiAgICB1dkNvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1VWIEluZGV4JyksIHBhcmFncmFwaEdlbmVyYXRvcihbJ3V2JywgY2hlY2tDYXRlZ29yeU9mVXYodXZJbmRleE51bWJlcildLCB1dkluZGV4TnVtYmVyKSk7XG4gICAgcmV0dXJuIHV2Q29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyB0aGUgdmlzaWJpbGl0eSBkaXN0YW5jZVxuICogQHBhcmFtIHtzdHJpbmd9IHZpc2liaWxpdHlEaXN0YW5jZSB0aGUgY3VycmVudCB2aXNpYmlsaXR5IGRpc3RhbmNlXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSB2aXNpYmlsaXR5IGRpc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIHZpc2liaWxpdHlJbmZvcm1hdGlvbih2aXNpYmlsaXR5RGlzdGFuY2UpIHtcbiAgICBjb25zdCB2aXNpYmlsaXR5Q29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsndmlzaWJpbGl0eSddKTtcbiAgICBjb25zdCB2aXNpYmxpdHlEaXN0YW5jZVNwYW4gPSBzcGFuR2VuZXJhdG9yKFsndmlzaWJpbGl0eS1udW0nXSwgdmlzaWJpbGl0eURpc3RhbmNlKTtcbiAgICB2aXNpYmlsaXR5Q29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnVmlzaWJpbGl0eScpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWyd2aXNpYmlsaXR5LWRpc3RhbmNlJ10sICdrbScsIHZpc2libGl0eURpc3RhbmNlU3BhbikpO1xuICAgIHJldHVybiB2aXNpYmlsaXR5Q29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyB0aGUgY3VycmVudCBjbG91ZCBwZXJjZW50YWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xvdWRQZXJjZW50YWdlIHRoZSBjdXJyZW50IGNsb3VkIHBlcmNlbnRhZ2VcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRpc3BsYXkgdGhlIGN1cnJlbnQgY2xvdWQgcGVyY2VudGFnZVxuICovXG5mdW5jdGlvbiBjbG91ZGluZXNzSW5mb3JtYXRpb24oY2xvdWRQZXJjZW50YWdlKSB7XG4gICAgY29uc3QgY2xvdWRpbmVzc0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2Nsb3VkaW5lc3MnXSk7XG4gICAgY29uc3QgY2xvdWRpbmVzc1BlcmNlbnRhZ2VTcGFuID0gc3BhbkdlbmVyYXRvcihbJ2Nsb3VkaW5lc3MtbnVtJ10sIGNsb3VkUGVyY2VudGFnZSk7XG4gICAgY2xvdWRpbmVzc0NvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ0Nsb3VkaW5lc3MnKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnY2xvdWRpbmVzcy1wZXJjZW50YWdlJ10sICclJywgY2xvdWRpbmVzc1BlcmNlbnRhZ2VTcGFuKSk7XG4gICAgcmV0dXJuIGNsb3VkaW5lc3NDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSBjdXJyZW50IHJhaW4gcGVyY2VudGFnZVxuICogQHBhcmFtIHtzdHJpbmd9IHJhaW5QZXJjZW50YWdlIHRoZSBjdXJyZW50IHJhaW4gcGVyY2VudGFnZVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgY3VycmVudCByYWluIHBlcmNlbnRhZ2VcbiAqL1xuZnVuY3Rpb24gcmFpbkluZm9ybWF0aW9uKHJhaW5QZXJjZW50YWdlKSB7XG4gICAgY29uc3QgcmFpbkNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2NoYW5jZS1vZi1yYWluJ10pO1xuICAgIGNvbnN0IHJhaW5QZXJjZW50YWdlU3BhbiA9IHNwYW5HZW5lcmF0b3IoWydjaGFuY2Utb2YtcmFpbi1udW0nXSwgcmFpblBlcmNlbnRhZ2UpO1xuICAgIHJhaW5Db250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2g1JywgW10sICdDaGFuY2Ugb2YgUmFpbicpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydjaGFuY2Utb2YtcmFpbi1wZXJjZW50YWdlJ10sICclJywgcmFpblBlcmNlbnRhZ2VTcGFuKSk7XG4gICAgcmV0dXJuIHJhaW5Db250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSBzdW5yaXNlIHRpbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdW5yaXNlVGltZSB0aGUgc3VucmlzZSB0aW1lIGZvciB0aGUgZGF5XG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSBzdW5yaXNlIHRpbWVcbiAqL1xuZnVuY3Rpb24gc3VucmlzZUluZm9ybWF0aW9uKHN1bnJpc2VUaW1lKSB7XG4gICAgY29uc3Qgc3VucmlzZUNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3N1bnJpc2UnXSk7XG4gICAgc3VucmlzZUNvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1N1bnJpc2UnKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnc3VucmlzZS10aW1lJ10sIHN1bnJpc2VUaW1lKSk7XG4gICAgcmV0dXJuIHN1bnJpc2VDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSBzdW5zZXQgdGltZVxuICogQHBhcmFtIHtzdHJpbmd9IHN1bnNldFRpbWUgdGhlIHN1bnNldCB0aW1lIGZvciB0aGUgZGF5XG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSBzdW5zZXQgdGltZVxuICovXG5mdW5jdGlvbiBzdW5zZXRJbmZvcm1hdGlvbihzdW5zZXRUaW1lKSB7XG4gICAgY29uc3Qgc3Vuc2V0Q29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnc3Vuc2V0J10pO1xuICAgIHN1bnNldENvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1N1bnNldCcpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydzdW5zZXQtdGltZSddLCBzdW5zZXRUaW1lKSk7XG4gICAgcmV0dXJuIHN1bnNldENvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZGl2IGVsZW1lbnQsIGFuZCBhcHBlbmRzIGEgPGg1PjwvaDU+IGFuZCA8cD48L3A+IGVsZW1lbnQgd2l0aGluIGl0IHRoYXQgZGlzcGxheXMgdGhlIGN1cnJlbnQgbW9vbiBwaGFzZVxuICogQHBhcmFtIHtzdHJpbmd9IG1vb25QaGFzZSB0aGUgY3VycmVudCBtb29uIHBoYXNlXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSBjdXJyZW50IG1vb24gcGhhc2VcbiAqL1xuZnVuY3Rpb24gbW9vbkluZm9ybWF0aW9uKG1vb25QaGFzZSkge1xuICAgIGNvbnN0IG1vb25waGFzZUNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ21vb24tcGhhc2UnXSk7XG4gICAgbW9vbnBoYXNlQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnTW9vbiBQaGFzZScpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydwaGFzZSddLCBtb29uUGhhc2UpKTtcbiAgICByZXR1cm4gbW9vbnBoYXNlQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHRvIGJlIHVzZWQgd2hlbiB0aGUgd2VicGFnZSBpcyBsb2FkZWQgdXAgYW5kIGl0IGZpbGxzIHRoZSB3ZWJwYWdlIHdpdGggdGhlIHJlcXVpcmVkIGluZm9ybWF0aW9uIHdpdGggdGhlIGRlZmF1bHQgY2l0eSBiZWluZyBsb25kb25cbiAqL1xuYXN5bmMgZnVuY3Rpb24gb25Mb2FkRGVmYXVsdFdlYXRoZXIoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZDI2YThhOTA3NTJmNDVjMmEwMzE1NDkwNzIzMDUwNSZxPWxvbmRvbiZkYXlzPTcmYXFpPW5vJmFsZXJ0cz1ubycsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IGxvbmRvbkluZm8gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZChkaXNwbGF5TG9jYXRpb25EZXRhaWxzKHJldHJpZXZlQ2l0eShsb25kb25JbmZvKSwgcmV0cmlldmVDb3VudHJ5KGxvbmRvbkluZm8pLCBjcmVhdGVTdGFuZGFyZERhdGUocmV0cmlldmVEYXRlQW5kVGltZUFycihsb25kb25JbmZvKVswXSksIGNyZWF0ZVN0YW5kYXJkVGltZShyZXRyaWV2ZURhdGVBbmRUaW1lQXJyKGxvbmRvbkluZm8pWzFdKSkpO1xuICAgIGN1cnJlbnREYXlJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQoY3VycmVudFRlbXBEZXRhaWxzU2VjdGlvbih0ZW1wRGV0YWlsc1NlY3Rpb24ocmV0cmlldmVDdXJyZW50VGVtcEltZyhsb25kb25JbmZvKSwgcmV0cmlldmVDdXJyZW50VGVtcChsb25kb25JbmZvKSksIHRlbXBDb25kaXRpb25zU2VjdGlvbihyZXRyaWV2ZUN1cnJlbnRDb25kaXRpb24obG9uZG9uSW5mbyksIHJldHJpZXZlRmVlbHNMaWtlVGVtcChsb25kb25JbmZvKSkpKTtcbiAgICBjdXJyZW50RGF5SW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kKGV4dHJhSW5mb3JtYXRpb25TZWN0aW9uKHdpbmRJbmZvcm1hdGlvbihyZXRyaWV2ZVdpbmREZWdyZWVzKGxvbmRvbkluZm8pLCByZXRyaWV2ZVdpbmRTcGVlZChsb25kb25JbmZvKSksIGh1bWlkaXR5SW5mb3JtYXRpb24ocmV0cmlldmVIdW1pZGl0eShsb25kb25JbmZvKSksXG4gICAgICAgIHV2SW5mb3JtYXRpb24ocmV0cmlldmVVdk51bShsb25kb25JbmZvKSksIHZpc2liaWxpdHlJbmZvcm1hdGlvbihyZXRyaWV2ZVZpc2liaWxpdHlEaXN0YW5jZShsb25kb25JbmZvKSksIGNsb3VkaW5lc3NJbmZvcm1hdGlvbihyZXRyaWV2ZUNsb3VkaW5lc3NQZXJjZW50YWdlKGxvbmRvbkluZm8pKSwgcmFpbkluZm9ybWF0aW9uKHJldHJpZXZlQ2hhbmNlT2ZSYWluKGxvbmRvbkluZm8pKSxcbiAgICAgICAgc3VucmlzZUluZm9ybWF0aW9uKHJldHJpZXZlU3VucmlzZVRpbWUobG9uZG9uSW5mbykpLCBzdW5zZXRJbmZvcm1hdGlvbihyZXRyaWV2ZVN1bnNldFRpbWUobG9uZG9uSW5mbykpLCBtb29uSW5mb3JtYXRpb24ocmV0cmlldmVNb29uUGhhc2UobG9uZG9uSW5mbykpKSk7XG59O1xuXG5leHBvcnQgeyBjdXJyZW50RGF5SW5mb3JtYXRpb25Db250YWluZXIsIG9uTG9hZERlZmF1bHRXZWF0aGVyIH07IiwiLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIHRha2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgYW5kIGFkZHMgdGhvc2UgY2xhc3NlcyB0byB0aGUgZWxlbWVudCB1c2luZyBhIGZvckVhY2ggbG9vcFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnQgdGhlIGVsZW1lbnQgdGhhdCB3ZSBuZWVkIHRvIGFkZCB0aGUgY2xhc3NlcyB0byBcbiAqL1xuZnVuY3Rpb24gYWRkQ2xhc3Nlc1RvRWxlbWVudChjbGFzc2VzLCBlbGVtZW50KSB7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKGluZGl2aWR1YWxDbGFzcyA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoaW5kaXZpZHVhbENsYXNzKSk7XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGEgZGl2IGVsZW1lbnQgd2l0aCBpdHMgY2xhc3NlcyBwcm92aWRlZCBhcyBhbiBhcmd1bWVudFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgZGl2XG4gKiBAcmV0dXJucyBhIGRpdiBET00gZWxlbWVudFxuICovXG5mdW5jdGlvbiBkaXZHZW5lcmF0b3IoY2xhc3Nlcykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgZGl2KVxuICAgIHJldHVybiBkaXY7XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGFuIGltZyBlbGVtZW50LCB3aXRoIHRoZSBzcGVjaWZpZWQsIHNyYywgYWx0IGFuZCBjbGFzc2VzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjIHRoZSBwYXRoIHRvIHRoZSBpbWFnZSB3ZSB3YW50IHRvIHVzZVxuICogQHBhcmFtIHtzdHJpbmd9IGFsdCB0aGUgYWx0IGRlc2NyaXB0aW9uIG9mIHRoZSBpbWcgaW5jYXNlIGl0IGRvZXNuJ3QgbG9hZFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgaW1nXG4gKiBAcmV0dXJucyBhbiBpbWcgZWxlbWVudFxuICovXG5mdW5jdGlvbiBpbWdHZW5lcmF0b3Ioc3JjLCBhbHQgPSAnJywgY2xhc3Nlcywgcm90YXRpb24gPSAwKSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgICBpbWcuYWx0ID0gYWx0O1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgaW1nKTtcbiAgICBpbWcuc3R5bGUucm90YXRlID0gYCR7cm90YXRpb259ZGVnYFxuICAgIHJldHVybiBpbWc7XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGEgaGVhZGluZyBvZiB0aGUgZGVzaXJlZCBzaXplLCBhbmQgYWRkcyB0aGUgdGV4dCBzcGVjaWZpZWQgYXMgd2VsbCBhcyB0aGUgY2xhc3NlcyBwcm92aWRlZFxuICogQHBhcmFtIHtzdHJpbmd9IGhlYWRpbmdTaXplIDEgb2YgNiBzaXplcyB3ZSB3YW50IHRoZSBoZWFkaW5nIHRvIGJlIGUuZy4gJ2gxJ1xuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgaGVhZGluZ1xuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgdGhlIHRleHQgdGhlIGhlYWRpbmcgbmVlZHMgdG8gZGlzcGxheSBcbiAqIEBwYXJhbSB7b2JqZWN0fSBzcGFuRWxlbWVudFByZXBwZW5kIGEgZG9tIGVsZW1lbnQgdGhhdCB3ZSB3YW50IHRvIGFkZCBiZWZvcmUgdGhlIHRleHQgcGFydCBvZiB0aGUgaGVhZGluZ1xuICogQHBhcmFtIHtvYmplY3R9IHNwYW5FbGVtZW50QXBwZW5kIGEgZG9tIGVsZW1lbnQgdGhhdCB3ZSB3YW50IHRvIGFkZCBhZnRlciB0aGUgdGV4dCBwYXJ0IG9mIHRoZSBoZWFkaW5nXG4gKiBAcmV0dXJucyBhIGhlYWRpbmcgRE9NIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gaGVhZGluZ0dlbmVyYXRvcihoZWFkaW5nU2l6ZSwgY2xhc3NlcywgdGV4dCwgc3BhbkVsZW1lbnRQcmVwcGVuZCA9ICcnLCBzcGFuRWxlbWVudEFwcGVuZCA9ICcnKSB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaGVhZGluZ1NpemUpO1xuICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gdGV4dDtcbiAgICBoZWFkaW5nLnByZXBlbmQoc3BhbkVsZW1lbnRQcmVwcGVuZClcbiAgICBoZWFkaW5nLmFwcGVuZChzcGFuRWxlbWVudEFwcGVuZClcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIGhlYWRpbmcpO1xuICAgIHJldHVybiBoZWFkaW5nO1xufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhIGJ1dHRvbiB3aXRoIHRoZSBjbGFzc2VzIGFuZCB0ZXh0IHByb3ZpZGVkXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBoZWFkaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCB0aGUgdGV4dCBuZWVkZWQgd2l0aGluIHRoZSBidXR0b24gXG4gKiBAcmV0dXJucyBhIGJ1dHRvbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGJ1dHRvbkdlbmVyYXRvcihjbGFzc2VzLCB0ZXh0KSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQ2xhc3Nlc1RvRWxlbWVudChjbGFzc2VzLCBidG4pO1xuICAgIGJ0bi5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHJldHVybiBidG47XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGEgc3BhbiBlbGVtZW50IHdpdGggdGhlIGNsYXNzZXMgYW5kIHRleHQgcHJvdmlkZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGhlYWRpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IG5lZWRlZCB3aXRoaW4gdGhlIHNwYW4gXG4gKiBAcmV0dXJucyBhIHNwYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzcGFuR2VuZXJhdG9yKGNsYXNzZXMsIHRleHQpIHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3Nlcywgc3Bhbik7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHJldHVybiBzcGFuO1xufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhIGZvcm0gZWxlbWVudCB3aXRoIHRoZSBjbGFzc2VzIHByb3ZpZGVkXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBmb3JtXG4gKiBAcmV0dXJucyBhIGZvcm0gZWxlbWVudFxuICovXG5mdW5jdGlvbiBmb3JtR2VuZXJhdG9yKGNsYXNzZXMpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgZm9ybSk7XG4gICAgcmV0dXJuIGZvcm07XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGFuIGlucHV0IGVsZW1lbnQgYW5kIGFkZHMgdGhlIHNwZWNpZmllZCBhdHRyaWJ1dGVzIGFuZCB2YWx1ZXMgdG8gaXRcbiAqIEBwYXJhbSB7QXJyYXl9IGF0dHJpYnV0ZXMgYW4gYXJyYXkgb2YgYXJyYXlzIHdoZXJlIGVhY2ggZWxlbWVudCBoYXMgdGhlIGF0dHJpYnV0ZSwgYW5kIGl0J3MgYXNzb2NpYXRlZCB2YWx1ZSBcbiAqIEByZXR1cm5zIGFuIGlucHV0IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gaW5wdXRHZW5lcmF0b3IoYXR0cmlidXRlcykge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0cmlidXRlID0+IGlucHV0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSkpO1xuICAgIHJldHVybiBpbnB1dDtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgcGFyYWdyYXBoIGVsZW1lbnQgYW5kIGZpbGxzIGl0IHdpdGggdGhlIGFyZ3VtZW50cyBwcm92aWRlZFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgZm9ybVxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgdGhlIHRleHQgbmVlZGVkIHdpdGhpbiB0aGUgPHA+PC9wPiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBzcGFuRWxlbWVudFByZXBwZW5kIGEgZG9tIGVsZW1lbnQgdGhhdCB3ZSB3YW50IHRvIGFkZCBiZWZvcmUgdGhlIHRleHQgcGFydCBvZiB0aGUgcGFyYWdyYXBoXG4gKiBAcGFyYW0ge29iamVjdH0gc3BhbkVsZW1lbnRBcHBlbmQgYSBkb20gZWxlbWVudCB0aGF0IHdlIHdhbnQgdG8gYWRkIGFmdGVyIHRoZSB0ZXh0IHBhcnQgb2YgdGhlIHBhcmFncmFwaFxuICogQHJldHVybnMgYSA8cD48L3A+IGVsZW1lbnQgdGhhdCBpcyBjdXN0b21pc2VkIGFzIHNwZWNpZmllZFxuICovXG5mdW5jdGlvbiBwYXJhZ3JhcGhHZW5lcmF0b3IoY2xhc3NlcywgdGV4dCwgc3BhbkVsZW1lbnRQcmVwcGVuZCA9ICcnLCBzcGFuRWxlbWVudEFwcGVuZCA9ICcnKSB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgcGFyYWdyYXBoKTtcbiAgICBwYXJhZ3JhcGguaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBwYXJhZ3JhcGgucHJlcGVuZChzcGFuRWxlbWVudFByZXBwZW5kKVxuICAgIHBhcmFncmFwaC5hcHBlbmQoc3BhbkVsZW1lbnRBcHBlbmQpXG4gICAgcmV0dXJuIHBhcmFncmFwaDtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGhlbHAgY2hvb3NlIHRoZSBjb3JyZWN0IGNsYXNzIGJhc2VkIG9uIHRoZSB1di1pbmRleCBudW1iZXIgcHJvdmlkZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSB1dk51bSB0aGUgbnVtYmVyIHRoYXQgd2Ugd2FudCB0byBjaGVjayB3aGV0aGVyIG9yIG5vdCBpdCdzIHZhbHVlIGlzIGEgc2FmZSwgYW1iZXIgb3IgZGFuZ2VyIHZhbHVlIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBjbGFzc2lmaWVzIHRoZSB2YWx1ZVxuICovXG5mdW5jdGlvbiBjaGVja0NhdGVnb3J5T2ZVdih1dk51bSkge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIHV2TnVtIDw9IDI6XG4gICAgICAgICAgICByZXR1cm4gJ3NhZmUnO1xuICAgICAgICBjYXNlIHV2TnVtIDw9IDc6XG4gICAgICAgICAgICByZXR1cm4gJ2FtYmVyJztcbiAgICAgICAgY2FzZSB1dk51bSA+PSA4OlxuICAgICAgICAgICAgcmV0dXJuICdkYW5nZXInO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGRpdkdlbmVyYXRvciwgaW1nR2VuZXJhdG9yLCBoZWFkaW5nR2VuZXJhdG9yLCBidXR0b25HZW5lcmF0b3IsIHNwYW5HZW5lcmF0b3IsIGlucHV0R2VuZXJhdG9yLCBmb3JtR2VuZXJhdG9yLCBjaGVja0NhdGVnb3J5T2ZVdiwgcGFyYWdyYXBoR2VuZXJhdG9yIH0iLCJpbXBvcnQgeyBkaXZHZW5lcmF0b3IsIGltZ0dlbmVyYXRvciwgaGVhZGluZ0dlbmVyYXRvciwgc3BhbkdlbmVyYXRvciwgaW5wdXRHZW5lcmF0b3IsIGJ1dHRvbkdlbmVyYXRvciwgZm9ybUdlbmVyYXRvciB9IGZyb20gXCIuL2dlbmVyYXRvckZ1bmN0aW9uc1wiO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyB0aGUgdGl0bGUgc2VjdGlvbiBvZiB0aGUgaGVhZGVyXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSB0aXRsZSBhbmQgdGhlIHBhZ2UgbG9nb1xuICovXG5mdW5jdGlvbiB0aXRsZVNlY3Rpb24oKSB7XG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd0aXRsZSddKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmQoaW1nR2VuZXJhdG9yKCcuLy4uL3NyYy9hc3NldHMvcGFnZS1pY29uLnBuZycsICdhIGNpcmN1bGFyIGljb24gZGVwaWN0aW5nIGFsbCA0IHNlYXNvbnMnLCBbJ21haW4taWNvbiddKSwgaGVhZGluZ0dlbmVyYXRvcignaDEnLCBbJ3BhZ2UtdGl0bGUnXSwgJ1dlYXRoZXInLCB1bmRlZmluZWQsIHNwYW5HZW5lcmF0b3IoWyd0aXRsZS1lbmQnXSwgJ1dhdGNoJykpKTtcbiAgICByZXR1cm4gdGl0bGVDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyB0aGUgc2VhcmNoIGJhciBzZWN0aW9uIG9mIHRoZSBoZWFkZXJcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIHNlYXJjaCBiYXJcbiAqL1xuZnVuY3Rpb24gaGVhZGVyRm9ybVNlY3Rpb24oKSB7XG4gICAgY29uc3QgZm9ybSA9IGZvcm1HZW5lcmF0b3IoWydzZWFyY2gtZm9ybSddKTtcbiAgICBmb3JtLmFwcGVuZChpbnB1dEdlbmVyYXRvcihbWyd0eXBlJywgJ3NlYXJjaCddLCBbJ2lkJywgJ3NlYXJjaC1iYXInXSwgWydwbGFjZWhvbGRlcicsICdTZWFyY2ggYSBsb2NhdGlvbiddLCBbJ3JlcXVpcmVkJywgdHJ1ZV1dKSwgaW1nR2VuZXJhdG9yKCcuLy4uL3NyYy9hc3NldHMvc2VhcmNoLWljb24uc3ZnJywgJ0EgbWFnbmlmeWluZyBnbGFzcycsIFsnc2VhcmNoLWJ1dHRvbiddKSk7XG4gICAgcmV0dXJuIGZvcm07XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyB0aGUgYnV0dG9ucyB1c2VkIHRvIGNvbnRyb2wgd2hldGhlciB0aGUgdGVtcGVyYXR1cmUgaXMgZGlzcGxheWVkIGluIGNlbHNpdXMgb3IgZmFocmVuaGVpdFxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyB0d28gYnV0dG9uc1xuICovXG5mdW5jdGlvbiBoZWFkZXJCdXR0b25zKCkge1xuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydjaGFuZ2UtZGVncmVlcyddKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZChidXR0b25HZW5lcmF0b3IoWydjZWxzaXVzLWJ0bicsICdidG4nLCAnYWN0aXZlJ10sICfCsEMnKSwgYnV0dG9uR2VuZXJhdG9yKFsnZmFocmVuaGVpdC1idG4nLCAnYnRuJ10sICfCsEYnKSk7XG4gICAgcmV0dXJuIGJ1dHRvbnNDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGhlYWRlciB3aXRoIGFsbCBvZiBpdHMgY29udGVudFxuICogQHJldHVybnMgQSBET00gZWxlbWVudCBvYmplY3QgdGhlIGNvbnRhaW5zIGV2ZXJ5dGhpbmcgbmVlZGVkIGluIHRoZSBoZWFkZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuYXBwZW5kKHRpdGxlU2VjdGlvbigpLCBoZWFkZXJGb3JtU2VjdGlvbigpLCBoZWFkZXJCdXR0b25zKCkpO1xuICAgIHJldHVybiBoZWFkZXI7XG59O1xuXG4iLCJpbXBvcnQgeyBzcGFuR2VuZXJhdG9yIH0gZnJvbSBcIi4vZ2VuZXJhdG9yRnVuY3Rpb25zXCI7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgZGF0ZSBpbnRvIHRoZSBHQiBzdHlsZSBvZiBkYXRlXG4gKiBAcGFyYW0ge3N0cmluZyBvciBEYXRlfSBkYXRlIGVpdGhlciBhIHN0cmluZyBvciBEYXRlIHZlcnNpb24gY2FuIGJlIHByb3ZpZGVkIGFuZCB0aGlzIGlzIHRoZSBkYXRlIHdlIHdhbnQgY29udmVydCBpbnRvIGFuIEludGwgZGF0ZSBcbiAqIEByZXR1cm5zIGFuIG9iamVjdCB0aGF0IGlzIHRoZSBjb3JyZWN0IGZvcm1hdCBvZiBkYXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN0YW5kYXJkRGF0ZShkYXRlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tR0JcIiwgb3B0aW9ucykuZm9ybWF0KGRhdGUudG9JU09TdHJpbmcpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB0byBtYWtlIHRoZSB0aW1lIGhhdmUgYSAwIGF0IHRoZSBzdGFydCBpZiB0aGUgbnVtYmVyIGJlZm9yZSB0aGUgY29sb24gaXMgbm90IGRvdWJsZSBkaWdpdHMgeWV0XG4gKiBAcGFyYW0ge3N0cmluZ30gdGltZSB0aGUgdGltZSB0aGF0IG5lZWRzIHRvIGJlIHBhZGRlZFxuICogQHJldHVybnMgYSBwYWRkZWQgdmVyc2lvbiBvZiB0aGUgdGltZSwgZS5nLiBpZiBpdHMgMToxMSBpdCBnZXRzIGNoYW5nZWQgdG8gMDE6MTFcbiAqL1xuZnVuY3Rpb24gY3JlYXRlU3RhbmRhcmRUaW1lKHRpbWUpIHtcbiAgICByZXR1cm4gdGltZS5wYWRTdGFydCg1LCAwKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiByZXRyaWV2ZXMgdGhlIGNpdHkgdmFsdWUgZnJvbSB0aGUgb2JqIHByb3ZpZGVkXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSAuanNvbigpIHZlcnNpb24gb2YgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBmZXRjaCBjYWxsIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY2l0eSBuYW1lIHByb3ZpZGVkIGJ5IHRoZSBvYmpcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDaXR5KG9iaikge1xuICAgIHJldHVybiBvYmoubG9jYXRpb24ubmFtZTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiByZXRyaWV2ZXMgdGhlIGNvdW50cnkgdmFsdWUgZnJvbSB0aGUgb2JqIHByb3ZpZGVkXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSAuanNvbigpIHZlcnNpb24gb2YgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBmZXRjaCBjYWxsIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY291bnRyeSBuYW1lIHByb3ZpZGVkIGJ5IHRoZSBvYmpcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDb3VudHJ5KG9iaikge1xuICAgIHJldHVybiBvYmoubG9jYXRpb24uY291bnRyeTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiByZXRyaWV2ZXMgdGhlIGRhdGUgYW5kIHRpbWUgdmFsdWUgZnJvbSB0aGUgb2JqIHByb3ZpZGVkXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSAuanNvbigpIHZlcnNpb24gb2YgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBmZXRjaCBjYWxsIFxuICogQHJldHVybnMgYW4gQXJyYXkgdGhhdCBzdG9yZXMgdGhlIGRhdGUgaW4gaW5kZXggMCBhbmQgdGhlIHRpbWUgaW4gaW5kZXggMVxuICovXG5mdW5jdGlvbiByZXRyaWV2ZURhdGVBbmRUaW1lQXJyKG9iaikge1xuICAgIHJldHVybiBvYmoubG9jYXRpb24ubG9jYWx0aW1lLnNwbGl0KCcgJyk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb25zIGZpbmRzIHdoZXRoZXIgdGhlIGNlbHNpdXMgb3IgZmFocmVuaGVpdCBidXR0b24gaXMgYWN0aXZlIHNvIHRoZSByaWdodCBzeW1ib2wgY2FuIGJlIGRpc3BsYXllZFxuICogQHJldHVybnMgYSBzcGFuIGVsZW1lbnQgd2l0aCB0aGUgY29ycmVjdCBzeW1ib2xcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVNZXRob2RPZk1lYXN1cmVtZW50KCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Vsc2l1cy1idG4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm4gc3BhbkdlbmVyYXRvcihbJ21ldGhvZC1vZi1tZWFzdXJlbWVudCddLCAnQycpO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWhyZW5oZWl0LWJ0bicpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybiBzcGFuR2VuZXJhdG9yKFsnbWV0aG9kLW9mLW1lYXN1cmVtZW50J10sICdGJyk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb25zIGZpbmRzIHdoZXRoZXIgdGhlIGNlbHNpdXMgb3IgZmFocmVuaGVpdCBidXR0b24gaXMgYWN0aXZlIHNvIHRoZSByaWdodCBzeW1ib2wgY2FuIGJlIGRpc3BsYXllZFxuICogQHJldHVybnMgYSBib29sZWFuIHZhbHVlIG9mIHdoZXRoZXIgb3Igbm90IHRoZSBtZXRob2Qgb2YgbWVhc3VyZW1lbnQgaXMgY2Vsc2l1c1xuICovXG5mdW5jdGlvbiBpc01ldGhvZE9mTWVhc3VyZW1lbnRDZWxzaXVzKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Vsc2l1cy1idG4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFocmVuaGVpdC1idG4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgd2luZCBkZWdyZWVzIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIHdpbmQgZGVncmVlc1xuICovXG5mdW5jdGlvbiByZXRyaWV2ZVdpbmREZWdyZWVzKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC53aW5kX2RlZ3JlZTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSB3aW5kIHNwZWVkIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIHdpbmQgc3BlZWRcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVXaW5kU3BlZWQob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LndpbmRfbXBoO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGh1bWlkaXR5IGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGh1bWlkaXR5XG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlSHVtaWRpdHkob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50Lmh1bWlkaXR5XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgdXYtaW5kZXggZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgdXYtaW5kZXhcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVVdk51bShvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQudXY7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgdmlzaWJpbGl0eSBkaXN0YW5jZSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSB2aXNpYmlsaXR5IGRpc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlVmlzaWJpbGl0eURpc3RhbmNlKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC52aXNfa207XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgY2xvdWRpbmVzcyBwZXJjZW50YWdlIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGNsb3VkaW5lc3MgcGVyY2VudGFnZVxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUNsb3VkaW5lc3NQZXJjZW50YWdlKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC5jbG91ZDtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBjaGFuY2Ugb2YgcmFpbiBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBjaGFuY2Ugb2YgcmFpblxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUNoYW5jZU9mUmFpbihvYmopIHtcbiAgICByZXR1cm4gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBzdW5yaXNlIHRpbWUgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgc3VucmlzZSB0aW1lIFxuICovXG5mdW5jdGlvbiByZXRyaWV2ZVN1bnJpc2VUaW1lKG9iaikge1xuICAgIHJldHVybiBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZS5zbGljZSgwLCAtMyk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgc3Vuc2V0IHRpbWUgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgc3Vuc2V0IHRpbWVcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVTdW5zZXRUaW1lKG9iaikge1xuICAgIGNvbnN0IHN1bnNldCA9IG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXQ7XG4gICAgY29uc3Qgc3Vuc2V0SG91ciA9IE51bWJlcihzdW5zZXRbMF0gKyBzdW5zZXRbMV0pO1xuICAgIGNvbnN0IHN1bnNldEhvdXIyNCA9IHN1bnNldEhvdXIgKyAxMjtcbiAgICByZXR1cm4gc3Vuc2V0SG91cjI0ICsgc3Vuc2V0LnNsaWNlKDIsIC0zKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IG1vb24gcGhhc2UgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY3VycmVudCBtb29uIHBoYXNlXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlTW9vblBoYXNlKG9iaikge1xuICAgIHJldHVybiBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8ubW9vbl9waGFzZTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIGltYWdlIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgaW1hZ2VcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDdXJyZW50VGVtcEltZyhvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlQ3VycmVudFRlbXAob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LnRlbXBfYztcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIHRlbXBlcmF0dXJlIHRoYXQgaXQgZmVlbHMgbGlrZSBjdXJyZW50bHkgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBpdCBmZWVscyBsaWtlXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlRmVlbHNMaWtlVGVtcChvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQuZmVlbHNsaWtlX2M7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IG91dGRvb3IgY29uZGl0aW9uIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGN1cnJlbnQgb3V0ZG9vciBjb25kaXRpb25cbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDdXJyZW50Q29uZGl0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC5jb25kaXRpb24udGV4dDtcbn1cblxuZXhwb3J0IHsgcmV0cmlldmVDdXJyZW50Q29uZGl0aW9uLCByZXRyaWV2ZUN1cnJlbnRUZW1wLCByZXRyaWV2ZUN1cnJlbnRUZW1wSW1nLCByZXRyaWV2ZUZlZWxzTGlrZVRlbXAsIHJldHJpZXZlU3Vuc2V0VGltZSwgcmV0cmlldmVNb29uUGhhc2UsIHJldHJpZXZlU3VucmlzZVRpbWUsIHJldHJpZXZlQ2hhbmNlT2ZSYWluLCByZXRyaWV2ZUNsb3VkaW5lc3NQZXJjZW50YWdlLCByZXRyaWV2ZVZpc2liaWxpdHlEaXN0YW5jZSwgcmV0cmlldmVVdk51bSwgY3JlYXRlU3RhbmRhcmREYXRlLCBjcmVhdGVTdGFuZGFyZFRpbWUsIHJldHJpZXZlQ2l0eSwgcmV0cmlldmVDb3VudHJ5LCByZXRyaWV2ZURhdGVBbmRUaW1lQXJyLCByZXRyaWV2ZU1ldGhvZE9mTWVhc3VyZW1lbnQsIGlzTWV0aG9kT2ZNZWFzdXJlbWVudENlbHNpdXMsIHJldHJpZXZlV2luZERlZ3JlZXMsIHJldHJpZXZlV2luZFNwZWVkLCByZXRyaWV2ZUh1bWlkaXR5IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSAnLi9oZWFkZXJTZWN0aW9uJztcbmltcG9ydCB7IG9uTG9hZERlZmF1bHRXZWF0aGVyLCBjdXJyZW50RGF5SW5mb3JtYXRpb25Db250YWluZXIgfSBmcm9tICcuL2N1cnJlbnRUZW1wZXJhdHVyZVNlY3Rpb24nO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIoKSwgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkRGVmYXVsdFdlYXRoZXIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==