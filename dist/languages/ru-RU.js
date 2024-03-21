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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 14:
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

/***/ })

/******/ })["___"];
});