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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
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
 * Description: Definition file for German - Switzerland language-country.
 */
var C = _handsontable.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'de-CH'
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Zeile einfügen oberhalb'), C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Zeile einfügen unterhalb'), C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Spalte einfügen links'), C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Spalte einfügen rechts'), C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Zeile löschen', 'Zeilen löschen']), C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Spalte löschen', 'Spalten löschen']), C.CONTEXTMENU_ITEMS_UNDO, 'Rückgangig'), C.CONTEXTMENU_ITEMS_REDO, 'Wiederholen'), C.CONTEXTMENU_ITEMS_READ_ONLY, 'Nur Lesezugriff'), C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Spalteninhalt löschen'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Ausrichtung'), C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Linksbündig'), C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Zentriert'), C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Rechtsbündig'), C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Blocksatz'), C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Oben'), C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Mitte'), C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Unten'), C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Spalte fixieren'), C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Spaltenfixierung aufheben'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Rahmen'), C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Oben'), C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Rechts'), C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Unten'), C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Links'), C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Kein Rahmen'), C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Kommentar hinzufügen'), C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Kommentar bearbeiten'), C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Kommentar löschen'), C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Schreibschutz Kommentar'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Zellen verbinden'), C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Zellen teilen'), C.CONTEXTMENU_ITEMS_COPY, 'Kopieren'), C.CONTEXTMENU_ITEMS_CUT, 'Ausschneiden'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Nachfolgerzeile einfügen'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Von Vorgängerzeile abkoppeln'), C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Spalte ausblenden', 'Spalten ausblenden']), C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Spalte einblenden', 'Spalten einblenden']), C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Zeile ausblenden', 'Zeilen ausblenden']), C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Zeile einblenden', 'Zeilen einblenden']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Kein Filter'), C.FILTERS_CONDITIONS_EMPTY, 'Ist leer'), C.FILTERS_CONDITIONS_NOT_EMPTY, 'Ist nicht leer'), C.FILTERS_CONDITIONS_EQUAL, 'Ist gleich'), C.FILTERS_CONDITIONS_NOT_EQUAL, 'Ist ungleich'), C.FILTERS_CONDITIONS_BEGINS_WITH, 'Beginnt mit'), C.FILTERS_CONDITIONS_ENDS_WITH, 'Endet mit'), C.FILTERS_CONDITIONS_CONTAINS, 'Enthält'), C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Enthält nicht'), C.FILTERS_CONDITIONS_GREATER_THAN, 'Grösser als'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Grösser gleich'), C.FILTERS_CONDITIONS_LESS_THAN, 'Kleiner als'), C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Kleiner gleich'), C.FILTERS_CONDITIONS_BETWEEN, 'Zwischen'), C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Ausserhalb'), C.FILTERS_CONDITIONS_AFTER, 'Nach'), C.FILTERS_CONDITIONS_BEFORE, 'Vor'), C.FILTERS_CONDITIONS_TODAY, 'Heute'), C.FILTERS_CONDITIONS_TOMORROW, 'Morgen'), C.FILTERS_CONDITIONS_YESTERDAY, 'Gestern'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Leere Zellen'), C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Per Bedingung filtern'), C.FILTERS_DIVS_FILTER_BY_VALUE, 'Nach Zahlen filtern'), C.FILTERS_LABELS_CONJUNCTION, 'Und'), C.FILTERS_LABELS_DISJUNCTION, 'Oder'), C.FILTERS_BUTTONS_SELECT_ALL, 'Alles auswählen'), C.FILTERS_BUTTONS_CLEAR, 'Auswahl aufheben'), C.FILTERS_BUTTONS_OK, 'OK'), C.FILTERS_BUTTONS_CANCEL, 'Abbrechen'), C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Suchen'), _defineProperty(_defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Wert'), C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Alternativwert'));
_handsontable.default.languages.registerLanguageDictionary(dictionary);
var _default = exports.default = dictionary;

/***/ }),
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

/***/ }),
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

/***/ }),
/* 4 */
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
 * Last updated: Mar 05, 2018
 *
 * Description: Definition file for Spanish - Mexico language-country.
 */
var C = _handsontable.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'es-MX'
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Insertar fila arriba'), C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Insertar fila abajo'), C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Insertar columna izquierda'), C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Insertar columna derecha'), C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Eliminar fila', 'Eliminar filas']), C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Eliminar columna', 'Eliminar columnas']), C.CONTEXTMENU_ITEMS_UNDO, 'Deshacer'), C.CONTEXTMENU_ITEMS_REDO, 'Rehacer'), C.CONTEXTMENU_ITEMS_READ_ONLY, 'Solo lectura'), C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Limpiar columna'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Alineación'), C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Izquierda'), C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Centro'), C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Derecha'), C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Justificar'), C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Superior'), C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Medio'), C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Inferior'), C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Congelar columna'), C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Descongelar columna'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Bordes'), C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Superior'), C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Derecho'), C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Inferior'), C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Izquierdo'), C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Quitar borde(s)'), C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Agregar comentario'), C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Editar comentario'), C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Borrar comentario'), C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Comentario Solo de lectura'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Unir celdas'), C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Separar celdas'), C.CONTEXTMENU_ITEMS_COPY, 'Copiar'), C.CONTEXTMENU_ITEMS_CUT, 'Cortar'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Insertar fila hija'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Separar del padre'), C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Esconder columna', 'Esconder columnas']), C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Mostrar columna', 'Mostrar columnas']), C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Esconder fila', 'Esconder filas']), C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Mostrar fila', 'Mostrar filas']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Ninguna'), C.FILTERS_CONDITIONS_EMPTY, 'Está vacío'), C.FILTERS_CONDITIONS_NOT_EMPTY, 'No está vacío'), C.FILTERS_CONDITIONS_EQUAL, 'Es igual a'), C.FILTERS_CONDITIONS_NOT_EQUAL, 'No es igual a'), C.FILTERS_CONDITIONS_BEGINS_WITH, 'Comienza con'), C.FILTERS_CONDITIONS_ENDS_WITH, 'Termina con'), C.FILTERS_CONDITIONS_CONTAINS, 'Contiene'), C.FILTERS_CONDITIONS_NOT_CONTAIN, 'No contiene'), C.FILTERS_CONDITIONS_GREATER_THAN, 'Mayor que'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Mayor o igual que'), C.FILTERS_CONDITIONS_LESS_THAN, 'Menor que'), C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Menor o igual que'), C.FILTERS_CONDITIONS_BETWEEN, 'Es entre'), C.FILTERS_CONDITIONS_NOT_BETWEEN, 'No es entre'), C.FILTERS_CONDITIONS_AFTER, 'Después'), C.FILTERS_CONDITIONS_BEFORE, 'Antes'), C.FILTERS_CONDITIONS_TODAY, 'Hoy'), C.FILTERS_CONDITIONS_TOMORROW, 'Mañana'), C.FILTERS_CONDITIONS_YESTERDAY, 'Ayer'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Celdas vacías'), C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtrar por condición'), C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtrar por valor'), C.FILTERS_LABELS_CONJUNCTION, 'Y'), C.FILTERS_LABELS_DISJUNCTION, 'O'), C.FILTERS_BUTTONS_SELECT_ALL, 'Seleccionar todo'), C.FILTERS_BUTTONS_CLEAR, 'Borrar'), C.FILTERS_BUTTONS_OK, 'OK'), C.FILTERS_BUTTONS_CANCEL, 'Cancelar'), C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Buscar'), _defineProperty(_defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Valor'), C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Valor secundario'));
_handsontable.default.languages.registerLanguageDictionary(dictionary);
var _default = exports.default = dictionary;

/***/ }),
/* 5 */
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
 * Authors: Stefan Salzl, Thomas Senn
 * Last updated: Feb 05, 2018
 *
 * Description: Definition file for French - France language-country.
 */
var C = _handsontable.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'fr-FR'
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Insérer une ligne en haut'), C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Insérer une ligne en bas'), C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Insérer une colonne à gauche'), C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Insérer une colonne à droite'), C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Supprimer une ligne', 'Supprimer les lignes']), C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Supprimer une colonne', 'Supprimer les colonnes']), C.CONTEXTMENU_ITEMS_UNDO, 'Annuler'), C.CONTEXTMENU_ITEMS_REDO, 'Rétablir'), C.CONTEXTMENU_ITEMS_READ_ONLY, 'Lecture seule'), C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Effacer la colonne'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Alignement'), C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Gauche'), C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Centre'), C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Droite'), C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Justifié'), C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'En haut'), C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Au milieu'), C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'En bas'), C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Figer la colonne'), C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Libérer la colonne'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Bordures'), C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Supérieure'), C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Droite'), C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Inférieure'), C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Gauche'), C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Pas de bordure'), C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Ajouter commentaire'), C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Modifier commentaire'), C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Supprimer commentaire'), C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Commentaire en lecture seule'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Fusionner les cellules'), C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Séparer les cellules'), C.CONTEXTMENU_ITEMS_COPY, 'Copier'), C.CONTEXTMENU_ITEMS_CUT, 'Couper'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Insérer une sous-ligne'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Détacher de la ligne précédente'), C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Masquer colonne', 'Masquer les colonnes']), C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Afficher colonne', 'Afficher les colonnes']), C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Masquer ligne', 'Masquer les lignes']), C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Afficher ligne', 'Afficher les lignes']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Aucun'), C.FILTERS_CONDITIONS_EMPTY, 'Est vide'), C.FILTERS_CONDITIONS_NOT_EMPTY, 'N\'est pas vide'), C.FILTERS_CONDITIONS_EQUAL, 'Egal à'), C.FILTERS_CONDITIONS_NOT_EQUAL, 'Est différent de'), C.FILTERS_CONDITIONS_BEGINS_WITH, 'Commence par'), C.FILTERS_CONDITIONS_ENDS_WITH, 'Finit par'), C.FILTERS_CONDITIONS_CONTAINS, 'Contient'), C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Ne contient pas'), C.FILTERS_CONDITIONS_GREATER_THAN, 'Supérieur à'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Supérieur ou égal à'), C.FILTERS_CONDITIONS_LESS_THAN, 'Inférieur à'), C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Inférieur ou égal à'), C.FILTERS_CONDITIONS_BETWEEN, 'Est compris entre'), C.FILTERS_CONDITIONS_NOT_BETWEEN, 'N\'est pas compris entre'), C.FILTERS_CONDITIONS_AFTER, 'Après le'), C.FILTERS_CONDITIONS_BEFORE, 'Avant le'), C.FILTERS_CONDITIONS_TODAY, 'Aujourd\'hui'), C.FILTERS_CONDITIONS_TOMORROW, 'Demain'), C.FILTERS_CONDITIONS_YESTERDAY, 'Hier'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Cellules vides'), C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtrer par conditions'), C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtrer par valeurs'), C.FILTERS_LABELS_CONJUNCTION, 'Et'), C.FILTERS_LABELS_DISJUNCTION, 'Ou'), C.FILTERS_BUTTONS_SELECT_ALL, 'Tout sélectionner'), C.FILTERS_BUTTONS_CLEAR, 'Effacer la sélection'), C.FILTERS_BUTTONS_OK, 'OK'), C.FILTERS_BUTTONS_CANCEL, 'Annuler'), C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Chercher'), _defineProperty(_defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Valeur'), C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Valeur de remplacement'));
_handsontable.default.languages.registerLanguageDictionary(dictionary);
var _default = exports.default = dictionary;

/***/ }),
/* 6 */
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
 * Authors: Andrea Cattaneo
 * Last updated: Sep 14, 2018
 *
 * Description: Definition file for Italian - Italy language-country.
 */
var C = _handsontable.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'it-IT'
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Inserisci riga sopra'), C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Inserisci riga sotto'), C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Inserisci colonna a sinistra'), C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Inserisci colonna a destra'), C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Rimuovi riga', 'Rimuovi righe']), C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Rimuovi colonna', 'Rimuovi colonne']), C.CONTEXTMENU_ITEMS_UNDO, 'Annulla'), C.CONTEXTMENU_ITEMS_REDO, 'Ripeti'), C.CONTEXTMENU_ITEMS_READ_ONLY, 'Sola lettura'), C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Svuota colonna'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Allineamento'), C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Sinistra'), C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Centro'), C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Destra'), C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Giustificato'), C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'In alto'), C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'A metà'), C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'In basso'), C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Blocca colonna'), C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Sblocca colonna'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Bordi'), C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Sopra'), C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Destra'), C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Sotto'), C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Sinistra'), C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Rimuovi bordo(i)'), C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Aggiungi commento'), C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Modifica commento'), C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Rimuovi commento'), C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Commento in sola lettura'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Unisci celle'), C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Separa celle'), C.CONTEXTMENU_ITEMS_COPY, 'Copia'), C.CONTEXTMENU_ITEMS_CUT, 'Taglia'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Inserisci riga figlia'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Scollega da riga madre'), C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Nascondi colonna', 'Nascondi colonne']), C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Mostra colonna', 'Mostra colonne']), C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Nascondi riga', 'Nascondi righe']), C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Mostra riga', 'Mostra righe']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Nessuna'), C.FILTERS_CONDITIONS_EMPTY, 'È vuoto'), C.FILTERS_CONDITIONS_NOT_EMPTY, 'Non è vuoto'), C.FILTERS_CONDITIONS_EQUAL, 'È uguale a'), C.FILTERS_CONDITIONS_NOT_EQUAL, 'È diverso da'), C.FILTERS_CONDITIONS_BEGINS_WITH, 'Inizia con'), C.FILTERS_CONDITIONS_ENDS_WITH, 'Termina con'), C.FILTERS_CONDITIONS_CONTAINS, 'Contiene'), C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Non contiene'), C.FILTERS_CONDITIONS_GREATER_THAN, 'Maggiore'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Maggiore o uguale'), C.FILTERS_CONDITIONS_LESS_THAN, 'Minore'), C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Minore o uguale'), C.FILTERS_CONDITIONS_BETWEEN, 'È compreso tra'), C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Non è compreso tra'), C.FILTERS_CONDITIONS_AFTER, 'Dopo'), C.FILTERS_CONDITIONS_BEFORE, 'Prima'), C.FILTERS_CONDITIONS_TODAY, 'Oggi'), C.FILTERS_CONDITIONS_TOMORROW, 'Domani'), C.FILTERS_CONDITIONS_YESTERDAY, 'Ieri'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Celle vuote'), C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtra per condizione'), C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtra per valore'), C.FILTERS_LABELS_CONJUNCTION, 'E'), C.FILTERS_LABELS_DISJUNCTION, 'O'), C.FILTERS_BUTTONS_SELECT_ALL, 'Seleziona tutto'), C.FILTERS_BUTTONS_CLEAR, 'Pulisci'), C.FILTERS_BUTTONS_OK, 'OK'), C.FILTERS_BUTTONS_CANCEL, 'Annulla'), C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Cerca'), _defineProperty(_defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Valore'), C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Sostituisci con'));
_handsontable.default.languages.registerLanguageDictionary(dictionary);
var _default = exports.default = dictionary;

/***/ }),
/* 7 */
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
 * Authors: hand-dot
 * Last updated: Jan 28, 2018
 *
 * Description: Definition file for Japanese - Japan language-country.
 */
var C = _handsontable.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'ja-JP'
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, '行を上に挿入'), C.CONTEXTMENU_ITEMS_ROW_BELOW, '行を下に挿入'), C.CONTEXTMENU_ITEMS_INSERT_LEFT, '列を左に挿入'), C.CONTEXTMENU_ITEMS_INSERT_RIGHT, '列を右に挿入'), C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['行を削除', '行を削除']), C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['列を削除', '列を削除']), C.CONTEXTMENU_ITEMS_UNDO, '元に戻す'), C.CONTEXTMENU_ITEMS_REDO, 'やり直し'), C.CONTEXTMENU_ITEMS_READ_ONLY, '読み取り専用'), C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, '列をクリア'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, '配置'), C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, '左揃え'), C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, '中央揃え'), C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, '右揃え'), C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, '両端揃え'), C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, '上揃え'), C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, '中央揃え(垂直)'), C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, '下揃え'), C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, '列を固定'), C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, '列の固定を解除'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, '枠線'), C.CONTEXTMENU_ITEMS_BORDERS_TOP, '上'), C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, '右'), C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, '下'), C.CONTEXTMENU_ITEMS_BORDERS_LEFT, '左'), C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, '枠線を削除'), C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'コメントを追加'), C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'コメントを編集'), C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'コメントを削除'), C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, '読み取り専用コメント'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'セルを結合'), C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'セルの結合を解除'), C.CONTEXTMENU_ITEMS_COPY, 'コピー'), C.CONTEXTMENU_ITEMS_CUT, '切り取り'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, '子の行を挿入'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, '親の行と切り離す'), C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['列を非表示', '列を非表示']), C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['列を表示', '列を表示']), C.CONTEXTMENU_ITEMS_HIDE_ROW, ['行を非表示', '行を非表示']), C.CONTEXTMENU_ITEMS_SHOW_ROW, ['行を表示', '行を表示']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'なし'), C.FILTERS_CONDITIONS_EMPTY, '空白'), C.FILTERS_CONDITIONS_NOT_EMPTY, '空白ではない'), C.FILTERS_CONDITIONS_EQUAL, '次と等しい'), C.FILTERS_CONDITIONS_NOT_EQUAL, '次と等しくない'), C.FILTERS_CONDITIONS_BEGINS_WITH, '次で始まる'), C.FILTERS_CONDITIONS_ENDS_WITH, '次で終わる'), C.FILTERS_CONDITIONS_CONTAINS, '次を含む'), C.FILTERS_CONDITIONS_NOT_CONTAIN, '次を含まない'), C.FILTERS_CONDITIONS_GREATER_THAN, '次より大きい'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, '以上'), C.FILTERS_CONDITIONS_LESS_THAN, '次より小さい'), C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, '以下'), C.FILTERS_CONDITIONS_BETWEEN, '次の間にある'), C.FILTERS_CONDITIONS_NOT_BETWEEN, '次の間にない'), C.FILTERS_CONDITIONS_AFTER, '次より後の日付'), C.FILTERS_CONDITIONS_BEFORE, '次より前の日付'), C.FILTERS_CONDITIONS_TODAY, '今日'), C.FILTERS_CONDITIONS_TOMORROW, '明日'), C.FILTERS_CONDITIONS_YESTERDAY, '昨日'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, '空白のセル'), C.FILTERS_DIVS_FILTER_BY_CONDITION, '条件でフィルタ'), C.FILTERS_DIVS_FILTER_BY_VALUE, '値でフィルタ'), C.FILTERS_LABELS_CONJUNCTION, 'かつ'), C.FILTERS_LABELS_DISJUNCTION, 'もしくは'), C.FILTERS_BUTTONS_SELECT_ALL, 'すべて選択'), C.FILTERS_BUTTONS_CLEAR, 'クリア'), C.FILTERS_BUTTONS_OK, 'OK'), C.FILTERS_BUTTONS_CANCEL, 'キャンセル'), C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, '検索'), _defineProperty(_defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, '値'), C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, '値2'));
_handsontable.default.languages.registerLanguageDictionary(dictionary);
var _default = exports.default = dictionary;

/***/ }),
/* 8 */
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
 * Authors: Hwang, Gun-gu
 * Last updated: Aug 20, 2018
 *
 * Description: Definition file for Korean - Korea language-country.
 */
var C = _handsontable.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'ko-KR'
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, '위쪽에 행 삽입'), C.CONTEXTMENU_ITEMS_ROW_BELOW, '아래쪽에 행 삽입'), C.CONTEXTMENU_ITEMS_INSERT_LEFT, '왼쪽에 열 삽입'), C.CONTEXTMENU_ITEMS_INSERT_RIGHT, '오른쪽에 열 삽입'), C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['행 삭제', '여러 행 삭제']), C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['열 삭제', '여러 열 삭제']), C.CONTEXTMENU_ITEMS_UNDO, '되돌리기'), C.CONTEXTMENU_ITEMS_REDO, '다시하기'), C.CONTEXTMENU_ITEMS_READ_ONLY, '읽기 전용'), C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, '열 지우기'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, '정렬'), C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, '왼쪽'), C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, '중앙'), C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, '오른쪽'), C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, '자동'), C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, '위쪽'), C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, '가운데'), C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, '아래쪽'), C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, '열 고정'), C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, '열 고정 해제'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, '테두리'), C.CONTEXTMENU_ITEMS_BORDERS_TOP, '위쪽'), C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, '오른쪽'), C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, '아래쪽'), C.CONTEXTMENU_ITEMS_BORDERS_LEFT, '왼쪽'), C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, '테두리 지우기'), C.CONTEXTMENU_ITEMS_ADD_COMMENT, '댓글 달기'), C.CONTEXTMENU_ITEMS_EDIT_COMMENT, '댓글 편집'), C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, '댓글 삭제'), C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, '읽기 전용 댓글'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, '셀 병합'), C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, '셀 병합 해제'), C.CONTEXTMENU_ITEMS_COPY, '복사'), C.CONTEXTMENU_ITEMS_CUT, '잘라내기'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, '자녀 행 추가'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, '부모행에서 제거'), C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['열 숨기기', '여러 열 숨기기']), C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['열 숨기기 해제', '여러 열 숨기기 해제']), C.CONTEXTMENU_ITEMS_HIDE_ROW, ['행 숨기기', '여러 행 숨기기']), C.CONTEXTMENU_ITEMS_SHOW_ROW, ['행 숨기기 해제', '여러 행 숨기기 해제']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, '조건없음'), C.FILTERS_CONDITIONS_EMPTY, '비어있음'), C.FILTERS_CONDITIONS_NOT_EMPTY, '비어있지 않음'), C.FILTERS_CONDITIONS_EQUAL, '같'), C.FILTERS_CONDITIONS_NOT_EQUAL, '같지 않음'), C.FILTERS_CONDITIONS_BEGINS_WITH, '시작 문자'), C.FILTERS_CONDITIONS_ENDS_WITH, '끝 문자'), C.FILTERS_CONDITIONS_CONTAINS, '포함'), C.FILTERS_CONDITIONS_NOT_CONTAIN, '포함하지 않음'), C.FILTERS_CONDITIONS_GREATER_THAN, '보다 큼'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, '크거나 같음'), C.FILTERS_CONDITIONS_LESS_THAN, '보다 작'), C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, '작거나 같음'), C.FILTERS_CONDITIONS_BETWEEN, '사이'), C.FILTERS_CONDITIONS_NOT_BETWEEN, '사이 제외'), C.FILTERS_CONDITIONS_AFTER, '다음'), C.FILTERS_CONDITIONS_BEFORE, '전'), C.FILTERS_CONDITIONS_TODAY, '오늘'), C.FILTERS_CONDITIONS_TOMORROW, '내일'), C.FILTERS_CONDITIONS_YESTERDAY, '어제'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, '공란'), C.FILTERS_DIVS_FILTER_BY_CONDITION, '조건부 필터'), C.FILTERS_DIVS_FILTER_BY_VALUE, '값 필터'), C.FILTERS_LABELS_CONJUNCTION, '그리고'), C.FILTERS_LABELS_DISJUNCTION, '또는'), C.FILTERS_BUTTONS_SELECT_ALL, '전체선택'), C.FILTERS_BUTTONS_CLEAR, '지우기'), C.FILTERS_BUTTONS_OK, '확인'), C.FILTERS_BUTTONS_CANCEL, '취소'), C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, '찾기'), _defineProperty(_defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, '값'), C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, '두번째 값'));
_handsontable.default.languages.registerLanguageDictionary(dictionary);
var _default = exports.default = dictionary;

/***/ }),
/* 9 */
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
 * Authors: Edgars Voroboks
 * Last updated: Jun 14, 2018
 *
 * Description: Definition file for Latvian - Latvia language-country.
 */
var C = _handsontable.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'lv-LV'
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Ievietot rindu augšā'), C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Ievietot rindu apakšā'), C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Ievietot kolonnu pa kreisi'), C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Ievietot kolonnu pa labi'), C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Dzēst rindu', 'Dzēst rindas']), C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Dzēst kolonnu', 'Dzēst kolonnas']), C.CONTEXTMENU_ITEMS_UNDO, 'Atsaukt'), C.CONTEXTMENU_ITEMS_REDO, 'Pārtaisīt'), C.CONTEXTMENU_ITEMS_READ_ONLY, 'Lasīšanas režīms'), C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Notīrīt kolonnu'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Izvietojums'), C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Pa kreisi'), C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Centrēts'), C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Pa labi'), C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Izlīdzināts'), C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Augšā'), C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Pa vidu'), C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Apakšā'), C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Iesaldēt kolonnu'), C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Atsaldēt kolonnu'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Robežas'), C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Augšā'), C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Pa labi'), C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Apakšā'), C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Pa kreisi'), C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Noņemt robežu(-as)'), C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Pievienot komentāru'), C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Labot komentāru'), C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Dzēst komentāru'), C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Lasīšanas režīma komentārs'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Sapludināt šūnas'), C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Nesapludināt šunas'), C.CONTEXTMENU_ITEMS_COPY, 'Kopēt'), C.CONTEXTMENU_ITEMS_CUT, 'Izgriezt'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Ievietot pakārtoto rindu'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Atdalīt no vecāka'), C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Palēpt kolonnu', 'Palēpt kolonnas']), C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Rādīt kolonnu', 'Rādīt kolonnas']), C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Palēpt rindu', 'Paslēpt rindas']), C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Rādīt rindu', 'Rādīt rindas']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Nekas'), C.FILTERS_CONDITIONS_EMPTY, 'Ir tukšs'), C.FILTERS_CONDITIONS_NOT_EMPTY, 'Nav tukšs'), C.FILTERS_CONDITIONS_EQUAL, 'Vienāds ar'), C.FILTERS_CONDITIONS_NOT_EQUAL, 'Nav vienāds ar'), C.FILTERS_CONDITIONS_BEGINS_WITH, 'Sākas ar'), C.FILTERS_CONDITIONS_ENDS_WITH, 'Beidzas ar'), C.FILTERS_CONDITIONS_CONTAINS, 'Satur'), C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Nesatur'), C.FILTERS_CONDITIONS_GREATER_THAN, 'Lielāks par'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Lielāks vai vienāds ar'), C.FILTERS_CONDITIONS_LESS_THAN, 'Mazāks par'), C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Mazāks vai vienāds ar'), C.FILTERS_CONDITIONS_BETWEEN, 'Ir starp'), C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Nav starp'), C.FILTERS_CONDITIONS_AFTER, 'Pēc'), C.FILTERS_CONDITIONS_BEFORE, 'Pirms'), C.FILTERS_CONDITIONS_TODAY, 'Šodien'), C.FILTERS_CONDITIONS_TOMORROW, 'Rītdien'), C.FILTERS_CONDITIONS_YESTERDAY, 'Vakar'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Tukšas šūnas'), C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtrēt pēc nosacījuma'), C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtrēt pēc vērtības'), C.FILTERS_LABELS_CONJUNCTION, 'Un'), C.FILTERS_LABELS_DISJUNCTION, 'Vai'), C.FILTERS_BUTTONS_SELECT_ALL, 'Izvēlēties visu'), C.FILTERS_BUTTONS_CLEAR, 'Notīrīt'), C.FILTERS_BUTTONS_OK, 'Labi'), C.FILTERS_BUTTONS_CANCEL, 'Atcelt'), C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Meklēt'), _defineProperty(_defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Vērtība'), C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Otra vērtība'));
_handsontable.default.languages.registerLanguageDictionary(dictionary);
var _default = exports.default = dictionary;

/***/ }),
/* 10 */
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

/***/ }),
/* 11 */
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
 * Authors: Tomas Rapkauskas, Anton Brouwer
 * Last updated: Jun 07, 2018
 *
 * Description: Definition file for Dutch - The Netherlands language-country.
 */
var C = _handsontable.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'nl-NL'
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Rij boven invoegen'), C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Rij onder invoegen'), C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Kolom links invoegen'), C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Kolom rechts invoegen'), C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Rij verwijderen', 'Rijen verwijderen']), C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Kolom verwijderen', 'Kolommen verwijderen']), C.CONTEXTMENU_ITEMS_UNDO, 'Ongedaan maken'), C.CONTEXTMENU_ITEMS_REDO, 'Opnieuw uitvoeren'), C.CONTEXTMENU_ITEMS_READ_ONLY, 'Alleen lezen'), C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Kolom leegmaken'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Uitlijning'), C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Links'), C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Gecentreerd'), C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Rechts'), C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Uitvullen'), C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Boven'), C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Midden'), C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Onder'), C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Kolom blokkeren'), C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Kolom blokkering opheffen'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Randen'), C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Boven'), C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Rechts'), C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Onder'), C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Links'), C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Rand(en) verwijderen'), C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Opmerking toevoegen'), C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Opmerking bewerken'), C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Opmerking verwijderen'), C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Opmerking Alleen-lezen'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Cellen samenvoegen'), C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Samenvoeging van cellen opheffen'), C.CONTEXTMENU_ITEMS_COPY, 'Kopiëren'), C.CONTEXTMENU_ITEMS_CUT, 'Knippen'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Geneste rij invoegen'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Geneste rij ontkoppelen'), C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Kolom verbergen', 'Kolommen verbergen']), C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Kolom zichbaar maken', 'Kolommen zichtbaar maken']), C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Rij verbergen', 'Rijen verbergen']), C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Rij zichtbaar maken', 'Rijen zichtbaar maken']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Geen'), C.FILTERS_CONDITIONS_EMPTY, 'Is leeg'), C.FILTERS_CONDITIONS_NOT_EMPTY, 'Is niet leeg'), C.FILTERS_CONDITIONS_EQUAL, 'Is gelijk aan'), C.FILTERS_CONDITIONS_NOT_EQUAL, 'Is niet gelijk aan'), C.FILTERS_CONDITIONS_BEGINS_WITH, 'Begint met'), C.FILTERS_CONDITIONS_ENDS_WITH, 'Eindigt op'), C.FILTERS_CONDITIONS_CONTAINS, 'Bevat'), C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Bevat niet'), C.FILTERS_CONDITIONS_GREATER_THAN, 'Is groter'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Is groter of gelijk aan'), C.FILTERS_CONDITIONS_LESS_THAN, 'Is kleiner dan'), C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Is kleiner dan of gelijk aan'), C.FILTERS_CONDITIONS_BETWEEN, 'Is tussen'), C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Ligt niet tussen'), C.FILTERS_CONDITIONS_AFTER, 'Na'), C.FILTERS_CONDITIONS_BEFORE, 'Voor'), C.FILTERS_CONDITIONS_TODAY, 'Vandaag'), C.FILTERS_CONDITIONS_TOMORROW, 'Morgen'), C.FILTERS_CONDITIONS_YESTERDAY, 'Gisteren'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Cellen leegmaken'), C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filteren op conditie'), C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filteren op waarde'), C.FILTERS_LABELS_CONJUNCTION, 'En'), C.FILTERS_LABELS_DISJUNCTION, 'Of'), C.FILTERS_BUTTONS_SELECT_ALL, 'Alles selecteren'), C.FILTERS_BUTTONS_CLEAR, 'Leeg maken'), C.FILTERS_BUTTONS_OK, 'OK'), C.FILTERS_BUTTONS_CANCEL, 'Annuleren'), C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Zoeken'), _defineProperty(_defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Waarde'), C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Tweede waarde'));
_handsontable.default.languages.registerLanguageDictionary(dictionary);
var _default = exports.default = dictionary;

/***/ }),
/* 12 */
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

/***/ }),
/* 13 */
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
 * Authors: Júlio C. Zuppa
 * Last updated: Jan 12, 2018
 *
 * Description: Definition file for Portuguese - Brazil language-country.
 */
var C = _handsontable.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'pt-BR'
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Inserir linha acima'), C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Inserir linha abaixo'), C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Inserir coluna esquerda'), C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Inserir coluna direita'), C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Excluir linha', 'Excluir linhas']), C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Excluir coluna', 'Excluir colunas']), C.CONTEXTMENU_ITEMS_UNDO, 'Desfazer'), C.CONTEXTMENU_ITEMS_REDO, 'Refazer'), C.CONTEXTMENU_ITEMS_READ_ONLY, 'Somente leitura'), C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Limpar coluna'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Alinhamento'), C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Esquerda'), C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Centralizado'), C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Direita'), C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Justificado'), C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Superior'), C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Meio'), C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Inferior'), C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Congelar coluna'), C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Descongelar coluna'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Bordas'), C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Superior'), C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Direita'), C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Inferior'), C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Esquerda'), C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Excluir bordas(s)'), C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Incluir comentário'), C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Editar comentário'), C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Remover comentário'), C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Comentário somente leitura'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Mesclar células'), C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Desfazer mesclagem de células'), C.CONTEXTMENU_ITEMS_COPY, 'Copiar'), C.CONTEXTMENU_ITEMS_CUT, 'Recortar'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Inserir linha filha'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Desanexar da linha pai'), C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Ocultar coluna', 'Ocultar colunas']), C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Exibir coluna', 'Exibir colunas']), C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Ocultar linha', 'Ocultar linhas']), C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Exibir linha', 'Exibir linhas']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Nenhum'), C.FILTERS_CONDITIONS_EMPTY, 'É vazio'), C.FILTERS_CONDITIONS_NOT_EMPTY, 'Não é vazio'), C.FILTERS_CONDITIONS_EQUAL, 'É igual a'), C.FILTERS_CONDITIONS_NOT_EQUAL, 'É diferente de'), C.FILTERS_CONDITIONS_BEGINS_WITH, 'Começa com'), C.FILTERS_CONDITIONS_ENDS_WITH, 'Termina com'), C.FILTERS_CONDITIONS_CONTAINS, 'Contém'), C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Não contém'), C.FILTERS_CONDITIONS_GREATER_THAN, 'Maior que'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Maior ou igual a'), C.FILTERS_CONDITIONS_LESS_THAN, 'Menor que'), C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Maior ou igual a'), C.FILTERS_CONDITIONS_BETWEEN, 'Está entre'), C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Não está entre'), C.FILTERS_CONDITIONS_AFTER, 'Depois'), C.FILTERS_CONDITIONS_BEFORE, 'Antes'), C.FILTERS_CONDITIONS_TODAY, 'Hoje'), C.FILTERS_CONDITIONS_TOMORROW, 'Amanhã'), C.FILTERS_CONDITIONS_YESTERDAY, 'Ontem'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Células vazias'), C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtrar por condição'), C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtrar por valor'), C.FILTERS_LABELS_CONJUNCTION, 'E'), C.FILTERS_LABELS_DISJUNCTION, 'Ou'), C.FILTERS_BUTTONS_SELECT_ALL, 'Selecionar tudo'), C.FILTERS_BUTTONS_CLEAR, 'Limpar'), C.FILTERS_BUTTONS_OK, 'OK'), C.FILTERS_BUTTONS_CANCEL, 'Cancelar'), C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Localizar'), _defineProperty(_defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Valor'), C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Segundo valor'));
_handsontable.default.languages.registerLanguageDictionary(dictionary);
var _default = exports.default = dictionary;

/***/ }),
/* 14 */
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
 * Authors: Alexey Rogachev
 * Last updated: Feb 28, 2018
 *
 * Description: Definition file for Russian - Russia language-country.
 */
var C = _handsontable.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'ru-RU'
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Вставить строку выше'), C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Вставить строку ниже'), C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Вставить столбец слева'), C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Вставить столбец справа'), C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Удалить строку', 'Удалить строки']), C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Удалить столбец', 'Удалить столбцы']), C.CONTEXTMENU_ITEMS_UNDO, 'Отменить'), C.CONTEXTMENU_ITEMS_REDO, 'Повторить'), C.CONTEXTMENU_ITEMS_READ_ONLY, 'Только для чтения'), C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Очистить столбец'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Выравнивание'), C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'По левому краю'), C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'По центру'), C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'По правому краю'), C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'По ширине'), C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'По верхнему краю'), C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'По центру'), C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'По нижнему краю'), C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Закрепить столбец'), C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Открепить столбец'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Границы'), C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Сверху'), C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Справа'), C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Снизу'), C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Слева'), C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Удалить границу(ы)'), C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Добавить комментарий'), C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Редактировать комментарий'), C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Удалить комментарий'), C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Комментарий только для чтения'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Объединить ячейки'), C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Разделить ячейки'), C.CONTEXTMENU_ITEMS_COPY, 'Копировать'), C.CONTEXTMENU_ITEMS_CUT, 'Вырезать'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Вставить дочернюю строку'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Отделить от родителя'), C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Скрыть столбец', 'Скрыть столбцы']), C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Показать столбец', 'Показать столбцы']), C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Скрыть строку', 'Скрыть строки']), C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Показать строку', 'Показать строки']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Отсутствует'), C.FILTERS_CONDITIONS_EMPTY, 'Пусто'), C.FILTERS_CONDITIONS_NOT_EMPTY, 'Не пусто'), C.FILTERS_CONDITIONS_EQUAL, 'Равно'), C.FILTERS_CONDITIONS_NOT_EQUAL, 'Не равно'), C.FILTERS_CONDITIONS_BEGINS_WITH, 'Начинается на'), C.FILTERS_CONDITIONS_ENDS_WITH, 'Заканчивается на'), C.FILTERS_CONDITIONS_CONTAINS, 'Содержит'), C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Не содержит'), C.FILTERS_CONDITIONS_GREATER_THAN, 'Больше чем'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Больше или равно'), C.FILTERS_CONDITIONS_LESS_THAN, 'Меньше чем'), C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Меньше или равно'), C.FILTERS_CONDITIONS_BETWEEN, 'Между'), C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Не между'), C.FILTERS_CONDITIONS_AFTER, 'После'), C.FILTERS_CONDITIONS_BEFORE, 'До'), C.FILTERS_CONDITIONS_TODAY, 'Сегодня'), C.FILTERS_CONDITIONS_TOMORROW, 'Завтра'), C.FILTERS_CONDITIONS_YESTERDAY, 'Вчера'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Пустые ячейки'), C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Фильтр по условию'), C.FILTERS_DIVS_FILTER_BY_VALUE, 'Фильтр по значению'), C.FILTERS_LABELS_CONJUNCTION, 'И'), C.FILTERS_LABELS_DISJUNCTION, 'Или'), C.FILTERS_BUTTONS_SELECT_ALL, 'Выбрать все'), C.FILTERS_BUTTONS_CLEAR, 'Убрать'), C.FILTERS_BUTTONS_OK, 'OK'), C.FILTERS_BUTTONS_CANCEL, 'Отмена'), C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Поиск'), _defineProperty(_defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Значение'), C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Второе значение'));
_handsontable.default.languages.registerLanguageDictionary(dictionary);
var _default = exports.default = dictionary;

/***/ }),
/* 15 */
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
 * Authors: soakit
 * Last updated: Apr 28, 2018
 *
 * Description: Definition file for Chinese - China language-country.
 */
var C = _handsontable.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'zh-CN'
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, '上方插入行'), C.CONTEXTMENU_ITEMS_ROW_BELOW, '下方插入行'), C.CONTEXTMENU_ITEMS_INSERT_LEFT, '左方插入列'), C.CONTEXTMENU_ITEMS_INSERT_RIGHT, '右方插入列'), C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['移除该行', '移除多行']), C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['移除该列', '移除多列']), C.CONTEXTMENU_ITEMS_UNDO, '撤销'), C.CONTEXTMENU_ITEMS_REDO, '恢复'), C.CONTEXTMENU_ITEMS_READ_ONLY, '只读'), C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, '清空该列'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, '对齐'), C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, '左对齐'), C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, '水平居中'), C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, '右对齐'), C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, '两端对齐'), C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, '顶端对齐'), C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, '垂直居中'), C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, '底端对齐'), C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, '冻结该列'), C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, '取消冻结'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, '边框'), C.CONTEXTMENU_ITEMS_BORDERS_TOP, '上'), C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, '右'), C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, '下'), C.CONTEXTMENU_ITEMS_BORDERS_LEFT, '左'), C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, '移除边框'), C.CONTEXTMENU_ITEMS_ADD_COMMENT, '插入批注'), C.CONTEXTMENU_ITEMS_EDIT_COMMENT, '编辑批注'), C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, '删除批注'), C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, '只读批注'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, '合并'), C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, '取消合并'), C.CONTEXTMENU_ITEMS_COPY, '复制'), C.CONTEXTMENU_ITEMS_CUT, '剪切'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, '插入子行'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, '与母行分离'), C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['隐藏该列', '隐藏多列']), C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['显示该列', '显示多列']), C.CONTEXTMENU_ITEMS_HIDE_ROW, ['隐藏该行', '隐藏多行']), C.CONTEXTMENU_ITEMS_SHOW_ROW, ['显示该行', '显示多行']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, '无'), C.FILTERS_CONDITIONS_EMPTY, '为空'), C.FILTERS_CONDITIONS_NOT_EMPTY, '不为空'), C.FILTERS_CONDITIONS_EQUAL, '等于'), C.FILTERS_CONDITIONS_NOT_EQUAL, '不等于'), C.FILTERS_CONDITIONS_BEGINS_WITH, '开头是'), C.FILTERS_CONDITIONS_ENDS_WITH, '结尾是'), C.FILTERS_CONDITIONS_CONTAINS, '包含'), C.FILTERS_CONDITIONS_NOT_CONTAIN, '不包含'), C.FILTERS_CONDITIONS_GREATER_THAN, '大于'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, '大于或等于'), C.FILTERS_CONDITIONS_LESS_THAN, '小于'), C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, '小于或等于'), C.FILTERS_CONDITIONS_BETWEEN, '在此范围'), C.FILTERS_CONDITIONS_NOT_BETWEEN, '不在此范围'), C.FILTERS_CONDITIONS_AFTER, '之后'), C.FILTERS_CONDITIONS_BEFORE, '之前'), C.FILTERS_CONDITIONS_TODAY, '今天'), C.FILTERS_CONDITIONS_TOMORROW, '明天'), C.FILTERS_CONDITIONS_YESTERDAY, '昨天'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, '空白单元格'), C.FILTERS_DIVS_FILTER_BY_CONDITION, '按条件过滤'), C.FILTERS_DIVS_FILTER_BY_VALUE, '按值过滤'), C.FILTERS_LABELS_CONJUNCTION, '且'), C.FILTERS_LABELS_DISJUNCTION, '或'), C.FILTERS_BUTTONS_SELECT_ALL, '全选'), C.FILTERS_BUTTONS_CLEAR, '清除'), C.FILTERS_BUTTONS_OK, '确认'), C.FILTERS_BUTTONS_CANCEL, '取消'), C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, '搜索'), _defineProperty(_defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, '值'), C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, '第二值'));
_handsontable.default.languages.registerLanguageDictionary(dictionary);
var _default = exports.default = dictionary;

/***/ }),
/* 16 */
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
 * Authors: Phyllis Yen
 * Last updated: Mar 9, 2018
 *
 * Description: Definition file for Chinese - Taiwan language-country.
 */
var C = _handsontable.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'zh-TW'
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, '上方插入列'), C.CONTEXTMENU_ITEMS_ROW_BELOW, '下方插入列'), C.CONTEXTMENU_ITEMS_INSERT_LEFT, '左方插入欄'), C.CONTEXTMENU_ITEMS_INSERT_RIGHT, '右方插入欄'), C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['移除該列', '移除多列']), C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['移除該欄', '移除多欄']), C.CONTEXTMENU_ITEMS_UNDO, '復原'), C.CONTEXTMENU_ITEMS_REDO, '取消復原'), C.CONTEXTMENU_ITEMS_READ_ONLY, '唯讀'), C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, '清空該欄'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, '對齊'), C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, '靠左'), C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, '水平置中'), C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, '靠右'), C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, '左右對齊'), C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, '靠上'), C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, '垂直置中'), C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, '靠下'), C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, '凍結欄位'), C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, '取消凍結欄位'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, '邊界'), C.CONTEXTMENU_ITEMS_BORDERS_TOP, '上'), C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, '右'), C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, '下'), C.CONTEXTMENU_ITEMS_BORDERS_LEFT, '左'), C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, '移除邊界'), C.CONTEXTMENU_ITEMS_ADD_COMMENT, '加入評論'), C.CONTEXTMENU_ITEMS_EDIT_COMMENT, '編輯評論'), C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, '刪除評論'), C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, '唯讀評論'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, '合併欄位'), C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, '取消合併欄位'), C.CONTEXTMENU_ITEMS_COPY, '複製'), C.CONTEXTMENU_ITEMS_CUT, '剪下'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, '插入子列'), C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, '與母列分離'), C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['隱藏該欄', '隱藏多欄']), C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['顯示該欄', '顯示多欄']), C.CONTEXTMENU_ITEMS_HIDE_ROW, ['隱藏該列', '隱藏多列']), C.CONTEXTMENU_ITEMS_SHOW_ROW, ['顯示該列', '顯示多列']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, '無'), C.FILTERS_CONDITIONS_EMPTY, '為空'), C.FILTERS_CONDITIONS_NOT_EMPTY, '不為空'), C.FILTERS_CONDITIONS_EQUAL, '等於'), C.FILTERS_CONDITIONS_NOT_EQUAL, '不等於'), C.FILTERS_CONDITIONS_BEGINS_WITH, '開頭是'), C.FILTERS_CONDITIONS_ENDS_WITH, '結尾是'), C.FILTERS_CONDITIONS_CONTAINS, '包含'), C.FILTERS_CONDITIONS_NOT_CONTAIN, '不包含'), C.FILTERS_CONDITIONS_GREATER_THAN, '大於'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, '大於或等於'), C.FILTERS_CONDITIONS_LESS_THAN, '小於'), C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, '小於或等於'), C.FILTERS_CONDITIONS_BETWEEN, '在此範圍'), C.FILTERS_CONDITIONS_NOT_BETWEEN, '不在此範圍'), C.FILTERS_CONDITIONS_AFTER, '之後'), C.FILTERS_CONDITIONS_BEFORE, '之前'), C.FILTERS_CONDITIONS_TODAY, '今天'), C.FILTERS_CONDITIONS_TOMORROW, '明天'), C.FILTERS_CONDITIONS_YESTERDAY, '昨天'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, '空白格'), C.FILTERS_DIVS_FILTER_BY_CONDITION, '依條件過濾'), C.FILTERS_DIVS_FILTER_BY_VALUE, '依值過濾'), C.FILTERS_LABELS_CONJUNCTION, '且'), C.FILTERS_LABELS_DISJUNCTION, '或'), C.FILTERS_BUTTONS_SELECT_ALL, '全選'), C.FILTERS_BUTTONS_CLEAR, '清除'), C.FILTERS_BUTTONS_OK, '確認'), C.FILTERS_BUTTONS_CANCEL, '取消'), C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, '搜尋'), _defineProperty(_defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, '值'), C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, '第二值'));
_handsontable.default.languages.registerLanguageDictionary(dictionary);
var _default = exports.default = dictionary;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _deCH = _interopRequireDefault(__webpack_require__(1));
exports.deCH = _deCH.default;
var _deDE = _interopRequireDefault(__webpack_require__(2));
exports.deDE = _deDE.default;
var _enUS = _interopRequireDefault(__webpack_require__(3));
exports.enUS = _enUS.default;
var _esMX = _interopRequireDefault(__webpack_require__(4));
exports.esMX = _esMX.default;
var _frFR = _interopRequireDefault(__webpack_require__(5));
exports.frFR = _frFR.default;
var _itIT = _interopRequireDefault(__webpack_require__(6));
exports.itIT = _itIT.default;
var _jaJP = _interopRequireDefault(__webpack_require__(7));
exports.jaJP = _jaJP.default;
var _koKR = _interopRequireDefault(__webpack_require__(8));
exports.koKR = _koKR.default;
var _lvLV = _interopRequireDefault(__webpack_require__(9));
exports.lvLV = _lvLV.default;
var _nbNO = _interopRequireDefault(__webpack_require__(10));
exports.nbNO = _nbNO.default;
var _nlNL = _interopRequireDefault(__webpack_require__(11));
exports.nlNL = _nlNL.default;
var _plPL = _interopRequireDefault(__webpack_require__(12));
exports.plPL = _plPL.default;
var _ptBR = _interopRequireDefault(__webpack_require__(13));
exports.ptBR = _ptBR.default;
var _ruRU = _interopRequireDefault(__webpack_require__(14));
exports.ruRU = _ruRU.default;
var _zhCN = _interopRequireDefault(__webpack_require__(15));
exports.zhCN = _zhCN.default;
var _zhTW = _interopRequireDefault(__webpack_require__(16));
exports.zhTW = _zhTW.default;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ])["___"];
});