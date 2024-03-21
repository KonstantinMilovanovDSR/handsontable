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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 12:
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
 * Last updated: Nov 17, 2017
 *
 * Description: Definition file for Polish - Poland language-country.
 */
var C = _handsontable.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'pl-PL'
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Wstaw wiersz powyżej'), C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Wstaw wiersz poniżej'), C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Wstaw kolumnę z lewej'), C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Wstaw kolumnę z prawej'), C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Usuń wiersz', 'Usuń wiersze']), C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Usuń kolumnę', 'Usuń kolumny']), C.CONTEXTMENU_ITEMS_UNDO, 'Cofnij'), C.CONTEXTMENU_ITEMS_REDO, 'Ponów'), C.CONTEXTMENU_ITEMS_READ_ONLY, 'Tylko do odczytu'), C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Wyczyść kolumnę'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Wyrównanie'), C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Do lewej'), C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Do środka'), C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Do prawej'), C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Wyjustuj'), C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Do góry'), C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Wyśrodkuj'), C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Do dołu'), C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Zablokuj kolumnę'), C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Odblokuj kolumnę'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Obramowanie'), C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Krawędź górna'), C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Krawędź prawa'), C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Krawędź dolna'), C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Krawędź lewa'), C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Usuń obramowanie(a)'), C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Dodaj komentarz'), C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Edytuj komentarz'), C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Usuń komentarz'), C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Komentarz tylko do odczytu'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Scal komórki'), C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Rozdziel komórki'), C.CONTEXTMENU_ITEMS_COPY, 'Kopiuj'), C.CONTEXTMENU_ITEMS_CUT, 'Wytnij'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Wstaw wiersz podrzędny'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Odłącz od nadrzędnego'), C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Ukryj kolumnę', 'Ukryj kolumny']), C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Pokaż kolumnę', 'Pokaż kolumny']), C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Ukryj wiersz', 'Ukryj wiersze']), C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Pokaż wiersz', 'Pokaż wiersze']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Brak'), C.FILTERS_CONDITIONS_EMPTY, 'Komórka jest pusta'), C.FILTERS_CONDITIONS_NOT_EMPTY, 'Komórka nie jest pusta'), C.FILTERS_CONDITIONS_EQUAL, 'Jest równe'), C.FILTERS_CONDITIONS_NOT_EQUAL, 'Jest różne od'), C.FILTERS_CONDITIONS_BEGINS_WITH, 'Tekst zaczyna się od'), C.FILTERS_CONDITIONS_ENDS_WITH, 'Tekst kończy się na'), C.FILTERS_CONDITIONS_CONTAINS, 'Tekst zawiera fragment'), C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Tekst nie zawiera fragmentu'), C.FILTERS_CONDITIONS_GREATER_THAN, 'Większe niż'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Większe lub równe'), C.FILTERS_CONDITIONS_LESS_THAN, 'Mniejsze niż'), C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Mniejsze lub równe'), C.FILTERS_CONDITIONS_BETWEEN, 'Jest pomiędzy'), C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Nie jest pomiędzy'), C.FILTERS_CONDITIONS_AFTER, 'Data późniejsza niż'), C.FILTERS_CONDITIONS_BEFORE, 'Data wcześniejsza niż'), C.FILTERS_CONDITIONS_TODAY, 'Dzisiaj'), C.FILTERS_CONDITIONS_TOMORROW, 'Jutro'), C.FILTERS_CONDITIONS_YESTERDAY, 'Wczoraj'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Puste miejsca'), C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtruj wg warunku'), C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtruj wg wartości'), C.FILTERS_LABELS_CONJUNCTION, 'Oraz'), C.FILTERS_LABELS_DISJUNCTION, 'Lub'), C.FILTERS_BUTTONS_SELECT_ALL, 'Zaznacz wszystko'), C.FILTERS_BUTTONS_CLEAR, 'Wyczyść'), C.FILTERS_BUTTONS_OK, 'OK'), C.FILTERS_BUTTONS_CANCEL, 'Anuluj'), C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Szukaj'), _defineProperty(_defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Wartość'), C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Druga wartość'));
_handsontable.default.languages.registerLanguageDictionary(dictionary);
var _default = exports.default = dictionary;

/***/ })

/******/ })["___"];
});