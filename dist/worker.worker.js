/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/*!****************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./src/worker.js ***!
  \****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("self.onmessage = function (_ref) {\n  var text = _ref.data.text;\n  self.postMessage({\n    text: text + text\n  });\n};\n\n//# sourceURL=webpack://webpack-kit/./src/worker.js?./node_modules/babel-loader/lib/index.js");
/******/ })()
;