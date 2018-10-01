exports.ids = [0];
exports.modules = {

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n//meterial ui\n\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _media = __webpack_require__(/*! ../store/states/media/media.operations */ \"./src/store/states/media/media.operations.js\");\n\nvar mediaOperations = _interopRequireWildcard(_media);\n\nvar _media2 = __webpack_require__(/*! ../store/states/media/media.selectors */ \"./src/store/states/media/media.selectors.js\");\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _MediaTile = __webpack_require__(/*! ../components/core/MediaTile/MediaTile */ \"./src/components/core/MediaTile/MediaTile.js\");\n\nvar _MediaTile2 = _interopRequireDefault(_MediaTile);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Home extends _react.Component {\n\tconstructor(...args) {\n\t\tvar _temp;\n\n\t\treturn _temp = super(...args), this.componentDidMount = () => {\n\t\t\tif (this.props.popularMedias.length < 1) this.props.listPopularMedia();\n\t\t}, _temp;\n\t}\n\n\trender() {\n\t\tconst { popularMedias } = this.props;\n\t\treturn _react2.default.createElement(\n\t\t\t_Grid2.default,\n\t\t\t{ container: true, spacing: 24 },\n\t\t\t_react2.default.createElement(\n\t\t\t\t_Grid2.default,\n\t\t\t\t{ item: true, sm: 12 },\n\t\t\t\t_react2.default.createElement(_MediaTile2.default, { columns: 4, items: popularMedias, resourceKey: 'popular' })\n\t\t\t)\n\t\t);\n\t}\n}\n\nconst boundActionCreators = dispatch => (0, _redux.bindActionCreators)(_extends({}, mediaOperations), dispatch);\nconst mappedStateToProps = state => ({\n\tpopularMedias: (0, _media2.selectMedias)(state.media.medias, 'popular')\n});\n\nexports.default = (0, _reactRedux.connect)(mappedStateToProps, boundActionCreators)(Home);\n\n//# sourceURL=webpack:///./src/pages/Home.js?");

/***/ })

};;