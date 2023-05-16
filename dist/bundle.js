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
    return obj.forecast.forecastday[0].astro.sunrise;
};

/**
 * This function is used to retrieve the sunset time from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the sunset time
 */
function retrieveSunsetTime(obj) {
    return obj.forecast.forecastday[0].astro.sunset;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jdXJyZW50VGVtcGVyYXR1cmVTZWN0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dlbmVyYXRvckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWFkZXJTZWN0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3JldHJpZXZlSW5mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvV29ya1NhbnMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbGlnaHQtYmx1ZTogIzRiYTZjZjtcXG4gICAgLS1kYXJrLWJsdWU6ICMwYzRhNmU7XFxuICAgIC0tb3JhbmdlOiAjZWNiMzQ3O1xcbiAgICAtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yOiAjMDYyNjNiO1xcbiAgICAtLWZhZGVkLXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjAzKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tZGFyay1ibHVlKSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA1ZnIgNWZyIDAuNWZyO1xcbiAgICByb3ctZ2FwOiAycmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbVxcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udGl0bGUtZW5kIHtcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDU1cHg7XFxufVxcblxcbiNzZWFyY2gtYmFyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMCAwLjhyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jc2VhcmNoLWJhcjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgbGVmdDogODglO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGFuZ2UtZGVncmVlcyB7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZmFocmVuaGVpdC1idG4sXFxuLmNlbHNpdXMtYnRuIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciA2MG1zIGVhc2UtaW47XFxufVxcblxcbi5mYWhyZW5oZWl0LWJ0bjpob3ZlcixcXG4uY2Vsc2l1cy1idG46aG92ZXIsXFxuLmRhaWx5LXdlYXRoZXItYnRuOmhvdmVyLFxcbi5ob3VybHktd2VhdGhlci1idG46aG92ZXIsXFxuLmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY3VycmVudC1kYXktaW5mb3JtYXRpb24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICB3aWR0aDogNDNyZW07XFxuICAgIGhlaWdodDogMzByZW07XFxufVxcblxcbi5sb2NhdGlvbi1kZXRhaWxzIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jaXR5LWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmRheS1kZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRpbWUtZGV0YWlscyB7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcC1kZXRhaWxzIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAwO1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLnRlbXAtZGV0YWlscz5pbWcge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbn1cXG5cXG4udGVtcC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZmVlbHMtbGlrZSxcXG4uZ2VuZXJhbC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24+ZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjNyZW07XFxufVxcblxcbi53aW5kLWluZm9ybWF0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi53aW5kLWRpcmVjdGlvbiB7XFxuICAgIGhlaWdodDogMS43cmVtO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gaDUsXFxuLmV4dHJhLWluZm9ybWF0aW9uIHAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gaDUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG59XFxuXFxuLmV4dHJhLWluZm9ybWF0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnNhZmUsXFxuLmFtYmVyLFxcbi5kYW5nZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5zYWZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxOTIsIDUxKTtcXG59XFxuXFxuLmFtYmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4uZGFuZ2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMCwgMCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFB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QXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOzs7SUFHSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL1dvcmtTYW5zLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbGlnaHQtYmx1ZTogIzRiYTZjZjtcXG4gICAgLS1kYXJrLWJsdWU6ICMwYzRhNmU7XFxuICAgIC0tb3JhbmdlOiAjZWNiMzQ3O1xcbiAgICAtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yOiAjMDYyNjNiO1xcbiAgICAtLWZhZGVkLXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjAzKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tZGFyay1ibHVlKSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA1ZnIgNWZyIDAuNWZyO1xcbiAgICByb3ctZ2FwOiAycmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbVxcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udGl0bGUtZW5kIHtcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDU1cHg7XFxufVxcblxcbiNzZWFyY2gtYmFyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMCAwLjhyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jc2VhcmNoLWJhcjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgbGVmdDogODglO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGFuZ2UtZGVncmVlcyB7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZmFocmVuaGVpdC1idG4sXFxuLmNlbHNpdXMtYnRuIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciA2MG1zIGVhc2UtaW47XFxufVxcblxcbi5mYWhyZW5oZWl0LWJ0bjpob3ZlcixcXG4uY2Vsc2l1cy1idG46aG92ZXIsXFxuLmRhaWx5LXdlYXRoZXItYnRuOmhvdmVyLFxcbi5ob3VybHktd2VhdGhlci1idG46aG92ZXIsXFxuLmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY3VycmVudC1kYXktaW5mb3JtYXRpb24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICB3aWR0aDogNDNyZW07XFxuICAgIGhlaWdodDogMzByZW07XFxufVxcblxcbi5sb2NhdGlvbi1kZXRhaWxzIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jaXR5LWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmRheS1kZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRpbWUtZGV0YWlscyB7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcC1kZXRhaWxzIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAwO1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLnRlbXAtZGV0YWlscz5pbWcge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbn1cXG5cXG4udGVtcC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZmVlbHMtbGlrZSxcXG4uZ2VuZXJhbC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24+ZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjNyZW07XFxufVxcblxcbi53aW5kLWluZm9ybWF0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi53aW5kLWRpcmVjdGlvbiB7XFxuICAgIGhlaWdodDogMS43cmVtO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gaDUsXFxuLmV4dHJhLWluZm9ybWF0aW9uIHAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gaDUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG59XFxuXFxuLmV4dHJhLWluZm9ybWF0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnNhZmUsXFxuLmFtYmVyLFxcbi5kYW5nZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5zYWZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxOTIsIDUxKTtcXG59XFxuXFxuLmFtYmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4uZGFuZ2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMCwgMCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY2hlY2tDYXRlZ29yeU9mVXYsIGRpdkdlbmVyYXRvciwgaGVhZGluZ0dlbmVyYXRvciwgaW1nR2VuZXJhdG9yLCBwYXJhZ3JhcGhHZW5lcmF0b3IsIHNwYW5HZW5lcmF0b3IgfSBmcm9tICcuL2dlbmVyYXRvckZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVTdGFuZGFyZERhdGUsIGNyZWF0ZVN0YW5kYXJkVGltZSwgcmV0cmlldmVDaXR5LCByZXRyaWV2ZUNvdW50cnksIHJldHJpZXZlRGF0ZUFuZFRpbWVBcnIsIHJldHJpZXZlTWV0aG9kT2ZNZWFzdXJlbWVudCwgaXNNZXRob2RPZk1lYXN1cmVtZW50Q2Vsc2l1cywgcmV0cmlldmVXaW5kRGVncmVlcywgcmV0cmlldmVXaW5kU3BlZWQsIHJldHJpZXZlSHVtaWRpdHksIHJldHJpZXZlVXZOdW0sIHJldHJpZXZlVmlzaWJpbGl0eURpc3RhbmNlLCByZXRyaWV2ZUNsb3VkaW5lc3NQZXJjZW50YWdlLCByZXRyaWV2ZUNoYW5jZU9mUmFpbiwgcmV0cmlldmVTdW5yaXNlVGltZSwgcmV0cmlldmVTdW5zZXRUaW1lLCByZXRyaWV2ZU1vb25QaGFzZSwgcmV0cmlldmVDdXJyZW50VGVtcEltZywgcmV0cmlldmVDdXJyZW50VGVtcCwgcmV0cmlldmVDdXJyZW50Q29uZGl0aW9uLCByZXRyaWV2ZUZlZWxzTGlrZVRlbXAgfSBmcm9tICcuL3JldHJpZXZlSW5mb3JtYXRpb24nXG5cbmNvbnN0IGN1cnJlbnREYXlJbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2N1cnJlbnQtZGF5LWluZm9ybWF0aW9uJ10pOyAvL3RoaXMgaXMgdGhlIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIGFsbCBlbGVtZW50cyB0aGF0IHdpbGwgcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBtb21lbnRcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgb24gc2NyZWVuIHRvIHNob3cgdGhlIGxvY2F0aW9uIGFuZCB0aW1lIG9mIHRoZSBjaXR5IHNlYXJjaGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gY2l0eSB0aGUgbmFtZSBvZiB0aGUgY2l0eSB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZCBvbiBzY3JlZW4gXG4gKiBAcGFyYW0ge3N0cmluZ30gY291bnRyeSB0aGUgbmFtZSBvZiB0aGUgY291bnRyeSB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZCBvbiBzY3JlZW4gXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF5IHRoZSBkYXRlIHRoYXQgaGFzIGNvbnZlcnRlZCBpbnRvIGEgc3RyaW5nIHVzaW5nIHRoZSBJbnRsIEFQSVxuICogQHBhcmFtIHtzdHJpbmd9IHRpbWUgdGhlIHRpbWUgdGhhdCBuZWVkcyB0byBiZSBkaXNwbGF5ZWQgb24gc2NyZWVuXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IHRoYXQgY29udGFpbnMgbmVzdGVkIGVsZW1lbnRzIHRoYXQgZGlzcGxheSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbG9jYXRpb24gYW5kIHRpbWVcbiAqL1xuZnVuY3Rpb24gZGlzcGxheUxvY2F0aW9uRGV0YWlscyhjaXR5ID0gJycsIGNvdW50cnkgPSAnJywgZGF5ID0gJycsIHRpbWUgPSAnJykge1xuICAgIGNvbnN0IGxvY2F0aW9uRGV0YWlscyA9IGRpdkdlbmVyYXRvcihbJ2xvY2F0aW9uLWRldGFpbHMnXSk7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBzcGFuR2VuZXJhdG9yKFsnY2l0eSddLCBjaXR5KTtcbiAgICBjb25zdCBjb3VudHJ5TmFtZSA9IHNwYW5HZW5lcmF0b3IoWydjb3VudHJ5J10sIGNvdW50cnkpO1xuICAgIGNvbnN0IHRpbWVEZXRhaWxzID0gc3BhbkdlbmVyYXRvcihbJ3RpbWUtZGV0YWlscyddLCB0aW1lKTtcbiAgICBjb25zdCBjaXR5RGV0YWlsc0hlYWRlciA9IGhlYWRpbmdHZW5lcmF0b3IoJ2gyJywgWydjaXR5LWRldGFpbHMnXSwgJywgJywgY2l0eU5hbWUsIGNvdW50cnlOYW1lKTtcbiAgICBjb25zdCBkYXlEZXRhaWxzSGVhZGVyID0gaGVhZGluZ0dlbmVyYXRvcignaDQnLCBbJ2RheS1kZXRhaWxzJ10sIGRheSwgdW5kZWZpbmVkLCB0aW1lRGV0YWlscyk7XG4gICAgbG9jYXRpb25EZXRhaWxzLmFwcGVuZChjaXR5RGV0YWlsc0hlYWRlciwgZGF5RGV0YWlsc0hlYWRlcik7XG4gICAgcmV0dXJuIGxvY2F0aW9uRGV0YWlscztcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGRpc3BsYXkgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgYWxvbmcgd2l0aCBpdHMgYXNzb2NpYXRlZCBpbWFnZVxuICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIHRoaXMgaXMgdGhlIHBhdGggdG8gdGhlIGltYWdlIHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkIFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXAgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBcbiAqIEByZXR1cm5zIGEgZGl2IGVsZW1lbnQgdGhhdCBoYXMgdHdvIGZ1cnRoZXIgZWxlbWVudHMgYXBwZW5kZWQgd2l0aGluIGl0IGRpc3BsYXlpbmcgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgYWxvbmcgd2l0aCBpdHMgYXNzb2NpYXRlZCBpbWFnZVxuICovXG5mdW5jdGlvbiB0ZW1wRGV0YWlsc1NlY3Rpb24oaW1hZ2UsIHRlbXApIHtcbiAgICBjb25zdCB0ZW1wRGV0YWlsc0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3RlbXAtZGV0YWlscyddKTtcbiAgICBjb25zdCBjdXJyZW50VGVtcCA9IHNwYW5HZW5lcmF0b3IoWyd0ZW1wJ10sIHRlbXApO1xuICAgIHRlbXBEZXRhaWxzQ29udGFpbmVyLmFwcGVuZChpbWdHZW5lcmF0b3IoaW1hZ2UsIHVuZGVmaW5lZCwgWydpbWFnZS13ZWF0aGVyLWRlc2NyaXB0aW9uJ10pLCBoZWFkaW5nR2VuZXJhdG9yKCdoMicsIFsnY3VycmVudC10ZW1wJ10sICfCsCcsIGN1cnJlbnRUZW1wLCByZXRyaWV2ZU1ldGhvZE9mTWVhc3VyZW1lbnQoKSkpO1xuICAgIHJldHVybiB0ZW1wRGV0YWlsc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGRpc3BsYXkgdGhlIHRlbXBlcmF0dXJlIGl0IGZlZWxzIGxpa2UgYWxvbmcgd2l0aCB0aGUgb3V0ZG9vciBjb25kaXRpb25zXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gYSBkZXNjcmlwdGlvbiBvZiBvdXRkb29yIGNvbmRpdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBmZWVsc0xpa2VUZW1wIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0ZW1wZXJhdHVyZSB0aGF0IGl0IGZlZWxzIGxpa2VcbiAqIEByZXR1cm5zIGEgZGl2IGVsZW1lbnQgdGhhdCBoYXMgdHdvIGZ1cnRoZXIgZWxlbWVudHMgYXBwZW5kZWQgd2l0aGluIGl0IGRpc3BsYXlpbmcgdGhlIG91dGRvb3IgY29uZGl0aW9ucyBhdCB0aGUgY3VycmVudCBtb21lbnQgYW5kIHRoZSB0ZW1wZXJhdHVyZSBpdCBmZWVscyBsaWtlXG4gKi9cbmZ1bmN0aW9uIHRlbXBDb25kaXRpb25zU2VjdGlvbihkZXNjcmlwdGlvbiwgZmVlbHNMaWtlVGVtcCkge1xuICAgIGNvbnN0IHRlbXBDb25kaXRpb25zQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsndGVtcC1jb25kaXRpb25zJ10pO1xuICAgIGNvbnN0IGZlZWxzTGlrZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgZmVlbHNMaWtlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2ZlZWxzLWxpa2UnKTtcbiAgICBmZWVsc0xpa2VIZWFkZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYEZlZWxzIGxpa2UgPHNwYW4gY2xhc3M9XCJmZWVscy1saWtlLXRlbXBcIj4ke2ZlZWxzTGlrZVRlbXB9PC9zcGFuPsKwPHNwYW4gY2xhc3M9XCJtZXRob2Qtb2YtbWVhc3VyZW1lbnRcIj4ke2lzTWV0aG9kT2ZNZWFzdXJlbWVudENlbHNpdXMoKSA9PT0gdHJ1ZSA/ICdDJyA6ICdGJ308L3NwYW4+YCk7XG4gICAgdGVtcENvbmRpdGlvbnNDb250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2gzJywgWyd0ZW1wLWRlc2NyaXB0aW9uJ10sIGRlc2NyaXB0aW9uKSwgZmVlbHNMaWtlSGVhZGVyKTtcbiAgICByZXR1cm4gdGVtcENvbmRpdGlvbnNDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb25zIGpvYiBpcyB0byBhcHBlbmQgdGhlIHR3byBhcmd1bWVudHMgaW50byB0aGUgdWNycmVudFRlbXBEZXRhaWxzIGRpdiB3aGljaCB3aWxsIHRoZW4gYmUgZGlzcGxheWVkIG9uIHNjcmVlblxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBEZXRhaWxzU2VjdGlvbiBhIGRvbSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHRoZSBmaXJzdCBjaGlsZCBvZiB0aGUgY3VycmVudFRlbXBEZXRhaWxzQ29udGFpbmVyXG4gKiBAcGFyYW0ge29iamVjdH0gdGVtcENvbmRpdGlvbnNTZWN0aW9uIGEgZG9tIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHNlY29uZCBjaGlsZCBvZiB0aGUgY3VycmVudFRlbXBEZXRhaWxzQ29udGFpbmVyXG4gKiBAcmV0dXJucyBhIGRvbSBlbGVtZW50IG9iamVjdCBjb250YWlucyB0aGUgdHdvIGFyZ3VtZW50cyBwYXNzZWQgYXMgY2hpbGRyZW5cbiAqL1xuZnVuY3Rpb24gY3VycmVudFRlbXBEZXRhaWxzU2VjdGlvbih0ZW1wRGV0YWlsc1NlY3Rpb24sIHRlbXBDb25kaXRpb25zU2VjdGlvbikge1xuICAgIGNvbnN0IGN1cnJlbnRUZW1wRGV0YWlsc0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2N1cnJlbnQtdGVtcC1kZXRhaWxzJ10pO1xuICAgIGN1cnJlbnRUZW1wRGV0YWlsc0NvbnRhaW5lci5hcHBlbmQodGVtcERldGFpbHNTZWN0aW9uLCB0ZW1wQ29uZGl0aW9uc1NlY3Rpb24pO1xuICAgIHJldHVybiBjdXJyZW50VGVtcERldGFpbHNDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhcHBlbmQgYWxsIDkgYXJndW1lbnRzIGludG8gdGhlIGV4dHJhSW5mb3JtYXRpb25Db250YWluZXIgdGhhdCB3aWxsIHRoZW4gYmUgZGlzcGxheWVkIG9udG8gdGhlIHNjcmVlblxuICogQHBhcmFtIHtvYmplY3R9IHdpbmRJbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdGhlIERPTSBlbGVtZW50IGRpc3BsYXlpbmcgd2luZCBkaXJlY3Rpb24gYW5kIHNwZWVkXG4gKiBAcGFyYW0ge29iamVjdH0gaHVtaWRpdHlJbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdGhlIERPTSBlbGVtZW50IGRpc3BsYXlpbmcgaHVtaWRpdHkgcGVyY2VudGFnZVxuICogQHBhcmFtIHtvYmplY3R9IHV2SW5mbyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHRoZSBET00gZWxlbWVudCBkaXNwbGF5aW5nIHV2LWluZGV4IFxuICogQHBhcmFtIHtvYmplY3R9IHZpc2liaWxpdHlJbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdGhlIERPTSBlbGVtZW50IGRpc3BsYXlpbmcgdmlzaWJpbGl0eSBkaXN0YW5jZVxuICogQHBhcmFtIHtvYmplY3R9IGNsb3VkaW5lc3NJbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdGhlIERPTSBlbGVtZW50IGRpc3BsYXlpbmcgY2xvdWRpbmVzcyBwZXJjZW50YWdlXG4gKiBAcGFyYW0ge29iamVjdH0gcmFpbkluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyB0aGUgY2hhbmNlIG9mIHJhaW5cbiAqIEBwYXJhbSB7b2JqZWN0fSBzdW5yaXNlSW5mbyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHRoZSBET00gZWxlbWVudCBkaXNwbGF5aW5nIHN1bnJpc2UgdGltZVxuICogQHBhcmFtIHtvYmplY3R9IHN1bnNldEluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyBzdW5zZXQgdGltZVxuICogQHBhcmFtIHtvYmplY3R9IG1vb25JbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdGhlIERPTSBlbGVtZW50IGRpc3BsYXlpbmcgbW9vbi1waGFzZSBpbmZvcm1hdGlvblxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyA5IGNoaWxkcmVuLCB3aGljaCBhcmUgYWxsIHRoZSBhcmd1bWVudHMgdGhhdCBoYXZlIGJlZW4gcGFzc2VkXG4gKi9cbmZ1bmN0aW9uIGV4dHJhSW5mb3JtYXRpb25TZWN0aW9uKHdpbmRJbmZvLCBodW1pZGl0eUluZm8sIHV2SW5mbywgdmlzaWJpbGl0eUluZm8sIGNsb3VkaW5lc3NJbmZvLCByYWluSW5mbywgc3VucmlzZUluZm8sIHN1bnNldEluZm8sIG1vb25JbmZvKSB7XG4gICAgY29uc3QgZXh0cmFJbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2V4dHJhLWluZm9ybWF0aW9uJ10pO1xuICAgIGV4dHJhSW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kKHdpbmRJbmZvLCBodW1pZGl0eUluZm8sIHV2SW5mbywgdmlzaWJpbGl0eUluZm8sIGNsb3VkaW5lc3NJbmZvLCByYWluSW5mbywgc3VucmlzZUluZm8sIHN1bnNldEluZm8sIG1vb25JbmZvKTtcbiAgICByZXR1cm4gZXh0cmFJbmZvcm1hdGlvbkNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZGl2IGVsZW1lbnQsIGFuZCBhcHBlbmRzIGEgPGg1PjwvaDU+IGFuZCA8cD48L3A+IGVsZW1lbnQgd2l0aGluIGl0IHRoYXQgZGlzcGxheXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHdpbmRcbiAqIEBwYXJhbSB7c3RyaW5nfSB3aW5kQXJyb3dSb3RhdGlvbiB0aGUgZGVncmVlcyBieSB3aGljaCB0aGUgYXJyb3cgdGhhdCBpcyBwb2ludGVkIG5vcnRoIHNob3VsZCByb3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB3aW5kU3BlZWQgdGhlIHNwZWVkIG9mIHRoZSB3aW5kXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IGluZm9ybWF0aW9uIGFib3V0IHRoZSB3aW5kIHNwZWVkIGFuZCBkaXJlY3Rpb25cbiAqL1xuZnVuY3Rpb24gd2luZEluZm9ybWF0aW9uKHdpbmRBcnJvd1JvdGF0aW9uLCB3aW5kU3BlZWQpIHtcbiAgICBjb25zdCB3aW5kQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnd2luZCddKTtcbiAgICBjb25zdCB3aW5kSW5mb3JtYXRpb25Db250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd3aW5kLWluZm9ybWF0aW9uJ10pO1xuICAgIGNvbnN0IHdpbmRTcGVlZFNwYW4gPSBzcGFuR2VuZXJhdG9yKFsnd2luZC1udW0nXSwgd2luZFNwZWVkKTtcbiAgICB3aW5kSW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kKGltZ0dlbmVyYXRvcignLi8uLi9zcmMvYXNzZXRzL2Fycm93LnBuZycsICdBbiBhcnJvdyByb3RhdGVkIGJ5IHRoZSB3aW5kb3cgZGlyZWN0aW9uIGRlZ3JlZXMnLCBbJ3dpbmQtZGlyZWN0aW9uJ10sIHdpbmRBcnJvd1JvdGF0aW9uKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnd2luZC1zcGVlZCddLCAnbXBoJywgd2luZFNwZWVkU3BhbikpO1xuICAgIHdpbmRDb250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2g1JywgW10sICdXaW5kJyksIHdpbmRJbmZvcm1hdGlvbkNvbnRhaW5lcik7XG4gICAgcmV0dXJuIHdpbmRDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSBodW1pZGl0eSBwZXJjZW50YWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gaHVtaWRpdHlOdW1iZXIgdGhlIGh1bWlkaXR5IGN1cnJlbnRseSBcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRpc3BsYXkgdGhlIGh1bWlkaXR5IHBlcmNlbnRhZ2VcbiAqL1xuZnVuY3Rpb24gaHVtaWRpdHlJbmZvcm1hdGlvbihodW1pZGl0eU51bWJlcikge1xuICAgIGNvbnN0IGh1bWlkaXR5Q29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnaHVtaWRpdHknXSk7XG4gICAgY29uc3QgaHVtaWRpdHkgPSBzcGFuR2VuZXJhdG9yKFsnaHVtaWRpdHktbnVtYmVyJ10sIGh1bWlkaXR5TnVtYmVyKVxuICAgIGh1bWlkaXR5Q29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnSHVtaWRpdHknKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnaHVtaWRpdHktcGVyY2VudGFnZSddLCAnJScsIGh1bWlkaXR5KSk7XG4gICAgcmV0dXJuIGh1bWlkaXR5Q29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyB0aGUgdXYtaW5kZXhcbiAqIEBwYXJhbSB7c3RyaW5nfSB1dkluZGV4TnVtYmVyIHRoZSB1di1pbmRleCBjdXJyZW50bHlcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRpc3BsYXkgdGhlIHV2LWluZGV4XG4gKi9cbmZ1bmN0aW9uIHV2SW5mb3JtYXRpb24odXZJbmRleE51bWJlcikge1xuICAgIGNvbnN0IHV2Q29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsndXYtaW5kZXgnXSk7XG4gICAgdXZDb250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2g1JywgW10sICdVViBJbmRleCcpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWyd1dicsIGNoZWNrQ2F0ZWdvcnlPZlV2KHV2SW5kZXhOdW1iZXIpXSwgdXZJbmRleE51bWJlcikpO1xuICAgIHJldHVybiB1dkNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZGl2IGVsZW1lbnQsIGFuZCBhcHBlbmRzIGEgPGg1PjwvaDU+IGFuZCA8cD48L3A+IGVsZW1lbnQgd2l0aGluIGl0IHRoYXQgZGlzcGxheXMgdGhlIHZpc2liaWxpdHkgZGlzdGFuY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSB2aXNpYmlsaXR5RGlzdGFuY2UgdGhlIGN1cnJlbnQgdmlzaWJpbGl0eSBkaXN0YW5jZVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgdmlzaWJpbGl0eSBkaXN0YW5jZVxuICovXG5mdW5jdGlvbiB2aXNpYmlsaXR5SW5mb3JtYXRpb24odmlzaWJpbGl0eURpc3RhbmNlKSB7XG4gICAgY29uc3QgdmlzaWJpbGl0eUNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3Zpc2liaWxpdHknXSk7XG4gICAgY29uc3QgdmlzaWJsaXR5RGlzdGFuY2VTcGFuID0gc3BhbkdlbmVyYXRvcihbJ3Zpc2liaWxpdHktbnVtJ10sIHZpc2liaWxpdHlEaXN0YW5jZSk7XG4gICAgdmlzaWJpbGl0eUNvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1Zpc2liaWxpdHknKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsndmlzaWJpbGl0eS1kaXN0YW5jZSddLCAna20nLCB2aXNpYmxpdHlEaXN0YW5jZVNwYW4pKTtcbiAgICByZXR1cm4gdmlzaWJpbGl0eUNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZGl2IGVsZW1lbnQsIGFuZCBhcHBlbmRzIGEgPGg1PjwvaDU+IGFuZCA8cD48L3A+IGVsZW1lbnQgd2l0aGluIGl0IHRoYXQgZGlzcGxheXMgdGhlIGN1cnJlbnQgY2xvdWQgcGVyY2VudGFnZVxuICogQHBhcmFtIHtzdHJpbmd9IGNsb3VkUGVyY2VudGFnZSB0aGUgY3VycmVudCBjbG91ZCBwZXJjZW50YWdlXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSBjdXJyZW50IGNsb3VkIHBlcmNlbnRhZ2VcbiAqL1xuZnVuY3Rpb24gY2xvdWRpbmVzc0luZm9ybWF0aW9uKGNsb3VkUGVyY2VudGFnZSkge1xuICAgIGNvbnN0IGNsb3VkaW5lc3NDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydjbG91ZGluZXNzJ10pO1xuICAgIGNvbnN0IGNsb3VkaW5lc3NQZXJjZW50YWdlU3BhbiA9IHNwYW5HZW5lcmF0b3IoWydjbG91ZGluZXNzLW51bSddLCBjbG91ZFBlcmNlbnRhZ2UpO1xuICAgIGNsb3VkaW5lc3NDb250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2g1JywgW10sICdDbG91ZGluZXNzJyksIHBhcmFncmFwaEdlbmVyYXRvcihbJ2Nsb3VkaW5lc3MtcGVyY2VudGFnZSddLCAnJScsIGNsb3VkaW5lc3NQZXJjZW50YWdlU3BhbikpO1xuICAgIHJldHVybiBjbG91ZGluZXNzQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyB0aGUgY3VycmVudCByYWluIHBlcmNlbnRhZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSByYWluUGVyY2VudGFnZSB0aGUgY3VycmVudCByYWluIHBlcmNlbnRhZ2VcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRpc3BsYXkgdGhlIGN1cnJlbnQgcmFpbiBwZXJjZW50YWdlXG4gKi9cbmZ1bmN0aW9uIHJhaW5JbmZvcm1hdGlvbihyYWluUGVyY2VudGFnZSkge1xuICAgIGNvbnN0IHJhaW5Db250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydjaGFuY2Utb2YtcmFpbiddKTtcbiAgICBjb25zdCByYWluUGVyY2VudGFnZVNwYW4gPSBzcGFuR2VuZXJhdG9yKFsnY2hhbmNlLW9mLXJhaW4tbnVtJ10sIHJhaW5QZXJjZW50YWdlKTtcbiAgICByYWluQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnQ2hhbmNlIG9mIFJhaW4nKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnY2hhbmNlLW9mLXJhaW4tcGVyY2VudGFnZSddLCAnJScsIHJhaW5QZXJjZW50YWdlU3BhbikpO1xuICAgIHJldHVybiByYWluQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyB0aGUgc3VucmlzZSB0aW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gc3VucmlzZVRpbWUgdGhlIHN1bnJpc2UgdGltZSBmb3IgdGhlIGRheVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgc3VucmlzZSB0aW1lXG4gKi9cbmZ1bmN0aW9uIHN1bnJpc2VJbmZvcm1hdGlvbihzdW5yaXNlVGltZSkge1xuICAgIGNvbnN0IHN1bnJpc2VDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydzdW5yaXNlJ10pO1xuICAgIHN1bnJpc2VDb250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2g1JywgW10sICdTdW5yaXNlJyksIHBhcmFncmFwaEdlbmVyYXRvcihbJ3N1bnJpc2UtdGltZSddLCBzdW5yaXNlVGltZSkpO1xuICAgIHJldHVybiBzdW5yaXNlQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyB0aGUgc3Vuc2V0IHRpbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdW5zZXRUaW1lIHRoZSBzdW5zZXQgdGltZSBmb3IgdGhlIGRheVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgc3Vuc2V0IHRpbWVcbiAqL1xuZnVuY3Rpb24gc3Vuc2V0SW5mb3JtYXRpb24oc3Vuc2V0VGltZSkge1xuICAgIGNvbnN0IHN1bnNldENvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3N1bnNldCddKTtcbiAgICBzdW5zZXRDb250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2g1JywgW10sICdTdW5zZXQnKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnc3Vuc2V0LXRpbWUnXSwgc3Vuc2V0VGltZSkpO1xuICAgIHJldHVybiBzdW5zZXRDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSBjdXJyZW50IG1vb24gcGhhc2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb29uUGhhc2UgdGhlIGN1cnJlbnQgbW9vbiBwaGFzZVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgY3VycmVudCBtb29uIHBoYXNlXG4gKi9cbmZ1bmN0aW9uIG1vb25JbmZvcm1hdGlvbihtb29uUGhhc2UpIHtcbiAgICBjb25zdCBtb29ucGhhc2VDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydtb29uLXBoYXNlJ10pO1xuICAgIG1vb25waGFzZUNvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ01vb24gUGhhc2UnKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsncGhhc2UnXSwgbW9vblBoYXNlKSk7XG4gICAgcmV0dXJuIG1vb25waGFzZUNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB0byBiZSB1c2VkIHdoZW4gdGhlIHdlYnBhZ2UgaXMgbG9hZGVkIHVwIGFuZCBpdCBmaWxscyB0aGUgd2VicGFnZSB3aXRoIHRoZSByZXF1aXJlZCBpbmZvcm1hdGlvbiB3aXRoIHRoZSBkZWZhdWx0IGNpdHkgYmVpbmcgbG9uZG9uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG9uTG9hZERlZmF1bHRXZWF0aGVyKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWQyNmE4YTkwNzUyZjQ1YzJhMDMxNTQ5MDcyMzA1MDUmcT1sb25kb24mZGF5cz03JmFxaT1ubyZhbGVydHM9bm8nLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCBsb25kb25JbmZvID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGN1cnJlbnREYXlJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQoZGlzcGxheUxvY2F0aW9uRGV0YWlscyhyZXRyaWV2ZUNpdHkobG9uZG9uSW5mbyksIHJldHJpZXZlQ291bnRyeShsb25kb25JbmZvKSwgY3JlYXRlU3RhbmRhcmREYXRlKHJldHJpZXZlRGF0ZUFuZFRpbWVBcnIobG9uZG9uSW5mbylbMF0pLCBjcmVhdGVTdGFuZGFyZFRpbWUocmV0cmlldmVEYXRlQW5kVGltZUFycihsb25kb25JbmZvKVsxXSkpKTtcbiAgICBjdXJyZW50RGF5SW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kKGN1cnJlbnRUZW1wRGV0YWlsc1NlY3Rpb24odGVtcERldGFpbHNTZWN0aW9uKHJldHJpZXZlQ3VycmVudFRlbXBJbWcobG9uZG9uSW5mbyksIHJldHJpZXZlQ3VycmVudFRlbXAobG9uZG9uSW5mbykpLCB0ZW1wQ29uZGl0aW9uc1NlY3Rpb24ocmV0cmlldmVDdXJyZW50Q29uZGl0aW9uKGxvbmRvbkluZm8pLCByZXRyaWV2ZUZlZWxzTGlrZVRlbXAobG9uZG9uSW5mbykpKSk7XG4gICAgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZChleHRyYUluZm9ybWF0aW9uU2VjdGlvbih3aW5kSW5mb3JtYXRpb24ocmV0cmlldmVXaW5kRGVncmVlcyhsb25kb25JbmZvKSwgcmV0cmlldmVXaW5kU3BlZWQobG9uZG9uSW5mbykpLCBodW1pZGl0eUluZm9ybWF0aW9uKHJldHJpZXZlSHVtaWRpdHkobG9uZG9uSW5mbykpLFxuICAgICAgICB1dkluZm9ybWF0aW9uKHJldHJpZXZlVXZOdW0obG9uZG9uSW5mbykpLCB2aXNpYmlsaXR5SW5mb3JtYXRpb24ocmV0cmlldmVWaXNpYmlsaXR5RGlzdGFuY2UobG9uZG9uSW5mbykpLCBjbG91ZGluZXNzSW5mb3JtYXRpb24ocmV0cmlldmVDbG91ZGluZXNzUGVyY2VudGFnZShsb25kb25JbmZvKSksIHJhaW5JbmZvcm1hdGlvbihyZXRyaWV2ZUNoYW5jZU9mUmFpbihsb25kb25JbmZvKSksXG4gICAgICAgIHN1bnJpc2VJbmZvcm1hdGlvbihyZXRyaWV2ZVN1bnJpc2VUaW1lKGxvbmRvbkluZm8pKSwgc3Vuc2V0SW5mb3JtYXRpb24ocmV0cmlldmVTdW5zZXRUaW1lKGxvbmRvbkluZm8pKSwgbW9vbkluZm9ybWF0aW9uKHJldHJpZXZlTW9vblBoYXNlKGxvbmRvbkluZm8pKSkpO1xufTtcblxuZXhwb3J0IHsgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyLCBvbkxvYWREZWZhdWx0V2VhdGhlciB9OyIsIi8qKlxuICogdGhpcyBmdW5jdGlvbiB0YWtlcyBhbiBhcnJheSBvZiBjbGFzc2VzIGFuZCBhZGRzIHRob3NlIGNsYXNzZXMgdG8gdGhlIGVsZW1lbnQgdXNpbmcgYSBmb3JFYWNoIGxvb3BcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50IHRoZSBlbGVtZW50IHRoYXQgd2UgbmVlZCB0byBhZGQgdGhlIGNsYXNzZXMgdG8gXG4gKi9cbmZ1bmN0aW9uIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgZWxlbWVudCkge1xuICAgIGNsYXNzZXMuZm9yRWFjaChpbmRpdmlkdWFsQ2xhc3MgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGluZGl2aWR1YWxDbGFzcykpO1xufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhIGRpdiBlbGVtZW50IHdpdGggaXRzIGNsYXNzZXMgcHJvdmlkZWQgYXMgYW4gYXJndW1lbnRcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGRpdlxuICogQHJldHVybnMgYSBkaXYgRE9NIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gZGl2R2VuZXJhdG9yKGNsYXNzZXMpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIGRpdilcbiAgICByZXR1cm4gZGl2O1xufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhbiBpbWcgZWxlbWVudCwgd2l0aCB0aGUgc3BlY2lmaWVkLCBzcmMsIGFsdCBhbmQgY2xhc3Nlc1xuICogQHBhcmFtIHtzdHJpbmd9IHNyYyB0aGUgcGF0aCB0byB0aGUgaW1hZ2Ugd2Ugd2FudCB0byB1c2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBhbHQgdGhlIGFsdCBkZXNjcmlwdGlvbiBvZiB0aGUgaW1nIGluY2FzZSBpdCBkb2Vzbid0IGxvYWRcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGltZ1xuICogQHJldHVybnMgYW4gaW1nIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gaW1nR2VuZXJhdG9yKHNyYywgYWx0ID0gJycsIGNsYXNzZXMsIHJvdGF0aW9uID0gMCkge1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBzcmM7XG4gICAgaW1nLmFsdCA9IGFsdDtcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIGltZyk7XG4gICAgaW1nLnN0eWxlLnJvdGF0ZSA9IGAke3JvdGF0aW9ufWRlZ2BcbiAgICByZXR1cm4gaW1nO1xufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhIGhlYWRpbmcgb2YgdGhlIGRlc2lyZWQgc2l6ZSwgYW5kIGFkZHMgdGhlIHRleHQgc3BlY2lmaWVkIGFzIHdlbGwgYXMgdGhlIGNsYXNzZXMgcHJvdmlkZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBoZWFkaW5nU2l6ZSAxIG9mIDYgc2l6ZXMgd2Ugd2FudCB0aGUgaGVhZGluZyB0byBiZSBlLmcuICdoMSdcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGhlYWRpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IHRoZSBoZWFkaW5nIG5lZWRzIHRvIGRpc3BsYXkgXG4gKiBAcGFyYW0ge29iamVjdH0gc3BhbkVsZW1lbnRQcmVwcGVuZCBhIGRvbSBlbGVtZW50IHRoYXQgd2Ugd2FudCB0byBhZGQgYmVmb3JlIHRoZSB0ZXh0IHBhcnQgb2YgdGhlIGhlYWRpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBzcGFuRWxlbWVudEFwcGVuZCBhIGRvbSBlbGVtZW50IHRoYXQgd2Ugd2FudCB0byBhZGQgYWZ0ZXIgdGhlIHRleHQgcGFydCBvZiB0aGUgaGVhZGluZ1xuICogQHJldHVybnMgYSBoZWFkaW5nIERPTSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGhlYWRpbmdHZW5lcmF0b3IoaGVhZGluZ1NpemUsIGNsYXNzZXMsIHRleHQsIHNwYW5FbGVtZW50UHJlcHBlbmQgPSAnJywgc3BhbkVsZW1lbnRBcHBlbmQgPSAnJykge1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGhlYWRpbmdTaXplKTtcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IHRleHQ7XG4gICAgaGVhZGluZy5wcmVwZW5kKHNwYW5FbGVtZW50UHJlcHBlbmQpXG4gICAgaGVhZGluZy5hcHBlbmQoc3BhbkVsZW1lbnRBcHBlbmQpXG4gICAgYWRkQ2xhc3Nlc1RvRWxlbWVudChjbGFzc2VzLCBoZWFkaW5nKTtcbiAgICByZXR1cm4gaGVhZGluZztcbn07XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgYSBidXR0b24gd2l0aCB0aGUgY2xhc3NlcyBhbmQgdGV4dCBwcm92aWRlZFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgaGVhZGluZ1xuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgdGhlIHRleHQgbmVlZGVkIHdpdGhpbiB0aGUgYnV0dG9uIFxuICogQHJldHVybnMgYSBidXR0b24gZWxlbWVudFxuICovXG5mdW5jdGlvbiBidXR0b25HZW5lcmF0b3IoY2xhc3NlcywgdGV4dCkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgYnRuKTtcbiAgICBidG4uaW5uZXJIVE1MID0gdGV4dDtcbiAgICByZXR1cm4gYnRuO1xufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhIHNwYW4gZWxlbWVudCB3aXRoIHRoZSBjbGFzc2VzIGFuZCB0ZXh0IHByb3ZpZGVkXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBoZWFkaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCB0aGUgdGV4dCBuZWVkZWQgd2l0aGluIHRoZSBzcGFuIFxuICogQHJldHVybnMgYSBzcGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc3BhbkdlbmVyYXRvcihjbGFzc2VzLCB0ZXh0KSB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIHNwYW4pO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gdGV4dDtcbiAgICByZXR1cm4gc3Bhbjtcbn07XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgYSBmb3JtIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3NlcyBwcm92aWRlZFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgZm9ybVxuICogQHJldHVybnMgYSBmb3JtIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gZm9ybUdlbmVyYXRvcihjbGFzc2VzKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIGZvcm0pO1xuICAgIHJldHVybiBmb3JtO1xufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhbiBpbnB1dCBlbGVtZW50IGFuZCBhZGRzIHRoZSBzcGVjaWZpZWQgYXR0cmlidXRlcyBhbmQgdmFsdWVzIHRvIGl0XG4gKiBAcGFyYW0ge0FycmF5fSBhdHRyaWJ1dGVzIGFuIGFycmF5IG9mIGFycmF5cyB3aGVyZSBlYWNoIGVsZW1lbnQgaGFzIHRoZSBhdHRyaWJ1dGUsIGFuZCBpdCdzIGFzc29jaWF0ZWQgdmFsdWUgXG4gKiBAcmV0dXJucyBhbiBpbnB1dCBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGlucHV0R2VuZXJhdG9yKGF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKGF0dHJpYnV0ZSA9PiBpbnB1dC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlWzBdLCBhdHRyaWJ1dGVbMV0pKTtcbiAgICByZXR1cm4gaW5wdXQ7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIHBhcmFncmFwaCBlbGVtZW50IGFuZCBmaWxscyBpdCB3aXRoIHRoZSBhcmd1bWVudHMgcHJvdmlkZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGZvcm1cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IG5lZWRlZCB3aXRoaW4gdGhlIDxwPjwvcD4gXG4gKiBAcGFyYW0ge29iamVjdH0gc3BhbkVsZW1lbnRQcmVwcGVuZCBhIGRvbSBlbGVtZW50IHRoYXQgd2Ugd2FudCB0byBhZGQgYmVmb3JlIHRoZSB0ZXh0IHBhcnQgb2YgdGhlIHBhcmFncmFwaFxuICogQHBhcmFtIHtvYmplY3R9IHNwYW5FbGVtZW50QXBwZW5kIGEgZG9tIGVsZW1lbnQgdGhhdCB3ZSB3YW50IHRvIGFkZCBhZnRlciB0aGUgdGV4dCBwYXJ0IG9mIHRoZSBwYXJhZ3JhcGhcbiAqIEByZXR1cm5zIGEgPHA+PC9wPiBlbGVtZW50IHRoYXQgaXMgY3VzdG9taXNlZCBhcyBzcGVjaWZpZWRcbiAqL1xuZnVuY3Rpb24gcGFyYWdyYXBoR2VuZXJhdG9yKGNsYXNzZXMsIHRleHQsIHNwYW5FbGVtZW50UHJlcHBlbmQgPSAnJywgc3BhbkVsZW1lbnRBcHBlbmQgPSAnJykge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIHBhcmFncmFwaCk7XG4gICAgcGFyYWdyYXBoLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgcGFyYWdyYXBoLnByZXBlbmQoc3BhbkVsZW1lbnRQcmVwcGVuZClcbiAgICBwYXJhZ3JhcGguYXBwZW5kKHNwYW5FbGVtZW50QXBwZW5kKVxuICAgIHJldHVybiBwYXJhZ3JhcGg7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBoZWxwIGNob29zZSB0aGUgY29ycmVjdCBjbGFzcyBiYXNlZCBvbiB0aGUgdXYtaW5kZXggbnVtYmVyIHByb3ZpZGVkXG4gKiBAcGFyYW0ge251bWJlcn0gdXZOdW0gdGhlIG51bWJlciB0aGF0IHdlIHdhbnQgdG8gY2hlY2sgd2hldGhlciBvciBub3QgaXQncyB2YWx1ZSBpcyBhIHNhZmUsIGFtYmVyIG9yIGRhbmdlciB2YWx1ZSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgY2xhc3NpZmllcyB0aGUgdmFsdWVcbiAqL1xuZnVuY3Rpb24gY2hlY2tDYXRlZ29yeU9mVXYodXZOdW0pIHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSB1dk51bSA8PSAyOlxuICAgICAgICAgICAgcmV0dXJuICdzYWZlJztcbiAgICAgICAgY2FzZSB1dk51bSA8PSA3OlxuICAgICAgICAgICAgcmV0dXJuICdhbWJlcic7XG4gICAgICAgIGNhc2UgdXZOdW0gPj0gODpcbiAgICAgICAgICAgIHJldHVybiAnZGFuZ2VyJztcbiAgICB9XG59O1xuXG5leHBvcnQgeyBkaXZHZW5lcmF0b3IsIGltZ0dlbmVyYXRvciwgaGVhZGluZ0dlbmVyYXRvciwgYnV0dG9uR2VuZXJhdG9yLCBzcGFuR2VuZXJhdG9yLCBpbnB1dEdlbmVyYXRvciwgZm9ybUdlbmVyYXRvciwgY2hlY2tDYXRlZ29yeU9mVXYsIHBhcmFncmFwaEdlbmVyYXRvciB9IiwiaW1wb3J0IHsgZGl2R2VuZXJhdG9yLCBpbWdHZW5lcmF0b3IsIGhlYWRpbmdHZW5lcmF0b3IsIHNwYW5HZW5lcmF0b3IsIGlucHV0R2VuZXJhdG9yLCBidXR0b25HZW5lcmF0b3IsIGZvcm1HZW5lcmF0b3IgfSBmcm9tIFwiLi9nZW5lcmF0b3JGdW5jdGlvbnNcIjtcblxuZnVuY3Rpb24gdGl0bGVTZWN0aW9uKCkge1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsndGl0bGUnXSk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKGltZ0dlbmVyYXRvcignLi8uLi9zcmMvYXNzZXRzL3BhZ2UtaWNvbi5wbmcnLCAnYSBjaXJjdWxhciBpY29uIGRlcGljdGluZyBhbGwgNCBzZWFzb25zJywgWydtYWluLWljb24nXSksIGhlYWRpbmdHZW5lcmF0b3IoJ2gxJywgWydwYWdlLXRpdGxlJ10sICdXZWF0aGVyJywgdW5kZWZpbmVkLCBzcGFuR2VuZXJhdG9yKFsndGl0bGUtZW5kJ10sICdXYXRjaCcpKSk7XG4gICAgcmV0dXJuIHRpdGxlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJGb3JtU2VjdGlvbigpIHtcbiAgICBjb25zdCBmb3JtID0gZm9ybUdlbmVyYXRvcihbJ3NlYXJjaC1mb3JtJ10pO1xuICAgIGZvcm0uYXBwZW5kKGlucHV0R2VuZXJhdG9yKFtbJ3R5cGUnLCAnc2VhcmNoJ10sIFsnaWQnLCAnc2VhcmNoLWJhciddLCBbJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaCBhIGxvY2F0aW9uJ10sIFsncmVxdWlyZWQnLCB0cnVlXV0pLCBpbWdHZW5lcmF0b3IoJy4vLi4vc3JjL2Fzc2V0cy9zZWFyY2gtaWNvbi5zdmcnLCAnQSBtYWduaWZ5aW5nIGdsYXNzJywgWydzZWFyY2gtYnV0dG9uJ10pKTtcbiAgICByZXR1cm4gZm9ybTtcbn1cblxuZnVuY3Rpb24gaGVhZGVyQnV0dG9ucygpIHtcbiAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnY2hhbmdlLWRlZ3JlZXMnXSk7XG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoYnV0dG9uR2VuZXJhdG9yKFsnY2Vsc2l1cy1idG4nLCAnYnRuJywgJ2FjdGl2ZSddLCAnwrBDJyksIGJ1dHRvbkdlbmVyYXRvcihbJ2ZhaHJlbmhlaXQtYnRuJywgJ2J0biddLCAnwrBGJykpO1xuICAgIHJldHVybiBidXR0b25zQ29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5hcHBlbmQodGl0bGVTZWN0aW9uKCksIGhlYWRlckZvcm1TZWN0aW9uKCksIGhlYWRlckJ1dHRvbnMoKSk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuIiwiaW1wb3J0IHsgc3BhbkdlbmVyYXRvciB9IGZyb20gXCIuL2dlbmVyYXRvckZ1bmN0aW9uc1wiO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY29udmVydHMgdGhlIGRhdGUgaW50byB0aGUgR0Igc3R5bGUgb2YgZGF0ZVxuICogQHBhcmFtIHtzdHJpbmcgb3IgRGF0ZX0gZGF0ZSBlaXRoZXIgYSBzdHJpbmcgb3IgRGF0ZSB2ZXJzaW9uIGNhbiBiZSBwcm92aWRlZCBhbmQgdGhpcyBpcyB0aGUgZGF0ZSB3ZSB3YW50IGNvbnZlcnQgaW50byBhbiBJbnRsIGRhdGUgXG4gKiBAcmV0dXJucyBhbiBvYmplY3QgdGhhdCBpcyB0aGUgY29ycmVjdCBmb3JtYXQgb2YgZGF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVTdGFuZGFyZERhdGUoZGF0ZSkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICB9O1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLUdCXCIsIG9wdGlvbnMpLmZvcm1hdChkYXRlLnRvSVNPU3RyaW5nKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgdG8gbWFrZSB0aGUgdGltZSBoYXZlIGEgMCBhdCB0aGUgc3RhcnQgaWYgdGhlIG51bWJlciBiZWZvcmUgdGhlIGNvbG9uIGlzIG5vdCBkb3VibGUgZGlnaXRzIHlldFxuICogQHBhcmFtIHtzdHJpbmd9IHRpbWUgdGhlIHRpbWUgdGhhdCBuZWVkcyB0byBiZSBwYWRkZWRcbiAqIEByZXR1cm5zIGEgcGFkZGVkIHZlcnNpb24gb2YgdGhlIHRpbWUsIGUuZy4gaWYgaXRzIDE6MTEgaXQgZ2V0cyBjaGFuZ2VkIHRvIDAxOjExXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN0YW5kYXJkVGltZSh0aW1lKSB7XG4gICAgcmV0dXJuIHRpbWUucGFkU3RhcnQoNSwgMCk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcmV0cmlldmVzIHRoZSBjaXR5IHZhbHVlIGZyb20gdGhlIG9iaiBwcm92aWRlZFxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgLmpzb24oKSB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgZmV0Y2ggY2FsbCBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGNpdHkgbmFtZSBwcm92aWRlZCBieSB0aGUgb2JqXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlQ2l0eShvYmopIHtcbiAgICByZXR1cm4gb2JqLmxvY2F0aW9uLm5hbWU7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcmV0cmlldmVzIHRoZSBjb3VudHJ5IHZhbHVlIGZyb20gdGhlIG9iaiBwcm92aWRlZFxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgLmpzb24oKSB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgZmV0Y2ggY2FsbCBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGNvdW50cnkgbmFtZSBwcm92aWRlZCBieSB0aGUgb2JqXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlQ291bnRyeShvYmopIHtcbiAgICByZXR1cm4gb2JqLmxvY2F0aW9uLmNvdW50cnk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcmV0cmlldmVzIHRoZSBkYXRlIGFuZCB0aW1lIHZhbHVlIGZyb20gdGhlIG9iaiBwcm92aWRlZFxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgLmpzb24oKSB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgZmV0Y2ggY2FsbCBcbiAqIEByZXR1cm5zIGFuIEFycmF5IHRoYXQgc3RvcmVzIHRoZSBkYXRlIGluIGluZGV4IDAgYW5kIHRoZSB0aW1lIGluIGluZGV4IDFcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVEYXRlQW5kVGltZUFycihvYmopIHtcbiAgICByZXR1cm4gb2JqLmxvY2F0aW9uLmxvY2FsdGltZS5zcGxpdCgnICcpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9ucyBmaW5kcyB3aGV0aGVyIHRoZSBjZWxzaXVzIG9yIGZhaHJlbmhlaXQgYnV0dG9uIGlzIGFjdGl2ZSBzbyB0aGUgcmlnaHQgc3ltYm9sIGNhbiBiZSBkaXNwbGF5ZWRcbiAqIEByZXR1cm5zIGEgc3BhbiBlbGVtZW50IHdpdGggdGhlIGNvcnJlY3Qgc3ltYm9sXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlTWV0aG9kT2ZNZWFzdXJlbWVudCgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNlbHNpdXMtYnRuJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuIHNwYW5HZW5lcmF0b3IoWydtZXRob2Qtb2YtbWVhc3VyZW1lbnQnXSwgJ0MnKTtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFocmVuaGVpdC1idG4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm4gc3BhbkdlbmVyYXRvcihbJ21ldGhvZC1vZi1tZWFzdXJlbWVudCddLCAnRicpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9ucyBmaW5kcyB3aGV0aGVyIHRoZSBjZWxzaXVzIG9yIGZhaHJlbmhlaXQgYnV0dG9uIGlzIGFjdGl2ZSBzbyB0aGUgcmlnaHQgc3ltYm9sIGNhbiBiZSBkaXNwbGF5ZWRcbiAqIEByZXR1cm5zIGEgYm9vbGVhbiB2YWx1ZSBvZiB3aGV0aGVyIG9yIG5vdCB0aGUgbWV0aG9kIG9mIG1lYXN1cmVtZW50IGlzIGNlbHNpdXNcbiAqL1xuZnVuY3Rpb24gaXNNZXRob2RPZk1lYXN1cmVtZW50Q2Vsc2l1cygpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNlbHNpdXMtYnRuJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuIHRydWU7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhaHJlbmhlaXQtYnRuJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIHdpbmQgZGVncmVlcyBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSB3aW5kIGRlZ3JlZXNcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVXaW5kRGVncmVlcyhvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQud2luZF9kZWdyZWU7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgd2luZCBzcGVlZCBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSB3aW5kIHNwZWVkXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlV2luZFNwZWVkKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC53aW5kX21waDtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBodW1pZGl0eSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBodW1pZGl0eVxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUh1bWlkaXR5KG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC5odW1pZGl0eVxufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIHV2LWluZGV4IGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIHV2LWluZGV4XG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlVXZOdW0ob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LnV2O1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIHZpc2liaWxpdHkgZGlzdGFuY2UgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgdmlzaWJpbGl0eSBkaXN0YW5jZVxuICovXG5mdW5jdGlvbiByZXRyaWV2ZVZpc2liaWxpdHlEaXN0YW5jZShvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQudmlzX2ttO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGNsb3VkaW5lc3MgcGVyY2VudGFnZSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBjbG91ZGluZXNzIHBlcmNlbnRhZ2VcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDbG91ZGluZXNzUGVyY2VudGFnZShvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQuY2xvdWQ7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgY2hhbmNlIG9mIHJhaW4gZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY2hhbmNlIG9mIHJhaW5cbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDaGFuY2VPZlJhaW4ob2JqKSB7XG4gICAgcmV0dXJuIG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgc3VucmlzZSB0aW1lIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIHN1bnJpc2UgdGltZSBcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVTdW5yaXNlVGltZShvYmopIHtcbiAgICByZXR1cm4gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2U7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgc3Vuc2V0IHRpbWUgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgc3Vuc2V0IHRpbWVcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVTdW5zZXRUaW1lKG9iaikge1xuICAgIHJldHVybiBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0O1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgbW9vbiBwaGFzZSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBjdXJyZW50IG1vb24gcGhhc2VcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVNb29uUGhhc2Uob2JqKSB7XG4gICAgcmV0dXJuIG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5tb29uX3BoYXNlO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgaW1hZ2UgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBpbWFnZVxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUN1cnJlbnRUZW1wSW1nKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC5jb25kaXRpb24uaWNvbjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmVcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDdXJyZW50VGVtcChvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQudGVtcF9jO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgdGVtcGVyYXR1cmUgdGhhdCBpdCBmZWVscyBsaWtlIGN1cnJlbnRseSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIGl0IGZlZWxzIGxpa2VcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVGZWVsc0xpa2VUZW1wKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC5mZWVsc2xpa2VfYztcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgb3V0ZG9vciBjb25kaXRpb24gZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY3VycmVudCBvdXRkb29yIGNvbmRpdGlvblxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUN1cnJlbnRDb25kaXRpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xufVxuXG5leHBvcnQgeyByZXRyaWV2ZUN1cnJlbnRDb25kaXRpb24sIHJldHJpZXZlQ3VycmVudFRlbXAsIHJldHJpZXZlQ3VycmVudFRlbXBJbWcsIHJldHJpZXZlRmVlbHNMaWtlVGVtcCwgcmV0cmlldmVTdW5zZXRUaW1lLCByZXRyaWV2ZU1vb25QaGFzZSwgcmV0cmlldmVTdW5yaXNlVGltZSwgcmV0cmlldmVDaGFuY2VPZlJhaW4sIHJldHJpZXZlQ2xvdWRpbmVzc1BlcmNlbnRhZ2UsIHJldHJpZXZlVmlzaWJpbGl0eURpc3RhbmNlLCByZXRyaWV2ZVV2TnVtLCBjcmVhdGVTdGFuZGFyZERhdGUsIGNyZWF0ZVN0YW5kYXJkVGltZSwgcmV0cmlldmVDaXR5LCByZXRyaWV2ZUNvdW50cnksIHJldHJpZXZlRGF0ZUFuZFRpbWVBcnIsIHJldHJpZXZlTWV0aG9kT2ZNZWFzdXJlbWVudCwgaXNNZXRob2RPZk1lYXN1cmVtZW50Q2Vsc2l1cywgcmV0cmlldmVXaW5kRGVncmVlcywgcmV0cmlldmVXaW5kU3BlZWQsIHJldHJpZXZlSHVtaWRpdHkgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBoZWFkZXIgfSBmcm9tICcuL2hlYWRlclNlY3Rpb24nO1xuaW1wb3J0IHsgb25Mb2FkRGVmYXVsdFdlYXRoZXIsIGN1cnJlbnREYXlJbmZvcm1hdGlvbkNvbnRhaW5lciB9IGZyb20gJy4vY3VycmVudFRlbXBlcmF0dXJlU2VjdGlvbic7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlcigpLCBjdXJyZW50RGF5SW5mb3JtYXRpb25Db250YWluZXIpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWREZWZhdWx0V2VhdGhlcik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9