(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../../handsontable"));
	else if(typeof define === 'function' && define.amd)
		define(["../../handsontable"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../../handsontable")) : factory(root["Handsontable"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _handsontable = _interopRequireDefault(__webpack_require__(0));
var _dictionary;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * @preserve
 * Authors: Handsoncode
 * Last updated: Nov 15, 2017
 *
 * Description: Definition file for English - United States language-country.
 */
var C = _handsontable.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'en-US'
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Insert row above'), C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Insert row below'), C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Insert column left'), C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Insert column right'), C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Remove row', 'Remove rows']), C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Remove column', 'Remove columns']), C.CONTEXTMENU_ITEMS_UNDO, 'Undo'), C.CONTEXTMENU_ITEMS_REDO, 'Redo'), C.CONTEXTMENU_ITEMS_READ_ONLY, 'Read only'), C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Clear column'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Alignment'), C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Left'), C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Center'), C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Right'), C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Justify'), C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Top'), C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Middle'), C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Bottom'), C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Freeze column'), C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Unfreeze column'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Borders'), C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Top'), C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Right'), C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Bottom'), C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Left'), C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Remove border(s)'), C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Add comment'), C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Edit comment'), C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Delete comment'), C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Read-only comment'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Merge cells'), C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Unmerge cells'), C.CONTEXTMENU_ITEMS_COPY, 'Copy'), C.CONTEXTMENU_ITEMS_CUT, 'Cut'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Insert child row'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Detach from parent'), C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Hide column', 'Hide columns']), C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Show column', 'Show columns']), C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Hide row', 'Hide rows']), C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Show row', 'Show rows']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'None'), C.FILTERS_CONDITIONS_EMPTY, 'Is empty'), C.FILTERS_CONDITIONS_NOT_EMPTY, 'Is not empty'), C.FILTERS_CONDITIONS_EQUAL, 'Is equal to'), C.FILTERS_CONDITIONS_NOT_EQUAL, 'Is not equal to'), C.FILTERS_CONDITIONS_BEGINS_WITH, 'Begins with'), C.FILTERS_CONDITIONS_ENDS_WITH, 'Ends with'), C.FILTERS_CONDITIONS_CONTAINS, 'Contains'), C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Does not contain'), C.FILTERS_CONDITIONS_GREATER_THAN, 'Greater than'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Greater than or equal to'), C.FILTERS_CONDITIONS_LESS_THAN, 'Less than'), C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Less than or equal to'), C.FILTERS_CONDITIONS_BETWEEN, 'Is between'), C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Is not between'), C.FILTERS_CONDITIONS_AFTER, 'After'), C.FILTERS_CONDITIONS_BEFORE, 'Before'), C.FILTERS_CONDITIONS_TODAY, 'Today'), C.FILTERS_CONDITIONS_TOMORROW, 'Tomorrow'), C.FILTERS_CONDITIONS_YESTERDAY, 'Yesterday'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Blank cells'), C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filter by condition'), C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filter by value'), C.FILTERS_LABELS_CONJUNCTION, 'And'), C.FILTERS_LABELS_DISJUNCTION, 'Or'), C.FILTERS_BUTTONS_SELECT_ALL, 'Select all'), C.FILTERS_BUTTONS_CLEAR, 'Clear'), C.FILTERS_BUTTONS_OK, 'OK'), C.FILTERS_BUTTONS_CANCEL, 'Cancel'), C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Search'), _defineProperty(_defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Value'), C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Second value'));
_handsontable.default.languages.registerLanguageDictionary(dictionary);
var _default = exports.default = dictionary;

/***/ })
/******/ ])["___"];
});