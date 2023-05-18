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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Work Sans';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n    --light-blue: #4ba6cf;\n    --dark-blue: #0c4a6e;\n    --orange: #ecb347;\n    --search-background-color: #06263b;\n    --faded-white: rgba(255, 255, 255, 0.603);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Work Sans', sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background: linear-gradient(to bottom, var(--light-blue), var(--dark-blue));\n    color: white;\n    display: grid;\n    grid-template-rows: 0.5fr 5fr 5fr 0.5fr;\n    row-gap: 2rem;\n}\n\nheader {\n    grid-row: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 1.5rem\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 1.3rem;\n}\n\n.title-end {\n    color: var(--orange);\n}\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n    display: none;\n}\n\n.search-form {\n    display: flex;\n    align-items: center;\n    width: 25rem;\n    position: relative;\n    transform: translateY(4px);\n    margin-right: 55px;\n}\n\n#search-bar {\n    border-radius: 20px;\n    border: none;\n    width: 100%;\n    height: 2.5rem;\n    background-color: var(--search-background-color);\n    padding: 0 0.8rem;\n    color: white;\n    font-size: 1rem;\n}\n\n#search-bar::placeholder {\n    color: white;\n}\n\n.search-button {\n    background-color: transparent;\n    border: none;\n    position: absolute;\n    z-index: 1;\n    height: 1.5rem;\n    left: 88%;\n    cursor: pointer;\n}\n\n.change-degrees {\n    width: 20rem;\n    height: 2.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 0.5rem;\n}\n\n.btn {\n    cursor: pointer;\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.fahrenheit-btn,\n.celsius-btn {\n    height: 2rem;\n    width: 4rem;\n    border-radius: 20px;\n    background-color: var(--search-background-color);\n    font-size: 1rem;\n    transition: border 60ms ease-in;\n}\n\n.fahrenheit-btn:hover,\n.celsius-btn:hover,\n.daily-weather-btn:hover,\n.hourly-weather-btn:hover,\n.active {\n    border: 2px solid white;\n}\n\n.current-day-information {\n    justify-self: center;\n    grid-row: 2;\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n    grid-template-columns: 1fr 2fr;\n    width: 43rem;\n    height: 30rem;\n}\n\n.location-details {\n    grid-row: 1;\n    grid-column: 1 / -1;\n    justify-self: center;\n    text-align: center;\n    padding: 1rem;\n}\n\n.city-details {\n    font-size: 2.5rem;\n}\n\n.day-details {\n    font-size: 1.5rem;\n    margin-top: 0.5rem;\n    color: var(--faded-white);\n    font-weight: 500;\n}\n\n.time-details {\n    border-left: 2px solid var(--faded-white);\n    padding-left: 7px;\n    margin-left: 7px;\n}\n\n.current-temp-details {\n    grid-row: 2;\n    grid-column: 1;\n    justify-self: center;\n    align-self: center;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    row-gap: 0;\n}\n\n.temp-details {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n    gap: 0.3rem;\n}\n\n.temp-details>img {\n    height: 6rem;\n    width: 6rem;\n}\n\n.temp-description {\n    font-size: 1.7rem;\n    font-weight: 400;\n}\n\n.feels-like,\n.general-description {\n    font-size: 1.5rem;\n    font-weight: 300;\n    color: var(--faded-white);\n}\n\n.extra-information {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    padding: 0.5rem;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n}\n\n.extra-information>div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n}\n\n.wind-information {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.wind-direction {\n    height: 1.7rem;\n}\n\n.extra-information h5,\n.extra-information p {\n    font-weight: 600;\n}\n\n.extra-information h5 {\n    font-size: 1.2rem;\n    color: var(--faded-white);\n}\n\n.extra-information p {\n    font-size: 1.5rem;\n}\n\n.safe,\n.amber,\n.danger {\n    border-radius: 999px;\n    width: 40%;\n    margin: 0 auto;\n}\n\n.safe {\n    background-color: rgb(51, 192, 51);\n}\n\n.amber {\n    background-color: orange;\n}\n\n.danger {\n    background-color: rgb(192, 0, 0);\n}\n\n.carousel-buttons {\n    display: flex;\n    align-items: center;\n    gap: 0.3rem;\n}\n\n.daily-hourly-weather-carousel {\n    padding: 1rem 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.daily-weather-btn,\n.hourly-weather-btn {\n    background-color: var(--search-background-color);\n    height: 2.5rem;\n    width: 5rem;\n    border-radius: 5px;\n    font-size: 1rem;\n}\n\n.slide-buttons {\n    height: 100%;\n    width: 6rem;\n    margin-left: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.move-left,\n.move-right {\n    background-color: transparent;\n}\n\n.dots {\n    display: flex;\n    gap: 0.5rem;\n    transform: translateX(-3px);\n}\n\n.dot {\n    border-radius: 999px;\n    background-color: var(--search-background-color);\n    height: 8px;\n    width: 8px;\n}\n\n.dot.active {\n    background-color: white;\n}\n\n.material-symbols-outlined {\n    color: white;\n    display: flex;\n    justify-content: center;\n}\n\n.daily-weather-container {\n    display: flex;\n    gap: 1.2rem;\n}\n\n.daily-weather {\n    padding: 1rem;\n    width: 100%;\n    height: max(300px, 50%);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.day-information {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    font-size: 1.2rem;\n}\n\n.day-of-the-week {\n    font-weight: 500;\n}\n\n.date-of-the-week,\n.hourly-weather>h2 {\n    color: var(--faded-white);\n    font-weight: 400;\n}\n\n.date-of-the-week {\n    border-left: 1px solid var(--faded-white);\n    padding-left: 10px;\n}\n\n.day-weather-details {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.min-temp {\n    font-size: 1.5rem;\n    font-weight: 400;\n}\n\n.daily-weather>img {\n    height: 8rem;\n    width: 8rem;\n    align-self: center;\n}\n\n.hour-container {\n    display: flex;\n    margin: 0 auto;\n}\n\n.hourly-weather {\n    padding: 1rem;\n    width: 100%;\n    height: max(300px, 50%);\n    display: grid;\n    grid-template-rows: 1fr 2fr 2fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.hour-weather-description {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n    text-align: center;\n}\n\n.hour-weather-description>h3 {\n    font-size: 2rem;\n}\n\n.hour-description {\n    font-size: 1.1rem;\n    color: var(--faded-white);\n}\n\n.hourly-weather-icon {\n    height: 7rem;\n    width: 7rem;\n    align-self: flex-start;\n}\n\n.hide {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,4CAAmD;AACvD;;AAEA;IACI,qBAAqB;IACrB,oBAAoB;IACpB,iBAAiB;IACjB,kCAAkC;IAClC,yCAAyC;AAC7C;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,2EAA2E;IAC3E,YAAY;IACZ,aAAa;IACb,uCAAuC;IACvC,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;;;IAII,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,cAAc;IACd,gDAAgD;IAChD,iBAAiB;IACjB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,cAAc;IACd,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,gDAAgD;IAChD,eAAe;IACf,+BAA+B;AACnC;;AAEA;;;;;IAKI,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,WAAW;IACX,aAAa;IACb,2BAA2B;IAC3B,8BAA8B;IAC9B,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,yCAAyC;IACzC,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;;IAEI,iBAAiB;IACjB,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,eAAe;IACf,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;;IAGI,oBAAoB;IACpB,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;;IAEI,gDAAgD;IAChD,cAAc;IACd,WAAW;IACX,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;IAEI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,gDAAgD;IAChD,WAAW;IACX,UAAU;AACd;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,yCAAyC;IACzC,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,+BAA+B;IAC/B,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB","sourcesContent":["@font-face {\n    font-family: 'Work Sans';\n    src: url('./assets/WorkSans-VariableFont_wght.ttf');\n}\n\n:root {\n    --light-blue: #4ba6cf;\n    --dark-blue: #0c4a6e;\n    --orange: #ecb347;\n    --search-background-color: #06263b;\n    --faded-white: rgba(255, 255, 255, 0.603);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Work Sans', sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background: linear-gradient(to bottom, var(--light-blue), var(--dark-blue));\n    color: white;\n    display: grid;\n    grid-template-rows: 0.5fr 5fr 5fr 0.5fr;\n    row-gap: 2rem;\n}\n\nheader {\n    grid-row: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 1.5rem\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 1.3rem;\n}\n\n.title-end {\n    color: var(--orange);\n}\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n    display: none;\n}\n\n.search-form {\n    display: flex;\n    align-items: center;\n    width: 25rem;\n    position: relative;\n    transform: translateY(4px);\n    margin-right: 55px;\n}\n\n#search-bar {\n    border-radius: 20px;\n    border: none;\n    width: 100%;\n    height: 2.5rem;\n    background-color: var(--search-background-color);\n    padding: 0 0.8rem;\n    color: white;\n    font-size: 1rem;\n}\n\n#search-bar::placeholder {\n    color: white;\n}\n\n.search-button {\n    background-color: transparent;\n    border: none;\n    position: absolute;\n    z-index: 1;\n    height: 1.5rem;\n    left: 88%;\n    cursor: pointer;\n}\n\n.change-degrees {\n    width: 20rem;\n    height: 2.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 0.5rem;\n}\n\n.btn {\n    cursor: pointer;\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.fahrenheit-btn,\n.celsius-btn {\n    height: 2rem;\n    width: 4rem;\n    border-radius: 20px;\n    background-color: var(--search-background-color);\n    font-size: 1rem;\n    transition: border 60ms ease-in;\n}\n\n.fahrenheit-btn:hover,\n.celsius-btn:hover,\n.daily-weather-btn:hover,\n.hourly-weather-btn:hover,\n.active {\n    border: 2px solid white;\n}\n\n.current-day-information {\n    justify-self: center;\n    grid-row: 2;\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n    grid-template-columns: 1fr 2fr;\n    width: 43rem;\n    height: 30rem;\n}\n\n.location-details {\n    grid-row: 1;\n    grid-column: 1 / -1;\n    justify-self: center;\n    text-align: center;\n    padding: 1rem;\n}\n\n.city-details {\n    font-size: 2.5rem;\n}\n\n.day-details {\n    font-size: 1.5rem;\n    margin-top: 0.5rem;\n    color: var(--faded-white);\n    font-weight: 500;\n}\n\n.time-details {\n    border-left: 2px solid var(--faded-white);\n    padding-left: 7px;\n    margin-left: 7px;\n}\n\n.current-temp-details {\n    grid-row: 2;\n    grid-column: 1;\n    justify-self: center;\n    align-self: center;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    row-gap: 0;\n}\n\n.temp-details {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n    gap: 0.3rem;\n}\n\n.temp-details>img {\n    height: 6rem;\n    width: 6rem;\n}\n\n.temp-description {\n    font-size: 1.7rem;\n    font-weight: 400;\n}\n\n.feels-like,\n.general-description {\n    font-size: 1.5rem;\n    font-weight: 300;\n    color: var(--faded-white);\n}\n\n.extra-information {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    padding: 0.5rem;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n}\n\n.extra-information>div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n}\n\n.wind-information {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.wind-direction {\n    height: 1.7rem;\n}\n\n.extra-information h5,\n.extra-information p {\n    font-weight: 600;\n}\n\n.extra-information h5 {\n    font-size: 1.2rem;\n    color: var(--faded-white);\n}\n\n.extra-information p {\n    font-size: 1.5rem;\n}\n\n.safe,\n.amber,\n.danger {\n    border-radius: 999px;\n    width: 40%;\n    margin: 0 auto;\n}\n\n.safe {\n    background-color: rgb(51, 192, 51);\n}\n\n.amber {\n    background-color: orange;\n}\n\n.danger {\n    background-color: rgb(192, 0, 0);\n}\n\n.carousel-buttons {\n    display: flex;\n    align-items: center;\n    gap: 0.3rem;\n}\n\n.daily-hourly-weather-carousel {\n    padding: 1rem 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.daily-weather-btn,\n.hourly-weather-btn {\n    background-color: var(--search-background-color);\n    height: 2.5rem;\n    width: 5rem;\n    border-radius: 5px;\n    font-size: 1rem;\n}\n\n.slide-buttons {\n    height: 100%;\n    width: 6rem;\n    margin-left: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.move-left,\n.move-right {\n    background-color: transparent;\n}\n\n.dots {\n    display: flex;\n    gap: 0.5rem;\n    transform: translateX(-3px);\n}\n\n.dot {\n    border-radius: 999px;\n    background-color: var(--search-background-color);\n    height: 8px;\n    width: 8px;\n}\n\n.dot.active {\n    background-color: white;\n}\n\n.material-symbols-outlined {\n    color: white;\n    display: flex;\n    justify-content: center;\n}\n\n.daily-weather-container {\n    display: flex;\n    gap: 1.2rem;\n}\n\n.daily-weather {\n    padding: 1rem;\n    width: 100%;\n    height: max(300px, 50%);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.day-information {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    font-size: 1.2rem;\n}\n\n.day-of-the-week {\n    font-weight: 500;\n}\n\n.date-of-the-week,\n.hourly-weather>h2 {\n    color: var(--faded-white);\n    font-weight: 400;\n}\n\n.date-of-the-week {\n    border-left: 1px solid var(--faded-white);\n    padding-left: 10px;\n}\n\n.day-weather-details {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.min-temp {\n    font-size: 1.5rem;\n    font-weight: 400;\n}\n\n.daily-weather>img {\n    height: 8rem;\n    width: 8rem;\n    align-self: center;\n}\n\n.hour-container {\n    display: flex;\n    margin: 0 auto;\n}\n\n.hourly-weather {\n    padding: 1rem;\n    width: 100%;\n    height: max(300px, 50%);\n    display: grid;\n    grid-template-rows: 1fr 2fr 2fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.hour-weather-description {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n    text-align: center;\n}\n\n.hour-weather-description>h3 {\n    font-size: 2rem;\n}\n\n.hour-description {\n    font-size: 1.1rem;\n    color: var(--faded-white);\n}\n\n.hourly-weather-icon {\n    height: 7rem;\n    width: 7rem;\n    align-self: flex-start;\n}\n\n.hide {\n    display: none;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _retrieveInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retrieveInformation */ "./src/retrieveInformation.js");
/* harmony import */ var _weeklyWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weeklyWeather */ "./src/weeklyWeather.js");




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
    document.querySelector('.daily-hourly-weather-carousel').append((0,_weeklyWeather__WEBPACK_IMPORTED_MODULE_2__.dailyWeatherSection)((0,_weeklyWeather__WEBPACK_IMPORTED_MODULE_2__.createAllDaysToDisplay)(londonInfo)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sU0FBUyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxL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O0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlUdUg7QUFDd0Q7O0FBRS9LO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGlFQUFZO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpRUFBWSwwQkFBMEIsT0FBTztBQUMvRSwwREFBMEQsaUVBQVk7QUFDdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpRUFBWTtBQUNoRCxtQ0FBbUMscUVBQWdCLDRCQUE0QiwwRUFBb0IsU0FBUyxxRUFBZ0IsNkJBQTZCLDZFQUF1QjtBQUNoTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpRUFBWTtBQUNoRCwyQkFBMkIsa0VBQWE7QUFDeEMsMkJBQTJCLGtFQUFhO0FBQ3hDLDBCQUEwQixrRUFBYTtBQUN2Qyw2QkFBNkIsa0VBQWE7QUFDMUMsbUNBQW1DLHVFQUFrQixvREFBb0QsdUVBQWtCO0FBQzNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLG9EQUFvRCw2REFBTyw2QkFBNkIsbUVBQWEsVUFBVSxtRUFBYSxXQUFXLHdFQUFrQjtBQUN6SjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQjtBQUMwRDtBQUMvQztBQUNBOztBQUVwRCwyQkFBMkIsaUVBQVkscUNBQXFDO0FBQzVFLDBCQUEwQixpRUFBZTs7QUFFekMscUJBQXFCLHNEQUFNLElBQUksc0ZBQThCO0FBQzdELGdDQUFnQyw0RUFBb0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jYXJvdXNlbEJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3VycmVudFRlbXBlcmF0dXJlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZW5lcmF0b3JGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVhZGVyU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9yZXRyaWV2ZUluZm9ybWF0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlZWtseVdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvV29ya1NhbnMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbGlnaHQtYmx1ZTogIzRiYTZjZjtcXG4gICAgLS1kYXJrLWJsdWU6ICMwYzRhNmU7XFxuICAgIC0tb3JhbmdlOiAjZWNiMzQ3O1xcbiAgICAtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yOiAjMDYyNjNiO1xcbiAgICAtLWZhZGVkLXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjAzKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tZGFyay1ibHVlKSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA1ZnIgNWZyIDAuNWZyO1xcbiAgICByb3ctZ2FwOiAycmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbVxcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udGl0bGUtZW5kIHtcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDU1cHg7XFxufVxcblxcbiNzZWFyY2gtYmFyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMCAwLjhyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jc2VhcmNoLWJhcjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgbGVmdDogODglO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGFuZ2UtZGVncmVlcyB7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZmFocmVuaGVpdC1idG4sXFxuLmNlbHNpdXMtYnRuIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciA2MG1zIGVhc2UtaW47XFxufVxcblxcbi5mYWhyZW5oZWl0LWJ0bjpob3ZlcixcXG4uY2Vsc2l1cy1idG46aG92ZXIsXFxuLmRhaWx5LXdlYXRoZXItYnRuOmhvdmVyLFxcbi5ob3VybHktd2VhdGhlci1idG46aG92ZXIsXFxuLmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY3VycmVudC1kYXktaW5mb3JtYXRpb24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICB3aWR0aDogNDNyZW07XFxuICAgIGhlaWdodDogMzByZW07XFxufVxcblxcbi5sb2NhdGlvbi1kZXRhaWxzIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jaXR5LWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmRheS1kZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRpbWUtZGV0YWlscyB7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcC1kZXRhaWxzIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAwO1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLnRlbXAtZGV0YWlscz5pbWcge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbn1cXG5cXG4udGVtcC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZmVlbHMtbGlrZSxcXG4uZ2VuZXJhbC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24+ZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjNyZW07XFxufVxcblxcbi53aW5kLWluZm9ybWF0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi53aW5kLWRpcmVjdGlvbiB7XFxuICAgIGhlaWdodDogMS43cmVtO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gaDUsXFxuLmV4dHJhLWluZm9ybWF0aW9uIHAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gaDUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG59XFxuXFxuLmV4dHJhLWluZm9ybWF0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnNhZmUsXFxuLmFtYmVyLFxcbi5kYW5nZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5zYWZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxOTIsIDUxKTtcXG59XFxuXFxuLmFtYmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4uZGFuZ2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMCwgMCk7XFxufVxcblxcbi5jYXJvdXNlbC1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjNyZW07XFxufVxcblxcbi5kYWlseS1ob3VybHktd2VhdGhlci1jYXJvdXNlbCB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZGFpbHktd2VhdGhlci1idG4sXFxuLmhvdXJseS13ZWF0aGVyLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnNsaWRlLWJ1dHRvbnMge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb3ZlLWxlZnQsXFxuLm1vdmUtcmlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmRvdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xcbn1cXG5cXG4uZG90IHtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA4cHg7XFxuICAgIHdpZHRoOiA4cHg7XFxufVxcblxcbi5kb3QuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRhaWx5LXdlYXRoZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxLjJyZW07XFxufVxcblxcbi5kYWlseS13ZWF0aGVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogbWF4KDMwMHB4LCA1MCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5kYXktaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uZGF5LW9mLXRoZS13ZWVrIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmRhdGUtb2YtdGhlLXdlZWssXFxuLmhvdXJseS13ZWF0aGVyPmgyIHtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmRhdGUtb2YtdGhlLXdlZWsge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWZhZGVkLXdoaXRlKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZGF5LXdlYXRoZXItZGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5taW4tdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZGFpbHktd2VhdGhlcj5pbWcge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5ob3VyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uaG91cmx5LXdlYXRoZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBtYXgoMzAwcHgsIDUwJSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXItd2VhdGhlci1kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4zcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ob3VyLXdlYXRoZXItZGVzY3JpcHRpb24+aDMge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5ob3VyLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlZC13aGl0ZSk7XFxufVxcblxcbi5ob3VybHktd2VhdGhlci1pY29uIHtcXG4gICAgaGVpZ2h0OiA3cmVtO1xcbiAgICB3aWR0aDogN3JlbTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUFtRDtBQUN2RDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyx5Q0FBeUM7QUFD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OztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL1dvcmtTYW5zLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbGlnaHQtYmx1ZTogIzRiYTZjZjtcXG4gICAgLS1kYXJrLWJsdWU6ICMwYzRhNmU7XFxuICAgIC0tb3JhbmdlOiAjZWNiMzQ3O1xcbiAgICAtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yOiAjMDYyNjNiO1xcbiAgICAtLWZhZGVkLXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjAzKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tZGFyay1ibHVlKSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA1ZnIgNWZyIDAuNWZyO1xcbiAgICByb3ctZ2FwOiAycmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbVxcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udGl0bGUtZW5kIHtcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDU1cHg7XFxufVxcblxcbiNzZWFyY2gtYmFyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMCAwLjhyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jc2VhcmNoLWJhcjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgbGVmdDogODglO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGFuZ2UtZGVncmVlcyB7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZmFocmVuaGVpdC1idG4sXFxuLmNlbHNpdXMtYnRuIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciA2MG1zIGVhc2UtaW47XFxufVxcblxcbi5mYWhyZW5oZWl0LWJ0bjpob3ZlcixcXG4uY2Vsc2l1cy1idG46aG92ZXIsXFxuLmRhaWx5LXdlYXRoZXItYnRuOmhvdmVyLFxcbi5ob3VybHktd2VhdGhlci1idG46aG92ZXIsXFxuLmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY3VycmVudC1kYXktaW5mb3JtYXRpb24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICB3aWR0aDogNDNyZW07XFxuICAgIGhlaWdodDogMzByZW07XFxufVxcblxcbi5sb2NhdGlvbi1kZXRhaWxzIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jaXR5LWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmRheS1kZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRpbWUtZGV0YWlscyB7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcC1kZXRhaWxzIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAwO1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLnRlbXAtZGV0YWlscz5pbWcge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbn1cXG5cXG4udGVtcC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZmVlbHMtbGlrZSxcXG4uZ2VuZXJhbC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24+ZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjNyZW07XFxufVxcblxcbi53aW5kLWluZm9ybWF0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi53aW5kLWRpcmVjdGlvbiB7XFxuICAgIGhlaWdodDogMS43cmVtO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gaDUsXFxuLmV4dHJhLWluZm9ybWF0aW9uIHAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZXh0cmEtaW5mb3JtYXRpb24gaDUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG59XFxuXFxuLmV4dHJhLWluZm9ybWF0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnNhZmUsXFxuLmFtYmVyLFxcbi5kYW5nZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5zYWZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxOTIsIDUxKTtcXG59XFxuXFxuLmFtYmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4uZGFuZ2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMCwgMCk7XFxufVxcblxcbi5jYXJvdXNlbC1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjNyZW07XFxufVxcblxcbi5kYWlseS1ob3VybHktd2VhdGhlci1jYXJvdXNlbCB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZGFpbHktd2VhdGhlci1idG4sXFxuLmhvdXJseS13ZWF0aGVyLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnNsaWRlLWJ1dHRvbnMge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb3ZlLWxlZnQsXFxuLm1vdmUtcmlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmRvdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xcbn1cXG5cXG4uZG90IHtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA4cHg7XFxuICAgIHdpZHRoOiA4cHg7XFxufVxcblxcbi5kb3QuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRhaWx5LXdlYXRoZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxLjJyZW07XFxufVxcblxcbi5kYWlseS13ZWF0aGVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogbWF4KDMwMHB4LCA1MCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5kYXktaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uZGF5LW9mLXRoZS13ZWVrIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmRhdGUtb2YtdGhlLXdlZWssXFxuLmhvdXJseS13ZWF0aGVyPmgyIHtcXG4gICAgY29sb3I6IHZhcigtLWZhZGVkLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmRhdGUtb2YtdGhlLXdlZWsge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWZhZGVkLXdoaXRlKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZGF5LXdlYXRoZXItZGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5taW4tdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZGFpbHktd2VhdGhlcj5pbWcge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5ob3VyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uaG91cmx5LXdlYXRoZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBtYXgoMzAwcHgsIDUwJSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXItd2VhdGhlci1kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4zcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ob3VyLXdlYXRoZXItZGVzY3JpcHRpb24+aDMge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5ob3VyLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlZC13aGl0ZSk7XFxufVxcblxcbi5ob3VybHktd2VhdGhlci1pY29uIHtcXG4gICAgaGVpZ2h0OiA3cmVtO1xcbiAgICB3aWR0aDogN3JlbTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGJ1dHRvbkdlbmVyYXRvciwgZGl2R2VuZXJhdG9yLCBzcGFuR2VuZXJhdG9yIH0gZnJvbSBcIi4vZ2VuZXJhdG9yRnVuY3Rpb25zXCI7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBicmluZ3MgdG9nZXRoZXIgYWxsIGJ1dHRvbnMgdW5kZXIgb25lIGNvbnRhaW5lclxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgdGhlIGJ1dHRvbnMgY29udGFpbmVkIHdpdGhpbiB0aGUgZGFpbHktaG91cmx5LXdlYXRoZXItY2Fyb3VzZWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcm91c2VsQnV0dG9ucygpIHtcbiAgICBjb25zdCBjYXJvdXNlbEJ1dHRvbnNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydjYXJvdXNlbC1idXR0b25zJ10pO1xuICAgIGNhcm91c2VsQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoYnV0dG9uR2VuZXJhdG9yKFsnZGFpbHktd2VhdGhlci1idG4nLCAnYnRuJywgJ2FjdGl2ZSddLCAnRGFpbHknKSwgYnV0dG9uR2VuZXJhdG9yKFsnaG91cmx5LXdlYXRoZXItYnRuJywgJ2J0biddLCAnSG91cmx5JykpO1xuICAgIGNhcm91c2VsQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoc2xpZGVCdXR0b25zKCkpO1xuICAgIHJldHVybiBjYXJvdXNlbEJ1dHRvbnNDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb25zIGJyaW5ncyB0b2dldGhlciBhbGwgYnV0dG9ucyB0byBkbyB3aXRoIHRoZSBzbGlkZXNcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIHRoZSBidXR0b25zIGNvbnRhaW5lZCB3aXRoaW4gdGhlIHNsaWRlLWJ1dHRvbnMgY29udGFpbmVyXG4gKi9cbmZ1bmN0aW9uIHNsaWRlQnV0dG9ucygpIHtcbiAgICBjb25zdCBzbGlkZUJ1dHRvbnNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydzbGlkZS1idXR0b25zJywgJ2hpZGUnXSk7XG4gICAgY29uc3QgYnV0dG9uTGVmdCA9IHNwYW5HZW5lcmF0b3IoWydtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJ10sICdhcnJvd19iYWNrX2lvcycpXG4gICAgY29uc3QgYnV0dG9uUmlnaHQgPSBzcGFuR2VuZXJhdG9yKFsnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCddLCAnYXJyb3dfZm9yd2FyZF9pb3MnKVxuICAgIHNsaWRlQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoYnV0dG9uR2VuZXJhdG9yKFsnbW92ZS1sZWZ0JywgJ2J0biddLCAnJywgJycsIGJ1dHRvbkxlZnQpKTtcbiAgICBzbGlkZUJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGRvdHMoKSk7XG4gICAgc2xpZGVCdXR0b25zQ29udGFpbmVyLmFwcGVuZChidXR0b25HZW5lcmF0b3IoWydtb3ZlLXJpZ2h0JywgJ2J0biddLCAnJywgJycsIGJ1dHRvblJpZ2h0KSk7XG4gICAgcmV0dXJuIHNsaWRlQnV0dG9uc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgJ2RvdCcgYnV0dG9uc1xuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyB1c2VkIGFzIHRoZSBpbmRpdmlkdWFsIGJ1dHRvbnMgdGhhdCBkaXNwbGF5IHdoaWNoIHNsaWRlIHRoZSB1c2VyIGlzIG9uXG4gKi9cbmZ1bmN0aW9uIGRvdHMoKSB7XG4gICAgY29uc3QgZG90c0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2RvdHMnXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgaWYgKGkgPT09IDApIGRvdHNDb250YWluZXIuYXBwZW5kKGJ1dHRvbkdlbmVyYXRvcihbJ2RvdCcsICdhY3RpdmUnLCAnYnRuJ10sICcnLCAnMCcpKTtcbiAgICAgICAgZWxzZSBkb3RzQ29udGFpbmVyLmFwcGVuZChidXR0b25HZW5lcmF0b3IoWydkb3QnLCAnYnRuJ10sICcnLCBpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gZG90c0NvbnRhaW5lcjtcbn07IiwiaW1wb3J0IHsgY2hlY2tDYXRlZ29yeU9mVXYsIGRpdkdlbmVyYXRvciwgaGVhZGluZ0dlbmVyYXRvciwgaW1nR2VuZXJhdG9yLCBwYXJhZ3JhcGhHZW5lcmF0b3IsIHNwYW5HZW5lcmF0b3IgfSBmcm9tICcuL2dlbmVyYXRvckZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVTdGFuZGFyZERhdGUsIGNyZWF0ZVN0YW5kYXJkVGltZSwgcmV0cmlldmVDaXR5LCByZXRyaWV2ZUNvdW50cnksIHJldHJpZXZlRGF0ZUFuZFRpbWVBcnIsIHJldHJpZXZlTWV0aG9kT2ZNZWFzdXJlbWVudCwgaXNNZXRob2RPZk1lYXN1cmVtZW50Q2Vsc2l1cywgcmV0cmlldmVXaW5kRGVncmVlcywgcmV0cmlldmVXaW5kU3BlZWQsIHJldHJpZXZlSHVtaWRpdHksIHJldHJpZXZlVXZOdW0sIHJldHJpZXZlVmlzaWJpbGl0eURpc3RhbmNlLCByZXRyaWV2ZUNsb3VkaW5lc3NQZXJjZW50YWdlLCByZXRyaWV2ZUNoYW5jZU9mUmFpbiwgcmV0cmlldmVTdW5yaXNlVGltZSwgcmV0cmlldmVTdW5zZXRUaW1lLCByZXRyaWV2ZU1vb25QaGFzZSwgcmV0cmlldmVDdXJyZW50VGVtcEltZywgcmV0cmlldmVDdXJyZW50VGVtcCwgcmV0cmlldmVDdXJyZW50Q29uZGl0aW9uLCByZXRyaWV2ZUZlZWxzTGlrZVRlbXAgfSBmcm9tICcuL3JldHJpZXZlSW5mb3JtYXRpb24nXG5pbXBvcnQgeyBkYWlseVdlYXRoZXJTZWN0aW9uLCBjcmVhdGVBbGxEYXlzVG9EaXNwbGF5IH0gZnJvbSAnLi93ZWVrbHlXZWF0aGVyJztcblxuY29uc3QgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnY3VycmVudC1kYXktaW5mb3JtYXRpb24nXSk7IC8vdGhpcyBpcyB0aGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgYWxsIGVsZW1lbnRzIHRoYXQgd2lsbCBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IG1vbWVudFxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBvbiBzY3JlZW4gdG8gc2hvdyB0aGUgbG9jYXRpb24gYW5kIHRpbWUgb2YgdGhlIGNpdHkgc2VhcmNoZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaXR5IHRoZSBuYW1lIG9mIHRoZSBjaXR5IHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkIG9uIHNjcmVlbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb3VudHJ5IHRoZSBuYW1lIG9mIHRoZSBjb3VudHJ5IHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkIG9uIHNjcmVlbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXkgdGhlIGRhdGUgdGhhdCBoYXMgY29udmVydGVkIGludG8gYSBzdHJpbmcgdXNpbmcgdGhlIEludGwgQVBJXG4gKiBAcGFyYW0ge3N0cmluZ30gdGltZSB0aGUgdGltZSB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZCBvbiBzY3JlZW5cbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgdGhhdCBjb250YWlucyBuZXN0ZWQgZWxlbWVudHMgdGhhdCBkaXNwbGF5IGluZm9ybWF0aW9uIGFib3V0IHRoZSBsb2NhdGlvbiBhbmQgdGltZVxuICovXG5mdW5jdGlvbiBkaXNwbGF5TG9jYXRpb25EZXRhaWxzKGNpdHkgPSAnJywgY291bnRyeSA9ICcnLCBkYXkgPSAnJywgdGltZSA9ICcnKSB7XG4gICAgY29uc3QgbG9jYXRpb25EZXRhaWxzID0gZGl2R2VuZXJhdG9yKFsnbG9jYXRpb24tZGV0YWlscyddKTtcbiAgICBjb25zdCBjaXR5TmFtZSA9IHNwYW5HZW5lcmF0b3IoWydjaXR5J10sIGNpdHkpO1xuICAgIGNvbnN0IGNvdW50cnlOYW1lID0gc3BhbkdlbmVyYXRvcihbJ2NvdW50cnknXSwgY291bnRyeSk7XG4gICAgY29uc3QgdGltZURldGFpbHMgPSBzcGFuR2VuZXJhdG9yKFsndGltZS1kZXRhaWxzJ10sIHRpbWUpO1xuICAgIGNvbnN0IGNpdHlEZXRhaWxzSGVhZGVyID0gaGVhZGluZ0dlbmVyYXRvcignaDInLCBbJ2NpdHktZGV0YWlscyddLCAnLCAnLCBjaXR5TmFtZSwgY291bnRyeU5hbWUpO1xuICAgIGNvbnN0IGRheURldGFpbHNIZWFkZXIgPSBoZWFkaW5nR2VuZXJhdG9yKCdoNCcsIFsnZGF5LWRldGFpbHMnXSwgZGF5LCB1bmRlZmluZWQsIHRpbWVEZXRhaWxzKTtcbiAgICBsb2NhdGlvbkRldGFpbHMuYXBwZW5kKGNpdHlEZXRhaWxzSGVhZGVyLCBkYXlEZXRhaWxzSGVhZGVyKTtcbiAgICByZXR1cm4gbG9jYXRpb25EZXRhaWxzO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZGlzcGxheSB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBhbG9uZyB3aXRoIGl0cyBhc3NvY2lhdGVkIGltYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgdGhpcyBpcyB0aGUgcGF0aCB0byB0aGUgaW1hZ2UgdGhhdCBuZWVkcyB0byBiZSBkaXNwbGF5ZWQgXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcCB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIFxuICogQHJldHVybnMgYSBkaXYgZWxlbWVudCB0aGF0IGhhcyB0d28gZnVydGhlciBlbGVtZW50cyBhcHBlbmRlZCB3aXRoaW4gaXQgZGlzcGxheWluZyB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBhbG9uZyB3aXRoIGl0cyBhc3NvY2lhdGVkIGltYWdlXG4gKi9cbmZ1bmN0aW9uIHRlbXBEZXRhaWxzU2VjdGlvbihpbWFnZSwgdGVtcCkge1xuICAgIGNvbnN0IHRlbXBEZXRhaWxzQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsndGVtcC1kZXRhaWxzJ10pO1xuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gc3BhbkdlbmVyYXRvcihbJ3RlbXAnXSwgdGVtcCk7XG4gICAgdGVtcERldGFpbHNDb250YWluZXIuYXBwZW5kKGltZ0dlbmVyYXRvcihpbWFnZSwgdW5kZWZpbmVkLCBbJ2ltYWdlLXdlYXRoZXItZGVzY3JpcHRpb24nXSksIGhlYWRpbmdHZW5lcmF0b3IoJ2gyJywgWydjdXJyZW50LXRlbXAnXSwgJ8KwJywgY3VycmVudFRlbXAsIHJldHJpZXZlTWV0aG9kT2ZNZWFzdXJlbWVudCgpKSk7XG4gICAgcmV0dXJuIHRlbXBEZXRhaWxzQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZGlzcGxheSB0aGUgdGVtcGVyYXR1cmUgaXQgZmVlbHMgbGlrZSBhbG9uZyB3aXRoIHRoZSBvdXRkb29yIGNvbmRpdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiBhIGRlc2NyaXB0aW9uIG9mIG91dGRvb3IgY29uZGl0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IGZlZWxzTGlrZVRlbXAgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRlbXBlcmF0dXJlIHRoYXQgaXQgZmVlbHMgbGlrZVxuICogQHJldHVybnMgYSBkaXYgZWxlbWVudCB0aGF0IGhhcyB0d28gZnVydGhlciBlbGVtZW50cyBhcHBlbmRlZCB3aXRoaW4gaXQgZGlzcGxheWluZyB0aGUgb3V0ZG9vciBjb25kaXRpb25zIGF0IHRoZSBjdXJyZW50IG1vbWVudCBhbmQgdGhlIHRlbXBlcmF0dXJlIGl0IGZlZWxzIGxpa2VcbiAqL1xuZnVuY3Rpb24gdGVtcENvbmRpdGlvbnNTZWN0aW9uKGRlc2NyaXB0aW9uLCBmZWVsc0xpa2VUZW1wKSB7XG4gICAgY29uc3QgdGVtcENvbmRpdGlvbnNDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd0ZW1wLWNvbmRpdGlvbnMnXSk7XG4gICAgY29uc3QgZmVlbHNMaWtlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBmZWVsc0xpa2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZmVlbHMtbGlrZScpO1xuICAgIGZlZWxzTGlrZUhlYWRlci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgRmVlbHMgbGlrZSA8c3BhbiBjbGFzcz1cImZlZWxzLWxpa2UtdGVtcFwiPiR7ZmVlbHNMaWtlVGVtcH08L3NwYW4+wrA8c3BhbiBjbGFzcz1cIm1ldGhvZC1vZi1tZWFzdXJlbWVudFwiPiR7aXNNZXRob2RPZk1lYXN1cmVtZW50Q2Vsc2l1cygpID09PSB0cnVlID8gJ0MnIDogJ0YnfTwvc3Bhbj5gKTtcbiAgICB0ZW1wQ29uZGl0aW9uc0NvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDMnLCBbJ3RlbXAtZGVzY3JpcHRpb24nXSwgZGVzY3JpcHRpb24pLCBmZWVsc0xpa2VIZWFkZXIpO1xuICAgIHJldHVybiB0ZW1wQ29uZGl0aW9uc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbnMgam9iIGlzIHRvIGFwcGVuZCB0aGUgdHdvIGFyZ3VtZW50cyBpbnRvIHRoZSB1Y3JyZW50VGVtcERldGFpbHMgZGl2IHdoaWNoIHdpbGwgdGhlbiBiZSBkaXNwbGF5ZWQgb24gc2NyZWVuXG4gKiBAcGFyYW0ge29iamVjdH0gdGVtcERldGFpbHNTZWN0aW9uIGEgZG9tIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgdGhlIGZpcnN0IGNoaWxkIG9mIHRoZSBjdXJyZW50VGVtcERldGFpbHNDb250YWluZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSB0ZW1wQ29uZGl0aW9uc1NlY3Rpb24gYSBkb20gZWxlbWVudCBvYmplY3QgdGhhdCBpcyB0aGUgc2Vjb25kIGNoaWxkIG9mIHRoZSBjdXJyZW50VGVtcERldGFpbHNDb250YWluZXJcbiAqIEByZXR1cm5zIGEgZG9tIGVsZW1lbnQgb2JqZWN0IGNvbnRhaW5zIHRoZSB0d28gYXJndW1lbnRzIHBhc3NlZCBhcyBjaGlsZHJlblxuICovXG5mdW5jdGlvbiBjdXJyZW50VGVtcERldGFpbHNTZWN0aW9uKHRlbXBEZXRhaWxzU2VjdGlvbiwgdGVtcENvbmRpdGlvbnNTZWN0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudFRlbXBEZXRhaWxzQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnY3VycmVudC10ZW1wLWRldGFpbHMnXSk7XG4gICAgY3VycmVudFRlbXBEZXRhaWxzQ29udGFpbmVyLmFwcGVuZCh0ZW1wRGV0YWlsc1NlY3Rpb24sIHRlbXBDb25kaXRpb25zU2VjdGlvbik7XG4gICAgcmV0dXJuIGN1cnJlbnRUZW1wRGV0YWlsc0NvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGFwcGVuZCBhbGwgOSBhcmd1bWVudHMgaW50byB0aGUgZXh0cmFJbmZvcm1hdGlvbkNvbnRhaW5lciB0aGF0IHdpbGwgdGhlbiBiZSBkaXNwbGF5ZWQgb250byB0aGUgc2NyZWVuXG4gKiBAcGFyYW0ge29iamVjdH0gd2luZEluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyB3aW5kIGRpcmVjdGlvbiBhbmQgc3BlZWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBodW1pZGl0eUluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyBodW1pZGl0eSBwZXJjZW50YWdlXG4gKiBAcGFyYW0ge29iamVjdH0gdXZJbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdGhlIERPTSBlbGVtZW50IGRpc3BsYXlpbmcgdXYtaW5kZXggXG4gKiBAcGFyYW0ge29iamVjdH0gdmlzaWJpbGl0eUluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyB2aXNpYmlsaXR5IGRpc3RhbmNlXG4gKiBAcGFyYW0ge29iamVjdH0gY2xvdWRpbmVzc0luZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyBjbG91ZGluZXNzIHBlcmNlbnRhZ2VcbiAqIEBwYXJhbSB7b2JqZWN0fSByYWluSW5mbyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHRoZSBET00gZWxlbWVudCBkaXNwbGF5aW5nIHRoZSBjaGFuY2Ugb2YgcmFpblxuICogQHBhcmFtIHtvYmplY3R9IHN1bnJpc2VJbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdGhlIERPTSBlbGVtZW50IGRpc3BsYXlpbmcgc3VucmlzZSB0aW1lXG4gKiBAcGFyYW0ge29iamVjdH0gc3Vuc2V0SW5mbyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHRoZSBET00gZWxlbWVudCBkaXNwbGF5aW5nIHN1bnNldCB0aW1lXG4gKiBAcGFyYW0ge29iamVjdH0gbW9vbkluZm8gYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0aGUgRE9NIGVsZW1lbnQgZGlzcGxheWluZyBtb29uLXBoYXNlIGluZm9ybWF0aW9uXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIDkgY2hpbGRyZW4sIHdoaWNoIGFyZSBhbGwgdGhlIGFyZ3VtZW50cyB0aGF0IGhhdmUgYmVlbiBwYXNzZWRcbiAqL1xuZnVuY3Rpb24gZXh0cmFJbmZvcm1hdGlvblNlY3Rpb24od2luZEluZm8sIGh1bWlkaXR5SW5mbywgdXZJbmZvLCB2aXNpYmlsaXR5SW5mbywgY2xvdWRpbmVzc0luZm8sIHJhaW5JbmZvLCBzdW5yaXNlSW5mbywgc3Vuc2V0SW5mbywgbW9vbkluZm8pIHtcbiAgICBjb25zdCBleHRyYUluZm9ybWF0aW9uQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnZXh0cmEtaW5mb3JtYXRpb24nXSk7XG4gICAgZXh0cmFJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQod2luZEluZm8sIGh1bWlkaXR5SW5mbywgdXZJbmZvLCB2aXNpYmlsaXR5SW5mbywgY2xvdWRpbmVzc0luZm8sIHJhaW5JbmZvLCBzdW5yaXNlSW5mbywgc3Vuc2V0SW5mbywgbW9vbkluZm8pO1xuICAgIHJldHVybiBleHRyYUluZm9ybWF0aW9uQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgd2luZFxuICogQHBhcmFtIHtzdHJpbmd9IHdpbmRBcnJvd1JvdGF0aW9uIHRoZSBkZWdyZWVzIGJ5IHdoaWNoIHRoZSBhcnJvdyB0aGF0IGlzIHBvaW50ZWQgbm9ydGggc2hvdWxkIHJvdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHdpbmRTcGVlZCB0aGUgc3BlZWQgb2YgdGhlIHdpbmRcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHdpbmQgc3BlZWQgYW5kIGRpcmVjdGlvblxuICovXG5mdW5jdGlvbiB3aW5kSW5mb3JtYXRpb24od2luZEFycm93Um90YXRpb24sIHdpbmRTcGVlZCkge1xuICAgIGNvbnN0IHdpbmRDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd3aW5kJ10pO1xuICAgIGNvbnN0IHdpbmRJbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3dpbmQtaW5mb3JtYXRpb24nXSk7XG4gICAgY29uc3Qgd2luZFNwZWVkU3BhbiA9IHNwYW5HZW5lcmF0b3IoWyd3aW5kLW51bSddLCB3aW5kU3BlZWQpO1xuICAgIHdpbmRJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQoaW1nR2VuZXJhdG9yKCcuLy4uL3NyYy9hc3NldHMvYXJyb3cucG5nJywgJ0FuIGFycm93IHJvdGF0ZWQgYnkgdGhlIHdpbmRvdyBkaXJlY3Rpb24gZGVncmVlcycsIFsnd2luZC1kaXJlY3Rpb24nXSwgd2luZEFycm93Um90YXRpb24pLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWyd3aW5kLXNwZWVkJ10sICdtcGgnLCB3aW5kU3BlZWRTcGFuKSk7XG4gICAgd2luZENvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1dpbmQnKSwgd2luZEluZm9ybWF0aW9uQ29udGFpbmVyKTtcbiAgICByZXR1cm4gd2luZENvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZGl2IGVsZW1lbnQsIGFuZCBhcHBlbmRzIGEgPGg1PjwvaDU+IGFuZCA8cD48L3A+IGVsZW1lbnQgd2l0aGluIGl0IHRoYXQgZGlzcGxheXMgdGhlIGh1bWlkaXR5IHBlcmNlbnRhZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBodW1pZGl0eU51bWJlciB0aGUgaHVtaWRpdHkgY3VycmVudGx5IFxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgaHVtaWRpdHkgcGVyY2VudGFnZVxuICovXG5mdW5jdGlvbiBodW1pZGl0eUluZm9ybWF0aW9uKGh1bWlkaXR5TnVtYmVyKSB7XG4gICAgY29uc3QgaHVtaWRpdHlDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWydodW1pZGl0eSddKTtcbiAgICBjb25zdCBodW1pZGl0eSA9IHNwYW5HZW5lcmF0b3IoWydodW1pZGl0eS1udW1iZXInXSwgaHVtaWRpdHlOdW1iZXIpXG4gICAgaHVtaWRpdHlDb250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2g1JywgW10sICdIdW1pZGl0eScpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydodW1pZGl0eS1wZXJjZW50YWdlJ10sICclJywgaHVtaWRpdHkpKTtcbiAgICByZXR1cm4gaHVtaWRpdHlDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSB1di1pbmRleFxuICogQHBhcmFtIHtzdHJpbmd9IHV2SW5kZXhOdW1iZXIgdGhlIHV2LWluZGV4IGN1cnJlbnRseVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgdXYtaW5kZXhcbiAqL1xuZnVuY3Rpb24gdXZJbmZvcm1hdGlvbih1dkluZGV4TnVtYmVyKSB7XG4gICAgY29uc3QgdXZDb250YWluZXIgPSBkaXZHZW5lcmF0b3IoWyd1di1pbmRleCddKTtcbiAgICB1dkNvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1VWIEluZGV4JyksIHBhcmFncmFwaEdlbmVyYXRvcihbJ3V2JywgY2hlY2tDYXRlZ29yeU9mVXYodXZJbmRleE51bWJlcildLCB1dkluZGV4TnVtYmVyKSk7XG4gICAgcmV0dXJuIHV2Q29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyB0aGUgdmlzaWJpbGl0eSBkaXN0YW5jZVxuICogQHBhcmFtIHtzdHJpbmd9IHZpc2liaWxpdHlEaXN0YW5jZSB0aGUgY3VycmVudCB2aXNpYmlsaXR5IGRpc3RhbmNlXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSB2aXNpYmlsaXR5IGRpc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIHZpc2liaWxpdHlJbmZvcm1hdGlvbih2aXNpYmlsaXR5RGlzdGFuY2UpIHtcbiAgICBjb25zdCB2aXNpYmlsaXR5Q29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsndmlzaWJpbGl0eSddKTtcbiAgICBjb25zdCB2aXNpYmxpdHlEaXN0YW5jZVNwYW4gPSBzcGFuR2VuZXJhdG9yKFsndmlzaWJpbGl0eS1udW0nXSwgdmlzaWJpbGl0eURpc3RhbmNlKTtcbiAgICB2aXNpYmlsaXR5Q29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnVmlzaWJpbGl0eScpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWyd2aXNpYmlsaXR5LWRpc3RhbmNlJ10sICdrbScsIHZpc2libGl0eURpc3RhbmNlU3BhbikpO1xuICAgIHJldHVybiB2aXNpYmlsaXR5Q29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCwgYW5kIGFwcGVuZHMgYSA8aDU+PC9oNT4gYW5kIDxwPjwvcD4gZWxlbWVudCB3aXRoaW4gaXQgdGhhdCBkaXNwbGF5cyB0aGUgY3VycmVudCBjbG91ZCBwZXJjZW50YWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xvdWRQZXJjZW50YWdlIHRoZSBjdXJyZW50IGNsb3VkIHBlcmNlbnRhZ2VcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRpc3BsYXkgdGhlIGN1cnJlbnQgY2xvdWQgcGVyY2VudGFnZVxuICovXG5mdW5jdGlvbiBjbG91ZGluZXNzSW5mb3JtYXRpb24oY2xvdWRQZXJjZW50YWdlKSB7XG4gICAgY29uc3QgY2xvdWRpbmVzc0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2Nsb3VkaW5lc3MnXSk7XG4gICAgY29uc3QgY2xvdWRpbmVzc1BlcmNlbnRhZ2VTcGFuID0gc3BhbkdlbmVyYXRvcihbJ2Nsb3VkaW5lc3MtbnVtJ10sIGNsb3VkUGVyY2VudGFnZSk7XG4gICAgY2xvdWRpbmVzc0NvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ0Nsb3VkaW5lc3MnKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnY2xvdWRpbmVzcy1wZXJjZW50YWdlJ10sICclJywgY2xvdWRpbmVzc1BlcmNlbnRhZ2VTcGFuKSk7XG4gICAgcmV0dXJuIGNsb3VkaW5lc3NDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSBjdXJyZW50IHJhaW4gcGVyY2VudGFnZVxuICogQHBhcmFtIHtzdHJpbmd9IHJhaW5QZXJjZW50YWdlIHRoZSBjdXJyZW50IHJhaW4gcGVyY2VudGFnZVxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgY3VycmVudCByYWluIHBlcmNlbnRhZ2VcbiAqL1xuZnVuY3Rpb24gcmFpbkluZm9ybWF0aW9uKHJhaW5QZXJjZW50YWdlKSB7XG4gICAgY29uc3QgcmFpbkNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2NoYW5jZS1vZi1yYWluJ10pO1xuICAgIGNvbnN0IHJhaW5QZXJjZW50YWdlU3BhbiA9IHNwYW5HZW5lcmF0b3IoWydjaGFuY2Utb2YtcmFpbi1udW0nXSwgcmFpblBlcmNlbnRhZ2UpO1xuICAgIHJhaW5Db250YWluZXIuYXBwZW5kKGhlYWRpbmdHZW5lcmF0b3IoJ2g1JywgW10sICdDaGFuY2Ugb2YgUmFpbicpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydjaGFuY2Utb2YtcmFpbi1wZXJjZW50YWdlJ10sICclJywgcmFpblBlcmNlbnRhZ2VTcGFuKSk7XG4gICAgcmV0dXJuIHJhaW5Db250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSBzdW5yaXNlIHRpbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdW5yaXNlVGltZSB0aGUgc3VucmlzZSB0aW1lIGZvciB0aGUgZGF5XG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSBzdW5yaXNlIHRpbWVcbiAqL1xuZnVuY3Rpb24gc3VucmlzZUluZm9ybWF0aW9uKHN1bnJpc2VUaW1lKSB7XG4gICAgY29uc3Qgc3VucmlzZUNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ3N1bnJpc2UnXSk7XG4gICAgc3VucmlzZUNvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1N1bnJpc2UnKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnc3VucmlzZS10aW1lJ10sIHN1bnJpc2VUaW1lKSk7XG4gICAgcmV0dXJuIHN1bnJpc2VDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50LCBhbmQgYXBwZW5kcyBhIDxoNT48L2g1PiBhbmQgPHA+PC9wPiBlbGVtZW50IHdpdGhpbiBpdCB0aGF0IGRpc3BsYXlzIHRoZSBzdW5zZXQgdGltZVxuICogQHBhcmFtIHtzdHJpbmd9IHN1bnNldFRpbWUgdGhlIHN1bnNldCB0aW1lIGZvciB0aGUgZGF5XG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSBzdW5zZXQgdGltZVxuICovXG5mdW5jdGlvbiBzdW5zZXRJbmZvcm1hdGlvbihzdW5zZXRUaW1lKSB7XG4gICAgY29uc3Qgc3Vuc2V0Q29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnc3Vuc2V0J10pO1xuICAgIHN1bnNldENvbnRhaW5lci5hcHBlbmQoaGVhZGluZ0dlbmVyYXRvcignaDUnLCBbXSwgJ1N1bnNldCcpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydzdW5zZXQtdGltZSddLCBzdW5zZXRUaW1lKSk7XG4gICAgcmV0dXJuIHN1bnNldENvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZGl2IGVsZW1lbnQsIGFuZCBhcHBlbmRzIGEgPGg1PjwvaDU+IGFuZCA8cD48L3A+IGVsZW1lbnQgd2l0aGluIGl0IHRoYXQgZGlzcGxheXMgdGhlIGN1cnJlbnQgbW9vbiBwaGFzZVxuICogQHBhcmFtIHtzdHJpbmd9IG1vb25QaGFzZSB0aGUgY3VycmVudCBtb29uIHBoYXNlXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5IHRoZSBjdXJyZW50IG1vb24gcGhhc2VcbiAqL1xuZnVuY3Rpb24gbW9vbkluZm9ybWF0aW9uKG1vb25QaGFzZSkge1xuICAgIGNvbnN0IG1vb25waGFzZUNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ21vb24tcGhhc2UnXSk7XG4gICAgbW9vbnBoYXNlQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoNScsIFtdLCAnTW9vbiBQaGFzZScpLCBwYXJhZ3JhcGhHZW5lcmF0b3IoWydwaGFzZSddLCBtb29uUGhhc2UpKTtcbiAgICByZXR1cm4gbW9vbnBoYXNlQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHRvIGJlIHVzZWQgd2hlbiB0aGUgd2VicGFnZSBpcyBsb2FkZWQgdXAgYW5kIGl0IGZpbGxzIHRoZSB3ZWJwYWdlIHdpdGggdGhlIHJlcXVpcmVkIGluZm9ybWF0aW9uIHdpdGggdGhlIGRlZmF1bHQgY2l0eSBiZWluZyBsb25kb25cbiAqL1xuYXN5bmMgZnVuY3Rpb24gb25Mb2FkRGVmYXVsdFdlYXRoZXIoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZDI2YThhOTA3NTJmNDVjMmEwMzE1NDkwNzIzMDUwNSZxPWxvbmRvbiZkYXlzPTcmYXFpPW5vJmFsZXJ0cz1ubycsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IGxvbmRvbkluZm8gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZChkaXNwbGF5TG9jYXRpb25EZXRhaWxzKHJldHJpZXZlQ2l0eShsb25kb25JbmZvKSwgcmV0cmlldmVDb3VudHJ5KGxvbmRvbkluZm8pLCBjcmVhdGVTdGFuZGFyZERhdGUocmV0cmlldmVEYXRlQW5kVGltZUFycihsb25kb25JbmZvKVswXSksIGNyZWF0ZVN0YW5kYXJkVGltZShyZXRyaWV2ZURhdGVBbmRUaW1lQXJyKGxvbmRvbkluZm8pWzFdKSkpO1xuICAgIGN1cnJlbnREYXlJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQoY3VycmVudFRlbXBEZXRhaWxzU2VjdGlvbih0ZW1wRGV0YWlsc1NlY3Rpb24ocmV0cmlldmVDdXJyZW50VGVtcEltZyhsb25kb25JbmZvKSwgcmV0cmlldmVDdXJyZW50VGVtcChsb25kb25JbmZvKSksIHRlbXBDb25kaXRpb25zU2VjdGlvbihyZXRyaWV2ZUN1cnJlbnRDb25kaXRpb24obG9uZG9uSW5mbyksIHJldHJpZXZlRmVlbHNMaWtlVGVtcChsb25kb25JbmZvKSkpKTtcbiAgICBjdXJyZW50RGF5SW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kKGV4dHJhSW5mb3JtYXRpb25TZWN0aW9uKHdpbmRJbmZvcm1hdGlvbihyZXRyaWV2ZVdpbmREZWdyZWVzKGxvbmRvbkluZm8pLCByZXRyaWV2ZVdpbmRTcGVlZChsb25kb25JbmZvKSksIGh1bWlkaXR5SW5mb3JtYXRpb24ocmV0cmlldmVIdW1pZGl0eShsb25kb25JbmZvKSksXG4gICAgICAgIHV2SW5mb3JtYXRpb24ocmV0cmlldmVVdk51bShsb25kb25JbmZvKSksIHZpc2liaWxpdHlJbmZvcm1hdGlvbihyZXRyaWV2ZVZpc2liaWxpdHlEaXN0YW5jZShsb25kb25JbmZvKSksIGNsb3VkaW5lc3NJbmZvcm1hdGlvbihyZXRyaWV2ZUNsb3VkaW5lc3NQZXJjZW50YWdlKGxvbmRvbkluZm8pKSwgcmFpbkluZm9ybWF0aW9uKHJldHJpZXZlQ2hhbmNlT2ZSYWluKGxvbmRvbkluZm8pKSxcbiAgICAgICAgc3VucmlzZUluZm9ybWF0aW9uKHJldHJpZXZlU3VucmlzZVRpbWUobG9uZG9uSW5mbykpLCBzdW5zZXRJbmZvcm1hdGlvbihyZXRyaWV2ZVN1bnNldFRpbWUobG9uZG9uSW5mbykpLCBtb29uSW5mb3JtYXRpb24ocmV0cmlldmVNb29uUGhhc2UobG9uZG9uSW5mbykpKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5LWhvdXJseS13ZWF0aGVyLWNhcm91c2VsJykuYXBwZW5kKGRhaWx5V2VhdGhlclNlY3Rpb24oY3JlYXRlQWxsRGF5c1RvRGlzcGxheShsb25kb25JbmZvKSkpO1xufTtcblxuZXhwb3J0IHsgY3VycmVudERheUluZm9ybWF0aW9uQ29udGFpbmVyLCBvbkxvYWREZWZhdWx0V2VhdGhlciB9OyIsIi8qKlxuICogdGhpcyBmdW5jdGlvbiB0YWtlcyBhbiBhcnJheSBvZiBjbGFzc2VzIGFuZCBhZGRzIHRob3NlIGNsYXNzZXMgdG8gdGhlIGVsZW1lbnQgdXNpbmcgYSBmb3JFYWNoIGxvb3BcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50IHRoZSBlbGVtZW50IHRoYXQgd2UgbmVlZCB0byBhZGQgdGhlIGNsYXNzZXMgdG8gXG4gKi9cbmZ1bmN0aW9uIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgZWxlbWVudCkge1xuICAgIGNsYXNzZXMuZm9yRWFjaChpbmRpdmlkdWFsQ2xhc3MgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGluZGl2aWR1YWxDbGFzcykpO1xufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhIGRpdiBlbGVtZW50IHdpdGggaXRzIGNsYXNzZXMgcHJvdmlkZWQgYXMgYW4gYXJndW1lbnRcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGRpdlxuICogQHJldHVybnMgYSBkaXYgRE9NIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gZGl2R2VuZXJhdG9yKGNsYXNzZXMpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIGRpdilcbiAgICByZXR1cm4gZGl2O1xufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhbiBpbWcgZWxlbWVudCwgd2l0aCB0aGUgc3BlY2lmaWVkLCBzcmMsIGFsdCBhbmQgY2xhc3Nlc1xuICogQHBhcmFtIHtzdHJpbmd9IHNyYyB0aGUgcGF0aCB0byB0aGUgaW1hZ2Ugd2Ugd2FudCB0byB1c2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBhbHQgdGhlIGFsdCBkZXNjcmlwdGlvbiBvZiB0aGUgaW1nIGluY2FzZSBpdCBkb2Vzbid0IGxvYWRcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGltZ1xuICogQHJldHVybnMgYW4gaW1nIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gaW1nR2VuZXJhdG9yKHNyYywgYWx0ID0gJycsIGNsYXNzZXMsIHJvdGF0aW9uID0gMCkge1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBzcmM7XG4gICAgaW1nLmFsdCA9IGFsdDtcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIGltZyk7XG4gICAgaW1nLnN0eWxlLnJvdGF0ZSA9IGAke3JvdGF0aW9ufWRlZ2BcbiAgICByZXR1cm4gaW1nO1xufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhIGhlYWRpbmcgb2YgdGhlIGRlc2lyZWQgc2l6ZSwgYW5kIGFkZHMgdGhlIHRleHQgc3BlY2lmaWVkIGFzIHdlbGwgYXMgdGhlIGNsYXNzZXMgcHJvdmlkZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBoZWFkaW5nU2l6ZSAxIG9mIDYgc2l6ZXMgd2Ugd2FudCB0aGUgaGVhZGluZyB0byBiZSBlLmcuICdoMSdcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGhlYWRpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IHRoZSBoZWFkaW5nIG5lZWRzIHRvIGRpc3BsYXkgXG4gKiBAcGFyYW0ge29iamVjdH0gc3BhbkVsZW1lbnRQcmVwcGVuZCBhIGRvbSBlbGVtZW50IHRoYXQgd2Ugd2FudCB0byBhZGQgYmVmb3JlIHRoZSB0ZXh0IHBhcnQgb2YgdGhlIGhlYWRpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBzcGFuRWxlbWVudEFwcGVuZCBhIGRvbSBlbGVtZW50IHRoYXQgd2Ugd2FudCB0byBhZGQgYWZ0ZXIgdGhlIHRleHQgcGFydCBvZiB0aGUgaGVhZGluZ1xuICogQHJldHVybnMgYSBoZWFkaW5nIERPTSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGhlYWRpbmdHZW5lcmF0b3IoaGVhZGluZ1NpemUsIGNsYXNzZXMsIHRleHQsIHNwYW5FbGVtZW50UHJlcHBlbmQgPSAnJywgc3BhbkVsZW1lbnRBcHBlbmQgPSAnJykge1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGhlYWRpbmdTaXplKTtcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IHRleHQ7XG4gICAgaGVhZGluZy5wcmVwZW5kKHNwYW5FbGVtZW50UHJlcHBlbmQpXG4gICAgaGVhZGluZy5hcHBlbmQoc3BhbkVsZW1lbnRBcHBlbmQpXG4gICAgYWRkQ2xhc3Nlc1RvRWxlbWVudChjbGFzc2VzLCBoZWFkaW5nKTtcbiAgICByZXR1cm4gaGVhZGluZztcbn07XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgYSBidXR0b24gd2l0aCB0aGUgY2xhc3NlcyBhbmQgdGV4dCBwcm92aWRlZFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgaGVhZGluZ1xuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgdGhlIHRleHQgbmVlZGVkIHdpdGhpbiB0aGUgYnV0dG9uIFxuICogQHBhcmFtIHtzdHJpbmd9IGlkIHRoZSBpZCB3ZSB3YW50IHRvIGFzc2lnbiB0byB0aGUgYnV0dG9uXG4gKiBAcGFyYW0ge29iamVjdH0gc3BhbkVsZW1lbnRQcmVwcGVuZCBhIGRvbSBlbGVtZW50IHRoYXQgd2Ugd2FudCB0byBhZGQgYmVmb3JlIHRoZSB0ZXh0IHBhcnQgb2YgdGhlIGJ1dHRvblxuICogQHBhcmFtIHtvYmplY3R9IHNwYW5FbGVtZW50QXBwZW5kIGEgZG9tIGVsZW1lbnQgdGhhdCB3ZSB3YW50IHRvIGFkZCBhZnRlciB0aGUgdGV4dCBwYXJ0IG9mIHRoZSBidXR0b25cbiAqIEByZXR1cm5zIGEgYnV0dG9uIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYnV0dG9uR2VuZXJhdG9yKGNsYXNzZXMsIHRleHQsIGlkID0gJycsIHNwYW5FbGVtZW50UHJlcHBlbmQgPSAnJywgc3BhbkVsZW1lbnRBcHBlbmQgPSAnJykge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZENsYXNzZXNUb0VsZW1lbnQoY2xhc3NlcywgYnRuKTtcbiAgICBidG4uaW5uZXJIVE1MID0gdGV4dDtcbiAgICBidG4uaWQgPSBpZDtcbiAgICBidG4ucHJlcGVuZChzcGFuRWxlbWVudFByZXBwZW5kKTtcbiAgICBidG4uYXBwZW5kKHNwYW5FbGVtZW50QXBwZW5kKTtcbiAgICByZXR1cm4gYnRuO1xufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhIHNwYW4gZWxlbWVudCB3aXRoIHRoZSBjbGFzc2VzIGFuZCB0ZXh0IHByb3ZpZGVkXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBoZWFkaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCB0aGUgdGV4dCBuZWVkZWQgd2l0aGluIHRoZSBzcGFuIFxuICogQHJldHVybnMgYSBzcGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc3BhbkdlbmVyYXRvcihjbGFzc2VzLCB0ZXh0KSB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIHNwYW4pO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gdGV4dDtcbiAgICByZXR1cm4gc3Bhbjtcbn07XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgYSBmb3JtIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3NlcyBwcm92aWRlZFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgZm9ybVxuICogQHJldHVybnMgYSBmb3JtIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gZm9ybUdlbmVyYXRvcihjbGFzc2VzKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIGZvcm0pO1xuICAgIHJldHVybiBmb3JtO1xufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhbiBpbnB1dCBlbGVtZW50IGFuZCBhZGRzIHRoZSBzcGVjaWZpZWQgYXR0cmlidXRlcyBhbmQgdmFsdWVzIHRvIGl0XG4gKiBAcGFyYW0ge0FycmF5fSBhdHRyaWJ1dGVzIGFuIGFycmF5IG9mIGFycmF5cyB3aGVyZSBlYWNoIGVsZW1lbnQgaGFzIHRoZSBhdHRyaWJ1dGUsIGFuZCBpdCdzIGFzc29jaWF0ZWQgdmFsdWUgXG4gKiBAcmV0dXJucyBhbiBpbnB1dCBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGlucHV0R2VuZXJhdG9yKGF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKGF0dHJpYnV0ZSA9PiBpbnB1dC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlWzBdLCBhdHRyaWJ1dGVbMV0pKTtcbiAgICByZXR1cm4gaW5wdXQ7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIHBhcmFncmFwaCBlbGVtZW50IGFuZCBmaWxscyBpdCB3aXRoIHRoZSBhcmd1bWVudHMgcHJvdmlkZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGZvcm1cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IG5lZWRlZCB3aXRoaW4gdGhlIDxwPjwvcD4gXG4gKiBAcGFyYW0ge29iamVjdH0gc3BhbkVsZW1lbnRQcmVwcGVuZCBhIGRvbSBlbGVtZW50IHRoYXQgd2Ugd2FudCB0byBhZGQgYmVmb3JlIHRoZSB0ZXh0IHBhcnQgb2YgdGhlIHBhcmFncmFwaFxuICogQHBhcmFtIHtvYmplY3R9IHNwYW5FbGVtZW50QXBwZW5kIGEgZG9tIGVsZW1lbnQgdGhhdCB3ZSB3YW50IHRvIGFkZCBhZnRlciB0aGUgdGV4dCBwYXJ0IG9mIHRoZSBwYXJhZ3JhcGhcbiAqIEByZXR1cm5zIGEgPHA+PC9wPiBlbGVtZW50IHRoYXQgaXMgY3VzdG9taXNlZCBhcyBzcGVjaWZpZWRcbiAqL1xuZnVuY3Rpb24gcGFyYWdyYXBoR2VuZXJhdG9yKGNsYXNzZXMsIHRleHQsIHNwYW5FbGVtZW50UHJlcHBlbmQgPSAnJywgc3BhbkVsZW1lbnRBcHBlbmQgPSAnJykge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRDbGFzc2VzVG9FbGVtZW50KGNsYXNzZXMsIHBhcmFncmFwaCk7XG4gICAgcGFyYWdyYXBoLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgcGFyYWdyYXBoLnByZXBlbmQoc3BhbkVsZW1lbnRQcmVwcGVuZClcbiAgICBwYXJhZ3JhcGguYXBwZW5kKHNwYW5FbGVtZW50QXBwZW5kKVxuICAgIHJldHVybiBwYXJhZ3JhcGg7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBoZWxwIGNob29zZSB0aGUgY29ycmVjdCBjbGFzcyBiYXNlZCBvbiB0aGUgdXYtaW5kZXggbnVtYmVyIHByb3ZpZGVkXG4gKiBAcGFyYW0ge251bWJlcn0gdXZOdW0gdGhlIG51bWJlciB0aGF0IHdlIHdhbnQgdG8gY2hlY2sgd2hldGhlciBvciBub3QgaXQncyB2YWx1ZSBpcyBhIHNhZmUsIGFtYmVyIG9yIGRhbmdlciB2YWx1ZSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgY2xhc3NpZmllcyB0aGUgdmFsdWVcbiAqL1xuZnVuY3Rpb24gY2hlY2tDYXRlZ29yeU9mVXYodXZOdW0pIHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSB1dk51bSA8PSAyOlxuICAgICAgICAgICAgcmV0dXJuICdzYWZlJztcbiAgICAgICAgY2FzZSB1dk51bSA8PSA3OlxuICAgICAgICAgICAgcmV0dXJuICdhbWJlcic7XG4gICAgICAgIGNhc2UgdXZOdW0gPj0gODpcbiAgICAgICAgICAgIHJldHVybiAnZGFuZ2VyJztcbiAgICB9XG59O1xuXG5leHBvcnQgeyBkaXZHZW5lcmF0b3IsIGltZ0dlbmVyYXRvciwgaGVhZGluZ0dlbmVyYXRvciwgYnV0dG9uR2VuZXJhdG9yLCBzcGFuR2VuZXJhdG9yLCBpbnB1dEdlbmVyYXRvciwgZm9ybUdlbmVyYXRvciwgY2hlY2tDYXRlZ29yeU9mVXYsIHBhcmFncmFwaEdlbmVyYXRvciB9IiwiaW1wb3J0IHsgZGl2R2VuZXJhdG9yLCBpbWdHZW5lcmF0b3IsIGhlYWRpbmdHZW5lcmF0b3IsIHNwYW5HZW5lcmF0b3IsIGlucHV0R2VuZXJhdG9yLCBidXR0b25HZW5lcmF0b3IsIGZvcm1HZW5lcmF0b3IgfSBmcm9tIFwiLi9nZW5lcmF0b3JGdW5jdGlvbnNcIjtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgdGhlIHRpdGxlIHNlY3Rpb24gb2YgdGhlIGhlYWRlclxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgdGl0bGUgYW5kIHRoZSBwYWdlIGxvZ29cbiAqL1xuZnVuY3Rpb24gdGl0bGVTZWN0aW9uKCkge1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsndGl0bGUnXSk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKGltZ0dlbmVyYXRvcignLi8uLi9zcmMvYXNzZXRzL3BhZ2UtaWNvbi5wbmcnLCAnYSBjaXJjdWxhciBpY29uIGRlcGljdGluZyBhbGwgNCBzZWFzb25zJywgWydtYWluLWljb24nXSksIGhlYWRpbmdHZW5lcmF0b3IoJ2gxJywgWydwYWdlLXRpdGxlJ10sICdXZWF0aGVyJywgdW5kZWZpbmVkLCBzcGFuR2VuZXJhdG9yKFsndGl0bGUtZW5kJ10sICdXYXRjaCcpKSk7XG4gICAgcmV0dXJuIHRpdGxlQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgdGhlIHNlYXJjaCBiYXIgc2VjdGlvbiBvZiB0aGUgaGVhZGVyXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBzZWFyY2ggYmFyXG4gKi9cbmZ1bmN0aW9uIGhlYWRlckZvcm1TZWN0aW9uKCkge1xuICAgIGNvbnN0IGZvcm0gPSBmb3JtR2VuZXJhdG9yKFsnc2VhcmNoLWZvcm0nXSk7XG4gICAgZm9ybS5hcHBlbmQoaW5wdXRHZW5lcmF0b3IoW1sndHlwZScsICdzZWFyY2gnXSwgWydpZCcsICdzZWFyY2gtYmFyJ10sIFsncGxhY2Vob2xkZXInLCAnU2VhcmNoIGEgbG9jYXRpb24nXSwgWydyZXF1aXJlZCcsIHRydWVdXSksIGltZ0dlbmVyYXRvcignLi8uLi9zcmMvYXNzZXRzL3NlYXJjaC1pY29uLnN2ZycsICdBIG1hZ25pZnlpbmcgZ2xhc3MnLCBbJ3NlYXJjaC1idXR0b24nXSkpO1xuICAgIHJldHVybiBmb3JtO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgdGhlIGJ1dHRvbnMgdXNlZCB0byBjb250cm9sIHdoZXRoZXIgdGhlIHRlbXBlcmF0dXJlIGlzIGRpc3BsYXllZCBpbiBjZWxzaXVzIG9yIGZhaHJlbmhlaXRcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgdHdvIGJ1dHRvbnNcbiAqL1xuZnVuY3Rpb24gaGVhZGVyQnV0dG9ucygpIHtcbiAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnY2hhbmdlLWRlZ3JlZXMnXSk7XG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoYnV0dG9uR2VuZXJhdG9yKFsnY2Vsc2l1cy1idG4nLCAnYnRuJywgJ2FjdGl2ZSddLCAnwrBDJyksIGJ1dHRvbkdlbmVyYXRvcihbJ2ZhaHJlbmhlaXQtYnRuJywgJ2J0biddLCAnwrBGJykpO1xuICAgIHJldHVybiBidXR0b25zQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBoZWFkZXIgd2l0aCBhbGwgb2YgaXRzIGNvbnRlbnRcbiAqIEByZXR1cm5zIEEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoZSBjb250YWlucyBldmVyeXRoaW5nIG5lZWRlZCBpbiB0aGUgaGVhZGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZVNlY3Rpb24oKSwgaGVhZGVyRm9ybVNlY3Rpb24oKSwgaGVhZGVyQnV0dG9ucygpKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufTtcblxuIiwiaW1wb3J0IHsgc3BhbkdlbmVyYXRvciB9IGZyb20gXCIuL2dlbmVyYXRvckZ1bmN0aW9uc1wiO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY29udmVydHMgdGhlIGRhdGUgaW50byB0aGUgR0Igc3R5bGUgb2YgZGF0ZVxuICogQHBhcmFtIHtzdHJpbmcgb3IgRGF0ZX0gZGF0ZSBlaXRoZXIgYSBzdHJpbmcgb3IgRGF0ZSB2ZXJzaW9uIGNhbiBiZSBwcm92aWRlZCBhbmQgdGhpcyBpcyB0aGUgZGF0ZSB3ZSB3YW50IGNvbnZlcnQgaW50byBhbiBJbnRsIGRhdGUgXG4gKiBAcmV0dXJucyBhbiBvYmplY3QgdGhhdCBpcyB0aGUgY29ycmVjdCBmb3JtYXQgb2YgZGF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVTdGFuZGFyZERhdGUoZGF0ZSkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICB9O1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLUdCXCIsIG9wdGlvbnMpLmZvcm1hdChkYXRlLnRvSVNPU3RyaW5nKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiB0YWtlcyBhIGRhdGUgYW5kIGNvbnZlcnRzIGl0IHRvIGVuLUdCIGxvY2FsZSBmb3JtXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZVRvQ29udmVydCBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIGRhdGUgdGhhdCB3ZSB3YW50IHRvIGNvbnZlcnQgaW50byB0aGUgR0Igc3RhbmRhcmQgXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGRpc3BsYXlzIHRoZSBkYXRlIGluIHRoZSBlbi1HQiBsb2NhbGUgZm9ybVxuICovXG5mdW5jdGlvbiBjcmVhdGVTaG9ydFN0YW5kYXJkRGF0ZShkYXRlVG9Db252ZXJ0KSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVUb0NvbnZlcnQpXG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tR0JcIikuZm9ybWF0KGRhdGUuZ2V0VGltZSgpKTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB0byBtYWtlIHRoZSB0aW1lIGhhdmUgYSAwIGF0IHRoZSBzdGFydCBpZiB0aGUgbnVtYmVyIGJlZm9yZSB0aGUgY29sb24gaXMgbm90IGRvdWJsZSBkaWdpdHMgeWV0XG4gKiBAcGFyYW0ge3N0cmluZ30gdGltZSB0aGUgdGltZSB0aGF0IG5lZWRzIHRvIGJlIHBhZGRlZFxuICogQHJldHVybnMgYSBwYWRkZWQgdmVyc2lvbiBvZiB0aGUgdGltZSwgZS5nLiBpZiBpdHMgMToxMSBpdCBnZXRzIGNoYW5nZWQgdG8gMDE6MTFcbiAqL1xuZnVuY3Rpb24gY3JlYXRlU3RhbmRhcmRUaW1lKHRpbWUpIHtcbiAgICByZXR1cm4gdGltZS5wYWRTdGFydCg1LCAwKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiByZXRyaWV2ZXMgdGhlIGNpdHkgdmFsdWUgZnJvbSB0aGUgb2JqIHByb3ZpZGVkXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSAuanNvbigpIHZlcnNpb24gb2YgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBmZXRjaCBjYWxsIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY2l0eSBuYW1lIHByb3ZpZGVkIGJ5IHRoZSBvYmpcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDaXR5KG9iaikge1xuICAgIHJldHVybiBvYmoubG9jYXRpb24ubmFtZTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiByZXRyaWV2ZXMgdGhlIGNvdW50cnkgdmFsdWUgZnJvbSB0aGUgb2JqIHByb3ZpZGVkXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSAuanNvbigpIHZlcnNpb24gb2YgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBmZXRjaCBjYWxsIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY291bnRyeSBuYW1lIHByb3ZpZGVkIGJ5IHRoZSBvYmpcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDb3VudHJ5KG9iaikge1xuICAgIHJldHVybiBvYmoubG9jYXRpb24uY291bnRyeTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiByZXRyaWV2ZXMgdGhlIGRhdGUgYW5kIHRpbWUgdmFsdWUgZnJvbSB0aGUgb2JqIHByb3ZpZGVkXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSAuanNvbigpIHZlcnNpb24gb2YgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBmZXRjaCBjYWxsIFxuICogQHJldHVybnMgYW4gQXJyYXkgdGhhdCBzdG9yZXMgdGhlIGRhdGUgaW4gaW5kZXggMCBhbmQgdGhlIHRpbWUgaW4gaW5kZXggMVxuICovXG5mdW5jdGlvbiByZXRyaWV2ZURhdGVBbmRUaW1lQXJyKG9iaikge1xuICAgIHJldHVybiBvYmoubG9jYXRpb24ubG9jYWx0aW1lLnNwbGl0KCcgJyk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb25zIGZpbmRzIHdoZXRoZXIgdGhlIGNlbHNpdXMgb3IgZmFocmVuaGVpdCBidXR0b24gaXMgYWN0aXZlIHNvIHRoZSByaWdodCBzeW1ib2wgY2FuIGJlIGRpc3BsYXllZFxuICogQHJldHVybnMgYSBzcGFuIGVsZW1lbnQgd2l0aCB0aGUgY29ycmVjdCBzeW1ib2xcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVNZXRob2RPZk1lYXN1cmVtZW50KCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Vsc2l1cy1idG4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm4gc3BhbkdlbmVyYXRvcihbJ21ldGhvZC1vZi1tZWFzdXJlbWVudCddLCAnQycpO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWhyZW5oZWl0LWJ0bicpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybiBzcGFuR2VuZXJhdG9yKFsnbWV0aG9kLW9mLW1lYXN1cmVtZW50J10sICdGJyk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb25zIGZpbmRzIHdoZXRoZXIgdGhlIGNlbHNpdXMgb3IgZmFocmVuaGVpdCBidXR0b24gaXMgYWN0aXZlIHNvIHRoZSByaWdodCBzeW1ib2wgY2FuIGJlIGRpc3BsYXllZFxuICogQHJldHVybnMgYSBib29sZWFuIHZhbHVlIG9mIHdoZXRoZXIgb3Igbm90IHRoZSBtZXRob2Qgb2YgbWVhc3VyZW1lbnQgaXMgY2Vsc2l1c1xuICovXG5mdW5jdGlvbiBpc01ldGhvZE9mTWVhc3VyZW1lbnRDZWxzaXVzKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Vsc2l1cy1idG4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFocmVuaGVpdC1idG4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgd2luZCBkZWdyZWVzIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIHdpbmQgZGVncmVlc1xuICovXG5mdW5jdGlvbiByZXRyaWV2ZVdpbmREZWdyZWVzKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC53aW5kX2RlZ3JlZTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSB3aW5kIHNwZWVkIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIHdpbmQgc3BlZWRcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVXaW5kU3BlZWQob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LndpbmRfbXBoO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGh1bWlkaXR5IGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGh1bWlkaXR5XG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlSHVtaWRpdHkob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50Lmh1bWlkaXR5XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgdXYtaW5kZXggZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgdXYtaW5kZXhcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVVdk51bShvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQudXY7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgdmlzaWJpbGl0eSBkaXN0YW5jZSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSB2aXNpYmlsaXR5IGRpc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlVmlzaWJpbGl0eURpc3RhbmNlKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC52aXNfa207XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgY2xvdWRpbmVzcyBwZXJjZW50YWdlIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGNsb3VkaW5lc3MgcGVyY2VudGFnZVxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUNsb3VkaW5lc3NQZXJjZW50YWdlKG9iaikge1xuICAgIHJldHVybiBvYmouY3VycmVudC5jbG91ZDtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBjaGFuY2Ugb2YgcmFpbiBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBjaGFuY2Ugb2YgcmFpblxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUNoYW5jZU9mUmFpbihvYmopIHtcbiAgICByZXR1cm4gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBzdW5yaXNlIHRpbWUgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgc3VucmlzZSB0aW1lIFxuICovXG5mdW5jdGlvbiByZXRyaWV2ZVN1bnJpc2VUaW1lKG9iaikge1xuICAgIHJldHVybiBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZS5zbGljZSgwLCAtMyk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgc3Vuc2V0IHRpbWUgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgc3Vuc2V0IHRpbWVcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVTdW5zZXRUaW1lKG9iaikge1xuICAgIGNvbnN0IHN1bnNldCA9IG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXQ7XG4gICAgY29uc3Qgc3Vuc2V0SG91ciA9IE51bWJlcihzdW5zZXRbMF0gKyBzdW5zZXRbMV0pO1xuICAgIGNvbnN0IHN1bnNldEhvdXIyNCA9IHN1bnNldEhvdXIgKyAxMjtcbiAgICByZXR1cm4gc3Vuc2V0SG91cjI0ICsgc3Vuc2V0LnNsaWNlKDIsIC0zKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IG1vb24gcGhhc2UgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY3VycmVudCBtb29uIHBoYXNlXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlTW9vblBoYXNlKG9iaikge1xuICAgIHJldHVybiBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8ubW9vbl9waGFzZTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIGltYWdlIGZyb20gdGhlIGFwaSByZXNwb25zZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IHRoYXQgd2Ugd2FudCB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgaW1hZ2VcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVDdXJyZW50VGVtcEltZyhvYmopIHtcbiAgICByZXR1cm4gb2JqLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBmcm9tIHRoZSBhcGkgcmVzcG9uc2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlQ3VycmVudFRlbXAob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LnRlbXBfYztcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIHRlbXBlcmF0dXJlIHRoYXQgaXQgZmVlbHMgbGlrZSBjdXJyZW50bHkgZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBpdCBmZWVscyBsaWtlXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlRmVlbHNMaWtlVGVtcChvYmopIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChOdW1iZXIob2JqLmN1cnJlbnQuZmVlbHNsaWtlX2MpKTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgb3V0ZG9vciBjb25kaXRpb24gZnJvbSB0aGUgYXBpIHJlc3BvbnNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyB0aGUgY3VycmVudCBvdXRkb29yIGNvbmRpdGlvblxuICovXG5mdW5jdGlvbiByZXRyaWV2ZUN1cnJlbnRDb25kaXRpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xufVxuXG4vL1RoZXNlIGZ1bmN0aW9ucyBhcmUgdXNlZCB0byByZXRyaWV2ZSB0aGUgdmFsdWVzIGZvciB0aGUgd2Vla2x5IGZvcmVjYXN0XG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSBudW1iZXIgcmFuZ2luZyBmcm9tIDAtNiBhbmQgdGhlbiByZXR1cm4gdGhlIHdlZWtkYXkgbmFtZVxuICogQHBhcmFtIHtudW1iZXJ9IGRhdGVUb0ZpbmREYXkgYSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBkYXkgb2YgdGhlIHdlZWsgZS5nLiAwIHJlcHJlc2VudHMgU3VuZGF5XG4gKiBAcmV0dXJucyBhIHN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSBjb3JyZXNwb25kaW5nIGRheSBvZiB0aGUgd2Vla1xuICovXG5mdW5jdGlvbiByZXRyaWV2ZURheU9mVGhlV2VlayhkYXRlVG9GaW5kRGF5KSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVUb0ZpbmREYXkpO1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgc3dpdGNoIChkYXkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuICdTdW5kYXknO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gJ01vbmRheSc7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiAnVHVlc2RheSc7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiAnV2VkbmVzZGF5JztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuICdUaHVyc2RheSc7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHJldHVybiAnRnJpZGF5JztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgcmV0dXJuICdTYXR1cmRheSc7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHJldHVybiAnVW5rbm93biBkYXknO1xuICAgIH07XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgZGF0ZSBiYXNlZCBvbiB0aGUgZGF5IHdlIHNwZWNpZmllZCwgYW5kIGZyb20gdGhlIG9iamVjdCB3ZSBwcm92aWRlZFxuICogQHBhcmFtIHtudW1iZXJ9IGRheSB0aGUgZGF5IG9mIHRoZSB3ZWVrXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgZnJvbSB3aGljaCB3ZSBuZWVkIHRvIHJldHJpZXZlIHRoZSBkYXRlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB2YWx1ZSB0aGF0IGNvbnRhaW5zIHRoZSBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlKGRheSwgb2JqKSB7XG4gICAgcmV0dXJuIG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRhdGU7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgbWF4aW11bSB0ZW1wZXJhdHVyZSBiYXNlZCBvbiB0aGUgZGF5IG9mIHRoZSB3ZWVrIHByb3ZpZGVkIGZyb20gdGhlIG9iamVjdCBwcm92aWRlZFxuICogQHBhcmFtIHtudW1iZXJ9IGRheU9mV2VlayB0aGUgZGF5IG9mIHRoZSB3ZWVrXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgZnJvbSB3aGljaCB3ZSBuZWVkIHRvIHJldHJpZXZlIHRoZSBtYXhpbXVtIHRlbXBlcmF0dXJlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSBtYXhpbXVtIHRlbXBlcmF0dXJlIGZvciB0aGF0IGdpdmVuIGRheVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5TWF4VGVtcChkYXlPZldlZWssIG9iaikge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE51bWJlcihvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5T2ZXZWVrXS5kYXkubWF4dGVtcF9jKSk7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBtaW5pbXVtIHRlbXBlcmF0dXJlIGJhc2VkIG9uIHRoZSBkYXkgb2YgdGhlIHdlZWsgcHJvdmlkZWQgZnJvbSB0aGUgb2JqZWN0IHByb3ZpZGVkXG4gKiBAcGFyYW0ge251bWJlcn0gZGF5T2ZXZWVrIHRoZSBkYXkgb2YgdGhlIHdlZWtcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIG5lZWQgdG8gcmV0cmlldmUgdGhlIG1pbmltdW0gdGVtcGVyYXR1cmUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHZhbHVlIHRoYXQgaXMgdGhlIG1pbmltdW0gdGVtcGVyYXR1cmUgZm9yIHRoYXQgZ2l2ZW4gZGF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlNaW5UZW1wKGRheU9mV2Vlaywgb2JqKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTnVtYmVyKG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXlPZldlZWtdLmRheS5taW50ZW1wX2MpKTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBjb3JyZXNwb25kaW5nIHdoZXRoZXIgaW1hZ2UgZnJvbSB0aGUgZGF5IG9mIHRoZSB3ZWVrIHByb3ZpZGVkIGZyb20gdGhlIG9iamVjdCBwcm92aWRlZFxuICogQHBhcmFtIHtudW1iZXJ9IGRheU9mV2VlayB0aGUgZGF5IG9mIHRoZSB3ZWVrXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBvYmplY3QgZnJvbSB3aGljaCB3ZSBuZWVkIHRvIHJldHJpZXZlIHRoZSBkYXRlIGZyb20gXG4gKiBAcmV0dXJucyBhIHN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSBwYXRoIHRvIHRoZSBpbWFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5V2VhdGhlckltYWdlKGRheU9mV2Vlaywgb2JqKSB7XG4gICAgcmV0dXJuIG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXlPZldlZWtdLmRheS5jb25kaXRpb24uaWNvbjtcbn1cblxuLy9UaGVzZSBmdW5jdGlvbnMgYXJlIHVzZWQgZm9yIHRoZSBob3VybHkgd2VhdGhlciBzZWN0aW9uXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gZ2V0cyB0aGUgdGltZSBiYXNlZCBvbiB0aGUgaG91ck51bSB2YWx1ZSwgYW5kIG1hbmlwdWxhdGVzIHRoZSB0aW1lIHRvIGRpc3BsYXkgd2l0aG91dCB0aGUgQU0gb3IgUE1cbiAqIEBwYXJhbSB7bnVtYmVyfSBob3VyTnVtIGEgbnVtYmVyIHRoZSBjb3JyZXNwb25kcyB0byBhIGNlcnRhaW4gaG91ciwgZS5nLiAwIGNvcnJlc3BvbmRzIHRvIDEyYW1cbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIG5lZWQgdG8gcmV0cmlldmUgdGhlIGRhdGUgZnJvbSBcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHZhbHVlIHRoYXQgaXMgdGhlIHRpbWUgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgaG91ck51bSBhcmd1bWVudCBwYXNzZWRcbiAqL1xuZnVuY3Rpb24gZ2V0SG91clRpbWUoaG91ck51bSwgb2JqKSB7XG4gICAgcmV0dXJuIG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2hvdXJOdW1dLnRpbWUuc2xpY2UoLTUpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGdldHMgdGhlIHRlbXBlcmF0dXJlIGJhc2VkIG9uIHRoZSBob3VyTnVtIHZhbHVlLCBhbmQgbWFuaXB1bGF0ZXMgdGhlIHRlbXBlcmF0dXJlIHRvIGJlIHJvdW5kZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBob3VyTnVtIGEgbnVtYmVyIHRoZSBjb3JyZXNwb25kcyB0byBhIGNlcnRhaW4gaG91ciwgZS5nLiAwIGNvcnJlc3BvbmRzIHRvIDEyYW1cbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIG5lZWQgdG8gcmV0cmlldmUgdGhlIGRhdGUgZnJvbSBcbiAqIEByZXR1cm5zIGEgbnVtYmVyIHZhbHVlIHRoYXQgaXMgdGhlIHRlbXBlcmF0dXJlIGluIGNlbHNpdXMgYW5kIGhhcyBiZWVuIHJvdW5kZWRcbiAqL1xuZnVuY3Rpb24gZ2V0SG91clRlbXAoaG91ck51bSwgb2JqKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTnVtYmVyKG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2hvdXJOdW1dLnRlbXBfYykpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGdldHMgdGhlIHdlYXRoZXIgZGVzY3JpcHRpb24gYmFzZWQgb24gdGhlIGhvdXJOdW0gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBob3VyTnVtIGEgbnVtYmVyIHRoZSBjb3JyZXNwb25kcyB0byBhIGNlcnRhaW4gaG91ciwgZS5nLiAwIGNvcnJlc3BvbmRzIHRvIDEyYW1cbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIG5lZWQgdG8gcmV0cmlldmUgdGhlIGRhdGUgZnJvbSBcbiAqIEByZXR1cm5zIGFzdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgd2VhdGhlciBjb25kaXRpb25zIGF0IHRoYXQgY2VydGFpbiBob3VyXG4gKi9cbmZ1bmN0aW9uIGdldEhvdXJUZW1wRGVzY3JpcHRpb24oaG91ck51bSwgb2JqKSB7XG4gICAgcmV0dXJuIG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2hvdXJOdW1dLmNvbmRpdGlvbi50ZXh0O1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGdldHMgdGhlIGNvcnJlY3QgaWNvbiBiYXNlZCBvbiB0aGUgaG91ck51bSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGhvdXJOdW0gYSBudW1iZXIgdGhlIGNvcnJlc3BvbmRzIHRvIGEgY2VydGFpbiBob3VyLCBlLmcuIDAgY29ycmVzcG9uZHMgdG8gMTJhbVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgb2JqZWN0IGZyb20gd2hpY2ggd2UgbmVlZCB0byByZXRyaWV2ZSB0aGUgZGF0ZSBmcm9tIFxuICogQHJldHVybnMgYSBzdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcGF0aCB0byB0aGUgaW1hZ2UgdGhhdCBjb3JyZXNwb25kcyB3aXRoIHRoZSB3ZWF0aGVyIGZvciB0aGF0IGhvdXJcbiAqL1xuZnVuY3Rpb24gZ2V0SG91clRlbXBJY29uKGhvdXJOdW0sIG9iaikge1xuICAgIHJldHVybiBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltob3VyTnVtXS5jb25kaXRpb24uaWNvbjtcbn07XG5cbmV4cG9ydCB7IGdldEhvdXJUaW1lLCBnZXRIb3VyVGVtcCwgZ2V0SG91clRlbXBEZXNjcmlwdGlvbiwgZ2V0SG91clRlbXBJY29uLCBjcmVhdGVTaG9ydFN0YW5kYXJkRGF0ZSwgcmV0cmlldmVEYXlPZlRoZVdlZWssIHJldHJpZXZlQ3VycmVudENvbmRpdGlvbiwgcmV0cmlldmVDdXJyZW50VGVtcCwgcmV0cmlldmVDdXJyZW50VGVtcEltZywgcmV0cmlldmVGZWVsc0xpa2VUZW1wLCByZXRyaWV2ZVN1bnNldFRpbWUsIHJldHJpZXZlTW9vblBoYXNlLCByZXRyaWV2ZVN1bnJpc2VUaW1lLCByZXRyaWV2ZUNoYW5jZU9mUmFpbiwgcmV0cmlldmVDbG91ZGluZXNzUGVyY2VudGFnZSwgcmV0cmlldmVWaXNpYmlsaXR5RGlzdGFuY2UsIHJldHJpZXZlVXZOdW0sIGNyZWF0ZVN0YW5kYXJkRGF0ZSwgY3JlYXRlU3RhbmRhcmRUaW1lLCByZXRyaWV2ZUNpdHksIHJldHJpZXZlQ291bnRyeSwgcmV0cmlldmVEYXRlQW5kVGltZUFyciwgcmV0cmlldmVNZXRob2RPZk1lYXN1cmVtZW50LCBpc01ldGhvZE9mTWVhc3VyZW1lbnRDZWxzaXVzLCByZXRyaWV2ZVdpbmREZWdyZWVzLCByZXRyaWV2ZVdpbmRTcGVlZCwgcmV0cmlldmVIdW1pZGl0eSB9IiwiaW1wb3J0IHsgZGl2R2VuZXJhdG9yLCBoZWFkaW5nR2VuZXJhdG9yLCBpbWdHZW5lcmF0b3IsIHBhcmFncmFwaEdlbmVyYXRvciwgc3BhbkdlbmVyYXRvciB9IGZyb20gXCIuL2dlbmVyYXRvckZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2hvcnRTdGFuZGFyZERhdGUsIGlzTWV0aG9kT2ZNZWFzdXJlbWVudENlbHNpdXMsIHJldHJpZXZlRGF5T2ZUaGVXZWVrLCBnZXREYXRlLCBnZXREYXlNYXhUZW1wLCBnZXREYXlNaW5UZW1wLCBnZXREYXlXZWF0aGVySW1hZ2UgfSBmcm9tIFwiLi9yZXRyaWV2ZUluZm9ybWF0aW9uXCI7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiB0YWtlcyBhbGwgZGFpbHktd2VhdGhlciBkaXZzIGFuZCBhcHBlbmRzIHRoZW0gdG8gZGFpbHktd2VhdGhlci1jb250YWluZXJcbiAqIEBwYXJhbSB7QXJyYXl9IGFyck9mRGF5cyBhbiBhcnJheSBvZiBhbGwgdGhlIGRheXMgdGhhdCBuZWVkIHRvIGJlIGFwcGVuZGVkIGFuZCBkaXNwbGF5ZWQsIHRoZXJlIHNob3VsZCBiZSA3IGluIHRvdGFsXG4gKiBAcmV0dXJucyBhIERPTSBlbGVtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIHdlYXRoZXIgaW5mb3JtYXRpb24gZm9yIHRoZSBjdXJyZW50IGFuZCBuZXh0IHNpeCBkYXlzXG4gKi9cbmZ1bmN0aW9uIGRhaWx5V2VhdGhlclNlY3Rpb24oYXJyT2ZEYXlzKSB7XG4gICAgY29uc3QgZGFpbHlXZWF0aGVyU2VjdGlvbkNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2RhaWx5LXdlYXRoZXItY29udGFpbmVyJ10pO1xuICAgIGRhaWx5V2VhdGhlclNlY3Rpb25Db250YWluZXIuYXBwZW5kKC4uLmFyck9mRGF5cyk7XG4gICAgcmV0dXJuIGRhaWx5V2VhdGhlclNlY3Rpb25Db250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb25zIHB1dHMgdG9nZXRoZXIgYWxsIHRoZSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBkaXNwbGF5IHRoZSB3ZWF0aGVyIGZvciBhbiBpbmRpdmlkdWFsIGRheVxuICogQHBhcmFtIHtudW1iZXJ9IGRheU51bSB0aGUgbnVtYmVyIG9mIHRoZSBkYXkgdGhlIGNvbnRhaW5lciBpcyBnb2luZyB0byBiZSBmb3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXlJbmZvIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgZGV0YWlscyBhYm91dCB0aGUgZGF5XG4gKiBAcGFyYW0ge29iamVjdH0gd2VhdGhlckRldGFpbHMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBkZXRhaWxzIGFib3VidCB0aGUgZGF5J3Mgd2VhdGhlclxuICogQHBhcmFtIHtzdHJpbmd9IGRheVdlYXRoZXJJbWcgYSBzdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcGF0aCB0byB0aGUgd2VhdGhlciBpbWFnZSBmb3IgdGhhdCBkYXlcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgbWFrZXMgdXAgb25lIG9mIHRoZSBkYXlzIHRoYXQgaXMgZ29pbmcgdG8gYmUgZGlzcGxheWVkXG4gKi9cbmZ1bmN0aW9uIGRheVdlYXRoZXIoZGF5TnVtLCBkYXlJbmZvLCB3ZWF0aGVyRGV0YWlscywgZGF5V2VhdGhlckltZykge1xuICAgIGNvbnN0IGRhaWx5V2VhdGhlckNvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2RhaWx5LXdlYXRoZXInLCBgZGF5LSR7ZGF5TnVtfWBdKTtcbiAgICBkYWlseVdlYXRoZXJDb250YWluZXIuYXBwZW5kKGRheUluZm8sIHdlYXRoZXJEZXRhaWxzLCBpbWdHZW5lcmF0b3IoZGF5V2VhdGhlckltZywgJycsIFtdKSk7XG4gICAgcmV0dXJuIGRhaWx5V2VhdGhlckNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbidzIGpvYiBpcyB0byBjcmVhdGUgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgaW5mb3JtYXRpb24gcmVsYXRlZCB0byB0aGUgZGF5IHdlIHBhc3NlZCBpbiwgc3VjaCBhcyB0aGUgZGF5IG9mIHRoZSB3ZWVrLCBhbmQgcmVwcmVzZW50aW5nIHRoZSBkYXRlIG9uIHNjcmVlblxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGUgdGhlIGRhdGUgd2Ugd2FudCB0byBkaXNwbGF5IFxuICogQHJldHVybnMgYSBET00gZWxlbWVudCBvYmplY3QgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZGF0ZSB3ZSBwYXNzZWQgaW5cbiAqL1xuZnVuY3Rpb24gZGF5SW5mb3JtYXRpb24oZGF0ZSkge1xuICAgIGNvbnN0IGRheUluZm9ybWF0aW9uQ29udGFpbmVyID0gZGl2R2VuZXJhdG9yKFsnZGF5LWluZm9ybWF0aW9uJ10pO1xuICAgIGRheUluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nR2VuZXJhdG9yKCdoMicsIFsnZGF5LW9mLXRoZS13ZWVrJ10sIHJldHJpZXZlRGF5T2ZUaGVXZWVrKGRhdGUpKSwgaGVhZGluZ0dlbmVyYXRvcignaDInLCBbJ2RhdGUtb2YtdGhlLXdlZWsnXSwgY3JlYXRlU2hvcnRTdGFuZGFyZERhdGUoZGF0ZSkpKTtcbiAgICByZXR1cm4gZGF5SW5mb3JtYXRpb25Db250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24ncyBqb2IgaXMgdG8gZGlzcGxheWVkIHRoZSB0ZW1wZXJhdHVyZSBiYXNlZCBvbiB0aGUgdHdvIGFyZ3VtZW50cyBwcm92aWRlZFxuICogQHBhcmFtIHtzdHJpbmd9IGRheU1heFRlbXAgdGhlIG1heGltdW0gdGVtcGVyYXR1cmUgZm9yIHRoYXQgZGF5XG4gKiBAcGFyYW0ge3N0cmluZ30gZGF5TWluVGVtcCB0aGUgbWluaW11bSB0ZW1wZXJhdHVyZSBmb3IgdGhhdCBkYXlcbiAqIEByZXR1cm5zIGEgRE9NIGVsZW1lbnQgb2JqZWN0IHRoYXQgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRlbXBlcmF0dXJlXG4gKi9cbmZ1bmN0aW9uIGRheVdlYXRoZXJEZXRhaWxzKGRheU1heFRlbXAsIGRheU1pblRlbXApIHtcbiAgICBjb25zdCB3ZWF0aGVyRGV0YWlsc0NvbnRhaW5lciA9IGRpdkdlbmVyYXRvcihbJ2RheS13ZWF0aGVyLWRldGFpbHMnXSk7XG4gICAgY29uc3QgbWF4V2VhdGhlclNwYW4gPSBzcGFuR2VuZXJhdG9yKFsnZGF5LW9mLXRoZS13ZWVrLW1heC10ZW1wJ10sIGRheU1heFRlbXApO1xuICAgIGNvbnN0IG1pbldlYXRoZXJTcGFuID0gc3BhbkdlbmVyYXRvcihbJ2RheS1vZi10aGUtd2Vlay1taW4tdGVtcCddLCBkYXlNaW5UZW1wKTtcbiAgICBjb25zdCB3ZWF0aGVyU3ltYm9sID0gc3BhbkdlbmVyYXRvcihbJ21ldGhvZC1vZi1tZWFzdXJlbWVudCddLCAnQycpO1xuICAgIGNvbnN0IHdlYXRoZXJTeW1ib2xUd28gPSBzcGFuR2VuZXJhdG9yKFsnbWV0aG9kLW9mLW1lYXN1cmVtZW50J10sICdDJyk7XG4gICAgd2VhdGhlckRldGFpbHNDb250YWluZXIuYXBwZW5kKHBhcmFncmFwaEdlbmVyYXRvcihbJ21heC10ZW1wJ10sICfCsCcsIG1heFdlYXRoZXJTcGFuLCB3ZWF0aGVyU3ltYm9sKSwgcGFyYWdyYXBoR2VuZXJhdG9yKFsnbWluLXRlbXAnXSwgJ8KwJywgbWluV2VhdGhlclNwYW4sIHdlYXRoZXJTeW1ib2xUd28pKTtcbiAgICByZXR1cm4gd2VhdGhlckRldGFpbHNDb250YWluZXI7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2FsbHMgYWxsIHRoZSByZWxldmFudCBmdW5jdGlvbnMgYW5kIGNyZWF0ZXMgYSBET00gZWxlbWVudCByZXByZXNlbnRpbmcgYSBkYXkgYW5kIGl0cyByZXNwZWN0aXZlIHdlYXRoZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG9iamVjdCBmcm9tIHdoaWNoIHdlIHdpbGwgYmUgcmV0cmlldmluZyB2YWx1ZXMgZnJvbSBcbiAqIEByZXR1cm5zIGFuIGFycmF5IHRoYXQgY29udGFpbnMgYWxsIHRoZSBET00gZWxlbWVudHMgdGhhdCBuZWVkIHRvIGJlIGRpc3BsYXllZFxuICovXG5mdW5jdGlvbiBjcmVhdGVBbGxEYXlzVG9EaXNwbGF5KG9iaikge1xuICAgIGNvbnN0IGFyck9mRGF5cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGFyck9mRGF5cy5wdXNoKGRheVdlYXRoZXIoaSwgZGF5SW5mb3JtYXRpb24oZ2V0RGF0ZShpLCBvYmopKSwgZGF5V2VhdGhlckRldGFpbHMoZ2V0RGF5TWF4VGVtcChpLCBvYmopLCBnZXREYXlNaW5UZW1wKGksIG9iaikpLCBnZXREYXlXZWF0aGVySW1hZ2UoaSwgb2JqKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIGFyck9mRGF5cztcbn1cblxuXG5leHBvcnQgeyBjcmVhdGVBbGxEYXlzVG9EaXNwbGF5LCBkYWlseVdlYXRoZXJTZWN0aW9uLCBkYXlXZWF0aGVyLCBkYXlJbmZvcm1hdGlvbiwgZGF5V2VhdGhlckRldGFpbHMgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBoZWFkZXIgfSBmcm9tICcuL2hlYWRlclNlY3Rpb24nO1xuaW1wb3J0IHsgb25Mb2FkRGVmYXVsdFdlYXRoZXIsIGN1cnJlbnREYXlJbmZvcm1hdGlvbkNvbnRhaW5lciB9IGZyb20gJy4vY3VycmVudFRlbXBlcmF0dXJlU2VjdGlvbic7XG5pbXBvcnQgeyBkaXZHZW5lcmF0b3IgfSBmcm9tICcuL2dlbmVyYXRvckZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBjYXJvdXNlbEJ1dHRvbnMgfSBmcm9tICcuL2Nhcm91c2VsQnV0dG9ucyc7XG5cbmNvbnN0IGRhaWx5SG91cmx5V2VhdGhlciA9IGRpdkdlbmVyYXRvcihbJ2RhaWx5LWhvdXJseS13ZWF0aGVyLWNhcm91c2VsJ10pOyAvL3RoZSBkaXYgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGRhaWx5IHdlYXRoZXIsIGFuZCB0aGUgaG91cmx5XG5kYWlseUhvdXJseVdlYXRoZXIuYXBwZW5kKGNhcm91c2VsQnV0dG9ucygpKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyKCksIGN1cnJlbnREYXlJbmZvcm1hdGlvbkNvbnRhaW5lciwgZGFpbHlIb3VybHlXZWF0aGVyKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkRGVmYXVsdFdlYXRoZXIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==