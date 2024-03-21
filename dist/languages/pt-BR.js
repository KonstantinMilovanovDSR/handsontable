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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 13:
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

/***/ })

/******/ })["___"];
});