"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/db */ \"(app-pages-browser)/./lib/db.ts\");\n/* harmony import */ var _PlayerCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerCard */ \"(app-pages-browser)/./src/app/PlayerCard.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nasync function getPlayers() {\n    const players = await _lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].player.findMany();\n    return players;\n}\nasync function Home() {\n    _s();\n    const [boardPointer, setBoardPointer] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [playerPointer, setPlayerPointer] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const players = await getPlayers();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: \"Court div\"\n                    }, void 0, false, {\n                        fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-rose-300 p-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-rows-4 grid-cols-4 *:border-2 *:rounded-md gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                                            lineNumber: 25,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                        fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                        fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        placeholder: \"이름 혹은 전화번호 네자리\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: \"참가\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    players[0].name,\n                    players[0].avatar ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: players[0].avatar,\n                        alt: \"avatar\",\n                        width: 100,\n                        height: 100\n                    }, void 0, false, {\n                        fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this) : players[0].avatar\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/iotofall/Desktop/mintonofall2024/src/app/page.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ZShSkJ4yQ9hc8tzv8ib5fc47iF4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ0Q7QUFDUTtBQUNMO0FBRWpDLGVBQWVJO0lBQ2IsTUFBTUMsVUFBVSxNQUFNSiwrQ0FBRUEsQ0FBQ0ssTUFBTSxDQUFDQyxRQUFRO0lBQ3hDLE9BQU9GO0FBQ1Q7QUFFZSxlQUFlRzs7SUFDNUIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDUSxlQUFlQyxpQkFBaUIsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkQsTUFBTUUsVUFBVSxNQUFNRDtJQUN0QixxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQUc7Ozs7OztrQ0FDbEIsOERBQUNEO2tDQUNDLDRFQUFDQTs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ1osbURBQVVBOzs7Ozs7Ozs7O2tEQUViLDhEQUFDVztrREFDQyw0RUFBQ1gsbURBQVVBOzs7Ozs7Ozs7O2tEQUViLDhEQUFDVzs7Ozs7a0RBQ0QsOERBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS1QsOERBQUNBO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7OzBDQUNDLDhEQUFDRTs7a0RBQ0MsOERBQUNDO3dDQUFNQyxhQUFZOzs7Ozs7a0RBQ25CLDhEQUFDQztrREFBTzs7Ozs7Ozs7Ozs7OzBDQUVWLDhEQUFDTDswQ0FDQyw0RUFBQ1gsbURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7O29CQUdkRyxPQUFPLENBQUMsRUFBRSxDQUFDYyxJQUFJO29CQUNmZCxPQUFPLENBQUMsRUFBRSxDQUFDZSxNQUFNLGlCQUNoQiw4REFBQ3BCLGtEQUFLQTt3QkFDSnFCLEtBQUtoQixPQUFPLENBQUMsRUFBRSxDQUFDZSxNQUFNO3dCQUN0QkUsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTs7Ozs7K0JBR1ZuQixPQUFPLENBQUMsRUFBRSxDQUFDZSxNQUFNOzs7Ozs7Ozs7Ozs7O0FBSzNCO0dBL0M4Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBkYiBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XG5pbXBvcnQgUGxheWVyQ2FyZCBmcm9tIFwiLi9QbGF5ZXJDYXJkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRQbGF5ZXJzKCkge1xuICBjb25zdCBwbGF5ZXJzID0gYXdhaXQgZGIucGxheWVyLmZpbmRNYW55KCk7XG4gIHJldHVybiBwbGF5ZXJzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYm9hcmRQb2ludGVyLCBzZXRCb2FyZFBvaW50ZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwbGF5ZXJQb2ludGVyLCBzZXRQbGF5ZXJQb2ludGVyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBwbGF5ZXJzID0gYXdhaXQgZ2V0UGxheWVycygpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPkNvdXJ0IGRpdjwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcm9zZS0zMDAgcC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1yb3dzLTQgZ3JpZC1jb2xzLTQgKjpib3JkZXItMiAqOnJvdW5kZWQtbWQgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8UGxheWVyQ2FyZD48L1BsYXllckNhcmQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxQbGF5ZXJDYXJkPjwvUGxheWVyQ2FyZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIuydtOumhCDtmLnsnYAg7KCE7ZmU67KI7Zi4IOuEpOyekOumrFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnV0dG9uPuywuOqwgDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFBsYXllckNhcmQgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtwbGF5ZXJzWzBdLm5hbWV9XG4gICAgICAgIHtwbGF5ZXJzWzBdLmF2YXRhciA/IChcbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17cGxheWVyc1swXS5hdmF0YXJ9XG4gICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgcGxheWVyc1swXS5hdmF0YXJcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiZGIiLCJQbGF5ZXJDYXJkIiwidXNlU3RhdGUiLCJnZXRQbGF5ZXJzIiwicGxheWVycyIsInBsYXllciIsImZpbmRNYW55IiwiSG9tZSIsImJvYXJkUG9pbnRlciIsInNldEJvYXJkUG9pbnRlciIsInBsYXllclBvaW50ZXIiLCJzZXRQbGF5ZXJQb2ludGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJuYW1lIiwiYXZhdGFyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});