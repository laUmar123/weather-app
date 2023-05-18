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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Work Sans';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n    --light-blue: #4ba6cf;\n    --dark-blue: #0c4a6e;\n    --orange: #ecb347;\n    --search-background-color: #06263b;\n    --faded-white: rgba(255, 255, 255, 0.603);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Work Sans', sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background: linear-gradient(to bottom, var(--light-blue), var(--dark-blue));\n    color: white;\n    display: grid;\n    grid-template-rows: 0.5fr 5fr 5fr 0.5fr;\n    row-gap: 2rem;\n}\n\nheader {\n    grid-row: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 1.5rem\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 1.3rem;\n}\n\n.title-end {\n    color: var(--orange);\n}\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n    display: none;\n}\n\n.search-form {\n    display: flex;\n    align-items: center;\n    width: 25rem;\n    position: relative;\n    transform: translateY(4px);\n    margin-right: 55px;\n}\n\n#search-bar {\n    border-radius: 20px;\n    border: none;\n    width: 100%;\n    height: 2.5rem;\n    background-color: var(--search-background-color);\n    padding: 0 0.8rem;\n    color: white;\n    font-size: 1rem;\n}\n\n#search-bar::placeholder {\n    color: white;\n}\n\n.search-button {\n    background-color: transparent;\n    border: none;\n    position: absolute;\n    z-index: 1;\n    height: 1.5rem;\n    left: 88%;\n    cursor: pointer;\n}\n\n.change-degrees {\n    width: 20rem;\n    height: 2.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 0.5rem;\n}\n\n.btn {\n    cursor: pointer;\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.fahrenheit-btn,\n.celsius-btn {\n    height: 2rem;\n    width: 4rem;\n    border-radius: 20px;\n    background-color: var(--search-background-color);\n    font-size: 1rem;\n    transition: border 60ms ease-in;\n}\n\n.fahrenheit-btn:hover,\n.celsius-btn:hover,\n.daily-weather-btn:hover,\n.hourly-weather-btn:hover,\n.active {\n    border: 2px solid white;\n}\n\n.current-day-information {\n    justify-self: center;\n    grid-row: 2;\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n    grid-template-columns: 1fr 2fr;\n    width: 43rem;\n    height: 30rem;\n}\n\n.location-details {\n    grid-row: 1;\n    grid-column: 1 / -1;\n    justify-self: center;\n    text-align: center;\n    padding: 1rem;\n}\n\n.city-details {\n    font-size: 2.5rem;\n}\n\n.day-details {\n    font-size: 1.5rem;\n    margin-top: 0.5rem;\n    color: var(--faded-white);\n    font-weight: 500;\n}\n\n.time-details {\n    border-left: 2px solid var(--faded-white);\n    padding-left: 7px;\n    margin-left: 7px;\n}\n\n.current-temp-details {\n    grid-row: 2;\n    grid-column: 1;\n    justify-self: center;\n    align-self: center;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    row-gap: 0;\n}\n\n.temp-details {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n    gap: 0.3rem;\n}\n\n.temp-details>img {\n    height: 6rem;\n    width: 6rem;\n}\n\n.temp-description {\n    font-size: 1.7rem;\n    font-weight: 400;\n}\n\n.feels-like,\n.general-description {\n    font-size: 1.5rem;\n    font-weight: 300;\n    color: var(--faded-white);\n}\n\n.extra-information {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    padding: 0.5rem;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n}\n\n.extra-information>div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n}\n\n.wind-information {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.wind-direction {\n    height: 1.7rem;\n}\n\n.extra-information h5,\n.extra-information p {\n    font-weight: 600;\n}\n\n.extra-information h5 {\n    font-size: 1.2rem;\n    color: var(--faded-white);\n}\n\n.extra-information p {\n    font-size: 1.5rem;\n}\n\n.safe,\n.amber,\n.danger {\n    border-radius: 999px;\n    width: 40%;\n    margin: 0 auto;\n}\n\n.safe {\n    background-color: rgb(51, 192, 51);\n}\n\n.amber {\n    background-color: orange;\n}\n\n.danger {\n    background-color: rgb(192, 0, 0);\n}\n\n.carousel-buttons {\n    display: flex;\n    align-items: center;\n    gap: 0.3rem;\n}\n\n.daily-hourly-weather-carousel {\n    padding: 1rem 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.daily-weather-btn,\n.hourly-weather-btn {\n    background-color: var(--search-background-color);\n    height: 2.5rem;\n    width: 5rem;\n    border-radius: 5px;\n    font-size: 1rem;\n}\n\n.slide-buttons {\n    height: 100%;\n    width: 6rem;\n    margin-left: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.move-left,\n.move-right {\n    background-color: transparent;\n}\n\n.dots {\n    display: flex;\n    gap: 0.5rem;\n    transform: translateX(-3px);\n}\n\n.dot {\n    border-radius: 999px;\n    background-color: var(--search-background-color);\n    height: 8px;\n    width: 8px;\n}\n\n.dot.active {\n    background-color: white;\n}\n\n.material-symbols-outlined {\n    color: white;\n    display: flex;\n    justify-content: center;\n}\n\n.daily-weather-container {\n    display: flex;\n    gap: 1.2rem;\n}\n\n.daily-weather {\n    padding: 1rem;\n    width: 100%;\n    height: max(300px, 50%);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.day-information {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    font-size: 1.2rem;\n}\n\n.day-of-the-week {\n    font-weight: 500;\n}\n\n.date-of-the-week,\n.hourly-weather>h2 {\n    color: var(--faded-white);\n    font-weight: 400;\n}\n\n.date-of-the-week {\n    border-left: 1px solid var(--faded-white);\n    padding-left: 10px;\n    font-size: 1.6rem;\n}\n\n.day-weather-details {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.min-temp {\n    font-size: 1.5rem;\n    font-weight: 400;\n}\n\n.daily-weather>img {\n    height: 8rem;\n    width: 8rem;\n    align-self: center;\n}\n\n.hour-container {\n    display: flex;\n    margin: 0 auto;\n}\n\n.hourly-weather {\n    padding: 1rem;\n    width: 100%;\n    height: max(300px, 50%);\n    display: grid;\n    grid-template-rows: 1fr 2fr 2fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.hour-weather-description {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n    text-align: center;\n}\n\n.hour-weather-description>h3 {\n    font-size: 2rem;\n}\n\n.hour-description {\n    font-size: 1.1rem;\n    color: var(--faded-white);\n}\n\n.hourly-weather-icon {\n    height: 7rem;\n    width: 7rem;\n    align-self: flex-start;\n}\n\n.hide {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Work Sans';\n    src: url('./assets/WorkSans-VariableFont_wght.ttf');\n}\n\n:root {\n    --light-blue: #4ba6cf;\n    --dark-blue: #0c4a6e;\n    --orange: #ecb347;\n    --search-background-color: #06263b;\n    --faded-white: rgba(255, 255, 255, 0.603);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Work Sans', sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background: linear-gradient(to bottom, var(--light-blue), var(--dark-blue));\n    color: white;\n    display: grid;\n    grid-template-rows: 0.5fr 5fr 5fr 0.5fr;\n    row-gap: 2rem;\n}\n\nheader {\n    grid-row: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 1.5rem\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 1.3rem;\n}\n\n.title-end {\n    color: var(--orange);\n}\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n    display: none;\n}\n\n.search-form {\n    display: flex;\n    align-items: center;\n    width: 25rem;\n    position: relative;\n    transform: translateY(4px);\n    margin-right: 55px;\n}\n\n#search-bar {\n    border-radius: 20px;\n    border: none;\n    width: 100%;\n    height: 2.5rem;\n    background-color: var(--search-background-color);\n    padding: 0 0.8rem;\n    color: white;\n    font-size: 1rem;\n}\n\n#search-bar::placeholder {\n    color: white;\n}\n\n.search-button {\n    background-color: transparent;\n    border: none;\n    position: absolute;\n    z-index: 1;\n    height: 1.5rem;\n    left: 88%;\n    cursor: pointer;\n}\n\n.change-degrees {\n    width: 20rem;\n    height: 2.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 0.5rem;\n}\n\n.btn {\n    cursor: pointer;\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.fahrenheit-btn,\n.celsius-btn {\n    height: 2rem;\n    width: 4rem;\n    border-radius: 20px;\n    background-color: var(--search-background-color);\n    font-size: 1rem;\n    transition: border 60ms ease-in;\n}\n\n.fahrenheit-btn:hover,\n.celsius-btn:hover,\n.daily-weather-btn:hover,\n.hourly-weather-btn:hover,\n.active {\n    border: 2px solid white;\n}\n\n.current-day-information {\n    justify-self: center;\n    grid-row: 2;\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n    grid-template-columns: 1fr 2fr;\n    width: 43rem;\n    height: 30rem;\n}\n\n.location-details {\n    grid-row: 1;\n    grid-column: 1 / -1;\n    justify-self: center;\n    text-align: center;\n    padding: 1rem;\n}\n\n.city-details {\n    font-size: 2.5rem;\n}\n\n.day-details {\n    font-size: 1.5rem;\n    margin-top: 0.5rem;\n    color: var(--faded-white);\n    font-weight: 500;\n}\n\n.time-details {\n    border-left: 2px solid var(--faded-white);\n    padding-left: 7px;\n    margin-left: 7px;\n}\n\n.current-temp-details {\n    grid-row: 2;\n    grid-column: 1;\n    justify-self: center;\n    align-self: center;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    row-gap: 0;\n}\n\n.temp-details {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n    gap: 0.3rem;\n}\n\n.temp-details>img {\n    height: 6rem;\n    width: 6rem;\n}\n\n.temp-description {\n    font-size: 1.7rem;\n    font-weight: 400;\n}\n\n.feels-like,\n.general-description {\n    font-size: 1.5rem;\n    font-weight: 300;\n    color: var(--faded-white);\n}\n\n.extra-information {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    padding: 0.5rem;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n}\n\n.extra-information>div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n}\n\n.wind-information {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.wind-direction {\n    height: 1.7rem;\n}\n\n.extra-information h5,\n.extra-information p {\n    font-weight: 600;\n}\n\n.extra-information h5 {\n    font-size: 1.2rem;\n    color: var(--faded-white);\n}\n\n.extra-information p {\n    font-size: 1.5rem;\n}\n\n.safe,\n.amber,\n.danger {\n    border-radius: 999px;\n    width: 40%;\n    margin: 0 auto;\n}\n\n.safe {\n    background-color: rgb(51, 192, 51);\n}\n\n.amber {\n    background-color: orange;\n}\n\n.danger {\n    background-color: rgb(192, 0, 0);\n}\n\n.carousel-buttons {\n    display: flex;\n    align-items: center;\n    gap: 0.3rem;\n}\n\n.daily-hourly-weather-carousel {\n    padding: 1rem 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.daily-weather-btn,\n.hourly-weather-btn {\n    background-color: var(--search-background-color);\n    height: 2.5rem;\n    width: 5rem;\n    border-radius: 5px;\n    font-size: 1rem;\n}\n\n.slide-buttons {\n    height: 100%;\n    width: 6rem;\n    margin-left: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.move-left,\n.move-right {\n    background-color: transparent;\n}\n\n.dots {\n    display: flex;\n    gap: 0.5rem;\n    transform: translateX(-3px);\n}\n\n.dot {\n    border-radius: 999px;\n    background-color: var(--search-background-color);\n    height: 8px;\n    width: 8px;\n}\n\n.dot.active {\n    background-color: white;\n}\n\n.material-symbols-outlined {\n    color: white;\n    display: flex;\n    justify-content: center;\n}\n\n.daily-weather-container {\n    display: flex;\n    gap: 1.2rem;\n}\n\n.daily-weather {\n    padding: 1rem;\n    width: 100%;\n    height: max(300px, 50%);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.day-information {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    font-size: 1.2rem;\n}\n\n.day-of-the-week {\n    font-weight: 500;\n}\n\n.date-of-the-week,\n.hourly-weather>h2 {\n    color: var(--faded-white);\n    font-weight: 400;\n}\n\n.date-of-the-week {\n    border-left: 1px solid var(--faded-white);\n    padding-left: 10px;\n    font-size: 1.6rem;\n}\n\n.day-weather-details {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.min-temp {\n    font-size: 1.5rem;\n    font-weight: 400;\n}\n\n.daily-weather>img {\n    height: 8rem;\n    width: 8rem;\n    align-self: center;\n}\n\n.hour-container {\n    display: flex;\n    margin: 0 auto;\n}\n\n.hourly-weather {\n    padding: 1rem;\n    width: 100%;\n    height: max(300px, 50%);\n    display: grid;\n    grid-template-rows: 1fr 2fr 2fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.hour-weather-description {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n    text-align: center;\n}\n\n.hour-weather-description>h3 {\n    font-size: 2rem;\n}\n\n.hour-description {\n    font-size: 1.1rem;\n    color: var(--faded-white);\n}\n\n.hourly-weather-icon {\n    height: 7rem;\n    width: 7rem;\n    align-self: flex-start;\n}\n\n.hide {\n    display: none;\n}"],"sourceRoot":""}]);
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

/***/ "./src/mainButtonsLogic.js":
/*!*********************************!*\
  !*** ./src/mainButtonsLogic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dailyAndHourlyButtonLogic": () => (/* binding */ dailyAndHourlyButtonLogic),
/* harmony export */   "dotLogic": () => (/* binding */ dotLogic),
/* harmony export */   "measurementButtonsLogic": () => (/* binding */ measurementButtonsLogic),
/* harmony export */   "moveBackButtonLogic": () => (/* binding */ moveBackButtonLogic),
/* harmony export */   "moveForwardButtonLogic": () => (/* binding */ moveForwardButtonLogic)
/* harmony export */ });
/* harmony import */ var _tempConversionLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempConversionLogic */ "./src/tempConversionLogic.js");


/**
 * This function contains the logic for both the daily and hourly weather button, if the daily weather button is clicked then that is displayed and the hourly weather div is hidden and vice versa if the hourly weather button is clicked
 * @param { object } e the event object that contains information about the event
 */
function dailyAndHourlyButtonLogic(e) {
    const dailyWeather = document.querySelector('.daily-weather-container');
    const hourlyWeather = document.querySelector('.hourly-weather-container');
    const dailyWeatherButton = document.querySelector('.daily-weather-btn');
    const hourlyWeatherButton = document.querySelector('.hourly-weather-btn');
    const slideButtons = document.querySelector('.slide-buttons');
    if (e.target === dailyWeatherButton) {
        e.target.classList.add('active');
        hourlyWeatherButton.classList.remove('active');
        slideButtons.classList.add('hide');
        dailyWeather.classList.remove('hide');
        hourlyWeather.classList.add('hide');
    } else if (e.target === hourlyWeatherButton) {
        e.target.classList.add('active');
        dailyWeatherButton.classList.remove('active');
        slideButtons.classList.remove('hide');
        dailyWeather.classList.add('hide');
        hourlyWeather.classList.remove('hide');
    };
};

/**
 * This function checks all hourly containers and finds the one that currently has the shown class applied to it
 * @returns the DOM element object that contains the 'shown' class
 */
function findActiveHourlyContainer() {
    const allHourlyDivs = document.querySelectorAll('.hour-container');
    for (let hourlyDiv of allHourlyDivs) {
        if (hourlyDiv.classList.contains('shown')) return hourlyDiv
    };
};

/**
 * This functions runs when the user changes the carousel to view a certain hour, the div that is currently showing will have the 'shown' class applied to it so this function finds that div and takes its index number
 * it then calls the addActiveToDot function and passes that index number so that dot has the 'active' class applied to it
 */
function updateDot() {
    const allHourlyDivs = document.querySelectorAll('.hour-container');
    removeActiveFromDots();
    allHourlyDivs.forEach((hourlyDiv, index) => {
        if (hourlyDiv.classList.contains('shown')) addActiveToDot(index);
    });
};

/**
 * This function finds the dot that has the 'active' class applied to it and removes it so there is not dot that has the active class applied to it
 */
function removeActiveFromDots() {
    const allDots = document.querySelectorAll('.dot');
    outer:
    for (let dot of allDots) {
        if (dot.classList.contains('active')) {
            dot.classList.remove('active');
            break outer;
        };
    };
};

/**
 * This function uses the dotNumber argument to get the corresponding dot and add the 'active' class to it
 * @param {number} dotNumber this is the index of which dot we want to add the 'active' class to 
 */
function addActiveToDot(dotNumber) {
    const allDots = document.querySelectorAll('.dot');
    allDots[dotNumber].classList.add('active');
};

/**
 * This function shows the specified hour-container on screen
 * @param {number} index the index of the hour-container we want to display 
 */
function showHourlyContainer(index) {
    const hourlyContainers = document.querySelectorAll('.hour-container');
    hourlyContainers[index].classList.remove('hide');
    hourlyContainers[index].classList.add('shown');
};

/**
 * This functions hides all the hour-containers
 */
function hideAllHourlyContainers() {
    const hourlyContainers = document.querySelectorAll('.hour-container');
    hourlyContainers.forEach(container => {
        container.classList.add('hide');
        container.classList.remove('shown');
    });
};

/**
 * This function runs when the user clicks the moveForwardButton, and it works by checking there is another sibiling element and then updating to show the next sibling element
 * @returns undefined
 */
function moveForwardButtonLogic() {
    const activeHourlyDiv = findActiveHourlyContainer();
    if (activeHourlyDiv.nextElementSibling === null) {
        return
    } else {
        activeHourlyDiv.classList.add('hide');
        activeHourlyDiv.classList.remove('shown');
        activeHourlyDiv.nextElementSibling.classList.remove('hide');
        activeHourlyDiv.nextElementSibling.classList.add('shown');
        updateDot();
    };
};

/**
 * This function runs when the user clicks the moveBackButton, and it works by checking there is a previous sibiling element and then updating to show the previous sibling element
 * @returns undefined
 */
function moveBackButtonLogic() {
    const activeHourlyDiv = findActiveHourlyContainer();
    if (activeHourlyDiv.previousElementSibling === null) {
        return
    } else {
        activeHourlyDiv.classList.add('hide');
        activeHourlyDiv.classList.remove('shown');
        activeHourlyDiv.previousElementSibling.classList.remove('hide');
        activeHourlyDiv.previousElementSibling.classList.add('shown');
        updateDot();
    };
};

/**
 * This function is the logic behind what should happen when an individual dot is pressed, it displays the corresponding hour container, and updates the active dot
 * @param {object} e the event object that contains information about the event 
 */
function dotLogic(e) {
    if (e.target.classList.contains('dot')) {
        hideAllHourlyContainers();
        removeActiveFromDots();
        showHourlyContainer(e.target.id);
        addActiveToDot(e.target.id);
    };
};

function measurementButtonsLogic(e) {
    const allMethodOfMeasurement = document.querySelectorAll('.method-of-measurement');
    const mainTemp = document.querySelector('.temp');
    const feelsLikeTemp = document.querySelector('.feels-like-temp');
    const allDayOfTheWeekMaxTemp = document.querySelectorAll('.day-of-the-week-max-temp');
    const allDayOfTheWeekMinTemp = document.querySelectorAll('.day-of-the-week-min-temp');
    const allHourTemp = document.querySelectorAll('.hour-weather');
    if (e.target.classList.contains('fahrenheit-btn')) {
        (0,_tempConversionLogic__WEBPACK_IMPORTED_MODULE_0__.makeFahrenheitActive)();
        allMethodOfMeasurement.forEach(element => element.innerText = 'F');
        mainTemp.innerText = (0,_tempConversionLogic__WEBPACK_IMPORTED_MODULE_0__.celsiusToFahrenheit)(mainTemp.innerText);
        feelsLikeTemp.innerText = (0,_tempConversionLogic__WEBPACK_IMPORTED_MODULE_0__.celsiusToFahrenheit)(feelsLikeTemp.innerText);
        (0,_tempConversionLogic__WEBPACK_IMPORTED_MODULE_0__.changeGroupIntoFahrenheit)(allDayOfTheWeekMaxTemp);
        (0,_tempConversionLogic__WEBPACK_IMPORTED_MODULE_0__.changeGroupIntoFahrenheit)(allDayOfTheWeekMinTemp);
        (0,_tempConversionLogic__WEBPACK_IMPORTED_MODULE_0__.changeGroupIntoFahrenheit)(allHourTemp);
    };
    if (e.target.classList.contains('celsius-btn')) {
        (0,_tempConversionLogic__WEBPACK_IMPORTED_MODULE_0__.makeCelsiusActive)();
        allMethodOfMeasurement.forEach(element => element.innerText = 'C');
        mainTemp.innerText = (0,_tempConversionLogic__WEBPACK_IMPORTED_MODULE_0__.fahrenheitToCelsius)(mainTemp.innerText);
        feelsLikeTemp.innerText = (0,_tempConversionLogic__WEBPACK_IMPORTED_MODULE_0__.fahrenheitToCelsius)(feelsLikeTemp.innerText);
        (0,_tempConversionLogic__WEBPACK_IMPORTED_MODULE_0__.changeGroupIntoCelsius)(allDayOfTheWeekMaxTemp);
        (0,_tempConversionLogic__WEBPACK_IMPORTED_MODULE_0__.changeGroupIntoCelsius)(allDayOfTheWeekMinTemp);
        (0,_tempConversionLogic__WEBPACK_IMPORTED_MODULE_0__.changeGroupIntoCelsius)(allHourTemp);
    };
}



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

/***/ "./src/tempConversionLogic.js":
/*!************************************!*\
  !*** ./src/tempConversionLogic.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "celsiusToFahrenheit": () => (/* binding */ celsiusToFahrenheit),
/* harmony export */   "changeGroupIntoCelsius": () => (/* binding */ changeGroupIntoCelsius),
/* harmony export */   "changeGroupIntoFahrenheit": () => (/* binding */ changeGroupIntoFahrenheit),
/* harmony export */   "fahrenheitToCelsius": () => (/* binding */ fahrenheitToCelsius),
/* harmony export */   "makeCelsiusActive": () => (/* binding */ makeCelsiusActive),
/* harmony export */   "makeFahrenheitActive": () => (/* binding */ makeFahrenheitActive)
/* harmony export */ });
/**
 * this function makes the fahrenheit button have the 'active' class and removes it from the celsius one
 */
function makeFahrenheitActive() {
    const celsiusButton = document.querySelector('.celsius-btn');
    const fahrenheitButton = document.querySelector('.fahrenheit-btn');
    celsiusButton.classList.remove('active');
    fahrenheitButton.classList.add('active');
};

/**
 * this function makes the celsius button have the 'active' class and removes it from the fahrenheit one
 */
function makeCelsiusActive() {
    const celsiusButton = document.querySelector('.celsius-btn');
    const fahrenheitButton = document.querySelector('.fahrenheit-btn');
    celsiusButton.classList.add('active');
    fahrenheitButton.classList.remove('active');
};

/**
 * This function converts a celsius value into fahrenheit
 * @param {number} num the number to convert 
 * @returns a number that is the celsius value rounded and converted into fahrenheit
 */
function celsiusToFahrenheit(num) {
    return Math.round((num * 1.8) + 32);
};

/**
 * This function converts a fahrenheit value into celsius
 * @param {number} num the number to convert 
 * @returns a number that is the fahrenheit value rounded and converted into celsius
 */
function fahrenheitToCelsius(num) {
    return Math.round((num - 32) * 5 / 9);
};

/**
 * This function loops an array of DOM elements and converts the inner number into fahrenheit from celsius
 * @param {array} temps an array of of DOM elements that contain the temperature 
 */
function changeGroupIntoFahrenheit(temps) {
    temps.forEach(temp => {
        temp.innerText = celsiusToFahrenheit(temp.innerText);
    });
};

/**
 * This function loops an array of DOM elements and converts the inner number into celsius from fahrenheit
 * @param {array} temps an array of of DOM elements that contain the temperature 
 */
function changeGroupIntoCelsius(temps) {
    temps.forEach(temp => {
        temp.innerText = fahrenheitToCelsius(temp.innerText);
    });
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
/* harmony import */ var _mainButtonsLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainButtonsLogic */ "./src/mainButtonsLogic.js");







const dailyHourlyWeather = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_3__.divGenerator)(['daily-hourly-weather-carousel']); //the div that will contain the daily weather, and the hourly
dailyHourlyWeather.append((0,_carouselButtons__WEBPACK_IMPORTED_MODULE_4__.carouselButtons)());

document.body.append((0,_headerSection__WEBPACK_IMPORTED_MODULE_1__.header)(), _currentTemperatureSection__WEBPACK_IMPORTED_MODULE_2__.currentDayInformationContainer, dailyHourlyWeather);
window.addEventListener('load', _currentTemperatureSection__WEBPACK_IMPORTED_MODULE_2__.onLoadDefaultWeather);

const hourlyWeatherButton = document.querySelector('.hourly-weather-btn'); //this is the button used to display the hourly weather
const dailyWeatherButton = document.querySelector('.daily-weather-btn'); //this is the button used to display the weather for the current and next 6 days
const moveForwardButton = document.querySelector('.move-right'); //this button moves the carousel to the next 6 hours
const moveBackButton = document.querySelector('.move-left'); //this button moves the carousel to the previous 6 hours
const dotsContainer = document.querySelector('.dots'); //the container that holds each dot
const changeDegreesContainer = document.querySelector('.change-degrees'); //the container that holds the celsius and fahrenheit buttons



dailyWeatherButton.addEventListener('click', _mainButtonsLogic__WEBPACK_IMPORTED_MODULE_5__.dailyAndHourlyButtonLogic);
hourlyWeatherButton.addEventListener('click', _mainButtonsLogic__WEBPACK_IMPORTED_MODULE_5__.dailyAndHourlyButtonLogic);
moveForwardButton.addEventListener('click', _mainButtonsLogic__WEBPACK_IMPORTED_MODULE_5__.moveForwardButtonLogic);
moveBackButton.addEventListener('click', _mainButtonsLogic__WEBPACK_IMPORTED_MODULE_5__.moveBackButtonLogic);
dotsContainer.addEventListener('click', _mainButtonsLogic__WEBPACK_IMPORTED_MODULE_5__.dotLogic);
changeDegreesContainer.addEventListener('click', _mainButtonsLogic__WEBPACK_IMPORTED_MODULE_5__.measurementButtonsLogic);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkpBQTBEO0FBQ3RHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCwrQkFBK0IsMkRBQTJELEdBQUcsV0FBVyw0QkFBNEIsMkJBQTJCLHdCQUF3Qix5Q0FBeUMsZ0RBQWdELEdBQUcsT0FBTyxnQkFBZ0IsaUJBQWlCLDZCQUE2QiwyQ0FBMkMsR0FBRyxVQUFVLG1CQUFtQixvQkFBb0Isa0ZBQWtGLG1CQUFtQixvQkFBb0IsOENBQThDLG9CQUFvQixHQUFHLFlBQVksa0JBQWtCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLDZCQUE2QixZQUFZLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLHdCQUF3QixHQUFHLGdCQUFnQiwyQkFBMkIsR0FBRyxrT0FBa08sb0JBQW9CLEdBQUcsa0JBQWtCLG9CQUFvQiwwQkFBMEIsbUJBQW1CLHlCQUF5QixpQ0FBaUMseUJBQXlCLEdBQUcsaUJBQWlCLDBCQUEwQixtQkFBbUIsa0JBQWtCLHFCQUFxQix1REFBdUQsd0JBQXdCLG1CQUFtQixzQkFBc0IsR0FBRyw4QkFBOEIsbUJBQW1CLEdBQUcsb0JBQW9CLG9DQUFvQyxtQkFBbUIseUJBQXlCLGlCQUFpQixxQkFBcUIsZ0JBQWdCLHNCQUFzQixHQUFHLHFCQUFxQixtQkFBbUIscUJBQXFCLG9CQUFvQiwwQkFBMEIsMkJBQTJCLGtCQUFrQixHQUFHLFVBQVUsc0JBQXNCLG1CQUFtQixtQkFBbUIsd0JBQXdCLEdBQUcsb0NBQW9DLG1CQUFtQixrQkFBa0IsMEJBQTBCLHVEQUF1RCxzQkFBc0Isc0NBQXNDLEdBQUcsaUhBQWlILDhCQUE4QixHQUFHLDhCQUE4QiwyQkFBMkIsa0JBQWtCLG9CQUFvQixrQ0FBa0MscUNBQXFDLG1CQUFtQixvQkFBb0IsR0FBRyx1QkFBdUIsa0JBQWtCLDBCQUEwQiwyQkFBMkIseUJBQXlCLG9CQUFvQixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLHlCQUF5QixnQ0FBZ0MsdUJBQXVCLEdBQUcsbUJBQW1CLGdEQUFnRCx3QkFBd0IsdUJBQXVCLEdBQUcsMkJBQTJCLGtCQUFrQixxQkFBcUIsMkJBQTJCLHlCQUF5QixtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsaUJBQWlCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQkFBMEIsc0JBQXNCLGtCQUFrQixHQUFHLHVCQUF1QixtQkFBbUIsa0JBQWtCLEdBQUcsdUJBQXVCLHdCQUF3Qix1QkFBdUIsR0FBRyx3Q0FBd0Msd0JBQXdCLHVCQUF1QixnQ0FBZ0MsR0FBRyx3QkFBd0Isb0JBQW9CLDRDQUE0Qyx5Q0FBeUMsc0JBQXNCLDBCQUEwQiw0QkFBNEIseUJBQXlCLEdBQUcsNEJBQTRCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLEdBQUcsdUJBQXVCLG9CQUFvQiwwQkFBMEIsZUFBZSxHQUFHLHFCQUFxQixxQkFBcUIsR0FBRyxrREFBa0QsdUJBQXVCLEdBQUcsMkJBQTJCLHdCQUF3QixnQ0FBZ0MsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsOEJBQThCLDJCQUEyQixpQkFBaUIscUJBQXFCLEdBQUcsV0FBVyx5Q0FBeUMsR0FBRyxZQUFZLCtCQUErQixHQUFHLGFBQWEsdUNBQXVDLEdBQUcsdUJBQXVCLG9CQUFvQiwwQkFBMEIsa0JBQWtCLEdBQUcsb0NBQW9DLHlCQUF5QixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLDhDQUE4Qyx1REFBdUQscUJBQXFCLGtCQUFrQix5QkFBeUIsc0JBQXNCLEdBQUcsb0JBQW9CLG1CQUFtQixrQkFBa0Isd0JBQXdCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsOEJBQThCLG9DQUFvQyxHQUFHLFdBQVcsb0JBQW9CLGtCQUFrQixrQ0FBa0MsR0FBRyxVQUFVLDJCQUEyQix1REFBdUQsa0JBQWtCLGlCQUFpQixHQUFHLGlCQUFpQiw4QkFBOEIsR0FBRyxnQ0FBZ0MsbUJBQW1CLG9CQUFvQiw4QkFBOEIsR0FBRyw4QkFBOEIsb0JBQW9CLGtCQUFrQixHQUFHLG9CQUFvQixvQkFBb0Isa0JBQWtCLDhCQUE4QixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLHNCQUFzQixvQkFBb0IsZ0JBQWdCLDBCQUEwQix3QkFBd0IsR0FBRyxzQkFBc0IsdUJBQXVCLEdBQUcsNENBQTRDLGdDQUFnQyx1QkFBdUIsR0FBRyx1QkFBdUIsZ0RBQWdELHlCQUF5Qix3QkFBd0IsR0FBRywwQkFBMEIsc0JBQXNCLHdCQUF3QixHQUFHLGVBQWUsd0JBQXdCLHVCQUF1QixHQUFHLHdCQUF3QixtQkFBbUIsa0JBQWtCLHlCQUF5QixHQUFHLHFCQUFxQixvQkFBb0IscUJBQXFCLEdBQUcscUJBQXFCLG9CQUFvQixrQkFBa0IsOEJBQThCLG9CQUFvQixzQ0FBc0MsNEJBQTRCLDBCQUEwQixHQUFHLCtCQUErQixvQkFBb0IsNkJBQTZCLGtCQUFrQix5QkFBeUIsR0FBRyxrQ0FBa0Msc0JBQXNCLEdBQUcsdUJBQXVCLHdCQUF3QixnQ0FBZ0MsR0FBRywwQkFBMEIsbUJBQW1CLGtCQUFrQiw2QkFBNkIsR0FBRyxXQUFXLG9CQUFvQixHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFRLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFNBQVMsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZ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QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQjtBQUMwRDtBQUMvQztBQUNBO0FBQzJGOztBQUUvSSwyQkFBMkIsaUVBQVkscUNBQXFDO0FBQzVFLDBCQUEwQixpRUFBZTs7QUFFekMscUJBQXFCLHNEQUFNLElBQUksc0ZBQThCO0FBQzdELGdDQUFnQyw0RUFBb0I7O0FBRXBELDJFQUEyRTtBQUMzRSx5RUFBeUU7QUFDekUsaUVBQWlFO0FBQ2pFLDZEQUE2RDtBQUM3RCx1REFBdUQ7QUFDdkQsMEVBQTBFOzs7O0FBSTFFLDZDQUE2Qyx3RUFBeUI7QUFDdEUsOENBQThDLHdFQUF5QjtBQUN2RSw0Q0FBNEMscUVBQXNCO0FBQ2xFLHlDQUF5QyxrRUFBbUI7QUFDNUQsd0NBQXdDLHVEQUFRO0FBQ2hELGlEQUFpRCxzRUFBdUIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jYXJvdXNlbEJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3VycmVudFRlbXBlcmF0dXJlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZW5lcmF0b3JGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVhZGVyU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ob3VybHlXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21haW5CdXR0b25zTG9naWMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcmV0cmlldmVJbmZvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90ZW1wQ29udmVyc2lvbkxvZ2ljLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlZWtseVdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvV29ya1NhbnMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbGlnaHQtYmx1ZTogIzRiYTZjZjtcXG4gICAgLS1kYXJrLWJsdWU6ICMwYzRhNmU7XFxuICAgIC0tb3JhbmdlOiAjZWNiMzQ3O1xcbiAgICAtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yOiAjMDYyNjNiO1xcbiAgICAtLWZhZGVkLXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjAzKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tZGFyay1ibHVlKSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA1ZnIgNWZyIDAuNWZyO1xcbiAgICByb3ctZ2FwOiAycmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbVxcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udGl0bGUtZW5kIHtcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDU1cHg7XFxufVxcblxcbiNzZWFyY2gtYmFyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMCAwLjhyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jc2VhcmNoLWJhcjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgbGVmdDogODglO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGFuZ2UtZGVncmVlcyB7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZmFocmVuaGVpdC1idG4sXFxuLmNlbHNpdXMtYnRuIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciA2MG1zIGVhc2UtaW47XFxufVxcblxcbi5mYWhyZW5oZWl0LWJ0bjpob3ZlcixcXG4uY2Vsc2l1cy1idG46aG92ZXIsXFxuLmRhaWx5LXdlYXRoZXItYnRuOmhvdmVyLFxcbi5ob3VybHktd2VhdGhlci1idG46aG92ZXIsXFxuLmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY3VycmVudC1kYXktaW5mb3JtYXRpb24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICB3aWR0aDogNDNyZW07XFxuICAgIGhlaWdodDogMzByZW07XFxufVxcblxcbi5sb2NhdGlvbi1kZXRhaWxzIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jaXR5LWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmRheS1kZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRpbWUtZGV0YWlscyB7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcC1kZXRhaWxzIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAwO1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLnRlbXAtZGV0YWlscz5pbWcge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbn1cXG5cXG4udGVtcC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZmVlbHMtbGlrZSxcXG4uZ2VuZXJhbC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24+ZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjNyZW07XFxufVxcblxcbi53aW5kLWluZm9ybWF0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi53aW5kLWRpcmVjdGlvbiB7XFxuICAgIGhlaWdodDogMS43cmVtO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gaDUsXFxuLmV4dHJhLWluZm9ybWF0aW9uIHAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gaDUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG59XFxuXFxuLmV4dHJhLWluZm9ybWF0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnNhZmUsXFxuLmFtYmVyLFxcbi5kYW5nZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5zYWZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxOTIsIDUxKTtcXG59XFxuXFxuLmFtYmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4uZGFuZ2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMCwgMCk7XFxufVxcblxcbi5jYXJvdXNlbC1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjNyZW07XFxufVxcblxcbi5kYWlseS1ob3VybHktd2VhdGhlci1jYXJvdXNlbCB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZGFpbHktd2VhdGhlci1idG4sXFxuLmhvdXJseS13ZWF0aGVyLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnNsaWRlLWJ1dHRvbnMge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb3ZlLWxlZnQsXFxuLm1vdmUtcmlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmRvdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xcbn1cXG5cXG4uZG90IHtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA4cHg7XFxuICAgIHdpZHRoOiA4cHg7XFxufVxcblxcbi5kb3QuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRhaWx5LXdlYXRoZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxLjJyZW07XFxufVxcblxcbi5kYWlseS13ZWF0aGVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogbWF4KDMwMHB4LCA1MCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5kYXktaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uZGF5LW9mLXRoZS13ZWVrIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmRhdGUtb2YtdGhlLXdlZWssXFxuLmhvdXJseS13ZWF0aGVyPmgyIHtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmRhdGUtb2YtdGhlLXdlZWsge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWZhZGVkLXdoaXRlKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLmRheS13ZWF0aGVyLWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWluLXRlbXAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmRhaWx5LXdlYXRoZXI+aW1nIHtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaG91ci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmhvdXJseS13ZWF0aGVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogbWF4KDMwMHB4LCA1MCUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMmZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3VyLXdlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG91ci13ZWF0aGVyLWRlc2NyaXB0aW9uPmgzIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uaG91ci1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbn1cXG5cXG4uaG91cmx5LXdlYXRoZXItaWNvbiB7XFxuICAgIGhlaWdodDogN3JlbTtcXG4gICAgd2lkdGg6IDdyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBOzs7O0lBSUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLGdEQUFnRDtJQUNoRCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdEQUFnRDtJQUNoRCxlQUFlO0lBQ2YsK0JBQStCO0FBQ25DOztBQUVBOzs7OztJQUtJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7OztJQUdJLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdEQUFnRDtJQUNoRCxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0RBQWdEO0lBQ2hELFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvV29ya1NhbnMtVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1saWdodC1ibHVlOiAjNGJhNmNmO1xcbiAgICAtLWRhcmstYmx1ZTogIzBjNGE2ZTtcXG4gICAgLS1vcmFuZ2U6ICNlY2IzNDc7XFxuICAgIC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3I6ICMwNjI2M2I7XFxuICAgIC0tZmFkZWQtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1kYXJrLWJsdWUpKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDVmciA1ZnIgMC41ZnI7XFxuICAgIHJvdy1nYXA6IDJyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtXFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50aXRsZS1lbmQge1xcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxuICAgIG1hcmdpbi1yaWdodDogNTVweDtcXG59XFxuXFxuI3NlYXJjaC1iYXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwIDAuOHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNzZWFyY2gtYmFyOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBsZWZ0OiA4OCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoYW5nZS1kZWdyZWVzIHtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mYWhyZW5oZWl0LWJ0bixcXG4uY2Vsc2l1cy1idG4ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDYwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmZhaHJlbmhlaXQtYnRuOmhvdmVyLFxcbi5jZWxzaXVzLWJ0bjpob3ZlcixcXG4uZGFpbHktd2VhdGhlci1idG46aG92ZXIsXFxuLmhvdXJseS13ZWF0aGVyLWJ0bjpob3ZlcixcXG4uYWN0aXZlIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jdXJyZW50LWRheS1pbmZvcm1hdGlvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIHdpZHRoOiA0M3JlbTtcXG4gICAgaGVpZ2h0OiAzMHJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLWRldGFpbHMge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNpdHktZGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uZGF5LWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udGltZS1kZXRhaWxzIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1mYWRlZC13aGl0ZSk7XFxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xcbn1cXG5cXG4uY3VycmVudC10ZW1wLWRldGFpbHMge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDA7XFxufVxcblxcbi50ZW1wLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzPmltZyB7XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgd2lkdGg6IDZyZW07XFxufVxcblxcbi50ZW1wLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5mZWVscy1saWtlLFxcbi5nZW5lcmFsLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlZC13aGl0ZSk7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbj5kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLndpbmQtaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLndpbmQtZGlyZWN0aW9uIHtcXG4gICAgaGVpZ2h0OiAxLjdyZW07XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiBoNSxcXG4uZXh0cmEtaW5mb3JtYXRpb24gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiBoNSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uc2FmZSxcXG4uYW1iZXIsXFxuLmRhbmdlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnNhZmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDE5MiwgNTEpO1xcbn1cXG5cXG4uYW1iZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5kYW5nZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAwLCAwKTtcXG59XFxuXFxuLmNhcm91c2VsLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLmRhaWx5LWhvdXJseS13ZWF0aGVyLWNhcm91c2VsIHtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5kYWlseS13ZWF0aGVyLWJ0bixcXG4uaG91cmx5LXdlYXRoZXItYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc2xpZGUtYnV0dG9ucyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vdmUtbGVmdCxcXG4ubW92ZS1yaWdodCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZG90cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XFxufVxcblxcbi5kb3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDhweDtcXG4gICAgd2lkdGg6IDhweDtcXG59XFxuXFxuLmRvdC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGFpbHktd2VhdGhlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEuMnJlbTtcXG59XFxuXFxuLmRhaWx5LXdlYXRoZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBtYXgoMzAwcHgsIDUwJSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmRheS1pbmZvcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5kYXktb2YtdGhlLXdlZWsge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZGF0ZS1vZi10aGUtd2VlayxcXG4uaG91cmx5LXdlYXRoZXI+aDIge1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZGF0ZS1vZi10aGUtd2VlayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4uZGF5LXdlYXRoZXItZGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5taW4tdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZGFpbHktd2VhdGhlcj5pbWcge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5ob3VyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uaG91cmx5LXdlYXRoZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBtYXgoMzAwcHgsIDUwJSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXItd2VhdGhlci1kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4zcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ob3VyLXdlYXRoZXItZGVzY3JpcHRpb24+aDMge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5ob3VyLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlZC13aGl0ZSk7XFxufVxcblxcbi5ob3VybHktd2VhdGhlci1pY29uIHtcXG4gICAgaGVpZ2h0OiA3cmVtO1xcbiAgICB3aWR0aDogN3JlbTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGJ1dHRvbkdlbmVyYXRvciwgZGl2R2VuZXJhdG9yLCBzcGFuR2VuZXJhdG9yIH0gZnJvbSBcIi4vZ2VuZXJhdG9yRnVuY3Rpb25zXCI7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBicmluZ3MgdG9nZXRoZXIgYWxsIGJ1dHRvbnMgdW5kZXIgb25lIGNvbnRhaW5lclxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgdGhlIGJ1dHRvbnMgY29udGFpbmVkIHdpdGhpbiB0aGUgZGFpbHktaG91cmx5LXdlYXRoZXItY2Fyb3VzZWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcm91c2VsQnV0dG9ucygpIHtcbiAgICBjb25zdCBjYXJvdXNlbEJ1dHRvbnNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydjYXJvdXNlbC1idXR0b25zJ10pO1xuICAgIGNhcm91c2VsQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoYnV0dG9uR2VuZXJhdG9yKFsnZGFpbHktd2VhdGhlci1idG4nLCAnYnRuJywgJ2FjdGl2ZSddLCAnRGFpbHknKSwgYnV0dG9uR2VuZXJhdG9yKFsnaG91cmx5LXdlYXRoZXItYnRuJywgJ2J0biddLCAnSG91cmx5JykpO1xuICAgIGNhcm91c2VsQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoc2xpZGVCdXR0b25zKCkpO1xuICAgIHJldHVybiBjYXJvdXNlbEJ1dHRvbnNDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb25zIGJyaW5ncyB0b2dldGhlciBhbGwgYnV0dG9ucyB0byBkbyB3aXRoIHRoZSBzbGlkZXNcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIHRoZSBidXR0b25zIGNvbnRhaW5lZCB3aXRoaW4gdGhlIHNsaWRlLWJ1dHRvbnMgY29udGFpbmVyXG4gKi9cbmZ1bmN0aW9uIHNsaWRlQnV0dG9ucygpIHtcbiAgICBjb25zdCBzbGlkZUJ1dHRvbnNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydzbGlkZS1idXR0b25zJywgJ2hpZGUnXSk7XG4gICAgY29uc3QgYnV0dG9uTGVmdCA9IHNwYW5HZW5lcmF0b3IoWydtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJ10sICdhcnJvd19iYWNrX2lvcycpXG4gICAgY29uc3QgYnV0dG9uUmlnaHQgPSBzcGFuR2VuZXJhdG9yKFsnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCddLCAnYXJyb3dfZm9yd2FyZF9pb3MnKVxuICAgIHNsaWRlQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoYnV0dG9uR2VuZXJhdG9yKFsnbW92ZS1sZWZ0JywgJ2J0biddLCAnJywgJycsIGJ1dHRvbkxlZnQpKTtcbiAgICBzbGlkZUJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGRvdHMoKSk7XG4gICAgc2xpZGVCdXR0b25zQ29udGFpbmVyLmFwcGVuZChidXR0b25HZW5lcmF0b3IoWydtb3ZlLXJpZ2h0JywgJ2J0biddLCAnJywgJycsIGJ1dHRvblJpZ2h0KSk7XG4gICAgcmV0dXJuIHNsaWRlQnV0dG9uc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgJ2RvdCcgYnV0dG9uc1xuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyB1c2VkIGFzIHRoZSBpbmRpdmlkdWFsIGJ1dHRvbnMgdGhhdCBkaXNwbGF5IHdoaWNoIHNsaWRlIHRoZSB1c2VyIGlzIG9uXG4gKi9cbmZ1bmN0aW9uIGRvdHMoKSB7XG4gICAgY29uc3QgZG90c0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2RvdHMnXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgaWYgKGkgPT09IDApIGRvdHNDb250YWluZXIuYXBwZW5kKGJ1dHRvbkdlbmVyYXRvcihbJ2RvdCcsICdhY3RpdmUnLCAnYnRuJ10sICcnLCAnMCcpKTtcbiAgICAgICAgZWxzZSBkb3RzQ29udGFpbmVyLmFwcGVuZChidXR0b25HZW5lcmF0b3IoWydkb3QnLCAnYnRuJ10sICcnLCBpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gZG90c0NvbnRhaW5lcjtcbn07IiwiaW1wb3J0IHsgY2hlY2tDYXRlZ29yeU9mVXYsIGRpdkdlbmVyYXRvciwgaGVhZGluZ0dlbmVyYXRvciwgaW1nR2VuZXJhdG9yLCBwYXJhZ3JhcGhHZW5lcmF0b3IsIHNwYW5HZW5lcmF0b3IgfSBmcm9tICcuL2dlbmVyYXRvckZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVBbkFycmF5T2ZBbGxIb3VycywgaG91cmx5V2VhdGhlciB9IGZyb20gJy4vaG91cmx5V2VhdGhlcic7XG5pbXBvcnQgeyBjcmVhdGVTdGFuZGFyZERhdGUsIGNyZWF0ZVN0YW5kYXJkVGltZSwgcmV0cmlldmVDaXR5LCByZXRyaWV2ZUNvdW50cnksIHJldHJpZXZlRGF0ZUFuZFRpbWVBcnIsIHJldHJpZXZlTWV0aG9kT2ZNZWFzdXJlbWVudCwgaXNNZXRob2RPZk1lYXN1cmVtZW50Q2Vsc2l1cywgcmV0cmlldmVXaW5kRGVncmVlcywgcmV0cmlldmVXaW5kU3BlZWQsIHJldHJpZXZlSHVtaWRpdHksIHJldHJpZXZlVXZOdW0sIHJldHJpZXZlVmlzaWJpbGl0eURpc3RhbmNlLCByZXRyaWV2ZUNsb3VkaW5lc3NQZXJjZW50YWdlLCByZXRyaWV2ZUNoYW5jZU9mUmFpbiwgcmV0cmlldmVTdW5yaXNlVGltZSwgcmV0cmlldmVTdW5zZXRUaW1lLCByZXRyaWV2ZU1vb25QaGFzZSwgcmV0cmlldmVDdXJyZW50VGVtcEltZywgcmV0cmlldmVDdXJyZW50VGVtcCwgcmV0cmlldmVDdXJyZW50Q29uZGl0aW9uLCByZXRyaWV2ZUZlZWxzTGlrZVRlbXAgfSBmcm9tICcuL3JldHJpZXZlSW5mb3JtYXRpb24nXG5pbXBvcnQgeyBkYWlseVdlYXRoZXJTZWN0aW9uLCBjcmVhdGVBbGxEYXlzVG9EaXNwbGF5IH0gZnJvbSAnLi93ZWVrbHlXZWF0aGVyJztcblxuY29uc3QgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnY3VycmVudC1kYXktaW5mb3JtYXRpb24nXSk7IC8vdGhpcyBpcyB0aGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgYWxsIGVsZW1lbnRzIHRoYXQgd2lsbCBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IG1vbWVudFxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBvbiBzY3JlZW4gdG8gc2hvdyB0aGUgbG9jYXRpb24gYW5kIHRpbWUgb2YgdGhlIGNpdHkgc2VhcmNoZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaXR5IHRoZSBuYW1lIG9mIHRoZSBjaXR5IHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkIG9uIHNjcmVlbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb3VudHJ5IHRoZSBuYW1lIG9mIHRoZSBjb3VudHJ5IHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkIG9uIHNjcmVlbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXkgdGhlIGRhdGUgdGhhdCBoYXMgY29udmVydGVkIGludG8gYSBzdHJpbmcgdXNpbmcgdGhlIEludGwgQVBJXG4gKiBAcGFyYW0ge3N0cmluZ30gdGltZSB0aGUgdGltZSB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZCBvbiBzY3JlZW5cbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgdGhhdCBjb250YWlucyBuZXN0ZWQgZWxlbWVudHMgdGhhdCBkaXNwbGF5IGluZm9ybWF0aW9uIGFib3V0IHRoZSBsb2NhdGlvbiBhbmQgdGltZVxuICovXG5mdW5jdGlvbiBkaXNwbGF5TG9jYXRpb25EZXRhaWxzKGNpdHkgPSAnJywgY291bnRyeSA9ICcnLCBkYXkgPSAnJywgdGltZSA9ICcnKSB7XG4gICAgY29uc3QgbG9jYXRpb25EZXRhaWxzID0gZGl2R2VuZXJhdG9yKFsnbG9jYXRpb24tZGV0YWlscyddKTtcbiAgICBjb25zdCBjaXR5TmFtZSA9IHNwYW5HZW5lcmF0b3IoWydjaXR5J10sIGNpdHkpO1xuICAgIGNvbnN0IGNvdW50cnlOYW1lID0gc3BhbkdlbmVyYXRvcihbJ2NvdW50cnknXSwgY291bnRyeSk7XG4gICAgY29uc3QgdGltZURldGFpbHMgPSBzcGFuR2VuZXJhdG9yKFsndGltZS1kZXRhaWxzJ10sIHRpbWUpO1xuICAgIGNvbnN0IGNpdHlEZXRhaWxzSGVhZGVyID0gaGVhZGluZ0dlbmVyYXRvcignaDInLCBbJ2NpdHktZGV0YWlscyddLCAnLCAnLCBjaXR5TmFtZSwgY291bnRyeU5hbWUpO1xuICAgIGNvbnN0IGRheURldGFpbHNIZWFkZXIgPSBoZWFkaW5nR2VuZXJhdG9yKCdoNCcsIFsnZGF5LWRldGFpbHMnXSwgZGF5LCB1bmRlZmluZWQsIHRpbWVEZXRhaWxzKTtcbiAgICBsb2NhdGlvbkRldGFpbHMuYXBwZW5kKGNpdHlEZXRhaWxzSGVhZGVyLCBkYXlEZXRhaWxzSGVhZGVyKTtcbiAgICByZXR1cm4gbG9jYXRpb25EZXRhaWxzO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZGlzcGxheSB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBhbG9uZyB3aXRoIGl0cyBhc3NvY2lhdGVkIGltYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgdGhpcyBpcyB0aGUgcGF0aCB0byB0aGUgaW1hZ2UgdGhhdCBuZWVkcyB0byBiZSBkaXNwbGF5ZWQgXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcCB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIFxuICogQHJldHVybnMgYSBkaXYgZWxlbWVudCB0aGF0IGhhcyB0d28gZnVydGhlciBlbGVtZW50cyBhcHBlbmRlZCB3aXRoaW4gaXQgZGlzcGxheWluZyB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBhbG9uZyB3aXRoIGl0cyBhc3NvY2lhdGVkIGltYWdlXG4gKi9cbmZ1bmN0aW9uIHRlbXBEZXRhaWxzU2VjdGlvbihpbWFnZSwgdGVtcCkge1xuICAgIGNvbnN0IHRlbXBEZXRhaWxzQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsndGVtcC1kZXRhaWxzJ10pO1xuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gc3BhbkdlbmVyYXRvcihbJ3RlbXAnXSwgdGVtcCk7XG4gICAgdGVtcERldGFpbHNDb250YWluZXIuYXBwZW5kKGltZ0dlbmVyYXRvcihpbWFnZSwgdW5kZWZpbmVkLCBbJ2ltYWdlLXdlYXRoZXItZGVzY3JpcHRpb24nXSksIGhlYWRpbmdHZW5lcmF0b3IoJ2gyJywgWydjdXJyZW50LXRlbXAnXSwgJ8KwJywgY3VycmVudFRlbXAsIHJldHJpZXZlTWV0aG9kT2ZNZWFzdXJlbWVudCgpKSk7XG4gICAgcmV0dXJuIHRlbXBEZXRhaWxzQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZGlzcGxheSB0aGUgdGVtcGVyYXR1cmUgaXQgZmVlbHMgbGlrZSBhbG9uZyB3aXRoIHRoZSBvdXRkb29yIGNvbmRpdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiBhIGRlc2NyaXB0aW9uIG9mIG91dGRvb3IgY29uZGl0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IGZlZWxzTGlrZVRlbXAgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRlbXBlcmF0dXJlIHRoYXQgaXQgZmVlbHMgbGlrZVxuICogQHJldHVybnMgYSBkaXYgZWxlbWVudCB0aGF0IGhhcyB0d28gZnVydGhlciBlbGVtZW50cyBhcHBlbmRlZCB3aXRoaW4gaXQgZGlzcGxheWluZyB0aGUgb3V0ZG9vciBjb25kaXRpb25zIGF0IHRoZSBjdXJyZW50IG1vbWVudCBhbmQgdGhlIHRlbXBlcmF0dXJlIGl0IGZlZWxzIGxpa2VcbiAqL1xuZnVuY3Rpb24gdGVtcENvbmRpdGlvbnNTZWN0aW9uKGRlc2NyaXB0aW9uLCBmZWVsc0xpa2VUZW1wKSB7XG4gICAgY29uc3QgdGVtcENvbmRpdGlvbnNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd0ZW1wLWNvbmRpdGlvbnMnXSk7XG4gICAgY29uc3QgZmVlbHNMaWtlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBmZWVsc0xpa2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZmVlbHMtbGlrZScpO1xuICAgIGZlZWxzTGlrZUhlYWRlci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgRmVlbHMgbGlrZSA8c3BhbiBjbGFzcz1cImZlZWxzLWxpa2UtdGVtcFwiPiR7ZmVlbHNMaWtlVGVtcH08L3NwYW4+wrA8c3BhbiBjbGFzcz1cIm1ldGhvZC1vZi1tZWFzdXJlbWVudFwiPiR7aXNNZXRob2RPZk1lYXN1cmVtZW50Q2Vsc2l1cygpID09PSB0cnVlID8gJ0MnIDogJ0YnfTwvc3Bhbj5gKTtcbiAgICB0ZW1wQ29uZGl0aW9uc0NvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDMnLCBbJ3RlbXAtZGVzY3JpcHRpb24nXSwgZGVzY3JpcHRpb24pLCBmZWVsc0xpa2VIZWFkZXIpO1xuICAgIHJldHVybiB0ZW1wQ29uZGl0aW9uc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbnMgam9iIGlzIHRvIGFwcGVuZCB0aGUgdHdvIGFyZ3VtZW50cyBpbnRvIHRoZSB1Y3JyZW50VGVtcERldGFpbHMgZGl2IHdoaWNoIHdpbGwgdGhlbiBiZSBkaXNwbGF5ZWQgb24gc2NyZWVuXG4gKiBAcGFyYW0ge29iamVjdH0gdGVtcERldGFpbHNTZWN0aW9uIGEgZG9tIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgdGhlIGZpcnN0IGNoaWxkIG9mIHRoZSBjdXJyZW50VGVtcERldGFpbHNDb250YWluZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSB0ZW1wQ29uZGl0aW9uc1NlY3Rpb24gYSBkb20gZWxlbWVudCBvYmplY3QgdGhhdCBpcyB0aGUgc2Vjb25kIGNoaWxkIG9mIHRoZSBjdXJyZW50VGVtcERldGFpbHNDb250YWluZXJcbiAqIEByZXR1cm5zIGEgZG9tIGVsZW1lbnQgb2JqZWN0IGNvbnRhaW5zIHRoZSB0d28gYXJndW1lbnRzIHBhc3NlZCBhcyBjaGlsZHJlblxuICovXG5mdW5jdGlvbiBjdXJyZW50VGVtcERldGFpbHNTZWN0aW9uKHRlbXBEZXRhaWxzU2VjdGlvbiwgdGVtcENvbmRpdGlvbnNTZWN0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudFRlbXBEZXRhaWxzQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnY3VycmVudC10ZW1wLWRldGFpbHMnXSk7XG4gICAgY3VycmVudFRlbXBEZXRhaWxzQ29udGFpbmVyLmFwcGVuZCh0ZW1wRGV0YWlsc1NlY3Rpb24sIHRlbXBDb25kaXRpb25zU2VjdGlvbik7XG4gICAgcmV0dXJuIGN1cnJlbnRUZW1wRGV0YWlsc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGFwcGVuZCBhbGwgOSBhcmd1bWVudHMgaW50byB0aGUgZXh0cmFJbmZvcm1hdGlvbkNvbnRhaW5lciB0aGF0IHdpbGwgdGhlbiBiZSBkaXNwbGF5ZWQgb250byB0aGUgc2NyZWVuXG4gKiBAcGFyYW0ge29iamVjdH0gd2luZEluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyB3aW5kIGRpcmVjdGlvbiBhbmQgc3BlZWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBodW1pZGl0eUluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyBodW1pZGl0eSBwZXJjZW50YWdlXG4gKiBAcGFyYW0ge29iamVjdH0gdXZJbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdGhlIERPTSBlbGVtZW50IGRpc3BsYXlpbmcgdXYtaW5kZXggXG4gKiBAcGFyYW0ge29iamVjdH0gdmlzaWJpbGl0eUluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyB2aXNpYmlsaXR5IGRpc3RhbmNlXG4gKiBAcGFyYW0ge29iamVjdH0gY2xvdWRpbmVzc0luZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyBjbG91ZGluZXNzIHBlcmNlbnRhZ2VcbiAqIEBwYXJhbSB7b2JqZWN0fSByYWluSW5mbyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHRoZSBET00gZWxlbWVudCBkaXNwbGF5aW5nIHRoZSBjaGFuY2Ugb2YgcmFpblxuICogQHBhcmFtIHtvYmplY3R9IHN1bnJpc2VJbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdGhlIERPTSBlbGVtZW50IGRpc3BsYXlpbmcgc3VucmlzZSB0aW1lXG4gKiBAcGFyYW0ge29iamVjdH0gc3Vuc2V0SW5mbyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHRoZSBET00gZWxlbWVudCBkaXNwbGF5aW5nIHN1bnNldCB0aW1lXG4gKiBAcGFyYW0ge29iamVjdH0gbW9vbkluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyBtb29uLXBoYXNlIGluZm9ybWF0aW9uXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIDkgY2hpbGRyZW4sIHdoaWNoIGFyZSBhbGwgdGhlIGFyZ3VtZW50cyB0aGF0IGhhdmUgYmVlbiBwYXNzZWRcbiAqL1xuZnVuY3Rpb24gZXh0cmFJbmZvcm1hdGlvblNlY3Rpb24od2luZEluZm8sIGh1bWlkaXR5SW5mbywgdXZJbmZvLCB2aXNpYmlsaXR5SW5mbywgY2xvdWRpbmVzc0luZm8sIHJhaW5JbmZvLCBzdW5yaXNlSW5mbywgc3Vuc2V0SW5mbywgbW9vbkluZm8pIHtcbiAgICBjb25zdCBleHRyYUluZm9ybWF0aW9uQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnZXh0cmEtaW5mb3JtYXRpb24nXSk7XG4gICAgZXh0cmFJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQod2luZEluZm8sIGh1bWlkaXR5SW5mbywgdXZJbmZvLCB2aXNpYmlsaXR5SW5mbywgY2xvdWRpbmVzc0luZm8sIHJhaW5JbmZvLCBzdW5yaXNlSW5mbywgc3Vuc2V0SW5mbywgbW9vbkluZm8pO1xuICAgIHJldHVybiBleHRyYUluZm9ybWF0aW9uQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgd2luZFxuICogQHBhcmFtIHtzdHJpbmd9IHdpbmRBcnJvd1JvdGF0aW9uIHRoZSBkZWdyZWVzIGJ5IHdoaWNoIHRoZSBhcnJvdyB0aGF0IGlzIHBvaW50ZWQgbm9ydGggc2hvdWxkIHJvdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHdpbmRTcGVlZCB0aGUgc3BlZWQgb2YgdGhlIHdpbmRcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHdpbmQgc3BlZWQgYW5kIGRpcmVjdGlvblxuICovXG5mdW5jdGlvbiB3aW5kSW5mb3JtYXRpb24od2luZEFycm93Um90YXRpb24sIHdpbmRTcGVlZCkge1xuICAgIGNvbnN0IHdpbmRDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd3aW5kJ10pO1xuICAgIGNvbnN0IHdpbmRJbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3dpbmQtaW5mb3JtYXRpb24nXSk7XG4gICAgY29uc3Qgd2luZFNwZWVkU3BhbiA9IHNwYW5HZW5lcmF0b3IoWyd3aW5kLW51bSddLCB3aW5kU3BlZWQpO1xuICAgIHdpbmRJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQoaW1nR2VuZXJhdG9yKCcuLy4uL3NyYy9hc3NldHMvYXJyb3cucG5nJywgJ0FuIGFycm93IHJvdGF0ZWQgYnkgdGhlIHdpbmRvdyBkaXJlY3Rpb24gZGVncmVlcycsIFsnd2luZC1kaXJlY3Rpb24nXSwgd2luZEFycm93Um90YXRpb24pLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWyd3aW5kLXNwZWVkJ10sICdtcGgnLCB3aW5kU3BlZWRTcGFuKSk7XG4gICAgd2luZENvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1dpbmQnKSwgd2luZEluZm9ybWF0aW9uQ29udGFpbmVyKTtcbiAgICByZXR1cm4gd2luZENvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZGl2IGVsZW1lbnQsIGFuZCBhcHBlbmRzIGEgPGg1PjwvaDU+IGFuZCA8cD48L3A+IGVsZW1lbnQgd2l0aGluIGl0IHRoYXQgZGlzcGxheXMgdGhlIGh1bWlkaXR5IHBlcmNlbnRhZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBodW1pZGl0eU51bWJlciB0aGUgaHVtaWRpdHkgY3VycmVudGx5IFxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgaHVtaWRpdHkgcGVyY2VudGFnZVxuICovXG5mdW5jdGlvbiBodW1pZGl0eUluZm9ybWF0aW9uKGh1bWlkaXR5TnVtYmVyKSB7XG4gICAgY29uc3QgaHVtaWRpdHlDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydodW1pZGl0eSddKTtcbiAgICBjb25zdCBodW1pZGl0eSA9IHNwYW5HZW5lcmF0b3IoWydodW1pZGl0eS1udW1iZXInXSwgaHVtaWRpdHlOdW1iZXIpXG4gICAgaHVtaWRpdHlDb250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2g1JywgW10sICdIdW1pZGl0eScpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydodW1pZGl0eS1wZXJjZW50YWdlJ10sICclJywgaHVtaWRpdHkpKTtcbiAgICByZXR1cm4gaHVtaWRpdHlDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSB1di1pbmRleFxuICogQHBhcmFtIHtzdHJpbmd9IHV2SW5kZXhOdW1iZXIgdGhlIHV2LWluZGV4IGN1cnJlbnRseVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgdXYtaW5kZXhcbiAqL1xuZnVuY3Rpb24gdXZJbmZvcm1hdGlvbih1dkluZGV4TnVtYmVyKSB7XG4gICAgY29uc3QgdXZDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd1di1pbmRleCddKTtcbiAgICB1dkNvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1VWIEluZGV4JyksIHBhcmFncmFwaEdlbmVyYXRvcihbJ3V2JywgY2hlY2tDYXRlZ29yeU9mVXYodXZJbmRleE51bWJlcildLCB1dkluZGV4TnVtYmVyKSk7XG4gICAgcmV0dXJuIHV2Q29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyB0aGUgdmlzaWJpbGl0eSBkaXN0YW5jZVxuICogQHBhcmFtIHtzdHJpbmd9IHZpc2liaWxpdHlEaXN0YW5jZSB0aGUgY3VycmVudCB2aXNpYmlsaXR5IGRpc3RhbmNlXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSB2aXNpYmlsaXR5IGRpc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIHZpc2liaWxpdHlJbmZvcm1hdGlvbih2aXNpYmlsaXR5RGlzdGFuY2UpIHtcbiAgICBjb25zdCB2aXNpYmlsaXR5Q29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsndmlzaWJpbGl0eSddKTtcbiAgICBjb25zdCB2aXNpYmxpdHlEaXN0YW5jZVNwYW4gPSBzcGFuR2VuZXJhdG9yKFsndmlzaWJpbGl0eS1udW0nXSwgdmlzaWJpbGl0eURpc3RhbmNlKTtcbiAgICB2aXNpYmlsaXR5Q29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnVmlzaWJpbGl0eScpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWyd2aXNpYmlsaXR5LWRpc3RhbmNlJ10sICdrbScsIHZpc2libGl0eURpc3RhbmNlU3BhbikpO1xuICAgIHJldHVybiB2aXNpYmlsaXR5Q29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyB0aGUgY3VycmVudCBjbG91ZCBwZXJjZW50YWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xvdWRQZXJjZW50YWdlIHRoZSBjdXJyZW50IGNsb3VkIHBlcmNlbnRhZ2VcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRpc3BsYXkgdGhlIGN1cnJlbnQgY2xvdWQgcGVyY2VudGFnZVxuICovXG5mdW5jdGlvbiBjbG91ZGluZXNzSW5mb3JtYXRpb24oY2xvdWRQZXJjZW50YWdlKSB7XG4gICAgY29uc3QgY2xvdWRpbmVzc0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2Nsb3VkaW5lc3MnXSk7XG4gICAgY29uc3QgY2xvdWRpbmVzc1BlcmNlbnRhZ2VTcGFuID0gc3BhbkdlbmVyYXRvcihbJ2Nsb3VkaW5lc3MtbnVtJ10sIGNsb3VkUGVyY2VudGFnZSk7XG4gICAgY2xvdWRpbmVzc0NvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ0Nsb3VkaW5lc3MnKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnY2xvdWRpbmVzcy1wZXJjZW50YWdlJ10sICclJywgY2xvdWRpbmVzc1BlcmNlbnRhZ2VTcGFuKSk7XG4gICAgcmV0dXJuIGNsb3VkaW5lc3NDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSBjdXJyZW50IHJhaW4gcGVyY2VudGFnZVxuICogQHBhcmFtIHtzdHJpbmd9IHJhaW5QZXJjZW50YWdlIHRoZSBjdXJyZW50IHJhaW4gcGVyY2VudGFnZVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgY3VycmVudCByYWluIHBlcmNlbnRhZ2VcbiAqL1xuZnVuY3Rpb24gcmFpbkluZm9ybWF0aW9uKHJhaW5QZXJjZW50YWdlKSB7XG4gICAgY29uc3QgcmFpbkNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2NoYW5jZS1vZi1yYWluJ10pO1xuICAgIGNvbnN0IHJhaW5QZXJjZW50YWdlU3BhbiA9IHNwYW5HZW5lcmF0b3IoWydjaGFuY2Utb2YtcmFpbi1udW0nXSwgcmFpblBlcmNlbnRhZ2UpO1xuICAgIHJhaW5Db250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2g1JywgW10sICdDaGFuY2Ugb2YgUmFpbicpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydjaGFuY2Utb2YtcmFpbi1wZXJjZW50YWdlJ10sICclJywgcmFpblBlcmNlbnRhZ2VTcGFuKSk7XG4gICAgcmV0dXJuIHJhaW5Db250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSBzdW5yaXNlIHRpbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdW5yaXNlVGltZSB0aGUgc3VucmlzZSB0aW1lIGZvciB0aGUgZGF5XG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSBzdW5yaXNlIHRpbWVcbiAqL1xuZnVuY3Rpb24gc3VucmlzZUluZm9ybWF0aW9uKHN1bnJpc2VUaW1lKSB7XG4gICAgY29uc3Qgc3VucmlzZUNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3N1bnJpc2UnXSk7XG4gICAgc3VucmlzZUNvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1N1bnJpc2UnKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnc3VucmlzZS10aW1lJ10sIHN1bnJpc2VUaW1lKSk7XG4gICAgcmV0dXJuIHN1bnJpc2VDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSBzdW5zZXQgdGltZVxuICogQHBhcmFtIHtzdHJpbmd9IHN1bnNldFRpbWUgdGhlIHN1bnNldCB0aW1lIGZvciB0aGUgZGF5XG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSBzdW5zZXQgdGltZVxuICovXG5mdW5jdGlvbiBzdW5zZXRJbmZvcm1hdGlvbihzdW5zZXRUaW1lKSB7XG4gICAgY29uc3Qgc3Vuc2V0Q29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnc3Vuc2V0J10pO1xuICAgIHN1bnNldENvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1N1bnNldCcpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydzdW5zZXQtdGltZSddLCBzdW5zZXRUaW1lKSk7XG4gICAgcmV0dXJuIHN1bnNldENvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZGl2IGVsZW1lbnQsIGFuZCBhcHBlbmRzIGEgPGg1PjwvaDU+IGFuZCA8cD48L3A+IGVsZW1lbnQgd2l0aGluIGl0IHRoYXQgZGlzcGxheXMgdGhlIGN1cnJlbnQgbW9vbiBwaGFzZVxuICogQHBhcmFtIHtzdHJpbmd9IG1vb25QaGFzZSB0aGUgY3VycmVudCBtb29uIHBoYXNlXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSBjdXJyZW50IG1vb24gcGhhc2VcbiAqL1xuZnVuY3Rpb24gbW9vbkluZm9ybWF0aW9uKG1vb25QaGFzZSkge1xuICAgIGNvbnN0IG1vb25waGFzZUNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ21vb24tcGhhc2UnXSk7XG4gICAgbW9vbnBoYXNlQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnTW9vbiBQaGFzZScpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydwaGFzZSddLCBtb29uUGhhc2UpKTtcbiAgICByZXR1cm4gbW9vbnBoYXNlQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHRvIGJlIHVzZWQgd2hlbiB0aGUgd2VicGFnZSBpcyBsb2FkZWQgdXAgYW5kIGl0IGZpbGxzIHRoZSB3ZWJwYWdlIHdpdGggdGhlIHJlcXVpcmVkIGluZm9ybWF0aW9uIHdpdGggdGhlIGRlZmF1bHQgY2l0eSBiZWluZyBsb25kb25cbiAqL1xuYXN5bmMgZnVuY3Rpb24gb25Mb2FkRGVmYXVsdFdlYXRoZXIoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZDI2YThhOTA3NTJmNDVjMmEwMzE1NDkwNzIzMDUwNSZxPWxvbmRvbiZkYXlzPTcmYXFpPW5vJmFsZXJ0cz1ubycsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IGxvbmRvbkluZm8gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZChkaXNwbGF5TG9jYXRpb25EZXRhaWxzKHJldHJpZXZlQ2l0eShsb25kb25JbmZvKSwgcmV0cmlldmVDb3VudHJ5KGxvbmRvbkluZm8pLCBjcmVhdGVTdGFuZGFyZERhdGUocmV0cmlldmVEYXRlQW5kVGltZUFycihsb25kb25JbmZvKVswXSksIGNyZWF0ZVN0YW5kYXJkVGltZShyZXRyaWV2ZURhdGVBbmRUaW1lQXJyKGxvbmRvbkluZm8pWzFdKSkpO1xuICAgIGN1cnJlbnREYXlJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQoY3VycmVudFRlbXBEZXRhaWxzU2VjdGlvbih0ZW1wRGV0YWlsc1NlY3Rpb24ocmV0cmlldmVDdXJyZW50VGVtcEltZyhsb25kb25JbmZvKSwgcmV0cmlldmVDdXJyZW50VGVtcChsb25kb25JbmZvKSksIHRlbXBDb25kaXRpb25zU2VjdGlvbihyZXRyaWV2ZUN1cnJlbnRDb25kaXRpb24obG9uZG9uSW5mbyksIHJldHJpZXZlRmVlbHNMaWtlVGVtcChsb25kb25JbmZvKSkpKTtcbiAgICBjdXJyZW50RGF5SW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kKGV4dHJhSW5mb3JtYXRpb25TZWN0aW9uKHdpbmRJbmZvcm1hdGlvbihyZXRyaWV2ZVdpbmREZWdyZWVzKGxvbmRvbkluZm8pLCByZXRyaWV2ZVdpbmRTcGVlZChsb25kb25JbmZvKSksIGh1bWlkaXR5SW5mb3JtYXRpb24ocmV0cmlldmVIdW1pZGl0eShsb25kb25JbmZvKSksXG4gICAgICAgIHV2SW5mb3JtYXRpb24ocmV0cmlldmVVdk51bShsb25kb25JbmZvKSksIHZpc2liaWxpdHlJbmZvcm1hdGlvbihyZXRyaWV2ZVZpc2liaWxpdHlEaXN0YW5jZShsb25kb25JbmZvKSksIGNsb3VkaW5lc3NJbmZvcm1hdGlvbihyZXRyaWV2ZUNsb3VkaW5lc3NQZXJjZW50YWdlKGxvbmRvbkluZm8pKSwgcmFpbkluZm9ybWF0aW9uKHJldHJpZXZlQ2hhbmNlT2ZSYWluKGxvbmRvbkluZm8pKSxcbiAgICAgICAgc3VucmlzZUluZm9ybWF0aW9uKHJldHJpZXZlU3VucmlzZVRpbWUobG9uZG9uSW5mbykpLCBzdW5zZXRJbmZvcm1hdGlvbihyZXRyaWV2ZVN1bnNldFRpbWUobG9uZG9uSW5mbykpLCBtb29uSW5mb3JtYXRpb24ocmV0cmlldmVNb29uUGhhc2UobG9uZG9uSW5mbykpKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5LWhvdXJseS13ZWF0aGVyLWNhcm91c2VsJykuYXBwZW5kKGRhaWx5V2VhdGhlclNlY3Rpb24oY3JlYXRlQWxsRGF5c1RvRGlzcGxheShsb25kb25JbmZvKSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1ob3VybHktd2VhdGhlci1jYXJvdXNlbCcpLmFwcGVuZChob3VybHlXZWF0aGVyKGNyZWF0ZUFuQXJyYXlPZkFsbEhvdXJzKGxvbmRvbkluZm8pKSk7XG59O1xuXG5leHBvcnQgeyBjdXJyZW50RGF5SW5mb3JtYXRpb25Db250YWluZXIsIG9uTG9hZERlZmF1bHRXZWF0aGVyIH07IiwiLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIHRha2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgYW5kIGFkZHMgdGhvc2UgY2xhc3NlcyB0byB0aGUgZWxlbWVudCB1c2luZyBhIGZvckVhY2ggbG9vcFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnQgdGhlIGVsZW1lbnQgdGhhdCB3ZSBuZWVkIHRvIGFkZCB0aGUgY2xhc3NlcyB0byBcbiAqL1xuZnVuY3Rpb24gYWRkQ2xhc3Nlc1RvRWxlbWVudChjbGFzc2VzLCBlbGVtZW50KSB7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKGluZGl2aWR1YWxDbGFzcyA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoaW5kaXZpZHVhbENsYXNzKSk7XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGEgZGl2IGVsZW1lbnQgd2l0aCBpdHMgY2xhc3NlcyBwcm92aWRlZCBhcyBhbiBhcmd1bWVudFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgZGl2XG4gKiBAcmV0dXJucyBhIGRpdiBET00gZWxlbWVudFxuICovXG5mdW5jdGlvbiBkaXZHZW5lcmF0b3IoY2xhc3Nlcykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgZGl2KVxuICAgIHJldHVybiBkaXY7XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGFuIGltZyBlbGVtZW50LCB3aXRoIHRoZSBzcGVjaWZpZWQsIHNyYywgYWx0IGFuZCBjbGFzc2VzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjIHRoZSBwYXRoIHRvIHRoZSBpbWFnZSB3ZSB3YW50IHRvIHVzZVxuICogQHBhcmFtIHtzdHJpbmd9IGFsdCB0aGUgYWx0IGRlc2NyaXB0aW9uIG9mIHRoZSBpbWcgaW5jYXNlIGl0IGRvZXNuJ3QgbG9hZFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgaW1nXG4gKiBAcmV0dXJucyBhbiBpbWcgZWxlbWVudFxuICovXG5mdW5jdGlvbiBpbWdHZW5lcmF0b3Ioc3JjLCBhbHQgPSAnJywgY2xhc3Nlcywgcm90YXRpb24gPSAwKSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgICBpbWcuYWx0ID0gYWx0O1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgaW1nKTtcbiAgICBpbWcuc3R5bGUucm90YXRlID0gYCR7cm90YXRpb259ZGVnYFxuICAgIHJldHVybiBpbWc7XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGEgaGVhZGluZyBvZiB0aGUgZGVzaXJlZCBzaXplLCBhbmQgYWRkcyB0aGUgdGV4dCBzcGVjaWZpZWQgYXMgd2VsbCBhcyB0aGUgY2xhc3NlcyBwcm92aWRlZFxuICogQHBhcmFtIHtzdHJpbmd9IGhlYWRpbmdTaXplIDEgb2YgNiBzaXplcyB3ZSB3YW50IHRoZSBoZWFkaW5nIHRvIGJlIGUuZy4gJ2gxJ1xuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgaGVhZGluZ1xuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgdGhlIHRleHQgdGhlIGhlYWRpbmcgbmVlZHMgdG8gZGlzcGxheSBcbiAqIEBwYXJhbSB7b2JqZWN0fSBzcGFuRWxlbWVudFByZXBwZW5kIGEgZG9tIGVsZW1lbnQgdGhhdCB3ZSB3YW50IHRvIGFkZCBiZWZvcmUgdGhlIHRleHQgcGFydCBvZiB0aGUgaGVhZGluZ1xuICogQHBhcmFtIHtvYmplY3R9IHNwYW5FbGVtZW50QXBwZW5kIGEgZG9tIGVsZW1lbnQgdGhhdCB3ZSB3YW50IHRvIGFkZCBhZnRlciB0aGUgdGV4dCBwYXJ0IG9mIHRoZSBoZWFkaW5nXG4gKiBAcmV0dXJucyBhIGhlYWRpbmcgRE9NIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gaGVhZGluZ0dlbmVyYXRvcihoZWFkaW5nU2l6ZSwgY2xhc3NlcywgdGV4dCwgc3BhbkVsZW1lbnRQcmVwcGVuZCA9ICcnLCBzcGFuRWxlbWVudEFwcGVuZCA9ICcnKSB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaGVhZGluZ1NpemUpO1xuICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gdGV4dDtcbiAgICBoZWFkaW5nLnByZXBlbmQoc3BhbkVsZW1lbnRQcmVwcGVuZClcbiAgICBoZWFkaW5nLmFwcGVuZChzcGFuRWxlbWVudEFwcGVuZClcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIGhlYWRpbmcpO1xuICAgIHJldHVybiBoZWFkaW5nO1xufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhIGJ1dHRvbiB3aXRoIHRoZSBjbGFzc2VzIGFuZCB0ZXh0IHByb3ZpZGVkXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBoZWFkaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCB0aGUgdGV4dCBuZWVkZWQgd2l0aGluIHRoZSBidXR0b24gXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgdGhlIGlkIHdlIHdhbnQgdG8gYXNzaWduIHRvIHRoZSBidXR0b25cbiAqIEBwYXJhbSB7b2JqZWN0fSBzcGFuRWxlbWVudFByZXBwZW5kIGEgZG9tIGVsZW1lbnQgdGhhdCB3ZSB3YW50IHRvIGFkZCBiZWZvcmUgdGhlIHRleHQgcGFydCBvZiB0aGUgYnV0dG9uXG4gKiBAcGFyYW0ge29iamVjdH0gc3BhbkVsZW1lbnRBcHBlbmQgYSBkb20gZWxlbWVudCB0aGF0IHdlIHdhbnQgdG8gYWRkIGFmdGVyIHRoZSB0ZXh0IHBhcnQgb2YgdGhlIGJ1dHRvblxuICogQHJldHVybnMgYSBidXR0b24gZWxlbWVudFxuICovXG5mdW5jdGlvbiBidXR0b25HZW5lcmF0b3IoY2xhc3NlcywgdGV4dCwgaWQgPSAnJywgc3BhbkVsZW1lbnRQcmVwcGVuZCA9ICcnLCBzcGFuRWxlbWVudEFwcGVuZCA9ICcnKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQ2xhc3Nlc1RvRWxlbWVudChjbGFzc2VzLCBidG4pO1xuICAgIGJ0bi5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIGJ0bi5pZCA9IGlkO1xuICAgIGJ0bi5wcmVwZW5kKHNwYW5FbGVtZW50UHJlcHBlbmQpO1xuICAgIGJ0bi5hcHBlbmQoc3BhbkVsZW1lbnRBcHBlbmQpO1xuICAgIHJldHVybiBidG47XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGEgc3BhbiBlbGVtZW50IHdpdGggdGhlIGNsYXNzZXMgYW5kIHRleHQgcHJvdmlkZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGhlYWRpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IG5lZWRlZCB3aXRoaW4gdGhlIHNwYW4gXG4gKiBAcmV0dXJucyBhIHNwYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzcGFuR2VuZXJhdG9yKGNsYXNzZXMsIHRleHQpIHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3Nlcywgc3Bhbik7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHJldHVybiBzcGFuO1xufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhIGZvcm0gZWxlbWVudCB3aXRoIHRoZSBjbGFzc2VzIHByb3ZpZGVkXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBmb3JtXG4gKiBAcmV0dXJucyBhIGZvcm0gZWxlbWVudFxuICovXG5mdW5jdGlvbiBmb3JtR2VuZXJhdG9yKGNsYXNzZXMpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgZm9ybSk7XG4gICAgcmV0dXJuIGZvcm07XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGFuIGlucHV0IGVsZW1lbnQgYW5kIGFkZHMgdGhlIHNwZWNpZmllZCBhdHRyaWJ1dGVzIGFuZCB2YWx1ZXMgdG8gaXRcbiAqIEBwYXJhbSB7QXJyYXl9IGF0dHJpYnV0ZXMgYW4gYXJyYXkgb2YgYXJyYXlzIHdoZXJlIGVhY2ggZWxlbWVudCBoYXMgdGhlIGF0dHJpYnV0ZSwgYW5kIGl0J3MgYXNzb2NpYXRlZCB2YWx1ZSBcbiAqIEByZXR1cm5zIGFuIGlucHV0IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gaW5wdXRHZW5lcmF0b3IoYXR0cmlidXRlcykge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0cmlidXRlID0+IGlucHV0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSkpO1xuICAgIHJldHVybiBpbnB1dDtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgcGFyYWdyYXBoIGVsZW1lbnQgYW5kIGZpbGxzIGl0IHdpdGggdGhlIGFyZ3VtZW50cyBwcm92aWRlZFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgZm9ybVxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgdGhlIHRleHQgbmVlZGVkIHdpdGhpbiB0aGUgPHA+PC9wPiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBzcGFuRWxlbWVudFByZXBwZW5kIGEgZG9tIGVsZW1lbnQgdGhhdCB3ZSB3YW50IHRvIGFkZCBiZWZvcmUgdGhlIHRleHQgcGFydCBvZiB0aGUgcGFyYWdyYXBoXG4gKiBAcGFyYW0ge29iamVjdH0gc3BhbkVsZW1lbnRBcHBlbmQgYSBkb20gZWxlbWVudCB0aGF0IHdlIHdhbnQgdG8gYWRkIGFmdGVyIHRoZSB0ZXh0IHBhcnQgb2YgdGhlIHBhcmFncmFwaFxuICogQHJldHVybnMgYSA8cD48L3A+IGVsZW1lbnQgdGhhdCBpcyBjdXN0b21pc2VkIGFzIHNwZWNpZmllZFxuICovXG5mdW5jdGlvbiBwYXJhZ3JhcGhHZW5lcmF0b3IoY2xhc3NlcywgdGV4dCwgc3BhbkVsZW1lbnRQcmVwcGVuZCA9ICcnLCBzcGFuRWxlbWVudEFwcGVuZCA9ICcnKSB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgcGFyYWdyYXBoKTtcbiAgICBwYXJhZ3JhcGguaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBwYXJhZ3JhcGgucHJlcGVuZChzcGFuRWxlbWVudFByZXBwZW5kKVxuICAgIHBhcmFncmFwaC5hcHBlbmQoc3BhbkVsZW1lbnRBcHBlbmQpXG4gICAgcmV0dXJuIHBhcmFncmFwaDtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGhlbHAgY2hvb3NlIHRoZSBjb3JyZWN0IGNsYXNzIGJhc2VkIG9uIHRoZSB1di1pbmRleCBudW1iZXIgcHJvdmlkZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSB1dk51bSB0aGUgbnVtYmVyIHRoYXQgd2Ugd2FudCB0byBjaGVjayB3aGV0aGVyIG9yIG5vdCBpdCdzIHZhbHVlIGlzIGEgc2FmZSwgYW1iZXIgb3IgZGFuZ2VyIHZhbHVlIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBjbGFzc2lmaWVzIHRoZSB2YWx1ZVxuICovXG5mdW5jdGlvbiBjaGVja0NhdGVnb3J5T2ZVdih1dk51bSkge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIHV2TnVtIDw9IDI6XG4gICAgICAgICAgICByZXR1cm4gJ3NhZmUnO1xuICAgICAgICBjYXNlIHV2TnVtIDw9IDc6XG4gICAgICAgICAgICByZXR1cm4gJ2FtYmVyJztcbiAgICAgICAgY2FzZSB1dk51bSA+PSA4OlxuICAgICAgICAgICAgcmV0dXJuICdkYW5nZXInO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGRpdkdlbmVyYXRvciwgaW1nR2VuZXJhdG9yLCBoZWFkaW5nR2VuZXJhdG9yLCBidXR0b25HZW5lcmF0b3IsIHNwYW5HZW5lcmF0b3IsIGlucHV0R2VuZXJhdG9yLCBmb3JtR2VuZXJhdG9yLCBjaGVja0NhdGVnb3J5T2ZVdiwgcGFyYWdyYXBoR2VuZXJhdG9yIH0iLCJpbXBvcnQgeyBkaXZHZW5lcmF0b3IsIGltZ0dlbmVyYXRvciwgaGVhZGluZ0dlbmVyYXRvciwgc3BhbkdlbmVyYXRvciwgaW5wdXRHZW5lcmF0b3IsIGJ1dHRvbkdlbmVyYXRvciwgZm9ybUdlbmVyYXRvciB9IGZyb20gXCIuL2dlbmVyYXRvckZ1bmN0aW9uc1wiO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyB0aGUgdGl0bGUgc2VjdGlvbiBvZiB0aGUgaGVhZGVyXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSB0aXRsZSBhbmQgdGhlIHBhZ2UgbG9nb1xuICovXG5mdW5jdGlvbiB0aXRsZVNlY3Rpb24oKSB7XG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd0aXRsZSddKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmQoaW1nR2VuZXJhdG9yKCcuLy4uL3NyYy9hc3NldHMvcGFnZS1pY29uLnBuZycsICdhIGNpcmN1bGFyIGljb24gZGVwaWN0aW5nIGFsbCA0IHNlYXNvbnMnLCBbJ21haW4taWNvbiddKSwgaGVhZGluZ0dlbmVyYXRvcignaDEnLCBbJ3BhZ2UtdGl0bGUnXSwgJ1dlYXRoZXInLCB1bmRlZmluZWQsIHNwYW5HZW5lcmF0b3IoWyd0aXRsZS1lbmQnXSwgJ1dhdGNoJykpKTtcbiAgICByZXR1cm4gdGl0bGVDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyB0aGUgc2VhcmNoIGJhciBzZWN0aW9uIG9mIHRoZSBoZWFkZXJcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIHNlYXJjaCBiYXJcbiAqL1xuZnVuY3Rpb24gaGVhZGVyRm9ybVNlY3Rpb24oKSB7XG4gICAgY29uc3QgZm9ybSA9IGZvcm1HZW5lcmF0b3IoWydzZWFyY2gtZm9ybSddKTtcbiAgICBmb3JtLmFwcGVuZChpbnB1dEdlbmVyYXRvcihbWyd0eXBlJywgJ3NlYXJjaCddLCBbJ2lkJywgJ3NlYXJjaC1iYXInXSwgWydwbGFjZWhvbGRlcicsICdTZWFyY2ggYSBsb2NhdGlvbiddLCBbJ3JlcXVpcmVkJywgdHJ1ZV1dKSwgaW1nR2VuZXJhdG9yKCcuLy4uL3NyYy9hc3NldHMvc2VhcmNoLWljb24uc3ZnJywgJ0EgbWFnbmlmeWluZyBnbGFzcycsIFsnc2VhcmNoLWJ1dHRvbiddKSk7XG4gICAgcmV0dXJuIGZvcm07XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyB0aGUgYnV0dG9ucyB1c2VkIHRvIGNvbnRyb2wgd2hldGhlciB0aGUgdGVtcGVyYXR1cmUgaXMgZGlzcGxheWVkIGluIGNlbHNpdXMgb3IgZmFocmVuaGVpdFxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyB0d28gYnV0dG9uc1xuICovXG5mdW5jdGlvbiBoZWFkZXJCdXR0b25zKCkge1xuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydjaGFuZ2UtZGVncmVlcyddKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZChidXR0b25HZW5lcmF0b3IoWydjZWxzaXVzLWJ0bicsICdidG4nLCAnYWN0aXZlJ10sICfCsEMnKSwgYnV0dG9uR2VuZXJhdG9yKFsnZmFocmVuaGVpdC1idG4nLCAnYnRuJ10sICfCsEYnKSk7XG4gICAgcmV0dXJuIGJ1dHRvbnNDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGhlYWRlciB3aXRoIGFsbCBvZiBpdHMgY29udGVudFxuICogQHJldHVybnMgQSBET00gZWxlbWVudCBvYmplY3QgdGhlIGNvbnRhaW5zIGV2ZXJ5dGhpbmcgbmVlZGVkIGluIHRoZSBoZWFkZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuYXBwZW5kKHRpdGxlU2VjdGlvbigpLCBoZWFkZXJGb3JtU2VjdGlvbigpLCBoZWFkZXJCdXR0b25zKCkpO1xuICAgIHJldHVybiBoZWFkZXI7XG59O1xuXG4iLCJpbXBvcnQgeyBkaXZHZW5lcmF0b3IsIGhlYWRpbmdHZW5lcmF0b3IsIGltZ0dlbmVyYXRvciwgcGFyYWdyYXBoR2VuZXJhdG9yLCBzcGFuR2VuZXJhdG9yIH0gZnJvbSBcIi4vZ2VuZXJhdG9yRnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBnZXRIb3VyVGVtcERlc2NyaXB0aW9uLCBnZXRIb3VyVGVtcEljb24sIGdldEhvdXJUaW1lLCBnZXRIb3VyVGVtcCB9IGZyb20gXCIuL3JldHJpZXZlSW5mb3JtYXRpb25cIjtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFwcGVuZHMgdGhlIGhvdXIgY29udGFpbnMgb250byB0aGUgaG91cmx5LXdlYXRoZXItY29udGFpbmVyIGRpdiBzbyB0aGF0IGl0IGNhbiBiZSBkaXNwbGF5ZWQgb24gc2NyZWVuIFxuICogQHBhcmFtIHthcnJheX0gaG91ckNvbnRhaW5lcnMgYW4gYXJyYXkgb2YgaG91ckNvbnRhaW5lcnMsIHRoZSBhcnJheSBzaG91bGQgY29udGFpbiA0IGVsZW1lbnRzXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHRoZSBob3VybHktd2VhdGhlci1jb250YWluZXIgYW5kIGNvbnRhaW5zIGFsbCBob3VybHkgd2VhdGhlciB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZFxuICovXG5mdW5jdGlvbiBob3VybHlXZWF0aGVyKGhvdXJDb250YWluZXJzKSB7XG4gICAgY29uc3QgaG91cmx5V2VhdGhlckNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2hvdXJseS13ZWF0aGVyLWNvbnRhaW5lcicsICdoaWRlJ10pO1xuICAgIGhvdXJseVdlYXRoZXJDb250YWluZXIuYXBwZW5kKC4uLmhvdXJDb250YWluZXJzKTtcbiAgICByZXR1cm4gaG91cmx5V2VhdGhlckNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgYW4gaG91ci1jb250YWluZXIgZGl2LCBhbmQgc3RvcmVzIGluZm9ybWF0aW9uIGFib3V0IHRoZSB3ZWF0aGVyIGluIGVhY2ggaG91ciBvbiBpdFxuICogQHBhcmFtIHtudW1iZXJ9IGNvbnRhaW5lck51bSB0aGUgbnVtYmVyIG9mIHRoZSBjb250YWluZXIgZS5nLiBudW1iZXIgMCBob2xkcyBob3VycyAwLTVcbiAqIEBwYXJhbSB7YXJyYXl9IGhvdXJzVW5kZXJDb250YWluZXIgYW4gYXJyYXkgb2YgaW5kaXZpZHVhbCBob3VycyB0aGF0IHNob3VsZCBiZSBzdG9yZWQgdW5kZXIgdGhlIGNvbnRhaW5lciB0aGF0IHdpbGwgYmUgcmV0dXJuZWRcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaGFzIDYgZWxlbWVudHMgYXMgY2hpbGRyZW5cbiAqL1xuZnVuY3Rpb24gZ3JvdXBPZkhvdXJzQ29udGFpbmVyKGNvbnRhaW5lck51bSwgaG91cnNVbmRlckNvbnRhaW5lcikge1xuICAgIGNvbnN0IGhvdXJDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoW2Bob3VyLWNvbnRhaW5lci0ke2NvbnRhaW5lck51bX1gLCAnaG91ci1jb250YWluZXInLCBgJHtjb250YWluZXJOdW0gPT09IDAgPyAnc2hvd24nIDogJ2hpZGUnfWBdKTtcbiAgICBob3VyQ29udGFpbmVyLmFwcGVuZCguLi5ob3Vyc1VuZGVyQ29udGFpbmVyKTtcbiAgICByZXR1cm4gaG91ckNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbnMgdGFrZXMgaW4gYWxsIHRoZSBwYXJhbWV0ZXJzIHJlcXVpcmVkIHRvIGNyZWF0ZSBhIGRpdiB0aGF0IHNob3dzIHRoZSB3ZWF0aGVyIGRldGFpbHMgZm9yIGEgc3BlY2lmaWVkIGhvdXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBob3VyTnVtIHRoaXMgaXMgYSBudW1iZXIgYmV0d2VlbiAwLTIzIHNob3dpbmcgd2hpY2ggaG91ciB0aGUgY29udGFpbmVyIGlzIGZvclxuICogQHBhcmFtIHtzdHJpbmd9IHRpbWVUb0Rpc3BsYXkgdGhlIHRpbWUgdGhhdCBuZWVkcyB0byBiZSBkaXNwbGF5ZWQgb24gc2NyZWVuIFxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBUb0Rpc3BsYXkgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHdlYXRoZXIgZHVyaW5nIHRoYXQgaG91clxuICogQHBhcmFtIHtzdHJpbmd9IGltZ1RvRGlzcGxheSBhIHBhdGggdG8gdGhlIGltYWdlIHRoZSBjb3JyZXNwb25kcyB3aXRoIHRoZSB3ZWF0aGVyIGF0IHRoYXQgaG91clxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgdGhlIGluZm9ybWF0aW9uIHJlcXVpcmVkIHRvIHJlcHJlc2VudCB0aGUgd2VhdGhlciBkdXJpbmcgdGhlIGhvdXJcbiAqL1xuZnVuY3Rpb24gaW5kaXZpZHVhbEhvdXJDb250YWluZXIoaG91ck51bSwgdGltZVRvRGlzcGxheSwgdGVtcFRvRGlzcGxheSwgaW1nVG9EaXNwbGF5KSB7XG4gICAgY29uc3QgaG91ckNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2hvdXJseS13ZWF0aGVyJywgYGhvdXItJHtob3VyTnVtfWBdKTtcbiAgICBob3VyQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoMicsIFtdLCB0aW1lVG9EaXNwbGF5KSwgdGVtcFRvRGlzcGxheSwgaW1nR2VuZXJhdG9yKGltZ1RvRGlzcGxheSwgJycsIFsnaG91cmx5LXdlYXRoZXItaWNvbiddKSk7XG4gICAgcmV0dXJuIGhvdXJDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb25zIGdyb3VwcyB0aGUgdGVtcGVyYXR1cmUgYW5kIGEgZGVzY3JpcHRpb24gYWJvdXQgdGhlIHdlYXRoZXIgaW50byBhbiBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcCB0aGUgdGVtcGVyYXR1cmUgXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcERlc2NyaXB0aW9uIGEgZGVzY3JpcHRpb24gYWJvdXQgdGhlIHdlYXRoZXJcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgbWFrZXMgdXAgdGhlIHRlbXBlcmF0dXJlIGluZm9ybWF0aW9uIGFib3V0IGEgY2VydGFpbiBob3VyXG4gKi9cbmZ1bmN0aW9uIGhvdXJXZWF0aGVyRGV0YWlscyh0ZW1wLCB0ZW1wRGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCB3ZWF0aGVyRGV0YWlsc0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2hvdXItd2VhdGhlci1kZXNjcmlwdGlvbiddKTtcbiAgICBjb25zdCB0ZW1wU3BhbiA9IHNwYW5HZW5lcmF0b3IoWydob3VyLXdlYXRoZXInXSwgdGVtcCk7XG4gICAgY29uc3Qgd2VhdGhlclN5bWJvbCA9IHNwYW5HZW5lcmF0b3IoWydtZXRob2Qtb2YtbWVhc3VyZW1lbnQnXSwgJ0MnKTtcbiAgICB3ZWF0aGVyRGV0YWlsc0NvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDMnLCBbXSwgJ8KwJywgdGVtcFNwYW4sIHdlYXRoZXJTeW1ib2wpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydob3VyLWRlc2NyaXB0aW9uJ10sIHRlbXBEZXNjcmlwdGlvbikpO1xuICAgIHJldHVybiB3ZWF0aGVyRGV0YWlsc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBzb3J0cyBlYWNoIGhvdXIgY3JlYXRlcyBhbmQgc29ydHMgZWFjaCBob3VyIGludG8gdGhlIGNvcnJlY3QgY29udGFpbmVyXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgZnJvbSB3aGljaCB3ZSB3aWxsIGJlIGdldHRpbmcgaW5mb3JtYXRpb24gZnJvbSBcbiAqIEByZXR1cm5zIGFuIGFycmF5IHRoYXQgY29udGFpbnMgNCBkaXYgZWxlbWVudHMsIGVhY2ggZGl2IGhhcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgd2VhdGhlciBkdXJpbmcgYSBjZXJ0YWluIGhvdXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFuQXJyYXlPZkFsbEhvdXJzKG9iaikge1xuICAgIGNvbnN0IGNvbnRhaW5lck9uZSA9IFtdO1xuICAgIGNvbnN0IGNvbnRhaW5lclR3byA9IFtdO1xuICAgIGNvbnN0IGNvbnRhaW5lclRocmVlID0gW107XG4gICAgY29uc3QgY29udGFpbmVyRm91ciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICBpZiAoaSA8PSA1KSBjb250YWluZXJPbmUucHVzaChpbmRpdmlkdWFsSG91ckNvbnRhaW5lcihpLCBnZXRIb3VyVGltZShpLCBvYmopLCBob3VyV2VhdGhlckRldGFpbHMoZ2V0SG91clRlbXAoaSwgb2JqKSwgZ2V0SG91clRlbXBEZXNjcmlwdGlvbihpLCBvYmopKSwgZ2V0SG91clRlbXBJY29uKGksIG9iaikpKTtcbiAgICAgICAgZWxzZSBpZiAoaSA8PSAxMSkgY29udGFpbmVyVHdvLnB1c2goaW5kaXZpZHVhbEhvdXJDb250YWluZXIoaSwgZ2V0SG91clRpbWUoaSwgb2JqKSwgaG91cldlYXRoZXJEZXRhaWxzKGdldEhvdXJUZW1wKGksIG9iaiksIGdldEhvdXJUZW1wRGVzY3JpcHRpb24oaSwgb2JqKSksIGdldEhvdXJUZW1wSWNvbihpLCBvYmopKSk7XG4gICAgICAgIGVsc2UgaWYgKGkgPD0gMTcpIGNvbnRhaW5lclRocmVlLnB1c2goaW5kaXZpZHVhbEhvdXJDb250YWluZXIoaSwgZ2V0SG91clRpbWUoaSwgb2JqKSwgaG91cldlYXRoZXJEZXRhaWxzKGdldEhvdXJUZW1wKGksIG9iaiksIGdldEhvdXJUZW1wRGVzY3JpcHRpb24oaSwgb2JqKSksIGdldEhvdXJUZW1wSWNvbihpLCBvYmopKSk7XG4gICAgICAgIGVsc2UgaWYgKGkgPD0gMjMpIGNvbnRhaW5lckZvdXIucHVzaChpbmRpdmlkdWFsSG91ckNvbnRhaW5lcihpLCBnZXRIb3VyVGltZShpLCBvYmopLCBob3VyV2VhdGhlckRldGFpbHMoZ2V0SG91clRlbXAoaSwgb2JqKSwgZ2V0SG91clRlbXBEZXNjcmlwdGlvbihpLCBvYmopKSwgZ2V0SG91clRlbXBJY29uKGksIG9iaikpKTtcbiAgICB9O1xuICAgIGNvbnN0IGZ1bGxIb3Vyc0FyciA9IFtncm91cE9mSG91cnNDb250YWluZXIoMCwgY29udGFpbmVyT25lKSwgZ3JvdXBPZkhvdXJzQ29udGFpbmVyKDEsIGNvbnRhaW5lclR3byksIGdyb3VwT2ZIb3Vyc0NvbnRhaW5lcigyLCBjb250YWluZXJUaHJlZSksIGdyb3VwT2ZIb3Vyc0NvbnRhaW5lcigzLCBjb250YWluZXJGb3VyKV07XG4gICAgcmV0dXJuIGZ1bGxIb3Vyc0Fycjtcbn07XG5cbmV4cG9ydCB7IGhvdXJseVdlYXRoZXIsIGdyb3VwT2ZIb3Vyc0NvbnRhaW5lciwgaW5kaXZpZHVhbEhvdXJDb250YWluZXIsIGhvdXJXZWF0aGVyRGV0YWlscyB9IiwiaW1wb3J0IHsgbWFrZUZhaHJlbmhlaXRBY3RpdmUsIG1ha2VDZWxzaXVzQWN0aXZlLCBjZWxzaXVzVG9GYWhyZW5oZWl0LCBmYWhyZW5oZWl0VG9DZWxzaXVzLCBjaGFuZ2VHcm91cEludG9DZWxzaXVzLCBjaGFuZ2VHcm91cEludG9GYWhyZW5oZWl0IH0gZnJvbSAnLi90ZW1wQ29udmVyc2lvbkxvZ2ljJztcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNvbnRhaW5zIHRoZSBsb2dpYyBmb3IgYm90aCB0aGUgZGFpbHkgYW5kIGhvdXJseSB3ZWF0aGVyIGJ1dHRvbiwgaWYgdGhlIGRhaWx5IHdlYXRoZXIgYnV0dG9uIGlzIGNsaWNrZWQgdGhlbiB0aGF0IGlzIGRpc3BsYXllZCBhbmQgdGhlIGhvdXJseSB3ZWF0aGVyIGRpdiBpcyBoaWRkZW4gYW5kIHZpY2UgdmVyc2EgaWYgdGhlIGhvdXJseSB3ZWF0aGVyIGJ1dHRvbiBpcyBjbGlja2VkXG4gKiBAcGFyYW0geyBvYmplY3QgfSBlIHRoZSBldmVudCBvYmplY3QgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZlbnRcbiAqL1xuZnVuY3Rpb24gZGFpbHlBbmRIb3VybHlCdXR0b25Mb2dpYyhlKSB7XG4gICAgY29uc3QgZGFpbHlXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5LXdlYXRoZXItY29udGFpbmVyJyk7XG4gICAgY29uc3QgaG91cmx5V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktd2VhdGhlci1jb250YWluZXInKTtcbiAgICBjb25zdCBkYWlseVdlYXRoZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHktd2VhdGhlci1idG4nKTtcbiAgICBjb25zdCBob3VybHlXZWF0aGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS13ZWF0aGVyLWJ0bicpO1xuICAgIGNvbnN0IHNsaWRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1idXR0b25zJyk7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBkYWlseVdlYXRoZXJCdXR0b24pIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGhvdXJseVdlYXRoZXJCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIHNsaWRlQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGRhaWx5V2VhdGhlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGhvdXJseVdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgPT09IGhvdXJseVdlYXRoZXJCdXR0b24pIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGRhaWx5V2VhdGhlckJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgc2xpZGVCdXR0b25zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgZGFpbHlXZWF0aGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgaG91cmx5V2VhdGhlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjaGVja3MgYWxsIGhvdXJseSBjb250YWluZXJzIGFuZCBmaW5kcyB0aGUgb25lIHRoYXQgY3VycmVudGx5IGhhcyB0aGUgc2hvd24gY2xhc3MgYXBwbGllZCB0byBpdFxuICogQHJldHVybnMgdGhlIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSAnc2hvd24nIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGZpbmRBY3RpdmVIb3VybHlDb250YWluZXIoKSB7XG4gICAgY29uc3QgYWxsSG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VyLWNvbnRhaW5lcicpO1xuICAgIGZvciAobGV0IGhvdXJseURpdiBvZiBhbGxIb3VybHlEaXZzKSB7XG4gICAgICAgIGlmIChob3VybHlEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93bicpKSByZXR1cm4gaG91cmx5RGl2XG4gICAgfTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbnMgcnVucyB3aGVuIHRoZSB1c2VyIGNoYW5nZXMgdGhlIGNhcm91c2VsIHRvIHZpZXcgYSBjZXJ0YWluIGhvdXIsIHRoZSBkaXYgdGhhdCBpcyBjdXJyZW50bHkgc2hvd2luZyB3aWxsIGhhdmUgdGhlICdzaG93bicgY2xhc3MgYXBwbGllZCB0byBpdCBzbyB0aGlzIGZ1bmN0aW9uIGZpbmRzIHRoYXQgZGl2IGFuZCB0YWtlcyBpdHMgaW5kZXggbnVtYmVyXG4gKiBpdCB0aGVuIGNhbGxzIHRoZSBhZGRBY3RpdmVUb0RvdCBmdW5jdGlvbiBhbmQgcGFzc2VzIHRoYXQgaW5kZXggbnVtYmVyIHNvIHRoYXQgZG90IGhhcyB0aGUgJ2FjdGl2ZScgY2xhc3MgYXBwbGllZCB0byBpdFxuICovXG5mdW5jdGlvbiB1cGRhdGVEb3QoKSB7XG4gICAgY29uc3QgYWxsSG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VyLWNvbnRhaW5lcicpO1xuICAgIHJlbW92ZUFjdGl2ZUZyb21Eb3RzKCk7XG4gICAgYWxsSG91cmx5RGl2cy5mb3JFYWNoKChob3VybHlEaXYsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChob3VybHlEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93bicpKSBhZGRBY3RpdmVUb0RvdChpbmRleCk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gZmluZHMgdGhlIGRvdCB0aGF0IGhhcyB0aGUgJ2FjdGl2ZScgY2xhc3MgYXBwbGllZCB0byBpdCBhbmQgcmVtb3ZlcyBpdCBzbyB0aGVyZSBpcyBub3QgZG90IHRoYXQgaGFzIHRoZSBhY3RpdmUgY2xhc3MgYXBwbGllZCB0byBpdFxuICovXG5mdW5jdGlvbiByZW1vdmVBY3RpdmVGcm9tRG90cygpIHtcbiAgICBjb25zdCBhbGxEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvdCcpO1xuICAgIG91dGVyOlxuICAgIGZvciAobGV0IGRvdCBvZiBhbGxEb3RzKSB7XG4gICAgICAgIGlmIChkb3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgZG90LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgYnJlYWsgb3V0ZXI7XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiB1c2VzIHRoZSBkb3ROdW1iZXIgYXJndW1lbnQgdG8gZ2V0IHRoZSBjb3JyZXNwb25kaW5nIGRvdCBhbmQgYWRkIHRoZSAnYWN0aXZlJyBjbGFzcyB0byBpdFxuICogQHBhcmFtIHtudW1iZXJ9IGRvdE51bWJlciB0aGlzIGlzIHRoZSBpbmRleCBvZiB3aGljaCBkb3Qgd2Ugd2FudCB0byBhZGQgdGhlICdhY3RpdmUnIGNsYXNzIHRvIFxuICovXG5mdW5jdGlvbiBhZGRBY3RpdmVUb0RvdChkb3ROdW1iZXIpIHtcbiAgICBjb25zdCBhbGxEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvdCcpO1xuICAgIGFsbERvdHNbZG90TnVtYmVyXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBzaG93cyB0aGUgc3BlY2lmaWVkIGhvdXItY29udGFpbmVyIG9uIHNjcmVlblxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaG91ci1jb250YWluZXIgd2Ugd2FudCB0byBkaXNwbGF5IFxuICovXG5mdW5jdGlvbiBzaG93SG91cmx5Q29udGFpbmVyKGluZGV4KSB7XG4gICAgY29uc3QgaG91cmx5Q29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VyLWNvbnRhaW5lcicpO1xuICAgIGhvdXJseUNvbnRhaW5lcnNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBob3VybHlDb250YWluZXJzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdzaG93bicpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9ucyBoaWRlcyBhbGwgdGhlIGhvdXItY29udGFpbmVyc1xuICovXG5mdW5jdGlvbiBoaWRlQWxsSG91cmx5Q29udGFpbmVycygpIHtcbiAgICBjb25zdCBob3VybHlDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXItY29udGFpbmVyJyk7XG4gICAgaG91cmx5Q29udGFpbmVycy5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93bicpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJ1bnMgd2hlbiB0aGUgdXNlciBjbGlja3MgdGhlIG1vdmVGb3J3YXJkQnV0dG9uLCBhbmQgaXQgd29ya3MgYnkgY2hlY2tpbmcgdGhlcmUgaXMgYW5vdGhlciBzaWJpbGluZyBlbGVtZW50IGFuZCB0aGVuIHVwZGF0aW5nIHRvIHNob3cgdGhlIG5leHQgc2libGluZyBlbGVtZW50XG4gKiBAcmV0dXJucyB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gbW92ZUZvcndhcmRCdXR0b25Mb2dpYygpIHtcbiAgICBjb25zdCBhY3RpdmVIb3VybHlEaXYgPSBmaW5kQWN0aXZlSG91cmx5Q29udGFpbmVyKCk7XG4gICAgaWYgKGFjdGl2ZUhvdXJseURpdi5uZXh0RWxlbWVudFNpYmxpbmcgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlSG91cmx5RGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgYWN0aXZlSG91cmx5RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3duJyk7XG4gICAgICAgIGFjdGl2ZUhvdXJseURpdi5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBhY3RpdmVIb3VybHlEaXYubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3duJyk7XG4gICAgICAgIHVwZGF0ZURvdCgpO1xuICAgIH07XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcnVucyB3aGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgbW92ZUJhY2tCdXR0b24sIGFuZCBpdCB3b3JrcyBieSBjaGVja2luZyB0aGVyZSBpcyBhIHByZXZpb3VzIHNpYmlsaW5nIGVsZW1lbnQgYW5kIHRoZW4gdXBkYXRpbmcgdG8gc2hvdyB0aGUgcHJldmlvdXMgc2libGluZyBlbGVtZW50XG4gKiBAcmV0dXJucyB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gbW92ZUJhY2tCdXR0b25Mb2dpYygpIHtcbiAgICBjb25zdCBhY3RpdmVIb3VybHlEaXYgPSBmaW5kQWN0aXZlSG91cmx5Q29udGFpbmVyKCk7XG4gICAgaWYgKGFjdGl2ZUhvdXJseURpdi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2ZUhvdXJseURpdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGFjdGl2ZUhvdXJseURpdi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93bicpO1xuICAgICAgICBhY3RpdmVIb3VybHlEaXYucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGFjdGl2ZUhvdXJseURpdi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3duJyk7XG4gICAgICAgIHVwZGF0ZURvdCgpO1xuICAgIH07XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdGhlIGxvZ2ljIGJlaGluZCB3aGF0IHNob3VsZCBoYXBwZW4gd2hlbiBhbiBpbmRpdmlkdWFsIGRvdCBpcyBwcmVzc2VkLCBpdCBkaXNwbGF5cyB0aGUgY29ycmVzcG9uZGluZyBob3VyIGNvbnRhaW5lciwgYW5kIHVwZGF0ZXMgdGhlIGFjdGl2ZSBkb3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBlIHRoZSBldmVudCBvYmplY3QgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZlbnQgXG4gKi9cbmZ1bmN0aW9uIGRvdExvZ2ljKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkb3QnKSkge1xuICAgICAgICBoaWRlQWxsSG91cmx5Q29udGFpbmVycygpO1xuICAgICAgICByZW1vdmVBY3RpdmVGcm9tRG90cygpO1xuICAgICAgICBzaG93SG91cmx5Q29udGFpbmVyKGUudGFyZ2V0LmlkKTtcbiAgICAgICAgYWRkQWN0aXZlVG9Eb3QoZS50YXJnZXQuaWQpO1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiBtZWFzdXJlbWVudEJ1dHRvbnNMb2dpYyhlKSB7XG4gICAgY29uc3QgYWxsTWV0aG9kT2ZNZWFzdXJlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZXRob2Qtb2YtbWVhc3VyZW1lbnQnKTtcbiAgICBjb25zdCBtYWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJyk7XG4gICAgY29uc3QgZmVlbHNMaWtlVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlLXRlbXAnKTtcbiAgICBjb25zdCBhbGxEYXlPZlRoZVdlZWtNYXhUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRheS1vZi10aGUtd2Vlay1tYXgtdGVtcCcpO1xuICAgIGNvbnN0IGFsbERheU9mVGhlV2Vla01pblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5LW9mLXRoZS13ZWVrLW1pbi10ZW1wJyk7XG4gICAgY29uc3QgYWxsSG91clRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91ci13ZWF0aGVyJyk7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmFocmVuaGVpdC1idG4nKSkge1xuICAgICAgICBtYWtlRmFocmVuaGVpdEFjdGl2ZSgpO1xuICAgICAgICBhbGxNZXRob2RPZk1lYXN1cmVtZW50LmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmlubmVyVGV4dCA9ICdGJyk7XG4gICAgICAgIG1haW5UZW1wLmlubmVyVGV4dCA9IGNlbHNpdXNUb0ZhaHJlbmhlaXQobWFpblRlbXAuaW5uZXJUZXh0KTtcbiAgICAgICAgZmVlbHNMaWtlVGVtcC5pbm5lclRleHQgPSBjZWxzaXVzVG9GYWhyZW5oZWl0KGZlZWxzTGlrZVRlbXAuaW5uZXJUZXh0KTtcbiAgICAgICAgY2hhbmdlR3JvdXBJbnRvRmFocmVuaGVpdChhbGxEYXlPZlRoZVdlZWtNYXhUZW1wKTtcbiAgICAgICAgY2hhbmdlR3JvdXBJbnRvRmFocmVuaGVpdChhbGxEYXlPZlRoZVdlZWtNaW5UZW1wKTtcbiAgICAgICAgY2hhbmdlR3JvdXBJbnRvRmFocmVuaGVpdChhbGxIb3VyVGVtcCk7XG4gICAgfTtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxzaXVzLWJ0bicpKSB7XG4gICAgICAgIG1ha2VDZWxzaXVzQWN0aXZlKCk7XG4gICAgICAgIGFsbE1ldGhvZE9mTWVhc3VyZW1lbnQuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuaW5uZXJUZXh0ID0gJ0MnKTtcbiAgICAgICAgbWFpblRlbXAuaW5uZXJUZXh0ID0gZmFocmVuaGVpdFRvQ2Vsc2l1cyhtYWluVGVtcC5pbm5lclRleHQpO1xuICAgICAgICBmZWVsc0xpa2VUZW1wLmlubmVyVGV4dCA9IGZhaHJlbmhlaXRUb0NlbHNpdXMoZmVlbHNMaWtlVGVtcC5pbm5lclRleHQpO1xuICAgICAgICBjaGFuZ2VHcm91cEludG9DZWxzaXVzKGFsbERheU9mVGhlV2Vla01heFRlbXApO1xuICAgICAgICBjaGFuZ2VHcm91cEludG9DZWxzaXVzKGFsbERheU9mVGhlV2Vla01pblRlbXApO1xuICAgICAgICBjaGFuZ2VHcm91cEludG9DZWxzaXVzKGFsbEhvdXJUZW1wKTtcbiAgICB9O1xufVxuXG5leHBvcnQgeyBkYWlseUFuZEhvdXJseUJ1dHRvbkxvZ2ljLCBtb3ZlRm9yd2FyZEJ1dHRvbkxvZ2ljLCBtb3ZlQmFja0J1dHRvbkxvZ2ljLCBkb3RMb2dpYywgbWVhc3VyZW1lbnRCdXR0b25zTG9naWMgfSIsImltcG9ydCB7IHNwYW5HZW5lcmF0b3IgfSBmcm9tIFwiLi9nZW5lcmF0b3JGdW5jdGlvbnNcIjtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBkYXRlIGludG8gdGhlIEdCIHN0eWxlIG9mIGRhdGVcbiAqIEBwYXJhbSB7c3RyaW5nIG9yIERhdGV9IGRhdGUgZWl0aGVyIGEgc3RyaW5nIG9yIERhdGUgdmVyc2lvbiBjYW4gYmUgcHJvdmlkZWQgYW5kIHRoaXMgaXMgdGhlIGRhdGUgd2Ugd2FudCBjb252ZXJ0IGludG8gYW4gSW50bCBkYXRlIFxuICogQHJldHVybnMgYW4gb2JqZWN0IHRoYXQgaXMgdGhlIGNvcnJlY3QgZm9ybWF0IG9mIGRhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlU3RhbmRhcmREYXRlKGRhdGUpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgfTtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1HQlwiLCBvcHRpb25zKS5mb3JtYXQoZGF0ZS50b0lTT1N0cmluZyk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSBkYXRlIGFuZCBjb252ZXJ0cyBpdCB0byBlbi1HQiBsb2NhbGUgZm9ybVxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGVUb0NvbnZlcnQgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBkYXRlIHRoYXQgd2Ugd2FudCB0byBjb252ZXJ0IGludG8gdGhlIEdCIHN0YW5kYXJkIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBkaXNwbGF5cyB0aGUgZGF0ZSBpbiB0aGUgZW4tR0IgbG9jYWxlIGZvcm1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlU2hvcnRTdGFuZGFyZERhdGUoZGF0ZVRvQ29udmVydCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlVG9Db252ZXJ0KVxuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLUdCXCIpLmZvcm1hdChkYXRlLmdldFRpbWUoKSk7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgdG8gbWFrZSB0aGUgdGltZSBoYXZlIGEgMCBhdCB0aGUgc3RhcnQgaWYgdGhlIG51bWJlciBiZWZvcmUgdGhlIGNvbG9uIGlzIG5vdCBkb3VibGUgZGlnaXRzIHlldFxuICogQHBhcmFtIHtzdHJpbmd9IHRpbWUgdGhlIHRpbWUgdGhhdCBuZWVkcyB0byBiZSBwYWRkZWRcbiAqIEByZXR1cm5zIGEgcGFkZGVkIHZlcnNpb24gb2YgdGhlIHRpbWUsIGUuZy4gaWYgaXRzIDE6MTEgaXQgZ2V0cyBjaGFuZ2VkIHRvIDAxOjExXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN0YW5kYXJkVGltZSh0aW1lKSB7XG4gICAgcmV0dXJuIHRpbWUucGFkU3RhcnQoNSwgMCk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcmV0cmlldmVzIHRoZSBjaXR5IHZhbHVlIGZyb20gdGhlIG9iaiBwcm92aWRlZFxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgLmpzb24oKSB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgZmV0Y2ggY2FsbCBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGNpdHkgbmFtZSBwcm92aWRlZCBieSB0aGUgb2JqXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlQ2l0eShvYmopIHtcbiAgICByZXR1cm4gb2JqLmxvY2F0aW9uLm5hbWU7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcmV0cmlldmVzIHRoZSBjb3VudHJ5IHZhbHVlIGZyb20gdGhlIG9iaiBwcm92aWRlZFxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgLmpzb24oKSB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgZmV0Y2ggY2FsbCBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGNvdW50cnkgbmFtZSBwcm92aWRlZCBieSB0aGUgb2JqXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlQ291bnRyeShvYmopIHtcbiAgICByZXR1cm4gb2JqLmxvY2F0aW9uLmNvdW50cnk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcmV0cmlldmVzIHRoZSBkYXRlIGFuZCB0aW1lIHZhbHVlIGZyb20gdGhlIG9iaiBwcm92aWRlZFxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgLmpzb24oKSB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgZmV0Y2ggY2FsbCBcbiAqIEByZXR1cm5zIGFuIEFycmF5IHRoYXQgc3RvcmVzIHRoZSBkYXRlIGluIGluZGV4IDAgYW5kIHRoZSB0aW1lIGluIGluZGV4IDFcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVEYXRlQW5kVGltZUFycihvYmopIHtcbiAgICByZXR1cm4gb2JqLmxvY2F0aW9uLmxvY2FsdGltZS5zcGxpdCgnICcpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9ucyBmaW5kcyB3aGV0aGVyIHRoZSBjZWxzaXVzIG9yIGZhaHJlbmhlaXQgYnV0dG9uIGlzIGFjdGl2ZSBzbyB0aGUgcmlnaHQgc3ltYm9sIGNhbiBiZSBkaXNwbGF5ZWRcbiAqIEByZXR1cm5zIGEgc3BhbiBlbGVtZW50IHdpdGggdGhlIGNvcnJlY3Qgc3ltYm9sXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlTWV0aG9kT2ZNZWFzdXJlbWVudCgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNlbHNpdXMtYnRuJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuIHNwYW5HZW5lcmF0b3IoWydtZXRob2Qtb2YtbWVhc3VyZW1lbnQnXSwgJ0MnKTtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFocmVuaGVpdC1idG4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm4gc3BhbkdlbmVyYXRvcihbJ21ldGhvZC1vZi1tZWFzdXJlbWVudCddLCAnRicpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9ucyBmaW5kcyB3aGV0aGVyIHRoZSBjZWxzaXVzIG9yIGZhaHJlbmhlaXQgYnV0dG9uIGlzIGFjdGl2ZSBzbyB0aGUgcmlnaHQgc3ltYm9sIGNhbiBiZSBkaXNwbGF5ZWRcbiAqIEByZXR1cm5zIGEgYm9vbGVhbiB2YWx1ZSBvZiB3aGV0aGVyIG9yIG5vdCB0aGUgbWV0aG9kIG9mIG1lYXN1cmVtZW50IGlzIGNlbHNpdXNcbiAqL1xuZnVuY3Rpb24gaXNNZXRob2RPZk1lYXN1cmVtZW50Q2Vsc2l1cygpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNlbHNpdXMtYnRuJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuIHRydWU7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhaHJlbmhlaXQtYnRuJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIHdpbmQgZGVncmVlcyBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSB3aW5kIGRlZ3JlZXNcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVXaW5kRGVncmVlcyhvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQud2luZF9kZWdyZWU7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgd2luZCBzcGVlZCBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSB3aW5kIHNwZWVkXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlV2luZFNwZWVkKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC53aW5kX21waDtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBodW1pZGl0eSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBodW1pZGl0eVxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUh1bWlkaXR5KG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC5odW1pZGl0eVxufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIHV2LWluZGV4IGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIHV2LWluZGV4XG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlVXZOdW0ob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LnV2O1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIHZpc2liaWxpdHkgZGlzdGFuY2UgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgdmlzaWJpbGl0eSBkaXN0YW5jZVxuICovXG5mdW5jdGlvbiByZXRyaWV2ZVZpc2liaWxpdHlEaXN0YW5jZShvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQudmlzX2ttO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGNsb3VkaW5lc3MgcGVyY2VudGFnZSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBjbG91ZGluZXNzIHBlcmNlbnRhZ2VcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDbG91ZGluZXNzUGVyY2VudGFnZShvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQuY2xvdWQ7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgY2hhbmNlIG9mIHJhaW4gZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY2hhbmNlIG9mIHJhaW5cbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDaGFuY2VPZlJhaW4ob2JqKSB7XG4gICAgcmV0dXJuIG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgc3VucmlzZSB0aW1lIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIHN1bnJpc2UgdGltZSBcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVTdW5yaXNlVGltZShvYmopIHtcbiAgICByZXR1cm4gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2Uuc2xpY2UoMCwgLTMpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIHN1bnNldCB0aW1lIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIHN1bnNldCB0aW1lXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlU3Vuc2V0VGltZShvYmopIHtcbiAgICBjb25zdCBzdW5zZXQgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0O1xuICAgIGNvbnN0IHN1bnNldEhvdXIgPSBOdW1iZXIoc3Vuc2V0WzBdICsgc3Vuc2V0WzFdKTtcbiAgICBjb25zdCBzdW5zZXRIb3VyMjQgPSBzdW5zZXRIb3VyICsgMTI7XG4gICAgcmV0dXJuIHN1bnNldEhvdXIyNCArIHN1bnNldC5zbGljZSgyLCAtMyk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgY3VycmVudCBtb29uIHBoYXNlIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGN1cnJlbnQgbW9vbiBwaGFzZVxuICovXG5mdW5jdGlvbiByZXRyaWV2ZU1vb25QaGFzZShvYmopIHtcbiAgICByZXR1cm4gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLm1vb25fcGhhc2U7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBpbWFnZSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIGltYWdlXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlQ3VycmVudFRlbXBJbWcob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZVxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUN1cnJlbnRUZW1wKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC50ZW1wX2M7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSB0ZW1wZXJhdHVyZSB0aGF0IGl0IGZlZWxzIGxpa2UgY3VycmVudGx5IGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgaXQgZmVlbHMgbGlrZVxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUZlZWxzTGlrZVRlbXAob2JqKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTnVtYmVyKG9iai5jdXJyZW50LmZlZWxzbGlrZV9jKSk7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IG91dGRvb3IgY29uZGl0aW9uIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGN1cnJlbnQgb3V0ZG9vciBjb25kaXRpb25cbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDdXJyZW50Q29uZGl0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC5jb25kaXRpb24udGV4dDtcbn1cblxuLy9UaGVzZSBmdW5jdGlvbnMgYXJlIHVzZWQgdG8gcmV0cmlldmUgdGhlIHZhbHVlcyBmb3IgdGhlIHdlZWtseSBmb3JlY2FzdFxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRha2VzIGEgbnVtYmVyIHJhbmdpbmcgZnJvbSAwLTYgYW5kIHRoZW4gcmV0dXJuIHRoZSB3ZWVrZGF5IG5hbWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBkYXRlVG9GaW5kRGF5IGEgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgZGF5IG9mIHRoZSB3ZWVrIGUuZy4gMCByZXByZXNlbnRzIFN1bmRheVxuICogQHJldHVybnMgYSBzdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgY29ycmVzcG9uZGluZyBkYXkgb2YgdGhlIHdlZWtcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVEYXlPZlRoZVdlZWsoZGF0ZVRvRmluZERheSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlVG9GaW5kRGF5KTtcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERheSgpO1xuICAgIHN3aXRjaCAoZGF5KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiAnU3VuZGF5JztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuICdNb25kYXknO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gJ1R1ZXNkYXknO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gJ1dlZG5lc2RheSc7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiAnVGh1cnNkYXknO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICByZXR1cm4gJ0ZyaWRheSc7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHJldHVybiAnU2F0dXJkYXknO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICByZXR1cm4gJ1Vua25vd24gZGF5JztcbiAgICB9O1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGRhdGUgYmFzZWQgb24gdGhlIGRheSB3ZSBzcGVjaWZpZWQsIGFuZCBmcm9tIHRoZSBvYmplY3Qgd2UgcHJvdmlkZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBkYXkgdGhlIGRheSBvZiB0aGUgd2Vla1xuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IGZyb20gd2hpY2ggd2UgbmVlZCB0byByZXRyaWV2ZSB0aGUgZGF0ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdmFsdWUgdGhhdCBjb250YWlucyB0aGUgZGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZShkYXksIG9iaikge1xuICAgIHJldHVybiBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXRlO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIG1heGltdW0gdGVtcGVyYXR1cmUgYmFzZWQgb24gdGhlIGRheSBvZiB0aGUgd2VlayBwcm92aWRlZCBmcm9tIHRoZSBvYmplY3QgcHJvdmlkZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBkYXlPZldlZWsgdGhlIGRheSBvZiB0aGUgd2Vla1xuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IGZyb20gd2hpY2ggd2UgbmVlZCB0byByZXRyaWV2ZSB0aGUgbWF4aW11bSB0ZW1wZXJhdHVyZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgbWF4aW11bSB0ZW1wZXJhdHVyZSBmb3IgdGhhdCBnaXZlbiBkYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheU1heFRlbXAoZGF5T2ZXZWVrLCBvYmopIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChOdW1iZXIob2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheU9mV2Vla10uZGF5Lm1heHRlbXBfYykpO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgbWluaW11bSB0ZW1wZXJhdHVyZSBiYXNlZCBvbiB0aGUgZGF5IG9mIHRoZSB3ZWVrIHByb3ZpZGVkIGZyb20gdGhlIG9iamVjdCBwcm92aWRlZFxuICogQHBhcmFtIHtudW1iZXJ9IGRheU9mV2VlayB0aGUgZGF5IG9mIHRoZSB3ZWVrXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgZnJvbSB3aGljaCB3ZSBuZWVkIHRvIHJldHJpZXZlIHRoZSBtaW5pbXVtIHRlbXBlcmF0dXJlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSBtaW5pbXVtIHRlbXBlcmF0dXJlIGZvciB0aGF0IGdpdmVuIGRheVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5TWluVGVtcChkYXlPZldlZWssIG9iaikge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE51bWJlcihvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5T2ZXZWVrXS5kYXkubWludGVtcF9jKSk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgY29ycmVzcG9uZGluZyB3aGV0aGVyIGltYWdlIGZyb20gdGhlIGRheSBvZiB0aGUgd2VlayBwcm92aWRlZCBmcm9tIHRoZSBvYmplY3QgcHJvdmlkZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBkYXlPZldlZWsgdGhlIGRheSBvZiB0aGUgd2Vla1xuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IGZyb20gd2hpY2ggd2UgbmVlZCB0byByZXRyaWV2ZSB0aGUgZGF0ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcGF0aCB0byB0aGUgaW1hZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheVdlYXRoZXJJbWFnZShkYXlPZldlZWssIG9iaikge1xuICAgIHJldHVybiBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5T2ZXZWVrXS5kYXkuY29uZGl0aW9uLmljb247XG59XG5cbi8vVGhlc2UgZnVuY3Rpb25zIGFyZSB1c2VkIGZvciB0aGUgaG91cmx5IHdlYXRoZXIgc2VjdGlvblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGdldHMgdGhlIHRpbWUgYmFzZWQgb24gdGhlIGhvdXJOdW0gdmFsdWUsIGFuZCBtYW5pcHVsYXRlcyB0aGUgdGltZSB0byBkaXNwbGF5IHdpdGhvdXQgdGhlIEFNIG9yIFBNXG4gKiBAcGFyYW0ge251bWJlcn0gaG91ck51bSBhIG51bWJlciB0aGUgY29ycmVzcG9uZHMgdG8gYSBjZXJ0YWluIGhvdXIsIGUuZy4gMCBjb3JyZXNwb25kcyB0byAxMmFtXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgZnJvbSB3aGljaCB3ZSBuZWVkIHRvIHJldHJpZXZlIHRoZSBkYXRlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSB0aW1lIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGhvdXJOdW0gYXJndW1lbnQgcGFzc2VkXG4gKi9cbmZ1bmN0aW9uIGdldEhvdXJUaW1lKGhvdXJOdW0sIG9iaikge1xuICAgIHJldHVybiBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltob3VyTnVtXS50aW1lLnNsaWNlKC01KTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBnZXRzIHRoZSB0ZW1wZXJhdHVyZSBiYXNlZCBvbiB0aGUgaG91ck51bSB2YWx1ZSwgYW5kIG1hbmlwdWxhdGVzIHRoZSB0ZW1wZXJhdHVyZSB0byBiZSByb3VuZGVkXG4gKiBAcGFyYW0ge251bWJlcn0gaG91ck51bSBhIG51bWJlciB0aGUgY29ycmVzcG9uZHMgdG8gYSBjZXJ0YWluIGhvdXIsIGUuZy4gMCBjb3JyZXNwb25kcyB0byAxMmFtXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgZnJvbSB3aGljaCB3ZSBuZWVkIHRvIHJldHJpZXZlIHRoZSBkYXRlIGZyb20gXG4gKiBAcmV0dXJucyBhIG51bWJlciB2YWx1ZSB0aGF0IGlzIHRoZSB0ZW1wZXJhdHVyZSBpbiBjZWxzaXVzIGFuZCBoYXMgYmVlbiByb3VuZGVkXG4gKi9cbmZ1bmN0aW9uIGdldEhvdXJUZW1wKGhvdXJOdW0sIG9iaikge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE51bWJlcihvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltob3VyTnVtXS50ZW1wX2MpKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBnZXRzIHRoZSB3ZWF0aGVyIGRlc2NyaXB0aW9uIGJhc2VkIG9uIHRoZSBob3VyTnVtIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaG91ck51bSBhIG51bWJlciB0aGUgY29ycmVzcG9uZHMgdG8gYSBjZXJ0YWluIGhvdXIsIGUuZy4gMCBjb3JyZXNwb25kcyB0byAxMmFtXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgZnJvbSB3aGljaCB3ZSBuZWVkIHRvIHJldHJpZXZlIHRoZSBkYXRlIGZyb20gXG4gKiBAcmV0dXJucyBhc3RyaW5nIHZhbHVlIHRoYXQgaXMgdGhlIHdlYXRoZXIgY29uZGl0aW9ucyBhdCB0aGF0IGNlcnRhaW4gaG91clxuICovXG5mdW5jdGlvbiBnZXRIb3VyVGVtcERlc2NyaXB0aW9uKGhvdXJOdW0sIG9iaikge1xuICAgIHJldHVybiBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltob3VyTnVtXS5jb25kaXRpb24udGV4dDtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBnZXRzIHRoZSBjb3JyZWN0IGljb24gYmFzZWQgb24gdGhlIGhvdXJOdW0gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBob3VyTnVtIGEgbnVtYmVyIHRoZSBjb3JyZXNwb25kcyB0byBhIGNlcnRhaW4gaG91ciwgZS5nLiAwIGNvcnJlc3BvbmRzIHRvIDEyYW1cbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIG5lZWQgdG8gcmV0cmlldmUgdGhlIGRhdGUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHZhbHVlIHRoYXQgaXMgdGhlIHBhdGggdG8gdGhlIGltYWdlIHRoYXQgY29ycmVzcG9uZHMgd2l0aCB0aGUgd2VhdGhlciBmb3IgdGhhdCBob3VyXG4gKi9cbmZ1bmN0aW9uIGdldEhvdXJUZW1wSWNvbihob3VyTnVtLCBvYmopIHtcbiAgICByZXR1cm4gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaG91ck51bV0uY29uZGl0aW9uLmljb247XG59O1xuXG5leHBvcnQgeyBnZXRIb3VyVGltZSwgZ2V0SG91clRlbXAsIGdldEhvdXJUZW1wRGVzY3JpcHRpb24sIGdldEhvdXJUZW1wSWNvbiwgY3JlYXRlU2hvcnRTdGFuZGFyZERhdGUsIHJldHJpZXZlRGF5T2ZUaGVXZWVrLCByZXRyaWV2ZUN1cnJlbnRDb25kaXRpb24sIHJldHJpZXZlQ3VycmVudFRlbXAsIHJldHJpZXZlQ3VycmVudFRlbXBJbWcsIHJldHJpZXZlRmVlbHNMaWtlVGVtcCwgcmV0cmlldmVTdW5zZXRUaW1lLCByZXRyaWV2ZU1vb25QaGFzZSwgcmV0cmlldmVTdW5yaXNlVGltZSwgcmV0cmlldmVDaGFuY2VPZlJhaW4sIHJldHJpZXZlQ2xvdWRpbmVzc1BlcmNlbnRhZ2UsIHJldHJpZXZlVmlzaWJpbGl0eURpc3RhbmNlLCByZXRyaWV2ZVV2TnVtLCBjcmVhdGVTdGFuZGFyZERhdGUsIGNyZWF0ZVN0YW5kYXJkVGltZSwgcmV0cmlldmVDaXR5LCByZXRyaWV2ZUNvdW50cnksIHJldHJpZXZlRGF0ZUFuZFRpbWVBcnIsIHJldHJpZXZlTWV0aG9kT2ZNZWFzdXJlbWVudCwgaXNNZXRob2RPZk1lYXN1cmVtZW50Q2Vsc2l1cywgcmV0cmlldmVXaW5kRGVncmVlcywgcmV0cmlldmVXaW5kU3BlZWQsIHJldHJpZXZlSHVtaWRpdHkgfSIsIi8qKlxuICogdGhpcyBmdW5jdGlvbiBtYWtlcyB0aGUgZmFocmVuaGVpdCBidXR0b24gaGF2ZSB0aGUgJ2FjdGl2ZScgY2xhc3MgYW5kIHJlbW92ZXMgaXQgZnJvbSB0aGUgY2Vsc2l1cyBvbmVcbiAqL1xuZnVuY3Rpb24gbWFrZUZhaHJlbmhlaXRBY3RpdmUoKSB7XG4gICAgY29uc3QgY2Vsc2l1c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZWxzaXVzLWJ0bicpO1xuICAgIGNvbnN0IGZhaHJlbmhlaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFocmVuaGVpdC1idG4nKTtcbiAgICBjZWxzaXVzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGZhaHJlbmhlaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gbWFrZXMgdGhlIGNlbHNpdXMgYnV0dG9uIGhhdmUgdGhlICdhY3RpdmUnIGNsYXNzIGFuZCByZW1vdmVzIGl0IGZyb20gdGhlIGZhaHJlbmhlaXQgb25lXG4gKi9cbmZ1bmN0aW9uIG1ha2VDZWxzaXVzQWN0aXZlKCkge1xuICAgIGNvbnN0IGNlbHNpdXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Vsc2l1cy1idG4nKTtcbiAgICBjb25zdCBmYWhyZW5oZWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhaHJlbmhlaXQtYnRuJyk7XG4gICAgY2Vsc2l1c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBmYWhyZW5oZWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNvbnZlcnRzIGEgY2Vsc2l1cyB2YWx1ZSBpbnRvIGZhaHJlbmhlaXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW0gdGhlIG51bWJlciB0byBjb252ZXJ0IFxuICogQHJldHVybnMgYSBudW1iZXIgdGhhdCBpcyB0aGUgY2Vsc2l1cyB2YWx1ZSByb3VuZGVkIGFuZCBjb252ZXJ0ZWQgaW50byBmYWhyZW5oZWl0XG4gKi9cbmZ1bmN0aW9uIGNlbHNpdXNUb0ZhaHJlbmhlaXQobnVtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG51bSAqIDEuOCkgKyAzMik7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY29udmVydHMgYSBmYWhyZW5oZWl0IHZhbHVlIGludG8gY2Vsc2l1c1xuICogQHBhcmFtIHtudW1iZXJ9IG51bSB0aGUgbnVtYmVyIHRvIGNvbnZlcnQgXG4gKiBAcmV0dXJucyBhIG51bWJlciB0aGF0IGlzIHRoZSBmYWhyZW5oZWl0IHZhbHVlIHJvdW5kZWQgYW5kIGNvbnZlcnRlZCBpbnRvIGNlbHNpdXNcbiAqL1xuZnVuY3Rpb24gZmFocmVuaGVpdFRvQ2Vsc2l1cyhudW0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobnVtIC0gMzIpICogNSAvIDkpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGxvb3BzIGFuIGFycmF5IG9mIERPTSBlbGVtZW50cyBhbmQgY29udmVydHMgdGhlIGlubmVyIG51bWJlciBpbnRvIGZhaHJlbmhlaXQgZnJvbSBjZWxzaXVzXG4gKiBAcGFyYW0ge2FycmF5fSB0ZW1wcyBhbiBhcnJheSBvZiBvZiBET00gZWxlbWVudHMgdGhhdCBjb250YWluIHRoZSB0ZW1wZXJhdHVyZSBcbiAqL1xuZnVuY3Rpb24gY2hhbmdlR3JvdXBJbnRvRmFocmVuaGVpdCh0ZW1wcykge1xuICAgIHRlbXBzLmZvckVhY2godGVtcCA9PiB7XG4gICAgICAgIHRlbXAuaW5uZXJUZXh0ID0gY2Vsc2l1c1RvRmFocmVuaGVpdCh0ZW1wLmlubmVyVGV4dCk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gbG9vcHMgYW4gYXJyYXkgb2YgRE9NIGVsZW1lbnRzIGFuZCBjb252ZXJ0cyB0aGUgaW5uZXIgbnVtYmVyIGludG8gY2Vsc2l1cyBmcm9tIGZhaHJlbmhlaXRcbiAqIEBwYXJhbSB7YXJyYXl9IHRlbXBzIGFuIGFycmF5IG9mIG9mIERPTSBlbGVtZW50cyB0aGF0IGNvbnRhaW4gdGhlIHRlbXBlcmF0dXJlIFxuICovXG5mdW5jdGlvbiBjaGFuZ2VHcm91cEludG9DZWxzaXVzKHRlbXBzKSB7XG4gICAgdGVtcHMuZm9yRWFjaCh0ZW1wID0+IHtcbiAgICAgICAgdGVtcC5pbm5lclRleHQgPSBmYWhyZW5oZWl0VG9DZWxzaXVzKHRlbXAuaW5uZXJUZXh0KTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7IG1ha2VGYWhyZW5oZWl0QWN0aXZlLCBtYWtlQ2Vsc2l1c0FjdGl2ZSwgY2Vsc2l1c1RvRmFocmVuaGVpdCwgZmFocmVuaGVpdFRvQ2Vsc2l1cywgY2hhbmdlR3JvdXBJbnRvQ2Vsc2l1cywgY2hhbmdlR3JvdXBJbnRvRmFocmVuaGVpdCB9IiwiaW1wb3J0IHsgZGl2R2VuZXJhdG9yLCBoZWFkaW5nR2VuZXJhdG9yLCBpbWdHZW5lcmF0b3IsIHBhcmFncmFwaEdlbmVyYXRvciwgc3BhbkdlbmVyYXRvciB9IGZyb20gXCIuL2dlbmVyYXRvckZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2hvcnRTdGFuZGFyZERhdGUsIGlzTWV0aG9kT2ZNZWFzdXJlbWVudENlbHNpdXMsIHJldHJpZXZlRGF5T2ZUaGVXZWVrLCBnZXREYXRlLCBnZXREYXlNYXhUZW1wLCBnZXREYXlNaW5UZW1wLCBnZXREYXlXZWF0aGVySW1hZ2UgfSBmcm9tIFwiLi9yZXRyaWV2ZUluZm9ybWF0aW9uXCI7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiB0YWtlcyBhbGwgZGFpbHktd2VhdGhlciBkaXZzIGFuZCBhcHBlbmRzIHRoZW0gdG8gZGFpbHktd2VhdGhlci1jb250YWluZXJcbiAqIEBwYXJhbSB7QXJyYXl9IGFyck9mRGF5cyBhbiBhcnJheSBvZiBhbGwgdGhlIGRheXMgdGhhdCBuZWVkIHRvIGJlIGFwcGVuZGVkIGFuZCBkaXNwbGF5ZWQsIHRoZXJlIHNob3VsZCBiZSA3IGluIHRvdGFsXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIHdlYXRoZXIgaW5mb3JtYXRpb24gZm9yIHRoZSBjdXJyZW50IGFuZCBuZXh0IHNpeCBkYXlzXG4gKi9cbmZ1bmN0aW9uIGRhaWx5V2VhdGhlclNlY3Rpb24oYXJyT2ZEYXlzKSB7XG4gICAgY29uc3QgZGFpbHlXZWF0aGVyU2VjdGlvbkNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2RhaWx5LXdlYXRoZXItY29udGFpbmVyJ10pO1xuICAgIGRhaWx5V2VhdGhlclNlY3Rpb25Db250YWluZXIuYXBwZW5kKC4uLmFyck9mRGF5cyk7XG4gICAgcmV0dXJuIGRhaWx5V2VhdGhlclNlY3Rpb25Db250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb25zIHB1dHMgdG9nZXRoZXIgYWxsIHRoZSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBkaXNwbGF5IHRoZSB3ZWF0aGVyIGZvciBhbiBpbmRpdmlkdWFsIGRheVxuICogQHBhcmFtIHtudW1iZXJ9IGRheU51bSB0aGUgbnVtYmVyIG9mIHRoZSBkYXkgdGhlIGNvbnRhaW5lciBpcyBnb2luZyB0byBiZSBmb3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXlJbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgZGV0YWlscyBhYm91dCB0aGUgZGF5XG4gKiBAcGFyYW0ge29iamVjdH0gd2VhdGhlckRldGFpbHMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBkZXRhaWxzIGFib3VidCB0aGUgZGF5J3Mgd2VhdGhlclxuICogQHBhcmFtIHtzdHJpbmd9IGRheVdlYXRoZXJJbWcgYSBzdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcGF0aCB0byB0aGUgd2VhdGhlciBpbWFnZSBmb3IgdGhhdCBkYXlcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgbWFrZXMgdXAgb25lIG9mIHRoZSBkYXlzIHRoYXQgaXMgZ29pbmcgdG8gYmUgZGlzcGxheWVkXG4gKi9cbmZ1bmN0aW9uIGRheVdlYXRoZXIoZGF5TnVtLCBkYXlJbmZvLCB3ZWF0aGVyRGV0YWlscywgZGF5V2VhdGhlckltZykge1xuICAgIGNvbnN0IGRhaWx5V2VhdGhlckNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2RhaWx5LXdlYXRoZXInLCBgZGF5LSR7ZGF5TnVtfWBdKTtcbiAgICBkYWlseVdlYXRoZXJDb250YWluZXIuYXBwZW5kKGRheUluZm8sIHdlYXRoZXJEZXRhaWxzLCBpbWdHZW5lcmF0b3IoZGF5V2VhdGhlckltZywgJycsIFtdKSk7XG4gICAgcmV0dXJuIGRhaWx5V2VhdGhlckNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbidzIGpvYiBpcyB0byBjcmVhdGUgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgaW5mb3JtYXRpb24gcmVsYXRlZCB0byB0aGUgZGF5IHdlIHBhc3NlZCBpbiwgc3VjaCBhcyB0aGUgZGF5IG9mIHRoZSB3ZWVrLCBhbmQgcmVwcmVzZW50aW5nIHRoZSBkYXRlIG9uIHNjcmVlblxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGUgdGhlIGRhdGUgd2Ugd2FudCB0byBkaXNwbGF5IFxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZGF0ZSB3ZSBwYXNzZWQgaW5cbiAqL1xuZnVuY3Rpb24gZGF5SW5mb3JtYXRpb24oZGF0ZSkge1xuICAgIGNvbnN0IGRheUluZm9ybWF0aW9uQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnZGF5LWluZm9ybWF0aW9uJ10pO1xuICAgIGRheUluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoMicsIFsnZGF5LW9mLXRoZS13ZWVrJ10sIHJldHJpZXZlRGF5T2ZUaGVXZWVrKGRhdGUpKSwgaGVhZGluZ0dlbmVyYXRvcignaDInLCBbJ2RhdGUtb2YtdGhlLXdlZWsnXSwgY3JlYXRlU2hvcnRTdGFuZGFyZERhdGUoZGF0ZSkpKTtcbiAgICByZXR1cm4gZGF5SW5mb3JtYXRpb25Db250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24ncyBqb2IgaXMgdG8gZGlzcGxheWVkIHRoZSB0ZW1wZXJhdHVyZSBiYXNlZCBvbiB0aGUgdHdvIGFyZ3VtZW50cyBwcm92aWRlZFxuICogQHBhcmFtIHtzdHJpbmd9IGRheU1heFRlbXAgdGhlIG1heGltdW0gdGVtcGVyYXR1cmUgZm9yIHRoYXQgZGF5XG4gKiBAcGFyYW0ge3N0cmluZ30gZGF5TWluVGVtcCB0aGUgbWluaW11bSB0ZW1wZXJhdHVyZSBmb3IgdGhhdCBkYXlcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRlbXBlcmF0dXJlXG4gKi9cbmZ1bmN0aW9uIGRheVdlYXRoZXJEZXRhaWxzKGRheU1heFRlbXAsIGRheU1pblRlbXApIHtcbiAgICBjb25zdCB3ZWF0aGVyRGV0YWlsc0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2RheS13ZWF0aGVyLWRldGFpbHMnXSk7XG4gICAgY29uc3QgbWF4V2VhdGhlclNwYW4gPSBzcGFuR2VuZXJhdG9yKFsnZGF5LW9mLXRoZS13ZWVrLW1heC10ZW1wJ10sIGRheU1heFRlbXApO1xuICAgIGNvbnN0IG1pbldlYXRoZXJTcGFuID0gc3BhbkdlbmVyYXRvcihbJ2RheS1vZi10aGUtd2Vlay1taW4tdGVtcCddLCBkYXlNaW5UZW1wKTtcbiAgICBjb25zdCB3ZWF0aGVyU3ltYm9sID0gc3BhbkdlbmVyYXRvcihbJ21ldGhvZC1vZi1tZWFzdXJlbWVudCddLCAnQycpO1xuICAgIGNvbnN0IHdlYXRoZXJTeW1ib2xUd28gPSBzcGFuR2VuZXJhdG9yKFsnbWV0aG9kLW9mLW1lYXN1cmVtZW50J10sICdDJyk7XG4gICAgd2VhdGhlckRldGFpbHNDb250YWluZXIuYXBwZW5kKHBhcmFncmFwaEdlbmVyYXRvcihbJ21heC10ZW1wJ10sICfCsCcsIG1heFdlYXRoZXJTcGFuLCB3ZWF0aGVyU3ltYm9sKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnbWluLXRlbXAnXSwgJ8KwJywgbWluV2VhdGhlclNwYW4sIHdlYXRoZXJTeW1ib2xUd28pKTtcbiAgICByZXR1cm4gd2VhdGhlckRldGFpbHNDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2FsbHMgYWxsIHRoZSByZWxldmFudCBmdW5jdGlvbnMgYW5kIGNyZWF0ZXMgYSBET00gZWxlbWVudCByZXByZXNlbnRpbmcgYSBkYXkgYW5kIGl0cyByZXNwZWN0aXZlIHdlYXRoZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIHdpbGwgYmUgcmV0cmlldmluZyB2YWx1ZXMgZnJvbSBcbiAqIEByZXR1cm5zIGFuIGFycmF5IHRoYXQgY29udGFpbnMgYWxsIHRoZSBET00gZWxlbWVudHMgdGhhdCBuZWVkIHRvIGJlIGRpc3BsYXllZFxuICovXG5mdW5jdGlvbiBjcmVhdGVBbGxEYXlzVG9EaXNwbGF5KG9iaikge1xuICAgIGNvbnN0IGFyck9mRGF5cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGFyck9mRGF5cy5wdXNoKGRheVdlYXRoZXIoaSwgZGF5SW5mb3JtYXRpb24oZ2V0RGF0ZShpLCBvYmopKSwgZGF5V2VhdGhlckRldGFpbHMoZ2V0RGF5TWF4VGVtcChpLCBvYmopLCBnZXREYXlNaW5UZW1wKGksIG9iaikpLCBnZXREYXlXZWF0aGVySW1hZ2UoaSwgb2JqKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIGFyck9mRGF5cztcbn1cblxuXG5leHBvcnQgeyBjcmVhdGVBbGxEYXlzVG9EaXNwbGF5LCBkYWlseVdlYXRoZXJTZWN0aW9uLCBkYXlXZWF0aGVyLCBkYXlJbmZvcm1hdGlvbiwgZGF5V2VhdGhlckRldGFpbHMgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBoZWFkZXIgfSBmcm9tICcuL2hlYWRlclNlY3Rpb24nO1xuaW1wb3J0IHsgb25Mb2FkRGVmYXVsdFdlYXRoZXIsIGN1cnJlbnREYXlJbmZvcm1hdGlvbkNvbnRhaW5lciB9IGZyb20gJy4vY3VycmVudFRlbXBlcmF0dXJlU2VjdGlvbic7XG5pbXBvcnQgeyBkaXZHZW5lcmF0b3IgfSBmcm9tICcuL2dlbmVyYXRvckZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBjYXJvdXNlbEJ1dHRvbnMgfSBmcm9tICcuL2Nhcm91c2VsQnV0dG9ucyc7XG5pbXBvcnQgeyBkYWlseUFuZEhvdXJseUJ1dHRvbkxvZ2ljLCBkb3RMb2dpYywgbWVhc3VyZW1lbnRCdXR0b25zTG9naWMsIG1vdmVCYWNrQnV0dG9uTG9naWMsIG1vdmVGb3J3YXJkQnV0dG9uTG9naWMgfSBmcm9tICcuL21haW5CdXR0b25zTG9naWMnO1xuXG5jb25zdCBkYWlseUhvdXJseVdlYXRoZXIgPSBkaXZHZW5lcmF0b3IoWydkYWlseS1ob3VybHktd2VhdGhlci1jYXJvdXNlbCddKTsgLy90aGUgZGl2IHRoYXQgd2lsbCBjb250YWluIHRoZSBkYWlseSB3ZWF0aGVyLCBhbmQgdGhlIGhvdXJseVxuZGFpbHlIb3VybHlXZWF0aGVyLmFwcGVuZChjYXJvdXNlbEJ1dHRvbnMoKSk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlcigpLCBjdXJyZW50RGF5SW5mb3JtYXRpb25Db250YWluZXIsIGRhaWx5SG91cmx5V2VhdGhlcik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZERlZmF1bHRXZWF0aGVyKTtcblxuY29uc3QgaG91cmx5V2VhdGhlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktd2VhdGhlci1idG4nKTsgLy90aGlzIGlzIHRoZSBidXR0b24gdXNlZCB0byBkaXNwbGF5IHRoZSBob3VybHkgd2VhdGhlclxuY29uc3QgZGFpbHlXZWF0aGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5LXdlYXRoZXItYnRuJyk7IC8vdGhpcyBpcyB0aGUgYnV0dG9uIHVzZWQgdG8gZGlzcGxheSB0aGUgd2VhdGhlciBmb3IgdGhlIGN1cnJlbnQgYW5kIG5leHQgNiBkYXlzXG5jb25zdCBtb3ZlRm9yd2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlLXJpZ2h0Jyk7IC8vdGhpcyBidXR0b24gbW92ZXMgdGhlIGNhcm91c2VsIHRvIHRoZSBuZXh0IDYgaG91cnNcbmNvbnN0IG1vdmVCYWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmUtbGVmdCcpOyAvL3RoaXMgYnV0dG9uIG1vdmVzIHRoZSBjYXJvdXNlbCB0byB0aGUgcHJldmlvdXMgNiBob3Vyc1xuY29uc3QgZG90c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3RzJyk7IC8vdGhlIGNvbnRhaW5lciB0aGF0IGhvbGRzIGVhY2ggZG90XG5jb25zdCBjaGFuZ2VEZWdyZWVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1kZWdyZWVzJyk7IC8vdGhlIGNvbnRhaW5lciB0aGF0IGhvbGRzIHRoZSBjZWxzaXVzIGFuZCBmYWhyZW5oZWl0IGJ1dHRvbnNcblxuXG5cbmRhaWx5V2VhdGhlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRhaWx5QW5kSG91cmx5QnV0dG9uTG9naWMpO1xuaG91cmx5V2VhdGhlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRhaWx5QW5kSG91cmx5QnV0dG9uTG9naWMpO1xubW92ZUZvcndhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb3ZlRm9yd2FyZEJ1dHRvbkxvZ2ljKTtcbm1vdmVCYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZUJhY2tCdXR0b25Mb2dpYyk7XG5kb3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG90TG9naWMpO1xuY2hhbmdlRGVncmVlc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lYXN1cmVtZW50QnV0dG9uc0xvZ2ljKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=