exports.ids = [1];
exports.modules = {

/***/ "./src/components/UI/buttons/SubmitButton/SubmitButton.js":
/*!****************************************************************!*\
  !*** ./src/components/UI/buttons/SubmitButton/SubmitButton.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n\tisProcessing: {\n\t\topacity: '.7',\n\t\tcursor: 'not-allowed'\n\t}\n});\n\nconst submitButton = props => {\n\tconst { classes, formName } = props;\n\n\tlet btnClasses = [];\n\tif (props.processing) {\n\t\tbtnClasses.push(classes.isProcessing);\n\t}\n\treturn _react2.default.createElement(\n\t\t_Button2.default,\n\t\t{ color: 'primary', variant: 'contained',\n\t\t\ttype: 'submit'\n\t\t},\n\t\t'Submit'\n\t);\n};\n\nexports.default = (0, _styles.withStyles)(styles)(submitButton);\n\n//# sourceURL=webpack:///./src/components/UI/buttons/SubmitButton/SubmitButton.js?");

/***/ }),

/***/ "./src/components/UI/controls/PasswordInput/PasswordInput.js":
/*!*******************************************************************!*\
  !*** ./src/components/UI/controls/PasswordInput/PasswordInput.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Input = __webpack_require__(/*! @material-ui/core/Input */ \"@material-ui/core/Input\");\n\nvar _Input2 = _interopRequireDefault(_Input);\n\nvar _InputLabel = __webpack_require__(/*! @material-ui/core/InputLabel */ \"@material-ui/core/InputLabel\");\n\nvar _InputLabel2 = _interopRequireDefault(_InputLabel);\n\nvar _FormControl = __webpack_require__(/*! @material-ui/core/FormControl */ \"@material-ui/core/FormControl\");\n\nvar _FormControl2 = _interopRequireDefault(_FormControl);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _InputAdornment = __webpack_require__(/*! @material-ui/core/InputAdornment */ \"@material-ui/core/InputAdornment\");\n\nvar _InputAdornment2 = _interopRequireDefault(_InputAdornment);\n\nvar _Visibility = __webpack_require__(/*! @material-ui/icons/Visibility */ \"@material-ui/icons/Visibility\");\n\nvar _Visibility2 = _interopRequireDefault(_Visibility);\n\nvar _VisibilityOff = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ \"@material-ui/icons/VisibilityOff\");\n\nvar _VisibilityOff2 = _interopRequireDefault(_VisibilityOff);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n  formControl: {\n    width: '100%'\n  }\n});\n\nclass PasswordInput extends _react.Component {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      showPassword: false\n    }, this.handleMouseDownPassword = event => {\n      event.preventDefault();\n    }, this.handleClickShowPassword = () => {\n      this.setState(state => ({ showPassword: !state.showPassword }));\n    }, _temp;\n  }\n\n  render() {\n    const { classes, input: { value, onChange }, label } = this.props;\n    return _react2.default.createElement(\n      _FormControl2.default,\n      { className: classes.formControl },\n      _react2.default.createElement(\n        _InputLabel2.default,\n        { htmlFor: 'adornment-password' },\n        label\n      ),\n      _react2.default.createElement(_Input2.default, {\n        id: 'adornment-password',\n        type: this.state.showPassword ? 'text' : 'password',\n        onChange: onChange,\n        value: value,\n        endAdornment: _react2.default.createElement(\n          _InputAdornment2.default,\n          { position: 'end' },\n          _react2.default.createElement(\n            _IconButton2.default,\n            {\n              'aria-label': 'Toggle password visibility',\n              onClick: this.handleClickShowPassword,\n              onMouseDown: this.handleMouseDownPassword\n            },\n            this.state.showPassword ? _react2.default.createElement(_VisibilityOff2.default, null) : _react2.default.createElement(_Visibility2.default, null)\n          )\n        )\n      })\n    );\n  }\n}\n\nexports.default = (0, _styles.withStyles)(styles)(PasswordInput);\n\n//# sourceURL=webpack:///./src/components/UI/controls/PasswordInput/PasswordInput.js?");

/***/ }),

/***/ "./src/components/UI/controls/RadioInput/RadioInput.js":
/*!*************************************************************!*\
  !*** ./src/components/UI/controls/RadioInput/RadioInput.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Radio = __webpack_require__(/*! @material-ui/core/Radio */ \"@material-ui/core/Radio\");\n\nvar _Radio2 = _interopRequireDefault(_Radio);\n\nvar _RadioGroup = __webpack_require__(/*! @material-ui/core/RadioGroup */ \"@material-ui/core/RadioGroup\");\n\nvar _RadioGroup2 = _interopRequireDefault(_RadioGroup);\n\nvar _FormControlLabel = __webpack_require__(/*! @material-ui/core/FormControlLabel */ \"@material-ui/core/FormControlLabel\");\n\nvar _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);\n\nvar _FormControl = __webpack_require__(/*! @material-ui/core/FormControl */ \"@material-ui/core/FormControl\");\n\nvar _FormControl2 = _interopRequireDefault(_FormControl);\n\nvar _FormLabel = __webpack_require__(/*! @material-ui/core/FormLabel */ \"@material-ui/core/FormLabel\");\n\nvar _FormLabel2 = _interopRequireDefault(_FormLabel);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n  formControl: {\n    minWidth: '100%',\n    textAlign: 'left',\n    marginTop: '.5rem'\n  },\n  group: {\n    margin: 0,\n    display: 'flex',\n    flexDirection: 'row'\n  }\n});\n\nconst radioInput = props => {\n\n  const { classes, input: { value, onChange }, label, options, name } = props;\n  return _react2.default.createElement(\n    _FormControl2.default,\n    { component: 'fieldset', required: true, className: classes.formControl },\n    _react2.default.createElement(\n      _FormLabel2.default,\n      { component: 'legend' },\n      label\n    ),\n    _react2.default.createElement(\n      _RadioGroup2.default,\n      {\n        name: name,\n        className: classes.group,\n        value: value,\n        onChange: onChange\n      },\n      options.map((option, i) => {\n        return _react2.default.createElement(_FormControlLabel2.default, { key: i, value: option.value, control: _react2.default.createElement(_Radio2.default, { color: 'primary' }), label: option.label });\n      })\n    )\n  );\n};\n\nexports.default = (0, _styles.withStyles)(styles)(radioInput);\n\n//# sourceURL=webpack:///./src/components/UI/controls/RadioInput/RadioInput.js?");

/***/ }),

/***/ "./src/components/UI/controls/TextInput/TextInput.js":
/*!***********************************************************!*\
  !*** ./src/components/UI/controls/TextInput/TextInput.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _InputAdornment = __webpack_require__(/*! @material-ui/core/InputAdornment */ \"@material-ui/core/InputAdornment\");\n\nvar _InputAdornment2 = _interopRequireDefault(_InputAdornment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n  textInput: {\n    width: '100%'\n  }\n});\n\nclass TextInput extends _react.Component {\n\n  render() {\n    const { classes, adornment, label, input: { value, onChange }, type, helperText, multiline } = this.props;\n    return _react2.default.createElement(_TextField2.default, { label: label, type: type || 'text',\n      className: classes.textInput,\n      value: value,\n      multiline: multiline,\n      margin: helperText ? 'dense' : 'normal',\n      onChange: onChange,\n      helperText: helperText,\n      InputProps: {\n        startAdornment: adornment && _react2.default.createElement(\n          _InputAdornment2.default,\n          { position: 'start' },\n          adornment\n        )\n      }\n    });\n  }\n}\n\nTextInput.defaultProps = {\n  helperText: '',\n  multiline: false\n};\n\nexports.default = (0, _styles.withStyles)(styles)(TextInput);\n\n//# sourceURL=webpack:///./src/components/UI/controls/TextInput/TextInput.js?");

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

/***/ "./src/components/UI/errors/ServerError/ServerError.js":
/*!*************************************************************!*\
  !*** ./src/components/UI/errors/ServerError/ServerError.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst serverError = props => {\n   return _react2.default.createElement(\n      _react2.default.Fragment,\n      null,\n      !!props.error && _react2.default.createElement(\n         _Typography2.default,\n         { component: 'p',\n            color: 'error' },\n         _react2.default.createElement(\n            _Icon2.default,\n            { color: 'error',\n               className: props.classes.error },\n            'error'\n         ),\n         props.error\n      )\n   );\n};\n\nexports.default = serverError;\n\n//# sourceURL=webpack:///./src/components/UI/errors/ServerError/ServerError.js?");

/***/ }),

/***/ "./src/pages/Signup.js":
/*!*****************************!*\
  !*** ./src/pages/Signup.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _user = __webpack_require__(/*! ../store/states/user/user.operations */ \"./src/store/states/user/user.operations.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _user3 = __webpack_require__(/*! ../store/states/user */ \"./src/store/states/user/index.js\");\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Dialog = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _DialogTitle = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n\nvar _DialogTitle2 = _interopRequireDefault(_DialogTitle);\n\nvar _DialogContent = __webpack_require__(/*! @material-ui/core/DialogContent */ \"@material-ui/core/DialogContent\");\n\nvar _DialogContent2 = _interopRequireDefault(_DialogContent);\n\nvar _DialogActions = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n\nvar _DialogActions2 = _interopRequireDefault(_DialogActions);\n\nvar _DialogContentText = __webpack_require__(/*! @material-ui/core/DialogContentText */ \"@material-ui/core/DialogContentText\");\n\nvar _DialogContentText2 = _interopRequireDefault(_DialogContentText);\n\nvar _SignupForm = __webpack_require__(/*! ./signup/SignupForm */ \"./src/pages/signup/SignupForm.js\");\n\nvar _SignupForm2 = _interopRequireDefault(_SignupForm);\n\nvar _DialogWithType = __webpack_require__(/*! ../components/UI/dialogs/DialogWithType/DialogWithType */ \"./src/components/UI/dialogs/DialogWithType/DialogWithType.js\");\n\nvar _DialogWithType2 = _interopRequireDefault(_DialogWithType);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Signup extends _react.Component {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      submitted: false\n    }, this.clickSubmit = formValue => {\n      this.props.register(formValue);\n      this.setState({ submitted: true });\n    }, _temp;\n  }\n\n  render() {\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(_SignupForm2.default, { title: 'Sign up', onSubmitForm: this.clickSubmit, serverError: this.state.submitted && this.props.error }),\n      _react2.default.createElement(\n        _DialogWithType2.default,\n        { open: !!this.props.email && this.state.submitted,\n          title: 'Registration successful',\n          linkToPage: '/signin',\n          actionBtnText: 'Sign in',\n          type: 'success' },\n        'Thank you ',\n        _react2.default.createElement(\n          'strong',\n          null,\n          this.props.fullName\n        ),\n        '!',\n        _react2.default.createElement('br', null),\n        'A verification email was sent to ',\n        _react2.default.createElement(\n          'strong',\n          null,\n          this.props.email\n        )\n      )\n    );\n  }\n}\n//material ui\n\n//redux\n\n\nconst boundActionCreators = dispatch => (0, _redux.bindActionCreators)(_user2.default, dispatch);\nconst mappedStateToProps = state => ({\n  processing: (0, _user3.selectIsProcessing)(state.user),\n  fullName: (0, _user3.selectUserFullname)(state.user),\n  email: (0, _user3.selectUserEmail)(state.user),\n  error: (0, _user3.selectErrorText)(state.user)\n});\n\nexports.default = (0, _reactRedux.connect)(mappedStateToProps, boundActionCreators)(Signup);\n\n//# sourceURL=webpack:///./src/pages/Signup.js?");

/***/ }),

/***/ "./src/pages/signup/SignupForm.js":
/*!****************************************!*\
  !*** ./src/pages/signup/SignupForm.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n\nvar _CardContent2 = _interopRequireDefault(_CardContent);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n\nvar _CardActions2 = _interopRequireDefault(_CardActions);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Icon = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _TextInput = __webpack_require__(/*! ./../../components/UI/controls/TextInput/TextInput */ \"./src/components/UI/controls/TextInput/TextInput.js\");\n\nvar _TextInput2 = _interopRequireDefault(_TextInput);\n\nvar _RadioInput = __webpack_require__(/*! ./../../components/UI/controls/RadioInput/RadioInput */ \"./src/components/UI/controls/RadioInput/RadioInput.js\");\n\nvar _RadioInput2 = _interopRequireDefault(_RadioInput);\n\nvar _PasswordInput = __webpack_require__(/*! ./../../components/UI/controls/PasswordInput/PasswordInput */ \"./src/components/UI/controls/PasswordInput/PasswordInput.js\");\n\nvar _PasswordInput2 = _interopRequireDefault(_PasswordInput);\n\nvar _ServerError = __webpack_require__(/*! ./../../components/UI/errors/ServerError/ServerError */ \"./src/components/UI/errors/ServerError/ServerError.js\");\n\nvar _ServerError2 = _interopRequireDefault(_ServerError);\n\nvar _SubmitButton = __webpack_require__(/*! ./../../components/UI/buttons/SubmitButton/SubmitButton */ \"./src/components/UI/buttons/SubmitButton/SubmitButton.js\");\n\nvar _SubmitButton2 = _interopRequireDefault(_SubmitButton);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 350,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing.unit * 5,\n    paddingLeft: '2rem',\n    paddingRight: '2rem'\n  },\n  error: {\n    verticalAlign: 'middle',\n    marginRight: '.5rem'\n  },\n  title: {\n    marginTop: theme.spacing.unit * 2,\n    color: theme.palette.openTitle,\n    fontWeight: '300',\n    fontSize: '1.3rem'\n  },\n  textField: {\n    margin: `0 .8rem 0 .8rem`,\n    fontSize: '.8rem',\n    width: '100%'\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing.unit * 2\n  }\n\n});\n\nclass SignupForm extends _react.Component {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.handleSubmit = values => {\n      this.props.onSubmitForm(values);\n    }, _temp;\n  }\n\n  render() {\n    const { classes } = this.props;\n    return _react2.default.createElement(\n      'form',\n      { onSubmit: this.props.handleSubmit(this.handleSubmit) },\n      _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(\n          _CardContent2.default,\n          null,\n          _react2.default.createElement(_ServerError2.default, { error: this.props.serverError, classes: { error: classes.error } }),\n          _react2.default.createElement(\n            _Typography2.default,\n            { type: 'headline', component: 'h2',\n              className: classes.title },\n            this.props.title\n          ),\n          _react2.default.createElement(\n            _Grid2.default,\n            { container: true, spacing: 24 },\n            _react2.default.createElement(\n              _Grid2.default,\n              { item: true, xs: 6 },\n              _react2.default.createElement(_reduxForm.Field, { label: 'First name *', name: 'firstName', component: _TextInput2.default })\n            ),\n            _react2.default.createElement(\n              _Grid2.default,\n              { item: true, xs: 6 },\n              _react2.default.createElement(_reduxForm.Field, { label: 'Last name *', name: 'lastName', component: _TextInput2.default })\n            )\n          ),\n          _react2.default.createElement(_reduxForm.Field, { label: 'Gender', name: 'gender', component: _RadioInput2.default, options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }] }),\n          _react2.default.createElement(_reduxForm.Field, { type: 'email', label: 'Email *', name: 'email', component: _TextInput2.default }),\n          _react2.default.createElement(_reduxForm.Field, { label: 'Password *', name: 'password', component: _PasswordInput2.default })\n        ),\n        _react2.default.createElement(\n          _CardActions2.default,\n          null,\n          _react2.default.createElement(_SubmitButton2.default, { processing: this.props.processing,\n            classes: { submit: classes.submit }\n          })\n        )\n      )\n    );\n  }\n}\n\nexports.default = (0, _reduxForm.reduxForm)({\n  form: 'signupForm'\n})((0, _styles.withStyles)(styles)(SignupForm));\n\n//# sourceURL=webpack:///./src/pages/signup/SignupForm.js?");

/***/ })

};;