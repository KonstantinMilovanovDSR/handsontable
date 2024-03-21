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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
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

/***/ })
/******/ ])["___"];
});