exports.ids = [10];
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

/***/ "./src/pages/Channel.js":
/*!******************************!*\
  !*** ./src/pages/Channel.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n//meterial ui\n\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _Paper = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _UserAvatarBig = __webpack_require__(/*! ../components/UI/miscellaneous/UserAvatarBig/UserAvatarBig */ \"./src/components/UI/miscellaneous/UserAvatarBig/UserAvatarBig.js\");\n\nvar _UserAvatarBig2 = _interopRequireDefault(_UserAvatarBig);\n\nvar _MediaTile = __webpack_require__(/*! ../components/core/MediaTile/MediaTile */ \"./src/components/core/MediaTile/MediaTile.js\");\n\nvar _MediaTile2 = _interopRequireDefault(_MediaTile);\n\nvar _ChannelTabs = __webpack_require__(/*! ./channel/ChannelTabs */ \"./src/pages/channel/ChannelTabs.js\");\n\nvar _ChannelTabs2 = _interopRequireDefault(_ChannelTabs);\n\nvar _user = __webpack_require__(/*! ../store/states/user */ \"./src/store/states/user/index.js\");\n\nvar _channel = __webpack_require__(/*! ../store/states/channel */ \"./src/store/states/channel/index.js\");\n\nvar _channel2 = __webpack_require__(/*! ../store/states/channel/channel.operations */ \"./src/store/states/channel/channel.operations.js\");\n\nvar channelOperations = _interopRequireWildcard(_channel2);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n\troot: {},\n\tprofileMeta: {\n\t\tdisplay: 'flex',\n\t\tjustifyContent: 'space-between',\n\t\talignItems: 'center',\n\t\tpadding: '1rem 2rem',\n\t\tbackgroundColor: '#fafafa'\n\t},\n\tavatarGroup: {\n\t\tdisplay: 'flex',\n\t\talignItems: 'center'\n\t},\n\tuserFullname: {\n\t\tfontSize: '1.1rem',\n\t\tfontWeight: 500,\n\t\tmarginLeft: 5\n\t},\n\tuserSubscribers: {\n\t\tfontSize: '1.1rem',\n\t\tdisplay: 'flex',\n\t\talignItems: 'center'\n\t},\n\tsubscribersNumber: {\n\t\tcolor: theme.palette.primary.light,\n\t\tfontSize: '1.9rem',\n\t\tfontWeight: 200,\n\t\tmarginRight: 5\n\t},\n\ticon: {\n\t\tcolor: theme.palette.primary.light\n\t},\n\tmainInfo: {}\n});\n\nclass Channel extends _react.Component {\n\tconstructor(...args) {\n\t\tvar _temp;\n\n\t\treturn _temp = super(...args), this.componentDidMount = () => {\n\t\t\tif (!this.props.channel) {\n\t\t\t\tlet slug = this.props.match.params.channelId;\n\t\t\t\tthis.props.getChannelBySlug(slug);\n\t\t\t}\n\t\t}, _temp;\n\t}\n\n\trender() {\n\t\tconst { classes, user, channel } = this.props;\n\t\tconst owner = channel ? channel.owner : null;\n\n\t\treturn _react2.default.createElement(\n\t\t\t_Paper2.default,\n\t\t\t{ elevation: 2, className: classes.root },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: classes.profileMeta },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: classes.avatarGroup },\n\t\t\t\t\t_react2.default.createElement(_UserAvatarBig2.default, { user: owner || {}, classes: { icon: classes.icon } })\n\t\t\t\t),\n\t\t\t\tchannel && channel.subscribers ? _react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: classes.userSubscribers },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ className: classes.subscribersNumber },\n\t\t\t\t\t\tchannel.subscribers.length || 0\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'subscribers'\n\t\t\t\t\t)\n\t\t\t\t) : null\n\t\t\t),\n\t\t\t_react2.default.createElement(_ChannelTabs2.default, null)\n\t\t);\n\t}\n}\n\nconst mappedStateToProps = state => ({\n\tuser: (0, _user.selectUser)(state.user),\n\tchannel: (0, _channel.selectChannel)(state.channel, 'single')\n});\nconst boundActionCreators = dispatch => (0, _redux.bindActionCreators)(_extends({}, channelOperations), dispatch);\n\nexports.default = (0, _reactRedux.connect)(mappedStateToProps, boundActionCreators)((0, _styles.withStyles)(styles)(Channel));\n\n//# sourceURL=webpack:///./src/pages/Channel.js?");

/***/ }),

/***/ "./src/pages/channel/ChannelTabs.js":
/*!******************************************!*\
  !*** ./src/pages/channel/ChannelTabs.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Tabs = __webpack_require__(/*! @material-ui/core/Tabs */ \"@material-ui/core/Tabs\");\n\nvar _Tabs2 = _interopRequireDefault(_Tabs);\n\nvar _Tab = __webpack_require__(/*! @material-ui/core/Tab */ \"@material-ui/core/Tab\");\n\nvar _Tab2 = _interopRequireDefault(_Tab);\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//victory\n\n\nconst styles = theme => ({\n  mainInfo: {},\n  alignCenter: {\n    textAlign: 'center'\n  }\n});\n\nconst TabContainer = ({ children }) => {\n  return _react2.default.createElement(\n    'div',\n    { style: { padding: '1rem 2rem' } },\n    children\n  );\n};\n\nclass ChannelTabs extends _react.Component {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      activeTab: 0\n    }, this.handleTabChange = (event, activeTab) => {\n      this.setState({ activeTab });\n    }, _temp;\n  }\n\n  render() {\n    const { classes } = this.props;\n\n    const { activeTab } = this.state;\n    return _react2.default.createElement(\n      'div',\n      { className: classes.mainInfo },\n      _react2.default.createElement(\n        _Tabs2.default,\n        {\n          value: activeTab,\n          indicatorColor: 'primary',\n          textColor: 'primary',\n          onChange: this.handleTabChange\n        },\n        _react2.default.createElement(_Tab2.default, { value: 0, label: 'Channel stats' }),\n        _react2.default.createElement(_Tab2.default, { value: 1, label: 'Channel media' }),\n        _react2.default.createElement(_Tab2.default, { value: 2, label: 'Channel settings' })\n      ),\n      activeTab === 0 && _react2.default.createElement(\n        TabContainer,\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h4',\n            { className: classes.alignCenter },\n            'Your statistics'\n          )\n        )\n      ),\n      activeTab === 1 && _react2.default.createElement(\n        TabContainer,\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          'Media here'\n        )\n      ),\n      activeTab === 2 && _react2.default.createElement(\n        TabContainer,\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          'Configurations'\n        )\n      )\n    );\n  }\n}\n\nexports.default = (0, _styles.withStyles)(styles)(ChannelTabs);\n\n//# sourceURL=webpack:///./src/pages/channel/ChannelTabs.js?");

/***/ })

};;