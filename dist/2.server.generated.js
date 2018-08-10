exports.ids = [2];
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

/***/ "./src/components/UI/errors/ServerError/ServerError.js":
/*!*************************************************************!*\
  !*** ./src/components/UI/errors/ServerError/ServerError.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst serverError = props => {\n   return _react2.default.createElement(\n      _react2.default.Fragment,\n      null,\n      !!props.error && _react2.default.createElement(\n         _Typography2.default,\n         { component: 'p',\n            color: 'error' },\n         _react2.default.createElement(\n            _Icon2.default,\n            { color: 'error',\n               className: props.classes.error },\n            'error'\n         ),\n         props.error\n      )\n   );\n};\n\nexports.default = serverError;\n\n//# sourceURL=webpack:///./src/components/UI/errors/ServerError/ServerError.js?");

/***/ }),

/***/ "./src/pages/Signin.js":
/*!*****************************!*\
  !*** ./src/pages/Signin.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _user = __webpack_require__(/*! ../store/states/user/user.operations */ \"./src/store/states/user/user.operations.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _user3 = __webpack_require__(/*! ../store/states/user */ \"./src/store/states/user/index.js\");\n\nvar _SigninForm = __webpack_require__(/*! ./signin/SigninForm */ \"./src/pages/signin/SigninForm.js\");\n\nvar _SigninForm2 = _interopRequireDefault(_SigninForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Signin extends _react.Component {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.clickSubmit = formValue => {\n      this.props.login(formValue);\n    }, _temp;\n  }\n\n  render() {\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(_SigninForm2.default, { title: 'Sign in', initialData: { email: this.props.email || '' },\n        onSubmitForm: this.clickSubmit, serverError: this.props.error,\n        processing: this.props.processing })\n    );\n  }\n}\n//redux\n\n\nconst boundActionCreators = dispatch => (0, _redux.bindActionCreators)(_user2.default, dispatch);\nconst mappedStateToProps = state => ({\n  processing: (0, _user3.selectIsProcessing)(state.user),\n  email: (0, _user3.selectUserEmail)(state.user),\n  error: (0, _user3.selectErrorText)(state.user)\n});\n\nexports.default = (0, _reactRedux.connect)(mappedStateToProps, boundActionCreators)(Signin);\n\n//# sourceURL=webpack:///./src/pages/Signin.js?");

/***/ }),

/***/ "./src/pages/signin/SigninForm.js":
/*!****************************************!*\
  !*** ./src/pages/signin/SigninForm.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n\nvar _CardContent2 = _interopRequireDefault(_CardContent);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n\nvar _CardActions2 = _interopRequireDefault(_CardActions);\n\nvar _Icon = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _TextInput = __webpack_require__(/*! ./../../components/UI/controls/TextInput/TextInput */ \"./src/components/UI/controls/TextInput/TextInput.js\");\n\nvar _TextInput2 = _interopRequireDefault(_TextInput);\n\nvar _PasswordInput = __webpack_require__(/*! ./../../components/UI/controls/PasswordInput/PasswordInput */ \"./src/components/UI/controls/PasswordInput/PasswordInput.js\");\n\nvar _PasswordInput2 = _interopRequireDefault(_PasswordInput);\n\nvar _ServerError = __webpack_require__(/*! ./../../components/UI/errors/ServerError/ServerError */ \"./src/components/UI/errors/ServerError/ServerError.js\");\n\nvar _ServerError2 = _interopRequireDefault(_ServerError);\n\nvar _SubmitButton = __webpack_require__(/*! ./../../components/UI/buttons/SubmitButton/SubmitButton */ \"./src/components/UI/buttons/SubmitButton/SubmitButton.js\");\n\nvar _SubmitButton2 = _interopRequireDefault(_SubmitButton);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 350,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing.unit * 5,\n    paddingLeft: '2rem',\n    paddingRight: '2rem'\n  },\n  error: {\n    verticalAlign: 'middle',\n    marginRight: '.5rem'\n  },\n  title: {\n    marginTop: theme.spacing.unit * 2,\n    color: theme.palette.openTitle,\n    fontWeight: '300',\n    fontSize: '1.3rem'\n  },\n  textField: {\n    margin: `0 .8rem 0 .8rem`,\n    fontSize: '.8rem',\n    width: '100%'\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing.unit * 2\n  },\n  formControl: {\n    margin: `${theme.spacing.unit * 1.5}px 0 0 0`,\n    width: '100%',\n    textAlign: 'left'\n  }\n});\n\nclass SigninForm extends _react.Component {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.handleSubmit = values => {\n      this.props.onSubmitForm(values);\n    }, _temp;\n  }\n\n  componentWillMount() {\n    let initData = this.props.initialData;\n  }\n\n  render() {\n    const { classes } = this.props;\n    return _react2.default.createElement(\n      'form',\n      { onSubmit: this.props.handleSubmit(this.handleSubmit) },\n      _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(\n          _CardContent2.default,\n          null,\n          _react2.default.createElement(_ServerError2.default, { error: this.props.serverError, classes: { error: classes.error } }),\n          _react2.default.createElement(\n            _Typography2.default,\n            { type: 'headline', component: 'h2',\n              className: classes.title },\n            this.props.title\n          ),\n          _react2.default.createElement(_reduxForm.Field, { type: 'email', label: 'Email *', helperText: 'Come up with a title', name: 'email', component: _TextInput2.default }),\n          _react2.default.createElement(_reduxForm.Field, { label: 'Password *', name: 'password', component: _PasswordInput2.default })\n        ),\n        _react2.default.createElement(\n          _CardActions2.default,\n          null,\n          _react2.default.createElement(_SubmitButton2.default, { processing: this.props.processing,\n            classes: { submit: classes.submit }\n          })\n        )\n      )\n    );\n  }\n}\n\nexports.default = (0, _reduxForm.reduxForm)({\n  form: 'signinForm'\n})((0, _styles.withStyles)(styles)(SigninForm));\n\n//# sourceURL=webpack:///./src/pages/signin/SigninForm.js?");

/***/ })

};;