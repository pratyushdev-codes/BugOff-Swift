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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product */ \"./src/components/Product.js\");\n\n\n\n\nfunction ProductFeed(param) {\n    let { products  } = param;\n    // Filter products based on category\n    const menClothingProducts = products.filter((product)=>product.category === \"men's clothing\");\n    const jewelryProducts = products.filter((product)=>product.category === \"jewelry\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto\",\n        children: [\n            menClothingProducts.map((param)=>/*#__PURE__*/ {\n                let { id , title , price , description , category , image  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    id: id,\n                    title: title,\n                    price: price,\n                    description: description,\n                    category: category,\n                    image: image\n                }, id, false, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\ProductFeed.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this);\n            }),\n            jewelryProducts.map((param)=>/*#__PURE__*/ {\n                let { id , title , price , description , category , image  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    id: id,\n                    title: title,\n                    price: price,\n                    description: description,\n                    category: category,\n                    image: image\n                }, id, false, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\ProductFeed.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\BuggOff-React-Ecom-main\\\\BuggOff-React-Ecom-main\\\\src\\\\components\\\\ProductFeed.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductFeed);\nvar _c;\n$RefreshReg$(_c, \"ProductFeed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0RmVlZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQStCO0FBQ0w7QUFDTTtBQUVoQyxTQUFTRyxZQUFZLEtBQVksRUFBRTtRQUFkLEVBQUVDLFNBQVEsRUFBRSxHQUFaO0lBQ25CLG9DQUFvQztJQUNwQyxNQUFNQyxzQkFBc0JELFNBQVNFLE1BQU0sQ0FBQ0MsQ0FBQUEsVUFBV0EsUUFBUUMsUUFBUSxLQUFLO0lBQzVFLE1BQU1DLGtCQUFrQkwsU0FBU0UsTUFBTSxDQUFDQyxDQUFBQSxVQUFXQSxRQUFRQyxRQUFRLEtBQUs7SUFFeEUscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7O1lBRVpOLG9CQUFvQk8sR0FBRyxDQUFDLHVCQUN2QjtvQkFEd0IsRUFBRUMsR0FBRSxFQUFFQyxNQUFLLEVBQUVDLE1BQUssRUFBRUMsWUFBVyxFQUFFUixTQUFRLEVBQUVTLE1BQUssRUFBRTt1QkFDMUUsOERBQUNmLGdEQUFPQTtvQkFFTlcsSUFBSUE7b0JBQ0pDLE9BQU9BO29CQUNQQyxPQUFPQTtvQkFDUEMsYUFBYUE7b0JBQ2JSLFVBQVVBO29CQUNWUyxPQUFPQTttQkFORko7Ozs7O1lBT047WUFJRkosZ0JBQWdCRyxHQUFHLENBQUMsdUJBQ25CO29CQURvQixFQUFFQyxHQUFFLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFQyxZQUFXLEVBQUVSLFNBQVEsRUFBRVMsTUFBSyxFQUFFO3VCQUN0RSw4REFBQ2YsZ0RBQU9BO29CQUVOVyxJQUFJQTtvQkFDSkMsT0FBT0E7b0JBQ1BDLE9BQU9BO29CQUNQQyxhQUFhQTtvQkFDYlIsVUFBVUE7b0JBQ1ZTLE9BQU9BO21CQU5GSjs7Ozs7WUFPTjs7Ozs7OztBQUlUO0tBbENTVjtBQW9DVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0RmVlZC5qcz9mMzhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xuXG5mdW5jdGlvbiBQcm9kdWN0RmVlZCh7IHByb2R1Y3RzIH0pIHtcbiAgLy8gRmlsdGVyIHByb2R1Y3RzIGJhc2VkIG9uIGNhdGVnb3J5XG4gIGNvbnN0IG1lbkNsb3RoaW5nUHJvZHVjdHMgPSBwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmNhdGVnb3J5ID09PSBcIm1lbidzIGNsb3RoaW5nXCIpO1xuICBjb25zdCBqZXdlbHJ5UHJvZHVjdHMgPSBwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmNhdGVnb3J5ID09PSAnamV3ZWxyeScpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1yb3ctZGVuc2UgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgbWQ6LW10LTUyIG14LWF1dG9cIj5cbiAgICAgIHsvKiBEaXNwbGF5IHByb2R1Y3RzIGZyb20gXCJtZW4ncyBjbG90aGluZ1wiIGNhdGVnb3J5ICovfVxuICAgICAge21lbkNsb3RoaW5nUHJvZHVjdHMubWFwKCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4gKFxuICAgICAgICA8UHJvZHVjdFxuICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgIC8+XG4gICAgICApKX1cblxuICAgICAgey8qIERpc3BsYXkgcHJvZHVjdHMgZnJvbSBcImpld2VscnlcIiBjYXRlZ29yeSAqL31cbiAgICAgIHtqZXdlbHJ5UHJvZHVjdHMubWFwKCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4gKFxuICAgICAgICA8UHJvZHVjdFxuICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEZlZWQ7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIlByb2R1Y3QiLCJQcm9kdWN0RmVlZCIsInByb2R1Y3RzIiwibWVuQ2xvdGhpbmdQcm9kdWN0cyIsImZpbHRlciIsInByb2R1Y3QiLCJjYXRlZ29yeSIsImpld2VscnlQcm9kdWN0cyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProductFeed.js\n"));

/***/ })

});