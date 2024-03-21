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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 11:
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

/***/ })

/******/ })["___"];
});