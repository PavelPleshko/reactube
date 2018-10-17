exports.ids = [13];
exports.modules = {

/***/ "./src/components/core/Modals/AvatarWithUpdateModal.js":
/*!*************************************************************!*\
  !*** ./src/components/core/Modals/AvatarWithUpdateModal.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Image = __webpack_require__(/*! @material-ui/icons/Image */ \"@material-ui/icons/Image\");\n\nvar _Image2 = _interopRequireDefault(_Image);\n\nvar _Edit = __webpack_require__(/*! @material-ui/icons/Edit */ \"@material-ui/icons/Edit\");\n\nvar _Edit2 = _interopRequireDefault(_Edit);\n\nvar _Add = __webpack_require__(/*! @material-ui/icons/Add */ \"@material-ui/icons/Add\");\n\nvar _Add2 = _interopRequireDefault(_Add);\n\nvar _Remove = __webpack_require__(/*! @material-ui/icons/Remove */ \"@material-ui/icons/Remove\");\n\nvar _Remove2 = _interopRequireDefault(_Remove);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Modal = __webpack_require__(/*! @material-ui/core/Modal */ \"@material-ui/core/Modal\");\n\nvar _Modal2 = _interopRequireDefault(_Modal);\n\nvar _Slider = __webpack_require__(/*! @material-ui/lab/Slider */ \"@material-ui/lab/Slider\");\n\nvar _Slider2 = _interopRequireDefault(_Slider);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _reactAvatarEditor = __webpack_require__(/*! react-avatar-editor */ \"react-avatar-editor\");\n\nvar _reactAvatarEditor2 = _interopRequireDefault(_reactAvatarEditor);\n\nvar _EditAvatarModal = __webpack_require__(/*! ./avatarWithUpdateModal/EditAvatarModal */ \"./src/components/core/Modals/avatarWithUpdateModal/EditAvatarModal.js\");\n\nvar _EditAvatarModal2 = _interopRequireDefault(_EditAvatarModal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n\tchannelThumbnailWrapper: {\n\t\tdisplay: 'flex',\n\t\talignItems: 'center',\n\t\tjustifyContent: 'center',\n\t\tflexShrink: 0,\n\t\tposition: 'relative',\n\t\twidth: '6rem',\n\t\theight: '6rem',\n\t\tborderRadius: '50%',\n\t\toverflow: 'hidden',\n\t\tbackgroundColor: theme.palette.primary.lightGrey\n\t},\n\tborderAroundWrapper: {\n\t\tborder: `1px solid ${theme.palette.primary.textColor}`\n\t},\n\ticonNoPhoto: {\n\t\tcolor: theme.palette.primary.grey,\n\t\tfontSize: '4rem',\n\t\topacity: .4\n\t},\n\tchannelThumbnail: {\n\t\twidth: '100%',\n\t\theight: '100%'\n\t},\n\teditIconBtn: {\n\t\tposition: 'absolute',\n\t\ttop: 0,\n\t\tright: 0,\n\t\twidth: 30,\n\t\theight: 30\n\t},\n\teditIcon: {\n\t\tfontSize: '1.15rem'\n\t},\n\tthumbInputLabel: {\n\t\tposition: 'relative',\n\t\tpadding: '.3rem .7rem',\n\t\tborderRadius: 4,\n\t\tdisplay: 'inline-block',\n\t\tcolor: 'rgba(0, 0, 0, 0.54)',\n\t\tbackgroundColor: 'transparent',\n\t\ttransition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',\n\t\tfontSize: '.9rem',\n\t\t'&:hover': {\n\t\t\tbackgroundColor: 'rgba(63, 81, 181, 0.08)',\n\t\t\tcursor: 'pointer'\n\t\t}\n\t}\n});\n\n//meterial ui\n\n\nclass AvatarWithUpdateModal extends _react.Component {\n\tconstructor(...args) {\n\t\tvar _temp;\n\n\t\treturn _temp = super(...args), this.state = {\n\t\t\tmodalOpened: false\n\t\t}, this.openModal = () => {\n\t\t\tthis.setState({ modalOpened: true });\n\t\t}, this.closeModal = () => {\n\t\t\tthis.setState({ modalOpened: false });\n\t\t}, this.updateThumbnail = formData => {\n\t\t\tif (!this.props.processing) {\n\t\t\t\tconst { submitForm } = this.props;\n\t\t\t\tif (formData) {\n\t\t\t\t\tsubmitForm(formData);\n\t\t\t\t}\n\t\t\t}\n\t\t}, _temp;\n\t}\n\n\trender() {\n\n\t\tconst { modalOpened, submitted } = this.state;\n\t\tconst { avatar, classes, processing, resourceKey = 'iconImage' } = this.props;\n\n\t\treturn _react2.default.createElement(\n\t\t\t_react.Fragment,\n\t\t\tnull,\n\t\t\tmodalOpened && _react2.default.createElement(_EditAvatarModal2.default, { processing: processing,\n\t\t\t\tupdateResource: this.updateThumbnail,\n\t\t\t\tcloseModal: this.closeModal,\n\t\t\t\tresourceKey: resourceKey,\n\t\t\t\tmodalOpened: modalOpened }),\n\t\t\t_react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: [classes.channelThumbnailWrapper, avatar ? '' : classes.borderAroundWrapper].join(' ') },\n\t\t\t\tavatar ? _react2.default.createElement('img', { src: avatar,\n\t\t\t\t\tclassName: classes.channelThumbnail }) : _react2.default.createElement(_Image2.default, { className: classes.iconNoPhoto }),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_IconButton2.default,\n\t\t\t\t\t{ onClick: this.openModal, color: 'primary', className: classes.editIconBtn, 'aria-label': 'Edit channel thumbnail' },\n\t\t\t\t\t_react2.default.createElement(_Edit2.default, { className: classes.editIcon })\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n}\n\nexports.default = (0, _styles.withStyles)(styles)(AvatarWithUpdateModal);\n\n//# sourceURL=webpack:///./src/components/core/Modals/AvatarWithUpdateModal.js?");

/***/ }),

/***/ "./src/components/core/Modals/avatarWithUpdateModal/EditAvatarModal.js":
/*!*****************************************************************************!*\
  !*** ./src/components/core/Modals/avatarWithUpdateModal/EditAvatarModal.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Image = __webpack_require__(/*! @material-ui/icons/Image */ \"@material-ui/icons/Image\");\n\nvar _Image2 = _interopRequireDefault(_Image);\n\nvar _Add = __webpack_require__(/*! @material-ui/icons/Add */ \"@material-ui/icons/Add\");\n\nvar _Add2 = _interopRequireDefault(_Add);\n\nvar _Remove = __webpack_require__(/*! @material-ui/icons/Remove */ \"@material-ui/icons/Remove\");\n\nvar _Remove2 = _interopRequireDefault(_Remove);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Modal = __webpack_require__(/*! @material-ui/core/Modal */ \"@material-ui/core/Modal\");\n\nvar _Modal2 = _interopRequireDefault(_Modal);\n\nvar _Slider = __webpack_require__(/*! @material-ui/lab/Slider */ \"@material-ui/lab/Slider\");\n\nvar _Slider2 = _interopRequireDefault(_Slider);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _reactAvatarEditor = __webpack_require__(/*! react-avatar-editor */ \"react-avatar-editor\");\n\nvar _reactAvatarEditor2 = _interopRequireDefault(_reactAvatarEditor);\n\nvar _FileInfoTable = __webpack_require__(/*! ../../Tables/FileInfoTable/FileInfoTable */ \"./src/components/core/Tables/FileInfoTable/FileInfoTable.js\");\n\nvar _FileInfoTable2 = _interopRequireDefault(_FileInfoTable);\n\nvar _fileProcessing = __webpack_require__(/*! ../../../../utils/file-processing/file-processing */ \"./src/utils/file-processing/file-processing.js\");\n\nvar _EditAvatarWebworker = __webpack_require__(/*! ./EditAvatarWebworker */ \"./src/components/core/Modals/avatarWithUpdateModal/EditAvatarWebworker.js\");\n\nvar _EditAvatarWebworker2 = _interopRequireDefault(_EditAvatarWebworker);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//meterial ui\nconst ZOOM_STEP = 0.1;\nconst ZOOM_MIN = 0.5;\nconst ZOOM_MAX = 2;\nconst styles = theme => ({\n\tmodal: {\n\t\tposition: 'absolute',\n\t\ttop: '50%',\n\t\tleft: '50%',\n\t\tminWidth: '30%',\n\t\ttransform: 'translate(-50%,-50%)',\n\t\tborderRadius: 7,\n\t\toverflow: 'hidden',\n\t\tboxShadow: theme.shadows[5],\n\t\toutline: 'none',\n\t\tbackgroundColor: '#fff'\n\t},\n\tmodalHeader: {\n\t\tposition: 'relative',\n\t\tdisplay: 'flex',\n\t\tjustifyContent: 'space-between',\n\t\talignItems: 'center',\n\t\ttop: 0,\n\t\tleft: 0,\n\t\tcolor: 'rgba(0, 0, 0, .7)',\n\t\tfontWeight: 700,\n\t\tpadding: '1rem 1.5rem'\n\n\t},\n\tmodalBody: {\n\t\tpadding: theme.spacing.unit * 2\n\t},\n\tmodalFooter: {\n\t\tbackgroundColor: '#f6eded',\n\t\tpadding: '.5rem 1.5rem',\n\t\tdisplay: 'flex',\n\t\tjustifyContent: 'flex-end'\n\t},\n\tthumbnailPreview: {\n\t\tposition: 'relative',\n\t\tleft: '50%',\n\t\tmargin: 5,\n\t\ttransform: 'translateX(-50%)',\n\t\tdisplay: 'flex',\n\t\talignItems: 'center',\n\t\tjustifyContent: 'center',\n\t\theight: 140,\n\t\twidth: 140\n\t},\n\tthumbnailBackground: {\n\t\tbackgroundColor: 'rgba(0,0,0,.1)',\n\t\twidth: '100%',\n\t\theight: '100%',\n\t\tdisplay: 'flex',\n\t\talignItems: 'center',\n\t\tjustifyContent: 'center',\n\t\tborderRadius: '50%'\n\t},\n\tchannelThumnbnail: {\n\t\tdisplay: 'flex',\n\t\talignItems: 'center',\n\t\tjustifyContent: 'center',\n\t\tposition: 'relative',\n\t\twidth: '6rem',\n\t\theight: '6rem',\n\t\tbackgroundColor: theme.palette.primary.lightGrey,\n\t\tborderRadius: '50%'\n\t},\n\ticonNoPhoto: {\n\t\tcolor: '#fff',\n\t\tfontSize: '4rem',\n\t\topacity: .8\n\t},\n\tthumbInputLabel: {\n\t\tposition: 'relative',\n\t\tpadding: '.3rem .7rem',\n\t\tborderRadius: 4,\n\t\tdisplay: 'inline-block',\n\t\tcolor: 'rgba(0, 0, 0, 0.54)',\n\t\tbackgroundColor: 'transparent',\n\t\ttransition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',\n\t\tfontSize: '.9rem',\n\t\t'&:hover': {\n\t\t\tbackgroundColor: 'rgba(63, 81, 181, 0.08)',\n\t\t\tcursor: 'pointer'\n\t\t}\n\t},\n\tsliderGroup: {\n\t\tpadding: '0 3.5rem',\n\t\tdisplay: 'flex',\n\t\tflexGrow: 1,\n\t\talignItems: 'center'\n\t},\n\tsliderThumb: {\n\t\tbackgroundColor: '#fff',\n\t\tboxShadow: '1px 1px 2px 1px rgba(0,0,0,.4)'\n\t},\n\tsliderTrackAfter: {\n\t\tbackgroundColor: 'rgba(0,0,0,.4)'\n\t},\n\tsliderButton: {\n\t\tcursor: 'pointer',\n\t\tcolor: 'rgba(0,0,0,.3)',\n\t\tfontSize: '.9rem',\n\t\t'&:hover': {\n\t\t\tcolor: 'rgba(0,0,0,.6)'\n\t\t}\n\t}\n});\n\nclass EditThumbnailModal extends _react.Component {\n\tconstructor(...args) {\n\t\tvar _temp;\n\n\t\treturn _temp = super(...args), this.state = {\n\t\t\tsubmitted: false,\n\t\t\tdataUrl: null,\n\t\t\tscale: 1\n\t\t}, this.componentDidMount = () => {\n\t\t\tthis.formData = new FormData();\n\t\t}, this.fileChosenHandler = e => {\n\t\t\tconst iconImage = e.target.files[0];\n\t\t\tconst reader = new FileReader();\n\t\t\treader.readAsDataURL(iconImage);\n\t\t\treader.onload = () => {\n\t\t\t\tconst { result } = reader;\n\t\t\t\tthis.setState({ file: iconImage, dataUrl: result });\n\t\t\t};\n\t\t}, this.resetState = () => {\n\t\t\tthis.setState({ file: null, submitted: false, dataUrl: null });\n\t\t}, this.updateThumbnail = () => {\n\t\t\tconst { processing } = this.props;\n\t\t\tconst { file } = this.state;\n\t\t\tif (!processing) {\n\t\t\t\tif (file) {\n\t\t\t\t\tconst dataURL = this.editor.getImage().toDataURL();\n\t\t\t\t\tlet fileBlob;\n\t\t\t\t\tif (window.Worker) {\n\t\t\t\t\t\tconst worker = new Worker(_EditAvatarWebworker2.default);\n\t\t\t\t\t\tworker.postMessage({ action: _fileProcessing.dataURItoBlob.toString(), args: [dataURL] });\n\t\t\t\t\t\tworker.onmessage = e => {\n\t\t\t\t\t\t\tfileBlob = e.data;\n\t\t\t\t\t\t\tthis.appendDataAndSubmit(fileBlob);\n\t\t\t\t\t\t\tworker.terminate();\n\t\t\t\t\t\t};\n\t\t\t\t\t} else {\n\t\t\t\t\t\tfileBlob = (0, _fileProcessing.dataURItoBlob)(dataURL);\n\t\t\t\t\t\tthis.appendDataAndSubmit(fileBlob);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}, this.appendDataAndSubmit = data => {\n\t\t\tconst { updateResource, resourceKey } = this.props;\n\t\t\tthis.formData.set(resourceKey, data);\n\t\t\tthis.setState({ submitted: true }, () => updateResource(this.formData));\n\t\t}, this.componentDidUpdate = (nextProps, nextState) => {\n\t\t\tif (nextState.submitted) {\n\t\t\t\tconst { processing } = this.props;\n\t\t\t\tif (!processing) {\n\t\t\t\t\tthis.closeModal();\n\t\t\t\t}\n\t\t\t}\n\t\t}, this.handleScaleChange = (e, value) => {\n\t\t\tthis.setState({ scale: value });\n\t\t}, this.zoomOut = () => {\n\t\t\tconst { scale } = this.state;\n\t\t\tconst adjustedScale = scale - ZOOM_STEP;\n\t\t\tif (adjustedScale >= ZOOM_MIN) {\n\t\t\t\tthis.setState({ scale: adjustedScale });\n\t\t\t}\n\t\t}, this.zoomIn = () => {\n\t\t\tconst { scale } = this.state;\n\t\t\tconst adjustedScale = scale + ZOOM_STEP;\n\t\t\tif (adjustedScale <= ZOOM_MAX) {\n\t\t\t\tthis.setState({ scale: adjustedScale });\n\t\t\t}\n\t\t}, this.closeModal = () => {\n\t\t\tthis.props.closeModal();\n\t\t}, this.setEditorRef = editor => this.editor = editor, _temp;\n\t}\n\n\trender() {\n\n\t\tconst { file, submitted, dataUrl, scale } = this.state;\n\t\tconst { classes, processing, modalOpened } = this.props;\n\n\t\treturn _react2.default.createElement(\n\t\t\t_Modal2.default,\n\t\t\t{\n\t\t\t\t'aria-labelledby': 'edit-thumbnail',\n\t\t\t\t'aria-describedby': 'edit-thumbnail',\n\t\t\t\topen: modalOpened,\n\t\t\t\tonClose: this.closeModal\n\t\t\t},\n\t\t\t_react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: classes.modal },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: classes.modalHeader },\n\t\t\t\t\t'Edit Thumbnail',\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\t{ htmlFor: 'thumbnail-file', className: classes.thumbInputLabel },\n\t\t\t\t\t\tfile ? 'Choose another file' : 'Choose file'\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement('input', { type: 'file', accept: 'image/*', hidden: true, onChange: this.fileChosenHandler, id: 'thumbnail-file' })\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: classes.modalBody },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: classes.thumbnailPreview },\n\t\t\t\t\t\tdataUrl ? _react2.default.createElement(_reactAvatarEditor2.default, {\n\t\t\t\t\t\t\tref: this.setEditorRef,\n\t\t\t\t\t\t\timage: dataUrl, scale: scale, width: 120, height: 120, border: 20, borderRadius: 300 }) : _react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: classes.thumbnailBackground },\n\t\t\t\t\t\t\t_react2.default.createElement(_Image2.default, { className: classes.iconNoPhoto, style: { fontSize: '6rem' } })\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\tfile && _react2.default.createElement(\n\t\t\t\t\t\t_react.Fragment,\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(_FileInfoTable2.default, { file: file })\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: classes.modalFooter },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: classes.sliderGroup },\n\t\t\t\t\t\t_react2.default.createElement(_Remove2.default, { onClick: this.zoomOut, className: classes.sliderButton }),\n\t\t\t\t\t\t_react2.default.createElement(_Slider2.default, { classes: { thumb: classes.sliderThumb,\n\t\t\t\t\t\t\t\ttrackAfter: classes.sliderTrackAfter }, value: scale,\n\t\t\t\t\t\t\tmin: ZOOM_MIN, max: ZOOM_MAX, step: ZOOM_STEP, onChange: this.handleScaleChange }),\n\t\t\t\t\t\t_react2.default.createElement(_Add2.default, { onClick: this.zoomIn, className: classes.sliderButton })\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_Button2.default,\n\t\t\t\t\t\t{ variant: 'outlined', color: 'primary',\n\t\t\t\t\t\t\tonClick: this.updateThumbnail },\n\t\t\t\t\t\tprocessing && submitted ? 'Saving...' : 'Save'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n}\n\nexports.default = (0, _styles.withStyles)(styles)(EditThumbnailModal);\n\n//# sourceURL=webpack:///./src/components/core/Modals/avatarWithUpdateModal/EditAvatarModal.js?");

/***/ }),

/***/ "./src/components/core/Modals/avatarWithUpdateModal/EditAvatarWebworker.js":
/*!*********************************************************************************!*\
  !*** ./src/components/core/Modals/avatarWithUpdateModal/EditAvatarWebworker.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nconst workercode = () => {\n\tself.onmessage = message => {\n\t\tconst func = self.getFunc(message.data.action);\n\t\tconst args = message.data.args;\n\t\tconst result = func.apply(null, args);\n\t\tpostMessage(result);\n\t};\n\n\tself.getFunc = function (funcStr) {\n\t\tvar argName = funcStr.substring(funcStr.indexOf(\"(\") + 1, funcStr.indexOf(\")\"));\n\t\tfuncStr = funcStr.substring(funcStr.indexOf(\"{\") + 1, funcStr.lastIndexOf(\"}\"));\n\t\treturn new Function(argName, funcStr);\n\t};\n};\n\nlet code = workercode.toString();\ncode = code.substring(code.indexOf(\"{\") + 1, code.lastIndexOf(\"}\"));\n\nconst blob = new Blob([code], { type: \"application/javascript\" });\nconst worker_script = URL.createObjectURL(blob);\n\nexports.default = worker_script;\n\n//# sourceURL=webpack:///./src/components/core/Modals/avatarWithUpdateModal/EditAvatarWebworker.js?");

/***/ }),

/***/ "./src/components/core/Tables/FileInfoTable/FileInfoTable.js":
/*!*******************************************************************!*\
  !*** ./src/components/core/Tables/FileInfoTable/FileInfoTable.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _List = __webpack_require__(/*! @material-ui/core/List */ \"@material-ui/core/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ \"@material-ui/core/ListItem\");\n\nvar _ListItem2 = _interopRequireDefault(_ListItem);\n\nvar _ListItemIcon = __webpack_require__(/*! @material-ui/core/ListItemIcon */ \"@material-ui/core/ListItemIcon\");\n\nvar _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);\n\nvar _ListItemSecondaryAction = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ \"@material-ui/core/ListItemSecondaryAction\");\n\nvar _ListItemSecondaryAction2 = _interopRequireDefault(_ListItemSecondaryAction);\n\nvar _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ \"@material-ui/core/ListItemText\");\n\nvar _ListItemText2 = _interopRequireDefault(_ListItemText);\n\nvar _ListSubheader = __webpack_require__(/*! @material-ui/core/ListSubheader */ \"@material-ui/core/ListSubheader\");\n\nvar _ListSubheader2 = _interopRequireDefault(_ListSubheader);\n\nvar _AccessTime = __webpack_require__(/*! @material-ui/icons/AccessTime */ \"@material-ui/icons/AccessTime\");\n\nvar _AccessTime2 = _interopRequireDefault(_AccessTime);\n\nvar _Storage = __webpack_require__(/*! @material-ui/icons/Storage */ \"@material-ui/icons/Storage\");\n\nvar _Storage2 = _interopRequireDefault(_Storage);\n\nvar _PhotoSizeSelectActual = __webpack_require__(/*! @material-ui/icons/PhotoSizeSelectActual */ \"@material-ui/icons/PhotoSizeSelectActual\");\n\nvar _PhotoSizeSelectActual2 = _interopRequireDefault(_PhotoSizeSelectActual);\n\nvar _Folder = __webpack_require__(/*! @material-ui/icons/Folder */ \"@material-ui/icons/Folder\");\n\nvar _Folder2 = _interopRequireDefault(_Folder);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _fileDataTransforms = __webpack_require__(/*! ../../../../utils/pipes/fileDataTransforms */ \"./src/utils/pipes/fileDataTransforms.js\");\n\nvar _truncate = __webpack_require__(/*! ../../../../utils/pipes/truncate */ \"./src/utils/pipes/truncate.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n  card: {\n    padding: '.2rem 0',\n    marginBottom: '.5rem'\n  },\n  listItem: {\n    paddingLeft: 0\n  }\n});\nclass FileInfoTable extends _react.PureComponent {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.isImage = type => {\n      return type.includes('image');\n    }, _temp;\n  }\n\n  render() {\n    let { file: { bytes, name, type, size, duration, width, height }, classes } = this.props;\n    const isImage = this.isImage(type);\n    if (isImage) {\n      bytes = size;\n    }\n    return _react2.default.createElement(\n      'div',\n      { className: classes.card },\n      _react2.default.createElement(\n        _List2.default,\n        null,\n        _react2.default.createElement(\n          _ListItem2.default,\n          { className: classes.listItem },\n          _react2.default.createElement(\n            _ListItemIcon2.default,\n            null,\n            _react2.default.createElement(_Folder2.default, null)\n          ),\n          _react2.default.createElement(_ListItemText2.default, { primary: 'Name' }),\n          _react2.default.createElement(\n            _ListItemSecondaryAction2.default,\n            null,\n            _react2.default.createElement(\n              'span',\n              { title: name },\n              (0, _truncate.trimInTheMiddle)(name, 10, 10)\n            )\n          )\n        ),\n        duration && _react2.default.createElement(\n          _ListItem2.default,\n          { className: classes.listItem },\n          _react2.default.createElement(\n            _ListItemIcon2.default,\n            null,\n            _react2.default.createElement(_AccessTime2.default, null)\n          ),\n          _react2.default.createElement(_ListItemText2.default, { primary: 'Duration' }),\n          _react2.default.createElement(\n            _ListItemSecondaryAction2.default,\n            null,\n            (0, _fileDataTransforms.transformSeconds)(duration)\n          )\n        ),\n        _react2.default.createElement(\n          _ListItem2.default,\n          { className: classes.listItem },\n          _react2.default.createElement(\n            _ListItemIcon2.default,\n            null,\n            _react2.default.createElement(_Storage2.default, null)\n          ),\n          _react2.default.createElement(_ListItemText2.default, { primary: 'Size' }),\n          _react2.default.createElement(\n            _ListItemSecondaryAction2.default,\n            null,\n            (0, _fileDataTransforms.transformBytes)(bytes)\n          )\n        ),\n        !isImage && _react2.default.createElement(\n          _ListItem2.default,\n          { className: classes.listItem },\n          _react2.default.createElement(\n            _ListItemIcon2.default,\n            null,\n            _react2.default.createElement(_PhotoSizeSelectActual2.default, null)\n          ),\n          _react2.default.createElement(_ListItemText2.default, { primary: 'Dimensions' }),\n          _react2.default.createElement(\n            _ListItemSecondaryAction2.default,\n            null,\n            width,\n            ' x ',\n            height\n          )\n        )\n      )\n    );\n  }\n}\n\nexports.default = (0, _styles.withStyles)(styles)(FileInfoTable);\n\n//# sourceURL=webpack:///./src/components/core/Tables/FileInfoTable/FileInfoTable.js?");

/***/ }),

/***/ "./src/utils/file-processing/file-processing.js":
/*!******************************************************!*\
  !*** ./src/utils/file-processing/file-processing.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nfunction dataURItoBlob(dataURI) {\n    var byteString;\n    if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);else byteString = unescape(dataURI.split(',')[1]);\n\n    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];\n\n    var ia = new Uint8Array(byteString.length);\n    for (var i = 0; i < byteString.length; i++) {\n        ia[i] = byteString.charCodeAt(i);\n    }\n\n    return new Blob([ia], { type: mimeString });\n}\n\nexports.dataURItoBlob = dataURItoBlob;\n\n//# sourceURL=webpack:///./src/utils/file-processing/file-processing.js?");

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