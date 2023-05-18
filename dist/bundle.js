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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Work Sans';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n    --light-blue: #4ba6cf;\n    --dark-blue: #0c4a6e;\n    --orange: #ecb347;\n    --search-background-color: #06263b;\n    --faded-white: rgba(255, 255, 255, 0.603);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Work Sans', sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background: linear-gradient(to bottom, var(--light-blue), var(--dark-blue));\n    color: white;\n    display: grid;\n    grid-template-rows: 0.5fr 5fr 5fr 0.5fr;\n    row-gap: 2rem;\n}\n\nheader {\n    grid-row: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 1.5rem;\n    position: relative;\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 1.3rem;\n}\n\n.title-end {\n    color: var(--orange);\n}\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n    display: none;\n}\n\n.search-form {\n    display: flex;\n    align-items: center;\n    width: 25rem;\n    position: relative;\n    transform: translateY(4px);\n    margin-right: 55px;\n}\n\n#search-bar {\n    border-radius: 20px;\n    border: none;\n    width: 100%;\n    height: 2.5rem;\n    background-color: var(--search-background-color);\n    padding: 0 0.8rem;\n    color: white;\n    font-size: 1rem;\n}\n\n#search-bar::placeholder {\n    color: white;\n}\n\n.search-button {\n    background-color: transparent;\n    border: none;\n    position: absolute;\n    z-index: 1;\n    height: 1.5rem;\n    left: 88%;\n    cursor: pointer;\n}\n\n.change-degrees {\n    width: 20rem;\n    height: 2.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 0.5rem;\n}\n\n.btn {\n    cursor: pointer;\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.fahrenheit-btn,\n.celsius-btn {\n    height: 2rem;\n    width: 4rem;\n    border-radius: 20px;\n    background-color: var(--search-background-color);\n    font-size: 1rem;\n    transition: border 60ms ease-in;\n}\n\n.fahrenheit-btn:hover,\n.celsius-btn:hover,\n.daily-weather-btn:hover,\n.hourly-weather-btn:hover,\n.active {\n    border: 2px solid white;\n}\n\n.current-day-information {\n    justify-self: center;\n    grid-row: 2;\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n    grid-template-columns: 1fr 2fr;\n    width: 43rem;\n    height: 30rem;\n}\n\n.location-details {\n    grid-row: 1;\n    grid-column: 1 / -1;\n    justify-self: center;\n    text-align: center;\n    padding: 1rem;\n}\n\n.city-details {\n    font-size: 2.5rem;\n}\n\n.day-details {\n    font-size: 1.5rem;\n    margin-top: 0.5rem;\n    color: var(--faded-white);\n    font-weight: 500;\n}\n\n.time-details {\n    border-left: 2px solid var(--faded-white);\n    padding-left: 7px;\n    margin-left: 7px;\n}\n\n.current-temp-details {\n    grid-row: 2;\n    grid-column: 1;\n    justify-self: center;\n    align-self: center;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    row-gap: 0;\n}\n\n.temp-details {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n    gap: 0.3rem;\n}\n\n.temp-details>img {\n    height: 6rem;\n    width: 6rem;\n}\n\n.temp-description {\n    font-size: 1.7rem;\n    font-weight: 400;\n}\n\n.feels-like,\n.general-description {\n    font-size: 1.5rem;\n    font-weight: 300;\n    color: var(--faded-white);\n}\n\n.extra-information {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    padding: 0.5rem;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n}\n\n.extra-information>div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n}\n\n.wind-information {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.wind-direction {\n    height: 1.7rem;\n}\n\n.extra-information h5,\n.extra-information p {\n    font-weight: 600;\n}\n\n.extra-information h5 {\n    font-size: 1.2rem;\n    color: var(--faded-white);\n}\n\n.extra-information p {\n    font-size: 1.5rem;\n}\n\n.safe,\n.amber,\n.danger {\n    border-radius: 999px;\n    width: 40%;\n    margin: 0 auto;\n}\n\n.safe {\n    background-color: rgb(51, 192, 51);\n}\n\n.amber {\n    background-color: orange;\n}\n\n.danger {\n    background-color: rgb(192, 0, 0);\n}\n\n.carousel-buttons {\n    display: flex;\n    align-items: center;\n    gap: 0.3rem;\n}\n\n.daily-hourly-weather-carousel {\n    padding: 1rem 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.daily-weather-btn,\n.hourly-weather-btn {\n    background-color: var(--search-background-color);\n    height: 2.5rem;\n    width: 5rem;\n    border-radius: 5px;\n    font-size: 1rem;\n}\n\n.slide-buttons {\n    height: 100%;\n    width: 6rem;\n    margin-left: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.move-left,\n.move-right {\n    background-color: transparent;\n}\n\n.dots {\n    display: flex;\n    gap: 0.5rem;\n    transform: translateX(-3px);\n}\n\n.dot {\n    border-radius: 999px;\n    background-color: var(--search-background-color);\n    height: 8px;\n    width: 8px;\n}\n\n.dot.active {\n    background-color: white;\n}\n\n.material-symbols-outlined {\n    color: white;\n    display: flex;\n    justify-content: center;\n}\n\n.daily-weather-container {\n    display: flex;\n    gap: 1.2rem;\n}\n\n.daily-weather {\n    padding: 1rem;\n    width: 100%;\n    height: max(300px, 50%);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.day-information {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    font-size: 1.2rem;\n}\n\n.day-of-the-week {\n    font-weight: 500;\n}\n\n.date-of-the-week,\n.hourly-weather>h2 {\n    color: var(--faded-white);\n    font-weight: 400;\n}\n\n.date-of-the-week {\n    border-left: 1px solid var(--faded-white);\n    padding-left: 10px;\n    font-size: 1.6rem;\n}\n\n.day-weather-details {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.min-temp {\n    font-size: 1.5rem;\n    font-weight: 400;\n}\n\n.daily-weather>img {\n    height: 8rem;\n    width: 8rem;\n    align-self: center;\n}\n\n.hour-container {\n    display: flex;\n    margin: 0 auto;\n}\n\n.hourly-weather {\n    padding: 1rem;\n    width: 100%;\n    height: max(300px, 50%);\n    display: grid;\n    grid-template-rows: 1fr 2fr 2fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.hour-weather-description {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n    text-align: center;\n}\n\n.hour-weather-description>h3 {\n    font-size: 2rem;\n}\n\n.hour-description {\n    font-size: 1.1rem;\n    color: var(--faded-white);\n}\n\n.hourly-weather-icon {\n    height: 7rem;\n    width: 7rem;\n    align-self: flex-start;\n}\n\n.error-popup {\n    width: max-content;\n    border-radius: 999px;\n    background-color: white;\n    position: absolute;\n    top: 85px;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    text-align: center;\n    padding: 0.5rem 1rem;\n    font-size: 0.8rem;\n}\n\n.error-message {\n    color: red;\n    font-weight: 600;\n}\n\n.hide {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Work Sans';\n    src: url('./assets/WorkSans-VariableFont_wght.ttf');\n}\n\n:root {\n    --light-blue: #4ba6cf;\n    --dark-blue: #0c4a6e;\n    --orange: #ecb347;\n    --search-background-color: #06263b;\n    --faded-white: rgba(255, 255, 255, 0.603);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Work Sans', sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background: linear-gradient(to bottom, var(--light-blue), var(--dark-blue));\n    color: white;\n    display: grid;\n    grid-template-rows: 0.5fr 5fr 5fr 0.5fr;\n    row-gap: 2rem;\n}\n\nheader {\n    grid-row: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 1.5rem;\n    position: relative;\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 1.3rem;\n}\n\n.title-end {\n    color: var(--orange);\n}\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n    display: none;\n}\n\n.search-form {\n    display: flex;\n    align-items: center;\n    width: 25rem;\n    position: relative;\n    transform: translateY(4px);\n    margin-right: 55px;\n}\n\n#search-bar {\n    border-radius: 20px;\n    border: none;\n    width: 100%;\n    height: 2.5rem;\n    background-color: var(--search-background-color);\n    padding: 0 0.8rem;\n    color: white;\n    font-size: 1rem;\n}\n\n#search-bar::placeholder {\n    color: white;\n}\n\n.search-button {\n    background-color: transparent;\n    border: none;\n    position: absolute;\n    z-index: 1;\n    height: 1.5rem;\n    left: 88%;\n    cursor: pointer;\n}\n\n.change-degrees {\n    width: 20rem;\n    height: 2.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 0.5rem;\n}\n\n.btn {\n    cursor: pointer;\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.fahrenheit-btn,\n.celsius-btn {\n    height: 2rem;\n    width: 4rem;\n    border-radius: 20px;\n    background-color: var(--search-background-color);\n    font-size: 1rem;\n    transition: border 60ms ease-in;\n}\n\n.fahrenheit-btn:hover,\n.celsius-btn:hover,\n.daily-weather-btn:hover,\n.hourly-weather-btn:hover,\n.active {\n    border: 2px solid white;\n}\n\n.current-day-information {\n    justify-self: center;\n    grid-row: 2;\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n    grid-template-columns: 1fr 2fr;\n    width: 43rem;\n    height: 30rem;\n}\n\n.location-details {\n    grid-row: 1;\n    grid-column: 1 / -1;\n    justify-self: center;\n    text-align: center;\n    padding: 1rem;\n}\n\n.city-details {\n    font-size: 2.5rem;\n}\n\n.day-details {\n    font-size: 1.5rem;\n    margin-top: 0.5rem;\n    color: var(--faded-white);\n    font-weight: 500;\n}\n\n.time-details {\n    border-left: 2px solid var(--faded-white);\n    padding-left: 7px;\n    margin-left: 7px;\n}\n\n.current-temp-details {\n    grid-row: 2;\n    grid-column: 1;\n    justify-self: center;\n    align-self: center;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    row-gap: 0;\n}\n\n.temp-details {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n    gap: 0.3rem;\n}\n\n.temp-details>img {\n    height: 6rem;\n    width: 6rem;\n}\n\n.temp-description {\n    font-size: 1.7rem;\n    font-weight: 400;\n}\n\n.feels-like,\n.general-description {\n    font-size: 1.5rem;\n    font-weight: 300;\n    color: var(--faded-white);\n}\n\n.extra-information {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    padding: 0.5rem;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n}\n\n.extra-information>div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n}\n\n.wind-information {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.wind-direction {\n    height: 1.7rem;\n}\n\n.extra-information h5,\n.extra-information p {\n    font-weight: 600;\n}\n\n.extra-information h5 {\n    font-size: 1.2rem;\n    color: var(--faded-white);\n}\n\n.extra-information p {\n    font-size: 1.5rem;\n}\n\n.safe,\n.amber,\n.danger {\n    border-radius: 999px;\n    width: 40%;\n    margin: 0 auto;\n}\n\n.safe {\n    background-color: rgb(51, 192, 51);\n}\n\n.amber {\n    background-color: orange;\n}\n\n.danger {\n    background-color: rgb(192, 0, 0);\n}\n\n.carousel-buttons {\n    display: flex;\n    align-items: center;\n    gap: 0.3rem;\n}\n\n.daily-hourly-weather-carousel {\n    padding: 1rem 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.daily-weather-btn,\n.hourly-weather-btn {\n    background-color: var(--search-background-color);\n    height: 2.5rem;\n    width: 5rem;\n    border-radius: 5px;\n    font-size: 1rem;\n}\n\n.slide-buttons {\n    height: 100%;\n    width: 6rem;\n    margin-left: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.move-left,\n.move-right {\n    background-color: transparent;\n}\n\n.dots {\n    display: flex;\n    gap: 0.5rem;\n    transform: translateX(-3px);\n}\n\n.dot {\n    border-radius: 999px;\n    background-color: var(--search-background-color);\n    height: 8px;\n    width: 8px;\n}\n\n.dot.active {\n    background-color: white;\n}\n\n.material-symbols-outlined {\n    color: white;\n    display: flex;\n    justify-content: center;\n}\n\n.daily-weather-container {\n    display: flex;\n    gap: 1.2rem;\n}\n\n.daily-weather {\n    padding: 1rem;\n    width: 100%;\n    height: max(300px, 50%);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.day-information {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    font-size: 1.2rem;\n}\n\n.day-of-the-week {\n    font-weight: 500;\n}\n\n.date-of-the-week,\n.hourly-weather>h2 {\n    color: var(--faded-white);\n    font-weight: 400;\n}\n\n.date-of-the-week {\n    border-left: 1px solid var(--faded-white);\n    padding-left: 10px;\n    font-size: 1.6rem;\n}\n\n.day-weather-details {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.min-temp {\n    font-size: 1.5rem;\n    font-weight: 400;\n}\n\n.daily-weather>img {\n    height: 8rem;\n    width: 8rem;\n    align-self: center;\n}\n\n.hour-container {\n    display: flex;\n    margin: 0 auto;\n}\n\n.hourly-weather {\n    padding: 1rem;\n    width: 100%;\n    height: max(300px, 50%);\n    display: grid;\n    grid-template-rows: 1fr 2fr 2fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.hour-weather-description {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n    text-align: center;\n}\n\n.hour-weather-description>h3 {\n    font-size: 2rem;\n}\n\n.hour-description {\n    font-size: 1.1rem;\n    color: var(--faded-white);\n}\n\n.hourly-weather-icon {\n    height: 7rem;\n    width: 7rem;\n    align-self: flex-start;\n}\n\n.error-popup {\n    width: max-content;\n    border-radius: 999px;\n    background-color: white;\n    position: absolute;\n    top: 85px;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    text-align: center;\n    padding: 0.5rem 1rem;\n    font-size: 0.8rem;\n}\n\n.error-message {\n    color: red;\n    font-weight: 600;\n}\n\n.hide {\n    display: none;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "onLoadDefaultWeather": () => (/* binding */ onLoadDefaultWeather),
/* harmony export */   "searchLogic": () => (/* binding */ searchLogic)
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
    currentDayInformationContainer.append(generateLocationDetails(londonInfo), generateCurrentTempDetails(londonInfo), fillInExtraInformation(londonInfo));
    document.querySelector('.daily-hourly-weather-carousel').append((0,_weeklyWeather__WEBPACK_IMPORTED_MODULE_3__.dailyWeatherSection)((0,_weeklyWeather__WEBPACK_IMPORTED_MODULE_3__.createAllDaysToDisplay)(londonInfo)), (0,_hourlyWeather__WEBPACK_IMPORTED_MODULE_1__.hourlyWeather)((0,_hourlyWeather__WEBPACK_IMPORTED_MODULE_1__.createAnArrayOfAllHours)(londonInfo)));
};

/**
 * This function takes values and applies the correct classes to them so that they display on screen as intended
 * @param {object} obj the object from which we will be retrieving information 
 * @returns a DOM element object that contains all the relevant location details that need to be displayed on screen
 */
function generateLocationDetails(obj) {
    return displayLocationDetails((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveCity)(obj), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveCountry)(obj), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.createStandardDate)((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveDateAndTimeArr)(obj)[0]), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.createStandardTime)((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveDateAndTimeArr)(obj)[1]));
};

/**
 * This function takes values and applies the correct classes to them so that they display on screen as intended
 * @param {object} obj the object from which we will be retrieving information 
 * @returns a DOM element object that contains all the relevant temperature details that need to be displayed on screen
 */
function generateCurrentTempDetails(obj) {
    return currentTempDetailsSection(tempDetailsSection((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveCurrentTempImg)(obj), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveCurrentTemp)(obj)), tempConditionsSection((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveCurrentCondition)(obj), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveFeelsLikeTemp)(obj)))
};

/**
 * This function takes values and applies the correct classes to them so that they display on screen as intended
 * @param {object} obj the object from which we will be retrieving information 
 * @returns a DOM element object that contains all the relevant extra details to do with the current weather on screen
 */
function fillInExtraInformation(obj) {
    return extraInformationSection(windInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveWindDegrees)(obj), (0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveWindSpeed)(obj)), humidityInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveHumidity)(obj)),
        uvInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveUvNum)(obj)), visibilityInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveVisibilityDistance)(obj)), cloudinessInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveCloudinessPercentage)(obj)), rainInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveChanceOfRain)(obj)),
        sunriseInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveSunriseTime)(obj)), sunsetInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveSunsetTime)(obj)), moonInformation((0,_retrieveInformation__WEBPACK_IMPORTED_MODULE_2__.retrieveMoonPhase)(obj)))
};

/**
 * This is the logic behind the search bar, it checks for keyboard press and mouse click, and displays an error message if there's an error, otherwise it repopulates the relevants containers with information about the city's weather
 * @param {object} e the event object that contains information about the event that just took place
 */
async function searchLogic(e) {
    if ((e.key === "Enter" && e.target.value !== "") || (e.target.classList.contains('search-button') && e.target.previousElementSibling !== '')) {
        e.preventDefault();
        const respone = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d26a8a90752f45c2a03154907230505&q=${e.target.value || e.target.previousElementSibling.value}&days=7&aqi=no&alerts=no`);
        const result = await respone.json();
        if (result.error?.code === 1006) {
            document.querySelector('.error-popup').classList.remove('hide');
            document.querySelector('.error-message').innerText = result.error.message;
        } else {
            document.querySelector('.error-popup').classList.add('hide');
            document.querySelector('#search-bar').value = '';
            Array.from(currentDayInformationContainer.children).forEach(child => child.remove());
            document.querySelector('.daily-weather-container').remove();
            document.querySelector('.hourly-weather-container').remove();
            currentDayInformationContainer.append(generateLocationDetails(result), generateCurrentTempDetails(result), fillInExtraInformation(result));
            document.querySelector('.daily-hourly-weather-carousel').append((0,_weeklyWeather__WEBPACK_IMPORTED_MODULE_3__.dailyWeatherSection)((0,_weeklyWeather__WEBPACK_IMPORTED_MODULE_3__.createAllDaysToDisplay)(result)), (0,_hourlyWeather__WEBPACK_IMPORTED_MODULE_1__.hourlyWeather)((0,_hourlyWeather__WEBPACK_IMPORTED_MODULE_1__.createAnArrayOfAllHours)(result)));
        };
    };
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

function errorPopup() {
    const errorContainer = (0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.divGenerator)(['error-popup', 'hide']);
    errorContainer.append((0,_generatorFunctions__WEBPACK_IMPORTED_MODULE_0__.headingGenerator)('h2', ['error-message'], ''));
    return errorContainer;
};

/**
 * This function is used to create the header with all of its content
 * @returns A DOM element object the contains everything needed in the header
 */
function header() {
    const header = document.createElement('header');
    header.append(titleSection(), headerFormSection(), errorPopup(), headerButtons());
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
const searchBar = document.querySelector('#search-bar'); //the search bar in which we enter a city
const searchButton = document.querySelector('.search-button'); //the magnifying glass search button


dailyWeatherButton.addEventListener('click', _mainButtonsLogic__WEBPACK_IMPORTED_MODULE_5__.dailyAndHourlyButtonLogic);
hourlyWeatherButton.addEventListener('click', _mainButtonsLogic__WEBPACK_IMPORTED_MODULE_5__.dailyAndHourlyButtonLogic);
moveForwardButton.addEventListener('click', _mainButtonsLogic__WEBPACK_IMPORTED_MODULE_5__.moveForwardButtonLogic);
moveBackButton.addEventListener('click', _mainButtonsLogic__WEBPACK_IMPORTED_MODULE_5__.moveBackButtonLogic);
dotsContainer.addEventListener('click', _mainButtonsLogic__WEBPACK_IMPORTED_MODULE_5__.dotLogic);
changeDegreesContainer.addEventListener('click', _mainButtonsLogic__WEBPACK_IMPORTED_MODULE_5__.measurementButtonsLogic);
searchBar.addEventListener('keypress', _currentTemperatureSection__WEBPACK_IMPORTED_MODULE_2__.searchLogic);
searchButton.addEventListener('click', _currentTemperatureSection__WEBPACK_IMPORTED_MODULE_2__.searchLogic);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFNBQVMsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFV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QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNu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Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQjtBQUN1RTtBQUM1RDtBQUNBO0FBQzJGOztBQUUvSSwyQkFBMkIsaUVBQVkscUNBQXFDO0FBQzVFLDBCQUEwQixpRUFBZTs7QUFFekMscUJBQXFCLHNEQUFNLElBQUksc0ZBQThCO0FBQzdELGdDQUFnQyw0RUFBb0I7O0FBRXBELDJFQUEyRTtBQUMzRSx5RUFBeUU7QUFDekUsaUVBQWlFO0FBQ2pFLDZEQUE2RDtBQUM3RCx1REFBdUQ7QUFDdkQsMEVBQTBFO0FBQzFFLHlEQUF5RDtBQUN6RCwrREFBK0Q7OztBQUcvRCw2Q0FBNkMsd0VBQXlCO0FBQ3RFLDhDQUE4Qyx3RUFBeUI7QUFDdkUsNENBQTRDLHFFQUFzQjtBQUNsRSx5Q0FBeUMsa0VBQW1CO0FBQzVELHdDQUF3Qyx1REFBUTtBQUNoRCxpREFBaUQsc0VBQXVCO0FBQ3hFLHVDQUF1QyxtRUFBVztBQUNsRCx1Q0FBdUMsbUVBQVcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jYXJvdXNlbEJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3VycmVudFRlbXBlcmF0dXJlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZW5lcmF0b3JGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVhZGVyU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ob3VybHlXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21haW5CdXR0b25zTG9naWMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcmV0cmlldmVJbmZvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90ZW1wQ29udmVyc2lvbkxvZ2ljLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlZWtseVdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvV29ya1NhbnMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbGlnaHQtYmx1ZTogIzRiYTZjZjtcXG4gICAgLS1kYXJrLWJsdWU6ICMwYzRhNmU7XFxuICAgIC0tb3JhbmdlOiAjZWNiMzQ3O1xcbiAgICAtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yOiAjMDYyNjNiO1xcbiAgICAtLWZhZGVkLXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjAzKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tZGFyay1ibHVlKSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA1ZnIgNWZyIDAuNWZyO1xcbiAgICByb3ctZ2FwOiAycmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udGl0bGUtZW5kIHtcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDU1cHg7XFxufVxcblxcbiNzZWFyY2gtYmFyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMCAwLjhyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jc2VhcmNoLWJhcjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgbGVmdDogODglO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGFuZ2UtZGVncmVlcyB7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZmFocmVuaGVpdC1idG4sXFxuLmNlbHNpdXMtYnRuIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciA2MG1zIGVhc2UtaW47XFxufVxcblxcbi5mYWhyZW5oZWl0LWJ0bjpob3ZlcixcXG4uY2Vsc2l1cy1idG46aG92ZXIsXFxuLmRhaWx5LXdlYXRoZXItYnRuOmhvdmVyLFxcbi5ob3VybHktd2VhdGhlci1idG46aG92ZXIsXFxuLmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY3VycmVudC1kYXktaW5mb3JtYXRpb24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICB3aWR0aDogNDNyZW07XFxuICAgIGhlaWdodDogMzByZW07XFxufVxcblxcbi5sb2NhdGlvbi1kZXRhaWxzIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jaXR5LWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmRheS1kZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRpbWUtZGV0YWlscyB7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcC1kZXRhaWxzIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAwO1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLnRlbXAtZGV0YWlscz5pbWcge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbn1cXG5cXG4udGVtcC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZmVlbHMtbGlrZSxcXG4uZ2VuZXJhbC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24+ZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjNyZW07XFxufVxcblxcbi53aW5kLWluZm9ybWF0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi53aW5kLWRpcmVjdGlvbiB7XFxuICAgIGhlaWdodDogMS43cmVtO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gaDUsXFxuLmV4dHJhLWluZm9ybWF0aW9uIHAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gaDUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG59XFxuXFxuLmV4dHJhLWluZm9ybWF0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnNhZmUsXFxuLmFtYmVyLFxcbi5kYW5nZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5zYWZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxOTIsIDUxKTtcXG59XFxuXFxuLmFtYmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4uZGFuZ2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMCwgMCk7XFxufVxcblxcbi5jYXJvdXNlbC1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjNyZW07XFxufVxcblxcbi5kYWlseS1ob3VybHktd2VhdGhlci1jYXJvdXNlbCB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZGFpbHktd2VhdGhlci1idG4sXFxuLmhvdXJseS13ZWF0aGVyLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnNsaWRlLWJ1dHRvbnMge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb3ZlLWxlZnQsXFxuLm1vdmUtcmlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmRvdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xcbn1cXG5cXG4uZG90IHtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA4cHg7XFxuICAgIHdpZHRoOiA4cHg7XFxufVxcblxcbi5kb3QuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRhaWx5LXdlYXRoZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxLjJyZW07XFxufVxcblxcbi5kYWlseS13ZWF0aGVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogbWF4KDMwMHB4LCA1MCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5kYXktaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uZGF5LW9mLXRoZS13ZWVrIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmRhdGUtb2YtdGhlLXdlZWssXFxuLmhvdXJseS13ZWF0aGVyPmgyIHtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmRhdGUtb2YtdGhlLXdlZWsge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWZhZGVkLXdoaXRlKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLmRheS13ZWF0aGVyLWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWluLXRlbXAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmRhaWx5LXdlYXRoZXI+aW1nIHtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaG91ci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmhvdXJseS13ZWF0aGVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogbWF4KDMwMHB4LCA1MCUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMmZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3VyLXdlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG91ci13ZWF0aGVyLWRlc2NyaXB0aW9uPmgzIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uaG91ci1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbn1cXG5cXG4uaG91cmx5LXdlYXRoZXItaWNvbiB7XFxuICAgIGhlaWdodDogN3JlbTtcXG4gICAgd2lkdGg6IDdyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5lcnJvci1wb3B1cCB7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogODVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uZXJyb3ItbWVzc2FnZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBOzs7O0lBSUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLGdEQUFnRDtJQUNoRCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixrQkFBa0I7SUFD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QUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvV29ya1NhbnMtVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1saWdodC1ibHVlOiAjNGJhNmNmO1xcbiAgICAtLWRhcmstYmx1ZTogIzBjNGE2ZTtcXG4gICAgLS1vcmFuZ2U6ICNlY2IzNDc7XFxuICAgIC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3I6ICMwNjI2M2I7XFxuICAgIC0tZmFkZWQtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1kYXJrLWJsdWUpKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDVmciA1ZnIgMC41ZnI7XFxuICAgIHJvdy1nYXA6IDJyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50aXRsZS1lbmQge1xcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxuICAgIG1hcmdpbi1yaWdodDogNTVweDtcXG59XFxuXFxuI3NlYXJjaC1iYXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwIDAuOHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNzZWFyY2gtYmFyOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBsZWZ0OiA4OCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoYW5nZS1kZWdyZWVzIHtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mYWhyZW5oZWl0LWJ0bixcXG4uY2Vsc2l1cy1idG4ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDYwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmZhaHJlbmhlaXQtYnRuOmhvdmVyLFxcbi5jZWxzaXVzLWJ0bjpob3ZlcixcXG4uZGFpbHktd2VhdGhlci1idG46aG92ZXIsXFxuLmhvdXJseS13ZWF0aGVyLWJ0bjpob3ZlcixcXG4uYWN0aXZlIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jdXJyZW50LWRheS1pbmZvcm1hdGlvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIHdpZHRoOiA0M3JlbTtcXG4gICAgaGVpZ2h0OiAzMHJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLWRldGFpbHMge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNpdHktZGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uZGF5LWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udGltZS1kZXRhaWxzIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1mYWRlZC13aGl0ZSk7XFxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xcbn1cXG5cXG4uY3VycmVudC10ZW1wLWRldGFpbHMge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDA7XFxufVxcblxcbi50ZW1wLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzPmltZyB7XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgd2lkdGg6IDZyZW07XFxufVxcblxcbi50ZW1wLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5mZWVscy1saWtlLFxcbi5nZW5lcmFsLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlZC13aGl0ZSk7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbj5kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLndpbmQtaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLndpbmQtZGlyZWN0aW9uIHtcXG4gICAgaGVpZ2h0OiAxLjdyZW07XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiBoNSxcXG4uZXh0cmEtaW5mb3JtYXRpb24gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5leHRyYS1pbmZvcm1hdGlvbiBoNSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uc2FmZSxcXG4uYW1iZXIsXFxuLmRhbmdlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnNhZmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDE5MiwgNTEpO1xcbn1cXG5cXG4uYW1iZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5kYW5nZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAwLCAwKTtcXG59XFxuXFxuLmNhcm91c2VsLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLmRhaWx5LWhvdXJseS13ZWF0aGVyLWNhcm91c2VsIHtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5kYWlseS13ZWF0aGVyLWJ0bixcXG4uaG91cmx5LXdlYXRoZXItYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc2xpZGUtYnV0dG9ucyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vdmUtbGVmdCxcXG4ubW92ZS1yaWdodCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZG90cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XFxufVxcblxcbi5kb3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDhweDtcXG4gICAgd2lkdGg6IDhweDtcXG59XFxuXFxuLmRvdC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGFpbHktd2VhdGhlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEuMnJlbTtcXG59XFxuXFxuLmRhaWx5LXdlYXRoZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBtYXgoMzAwcHgsIDUwJSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmRheS1pbmZvcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5kYXktb2YtdGhlLXdlZWsge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZGF0ZS1vZi10aGUtd2VlayxcXG4uaG91cmx5LXdlYXRoZXI+aDIge1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZGF0ZS1vZi10aGUtd2VlayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4uZGF5LXdlYXRoZXItZGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5taW4tdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZGFpbHktd2VhdGhlcj5pbWcge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5ob3VyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uaG91cmx5LXdlYXRoZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBtYXgoMzAwcHgsIDUwJSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXItd2VhdGhlci1kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4zcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ob3VyLXdlYXRoZXItZGVzY3JpcHRpb24+aDMge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5ob3VyLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlZC13aGl0ZSk7XFxufVxcblxcbi5ob3VybHktd2VhdGhlci1pY29uIHtcXG4gICAgaGVpZ2h0OiA3cmVtO1xcbiAgICB3aWR0aDogN3JlbTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmVycm9yLXBvcHVwIHtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA4NXB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGJ1dHRvbkdlbmVyYXRvciwgZGl2R2VuZXJhdG9yLCBzcGFuR2VuZXJhdG9yIH0gZnJvbSBcIi4vZ2VuZXJhdG9yRnVuY3Rpb25zXCI7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBicmluZ3MgdG9nZXRoZXIgYWxsIGJ1dHRvbnMgdW5kZXIgb25lIGNvbnRhaW5lclxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgdGhlIGJ1dHRvbnMgY29udGFpbmVkIHdpdGhpbiB0aGUgZGFpbHktaG91cmx5LXdlYXRoZXItY2Fyb3VzZWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcm91c2VsQnV0dG9ucygpIHtcbiAgICBjb25zdCBjYXJvdXNlbEJ1dHRvbnNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydjYXJvdXNlbC1idXR0b25zJ10pO1xuICAgIGNhcm91c2VsQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoYnV0dG9uR2VuZXJhdG9yKFsnZGFpbHktd2VhdGhlci1idG4nLCAnYnRuJywgJ2FjdGl2ZSddLCAnRGFpbHknKSwgYnV0dG9uR2VuZXJhdG9yKFsnaG91cmx5LXdlYXRoZXItYnRuJywgJ2J0biddLCAnSG91cmx5JykpO1xuICAgIGNhcm91c2VsQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoc2xpZGVCdXR0b25zKCkpO1xuICAgIHJldHVybiBjYXJvdXNlbEJ1dHRvbnNDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb25zIGJyaW5ncyB0b2dldGhlciBhbGwgYnV0dG9ucyB0byBkbyB3aXRoIHRoZSBzbGlkZXNcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIHRoZSBidXR0b25zIGNvbnRhaW5lZCB3aXRoaW4gdGhlIHNsaWRlLWJ1dHRvbnMgY29udGFpbmVyXG4gKi9cbmZ1bmN0aW9uIHNsaWRlQnV0dG9ucygpIHtcbiAgICBjb25zdCBzbGlkZUJ1dHRvbnNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydzbGlkZS1idXR0b25zJywgJ2hpZGUnXSk7XG4gICAgY29uc3QgYnV0dG9uTGVmdCA9IHNwYW5HZW5lcmF0b3IoWydtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJ10sICdhcnJvd19iYWNrX2lvcycpXG4gICAgY29uc3QgYnV0dG9uUmlnaHQgPSBzcGFuR2VuZXJhdG9yKFsnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCddLCAnYXJyb3dfZm9yd2FyZF9pb3MnKVxuICAgIHNsaWRlQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoYnV0dG9uR2VuZXJhdG9yKFsnbW92ZS1sZWZ0JywgJ2J0biddLCAnJywgJycsIGJ1dHRvbkxlZnQpKTtcbiAgICBzbGlkZUJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGRvdHMoKSk7XG4gICAgc2xpZGVCdXR0b25zQ29udGFpbmVyLmFwcGVuZChidXR0b25HZW5lcmF0b3IoWydtb3ZlLXJpZ2h0JywgJ2J0biddLCAnJywgJycsIGJ1dHRvblJpZ2h0KSk7XG4gICAgcmV0dXJuIHNsaWRlQnV0dG9uc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgJ2RvdCcgYnV0dG9uc1xuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyB1c2VkIGFzIHRoZSBpbmRpdmlkdWFsIGJ1dHRvbnMgdGhhdCBkaXNwbGF5IHdoaWNoIHNsaWRlIHRoZSB1c2VyIGlzIG9uXG4gKi9cbmZ1bmN0aW9uIGRvdHMoKSB7XG4gICAgY29uc3QgZG90c0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2RvdHMnXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgaWYgKGkgPT09IDApIGRvdHNDb250YWluZXIuYXBwZW5kKGJ1dHRvbkdlbmVyYXRvcihbJ2RvdCcsICdhY3RpdmUnLCAnYnRuJ10sICcnLCAnMCcpKTtcbiAgICAgICAgZWxzZSBkb3RzQ29udGFpbmVyLmFwcGVuZChidXR0b25HZW5lcmF0b3IoWydkb3QnLCAnYnRuJ10sICcnLCBpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gZG90c0NvbnRhaW5lcjtcbn07IiwiaW1wb3J0IHsgY2hlY2tDYXRlZ29yeU9mVXYsIGRpdkdlbmVyYXRvciwgaGVhZGluZ0dlbmVyYXRvciwgaW1nR2VuZXJhdG9yLCBwYXJhZ3JhcGhHZW5lcmF0b3IsIHNwYW5HZW5lcmF0b3IgfSBmcm9tICcuL2dlbmVyYXRvckZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVBbkFycmF5T2ZBbGxIb3VycywgaG91cmx5V2VhdGhlciB9IGZyb20gJy4vaG91cmx5V2VhdGhlcic7XG5pbXBvcnQgeyBjcmVhdGVTdGFuZGFyZERhdGUsIGNyZWF0ZVN0YW5kYXJkVGltZSwgcmV0cmlldmVDaXR5LCByZXRyaWV2ZUNvdW50cnksIHJldHJpZXZlRGF0ZUFuZFRpbWVBcnIsIHJldHJpZXZlTWV0aG9kT2ZNZWFzdXJlbWVudCwgaXNNZXRob2RPZk1lYXN1cmVtZW50Q2Vsc2l1cywgcmV0cmlldmVXaW5kRGVncmVlcywgcmV0cmlldmVXaW5kU3BlZWQsIHJldHJpZXZlSHVtaWRpdHksIHJldHJpZXZlVXZOdW0sIHJldHJpZXZlVmlzaWJpbGl0eURpc3RhbmNlLCByZXRyaWV2ZUNsb3VkaW5lc3NQZXJjZW50YWdlLCByZXRyaWV2ZUNoYW5jZU9mUmFpbiwgcmV0cmlldmVTdW5yaXNlVGltZSwgcmV0cmlldmVTdW5zZXRUaW1lLCByZXRyaWV2ZU1vb25QaGFzZSwgcmV0cmlldmVDdXJyZW50VGVtcEltZywgcmV0cmlldmVDdXJyZW50VGVtcCwgcmV0cmlldmVDdXJyZW50Q29uZGl0aW9uLCByZXRyaWV2ZUZlZWxzTGlrZVRlbXAgfSBmcm9tICcuL3JldHJpZXZlSW5mb3JtYXRpb24nXG5pbXBvcnQgeyBkYWlseVdlYXRoZXJTZWN0aW9uLCBjcmVhdGVBbGxEYXlzVG9EaXNwbGF5IH0gZnJvbSAnLi93ZWVrbHlXZWF0aGVyJztcblxuY29uc3QgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnY3VycmVudC1kYXktaW5mb3JtYXRpb24nXSk7IC8vdGhpcyBpcyB0aGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgYWxsIGVsZW1lbnRzIHRoYXQgd2lsbCBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IG1vbWVudFxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBvbiBzY3JlZW4gdG8gc2hvdyB0aGUgbG9jYXRpb24gYW5kIHRpbWUgb2YgdGhlIGNpdHkgc2VhcmNoZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaXR5IHRoZSBuYW1lIG9mIHRoZSBjaXR5IHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkIG9uIHNjcmVlbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb3VudHJ5IHRoZSBuYW1lIG9mIHRoZSBjb3VudHJ5IHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkIG9uIHNjcmVlbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXkgdGhlIGRhdGUgdGhhdCBoYXMgY29udmVydGVkIGludG8gYSBzdHJpbmcgdXNpbmcgdGhlIEludGwgQVBJXG4gKiBAcGFyYW0ge3N0cmluZ30gdGltZSB0aGUgdGltZSB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZCBvbiBzY3JlZW5cbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgdGhhdCBjb250YWlucyBuZXN0ZWQgZWxlbWVudHMgdGhhdCBkaXNwbGF5IGluZm9ybWF0aW9uIGFib3V0IHRoZSBsb2NhdGlvbiBhbmQgdGltZVxuICovXG5mdW5jdGlvbiBkaXNwbGF5TG9jYXRpb25EZXRhaWxzKGNpdHkgPSAnJywgY291bnRyeSA9ICcnLCBkYXkgPSAnJywgdGltZSA9ICcnKSB7XG4gICAgY29uc3QgbG9jYXRpb25EZXRhaWxzID0gZGl2R2VuZXJhdG9yKFsnbG9jYXRpb24tZGV0YWlscyddKTtcbiAgICBjb25zdCBjaXR5TmFtZSA9IHNwYW5HZW5lcmF0b3IoWydjaXR5J10sIGNpdHkpO1xuICAgIGNvbnN0IGNvdW50cnlOYW1lID0gc3BhbkdlbmVyYXRvcihbJ2NvdW50cnknXSwgY291bnRyeSk7XG4gICAgY29uc3QgdGltZURldGFpbHMgPSBzcGFuR2VuZXJhdG9yKFsndGltZS1kZXRhaWxzJ10sIHRpbWUpO1xuICAgIGNvbnN0IGNpdHlEZXRhaWxzSGVhZGVyID0gaGVhZGluZ0dlbmVyYXRvcignaDInLCBbJ2NpdHktZGV0YWlscyddLCAnLCAnLCBjaXR5TmFtZSwgY291bnRyeU5hbWUpO1xuICAgIGNvbnN0IGRheURldGFpbHNIZWFkZXIgPSBoZWFkaW5nR2VuZXJhdG9yKCdoNCcsIFsnZGF5LWRldGFpbHMnXSwgZGF5LCB1bmRlZmluZWQsIHRpbWVEZXRhaWxzKTtcbiAgICBsb2NhdGlvbkRldGFpbHMuYXBwZW5kKGNpdHlEZXRhaWxzSGVhZGVyLCBkYXlEZXRhaWxzSGVhZGVyKTtcbiAgICByZXR1cm4gbG9jYXRpb25EZXRhaWxzO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZGlzcGxheSB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBhbG9uZyB3aXRoIGl0cyBhc3NvY2lhdGVkIGltYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgdGhpcyBpcyB0aGUgcGF0aCB0byB0aGUgaW1hZ2UgdGhhdCBuZWVkcyB0byBiZSBkaXNwbGF5ZWQgXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcCB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIFxuICogQHJldHVybnMgYSBkaXYgZWxlbWVudCB0aGF0IGhhcyB0d28gZnVydGhlciBlbGVtZW50cyBhcHBlbmRlZCB3aXRoaW4gaXQgZGlzcGxheWluZyB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBhbG9uZyB3aXRoIGl0cyBhc3NvY2lhdGVkIGltYWdlXG4gKi9cbmZ1bmN0aW9uIHRlbXBEZXRhaWxzU2VjdGlvbihpbWFnZSwgdGVtcCkge1xuICAgIGNvbnN0IHRlbXBEZXRhaWxzQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsndGVtcC1kZXRhaWxzJ10pO1xuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gc3BhbkdlbmVyYXRvcihbJ3RlbXAnXSwgdGVtcCk7XG4gICAgdGVtcERldGFpbHNDb250YWluZXIuYXBwZW5kKGltZ0dlbmVyYXRvcihpbWFnZSwgdW5kZWZpbmVkLCBbJ2ltYWdlLXdlYXRoZXItZGVzY3JpcHRpb24nXSksIGhlYWRpbmdHZW5lcmF0b3IoJ2gyJywgWydjdXJyZW50LXRlbXAnXSwgJ8KwJywgY3VycmVudFRlbXAsIHJldHJpZXZlTWV0aG9kT2ZNZWFzdXJlbWVudCgpKSk7XG4gICAgcmV0dXJuIHRlbXBEZXRhaWxzQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZGlzcGxheSB0aGUgdGVtcGVyYXR1cmUgaXQgZmVlbHMgbGlrZSBhbG9uZyB3aXRoIHRoZSBvdXRkb29yIGNvbmRpdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiBhIGRlc2NyaXB0aW9uIG9mIG91dGRvb3IgY29uZGl0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IGZlZWxzTGlrZVRlbXAgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRlbXBlcmF0dXJlIHRoYXQgaXQgZmVlbHMgbGlrZVxuICogQHJldHVybnMgYSBkaXYgZWxlbWVudCB0aGF0IGhhcyB0d28gZnVydGhlciBlbGVtZW50cyBhcHBlbmRlZCB3aXRoaW4gaXQgZGlzcGxheWluZyB0aGUgb3V0ZG9vciBjb25kaXRpb25zIGF0IHRoZSBjdXJyZW50IG1vbWVudCBhbmQgdGhlIHRlbXBlcmF0dXJlIGl0IGZlZWxzIGxpa2VcbiAqL1xuZnVuY3Rpb24gdGVtcENvbmRpdGlvbnNTZWN0aW9uKGRlc2NyaXB0aW9uLCBmZWVsc0xpa2VUZW1wKSB7XG4gICAgY29uc3QgdGVtcENvbmRpdGlvbnNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd0ZW1wLWNvbmRpdGlvbnMnXSk7XG4gICAgY29uc3QgZmVlbHNMaWtlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBmZWVsc0xpa2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZmVlbHMtbGlrZScpO1xuICAgIGZlZWxzTGlrZUhlYWRlci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgRmVlbHMgbGlrZSA8c3BhbiBjbGFzcz1cImZlZWxzLWxpa2UtdGVtcFwiPiR7ZmVlbHNMaWtlVGVtcH08L3NwYW4+wrA8c3BhbiBjbGFzcz1cIm1ldGhvZC1vZi1tZWFzdXJlbWVudFwiPiR7aXNNZXRob2RPZk1lYXN1cmVtZW50Q2Vsc2l1cygpID09PSB0cnVlID8gJ0MnIDogJ0YnfTwvc3Bhbj5gKTtcbiAgICB0ZW1wQ29uZGl0aW9uc0NvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDMnLCBbJ3RlbXAtZGVzY3JpcHRpb24nXSwgZGVzY3JpcHRpb24pLCBmZWVsc0xpa2VIZWFkZXIpO1xuICAgIHJldHVybiB0ZW1wQ29uZGl0aW9uc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbnMgam9iIGlzIHRvIGFwcGVuZCB0aGUgdHdvIGFyZ3VtZW50cyBpbnRvIHRoZSB1Y3JyZW50VGVtcERldGFpbHMgZGl2IHdoaWNoIHdpbGwgdGhlbiBiZSBkaXNwbGF5ZWQgb24gc2NyZWVuXG4gKiBAcGFyYW0ge29iamVjdH0gdGVtcERldGFpbHNTZWN0aW9uIGEgZG9tIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgdGhlIGZpcnN0IGNoaWxkIG9mIHRoZSBjdXJyZW50VGVtcERldGFpbHNDb250YWluZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSB0ZW1wQ29uZGl0aW9uc1NlY3Rpb24gYSBkb20gZWxlbWVudCBvYmplY3QgdGhhdCBpcyB0aGUgc2Vjb25kIGNoaWxkIG9mIHRoZSBjdXJyZW50VGVtcERldGFpbHNDb250YWluZXJcbiAqIEByZXR1cm5zIGEgZG9tIGVsZW1lbnQgb2JqZWN0IGNvbnRhaW5zIHRoZSB0d28gYXJndW1lbnRzIHBhc3NlZCBhcyBjaGlsZHJlblxuICovXG5mdW5jdGlvbiBjdXJyZW50VGVtcERldGFpbHNTZWN0aW9uKHRlbXBEZXRhaWxzU2VjdGlvbiwgdGVtcENvbmRpdGlvbnNTZWN0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudFRlbXBEZXRhaWxzQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnY3VycmVudC10ZW1wLWRldGFpbHMnXSk7XG4gICAgY3VycmVudFRlbXBEZXRhaWxzQ29udGFpbmVyLmFwcGVuZCh0ZW1wRGV0YWlsc1NlY3Rpb24sIHRlbXBDb25kaXRpb25zU2VjdGlvbik7XG4gICAgcmV0dXJuIGN1cnJlbnRUZW1wRGV0YWlsc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGFwcGVuZCBhbGwgOSBhcmd1bWVudHMgaW50byB0aGUgZXh0cmFJbmZvcm1hdGlvbkNvbnRhaW5lciB0aGF0IHdpbGwgdGhlbiBiZSBkaXNwbGF5ZWQgb250byB0aGUgc2NyZWVuXG4gKiBAcGFyYW0ge29iamVjdH0gd2luZEluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyB3aW5kIGRpcmVjdGlvbiBhbmQgc3BlZWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBodW1pZGl0eUluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyBodW1pZGl0eSBwZXJjZW50YWdlXG4gKiBAcGFyYW0ge29iamVjdH0gdXZJbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdGhlIERPTSBlbGVtZW50IGRpc3BsYXlpbmcgdXYtaW5kZXggXG4gKiBAcGFyYW0ge29iamVjdH0gdmlzaWJpbGl0eUluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyB2aXNpYmlsaXR5IGRpc3RhbmNlXG4gKiBAcGFyYW0ge29iamVjdH0gY2xvdWRpbmVzc0luZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyBjbG91ZGluZXNzIHBlcmNlbnRhZ2VcbiAqIEBwYXJhbSB7b2JqZWN0fSByYWluSW5mbyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHRoZSBET00gZWxlbWVudCBkaXNwbGF5aW5nIHRoZSBjaGFuY2Ugb2YgcmFpblxuICogQHBhcmFtIHtvYmplY3R9IHN1bnJpc2VJbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdGhlIERPTSBlbGVtZW50IGRpc3BsYXlpbmcgc3VucmlzZSB0aW1lXG4gKiBAcGFyYW0ge29iamVjdH0gc3Vuc2V0SW5mbyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHRoZSBET00gZWxlbWVudCBkaXNwbGF5aW5nIHN1bnNldCB0aW1lXG4gKiBAcGFyYW0ge29iamVjdH0gbW9vbkluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyBtb29uLXBoYXNlIGluZm9ybWF0aW9uXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIDkgY2hpbGRyZW4sIHdoaWNoIGFyZSBhbGwgdGhlIGFyZ3VtZW50cyB0aGF0IGhhdmUgYmVlbiBwYXNzZWRcbiAqL1xuZnVuY3Rpb24gZXh0cmFJbmZvcm1hdGlvblNlY3Rpb24od2luZEluZm8sIGh1bWlkaXR5SW5mbywgdXZJbmZvLCB2aXNpYmlsaXR5SW5mbywgY2xvdWRpbmVzc0luZm8sIHJhaW5JbmZvLCBzdW5yaXNlSW5mbywgc3Vuc2V0SW5mbywgbW9vbkluZm8pIHtcbiAgICBjb25zdCBleHRyYUluZm9ybWF0aW9uQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnZXh0cmEtaW5mb3JtYXRpb24nXSk7XG4gICAgZXh0cmFJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQod2luZEluZm8sIGh1bWlkaXR5SW5mbywgdXZJbmZvLCB2aXNpYmlsaXR5SW5mbywgY2xvdWRpbmVzc0luZm8sIHJhaW5JbmZvLCBzdW5yaXNlSW5mbywgc3Vuc2V0SW5mbywgbW9vbkluZm8pO1xuICAgIHJldHVybiBleHRyYUluZm9ybWF0aW9uQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgd2luZFxuICogQHBhcmFtIHtzdHJpbmd9IHdpbmRBcnJvd1JvdGF0aW9uIHRoZSBkZWdyZWVzIGJ5IHdoaWNoIHRoZSBhcnJvdyB0aGF0IGlzIHBvaW50ZWQgbm9ydGggc2hvdWxkIHJvdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHdpbmRTcGVlZCB0aGUgc3BlZWQgb2YgdGhlIHdpbmRcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHdpbmQgc3BlZWQgYW5kIGRpcmVjdGlvblxuICovXG5mdW5jdGlvbiB3aW5kSW5mb3JtYXRpb24od2luZEFycm93Um90YXRpb24sIHdpbmRTcGVlZCkge1xuICAgIGNvbnN0IHdpbmRDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd3aW5kJ10pO1xuICAgIGNvbnN0IHdpbmRJbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3dpbmQtaW5mb3JtYXRpb24nXSk7XG4gICAgY29uc3Qgd2luZFNwZWVkU3BhbiA9IHNwYW5HZW5lcmF0b3IoWyd3aW5kLW51bSddLCB3aW5kU3BlZWQpO1xuICAgIHdpbmRJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQoaW1nR2VuZXJhdG9yKCcuLy4uL3NyYy9hc3NldHMvYXJyb3cucG5nJywgJ0FuIGFycm93IHJvdGF0ZWQgYnkgdGhlIHdpbmRvdyBkaXJlY3Rpb24gZGVncmVlcycsIFsnd2luZC1kaXJlY3Rpb24nXSwgd2luZEFycm93Um90YXRpb24pLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWyd3aW5kLXNwZWVkJ10sICdtcGgnLCB3aW5kU3BlZWRTcGFuKSk7XG4gICAgd2luZENvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1dpbmQnKSwgd2luZEluZm9ybWF0aW9uQ29udGFpbmVyKTtcbiAgICByZXR1cm4gd2luZENvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZGl2IGVsZW1lbnQsIGFuZCBhcHBlbmRzIGEgPGg1PjwvaDU+IGFuZCA8cD48L3A+IGVsZW1lbnQgd2l0aGluIGl0IHRoYXQgZGlzcGxheXMgdGhlIGh1bWlkaXR5IHBlcmNlbnRhZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBodW1pZGl0eU51bWJlciB0aGUgaHVtaWRpdHkgY3VycmVudGx5IFxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgaHVtaWRpdHkgcGVyY2VudGFnZVxuICovXG5mdW5jdGlvbiBodW1pZGl0eUluZm9ybWF0aW9uKGh1bWlkaXR5TnVtYmVyKSB7XG4gICAgY29uc3QgaHVtaWRpdHlDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydodW1pZGl0eSddKTtcbiAgICBjb25zdCBodW1pZGl0eSA9IHNwYW5HZW5lcmF0b3IoWydodW1pZGl0eS1udW1iZXInXSwgaHVtaWRpdHlOdW1iZXIpXG4gICAgaHVtaWRpdHlDb250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2g1JywgW10sICdIdW1pZGl0eScpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydodW1pZGl0eS1wZXJjZW50YWdlJ10sICclJywgaHVtaWRpdHkpKTtcbiAgICByZXR1cm4gaHVtaWRpdHlDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSB1di1pbmRleFxuICogQHBhcmFtIHtzdHJpbmd9IHV2SW5kZXhOdW1iZXIgdGhlIHV2LWluZGV4IGN1cnJlbnRseVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgdXYtaW5kZXhcbiAqL1xuZnVuY3Rpb24gdXZJbmZvcm1hdGlvbih1dkluZGV4TnVtYmVyKSB7XG4gICAgY29uc3QgdXZDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd1di1pbmRleCddKTtcbiAgICB1dkNvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1VWIEluZGV4JyksIHBhcmFncmFwaEdlbmVyYXRvcihbJ3V2JywgY2hlY2tDYXRlZ29yeU9mVXYodXZJbmRleE51bWJlcildLCB1dkluZGV4TnVtYmVyKSk7XG4gICAgcmV0dXJuIHV2Q29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyB0aGUgdmlzaWJpbGl0eSBkaXN0YW5jZVxuICogQHBhcmFtIHtzdHJpbmd9IHZpc2liaWxpdHlEaXN0YW5jZSB0aGUgY3VycmVudCB2aXNpYmlsaXR5IGRpc3RhbmNlXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSB2aXNpYmlsaXR5IGRpc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIHZpc2liaWxpdHlJbmZvcm1hdGlvbih2aXNpYmlsaXR5RGlzdGFuY2UpIHtcbiAgICBjb25zdCB2aXNpYmlsaXR5Q29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsndmlzaWJpbGl0eSddKTtcbiAgICBjb25zdCB2aXNpYmxpdHlEaXN0YW5jZVNwYW4gPSBzcGFuR2VuZXJhdG9yKFsndmlzaWJpbGl0eS1udW0nXSwgdmlzaWJpbGl0eURpc3RhbmNlKTtcbiAgICB2aXNpYmlsaXR5Q29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnVmlzaWJpbGl0eScpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWyd2aXNpYmlsaXR5LWRpc3RhbmNlJ10sICdrbScsIHZpc2libGl0eURpc3RhbmNlU3BhbikpO1xuICAgIHJldHVybiB2aXNpYmlsaXR5Q29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyB0aGUgY3VycmVudCBjbG91ZCBwZXJjZW50YWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xvdWRQZXJjZW50YWdlIHRoZSBjdXJyZW50IGNsb3VkIHBlcmNlbnRhZ2VcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRpc3BsYXkgdGhlIGN1cnJlbnQgY2xvdWQgcGVyY2VudGFnZVxuICovXG5mdW5jdGlvbiBjbG91ZGluZXNzSW5mb3JtYXRpb24oY2xvdWRQZXJjZW50YWdlKSB7XG4gICAgY29uc3QgY2xvdWRpbmVzc0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2Nsb3VkaW5lc3MnXSk7XG4gICAgY29uc3QgY2xvdWRpbmVzc1BlcmNlbnRhZ2VTcGFuID0gc3BhbkdlbmVyYXRvcihbJ2Nsb3VkaW5lc3MtbnVtJ10sIGNsb3VkUGVyY2VudGFnZSk7XG4gICAgY2xvdWRpbmVzc0NvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ0Nsb3VkaW5lc3MnKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnY2xvdWRpbmVzcy1wZXJjZW50YWdlJ10sICclJywgY2xvdWRpbmVzc1BlcmNlbnRhZ2VTcGFuKSk7XG4gICAgcmV0dXJuIGNsb3VkaW5lc3NDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSBjdXJyZW50IHJhaW4gcGVyY2VudGFnZVxuICogQHBhcmFtIHtzdHJpbmd9IHJhaW5QZXJjZW50YWdlIHRoZSBjdXJyZW50IHJhaW4gcGVyY2VudGFnZVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgY3VycmVudCByYWluIHBlcmNlbnRhZ2VcbiAqL1xuZnVuY3Rpb24gcmFpbkluZm9ybWF0aW9uKHJhaW5QZXJjZW50YWdlKSB7XG4gICAgY29uc3QgcmFpbkNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2NoYW5jZS1vZi1yYWluJ10pO1xuICAgIGNvbnN0IHJhaW5QZXJjZW50YWdlU3BhbiA9IHNwYW5HZW5lcmF0b3IoWydjaGFuY2Utb2YtcmFpbi1udW0nXSwgcmFpblBlcmNlbnRhZ2UpO1xuICAgIHJhaW5Db250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2g1JywgW10sICdDaGFuY2Ugb2YgUmFpbicpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydjaGFuY2Utb2YtcmFpbi1wZXJjZW50YWdlJ10sICclJywgcmFpblBlcmNlbnRhZ2VTcGFuKSk7XG4gICAgcmV0dXJuIHJhaW5Db250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSBzdW5yaXNlIHRpbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdW5yaXNlVGltZSB0aGUgc3VucmlzZSB0aW1lIGZvciB0aGUgZGF5XG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSBzdW5yaXNlIHRpbWVcbiAqL1xuZnVuY3Rpb24gc3VucmlzZUluZm9ybWF0aW9uKHN1bnJpc2VUaW1lKSB7XG4gICAgY29uc3Qgc3VucmlzZUNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3N1bnJpc2UnXSk7XG4gICAgc3VucmlzZUNvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1N1bnJpc2UnKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnc3VucmlzZS10aW1lJ10sIHN1bnJpc2VUaW1lKSk7XG4gICAgcmV0dXJuIHN1bnJpc2VDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSBzdW5zZXQgdGltZVxuICogQHBhcmFtIHtzdHJpbmd9IHN1bnNldFRpbWUgdGhlIHN1bnNldCB0aW1lIGZvciB0aGUgZGF5XG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSBzdW5zZXQgdGltZVxuICovXG5mdW5jdGlvbiBzdW5zZXRJbmZvcm1hdGlvbihzdW5zZXRUaW1lKSB7XG4gICAgY29uc3Qgc3Vuc2V0Q29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnc3Vuc2V0J10pO1xuICAgIHN1bnNldENvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1N1bnNldCcpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydzdW5zZXQtdGltZSddLCBzdW5zZXRUaW1lKSk7XG4gICAgcmV0dXJuIHN1bnNldENvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZGl2IGVsZW1lbnQsIGFuZCBhcHBlbmRzIGEgPGg1PjwvaDU+IGFuZCA8cD48L3A+IGVsZW1lbnQgd2l0aGluIGl0IHRoYXQgZGlzcGxheXMgdGhlIGN1cnJlbnQgbW9vbiBwaGFzZVxuICogQHBhcmFtIHtzdHJpbmd9IG1vb25QaGFzZSB0aGUgY3VycmVudCBtb29uIHBoYXNlXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSBjdXJyZW50IG1vb24gcGhhc2VcbiAqL1xuZnVuY3Rpb24gbW9vbkluZm9ybWF0aW9uKG1vb25QaGFzZSkge1xuICAgIGNvbnN0IG1vb25waGFzZUNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ21vb24tcGhhc2UnXSk7XG4gICAgbW9vbnBoYXNlQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnTW9vbiBQaGFzZScpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydwaGFzZSddLCBtb29uUGhhc2UpKTtcbiAgICByZXR1cm4gbW9vbnBoYXNlQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHRvIGJlIHVzZWQgd2hlbiB0aGUgd2VicGFnZSBpcyBsb2FkZWQgdXAgYW5kIGl0IGZpbGxzIHRoZSB3ZWJwYWdlIHdpdGggdGhlIHJlcXVpcmVkIGluZm9ybWF0aW9uIHdpdGggdGhlIGRlZmF1bHQgY2l0eSBiZWluZyBsb25kb25cbiAqL1xuYXN5bmMgZnVuY3Rpb24gb25Mb2FkRGVmYXVsdFdlYXRoZXIoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZDI2YThhOTA3NTJmNDVjMmEwMzE1NDkwNzIzMDUwNSZxPWxvbmRvbiZkYXlzPTcmYXFpPW5vJmFsZXJ0cz1ubycsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IGxvbmRvbkluZm8gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZChnZW5lcmF0ZUxvY2F0aW9uRGV0YWlscyhsb25kb25JbmZvKSwgZ2VuZXJhdGVDdXJyZW50VGVtcERldGFpbHMobG9uZG9uSW5mbyksIGZpbGxJbkV4dHJhSW5mb3JtYXRpb24obG9uZG9uSW5mbykpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1ob3VybHktd2VhdGhlci1jYXJvdXNlbCcpLmFwcGVuZChkYWlseVdlYXRoZXJTZWN0aW9uKGNyZWF0ZUFsbERheXNUb0Rpc3BsYXkobG9uZG9uSW5mbykpLCBob3VybHlXZWF0aGVyKGNyZWF0ZUFuQXJyYXlPZkFsbEhvdXJzKGxvbmRvbkluZm8pKSk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgdmFsdWVzIGFuZCBhcHBsaWVzIHRoZSBjb3JyZWN0IGNsYXNzZXMgdG8gdGhlbSBzbyB0aGF0IHRoZXkgZGlzcGxheSBvbiBzY3JlZW4gYXMgaW50ZW5kZWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIHdpbGwgYmUgcmV0cmlldmluZyBpbmZvcm1hdGlvbiBcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIHRoZSByZWxldmFudCBsb2NhdGlvbiBkZXRhaWxzIHRoYXQgbmVlZCB0byBiZSBkaXNwbGF5ZWQgb24gc2NyZWVuXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlTG9jYXRpb25EZXRhaWxzKG9iaikge1xuICAgIHJldHVybiBkaXNwbGF5TG9jYXRpb25EZXRhaWxzKHJldHJpZXZlQ2l0eShvYmopLCByZXRyaWV2ZUNvdW50cnkob2JqKSwgY3JlYXRlU3RhbmRhcmREYXRlKHJldHJpZXZlRGF0ZUFuZFRpbWVBcnIob2JqKVswXSksIGNyZWF0ZVN0YW5kYXJkVGltZShyZXRyaWV2ZURhdGVBbmRUaW1lQXJyKG9iailbMV0pKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiB0YWtlcyB2YWx1ZXMgYW5kIGFwcGxpZXMgdGhlIGNvcnJlY3QgY2xhc3NlcyB0byB0aGVtIHNvIHRoYXQgdGhleSBkaXNwbGF5IG9uIHNjcmVlbiBhcyBpbnRlbmRlZFxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IGZyb20gd2hpY2ggd2Ugd2lsbCBiZSByZXRyaWV2aW5nIGluZm9ybWF0aW9uIFxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgdGhlIHJlbGV2YW50IHRlbXBlcmF0dXJlIGRldGFpbHMgdGhhdCBuZWVkIHRvIGJlIGRpc3BsYXllZCBvbiBzY3JlZW5cbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVDdXJyZW50VGVtcERldGFpbHMob2JqKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRUZW1wRGV0YWlsc1NlY3Rpb24odGVtcERldGFpbHNTZWN0aW9uKHJldHJpZXZlQ3VycmVudFRlbXBJbWcob2JqKSwgcmV0cmlldmVDdXJyZW50VGVtcChvYmopKSwgdGVtcENvbmRpdGlvbnNTZWN0aW9uKHJldHJpZXZlQ3VycmVudENvbmRpdGlvbihvYmopLCByZXRyaWV2ZUZlZWxzTGlrZVRlbXAob2JqKSkpXG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgdmFsdWVzIGFuZCBhcHBsaWVzIHRoZSBjb3JyZWN0IGNsYXNzZXMgdG8gdGhlbSBzbyB0aGF0IHRoZXkgZGlzcGxheSBvbiBzY3JlZW4gYXMgaW50ZW5kZWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIHdpbGwgYmUgcmV0cmlldmluZyBpbmZvcm1hdGlvbiBcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIHRoZSByZWxldmFudCBleHRyYSBkZXRhaWxzIHRvIGRvIHdpdGggdGhlIGN1cnJlbnQgd2VhdGhlciBvbiBzY3JlZW5cbiAqL1xuZnVuY3Rpb24gZmlsbEluRXh0cmFJbmZvcm1hdGlvbihvYmopIHtcbiAgICByZXR1cm4gZXh0cmFJbmZvcm1hdGlvblNlY3Rpb24od2luZEluZm9ybWF0aW9uKHJldHJpZXZlV2luZERlZ3JlZXMob2JqKSwgcmV0cmlldmVXaW5kU3BlZWQob2JqKSksIGh1bWlkaXR5SW5mb3JtYXRpb24ocmV0cmlldmVIdW1pZGl0eShvYmopKSxcbiAgICAgICAgdXZJbmZvcm1hdGlvbihyZXRyaWV2ZVV2TnVtKG9iaikpLCB2aXNpYmlsaXR5SW5mb3JtYXRpb24ocmV0cmlldmVWaXNpYmlsaXR5RGlzdGFuY2Uob2JqKSksIGNsb3VkaW5lc3NJbmZvcm1hdGlvbihyZXRyaWV2ZUNsb3VkaW5lc3NQZXJjZW50YWdlKG9iaikpLCByYWluSW5mb3JtYXRpb24ocmV0cmlldmVDaGFuY2VPZlJhaW4ob2JqKSksXG4gICAgICAgIHN1bnJpc2VJbmZvcm1hdGlvbihyZXRyaWV2ZVN1bnJpc2VUaW1lKG9iaikpLCBzdW5zZXRJbmZvcm1hdGlvbihyZXRyaWV2ZVN1bnNldFRpbWUob2JqKSksIG1vb25JbmZvcm1hdGlvbihyZXRyaWV2ZU1vb25QaGFzZShvYmopKSlcbn07XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgbG9naWMgYmVoaW5kIHRoZSBzZWFyY2ggYmFyLCBpdCBjaGVja3MgZm9yIGtleWJvYXJkIHByZXNzIGFuZCBtb3VzZSBjbGljaywgYW5kIGRpc3BsYXlzIGFuIGVycm9yIG1lc3NhZ2UgaWYgdGhlcmUncyBhbiBlcnJvciwgb3RoZXJ3aXNlIGl0IHJlcG9wdWxhdGVzIHRoZSByZWxldmFudHMgY29udGFpbmVycyB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjaXR5J3Mgd2VhdGhlclxuICogQHBhcmFtIHtvYmplY3R9IGUgdGhlIGV2ZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBldmVudCB0aGF0IGp1c3QgdG9vayBwbGFjZVxuICovXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hMb2dpYyhlKSB7XG4gICAgaWYgKChlLmtleSA9PT0gXCJFbnRlclwiICYmIGUudGFyZ2V0LnZhbHVlICE9PSBcIlwiKSB8fCAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWFyY2gtYnV0dG9uJykgJiYgZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZyAhPT0gJycpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kMjZhOGE5MDc1MmY0NWMyYTAzMTU0OTA3MjMwNTA1JnE9JHtlLnRhcmdldC52YWx1ZSB8fCBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlfSZkYXlzPTcmYXFpPW5vJmFsZXJ0cz1ub2ApO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25lLmpzb24oKTtcbiAgICAgICAgaWYgKHJlc3VsdC5lcnJvcj8uY29kZSA9PT0gMTAwNikge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLXBvcHVwJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKS5pbm5lclRleHQgPSByZXN1bHQuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1wb3B1cCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYmFyJykudmFsdWUgPSAnJztcbiAgICAgICAgICAgIEFycmF5LmZyb20oY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnJlbW92ZSgpKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS13ZWF0aGVyLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS13ZWF0aGVyLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZChnZW5lcmF0ZUxvY2F0aW9uRGV0YWlscyhyZXN1bHQpLCBnZW5lcmF0ZUN1cnJlbnRUZW1wRGV0YWlscyhyZXN1bHQpLCBmaWxsSW5FeHRyYUluZm9ybWF0aW9uKHJlc3VsdCkpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5LWhvdXJseS13ZWF0aGVyLWNhcm91c2VsJykuYXBwZW5kKGRhaWx5V2VhdGhlclNlY3Rpb24oY3JlYXRlQWxsRGF5c1RvRGlzcGxheShyZXN1bHQpKSwgaG91cmx5V2VhdGhlcihjcmVhdGVBbkFycmF5T2ZBbGxIb3VycyhyZXN1bHQpKSk7XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cbmV4cG9ydCB7IGN1cnJlbnREYXlJbmZvcm1hdGlvbkNvbnRhaW5lciwgb25Mb2FkRGVmYXVsdFdlYXRoZXIsIHNlYXJjaExvZ2ljIH07IiwiLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIHRha2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgYW5kIGFkZHMgdGhvc2UgY2xhc3NlcyB0byB0aGUgZWxlbWVudCB1c2luZyBhIGZvckVhY2ggbG9vcFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnQgdGhlIGVsZW1lbnQgdGhhdCB3ZSBuZWVkIHRvIGFkZCB0aGUgY2xhc3NlcyB0byBcbiAqL1xuZnVuY3Rpb24gYWRkQ2xhc3Nlc1RvRWxlbWVudChjbGFzc2VzLCBlbGVtZW50KSB7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKGluZGl2aWR1YWxDbGFzcyA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoaW5kaXZpZHVhbENsYXNzKSk7XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGEgZGl2IGVsZW1lbnQgd2l0aCBpdHMgY2xhc3NlcyBwcm92aWRlZCBhcyBhbiBhcmd1bWVudFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgZGl2XG4gKiBAcmV0dXJucyBhIGRpdiBET00gZWxlbWVudFxuICovXG5mdW5jdGlvbiBkaXZHZW5lcmF0b3IoY2xhc3Nlcykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgZGl2KVxuICAgIHJldHVybiBkaXY7XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGFuIGltZyBlbGVtZW50LCB3aXRoIHRoZSBzcGVjaWZpZWQsIHNyYywgYWx0IGFuZCBjbGFzc2VzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjIHRoZSBwYXRoIHRvIHRoZSBpbWFnZSB3ZSB3YW50IHRvIHVzZVxuICogQHBhcmFtIHtzdHJpbmd9IGFsdCB0aGUgYWx0IGRlc2NyaXB0aW9uIG9mIHRoZSBpbWcgaW5jYXNlIGl0IGRvZXNuJ3QgbG9hZFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgaW1nXG4gKiBAcmV0dXJucyBhbiBpbWcgZWxlbWVudFxuICovXG5mdW5jdGlvbiBpbWdHZW5lcmF0b3Ioc3JjLCBhbHQgPSAnJywgY2xhc3Nlcywgcm90YXRpb24gPSAwKSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgICBpbWcuYWx0ID0gYWx0O1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgaW1nKTtcbiAgICBpbWcuc3R5bGUucm90YXRlID0gYCR7cm90YXRpb259ZGVnYFxuICAgIHJldHVybiBpbWc7XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGEgaGVhZGluZyBvZiB0aGUgZGVzaXJlZCBzaXplLCBhbmQgYWRkcyB0aGUgdGV4dCBzcGVjaWZpZWQgYXMgd2VsbCBhcyB0aGUgY2xhc3NlcyBwcm92aWRlZFxuICogQHBhcmFtIHtzdHJpbmd9IGhlYWRpbmdTaXplIDEgb2YgNiBzaXplcyB3ZSB3YW50IHRoZSBoZWFkaW5nIHRvIGJlIGUuZy4gJ2gxJ1xuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgaGVhZGluZ1xuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgdGhlIHRleHQgdGhlIGhlYWRpbmcgbmVlZHMgdG8gZGlzcGxheSBcbiAqIEBwYXJhbSB7b2JqZWN0fSBzcGFuRWxlbWVudFByZXBwZW5kIGEgZG9tIGVsZW1lbnQgdGhhdCB3ZSB3YW50IHRvIGFkZCBiZWZvcmUgdGhlIHRleHQgcGFydCBvZiB0aGUgaGVhZGluZ1xuICogQHBhcmFtIHtvYmplY3R9IHNwYW5FbGVtZW50QXBwZW5kIGEgZG9tIGVsZW1lbnQgdGhhdCB3ZSB3YW50IHRvIGFkZCBhZnRlciB0aGUgdGV4dCBwYXJ0IG9mIHRoZSBoZWFkaW5nXG4gKiBAcmV0dXJucyBhIGhlYWRpbmcgRE9NIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gaGVhZGluZ0dlbmVyYXRvcihoZWFkaW5nU2l6ZSwgY2xhc3NlcywgdGV4dCwgc3BhbkVsZW1lbnRQcmVwcGVuZCA9ICcnLCBzcGFuRWxlbWVudEFwcGVuZCA9ICcnKSB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaGVhZGluZ1NpemUpO1xuICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gdGV4dDtcbiAgICBoZWFkaW5nLnByZXBlbmQoc3BhbkVsZW1lbnRQcmVwcGVuZClcbiAgICBoZWFkaW5nLmFwcGVuZChzcGFuRWxlbWVudEFwcGVuZClcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIGhlYWRpbmcpO1xuICAgIHJldHVybiBoZWFkaW5nO1xufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhIGJ1dHRvbiB3aXRoIHRoZSBjbGFzc2VzIGFuZCB0ZXh0IHByb3ZpZGVkXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBoZWFkaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCB0aGUgdGV4dCBuZWVkZWQgd2l0aGluIHRoZSBidXR0b24gXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgdGhlIGlkIHdlIHdhbnQgdG8gYXNzaWduIHRvIHRoZSBidXR0b25cbiAqIEBwYXJhbSB7b2JqZWN0fSBzcGFuRWxlbWVudFByZXBwZW5kIGEgZG9tIGVsZW1lbnQgdGhhdCB3ZSB3YW50IHRvIGFkZCBiZWZvcmUgdGhlIHRleHQgcGFydCBvZiB0aGUgYnV0dG9uXG4gKiBAcGFyYW0ge29iamVjdH0gc3BhbkVsZW1lbnRBcHBlbmQgYSBkb20gZWxlbWVudCB0aGF0IHdlIHdhbnQgdG8gYWRkIGFmdGVyIHRoZSB0ZXh0IHBhcnQgb2YgdGhlIGJ1dHRvblxuICogQHJldHVybnMgYSBidXR0b24gZWxlbWVudFxuICovXG5mdW5jdGlvbiBidXR0b25HZW5lcmF0b3IoY2xhc3NlcywgdGV4dCwgaWQgPSAnJywgc3BhbkVsZW1lbnRQcmVwcGVuZCA9ICcnLCBzcGFuRWxlbWVudEFwcGVuZCA9ICcnKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQ2xhc3Nlc1RvRWxlbWVudChjbGFzc2VzLCBidG4pO1xuICAgIGJ0bi5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIGJ0bi5pZCA9IGlkO1xuICAgIGJ0bi5wcmVwZW5kKHNwYW5FbGVtZW50UHJlcHBlbmQpO1xuICAgIGJ0bi5hcHBlbmQoc3BhbkVsZW1lbnRBcHBlbmQpO1xuICAgIHJldHVybiBidG47XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGEgc3BhbiBlbGVtZW50IHdpdGggdGhlIGNsYXNzZXMgYW5kIHRleHQgcHJvdmlkZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGhlYWRpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IG5lZWRlZCB3aXRoaW4gdGhlIHNwYW4gXG4gKiBAcmV0dXJucyBhIHNwYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzcGFuR2VuZXJhdG9yKGNsYXNzZXMsIHRleHQpIHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3Nlcywgc3Bhbik7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHJldHVybiBzcGFuO1xufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhIGZvcm0gZWxlbWVudCB3aXRoIHRoZSBjbGFzc2VzIHByb3ZpZGVkXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBmb3JtXG4gKiBAcmV0dXJucyBhIGZvcm0gZWxlbWVudFxuICovXG5mdW5jdGlvbiBmb3JtR2VuZXJhdG9yKGNsYXNzZXMpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgZm9ybSk7XG4gICAgcmV0dXJuIGZvcm07XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGFuIGlucHV0IGVsZW1lbnQgYW5kIGFkZHMgdGhlIHNwZWNpZmllZCBhdHRyaWJ1dGVzIGFuZCB2YWx1ZXMgdG8gaXRcbiAqIEBwYXJhbSB7QXJyYXl9IGF0dHJpYnV0ZXMgYW4gYXJyYXkgb2YgYXJyYXlzIHdoZXJlIGVhY2ggZWxlbWVudCBoYXMgdGhlIGF0dHJpYnV0ZSwgYW5kIGl0J3MgYXNzb2NpYXRlZCB2YWx1ZSBcbiAqIEByZXR1cm5zIGFuIGlucHV0IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gaW5wdXRHZW5lcmF0b3IoYXR0cmlidXRlcykge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0cmlidXRlID0+IGlucHV0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSkpO1xuICAgIHJldHVybiBpbnB1dDtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgcGFyYWdyYXBoIGVsZW1lbnQgYW5kIGZpbGxzIGl0IHdpdGggdGhlIGFyZ3VtZW50cyBwcm92aWRlZFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgZm9ybVxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgdGhlIHRleHQgbmVlZGVkIHdpdGhpbiB0aGUgPHA+PC9wPiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBzcGFuRWxlbWVudFByZXBwZW5kIGEgZG9tIGVsZW1lbnQgdGhhdCB3ZSB3YW50IHRvIGFkZCBiZWZvcmUgdGhlIHRleHQgcGFydCBvZiB0aGUgcGFyYWdyYXBoXG4gKiBAcGFyYW0ge29iamVjdH0gc3BhbkVsZW1lbnRBcHBlbmQgYSBkb20gZWxlbWVudCB0aGF0IHdlIHdhbnQgdG8gYWRkIGFmdGVyIHRoZSB0ZXh0IHBhcnQgb2YgdGhlIHBhcmFncmFwaFxuICogQHJldHVybnMgYSA8cD48L3A+IGVsZW1lbnQgdGhhdCBpcyBjdXN0b21pc2VkIGFzIHNwZWNpZmllZFxuICovXG5mdW5jdGlvbiBwYXJhZ3JhcGhHZW5lcmF0b3IoY2xhc3NlcywgdGV4dCwgc3BhbkVsZW1lbnRQcmVwcGVuZCA9ICcnLCBzcGFuRWxlbWVudEFwcGVuZCA9ICcnKSB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgcGFyYWdyYXBoKTtcbiAgICBwYXJhZ3JhcGguaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBwYXJhZ3JhcGgucHJlcGVuZChzcGFuRWxlbWVudFByZXBwZW5kKVxuICAgIHBhcmFncmFwaC5hcHBlbmQoc3BhbkVsZW1lbnRBcHBlbmQpXG4gICAgcmV0dXJuIHBhcmFncmFwaDtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGhlbHAgY2hvb3NlIHRoZSBjb3JyZWN0IGNsYXNzIGJhc2VkIG9uIHRoZSB1di1pbmRleCBudW1iZXIgcHJvdmlkZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSB1dk51bSB0aGUgbnVtYmVyIHRoYXQgd2Ugd2FudCB0byBjaGVjayB3aGV0aGVyIG9yIG5vdCBpdCdzIHZhbHVlIGlzIGEgc2FmZSwgYW1iZXIgb3IgZGFuZ2VyIHZhbHVlIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBjbGFzc2lmaWVzIHRoZSB2YWx1ZVxuICovXG5mdW5jdGlvbiBjaGVja0NhdGVnb3J5T2ZVdih1dk51bSkge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIHV2TnVtIDw9IDI6XG4gICAgICAgICAgICByZXR1cm4gJ3NhZmUnO1xuICAgICAgICBjYXNlIHV2TnVtIDw9IDc6XG4gICAgICAgICAgICByZXR1cm4gJ2FtYmVyJztcbiAgICAgICAgY2FzZSB1dk51bSA+PSA4OlxuICAgICAgICAgICAgcmV0dXJuICdkYW5nZXInO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGRpdkdlbmVyYXRvciwgaW1nR2VuZXJhdG9yLCBoZWFkaW5nR2VuZXJhdG9yLCBidXR0b25HZW5lcmF0b3IsIHNwYW5HZW5lcmF0b3IsIGlucHV0R2VuZXJhdG9yLCBmb3JtR2VuZXJhdG9yLCBjaGVja0NhdGVnb3J5T2ZVdiwgcGFyYWdyYXBoR2VuZXJhdG9yIH0iLCJpbXBvcnQgeyBkaXZHZW5lcmF0b3IsIGltZ0dlbmVyYXRvciwgaGVhZGluZ0dlbmVyYXRvciwgc3BhbkdlbmVyYXRvciwgaW5wdXRHZW5lcmF0b3IsIGJ1dHRvbkdlbmVyYXRvciwgZm9ybUdlbmVyYXRvciB9IGZyb20gXCIuL2dlbmVyYXRvckZ1bmN0aW9uc1wiO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyB0aGUgdGl0bGUgc2VjdGlvbiBvZiB0aGUgaGVhZGVyXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSB0aXRsZSBhbmQgdGhlIHBhZ2UgbG9nb1xuICovXG5mdW5jdGlvbiB0aXRsZVNlY3Rpb24oKSB7XG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd0aXRsZSddKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmQoaW1nR2VuZXJhdG9yKCcuLy4uL3NyYy9hc3NldHMvcGFnZS1pY29uLnBuZycsICdhIGNpcmN1bGFyIGljb24gZGVwaWN0aW5nIGFsbCA0IHNlYXNvbnMnLCBbJ21haW4taWNvbiddKSwgaGVhZGluZ0dlbmVyYXRvcignaDEnLCBbJ3BhZ2UtdGl0bGUnXSwgJ1dlYXRoZXInLCB1bmRlZmluZWQsIHNwYW5HZW5lcmF0b3IoWyd0aXRsZS1lbmQnXSwgJ1dhdGNoJykpKTtcbiAgICByZXR1cm4gdGl0bGVDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyB0aGUgc2VhcmNoIGJhciBzZWN0aW9uIG9mIHRoZSBoZWFkZXJcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIHNlYXJjaCBiYXJcbiAqL1xuZnVuY3Rpb24gaGVhZGVyRm9ybVNlY3Rpb24oKSB7XG4gICAgY29uc3QgZm9ybSA9IGZvcm1HZW5lcmF0b3IoWydzZWFyY2gtZm9ybSddKTtcbiAgICBmb3JtLmFwcGVuZChpbnB1dEdlbmVyYXRvcihbWyd0eXBlJywgJ3NlYXJjaCddLCBbJ2lkJywgJ3NlYXJjaC1iYXInXSwgWydwbGFjZWhvbGRlcicsICdTZWFyY2ggYSBsb2NhdGlvbiddLCBbJ3JlcXVpcmVkJywgdHJ1ZV1dKSwgaW1nR2VuZXJhdG9yKCcuLy4uL3NyYy9hc3NldHMvc2VhcmNoLWljb24uc3ZnJywgJ0EgbWFnbmlmeWluZyBnbGFzcycsIFsnc2VhcmNoLWJ1dHRvbiddKSk7XG4gICAgcmV0dXJuIGZvcm07XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyB0aGUgYnV0dG9ucyB1c2VkIHRvIGNvbnRyb2wgd2hldGhlciB0aGUgdGVtcGVyYXR1cmUgaXMgZGlzcGxheWVkIGluIGNlbHNpdXMgb3IgZmFocmVuaGVpdFxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyB0d28gYnV0dG9uc1xuICovXG5mdW5jdGlvbiBoZWFkZXJCdXR0b25zKCkge1xuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydjaGFuZ2UtZGVncmVlcyddKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZChidXR0b25HZW5lcmF0b3IoWydjZWxzaXVzLWJ0bicsICdidG4nLCAnYWN0aXZlJ10sICfCsEMnKSwgYnV0dG9uR2VuZXJhdG9yKFsnZmFocmVuaGVpdC1idG4nLCAnYnRuJ10sICfCsEYnKSk7XG4gICAgcmV0dXJuIGJ1dHRvbnNDb250YWluZXI7XG59O1xuXG5mdW5jdGlvbiBlcnJvclBvcHVwKCkge1xuICAgIGNvbnN0IGVycm9yQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnZXJyb3ItcG9wdXAnLCAnaGlkZSddKTtcbiAgICBlcnJvckNvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDInLCBbJ2Vycm9yLW1lc3NhZ2UnXSwgJycpKTtcbiAgICByZXR1cm4gZXJyb3JDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGhlYWRlciB3aXRoIGFsbCBvZiBpdHMgY29udGVudFxuICogQHJldHVybnMgQSBET00gZWxlbWVudCBvYmplY3QgdGhlIGNvbnRhaW5zIGV2ZXJ5dGhpbmcgbmVlZGVkIGluIHRoZSBoZWFkZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuYXBwZW5kKHRpdGxlU2VjdGlvbigpLCBoZWFkZXJGb3JtU2VjdGlvbigpLCBlcnJvclBvcHVwKCksIGhlYWRlckJ1dHRvbnMoKSk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbiIsImltcG9ydCB7IGRpdkdlbmVyYXRvciwgaGVhZGluZ0dlbmVyYXRvciwgaW1nR2VuZXJhdG9yLCBwYXJhZ3JhcGhHZW5lcmF0b3IsIHNwYW5HZW5lcmF0b3IgfSBmcm9tIFwiLi9nZW5lcmF0b3JGdW5jdGlvbnNcIjtcbmltcG9ydCB7IGdldEhvdXJUZW1wRGVzY3JpcHRpb24sIGdldEhvdXJUZW1wSWNvbiwgZ2V0SG91clRpbWUsIGdldEhvdXJUZW1wIH0gZnJvbSBcIi4vcmV0cmlldmVJbmZvcm1hdGlvblwiO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYXBwZW5kcyB0aGUgaG91ciBjb250YWlucyBvbnRvIHRoZSBob3VybHktd2VhdGhlci1jb250YWluZXIgZGl2IHNvIHRoYXQgaXQgY2FuIGJlIGRpc3BsYXllZCBvbiBzY3JlZW4gXG4gKiBAcGFyYW0ge2FycmF5fSBob3VyQ29udGFpbmVycyBhbiBhcnJheSBvZiBob3VyQ29udGFpbmVycywgdGhlIGFycmF5IHNob3VsZCBjb250YWluIDQgZWxlbWVudHNcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgdGhlIGhvdXJseS13ZWF0aGVyLWNvbnRhaW5lciBhbmQgY29udGFpbnMgYWxsIGhvdXJseSB3ZWF0aGVyIHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkXG4gKi9cbmZ1bmN0aW9uIGhvdXJseVdlYXRoZXIoaG91ckNvbnRhaW5lcnMpIHtcbiAgICBjb25zdCBob3VybHlXZWF0aGVyQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnaG91cmx5LXdlYXRoZXItY29udGFpbmVyJywgJ2hpZGUnXSk7XG4gICAgaG91cmx5V2VhdGhlckNvbnRhaW5lci5hcHBlbmQoLi4uaG91ckNvbnRhaW5lcnMpO1xuICAgIHJldHVybiBob3VybHlXZWF0aGVyQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhbiBob3VyLWNvbnRhaW5lciBkaXYsIGFuZCBzdG9yZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHdlYXRoZXIgaW4gZWFjaCBob3VyIG9uIGl0XG4gKiBAcGFyYW0ge251bWJlcn0gY29udGFpbmVyTnVtIHRoZSBudW1iZXIgb2YgdGhlIGNvbnRhaW5lciBlLmcuIG51bWJlciAwIGhvbGRzIGhvdXJzIDAtNVxuICogQHBhcmFtIHthcnJheX0gaG91cnNVbmRlckNvbnRhaW5lciBhbiBhcnJheSBvZiBpbmRpdmlkdWFsIGhvdXJzIHRoYXQgc2hvdWxkIGJlIHN0b3JlZCB1bmRlciB0aGUgY29udGFpbmVyIHRoYXQgd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBoYXMgNiBlbGVtZW50cyBhcyBjaGlsZHJlblxuICovXG5mdW5jdGlvbiBncm91cE9mSG91cnNDb250YWluZXIoY29udGFpbmVyTnVtLCBob3Vyc1VuZGVyQ29udGFpbmVyKSB7XG4gICAgY29uc3QgaG91ckNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbYGhvdXItY29udGFpbmVyLSR7Y29udGFpbmVyTnVtfWAsICdob3VyLWNvbnRhaW5lcicsIGAke2NvbnRhaW5lck51bSA9PT0gMCA/ICdzaG93bicgOiAnaGlkZSd9YF0pO1xuICAgIGhvdXJDb250YWluZXIuYXBwZW5kKC4uLmhvdXJzVW5kZXJDb250YWluZXIpO1xuICAgIHJldHVybiBob3VyQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9ucyB0YWtlcyBpbiBhbGwgdGhlIHBhcmFtZXRlcnMgcmVxdWlyZWQgdG8gY3JlYXRlIGEgZGl2IHRoYXQgc2hvd3MgdGhlIHdlYXRoZXIgZGV0YWlscyBmb3IgYSBzcGVjaWZpZWQgaG91clxuICogQHBhcmFtIHtudW1iZXJ9IGhvdXJOdW0gdGhpcyBpcyBhIG51bWJlciBiZXR3ZWVuIDAtMjMgc2hvd2luZyB3aGljaCBob3VyIHRoZSBjb250YWluZXIgaXMgZm9yXG4gKiBAcGFyYW0ge3N0cmluZ30gdGltZVRvRGlzcGxheSB0aGUgdGltZSB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZCBvbiBzY3JlZW4gXG4gKiBAcGFyYW0ge29iamVjdH0gdGVtcFRvRGlzcGxheSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgd2VhdGhlciBkdXJpbmcgdGhhdCBob3VyXG4gKiBAcGFyYW0ge3N0cmluZ30gaW1nVG9EaXNwbGF5IGEgcGF0aCB0byB0aGUgaW1hZ2UgdGhlIGNvcnJlc3BvbmRzIHdpdGggdGhlIHdlYXRoZXIgYXQgdGhhdCBob3VyXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgaW5mb3JtYXRpb24gcmVxdWlyZWQgdG8gcmVwcmVzZW50IHRoZSB3ZWF0aGVyIGR1cmluZyB0aGUgaG91clxuICovXG5mdW5jdGlvbiBpbmRpdmlkdWFsSG91ckNvbnRhaW5lcihob3VyTnVtLCB0aW1lVG9EaXNwbGF5LCB0ZW1wVG9EaXNwbGF5LCBpbWdUb0Rpc3BsYXkpIHtcbiAgICBjb25zdCBob3VyQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnaG91cmx5LXdlYXRoZXInLCBgaG91ci0ke2hvdXJOdW19YF0pO1xuICAgIGhvdXJDb250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2gyJywgW10sIHRpbWVUb0Rpc3BsYXkpLCB0ZW1wVG9EaXNwbGF5LCBpbWdHZW5lcmF0b3IoaW1nVG9EaXNwbGF5LCAnJywgWydob3VybHktd2VhdGhlci1pY29uJ10pKTtcbiAgICByZXR1cm4gaG91ckNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbnMgZ3JvdXBzIHRoZSB0ZW1wZXJhdHVyZSBhbmQgYSBkZXNjcmlwdGlvbiBhYm91dCB0aGUgd2VhdGhlciBpbnRvIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wIHRoZSB0ZW1wZXJhdHVyZSBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wRGVzY3JpcHRpb24gYSBkZXNjcmlwdGlvbiBhYm91dCB0aGUgd2VhdGhlclxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBtYWtlcyB1cCB0aGUgdGVtcGVyYXR1cmUgaW5mb3JtYXRpb24gYWJvdXQgYSBjZXJ0YWluIGhvdXJcbiAqL1xuZnVuY3Rpb24gaG91cldlYXRoZXJEZXRhaWxzKHRlbXAsIHRlbXBEZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IHdlYXRoZXJEZXRhaWxzQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnaG91ci13ZWF0aGVyLWRlc2NyaXB0aW9uJ10pO1xuICAgIGNvbnN0IHRlbXBTcGFuID0gc3BhbkdlbmVyYXRvcihbJ2hvdXItd2VhdGhlciddLCB0ZW1wKTtcbiAgICBjb25zdCB3ZWF0aGVyU3ltYm9sID0gc3BhbkdlbmVyYXRvcihbJ21ldGhvZC1vZi1tZWFzdXJlbWVudCddLCAnQycpO1xuICAgIHdlYXRoZXJEZXRhaWxzQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoMycsIFtdLCAnwrAnLCB0ZW1wU3Bhbiwgd2VhdGhlclN5bWJvbCksIHBhcmFncmFwaEdlbmVyYXRvcihbJ2hvdXItZGVzY3JpcHRpb24nXSwgdGVtcERlc2NyaXB0aW9uKSk7XG4gICAgcmV0dXJuIHdlYXRoZXJEZXRhaWxzQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHNvcnRzIGVhY2ggaG91ciBjcmVhdGVzIGFuZCBzb3J0cyBlYWNoIGhvdXIgaW50byB0aGUgY29ycmVjdCBjb250YWluZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIHdpbGwgYmUgZ2V0dGluZyBpbmZvcm1hdGlvbiBmcm9tIFxuICogQHJldHVybnMgYW4gYXJyYXkgdGhhdCBjb250YWlucyA0IGRpdiBlbGVtZW50cywgZWFjaCBkaXYgaGFzIGluZm9ybWF0aW9uIGFib3V0IHRoZSB3ZWF0aGVyIGR1cmluZyBhIGNlcnRhaW4gaG91clxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5BcnJheU9mQWxsSG91cnMob2JqKSB7XG4gICAgY29uc3QgY29udGFpbmVyT25lID0gW107XG4gICAgY29uc3QgY29udGFpbmVyVHdvID0gW107XG4gICAgY29uc3QgY29udGFpbmVyVGhyZWUgPSBbXTtcbiAgICBjb25zdCBjb250YWluZXJGb3VyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgIGlmIChpIDw9IDUpIGNvbnRhaW5lck9uZS5wdXNoKGluZGl2aWR1YWxIb3VyQ29udGFpbmVyKGksIGdldEhvdXJUaW1lKGksIG9iaiksIGhvdXJXZWF0aGVyRGV0YWlscyhnZXRIb3VyVGVtcChpLCBvYmopLCBnZXRIb3VyVGVtcERlc2NyaXB0aW9uKGksIG9iaikpLCBnZXRIb3VyVGVtcEljb24oaSwgb2JqKSkpO1xuICAgICAgICBlbHNlIGlmIChpIDw9IDExKSBjb250YWluZXJUd28ucHVzaChpbmRpdmlkdWFsSG91ckNvbnRhaW5lcihpLCBnZXRIb3VyVGltZShpLCBvYmopLCBob3VyV2VhdGhlckRldGFpbHMoZ2V0SG91clRlbXAoaSwgb2JqKSwgZ2V0SG91clRlbXBEZXNjcmlwdGlvbihpLCBvYmopKSwgZ2V0SG91clRlbXBJY29uKGksIG9iaikpKTtcbiAgICAgICAgZWxzZSBpZiAoaSA8PSAxNykgY29udGFpbmVyVGhyZWUucHVzaChpbmRpdmlkdWFsSG91ckNvbnRhaW5lcihpLCBnZXRIb3VyVGltZShpLCBvYmopLCBob3VyV2VhdGhlckRldGFpbHMoZ2V0SG91clRlbXAoaSwgb2JqKSwgZ2V0SG91clRlbXBEZXNjcmlwdGlvbihpLCBvYmopKSwgZ2V0SG91clRlbXBJY29uKGksIG9iaikpKTtcbiAgICAgICAgZWxzZSBpZiAoaSA8PSAyMykgY29udGFpbmVyRm91ci5wdXNoKGluZGl2aWR1YWxIb3VyQ29udGFpbmVyKGksIGdldEhvdXJUaW1lKGksIG9iaiksIGhvdXJXZWF0aGVyRGV0YWlscyhnZXRIb3VyVGVtcChpLCBvYmopLCBnZXRIb3VyVGVtcERlc2NyaXB0aW9uKGksIG9iaikpLCBnZXRIb3VyVGVtcEljb24oaSwgb2JqKSkpO1xuICAgIH07XG4gICAgY29uc3QgZnVsbEhvdXJzQXJyID0gW2dyb3VwT2ZIb3Vyc0NvbnRhaW5lcigwLCBjb250YWluZXJPbmUpLCBncm91cE9mSG91cnNDb250YWluZXIoMSwgY29udGFpbmVyVHdvKSwgZ3JvdXBPZkhvdXJzQ29udGFpbmVyKDIsIGNvbnRhaW5lclRocmVlKSwgZ3JvdXBPZkhvdXJzQ29udGFpbmVyKDMsIGNvbnRhaW5lckZvdXIpXTtcbiAgICByZXR1cm4gZnVsbEhvdXJzQXJyO1xufTtcblxuZXhwb3J0IHsgaG91cmx5V2VhdGhlciwgZ3JvdXBPZkhvdXJzQ29udGFpbmVyLCBpbmRpdmlkdWFsSG91ckNvbnRhaW5lciwgaG91cldlYXRoZXJEZXRhaWxzIH0iLCJpbXBvcnQgeyBtYWtlRmFocmVuaGVpdEFjdGl2ZSwgbWFrZUNlbHNpdXNBY3RpdmUsIGNlbHNpdXNUb0ZhaHJlbmhlaXQsIGZhaHJlbmhlaXRUb0NlbHNpdXMsIGNoYW5nZUdyb3VwSW50b0NlbHNpdXMsIGNoYW5nZUdyb3VwSW50b0ZhaHJlbmhlaXQgfSBmcm9tICcuL3RlbXBDb252ZXJzaW9uTG9naWMnO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY29udGFpbnMgdGhlIGxvZ2ljIGZvciBib3RoIHRoZSBkYWlseSBhbmQgaG91cmx5IHdlYXRoZXIgYnV0dG9uLCBpZiB0aGUgZGFpbHkgd2VhdGhlciBidXR0b24gaXMgY2xpY2tlZCB0aGVuIHRoYXQgaXMgZGlzcGxheWVkIGFuZCB0aGUgaG91cmx5IHdlYXRoZXIgZGl2IGlzIGhpZGRlbiBhbmQgdmljZSB2ZXJzYSBpZiB0aGUgaG91cmx5IHdlYXRoZXIgYnV0dG9uIGlzIGNsaWNrZWRcbiAqIEBwYXJhbSB7IG9iamVjdCB9IGUgdGhlIGV2ZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBldmVudFxuICovXG5mdW5jdGlvbiBkYWlseUFuZEhvdXJseUJ1dHRvbkxvZ2ljKGUpIHtcbiAgICBjb25zdCBkYWlseVdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHktd2VhdGhlci1jb250YWluZXInKTtcbiAgICBjb25zdCBob3VybHlXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS13ZWF0aGVyLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhaWx5V2VhdGhlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS13ZWF0aGVyLWJ0bicpO1xuICAgIGNvbnN0IGhvdXJseVdlYXRoZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LXdlYXRoZXItYnRuJyk7XG4gICAgY29uc3Qgc2xpZGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLWJ1dHRvbnMnKTtcbiAgICBpZiAoZS50YXJnZXQgPT09IGRhaWx5V2VhdGhlckJ1dHRvbikge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgaG91cmx5V2VhdGhlckJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgc2xpZGVCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgZGFpbHlXZWF0aGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgaG91cmx5V2VhdGhlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gaG91cmx5V2VhdGhlckJ1dHRvbikge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgZGFpbHlXZWF0aGVyQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBzbGlkZUJ1dHRvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBkYWlseVdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBob3VybHlXZWF0aGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9O1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNoZWNrcyBhbGwgaG91cmx5IGNvbnRhaW5lcnMgYW5kIGZpbmRzIHRoZSBvbmUgdGhhdCBjdXJyZW50bHkgaGFzIHRoZSBzaG93biBjbGFzcyBhcHBsaWVkIHRvIGl0XG4gKiBAcmV0dXJucyB0aGUgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlICdzaG93bicgY2xhc3NcbiAqL1xuZnVuY3Rpb24gZmluZEFjdGl2ZUhvdXJseUNvbnRhaW5lcigpIHtcbiAgICBjb25zdCBhbGxIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXItY29udGFpbmVyJyk7XG4gICAgZm9yIChsZXQgaG91cmx5RGl2IG9mIGFsbEhvdXJseURpdnMpIHtcbiAgICAgICAgaWYgKGhvdXJseURpdi5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3duJykpIHJldHVybiBob3VybHlEaXZcbiAgICB9O1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9ucyBydW5zIHdoZW4gdGhlIHVzZXIgY2hhbmdlcyB0aGUgY2Fyb3VzZWwgdG8gdmlldyBhIGNlcnRhaW4gaG91ciwgdGhlIGRpdiB0aGF0IGlzIGN1cnJlbnRseSBzaG93aW5nIHdpbGwgaGF2ZSB0aGUgJ3Nob3duJyBjbGFzcyBhcHBsaWVkIHRvIGl0IHNvIHRoaXMgZnVuY3Rpb24gZmluZHMgdGhhdCBkaXYgYW5kIHRha2VzIGl0cyBpbmRleCBudW1iZXJcbiAqIGl0IHRoZW4gY2FsbHMgdGhlIGFkZEFjdGl2ZVRvRG90IGZ1bmN0aW9uIGFuZCBwYXNzZXMgdGhhdCBpbmRleCBudW1iZXIgc28gdGhhdCBkb3QgaGFzIHRoZSAnYWN0aXZlJyBjbGFzcyBhcHBsaWVkIHRvIGl0XG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZURvdCgpIHtcbiAgICBjb25zdCBhbGxIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXItY29udGFpbmVyJyk7XG4gICAgcmVtb3ZlQWN0aXZlRnJvbURvdHMoKTtcbiAgICBhbGxIb3VybHlEaXZzLmZvckVhY2goKGhvdXJseURpdiwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGhvdXJseURpdi5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3duJykpIGFkZEFjdGl2ZVRvRG90KGluZGV4KTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBmaW5kcyB0aGUgZG90IHRoYXQgaGFzIHRoZSAnYWN0aXZlJyBjbGFzcyBhcHBsaWVkIHRvIGl0IGFuZCByZW1vdmVzIGl0IHNvIHRoZXJlIGlzIG5vdCBkb3QgdGhhdCBoYXMgdGhlIGFjdGl2ZSBjbGFzcyBhcHBsaWVkIHRvIGl0XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUZyb21Eb3RzKCkge1xuICAgIGNvbnN0IGFsbERvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG90Jyk7XG4gICAgb3V0ZXI6XG4gICAgZm9yIChsZXQgZG90IG9mIGFsbERvdHMpIHtcbiAgICAgICAgaWYgKGRvdC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBicmVhayBvdXRlcjtcbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHVzZXMgdGhlIGRvdE51bWJlciBhcmd1bWVudCB0byBnZXQgdGhlIGNvcnJlc3BvbmRpbmcgZG90IGFuZCBhZGQgdGhlICdhY3RpdmUnIGNsYXNzIHRvIGl0XG4gKiBAcGFyYW0ge251bWJlcn0gZG90TnVtYmVyIHRoaXMgaXMgdGhlIGluZGV4IG9mIHdoaWNoIGRvdCB3ZSB3YW50IHRvIGFkZCB0aGUgJ2FjdGl2ZScgY2xhc3MgdG8gXG4gKi9cbmZ1bmN0aW9uIGFkZEFjdGl2ZVRvRG90KGRvdE51bWJlcikge1xuICAgIGNvbnN0IGFsbERvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG90Jyk7XG4gICAgYWxsRG90c1tkb3ROdW1iZXJdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHNob3dzIHRoZSBzcGVjaWZpZWQgaG91ci1jb250YWluZXIgb24gc2NyZWVuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBob3VyLWNvbnRhaW5lciB3ZSB3YW50IHRvIGRpc3BsYXkgXG4gKi9cbmZ1bmN0aW9uIHNob3dIb3VybHlDb250YWluZXIoaW5kZXgpIHtcbiAgICBjb25zdCBob3VybHlDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXItY29udGFpbmVyJyk7XG4gICAgaG91cmx5Q29udGFpbmVyc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGhvdXJseUNvbnRhaW5lcnNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3Nob3duJyk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb25zIGhpZGVzIGFsbCB0aGUgaG91ci1jb250YWluZXJzXG4gKi9cbmZ1bmN0aW9uIGhpZGVBbGxIb3VybHlDb250YWluZXJzKCkge1xuICAgIGNvbnN0IGhvdXJseUNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91ci1jb250YWluZXInKTtcbiAgICBob3VybHlDb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3duJyk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcnVucyB3aGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgbW92ZUZvcndhcmRCdXR0b24sIGFuZCBpdCB3b3JrcyBieSBjaGVja2luZyB0aGVyZSBpcyBhbm90aGVyIHNpYmlsaW5nIGVsZW1lbnQgYW5kIHRoZW4gdXBkYXRpbmcgdG8gc2hvdyB0aGUgbmV4dCBzaWJsaW5nIGVsZW1lbnRcbiAqIEByZXR1cm5zIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBtb3ZlRm9yd2FyZEJ1dHRvbkxvZ2ljKCkge1xuICAgIGNvbnN0IGFjdGl2ZUhvdXJseURpdiA9IGZpbmRBY3RpdmVIb3VybHlDb250YWluZXIoKTtcbiAgICBpZiAoYWN0aXZlSG91cmx5RGl2Lm5leHRFbGVtZW50U2libGluZyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVIb3VybHlEaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBhY3RpdmVIb3VybHlEaXYuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd24nKTtcbiAgICAgICAgYWN0aXZlSG91cmx5RGl2Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGFjdGl2ZUhvdXJseURpdi5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnc2hvd24nKTtcbiAgICAgICAgdXBkYXRlRG90KCk7XG4gICAgfTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBydW5zIHdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBtb3ZlQmFja0J1dHRvbiwgYW5kIGl0IHdvcmtzIGJ5IGNoZWNraW5nIHRoZXJlIGlzIGEgcHJldmlvdXMgc2liaWxpbmcgZWxlbWVudCBhbmQgdGhlbiB1cGRhdGluZyB0byBzaG93IHRoZSBwcmV2aW91cyBzaWJsaW5nIGVsZW1lbnRcbiAqIEByZXR1cm5zIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBtb3ZlQmFja0J1dHRvbkxvZ2ljKCkge1xuICAgIGNvbnN0IGFjdGl2ZUhvdXJseURpdiA9IGZpbmRBY3RpdmVIb3VybHlDb250YWluZXIoKTtcbiAgICBpZiAoYWN0aXZlSG91cmx5RGl2LnByZXZpb3VzRWxlbWVudFNpYmxpbmcgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlSG91cmx5RGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgYWN0aXZlSG91cmx5RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3duJyk7XG4gICAgICAgIGFjdGl2ZUhvdXJseURpdi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgYWN0aXZlSG91cmx5RGl2LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnc2hvd24nKTtcbiAgICAgICAgdXBkYXRlRG90KCk7XG4gICAgfTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB0aGUgbG9naWMgYmVoaW5kIHdoYXQgc2hvdWxkIGhhcHBlbiB3aGVuIGFuIGluZGl2aWR1YWwgZG90IGlzIHByZXNzZWQsIGl0IGRpc3BsYXlzIHRoZSBjb3JyZXNwb25kaW5nIGhvdXIgY29udGFpbmVyLCBhbmQgdXBkYXRlcyB0aGUgYWN0aXZlIGRvdFxuICogQHBhcmFtIHtvYmplY3R9IGUgdGhlIGV2ZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBldmVudCBcbiAqL1xuZnVuY3Rpb24gZG90TG9naWMoZSkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RvdCcpKSB7XG4gICAgICAgIGhpZGVBbGxIb3VybHlDb250YWluZXJzKCk7XG4gICAgICAgIHJlbW92ZUFjdGl2ZUZyb21Eb3RzKCk7XG4gICAgICAgIHNob3dIb3VybHlDb250YWluZXIoZS50YXJnZXQuaWQpO1xuICAgICAgICBhZGRBY3RpdmVUb0RvdChlLnRhcmdldC5pZCk7XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIG1lYXN1cmVtZW50QnV0dG9uc0xvZ2ljKGUpIHtcbiAgICBjb25zdCBhbGxNZXRob2RPZk1lYXN1cmVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1ldGhvZC1vZi1tZWFzdXJlbWVudCcpO1xuICAgIGNvbnN0IG1haW5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcbiAgICBjb25zdCBmZWVsc0xpa2VUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UtdGVtcCcpO1xuICAgIGNvbnN0IGFsbERheU9mVGhlV2Vla01heFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5LW9mLXRoZS13ZWVrLW1heC10ZW1wJyk7XG4gICAgY29uc3QgYWxsRGF5T2ZUaGVXZWVrTWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXktb2YtdGhlLXdlZWstbWluLXRlbXAnKTtcbiAgICBjb25zdCBhbGxIb3VyVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VyLXdlYXRoZXInKTtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYWhyZW5oZWl0LWJ0bicpKSB7XG4gICAgICAgIG1ha2VGYWhyZW5oZWl0QWN0aXZlKCk7XG4gICAgICAgIGFsbE1ldGhvZE9mTWVhc3VyZW1lbnQuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuaW5uZXJUZXh0ID0gJ0YnKTtcbiAgICAgICAgbWFpblRlbXAuaW5uZXJUZXh0ID0gY2Vsc2l1c1RvRmFocmVuaGVpdChtYWluVGVtcC5pbm5lclRleHQpO1xuICAgICAgICBmZWVsc0xpa2VUZW1wLmlubmVyVGV4dCA9IGNlbHNpdXNUb0ZhaHJlbmhlaXQoZmVlbHNMaWtlVGVtcC5pbm5lclRleHQpO1xuICAgICAgICBjaGFuZ2VHcm91cEludG9GYWhyZW5oZWl0KGFsbERheU9mVGhlV2Vla01heFRlbXApO1xuICAgICAgICBjaGFuZ2VHcm91cEludG9GYWhyZW5oZWl0KGFsbERheU9mVGhlV2Vla01pblRlbXApO1xuICAgICAgICBjaGFuZ2VHcm91cEludG9GYWhyZW5oZWl0KGFsbEhvdXJUZW1wKTtcbiAgICB9O1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbHNpdXMtYnRuJykpIHtcbiAgICAgICAgbWFrZUNlbHNpdXNBY3RpdmUoKTtcbiAgICAgICAgYWxsTWV0aG9kT2ZNZWFzdXJlbWVudC5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5pbm5lclRleHQgPSAnQycpO1xuICAgICAgICBtYWluVGVtcC5pbm5lclRleHQgPSBmYWhyZW5oZWl0VG9DZWxzaXVzKG1haW5UZW1wLmlubmVyVGV4dCk7XG4gICAgICAgIGZlZWxzTGlrZVRlbXAuaW5uZXJUZXh0ID0gZmFocmVuaGVpdFRvQ2Vsc2l1cyhmZWVsc0xpa2VUZW1wLmlubmVyVGV4dCk7XG4gICAgICAgIGNoYW5nZUdyb3VwSW50b0NlbHNpdXMoYWxsRGF5T2ZUaGVXZWVrTWF4VGVtcCk7XG4gICAgICAgIGNoYW5nZUdyb3VwSW50b0NlbHNpdXMoYWxsRGF5T2ZUaGVXZWVrTWluVGVtcCk7XG4gICAgICAgIGNoYW5nZUdyb3VwSW50b0NlbHNpdXMoYWxsSG91clRlbXApO1xuICAgIH07XG59XG5cbmV4cG9ydCB7IGRhaWx5QW5kSG91cmx5QnV0dG9uTG9naWMsIG1vdmVGb3J3YXJkQnV0dG9uTG9naWMsIG1vdmVCYWNrQnV0dG9uTG9naWMsIGRvdExvZ2ljLCBtZWFzdXJlbWVudEJ1dHRvbnNMb2dpYyB9IiwiaW1wb3J0IHsgc3BhbkdlbmVyYXRvciB9IGZyb20gXCIuL2dlbmVyYXRvckZ1bmN0aW9uc1wiO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY29udmVydHMgdGhlIGRhdGUgaW50byB0aGUgR0Igc3R5bGUgb2YgZGF0ZVxuICogQHBhcmFtIHtzdHJpbmcgb3IgRGF0ZX0gZGF0ZSBlaXRoZXIgYSBzdHJpbmcgb3IgRGF0ZSB2ZXJzaW9uIGNhbiBiZSBwcm92aWRlZCBhbmQgdGhpcyBpcyB0aGUgZGF0ZSB3ZSB3YW50IGNvbnZlcnQgaW50byBhbiBJbnRsIGRhdGUgXG4gKiBAcmV0dXJucyBhbiBvYmplY3QgdGhhdCBpcyB0aGUgY29ycmVjdCBmb3JtYXQgb2YgZGF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVTdGFuZGFyZERhdGUoZGF0ZSkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICB9O1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLUdCXCIsIG9wdGlvbnMpLmZvcm1hdChkYXRlLnRvSVNPU3RyaW5nKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiB0YWtlcyBhIGRhdGUgYW5kIGNvbnZlcnRzIGl0IHRvIGVuLUdCIGxvY2FsZSBmb3JtXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZVRvQ29udmVydCBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIGRhdGUgdGhhdCB3ZSB3YW50IHRvIGNvbnZlcnQgaW50byB0aGUgR0Igc3RhbmRhcmQgXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGRpc3BsYXlzIHRoZSBkYXRlIGluIHRoZSBlbi1HQiBsb2NhbGUgZm9ybVxuICovXG5mdW5jdGlvbiBjcmVhdGVTaG9ydFN0YW5kYXJkRGF0ZShkYXRlVG9Db252ZXJ0KSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVUb0NvbnZlcnQpXG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tR0JcIikuZm9ybWF0KGRhdGUuZ2V0VGltZSgpKTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB0byBtYWtlIHRoZSB0aW1lIGhhdmUgYSAwIGF0IHRoZSBzdGFydCBpZiB0aGUgbnVtYmVyIGJlZm9yZSB0aGUgY29sb24gaXMgbm90IGRvdWJsZSBkaWdpdHMgeWV0XG4gKiBAcGFyYW0ge3N0cmluZ30gdGltZSB0aGUgdGltZSB0aGF0IG5lZWRzIHRvIGJlIHBhZGRlZFxuICogQHJldHVybnMgYSBwYWRkZWQgdmVyc2lvbiBvZiB0aGUgdGltZSwgZS5nLiBpZiBpdHMgMToxMSBpdCBnZXRzIGNoYW5nZWQgdG8gMDE6MTFcbiAqL1xuZnVuY3Rpb24gY3JlYXRlU3RhbmRhcmRUaW1lKHRpbWUpIHtcbiAgICByZXR1cm4gdGltZS5wYWRTdGFydCg1LCAwKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiByZXRyaWV2ZXMgdGhlIGNpdHkgdmFsdWUgZnJvbSB0aGUgb2JqIHByb3ZpZGVkXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSAuanNvbigpIHZlcnNpb24gb2YgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBmZXRjaCBjYWxsIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY2l0eSBuYW1lIHByb3ZpZGVkIGJ5IHRoZSBvYmpcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDaXR5KG9iaikge1xuICAgIHJldHVybiBvYmoubG9jYXRpb24ubmFtZTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiByZXRyaWV2ZXMgdGhlIGNvdW50cnkgdmFsdWUgZnJvbSB0aGUgb2JqIHByb3ZpZGVkXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSAuanNvbigpIHZlcnNpb24gb2YgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBmZXRjaCBjYWxsIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY291bnRyeSBuYW1lIHByb3ZpZGVkIGJ5IHRoZSBvYmpcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDb3VudHJ5KG9iaikge1xuICAgIHJldHVybiBvYmoubG9jYXRpb24uY291bnRyeTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiByZXRyaWV2ZXMgdGhlIGRhdGUgYW5kIHRpbWUgdmFsdWUgZnJvbSB0aGUgb2JqIHByb3ZpZGVkXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSAuanNvbigpIHZlcnNpb24gb2YgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBmZXRjaCBjYWxsIFxuICogQHJldHVybnMgYW4gQXJyYXkgdGhhdCBzdG9yZXMgdGhlIGRhdGUgaW4gaW5kZXggMCBhbmQgdGhlIHRpbWUgaW4gaW5kZXggMVxuICovXG5mdW5jdGlvbiByZXRyaWV2ZURhdGVBbmRUaW1lQXJyKG9iaikge1xuICAgIHJldHVybiBvYmoubG9jYXRpb24ubG9jYWx0aW1lLnNwbGl0KCcgJyk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb25zIGZpbmRzIHdoZXRoZXIgdGhlIGNlbHNpdXMgb3IgZmFocmVuaGVpdCBidXR0b24gaXMgYWN0aXZlIHNvIHRoZSByaWdodCBzeW1ib2wgY2FuIGJlIGRpc3BsYXllZFxuICogQHJldHVybnMgYSBzcGFuIGVsZW1lbnQgd2l0aCB0aGUgY29ycmVjdCBzeW1ib2xcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVNZXRob2RPZk1lYXN1cmVtZW50KCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Vsc2l1cy1idG4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm4gc3BhbkdlbmVyYXRvcihbJ21ldGhvZC1vZi1tZWFzdXJlbWVudCddLCAnQycpO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWhyZW5oZWl0LWJ0bicpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybiBzcGFuR2VuZXJhdG9yKFsnbWV0aG9kLW9mLW1lYXN1cmVtZW50J10sICdGJyk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb25zIGZpbmRzIHdoZXRoZXIgdGhlIGNlbHNpdXMgb3IgZmFocmVuaGVpdCBidXR0b24gaXMgYWN0aXZlIHNvIHRoZSByaWdodCBzeW1ib2wgY2FuIGJlIGRpc3BsYXllZFxuICogQHJldHVybnMgYSBib29sZWFuIHZhbHVlIG9mIHdoZXRoZXIgb3Igbm90IHRoZSBtZXRob2Qgb2YgbWVhc3VyZW1lbnQgaXMgY2Vsc2l1c1xuICovXG5mdW5jdGlvbiBpc01ldGhvZE9mTWVhc3VyZW1lbnRDZWxzaXVzKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Vsc2l1cy1idG4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFocmVuaGVpdC1idG4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgd2luZCBkZWdyZWVzIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIHdpbmQgZGVncmVlc1xuICovXG5mdW5jdGlvbiByZXRyaWV2ZVdpbmREZWdyZWVzKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC53aW5kX2RlZ3JlZTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSB3aW5kIHNwZWVkIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIHdpbmQgc3BlZWRcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVXaW5kU3BlZWQob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LndpbmRfbXBoO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGh1bWlkaXR5IGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGh1bWlkaXR5XG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlSHVtaWRpdHkob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50Lmh1bWlkaXR5XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgdXYtaW5kZXggZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgdXYtaW5kZXhcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVVdk51bShvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQudXY7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgdmlzaWJpbGl0eSBkaXN0YW5jZSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSB2aXNpYmlsaXR5IGRpc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlVmlzaWJpbGl0eURpc3RhbmNlKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC52aXNfa207XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgY2xvdWRpbmVzcyBwZXJjZW50YWdlIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGNsb3VkaW5lc3MgcGVyY2VudGFnZVxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUNsb3VkaW5lc3NQZXJjZW50YWdlKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC5jbG91ZDtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBjaGFuY2Ugb2YgcmFpbiBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBjaGFuY2Ugb2YgcmFpblxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUNoYW5jZU9mUmFpbihvYmopIHtcbiAgICByZXR1cm4gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBzdW5yaXNlIHRpbWUgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgc3VucmlzZSB0aW1lIFxuICovXG5mdW5jdGlvbiByZXRyaWV2ZVN1bnJpc2VUaW1lKG9iaikge1xuICAgIHJldHVybiBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZS5zbGljZSgwLCAtMyk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgc3Vuc2V0IHRpbWUgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgc3Vuc2V0IHRpbWVcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVTdW5zZXRUaW1lKG9iaikge1xuICAgIGNvbnN0IHN1bnNldCA9IG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXQ7XG4gICAgY29uc3Qgc3Vuc2V0SG91ciA9IE51bWJlcihzdW5zZXRbMF0gKyBzdW5zZXRbMV0pO1xuICAgIGNvbnN0IHN1bnNldEhvdXIyNCA9IHN1bnNldEhvdXIgKyAxMjtcbiAgICByZXR1cm4gc3Vuc2V0SG91cjI0ICsgc3Vuc2V0LnNsaWNlKDIsIC0zKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IG1vb24gcGhhc2UgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY3VycmVudCBtb29uIHBoYXNlXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlTW9vblBoYXNlKG9iaikge1xuICAgIHJldHVybiBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8ubW9vbl9waGFzZTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIGltYWdlIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgaW1hZ2VcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDdXJyZW50VGVtcEltZyhvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlQ3VycmVudFRlbXAob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LnRlbXBfYztcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIHRlbXBlcmF0dXJlIHRoYXQgaXQgZmVlbHMgbGlrZSBjdXJyZW50bHkgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBpdCBmZWVscyBsaWtlXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlRmVlbHNMaWtlVGVtcChvYmopIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChOdW1iZXIob2JqLmN1cnJlbnQuZmVlbHNsaWtlX2MpKTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgb3V0ZG9vciBjb25kaXRpb24gZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY3VycmVudCBvdXRkb29yIGNvbmRpdGlvblxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUN1cnJlbnRDb25kaXRpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xufVxuXG4vL1RoZXNlIGZ1bmN0aW9ucyBhcmUgdXNlZCB0byByZXRyaWV2ZSB0aGUgdmFsdWVzIGZvciB0aGUgd2Vla2x5IGZvcmVjYXN0XG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSBudW1iZXIgcmFuZ2luZyBmcm9tIDAtNiBhbmQgdGhlbiByZXR1cm4gdGhlIHdlZWtkYXkgbmFtZVxuICogQHBhcmFtIHtudW1iZXJ9IGRhdGVUb0ZpbmREYXkgYSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBkYXkgb2YgdGhlIHdlZWsgZS5nLiAwIHJlcHJlc2VudHMgU3VuZGF5XG4gKiBAcmV0dXJucyBhIHN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSBjb3JyZXNwb25kaW5nIGRheSBvZiB0aGUgd2Vla1xuICovXG5mdW5jdGlvbiByZXRyaWV2ZURheU9mVGhlV2VlayhkYXRlVG9GaW5kRGF5KSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVUb0ZpbmREYXkpO1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgc3dpdGNoIChkYXkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuICdTdW5kYXknO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gJ01vbmRheSc7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiAnVHVlc2RheSc7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiAnV2VkbmVzZGF5JztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuICdUaHVyc2RheSc7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHJldHVybiAnRnJpZGF5JztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgcmV0dXJuICdTYXR1cmRheSc7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHJldHVybiAnVW5rbm93biBkYXknO1xuICAgIH07XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgZGF0ZSBiYXNlZCBvbiB0aGUgZGF5IHdlIHNwZWNpZmllZCwgYW5kIGZyb20gdGhlIG9iamVjdCB3ZSBwcm92aWRlZFxuICogQHBhcmFtIHtudW1iZXJ9IGRheSB0aGUgZGF5IG9mIHRoZSB3ZWVrXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgZnJvbSB3aGljaCB3ZSBuZWVkIHRvIHJldHJpZXZlIHRoZSBkYXRlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB2YWx1ZSB0aGF0IGNvbnRhaW5zIHRoZSBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlKGRheSwgb2JqKSB7XG4gICAgcmV0dXJuIG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRhdGU7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgbWF4aW11bSB0ZW1wZXJhdHVyZSBiYXNlZCBvbiB0aGUgZGF5IG9mIHRoZSB3ZWVrIHByb3ZpZGVkIGZyb20gdGhlIG9iamVjdCBwcm92aWRlZFxuICogQHBhcmFtIHtudW1iZXJ9IGRheU9mV2VlayB0aGUgZGF5IG9mIHRoZSB3ZWVrXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgZnJvbSB3aGljaCB3ZSBuZWVkIHRvIHJldHJpZXZlIHRoZSBtYXhpbXVtIHRlbXBlcmF0dXJlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSBtYXhpbXVtIHRlbXBlcmF0dXJlIGZvciB0aGF0IGdpdmVuIGRheVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5TWF4VGVtcChkYXlPZldlZWssIG9iaikge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE51bWJlcihvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5T2ZXZWVrXS5kYXkubWF4dGVtcF9jKSk7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBtaW5pbXVtIHRlbXBlcmF0dXJlIGJhc2VkIG9uIHRoZSBkYXkgb2YgdGhlIHdlZWsgcHJvdmlkZWQgZnJvbSB0aGUgb2JqZWN0IHByb3ZpZGVkXG4gKiBAcGFyYW0ge251bWJlcn0gZGF5T2ZXZWVrIHRoZSBkYXkgb2YgdGhlIHdlZWtcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIG5lZWQgdG8gcmV0cmlldmUgdGhlIG1pbmltdW0gdGVtcGVyYXR1cmUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHZhbHVlIHRoYXQgaXMgdGhlIG1pbmltdW0gdGVtcGVyYXR1cmUgZm9yIHRoYXQgZ2l2ZW4gZGF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlNaW5UZW1wKGRheU9mV2Vlaywgb2JqKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTnVtYmVyKG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXlPZldlZWtdLmRheS5taW50ZW1wX2MpKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBjb3JyZXNwb25kaW5nIHdoZXRoZXIgaW1hZ2UgZnJvbSB0aGUgZGF5IG9mIHRoZSB3ZWVrIHByb3ZpZGVkIGZyb20gdGhlIG9iamVjdCBwcm92aWRlZFxuICogQHBhcmFtIHtudW1iZXJ9IGRheU9mV2VlayB0aGUgZGF5IG9mIHRoZSB3ZWVrXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgZnJvbSB3aGljaCB3ZSBuZWVkIHRvIHJldHJpZXZlIHRoZSBkYXRlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSBwYXRoIHRvIHRoZSBpbWFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5V2VhdGhlckltYWdlKGRheU9mV2Vlaywgb2JqKSB7XG4gICAgcmV0dXJuIG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXlPZldlZWtdLmRheS5jb25kaXRpb24uaWNvbjtcbn1cblxuLy9UaGVzZSBmdW5jdGlvbnMgYXJlIHVzZWQgZm9yIHRoZSBob3VybHkgd2VhdGhlciBzZWN0aW9uXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gZ2V0cyB0aGUgdGltZSBiYXNlZCBvbiB0aGUgaG91ck51bSB2YWx1ZSwgYW5kIG1hbmlwdWxhdGVzIHRoZSB0aW1lIHRvIGRpc3BsYXkgd2l0aG91dCB0aGUgQU0gb3IgUE1cbiAqIEBwYXJhbSB7bnVtYmVyfSBob3VyTnVtIGEgbnVtYmVyIHRoZSBjb3JyZXNwb25kcyB0byBhIGNlcnRhaW4gaG91ciwgZS5nLiAwIGNvcnJlc3BvbmRzIHRvIDEyYW1cbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIG5lZWQgdG8gcmV0cmlldmUgdGhlIGRhdGUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHZhbHVlIHRoYXQgaXMgdGhlIHRpbWUgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgaG91ck51bSBhcmd1bWVudCBwYXNzZWRcbiAqL1xuZnVuY3Rpb24gZ2V0SG91clRpbWUoaG91ck51bSwgb2JqKSB7XG4gICAgcmV0dXJuIG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2hvdXJOdW1dLnRpbWUuc2xpY2UoLTUpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGdldHMgdGhlIHRlbXBlcmF0dXJlIGJhc2VkIG9uIHRoZSBob3VyTnVtIHZhbHVlLCBhbmQgbWFuaXB1bGF0ZXMgdGhlIHRlbXBlcmF0dXJlIHRvIGJlIHJvdW5kZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBob3VyTnVtIGEgbnVtYmVyIHRoZSBjb3JyZXNwb25kcyB0byBhIGNlcnRhaW4gaG91ciwgZS5nLiAwIGNvcnJlc3BvbmRzIHRvIDEyYW1cbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIG5lZWQgdG8gcmV0cmlldmUgdGhlIGRhdGUgZnJvbSBcbiAqIEByZXR1cm5zIGEgbnVtYmVyIHZhbHVlIHRoYXQgaXMgdGhlIHRlbXBlcmF0dXJlIGluIGNlbHNpdXMgYW5kIGhhcyBiZWVuIHJvdW5kZWRcbiAqL1xuZnVuY3Rpb24gZ2V0SG91clRlbXAoaG91ck51bSwgb2JqKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTnVtYmVyKG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2hvdXJOdW1dLnRlbXBfYykpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGdldHMgdGhlIHdlYXRoZXIgZGVzY3JpcHRpb24gYmFzZWQgb24gdGhlIGhvdXJOdW0gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBob3VyTnVtIGEgbnVtYmVyIHRoZSBjb3JyZXNwb25kcyB0byBhIGNlcnRhaW4gaG91ciwgZS5nLiAwIGNvcnJlc3BvbmRzIHRvIDEyYW1cbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIG5lZWQgdG8gcmV0cmlldmUgdGhlIGRhdGUgZnJvbSBcbiAqIEByZXR1cm5zIGFzdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgd2VhdGhlciBjb25kaXRpb25zIGF0IHRoYXQgY2VydGFpbiBob3VyXG4gKi9cbmZ1bmN0aW9uIGdldEhvdXJUZW1wRGVzY3JpcHRpb24oaG91ck51bSwgb2JqKSB7XG4gICAgcmV0dXJuIG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2hvdXJOdW1dLmNvbmRpdGlvbi50ZXh0O1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGdldHMgdGhlIGNvcnJlY3QgaWNvbiBiYXNlZCBvbiB0aGUgaG91ck51bSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGhvdXJOdW0gYSBudW1iZXIgdGhlIGNvcnJlc3BvbmRzIHRvIGEgY2VydGFpbiBob3VyLCBlLmcuIDAgY29ycmVzcG9uZHMgdG8gMTJhbVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IGZyb20gd2hpY2ggd2UgbmVlZCB0byByZXRyaWV2ZSB0aGUgZGF0ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcGF0aCB0byB0aGUgaW1hZ2UgdGhhdCBjb3JyZXNwb25kcyB3aXRoIHRoZSB3ZWF0aGVyIGZvciB0aGF0IGhvdXJcbiAqL1xuZnVuY3Rpb24gZ2V0SG91clRlbXBJY29uKGhvdXJOdW0sIG9iaikge1xuICAgIHJldHVybiBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltob3VyTnVtXS5jb25kaXRpb24uaWNvbjtcbn07XG5cbmV4cG9ydCB7IGdldEhvdXJUaW1lLCBnZXRIb3VyVGVtcCwgZ2V0SG91clRlbXBEZXNjcmlwdGlvbiwgZ2V0SG91clRlbXBJY29uLCBjcmVhdGVTaG9ydFN0YW5kYXJkRGF0ZSwgcmV0cmlldmVEYXlPZlRoZVdlZWssIHJldHJpZXZlQ3VycmVudENvbmRpdGlvbiwgcmV0cmlldmVDdXJyZW50VGVtcCwgcmV0cmlldmVDdXJyZW50VGVtcEltZywgcmV0cmlldmVGZWVsc0xpa2VUZW1wLCByZXRyaWV2ZVN1bnNldFRpbWUsIHJldHJpZXZlTW9vblBoYXNlLCByZXRyaWV2ZVN1bnJpc2VUaW1lLCByZXRyaWV2ZUNoYW5jZU9mUmFpbiwgcmV0cmlldmVDbG91ZGluZXNzUGVyY2VudGFnZSwgcmV0cmlldmVWaXNpYmlsaXR5RGlzdGFuY2UsIHJldHJpZXZlVXZOdW0sIGNyZWF0ZVN0YW5kYXJkRGF0ZSwgY3JlYXRlU3RhbmRhcmRUaW1lLCByZXRyaWV2ZUNpdHksIHJldHJpZXZlQ291bnRyeSwgcmV0cmlldmVEYXRlQW5kVGltZUFyciwgcmV0cmlldmVNZXRob2RPZk1lYXN1cmVtZW50LCBpc01ldGhvZE9mTWVhc3VyZW1lbnRDZWxzaXVzLCByZXRyaWV2ZVdpbmREZWdyZWVzLCByZXRyaWV2ZVdpbmRTcGVlZCwgcmV0cmlldmVIdW1pZGl0eSB9IiwiLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIG1ha2VzIHRoZSBmYWhyZW5oZWl0IGJ1dHRvbiBoYXZlIHRoZSAnYWN0aXZlJyBjbGFzcyBhbmQgcmVtb3ZlcyBpdCBmcm9tIHRoZSBjZWxzaXVzIG9uZVxuICovXG5mdW5jdGlvbiBtYWtlRmFocmVuaGVpdEFjdGl2ZSgpIHtcbiAgICBjb25zdCBjZWxzaXVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNlbHNpdXMtYnRuJyk7XG4gICAgY29uc3QgZmFocmVuaGVpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWhyZW5oZWl0LWJ0bicpO1xuICAgIGNlbHNpdXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgZmFocmVuaGVpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn07XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBtYWtlcyB0aGUgY2Vsc2l1cyBidXR0b24gaGF2ZSB0aGUgJ2FjdGl2ZScgY2xhc3MgYW5kIHJlbW92ZXMgaXQgZnJvbSB0aGUgZmFocmVuaGVpdCBvbmVcbiAqL1xuZnVuY3Rpb24gbWFrZUNlbHNpdXNBY3RpdmUoKSB7XG4gICAgY29uc3QgY2Vsc2l1c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZWxzaXVzLWJ0bicpO1xuICAgIGNvbnN0IGZhaHJlbmhlaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFocmVuaGVpdC1idG4nKTtcbiAgICBjZWxzaXVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGZhaHJlbmhlaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY29udmVydHMgYSBjZWxzaXVzIHZhbHVlIGludG8gZmFocmVuaGVpdFxuICogQHBhcmFtIHtudW1iZXJ9IG51bSB0aGUgbnVtYmVyIHRvIGNvbnZlcnQgXG4gKiBAcmV0dXJucyBhIG51bWJlciB0aGF0IGlzIHRoZSBjZWxzaXVzIHZhbHVlIHJvdW5kZWQgYW5kIGNvbnZlcnRlZCBpbnRvIGZhaHJlbmhlaXRcbiAqL1xuZnVuY3Rpb24gY2Vsc2l1c1RvRmFocmVuaGVpdChudW0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobnVtICogMS44KSArIDMyKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjb252ZXJ0cyBhIGZhaHJlbmhlaXQgdmFsdWUgaW50byBjZWxzaXVzXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtIHRoZSBudW1iZXIgdG8gY29udmVydCBcbiAqIEByZXR1cm5zIGEgbnVtYmVyIHRoYXQgaXMgdGhlIGZhaHJlbmhlaXQgdmFsdWUgcm91bmRlZCBhbmQgY29udmVydGVkIGludG8gY2Vsc2l1c1xuICovXG5mdW5jdGlvbiBmYWhyZW5oZWl0VG9DZWxzaXVzKG51bSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKChudW0gLSAzMikgKiA1IC8gOSk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gbG9vcHMgYW4gYXJyYXkgb2YgRE9NIGVsZW1lbnRzIGFuZCBjb252ZXJ0cyB0aGUgaW5uZXIgbnVtYmVyIGludG8gZmFocmVuaGVpdCBmcm9tIGNlbHNpdXNcbiAqIEBwYXJhbSB7YXJyYXl9IHRlbXBzIGFuIGFycmF5IG9mIG9mIERPTSBlbGVtZW50cyB0aGF0IGNvbnRhaW4gdGhlIHRlbXBlcmF0dXJlIFxuICovXG5mdW5jdGlvbiBjaGFuZ2VHcm91cEludG9GYWhyZW5oZWl0KHRlbXBzKSB7XG4gICAgdGVtcHMuZm9yRWFjaCh0ZW1wID0+IHtcbiAgICAgICAgdGVtcC5pbm5lclRleHQgPSBjZWxzaXVzVG9GYWhyZW5oZWl0KHRlbXAuaW5uZXJUZXh0KTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBsb29wcyBhbiBhcnJheSBvZiBET00gZWxlbWVudHMgYW5kIGNvbnZlcnRzIHRoZSBpbm5lciBudW1iZXIgaW50byBjZWxzaXVzIGZyb20gZmFocmVuaGVpdFxuICogQHBhcmFtIHthcnJheX0gdGVtcHMgYW4gYXJyYXkgb2Ygb2YgRE9NIGVsZW1lbnRzIHRoYXQgY29udGFpbiB0aGUgdGVtcGVyYXR1cmUgXG4gKi9cbmZ1bmN0aW9uIGNoYW5nZUdyb3VwSW50b0NlbHNpdXModGVtcHMpIHtcbiAgICB0ZW1wcy5mb3JFYWNoKHRlbXAgPT4ge1xuICAgICAgICB0ZW1wLmlubmVyVGV4dCA9IGZhaHJlbmhlaXRUb0NlbHNpdXModGVtcC5pbm5lclRleHQpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IHsgbWFrZUZhaHJlbmhlaXRBY3RpdmUsIG1ha2VDZWxzaXVzQWN0aXZlLCBjZWxzaXVzVG9GYWhyZW5oZWl0LCBmYWhyZW5oZWl0VG9DZWxzaXVzLCBjaGFuZ2VHcm91cEludG9DZWxzaXVzLCBjaGFuZ2VHcm91cEludG9GYWhyZW5oZWl0IH0iLCJpbXBvcnQgeyBkaXZHZW5lcmF0b3IsIGhlYWRpbmdHZW5lcmF0b3IsIGltZ0dlbmVyYXRvciwgcGFyYWdyYXBoR2VuZXJhdG9yLCBzcGFuR2VuZXJhdG9yIH0gZnJvbSBcIi4vZ2VuZXJhdG9yRnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBjcmVhdGVTaG9ydFN0YW5kYXJkRGF0ZSwgaXNNZXRob2RPZk1lYXN1cmVtZW50Q2Vsc2l1cywgcmV0cmlldmVEYXlPZlRoZVdlZWssIGdldERhdGUsIGdldERheU1heFRlbXAsIGdldERheU1pblRlbXAsIGdldERheVdlYXRoZXJJbWFnZSB9IGZyb20gXCIuL3JldHJpZXZlSW5mb3JtYXRpb25cIjtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRha2VzIGFsbCBkYWlseS13ZWF0aGVyIGRpdnMgYW5kIGFwcGVuZHMgdGhlbSB0byBkYWlseS13ZWF0aGVyLWNvbnRhaW5lclxuICogQHBhcmFtIHtBcnJheX0gYXJyT2ZEYXlzIGFuIGFycmF5IG9mIGFsbCB0aGUgZGF5cyB0aGF0IG5lZWQgdG8gYmUgYXBwZW5kZWQgYW5kIGRpc3BsYXllZCwgdGhlcmUgc2hvdWxkIGJlIDcgaW4gdG90YWxcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgd2VhdGhlciBpbmZvcm1hdGlvbiBmb3IgdGhlIGN1cnJlbnQgYW5kIG5leHQgc2l4IGRheXNcbiAqL1xuZnVuY3Rpb24gZGFpbHlXZWF0aGVyU2VjdGlvbihhcnJPZkRheXMpIHtcbiAgICBjb25zdCBkYWlseVdlYXRoZXJTZWN0aW9uQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnZGFpbHktd2VhdGhlci1jb250YWluZXInXSk7XG4gICAgZGFpbHlXZWF0aGVyU2VjdGlvbkNvbnRhaW5lci5hcHBlbmQoLi4uYXJyT2ZEYXlzKTtcbiAgICByZXR1cm4gZGFpbHlXZWF0aGVyU2VjdGlvbkNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbnMgcHV0cyB0b2dldGhlciBhbGwgdGhlIGluZm9ybWF0aW9uIHJlcXVpcmVkIHRvIGRpc3BsYXkgdGhlIHdlYXRoZXIgZm9yIGFuIGluZGl2aWR1YWwgZGF5XG4gKiBAcGFyYW0ge251bWJlcn0gZGF5TnVtIHRoZSBudW1iZXIgb2YgdGhlIGRheSB0aGUgY29udGFpbmVyIGlzIGdvaW5nIHRvIGJlIGZvclxuICogQHBhcmFtIHtvYmplY3R9IGRheUluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBkZXRhaWxzIGFib3V0IHRoZSBkYXlcbiAqIEBwYXJhbSB7b2JqZWN0fSB3ZWF0aGVyRGV0YWlscyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIGRldGFpbHMgYWJvdWJ0IHRoZSBkYXkncyB3ZWF0aGVyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF5V2VhdGhlckltZyBhIHN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSBwYXRoIHRvIHRoZSB3ZWF0aGVyIGltYWdlIGZvciB0aGF0IGRheVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBtYWtlcyB1cCBvbmUgb2YgdGhlIGRheXMgdGhhdCBpcyBnb2luZyB0byBiZSBkaXNwbGF5ZWRcbiAqL1xuZnVuY3Rpb24gZGF5V2VhdGhlcihkYXlOdW0sIGRheUluZm8sIHdlYXRoZXJEZXRhaWxzLCBkYXlXZWF0aGVySW1nKSB7XG4gICAgY29uc3QgZGFpbHlXZWF0aGVyQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnZGFpbHktd2VhdGhlcicsIGBkYXktJHtkYXlOdW19YF0pO1xuICAgIGRhaWx5V2VhdGhlckNvbnRhaW5lci5hcHBlbmQoZGF5SW5mbywgd2VhdGhlckRldGFpbHMsIGltZ0dlbmVyYXRvcihkYXlXZWF0aGVySW1nLCAnJywgW10pKTtcbiAgICByZXR1cm4gZGFpbHlXZWF0aGVyQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uJ3Mgam9iIGlzIHRvIGNyZWF0ZSBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBpbmZvcm1hdGlvbiByZWxhdGVkIHRvIHRoZSBkYXkgd2UgcGFzc2VkIGluLCBzdWNoIGFzIHRoZSBkYXkgb2YgdGhlIHdlZWssIGFuZCByZXByZXNlbnRpbmcgdGhlIGRhdGUgb24gc2NyZWVuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZSB0aGUgZGF0ZSB3ZSB3YW50IHRvIGRpc3BsYXkgXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBkYXRlIHdlIHBhc3NlZCBpblxuICovXG5mdW5jdGlvbiBkYXlJbmZvcm1hdGlvbihkYXRlKSB7XG4gICAgY29uc3QgZGF5SW5mb3JtYXRpb25Db250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydkYXktaW5mb3JtYXRpb24nXSk7XG4gICAgZGF5SW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2gyJywgWydkYXktb2YtdGhlLXdlZWsnXSwgcmV0cmlldmVEYXlPZlRoZVdlZWsoZGF0ZSkpLCBoZWFkaW5nR2VuZXJhdG9yKCdoMicsIFsnZGF0ZS1vZi10aGUtd2VlayddLCBjcmVhdGVTaG9ydFN0YW5kYXJkRGF0ZShkYXRlKSkpO1xuICAgIHJldHVybiBkYXlJbmZvcm1hdGlvbkNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbidzIGpvYiBpcyB0byBkaXNwbGF5ZWQgdGhlIHRlbXBlcmF0dXJlIGJhc2VkIG9uIHRoZSB0d28gYXJndW1lbnRzIHByb3ZpZGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF5TWF4VGVtcCB0aGUgbWF4aW11bSB0ZW1wZXJhdHVyZSBmb3IgdGhhdCBkYXlcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXlNaW5UZW1wIHRoZSBtaW5pbXVtIHRlbXBlcmF0dXJlIGZvciB0aGF0IGRheVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdGVtcGVyYXR1cmVcbiAqL1xuZnVuY3Rpb24gZGF5V2VhdGhlckRldGFpbHMoZGF5TWF4VGVtcCwgZGF5TWluVGVtcCkge1xuICAgIGNvbnN0IHdlYXRoZXJEZXRhaWxzQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnZGF5LXdlYXRoZXItZGV0YWlscyddKTtcbiAgICBjb25zdCBtYXhXZWF0aGVyU3BhbiA9IHNwYW5HZW5lcmF0b3IoWydkYXktb2YtdGhlLXdlZWstbWF4LXRlbXAnXSwgZGF5TWF4VGVtcCk7XG4gICAgY29uc3QgbWluV2VhdGhlclNwYW4gPSBzcGFuR2VuZXJhdG9yKFsnZGF5LW9mLXRoZS13ZWVrLW1pbi10ZW1wJ10sIGRheU1pblRlbXApO1xuICAgIGNvbnN0IHdlYXRoZXJTeW1ib2wgPSBzcGFuR2VuZXJhdG9yKFsnbWV0aG9kLW9mLW1lYXN1cmVtZW50J10sICdDJyk7XG4gICAgY29uc3Qgd2VhdGhlclN5bWJvbFR3byA9IHNwYW5HZW5lcmF0b3IoWydtZXRob2Qtb2YtbWVhc3VyZW1lbnQnXSwgJ0MnKTtcbiAgICB3ZWF0aGVyRGV0YWlsc0NvbnRhaW5lci5hcHBlbmQocGFyYWdyYXBoR2VuZXJhdG9yKFsnbWF4LXRlbXAnXSwgJ8KwJywgbWF4V2VhdGhlclNwYW4sIHdlYXRoZXJTeW1ib2wpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydtaW4tdGVtcCddLCAnwrAnLCBtaW5XZWF0aGVyU3Bhbiwgd2VhdGhlclN5bWJvbFR3bykpO1xuICAgIHJldHVybiB3ZWF0aGVyRGV0YWlsc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjYWxscyBhbGwgdGhlIHJlbGV2YW50IGZ1bmN0aW9ucyBhbmQgY3JlYXRlcyBhIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyBhIGRheSBhbmQgaXRzIHJlc3BlY3RpdmUgd2VhdGhlclxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IGZyb20gd2hpY2ggd2Ugd2lsbCBiZSByZXRyaWV2aW5nIHZhbHVlcyBmcm9tIFxuICogQHJldHVybnMgYW4gYXJyYXkgdGhhdCBjb250YWlucyBhbGwgdGhlIERPTSBlbGVtZW50cyB0aGF0IG5lZWQgdG8gYmUgZGlzcGxheWVkXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFsbERheXNUb0Rpc3BsYXkob2JqKSB7XG4gICAgY29uc3QgYXJyT2ZEYXlzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgYXJyT2ZEYXlzLnB1c2goZGF5V2VhdGhlcihpLCBkYXlJbmZvcm1hdGlvbihnZXREYXRlKGksIG9iaikpLCBkYXlXZWF0aGVyRGV0YWlscyhnZXREYXlNYXhUZW1wKGksIG9iaiksIGdldERheU1pblRlbXAoaSwgb2JqKSksIGdldERheVdlYXRoZXJJbWFnZShpLCBvYmopKSk7XG4gICAgfTtcbiAgICByZXR1cm4gYXJyT2ZEYXlzO1xufVxuXG5cbmV4cG9ydCB7IGNyZWF0ZUFsbERheXNUb0Rpc3BsYXksIGRhaWx5V2VhdGhlclNlY3Rpb24sIGRheVdlYXRoZXIsIGRheUluZm9ybWF0aW9uLCBkYXlXZWF0aGVyRGV0YWlscyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gJy4vaGVhZGVyU2VjdGlvbic7XG5pbXBvcnQgeyBvbkxvYWREZWZhdWx0V2VhdGhlciwgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyLCBzZWFyY2hMb2dpYyB9IGZyb20gJy4vY3VycmVudFRlbXBlcmF0dXJlU2VjdGlvbic7XG5pbXBvcnQgeyBkaXZHZW5lcmF0b3IgfSBmcm9tICcuL2dlbmVyYXRvckZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBjYXJvdXNlbEJ1dHRvbnMgfSBmcm9tICcuL2Nhcm91c2VsQnV0dG9ucyc7XG5pbXBvcnQgeyBkYWlseUFuZEhvdXJseUJ1dHRvbkxvZ2ljLCBkb3RMb2dpYywgbWVhc3VyZW1lbnRCdXR0b25zTG9naWMsIG1vdmVCYWNrQnV0dG9uTG9naWMsIG1vdmVGb3J3YXJkQnV0dG9uTG9naWMgfSBmcm9tICcuL21haW5CdXR0b25zTG9naWMnO1xuXG5jb25zdCBkYWlseUhvdXJseVdlYXRoZXIgPSBkaXZHZW5lcmF0b3IoWydkYWlseS1ob3VybHktd2VhdGhlci1jYXJvdXNlbCddKTsgLy90aGUgZGl2IHRoYXQgd2lsbCBjb250YWluIHRoZSBkYWlseSB3ZWF0aGVyLCBhbmQgdGhlIGhvdXJseVxuZGFpbHlIb3VybHlXZWF0aGVyLmFwcGVuZChjYXJvdXNlbEJ1dHRvbnMoKSk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlcigpLCBjdXJyZW50RGF5SW5mb3JtYXRpb25Db250YWluZXIsIGRhaWx5SG91cmx5V2VhdGhlcik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZERlZmF1bHRXZWF0aGVyKTtcblxuY29uc3QgaG91cmx5V2VhdGhlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktd2VhdGhlci1idG4nKTsgLy90aGlzIGlzIHRoZSBidXR0b24gdXNlZCB0byBkaXNwbGF5IHRoZSBob3VybHkgd2VhdGhlclxuY29uc3QgZGFpbHlXZWF0aGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5LXdlYXRoZXItYnRuJyk7IC8vdGhpcyBpcyB0aGUgYnV0dG9uIHVzZWQgdG8gZGlzcGxheSB0aGUgd2VhdGhlciBmb3IgdGhlIGN1cnJlbnQgYW5kIG5leHQgNiBkYXlzXG5jb25zdCBtb3ZlRm9yd2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlLXJpZ2h0Jyk7IC8vdGhpcyBidXR0b24gbW92ZXMgdGhlIGNhcm91c2VsIHRvIHRoZSBuZXh0IDYgaG91cnNcbmNvbnN0IG1vdmVCYWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmUtbGVmdCcpOyAvL3RoaXMgYnV0dG9uIG1vdmVzIHRoZSBjYXJvdXNlbCB0byB0aGUgcHJldmlvdXMgNiBob3Vyc1xuY29uc3QgZG90c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3RzJyk7IC8vdGhlIGNvbnRhaW5lciB0aGF0IGhvbGRzIGVhY2ggZG90XG5jb25zdCBjaGFuZ2VEZWdyZWVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1kZWdyZWVzJyk7IC8vdGhlIGNvbnRhaW5lciB0aGF0IGhvbGRzIHRoZSBjZWxzaXVzIGFuZCBmYWhyZW5oZWl0IGJ1dHRvbnNcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYmFyJyk7IC8vdGhlIHNlYXJjaCBiYXIgaW4gd2hpY2ggd2UgZW50ZXIgYSBjaXR5XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ1dHRvbicpOyAvL3RoZSBtYWduaWZ5aW5nIGdsYXNzIHNlYXJjaCBidXR0b25cblxuXG5kYWlseVdlYXRoZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkYWlseUFuZEhvdXJseUJ1dHRvbkxvZ2ljKTtcbmhvdXJseVdlYXRoZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkYWlseUFuZEhvdXJseUJ1dHRvbkxvZ2ljKTtcbm1vdmVGb3J3YXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZUZvcndhcmRCdXR0b25Mb2dpYyk7XG5tb3ZlQmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVCYWNrQnV0dG9uTG9naWMpO1xuZG90c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvdExvZ2ljKTtcbmNoYW5nZURlZ3JlZXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZWFzdXJlbWVudEJ1dHRvbnNMb2dpYyk7XG5zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBzZWFyY2hMb2dpYyk7XG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWFyY2hMb2dpYyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9