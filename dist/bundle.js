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



const currentDayInformationContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['current-day-information']);

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

function tempDetailsSection(image, temp) {
    const tempDetailsContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['temp-details']);
    const currentTemp = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['temp'], temp);
    tempDetailsContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.imgGenerator)(image, undefined, ['image-weather-description']), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h2', ['current-temp'], '°', currentTemp, (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveMethodOfMeasurement)()));
    return tempDetailsContainer;
};

function tempConditionsSection(description, feelsLikeTemp) {
    const tempConditionsContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['temp-conditions']);
    const feelsLikeHeader = document.createElement('h4');
    feelsLikeHeader.classList.add('feels-like');
    feelsLikeHeader.insertAdjacentHTML('afterbegin', `Feels like <span class="feels-like-temp">${feelsLikeTemp}</span>°<span class="method-of-measurement">${(0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.isMethodOfMeasurementCelsius)() === true ? 'C' : 'F'}</span>`);
    tempConditionsContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h3', ['temp-description'], description), feelsLikeHeader);
    return tempConditionsContainer;
};

function currentTempDetailsSection(tempDetailsSection, tempConditionsSection) {
    const currentTempDetailsContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['current-temp-details']);
    currentTempDetailsContainer.append(tempDetailsSection, tempConditionsSection);
    return currentTempDetailsContainer;
};

async function onLoadDefaultWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=d26a8a90752f45c2a03154907230505&q=london&days=7&aqi=no&alerts=no', { mode: 'cors' });
    const londonInfo = await response.json();
    currentDayInformationContainer.append(displayLocationDetails((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveCity)(londonInfo), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveCountry)(londonInfo), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.createStandardDate)((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveDateAndTimeArr)(londonInfo)[0]), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.createStandardTime)((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveDateAndTimeArr)(londonInfo)[1])));
    currentDayInformationContainer.append(currentTempDetailsSection(tempDetailsSection(londonInfo.current.condition.icon, londonInfo.current.temp_c), tempConditionsSection(londonInfo.current.condition.text, londonInfo.current.feelslike_c)));
    currentDayInformationContainer.append(extraInformationSection(windInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveWindDegrees)(londonInfo), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveWindSpeed)(londonInfo)), humidityInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveHumidity)(londonInfo)),
        uvInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveUvNum)(londonInfo)), visibilityInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveVisibilityDistance)(londonInfo)), cloudinessInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveCloudinessPercentage)(londonInfo)), rainInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveChanceOfRain)(londonInfo)),
        sunriseInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveSunriseTime)(londonInfo)), sunsetInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveSunsetTime)(londonInfo)), moonInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveMoonPhase)(londonInfo))));

};

function extraInformationSection(append, append2, append3, append4, append5, append6, append7, append8, append9) {
    const extraInformationContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['extra-information']);
    extraInformationContainer.append(append, append2, append3, append4, append5, append6, append7, append8, append9);
    return extraInformationContainer;
};

function windInformation(windArrowRotation, windSpeed) {
    const windContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['wind']);
    const windInformationContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['wind-information']);
    const windSpeedSpan = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['wind-num'], windSpeed);
    windInformationContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.imgGenerator)('./../src/assets/arrow.png', 'An arrow rotated by the window direction degrees', ['wind-direction'], windArrowRotation), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['wind-speed'], 'mph', windSpeedSpan));
    windContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'Wind'), windInformationContainer);
    return windContainer;
};

function humidityInformation(humidityNumber) {
    const humidityContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['humidity']);
    const humidity = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['humidity-number'], humidityNumber)
    humidityContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'Humidity'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['humidity-percentage'], '%', humidity));
    return humidityContainer;
}

function uvInformation(uvIndexNumber) {
    const uvContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['uv-index']);
    uvContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'UV Index'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['uv', (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.checkCategoryOfUv)(uvIndexNumber)], uvIndexNumber));
    return uvContainer;
}

function visibilityInformation(visibilityDistance) {
    const visibilityContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['visibility']);
    const visiblityDistanceSpan = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['visibility-num'], visibilityDistance);
    visibilityContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'Visibility'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['visibility-distance'], 'km', visiblityDistanceSpan));
    return visibilityContainer;
}

function cloudinessInformation(cloudPercentage) {
    const cloudinessContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['cloudiness']);
    const cloudinessPercentageSpan = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['cloudiness-num'], cloudPercentage);
    cloudinessContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'Cloudiness'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['cloudiness-percentage'], '%', cloudinessPercentageSpan));
    return cloudinessContainer;
}

function rainInformation(rainPercentage) {
    const rainContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['chance-of-rain']);
    const rainPercentageSpan = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['chance-of-rain-num'], rainPercentage);
    rainContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'Chance of Rain'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['chance-of-rain-percentage'], '%', rainPercentageSpan));
    return rainContainer;
}

function sunriseInformation(sunriseTime) {
    const sunriseContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['sunrise']);
    sunriseContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'Sunrise'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['sunrise-time'], sunriseTime));
    return sunriseContainer;
}

function sunsetInformation(sunsetTime) {
    const sunsetContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['sunset']);
    sunsetContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'Sunset'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['sunset-time'], sunsetTime));
    return sunsetContainer;
}

function moonInformation(moonPhase) {
    const moonphaseContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['moon-phase']);
    moonphaseContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h5', [], 'Moon Phase'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['phase'], moonPhase));
    return moonphaseContainer;
}



/*<div class="current-day-information">
    <div class="location-details">
        <h2 class="city-details"><span class="city">London</span>, <span class="country">United Kingdom</span>
        </h2>
        <h4 class="day-details">Wednesday 10 May 2023<span class="time-details">02:41</span></h4>
    </div>
    <div class="current-temp-details">
        <div class="temp-details">
            <img class="image-weather-description" src="//cdn.weatherapi.com/weather/64x64/day/116.png">
                <h2 class="current-temp"><span class="temp">20</span>°<span class="method-of-measurement">C</span>
                </h2>
        </div>
        <div class="temp-conditions">
            <h3 class="temp-description">Smoke</h3>
            <h4 class="feels-like">Feels like <span class="feels-like-temp">20</span>°<span
                class="method-of-measurement">C</span></h4>
            <h4 class="general-description">Gentle breeze</h4>
        </div>
    </div>
    <div class="extra-information">
        <div class="wind">
            <h5>Wind</h5>
            <div class="wind-information">
                <img class="wind-direction" src="./../src/assets/arrow.png"
                    alt="An arrow rotated by the window direction degrees">
                    <p class="wind-speed"><span class="wind-num">4</span>mph</p>
            </div>
        </div>
        <div class="humidity">
            <h5>Humidity</h5>
            <p class="humidity-percentage"><span class="humidity-number">56</span>%</p>
        </div>
        <div class="uv-index">
            <h5>UV Index</h5>
            <p class="uv">0</p>
        </div>
        <div class="visibility">
            <h5>Visibility</h5>
            <p class="visibility-distance"><span class="visibility-num">4</span>km</p>
        </div>
        <div class="cloudiness">
            <h5>Cloudiness</h5>
            <p class="cloudiness-percentage"><span class="cloudiness-num">0</span>%</p>
        </div>
        <div class="chance-of-rain">
            <h5>Chance of Rain</h5>
            <p class="chance-of-rain-percentage"><span class="chance-of-rain-num">0</span>%</p>
        </div>
        <div class="sunrise">
            <h5>Sunrise</h5>
            <p class="sunrise-time">05:10</p>
        </div>
        <div class="sunset">
            <h5>Sunset</h5>
            <p class="sunset-time">18:10</p>
        </div>
        <div class="moon-phase">
            <h5>Moon Phase</h5>
            <p class="phase">Waning Gibbous</p>
        </div>
    </div>
</div> */


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
 * @param {Element} element the element that we need to add the classes to 
 */
function addClassesToElement(classes, element) {
    classes.forEach(individualClass => element.classList.add(individualClass));
}

/**
 * this function generates a div element with its classes provided as an argument
 * @param {Array} classes an array of classes that need to be added to the div
 * @returns a div DOM element
 */
function divGenerator(classes) {
    const div = document.createElement('div');
    addClassesToElement(classes, div)
    return div;
}

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
}

/**
 * this function generates a heading of the desired size, and adds the text specified as well as the classes provided
 * @param {string} headingSize 1 of 6 sizes we want the heading to be e.g. 'h1'
 * @param {Array} classes an array of classes that need to be added to the heading
 * @param {string} text the text the heading needs to display 
 * @returns a heading DOM element
 */
function headingGenerator(headingSize, classes, text, spanElementPreppend = '', spanElementAppend = '') {
    const heading = document.createElement(headingSize);
    heading.innerHTML = text;
    heading.prepend(spanElementPreppend)
    heading.append(spanElementAppend)
    addClassesToElement(classes, heading);
    return heading;
}

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
}

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
}

/**
 * this function generates a form element with the classes provided
 * @param {Array} classes an array of classes that need to be added to the form
 * @returns a form element
 */
function formGenerator(classes) {
    const form = document.createElement('form');
    addClassesToElement(classes, form);
    return form;
}

/**
 * this function generates an input element and adds the specified attributes and values to it
 * @param {Array} attributes an array of arrays where each element has the attribute, and it's associated value 
 * @returns an input element
 */
function inputGenerator(attributes) {
    const input = document.createElement('input');
    attributes.forEach(attribute => input.setAttribute(attribute[0], attribute[1]));
    return input;
}

function paragraphGenerator(classes, text, spanElementPreppend = '', spanElementAppend = '') {
    const paragraph = document.createElement('p');
    addClassesToElement(classes, paragraph);
    paragraph.innerText = text;
    paragraph.prepend(spanElementPreppend)
    paragraph.append(spanElementAppend)
    return paragraph;
}

function checkCategoryOfUv(uvNum) {
    switch (true) {
        case uvNum <= 2:
            return 'safe';
        case uvNum <= 7:
            return 'amber';
        case uvNum >= 8:
            return 'danger';
    }
}



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


function titleSection() {
    const titleContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['title']);
    titleContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.imgGenerator)('./../src/assets/page-icon.png', 'a circular icon depicting all 4 seasons', ['main-icon']), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h1', ['page-title'], 'Weather', undefined, (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['title-end'], 'Watch')));
    return titleContainer;
}

function headerFormSection() {
    const form = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.formGenerator)(['search-form']);
    form.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.inputGenerator)([['type', 'search'], ['id', 'search-bar'], ['placeholder', 'Search a location'], ['required', true]]), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.imgGenerator)('./../src/assets/search-icon.svg', 'A magnifying glass', ['search-button']));
    return form;
}

function headerButtons() {
    const buttonsContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['change-degrees']);
    buttonsContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.buttonGenerator)(['celsius-btn', 'btn', 'active'], '°C'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.buttonGenerator)(['fahrenheit-btn', 'btn'], '°F'));
    return buttonsContainer;
}

function header() {
    const header = document.createElement('header');
    header.append(titleSection(), headerFormSection(), headerButtons());
    return header;
}



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
/* harmony export */   "retrieveDateAndTimeArr": () => (/* binding */ retrieveDateAndTimeArr),
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
}

/**
 * This function is called to make the time have a 0 at the start if the number before the colon is not double digits yet
 * @param {string} time the time that needs to be padded
 * @returns a padded version of the time, e.g. if its 1:11 it gets changed to 01:11
 */
function createStandardTime(time) {
    return time.padStart(5, 0);
}

/**
 * This function retrieves the city value from the obj provided
 * @param {object} obj the .json() version of the value returned by the fetch call 
 * @returns a string that is the city name provided by the obj
 */
function retrieveCity(obj) {
    return obj.location.name;
}

/**
 * This function retrieves the country value from the obj provided
 * @param {object} obj the .json() version of the value returned by the fetch call 
 * @returns a string that is the country name provided by the obj
 */
function retrieveCountry(obj) {
    return obj.location.country;
}

/**
 * This function retrieves the date and time value from the obj provided
 * @param {object} obj the .json() version of the value returned by the fetch call 
 * @returns an Array that stores the date in index 0 and the time in index 1
 */
function retrieveDateAndTimeArr(obj) {
    return obj.location.localtime.split(' ');
}

/**
 * This functions finds whether the celsius or fahrenheit button is active so the right symbol can be displayed
 * @returns a span element with the correct symbol
 */
function retrieveMethodOfMeasurement() {
    if (document.querySelector('.celsius-btn').classList.contains('active')) return (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['method-of-measurement'], 'C');
    else if (document.querySelector('.fahrenheit-btn').classList.contains('active')) return (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['method-of-measurement'], 'F');
}

/**
 * This functions finds whether the celsius or fahrenheit button is active so the right symbol can be displayed
 * @returns a boolean value of whether or not the method of measurement is celsius
 */
function isMethodOfMeasurementCelsius() {
    if (document.querySelector('.celsius-btn').classList.contains('active')) return true;
    else if (document.querySelector('.fahrenheit-btn').classList.contains('active')) return false;
}

function retrieveWindDegrees(obj) {
    return obj.current.wind_degree;
};

function retrieveWindSpeed(obj) {
    return obj.current.wind_mph;
};

function retrieveHumidity(obj) {
    return obj.current.humidity
}

function retrieveUvNum(obj) {
    return obj.current.uv;
}

function retrieveVisibilityDistance(obj) {
    return obj.current.vis_km;
}

function retrieveCloudinessPercentage(obj) {
    return obj.current.cloud;
}

function retrieveChanceOfRain(obj) {
    return obj.forecast.forecastday[0].day.daily_chance_of_rain;
}

function retrieveSunriseTime(obj) {
    return obj.forecast.forecastday[0].astro.sunrise;
}

function retrieveSunsetTime(obj) {
    return obj.forecast.forecastday[0].astro.sunset;
}

function retrieveMoonPhase(obj) {
    return obj.forecast.forecastday[0].astro.moon_phase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTEE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsU0FBUztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEhtSjs7QUFFbko7QUFDQSwyQkFBMkIsaUVBQVk7QUFDdkMsMEJBQTBCLGlFQUFZLDZGQUE2RixxRUFBZ0IsNkNBQTZDLGtFQUFhO0FBQzdNO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0VBQWE7QUFDOUIsZ0JBQWdCLG1FQUFjLHdHQUF3RyxpRUFBWTtBQUNsSjtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLGlFQUFZO0FBQ3pDLDRCQUE0QixvRUFBZSwwQ0FBMEMsb0VBQWU7QUFDcEc7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QnFEOztBQUVyRDtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRixrRUFBYTtBQUNqRyw0RkFBNEYsa0VBQWE7QUFDekc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDb0I7QUFDMEQ7O0FBRW5HLHFCQUFxQixzREFBTSxJQUFJLHNGQUE4QjtBQUM3RCxnQ0FBZ0MsNEVBQW9CLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3VycmVudFRlbXBlcmF0dXJlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZW5lcmF0b3JGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVhZGVyU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9yZXRyaWV2ZUluZm9ybWF0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL1dvcmtTYW5zLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWxpZ2h0LWJsdWU6ICM0YmE2Y2Y7XFxuICAgIC0tZGFyay1ibHVlOiAjMGM0YTZlO1xcbiAgICAtLW9yYW5nZTogI2VjYjM0NztcXG4gICAgLS1zZWFyY2gtYmFja2dyb3VuZC1jb2xvcjogIzA2MjYzYjtcXG4gICAgLS1mYWRlZC13aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwMyk7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0tbGlnaHQtYmx1ZSksIHZhcigtLWRhcmstYmx1ZSkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgNWZyIDVmciAwLjVmcjtcXG4gICAgcm93LWdhcDogMnJlbTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW1cXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRpdGxlLWVuZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1NXB4O1xcbn1cXG5cXG4jc2VhcmNoLWJhciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDAgMC44cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI3NlYXJjaC1iYXI6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGxlZnQ6IDg4JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hhbmdlLWRlZ3JlZXMge1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZhaHJlbmhlaXQtYnRuLFxcbi5jZWxzaXVzLWJ0biB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgNjBtcyBlYXNlLWluO1xcbn1cXG5cXG4uZmFocmVuaGVpdC1idG46aG92ZXIsXFxuLmNlbHNpdXMtYnRuOmhvdmVyLFxcbi5kYWlseS13ZWF0aGVyLWJ0bjpob3ZlcixcXG4uaG91cmx5LXdlYXRoZXItYnRuOmhvdmVyLFxcbi5hY3RpdmUge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmN1cnJlbnQtZGF5LWluZm9ybWF0aW9uIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgd2lkdGg6IDQzcmVtO1xcbiAgICBoZWlnaHQ6IDMwcmVtO1xcbn1cXG5cXG4ubG9jYXRpb24tZGV0YWlscyB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY2l0eS1kZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5kYXktZGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlZC13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50aW1lLWRldGFpbHMge1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWZhZGVkLXdoaXRlKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XFxufVxcblxcbi5jdXJyZW50LXRlbXAtZGV0YWlscyB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMDtcXG59XFxuXFxuLnRlbXAtZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZ2FwOiAwLjNyZW07XFxufVxcblxcbi50ZW1wLWRldGFpbHM+aW1nIHtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICB3aWR0aDogNnJlbTtcXG59XFxuXFxuLnRlbXAtZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmZlZWxzLWxpa2UsXFxuLmdlbmVyYWwtZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG59XFxuXFxuLmV4dHJhLWluZm9ybWF0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmV4dHJhLWluZm9ybWF0aW9uPmRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4ud2luZC1pbmZvcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ud2luZC1kaXJlY3Rpb24ge1xcbiAgICBoZWlnaHQ6IDEuN3JlbTtcXG59XFxuXFxuLmV4dHJhLWluZm9ybWF0aW9uIGg1LFxcbi5leHRyYS1pbmZvcm1hdGlvbiBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmV4dHJhLWluZm9ybWF0aW9uIGg1IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlZC13aGl0ZSk7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5zYWZlLFxcbi5hbWJlcixcXG4uZGFuZ2VyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uc2FmZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgMTkyLCA1MSk7XFxufVxcblxcbi5hbWJlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLmRhbmdlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDAsIDApO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUFtRDtBQUN2RDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDJFQUEyRTtJQUMzRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7Ozs7SUFJSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0RBQWdEO0lBQ2hELGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0RBQWdEO0lBQ2hELGVBQWU7SUFDZiwrQkFBK0I7QUFDbkM7O0FBRUE7Ozs7O0lBS0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9Xb3JrU2Fucy1WYXJpYWJsZUZvbnRfd2dodC50dGYnKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWxpZ2h0LWJsdWU6ICM0YmE2Y2Y7XFxuICAgIC0tZGFyay1ibHVlOiAjMGM0YTZlO1xcbiAgICAtLW9yYW5nZTogI2VjYjM0NztcXG4gICAgLS1zZWFyY2gtYmFja2dyb3VuZC1jb2xvcjogIzA2MjYzYjtcXG4gICAgLS1mYWRlZC13aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwMyk7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0tbGlnaHQtYmx1ZSksIHZhcigtLWRhcmstYmx1ZSkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgNWZyIDVmciAwLjVmcjtcXG4gICAgcm93LWdhcDogMnJlbTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW1cXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRpdGxlLWVuZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1NXB4O1xcbn1cXG5cXG4jc2VhcmNoLWJhciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDAgMC44cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI3NlYXJjaC1iYXI6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGxlZnQ6IDg4JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hhbmdlLWRlZ3JlZXMge1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZhaHJlbmhlaXQtYnRuLFxcbi5jZWxzaXVzLWJ0biB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgNjBtcyBlYXNlLWluO1xcbn1cXG5cXG4uZmFocmVuaGVpdC1idG46aG92ZXIsXFxuLmNlbHNpdXMtYnRuOmhvdmVyLFxcbi5kYWlseS13ZWF0aGVyLWJ0bjpob3ZlcixcXG4uaG91cmx5LXdlYXRoZXItYnRuOmhvdmVyLFxcbi5hY3RpdmUge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmN1cnJlbnQtZGF5LWluZm9ybWF0aW9uIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgd2lkdGg6IDQzcmVtO1xcbiAgICBoZWlnaHQ6IDMwcmVtO1xcbn1cXG5cXG4ubG9jYXRpb24tZGV0YWlscyB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY2l0eS1kZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5kYXktZGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlZC13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50aW1lLWRldGFpbHMge1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWZhZGVkLXdoaXRlKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XFxufVxcblxcbi5jdXJyZW50LXRlbXAtZGV0YWlscyB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMDtcXG59XFxuXFxuLnRlbXAtZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZ2FwOiAwLjNyZW07XFxufVxcblxcbi50ZW1wLWRldGFpbHM+aW1nIHtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICB3aWR0aDogNnJlbTtcXG59XFxuXFxuLnRlbXAtZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmZlZWxzLWxpa2UsXFxuLmdlbmVyYWwtZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG59XFxuXFxuLmV4dHJhLWluZm9ybWF0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmV4dHJhLWluZm9ybWF0aW9uPmRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4ud2luZC1pbmZvcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ud2luZC1kaXJlY3Rpb24ge1xcbiAgICBoZWlnaHQ6IDEuN3JlbTtcXG59XFxuXFxuLmV4dHJhLWluZm9ybWF0aW9uIGg1LFxcbi5leHRyYS1pbmZvcm1hdGlvbiBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmV4dHJhLWluZm9ybWF0aW9uIGg1IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlZC13aGl0ZSk7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5zYWZlLFxcbi5hbWJlcixcXG4uZGFuZ2VyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uc2FmZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgMTkyLCA1MSk7XFxufVxcblxcbi5hbWJlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLmRhbmdlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDAsIDApO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNoZWNrQ2F0ZWdvcnlPZlV2LCBkaXZHZW5lcmF0b3IsIGhlYWRpbmdHZW5lcmF0b3IsIGltZ0dlbmVyYXRvciwgcGFyYWdyYXBoR2VuZXJhdG9yLCBzcGFuR2VuZXJhdG9yIH0gZnJvbSAnLi9nZW5lcmF0b3JGdW5jdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlU3RhbmRhcmREYXRlLCBjcmVhdGVTdGFuZGFyZFRpbWUsIHJldHJpZXZlQ2l0eSwgcmV0cmlldmVDb3VudHJ5LCByZXRyaWV2ZURhdGVBbmRUaW1lQXJyLCByZXRyaWV2ZU1ldGhvZE9mTWVhc3VyZW1lbnQsIGlzTWV0aG9kT2ZNZWFzdXJlbWVudENlbHNpdXMsIHJldHJpZXZlV2luZERlZ3JlZXMsIHJldHJpZXZlV2luZFNwZWVkLCByZXRyaWV2ZUh1bWlkaXR5LCByZXRyaWV2ZVV2TnVtLCByZXRyaWV2ZVZpc2liaWxpdHlEaXN0YW5jZSwgcmV0cmlldmVDbG91ZGluZXNzUGVyY2VudGFnZSwgcmV0cmlldmVDaGFuY2VPZlJhaW4sIHJldHJpZXZlU3VucmlzZVRpbWUsIHJldHJpZXZlU3Vuc2V0VGltZSwgcmV0cmlldmVNb29uUGhhc2UgfSBmcm9tICcuL3JldHJpZXZlSW5mb3JtYXRpb24nXG5cbmNvbnN0IGN1cnJlbnREYXlJbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2N1cnJlbnQtZGF5LWluZm9ybWF0aW9uJ10pO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBvbiBzY3JlZW4gdG8gc2hvdyB0aGUgbG9jYXRpb24gYW5kIHRpbWUgb2YgdGhlIGNpdHkgc2VhcmNoZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaXR5IHRoZSBuYW1lIG9mIHRoZSBjaXR5IHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkIG9uIHNjcmVlbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb3VudHJ5IHRoZSBuYW1lIG9mIHRoZSBjb3VudHJ5IHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkIG9uIHNjcmVlbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXkgdGhlIGRhdGUgdGhhdCBoYXMgY29udmVydGVkIGludG8gYSBzdHJpbmcgdXNpbmcgdGhlIEludGwgQVBJXG4gKiBAcGFyYW0ge3N0cmluZ30gdGltZSB0aGUgdGltZSB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZCBvbiBzY3JlZW5cbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgdGhhdCBjb250YWlucyBuZXN0ZWQgZWxlbWVudHMgdGhhdCBkaXNwbGF5IGluZm9ybWF0aW9uIGFib3V0IHRoZSBsb2NhdGlvbiBhbmQgdGltZVxuICovXG5mdW5jdGlvbiBkaXNwbGF5TG9jYXRpb25EZXRhaWxzKGNpdHkgPSAnJywgY291bnRyeSA9ICcnLCBkYXkgPSAnJywgdGltZSA9ICcnKSB7XG4gICAgY29uc3QgbG9jYXRpb25EZXRhaWxzID0gZGl2R2VuZXJhdG9yKFsnbG9jYXRpb24tZGV0YWlscyddKTtcbiAgICBjb25zdCBjaXR5TmFtZSA9IHNwYW5HZW5lcmF0b3IoWydjaXR5J10sIGNpdHkpO1xuICAgIGNvbnN0IGNvdW50cnlOYW1lID0gc3BhbkdlbmVyYXRvcihbJ2NvdW50cnknXSwgY291bnRyeSk7XG4gICAgY29uc3QgdGltZURldGFpbHMgPSBzcGFuR2VuZXJhdG9yKFsndGltZS1kZXRhaWxzJ10sIHRpbWUpO1xuICAgIGNvbnN0IGNpdHlEZXRhaWxzSGVhZGVyID0gaGVhZGluZ0dlbmVyYXRvcignaDInLCBbJ2NpdHktZGV0YWlscyddLCAnLCAnLCBjaXR5TmFtZSwgY291bnRyeU5hbWUpO1xuICAgIGNvbnN0IGRheURldGFpbHNIZWFkZXIgPSBoZWFkaW5nR2VuZXJhdG9yKCdoNCcsIFsnZGF5LWRldGFpbHMnXSwgZGF5LCB1bmRlZmluZWQsIHRpbWVEZXRhaWxzKTtcbiAgICBsb2NhdGlvbkRldGFpbHMuYXBwZW5kKGNpdHlEZXRhaWxzSGVhZGVyLCBkYXlEZXRhaWxzSGVhZGVyKTtcbiAgICByZXR1cm4gbG9jYXRpb25EZXRhaWxzO1xufTtcblxuZnVuY3Rpb24gdGVtcERldGFpbHNTZWN0aW9uKGltYWdlLCB0ZW1wKSB7XG4gICAgY29uc3QgdGVtcERldGFpbHNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd0ZW1wLWRldGFpbHMnXSk7XG4gICAgY29uc3QgY3VycmVudFRlbXAgPSBzcGFuR2VuZXJhdG9yKFsndGVtcCddLCB0ZW1wKTtcbiAgICB0ZW1wRGV0YWlsc0NvbnRhaW5lci5hcHBlbmQoaW1nR2VuZXJhdG9yKGltYWdlLCB1bmRlZmluZWQsIFsnaW1hZ2Utd2VhdGhlci1kZXNjcmlwdGlvbiddKSwgaGVhZGluZ0dlbmVyYXRvcignaDInLCBbJ2N1cnJlbnQtdGVtcCddLCAnwrAnLCBjdXJyZW50VGVtcCwgcmV0cmlldmVNZXRob2RPZk1lYXN1cmVtZW50KCkpKTtcbiAgICByZXR1cm4gdGVtcERldGFpbHNDb250YWluZXI7XG59O1xuXG5mdW5jdGlvbiB0ZW1wQ29uZGl0aW9uc1NlY3Rpb24oZGVzY3JpcHRpb24sIGZlZWxzTGlrZVRlbXApIHtcbiAgICBjb25zdCB0ZW1wQ29uZGl0aW9uc0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3RlbXAtY29uZGl0aW9ucyddKTtcbiAgICBjb25zdCBmZWVsc0xpa2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGZlZWxzTGlrZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdmZWVscy1saWtlJyk7XG4gICAgZmVlbHNMaWtlSGVhZGVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGBGZWVscyBsaWtlIDxzcGFuIGNsYXNzPVwiZmVlbHMtbGlrZS10ZW1wXCI+JHtmZWVsc0xpa2VUZW1wfTwvc3Bhbj7CsDxzcGFuIGNsYXNzPVwibWV0aG9kLW9mLW1lYXN1cmVtZW50XCI+JHtpc01ldGhvZE9mTWVhc3VyZW1lbnRDZWxzaXVzKCkgPT09IHRydWUgPyAnQycgOiAnRid9PC9zcGFuPmApO1xuICAgIHRlbXBDb25kaXRpb25zQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoMycsIFsndGVtcC1kZXNjcmlwdGlvbiddLCBkZXNjcmlwdGlvbiksIGZlZWxzTGlrZUhlYWRlcik7XG4gICAgcmV0dXJuIHRlbXBDb25kaXRpb25zQ29udGFpbmVyO1xufTtcblxuZnVuY3Rpb24gY3VycmVudFRlbXBEZXRhaWxzU2VjdGlvbih0ZW1wRGV0YWlsc1NlY3Rpb24sIHRlbXBDb25kaXRpb25zU2VjdGlvbikge1xuICAgIGNvbnN0IGN1cnJlbnRUZW1wRGV0YWlsc0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2N1cnJlbnQtdGVtcC1kZXRhaWxzJ10pO1xuICAgIGN1cnJlbnRUZW1wRGV0YWlsc0NvbnRhaW5lci5hcHBlbmQodGVtcERldGFpbHNTZWN0aW9uLCB0ZW1wQ29uZGl0aW9uc1NlY3Rpb24pO1xuICAgIHJldHVybiBjdXJyZW50VGVtcERldGFpbHNDb250YWluZXI7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBvbkxvYWREZWZhdWx0V2VhdGhlcigpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kMjZhOGE5MDc1MmY0NWMyYTAzMTU0OTA3MjMwNTA1JnE9bG9uZG9uJmRheXM9NyZhcWk9bm8mYWxlcnRzPW5vJywgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgbG9uZG9uSW5mbyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjdXJyZW50RGF5SW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kKGRpc3BsYXlMb2NhdGlvbkRldGFpbHMocmV0cmlldmVDaXR5KGxvbmRvbkluZm8pLCByZXRyaWV2ZUNvdW50cnkobG9uZG9uSW5mbyksIGNyZWF0ZVN0YW5kYXJkRGF0ZShyZXRyaWV2ZURhdGVBbmRUaW1lQXJyKGxvbmRvbkluZm8pWzBdKSwgY3JlYXRlU3RhbmRhcmRUaW1lKHJldHJpZXZlRGF0ZUFuZFRpbWVBcnIobG9uZG9uSW5mbylbMV0pKSk7XG4gICAgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZChjdXJyZW50VGVtcERldGFpbHNTZWN0aW9uKHRlbXBEZXRhaWxzU2VjdGlvbihsb25kb25JbmZvLmN1cnJlbnQuY29uZGl0aW9uLmljb24sIGxvbmRvbkluZm8uY3VycmVudC50ZW1wX2MpLCB0ZW1wQ29uZGl0aW9uc1NlY3Rpb24obG9uZG9uSW5mby5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LCBsb25kb25JbmZvLmN1cnJlbnQuZmVlbHNsaWtlX2MpKSk7XG4gICAgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZChleHRyYUluZm9ybWF0aW9uU2VjdGlvbih3aW5kSW5mb3JtYXRpb24ocmV0cmlldmVXaW5kRGVncmVlcyhsb25kb25JbmZvKSwgcmV0cmlldmVXaW5kU3BlZWQobG9uZG9uSW5mbykpLCBodW1pZGl0eUluZm9ybWF0aW9uKHJldHJpZXZlSHVtaWRpdHkobG9uZG9uSW5mbykpLFxuICAgICAgICB1dkluZm9ybWF0aW9uKHJldHJpZXZlVXZOdW0obG9uZG9uSW5mbykpLCB2aXNpYmlsaXR5SW5mb3JtYXRpb24ocmV0cmlldmVWaXNpYmlsaXR5RGlzdGFuY2UobG9uZG9uSW5mbykpLCBjbG91ZGluZXNzSW5mb3JtYXRpb24ocmV0cmlldmVDbG91ZGluZXNzUGVyY2VudGFnZShsb25kb25JbmZvKSksIHJhaW5JbmZvcm1hdGlvbihyZXRyaWV2ZUNoYW5jZU9mUmFpbihsb25kb25JbmZvKSksXG4gICAgICAgIHN1bnJpc2VJbmZvcm1hdGlvbihyZXRyaWV2ZVN1bnJpc2VUaW1lKGxvbmRvbkluZm8pKSwgc3Vuc2V0SW5mb3JtYXRpb24ocmV0cmlldmVTdW5zZXRUaW1lKGxvbmRvbkluZm8pKSwgbW9vbkluZm9ybWF0aW9uKHJldHJpZXZlTW9vblBoYXNlKGxvbmRvbkluZm8pKSkpO1xuXG59O1xuXG5mdW5jdGlvbiBleHRyYUluZm9ybWF0aW9uU2VjdGlvbihhcHBlbmQsIGFwcGVuZDIsIGFwcGVuZDMsIGFwcGVuZDQsIGFwcGVuZDUsIGFwcGVuZDYsIGFwcGVuZDcsIGFwcGVuZDgsIGFwcGVuZDkpIHtcbiAgICBjb25zdCBleHRyYUluZm9ybWF0aW9uQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnZXh0cmEtaW5mb3JtYXRpb24nXSk7XG4gICAgZXh0cmFJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQoYXBwZW5kLCBhcHBlbmQyLCBhcHBlbmQzLCBhcHBlbmQ0LCBhcHBlbmQ1LCBhcHBlbmQ2LCBhcHBlbmQ3LCBhcHBlbmQ4LCBhcHBlbmQ5KTtcbiAgICByZXR1cm4gZXh0cmFJbmZvcm1hdGlvbkNvbnRhaW5lcjtcbn07XG5cbmZ1bmN0aW9uIHdpbmRJbmZvcm1hdGlvbih3aW5kQXJyb3dSb3RhdGlvbiwgd2luZFNwZWVkKSB7XG4gICAgY29uc3Qgd2luZENvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3dpbmQnXSk7XG4gICAgY29uc3Qgd2luZEluZm9ybWF0aW9uQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnd2luZC1pbmZvcm1hdGlvbiddKTtcbiAgICBjb25zdCB3aW5kU3BlZWRTcGFuID0gc3BhbkdlbmVyYXRvcihbJ3dpbmQtbnVtJ10sIHdpbmRTcGVlZCk7XG4gICAgd2luZEluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZChpbWdHZW5lcmF0b3IoJy4vLi4vc3JjL2Fzc2V0cy9hcnJvdy5wbmcnLCAnQW4gYXJyb3cgcm90YXRlZCBieSB0aGUgd2luZG93IGRpcmVjdGlvbiBkZWdyZWVzJywgWyd3aW5kLWRpcmVjdGlvbiddLCB3aW5kQXJyb3dSb3RhdGlvbiksIHBhcmFncmFwaEdlbmVyYXRvcihbJ3dpbmQtc3BlZWQnXSwgJ21waCcsIHdpbmRTcGVlZFNwYW4pKTtcbiAgICB3aW5kQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnV2luZCcpLCB3aW5kSW5mb3JtYXRpb25Db250YWluZXIpO1xuICAgIHJldHVybiB3aW5kQ29udGFpbmVyO1xufTtcblxuZnVuY3Rpb24gaHVtaWRpdHlJbmZvcm1hdGlvbihodW1pZGl0eU51bWJlcikge1xuICAgIGNvbnN0IGh1bWlkaXR5Q29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnaHVtaWRpdHknXSk7XG4gICAgY29uc3QgaHVtaWRpdHkgPSBzcGFuR2VuZXJhdG9yKFsnaHVtaWRpdHktbnVtYmVyJ10sIGh1bWlkaXR5TnVtYmVyKVxuICAgIGh1bWlkaXR5Q29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnSHVtaWRpdHknKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnaHVtaWRpdHktcGVyY2VudGFnZSddLCAnJScsIGh1bWlkaXR5KSk7XG4gICAgcmV0dXJuIGh1bWlkaXR5Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiB1dkluZm9ybWF0aW9uKHV2SW5kZXhOdW1iZXIpIHtcbiAgICBjb25zdCB1dkNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3V2LWluZGV4J10pO1xuICAgIHV2Q29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnVVYgSW5kZXgnKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsndXYnLCBjaGVja0NhdGVnb3J5T2ZVdih1dkluZGV4TnVtYmVyKV0sIHV2SW5kZXhOdW1iZXIpKTtcbiAgICByZXR1cm4gdXZDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHZpc2liaWxpdHlJbmZvcm1hdGlvbih2aXNpYmlsaXR5RGlzdGFuY2UpIHtcbiAgICBjb25zdCB2aXNpYmlsaXR5Q29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsndmlzaWJpbGl0eSddKTtcbiAgICBjb25zdCB2aXNpYmxpdHlEaXN0YW5jZVNwYW4gPSBzcGFuR2VuZXJhdG9yKFsndmlzaWJpbGl0eS1udW0nXSwgdmlzaWJpbGl0eURpc3RhbmNlKTtcbiAgICB2aXNpYmlsaXR5Q29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnVmlzaWJpbGl0eScpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWyd2aXNpYmlsaXR5LWRpc3RhbmNlJ10sICdrbScsIHZpc2libGl0eURpc3RhbmNlU3BhbikpO1xuICAgIHJldHVybiB2aXNpYmlsaXR5Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjbG91ZGluZXNzSW5mb3JtYXRpb24oY2xvdWRQZXJjZW50YWdlKSB7XG4gICAgY29uc3QgY2xvdWRpbmVzc0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2Nsb3VkaW5lc3MnXSk7XG4gICAgY29uc3QgY2xvdWRpbmVzc1BlcmNlbnRhZ2VTcGFuID0gc3BhbkdlbmVyYXRvcihbJ2Nsb3VkaW5lc3MtbnVtJ10sIGNsb3VkUGVyY2VudGFnZSk7XG4gICAgY2xvdWRpbmVzc0NvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ0Nsb3VkaW5lc3MnKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnY2xvdWRpbmVzcy1wZXJjZW50YWdlJ10sICclJywgY2xvdWRpbmVzc1BlcmNlbnRhZ2VTcGFuKSk7XG4gICAgcmV0dXJuIGNsb3VkaW5lc3NDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHJhaW5JbmZvcm1hdGlvbihyYWluUGVyY2VudGFnZSkge1xuICAgIGNvbnN0IHJhaW5Db250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydjaGFuY2Utb2YtcmFpbiddKTtcbiAgICBjb25zdCByYWluUGVyY2VudGFnZVNwYW4gPSBzcGFuR2VuZXJhdG9yKFsnY2hhbmNlLW9mLXJhaW4tbnVtJ10sIHJhaW5QZXJjZW50YWdlKTtcbiAgICByYWluQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnQ2hhbmNlIG9mIFJhaW4nKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnY2hhbmNlLW9mLXJhaW4tcGVyY2VudGFnZSddLCAnJScsIHJhaW5QZXJjZW50YWdlU3BhbikpO1xuICAgIHJldHVybiByYWluQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBzdW5yaXNlSW5mb3JtYXRpb24oc3VucmlzZVRpbWUpIHtcbiAgICBjb25zdCBzdW5yaXNlQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnc3VucmlzZSddKTtcbiAgICBzdW5yaXNlQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnU3VucmlzZScpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydzdW5yaXNlLXRpbWUnXSwgc3VucmlzZVRpbWUpKTtcbiAgICByZXR1cm4gc3VucmlzZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gc3Vuc2V0SW5mb3JtYXRpb24oc3Vuc2V0VGltZSkge1xuICAgIGNvbnN0IHN1bnNldENvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3N1bnNldCddKTtcbiAgICBzdW5zZXRDb250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2g1JywgW10sICdTdW5zZXQnKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnc3Vuc2V0LXRpbWUnXSwgc3Vuc2V0VGltZSkpO1xuICAgIHJldHVybiBzdW5zZXRDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIG1vb25JbmZvcm1hdGlvbihtb29uUGhhc2UpIHtcbiAgICBjb25zdCBtb29ucGhhc2VDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydtb29uLXBoYXNlJ10pO1xuICAgIG1vb25waGFzZUNvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ01vb24gUGhhc2UnKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsncGhhc2UnXSwgbW9vblBoYXNlKSk7XG4gICAgcmV0dXJuIG1vb25waGFzZUNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyLCBvbkxvYWREZWZhdWx0V2VhdGhlciB9O1xuXG4vKjxkaXYgY2xhc3M9XCJjdXJyZW50LWRheS1pbmZvcm1hdGlvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJsb2NhdGlvbi1kZXRhaWxzXCI+XG4gICAgICAgIDxoMiBjbGFzcz1cImNpdHktZGV0YWlsc1wiPjxzcGFuIGNsYXNzPVwiY2l0eVwiPkxvbmRvbjwvc3Bhbj4sIDxzcGFuIGNsYXNzPVwiY291bnRyeVwiPlVuaXRlZCBLaW5nZG9tPC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8aDQgY2xhc3M9XCJkYXktZGV0YWlsc1wiPldlZG5lc2RheSAxMCBNYXkgMjAyMzxzcGFuIGNsYXNzPVwidGltZS1kZXRhaWxzXCI+MDI6NDE8L3NwYW4+PC9oND5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC10ZW1wLWRldGFpbHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRlbXAtZGV0YWlsc1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImltYWdlLXdlYXRoZXItZGVzY3JpcHRpb25cIiBzcmM9XCIvL2Nkbi53ZWF0aGVyYXBpLmNvbS93ZWF0aGVyLzY0eDY0L2RheS8xMTYucG5nXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY3VycmVudC10ZW1wXCI+PHNwYW4gY2xhc3M9XCJ0ZW1wXCI+MjA8L3NwYW4+wrA8c3BhbiBjbGFzcz1cIm1ldGhvZC1vZi1tZWFzdXJlbWVudFwiPkM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wLWNvbmRpdGlvbnNcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInRlbXAtZGVzY3JpcHRpb25cIj5TbW9rZTwvaDM+XG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJmZWVscy1saWtlXCI+RmVlbHMgbGlrZSA8c3BhbiBjbGFzcz1cImZlZWxzLWxpa2UtdGVtcFwiPjIwPC9zcGFuPsKwPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1ldGhvZC1vZi1tZWFzdXJlbWVudFwiPkM8L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cImdlbmVyYWwtZGVzY3JpcHRpb25cIj5HZW50bGUgYnJlZXplPC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImV4dHJhLWluZm9ybWF0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kXCI+XG4gICAgICAgICAgICA8aDU+V2luZDwvaDU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2luZC1pbmZvcm1hdGlvblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3aW5kLWRpcmVjdGlvblwiIHNyYz1cIi4vLi4vc3JjL2Fzc2V0cy9hcnJvdy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBbiBhcnJvdyByb3RhdGVkIGJ5IHRoZSB3aW5kb3cgZGlyZWN0aW9uIGRlZ3JlZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ3aW5kLXNwZWVkXCI+PHNwYW4gY2xhc3M9XCJ3aW5kLW51bVwiPjQ8L3NwYW4+bXBoPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaHVtaWRpdHlcIj5cbiAgICAgICAgICAgIDxoNT5IdW1pZGl0eTwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImh1bWlkaXR5LXBlcmNlbnRhZ2VcIj48c3BhbiBjbGFzcz1cImh1bWlkaXR5LW51bWJlclwiPjU2PC9zcGFuPiU8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidXYtaW5kZXhcIj5cbiAgICAgICAgICAgIDxoNT5VViBJbmRleDwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInV2XCI+MDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2aXNpYmlsaXR5XCI+XG4gICAgICAgICAgICA8aDU+VmlzaWJpbGl0eTwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInZpc2liaWxpdHktZGlzdGFuY2VcIj48c3BhbiBjbGFzcz1cInZpc2liaWxpdHktbnVtXCI+NDwvc3Bhbj5rbTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbG91ZGluZXNzXCI+XG4gICAgICAgICAgICA8aDU+Q2xvdWRpbmVzczwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNsb3VkaW5lc3MtcGVyY2VudGFnZVwiPjxzcGFuIGNsYXNzPVwiY2xvdWRpbmVzcy1udW1cIj4wPC9zcGFuPiU8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhbmNlLW9mLXJhaW5cIj5cbiAgICAgICAgICAgIDxoNT5DaGFuY2Ugb2YgUmFpbjwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNoYW5jZS1vZi1yYWluLXBlcmNlbnRhZ2VcIj48c3BhbiBjbGFzcz1cImNoYW5jZS1vZi1yYWluLW51bVwiPjA8L3NwYW4+JTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdW5yaXNlXCI+XG4gICAgICAgICAgICA8aDU+U3VucmlzZTwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInN1bnJpc2UtdGltZVwiPjA1OjEwPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bnNldFwiPlxuICAgICAgICAgICAgPGg1PlN1bnNldDwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInN1bnNldC10aW1lXCI+MTg6MTA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9vbi1waGFzZVwiPlxuICAgICAgICAgICAgPGg1Pk1vb24gUGhhc2U8L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwaGFzZVwiPldhbmluZyBHaWJib3VzPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiAqL1xuIiwiLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIHRha2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgYW5kIGFkZHMgdGhvc2UgY2xhc3NlcyB0byB0aGUgZWxlbWVudCB1c2luZyBhIGZvckVhY2ggbG9vcFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHRoZSBlbGVtZW50IHRoYXQgd2UgbmVlZCB0byBhZGQgdGhlIGNsYXNzZXMgdG8gXG4gKi9cbmZ1bmN0aW9uIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgZWxlbWVudCkge1xuICAgIGNsYXNzZXMuZm9yRWFjaChpbmRpdmlkdWFsQ2xhc3MgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGluZGl2aWR1YWxDbGFzcykpO1xufVxuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGEgZGl2IGVsZW1lbnQgd2l0aCBpdHMgY2xhc3NlcyBwcm92aWRlZCBhcyBhbiBhcmd1bWVudFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgZGl2XG4gKiBAcmV0dXJucyBhIGRpdiBET00gZWxlbWVudFxuICovXG5mdW5jdGlvbiBkaXZHZW5lcmF0b3IoY2xhc3Nlcykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgZGl2KVxuICAgIHJldHVybiBkaXY7XG59XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgYW4gaW1nIGVsZW1lbnQsIHdpdGggdGhlIHNwZWNpZmllZCwgc3JjLCBhbHQgYW5kIGNsYXNzZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgdGhlIHBhdGggdG8gdGhlIGltYWdlIHdlIHdhbnQgdG8gdXNlXG4gKiBAcGFyYW0ge3N0cmluZ30gYWx0IHRoZSBhbHQgZGVzY3JpcHRpb24gb2YgdGhlIGltZyBpbmNhc2UgaXQgZG9lc24ndCBsb2FkXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBpbWdcbiAqIEByZXR1cm5zIGFuIGltZyBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGltZ0dlbmVyYXRvcihzcmMsIGFsdCA9ICcnLCBjbGFzc2VzLCByb3RhdGlvbiA9IDApIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICAgIGltZy5hbHQgPSBhbHQ7XG4gICAgYWRkQ2xhc3Nlc1RvRWxlbWVudChjbGFzc2VzLCBpbWcpO1xuICAgIGltZy5zdHlsZS5yb3RhdGUgPSBgJHtyb3RhdGlvbn1kZWdgXG4gICAgcmV0dXJuIGltZztcbn1cblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhIGhlYWRpbmcgb2YgdGhlIGRlc2lyZWQgc2l6ZSwgYW5kIGFkZHMgdGhlIHRleHQgc3BlY2lmaWVkIGFzIHdlbGwgYXMgdGhlIGNsYXNzZXMgcHJvdmlkZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBoZWFkaW5nU2l6ZSAxIG9mIDYgc2l6ZXMgd2Ugd2FudCB0aGUgaGVhZGluZyB0byBiZSBlLmcuICdoMSdcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGhlYWRpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IHRoZSBoZWFkaW5nIG5lZWRzIHRvIGRpc3BsYXkgXG4gKiBAcmV0dXJucyBhIGhlYWRpbmcgRE9NIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gaGVhZGluZ0dlbmVyYXRvcihoZWFkaW5nU2l6ZSwgY2xhc3NlcywgdGV4dCwgc3BhbkVsZW1lbnRQcmVwcGVuZCA9ICcnLCBzcGFuRWxlbWVudEFwcGVuZCA9ICcnKSB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaGVhZGluZ1NpemUpO1xuICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gdGV4dDtcbiAgICBoZWFkaW5nLnByZXBlbmQoc3BhbkVsZW1lbnRQcmVwcGVuZClcbiAgICBoZWFkaW5nLmFwcGVuZChzcGFuRWxlbWVudEFwcGVuZClcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIGhlYWRpbmcpO1xuICAgIHJldHVybiBoZWFkaW5nO1xufVxuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGEgYnV0dG9uIHdpdGggdGhlIGNsYXNzZXMgYW5kIHRleHQgcHJvdmlkZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGhlYWRpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IG5lZWRlZCB3aXRoaW4gdGhlIGJ1dHRvbiBcbiAqIEByZXR1cm5zIGEgYnV0dG9uIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYnV0dG9uR2VuZXJhdG9yKGNsYXNzZXMsIHRleHQpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIGJ0bik7XG4gICAgYnRuLmlubmVySFRNTCA9IHRleHQ7XG4gICAgcmV0dXJuIGJ0bjtcbn1cblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhIHNwYW4gZWxlbWVudCB3aXRoIHRoZSBjbGFzc2VzIGFuZCB0ZXh0IHByb3ZpZGVkXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBoZWFkaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCB0aGUgdGV4dCBuZWVkZWQgd2l0aGluIHRoZSBzcGFuIFxuICogQHJldHVybnMgYSBzcGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc3BhbkdlbmVyYXRvcihjbGFzc2VzLCB0ZXh0KSB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIHNwYW4pO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gdGV4dDtcbiAgICByZXR1cm4gc3Bhbjtcbn1cblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhIGZvcm0gZWxlbWVudCB3aXRoIHRoZSBjbGFzc2VzIHByb3ZpZGVkXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBmb3JtXG4gKiBAcmV0dXJucyBhIGZvcm0gZWxlbWVudFxuICovXG5mdW5jdGlvbiBmb3JtR2VuZXJhdG9yKGNsYXNzZXMpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgZm9ybSk7XG4gICAgcmV0dXJuIGZvcm07XG59XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgYW4gaW5wdXQgZWxlbWVudCBhbmQgYWRkcyB0aGUgc3BlY2lmaWVkIGF0dHJpYnV0ZXMgYW5kIHZhbHVlcyB0byBpdFxuICogQHBhcmFtIHtBcnJheX0gYXR0cmlidXRlcyBhbiBhcnJheSBvZiBhcnJheXMgd2hlcmUgZWFjaCBlbGVtZW50IGhhcyB0aGUgYXR0cmlidXRlLCBhbmQgaXQncyBhc3NvY2lhdGVkIHZhbHVlIFxuICogQHJldHVybnMgYW4gaW5wdXQgZWxlbWVudFxuICovXG5mdW5jdGlvbiBpbnB1dEdlbmVyYXRvcihhdHRyaWJ1dGVzKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHRyaWJ1dGUgPT4gaW5wdXQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZVswXSwgYXR0cmlidXRlWzFdKSk7XG4gICAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBwYXJhZ3JhcGhHZW5lcmF0b3IoY2xhc3NlcywgdGV4dCwgc3BhbkVsZW1lbnRQcmVwcGVuZCA9ICcnLCBzcGFuRWxlbWVudEFwcGVuZCA9ICcnKSB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgcGFyYWdyYXBoKTtcbiAgICBwYXJhZ3JhcGguaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBwYXJhZ3JhcGgucHJlcGVuZChzcGFuRWxlbWVudFByZXBwZW5kKVxuICAgIHBhcmFncmFwaC5hcHBlbmQoc3BhbkVsZW1lbnRBcHBlbmQpXG4gICAgcmV0dXJuIHBhcmFncmFwaDtcbn1cblxuZnVuY3Rpb24gY2hlY2tDYXRlZ29yeU9mVXYodXZOdW0pIHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSB1dk51bSA8PSAyOlxuICAgICAgICAgICAgcmV0dXJuICdzYWZlJztcbiAgICAgICAgY2FzZSB1dk51bSA8PSA3OlxuICAgICAgICAgICAgcmV0dXJuICdhbWJlcic7XG4gICAgICAgIGNhc2UgdXZOdW0gPj0gODpcbiAgICAgICAgICAgIHJldHVybiAnZGFuZ2VyJztcbiAgICB9XG59XG5cbmV4cG9ydCB7IGRpdkdlbmVyYXRvciwgaW1nR2VuZXJhdG9yLCBoZWFkaW5nR2VuZXJhdG9yLCBidXR0b25HZW5lcmF0b3IsIHNwYW5HZW5lcmF0b3IsIGlucHV0R2VuZXJhdG9yLCBmb3JtR2VuZXJhdG9yLCBjaGVja0NhdGVnb3J5T2ZVdiwgcGFyYWdyYXBoR2VuZXJhdG9yIH0iLCJpbXBvcnQgeyBkaXZHZW5lcmF0b3IsIGltZ0dlbmVyYXRvciwgaGVhZGluZ0dlbmVyYXRvciwgc3BhbkdlbmVyYXRvciwgaW5wdXRHZW5lcmF0b3IsIGJ1dHRvbkdlbmVyYXRvciwgZm9ybUdlbmVyYXRvciB9IGZyb20gXCIuL2dlbmVyYXRvckZ1bmN0aW9uc1wiO1xuXG5mdW5jdGlvbiB0aXRsZVNlY3Rpb24oKSB7XG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd0aXRsZSddKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmQoaW1nR2VuZXJhdG9yKCcuLy4uL3NyYy9hc3NldHMvcGFnZS1pY29uLnBuZycsICdhIGNpcmN1bGFyIGljb24gZGVwaWN0aW5nIGFsbCA0IHNlYXNvbnMnLCBbJ21haW4taWNvbiddKSwgaGVhZGluZ0dlbmVyYXRvcignaDEnLCBbJ3BhZ2UtdGl0bGUnXSwgJ1dlYXRoZXInLCB1bmRlZmluZWQsIHNwYW5HZW5lcmF0b3IoWyd0aXRsZS1lbmQnXSwgJ1dhdGNoJykpKTtcbiAgICByZXR1cm4gdGl0bGVDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGhlYWRlckZvcm1TZWN0aW9uKCkge1xuICAgIGNvbnN0IGZvcm0gPSBmb3JtR2VuZXJhdG9yKFsnc2VhcmNoLWZvcm0nXSk7XG4gICAgZm9ybS5hcHBlbmQoaW5wdXRHZW5lcmF0b3IoW1sndHlwZScsICdzZWFyY2gnXSwgWydpZCcsICdzZWFyY2gtYmFyJ10sIFsncGxhY2Vob2xkZXInLCAnU2VhcmNoIGEgbG9jYXRpb24nXSwgWydyZXF1aXJlZCcsIHRydWVdXSksIGltZ0dlbmVyYXRvcignLi8uLi9zcmMvYXNzZXRzL3NlYXJjaC1pY29uLnN2ZycsICdBIG1hZ25pZnlpbmcgZ2xhc3MnLCBbJ3NlYXJjaC1idXR0b24nXSkpO1xuICAgIHJldHVybiBmb3JtO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJCdXR0b25zKCkge1xuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydjaGFuZ2UtZGVncmVlcyddKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZChidXR0b25HZW5lcmF0b3IoWydjZWxzaXVzLWJ0bicsICdidG4nLCAnYWN0aXZlJ10sICfCsEMnKSwgYnV0dG9uR2VuZXJhdG9yKFsnZmFocmVuaGVpdC1idG4nLCAnYnRuJ10sICfCsEYnKSk7XG4gICAgcmV0dXJuIGJ1dHRvbnNDb250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZVNlY3Rpb24oKSwgaGVhZGVyRm9ybVNlY3Rpb24oKSwgaGVhZGVyQnV0dG9ucygpKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG4iLCJpbXBvcnQgeyBzcGFuR2VuZXJhdG9yIH0gZnJvbSBcIi4vZ2VuZXJhdG9yRnVuY3Rpb25zXCI7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgZGF0ZSBpbnRvIHRoZSBHQiBzdHlsZSBvZiBkYXRlXG4gKiBAcGFyYW0ge3N0cmluZyBvciBEYXRlfSBkYXRlIGVpdGhlciBhIHN0cmluZyBvciBEYXRlIHZlcnNpb24gY2FuIGJlIHByb3ZpZGVkIGFuZCB0aGlzIGlzIHRoZSBkYXRlIHdlIHdhbnQgY29udmVydCBpbnRvIGFuIEludGwgZGF0ZSBcbiAqIEByZXR1cm5zIGFuIG9iamVjdCB0aGF0IGlzIHRoZSBjb3JyZWN0IGZvcm1hdCBvZiBkYXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN0YW5kYXJkRGF0ZShkYXRlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tR0JcIiwgb3B0aW9ucykuZm9ybWF0KGRhdGUudG9JU09TdHJpbmcpO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHRvIG1ha2UgdGhlIHRpbWUgaGF2ZSBhIDAgYXQgdGhlIHN0YXJ0IGlmIHRoZSBudW1iZXIgYmVmb3JlIHRoZSBjb2xvbiBpcyBub3QgZG91YmxlIGRpZ2l0cyB5ZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lIHRoZSB0aW1lIHRoYXQgbmVlZHMgdG8gYmUgcGFkZGVkXG4gKiBAcmV0dXJucyBhIHBhZGRlZCB2ZXJzaW9uIG9mIHRoZSB0aW1lLCBlLmcuIGlmIGl0cyAxOjExIGl0IGdldHMgY2hhbmdlZCB0byAwMToxMVxuICovXG5mdW5jdGlvbiBjcmVhdGVTdGFuZGFyZFRpbWUodGltZSkge1xuICAgIHJldHVybiB0aW1lLnBhZFN0YXJ0KDUsIDApO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcmV0cmlldmVzIHRoZSBjaXR5IHZhbHVlIGZyb20gdGhlIG9iaiBwcm92aWRlZFxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgLmpzb24oKSB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgZmV0Y2ggY2FsbCBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGNpdHkgbmFtZSBwcm92aWRlZCBieSB0aGUgb2JqXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlQ2l0eShvYmopIHtcbiAgICByZXR1cm4gb2JqLmxvY2F0aW9uLm5hbWU7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiByZXRyaWV2ZXMgdGhlIGNvdW50cnkgdmFsdWUgZnJvbSB0aGUgb2JqIHByb3ZpZGVkXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSAuanNvbigpIHZlcnNpb24gb2YgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBmZXRjaCBjYWxsIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY291bnRyeSBuYW1lIHByb3ZpZGVkIGJ5IHRoZSBvYmpcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDb3VudHJ5KG9iaikge1xuICAgIHJldHVybiBvYmoubG9jYXRpb24uY291bnRyeTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHJpZXZlcyB0aGUgZGF0ZSBhbmQgdGltZSB2YWx1ZSBmcm9tIHRoZSBvYmogcHJvdmlkZWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIC5qc29uKCkgdmVyc2lvbiBvZiB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgdGhlIGZldGNoIGNhbGwgXG4gKiBAcmV0dXJucyBhbiBBcnJheSB0aGF0IHN0b3JlcyB0aGUgZGF0ZSBpbiBpbmRleCAwIGFuZCB0aGUgdGltZSBpbiBpbmRleCAxXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlRGF0ZUFuZFRpbWVBcnIob2JqKSB7XG4gICAgcmV0dXJuIG9iai5sb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoJyAnKTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9ucyBmaW5kcyB3aGV0aGVyIHRoZSBjZWxzaXVzIG9yIGZhaHJlbmhlaXQgYnV0dG9uIGlzIGFjdGl2ZSBzbyB0aGUgcmlnaHQgc3ltYm9sIGNhbiBiZSBkaXNwbGF5ZWRcbiAqIEByZXR1cm5zIGEgc3BhbiBlbGVtZW50IHdpdGggdGhlIGNvcnJlY3Qgc3ltYm9sXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlTWV0aG9kT2ZNZWFzdXJlbWVudCgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNlbHNpdXMtYnRuJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuIHNwYW5HZW5lcmF0b3IoWydtZXRob2Qtb2YtbWVhc3VyZW1lbnQnXSwgJ0MnKTtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFocmVuaGVpdC1idG4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm4gc3BhbkdlbmVyYXRvcihbJ21ldGhvZC1vZi1tZWFzdXJlbWVudCddLCAnRicpO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb25zIGZpbmRzIHdoZXRoZXIgdGhlIGNlbHNpdXMgb3IgZmFocmVuaGVpdCBidXR0b24gaXMgYWN0aXZlIHNvIHRoZSByaWdodCBzeW1ib2wgY2FuIGJlIGRpc3BsYXllZFxuICogQHJldHVybnMgYSBib29sZWFuIHZhbHVlIG9mIHdoZXRoZXIgb3Igbm90IHRoZSBtZXRob2Qgb2YgbWVhc3VyZW1lbnQgaXMgY2Vsc2l1c1xuICovXG5mdW5jdGlvbiBpc01ldGhvZE9mTWVhc3VyZW1lbnRDZWxzaXVzKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Vsc2l1cy1idG4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFocmVuaGVpdC1idG4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlV2luZERlZ3JlZXMob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LndpbmRfZGVncmVlO1xufTtcblxuZnVuY3Rpb24gcmV0cmlldmVXaW5kU3BlZWQob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LndpbmRfbXBoO1xufTtcblxuZnVuY3Rpb24gcmV0cmlldmVIdW1pZGl0eShvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQuaHVtaWRpdHlcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVVdk51bShvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQudXY7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlVmlzaWJpbGl0eURpc3RhbmNlKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC52aXNfa207XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlQ2xvdWRpbmVzc1BlcmNlbnRhZ2Uob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LmNsb3VkO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUNoYW5jZU9mUmFpbihvYmopIHtcbiAgICByZXR1cm4gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVTdW5yaXNlVGltZShvYmopIHtcbiAgICByZXR1cm4gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2U7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlU3Vuc2V0VGltZShvYmopIHtcbiAgICByZXR1cm4gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldDtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVNb29uUGhhc2Uob2JqKSB7XG4gICAgcmV0dXJuIG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5tb29uX3BoYXNlO1xuXG59XG5cbmV4cG9ydCB7IHJldHJpZXZlU3Vuc2V0VGltZSwgcmV0cmlldmVNb29uUGhhc2UsIHJldHJpZXZlU3VucmlzZVRpbWUsIHJldHJpZXZlQ2hhbmNlT2ZSYWluLCByZXRyaWV2ZUNsb3VkaW5lc3NQZXJjZW50YWdlLCByZXRyaWV2ZVZpc2liaWxpdHlEaXN0YW5jZSwgcmV0cmlldmVVdk51bSwgY3JlYXRlU3RhbmRhcmREYXRlLCBjcmVhdGVTdGFuZGFyZFRpbWUsIHJldHJpZXZlQ2l0eSwgcmV0cmlldmVDb3VudHJ5LCByZXRyaWV2ZURhdGVBbmRUaW1lQXJyLCByZXRyaWV2ZU1ldGhvZE9mTWVhc3VyZW1lbnQsIGlzTWV0aG9kT2ZNZWFzdXJlbWVudENlbHNpdXMsIHJldHJpZXZlV2luZERlZ3JlZXMsIHJldHJpZXZlV2luZFNwZWVkLCByZXRyaWV2ZUh1bWlkaXR5IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSAnLi9oZWFkZXJTZWN0aW9uJztcbmltcG9ydCB7IG9uTG9hZERlZmF1bHRXZWF0aGVyLCBjdXJyZW50RGF5SW5mb3JtYXRpb25Db250YWluZXIgfSBmcm9tICcuL2N1cnJlbnRUZW1wZXJhdHVyZVNlY3Rpb24nO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIoKSwgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkRGVmYXVsdFdlYXRoZXIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==