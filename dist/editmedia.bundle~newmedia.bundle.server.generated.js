exports.ids = ["editmedia.bundle~newmedia.bundle"];
exports.modules = {

/***/ "./src/components/UI/controls/AutocompleteInput/MultiChipSelect.js":
/*!*************************************************************************!*\
  !*** ./src/components/UI/controls/AutocompleteInput/MultiChipSelect.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Paper = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n\nvar _MenuItem2 = _interopRequireDefault(_MenuItem);\n\nvar _downshift = __webpack_require__(/*! downshift */ \"downshift\");\n\nvar _downshift2 = _interopRequireDefault(_downshift);\n\nvar _Chip = __webpack_require__(/*! @material-ui/core/Chip */ \"@material-ui/core/Chip\");\n\nvar _Chip2 = _interopRequireDefault(_Chip);\n\nvar _Cancel = __webpack_require__(/*! @material-ui/icons/Cancel */ \"@material-ui/icons/Cancel\");\n\nvar _Cancel2 = _interopRequireDefault(_Cancel);\n\nvar _keycode = __webpack_require__(/*! keycode */ \"keycode\");\n\nvar _keycode2 = _interopRequireDefault(_keycode);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nconst styles = theme => ({\n  root: {\n    flexGrow: 1,\n    height: 350\n  },\n  container: {\n    flexGrow: 1,\n    position: 'relative'\n  },\n  paper: {\n    position: 'absolute',\n    zIndex: 4,\n    marginTop: theme.spacing.unit,\n    left: 0,\n    right: 0\n  },\n  chip: {\n    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 3}px .2rem 0`\n  },\n  inputRoot: {\n    flexWrap: 'wrap',\n    fontSize: '.9rem',\n    padding: '.3rem 0 .4rem 0',\n    marginTop: '.4rem'\n  }\n});\nfunction renderInput(inputProps) {\n  const { InputProps, classes, ref } = inputProps,\n        other = _objectWithoutProperties(inputProps, [\"InputProps\", \"classes\", \"ref\"]);\n\n  return _react2.default.createElement(_TextField2.default, _extends({\n    multiline: true,\n    InputProps: _extends({\n      inputRef: ref,\n      classes: {\n        root: classes.inputRoot\n      }\n    }, InputProps)\n  }, other));\n}\nfunction getSuggestions(inputValue, suggestions) {\n  let count = 0;\n\n  return suggestions.filter(suggestion => {\n    const keep = (!inputValue || suggestion.title.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) && count < 5;\n\n    if (keep) {\n      count += 1;\n    }\n\n    return keep;\n  });\n}\n\nfunction renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {\n  const isHighlighted = highlightedIndex === index;\n  const isSelected = (selectedItem || '').indexOf(suggestion.title) > -1;\n  return _react2.default.createElement(\n    _MenuItem2.default,\n    _extends({}, itemProps, {\n      key: suggestion._id,\n      selected: isHighlighted,\n\n      style: {\n        fontWeight: isSelected ? 500 : 400\n      }\n    }),\n    suggestion.title\n  );\n}\n\nclass MultiChipSelect extends _react.Component {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      inputValue: '',\n      selectedItem: [],\n      initialized: false\n    }, this.handleKeyDown = event => {\n      const { inputValue, selectedItem } = this.state;\n      if (selectedItem.length && !inputValue.length && (0, _keycode2.default)(event) === 'backspace') {\n        this.setState({\n          selectedItem: selectedItem.slice(0, selectedItem.length - 1)\n        });\n      }\n    }, this.handleInputChange = event => {\n      this.setState({ inputValue: event.target.value });\n    }, this.handleChange = item => {\n      let { selectedItem } = this.state;\n\n      if (selectedItem.findIndex(itemIteration => itemIteration._id == item._id) === -1) {\n        selectedItem = [...selectedItem, item];\n        this.props.input.onChange(selectedItem.map(item => item._id));\n      }\n\n      this.setState({\n        inputValue: '',\n        selectedItem\n      });\n    }, this.handleDelete = item => () => {\n      this.setState(state => {\n        const selectedItem = [...state.selectedItem];\n        selectedItem.splice(selectedItem.indexOf(item), 1);\n        this.props.input.onChange(selectedItem.map(item => item._id));\n        return { selectedItem };\n      });\n    }, _temp;\n  }\n\n  render() {\n    const { classes, suggestions } = this.props;\n    const { inputValue, selectedItem } = this.state;\n    return _react2.default.createElement(\n      _downshift2.default,\n      { itemToString: item => item ? item.title : \"\", inputValue: inputValue, onChange: this.handleChange, selectedItem: selectedItem },\n      ({\n        getInputProps,\n        getItemProps,\n        isOpen,\n        inputValue: inputValue2,\n        selectedItem: selectedItem2,\n        highlightedIndex\n      }) => _react2.default.createElement(\n        \"div\",\n        { className: classes.container },\n        renderInput({\n          fullWidth: true,\n          classes,\n          InputProps: getInputProps({\n            startAdornment: selectedItem.map(item => _react2.default.createElement(_Chip2.default, {\n              key: item._id,\n              tabIndex: -1,\n              label: item.title,\n              className: classes.chip,\n              onDelete: this.handleDelete(item._id)\n            })),\n            onChange: this.handleInputChange,\n            onKeyDown: this.handleKeyDown,\n            placeholder: 'Add tags',\n            id: 'integration-downshift-multiple'\n          })\n        }),\n        isOpen ? _react2.default.createElement(\n          _Paper2.default,\n          { className: classes.paper, square: true },\n          getSuggestions(inputValue2, suggestions).map((suggestion, index) => renderSuggestion({\n            suggestion,\n            index,\n            itemProps: getItemProps({ item: suggestion }),\n            highlightedIndex,\n            selectedItem: selectedItem2\n          }))\n        ) : null\n      )\n    );\n  }\n}\n\nMultiChipSelect.getDerivedStateFromProps = (nextProps, prevState) => {\n  let { input: { value } } = nextProps;\n  if (value || value === '') {\n    value = value === '' ? [] : value;\n    if (typeof value[0] == 'string') {\n      //if its coming from form init\n      value = nextProps.suggestions.filter(suggestion => value.includes(suggestion._id));\n    }\n    return { selectedItem: value };\n  } else {\n    return null;\n  }\n};\n\nexports.default = (0, _styles.withStyles)(styles)(MultiChipSelect);\n\n//# sourceURL=webpack:///./src/components/UI/controls/AutocompleteInput/MultiChipSelect.js?");

/***/ }),

/***/ "./src/components/UI/controls/HiddenInput/HiddenInput.js":
/*!***************************************************************!*\
  !*** ./src/components/UI/controls/HiddenInput/HiddenInput.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass HiddenInput extends _react.Component {\n\n\trender() {\n\t\tconst { input: { value, onChange } } = this.props;\n\t\treturn _react2.default.createElement('input', {\n\t\t\tvalue: value,\n\t\t\tonChange: onChange,\n\t\t\thidden: true\n\t\t});\n\t}\n}\n\nexports.default = HiddenInput;\n\n//# sourceURL=webpack:///./src/components/UI/controls/HiddenInput/HiddenInput.js?");

/***/ }),

/***/ "./src/components/UI/controls/SelectInput/SelectInput.js":
/*!***************************************************************!*\
  !*** ./src/components/UI/controls/SelectInput/SelectInput.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n\nvar _MenuItem2 = _interopRequireDefault(_MenuItem);\n\nvar _FormControl = __webpack_require__(/*! @material-ui/core/FormControl */ \"@material-ui/core/FormControl\");\n\nvar _FormControl2 = _interopRequireDefault(_FormControl);\n\nvar _Select = __webpack_require__(/*! @material-ui/core/Select */ \"@material-ui/core/Select\");\n\nvar _Select2 = _interopRequireDefault(_Select);\n\nvar _InputLabel = __webpack_require__(/*! @material-ui/core/InputLabel */ \"@material-ui/core/InputLabel\");\n\nvar _InputLabel2 = _interopRequireDefault(_InputLabel);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n  formControl: {\n    minWidth: '100%',\n    textAlign: 'left',\n    marginTop: '.5rem'\n  }\n});\n\nclass SelectInput extends _react.Component {\n\n  render() {\n    let { classes, label, options, input: { value, onChange }, name } = this.props;\n    if (typeof value == 'object') {\n      value = value._id;\n    }\n    return _react2.default.createElement(\n      _FormControl2.default,\n      { className: classes.formControl },\n      _react2.default.createElement(\n        _InputLabel2.default,\n        { htmlFor: label },\n        'Category'\n      ),\n      _react2.default.createElement(\n        _Select2.default,\n        {\n          value: value,\n          onChange: onChange,\n          name: name\n        },\n        _react2.default.createElement(\n          _MenuItem2.default,\n          { value: '' },\n          _react2.default.createElement(\n            'em',\n            null,\n            'None'\n          )\n        ),\n        options.map(option => {\n          return _react2.default.createElement(\n            _MenuItem2.default,\n            { key: option._id, value: option._id },\n            option.title\n          );\n        })\n      )\n    );\n  }\n}\n\nexports.default = (0, _styles.withStyles)(styles)(SelectInput);\n\n//# sourceURL=webpack:///./src/components/UI/controls/SelectInput/SelectInput.js?");

/***/ }),

/***/ "./src/components/UI/controls/TextInput/TextInput.js":
/*!***********************************************************!*\
  !*** ./src/components/UI/controls/TextInput/TextInput.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n  textInput: {\n    width: '100%'\n  }\n});\n\nclass TextInput extends _react.Component {\n\n  render() {\n    const { classes, label, input: { value, onChange }, type, helperText, multiline } = this.props;\n    return _react2.default.createElement(_TextField2.default, { label: label, type: type || 'text',\n      className: classes.textInput,\n      value: value,\n      multiline: multiline,\n      margin: helperText ? 'dense' : 'normal',\n      onChange: onChange,\n      helperText: helperText\n    });\n  }\n}\n\nTextInput.defaultProps = {\n  helperText: '',\n  multiline: false\n};\n\nexports.default = (0, _styles.withStyles)(styles)(TextInput);\n\n//# sourceURL=webpack:///./src/components/UI/controls/TextInput/TextInput.js?");

/***/ }),

/***/ "./src/pages/newmedia/FileMetaForm.js":
/*!********************************************!*\
  !*** ./src/pages/newmedia/FileMetaForm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _MainInfoForm = __webpack_require__(/*! ./fileMetaForm/MainInfoForm */ \"./src/pages/newmedia/fileMetaForm/MainInfoForm.js\");\n\nvar _MainInfoForm2 = _interopRequireDefault(_MainInfoForm);\n\nvar _AdditionalInfoForm = __webpack_require__(/*! ./fileMetaForm/AdditionalInfoForm */ \"./src/pages/newmedia/fileMetaForm/AdditionalInfoForm.js\");\n\nvar _AdditionalInfoForm2 = _interopRequireDefault(_AdditionalInfoForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//material ui\nconst styles = theme => ({\n\tcard: {\n\t\tpadding: '1rem 2.5rem',\n\t\tmarginBottom: '.5rem',\n\t\toverflow: 'visible'\n\n\t},\n\tbuttonCreate: {\n\t\tcolor: '#fff',\n\t\tbackgroundColor: theme.palette.primary.success,\n\t\t'&:hover': {\n\t\t\tbackgroundColor: theme.palette.primary.successHover\n\t\t}\n\t},\n\trightIcon: {\n\t\tmarginLeft: '1rem'\n\t},\n\theader: {\n\t\tpadding: '.3rem 2.5rem',\n\t\tmarginBottom: '.5rem',\n\t\tdisplay: 'flex'\n\t},\n\theader2: {\n\t\tcolor: theme.palette.primary.grey,\n\t\tborderBottom: `1px dashed ${theme.palette.primary.lightGrey}`\n\t}\n});\n\nclass FileMetaForm extends _react.Component {\n\tconstructor(...args) {\n\t\tvar _temp;\n\n\t\treturn _temp = super(...args), this.handleSubmit = values => {\n\t\t\tthis.props.submitForm(values);\n\t\t}, _temp;\n\t}\n\n\trender() {\n\t\tconst { classes, submitBtnText, media } = this.props;\n\t\treturn _react2.default.createElement(\n\t\t\t'form',\n\t\t\t{ onSubmit: this.props.handleSubmit(this.handleSubmit) },\n\t\t\t_react2.default.createElement(\n\t\t\t\t_Card2.default,\n\t\t\t\t{ className: classes.card },\n\t\t\t\t_react2.default.createElement(_MainInfoForm2.default, { media: media })\n\t\t\t),\n\t\t\t_react2.default.createElement(\n\t\t\t\t_Card2.default,\n\t\t\t\t{ className: classes.card },\n\t\t\t\t_react2.default.createElement(_AdditionalInfoForm2.default, { media: media })\n\t\t\t),\n\t\t\t_react2.default.createElement(\n\t\t\t\t_Button2.default,\n\t\t\t\t{ fullWidth: true, className: classes.buttonCreate, type: 'submit' },\n\t\t\t\tsubmitBtnText\n\t\t\t)\n\t\t);\n\t}\n}\n\nexports.default = (0, _reduxForm.reduxForm)({\n\tform: 'mediaInfo'\n})((0, _styles.withStyles)(styles)(FileMetaForm));\n\n//# sourceURL=webpack:///./src/pages/newmedia/FileMetaForm.js?");

/***/ }),

/***/ "./src/pages/newmedia/fileMetaForm/AdditionalInfoForm.js":
/*!***************************************************************!*\
  !*** ./src/pages/newmedia/fileMetaForm/AdditionalInfoForm.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _category = __webpack_require__(/*! ../../../store/states/media/category/category.selectors */ \"./src/store/states/media/category/category.selectors.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _tag = __webpack_require__(/*! ../../../store/states/media/tag/tag.selectors */ \"./src/store/states/media/tag/tag.selectors.js\");\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _MultiChipSelect = __webpack_require__(/*! ../../../components/UI/controls/AutocompleteInput/MultiChipSelect */ \"./src/components/UI/controls/AutocompleteInput/MultiChipSelect.js\");\n\nvar _MultiChipSelect2 = _interopRequireDefault(_MultiChipSelect);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n\theader: {\n\t\tcolor: theme.palette.primary.grey,\n\t\tborderBottom: `1px dashed ${theme.palette.primary.lightGrey}`\n\t}\n});\nclass AdditionalInfoForm extends _react.Component {\n\n\trender() {\n\t\tconst { classes } = this.props;\n\t\treturn _react2.default.createElement(\n\t\t\t_react2.default.Fragment,\n\t\t\tnull,\n\t\t\t_react2.default.createElement(\n\t\t\t\t_Typography2.default,\n\t\t\t\t{ variant: 'body2', className: classes.header },\n\t\t\t\t'Additional information'\n\t\t\t),\n\t\t\t_react2.default.createElement(_reduxForm.Field, { label: 'Tags', name: 'tags', component: _MultiChipSelect2.default, suggestions: this.props.tags })\n\t\t);\n\t}\n}\n\nconst mappedStateToProps = state => ({\n\ttags: (0, _tag.selectAllTags)(state.media.tags)\n});\n\nexports.default = (0, _reactRedux.connect)(mappedStateToProps)((0, _styles.withStyles)(styles)(AdditionalInfoForm));\n\n//# sourceURL=webpack:///./src/pages/newmedia/fileMetaForm/AdditionalInfoForm.js?");

/***/ }),

/***/ "./src/pages/newmedia/fileMetaForm/MainInfoForm.js":
/*!*********************************************************!*\
  !*** ./src/pages/newmedia/fileMetaForm/MainInfoForm.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _category = __webpack_require__(/*! ../../../store/states/media/category/category.selectors */ \"./src/store/states/media/category/category.selectors.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _TextInput = __webpack_require__(/*! ../../../components/UI/controls/TextInput/TextInput */ \"./src/components/UI/controls/TextInput/TextInput.js\");\n\nvar _TextInput2 = _interopRequireDefault(_TextInput);\n\nvar _HiddenInput = __webpack_require__(/*! ../../../components/UI/controls/HiddenInput/HiddenInput */ \"./src/components/UI/controls/HiddenInput/HiddenInput.js\");\n\nvar _HiddenInput2 = _interopRequireDefault(_HiddenInput);\n\nvar _SelectInput = __webpack_require__(/*! ../../../components/UI/controls/SelectInput/SelectInput */ \"./src/components/UI/controls/SelectInput/SelectInput.js\");\n\nvar _SelectInput2 = _interopRequireDefault(_SelectInput);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n\theader: {\n\t\tcolor: theme.palette.primary.grey,\n\t\tborderBottom: `1px dashed ${theme.palette.primary.lightGrey}`\n\t}\n});\nclass MainInfoForm extends _react.Component {\n\n\trender() {\n\t\tconst { classes } = this.props;\n\t\treturn _react2.default.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\t_react2.default.createElement(\n\t\t\t\t_Typography2.default,\n\t\t\t\t{ variant: 'body2', className: classes.header },\n\t\t\t\t'Main information'\n\t\t\t),\n\t\t\t_react2.default.createElement(_reduxForm.Field, { label: 'Title*', helperText: 'Come up with a title', name: 'title', component: _TextInput2.default }),\n\t\t\t_react2.default.createElement(_reduxForm.Field, { label: 'Description*', helperText: 'Shortly describe the video', multiline: true, name: 'description', component: _TextInput2.default }),\n\t\t\t_react2.default.createElement(_reduxForm.Field, { label: 'Category*', name: 'category', component: _SelectInput2.default, options: this.props.categories }),\n\t\t\t_react2.default.createElement(_reduxForm.Field, { name: 'video_url', component: _HiddenInput2.default }),\n\t\t\t_react2.default.createElement(_reduxForm.Field, { name: 'duration', component: _HiddenInput2.default })\n\t\t);\n\t}\n}\n\nconst mappedStateToProps = state => ({\n\tcategories: (0, _category.selectAllCategories)(state.media.categories)\n});\n\nexports.default = (0, _reactRedux.connect)(mappedStateToProps)((0, _styles.withStyles)(styles)(MainInfoForm));\n\n//# sourceURL=webpack:///./src/pages/newmedia/fileMetaForm/MainInfoForm.js?");

/***/ }),

/***/ "./src/pages/newmedia/fileUploader/AdjustThumbnail.js":
/*!************************************************************!*\
  !*** ./src/pages/newmedia/fileUploader/AdjustThumbnail.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _FileUpload = __webpack_require__(/*! @material-ui/icons/FileUpload */ \"@material-ui/icons/FileUpload\");\n\nvar _FileUpload2 = _interopRequireDefault(_FileUpload);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Slider = __webpack_require__(/*! @material-ui/lab/Slider */ \"@material-ui/lab/Slider\");\n\nvar _Slider2 = _interopRequireDefault(_Slider);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n\tuploadIcon: {\n\t\tfontSize: '14rem',\n\t\tcolor: theme.palette.primary.light,\n\t\topacity: '.2'\n\n\t},\n\tcaption: {\n\t\tcolor: theme.palette.primary.grey\n\t}\n});\nclass AdjustThumbnail extends _react.Component {\n\tconstructor(...args) {\n\t\tvar _temp;\n\n\t\treturn _temp = super(...args), this.state = {\n\t\t\toffset_value: 0,\n\t\t\tthumb_url: ''\n\t\t}, this.componentWillMount = () => {\n\t\t\tlet { thumb_url } = this.props;\n\t\t\tif (thumb_url) {\n\t\t\t\tthis.setState({ thumb_url });\n\t\t\t}\n\t\t}, this.getVideoThumb = startOffset => {\n\t\t\tlet { secure_url } = this.props.video;\n\t\t\tlet urlNoExtension = secure_url.replace(/\\.(mp4|mpeg|avi|3gp)$/gm, '');\n\t\t\tlet photoExt = '.jpg';\n\t\t\tstartOffset = startOffset ? `so_${startOffset}` : '';\n\n\t\t\tlet thumbUrl = urlNoExtension.replace('/upload/', `/upload/${startOffset}`) + photoExt;\n\t\t\treturn thumbUrl;\n\t\t}, this.handleThumbChange = (event, value) => {\n\t\t\tlet thumb_url = this.getVideoThumb(value);\n\t\t\tthis.props.dispatch((0, _reduxForm.change)('mediaInfo', 'thumb_url', thumb_url));\n\t\t\tthis.setState({ thumb_url, offset_value: value });\n\t\t}, this.componentDidUpdate = (prevProps, prevState) => {\n\t\t\tif (prevProps.video != this.props.video) {\n\t\t\t\tlet thumb_url = this.props.thumb_url || this.getVideoThumb(this.state.offset_value);\n\t\t\t\tthis.props.dispatch((0, _reduxForm.change)('mediaInfo', 'thumb_url', thumb_url));\n\t\t\t\tthis.setState({ thumb_url });\n\t\t\t}\n\t\t}, _temp;\n\t}\n\n\trender() {\n\t\tconst { classes, video: { duration } } = this.props;\n\t\tconst { thumb_url } = this.state;\n\n\t\treturn _react2.default.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\tthumb_url ? _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'h5',\n\t\t\t\t\t{ className: classes.caption },\n\t\t\t\t\t'Customize thumbnail for your video'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement('img', { src: thumb_url, width: '100%', height: 'auto' }),\n\t\t\t\t_react2.default.createElement(_Slider2.default, { value: this.state.offset_value, min: 0, max: duration, step: 5, onChange: this.handleThumbChange })\n\t\t\t) : _react2.default.createElement(_FileUpload2.default, { className: classes.uploadIcon })\n\t\t);\n\t}\n}\n\nexports.default = (0, _reactRedux.connect)()((0, _styles.withStyles)(styles)(AdjustThumbnail));\n\n//# sourceURL=webpack:///./src/pages/newmedia/fileUploader/AdjustThumbnail.js?");

/***/ })

};;