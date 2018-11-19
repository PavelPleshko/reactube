exports.ids = [14];
exports.modules = {

/***/ "./src/components/UI/controls/TextInput/TextInput.js":
/*!***********************************************************!*\
  !*** ./src/components/UI/controls/TextInput/TextInput.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _InputAdornment = __webpack_require__(/*! @material-ui/core/InputAdornment */ \"@material-ui/core/InputAdornment\");\n\nvar _InputAdornment2 = _interopRequireDefault(_InputAdornment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n  textInput: {\n    width: '100%'\n  }\n});\n\nclass TextInput extends _react.Component {\n\n  render() {\n    const { classes, adornment, label, input, type, helperText, multiline } = this.props;\n    return _react2.default.createElement(_TextField2.default, _extends({ label: label, type: type || 'text',\n      className: classes.textInput\n    }, input, {\n      multiline: multiline,\n      margin: helperText ? 'dense' : 'normal',\n\n      helperText: helperText,\n      InputProps: {\n        startAdornment: adornment && _react2.default.createElement(\n          _InputAdornment2.default,\n          { position: 'start' },\n          adornment\n        )\n      }\n    }));\n  }\n}\n\nTextInput.defaultProps = {\n  helperText: '',\n  multiline: false\n};\n\nexports.default = (0, _styles.withStyles)(styles)(TextInput);\n\n//# sourceURL=webpack:///./src/components/UI/controls/TextInput/TextInput.js?");

/***/ }),

/***/ "./src/components/UI/dialogs/ConfirmDeleteDialog/ConfirmDeleteDialog.js":
/*!******************************************************************************!*\
  !*** ./src/components/UI/dialogs/ConfirmDeleteDialog/ConfirmDeleteDialog.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Delete = __webpack_require__(/*! @material-ui/icons/Delete */ \"@material-ui/icons/Delete\");\n\nvar _Delete2 = _interopRequireDefault(_Delete);\n\nvar _Dialog = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _DialogTitle = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n\nvar _DialogTitle2 = _interopRequireDefault(_DialogTitle);\n\nvar _DialogContent = __webpack_require__(/*! @material-ui/core/DialogContent */ \"@material-ui/core/DialogContent\");\n\nvar _DialogContent2 = _interopRequireDefault(_DialogContent);\n\nvar _DialogActions = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n\nvar _DialogActions2 = _interopRequireDefault(_DialogActions);\n\nvar _DialogContentText = __webpack_require__(/*! @material-ui/core/DialogContentText */ \"@material-ui/core/DialogContentText\");\n\nvar _DialogContentText2 = _interopRequireDefault(_DialogContentText);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n//material ui\n\n\nconst confirmDeleteDialog = (_ref) => {\n  let { open, closeDialog, resourceTitle, confirmDelete } = _ref,\n      rest = _objectWithoutProperties(_ref, ['open', 'closeDialog', 'resourceTitle', 'confirmDelete']);\n\n  return _react2.default.createElement(\n    'span',\n    null,\n    _react2.default.createElement(\n      _Dialog2.default,\n      { open: open },\n      _react2.default.createElement(\n        _DialogTitle2.default,\n        null,\n        rest.title ? rest.title : \"Delete \" + resourceTitle\n      ),\n      _react2.default.createElement(\n        _DialogContent2.default,\n        null,\n        rest.children ? rest.children : _react2.default.createElement(\n          _DialogContentText2.default,\n          null,\n          'Confirm to delete ',\n          _react2.default.createElement(\n            'strong',\n            null,\n            resourceTitle\n          ),\n          ' from your account.'\n        )\n      ),\n      _react2.default.createElement(\n        _DialogActions2.default,\n        null,\n        _react2.default.createElement(\n          _Button2.default,\n          { onClick: closeDialog, color: 'primary' },\n          'Cancel'\n        ),\n        _react2.default.createElement(\n          _Button2.default,\n          { onClick: confirmDelete, variant: 'raised', color: 'primary', autoFocus: 'autoFocus' },\n          'Confirm'\n        )\n      )\n    )\n  );\n};\n\nexports.default = confirmDeleteDialog;\n\n//# sourceURL=webpack:///./src/components/UI/dialogs/ConfirmDeleteDialog/ConfirmDeleteDialog.js?");

/***/ }),

/***/ "./src/components/UI/miscellaneous/InfiniteScroll/InfiniteScroll.js":
/*!**************************************************************************!*\
  !*** ./src/components/UI/miscellaneous/InfiniteScroll/InfiniteScroll.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _throttle = __webpack_require__(/*! lodash/throttle */ \"lodash/throttle\");\n\nvar _throttle2 = _interopRequireDefault(_throttle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass InfiniteScroll extends _react.Component {\n    constructor(...args) {\n        var _temp;\n\n        return _temp = super(...args), this.state = {\n            reachedBottom: false,\n            scrollListener: null\n        }, this.throttledScroll = (0, _throttle2.default)(e => this.handleScroll(e), 500), this.handleScroll = e => {\n            const { containerHeight, gap, callback, stop, requested } = this.props;\n            const canCall = typeof requested === 'undefined' ? true : !requested;\n            if (stop) {\n                this.stopListening();\n            } else {\n                const { scrollY } = window;\n                const { offsetTop, scrollHeight } = this.props.refContainer;\n                if (containerHeight + scrollY > offsetTop + scrollHeight - gap && canCall) {\n                    if (!this.state.reachedBottom) {\n                        callback();\n                        this.setState({ reachedBottom: true });\n                    }\n                } else {\n                    if (this.state.reachedBottom) {\n                        this.setState({ reachedBottom: false });\n                    }\n                }\n            }\n        }, this.stopListening = () => {\n            if (typeof window != 'undefined') {\n                window.removeEventListener('scroll', this.throttledScroll);\n            }\n        }, this.componentDidMount = () => {\n            if (typeof window != 'undefined') {\n                window.addEventListener('scroll', this.throttledScroll);\n            }\n        }, this.componentWillUnmount = () => {\n            this.stopListening();\n        }, _temp;\n    }\n\n    render() {\n        return this.props.children;\n    }\n}\n\nInfiniteScroll.defaultProps = {\n    gap: 30,\n    containerHeight: window.innerHeight\n};\n\nexports.default = InfiniteScroll;\n\n//# sourceURL=webpack:///./src/components/UI/miscellaneous/InfiniteScroll/InfiniteScroll.js?");

/***/ }),

/***/ "./src/components/core/MediaTileHorizontal/MediaTileHorizontal.js":
/*!************************************************************************!*\
  !*** ./src/components/core/MediaTileHorizontal/MediaTileHorizontal.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\t\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _CircularProgress = __webpack_require__(/*! @material-ui/core/CircularProgress */ \"@material-ui/core/CircularProgress\");\n\nvar _CircularProgress2 = _interopRequireDefault(_CircularProgress);\n\nvar _MediaTileSingle = __webpack_require__(/*! ./mediaTileHorizontal/MediaTileSingle */ \"./src/components/core/MediaTileHorizontal/mediaTileHorizontal/MediaTileSingle.js\");\n\nvar _MediaTileSingle2 = _interopRequireDefault(_MediaTileSingle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n\t\tloader: {\n\t\t\t\tdisplay: 'flex',\n\t\t\t\tjustifyContent: 'center'\n\t\t}\n});\n\nconst mediaTileHorizontal = props => {\n\t\tconst { columns = 4, items, resourceName = \"media\", classes, isProcessing } = props;\n\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\titems.map(item => _react2.default.createElement(\n\t\t\t\t\t\t_Grid2.default,\n\t\t\t\t\t\t{ container: true, style: { marginBottom: 8 }, spacing: 24, key: item._id },\n\t\t\t\t\t\t_react2.default.createElement(_MediaTileSingle2.default, { resourceName: resourceName, item: item })\n\t\t\t\t)),\n\t\t\t\tisProcessing && _react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: classes.loader },\n\t\t\t\t\t\t_react2.default.createElement(_CircularProgress2.default, null)\n\t\t\t\t)\n\t\t);\n};\n\nexports.default = (0, _styles.withStyles)(styles)(mediaTileHorizontal);\n\n//# sourceURL=webpack:///./src/components/core/MediaTileHorizontal/MediaTileHorizontal.js?");

/***/ }),

/***/ "./src/components/core/MediaTileHorizontal/mediaTileHorizontal/MediaTileSingle.js":
/*!****************************************************************************************!*\
  !*** ./src/components/core/MediaTileHorizontal/mediaTileHorizontal/MediaTileSingle.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _truncate = __webpack_require__(/*! ../../../../utils/pipes/truncate */ \"./src/utils/pipes/truncate.js\");\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _fileDataTransforms = __webpack_require__(/*! ../../../../utils/pipes/fileDataTransforms */ \"./src/utils/pipes/fileDataTransforms.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n  icon: {\n    color: theme.palette.primary.grey\n  },\n  image: {\n    width: '100%',\n    height: '100%',\n    backgroundSize: 'cover',\n    backgroundPosition: '50% 50%',\n    position: 'relative'\n  },\n  imageWrapper: {\n    width: '100%',\n    height: 140\n  },\n  mediaTitle: {\n    whiteSpace: 'normal',\n    overflow: 'hidden',\n    textOverflow: 'ellipsis',\n    color: '#000000',\n    fontSize: '1.2rem',\n    display: '-webkit-box',\n    '-webkit-box-orient': 'vertical',\n    '-webkit-line-clamp': 2,\n    fontWeight: 500,\n    margin: '5px 0',\n    maxHeight: '3rem',\n    lineHeight: '1.5rem'\n  },\n  meta: {\n    display: 'flex',\n    fontSize: '.8rem',\n    color: theme.palette.primary.grey\n  },\n  separator: {\n    margin: '0 5px'\n  },\n  author: {\n    overflowX: 'hidden',\n    textOverflow: 'ellipsis',\n    whiteSpace: 'nowrap',\n    display: 'flex',\n    fontWeight: 500,\n    opacity: .9,\n    marginBottom: '3px',\n    '&:hover': {\n      opacity: 1,\n      cursor: 'pointer'\n    }\n  },\n  description: {\n    marginBottom: 8,\n    paddingTop: 10,\n    display: 'block',\n    color: theme.palette.primary.grey,\n    overflow: 'hidden',\n    fontSize: '.9rem',\n    fontWeight: 400\n  }\n});\n\nclass MediaTileSingle extends _react.Component {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.shouldComponentUpdate = nextProps => {\n      return this.props.item._id !== nextProps.item._id;\n    }, _temp;\n  }\n\n  render() {\n    const { classes, item, resourceName } = this.props;\n    return _react2.default.createElement(\n      _react2.default.Fragment,\n      null,\n      _react2.default.createElement(\n        _Grid2.default,\n        { item: true, sm: 5 },\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: `/${resourceName}/${item._id}` },\n          _react2.default.createElement(\n            'div',\n            { className: classes.imageWrapper },\n            _react2.default.createElement('div', { className: classes.image, style: { backgroundImage: `url(${item.thumb_url})` }\n            })\n          )\n        )\n      ),\n      _react2.default.createElement(\n        _Grid2.default,\n        { item: true, sm: 7 },\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: `/${resourceName}/${item._id}` },\n          _react2.default.createElement(\n            'h3',\n            { className: classes.mediaTitle },\n            item.title\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: classes.meta },\n          _react2.default.createElement(\n            'div',\n            { className: classes.author },\n            item.postedBy.firstName + ' ' + item.postedBy.lastName\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: classes.separator },\n            '\\u2022'\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            item.views,\n            ' views '\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: classes.separator },\n            '\\u2022'\n          ),\n          (0, _fileDataTransforms.fromNow)(item.created)\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: classes.description },\n          (0, _truncate.truncate)(120, item.description)\n        )\n      )\n    );\n  }\n}\n\nexports.default = (0, _styles.withStyles)(styles)(MediaTileSingle);\n\n//# sourceURL=webpack:///./src/components/core/MediaTileHorizontal/mediaTileHorizontal/MediaTileSingle.js?");

/***/ }),

/***/ "./src/utils/pipes/fileDataTransforms.js":
/*!***********************************************!*\
  !*** ./src/utils/pipes/fileDataTransforms.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n\nconst transformSeconds = value => {\n  let display = '';\n  let h = Math.floor(value / 3600);\n  let m = Math.floor(value % 3600 / 60);\n  let s = Math.floor(value % 3600 % 60);\n  display = h > 0 ? h + 'h ' : '';\n  display += m > 0 ? m + 'min ' : '';\n  display += s > 0 ? s + 's' : '';\n  return display;\n};\n\nconst transformBytes = bytes => {\n  let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];\n  if (bytes == 0) return '0 Byte';\n  let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));\n  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];\n};\n\nconst formatDuration = seconds => {\n  const date = new Date(Number(seconds) * 1000);\n  const hh = date.getUTCHours();\n  let mm = date.getUTCMinutes();\n  const ss = ('0' + date.getUTCSeconds()).slice(-2);\n  if (hh) {\n    mm = ('0' + date.getUTCMinutes()).slice(-2);\n    return `${hh}:${mm}:${ss}`;\n  }\n  return `${mm}:${ss}`;\n};\n\nconst MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n\nfunction getFormattedDate(date, prefomattedDate = false, hideYear = false) {\n  const day = date.getDate();\n  const month = MONTH_NAMES[date.getMonth()];\n  const year = date.getFullYear();\n  const hours = date.getHours();\n  let minutes = date.getMinutes();\n\n  if (minutes < 10) {\n    minutes = `0${minutes}`;\n  }\n\n  if (prefomattedDate) {\n    return `${prefomattedDate} at ${hours}:${minutes}`;\n  }\n\n  if (hideYear) {\n\n    return `${day} ${month} at ${hours}:${minutes}`;\n  }\n\n  return `${day} ${month} ${year}. at ${hours}:${minutes}`;\n}\n\nconst fromNow = dateParam => {\n  if (!dateParam) {\n    return null;\n  }\n\n  const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);\n  const DAY_IN_MS = 86400000;\n  const today = new Date();\n  const yesterday = new Date(today - DAY_IN_MS);\n  const seconds = Math.round((today - date) / 1000);\n  const minutes = Math.round(seconds / 60);\n  const isToday = today.toDateString() === date.toDateString();\n  const isYesterday = yesterday.toDateString() === date.toDateString();\n  const isThisYear = today.getFullYear() === date.getFullYear();\n\n  if (seconds < 5) {\n    return 'now';\n  } else if (seconds < 60) {\n    return `${seconds} seconds ago`;\n  } else if (seconds < 90) {\n    return 'about a minute ago';\n  } else if (minutes < 60) {\n    return `${minutes} minutes ago`;\n  } else if (isToday) {\n    return getFormattedDate(date, 'Today');\n  } else if (isYesterday) {\n    return getFormattedDate(date, 'Yesterday');\n  } else if (isThisYear) {\n    return getFormattedDate(date, false, true);\n  }\n\n  return getFormattedDate(date);\n};\n\nexports.transformSeconds = transformSeconds;\nexports.transformBytes = transformBytes;\nexports.formatDuration = formatDuration;\nexports.fromNow = fromNow;\n\n//# sourceURL=webpack:///./src/utils/pipes/fileDataTransforms.js?");

/***/ }),

/***/ "./src/utils/pipes/truncate.js":
/*!*************************************!*\
  !*** ./src/utils/pipes/truncate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nconst truncate = (amount, str) => {\n\tif (!amount) {\n\t\treturn str;\n\t} else {\n\t\tlet lastIndex = /[\\.\\,\\s\\!\\?]/i.exec(str.slice(amount));\n\t\treturn str.length > amount ? str.slice(0, amount + Number(lastIndex.index)) + '...' : str;\n\t}\n};\n\nconst trimInTheMiddle = (str, fromLeft, fromRight, padding = '...') => {\n\tif (str.length <= fromLeft + fromRight + padding.length) return str;\n\tlet leftStr = str.slice(0, fromLeft);\n\tlet rightStr = str.slice(-fromRight);\n\tlet newStr = `${leftStr}${padding}${rightStr}`;\n\treturn newStr;\n};\n\nexports.truncate = truncate;\nexports.trimInTheMiddle = trimInTheMiddle;\n\n//# sourceURL=webpack:///./src/utils/pipes/truncate.js?");

/***/ })

};;