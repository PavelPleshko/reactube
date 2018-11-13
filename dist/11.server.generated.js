exports.ids = [11];
exports.modules = {

/***/ "./src/components/core/MediaTile/MediaTile.js":
/*!****************************************************!*\
  !*** ./src/components/core/MediaTile/MediaTile.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _MediaTileItem = __webpack_require__(/*! ./mediaTile/MediaTileItem */ \"./src/components/core/MediaTile/mediaTile/MediaTileItem.js\");\n\nvar _MediaTileItem2 = _interopRequireDefault(_MediaTileItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst mediaTile = props => {\n\tconst { items, resourceName = \"media\", resourceKey, columns = 6, title, show = 12 } = props;\n\tconst coefficientCol = 12 / columns;\n\tconst itemsToShow = items ? items.slice(0, show) : [];\n\n\treturn _react2.default.createElement(\n\t\t_react.Fragment,\n\t\tnull,\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\ttitle\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t_Grid2.default,\n\t\t\t{ container: true, spacing: 8 },\n\t\t\titemsToShow.map(item => _react2.default.createElement(\n\t\t\t\t_Grid2.default,\n\t\t\t\t{ item: true, sm: coefficientCol, key: item._id, style: { height: 230 } },\n\t\t\t\t_react2.default.createElement(_MediaTileItem2.default, { item: item, itemId: item._id,\n\t\t\t\t\tresourceKey: resourceKey,\n\t\t\t\t\tresourceName: resourceName })\n\t\t\t))\n\t\t)\n\t);\n};\n\nexports.default = mediaTile;\n\n//# sourceURL=webpack:///./src/components/core/MediaTile/MediaTile.js?");

/***/ }),

/***/ "./src/components/core/MediaTile/mediaTile/MediaTileItem.js":
/*!******************************************************************!*\
  !*** ./src/components/core/MediaTile/mediaTile/MediaTileItem.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _WatchLater = __webpack_require__(/*! @material-ui/icons/WatchLater */ \"@material-ui/icons/WatchLater\");\n\nvar _WatchLater2 = _interopRequireDefault(_WatchLater);\n\nvar _Check = __webpack_require__(/*! @material-ui/icons/Check */ \"@material-ui/icons/Check\");\n\nvar _Check2 = _interopRequireDefault(_Check);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _connectedReactRouter = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n\nvar _media = __webpack_require__(/*! ../../../../store/states/media */ \"./src/store/states/media/index.js\");\n\nvar _user = __webpack_require__(/*! ../../../../store/states/user */ \"./src/store/states/user/index.js\");\n\nvar _user2 = __webpack_require__(/*! ../../../../store/states/user/user.operations */ \"./src/store/states/user/user.operations.js\");\n\nvar userOperations = _interopRequireWildcard(_user2);\n\nvar _fileDataTransforms = __webpack_require__(/*! ../../../../utils/pipes/fileDataTransforms */ \"./src/utils/pipes/fileDataTransforms.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n  icon: {\n    color: theme.palette.primary.grey\n  },\n  image: {\n    backgroundSize: 'cover',\n    backgroundPosition: '50% 50%',\n    height: 130,\n    width: '100%',\n    position: 'relative',\n    '&:hover': {\n      cursor: 'pointer'\n    }\n  },\n  watchlater: {\n    position: 'absolute',\n    left: '.5rem',\n    top: '.5rem',\n    width: '1.5rem',\n    height: '1.5rem',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    color: '#ffffff',\n    backgroundColor: '#000000',\n    borderRadius: 3,\n    transition: '.2s'\n  },\n  hide: {\n    opacity: 0,\n    pointerEvents: 'none'\n  },\n  category: {\n    position: 'absolute',\n    top: '.5rem',\n    right: '.5rem',\n    backgroundColor: 'rgba(255,255,255,.5)',\n    borderRadius: '5px',\n    padding: '0 3px',\n    fontSize: '.9rem'\n  },\n  duration: {\n    position: 'absolute',\n    padding: '0 4px',\n    fontSize: '.9rem',\n    borderRadius: '3px',\n    backgroundColor: '#000000',\n    color: '#ffffff',\n    bottom: 2,\n    right: 3\n  },\n  meta: {\n    display: 'flex',\n    flexFlow: 'column nowrap',\n    fontSize: '.8rem'\n  },\n  mediaTitle: {\n    whiteSpace: 'normal',\n    overflow: 'hidden',\n    textOverflow: 'ellipsis',\n    color: '#000000',\n    fontSize: '.9rem',\n    display: '-webkit-box',\n    '-webkit-box-orient': 'vertical',\n    '-webkit-line-clamp': 2,\n    fontWeight: 500,\n    margin: '5px 0',\n    maxHeight: '2rem',\n    lineHeight: '1rem'\n  },\n  subheading: {\n    display: 'flex',\n    flexDirection: 'column',\n    whiteSpace: 'no-wrap',\n    color: theme.palette.primary.grey,\n    overflowX: 'hidden',\n    textOverflow: 'ellipsis',\n    fontWeight: 500\n  },\n  author: {\n    overflowX: 'hidden',\n    textOverflow: 'ellipsis',\n    whiteSpace: 'nowrap',\n    display: 'flex',\n    color: theme.palette.primary.grey,\n    fontWeight: 500,\n    opacity: .9,\n    marginBottom: '3px',\n    '&:hover': {\n      opacity: 1,\n      cursor: 'pointer'\n    }\n  },\n  date: {\n    marginTop: '3px'\n  }\n});\n\nclass MediaTileItem extends _react.Component {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      showWatchLater: false,\n      addedToWatchlist: false\n    }, this.handleMouseEnter = e => {\n      if (!this.state.showWatchLater) {\n        this.setState({ showWatchLater: true });\n      }\n    }, this.handleMouseLeave = e => {\n      if (this.state.showWatchLater) {\n        this.setState({ showWatchLater: false });\n      }\n    }, this.shouldComponentUpdate = (newProps, newState) => {\n      return newProps.itemId && this.props.itemId && newProps.itemId != this.props.itemId || newState != this.state;\n    }, this.addRemoveFromWatchList = e => {\n      e.stopPropagation();\n      this.props.addToWatchlater(this.props.itemId);\n      if (!this.state.addedToWatchlist) {\n        this.setState({ addedToWatchlist: true });\n      } else {\n        this.setState({ addedToWatchlist: false });\n      }\n    }, this.goToResource = () => {\n      const { dispatch, itemId, resourceName } = this.props;\n      let url = `${resourceName}/${itemId}`;\n      dispatch((0, _connectedReactRouter.push)(url));\n    }, _temp;\n  }\n\n  render() {\n    const { item, classes } = this.props;\n    const { showWatchLater, addedToWatchlist } = this.state;\n\n    return _react2.default.createElement(\n      _react.Fragment,\n      null,\n      _react2.default.createElement(\n        'div',\n        { className: classes.image, onClick: this.goToResource, onMouseLeave: this.handleMouseLeave,\n          onMouseEnter: this.handleMouseEnter, style: { backgroundImage: `url(${item.thumb_url})` }\n        },\n        _react2.default.createElement(\n          'div',\n          {\n            onClick: this.addRemoveFromWatchList,\n            className: [classes.watchlater, showWatchLater ? '' : classes.hide].join(' ') },\n          addedToWatchlist ? _react2.default.createElement(_Check2.default, null) : _react2.default.createElement(_WatchLater2.default, null)\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: classes.category },\n          item.category && item.category.title\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: classes.duration },\n          (0, _fileDataTransforms.transformSeconds)(item.duration)\n        )\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: classes.mediaTitle },\n        item.title\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: classes.meta },\n        _react2.default.createElement(\n          'div',\n          { className: classes.author },\n          item.postedBy.firstName + ' ' + item.postedBy.lastName\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: classes.subheading },\n          _react2.default.createElement(\n            'div',\n            null,\n            item.views,\n            ' views '\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: classes.date },\n            (0, _fileDataTransforms.fromNow)(item.created)\n          )\n        )\n      )\n    );\n  }\n}\n\nconst boundActionCreators = dispatch => (0, _redux.bindActionCreators)(_extends({}, userOperations, { dispatch }), dispatch);\nconst mapStateToProps = state => {\n  return {\n    user: (0, _user.selectUser)(state.user)\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, boundActionCreators)((0, _styles.withStyles)(styles)(MediaTileItem));\n\n//# sourceURL=webpack:///./src/components/core/MediaTile/mediaTile/MediaTileItem.js?");

/***/ }),

/***/ "./src/utils/pipes/fileDataTransforms.js":
/*!***********************************************!*\
  !*** ./src/utils/pipes/fileDataTransforms.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n\nconst transformSeconds = value => {\n  let display = '';\n  let h = Math.floor(value / 3600);\n  let m = Math.floor(value % 3600 / 60);\n  let s = Math.floor(value % 3600 % 60);\n  display = h > 0 ? h + 'h ' : '';\n  display += m > 0 ? m + 'min ' : '';\n  display += s > 0 ? s + 's' : '';\n  return display;\n};\n\nconst transformBytes = bytes => {\n  let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];\n  if (bytes == 0) return '0 Byte';\n  let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));\n  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];\n};\n\nconst formatDuration = seconds => {\n  const date = new Date(Number(seconds) * 1000);\n  const hh = date.getUTCHours();\n  let mm = date.getUTCMinutes();\n  const ss = ('0' + date.getUTCSeconds()).slice(-2);\n  if (hh) {\n    mm = ('0' + date.getUTCMinutes()).slice(-2);\n    return `${hh}:${mm}:${ss}`;\n  }\n  return `${mm}:${ss}`;\n};\n\nconst MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n\nfunction getFormattedDate(date, prefomattedDate = false, hideYear = false) {\n  const day = date.getDate();\n  const month = MONTH_NAMES[date.getMonth()];\n  const year = date.getFullYear();\n  const hours = date.getHours();\n  let minutes = date.getMinutes();\n\n  if (minutes < 10) {\n    minutes = `0${minutes}`;\n  }\n\n  if (prefomattedDate) {\n    return `${prefomattedDate} at ${hours}:${minutes}`;\n  }\n\n  if (hideYear) {\n\n    return `${day} ${month} at ${hours}:${minutes}`;\n  }\n\n  return `${day} ${month} ${year}. at ${hours}:${minutes}`;\n}\n\nconst fromNow = dateParam => {\n  if (!dateParam) {\n    return null;\n  }\n\n  const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);\n  const DAY_IN_MS = 86400000;\n  const today = new Date();\n  const yesterday = new Date(today - DAY_IN_MS);\n  const seconds = Math.round((today - date) / 1000);\n  const minutes = Math.round(seconds / 60);\n  const isToday = today.toDateString() === date.toDateString();\n  const isYesterday = yesterday.toDateString() === date.toDateString();\n  const isThisYear = today.getFullYear() === date.getFullYear();\n\n  if (seconds < 5) {\n    return 'now';\n  } else if (seconds < 60) {\n    return `${seconds} seconds ago`;\n  } else if (seconds < 90) {\n    return 'about a minute ago';\n  } else if (minutes < 60) {\n    return `${minutes} minutes ago`;\n  } else if (isToday) {\n    return getFormattedDate(date, 'Today');\n  } else if (isYesterday) {\n    return getFormattedDate(date, 'Yesterday');\n  } else if (isThisYear) {\n    return getFormattedDate(date, false, true);\n  }\n\n  return getFormattedDate(date);\n};\n\nexports.transformSeconds = transformSeconds;\nexports.transformBytes = transformBytes;\nexports.formatDuration = formatDuration;\nexports.fromNow = fromNow;\n\n//# sourceURL=webpack:///./src/utils/pipes/fileDataTransforms.js?");

/***/ })

};;