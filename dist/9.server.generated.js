exports.ids = [9];
exports.modules = {

/***/ "./src/components/UI/miscellaneous/UserAvatarBig/UserAvatarBig.js":
/*!************************************************************************!*\
  !*** ./src/components/UI/miscellaneous/UserAvatarBig/UserAvatarBig.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _AccountCircle = __webpack_require__(/*! @material-ui/icons/AccountCircle */ \"@material-ui/icons/AccountCircle\");\n\nvar _AccountCircle2 = _interopRequireDefault(_AccountCircle);\n\nvar _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst userAvatarBig = props => {\n  const { user, classes } = props;\n  return _react2.default.createElement(\n    'div',\n    { className: classes.icon },\n    user.avatar ? _react2.default.createElement(_Avatar2.default, { src: user.avatar }) : _react2.default.createElement(_AccountCircle2.default, { style: { fontSize: '7rem' } })\n  );\n};\n\nexports.default = userAvatarBig;\n\n//# sourceURL=webpack:///./src/components/UI/miscellaneous/UserAvatarBig/UserAvatarBig.js?");

/***/ }),

/***/ "./src/pages/Profile.js":
/*!******************************!*\
  !*** ./src/pages/Profile.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n//meterial ui\n\n\n//victory\n\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _user = __webpack_require__(/*! ../store/states/user/user.selectors */ \"./src/store/states/user/user.selectors.js\");\n\nvar _media = __webpack_require__(/*! ../store/states/media/media.selectors */ \"./src/store/states/media/media.selectors.js\");\n\nvar _media2 = __webpack_require__(/*! ../store/states/media/media.operations */ \"./src/store/states/media/media.operations.js\");\n\nvar mediaOperations = _interopRequireWildcard(_media2);\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _Paper = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _Tabs = __webpack_require__(/*! @material-ui/core/Tabs */ \"@material-ui/core/Tabs\");\n\nvar _Tabs2 = _interopRequireDefault(_Tabs);\n\nvar _Tab = __webpack_require__(/*! @material-ui/core/Tab */ \"@material-ui/core/Tab\");\n\nvar _Tab2 = _interopRequireDefault(_Tab);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _victory = __webpack_require__(/*! victory */ \"victory\");\n\nvar _UserAvatarBig = __webpack_require__(/*! ../components/UI/miscellaneous/UserAvatarBig/UserAvatarBig */ \"./src/components/UI/miscellaneous/UserAvatarBig/UserAvatarBig.js\");\n\nvar _UserAvatarBig2 = _interopRequireDefault(_UserAvatarBig);\n\nvar _MediaTile = __webpack_require__(/*! ../components/core/MediaTile/MediaTile */ \"./src/components/core/MediaTile/MediaTile.js\");\n\nvar _MediaTile2 = _interopRequireDefault(_MediaTile);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n\troot: {},\n\tprofileMeta: {\n\t\tdisplay: 'flex',\n\t\tjustifyContent: 'space-between',\n\t\talignItems: 'center',\n\t\tpadding: '1rem 2rem',\n\t\tbackgroundColor: '#fafafa'\n\t},\n\tavatarGroup: {\n\t\tdisplay: 'flex',\n\t\talignItems: 'center'\n\t},\n\tuserFullname: {\n\t\tfontSize: '1.1rem',\n\t\tfontWeight: 500,\n\t\tmarginLeft: 5\n\t},\n\tuserSubscribers: {\n\t\tfontSize: '1.1rem',\n\t\tdisplay: 'flex',\n\t\talignItems: 'center'\n\t},\n\tsubscribersNumber: {\n\t\tcolor: theme.palette.primary.light,\n\t\tfontSize: '1.9rem',\n\t\tfontWeight: 200,\n\t\tmarginRight: 5\n\t},\n\ticon: {\n\t\tcolor: theme.palette.primary.light\n\t},\n\tmainInfo: {},\n\talignCenter: {\n\t\ttextAlign: 'center'\n\t}\n});\n\nconst colorMap = {\n\t1: 'blue',\n\t2: 'purple'\n};\n\nconst TabContainer = ({ children }) => {\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\t{ style: { padding: '1rem 2rem' } },\n\t\tchildren\n\t);\n};\n\nclass Profile extends _react.Component {\n\tconstructor(...args) {\n\t\tvar _temp;\n\n\t\treturn _temp = super(...args), this.state = {\n\t\t\tvalue: 0\n\t\t}, this.handleChange = (event, value) => {\n\t\t\tthis.setState({ value });\n\t\t}, this.componentDidMount = () => {\n\t\t\tthis.props.listUserMedia();\n\t\t}, _temp;\n\t}\n\n\trender() {\n\t\tconst { classes, user, userFullName, userMedias } = this.props;\n\t\tconst { value } = this.state;\n\t\treturn _react2.default.createElement(\n\t\t\t_Paper2.default,\n\t\t\t{ elevation: 2, className: classes.root },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: classes.profileMeta },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: classes.avatarGroup },\n\t\t\t\t\t_react2.default.createElement(_UserAvatarBig2.default, { user: user || {}, classes: { icon: classes.icon } }),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: classes.userFullname },\n\t\t\t\t\t\tuserFullName\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tuser && user.subscribed ? _react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: classes.userSubscribers },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ className: classes.subscribersNumber },\n\t\t\t\t\t\tuser.subscribed.length\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'subscribers'\n\t\t\t\t\t)\n\t\t\t\t) : null\n\t\t\t),\n\t\t\t_react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: classes.mainInfo },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_Tabs2.default,\n\t\t\t\t\t{\n\t\t\t\t\t\tvalue: this.state.value,\n\t\t\t\t\t\tindicatorColor: 'primary',\n\t\t\t\t\t\ttextColor: 'primary',\n\t\t\t\t\t\tonChange: this.handleChange\n\t\t\t\t\t},\n\t\t\t\t\t_react2.default.createElement(_Tab2.default, { value: 0, label: 'Main' }),\n\t\t\t\t\t_react2.default.createElement(_Tab2.default, { value: 1, label: 'Subscriptions' }),\n\t\t\t\t\t_react2.default.createElement(_Tab2.default, { value: 2, label: 'My videos' })\n\t\t\t\t),\n\t\t\t\tvalue === 0 && _react2.default.createElement(\n\t\t\t\t\tTabContainer,\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'h4',\n\t\t\t\t\t\t\t{ className: classes.alignCenter },\n\t\t\t\t\t\t\t'Your statistics'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t_Grid2.default,\n\t\t\t\t\t\t\t{ container: true },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t_Grid2.default,\n\t\t\t\t\t\t\t\t{ item: true, sm: 4 },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ style: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' } },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t'New subscribers'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t{ style: { width: 200, height: 200 } },\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'svg',\n\t\t\t\t\t\t\t\t\t\t\t{ viewBox: '0 0 300 300' },\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(_victory.VictoryPie, { standalone: false,\n\t\t\t\t\t\t\t\t\t\t\t\twidth: 300, height: 300,\n\t\t\t\t\t\t\t\t\t\t\t\tinnerRadius: 65,\n\t\t\t\t\t\t\t\t\t\t\t\tlabelRadius: 80,\n\t\t\t\t\t\t\t\t\t\t\t\tdata: [{ x: 5, y: 5, idx: 1 }, { x: 10, y: 10, idx: 2 }],\n\t\t\t\t\t\t\t\t\t\t\t\tstyle: {\n\t\t\t\t\t\t\t\t\t\t\t\t\tdata: { fill: d => {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\treturn colorMap[d.idx];\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t\t\t\tlabels: {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill: 'white',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tfontSize: 18\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t_Grid2.default,\n\t\t\t\t\t\t\t\t{ item: true, sm: 4 },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t'New views'\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t_Grid2.default,\n\t\t\t\t\t\t\t\t{ item: true, sm: 4 },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t'New something'\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tvalue === 1 && _react2.default.createElement(\n\t\t\t\t\tTabContainer,\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'You are not subscribed to anything yet'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tvalue === 2 && _react2.default.createElement(\n\t\t\t\t\tTabContainer,\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(_MediaTile2.default, { resourceKey: 'user', items: userMedias, columns: 4 })\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n}\n\nconst mappedStateToProps = state => ({\n\tuser: (0, _user.selectUser)(state.user),\n\tuserFullName: (0, _user.selectUserFullname)(state.user),\n\tuserMedias: (0, _media.selectMedias)(state.media.medias, 'user')\n});\nconst boundActionCreators = dispatch => (0, _redux.bindActionCreators)(_extends({}, mediaOperations), dispatch);\n\nexports.default = (0, _reactRedux.connect)(mappedStateToProps, boundActionCreators)((0, _styles.withStyles)(styles)(Profile));\n\n//# sourceURL=webpack:///./src/pages/Profile.js?");

/***/ })

};;