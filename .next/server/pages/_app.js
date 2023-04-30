"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/chakra/theme.ts":
/*!*****************************!*\
  !*** ./src/chakra/theme.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: false\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    config\n}, {\n    colors: {\n        brand: {\n            100: \"#FFEDD5\",\n            200: \"#FED7AA\",\n            300: \"#FDBA74\",\n            400: \"#FB923C\",\n            500: \"#F97316\",\n            600: \"#EA580C\",\n            700: \"#C2410C\",\n            800: \"#9A3412\",\n            900: \"#7C2D12\"\n        }\n    },\n    styles: {\n        global: ()=>({\n                body: {\n                    bg: \"blackAlpha.900\",\n                    fontFamily: \"Courier New, monospace\"\n                }\n            })\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hha3JhL3RoZW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdFO0FBRWhFLE1BQU1DLFNBQXNCO0lBQ3hCQyxrQkFBa0I7SUFDbEJDLG9CQUFvQixLQUFLO0FBQzdCO0FBR08sTUFBTUMsUUFBUUosNkRBQVdBLENBQzlCO0lBQUVDO0FBQU8sR0FDVDtJQUNFSSxRQUFRO1FBQ05DLE9BQU87WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7UUFDUDtJQUNGO0lBQ0FDLFFBQVE7UUFDTkMsUUFBUSxJQUFLO2dCQUNYQyxNQUFNO29CQUNKQyxJQUFJO29CQUNKQyxZQUFZO2dCQUNkO1lBQ0Y7SUFDSjtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jaGFrcmEvdGhlbWUudHM/YTllZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSwgdHlwZSBUaGVtZUNvbmZpZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmNvbnN0IGNvbmZpZzogVGhlbWVDb25maWcgPSB7XG4gICAgaW5pdGlhbENvbG9yTW9kZTogXCJkYXJrXCIsXG4gICAgdXNlU3lzdGVtQ29sb3JNb2RlOiBmYWxzZVxufVxuXG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKFxuICB7IGNvbmZpZyB9ICxcbiAge1xuICAgIGNvbG9ycyA6e1xuICAgICAgYnJhbmQ6IHtcbiAgICAgICAgMTAwOiBcIiNGRkVERDVcIixcbiAgICAgICAgMjAwOiBcIiNGRUQ3QUFcIixcbiAgICAgICAgMzAwOiBcIiNGREJBNzRcIixcbiAgICAgICAgNDAwOiBcIiNGQjkyM0NcIixcbiAgICAgICAgNTAwOiBcIiNGOTczMTZcIixcbiAgICAgICAgNjAwOiBcIiNFQTU4MENcIixcbiAgICAgICAgNzAwOiBcIiNDMjQxMENcIixcbiAgICAgICAgODAwOiBcIiM5QTM0MTJcIixcbiAgICAgICAgOTAwOiBcIiM3QzJEMTJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzdHlsZXM6IHtcbiAgICAgIGdsb2JhbDogKCk9Pih7XG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICBiZzogXCJibGFja0FscGhhLjkwMFwiLFxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQ291cmllciBOZXcsIG1vbm9zcGFjZVwiLFxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59KSJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJ0aGVtZSIsImNvbG9ycyIsImJyYW5kIiwic3R5bGVzIiwiZ2xvYmFsIiwiYm9keSIsImJnIiwiZm9udEZhbWlseSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/chakra/theme.ts\n");

/***/ }),

/***/ "./src/graphql/apollo-client.ts":
/*!**************************************!*\
  !*** ./src/graphql/apollo-client.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({\n    uri: \"http://localhost:4000/graphql\",\n    credentials: \"include\"\n});\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    link: httpLink,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9hcG9sbG8tY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1RTtBQUV2RSxNQUFNRyxXQUFXLElBQUlGLG9EQUFRQSxDQUFDO0lBQzFCRyxLQUFLO0lBQ0xDLGFBQWE7QUFDakI7QUFFTyxNQUFNQyxTQUFTLElBQUlOLHdEQUFZQSxDQUFDO0lBQ25DTyxNQUFNSjtJQUNOSyxPQUFPLElBQUlOLHlEQUFhQTtBQUM1QixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvZ3JhcGhxbC9hcG9sbG8tY2xpZW50LnRzPzU2NTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5jb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayh7XG4gICAgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXG4gICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBsaW5rOiBodHRwTGluayxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbn0pIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkh0dHBMaW5rIiwiSW5NZW1vcnlDYWNoZSIsImh0dHBMaW5rIiwidXJpIiwiY3JlZGVudGlhbHMiLCJjbGllbnQiLCJsaW5rIiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/graphql/apollo-client.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chakra/theme */ \"./src/chakra/theme.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _graphql_apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/apollo-client */ \"./src/graphql/apollo-client.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _chakra_theme__WEBPACK_IMPORTED_MODULE_3__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _chakra_theme__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction App({ Component , pageProps: { session , ...pageProps }  }) {\n    console.log(\"session : \" + JSON.stringify(session) + \"\\n page props : \" + JSON.stringify(pageProps));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloProvider, {\n        client: _graphql_apollo_client__WEBPACK_IMPORTED_MODULE_5__.client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n            session: session,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {\n                theme: _chakra_theme__WEBPACK_IMPORTED_MODULE_3__.theme,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/pages/_app.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 10\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/pages/_app.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/pages/_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFFRTtBQUNWO0FBQ1E7QUFDRTtBQUVsQyxTQUFTSyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsV0FBVyxFQUFDQyxRQUFPLEVBQUcsR0FBR0QsV0FBVSxHQUFZLEVBQUU7SUFDeEZFLFFBQVFDLEdBQUcsQ0FBQyxlQUFjQyxLQUFLQyxTQUFTLENBQUNKLFdBQVUscUJBQXFCRyxLQUFLQyxTQUFTLENBQUNMO0lBQ3ZGLHFCQUNFLDhEQUFDSiwwREFBY0E7UUFBQ0MsUUFBUUEsMERBQU1BO2tCQUM1Qiw0RUFBQ0osNERBQWVBO1lBQUNRLFNBQVNBO3NCQUN2Qiw0RUFBQ1AsNERBQWNBO2dCQUFDQyxPQUFPQSxnREFBS0E7MEJBQ3hCLDRFQUFDSTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZXNzaW9uUHJvdmlkZXJ9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vY2hha3JhL3RoZW1lJ1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL2dyYXBocWwvYXBvbGxvLWNsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHtzZXNzaW9uICwgLi4ucGFnZVByb3BzfSB9OiBBcHBQcm9wcykge1xuICBjb25zb2xlLmxvZyhcInNlc3Npb24gOiBcIisgSlNPTi5zdHJpbmdpZnkoc2Vzc2lvbikgK1wiXFxuIHBhZ2UgcHJvcHMgOiBcIiArIEpTT04uc3RyaW5naWZ5KHBhZ2VQcm9wcykgIClcbiAgcmV0dXJuKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gIClcbn07XG4iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwiQ2hha3JhUHJvdmlkZXIiLCJ0aGVtZSIsIkFwb2xsb1Byb3ZpZGVyIiwiY2xpZW50IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();