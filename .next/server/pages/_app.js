(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rangeslider */ "react-rangeslider");
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-rangeslider/lib/index.css */ "./node_modules/react-rangeslider/lib/index.css");
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-scroll-position */ "use-scroll-position");
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(use_scroll_position__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/skin/skin-1.css */ "./css/skin/skin-1.css");
/* harmony import */ var _css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/switcher.css */ "./styles/switcher.css");
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_switcher_css__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "E:\\Work\\32950742-samar-creative-agency-react-template\\React-Samar-v1.0-8_July-2021\\Package\\samar1\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp({
  Component,
  pageProps
}) {
  const {
    0: toggle1,
    1: setToggle1
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: body_,
    1: setbody_
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: header,
    1: setHeader
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("fixed");
  const {
    0: header_,
    1: setHeader_
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setbody_(document.querySelector("body"));
    setHeader_(document.getElementsByClassName("main-bar-wraper"));
  }, []);
  let scrollPosition = use_scroll_position__WEBPACK_IMPORTED_MODULE_6___default()();

  function toggle() {
    setToggle1(!toggle1);
  }

  const chageHeader = value => {
    setHeader(value);

    if (value === "fixed") {
      header_[0].classList.add("sticky-header");
      header_[0].classList.remove("sticky-no");
    } else {
      header_[0].classList.add("sticky-no");
      header_[0].classList.remove("sticky-header");
      header_[0].classList.remove("is-fixed");
    }
  };

  const onChange = value => {
    setSliderValu(value);
    body_.style.padding = value + "px";
  };

  header === "fixed" && scrollPosition > 10 ? header_ && header_[0].classList.add("is-fixed") : header_ && header_[0].classList.remove("is-fixed");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "page-wraper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "https://1.envato.market/VLMVO",
      target: "_blank",
      className: "bt-buy-now theme-btn",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "ti-shopping-cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Buy Now"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 4
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "https://w3itexperts.ticksy.com",
      target: "_blank",
      className: "bt-support-now theme-btn",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "ti-headphone-alt"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Support"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 4
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "scroltop icon-up",
        type: "button",
        style: {
          display: "inline-block"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fa fa-arrow-up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./css/skin/skin-1.css":
/*!*****************************!*\
  !*** ./css/skin/skin-1.css ***!
  \*****************************/
/***/ (function() {



/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-rangeslider/lib/index.css":
/*!******************************************************!*\
  !*** ./node_modules/react-rangeslider/lib/index.css ***!
  \******************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (function() {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "./styles/switcher.css":
/*!*****************************!*\
  !*** ./styles/switcher.css ***!
  \*****************************/
/***/ (function() {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-rangeslider":
/*!************************************!*\
  !*** external "react-rangeslider" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-rangeslider");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "use-scroll-position":
/*!**************************************!*\
  !*** external "use-scroll-position" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("use-scroll-position");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1hci8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwicmVhY3QtcmFuZ2VzbGlkZXJcIiIsIndlYnBhY2s6Ly9zYW1hci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwidXNlLXNjcm9sbC1wb3NpdGlvblwiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidG9nZ2xlMSIsInNldFRvZ2dsZTEiLCJ1c2VTdGF0ZSIsImJvZHlfIiwic2V0Ym9keV8iLCJoZWFkZXIiLCJzZXRIZWFkZXIiLCJoZWFkZXJfIiwic2V0SGVhZGVyXyIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzY3JvbGxQb3NpdGlvbiIsInVzZVNjcm9sbFBvc2l0aW9uIiwidG9nZ2xlIiwiY2hhZ2VIZWFkZXIiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9uQ2hhbmdlIiwic2V0U2xpZGVyVmFsdSIsInN0eWxlIiwicGFkZGluZyIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDeEMsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQywrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLCtDQUFRLEVBQWxDO0FB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QUFHLG1CQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQkU7QUFBQSxrQkFERjtBQWlDRDs7QUFFRCwrREFBZTVCLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXJhbmdlc2xpZGVyXCI7XHJcbmltcG9ydCBcInJlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsUG9zaXRpb24gZnJvbSBcInVzZS1zY3JvbGwtcG9zaXRpb25cIjtcclxuaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvc2tpbi9za2luLTEuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvc3dpdGNoZXIuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuXHRjb25zdCBbdG9nZ2xlMSwgc2V0VG9nZ2xlMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2JvZHlfLCBzZXRib2R5X10gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShcImZpeGVkXCIpO1xyXG5cdGNvbnN0IFtoZWFkZXJfLCBzZXRIZWFkZXJfXSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRib2R5Xyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSk7XHJcblx0XHRzZXRIZWFkZXJfKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWJhci13cmFwZXJcIikpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0bGV0IHNjcm9sbFBvc2l0aW9uID0gdXNlU2Nyb2xsUG9zaXRpb24oKTtcclxuXHRmdW5jdGlvbiB0b2dnbGUoKSB7XHJcblx0XHRzZXRUb2dnbGUxKCF0b2dnbGUxKTtcclxuXHR9XHJcbiBcclxuICBjb25zdCBjaGFnZUhlYWRlciA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0SGVhZGVyKHZhbHVlKTtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJmaXhlZFwiKSB7XHJcbiAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcInN0aWNreS1oZWFkZXJcIik7XHJcbiAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS1ub1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcInN0aWNreS1ub1wiKTtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LWhlYWRlclwiKTtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZml4ZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIHNldFNsaWRlclZhbHUodmFsdWUpO1xyXG4gICAgYm9keV8uc3R5bGUucGFkZGluZyA9IHZhbHVlICsgXCJweFwiO1xyXG4gIH07XHJcblxyXG4gIGhlYWRlciA9PT0gXCJmaXhlZFwiICYmIHNjcm9sbFBvc2l0aW9uID4gMTBcclxuICAgID8gaGVhZGVyXyAmJiBoZWFkZXJfWzBdLmNsYXNzTGlzdC5hZGQoXCJpcy1maXhlZFwiKVxyXG4gICAgOiBoZWFkZXJfICYmIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWZpeGVkXCIpO1xyXG5cdFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcGVyXCI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHRcdFxyXG5cdFx0PGFcclxuXHRcdFx0aHJlZj1cImh0dHBzOi8vMS5lbnZhdG8ubWFya2V0L1ZMTVZPXCJcclxuXHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0Y2xhc3NOYW1lPVwiYnQtYnV5LW5vdyB0aGVtZS1idG5cIlxyXG5cdFx0PlxyXG5cdFx0XHQ8aSBjbGFzc05hbWU9XCJ0aS1zaG9wcGluZy1jYXJ0XCIgLz5cclxuXHRcdFx0PHNwYW4+QnV5IE5vdzwvc3Bhbj5cclxuXHRcdDwvYT5cclxuXHRcdDxhXHJcblx0XHRcdGhyZWY9XCJodHRwczovL3czaXRleHBlcnRzLnRpY2tzeS5jb21cIlxyXG5cdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRjbGFzc05hbWU9XCJidC1zdXBwb3J0LW5vdyB0aGVtZS1idG5cIlxyXG5cdFx0PlxyXG5cdFx0XHQ8aSBjbGFzc05hbWU9XCJ0aS1oZWFkcGhvbmUtYWx0XCIgLz5cclxuXHRcdFx0PHNwYW4+U3VwcG9ydDwvc3Bhbj5cclxuXHRcdDwvYT5cclxuXHRcdDxhIGhyZWY9XCIjdG9wXCI+XHJcblx0XHRcdDxidXR0b25cclxuXHRcdFx0ICBjbGFzc05hbWU9XCJzY3JvbHRvcCBpY29uLXVwXCJcclxuXHRcdFx0ICB0eXBlPVwiYnV0dG9uXCJcclxuXHRcdFx0ICBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19XHJcblx0XHRcdD5cclxuXHRcdFx0ICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy11cFwiIC8+XHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0PC9hPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yYW5nZXNsaWRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1c2Utc2Nyb2xsLXBvc2l0aW9uXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9