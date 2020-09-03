module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/comunidad/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/comunidad/index.js":
/*!**********************************!*\
  !*** ./pages/comunidad/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/cata/petProjects/plataforma-chp/pages/comunidad/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Comunidad = () => {\n  return __jsx(\"div\", {\n    className: \"m-12\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-purple text-xl\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 9\n    }\n  }, \"Nuestra Comunidad\"), __jsx(\"div\", {\n    className: \"flex flex-row\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    class: \" mr-4 focus:outline-none focus:shadow-outline border-b border-gray-300 py-2 px-4 block w-full appearance-none leading-normal\",\n    type: \"text\",\n    placeholder: \"Buscar por nombre\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    class: \"mr-4 focus:outline-none  border-b border-gray-300 py-2 px-4 block w-full appearance-none leading-normal\",\n    type: \"text\",\n    placeholder: \"Buscar por especialidad\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    class: \"mr-4 focus:outline-none  border-b border-gray-300 py-2 px-4 block w-full appearance-none leading-normal\",\n    type: \"text\",\n    placeholder: \"Buscar por skills\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    className: \"md:ml-4 w-2/6 bg-gradient-to-r from-purple to-lilac hover:bg-indigo-700 text-white py-2 px-4 rounded-full\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, \"Filtrar\"), __jsx(\"button\", {\n    className: \"md:ml-4 w-2/6 bg-transparent hover:bg-purple text-white-700 text-purple hover:text-white py-2 px-4 hover:border-transparent rounded-full\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, \"Borrar filtros\")), __jsx(\"div\", {\n    className: \"m-20\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \" estamos ok en comunidad\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comunidad);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb211bmlkYWQvaW5kZXguanM/ZGFhZiJdLCJuYW1lcyI6WyJDb211bmlkYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUcsTUFBTTtBQUNwQixTQUNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUksYUFBUyxFQUFDLHFCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREEsRUFJQTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFPLFNBQUssRUFBQyw4SEFBYjtBQUE0SSxRQUFJLEVBQUMsTUFBako7QUFBd0osZUFBVyxFQUFDLG1CQUFwSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFFQTtBQUFPLFNBQUssRUFBQyx5R0FBYjtBQUF1SCxRQUFJLEVBQUMsTUFBNUg7QUFBbUksZUFBVyxFQUFDLHlCQUEvSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsRUFHQTtBQUFPLFNBQUssRUFBQyx5R0FBYjtBQUF1SCxRQUFJLEVBQUMsTUFBNUg7QUFBbUksZUFBVyxFQUFDLG1CQUEvSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEEsRUFLQTtBQUFRLGFBQVMsRUFBQywyR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxBLEVBUUk7QUFBUSxhQUFTLEVBQUMsMElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUkosQ0FKQSxFQWdCQTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBaEJBLENBREo7QUFxQkgsQ0F0QkQ7O0FBd0JlQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXVuaWRhZC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvbXVuaWRhZCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMTJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtcHVycGxlIHRleHQteGxcIj5cbiAgICAgICAgICAgIE51ZXN0cmEgQ29tdW5pZGFkXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCIgbXItNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIHB5LTIgcHgtNCBibG9jayB3LWZ1bGwgYXBwZWFyYW5jZS1ub25lIGxlYWRpbmctbm9ybWFsXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJ1c2NhciBwb3Igbm9tYnJlXCIvPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJtci00IGZvY3VzOm91dGxpbmUtbm9uZSAgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIHB5LTIgcHgtNCBibG9jayB3LWZ1bGwgYXBwZWFyYW5jZS1ub25lIGxlYWRpbmctbm9ybWFsXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJ1c2NhciBwb3IgZXNwZWNpYWxpZGFkXCIvPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJtci00IGZvY3VzOm91dGxpbmUtbm9uZSAgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIHB5LTIgcHgtNCBibG9jayB3LWZ1bGwgYXBwZWFyYW5jZS1ub25lIGxlYWRpbmctbm9ybWFsXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJ1c2NhciBwb3Igc2tpbGxzXCIvPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWQ6bWwtNCB3LTIvNiBiZy1ncmFkaWVudC10by1yIGZyb20tcHVycGxlIHRvLWxpbGFjIGhvdmVyOmJnLWluZGlnby03MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgIEZpbHRyYXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtZDptbC00IHctMi82IGJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLXB1cnBsZSB0ZXh0LXdoaXRlLTcwMCB0ZXh0LXB1cnBsZSBob3Zlcjp0ZXh0LXdoaXRlIHB5LTIgcHgtNCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgIEJvcnJhciBmaWx0cm9zXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yMFwiPiBlc3RhbW9zIG9rIGVuIGNvbXVuaWRhZDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tdW5pZGFkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/comunidad/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });