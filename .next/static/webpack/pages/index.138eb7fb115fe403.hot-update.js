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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MAX_RATING = 5;\nconst MIN_RATING = 1;\nfunction Product(param) {\n    let { id , title , price , description , category , addToCart  } = param;\n    _s();\n    const [rating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);\n    const [hasPrime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.random() < 0.5);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch the product data including the image from the Fake Store API\n        fetch(\"https://fakestoreapi.com/products/\".concat(id)).then((response)=>response.json()).then((data)=>{\n            setImage(data.image);\n        }).catch((error)=>{\n            console.error(\"Error fetching product:\", error);\n        });\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-80 mx-auto bg-black bg-opacity-60 rounded-lg shadow-lg overflow-hidden\",\n        style: {\n            border: \"1px solid white\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative pb-3/4\",\n                children: image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: image,\n                    layout: \"fill\",\n                    objectFit: \"cover\",\n                    alt: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 flex flex-col flex-grow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image,\n                        alt: \"Error loading the display\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white uppercase text-xs mb-1\",\n                        children: category\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg-white font-medium mb-1\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center mb-1\",\n                        children: Array(rating).fill().map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.StarIcon, {\n                                className: \"h-5 w-5 text-blue\"\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white text-sm mb-2 line-clamp-3\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center mb-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            quantity: price + 800,\n                            currency: \"INR\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white py-2 rounded-lg font-medium transition-colors duration-300 hover:bg-blue-600\",\n                        onClick: ()=>addToCart({\n                                id,\n                                title,\n                                price,\n                                description,\n                                category,\n                                image\n                            }),\n                        children: \"Add to Cart\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Product, \"iPabpPRohs6PpQZiJilJjGa4csE=\");\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDcEI7QUFDbUI7QUFDRjtBQUVoRCxNQUFNTSxhQUFhO0FBQ25CLE1BQU1DLGFBQWE7QUFFbkIsU0FBU0MsUUFBUSxLQUFzRCxFQUFFO1FBQXhELEVBQUVDLEdBQUUsRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsU0FBUSxFQUFFQyxVQUFTLEVBQUUsR0FBdEQ7O0lBQ2YsTUFBTSxDQUFDQyxPQUFPLEdBQUdkLCtDQUFRQSxDQUFDZSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBTVosQ0FBQUEsYUFBYUMsYUFBYSxNQUFNQTtJQUN0RixNQUFNLENBQUNZLFNBQVMsR0FBR2xCLCtDQUFRQSxDQUFDZSxLQUFLRSxNQUFNLEtBQUs7SUFDNUMsTUFBTSxDQUFDRSxPQUFPQyxTQUFTLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUVuQ0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLHFFQUFxRTtRQUNyRW9CLE1BQU0scUNBQXdDLE9BQUhiLEtBQ3hDYyxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNHLE9BQVM7WUFDZEwsU0FBU0ssS0FBS04sS0FBSztRQUNyQixHQUNDTyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUNoQkMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7UUFDM0M7SUFDSixHQUFHO1FBQUNuQjtLQUFHO0lBRVAscUJBQ0UsOERBQUNxQjtRQUFJQyxXQUFVO1FBQXlGQyxPQUFPO1lBQUVDLFFBQVE7UUFBa0I7OzBCQUN6SSw4REFBQ0g7Z0JBQUlDLFdBQVU7MEJBQ1pYLHVCQUNDLDhEQUFDakIsbURBQUtBO29CQUFDK0IsS0FBS2Q7b0JBQU9lLFFBQU87b0JBQU9DLFdBQVU7b0JBQVFDLEtBQUszQjs7Ozs7Ozs7Ozs7MEJBRzVELDhEQUFDb0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDTzt3QkFBSUosS0FBS2Q7d0JBQU9pQixLQUFJOzs7Ozs7a0NBQ3JCLDhEQUFDRTt3QkFBRVIsV0FBVTtrQ0FBcUNsQjs7Ozs7O2tDQUNsRCw4REFBQzJCO3dCQUFHVCxXQUFVO2tDQUFrQ3JCOzs7Ozs7a0NBQ2hELDhEQUFDb0I7d0JBQUlDLFdBQVU7a0NBQ1pVLE1BQU0xQixRQUNKMkIsSUFBSSxHQUNKQyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msa0JBQ1AsOERBQUN6Qyw0REFBUUE7Z0NBQVMyQixXQUFVOytCQUFiYzs7Ozs7Ozs7OztrQ0FHckIsOERBQUNOO3dCQUFFUixXQUFVO2tDQUF3Q25COzs7Ozs7a0NBQ3JELDhEQUFDa0I7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUMxQixpRUFBUUE7NEJBQUN5QyxVQUFVbkMsUUFBUTs0QkFBS29DLFVBQVM7Ozs7Ozs7Ozs7O2tDQUU1Qyw4REFBQ0M7d0JBQ0NqQixXQUFVO3dCQUNWa0IsU0FBUyxJQUFNbkMsVUFBVTtnQ0FBRUw7Z0NBQUlDO2dDQUFPQztnQ0FBT0M7Z0NBQWFDO2dDQUFVTzs0QkFBTTtrQ0FDM0U7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBaERTWjtLQUFBQTtBQWtEVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LmpzPzRlODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnO1xuaW1wb3J0IEN1cnJlbmN5IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWZvcm1hdHRlcic7XG5cbmNvbnN0IE1BWF9SQVRJTkcgPSA1O1xuY29uc3QgTUlOX1JBVElORyA9IDE7XG5cbmZ1bmN0aW9uIFByb2R1Y3QoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGFkZFRvQ2FydCB9KSB7XG4gIGNvbnN0IFtyYXRpbmddID0gdXNlU3RhdGUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1BWF9SQVRJTkcgLSBNSU5fUkFUSU5HICsgMSkpICsgTUlOX1JBVElORyk7XG4gIGNvbnN0IFtoYXNQcmltZV0gPSB1c2VTdGF0ZShNYXRoLnJhbmRvbSgpIDwgMC41KTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBGZXRjaCB0aGUgcHJvZHVjdCBkYXRhIGluY2x1ZGluZyB0aGUgaW1hZ2UgZnJvbSB0aGUgRmFrZSBTdG9yZSBBUElcbiAgICBmZXRjaChgaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzLyR7aWR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0SW1hZ2UoZGF0YS5pbWFnZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0OicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbaWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTgwIG14LWF1dG8gYmctYmxhY2sgYmctb3BhY2l0eS02MCByb3VuZGVkLWxnIHNoYWRvdy1sZyBvdmVyZmxvdy1oaWRkZW5cIiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkIHdoaXRlXCIgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHBiLTMvNFwiPlxuICAgICAgICB7aW1hZ2UgJiYgKFxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY292ZXJcIiBhbHQ9e3RpdGxlfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBmbGV4IGZsZXgtY29sIGZsZXgtZ3Jvd1wiPlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cIkVycm9yIGxvYWRpbmcgdGhlIGRpc3BsYXlcIiAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHVwcGVyY2FzZSB0ZXh0LXhzIG1iLTFcIj57Y2F0ZWdvcnl9PC9wPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZy13aGl0ZSBmb250LW1lZGl1bSBtYi0xXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItMVwiPlxuICAgICAgICAgIHtBcnJheShyYXRpbmcpXG4gICAgICAgICAgICAuZmlsbCgpXG4gICAgICAgICAgICAubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxTdGFySWNvbiBrZXk9e2l9IGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1ibHVlXCIgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXNtIG1iLTIgbGluZS1jbGFtcC0zXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXtwcmljZSArIDgwMH0gY3VycmVuY3k9XCJJTlJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHktMiByb3VuZGVkLWxnIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkVG9DYXJ0KHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIEFkZCB0byBDYXJ0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiU3Rhckljb24iLCJDdXJyZW5jeSIsIk1BWF9SQVRJTkciLCJNSU5fUkFUSU5HIiwiUHJvZHVjdCIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJhZGRUb0NhcnQiLCJyYXRpbmciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYXNQcmltZSIsImltYWdlIiwic2V0SW1hZ2UiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJvcmRlciIsInNyYyIsImxheW91dCIsIm9iamVjdEZpdCIsImFsdCIsImltZyIsInAiLCJoMiIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwicXVhbnRpdHkiLCJjdXJyZW5jeSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Product.js\n"));

/***/ })

});