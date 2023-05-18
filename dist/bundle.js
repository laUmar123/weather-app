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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Work Sans';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n    --light-blue: #4ba6cf;\n    --dark-blue: #0c4a6e;\n    --orange: #ecb347;\n    --search-background-color: #06263b;\n    --faded-white: rgba(255, 255, 255, 0.603);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Work Sans', sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background: linear-gradient(to bottom, var(--light-blue), var(--dark-blue));\n    color: white;\n    display: grid;\n    grid-template-rows: 0.5fr 5fr 5fr 0.5fr;\n    row-gap: 2rem;\n}\n\nheader {\n    grid-row: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 1.5rem\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 1.3rem;\n}\n\n.title-end {\n    color: var(--orange);\n}\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n    display: none;\n}\n\n.search-form {\n    display: flex;\n    align-items: center;\n    width: 25rem;\n    position: relative;\n    transform: translateY(4px);\n    margin-right: 55px;\n}\n\n#search-bar {\n    border-radius: 20px;\n    border: none;\n    width: 100%;\n    height: 2.5rem;\n    background-color: var(--search-background-color);\n    padding: 0 0.8rem;\n    color: white;\n    font-size: 1rem;\n}\n\n#search-bar::placeholder {\n    color: white;\n}\n\n.search-button {\n    background-color: transparent;\n    border: none;\n    position: absolute;\n    z-index: 1;\n    height: 1.5rem;\n    left: 88%;\n    cursor: pointer;\n}\n\n.change-degrees {\n    width: 20rem;\n    height: 2.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 0.5rem;\n}\n\n.btn {\n    cursor: pointer;\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.fahrenheit-btn,\n.celsius-btn {\n    height: 2rem;\n    width: 4rem;\n    border-radius: 20px;\n    background-color: var(--search-background-color);\n    font-size: 1rem;\n    transition: border 60ms ease-in;\n}\n\n.fahrenheit-btn:hover,\n.celsius-btn:hover,\n.daily-weather-btn:hover,\n.hourly-weather-btn:hover,\n.active {\n    border: 2px solid white;\n}\n\n.current-day-information {\n    justify-self: center;\n    grid-row: 2;\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n    grid-template-columns: 1fr 2fr;\n    width: 43rem;\n    height: 30rem;\n}\n\n.location-details {\n    grid-row: 1;\n    grid-column: 1 / -1;\n    justify-self: center;\n    text-align: center;\n    padding: 1rem;\n}\n\n.city-details {\n    font-size: 2.5rem;\n}\n\n.day-details {\n    font-size: 1.5rem;\n    margin-top: 0.5rem;\n    color: var(--faded-white);\n    font-weight: 500;\n}\n\n.time-details {\n    border-left: 2px solid var(--faded-white);\n    padding-left: 7px;\n    margin-left: 7px;\n}\n\n.current-temp-details {\n    grid-row: 2;\n    grid-column: 1;\n    justify-self: center;\n    align-self: center;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    row-gap: 0;\n}\n\n.temp-details {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n    gap: 0.3rem;\n}\n\n.temp-details>img {\n    height: 6rem;\n    width: 6rem;\n}\n\n.temp-description {\n    font-size: 1.7rem;\n    font-weight: 400;\n}\n\n.feels-like,\n.general-description {\n    font-size: 1.5rem;\n    font-weight: 300;\n    color: var(--faded-white);\n}\n\n.extra-information {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    padding: 0.5rem;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n}\n\n.extra-information>div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n}\n\n.wind-information {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.wind-direction {\n    height: 1.7rem;\n}\n\n.extra-information h5,\n.extra-information p {\n    font-weight: 600;\n}\n\n.extra-information h5 {\n    font-size: 1.2rem;\n    color: var(--faded-white);\n}\n\n.extra-information p {\n    font-size: 1.5rem;\n}\n\n.safe,\n.amber,\n.danger {\n    border-radius: 999px;\n    width: 40%;\n    margin: 0 auto;\n}\n\n.safe {\n    background-color: rgb(51, 192, 51);\n}\n\n.amber {\n    background-color: orange;\n}\n\n.danger {\n    background-color: rgb(192, 0, 0);\n}\n\n.carousel-buttons {\n    display: flex;\n    align-items: center;\n    gap: 0.3rem;\n}\n\n.daily-hourly-weather-carousel {\n    padding: 1rem 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.daily-weather-btn,\n.hourly-weather-btn {\n    background-color: var(--search-background-color);\n    height: 2.5rem;\n    width: 5rem;\n    border-radius: 5px;\n    font-size: 1rem;\n}\n\n.slide-buttons {\n    height: 100%;\n    width: 6rem;\n    margin-left: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.move-left,\n.move-right {\n    background-color: transparent;\n}\n\n.dots {\n    display: flex;\n    gap: 0.5rem;\n    transform: translateX(-3px);\n}\n\n.dot {\n    border-radius: 999px;\n    background-color: var(--search-background-color);\n    height: 8px;\n    width: 8px;\n}\n\n.dot.active {\n    background-color: white;\n}\n\n.material-symbols-outlined {\n    color: white;\n    display: flex;\n    justify-content: center;\n}\n\n.daily-weather-container {\n    display: flex;\n    gap: 1.2rem;\n}\n\n.daily-weather {\n    padding: 1rem;\n    width: 100%;\n    height: max(300px, 50%);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.day-information {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    font-size: 1.2rem;\n}\n\n.day-of-the-week {\n    font-weight: 500;\n}\n\n.date-of-the-week,\n.hourly-weather>h2 {\n    color: var(--faded-white);\n    font-weight: 400;\n}\n\n.date-of-the-week {\n    border-left: 1px solid var(--faded-white);\n    padding-left: 10px;\n}\n\n.day-weather-details {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.min-temp {\n    font-size: 1.5rem;\n    font-weight: 400;\n}\n\n.daily-weather>img {\n    height: 8rem;\n    width: 8rem;\n    align-self: center;\n}\n\n.hour-container {\n    display: flex;\n    margin: 0 auto;\n}\n\n.hourly-weather {\n    padding: 1rem;\n    width: 100%;\n    height: max(300px, 50%);\n    display: grid;\n    grid-template-rows: 1fr 2fr 2fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.hour-weather-description {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n    text-align: center;\n}\n\n.hour-weather-description>h3 {\n    font-size: 2rem;\n}\n\n.hour-description {\n    font-size: 1.1rem;\n    color: var(--faded-white);\n}\n\n.hourly-weather-icon {\n    height: 7rem;\n    width: 7rem;\n    align-self: flex-start;\n}\n\n.hide {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Work Sans';\n    src: url('./assets/WorkSans-VariableFont_wght.ttf');\n}\n\n:root {\n    --light-blue: #4ba6cf;\n    --dark-blue: #0c4a6e;\n    --orange: #ecb347;\n    --search-background-color: #06263b;\n    --faded-white: rgba(255, 255, 255, 0.603);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Work Sans', sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background: linear-gradient(to bottom, var(--light-blue), var(--dark-blue));\n    color: white;\n    display: grid;\n    grid-template-rows: 0.5fr 5fr 5fr 0.5fr;\n    row-gap: 2rem;\n}\n\nheader {\n    grid-row: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 1.5rem\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 1.3rem;\n}\n\n.title-end {\n    color: var(--orange);\n}\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n    display: none;\n}\n\n.search-form {\n    display: flex;\n    align-items: center;\n    width: 25rem;\n    position: relative;\n    transform: translateY(4px);\n    margin-right: 55px;\n}\n\n#search-bar {\n    border-radius: 20px;\n    border: none;\n    width: 100%;\n    height: 2.5rem;\n    background-color: var(--search-background-color);\n    padding: 0 0.8rem;\n    color: white;\n    font-size: 1rem;\n}\n\n#search-bar::placeholder {\n    color: white;\n}\n\n.search-button {\n    background-color: transparent;\n    border: none;\n    position: absolute;\n    z-index: 1;\n    height: 1.5rem;\n    left: 88%;\n    cursor: pointer;\n}\n\n.change-degrees {\n    width: 20rem;\n    height: 2.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 0.5rem;\n}\n\n.btn {\n    cursor: pointer;\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.fahrenheit-btn,\n.celsius-btn {\n    height: 2rem;\n    width: 4rem;\n    border-radius: 20px;\n    background-color: var(--search-background-color);\n    font-size: 1rem;\n    transition: border 60ms ease-in;\n}\n\n.fahrenheit-btn:hover,\n.celsius-btn:hover,\n.daily-weather-btn:hover,\n.hourly-weather-btn:hover,\n.active {\n    border: 2px solid white;\n}\n\n.current-day-information {\n    justify-self: center;\n    grid-row: 2;\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n    grid-template-columns: 1fr 2fr;\n    width: 43rem;\n    height: 30rem;\n}\n\n.location-details {\n    grid-row: 1;\n    grid-column: 1 / -1;\n    justify-self: center;\n    text-align: center;\n    padding: 1rem;\n}\n\n.city-details {\n    font-size: 2.5rem;\n}\n\n.day-details {\n    font-size: 1.5rem;\n    margin-top: 0.5rem;\n    color: var(--faded-white);\n    font-weight: 500;\n}\n\n.time-details {\n    border-left: 2px solid var(--faded-white);\n    padding-left: 7px;\n    margin-left: 7px;\n}\n\n.current-temp-details {\n    grid-row: 2;\n    grid-column: 1;\n    justify-self: center;\n    align-self: center;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    row-gap: 0;\n}\n\n.temp-details {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n    gap: 0.3rem;\n}\n\n.temp-details>img {\n    height: 6rem;\n    width: 6rem;\n}\n\n.temp-description {\n    font-size: 1.7rem;\n    font-weight: 400;\n}\n\n.feels-like,\n.general-description {\n    font-size: 1.5rem;\n    font-weight: 300;\n    color: var(--faded-white);\n}\n\n.extra-information {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    padding: 0.5rem;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n}\n\n.extra-information>div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n}\n\n.wind-information {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.wind-direction {\n    height: 1.7rem;\n}\n\n.extra-information h5,\n.extra-information p {\n    font-weight: 600;\n}\n\n.extra-information h5 {\n    font-size: 1.2rem;\n    color: var(--faded-white);\n}\n\n.extra-information p {\n    font-size: 1.5rem;\n}\n\n.safe,\n.amber,\n.danger {\n    border-radius: 999px;\n    width: 40%;\n    margin: 0 auto;\n}\n\n.safe {\n    background-color: rgb(51, 192, 51);\n}\n\n.amber {\n    background-color: orange;\n}\n\n.danger {\n    background-color: rgb(192, 0, 0);\n}\n\n.carousel-buttons {\n    display: flex;\n    align-items: center;\n    gap: 0.3rem;\n}\n\n.daily-hourly-weather-carousel {\n    padding: 1rem 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.daily-weather-btn,\n.hourly-weather-btn {\n    background-color: var(--search-background-color);\n    height: 2.5rem;\n    width: 5rem;\n    border-radius: 5px;\n    font-size: 1rem;\n}\n\n.slide-buttons {\n    height: 100%;\n    width: 6rem;\n    margin-left: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.move-left,\n.move-right {\n    background-color: transparent;\n}\n\n.dots {\n    display: flex;\n    gap: 0.5rem;\n    transform: translateX(-3px);\n}\n\n.dot {\n    border-radius: 999px;\n    background-color: var(--search-background-color);\n    height: 8px;\n    width: 8px;\n}\n\n.dot.active {\n    background-color: white;\n}\n\n.material-symbols-outlined {\n    color: white;\n    display: flex;\n    justify-content: center;\n}\n\n.daily-weather-container {\n    display: flex;\n    gap: 1.2rem;\n}\n\n.daily-weather {\n    padding: 1rem;\n    width: 100%;\n    height: max(300px, 50%);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.day-information {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    font-size: 1.2rem;\n}\n\n.day-of-the-week {\n    font-weight: 500;\n}\n\n.date-of-the-week,\n.hourly-weather>h2 {\n    color: var(--faded-white);\n    font-weight: 400;\n}\n\n.date-of-the-week {\n    border-left: 1px solid var(--faded-white);\n    padding-left: 10px;\n}\n\n.day-weather-details {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.min-temp {\n    font-size: 1.5rem;\n    font-weight: 400;\n}\n\n.daily-weather>img {\n    height: 8rem;\n    width: 8rem;\n    align-self: center;\n}\n\n.hour-container {\n    display: flex;\n    margin: 0 auto;\n}\n\n.hourly-weather {\n    padding: 1rem;\n    width: 100%;\n    height: max(300px, 50%);\n    display: grid;\n    grid-template-rows: 1fr 2fr 2fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.hour-weather-description {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n    text-align: center;\n}\n\n.hour-weather-description>h3 {\n    font-size: 2rem;\n}\n\n.hour-description {\n    font-size: 1.1rem;\n    color: var(--faded-white);\n}\n\n.hourly-weather-icon {\n    height: 7rem;\n    width: 7rem;\n    align-self: flex-start;\n}\n\n.hide {\n    display: none;\n}"],"sourceRoot":""}]);
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

/***/ "./src/carouselButtons.js":
/*!********************************!*\
  !*** ./src/carouselButtons.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "carouselButtons": () => (/* binding */ carouselButtons)
/* harmony export */ });
/* harmony import */ var _generatorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generatorFunctions */ "./src/generatorFunctions.js");


/**
 * This function brings together all buttons under one container
 * @returns a DOM element object that contains all the buttons contained within the daily-hourly-weather-carousel
 */
function carouselButtons() {
    const carouselButtonsContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['carousel-buttons']);
    carouselButtonsContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.buttonGenerator)(['daily-weather-btn', 'btn', 'active'], 'Daily'), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.buttonGenerator)(['hourly-weather-btn', 'btn'], 'Hourly'));
    carouselButtonsContainer.append(slideButtons());
    return carouselButtonsContainer;
};

/**
 * This functions brings together all buttons to do with the slides
 * @returns a DOM element object that contains all the buttons contained within the slide-buttons container
 */
function slideButtons() {
    const slideButtonsContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['slide-buttons', 'hide']);
    const buttonLeft = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['material-symbols-outlined'], 'arrow_back_ios')
    const buttonRight = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['material-symbols-outlined'], 'arrow_forward_ios')
    slideButtonsContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.buttonGenerator)(['move-left', 'btn'], '', '', buttonLeft));
    slideButtonsContainer.append(dots());
    slideButtonsContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.buttonGenerator)(['move-right', 'btn'], '', '', buttonRight));
    return slideButtonsContainer;
};

/**
 * This function generates 'dot' buttons
 * @returns a DOM element object that is used as the individual buttons that display which slide the user is on
 */
function dots() {
    const dotsContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['dots']);
    for (let i = 0; i < 4; i++) {
        if (i === 0) dotsContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.buttonGenerator)(['dot', 'active', 'btn'], '', '0'));
        else dotsContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.buttonGenerator)(['dot', 'btn'], '', i));
    };
    return dotsContainer;
};

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
/* harmony import */ var _hourlyWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hourlyWeather */ "./src/hourlyWeather.js");
/* harmony import */ var _retrieveInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retrieveInformation */ "./src/retrieveInformation.js");
/* harmony import */ var _weeklyWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weeklyWeather */ "./src/weeklyWeather.js");





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
    tempDetailsContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.imgGenerator)(image, undefined, ['image-weather-description']), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h2', ['current-temp'], '°', currentTemp, (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveMethodOfMeasurement)()));
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
    feelsLikeHeader.insertAdjacentHTML('afterbegin', `Feels like <span class="feels-like-temp">${feelsLikeTemp}</span>°<span class="method-of-measurement">${(0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.isMethodOfMeasurementCelsius)() === true ? 'C' : 'F'}</span>`);
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
    currentDayInformationContainer.append(displayLocationDetails((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveCity)(londonInfo), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveCountry)(londonInfo), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.createStandardDate)((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveDateAndTimeArr)(londonInfo)[0]), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.createStandardTime)((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveDateAndTimeArr)(londonInfo)[1])));
    currentDayInformationContainer.append(currentTempDetailsSection(tempDetailsSection((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveCurrentTempImg)(londonInfo), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveCurrentTemp)(londonInfo)), tempConditionsSection((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveCurrentCondition)(londonInfo), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveFeelsLikeTemp)(londonInfo))));
    currentDayInformationContainer.append(extraInformationSection(windInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveWindDegrees)(londonInfo), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveWindSpeed)(londonInfo)), humidityInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveHumidity)(londonInfo)),
        uvInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveUvNum)(londonInfo)), visibilityInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveVisibilityDistance)(londonInfo)), cloudinessInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveCloudinessPercentage)(londonInfo)), rainInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveChanceOfRain)(londonInfo)),
        sunriseInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveSunriseTime)(londonInfo)), sunsetInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveSunsetTime)(londonInfo)), moonInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveMoonPhase)(londonInfo))));
    document.querySelector('.daily-hourly-weather-carousel').append((0,_weeklyWeather__WEBPACK_IMPORTED_MODULE_3__.dailyWeatherSection)((0,_weeklyWeather__WEBPACK_IMPORTED_MODULE_3__.createAllDaysToDisplay)(londonInfo)));
    document.querySelector('.daily-hourly-weather-carousel').append((0,_hourlyWeather__WEBPACK_IMPORTED_MODULE_1__.hourlyWeather)((0,_hourlyWeather__WEBPACK_IMPORTED_MODULE_1__.createAnArrayOfAllHours)(londonInfo)));
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
 * @param {string} id the id we want to assign to the button
 * @param {object} spanElementPreppend a dom element that we want to add before the text part of the button
 * @param {object} spanElementAppend a dom element that we want to add after the text part of the button
 * @returns a button element
 */
function buttonGenerator(classes, text, id = '', spanElementPreppend = '', spanElementAppend = '') {
    const btn = document.createElement('button');
    addClassesToElement(classes, btn);
    btn.innerHTML = text;
    btn.id = id;
    btn.prepend(spanElementPreppend);
    btn.append(spanElementAppend);
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

/***/ "./src/hourlyWeather.js":
/*!******************************!*\
  !*** ./src/hourlyWeather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAnArrayOfAllHours": () => (/* binding */ createAnArrayOfAllHours),
/* harmony export */   "groupOfHoursContainer": () => (/* binding */ groupOfHoursContainer),
/* harmony export */   "hourWeatherDetails": () => (/* binding */ hourWeatherDetails),
/* harmony export */   "hourlyWeather": () => (/* binding */ hourlyWeather),
/* harmony export */   "individualHourContainer": () => (/* binding */ individualHourContainer)
/* harmony export */ });
/* harmony import */ var _generatorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generatorFunctions */ "./src/generatorFunctions.js");
/* harmony import */ var _retrieveInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retrieveInformation */ "./src/retrieveInformation.js");



/**
 * This function appends the hour contains onto the hourly-weather-container div so that it can be displayed on screen 
 * @param {array} hourContainers an array of hourContainers, the array should contain 4 elements
 * @returns a DOM element object that is the hourly-weather-container and contains all hourly weather that needs to be displayed
 */
function hourlyWeather(hourContainers) {
    const hourlyWeatherContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['hourly-weather-container', 'hide']);
    hourlyWeatherContainer.append(...hourContainers);
    return hourlyWeatherContainer;
};

/**
 * This function generates an hour-container div, and stores information about the weather in each hour on it
 * @param {number} containerNum the number of the container e.g. number 0 holds hours 0-5
 * @param {array} hoursUnderContainer an array of individual hours that should be stored under the container that will be returned
 * @returns a DOM element object that has 6 elements as children
 */
function groupOfHoursContainer(containerNum, hoursUnderContainer) {
    const hourContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)([`hour-container-${containerNum}`, 'hour-container', `${containerNum === 0 ? 'shown' : 'hide'}`]);
    hourContainer.append(...hoursUnderContainer);
    return hourContainer;
};

/**
 * This functions takes in all the parameters required to create a div that shows the weather details for a specified hour
 * @param {number} hourNum this is a number between 0-23 showing which hour the container is for
 * @param {string} timeToDisplay the time that needs to be displayed on screen 
 * @param {object} tempToDisplay DOM element object that contains information about the weather during that hour
 * @param {string} imgToDisplay a path to the image the corresponds with the weather at that hour
 * @returns a DOM element object that contains all the information required to represent the weather during the hour
 */
function individualHourContainer(hourNum, timeToDisplay, tempToDisplay, imgToDisplay) {
    const hourContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['hourly-weather', `hour-${hourNum}`]);
    hourContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h2', [], timeToDisplay), tempToDisplay, (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.imgGenerator)(imgToDisplay, '', ['hourly-weather-icon']));
    return hourContainer;
};

/**
 * This functions groups the temperature and a description about the weather into an element
 * @param {string} temp the temperature 
 * @param {string} tempDescription a description about the weather
 * @returns a DOM element object that makes up the temperature information about a certain hour
 */
function hourWeatherDetails(temp, tempDescription) {
    const weatherDetailsContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['hour-weather-description']);
    const tempSpan = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['hour-weather'], temp);
    const weatherSymbol = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['method-of-measurement'], 'C');
    weatherDetailsContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h3', [], '°', tempSpan, weatherSymbol), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['hour-description'], tempDescription));
    return weatherDetailsContainer;
};

/**
 * This function sorts each hour creates and sorts each hour into the correct container
 * @param {object} obj the object from which we will be getting information from 
 * @returns an array that contains 4 div elements, each div has information about the weather during a certain hour
 */
function createAnArrayOfAllHours(obj) {
    const containerOne = [];
    const containerTwo = [];
    const containerThree = [];
    const containerFour = [];
    for (let i = 0; i < 24; i++) {
        if (i <= 5) containerOne.push(individualHourContainer(i, (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getHourTime)(i, obj), hourWeatherDetails((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getHourTemp)(i, obj), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getHourTempDescription)(i, obj)), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getHourTempIcon)(i, obj)));
        else if (i <= 11) containerTwo.push(individualHourContainer(i, (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getHourTime)(i, obj), hourWeatherDetails((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getHourTemp)(i, obj), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getHourTempDescription)(i, obj)), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getHourTempIcon)(i, obj)));
        else if (i <= 17) containerThree.push(individualHourContainer(i, (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getHourTime)(i, obj), hourWeatherDetails((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getHourTemp)(i, obj), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getHourTempDescription)(i, obj)), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getHourTempIcon)(i, obj)));
        else if (i <= 23) containerFour.push(individualHourContainer(i, (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getHourTime)(i, obj), hourWeatherDetails((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getHourTemp)(i, obj), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getHourTempDescription)(i, obj)), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getHourTempIcon)(i, obj)));
    };
    const fullHoursArr = [groupOfHoursContainer(0, containerOne), groupOfHoursContainer(1, containerTwo), groupOfHoursContainer(2, containerThree), groupOfHoursContainer(3, containerFour)];
    return fullHoursArr;
};



/***/ }),

/***/ "./src/retrieveInformation.js":
/*!************************************!*\
  !*** ./src/retrieveInformation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShortStandardDate": () => (/* binding */ createShortStandardDate),
/* harmony export */   "createStandardDate": () => (/* binding */ createStandardDate),
/* harmony export */   "createStandardTime": () => (/* binding */ createStandardTime),
/* harmony export */   "getDate": () => (/* binding */ getDate),
/* harmony export */   "getDayMaxTemp": () => (/* binding */ getDayMaxTemp),
/* harmony export */   "getDayMinTemp": () => (/* binding */ getDayMinTemp),
/* harmony export */   "getDayWeatherImage": () => (/* binding */ getDayWeatherImage),
/* harmony export */   "getHourTemp": () => (/* binding */ getHourTemp),
/* harmony export */   "getHourTempDescription": () => (/* binding */ getHourTempDescription),
/* harmony export */   "getHourTempIcon": () => (/* binding */ getHourTempIcon),
/* harmony export */   "getHourTime": () => (/* binding */ getHourTime),
/* harmony export */   "isMethodOfMeasurementCelsius": () => (/* binding */ isMethodOfMeasurementCelsius),
/* harmony export */   "retrieveChanceOfRain": () => (/* binding */ retrieveChanceOfRain),
/* harmony export */   "retrieveCity": () => (/* binding */ retrieveCity),
/* harmony export */   "retrieveCloudinessPercentage": () => (/* binding */ retrieveCloudinessPercentage),
/* harmony export */   "retrieveCountry": () => (/* binding */ retrieveCountry),
/* harmony export */   "retrieveCurrentCondition": () => (/* binding */ retrieveCurrentCondition),
/* harmony export */   "retrieveCurrentTemp": () => (/* binding */ retrieveCurrentTemp),
/* harmony export */   "retrieveCurrentTempImg": () => (/* binding */ retrieveCurrentTempImg),
/* harmony export */   "retrieveDateAndTimeArr": () => (/* binding */ retrieveDateAndTimeArr),
/* harmony export */   "retrieveDayOfTheWeek": () => (/* binding */ retrieveDayOfTheWeek),
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
 * This function takes a date and converts it to en-GB locale form
 * @param {string} dateToConvert a string representation of a date that we want to convert into the GB standard 
 * @returns a string that displays the date in the en-GB locale form
 */
function createShortStandardDate(dateToConvert) {
    const date = new Date(dateToConvert)
    return new Intl.DateTimeFormat("en-GB").format(date.getTime());
}

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
    return Math.round(Number(obj.current.feelslike_c));
}

/**
 * This function is used to retrieve the current outdoor condition from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the current outdoor condition
 */
function retrieveCurrentCondition(obj) {
    return obj.current.condition.text;
}

//These functions are used to retrieve the values for the weekly forecast
/**
 * This function takes a number ranging from 0-6 and then return the weekday name
 * @param {number} dateToFindDay a number that represents the day of the week e.g. 0 represents Sunday
 * @returns a string value that is the corresponding day of the week
 */
function retrieveDayOfTheWeek(dateToFindDay) {
    const date = new Date(dateToFindDay);
    const day = date.getDay();
    switch (day) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Unknown day';
    };
};

/**
 * This function is used to retrieve the date based on the day we specified, and from the object we provided
 * @param {number} day the day of the week
 * @param {object} obj the object from which we need to retrieve the date from 
 * @returns a string value that contains the date
 */
function getDate(day, obj) {
    return obj.forecast.forecastday[day].date;
};

/**
 * This function is used to retrieve the maximum temperature based on the day of the week provided from the object provided
 * @param {number} dayOfWeek the day of the week
 * @param {object} obj the object from which we need to retrieve the maximum temperature from 
 * @returns a string value that is the maximum temperature for that given day
 */
function getDayMaxTemp(dayOfWeek, obj) {
    return Math.round(Number(obj.forecast.forecastday[dayOfWeek].day.maxtemp_c));
}

/**
 * This function is used to retrieve the minimum temperature based on the day of the week provided from the object provided
 * @param {number} dayOfWeek the day of the week
 * @param {object} obj the object from which we need to retrieve the minimum temperature from 
 * @returns a string value that is the minimum temperature for that given day
 */
function getDayMinTemp(dayOfWeek, obj) {
    return Math.round(Number(obj.forecast.forecastday[dayOfWeek].day.mintemp_c));
};

/**
 * This function is used to retrieve the corresponding whether image from the day of the week provided from the object provided
 * @param {number} dayOfWeek the day of the week
 * @param {object} obj the object from which we need to retrieve the date from 
 * @returns a string value that is the path to the image
 */
function getDayWeatherImage(dayOfWeek, obj) {
    return obj.forecast.forecastday[dayOfWeek].day.condition.icon;
}

//These functions are used for the hourly weather section
/**
 * This function gets the time based on the hourNum value, and manipulates the time to display without the AM or PM
 * @param {number} hourNum a number the corresponds to a certain hour, e.g. 0 corresponds to 12am
 * @param {object} obj the object from which we need to retrieve the date from 
 * @returns a string value that is the time that corresponds to the hourNum argument passed
 */
function getHourTime(hourNum, obj) {
    return obj.forecast.forecastday[0].hour[hourNum].time.slice(-5);
};

/**
 * This function gets the temperature based on the hourNum value, and manipulates the temperature to be rounded
 * @param {number} hourNum a number the corresponds to a certain hour, e.g. 0 corresponds to 12am
 * @param {object} obj the object from which we need to retrieve the date from 
 * @returns a number value that is the temperature in celsius and has been rounded
 */
function getHourTemp(hourNum, obj) {
    return Math.round(Number(obj.forecast.forecastday[0].hour[hourNum].temp_c));
};

/**
 * This function gets the weather description based on the hourNum value
 * @param {number} hourNum a number the corresponds to a certain hour, e.g. 0 corresponds to 12am
 * @param {object} obj the object from which we need to retrieve the date from 
 * @returns astring value that is the weather conditions at that certain hour
 */
function getHourTempDescription(hourNum, obj) {
    return obj.forecast.forecastday[0].hour[hourNum].condition.text;
};

/**
 * This function gets the correct icon based on the hourNum value
 * @param {number} hourNum a number the corresponds to a certain hour, e.g. 0 corresponds to 12am
 * @param {object} obj the object from which we need to retrieve the date from 
 * @returns a string value that is the path to the image that corresponds with the weather for that hour
 */
function getHourTempIcon(hourNum, obj) {
    return obj.forecast.forecastday[0].hour[hourNum].condition.icon;
};



/***/ }),

/***/ "./src/weeklyWeather.js":
/*!******************************!*\
  !*** ./src/weeklyWeather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAllDaysToDisplay": () => (/* binding */ createAllDaysToDisplay),
/* harmony export */   "dailyWeatherSection": () => (/* binding */ dailyWeatherSection),
/* harmony export */   "dayInformation": () => (/* binding */ dayInformation),
/* harmony export */   "dayWeather": () => (/* binding */ dayWeather),
/* harmony export */   "dayWeatherDetails": () => (/* binding */ dayWeatherDetails)
/* harmony export */ });
/* harmony import */ var _generatorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generatorFunctions */ "./src/generatorFunctions.js");
/* harmony import */ var _retrieveInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retrieveInformation */ "./src/retrieveInformation.js");



/**
 * This function takes all daily-weather divs and appends them to daily-weather-container
 * @param {Array} arrOfDays an array of all the days that need to be appended and displayed, there should be 7 in total
 * @returns a DOM element object that contains weather information for the current and next six days
 */
function dailyWeatherSection(arrOfDays) {
    const dailyWeatherSectionContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['daily-weather-container']);
    dailyWeatherSectionContainer.append(...arrOfDays);
    return dailyWeatherSectionContainer;
};

/**
 * This functions puts together all the information required to display the weather for an individual day
 * @param {number} dayNum the number of the day the container is going to be for
 * @param {object} dayInfo a DOM element object that contains details about the day
 * @param {object} weatherDetails a DOM element object that contains details aboubt the day's weather
 * @param {string} dayWeatherImg a string value that is the path to the weather image for that day
 * @returns a DOM element object that makes up one of the days that is going to be displayed
 */
function dayWeather(dayNum, dayInfo, weatherDetails, dayWeatherImg) {
    const dailyWeatherContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['daily-weather', `day-${dayNum}`]);
    dailyWeatherContainer.append(dayInfo, weatherDetails, (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.imgGenerator)(dayWeatherImg, '', []));
    return dailyWeatherContainer;
};

/**
 * This function's job is to create a DOM element object that contains all information related to the day we passed in, such as the day of the week, and representing the date on screen
 * @param {string} date the date we want to display 
 * @returns a DOM element object that contains information about the date we passed in
 */
function dayInformation(date) {
    const dayInformationContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['day-information']);
    dayInformationContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h2', ['day-of-the-week'], (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.retrieveDayOfTheWeek)(date)), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h2', ['date-of-the-week'], (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.createShortStandardDate)(date)));
    return dayInformationContainer;
};

/**
 * This function's job is to displayed the temperature based on the two arguments provided
 * @param {string} dayMaxTemp the maximum temperature for that day
 * @param {string} dayMinTemp the minimum temperature for that day
 * @returns a DOM element object that contains information about the temperature
 */
function dayWeatherDetails(dayMaxTemp, dayMinTemp) {
    const weatherDetailsContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['day-weather-details']);
    const maxWeatherSpan = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['day-of-the-week-max-temp'], dayMaxTemp);
    const minWeatherSpan = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['day-of-the-week-min-temp'], dayMinTemp);
    const weatherSymbol = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['method-of-measurement'], 'C');
    const weatherSymbolTwo = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.spanGenerator)(['method-of-measurement'], 'C');
    weatherDetailsContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['max-temp'], '°', maxWeatherSpan, weatherSymbol), (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.paragraphGenerator)(['min-temp'], '°', minWeatherSpan, weatherSymbolTwo));
    return weatherDetailsContainer;
};

/**
 * This function calls all the relevant functions and creates a DOM element representing a day and its respective weather
 * @param {object} obj the object from which we will be retrieving values from 
 * @returns an array that contains all the DOM elements that need to be displayed
 */
function createAllDaysToDisplay(obj) {
    const arrOfDays = [];
    for (let i = 0; i < 7; i++) {
        arrOfDays.push(dayWeather(i, dayInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getDate)(i, obj)), dayWeatherDetails((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getDayMaxTemp)(i, obj), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getDayMinTemp)(i, obj)), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_1__.getDayWeatherImage)(i, obj)));
    };
    return arrOfDays;
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
/* harmony import */ var _generatorFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generatorFunctions */ "./src/generatorFunctions.js");
/* harmony import */ var _carouselButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carouselButtons */ "./src/carouselButtons.js");






const dailyHourlyWeather = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_3__.divGenerator)(['daily-hourly-weather-carousel']); //the div that will contain the daily weather, and the hourly
dailyHourlyWeather.append((0,_carouselButtons__WEBPACK_IMPORTED_MODULE_4__.carouselButtons)());

document.body.append((0,_headerSection__WEBPACK_IMPORTED_MODULE_1__.header)(), _currentTemperatureSection__WEBPACK_IMPORTED_MODULE_2__.currentDayInformationContainer, dailyHourlyWeather);
window.addEventListener('load', _currentTemperatureSection__WEBPACK_IMPORTED_MODULE_2__.onLoadDefaultWeather);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sU0FBUyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxL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V0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlUdUg7QUFDd0Q7O0FBRS9LO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGlFQUFZO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpRUFBWSwwQkFBMEIsT0FBTztBQUMvRSwwREFBMEQsaUVBQVk7QUFDdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpRUFBWTtBQUNoRCxtQ0FBbUMscUVBQWdCLDRCQUE0QiwwRUFBb0IsU0FBUyxxRUFBZ0IsNkJBQTZCLDZFQUF1QjtBQUNoTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpRUFBWTtBQUNoRCwyQkFBMkIsa0VBQWE7QUFDeEMsMkJBQTJCLGtFQUFhO0FBQ3hDLDBCQUEwQixrRUFBYTtBQUN2Qyw2QkFBNkIsa0VBQWE7QUFDMUMsbUNBQW1DLHVFQUFrQixvREFBb0QsdUVBQWtCO0FBQzNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLG9EQUFvRCw2REFBTyw2QkFBNkIsbUVBQWEsVUFBVSxtRUFBYSxXQUFXLHdFQUFrQjtBQUN6SjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQjtBQUMwRDtBQUMvQztBQUNBOztBQUVwRCwyQkFBMkIsaUVBQVkscUNBQXFDO0FBQzVFLDBCQUEwQixpRUFBZTs7QUFFekMscUJBQXFCLHNEQUFNLElBQUksc0ZBQThCO0FBQzdELGdDQUFnQyw0RUFBb0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jYXJvdXNlbEJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3VycmVudFRlbXBlcmF0dXJlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZW5lcmF0b3JGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVhZGVyU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ob3VybHlXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3JldHJpZXZlSW5mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2Vla2x5V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9Xb3JrU2Fucy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1saWdodC1ibHVlOiAjNGJhNmNmO1xcbiAgICAtLWRhcmstYmx1ZTogIzBjNGE2ZTtcXG4gICAgLS1vcmFuZ2U6ICNlY2IzNDc7XFxuICAgIC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3I6ICMwNjI2M2I7XFxuICAgIC0tZmFkZWQtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1kYXJrLWJsdWUpKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDVmciA1ZnIgMC41ZnI7XFxuICAgIHJvdy1nYXA6IDJyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtXFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50aXRsZS1lbmQge1xcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxuICAgIG1hcmdpbi1yaWdodDogNTVweDtcXG59XFxuXFxuI3NlYXJjaC1iYXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwIDAuOHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNzZWFyY2gtYmFyOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBsZWZ0OiA4OCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoYW5nZS1kZWdyZWVzIHtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mYWhyZW5oZWl0LWJ0bixcXG4uY2Vsc2l1cy1idG4ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDYwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmZhaHJlbmhlaXQtYnRuOmhvdmVyLFxcbi5jZWxzaXVzLWJ0bjpob3ZlcixcXG4uZGFpbHktd2VhdGhlci1idG46aG92ZXIsXFxuLmhvdXJseS13ZWF0aGVyLWJ0bjpob3ZlcixcXG4uYWN0aXZlIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jdXJyZW50LWRheS1pbmZvcm1hdGlvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIHdpZHRoOiA0M3JlbTtcXG4gICAgaGVpZ2h0OiAzMHJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLWRldGFpbHMge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNpdHktZGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uZGF5LWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udGltZS1kZXRhaWxzIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1mYWRlZC13aGl0ZSk7XFxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xcbn1cXG5cXG4uY3VycmVudC10ZW1wLWRldGFpbHMge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDA7XFxufVxcblxcbi50ZW1wLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzPmltZyB7XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgd2lkdGg6IDZyZW07XFxufVxcblxcbi50ZW1wLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5mZWVscy1saWtlLFxcbi5nZW5lcmFsLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlZC13aGl0ZSk7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbj5kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLndpbmQtaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLndpbmQtZGlyZWN0aW9uIHtcXG4gICAgaGVpZ2h0OiAxLjdyZW07XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiBoNSxcXG4uZXh0cmEtaW5mb3JtYXRpb24gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiBoNSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uc2FmZSxcXG4uYW1iZXIsXFxuLmRhbmdlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnNhZmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDE5MiwgNTEpO1xcbn1cXG5cXG4uYW1iZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5kYW5nZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAwLCAwKTtcXG59XFxuXFxuLmNhcm91c2VsLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLmRhaWx5LWhvdXJseS13ZWF0aGVyLWNhcm91c2VsIHtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5kYWlseS13ZWF0aGVyLWJ0bixcXG4uaG91cmx5LXdlYXRoZXItYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc2xpZGUtYnV0dG9ucyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vdmUtbGVmdCxcXG4ubW92ZS1yaWdodCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZG90cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XFxufVxcblxcbi5kb3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDhweDtcXG4gICAgd2lkdGg6IDhweDtcXG59XFxuXFxuLmRvdC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGFpbHktd2VhdGhlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEuMnJlbTtcXG59XFxuXFxuLmRhaWx5LXdlYXRoZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBtYXgoMzAwcHgsIDUwJSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmRheS1pbmZvcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5kYXktb2YtdGhlLXdlZWsge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZGF0ZS1vZi10aGUtd2VlayxcXG4uaG91cmx5LXdlYXRoZXI+aDIge1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZGF0ZS1vZi10aGUtd2VlayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5kYXktd2VhdGhlci1kZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1pbi10ZW1wIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5kYWlseS13ZWF0aGVyPmltZyB7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5ob3VybHktd2VhdGhlciB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IG1heCgzMDBweCwgNTAlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG91ci13ZWF0aGVyLWRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhvdXItd2VhdGhlci1kZXNjcmlwdGlvbj5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmhvdXItZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG59XFxuXFxuLmhvdXJseS13ZWF0aGVyLWljb24ge1xcbiAgICBoZWlnaHQ6IDdyZW07XFxuICAgIHdpZHRoOiA3cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsNENBQW1EO0FBQ3ZEOztBQUVBO0lBQ0kscUJBQXFC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WixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvV29ya1NhbnMtVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1saWdodC1ibHVlOiAjNGJhNmNmO1xcbiAgICAtLWRhcmstYmx1ZTogIzBjNGE2ZTtcXG4gICAgLS1vcmFuZ2U6ICNlY2IzNDc7XFxuICAgIC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3I6ICMwNjI2M2I7XFxuICAgIC0tZmFkZWQtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1kYXJrLWJsdWUpKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDVmciA1ZnIgMC41ZnI7XFxuICAgIHJvdy1nYXA6IDJyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtXFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50aXRsZS1lbmQge1xcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxuICAgIG1hcmdpbi1yaWdodDogNTVweDtcXG59XFxuXFxuI3NlYXJjaC1iYXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwIDAuOHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNzZWFyY2gtYmFyOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBsZWZ0OiA4OCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoYW5nZS1kZWdyZWVzIHtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mYWhyZW5oZWl0LWJ0bixcXG4uY2Vsc2l1cy1idG4ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDYwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmZhaHJlbmhlaXQtYnRuOmhvdmVyLFxcbi5jZWxzaXVzLWJ0bjpob3ZlcixcXG4uZGFpbHktd2VhdGhlci1idG46aG92ZXIsXFxuLmhvdXJseS13ZWF0aGVyLWJ0bjpob3ZlcixcXG4uYWN0aXZlIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jdXJyZW50LWRheS1pbmZvcm1hdGlvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIHdpZHRoOiA0M3JlbTtcXG4gICAgaGVpZ2h0OiAzMHJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLWRldGFpbHMge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNpdHktZGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uZGF5LWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udGltZS1kZXRhaWxzIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1mYWRlZC13aGl0ZSk7XFxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xcbn1cXG5cXG4uY3VycmVudC10ZW1wLWRldGFpbHMge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDA7XFxufVxcblxcbi50ZW1wLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzPmltZyB7XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgd2lkdGg6IDZyZW07XFxufVxcblxcbi50ZW1wLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5mZWVscy1saWtlLFxcbi5nZW5lcmFsLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlZC13aGl0ZSk7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbj5kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLndpbmQtaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLndpbmQtZGlyZWN0aW9uIHtcXG4gICAgaGVpZ2h0OiAxLjdyZW07XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiBoNSxcXG4uZXh0cmEtaW5mb3JtYXRpb24gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiBoNSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uc2FmZSxcXG4uYW1iZXIsXFxuLmRhbmdlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnNhZmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDE5MiwgNTEpO1xcbn1cXG5cXG4uYW1iZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5kYW5nZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAwLCAwKTtcXG59XFxuXFxuLmNhcm91c2VsLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLmRhaWx5LWhvdXJseS13ZWF0aGVyLWNhcm91c2VsIHtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5kYWlseS13ZWF0aGVyLWJ0bixcXG4uaG91cmx5LXdlYXRoZXItYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc2xpZGUtYnV0dG9ucyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vdmUtbGVmdCxcXG4ubW92ZS1yaWdodCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZG90cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XFxufVxcblxcbi5kb3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDhweDtcXG4gICAgd2lkdGg6IDhweDtcXG59XFxuXFxuLmRvdC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGFpbHktd2VhdGhlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEuMnJlbTtcXG59XFxuXFxuLmRhaWx5LXdlYXRoZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBtYXgoMzAwcHgsIDUwJSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmRheS1pbmZvcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5kYXktb2YtdGhlLXdlZWsge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZGF0ZS1vZi10aGUtd2VlayxcXG4uaG91cmx5LXdlYXRoZXI+aDIge1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZGF0ZS1vZi10aGUtd2VlayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5kYXktd2VhdGhlci1kZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1pbi10ZW1wIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5kYWlseS13ZWF0aGVyPmltZyB7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5ob3VybHktd2VhdGhlciB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IG1heCgzMDBweCwgNTAlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG91ci13ZWF0aGVyLWRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhvdXItd2VhdGhlci1kZXNjcmlwdGlvbj5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmhvdXItZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG59XFxuXFxuLmhvdXJseS13ZWF0aGVyLWljb24ge1xcbiAgICBoZWlnaHQ6IDdyZW07XFxuICAgIHdpZHRoOiA3cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYnV0dG9uR2VuZXJhdG9yLCBkaXZHZW5lcmF0b3IsIHNwYW5HZW5lcmF0b3IgfSBmcm9tIFwiLi9nZW5lcmF0b3JGdW5jdGlvbnNcIjtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGJyaW5ncyB0b2dldGhlciBhbGwgYnV0dG9ucyB1bmRlciBvbmUgY29udGFpbmVyXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgYnV0dG9ucyBjb250YWluZWQgd2l0aGluIHRoZSBkYWlseS1ob3VybHktd2VhdGhlci1jYXJvdXNlbFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2Fyb3VzZWxCdXR0b25zKCkge1xuICAgIGNvbnN0IGNhcm91c2VsQnV0dG9uc0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2Nhcm91c2VsLWJ1dHRvbnMnXSk7XG4gICAgY2Fyb3VzZWxCdXR0b25zQ29udGFpbmVyLmFwcGVuZChidXR0b25HZW5lcmF0b3IoWydkYWlseS13ZWF0aGVyLWJ0bicsICdidG4nLCAnYWN0aXZlJ10sICdEYWlseScpLCBidXR0b25HZW5lcmF0b3IoWydob3VybHktd2VhdGhlci1idG4nLCAnYnRuJ10sICdIb3VybHknKSk7XG4gICAgY2Fyb3VzZWxCdXR0b25zQ29udGFpbmVyLmFwcGVuZChzbGlkZUJ1dHRvbnMoKSk7XG4gICAgcmV0dXJuIGNhcm91c2VsQnV0dG9uc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbnMgYnJpbmdzIHRvZ2V0aGVyIGFsbCBidXR0b25zIHRvIGRvIHdpdGggdGhlIHNsaWRlc1xuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgdGhlIGJ1dHRvbnMgY29udGFpbmVkIHdpdGhpbiB0aGUgc2xpZGUtYnV0dG9ucyBjb250YWluZXJcbiAqL1xuZnVuY3Rpb24gc2xpZGVCdXR0b25zKCkge1xuICAgIGNvbnN0IHNsaWRlQnV0dG9uc0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3NsaWRlLWJ1dHRvbnMnLCAnaGlkZSddKTtcbiAgICBjb25zdCBidXR0b25MZWZ0ID0gc3BhbkdlbmVyYXRvcihbJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnXSwgJ2Fycm93X2JhY2tfaW9zJylcbiAgICBjb25zdCBidXR0b25SaWdodCA9IHNwYW5HZW5lcmF0b3IoWydtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJ10sICdhcnJvd19mb3J3YXJkX2lvcycpXG4gICAgc2xpZGVCdXR0b25zQ29udGFpbmVyLmFwcGVuZChidXR0b25HZW5lcmF0b3IoWydtb3ZlLWxlZnQnLCAnYnRuJ10sICcnLCAnJywgYnV0dG9uTGVmdCkpO1xuICAgIHNsaWRlQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoZG90cygpKTtcbiAgICBzbGlkZUJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGJ1dHRvbkdlbmVyYXRvcihbJ21vdmUtcmlnaHQnLCAnYnRuJ10sICcnLCAnJywgYnV0dG9uUmlnaHQpKTtcbiAgICByZXR1cm4gc2xpZGVCdXR0b25zQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyAnZG90JyBidXR0b25zXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHVzZWQgYXMgdGhlIGluZGl2aWR1YWwgYnV0dG9ucyB0aGF0IGRpc3BsYXkgd2hpY2ggc2xpZGUgdGhlIHVzZXIgaXMgb25cbiAqL1xuZnVuY3Rpb24gZG90cygpIHtcbiAgICBjb25zdCBkb3RzQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnZG90cyddKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBpZiAoaSA9PT0gMCkgZG90c0NvbnRhaW5lci5hcHBlbmQoYnV0dG9uR2VuZXJhdG9yKFsnZG90JywgJ2FjdGl2ZScsICdidG4nXSwgJycsICcwJykpO1xuICAgICAgICBlbHNlIGRvdHNDb250YWluZXIuYXBwZW5kKGJ1dHRvbkdlbmVyYXRvcihbJ2RvdCcsICdidG4nXSwgJycsIGkpKTtcbiAgICB9O1xuICAgIHJldHVybiBkb3RzQ29udGFpbmVyO1xufTsiLCJpbXBvcnQgeyBjaGVja0NhdGVnb3J5T2ZVdiwgZGl2R2VuZXJhdG9yLCBoZWFkaW5nR2VuZXJhdG9yLCBpbWdHZW5lcmF0b3IsIHBhcmFncmFwaEdlbmVyYXRvciwgc3BhbkdlbmVyYXRvciB9IGZyb20gJy4vZ2VuZXJhdG9yRnVuY3Rpb25zJztcbmltcG9ydCB7IGNyZWF0ZUFuQXJyYXlPZkFsbEhvdXJzLCBob3VybHlXZWF0aGVyIH0gZnJvbSAnLi9ob3VybHlXZWF0aGVyJztcbmltcG9ydCB7IGNyZWF0ZVN0YW5kYXJkRGF0ZSwgY3JlYXRlU3RhbmRhcmRUaW1lLCByZXRyaWV2ZUNpdHksIHJldHJpZXZlQ291bnRyeSwgcmV0cmlldmVEYXRlQW5kVGltZUFyciwgcmV0cmlldmVNZXRob2RPZk1lYXN1cmVtZW50LCBpc01ldGhvZE9mTWVhc3VyZW1lbnRDZWxzaXVzLCByZXRyaWV2ZVdpbmREZWdyZWVzLCByZXRyaWV2ZVdpbmRTcGVlZCwgcmV0cmlldmVIdW1pZGl0eSwgcmV0cmlldmVVdk51bSwgcmV0cmlldmVWaXNpYmlsaXR5RGlzdGFuY2UsIHJldHJpZXZlQ2xvdWRpbmVzc1BlcmNlbnRhZ2UsIHJldHJpZXZlQ2hhbmNlT2ZSYWluLCByZXRyaWV2ZVN1bnJpc2VUaW1lLCByZXRyaWV2ZVN1bnNldFRpbWUsIHJldHJpZXZlTW9vblBoYXNlLCByZXRyaWV2ZUN1cnJlbnRUZW1wSW1nLCByZXRyaWV2ZUN1cnJlbnRUZW1wLCByZXRyaWV2ZUN1cnJlbnRDb25kaXRpb24sIHJldHJpZXZlRmVlbHNMaWtlVGVtcCB9IGZyb20gJy4vcmV0cmlldmVJbmZvcm1hdGlvbidcbmltcG9ydCB7IGRhaWx5V2VhdGhlclNlY3Rpb24sIGNyZWF0ZUFsbERheXNUb0Rpc3BsYXkgfSBmcm9tICcuL3dlZWtseVdlYXRoZXInO1xuXG5jb25zdCBjdXJyZW50RGF5SW5mb3JtYXRpb25Db250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydjdXJyZW50LWRheS1pbmZvcm1hdGlvbiddKTsgLy90aGlzIGlzIHRoZSBjb250YWluZXIgdGhhdCBjb250YWlucyBhbGwgZWxlbWVudHMgdGhhdCB3aWxsIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgbW9tZW50XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIG9uIHNjcmVlbiB0byBzaG93IHRoZSBsb2NhdGlvbiBhbmQgdGltZSBvZiB0aGUgY2l0eSBzZWFyY2hlZFxuICogQHBhcmFtIHtzdHJpbmd9IGNpdHkgdGhlIG5hbWUgb2YgdGhlIGNpdHkgdGhhdCBuZWVkcyB0byBiZSBkaXNwbGF5ZWQgb24gc2NyZWVuIFxuICogQHBhcmFtIHtzdHJpbmd9IGNvdW50cnkgdGhlIG5hbWUgb2YgdGhlIGNvdW50cnkgdGhhdCBuZWVkcyB0byBiZSBkaXNwbGF5ZWQgb24gc2NyZWVuIFxuICogQHBhcmFtIHtzdHJpbmd9IGRheSB0aGUgZGF0ZSB0aGF0IGhhcyBjb252ZXJ0ZWQgaW50byBhIHN0cmluZyB1c2luZyB0aGUgSW50bCBBUElcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lIHRoZSB0aW1lIHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkIG9uIHNjcmVlblxuICogQHJldHVybnMgYSBET00gZWxlbWVudCB0aGF0IGNvbnRhaW5zIG5lc3RlZCBlbGVtZW50cyB0aGF0IGRpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGxvY2F0aW9uIGFuZCB0aW1lXG4gKi9cbmZ1bmN0aW9uIGRpc3BsYXlMb2NhdGlvbkRldGFpbHMoY2l0eSA9ICcnLCBjb3VudHJ5ID0gJycsIGRheSA9ICcnLCB0aW1lID0gJycpIHtcbiAgICBjb25zdCBsb2NhdGlvbkRldGFpbHMgPSBkaXZHZW5lcmF0b3IoWydsb2NhdGlvbi1kZXRhaWxzJ10pO1xuICAgIGNvbnN0IGNpdHlOYW1lID0gc3BhbkdlbmVyYXRvcihbJ2NpdHknXSwgY2l0eSk7XG4gICAgY29uc3QgY291bnRyeU5hbWUgPSBzcGFuR2VuZXJhdG9yKFsnY291bnRyeSddLCBjb3VudHJ5KTtcbiAgICBjb25zdCB0aW1lRGV0YWlscyA9IHNwYW5HZW5lcmF0b3IoWyd0aW1lLWRldGFpbHMnXSwgdGltZSk7XG4gICAgY29uc3QgY2l0eURldGFpbHNIZWFkZXIgPSBoZWFkaW5nR2VuZXJhdG9yKCdoMicsIFsnY2l0eS1kZXRhaWxzJ10sICcsICcsIGNpdHlOYW1lLCBjb3VudHJ5TmFtZSk7XG4gICAgY29uc3QgZGF5RGV0YWlsc0hlYWRlciA9IGhlYWRpbmdHZW5lcmF0b3IoJ2g0JywgWydkYXktZGV0YWlscyddLCBkYXksIHVuZGVmaW5lZCwgdGltZURldGFpbHMpO1xuICAgIGxvY2F0aW9uRGV0YWlscy5hcHBlbmQoY2l0eURldGFpbHNIZWFkZXIsIGRheURldGFpbHNIZWFkZXIpO1xuICAgIHJldHVybiBsb2NhdGlvbkRldGFpbHM7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBkaXNwbGF5IHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIGFsb25nIHdpdGggaXRzIGFzc29jaWF0ZWQgaW1hZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSB0aGlzIGlzIHRoZSBwYXRoIHRvIHRoZSBpbWFnZSB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZCBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgXG4gKiBAcmV0dXJucyBhIGRpdiBlbGVtZW50IHRoYXQgaGFzIHR3byBmdXJ0aGVyIGVsZW1lbnRzIGFwcGVuZGVkIHdpdGhpbiBpdCBkaXNwbGF5aW5nIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIGFsb25nIHdpdGggaXRzIGFzc29jaWF0ZWQgaW1hZ2VcbiAqL1xuZnVuY3Rpb24gdGVtcERldGFpbHNTZWN0aW9uKGltYWdlLCB0ZW1wKSB7XG4gICAgY29uc3QgdGVtcERldGFpbHNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd0ZW1wLWRldGFpbHMnXSk7XG4gICAgY29uc3QgY3VycmVudFRlbXAgPSBzcGFuR2VuZXJhdG9yKFsndGVtcCddLCB0ZW1wKTtcbiAgICB0ZW1wRGV0YWlsc0NvbnRhaW5lci5hcHBlbmQoaW1nR2VuZXJhdG9yKGltYWdlLCB1bmRlZmluZWQsIFsnaW1hZ2Utd2VhdGhlci1kZXNjcmlwdGlvbiddKSwgaGVhZGluZ0dlbmVyYXRvcignaDInLCBbJ2N1cnJlbnQtdGVtcCddLCAnwrAnLCBjdXJyZW50VGVtcCwgcmV0cmlldmVNZXRob2RPZk1lYXN1cmVtZW50KCkpKTtcbiAgICByZXR1cm4gdGVtcERldGFpbHNDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBkaXNwbGF5IHRoZSB0ZW1wZXJhdHVyZSBpdCBmZWVscyBsaWtlIGFsb25nIHdpdGggdGhlIG91dGRvb3IgY29uZGl0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIGEgZGVzY3JpcHRpb24gb2Ygb3V0ZG9vciBjb25kaXRpb25zXG4gKiBAcGFyYW0ge3N0cmluZ30gZmVlbHNMaWtlVGVtcCBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdGVtcGVyYXR1cmUgdGhhdCBpdCBmZWVscyBsaWtlXG4gKiBAcmV0dXJucyBhIGRpdiBlbGVtZW50IHRoYXQgaGFzIHR3byBmdXJ0aGVyIGVsZW1lbnRzIGFwcGVuZGVkIHdpdGhpbiBpdCBkaXNwbGF5aW5nIHRoZSBvdXRkb29yIGNvbmRpdGlvbnMgYXQgdGhlIGN1cnJlbnQgbW9tZW50IGFuZCB0aGUgdGVtcGVyYXR1cmUgaXQgZmVlbHMgbGlrZVxuICovXG5mdW5jdGlvbiB0ZW1wQ29uZGl0aW9uc1NlY3Rpb24oZGVzY3JpcHRpb24sIGZlZWxzTGlrZVRlbXApIHtcbiAgICBjb25zdCB0ZW1wQ29uZGl0aW9uc0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3RlbXAtY29uZGl0aW9ucyddKTtcbiAgICBjb25zdCBmZWVsc0xpa2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGZlZWxzTGlrZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdmZWVscy1saWtlJyk7XG4gICAgZmVlbHNMaWtlSGVhZGVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGBGZWVscyBsaWtlIDxzcGFuIGNsYXNzPVwiZmVlbHMtbGlrZS10ZW1wXCI+JHtmZWVsc0xpa2VUZW1wfTwvc3Bhbj7CsDxzcGFuIGNsYXNzPVwibWV0aG9kLW9mLW1lYXN1cmVtZW50XCI+JHtpc01ldGhvZE9mTWVhc3VyZW1lbnRDZWxzaXVzKCkgPT09IHRydWUgPyAnQycgOiAnRid9PC9zcGFuPmApO1xuICAgIHRlbXBDb25kaXRpb25zQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoMycsIFsndGVtcC1kZXNjcmlwdGlvbiddLCBkZXNjcmlwdGlvbiksIGZlZWxzTGlrZUhlYWRlcik7XG4gICAgcmV0dXJuIHRlbXBDb25kaXRpb25zQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9ucyBqb2IgaXMgdG8gYXBwZW5kIHRoZSB0d28gYXJndW1lbnRzIGludG8gdGhlIHVjcnJlbnRUZW1wRGV0YWlscyBkaXYgd2hpY2ggd2lsbCB0aGVuIGJlIGRpc3BsYXllZCBvbiBzY3JlZW5cbiAqIEBwYXJhbSB7b2JqZWN0fSB0ZW1wRGV0YWlsc1NlY3Rpb24gYSBkb20gZWxlbWVudCBvYmplY3QgdGhhdCBpcyB0aGUgZmlyc3QgY2hpbGQgb2YgdGhlIGN1cnJlbnRUZW1wRGV0YWlsc0NvbnRhaW5lclxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBDb25kaXRpb25zU2VjdGlvbiBhIGRvbSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHRoZSBzZWNvbmQgY2hpbGQgb2YgdGhlIGN1cnJlbnRUZW1wRGV0YWlsc0NvbnRhaW5lclxuICogQHJldHVybnMgYSBkb20gZWxlbWVudCBvYmplY3QgY29udGFpbnMgdGhlIHR3byBhcmd1bWVudHMgcGFzc2VkIGFzIGNoaWxkcmVuXG4gKi9cbmZ1bmN0aW9uIGN1cnJlbnRUZW1wRGV0YWlsc1NlY3Rpb24odGVtcERldGFpbHNTZWN0aW9uLCB0ZW1wQ29uZGl0aW9uc1NlY3Rpb24pIHtcbiAgICBjb25zdCBjdXJyZW50VGVtcERldGFpbHNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydjdXJyZW50LXRlbXAtZGV0YWlscyddKTtcbiAgICBjdXJyZW50VGVtcERldGFpbHNDb250YWluZXIuYXBwZW5kKHRlbXBEZXRhaWxzU2VjdGlvbiwgdGVtcENvbmRpdGlvbnNTZWN0aW9uKTtcbiAgICByZXR1cm4gY3VycmVudFRlbXBEZXRhaWxzQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYXBwZW5kIGFsbCA5IGFyZ3VtZW50cyBpbnRvIHRoZSBleHRyYUluZm9ybWF0aW9uQ29udGFpbmVyIHRoYXQgd2lsbCB0aGVuIGJlIGRpc3BsYXllZCBvbnRvIHRoZSBzY3JlZW5cbiAqIEBwYXJhbSB7b2JqZWN0fSB3aW5kSW5mbyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHRoZSBET00gZWxlbWVudCBkaXNwbGF5aW5nIHdpbmQgZGlyZWN0aW9uIGFuZCBzcGVlZFxuICogQHBhcmFtIHtvYmplY3R9IGh1bWlkaXR5SW5mbyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHRoZSBET00gZWxlbWVudCBkaXNwbGF5aW5nIGh1bWlkaXR5IHBlcmNlbnRhZ2VcbiAqIEBwYXJhbSB7b2JqZWN0fSB1dkluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyB1di1pbmRleCBcbiAqIEBwYXJhbSB7b2JqZWN0fSB2aXNpYmlsaXR5SW5mbyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHRoZSBET00gZWxlbWVudCBkaXNwbGF5aW5nIHZpc2liaWxpdHkgZGlzdGFuY2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBjbG91ZGluZXNzSW5mbyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHRoZSBET00gZWxlbWVudCBkaXNwbGF5aW5nIGNsb3VkaW5lc3MgcGVyY2VudGFnZVxuICogQHBhcmFtIHtvYmplY3R9IHJhaW5JbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdGhlIERPTSBlbGVtZW50IGRpc3BsYXlpbmcgdGhlIGNoYW5jZSBvZiByYWluXG4gKiBAcGFyYW0ge29iamVjdH0gc3VucmlzZUluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyBzdW5yaXNlIHRpbWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdW5zZXRJbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdGhlIERPTSBlbGVtZW50IGRpc3BsYXlpbmcgc3Vuc2V0IHRpbWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBtb29uSW5mbyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHRoZSBET00gZWxlbWVudCBkaXNwbGF5aW5nIG1vb24tcGhhc2UgaW5mb3JtYXRpb25cbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgOSBjaGlsZHJlbiwgd2hpY2ggYXJlIGFsbCB0aGUgYXJndW1lbnRzIHRoYXQgaGF2ZSBiZWVuIHBhc3NlZFxuICovXG5mdW5jdGlvbiBleHRyYUluZm9ybWF0aW9uU2VjdGlvbih3aW5kSW5mbywgaHVtaWRpdHlJbmZvLCB1dkluZm8sIHZpc2liaWxpdHlJbmZvLCBjbG91ZGluZXNzSW5mbywgcmFpbkluZm8sIHN1bnJpc2VJbmZvLCBzdW5zZXRJbmZvLCBtb29uSW5mbykge1xuICAgIGNvbnN0IGV4dHJhSW5mb3JtYXRpb25Db250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydleHRyYS1pbmZvcm1hdGlvbiddKTtcbiAgICBleHRyYUluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZCh3aW5kSW5mbywgaHVtaWRpdHlJbmZvLCB1dkluZm8sIHZpc2liaWxpdHlJbmZvLCBjbG91ZGluZXNzSW5mbywgcmFpbkluZm8sIHN1bnJpc2VJbmZvLCBzdW5zZXRJbmZvLCBtb29uSW5mbyk7XG4gICAgcmV0dXJuIGV4dHJhSW5mb3JtYXRpb25Db250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIGluZm9ybWF0aW9uIGFib3V0IHRoZSB3aW5kXG4gKiBAcGFyYW0ge3N0cmluZ30gd2luZEFycm93Um90YXRpb24gdGhlIGRlZ3JlZXMgYnkgd2hpY2ggdGhlIGFycm93IHRoYXQgaXMgcG9pbnRlZCBub3J0aCBzaG91bGQgcm90YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gd2luZFNwZWVkIHRoZSBzcGVlZCBvZiB0aGUgd2luZFxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgd2luZCBzcGVlZCBhbmQgZGlyZWN0aW9uXG4gKi9cbmZ1bmN0aW9uIHdpbmRJbmZvcm1hdGlvbih3aW5kQXJyb3dSb3RhdGlvbiwgd2luZFNwZWVkKSB7XG4gICAgY29uc3Qgd2luZENvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3dpbmQnXSk7XG4gICAgY29uc3Qgd2luZEluZm9ybWF0aW9uQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnd2luZC1pbmZvcm1hdGlvbiddKTtcbiAgICBjb25zdCB3aW5kU3BlZWRTcGFuID0gc3BhbkdlbmVyYXRvcihbJ3dpbmQtbnVtJ10sIHdpbmRTcGVlZCk7XG4gICAgd2luZEluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZChpbWdHZW5lcmF0b3IoJy4vLi4vc3JjL2Fzc2V0cy9hcnJvdy5wbmcnLCAnQW4gYXJyb3cgcm90YXRlZCBieSB0aGUgd2luZG93IGRpcmVjdGlvbiBkZWdyZWVzJywgWyd3aW5kLWRpcmVjdGlvbiddLCB3aW5kQXJyb3dSb3RhdGlvbiksIHBhcmFncmFwaEdlbmVyYXRvcihbJ3dpbmQtc3BlZWQnXSwgJ21waCcsIHdpbmRTcGVlZFNwYW4pKTtcbiAgICB3aW5kQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnV2luZCcpLCB3aW5kSW5mb3JtYXRpb25Db250YWluZXIpO1xuICAgIHJldHVybiB3aW5kQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyB0aGUgaHVtaWRpdHkgcGVyY2VudGFnZVxuICogQHBhcmFtIHtzdHJpbmd9IGh1bWlkaXR5TnVtYmVyIHRoZSBodW1pZGl0eSBjdXJyZW50bHkgXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSBodW1pZGl0eSBwZXJjZW50YWdlXG4gKi9cbmZ1bmN0aW9uIGh1bWlkaXR5SW5mb3JtYXRpb24oaHVtaWRpdHlOdW1iZXIpIHtcbiAgICBjb25zdCBodW1pZGl0eUNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2h1bWlkaXR5J10pO1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gc3BhbkdlbmVyYXRvcihbJ2h1bWlkaXR5LW51bWJlciddLCBodW1pZGl0eU51bWJlcilcbiAgICBodW1pZGl0eUNvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ0h1bWlkaXR5JyksIHBhcmFncmFwaEdlbmVyYXRvcihbJ2h1bWlkaXR5LXBlcmNlbnRhZ2UnXSwgJyUnLCBodW1pZGl0eSkpO1xuICAgIHJldHVybiBodW1pZGl0eUNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZGl2IGVsZW1lbnQsIGFuZCBhcHBlbmRzIGEgPGg1PjwvaDU+IGFuZCA8cD48L3A+IGVsZW1lbnQgd2l0aGluIGl0IHRoYXQgZGlzcGxheXMgdGhlIHV2LWluZGV4XG4gKiBAcGFyYW0ge3N0cmluZ30gdXZJbmRleE51bWJlciB0aGUgdXYtaW5kZXggY3VycmVudGx5XG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSB1di1pbmRleFxuICovXG5mdW5jdGlvbiB1dkluZm9ybWF0aW9uKHV2SW5kZXhOdW1iZXIpIHtcbiAgICBjb25zdCB1dkNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3V2LWluZGV4J10pO1xuICAgIHV2Q29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnVVYgSW5kZXgnKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsndXYnLCBjaGVja0NhdGVnb3J5T2ZVdih1dkluZGV4TnVtYmVyKV0sIHV2SW5kZXhOdW1iZXIpKTtcbiAgICByZXR1cm4gdXZDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSB2aXNpYmlsaXR5IGRpc3RhbmNlXG4gKiBAcGFyYW0ge3N0cmluZ30gdmlzaWJpbGl0eURpc3RhbmNlIHRoZSBjdXJyZW50IHZpc2liaWxpdHkgZGlzdGFuY2VcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRpc3BsYXkgdGhlIHZpc2liaWxpdHkgZGlzdGFuY2VcbiAqL1xuZnVuY3Rpb24gdmlzaWJpbGl0eUluZm9ybWF0aW9uKHZpc2liaWxpdHlEaXN0YW5jZSkge1xuICAgIGNvbnN0IHZpc2liaWxpdHlDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd2aXNpYmlsaXR5J10pO1xuICAgIGNvbnN0IHZpc2libGl0eURpc3RhbmNlU3BhbiA9IHNwYW5HZW5lcmF0b3IoWyd2aXNpYmlsaXR5LW51bSddLCB2aXNpYmlsaXR5RGlzdGFuY2UpO1xuICAgIHZpc2liaWxpdHlDb250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2g1JywgW10sICdWaXNpYmlsaXR5JyksIHBhcmFncmFwaEdlbmVyYXRvcihbJ3Zpc2liaWxpdHktZGlzdGFuY2UnXSwgJ2ttJywgdmlzaWJsaXR5RGlzdGFuY2VTcGFuKSk7XG4gICAgcmV0dXJuIHZpc2liaWxpdHlDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSBjdXJyZW50IGNsb3VkIHBlcmNlbnRhZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbG91ZFBlcmNlbnRhZ2UgdGhlIGN1cnJlbnQgY2xvdWQgcGVyY2VudGFnZVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgY3VycmVudCBjbG91ZCBwZXJjZW50YWdlXG4gKi9cbmZ1bmN0aW9uIGNsb3VkaW5lc3NJbmZvcm1hdGlvbihjbG91ZFBlcmNlbnRhZ2UpIHtcbiAgICBjb25zdCBjbG91ZGluZXNzQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnY2xvdWRpbmVzcyddKTtcbiAgICBjb25zdCBjbG91ZGluZXNzUGVyY2VudGFnZVNwYW4gPSBzcGFuR2VuZXJhdG9yKFsnY2xvdWRpbmVzcy1udW0nXSwgY2xvdWRQZXJjZW50YWdlKTtcbiAgICBjbG91ZGluZXNzQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnQ2xvdWRpbmVzcycpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydjbG91ZGluZXNzLXBlcmNlbnRhZ2UnXSwgJyUnLCBjbG91ZGluZXNzUGVyY2VudGFnZVNwYW4pKTtcbiAgICByZXR1cm4gY2xvdWRpbmVzc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZGl2IGVsZW1lbnQsIGFuZCBhcHBlbmRzIGEgPGg1PjwvaDU+IGFuZCA8cD48L3A+IGVsZW1lbnQgd2l0aGluIGl0IHRoYXQgZGlzcGxheXMgdGhlIGN1cnJlbnQgcmFpbiBwZXJjZW50YWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gcmFpblBlcmNlbnRhZ2UgdGhlIGN1cnJlbnQgcmFpbiBwZXJjZW50YWdlXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSBjdXJyZW50IHJhaW4gcGVyY2VudGFnZVxuICovXG5mdW5jdGlvbiByYWluSW5mb3JtYXRpb24ocmFpblBlcmNlbnRhZ2UpIHtcbiAgICBjb25zdCByYWluQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnY2hhbmNlLW9mLXJhaW4nXSk7XG4gICAgY29uc3QgcmFpblBlcmNlbnRhZ2VTcGFuID0gc3BhbkdlbmVyYXRvcihbJ2NoYW5jZS1vZi1yYWluLW51bSddLCByYWluUGVyY2VudGFnZSk7XG4gICAgcmFpbkNvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ0NoYW5jZSBvZiBSYWluJyksIHBhcmFncmFwaEdlbmVyYXRvcihbJ2NoYW5jZS1vZi1yYWluLXBlcmNlbnRhZ2UnXSwgJyUnLCByYWluUGVyY2VudGFnZVNwYW4pKTtcbiAgICByZXR1cm4gcmFpbkNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZGl2IGVsZW1lbnQsIGFuZCBhcHBlbmRzIGEgPGg1PjwvaDU+IGFuZCA8cD48L3A+IGVsZW1lbnQgd2l0aGluIGl0IHRoYXQgZGlzcGxheXMgdGhlIHN1bnJpc2UgdGltZVxuICogQHBhcmFtIHtzdHJpbmd9IHN1bnJpc2VUaW1lIHRoZSBzdW5yaXNlIHRpbWUgZm9yIHRoZSBkYXlcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRpc3BsYXkgdGhlIHN1bnJpc2UgdGltZVxuICovXG5mdW5jdGlvbiBzdW5yaXNlSW5mb3JtYXRpb24oc3VucmlzZVRpbWUpIHtcbiAgICBjb25zdCBzdW5yaXNlQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnc3VucmlzZSddKTtcbiAgICBzdW5yaXNlQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnU3VucmlzZScpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydzdW5yaXNlLXRpbWUnXSwgc3VucmlzZVRpbWUpKTtcbiAgICByZXR1cm4gc3VucmlzZUNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZGl2IGVsZW1lbnQsIGFuZCBhcHBlbmRzIGEgPGg1PjwvaDU+IGFuZCA8cD48L3A+IGVsZW1lbnQgd2l0aGluIGl0IHRoYXQgZGlzcGxheXMgdGhlIHN1bnNldCB0aW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gc3Vuc2V0VGltZSB0aGUgc3Vuc2V0IHRpbWUgZm9yIHRoZSBkYXlcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRpc3BsYXkgdGhlIHN1bnNldCB0aW1lXG4gKi9cbmZ1bmN0aW9uIHN1bnNldEluZm9ybWF0aW9uKHN1bnNldFRpbWUpIHtcbiAgICBjb25zdCBzdW5zZXRDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydzdW5zZXQnXSk7XG4gICAgc3Vuc2V0Q29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnU3Vuc2V0JyksIHBhcmFncmFwaEdlbmVyYXRvcihbJ3N1bnNldC10aW1lJ10sIHN1bnNldFRpbWUpKTtcbiAgICByZXR1cm4gc3Vuc2V0Q29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyB0aGUgY3VycmVudCBtb29uIHBoYXNlXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9vblBoYXNlIHRoZSBjdXJyZW50IG1vb24gcGhhc2VcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRpc3BsYXkgdGhlIGN1cnJlbnQgbW9vbiBwaGFzZVxuICovXG5mdW5jdGlvbiBtb29uSW5mb3JtYXRpb24obW9vblBoYXNlKSB7XG4gICAgY29uc3QgbW9vbnBoYXNlQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnbW9vbi1waGFzZSddKTtcbiAgICBtb29ucGhhc2VDb250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2g1JywgW10sICdNb29uIFBoYXNlJyksIHBhcmFncmFwaEdlbmVyYXRvcihbJ3BoYXNlJ10sIG1vb25QaGFzZSkpO1xuICAgIHJldHVybiBtb29ucGhhc2VDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdG8gYmUgdXNlZCB3aGVuIHRoZSB3ZWJwYWdlIGlzIGxvYWRlZCB1cCBhbmQgaXQgZmlsbHMgdGhlIHdlYnBhZ2Ugd2l0aCB0aGUgcmVxdWlyZWQgaW5mb3JtYXRpb24gd2l0aCB0aGUgZGVmYXVsdCBjaXR5IGJlaW5nIGxvbmRvblxuICovXG5hc3luYyBmdW5jdGlvbiBvbkxvYWREZWZhdWx0V2VhdGhlcigpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kMjZhOGE5MDc1MmY0NWMyYTAzMTU0OTA3MjMwNTA1JnE9bG9uZG9uJmRheXM9NyZhcWk9bm8mYWxlcnRzPW5vJywgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgbG9uZG9uSW5mbyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjdXJyZW50RGF5SW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kKGRpc3BsYXlMb2NhdGlvbkRldGFpbHMocmV0cmlldmVDaXR5KGxvbmRvbkluZm8pLCByZXRyaWV2ZUNvdW50cnkobG9uZG9uSW5mbyksIGNyZWF0ZVN0YW5kYXJkRGF0ZShyZXRyaWV2ZURhdGVBbmRUaW1lQXJyKGxvbmRvbkluZm8pWzBdKSwgY3JlYXRlU3RhbmRhcmRUaW1lKHJldHJpZXZlRGF0ZUFuZFRpbWVBcnIobG9uZG9uSW5mbylbMV0pKSk7XG4gICAgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZChjdXJyZW50VGVtcERldGFpbHNTZWN0aW9uKHRlbXBEZXRhaWxzU2VjdGlvbihyZXRyaWV2ZUN1cnJlbnRUZW1wSW1nKGxvbmRvbkluZm8pLCByZXRyaWV2ZUN1cnJlbnRUZW1wKGxvbmRvbkluZm8pKSwgdGVtcENvbmRpdGlvbnNTZWN0aW9uKHJldHJpZXZlQ3VycmVudENvbmRpdGlvbihsb25kb25JbmZvKSwgcmV0cmlldmVGZWVsc0xpa2VUZW1wKGxvbmRvbkluZm8pKSkpO1xuICAgIGN1cnJlbnREYXlJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQoZXh0cmFJbmZvcm1hdGlvblNlY3Rpb24od2luZEluZm9ybWF0aW9uKHJldHJpZXZlV2luZERlZ3JlZXMobG9uZG9uSW5mbyksIHJldHJpZXZlV2luZFNwZWVkKGxvbmRvbkluZm8pKSwgaHVtaWRpdHlJbmZvcm1hdGlvbihyZXRyaWV2ZUh1bWlkaXR5KGxvbmRvbkluZm8pKSxcbiAgICAgICAgdXZJbmZvcm1hdGlvbihyZXRyaWV2ZVV2TnVtKGxvbmRvbkluZm8pKSwgdmlzaWJpbGl0eUluZm9ybWF0aW9uKHJldHJpZXZlVmlzaWJpbGl0eURpc3RhbmNlKGxvbmRvbkluZm8pKSwgY2xvdWRpbmVzc0luZm9ybWF0aW9uKHJldHJpZXZlQ2xvdWRpbmVzc1BlcmNlbnRhZ2UobG9uZG9uSW5mbykpLCByYWluSW5mb3JtYXRpb24ocmV0cmlldmVDaGFuY2VPZlJhaW4obG9uZG9uSW5mbykpLFxuICAgICAgICBzdW5yaXNlSW5mb3JtYXRpb24ocmV0cmlldmVTdW5yaXNlVGltZShsb25kb25JbmZvKSksIHN1bnNldEluZm9ybWF0aW9uKHJldHJpZXZlU3Vuc2V0VGltZShsb25kb25JbmZvKSksIG1vb25JbmZvcm1hdGlvbihyZXRyaWV2ZU1vb25QaGFzZShsb25kb25JbmZvKSkpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHktaG91cmx5LXdlYXRoZXItY2Fyb3VzZWwnKS5hcHBlbmQoZGFpbHlXZWF0aGVyU2VjdGlvbihjcmVhdGVBbGxEYXlzVG9EaXNwbGF5KGxvbmRvbkluZm8pKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5LWhvdXJseS13ZWF0aGVyLWNhcm91c2VsJykuYXBwZW5kKGhvdXJseVdlYXRoZXIoY3JlYXRlQW5BcnJheU9mQWxsSG91cnMobG9uZG9uSW5mbykpKTtcbn07XG5cbmV4cG9ydCB7IGN1cnJlbnREYXlJbmZvcm1hdGlvbkNvbnRhaW5lciwgb25Mb2FkRGVmYXVsdFdlYXRoZXIgfTsiLCIvKipcbiAqIHRoaXMgZnVuY3Rpb24gdGFrZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyBhbmQgYWRkcyB0aG9zZSBjbGFzc2VzIHRvIHRoZSBlbGVtZW50IHVzaW5nIGEgZm9yRWFjaCBsb29wXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZWxlbWVudCB0aGUgZWxlbWVudCB0aGF0IHdlIG5lZWQgdG8gYWRkIHRoZSBjbGFzc2VzIHRvIFxuICovXG5mdW5jdGlvbiBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIGVsZW1lbnQpIHtcbiAgICBjbGFzc2VzLmZvckVhY2goaW5kaXZpZHVhbENsYXNzID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChpbmRpdmlkdWFsQ2xhc3MpKTtcbn07XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgYSBkaXYgZWxlbWVudCB3aXRoIGl0cyBjbGFzc2VzIHByb3ZpZGVkIGFzIGFuIGFyZ3VtZW50XG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBkaXZcbiAqIEByZXR1cm5zIGEgZGl2IERPTSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGRpdkdlbmVyYXRvcihjbGFzc2VzKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkQ2xhc3Nlc1RvRWxlbWVudChjbGFzc2VzLCBkaXYpXG4gICAgcmV0dXJuIGRpdjtcbn07XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgYW4gaW1nIGVsZW1lbnQsIHdpdGggdGhlIHNwZWNpZmllZCwgc3JjLCBhbHQgYW5kIGNsYXNzZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgdGhlIHBhdGggdG8gdGhlIGltYWdlIHdlIHdhbnQgdG8gdXNlXG4gKiBAcGFyYW0ge3N0cmluZ30gYWx0IHRoZSBhbHQgZGVzY3JpcHRpb24gb2YgdGhlIGltZyBpbmNhc2UgaXQgZG9lc24ndCBsb2FkXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBpbWdcbiAqIEByZXR1cm5zIGFuIGltZyBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGltZ0dlbmVyYXRvcihzcmMsIGFsdCA9ICcnLCBjbGFzc2VzLCByb3RhdGlvbiA9IDApIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICAgIGltZy5hbHQgPSBhbHQ7XG4gICAgYWRkQ2xhc3Nlc1RvRWxlbWVudChjbGFzc2VzLCBpbWcpO1xuICAgIGltZy5zdHlsZS5yb3RhdGUgPSBgJHtyb3RhdGlvbn1kZWdgXG4gICAgcmV0dXJuIGltZztcbn07XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgYSBoZWFkaW5nIG9mIHRoZSBkZXNpcmVkIHNpemUsIGFuZCBhZGRzIHRoZSB0ZXh0IHNwZWNpZmllZCBhcyB3ZWxsIGFzIHRoZSBjbGFzc2VzIHByb3ZpZGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gaGVhZGluZ1NpemUgMSBvZiA2IHNpemVzIHdlIHdhbnQgdGhlIGhlYWRpbmcgdG8gYmUgZS5nLiAnaDEnXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBoZWFkaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCB0aGUgdGV4dCB0aGUgaGVhZGluZyBuZWVkcyB0byBkaXNwbGF5IFxuICogQHBhcmFtIHtvYmplY3R9IHNwYW5FbGVtZW50UHJlcHBlbmQgYSBkb20gZWxlbWVudCB0aGF0IHdlIHdhbnQgdG8gYWRkIGJlZm9yZSB0aGUgdGV4dCBwYXJ0IG9mIHRoZSBoZWFkaW5nXG4gKiBAcGFyYW0ge29iamVjdH0gc3BhbkVsZW1lbnRBcHBlbmQgYSBkb20gZWxlbWVudCB0aGF0IHdlIHdhbnQgdG8gYWRkIGFmdGVyIHRoZSB0ZXh0IHBhcnQgb2YgdGhlIGhlYWRpbmdcbiAqIEByZXR1cm5zIGEgaGVhZGluZyBET00gZWxlbWVudFxuICovXG5mdW5jdGlvbiBoZWFkaW5nR2VuZXJhdG9yKGhlYWRpbmdTaXplLCBjbGFzc2VzLCB0ZXh0LCBzcGFuRWxlbWVudFByZXBwZW5kID0gJycsIHNwYW5FbGVtZW50QXBwZW5kID0gJycpIHtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChoZWFkaW5nU2l6ZSk7XG4gICAgaGVhZGluZy5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIGhlYWRpbmcucHJlcGVuZChzcGFuRWxlbWVudFByZXBwZW5kKVxuICAgIGhlYWRpbmcuYXBwZW5kKHNwYW5FbGVtZW50QXBwZW5kKVxuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgaGVhZGluZyk7XG4gICAgcmV0dXJuIGhlYWRpbmc7XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGEgYnV0dG9uIHdpdGggdGhlIGNsYXNzZXMgYW5kIHRleHQgcHJvdmlkZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGhlYWRpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IG5lZWRlZCB3aXRoaW4gdGhlIGJ1dHRvbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCB0aGUgaWQgd2Ugd2FudCB0byBhc3NpZ24gdG8gdGhlIGJ1dHRvblxuICogQHBhcmFtIHtvYmplY3R9IHNwYW5FbGVtZW50UHJlcHBlbmQgYSBkb20gZWxlbWVudCB0aGF0IHdlIHdhbnQgdG8gYWRkIGJlZm9yZSB0aGUgdGV4dCBwYXJ0IG9mIHRoZSBidXR0b25cbiAqIEBwYXJhbSB7b2JqZWN0fSBzcGFuRWxlbWVudEFwcGVuZCBhIGRvbSBlbGVtZW50IHRoYXQgd2Ugd2FudCB0byBhZGQgYWZ0ZXIgdGhlIHRleHQgcGFydCBvZiB0aGUgYnV0dG9uXG4gKiBAcmV0dXJucyBhIGJ1dHRvbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGJ1dHRvbkdlbmVyYXRvcihjbGFzc2VzLCB0ZXh0LCBpZCA9ICcnLCBzcGFuRWxlbWVudFByZXBwZW5kID0gJycsIHNwYW5FbGVtZW50QXBwZW5kID0gJycpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIGJ0bik7XG4gICAgYnRuLmlubmVySFRNTCA9IHRleHQ7XG4gICAgYnRuLmlkID0gaWQ7XG4gICAgYnRuLnByZXBlbmQoc3BhbkVsZW1lbnRQcmVwcGVuZCk7XG4gICAgYnRuLmFwcGVuZChzcGFuRWxlbWVudEFwcGVuZCk7XG4gICAgcmV0dXJuIGJ0bjtcbn07XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgYSBzcGFuIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3NlcyBhbmQgdGV4dCBwcm92aWRlZFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgaGVhZGluZ1xuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgdGhlIHRleHQgbmVlZGVkIHdpdGhpbiB0aGUgc3BhbiBcbiAqIEByZXR1cm5zIGEgc3BhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNwYW5HZW5lcmF0b3IoY2xhc3NlcywgdGV4dCkge1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWRkQ2xhc3Nlc1RvRWxlbWVudChjbGFzc2VzLCBzcGFuKTtcbiAgICBzcGFuLmlubmVySFRNTCA9IHRleHQ7XG4gICAgcmV0dXJuIHNwYW47XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGEgZm9ybSBlbGVtZW50IHdpdGggdGhlIGNsYXNzZXMgcHJvdmlkZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGZvcm1cbiAqIEByZXR1cm5zIGEgZm9ybSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGZvcm1HZW5lcmF0b3IoY2xhc3Nlcykge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgYWRkQ2xhc3Nlc1RvRWxlbWVudChjbGFzc2VzLCBmb3JtKTtcbiAgICByZXR1cm4gZm9ybTtcbn07XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgYW4gaW5wdXQgZWxlbWVudCBhbmQgYWRkcyB0aGUgc3BlY2lmaWVkIGF0dHJpYnV0ZXMgYW5kIHZhbHVlcyB0byBpdFxuICogQHBhcmFtIHtBcnJheX0gYXR0cmlidXRlcyBhbiBhcnJheSBvZiBhcnJheXMgd2hlcmUgZWFjaCBlbGVtZW50IGhhcyB0aGUgYXR0cmlidXRlLCBhbmQgaXQncyBhc3NvY2lhdGVkIHZhbHVlIFxuICogQHJldHVybnMgYW4gaW5wdXQgZWxlbWVudFxuICovXG5mdW5jdGlvbiBpbnB1dEdlbmVyYXRvcihhdHRyaWJ1dGVzKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHRyaWJ1dGUgPT4gaW5wdXQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZVswXSwgYXR0cmlidXRlWzFdKSk7XG4gICAgcmV0dXJuIGlucHV0O1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBwYXJhZ3JhcGggZWxlbWVudCBhbmQgZmlsbHMgaXQgd2l0aCB0aGUgYXJndW1lbnRzIHByb3ZpZGVkXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBmb3JtXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCB0aGUgdGV4dCBuZWVkZWQgd2l0aGluIHRoZSA8cD48L3A+IFxuICogQHBhcmFtIHtvYmplY3R9IHNwYW5FbGVtZW50UHJlcHBlbmQgYSBkb20gZWxlbWVudCB0aGF0IHdlIHdhbnQgdG8gYWRkIGJlZm9yZSB0aGUgdGV4dCBwYXJ0IG9mIHRoZSBwYXJhZ3JhcGhcbiAqIEBwYXJhbSB7b2JqZWN0fSBzcGFuRWxlbWVudEFwcGVuZCBhIGRvbSBlbGVtZW50IHRoYXQgd2Ugd2FudCB0byBhZGQgYWZ0ZXIgdGhlIHRleHQgcGFydCBvZiB0aGUgcGFyYWdyYXBoXG4gKiBAcmV0dXJucyBhIDxwPjwvcD4gZWxlbWVudCB0aGF0IGlzIGN1c3RvbWlzZWQgYXMgc3BlY2lmaWVkXG4gKi9cbmZ1bmN0aW9uIHBhcmFncmFwaEdlbmVyYXRvcihjbGFzc2VzLCB0ZXh0LCBzcGFuRWxlbWVudFByZXBwZW5kID0gJycsIHNwYW5FbGVtZW50QXBwZW5kID0gJycpIHtcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkQ2xhc3Nlc1RvRWxlbWVudChjbGFzc2VzLCBwYXJhZ3JhcGgpO1xuICAgIHBhcmFncmFwaC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIHBhcmFncmFwaC5wcmVwZW5kKHNwYW5FbGVtZW50UHJlcHBlbmQpXG4gICAgcGFyYWdyYXBoLmFwcGVuZChzcGFuRWxlbWVudEFwcGVuZClcbiAgICByZXR1cm4gcGFyYWdyYXBoO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gaGVscCBjaG9vc2UgdGhlIGNvcnJlY3QgY2xhc3MgYmFzZWQgb24gdGhlIHV2LWluZGV4IG51bWJlciBwcm92aWRlZFxuICogQHBhcmFtIHtudW1iZXJ9IHV2TnVtIHRoZSBudW1iZXIgdGhhdCB3ZSB3YW50IHRvIGNoZWNrIHdoZXRoZXIgb3Igbm90IGl0J3MgdmFsdWUgaXMgYSBzYWZlLCBhbWJlciBvciBkYW5nZXIgdmFsdWUgXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGNsYXNzaWZpZXMgdGhlIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrQ2F0ZWdvcnlPZlV2KHV2TnVtKSB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgdXZOdW0gPD0gMjpcbiAgICAgICAgICAgIHJldHVybiAnc2FmZSc7XG4gICAgICAgIGNhc2UgdXZOdW0gPD0gNzpcbiAgICAgICAgICAgIHJldHVybiAnYW1iZXInO1xuICAgICAgICBjYXNlIHV2TnVtID49IDg6XG4gICAgICAgICAgICByZXR1cm4gJ2Rhbmdlcic7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgZGl2R2VuZXJhdG9yLCBpbWdHZW5lcmF0b3IsIGhlYWRpbmdHZW5lcmF0b3IsIGJ1dHRvbkdlbmVyYXRvciwgc3BhbkdlbmVyYXRvciwgaW5wdXRHZW5lcmF0b3IsIGZvcm1HZW5lcmF0b3IsIGNoZWNrQ2F0ZWdvcnlPZlV2LCBwYXJhZ3JhcGhHZW5lcmF0b3IgfSIsImltcG9ydCB7IGRpdkdlbmVyYXRvciwgaW1nR2VuZXJhdG9yLCBoZWFkaW5nR2VuZXJhdG9yLCBzcGFuR2VuZXJhdG9yLCBpbnB1dEdlbmVyYXRvciwgYnV0dG9uR2VuZXJhdG9yLCBmb3JtR2VuZXJhdG9yIH0gZnJvbSBcIi4vZ2VuZXJhdG9yRnVuY3Rpb25zXCI7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIHRoZSB0aXRsZSBzZWN0aW9uIG9mIHRoZSBoZWFkZXJcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIHRpdGxlIGFuZCB0aGUgcGFnZSBsb2dvXG4gKi9cbmZ1bmN0aW9uIHRpdGxlU2VjdGlvbigpIHtcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3RpdGxlJ10pO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZChpbWdHZW5lcmF0b3IoJy4vLi4vc3JjL2Fzc2V0cy9wYWdlLWljb24ucG5nJywgJ2EgY2lyY3VsYXIgaWNvbiBkZXBpY3RpbmcgYWxsIDQgc2Vhc29ucycsIFsnbWFpbi1pY29uJ10pLCBoZWFkaW5nR2VuZXJhdG9yKCdoMScsIFsncGFnZS10aXRsZSddLCAnV2VhdGhlcicsIHVuZGVmaW5lZCwgc3BhbkdlbmVyYXRvcihbJ3RpdGxlLWVuZCddLCAnV2F0Y2gnKSkpO1xuICAgIHJldHVybiB0aXRsZUNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIHRoZSBzZWFyY2ggYmFyIHNlY3Rpb24gb2YgdGhlIGhlYWRlclxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgc2VhcmNoIGJhclxuICovXG5mdW5jdGlvbiBoZWFkZXJGb3JtU2VjdGlvbigpIHtcbiAgICBjb25zdCBmb3JtID0gZm9ybUdlbmVyYXRvcihbJ3NlYXJjaC1mb3JtJ10pO1xuICAgIGZvcm0uYXBwZW5kKGlucHV0R2VuZXJhdG9yKFtbJ3R5cGUnLCAnc2VhcmNoJ10sIFsnaWQnLCAnc2VhcmNoLWJhciddLCBbJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaCBhIGxvY2F0aW9uJ10sIFsncmVxdWlyZWQnLCB0cnVlXV0pLCBpbWdHZW5lcmF0b3IoJy4vLi4vc3JjL2Fzc2V0cy9zZWFyY2gtaWNvbi5zdmcnLCAnQSBtYWduaWZ5aW5nIGdsYXNzJywgWydzZWFyY2gtYnV0dG9uJ10pKTtcbiAgICByZXR1cm4gZm9ybTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIHRoZSBidXR0b25zIHVzZWQgdG8gY29udHJvbCB3aGV0aGVyIHRoZSB0ZW1wZXJhdHVyZSBpcyBkaXNwbGF5ZWQgaW4gY2Vsc2l1cyBvciBmYWhyZW5oZWl0XG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIHR3byBidXR0b25zXG4gKi9cbmZ1bmN0aW9uIGhlYWRlckJ1dHRvbnMoKSB7XG4gICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2NoYW5nZS1kZWdyZWVzJ10pO1xuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGJ1dHRvbkdlbmVyYXRvcihbJ2NlbHNpdXMtYnRuJywgJ2J0bicsICdhY3RpdmUnXSwgJ8KwQycpLCBidXR0b25HZW5lcmF0b3IoWydmYWhyZW5oZWl0LWJ0bicsICdidG4nXSwgJ8KwRicpKTtcbiAgICByZXR1cm4gYnV0dG9uc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgaGVhZGVyIHdpdGggYWxsIG9mIGl0cyBjb250ZW50XG4gKiBAcmV0dXJucyBBIERPTSBlbGVtZW50IG9iamVjdCB0aGUgY29udGFpbnMgZXZlcnl0aGluZyBuZWVkZWQgaW4gdGhlIGhlYWRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5hcHBlbmQodGl0bGVTZWN0aW9uKCksIGhlYWRlckZvcm1TZWN0aW9uKCksIGhlYWRlckJ1dHRvbnMoKSk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbiIsImltcG9ydCB7IGRpdkdlbmVyYXRvciwgaGVhZGluZ0dlbmVyYXRvciwgaW1nR2VuZXJhdG9yLCBwYXJhZ3JhcGhHZW5lcmF0b3IsIHNwYW5HZW5lcmF0b3IgfSBmcm9tIFwiLi9nZW5lcmF0b3JGdW5jdGlvbnNcIjtcbmltcG9ydCB7IGdldEhvdXJUZW1wRGVzY3JpcHRpb24sIGdldEhvdXJUZW1wSWNvbiwgZ2V0SG91clRpbWUsIGdldEhvdXJUZW1wIH0gZnJvbSBcIi4vcmV0cmlldmVJbmZvcm1hdGlvblwiO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYXBwZW5kcyB0aGUgaG91ciBjb250YWlucyBvbnRvIHRoZSBob3VybHktd2VhdGhlci1jb250YWluZXIgZGl2IHNvIHRoYXQgaXQgY2FuIGJlIGRpc3BsYXllZCBvbiBzY3JlZW4gXG4gKiBAcGFyYW0ge2FycmF5fSBob3VyQ29udGFpbmVycyBhbiBhcnJheSBvZiBob3VyQ29udGFpbmVycywgdGhlIGFycmF5IHNob3VsZCBjb250YWluIDQgZWxlbWVudHNcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgdGhlIGhvdXJseS13ZWF0aGVyLWNvbnRhaW5lciBhbmQgY29udGFpbnMgYWxsIGhvdXJseSB3ZWF0aGVyIHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkXG4gKi9cbmZ1bmN0aW9uIGhvdXJseVdlYXRoZXIoaG91ckNvbnRhaW5lcnMpIHtcbiAgICBjb25zdCBob3VybHlXZWF0aGVyQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnaG91cmx5LXdlYXRoZXItY29udGFpbmVyJywgJ2hpZGUnXSk7XG4gICAgaG91cmx5V2VhdGhlckNvbnRhaW5lci5hcHBlbmQoLi4uaG91ckNvbnRhaW5lcnMpO1xuICAgIHJldHVybiBob3VybHlXZWF0aGVyQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhbiBob3VyLWNvbnRhaW5lciBkaXYsIGFuZCBzdG9yZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHdlYXRoZXIgaW4gZWFjaCBob3VyIG9uIGl0XG4gKiBAcGFyYW0ge251bWJlcn0gY29udGFpbmVyTnVtIHRoZSBudW1iZXIgb2YgdGhlIGNvbnRhaW5lciBlLmcuIG51bWJlciAwIGhvbGRzIGhvdXJzIDAtNVxuICogQHBhcmFtIHthcnJheX0gaG91cnNVbmRlckNvbnRhaW5lciBhbiBhcnJheSBvZiBpbmRpdmlkdWFsIGhvdXJzIHRoYXQgc2hvdWxkIGJlIHN0b3JlZCB1bmRlciB0aGUgY29udGFpbmVyIHRoYXQgd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBoYXMgNiBlbGVtZW50cyBhcyBjaGlsZHJlblxuICovXG5mdW5jdGlvbiBncm91cE9mSG91cnNDb250YWluZXIoY29udGFpbmVyTnVtLCBob3Vyc1VuZGVyQ29udGFpbmVyKSB7XG4gICAgY29uc3QgaG91ckNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbYGhvdXItY29udGFpbmVyLSR7Y29udGFpbmVyTnVtfWAsICdob3VyLWNvbnRhaW5lcicsIGAke2NvbnRhaW5lck51bSA9PT0gMCA/ICdzaG93bicgOiAnaGlkZSd9YF0pO1xuICAgIGhvdXJDb250YWluZXIuYXBwZW5kKC4uLmhvdXJzVW5kZXJDb250YWluZXIpO1xuICAgIHJldHVybiBob3VyQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9ucyB0YWtlcyBpbiBhbGwgdGhlIHBhcmFtZXRlcnMgcmVxdWlyZWQgdG8gY3JlYXRlIGEgZGl2IHRoYXQgc2hvd3MgdGhlIHdlYXRoZXIgZGV0YWlscyBmb3IgYSBzcGVjaWZpZWQgaG91clxuICogQHBhcmFtIHtudW1iZXJ9IGhvdXJOdW0gdGhpcyBpcyBhIG51bWJlciBiZXR3ZWVuIDAtMjMgc2hvd2luZyB3aGljaCBob3VyIHRoZSBjb250YWluZXIgaXMgZm9yXG4gKiBAcGFyYW0ge3N0cmluZ30gdGltZVRvRGlzcGxheSB0aGUgdGltZSB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZCBvbiBzY3JlZW4gXG4gKiBAcGFyYW0ge29iamVjdH0gdGVtcFRvRGlzcGxheSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgd2VhdGhlciBkdXJpbmcgdGhhdCBob3VyXG4gKiBAcGFyYW0ge3N0cmluZ30gaW1nVG9EaXNwbGF5IGEgcGF0aCB0byB0aGUgaW1hZ2UgdGhlIGNvcnJlc3BvbmRzIHdpdGggdGhlIHdlYXRoZXIgYXQgdGhhdCBob3VyXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgaW5mb3JtYXRpb24gcmVxdWlyZWQgdG8gcmVwcmVzZW50IHRoZSB3ZWF0aGVyIGR1cmluZyB0aGUgaG91clxuICovXG5mdW5jdGlvbiBpbmRpdmlkdWFsSG91ckNvbnRhaW5lcihob3VyTnVtLCB0aW1lVG9EaXNwbGF5LCB0ZW1wVG9EaXNwbGF5LCBpbWdUb0Rpc3BsYXkpIHtcbiAgICBjb25zdCBob3VyQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnaG91cmx5LXdlYXRoZXInLCBgaG91ci0ke2hvdXJOdW19YF0pO1xuICAgIGhvdXJDb250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2gyJywgW10sIHRpbWVUb0Rpc3BsYXkpLCB0ZW1wVG9EaXNwbGF5LCBpbWdHZW5lcmF0b3IoaW1nVG9EaXNwbGF5LCAnJywgWydob3VybHktd2VhdGhlci1pY29uJ10pKTtcbiAgICByZXR1cm4gaG91ckNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbnMgZ3JvdXBzIHRoZSB0ZW1wZXJhdHVyZSBhbmQgYSBkZXNjcmlwdGlvbiBhYm91dCB0aGUgd2VhdGhlciBpbnRvIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wIHRoZSB0ZW1wZXJhdHVyZSBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wRGVzY3JpcHRpb24gYSBkZXNjcmlwdGlvbiBhYm91dCB0aGUgd2VhdGhlclxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBtYWtlcyB1cCB0aGUgdGVtcGVyYXR1cmUgaW5mb3JtYXRpb24gYWJvdXQgYSBjZXJ0YWluIGhvdXJcbiAqL1xuZnVuY3Rpb24gaG91cldlYXRoZXJEZXRhaWxzKHRlbXAsIHRlbXBEZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IHdlYXRoZXJEZXRhaWxzQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnaG91ci13ZWF0aGVyLWRlc2NyaXB0aW9uJ10pO1xuICAgIGNvbnN0IHRlbXBTcGFuID0gc3BhbkdlbmVyYXRvcihbJ2hvdXItd2VhdGhlciddLCB0ZW1wKTtcbiAgICBjb25zdCB3ZWF0aGVyU3ltYm9sID0gc3BhbkdlbmVyYXRvcihbJ21ldGhvZC1vZi1tZWFzdXJlbWVudCddLCAnQycpO1xuICAgIHdlYXRoZXJEZXRhaWxzQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoMycsIFtdLCAnwrAnLCB0ZW1wU3Bhbiwgd2VhdGhlclN5bWJvbCksIHBhcmFncmFwaEdlbmVyYXRvcihbJ2hvdXItZGVzY3JpcHRpb24nXSwgdGVtcERlc2NyaXB0aW9uKSk7XG4gICAgcmV0dXJuIHdlYXRoZXJEZXRhaWxzQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHNvcnRzIGVhY2ggaG91ciBjcmVhdGVzIGFuZCBzb3J0cyBlYWNoIGhvdXIgaW50byB0aGUgY29ycmVjdCBjb250YWluZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIHdpbGwgYmUgZ2V0dGluZyBpbmZvcm1hdGlvbiBmcm9tIFxuICogQHJldHVybnMgYW4gYXJyYXkgdGhhdCBjb250YWlucyA0IGRpdiBlbGVtZW50cywgZWFjaCBkaXYgaGFzIGluZm9ybWF0aW9uIGFib3V0IHRoZSB3ZWF0aGVyIGR1cmluZyBhIGNlcnRhaW4gaG91clxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5BcnJheU9mQWxsSG91cnMob2JqKSB7XG4gICAgY29uc3QgY29udGFpbmVyT25lID0gW107XG4gICAgY29uc3QgY29udGFpbmVyVHdvID0gW107XG4gICAgY29uc3QgY29udGFpbmVyVGhyZWUgPSBbXTtcbiAgICBjb25zdCBjb250YWluZXJGb3VyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgIGlmIChpIDw9IDUpIGNvbnRhaW5lck9uZS5wdXNoKGluZGl2aWR1YWxIb3VyQ29udGFpbmVyKGksIGdldEhvdXJUaW1lKGksIG9iaiksIGhvdXJXZWF0aGVyRGV0YWlscyhnZXRIb3VyVGVtcChpLCBvYmopLCBnZXRIb3VyVGVtcERlc2NyaXB0aW9uKGksIG9iaikpLCBnZXRIb3VyVGVtcEljb24oaSwgb2JqKSkpO1xuICAgICAgICBlbHNlIGlmIChpIDw9IDExKSBjb250YWluZXJUd28ucHVzaChpbmRpdmlkdWFsSG91ckNvbnRhaW5lcihpLCBnZXRIb3VyVGltZShpLCBvYmopLCBob3VyV2VhdGhlckRldGFpbHMoZ2V0SG91clRlbXAoaSwgb2JqKSwgZ2V0SG91clRlbXBEZXNjcmlwdGlvbihpLCBvYmopKSwgZ2V0SG91clRlbXBJY29uKGksIG9iaikpKTtcbiAgICAgICAgZWxzZSBpZiAoaSA8PSAxNykgY29udGFpbmVyVGhyZWUucHVzaChpbmRpdmlkdWFsSG91ckNvbnRhaW5lcihpLCBnZXRIb3VyVGltZShpLCBvYmopLCBob3VyV2VhdGhlckRldGFpbHMoZ2V0SG91clRlbXAoaSwgb2JqKSwgZ2V0SG91clRlbXBEZXNjcmlwdGlvbihpLCBvYmopKSwgZ2V0SG91clRlbXBJY29uKGksIG9iaikpKTtcbiAgICAgICAgZWxzZSBpZiAoaSA8PSAyMykgY29udGFpbmVyRm91ci5wdXNoKGluZGl2aWR1YWxIb3VyQ29udGFpbmVyKGksIGdldEhvdXJUaW1lKGksIG9iaiksIGhvdXJXZWF0aGVyRGV0YWlscyhnZXRIb3VyVGVtcChpLCBvYmopLCBnZXRIb3VyVGVtcERlc2NyaXB0aW9uKGksIG9iaikpLCBnZXRIb3VyVGVtcEljb24oaSwgb2JqKSkpO1xuICAgIH07XG4gICAgY29uc3QgZnVsbEhvdXJzQXJyID0gW2dyb3VwT2ZIb3Vyc0NvbnRhaW5lcigwLCBjb250YWluZXJPbmUpLCBncm91cE9mSG91cnNDb250YWluZXIoMSwgY29udGFpbmVyVHdvKSwgZ3JvdXBPZkhvdXJzQ29udGFpbmVyKDIsIGNvbnRhaW5lclRocmVlKSwgZ3JvdXBPZkhvdXJzQ29udGFpbmVyKDMsIGNvbnRhaW5lckZvdXIpXTtcbiAgICByZXR1cm4gZnVsbEhvdXJzQXJyO1xufTtcblxuZXhwb3J0IHsgaG91cmx5V2VhdGhlciwgZ3JvdXBPZkhvdXJzQ29udGFpbmVyLCBpbmRpdmlkdWFsSG91ckNvbnRhaW5lciwgaG91cldlYXRoZXJEZXRhaWxzIH0iLCJpbXBvcnQgeyBzcGFuR2VuZXJhdG9yIH0gZnJvbSBcIi4vZ2VuZXJhdG9yRnVuY3Rpb25zXCI7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgZGF0ZSBpbnRvIHRoZSBHQiBzdHlsZSBvZiBkYXRlXG4gKiBAcGFyYW0ge3N0cmluZyBvciBEYXRlfSBkYXRlIGVpdGhlciBhIHN0cmluZyBvciBEYXRlIHZlcnNpb24gY2FuIGJlIHByb3ZpZGVkIGFuZCB0aGlzIGlzIHRoZSBkYXRlIHdlIHdhbnQgY29udmVydCBpbnRvIGFuIEludGwgZGF0ZSBcbiAqIEByZXR1cm5zIGFuIG9iamVjdCB0aGF0IGlzIHRoZSBjb3JyZWN0IGZvcm1hdCBvZiBkYXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN0YW5kYXJkRGF0ZShkYXRlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tR0JcIiwgb3B0aW9ucykuZm9ybWF0KGRhdGUudG9JU09TdHJpbmcpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRha2VzIGEgZGF0ZSBhbmQgY29udmVydHMgaXQgdG8gZW4tR0IgbG9jYWxlIGZvcm1cbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlVG9Db252ZXJ0IGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgZGF0ZSB0aGF0IHdlIHdhbnQgdG8gY29udmVydCBpbnRvIHRoZSBHQiBzdGFuZGFyZCBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgZGlzcGxheXMgdGhlIGRhdGUgaW4gdGhlIGVuLUdCIGxvY2FsZSBmb3JtXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVNob3J0U3RhbmRhcmREYXRlKGRhdGVUb0NvbnZlcnQpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVRvQ29udmVydClcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1HQlwiKS5mb3JtYXQoZGF0ZS5nZXRUaW1lKCkpO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHRvIG1ha2UgdGhlIHRpbWUgaGF2ZSBhIDAgYXQgdGhlIHN0YXJ0IGlmIHRoZSBudW1iZXIgYmVmb3JlIHRoZSBjb2xvbiBpcyBub3QgZG91YmxlIGRpZ2l0cyB5ZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lIHRoZSB0aW1lIHRoYXQgbmVlZHMgdG8gYmUgcGFkZGVkXG4gKiBAcmV0dXJucyBhIHBhZGRlZCB2ZXJzaW9uIG9mIHRoZSB0aW1lLCBlLmcuIGlmIGl0cyAxOjExIGl0IGdldHMgY2hhbmdlZCB0byAwMToxMVxuICovXG5mdW5jdGlvbiBjcmVhdGVTdGFuZGFyZFRpbWUodGltZSkge1xuICAgIHJldHVybiB0aW1lLnBhZFN0YXJ0KDUsIDApO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHJpZXZlcyB0aGUgY2l0eSB2YWx1ZSBmcm9tIHRoZSBvYmogcHJvdmlkZWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIC5qc29uKCkgdmVyc2lvbiBvZiB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgdGhlIGZldGNoIGNhbGwgXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBjaXR5IG5hbWUgcHJvdmlkZWQgYnkgdGhlIG9ialxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUNpdHkob2JqKSB7XG4gICAgcmV0dXJuIG9iai5sb2NhdGlvbi5uYW1lO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHJpZXZlcyB0aGUgY291bnRyeSB2YWx1ZSBmcm9tIHRoZSBvYmogcHJvdmlkZWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIC5qc29uKCkgdmVyc2lvbiBvZiB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgdGhlIGZldGNoIGNhbGwgXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBjb3VudHJ5IG5hbWUgcHJvdmlkZWQgYnkgdGhlIG9ialxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUNvdW50cnkob2JqKSB7XG4gICAgcmV0dXJuIG9iai5sb2NhdGlvbi5jb3VudHJ5O1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHJpZXZlcyB0aGUgZGF0ZSBhbmQgdGltZSB2YWx1ZSBmcm9tIHRoZSBvYmogcHJvdmlkZWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIC5qc29uKCkgdmVyc2lvbiBvZiB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgdGhlIGZldGNoIGNhbGwgXG4gKiBAcmV0dXJucyBhbiBBcnJheSB0aGF0IHN0b3JlcyB0aGUgZGF0ZSBpbiBpbmRleCAwIGFuZCB0aGUgdGltZSBpbiBpbmRleCAxXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlRGF0ZUFuZFRpbWVBcnIob2JqKSB7XG4gICAgcmV0dXJuIG9iai5sb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoJyAnKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbnMgZmluZHMgd2hldGhlciB0aGUgY2Vsc2l1cyBvciBmYWhyZW5oZWl0IGJ1dHRvbiBpcyBhY3RpdmUgc28gdGhlIHJpZ2h0IHN5bWJvbCBjYW4gYmUgZGlzcGxheWVkXG4gKiBAcmV0dXJucyBhIHNwYW4gZWxlbWVudCB3aXRoIHRoZSBjb3JyZWN0IHN5bWJvbFxuICovXG5mdW5jdGlvbiByZXRyaWV2ZU1ldGhvZE9mTWVhc3VyZW1lbnQoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZWxzaXVzLWJ0bicpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybiBzcGFuR2VuZXJhdG9yKFsnbWV0aG9kLW9mLW1lYXN1cmVtZW50J10sICdDJyk7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhaHJlbmhlaXQtYnRuJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuIHNwYW5HZW5lcmF0b3IoWydtZXRob2Qtb2YtbWVhc3VyZW1lbnQnXSwgJ0YnKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbnMgZmluZHMgd2hldGhlciB0aGUgY2Vsc2l1cyBvciBmYWhyZW5oZWl0IGJ1dHRvbiBpcyBhY3RpdmUgc28gdGhlIHJpZ2h0IHN5bWJvbCBjYW4gYmUgZGlzcGxheWVkXG4gKiBAcmV0dXJucyBhIGJvb2xlYW4gdmFsdWUgb2Ygd2hldGhlciBvciBub3QgdGhlIG1ldGhvZCBvZiBtZWFzdXJlbWVudCBpcyBjZWxzaXVzXG4gKi9cbmZ1bmN0aW9uIGlzTWV0aG9kT2ZNZWFzdXJlbWVudENlbHNpdXMoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZWxzaXVzLWJ0bicpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybiB0cnVlO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWhyZW5oZWl0LWJ0bicpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSB3aW5kIGRlZ3JlZXMgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgd2luZCBkZWdyZWVzXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlV2luZERlZ3JlZXMob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LndpbmRfZGVncmVlO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIHdpbmQgc3BlZWQgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgd2luZCBzcGVlZFxuICovXG5mdW5jdGlvbiByZXRyaWV2ZVdpbmRTcGVlZChvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQud2luZF9tcGg7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgaHVtaWRpdHkgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgaHVtaWRpdHlcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVIdW1pZGl0eShvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQuaHVtaWRpdHlcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSB1di1pbmRleCBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSB1di1pbmRleFxuICovXG5mdW5jdGlvbiByZXRyaWV2ZVV2TnVtKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC51djtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSB2aXNpYmlsaXR5IGRpc3RhbmNlIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIHZpc2liaWxpdHkgZGlzdGFuY2VcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVWaXNpYmlsaXR5RGlzdGFuY2Uob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LnZpc19rbTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBjbG91ZGluZXNzIHBlcmNlbnRhZ2UgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY2xvdWRpbmVzcyBwZXJjZW50YWdlXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlQ2xvdWRpbmVzc1BlcmNlbnRhZ2Uob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LmNsb3VkO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGNoYW5jZSBvZiByYWluIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGNoYW5jZSBvZiByYWluXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlQ2hhbmNlT2ZSYWluKG9iaikge1xuICAgIHJldHVybiBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIHN1bnJpc2UgdGltZSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBzdW5yaXNlIHRpbWUgXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlU3VucmlzZVRpbWUob2JqKSB7XG4gICAgcmV0dXJuIG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5yaXNlLnNsaWNlKDAsIC0zKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBzdW5zZXQgdGltZSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBzdW5zZXQgdGltZVxuICovXG5mdW5jdGlvbiByZXRyaWV2ZVN1bnNldFRpbWUob2JqKSB7XG4gICAgY29uc3Qgc3Vuc2V0ID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldDtcbiAgICBjb25zdCBzdW5zZXRIb3VyID0gTnVtYmVyKHN1bnNldFswXSArIHN1bnNldFsxXSk7XG4gICAgY29uc3Qgc3Vuc2V0SG91cjI0ID0gc3Vuc2V0SG91ciArIDEyO1xuICAgIHJldHVybiBzdW5zZXRIb3VyMjQgKyBzdW5zZXQuc2xpY2UoMiwgLTMpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgbW9vbiBwaGFzZSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBjdXJyZW50IG1vb24gcGhhc2VcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVNb29uUGhhc2Uob2JqKSB7XG4gICAgcmV0dXJuIG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5tb29uX3BoYXNlO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgaW1hZ2UgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBpbWFnZVxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUN1cnJlbnRUZW1wSW1nKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC5jb25kaXRpb24uaWNvbjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmVcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDdXJyZW50VGVtcChvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQudGVtcF9jO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgdGVtcGVyYXR1cmUgdGhhdCBpdCBmZWVscyBsaWtlIGN1cnJlbnRseSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIGl0IGZlZWxzIGxpa2VcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVGZWVsc0xpa2VUZW1wKG9iaikge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE51bWJlcihvYmouY3VycmVudC5mZWVsc2xpa2VfYykpO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgY3VycmVudCBvdXRkb29yIGNvbmRpdGlvbiBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBjdXJyZW50IG91dGRvb3IgY29uZGl0aW9uXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlQ3VycmVudENvbmRpdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG59XG5cbi8vVGhlc2UgZnVuY3Rpb25zIGFyZSB1c2VkIHRvIHJldHJpZXZlIHRoZSB2YWx1ZXMgZm9yIHRoZSB3ZWVrbHkgZm9yZWNhc3Rcbi8qKlxuICogVGhpcyBmdW5jdGlvbiB0YWtlcyBhIG51bWJlciByYW5naW5nIGZyb20gMC02IGFuZCB0aGVuIHJldHVybiB0aGUgd2Vla2RheSBuYW1lXG4gKiBAcGFyYW0ge251bWJlcn0gZGF0ZVRvRmluZERheSBhIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGRheSBvZiB0aGUgd2VlayBlLmcuIDAgcmVwcmVzZW50cyBTdW5kYXlcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHZhbHVlIHRoYXQgaXMgdGhlIGNvcnJlc3BvbmRpbmcgZGF5IG9mIHRoZSB3ZWVrXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlRGF5T2ZUaGVXZWVrKGRhdGVUb0ZpbmREYXkpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVRvRmluZERheSk7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgICBzd2l0Y2ggKGRheSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gJ1N1bmRheSc7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiAnTW9uZGF5JztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuICdUdWVzZGF5JztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuICdXZWRuZXNkYXknO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXR1cm4gJ1RodXJzZGF5JztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgcmV0dXJuICdGcmlkYXknO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXR1cm4gJ1NhdHVyZGF5JztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgcmV0dXJuICdVbmtub3duIGRheSc7XG4gICAgfTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBkYXRlIGJhc2VkIG9uIHRoZSBkYXkgd2Ugc3BlY2lmaWVkLCBhbmQgZnJvbSB0aGUgb2JqZWN0IHdlIHByb3ZpZGVkXG4gKiBAcGFyYW0ge251bWJlcn0gZGF5IHRoZSBkYXkgb2YgdGhlIHdlZWtcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIG5lZWQgdG8gcmV0cmlldmUgdGhlIGRhdGUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHZhbHVlIHRoYXQgY29udGFpbnMgdGhlIGRhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGUoZGF5LCBvYmopIHtcbiAgICByZXR1cm4gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF0ZTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBtYXhpbXVtIHRlbXBlcmF0dXJlIGJhc2VkIG9uIHRoZSBkYXkgb2YgdGhlIHdlZWsgcHJvdmlkZWQgZnJvbSB0aGUgb2JqZWN0IHByb3ZpZGVkXG4gKiBAcGFyYW0ge251bWJlcn0gZGF5T2ZXZWVrIHRoZSBkYXkgb2YgdGhlIHdlZWtcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIG5lZWQgdG8gcmV0cmlldmUgdGhlIG1heGltdW0gdGVtcGVyYXR1cmUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHZhbHVlIHRoYXQgaXMgdGhlIG1heGltdW0gdGVtcGVyYXR1cmUgZm9yIHRoYXQgZ2l2ZW4gZGF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlNYXhUZW1wKGRheU9mV2Vlaywgb2JqKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTnVtYmVyKG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXlPZldlZWtdLmRheS5tYXh0ZW1wX2MpKTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIG1pbmltdW0gdGVtcGVyYXR1cmUgYmFzZWQgb24gdGhlIGRheSBvZiB0aGUgd2VlayBwcm92aWRlZCBmcm9tIHRoZSBvYmplY3QgcHJvdmlkZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBkYXlPZldlZWsgdGhlIGRheSBvZiB0aGUgd2Vla1xuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IGZyb20gd2hpY2ggd2UgbmVlZCB0byByZXRyaWV2ZSB0aGUgbWluaW11bSB0ZW1wZXJhdHVyZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgbWluaW11bSB0ZW1wZXJhdHVyZSBmb3IgdGhhdCBnaXZlbiBkYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheU1pblRlbXAoZGF5T2ZXZWVrLCBvYmopIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChOdW1iZXIob2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheU9mV2Vla10uZGF5Lm1pbnRlbXBfYykpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGNvcnJlc3BvbmRpbmcgd2hldGhlciBpbWFnZSBmcm9tIHRoZSBkYXkgb2YgdGhlIHdlZWsgcHJvdmlkZWQgZnJvbSB0aGUgb2JqZWN0IHByb3ZpZGVkXG4gKiBAcGFyYW0ge251bWJlcn0gZGF5T2ZXZWVrIHRoZSBkYXkgb2YgdGhlIHdlZWtcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIG5lZWQgdG8gcmV0cmlldmUgdGhlIGRhdGUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHZhbHVlIHRoYXQgaXMgdGhlIHBhdGggdG8gdGhlIGltYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlXZWF0aGVySW1hZ2UoZGF5T2ZXZWVrLCBvYmopIHtcbiAgICByZXR1cm4gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheU9mV2Vla10uZGF5LmNvbmRpdGlvbi5pY29uO1xufVxuXG4vL1RoZXNlIGZ1bmN0aW9ucyBhcmUgdXNlZCBmb3IgdGhlIGhvdXJseSB3ZWF0aGVyIHNlY3Rpb25cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBnZXRzIHRoZSB0aW1lIGJhc2VkIG9uIHRoZSBob3VyTnVtIHZhbHVlLCBhbmQgbWFuaXB1bGF0ZXMgdGhlIHRpbWUgdG8gZGlzcGxheSB3aXRob3V0IHRoZSBBTSBvciBQTVxuICogQHBhcmFtIHtudW1iZXJ9IGhvdXJOdW0gYSBudW1iZXIgdGhlIGNvcnJlc3BvbmRzIHRvIGEgY2VydGFpbiBob3VyLCBlLmcuIDAgY29ycmVzcG9uZHMgdG8gMTJhbVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IGZyb20gd2hpY2ggd2UgbmVlZCB0byByZXRyaWV2ZSB0aGUgZGF0ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgdGltZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBob3VyTnVtIGFyZ3VtZW50IHBhc3NlZFxuICovXG5mdW5jdGlvbiBnZXRIb3VyVGltZShob3VyTnVtLCBvYmopIHtcbiAgICByZXR1cm4gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaG91ck51bV0udGltZS5zbGljZSgtNSk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gZ2V0cyB0aGUgdGVtcGVyYXR1cmUgYmFzZWQgb24gdGhlIGhvdXJOdW0gdmFsdWUsIGFuZCBtYW5pcHVsYXRlcyB0aGUgdGVtcGVyYXR1cmUgdG8gYmUgcm91bmRlZFxuICogQHBhcmFtIHtudW1iZXJ9IGhvdXJOdW0gYSBudW1iZXIgdGhlIGNvcnJlc3BvbmRzIHRvIGEgY2VydGFpbiBob3VyLCBlLmcuIDAgY29ycmVzcG9uZHMgdG8gMTJhbVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IGZyb20gd2hpY2ggd2UgbmVlZCB0byByZXRyaWV2ZSB0aGUgZGF0ZSBmcm9tIFxuICogQHJldHVybnMgYSBudW1iZXIgdmFsdWUgdGhhdCBpcyB0aGUgdGVtcGVyYXR1cmUgaW4gY2Vsc2l1cyBhbmQgaGFzIGJlZW4gcm91bmRlZFxuICovXG5mdW5jdGlvbiBnZXRIb3VyVGVtcChob3VyTnVtLCBvYmopIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChOdW1iZXIob2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaG91ck51bV0udGVtcF9jKSk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gZ2V0cyB0aGUgd2VhdGhlciBkZXNjcmlwdGlvbiBiYXNlZCBvbiB0aGUgaG91ck51bSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGhvdXJOdW0gYSBudW1iZXIgdGhlIGNvcnJlc3BvbmRzIHRvIGEgY2VydGFpbiBob3VyLCBlLmcuIDAgY29ycmVzcG9uZHMgdG8gMTJhbVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IGZyb20gd2hpY2ggd2UgbmVlZCB0byByZXRyaWV2ZSB0aGUgZGF0ZSBmcm9tIFxuICogQHJldHVybnMgYXN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSB3ZWF0aGVyIGNvbmRpdGlvbnMgYXQgdGhhdCBjZXJ0YWluIGhvdXJcbiAqL1xuZnVuY3Rpb24gZ2V0SG91clRlbXBEZXNjcmlwdGlvbihob3VyTnVtLCBvYmopIHtcbiAgICByZXR1cm4gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaG91ck51bV0uY29uZGl0aW9uLnRleHQ7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gZ2V0cyB0aGUgY29ycmVjdCBpY29uIGJhc2VkIG9uIHRoZSBob3VyTnVtIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaG91ck51bSBhIG51bWJlciB0aGUgY29ycmVzcG9uZHMgdG8gYSBjZXJ0YWluIGhvdXIsIGUuZy4gMCBjb3JyZXNwb25kcyB0byAxMmFtXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgZnJvbSB3aGljaCB3ZSBuZWVkIHRvIHJldHJpZXZlIHRoZSBkYXRlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSBwYXRoIHRvIHRoZSBpbWFnZSB0aGF0IGNvcnJlc3BvbmRzIHdpdGggdGhlIHdlYXRoZXIgZm9yIHRoYXQgaG91clxuICovXG5mdW5jdGlvbiBnZXRIb3VyVGVtcEljb24oaG91ck51bSwgb2JqKSB7XG4gICAgcmV0dXJuIG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2hvdXJOdW1dLmNvbmRpdGlvbi5pY29uO1xufTtcblxuZXhwb3J0IHsgZ2V0SG91clRpbWUsIGdldEhvdXJUZW1wLCBnZXRIb3VyVGVtcERlc2NyaXB0aW9uLCBnZXRIb3VyVGVtcEljb24sIGNyZWF0ZVNob3J0U3RhbmRhcmREYXRlLCByZXRyaWV2ZURheU9mVGhlV2VlaywgcmV0cmlldmVDdXJyZW50Q29uZGl0aW9uLCByZXRyaWV2ZUN1cnJlbnRUZW1wLCByZXRyaWV2ZUN1cnJlbnRUZW1wSW1nLCByZXRyaWV2ZUZlZWxzTGlrZVRlbXAsIHJldHJpZXZlU3Vuc2V0VGltZSwgcmV0cmlldmVNb29uUGhhc2UsIHJldHJpZXZlU3VucmlzZVRpbWUsIHJldHJpZXZlQ2hhbmNlT2ZSYWluLCByZXRyaWV2ZUNsb3VkaW5lc3NQZXJjZW50YWdlLCByZXRyaWV2ZVZpc2liaWxpdHlEaXN0YW5jZSwgcmV0cmlldmVVdk51bSwgY3JlYXRlU3RhbmRhcmREYXRlLCBjcmVhdGVTdGFuZGFyZFRpbWUsIHJldHJpZXZlQ2l0eSwgcmV0cmlldmVDb3VudHJ5LCByZXRyaWV2ZURhdGVBbmRUaW1lQXJyLCByZXRyaWV2ZU1ldGhvZE9mTWVhc3VyZW1lbnQsIGlzTWV0aG9kT2ZNZWFzdXJlbWVudENlbHNpdXMsIHJldHJpZXZlV2luZERlZ3JlZXMsIHJldHJpZXZlV2luZFNwZWVkLCByZXRyaWV2ZUh1bWlkaXR5IH0iLCJpbXBvcnQgeyBkaXZHZW5lcmF0b3IsIGhlYWRpbmdHZW5lcmF0b3IsIGltZ0dlbmVyYXRvciwgcGFyYWdyYXBoR2VuZXJhdG9yLCBzcGFuR2VuZXJhdG9yIH0gZnJvbSBcIi4vZ2VuZXJhdG9yRnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBjcmVhdGVTaG9ydFN0YW5kYXJkRGF0ZSwgaXNNZXRob2RPZk1lYXN1cmVtZW50Q2Vsc2l1cywgcmV0cmlldmVEYXlPZlRoZVdlZWssIGdldERhdGUsIGdldERheU1heFRlbXAsIGdldERheU1pblRlbXAsIGdldERheVdlYXRoZXJJbWFnZSB9IGZyb20gXCIuL3JldHJpZXZlSW5mb3JtYXRpb25cIjtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRha2VzIGFsbCBkYWlseS13ZWF0aGVyIGRpdnMgYW5kIGFwcGVuZHMgdGhlbSB0byBkYWlseS13ZWF0aGVyLWNvbnRhaW5lclxuICogQHBhcmFtIHtBcnJheX0gYXJyT2ZEYXlzIGFuIGFycmF5IG9mIGFsbCB0aGUgZGF5cyB0aGF0IG5lZWQgdG8gYmUgYXBwZW5kZWQgYW5kIGRpc3BsYXllZCwgdGhlcmUgc2hvdWxkIGJlIDcgaW4gdG90YWxcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgd2VhdGhlciBpbmZvcm1hdGlvbiBmb3IgdGhlIGN1cnJlbnQgYW5kIG5leHQgc2l4IGRheXNcbiAqL1xuZnVuY3Rpb24gZGFpbHlXZWF0aGVyU2VjdGlvbihhcnJPZkRheXMpIHtcbiAgICBjb25zdCBkYWlseVdlYXRoZXJTZWN0aW9uQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnZGFpbHktd2VhdGhlci1jb250YWluZXInXSk7XG4gICAgZGFpbHlXZWF0aGVyU2VjdGlvbkNvbnRhaW5lci5hcHBlbmQoLi4uYXJyT2ZEYXlzKTtcbiAgICByZXR1cm4gZGFpbHlXZWF0aGVyU2VjdGlvbkNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbnMgcHV0cyB0b2dldGhlciBhbGwgdGhlIGluZm9ybWF0aW9uIHJlcXVpcmVkIHRvIGRpc3BsYXkgdGhlIHdlYXRoZXIgZm9yIGFuIGluZGl2aWR1YWwgZGF5XG4gKiBAcGFyYW0ge251bWJlcn0gZGF5TnVtIHRoZSBudW1iZXIgb2YgdGhlIGRheSB0aGUgY29udGFpbmVyIGlzIGdvaW5nIHRvIGJlIGZvclxuICogQHBhcmFtIHtvYmplY3R9IGRheUluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBkZXRhaWxzIGFib3V0IHRoZSBkYXlcbiAqIEBwYXJhbSB7b2JqZWN0fSB3ZWF0aGVyRGV0YWlscyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIGRldGFpbHMgYWJvdWJ0IHRoZSBkYXkncyB3ZWF0aGVyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF5V2VhdGhlckltZyBhIHN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSBwYXRoIHRvIHRoZSB3ZWF0aGVyIGltYWdlIGZvciB0aGF0IGRheVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBtYWtlcyB1cCBvbmUgb2YgdGhlIGRheXMgdGhhdCBpcyBnb2luZyB0byBiZSBkaXNwbGF5ZWRcbiAqL1xuZnVuY3Rpb24gZGF5V2VhdGhlcihkYXlOdW0sIGRheUluZm8sIHdlYXRoZXJEZXRhaWxzLCBkYXlXZWF0aGVySW1nKSB7XG4gICAgY29uc3QgZGFpbHlXZWF0aGVyQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnZGFpbHktd2VhdGhlcicsIGBkYXktJHtkYXlOdW19YF0pO1xuICAgIGRhaWx5V2VhdGhlckNvbnRhaW5lci5hcHBlbmQoZGF5SW5mbywgd2VhdGhlckRldGFpbHMsIGltZ0dlbmVyYXRvcihkYXlXZWF0aGVySW1nLCAnJywgW10pKTtcbiAgICByZXR1cm4gZGFpbHlXZWF0aGVyQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uJ3Mgam9iIGlzIHRvIGNyZWF0ZSBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBpbmZvcm1hdGlvbiByZWxhdGVkIHRvIHRoZSBkYXkgd2UgcGFzc2VkIGluLCBzdWNoIGFzIHRoZSBkYXkgb2YgdGhlIHdlZWssIGFuZCByZXByZXNlbnRpbmcgdGhlIGRhdGUgb24gc2NyZWVuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZSB0aGUgZGF0ZSB3ZSB3YW50IHRvIGRpc3BsYXkgXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBkYXRlIHdlIHBhc3NlZCBpblxuICovXG5mdW5jdGlvbiBkYXlJbmZvcm1hdGlvbihkYXRlKSB7XG4gICAgY29uc3QgZGF5SW5mb3JtYXRpb25Db250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydkYXktaW5mb3JtYXRpb24nXSk7XG4gICAgZGF5SW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2gyJywgWydkYXktb2YtdGhlLXdlZWsnXSwgcmV0cmlldmVEYXlPZlRoZVdlZWsoZGF0ZSkpLCBoZWFkaW5nR2VuZXJhdG9yKCdoMicsIFsnZGF0ZS1vZi10aGUtd2VlayddLCBjcmVhdGVTaG9ydFN0YW5kYXJkRGF0ZShkYXRlKSkpO1xuICAgIHJldHVybiBkYXlJbmZvcm1hdGlvbkNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbidzIGpvYiBpcyB0byBkaXNwbGF5ZWQgdGhlIHRlbXBlcmF0dXJlIGJhc2VkIG9uIHRoZSB0d28gYXJndW1lbnRzIHByb3ZpZGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF5TWF4VGVtcCB0aGUgbWF4aW11bSB0ZW1wZXJhdHVyZSBmb3IgdGhhdCBkYXlcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXlNaW5UZW1wIHRoZSBtaW5pbXVtIHRlbXBlcmF0dXJlIGZvciB0aGF0IGRheVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdGVtcGVyYXR1cmVcbiAqL1xuZnVuY3Rpb24gZGF5V2VhdGhlckRldGFpbHMoZGF5TWF4VGVtcCwgZGF5TWluVGVtcCkge1xuICAgIGNvbnN0IHdlYXRoZXJEZXRhaWxzQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnZGF5LXdlYXRoZXItZGV0YWlscyddKTtcbiAgICBjb25zdCBtYXhXZWF0aGVyU3BhbiA9IHNwYW5HZW5lcmF0b3IoWydkYXktb2YtdGhlLXdlZWstbWF4LXRlbXAnXSwgZGF5TWF4VGVtcCk7XG4gICAgY29uc3QgbWluV2VhdGhlclNwYW4gPSBzcGFuR2VuZXJhdG9yKFsnZGF5LW9mLXRoZS13ZWVrLW1pbi10ZW1wJ10sIGRheU1pblRlbXApO1xuICAgIGNvbnN0IHdlYXRoZXJTeW1ib2wgPSBzcGFuR2VuZXJhdG9yKFsnbWV0aG9kLW9mLW1lYXN1cmVtZW50J10sICdDJyk7XG4gICAgY29uc3Qgd2VhdGhlclN5bWJvbFR3byA9IHNwYW5HZW5lcmF0b3IoWydtZXRob2Qtb2YtbWVhc3VyZW1lbnQnXSwgJ0MnKTtcbiAgICB3ZWF0aGVyRGV0YWlsc0NvbnRhaW5lci5hcHBlbmQocGFyYWdyYXBoR2VuZXJhdG9yKFsnbWF4LXRlbXAnXSwgJ8KwJywgbWF4V2VhdGhlclNwYW4sIHdlYXRoZXJTeW1ib2wpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydtaW4tdGVtcCddLCAnwrAnLCBtaW5XZWF0aGVyU3Bhbiwgd2VhdGhlclN5bWJvbFR3bykpO1xuICAgIHJldHVybiB3ZWF0aGVyRGV0YWlsc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjYWxscyBhbGwgdGhlIHJlbGV2YW50IGZ1bmN0aW9ucyBhbmQgY3JlYXRlcyBhIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyBhIGRheSBhbmQgaXRzIHJlc3BlY3RpdmUgd2VhdGhlclxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IGZyb20gd2hpY2ggd2Ugd2lsbCBiZSByZXRyaWV2aW5nIHZhbHVlcyBmcm9tIFxuICogQHJldHVybnMgYW4gYXJyYXkgdGhhdCBjb250YWlucyBhbGwgdGhlIERPTSBlbGVtZW50cyB0aGF0IG5lZWQgdG8gYmUgZGlzcGxheWVkXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFsbERheXNUb0Rpc3BsYXkob2JqKSB7XG4gICAgY29uc3QgYXJyT2ZEYXlzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgYXJyT2ZEYXlzLnB1c2goZGF5V2VhdGhlcihpLCBkYXlJbmZvcm1hdGlvbihnZXREYXRlKGksIG9iaikpLCBkYXlXZWF0aGVyRGV0YWlscyhnZXREYXlNYXhUZW1wKGksIG9iaiksIGdldERheU1pblRlbXAoaSwgb2JqKSksIGdldERheVdlYXRoZXJJbWFnZShpLCBvYmopKSk7XG4gICAgfTtcbiAgICByZXR1cm4gYXJyT2ZEYXlzO1xufVxuXG5cbmV4cG9ydCB7IGNyZWF0ZUFsbERheXNUb0Rpc3BsYXksIGRhaWx5V2VhdGhlclNlY3Rpb24sIGRheVdlYXRoZXIsIGRheUluZm9ybWF0aW9uLCBkYXlXZWF0aGVyRGV0YWlscyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gJy4vaGVhZGVyU2VjdGlvbic7XG5pbXBvcnQgeyBvbkxvYWREZWZhdWx0V2VhdGhlciwgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyIH0gZnJvbSAnLi9jdXJyZW50VGVtcGVyYXR1cmVTZWN0aW9uJztcbmltcG9ydCB7IGRpdkdlbmVyYXRvciB9IGZyb20gJy4vZ2VuZXJhdG9yRnVuY3Rpb25zJztcbmltcG9ydCB7IGNhcm91c2VsQnV0dG9ucyB9IGZyb20gJy4vY2Fyb3VzZWxCdXR0b25zJztcblxuY29uc3QgZGFpbHlIb3VybHlXZWF0aGVyID0gZGl2R2VuZXJhdG9yKFsnZGFpbHktaG91cmx5LXdlYXRoZXItY2Fyb3VzZWwnXSk7IC8vdGhlIGRpdiB0aGF0IHdpbGwgY29udGFpbiB0aGUgZGFpbHkgd2VhdGhlciwgYW5kIHRoZSBob3VybHlcbmRhaWx5SG91cmx5V2VhdGhlci5hcHBlbmQoY2Fyb3VzZWxCdXR0b25zKCkpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIoKSwgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyLCBkYWlseUhvdXJseVdlYXRoZXIpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWREZWZhdWx0V2VhdGhlcik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9