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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product */ \"./src/components/Product.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ProductFeed() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch products from the API\n        fetch(\"https://fakestoreapi.com/products\").then((response)=>response.json()).then((data)=>setProducts(data));\n    }, []);\n    // Group products by category\n    const groupedProducts = products.reduce((acc, product)=>{\n        if (!acc[product.category]) {\n            acc[product.category] = [];\n        }\n        acc[product.category].push(product);\n        return acc;\n    }, {});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: Object.entries(groupedProducts).map((param)=>/*#__PURE__*/ {\n            let [category, products] = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: category\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 gap-4\",\n                        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                id: product.id,\n                                title: product.title,\n                                price: product.price,\n                                description: product.description,\n                                category: product.category,\n                                image: product.image\n                            }, product.id, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, category, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\Product.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductFeed, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = ProductFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductFeed);\nvar _c;\n$RefreshReg$(_c, \"ProductFeed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQW1EO0FBQ3BCO0FBQ0M7QUFFaEMsU0FBU0ssY0FBYzs7SUFDckIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0NELGdEQUFTQSxDQUFDLElBQU07UUFDZCw4QkFBOEI7UUFDOUJPLE1BQU0scUNBQ0hDLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxJQUFJLElBQ2hDRixJQUFJLENBQUMsQ0FBQ0csT0FBU0wsWUFBWUs7SUFDaEMsR0FBRyxFQUFFO0lBRUwsNkJBQTZCO0lBQzdCLE1BQU1DLGtCQUFrQlAsU0FBU1EsTUFBTSxDQUFDLENBQUNDLEtBQUtDLFVBQVk7UUFDeEQsSUFBSSxDQUFDRCxHQUFHLENBQUNDLFFBQVFDLFFBQVEsQ0FBQyxFQUFFO1lBQzFCRixHQUFHLENBQUNDLFFBQVFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7UUFDNUIsQ0FBQztRQUNERixHQUFHLENBQUNDLFFBQVFDLFFBQVEsQ0FBQyxDQUFDQyxJQUFJLENBQUNGO1FBQzNCLE9BQU9EO0lBQ1QsR0FBRyxDQUFDO0lBRUoscUJBQ0UsOERBQUNJO2tCQUNFQyxPQUFPQyxPQUFPLENBQUNSLGlCQUFpQlMsR0FBRyxDQUFDLHVCQUNuQztnQkFEb0MsQ0FBQ0wsVUFBVVgsU0FBUzttQkFDeEQsOERBQUNhOztrQ0FDQyw4REFBQ0k7a0NBQUlOOzs7Ozs7a0NBQ0wsOERBQUNFO3dCQUFJSyxXQUFVO2tDQUNabEIsU0FBU2dCLEdBQUcsQ0FBQyxDQUFDTix3QkFDYiw4REFBQ1osZ0RBQU9BO2dDQUVOcUIsSUFBSVQsUUFBUVMsRUFBRTtnQ0FDZEMsT0FBT1YsUUFBUVUsS0FBSztnQ0FDcEJDLE9BQU9YLFFBQVFXLEtBQUs7Z0NBQ3BCQyxhQUFhWixRQUFRWSxXQUFXO2dDQUNoQ1gsVUFBVUQsUUFBUUMsUUFBUTtnQ0FDMUJZLE9BQU9iLFFBQVFhLEtBQUs7K0JBTmZiLFFBQVFTLEVBQUU7Ozs7Ozs7Ozs7O2VBTGJSOzs7OztRQWVMOzs7Ozs7QUFJYjtHQXpDU1o7S0FBQUE7QUEyQ1QsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcz80ZTgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcblxuZnVuY3Rpb24gUHJvZHVjdEZlZWQoKSB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRmV0Y2ggcHJvZHVjdHMgZnJvbSB0aGUgQVBJXG4gICAgZmV0Y2goJ2h0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cycpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRQcm9kdWN0cyhkYXRhKSk7XG4gIH0sIFtdKTtcblxuICAvLyBHcm91cCBwcm9kdWN0cyBieSBjYXRlZ29yeVxuICBjb25zdCBncm91cGVkUHJvZHVjdHMgPSBwcm9kdWN0cy5yZWR1Y2UoKGFjYywgcHJvZHVjdCkgPT4ge1xuICAgIGlmICghYWNjW3Byb2R1Y3QuY2F0ZWdvcnldKSB7XG4gICAgICBhY2NbcHJvZHVjdC5jYXRlZ29yeV0gPSBbXTtcbiAgICB9XG4gICAgYWNjW3Byb2R1Y3QuY2F0ZWdvcnldLnB1c2gocHJvZHVjdCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtPYmplY3QuZW50cmllcyhncm91cGVkUHJvZHVjdHMpLm1hcCgoW2NhdGVnb3J5LCBwcm9kdWN0c10pID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5fT5cbiAgICAgICAgICA8aDI+e2NhdGVnb3J5fTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICAgIDxQcm9kdWN0XG4gICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9kdWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtwcm9kdWN0LmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgIGltYWdlPXtwcm9kdWN0LmltYWdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RGZWVkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIlByb2R1Y3QiLCJQcm9kdWN0RmVlZCIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZ3JvdXBlZFByb2R1Y3RzIiwicmVkdWNlIiwiYWNjIiwicHJvZHVjdCIsImNhdGVnb3J5IiwicHVzaCIsImRpdiIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJoMiIsImNsYXNzTmFtZSIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Product.js\n"));

/***/ })

});