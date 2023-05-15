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

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MAX_RATING = 5;\nconst MIN_RATING = 1;\nfunction Product(param) {\n    let { id , title , price , description , category  } = param;\n    _s();\n    const [rating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);\n    const [hasPrime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.random() < 0.5);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch the product data including the image from the Fake Store API\n        fetch(\"https://fakestoreapi.com/products/\".concat(id)).then((response)=>response.json()).then((data)=>{\n            setImage(data.image);\n        }).catch((error)=>{\n            console.error(\"Error fetching product:\", error);\n        });\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-80 mx-auto bg-white rounded-lg shadow-lg overflow-hidden style={{ height: '1px' }}\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative pb-3/4\",\n                children: image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: image,\n                    layout: \"fill\",\n                    objectFit: \"cover\",\n                    alt: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 flex flex-col flex-grow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image,\n                        alt: \"Error loading the display\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 36,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 uppercase text-xs mb-1\",\n                        children: category\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg font-medium mb-1\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center mb-1\",\n                        children: Array(rating).fill().map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.StarIcon, {\n                                className: \"h-5 w-5 text-yellow-1 00\"\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-sm mb-2 line-clamp-3\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center mb-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            quantity: price + 800,\n                            currency: \"INR\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white py-2 rounded-lg font-medium transition-colors duration-300 hover:bg-blue-600\",\n                        children: \"Add to Cart\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Product, \"iPabpPRohs6PpQZiJilJjGa4csE=\");\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDcEI7QUFDbUI7QUFDRjtBQUVoRCxNQUFNTSxhQUFhO0FBQ25CLE1BQU1DLGFBQWE7QUFFbkIsU0FBU0MsUUFBUSxLQUEyQyxFQUFFO1FBQTdDLEVBQUVDLEdBQUUsRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsU0FBUSxFQUFFLEdBQTNDOztJQUNmLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHWiwrQ0FBUUEsQ0FDdkJhLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFNWCxDQUFBQSxhQUFhQyxhQUFhLE1BQU1BO0lBRTlELE1BQU0sQ0FBQ1csU0FBUyxHQUFHaEIsK0NBQVFBLENBQUNhLEtBQUtFLE1BQU0sS0FBSztJQUM1QyxNQUFNLENBQUNFLE9BQU9DLFNBQVMsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QscUVBQXFFO1FBQ3JFb0IsTUFBTSxxQ0FBd0MsT0FBSFosS0FDeENhLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxJQUFJLElBQ2hDRixJQUFJLENBQUMsQ0FBQ0csT0FBUztZQUNkTCxTQUFTSyxLQUFLTixLQUFLO1FBQ3JCLEdBQ0NPLEtBQUssQ0FBQyxDQUFDQyxRQUFVO1lBQ2hCQyxRQUFRRCxLQUFLLENBQUMsMkJBQTJCQTtRQUMzQztJQUNKLEdBQUc7UUFBQ2xCO0tBQUc7SUFFUCxxQkFDRSw4REFBQ29CO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWlgsdUJBQ0MsOERBQUNoQixtREFBS0E7b0JBQUM0QixLQUFLWjtvQkFBT2EsUUFBTztvQkFBT0MsV0FBVTtvQkFBUUMsS0FBS3hCOzs7Ozs7Ozs7OzswQkFHNUQsOERBQUNtQjtnQkFBSUMsV0FBVTs7a0NBQ1osOERBQUNLO3dCQUFJSixLQUFNWjt3QkFBT2UsS0FBSTs7Ozs7O2tDQUN2Qiw4REFBQ0U7d0JBQUVOLFdBQVU7a0NBQXdDakI7Ozs7OztrQ0FDckQsOERBQUN3Qjt3QkFBR1AsV0FBVTtrQ0FBNEJwQjs7Ozs7O2tDQUMxQyw4REFBQ21CO3dCQUFJQyxXQUFVO2tDQUNaUSxNQUFNeEIsUUFDSnlCLElBQUksR0FDSkMsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUNQLDhEQUFDdEMsNERBQVFBO2dDQUFTMEIsV0FBVTsrQkFBYlk7Ozs7Ozs7Ozs7a0NBR3JCLDhEQUFDTjt3QkFBRU4sV0FBVTtrQ0FBMkNsQjs7Ozs7O2tDQUN4RCw4REFBQ2lCO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDekIsaUVBQVFBOzRCQUFDc0MsVUFBVWhDLFFBQVE7NEJBQUtpQyxVQUFTOzs7Ozs7Ozs7OztrQ0FFNUMsOERBQUNDO3dCQUFPZixXQUFVO2tDQUFzRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhJO0dBL0NTdEI7S0FBQUE7QUFpRFQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcz80ZTgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcbmltcG9ydCBDdXJyZW5jeSBmcm9tICdyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXInO1xuXG5jb25zdCBNQVhfUkFUSU5HID0gNTtcbmNvbnN0IE1JTl9SQVRJTkcgPSAxO1xuXG5mdW5jdGlvbiBQcm9kdWN0KHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5IH0pIHtcbiAgY29uc3QgW3JhdGluZ10gPSB1c2VTdGF0ZShcbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTUFYX1JBVElORyAtIE1JTl9SQVRJTkcgKyAxKSkgKyBNSU5fUkFUSU5HXG4gICk7XG4gIGNvbnN0IFtoYXNQcmltZV0gPSB1c2VTdGF0ZShNYXRoLnJhbmRvbSgpIDwgMC41KTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBGZXRjaCB0aGUgcHJvZHVjdCBkYXRhIGluY2x1ZGluZyB0aGUgaW1hZ2UgZnJvbSB0aGUgRmFrZSBTdG9yZSBBUElcbiAgICBmZXRjaChgaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzLyR7aWR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0SW1hZ2UoZGF0YS5pbWFnZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0OicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbaWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTgwIG14LWF1dG8gYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGcgb3ZlcmZsb3ctaGlkZGVuIHN0eWxlPXt7IGhlaWdodDogJzFweCcgfX1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcGItMy80XCI+XG4gICAgICAgIHtpbWFnZSAmJiAoXG4gICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiIGFsdD17dGl0bGV9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGZsZXggZmxleC1jb2wgZmxleC1ncm93XCI+XG4gICAgICAgICA8aW1nIHNyYyA9e2ltYWdlfSBhbHQ9XCJFcnJvciBsb2FkaW5nIHRoZSBkaXNwbGF5XCIvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0ZXh0LXhzIG1iLTFcIj57Y2F0ZWdvcnl9PC9wPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBtYi0xXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItMVwiPlxuICAgICAgICAgIHtBcnJheShyYXRpbmcpXG4gICAgICAgICAgICAuZmlsbCgpXG4gICAgICAgICAgICAubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxTdGFySWNvbiBrZXk9e2l9IGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC15ZWxsb3ctMSAgMDBcIiAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtc20gbWItMiBsaW5lLWNsYW1wLTNcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHk9e3ByaWNlICsgODAwfSBjdXJyZW5jeT1cIklOUlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHktMiByb3VuZGVkLWxnIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3ZlcjpiZy1ibHVlLTYwMFwiPlxuICAgICAgICAgIEFkZCB0byBDYXJ0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiU3Rhckljb24iLCJDdXJyZW5jeSIsIk1BWF9SQVRJTkciLCJNSU5fUkFUSU5HIiwiUHJvZHVjdCIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJyYXRpbmciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYXNQcmltZSIsImltYWdlIiwic2V0SW1hZ2UiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJhbHQiLCJpbWciLCJwIiwiaDIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsInF1YW50aXR5IiwiY3VycmVuY3kiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Product.js\n"));

/***/ })

});