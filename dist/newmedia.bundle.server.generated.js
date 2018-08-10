exports.ids = ["newmedia.bundle"];
exports.modules = {

/***/ "./node_modules/classNames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classNames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classNames/index.js?");

/***/ }),

/***/ "./src/components/UI/dialogs/DialogWithType/DialogWithType.js":
/*!********************************************************************!*\
  !*** ./src/components/UI/dialogs/DialogWithType/DialogWithType.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Dialog = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _DialogTitle = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n\nvar _DialogTitle2 = _interopRequireDefault(_DialogTitle);\n\nvar _DialogContent = __webpack_require__(/*! @material-ui/core/DialogContent */ \"@material-ui/core/DialogContent\");\n\nvar _DialogContent2 = _interopRequireDefault(_DialogContent);\n\nvar _DialogActions = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n\nvar _DialogActions2 = _interopRequireDefault(_DialogActions);\n\nvar _DialogContentText = __webpack_require__(/*! @material-ui/core/DialogContentText */ \"@material-ui/core/DialogContentText\");\n\nvar _DialogContentText2 = _interopRequireDefault(_DialogContentText);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n//material ui\n\n\nconst styles = theme => ({\n\tsuccess: {\n\t\tcolor: '#ffffff',\n\t\tbackgroundColor: theme.palette.primary.success,\n\t\t'&:hover': {\n\t\t\tbackgroundColor: theme.palette.primary.successHover\n\t\t}\n\t},\n\terror: {\n\t\tcolor: '#ffffff',\n\t\tbackgroundColor: theme.palette.primary.error,\n\t\t'&:hover': {\n\t\t\tbackgroundColor: theme.palette.primary.errorHover\n\t\t}\n\t},\n\tstandard: {\n\t\tcolor: '#ffffff',\n\t\tbackgroundColor: theme.palette.primary.standard,\n\t\t'&:hover': {\n\t\t\tbackgroundColor: theme.palette.primary.standardHover\n\t\t}\n\t}\n});\n\nconst dialogWithType = (_ref) => {\n\tlet { open, close, title, linkToPage, actionBtnText, type } = _ref,\n\t    rest = _objectWithoutProperties(_ref, ['open', 'close', 'title', 'linkToPage', 'actionBtnText', 'type']);\n\n\tconst classes = rest.classes;\n\treturn _react2.default.createElement(\n\t\t_Dialog2.default,\n\t\t{ open: open, disableBackdropClick: true },\n\t\t_react2.default.createElement(\n\t\t\t_DialogTitle2.default,\n\t\t\tnull,\n\t\t\ttitle\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t_DialogContent2.default,\n\t\t\tnull,\n\t\t\t_react2.default.createElement(\n\t\t\t\t_DialogContentText2.default,\n\t\t\t\tnull,\n\t\t\t\trest.children\n\t\t\t)\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t_DialogActions2.default,\n\t\t\tnull,\n\t\t\tlinkToPage ? _react2.default.createElement(\n\t\t\t\t_reactRouterDom.Link,\n\t\t\t\t{ to: linkToPage },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_Button2.default,\n\t\t\t\t\t{ className: classes[type], autoFocus: 'autoFocus', variant: 'raised' },\n\t\t\t\t\tactionBtnText\n\t\t\t\t)\n\t\t\t) : _react2.default.createElement(\n\t\t\t\t_Button2.default,\n\t\t\t\t{ onClick: close, className: classes[type], autoFocus: 'autoFocus', variant: 'raised' },\n\t\t\t\tactionBtnText\n\t\t\t)\n\t\t)\n\t);\n};\n\nexports.default = (0, _styles.withStyles)(styles)(dialogWithType);\n\n//# sourceURL=webpack:///./src/components/UI/dialogs/DialogWithType/DialogWithType.js?");

/***/ }),

/***/ "./src/pages/NewMedia.js":
/*!*******************************!*\
  !*** ./src/pages/NewMedia.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _category = __webpack_require__(/*! ../store/states/media/category/category.operations */ \"./src/store/states/media/category/category.operations.js\");\n\nvar categoryOperations = _interopRequireWildcard(_category);\n\nvar _tag = __webpack_require__(/*! ../store/states/media/tag/tag.operations */ \"./src/store/states/media/tag/tag.operations.js\");\n\nvar tagOperations = _interopRequireWildcard(_tag);\n\nvar _media = __webpack_require__(/*! ../store/states/media/media.operations */ \"./src/store/states/media/media.operations.js\");\n\nvar mediaOperations = _interopRequireWildcard(_media);\n\nvar _media2 = __webpack_require__(/*! ../store/states/media/media.api */ \"./src/store/states/media/media.api.js\");\n\nvar _FileUploader = __webpack_require__(/*! ./newmedia/FileUploader */ \"./src/pages/newmedia/FileUploader.js\");\n\nvar _FileUploader2 = _interopRequireDefault(_FileUploader);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass NewMedia extends _react.Component {\n\tconstructor(...args) {\n\t\tvar _temp;\n\n\t\treturn _temp = super(...args), this.state = {\n\t\t\tupload_details: null,\n\t\t\tredirect_to_login: false\n\t\t}, this.submitFormHandler = mediaForm => {\n\t\t\tthis.props.createMedia(mediaForm);\n\t\t}, _temp;\n\t}\n\n\tcomponentDidMount() {\n\t\t(0, _media2.getDirectUploadDetails)({ resourceType: 'video' }).then(res => {\n\t\t\tif (res.data) {\n\t\t\t\tthis.setState({ upload_details: res.data });\n\t\t\t} else {\n\t\t\t\tthis.setState({ redirect_to_login: true });\n\t\t\t}\n\t\t});\n\n\t\tthis.props.getCategories();\n\t\tthis.props.getTags();\n\t}\n\n\trender() {\n\t\tif (this.state.redirect_to_login) {\n\t\t\treturn _react2.default.createElement(_reactRouterDom.Redirect, { to: '/signin' });\n\t\t}\n\t\treturn _react2.default.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\t_react2.default.createElement(_FileUploader2.default, { submitForm: this.submitFormHandler, uploadDetails: this.state.upload_details, categories: this.props.categories })\n\t\t);\n\t}\n}\n\nconst boundActionCreators = dispatch => (0, _redux.bindActionCreators)(_extends({}, mediaOperations, categoryOperations, tagOperations), dispatch);\n\nexports.default = (0, _reactRedux.connect)(null, boundActionCreators)(NewMedia);\n\n//# sourceURL=webpack:///./src/pages/NewMedia.js?");

/***/ }),

/***/ "./src/pages/newmedia/FileUploader.js":
/*!********************************************!*\
  !*** ./src/pages/newmedia/FileUploader.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _classNames = __webpack_require__(/*! classNames */ \"./node_modules/classNames/index.js\");\n\nvar _classNames2 = _interopRequireDefault(_classNames);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n\nvar _CardContent2 = _interopRequireDefault(_CardContent);\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _UploadProgress = __webpack_require__(/*! ./fileUploader/UploadProgress */ \"./src/pages/newmedia/fileUploader/UploadProgress.js\");\n\nvar _UploadProgress2 = _interopRequireDefault(_UploadProgress);\n\nvar _FileMetaForm = __webpack_require__(/*! ./FileMetaForm */ \"./src/pages/newmedia/FileMetaForm.js\");\n\nvar _FileMetaForm2 = _interopRequireDefault(_FileMetaForm);\n\nvar _FileInformation = __webpack_require__(/*! ./fileUploader/FileInformation */ \"./src/pages/newmedia/fileUploader/FileInformation.js\");\n\nvar _FileInformation2 = _interopRequireDefault(_FileInformation);\n\nvar _AdjustThumbnail = __webpack_require__(/*! ./fileUploader/AdjustThumbnail */ \"./src/pages/newmedia/fileUploader/AdjustThumbnail.js\");\n\nvar _AdjustThumbnail2 = _interopRequireDefault(_AdjustThumbnail);\n\nvar _FileActions = __webpack_require__(/*! ./fileUploader/FileActions */ \"./src/pages/newmedia/fileUploader/FileActions.js\");\n\nvar _FileActions2 = _interopRequireDefault(_FileActions);\n\nvar _DialogWithType = __webpack_require__(/*! ../../components/UI/dialogs/DialogWithType/DialogWithType */ \"./src/components/UI/dialogs/DialogWithType/DialogWithType.js\");\n\nvar _DialogWithType2 = _interopRequireDefault(_DialogWithType);\n\nvar _media = __webpack_require__(/*! ../../store/states/media/media.api */ \"./src/store/states/media/media.api.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n//materialui\n\n\nconst styles = theme => ({\n\troot: {\n\t\tmargin: 'auto',\n\t\tmaxWidth: '70%',\n\t\tmarginTop: theme.spacing.unit * 5\n\t},\n\tcard: {\n\t\tpadding: '1.5rem 2.5rem',\n\t\ttextAlign: 'center'\n\t},\n\tcardContent: {\n\t\tposition: 'relative',\n\t\tminHeight: '350px'\n\t},\n\tcaption: {\n\t\tposition: 'relative',\n\t\tdisplay: 'flex',\n\t\tflexDirection: 'column',\n\t\ttextAlign: 'center',\n\t\talignItems: 'center'\n\t},\n\tbtnIcon: {\n\t\tmarginRight: '.4rem'\n\t},\n\n\tinput: {\n\t\tdisplay: 'none'\n\t},\n\tchooseFile: {\n\t\tmarginBottom: '.4rem',\n\t\tfontWeight: '700',\n\t\t'&:hover': {\n\t\t\tcolor: theme.palette.primary.light,\n\t\t\tcursor: 'pointer'\n\t\t}\n\t},\n\tfileName: {\n\t\tmarginTop: '.3rem',\n\t\tfontSize: '.8rem'\n\t},\n\tfileActions: {\n\t\tbottom: 0,\n\t\tposition: 'absolute',\n\t\tleft: '14%'\n\t}\n});\n\nclass FileUploader extends _react.Component {\n\tconstructor(...args) {\n\t\tvar _temp, _this;\n\n\t\treturn _temp = _this = super(...args), this.state = {\n\t\t\tfile: '',\n\t\t\tprogress: 0,\n\t\t\tloading: false,\n\t\t\tvideo: '',\n\t\t\tthumb_url: '',\n\t\t\terror: '',\n\t\t\tstatus: 'disabled',\n\t\t\tdialogOpened: false\n\t\t}, this.handleChange = event => {\n\t\t\tthis.setState({ file: event.target.files[0], status: 'active' });\n\t\t}, this.updateProgress = e => {\n\t\t\tlet progress = Math.round(e.loaded / e.total * 100);\n\t\t\tthis.setState({ progress: progress, loading: progress == 100 ? false : true });\n\t\t}, this.startUploading = _asyncToGenerator(function* () {\n\t\t\tyield _this.setState({ loading: true, status: 'loading', progress: 0 });\n\t\t\tlet file = _this.state.file;\n\t\t\tlet upload_link = _this.props.uploadDetails.upload_link;\n\t\t\tlet preset = _this.props.uploadDetails.cloud_preset;\n\t\t\tlet fd = new FormData();\n\t\t\tfd.append('file', file);\n\t\t\tfd.append('upload_preset', preset);\n\t\t\t(0, _media.uploadVideo)(fd, upload_link, _this.updateProgress).then(function (data) {\n\t\t\t\tlet video = data;\n\t\t\t\t_this.props.dispatch((0, _reduxForm.change)('mediaInfo', 'video_url', video.secure_url));\n\t\t\t\t_this.props.dispatch((0, _reduxForm.change)('mediaInfo', 'duration', video.duration));\n\n\t\t\t\t_this.setState({ video, status: 'success' });\n\t\t\t}).catch(function (error) {\n\t\t\t\t_this.setState({ error: error, status: 'error', dialogOpened: true });\n\t\t\t});\n\t\t}), this.closeDialog = () => {\n\t\t\tthis.setState({ dialogOpened: false });\n\t\t}, _temp;\n\t}\n\n\trender() {\n\t\tconst { classes } = this.props;\n\n\t\treturn _react2.default.createElement(\n\t\t\t_react2.default.Fragment,\n\t\t\tnull,\n\t\t\t_react2.default.createElement(\n\t\t\t\t_DialogWithType2.default,\n\t\t\t\t{\n\t\t\t\t\topen: !!(this.state.error && this.state.dialogOpened),\n\t\t\t\t\tclose: this.closeDialog,\n\t\t\t\t\ttitle: 'Error',\n\t\t\t\t\ttype: 'error',\n\t\t\t\t\tactionBtnText: 'Dismiss' },\n\t\t\t\tthis.state.error\n\t\t\t),\n\t\t\t_react2.default.createElement(\n\t\t\t\t_Grid2.default,\n\t\t\t\t{ container: true, spacing: 24, className: classes.root },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_Grid2.default,\n\t\t\t\t\t{ item: true, xs: 8 },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_Card2.default,\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t_CardContent2.default,\n\t\t\t\t\t\t\t{ className: classes.cardContent },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: classes.fileActions },\n\t\t\t\t\t\t\t\t_react2.default.createElement(_FileActions2.default, null)\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: classes.caption },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t{ className: classes.fileName },\n\t\t\t\t\t\t\t\t\tthis.state.file && _react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t'Filename:',\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'strong',\n\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\tthis.state.file.name\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(_AdjustThumbnail2.default, { video: this.state.video }),\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'label',\n\t\t\t\t\t\t\t\t\t{ htmlFor: 'icon-button-file' },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t_Typography2.default,\n\t\t\t\t\t\t\t\t\t\t{ color: 'textSecondary',\n\t\t\t\t\t\t\t\t\t\t\tvariant: 'subheading', className: classes.chooseFile },\n\t\t\t\t\t\t\t\t\t\tthis.state.status !== 'finished' && (this.state.file ? 'Click to select another file' : 'Click to select a file')\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement('input', { accept: 'video/*', onChange: this.handleChange,\n\t\t\t\t\t\t\t\t\tclassName: classes.input, id: 'icon-button-file', type: 'file' }),\n\t\t\t\t\t\t\t\t_react2.default.createElement(_UploadProgress2.default, { progress: this.state.progress, startUploading: this.startUploading,\n\t\t\t\t\t\t\t\t\tstatus: this.state.status })\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_Grid2.default,\n\t\t\t\t\t{ item: true, xs: 4 },\n\t\t\t\t\tthis.state.video && _react2.default.createElement(_FileInformation2.default, { file: this.state.video }),\n\t\t\t\t\t_react2.default.createElement(_FileMetaForm2.default, { submitForm: this.props.submitForm, submitBtnText: 'Publish media' })\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n}\n\nFileUploader.propTypes = {\n\tuploadDetails: _propTypes2.default.object\n};\n\nexports.default = (0, _reactRedux.connect)()((0, _styles.withStyles)(styles)(FileUploader));\n\n//# sourceURL=webpack:///./src/pages/newmedia/FileUploader.js?");

/***/ }),

/***/ "./src/pages/newmedia/fileUploader/FileActions.js":
/*!********************************************************!*\
  !*** ./src/pages/newmedia/fileUploader/FileActions.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\t\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _SpeedDial = __webpack_require__(/*! @material-ui/lab/SpeedDial */ \"@material-ui/lab/SpeedDial\");\n\nvar _SpeedDial2 = _interopRequireDefault(_SpeedDial);\n\nvar _SpeedDialIcon = __webpack_require__(/*! @material-ui/lab/SpeedDialIcon */ \"@material-ui/lab/SpeedDialIcon\");\n\nvar _SpeedDialIcon2 = _interopRequireDefault(_SpeedDialIcon);\n\nvar _MoreVert = __webpack_require__(/*! @material-ui/icons/MoreVert */ \"@material-ui/icons/MoreVert\");\n\nvar _MoreVert2 = _interopRequireDefault(_MoreVert);\n\nvar _SpeedDialAction = __webpack_require__(/*! @material-ui/lab/SpeedDialAction */ \"@material-ui/lab/SpeedDialAction\");\n\nvar _SpeedDialAction2 = _interopRequireDefault(_SpeedDialAction);\n\nvar _Save = __webpack_require__(/*! @material-ui/icons/Save */ \"@material-ui/icons/Save\");\n\nvar _Save2 = _interopRequireDefault(_Save);\n\nvar _Delete = __webpack_require__(/*! @material-ui/icons/Delete */ \"@material-ui/icons/Delete\");\n\nvar _Delete2 = _interopRequireDefault(_Delete);\n\nvar _Close = __webpack_require__(/*! @material-ui/icons/Close */ \"@material-ui/icons/Close\");\n\nvar _Close2 = _interopRequireDefault(_Close);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n\t\troot: {\n\t\t\t\theight: 380\n\t\t},\n\t\tspeedDial: {\n\t\t\t\tposition: 'absolute',\n\t\t\t\tbottom: theme.spacing.unit * 2,\n\t\t\t\tright: theme.spacing.unit * 3\n\t\t}\n});\n\nconst actions = [{ icon: _react2.default.createElement(_Save2.default, null), name: 'Save draft' }, { icon: _react2.default.createElement(_Delete2.default, null), name: 'Cancel' }];\n\nclass FileActions extends _react.Component {\n\t\tconstructor(...args) {\n\t\t\t\tvar _temp;\n\n\t\t\t\treturn _temp = super(...args), this.state = {\n\t\t\t\t\t\topen: false\n\t\t\t\t}, this.handleOpen = () => {\n\t\t\t\t\t\tif (!this.state.hidden) {\n\t\t\t\t\t\t\t\tthis.setState({\n\t\t\t\t\t\t\t\t\t\topen: true\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t}, this.handleClose = () => {\n\t\t\t\t\t\tthis.setState({\n\t\t\t\t\t\t\t\topen: false\n\t\t\t\t\t\t});\n\t\t\t\t}, _temp;\n\t\t}\n\n\t\trender() {\n\t\t\t\tconst { classes } = this.props;\n\t\t\t\tconst { open } = this.state;\n\n\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t\t_SpeedDial2.default,\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tariaLabel: 'SpeedDial openIcon example',\n\t\t\t\t\t\t\t\tclassName: classes.speedDial,\n\t\t\t\t\t\t\t\ticon: _react2.default.createElement(_SpeedDialIcon2.default, { openIcon: _react2.default.createElement(_Close2.default, null) }),\n\t\t\t\t\t\t\t\tonBlur: this.handleClose,\n\t\t\t\t\t\t\t\tonClose: this.handleClose,\n\t\t\t\t\t\t\t\tonFocus: this.handleOpen,\n\t\t\t\t\t\t\t\tonMouseEnter: this.handleOpen,\n\t\t\t\t\t\t\t\tonMouseLeave: this.handleClose,\n\t\t\t\t\t\t\t\topen: open\n\t\t\t\t\t\t},\n\t\t\t\t\t\tactions.map(action => _react2.default.createElement(_SpeedDialAction2.default, {\n\t\t\t\t\t\t\t\tkey: action.name,\n\t\t\t\t\t\t\t\ticon: action.icon,\n\t\t\t\t\t\t\t\ttooltipTitle: action.name,\n\t\t\t\t\t\t\t\tonClick: this.handleClick\n\t\t\t\t\t\t}))\n\t\t\t\t);\n\t\t}\n}\n\nexports.default = (0, _styles.withStyles)(styles)(FileActions);\n\n//# sourceURL=webpack:///./src/pages/newmedia/fileUploader/FileActions.js?");

/***/ }),

/***/ "./src/pages/newmedia/fileUploader/FileInformation.js":
/*!************************************************************!*\
  !*** ./src/pages/newmedia/fileUploader/FileInformation.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _List = __webpack_require__(/*! @material-ui/core/List */ \"@material-ui/core/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ \"@material-ui/core/ListItem\");\n\nvar _ListItem2 = _interopRequireDefault(_ListItem);\n\nvar _ListItemIcon = __webpack_require__(/*! @material-ui/core/ListItemIcon */ \"@material-ui/core/ListItemIcon\");\n\nvar _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);\n\nvar _ListItemSecondaryAction = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ \"@material-ui/core/ListItemSecondaryAction\");\n\nvar _ListItemSecondaryAction2 = _interopRequireDefault(_ListItemSecondaryAction);\n\nvar _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ \"@material-ui/core/ListItemText\");\n\nvar _ListItemText2 = _interopRequireDefault(_ListItemText);\n\nvar _ListSubheader = __webpack_require__(/*! @material-ui/core/ListSubheader */ \"@material-ui/core/ListSubheader\");\n\nvar _ListSubheader2 = _interopRequireDefault(_ListSubheader);\n\nvar _AccessTime = __webpack_require__(/*! @material-ui/icons/AccessTime */ \"@material-ui/icons/AccessTime\");\n\nvar _AccessTime2 = _interopRequireDefault(_AccessTime);\n\nvar _Storage = __webpack_require__(/*! @material-ui/icons/Storage */ \"@material-ui/icons/Storage\");\n\nvar _Storage2 = _interopRequireDefault(_Storage);\n\nvar _PhotoSizeSelectActual = __webpack_require__(/*! @material-ui/icons/PhotoSizeSelectActual */ \"@material-ui/icons/PhotoSizeSelectActual\");\n\nvar _PhotoSizeSelectActual2 = _interopRequireDefault(_PhotoSizeSelectActual);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _fileDataTransforms = __webpack_require__(/*! ../../../utils/pipes/fileDataTransforms */ \"./src/utils/pipes/fileDataTransforms.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n  card: {\n    padding: '.2rem 1rem',\n    marginBottom: '.5rem'\n  }\n});\nclass FileInformation extends _react.PureComponent {\n\n  render() {\n    const { file: { bytes, duration, width, height }, classes } = this.props;\n\n    return _react2.default.createElement(\n      _Card2.default,\n      { className: classes.card },\n      _react2.default.createElement(\n        _List2.default,\n        { subheader: _react2.default.createElement(\n            _ListSubheader2.default,\n            null,\n            'About the file'\n          ) },\n        _react2.default.createElement(\n          _ListItem2.default,\n          null,\n          _react2.default.createElement(\n            _ListItemIcon2.default,\n            null,\n            _react2.default.createElement(_AccessTime2.default, null)\n          ),\n          _react2.default.createElement(_ListItemText2.default, { primary: 'Duration' }),\n          _react2.default.createElement(\n            _ListItemSecondaryAction2.default,\n            null,\n            (0, _fileDataTransforms.transformSeconds)(duration)\n          )\n        ),\n        _react2.default.createElement(\n          _ListItem2.default,\n          null,\n          _react2.default.createElement(\n            _ListItemIcon2.default,\n            null,\n            _react2.default.createElement(_Storage2.default, null)\n          ),\n          _react2.default.createElement(_ListItemText2.default, { primary: 'Size' }),\n          _react2.default.createElement(\n            _ListItemSecondaryAction2.default,\n            null,\n            (0, _fileDataTransforms.transformBytes)(bytes)\n          )\n        ),\n        _react2.default.createElement(\n          _ListItem2.default,\n          null,\n          _react2.default.createElement(\n            _ListItemIcon2.default,\n            null,\n            _react2.default.createElement(_PhotoSizeSelectActual2.default, null)\n          ),\n          _react2.default.createElement(_ListItemText2.default, { primary: 'Dimensions' }),\n          _react2.default.createElement(\n            _ListItemSecondaryAction2.default,\n            null,\n            width,\n            ' x ',\n            height\n          )\n        )\n      )\n    );\n  }\n}\n\nexports.default = (0, _styles.withStyles)(styles)(FileInformation);\n\n//# sourceURL=webpack:///./src/pages/newmedia/fileUploader/FileInformation.js?");

/***/ }),

/***/ "./src/pages/newmedia/fileUploader/UploadProgress.js":
/*!***********************************************************!*\
  !*** ./src/pages/newmedia/fileUploader/UploadProgress.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _classNames = __webpack_require__(/*! classNames */ \"./node_modules/classNames/index.js\");\n\nvar _classNames2 = _interopRequireDefault(_classNames);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _CloudUpload = __webpack_require__(/*! @material-ui/icons/CloudUpload */ \"@material-ui/icons/CloudUpload\");\n\nvar _CloudUpload2 = _interopRequireDefault(_CloudUpload);\n\nvar _CircularProgress = __webpack_require__(/*! @material-ui/core/CircularProgress */ \"@material-ui/core/CircularProgress\");\n\nvar _CircularProgress2 = _interopRequireDefault(_CircularProgress);\n\nvar _Check = __webpack_require__(/*! @material-ui/icons/Check */ \"@material-ui/icons/Check\");\n\nvar _Check2 = _interopRequireDefault(_Check);\n\nvar _ErrorOutline = __webpack_require__(/*! @material-ui/icons/ErrorOutline */ \"@material-ui/icons/ErrorOutline\");\n\nvar _ErrorOutline2 = _interopRequireDefault(_ErrorOutline);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n  wrapper: {\n    margin: '1rem',\n    position: 'relative',\n    display: 'inline'\n  },\n  buttonSuccess: {\n    backgroundColor: theme.palette.primary.success,\n    pointerEvents: 'none'\n  },\n  fabProgress: {\n    color: theme.palette.primary.success,\n    position: 'absolute',\n    top: -4.5,\n    left: -6,\n    zIndex: 1,\n    transition: '.2s'\n  },\n  buttonProgress: {\n    color: theme.palette.primary.success,\n    position: 'absolute',\n    top: '50%',\n    left: '50%',\n    marginTop: -12,\n    marginLeft: -12\n  },\n  buttonStandard: {\n    backgroundColor: theme.palette.primary.standard,\n    '&:hover': {\n      backgroundColor: theme.palette.primary.standardHover\n    }\n  },\n  button: {\n    marginLeft: '.5rem',\n    color: '#fff'\n  },\n\n  disabled: {\n    backgroundColor: '#ccc',\n    color: '#eeeeee',\n    pointerEvents: 'none'\n  },\n  buttonError: {\n    backgroundColor: theme.palette.primary.error,\n    '&:hover': {\n      backgroundColor: theme.palette.primary.errorHover\n    }\n  } });\n\nconst statusMap = {\n  'disabled': {\n    buttonClassName: 'disabled',\n    buttonText: 'No file selected',\n    buttonIcon: _react2.default.createElement(_CloudUpload2.default, null)\n  },\n  'active': {\n    buttonClassName: 'buttonStandard',\n    buttonText: 'Start upload',\n    buttonIcon: _react2.default.createElement(_CloudUpload2.default, null)\n  },\n  'loading': {\n    buttonClassName: 'buttonStandard',\n    buttonText: 'Uploading now',\n    buttonIcon: _react2.default.createElement(_CloudUpload2.default, null)\n  },\n  'success': {\n    buttonClassName: 'buttonSuccess',\n    buttonText: 'Finished',\n    buttonIcon: _react2.default.createElement(_Check2.default, null)\n  },\n  'error': {\n    buttonClassName: 'buttonError',\n    buttonText: 'Try again',\n    buttonIcon: _react2.default.createElement(_ErrorOutline2.default, null)\n  }\n};\nconst uploadProgress = ({ classes, progress, startUploading, status }) => {\n\n  const displayOptions = statusMap[status];\n  const btnClassnames = (0, _classNames2.default)({\n    [classes.button]: true,\n    [classes[displayOptions.buttonClassName]]: true\n  });\n\n  return _react2.default.createElement(\n    'div',\n    { className: classes.wrapper },\n    _react2.default.createElement(\n      _Button2.default,\n      {\n        variant: 'fab',\n        className: btnClassnames },\n      displayOptions.buttonIcon,\n      status == 'loading' && _react2.default.createElement(_CircularProgress2.default, { size: 66, variant: 'determinate', value: progress, className: classes.fabProgress })\n    ),\n    _react2.default.createElement(\n      _Button2.default,\n      {\n        variant: 'contained',\n        onClick: startUploading,\n        className: btnClassnames\n      },\n      displayOptions.buttonText\n    )\n  );\n};\n\nuploadProgress.propTypes = {\n  status: _propTypes2.default.string.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(uploadProgress);\n\n//# sourceURL=webpack:///./src/pages/newmedia/fileUploader/UploadProgress.js?");

/***/ }),

/***/ "./src/utils/pipes/fileDataTransforms.js":
/*!***********************************************!*\
  !*** ./src/utils/pipes/fileDataTransforms.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst transformSeconds = value => {\n  let display = '';\n  let h = Math.floor(value / 3600);\n  let m = Math.floor(value % 3600 / 60);\n  let s = Math.floor(value % 3600 % 60);\n  display = h > 0 ? h + 'h ' : '';\n  display += m > 0 ? m + 'min ' : '';\n  display += s > 0 ? s + 's' : '';\n  return display;\n};\n\nconst transformBytes = bytes => {\n  let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];\n  if (bytes == 0) return '0 Byte';\n  let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));\n  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];\n};\n\nconst formatDuration = seconds => {\n  const date = new Date(Number(seconds) * 1000);\n  const hh = date.getUTCHours();\n  let mm = date.getUTCMinutes();\n  const ss = ('0' + date.getUTCSeconds()).slice(-2);\n  if (hh) {\n    mm = ('0' + date.getUTCMinutes()).slice(-2);\n    return `${hh}:${mm}:${ss}`;\n  }\n  return `${mm}:${ss}`;\n};\n\nexports.transformSeconds = transformSeconds;\nexports.transformBytes = transformBytes;\nexports.formatDuration = formatDuration;\n\n//# sourceURL=webpack:///./src/utils/pipes/fileDataTransforms.js?");

/***/ })

};;