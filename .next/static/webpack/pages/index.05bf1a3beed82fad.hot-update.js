"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Chat */ \"./src/components/Chat/index.tsx\");\n/* harmony import */ var _components_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Auth */ \"./src/components/Auth/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    console.log(session);\n    const reloadSession = ()=>{};\n    console.log(\"here is data : \", session);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        children: (session === null || session === void 0 ? void 0 : session.user.email) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chat__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/pages/index.tsx\",\n            lineNumber: 19,\n            columnNumber: 29\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Auth__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            session: session,\n            reloadSession: reloadSession\n        }, void 0, false, {\n            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/pages/index.tsx\",\n            lineNumber: 19,\n            columnNumber: 39\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/pages/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Home, \"weL5k9Lo7GT6WIkgj1g8kplmKyA=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFZ0I7QUFDakI7QUFDQTtBQUVyQyxNQUFNSSxPQUFnQixJQUFNOztJQUMzQixNQUFNLEVBQUNDLE1BQU9DLFFBQU8sRUFBQyxHQUFHTCwyREFBVUE7SUFDckNNLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFVixNQUFNRyxnQkFBZ0IsSUFBSSxDQUUxQjtJQUVBRixRQUFRQyxHQUFHLENBQUMsbUJBQW1CRjtJQUUvQixxQkFDQSw4REFBQ04saURBQUdBO2tCQUNBTSxDQUFBQSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNJLElBQUksQ0FBQ0MsS0FBSyxrQkFBRyw4REFBQ1Qsd0RBQUlBOzs7O3NDQUFLLDhEQUFDQyx3REFBSUE7WUFBQ0csU0FBU0E7WUFBU0csZUFBZUE7Ozs7O3FCQUFnQjs7Ozs7O0FBRzdGO0dBZk9MOztRQUNvQkgsdURBQVVBOzs7S0FEOUJHOztBQTRCUCwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IE5leHRQYWdlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHtnZXRTZXNzaW9uICwgdXNlU2Vzc2lvbn0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGF0XCI7XG5pbXBvcnQgQXV0aCBmcm9tIFwiLi4vY29tcG9uZW50cy9BdXRoXCI7XG5cbiBjb25zdCBIb21lOiBOZXh0UGFnZSA9KCkgPT4ge1xuICBjb25zdCB7ZGF0YSA6IHNlc3Npb259ID0gdXNlU2Vzc2lvbigpO1xuY29uc29sZS5sb2coc2Vzc2lvbik7XG5cbiAgY29uc3QgcmVsb2FkU2Vzc2lvbiA9ICgpPT57XG5cbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiaGVyZSBpcyBkYXRhIDogXCIgLHNlc3Npb24pO1xuICBcbiAgcmV0dXJuIChcbiAgPEJveD5cbiAgICB7IHNlc3Npb24/LnVzZXIuZW1haWwgPyA8Q2hhdC8+IDogPEF1dGggc2Vzc2lvbj17c2Vzc2lvbn0gcmVsb2FkU2Vzc2lvbj17cmVsb2FkU2Vzc2lvbn0vPn1cbiAgPC9Cb3g+XG4gIClcbn1cblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKCBjb250ZXh0OiBOZXh0UGFnZUNvbnRleHQgKXtcblxuY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dCk7XG5cbnJldHVybiB7IHByb3BzOnsgc2Vzc2lvbiB9LH07XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4gIl0sIm5hbWVzIjpbIkJveCIsInVzZVNlc3Npb24iLCJDaGF0IiwiQXV0aCIsIkhvbWUiLCJkYXRhIiwic2Vzc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJyZWxvYWRTZXNzaW9uIiwidXNlciIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});