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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 10:
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
 * Authors: Simon Borøy-Johnsen (TheSimoms)
 * Last updated: Dec 19, 2017
 *
 * Description: Definition file for Norwegian Bokmål - Norway language-country.
 */
var C = _handsontable.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'nb-NO'
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Sett inn over'), C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Sett inn under'), C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Sett inn til venstre'), C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Sett inn til høyre'), C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Fjern rad', 'Fjern rader']), C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Fjern kolonne', 'Fjern kolonner']), C.CONTEXTMENU_ITEMS_UNDO, 'Angre'), C.CONTEXTMENU_ITEMS_REDO, 'Gjør om'), C.CONTEXTMENU_ITEMS_READ_ONLY, 'Skrivebeskyttet'), C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Tøm kolonne'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Juster'), C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Venstre'), C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Midtstill'), C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Høyre'), C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Tilpasset'), C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Øverst'), C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'På midten'), C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Nederst'), C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Frys kolonne'), C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Frigi kolonne'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Kantlinjer'), C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Over'), C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Til høyre'), C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Under'), C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Til venstre'), C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Fjern kantlinje(r)'), C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Legg til kommentar'), C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Endre kommentar'), C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Fjern kommentar'), C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Skrivebeskytt kommentar'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Slå sammen celler'), C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Opphev sammenslåing'), C.CONTEXTMENU_ITEMS_COPY, 'Kopier'), C.CONTEXTMENU_ITEMS_CUT, 'Klipp ut'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Sett inn underrad'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Frigi fra gruppe'), C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Skjul kolonne', 'Skjul kolonner']), C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Vis kolonne', 'Vis kolonner']), C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Skjul rad', 'Skjul rader']), C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Vis rad', 'Vis rader']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Ingen'), C.FILTERS_CONDITIONS_EMPTY, 'Er tom'), C.FILTERS_CONDITIONS_NOT_EMPTY, 'Er ikke tom'), C.FILTERS_CONDITIONS_EQUAL, 'Er lik'), C.FILTERS_CONDITIONS_NOT_EQUAL, 'Er ikke lik'), C.FILTERS_CONDITIONS_BEGINS_WITH, 'Begynner med'), C.FILTERS_CONDITIONS_ENDS_WITH, 'Slutter med'), C.FILTERS_CONDITIONS_CONTAINS, 'Inneholder'), C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Inneholder ikke'), C.FILTERS_CONDITIONS_GREATER_THAN, 'Større enn'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Større enn eller lik'), C.FILTERS_CONDITIONS_LESS_THAN, 'Mindre enn'), C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Mindre enn eller lik'), C.FILTERS_CONDITIONS_BETWEEN, 'Er mellom'), C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Er ikke mellom'), C.FILTERS_CONDITIONS_AFTER, 'Etter'), C.FILTERS_CONDITIONS_BEFORE, 'Før'), C.FILTERS_CONDITIONS_TODAY, 'I dag'), C.FILTERS_CONDITIONS_TOMORROW, 'I morgen'), C.FILTERS_CONDITIONS_YESTERDAY, 'I går'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Tomme celler'), C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtrer etter betingelse'), C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtrer etter verdi'), C.FILTERS_LABELS_CONJUNCTION, 'Og'), C.FILTERS_LABELS_DISJUNCTION, 'Eller'), C.FILTERS_BUTTONS_SELECT_ALL, 'Velg alle'), C.FILTERS_BUTTONS_CLEAR, 'Tøm'), C.FILTERS_BUTTONS_OK, 'OK'), C.FILTERS_BUTTONS_CANCEL, 'Avbryt'), C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Søk'), _defineProperty(_defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Verdi'), C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Andre verdi'));
_handsontable.default.languages.registerLanguageDictionary(dictionary);
var _default = exports.default = dictionary;

/***/ })

/******/ })["___"];
});