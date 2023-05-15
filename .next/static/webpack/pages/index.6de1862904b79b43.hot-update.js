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

/***/ "./src/components/ProductFeed.js":
/*!***************************************!*\
  !*** ./src/components/ProductFeed.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product */ \"./src/components/Product.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ProductFeed() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch products from the API\n        fetch(\"https://fakestoreapi.com/products\").then((response)=>response.json()).then((data)=>setProducts(data));\n    }, []);\n    // Group products by category\n    const groupedProducts = products.reduce((acc, product)=>{\n        if (!acc[product.category]) {\n            acc[product.category] = [];\n        }\n        acc[product.category].push(product);\n        return acc;\n    }, {});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: Object.entries(groupedProducts).map((param)=>/*#__PURE__*/ {\n            let [category, products] = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: category\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\ProductFeed.js\",\n                            lineNumber: 28,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\ProductFeed.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-4 gap-2 \",\n                        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                id: product.id,\n                                title: product.title,\n                                price: product.price,\n                                description: product.description,\n                                category: product.category,\n                                image: product.image\n                            }, product.id, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\ProductFeed.js\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\ProductFeed.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, category, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\ProductFeed.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\ProductFeed.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductFeed, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = ProductFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductFeed);\nvar _c;\n$RefreshReg$(_c, \"ProductFeed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0RmVlZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFtRDtBQUNwQjtBQUNDO0FBRWhDLFNBQVNLLGNBQWM7O0lBQ3JCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsOEJBQThCO1FBQzlCTyxNQUFNLHFDQUNIQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNHLE9BQVNMLFlBQVlLO0lBQ2hDLEdBQUcsRUFBRTtJQUVMLDZCQUE2QjtJQUM3QixNQUFNQyxrQkFBa0JQLFNBQVNRLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxVQUFZO1FBQ3hELElBQUksQ0FBQ0QsR0FBRyxDQUFDQyxRQUFRQyxRQUFRLENBQUMsRUFBRTtZQUMxQkYsR0FBRyxDQUFDQyxRQUFRQyxRQUFRLENBQUMsR0FBRyxFQUFFO1FBQzVCLENBQUM7UUFDREYsR0FBRyxDQUFDQyxRQUFRQyxRQUFRLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRjtRQUMzQixPQUFPRDtJQUNULEdBQUcsQ0FBQztJQUVKLHFCQUNFLDhEQUFDSTtrQkFDRUMsT0FBT0MsT0FBTyxDQUFDUixpQkFBaUJTLEdBQUcsQ0FBQyx1QkFDbkM7Z0JBRG9DLENBQUNMLFVBQVVYLFNBQVM7bUJBQ3hELDhEQUFDYTs7a0NBQ0MsOERBQUNJO2tDQUFPLDRFQUFDQztzQ0FBSVA7Ozs7Ozs7Ozs7O2tDQUNiLDhEQUFDRTt3QkFBSU0sV0FBVTtrQ0FDWm5CLFNBQVNnQixHQUFHLENBQUMsQ0FBQ04sd0JBQ2IsOERBQUNaLGdEQUFPQTtnQ0FFTnNCLElBQUlWLFFBQVFVLEVBQUU7Z0NBQ2RDLE9BQU9YLFFBQVFXLEtBQUs7Z0NBQ3BCQyxPQUFPWixRQUFRWSxLQUFLO2dDQUNwQkMsYUFBYWIsUUFBUWEsV0FBVztnQ0FDaENaLFVBQVVELFFBQVFDLFFBQVE7Z0NBQzFCYSxPQUFPZCxRQUFRYyxLQUFLOytCQU5mZCxRQUFRVSxFQUFFOzs7Ozs7Ozs7OztlQUxiVDs7Ozs7UUFlTDs7Ozs7O0FBSWI7R0F6Q1NaO0tBQUFBO0FBMkNULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RGZWVkLmpzP2YzOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xuXG5mdW5jdGlvbiBQcm9kdWN0RmVlZCgpIHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBGZXRjaCBwcm9kdWN0cyBmcm9tIHRoZSBBUElcbiAgICBmZXRjaCgnaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldFByb2R1Y3RzKGRhdGEpKTtcbiAgfSwgW10pO1xuXG4gIC8vIEdyb3VwIHByb2R1Y3RzIGJ5IGNhdGVnb3J5XG4gIGNvbnN0IGdyb3VwZWRQcm9kdWN0cyA9IHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBwcm9kdWN0KSA9PiB7XG4gICAgaWYgKCFhY2NbcHJvZHVjdC5jYXRlZ29yeV0pIHtcbiAgICAgIGFjY1twcm9kdWN0LmNhdGVnb3J5XSA9IFtdO1xuICAgIH1cbiAgICBhY2NbcHJvZHVjdC5jYXRlZ29yeV0ucHVzaChwcm9kdWN0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge09iamVjdC5lbnRyaWVzKGdyb3VwZWRQcm9kdWN0cykubWFwKChbY2F0ZWdvcnksIHByb2R1Y3RzXSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17Y2F0ZWdvcnl9PlxuICAgICAgICAgIDxjZW50ZXI+PGgxPntjYXRlZ29yeX08L2gxPjwvY2VudGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtMiBcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgICAgPFByb2R1Y3RcbiAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgaWQ9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgICAgcHJpY2U9e3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2R1Y3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9e3Byb2R1Y3QuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e3Byb2R1Y3QuaW1hZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEZlZWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiUHJvZHVjdCIsIlByb2R1Y3RGZWVkIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJncm91cGVkUHJvZHVjdHMiLCJyZWR1Y2UiLCJhY2MiLCJwcm9kdWN0IiwiY2F0ZWdvcnkiLCJwdXNoIiwiZGl2IiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImNlbnRlciIsImgxIiwiY2xhc3NOYW1lIiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProductFeed.js\n"));

/***/ })

});