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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */,
/* 2 */
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
 * Authors: Stefan Salzl
 * Last updated: Jan 08, 2018
 *
 * Description: Definition file for German - Germany language-country.
 */
var C = _handsontable.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'de-DE'
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Zeile einfügen oberhalb'), C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Zeile einfügen unterhalb'), C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Spalte einfügen links'), C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Spalte einfügen rechts'), C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Zeile löschen', 'Zeilen löschen']), C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Spalte löschen', 'Spalten löschen']), C.CONTEXTMENU_ITEMS_UNDO, 'Rückgangig'), C.CONTEXTMENU_ITEMS_REDO, 'Wiederholen'), C.CONTEXTMENU_ITEMS_READ_ONLY, 'Nur Lesezugriff'), C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Spalteninhalt löschen'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Ausrichtung'), C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Linksbündig'), C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Zentriert'), C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Rechtsbündig'), C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Blocksatz'), C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Oben'), C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Mitte'), C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Unten'), C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Spalte fixieren'), C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Spaltenfixierung aufheben'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Rahmen'), C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Oben'), C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Rechts'), C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Unten'), C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Links'), C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Kein Rahmen'), C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Kommentar hinzufügen'), C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Kommentar bearbeiten'), C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Kommentar löschen'), C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Schreibschutz Kommentar'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Zellen verbinden'), C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Zellen teilen'), C.CONTEXTMENU_ITEMS_COPY, 'Kopieren'), C.CONTEXTMENU_ITEMS_CUT, 'Ausschneiden'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Nachfolgerzeile einfügen'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Von Vorgängerzeile abkoppeln'), C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Spalte ausblenden', 'Spalten ausblenden']), C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Spalte einblenden', 'Spalten einblenden']), C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Zeile ausblenden', 'Zeilen ausblenden']), C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Zeile einblenden', 'Zeilen einblenden']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Kein Filter'), C.FILTERS_CONDITIONS_EMPTY, 'Ist leer'), C.FILTERS_CONDITIONS_NOT_EMPTY, 'Ist nicht leer'), C.FILTERS_CONDITIONS_EQUAL, 'Ist gleich'), C.FILTERS_CONDITIONS_NOT_EQUAL, 'Ist ungleich'), C.FILTERS_CONDITIONS_BEGINS_WITH, 'Beginnt mit'), C.FILTERS_CONDITIONS_ENDS_WITH, 'Endet mit'), C.FILTERS_CONDITIONS_CONTAINS, 'Enthält'), C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Enthält nicht'), C.FILTERS_CONDITIONS_GREATER_THAN, 'Größer als'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Größer gleich'), C.FILTERS_CONDITIONS_LESS_THAN, 'Kleiner als'), C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Kleiner gleich'), C.FILTERS_CONDITIONS_BETWEEN, 'Zwischen'), C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Außerhalb'), C.FILTERS_CONDITIONS_AFTER, 'Nach'), C.FILTERS_CONDITIONS_BEFORE, 'Vor'), C.FILTERS_CONDITIONS_TODAY, 'Heute'), C.FILTERS_CONDITIONS_TOMORROW, 'Morgen'), C.FILTERS_CONDITIONS_YESTERDAY, 'Gestern'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Leere Zellen'), C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Per Bedingung filtern'), C.FILTERS_DIVS_FILTER_BY_VALUE, 'Nach Zahlen filtern'), C.FILTERS_LABELS_CONJUNCTION, 'Und'), C.FILTERS_LABELS_DISJUNCTION, 'Oder'), C.FILTERS_BUTTONS_SELECT_ALL, 'Alles auswählen'), C.FILTERS_BUTTONS_CLEAR, 'Auswahl aufheben'), C.FILTERS_BUTTONS_OK, 'OK'), C.FILTERS_BUTTONS_CANCEL, 'Abbrechen'), C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Suchen'), _defineProperty(_defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Wert'), C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Alternativwert'));
_handsontable.default.languages.registerLanguageDictionary(dictionary);
var _default = exports.default = dictionary;

/***/ })
/******/ ])["___"];
});