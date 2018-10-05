module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.generated.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst url =  false ? undefined : `http://localhost:${process.env.PORT || 8080}`;\n\nexports.default = ({ markup, state, materialCss, mainCss }) => {\n\n  return `<!doctype html>\n      <html lang=\"en\">\n        <head>\n          <meta charset=\"utf-8\">\n          <title>Reactube</title>\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\">\n          <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n           \n        </head>\n        <body>\n               <div id=\"root\">${markup}</div>\n\n                       <style id=\"jss-server-side\">${materialCss}</style> \n                       <style>${mainCss}</style> \n                 \n\n               ${state}\n          <script async type=\"text/javascript\" src=\"${url}/bundle.js\"> \n       </script>\n        </body>\n      </html>`;\n};\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/app/allRoutes.js":
/*!*********************************!*\
  !*** ./server/app/allRoutes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.channelRoutes = exports.commentRoutes = exports.tagRoutes = exports.categoryRoutes = exports.mediaRoutes = exports.userRoutes = exports.authRoutes = undefined;\n\nvar _auth = __webpack_require__(/*! ./auth/auth.routes */ \"./server/app/auth/auth.routes.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _user = __webpack_require__(/*! ./user/user.routes */ \"./server/app/user/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _media = __webpack_require__(/*! ./media/media.routes */ \"./server/app/media/media.routes.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _category = __webpack_require__(/*! ./category/category.routes */ \"./server/app/category/category.routes.js\");\n\nvar _category2 = _interopRequireDefault(_category);\n\nvar _tag = __webpack_require__(/*! ./tag/tag.routes */ \"./server/app/tag/tag.routes.js\");\n\nvar _tag2 = _interopRequireDefault(_tag);\n\nvar _comment = __webpack_require__(/*! ./comment/comment.routes */ \"./server/app/comment/comment.routes.js\");\n\nvar _comment2 = _interopRequireDefault(_comment);\n\nvar _channel = __webpack_require__(/*! ./channel/channel.routes */ \"./server/app/channel/channel.routes.js\");\n\nvar _channel2 = _interopRequireDefault(_channel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.authRoutes = _auth2.default;\nexports.userRoutes = _user2.default;\nexports.mediaRoutes = _media2.default;\nexports.categoryRoutes = _category2.default;\nexports.tagRoutes = _tag2.default;\nexports.commentRoutes = _comment2.default;\nexports.channelRoutes = _channel2.default;\n\n//# sourceURL=webpack:///./server/app/allRoutes.js?");

/***/ }),

/***/ "./server/app/auth/auth.controller.js":
/*!********************************************!*\
  !*** ./server/app/auth/auth.controller.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ../user/user.model */ \"./server/app/user/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar _expressJwt2 = _interopRequireDefault(_expressJwt);\n\nvar _config = __webpack_require__(/*! ../../config/config */ \"./server/config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _responseHandler = __webpack_require__(/*! ../../helpers/responseHandler */ \"./server/helpers/responseHandler.js\");\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nconst requireSignin = (req, res, next) => {\n  _passport2.default.authenticate('jwt', { session: false }, (err, user, info) => {\n    req.user = user;\n    next();\n  })(req, res, next);\n};\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n  if (!authorized) {\n    return res.status(403).json({\n      error: \"User is not authorized\"\n    });\n  }\n  next();\n};\n\nconst signin = (() => {\n  var _ref = _asyncToGenerator(function* (req, res) {\n    try {\n      const user = yield _user2.default.findOne({ \"email\": req.body.email }).then((0, _responseHandler.throwIfNoResult)(function (result) {\n        return !result;\n      }, 400, 'not found', 'Email is not registered'));\n\n      const doesPasswordsMatch = user.authenticate(req.body.password);\n      (0, _responseHandler.throwIfNoResult)(function (result) {\n        return !result;\n      }, 400, 'incorrect', 'Password is incorrect.')(doesPasswordsMatch);\n\n      const token = _jsonwebtoken2.default.sign({\n        _id: user._id\n      }, _config2.default.jwtSecret);\n\n      res.cookie(\"jwt\", token, {\n        expire: 60 * 60 * 1000\n      });\n\n      (0, _responseHandler.sendSuccess)(res, 'User now logged in')({ user, token });\n    } catch (error) {\n      (0, _responseHandler.sendError)(res)(error);\n    }\n  });\n\n  return function signin(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n})();\n\nconst checkSessionAndGetUser = (req, res, next) => {\n  try {\n    let user = req.user;\n    if (req.user) {\n      const token = _jsonwebtoken2.default.sign({\n        _id: user._id\n      }, _config2.default.jwtSecret);\n\n      res.cookie(\"jwt\", token, {\n        expire: 60 * 60 * 1000\n      });\n      (0, _responseHandler.sendSuccess)(res, 'User session resumed')({ user, token });\n    } else {\n      (0, _responseHandler.sendError)(res)({ message: 'User session expired' });\n    }\n  } catch (err) {\n    (0, _responseHandler.sendError)(res)(error);\n  }\n};\n\nconst signout = (req, res) => {\n  res.clearCookie(\"t\");\n  (0, _responseHandler.sendSuccess)(res, 'Signed out')({ user });\n};\n\nexports.default = { signin, signout, checkSessionAndGetUser, requireSignin, hasAuthorization };\n\n//# sourceURL=webpack:///./server/app/auth/auth.controller.js?");

/***/ }),

/***/ "./server/app/auth/auth.routes.js":
/*!****************************************!*\
  !*** ./server/app/auth/auth.routes.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(/*! ./auth.controller */ \"./server/app/auth/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = _express2.default.Router();\n\nrouter.route('/auth/signin').post(_auth2.default.signin).get(_auth2.default.requireSignin, _auth2.default.checkSessionAndGetUser);\n\nrouter.route('/auth/signout').get(_auth2.default.signout);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/app/auth/auth.routes.js?");

/***/ }),

/***/ "./server/app/category/category.controller.js":
/*!****************************************************!*\
  !*** ./server/app/category/category.controller.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _category = __webpack_require__(/*! ./category.model */ \"./server/app/category/category.model.js\");\n\nvar _category2 = _interopRequireDefault(_category);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst ObjectId = _mongoose2.default.Types.ObjectId;\n\nconst listAll = (req, res, next) => {\n\t_category2.default.find({}).exec(function (err, categories) {\n\t\tif (err) {\n\t\t\tconsole.log(err);\n\t\t\tres.status(400).json({\n\t\t\t\tstatus: 400,\n\t\t\t\tdata: null,\n\t\t\t\tmessage: err\n\t\t\t});\n\t\t} else {\n\t\t\tres.status(200).json({\n\t\t\t\tstatus: 200,\n\t\t\t\tdata: categories\n\t\t\t});\n\t\t}\n\t});\n};\n\nconst create = (req, res, next) => {\n\tlet category = new _category2.default(req.body);\n\n\tcategory.save((err, category) => {\n\t\tif (err) {\n\t\t\tconsole.log(err);\n\t\t\tres.status(400).json({\n\t\t\t\tstatus: 400,\n\t\t\t\tdata: null,\n\t\t\t\tmessage: err\n\t\t\t});\n\t\t} else {\n\t\t\tres.status(200).json({\n\t\t\t\tstatus: 200,\n\t\t\t\tdata: category\n\t\t\t});\n\t\t}\n\t});\n};\n\nexports.default = {\n\tcreate, listAll\n};\n\n//# sourceURL=webpack:///./server/app/category/category.controller.js?");

/***/ }),

/***/ "./server/app/category/category.model.js":
/*!***********************************************!*\
  !*** ./server/app/category/category.model.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst CategorySchema = new _mongoose2.default.Schema({\n  title: {\n    type: String,\n    required: 'Title is required',\n    unique: 'Category already exists',\n    lowercase: true\n  },\n  createdAt: {\n    type: Date,\n    default: Date.now()\n  }\n});\n\nexports.default = _mongoose2.default.model('Category', CategorySchema);\n\n//# sourceURL=webpack:///./server/app/category/category.model.js?");

/***/ }),

/***/ "./server/app/category/category.routes.js":
/*!************************************************!*\
  !*** ./server/app/category/category.routes.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _category = __webpack_require__(/*! ./category.controller */ \"./server/app/category/category.controller.js\");\n\nvar _category2 = _interopRequireDefault(_category);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = _express2.default.Router();\n\nrouter.route('/media/category/new').post(_category2.default.create);\nrouter.route('/media/category/all').get(_category2.default.listAll);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/app/category/category.routes.js?");

/***/ }),

/***/ "./server/app/channel/channel-topic/channel-topic.controller.js":
/*!**********************************************************************!*\
  !*** ./server/app/channel/channel-topic/channel-topic.controller.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _channelTopic = __webpack_require__(/*! ./channel-topic.model */ \"./server/app/channel/channel-topic/channel-topic.model.js\");\n\nvar _channelTopic2 = _interopRequireDefault(_channelTopic);\n\nvar _responseHandler = __webpack_require__(/*! ../../../helpers/responseHandler */ \"./server/helpers/responseHandler.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nconst create = (() => {\n  var _ref = _asyncToGenerator(function* (req, res) {\n    try {\n      const channelTopic = new _channelTopic2.default(req.body);\n      let newChannelTopic = yield channelTopic.save();\n      (0, _responseHandler.sendSuccess)(res)({ newChannelTopic });\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function create(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n})();\n\nconst listAll = (() => {\n  var _ref2 = _asyncToGenerator(function* (req, res) {\n    try {\n      let channelTopics = yield _channelTopic2.default.find({});\n      (0, _responseHandler.sendSuccess)(res)({ channelTopics });\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function listAll(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n})();\n\nexports.default = {\n  create,\n  listAll\n};\n\n//# sourceURL=webpack:///./server/app/channel/channel-topic/channel-topic.controller.js?");

/***/ }),

/***/ "./server/app/channel/channel-topic/channel-topic.model.js":
/*!*****************************************************************!*\
  !*** ./server/app/channel/channel-topic/channel-topic.model.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst ObjectId = _mongoose2.default.Schema.ObjectId;\n\nconst ChannelTopicSchema = new _mongoose2.default.Schema({\n  title: {\n    type: String,\n    trim: true,\n    unique: 'Title already exists',\n    required: 'Title is required'\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\n\nexports.default = _mongoose2.default.model('ChannelTopic', ChannelTopicSchema);\n\n//# sourceURL=webpack:///./server/app/channel/channel-topic/channel-topic.model.js?");

/***/ }),

/***/ "./server/app/channel/channel-topic/channel-topic.routes.js":
/*!******************************************************************!*\
  !*** ./server/app/channel/channel-topic/channel-topic.routes.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _channelTopic = __webpack_require__(/*! ./channel-topic.controller */ \"./server/app/channel/channel-topic/channel-topic.controller.js\");\n\nvar _channelTopic2 = _interopRequireDefault(_channelTopic);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = _express2.default.Router();\n\nrouter.route('/topic/create').post(_channelTopic2.default.create);\n\nrouter.route('/topic/all').get(_channelTopic2.default.listAll);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/app/channel/channel-topic/channel-topic.routes.js?");

/***/ }),

/***/ "./server/app/channel/channel.controller.js":
/*!**************************************************!*\
  !*** ./server/app/channel/channel.controller.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _channel = __webpack_require__(/*! ./channel.model */ \"./server/app/channel/channel.model.js\");\n\nvar _channel2 = _interopRequireDefault(_channel);\n\nvar _responseHandler = __webpack_require__(/*! ../../helpers/responseHandler */ \"./server/helpers/responseHandler.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n//import Cloudinary from 'cloudinary';\n//import formidable from 'formidable';\n\n\nconst create = (() => {\n  var _ref = _asyncToGenerator(function* (req, res, next) {\n    try {\n      const channel = new _channel2.default(req.body);\n      let newChannel = yield channel.save();\n      (0, _responseHandler.sendSuccess)(res)({ newChannel });\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function create(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n})();\n\nconst isOwner = (req, res, next) => {\n  const user = req.user;\n  const channel = req.channel;\n  if (!user) {\n    (0, _responseHandler.sendError)(res, 401, 'You have to be signed in.')();\n  }\n  if (user._id === channel.owner._id) {\n    return next();\n  } else {\n    (0, _responseHandler.sendError)(res, 401, 'You are not the owner of this channel.')();\n  }\n};\n\nexports.default = {\n  create,\n  isOwner\n};\n\n//# sourceURL=webpack:///./server/app/channel/channel.controller.js?");

/***/ }),

/***/ "./server/app/channel/channel.model.js":
/*!*********************************************!*\
  !*** ./server/app/channel/channel.model.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst ObjectId = _mongoose2.default.Schema.ObjectId;\n\nconst ChannelSchema = new _mongoose2.default.Schema({\n  title: {\n    type: String,\n    trim: true,\n    unique: 'Title already exists',\n    required: 'Title is required'\n  },\n  description: {\n    type: String,\n    trim: true,\n    required: 'Description is required'\n  },\n  topic: {\n    type: String,\n    trim: true\n  },\n  iconImage: {\n    type: String\n  },\n  backgroundImage: {\n    type: String\n  },\n  subscribers: [{ type: ObjectId, ref: 'User' }],\n  medias: [{ type: ObjectId, ref: 'Media' }],\n  //TODO playlists\n  owner: {\n    type: ObjectId,\n    ref: 'User'\n  },\n  verified: {\n    type: Boolean,\n    default: false\n  },\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\n\nexports.default = _mongoose2.default.model('Channel', ChannelSchema);\n\n//# sourceURL=webpack:///./server/app/channel/channel.model.js?");

/***/ }),

/***/ "./server/app/channel/channel.routes.js":
/*!**********************************************!*\
  !*** ./server/app/channel/channel.routes.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _channel = __webpack_require__(/*! ./channel.controller */ \"./server/app/channel/channel.controller.js\");\n\nvar _channel2 = _interopRequireDefault(_channel);\n\nvar _auth = __webpack_require__(/*! ../auth/auth.controller */ \"./server/app/auth/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _channelTopic = __webpack_require__(/*! ./channel-topic/channel-topic.routes */ \"./server/app/channel/channel-topic/channel-topic.routes.js\");\n\nvar _channelTopic2 = _interopRequireDefault(_channelTopic);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = _express2.default.Router();\n\nrouter.route('/channels/create').post(_auth2.default.requireSignin, _channel2.default.create);\n\nrouter.use('/channels', _channelTopic2.default);\n\n// router.route('/users/profile/update')\n//   .put(authCtrl.requireSignin,userCtrl.update)\n\n// router.route('/users/profile/watchlater')\n//   .put(authCtrl.requireSignin,userCtrl.addWatchlater)\n\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/app/channel/channel.routes.js?");

/***/ }),

/***/ "./server/app/comment/comment.controller.js":
/*!**************************************************!*\
  !*** ./server/app/comment/comment.controller.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _comment = __webpack_require__(/*! ../comment/comment.model */ \"./server/app/comment/comment.model.js\");\n\nvar _comment2 = _interopRequireDefault(_comment);\n\nvar _media = __webpack_require__(/*! ../media/media.model */ \"./server/app/media/media.model.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _responseHandler = __webpack_require__(/*! ../../helpers/responseHandler */ \"./server/helpers/responseHandler.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nconst ObjectId = _mongoose2.default.Types.ObjectId;\n\nconst postComment = (() => {\n\tvar _ref = _asyncToGenerator(function* (req, res, next) {\n\t\ttry {\n\t\t\tfor (let key in req.body) {\n\t\t\t\tif (!req.body[key]) {\n\t\t\t\t\tdelete req.body[key];\n\t\t\t\t}\n\t\t\t}\n\t\t\tlet comment = new _comment2.default(req.body);\n\t\t\tcomment.author = req.user._id;\n\t\t\tif (req.body.parent) {\n\t\t\t\tyield _comment2.default.update({ _id: req.body.parent }, { $inc: { repliesCount: 1 } });\n\t\t\t};\n\t\t\tlet newComment = yield comment.save();\n\t\t\tlet populatedComment = yield _comment2.default.populate(newComment, { path: 'author', select: '_id firstName lastName' });\n\n\t\t\t(0, _responseHandler.sendSuccess)(res, 'Posted comment')({ comment: populatedComment });\n\t\t} catch (err) {\n\t\t\t(0, _responseHandler.sendError)(res)(err);\n\t\t}\n\t});\n\n\treturn function postComment(_x, _x2, _x3) {\n\t\treturn _ref.apply(this, arguments);\n\t};\n})();\n\nconst getCommentsForMedia = (() => {\n\tvar _ref2 = _asyncToGenerator(function* (req, res, next) {\n\t\ttry {\n\t\t\tlet comments = yield _comment2.default.find({ media: req.params.mediaId, parent: { $exists: false } }).populate('author', '_id firstName lastName');\n\t\t\t(0, _responseHandler.sendSuccess)(res, 'comments for media')({ comments });\n\t\t} catch (err) {\n\t\t\t(0, _responseHandler.sendError)(res)(err);\n\t\t}\n\t});\n\n\treturn function getCommentsForMedia(_x4, _x5, _x6) {\n\t\treturn _ref2.apply(this, arguments);\n\t};\n})();\n\nconst getRepliesByComment = (() => {\n\tvar _ref3 = _asyncToGenerator(function* (req, res, next) {\n\t\ttry {\n\t\t\tlet commentId = req.params.commentId;\n\t\t\tlet replies = yield _comment2.default.find({ parent: commentId }).populate('author', '_id firstName lastName');\n\t\t\t(0, _responseHandler.sendSuccess)(res, 'replies for comment')({ replies });\n\t\t} catch (err) {\n\t\t\t(0, _responseHandler.sendError)(res)(err);\n\t\t}\n\t});\n\n\treturn function getRepliesByComment(_x7, _x8, _x9) {\n\t\treturn _ref3.apply(this, arguments);\n\t};\n})();\n\n// module.exports.getById = function(req, res, next) {\n// \tvar id = req.params.commentId;\n//    if (!ObjectId.isValid(id)) {\n//     res.status(404).send({ message: 'Not found.'});\n//   }\n\n// Comment.findById(id)\n// .populate(recordHelper.population('user'))\n// .populate(recordHelper.population('replies'))\n// .exec(function(err,comment){\n//   if(err){\n//     next(err);\n//   }else if(comment){\n//   \tconsole.log(comment);\n//    req.comment = comment;\n\n//   next();\n//   }else{\n//     next(new Error('Failed to find comment'));\n//   }\n\n// })\n// };\n\n// module.exports.deleteComment = function(req,res,next){\n// \tComment.remove({_id:req.comment._id},function(err,deleted){\n// \t\tif(err){\n// \t\t\tthrow err;\n// \t\t}else{\n// \t\t\tres.status(200).json(deleted);\n// \t\t}\n// \t});\n// }\n\n\nconst likeComment = (() => {\n\tvar _ref4 = _asyncToGenerator(function* (req, res, next) {\n\t\tlet commentId = req.body.commentId;\n\t\tlet userId = req.user._id.toString();\n\t\tconsole.log(commentId, userId);\n\t\ttry {\n\t\t\tlet comment = yield _comment2.default.findById(commentId);\n\t\t\tlet isLiked = comment.likes.indexOf(userId);\n\t\t\tlet isDisliked = comment.dislikes.indexOf(userId);\n\t\t\tif (isLiked >= 0) {\n\t\t\t\tcomment.likes.splice(isLiked, 1);\n\t\t\t} else {\n\t\t\t\tcomment.likes = [...comment.likes, userId];\n\t\t\t\tif (isDisliked >= 0) comment.dislikes.splice(isDisliked, 1);\n\t\t\t}\n\t\t\tlet updatedComment = yield comment.save();\n\t\t\tupdatedComment = yield _comment2.default.populate(updatedComment, { path: 'author', select: '_id firstName lastName' });\n\t\t\t(0, _responseHandler.sendSuccess)(res, 'comment liked')({ comment: updatedComment });\n\t\t} catch (err) {\n\t\t\t(0, _responseHandler.sendError)(res)(err);\n\t\t}\n\t});\n\n\treturn function likeComment(_x10, _x11, _x12) {\n\t\treturn _ref4.apply(this, arguments);\n\t};\n})();\n\nconst dislikeComment = (() => {\n\tvar _ref5 = _asyncToGenerator(function* (req, res, next) {\n\t\tlet commentId = req.body.commentId;\n\t\tlet userId = req.user._id.toString();\n\t\ttry {\n\t\t\tlet comment = yield _comment2.default.findById(commentId);\n\t\t\tlet isLiked = comment.likes.indexOf(userId);\n\t\t\tlet isDisliked = comment.dislikes.indexOf(userId);\n\t\t\tif (isDisliked >= 0) {\n\t\t\t\tcomment.dislikes.splice(isDisliked, 1);\n\t\t\t} else {\n\t\t\t\tcomment.dislikes = [...comment.dislikes, userId];\n\t\t\t\tif (isLiked >= 0) comment.likes.splice(isLiked, 1);\n\t\t\t}\n\t\t\tlet updatedComment = yield comment.save();\n\t\t\tupdatedComment = yield _comment2.default.populate(updatedComment, { path: 'author', select: '_id firstName lastName' });\n\t\t\t(0, _responseHandler.sendSuccess)(res, 'comment liked')({ comment: updatedComment });\n\t\t} catch (err) {\n\t\t\t(0, _responseHandler.sendError)(res)(err);\n\t\t}\n\t});\n\n\treturn function dislikeComment(_x13, _x14, _x15) {\n\t\treturn _ref5.apply(this, arguments);\n\t};\n})();\n\nexports.default = {\n\tpostComment,\n\tgetCommentsForMedia,\n\tgetRepliesByComment,\n\tlikeComment, dislikeComment\n};\n\n//# sourceURL=webpack:///./server/app/comment/comment.controller.js?");

/***/ }),

/***/ "./server/app/comment/comment.model.js":
/*!*********************************************!*\
  !*** ./server/app/comment/comment.model.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst objectId = _mongoose2.default.Schema.ObjectId;\n\nconst CommentSchema = new _mongoose2.default.Schema({\n  content: {\n    type: String,\n    required: 'Content is required'\n  },\n  author: {\n    type: objectId,\n    ref: 'User'\n  },\n  media: {\n    type: objectId,\n    ref: 'Media'\n  },\n  parent: {\n    type: objectId,\n    ref: 'Comment'\n  },\n  to: {\n    type: objectId,\n    ref: 'User'\n  },\n  likes: [{ type: objectId, ref: 'User' }],\n  dislikes: [{ type: objectId, ref: 'User' }],\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  repliesCount: {\n    type: Number,\n    default: 0\n  },\n  children: {\n    type: Array,\n    default: []\n  }\n\n});\n\nexports.default = _mongoose2.default.model('Comment', CommentSchema);\n\n//# sourceURL=webpack:///./server/app/comment/comment.model.js?");

/***/ }),

/***/ "./server/app/comment/comment.routes.js":
/*!**********************************************!*\
  !*** ./server/app/comment/comment.routes.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n        value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ../user/user.controller */ \"./server/app/user/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../auth/auth.controller */ \"./server/app/auth/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _comment = __webpack_require__(/*! ./comment.controller */ \"./server/app/comment/comment.controller.js\");\n\nvar _comment2 = _interopRequireDefault(_comment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = _express2.default.Router();\n\nrouter.route('/comment/new').post(_auth2.default.requireSignin, _comment2.default.postComment);\n\nrouter.route('/comment/like').post(_auth2.default.requireSignin, _comment2.default.likeComment);\n\nrouter.route('/comment/dislike').post(_auth2.default.requireSignin, _comment2.default.dislikeComment);\n\nrouter.route('/comment/replies/:commentId').get(_comment2.default.getRepliesByComment);\n\nrouter.route('/comments/:mediaId').get(_comment2.default.getCommentsForMedia);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/app/comment/comment.routes.js?");

/***/ }),

/***/ "./server/app/keyword/keyword.controller.js":
/*!**************************************************!*\
  !*** ./server/app/keyword/keyword.controller.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _keyword = __webpack_require__(/*! ./keyword.model */ \"./server/app/keyword/keyword.model.js\");\n\nvar _keyword2 = _interopRequireDefault(_keyword);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nconst create = (() => {\n  var _ref = _asyncToGenerator(function* (user, keyword) {\n    let data = keyword;\n    if (user) {\n      data.postedBy = user._id;\n    }\n    try {\n      const exists = yield _keyword2.default.findOne({ text: data.text });\n      if (!exists) {\n        const keyword = new _keyword2.default(data);\n        const newKeyword = yield keyword.save();\n      }\n    } catch (err) {\n      console.log(err);\n    }\n  });\n\n  return function create(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n})();\n\nexports.default = {\n  create\n};\n\n//# sourceURL=webpack:///./server/app/keyword/keyword.controller.js?");

/***/ }),

/***/ "./server/app/keyword/keyword.model.js":
/*!*********************************************!*\
  !*** ./server/app/keyword/keyword.model.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst objectId = _mongoose2.default.Schema.ObjectId;\n\nconst KeywordSchema = new _mongoose2.default.Schema({\n  text: {\n    type: String,\n    required: 'Keyword text is required',\n    unique: 'Keyword text has to be unique'\n  },\n  postedBy: { type: objectId, ref: 'User' },\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\n\nexports.default = _mongoose2.default.model('Keyword', KeywordSchema);\n\n//# sourceURL=webpack:///./server/app/keyword/keyword.model.js?");

/***/ }),

/***/ "./server/app/media/media.controller.js":
/*!**********************************************!*\
  !*** ./server/app/media/media.controller.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _media = __webpack_require__(/*! ./media.model */ \"./server/app/media/media.model.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _keyword = __webpack_require__(/*! ../keyword/keyword.model */ \"./server/app/keyword/keyword.model.js\");\n\nvar _keyword2 = _interopRequireDefault(_keyword);\n\nvar _keyword3 = __webpack_require__(/*! ../keyword/keyword.controller */ \"./server/app/keyword/keyword.controller.js\");\n\nvar _keyword4 = _interopRequireDefault(_keyword3);\n\nvar _extend = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n\nvar _extend2 = _interopRequireDefault(_extend);\n\nvar _responseHandler = __webpack_require__(/*! ../../helpers/responseHandler */ \"./server/helpers/responseHandler.js\");\n\nvar _config = __webpack_require__(/*! ../../config/config */ \"./server/config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _cloudinary = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n\nvar _cloudinary2 = _interopRequireDefault(_cloudinary);\n\nvar _formidable = __webpack_require__(/*! formidable */ \"formidable\");\n\nvar _formidable2 = _interopRequireDefault(_formidable);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n//lists \n\nconst list = (() => {\n  var _ref = _asyncToGenerator(function* (req, res) {\n    try {\n      let medias = yield _media2.default.find({});\n      (0, _responseHandler.sendSuccess)(res, 'Media list')({ medias: medias });\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function list(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n})();\n\nconst listPopular = (() => {\n  var _ref2 = _asyncToGenerator(function* (req, res) {\n    try {\n      let medias = yield _media2.default.find({}).sort('-views').limit(25).populate('category', '_id title').populate('postedBy', '_id firstName lastName');\n\n      (0, _responseHandler.sendSuccess)(res, 'Popular media list')({ medias });\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function listPopular(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n})();\n\nconst listRelated = (() => {\n  var _ref3 = _asyncToGenerator(function* (req, res) {\n    try {\n      let medias = yield _media2.default.aggregate([{ $match: { _id: { $ne: req.media._id },\n          category: req.media.category }\n      }, { $sample: { size: 6 } }, { $lookup: {\n          from: \"users\",\n          localField: \"postedBy\",\n          foreignField: \"_id\",\n          as: \"postedBy\"\n        } }, { $unwind: \"$postedBy\" }, { $lookup: {\n          from: \"categories\",\n          localField: \"category\",\n          foreignField: \"_id\",\n          as: \"category\"\n        } }, { $unwind: \"$category\" }, { $project: {\n          \"postedBy.hashed_password\": 0,\n          \"postedBy.salt\": 0,\n          \"postedBy.created\": 0,\n          \"postedBy.verified\": 0,\n          \"postedBy.email\": 0\n        } }]);\n      (0, _responseHandler.sendSuccess)(res, 'Related medias')({ medias });\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function listRelated(_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n})();\n\nconst listByUser = (() => {\n  var _ref4 = _asyncToGenerator(function* (req, res) {\n    let user = req.user;\n    let userId = req.params.userId || user._id;\n    try {\n      let medias = yield _media2.default.find({ postedBy: userId }).populate('postedBy', '_id firstName lastName').sort('-created');\n      (0, _responseHandler.sendSuccess)(res, `Media by user ${user.firstName} ${user.lastName}`)({ medias });\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function listByUser(_x7, _x8) {\n    return _ref4.apply(this, arguments);\n  };\n})();\n\nconst getOwnMediaList = (() => {\n  var _ref5 = _asyncToGenerator(function* (req, res) {\n    let user = req.user;\n    let { pageNumber = 0, pageSize = 5, searchField = 'history' } = req.query;\n    let start = Number(pageNumber * pageSize);\n    let end = start + Number(pageSize);\n    let searchArrSlice = user[searchField] ? user[searchField].slice(start, end) : [];\n    let ids = searchArrSlice.map(function (el) {\n      return _mongoose2.default.Types.ObjectId(el.id);\n    });\n    let total = user[searchField].length;\n    let query = [{ $match: { _id: { $in: ids } } }, { $addFields: { \"__order\": { $indexOfArray: [ids, \"$_id\"] } } }, { $sort: { \"__order\": 1 } }, { $lookup: {\n        from: \"users\",\n        localField: \"postedBy\",\n        foreignField: \"_id\",\n        as: \"postedBy\"\n      } }, { $unwind: \"$postedBy\" }, { $lookup: {\n        from: \"categories\",\n        localField: \"category\",\n        foreignField: \"_id\",\n        as: \"category\"\n      } }, { $unwind: \"$category\" }];\n    try {\n      let medias = yield _media2.default.aggregate(query);\n      (0, _responseHandler.sendSuccess)(res, `Medias of user ${user.firstName} ${user.lastName}`)({ medias, total });\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function getOwnMediaList(_x9, _x10) {\n    return _ref5.apply(this, arguments);\n  };\n})();\nconst getOwnMediaBySearch = (() => {\n  var _ref6 = _asyncToGenerator(function* (req, res) {\n    let user = req.user;\n    let { input, page = 0, pageSize = 5, searchField = 'history' } = req.query;\n    pageSize = +pageSize;\n    let skip = +(page * pageSize);\n    let searchArrSlice = user[searchField] ? user[searchField] : [];\n    let ids = searchArrSlice.map(function (el) {\n      return _mongoose2.default.Types.ObjectId(el.id);\n    });\n\n    let query = [{ $match: { _id: { $in: ids },\n        $or: [{ title: { $regex: input, $options: 'i' } }, { description: { $regex: input, $options: 'i' } }]\n      } }, { $addFields: { \"__order\": { $indexOfArray: [ids, \"$_id\"] } } }, { $sort: { \"__order\": 1 } }, { $facet: {\n        results: [{ $skip: skip }, { $limit: pageSize }, { $lookup: {\n            from: \"users\",\n            localField: \"postedBy\",\n            foreignField: \"_id\",\n            as: \"postedBy\"\n          } }, { $unwind: \"$postedBy\" }, { $lookup: {\n            from: \"categories\",\n            localField: \"category\",\n            foreignField: \"_id\",\n            as: \"category\"\n          } }, { $unwind: \"$category\" }],\n        count: [{ $group: {\n            _id: null,\n            total: { $sum: 1 }\n          } }]\n      } }];\n    try {\n      let data = yield _media2.default.aggregate(query);\n      data = data[0];\n      let medias = data.results;\n      let total = data.count[0].total;\n      (0, _responseHandler.sendSuccess)(res, `Medias of user ${user.firstName} ${user.lastName}`)({ medias, total });\n    } catch (err) {\n      console.log(err);\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function getOwnMediaBySearch(_x11, _x12) {\n    return _ref6.apply(this, arguments);\n  };\n})();\n\nconst read = (req, res) => {\n  (0, _responseHandler.sendSuccess)(res, 'Got media resource')({ media: req.media });\n};\n\nconst incrementViews = (() => {\n  var _ref7 = _asyncToGenerator(function* (req, res, next) {\n    let media = req.media;\n    try {\n      let result = yield _media2.default.findByIdAndUpdate(media._id, { $inc: { \"views\": 1 } }, { new: true }).populate('category tags').populate('postedBy', '_id lastName firstName');\n\n      req.media = result;\n      next();\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function incrementViews(_x13, _x14, _x15) {\n    return _ref7.apply(this, arguments);\n  };\n})();\n\nconst create = (() => {\n  var _ref8 = _asyncToGenerator(function* (req, res, next) {\n    let data = req.body;\n    data.postedBy = req.user._id;\n    let media = new _media2.default(data);\n    try {\n      const newMedia = yield media.save();\n      (0, _responseHandler.sendSuccess)(res, 'Media created')({ media: newMedia });\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function create(_x16, _x17, _x18) {\n    return _ref8.apply(this, arguments);\n  };\n})();\n\nconst getUploadDetails = (req, res, next) => {\n  if (!req.user) {\n    (0, _responseHandler.sendError)(res, 401, 'You are not authorized to upload videos')();\n  } else {\n    let cloud_name = _config2.default.cloudinary.cloud_name;\n    let cloud_preset = _config2.default.cloudinary.preset;\n    let cloudinary_url = _config2.default.cloudinary.cloudinary_api_url;\n    let upload_link = `${cloudinary_url}${cloud_name}/${req.query.resource_type || 'video'}/upload`;\n    (0, _responseHandler.sendSuccess)(res, 'Here is your upload link')({ upload_link, cloud_preset });\n  }\n};\n\n//update\nconst update = (() => {\n  var _ref9 = _asyncToGenerator(function* (req, res, next) {\n    let media = req.media;\n    media = (0, _extend2.default)(media, req.body);\n    media.updated = Date.now();\n    try {\n      let updateMedia = yield media.save();\n      (0, _responseHandler.sendSuccess)(res, 'media was updated')({ media: updateMedia });\n    } catch (err) {\n      console.log(err);\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function update(_x19, _x20, _x21) {\n    return _ref9.apply(this, arguments);\n  };\n})();\n\n//remove\nconst remove = (() => {\n  var _ref10 = _asyncToGenerator(function* (req, res, next) {\n    let media = req.media;\n    try {\n      let video_id = /(?:(upload.+))(?:\\/)(.+)(?:\\.(mp4|mpeg|avi|3gp))$/gm.exec(req.media.video_url)[2];\n      let cloudDelete = yield _cloudinary2.default.v2.api.delete_resources([video_id], _extends({}, _config2.default.cloudinary, { resource_type: 'video' }));\n      let deletedMedia = yield media.remove();\n      (0, _responseHandler.sendSuccess)(res, 'Resource deleted')({ media: deletedMedia });\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function remove(_x22, _x23, _x24) {\n    return _ref10.apply(this, arguments);\n  };\n})();\n\n//like dislike\nconst like = (() => {\n  var _ref11 = _asyncToGenerator(function* (req, res, next) {\n    try {\n      let media = yield _media2.default.findById(req.body.mediaId);\n      let isLiked = media.likes.indexOf(req.user._id.toString());\n      let isDisliked = media.dislikes.indexOf(req.user._id.toString());\n      if (isLiked >= 0) {\n        media.likes.splice(isLiked, 1);\n      } else {\n        media.likes = [...media.likes, req.user._id];\n        if (isDisliked >= 0) media.dislikes.splice(isDisliked, 1);\n      }\n      let updatedMedia = yield media.save();\n      updatedMedia = yield _media2.default.populate(updatedMedia, 'postedBy');\n      (0, _responseHandler.sendSuccess)(res, 'Media was evaluated')({ media: updatedMedia });\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function like(_x25, _x26, _x27) {\n    return _ref11.apply(this, arguments);\n  };\n})();\n\nconst dislike = (() => {\n  var _ref12 = _asyncToGenerator(function* (req, res, next) {\n    try {\n      let media = yield _media2.default.findById(req.body.mediaId);\n      let isLiked = media.likes.indexOf(req.user._id.toString());\n      let isDisliked = media.dislikes.indexOf(req.user._id.toString());\n      if (isDisliked >= 0) {\n        media.dislikes.splice(isDisliked, 1);\n      } else {\n        media.dislikes = [...media.dislikes, req.user._id];\n        if (isLiked >= 0) media.likes.splice(isLiked, 1);\n      }\n      let updatedMedia = yield media.save();\n      updatedMedia = yield _media2.default.populate(updatedMedia, { path: 'postedBy', select: '_id firstName lastName' });\n      (0, _responseHandler.sendSuccess)(res, 'Media was disliked')({ media: updatedMedia });\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function dislike(_x28, _x29, _x30) {\n    return _ref12.apply(this, arguments);\n  };\n})();\n\nconst isPoster = (req, res, next) => {\n  let isPoster = req.media && req.user && req.media.postedBy.toString() == req.user._id.toString();\n  if (!isPoster) {\n    return (0, _responseHandler.sendError)(res, 403, 'User is not authorized')();\n  }\n  next();\n};\n\nconst mediaByID = (() => {\n  var _ref13 = _asyncToGenerator(function* (req, res, next, id) {\n    try {\n      req.media = yield _media2.default.findById(id);\n\n      next();\n    } catch (err) {\n      (0, _responseHandler.sendError)(res, 404, 'Resource is not found')(err);\n    }\n  });\n\n  return function mediaByID(_x31, _x32, _x33, _x34) {\n    return _ref13.apply(this, arguments);\n  };\n})();\n\nconst getSuggestions = (() => {\n  var _ref14 = _asyncToGenerator(function* (req, res, next) {\n    let searchTerm = req.query.input;\n    let query = {\n      text: { $regex: searchTerm, $options: 'i' }\n    };\n    try {\n      let suggestions = yield _keyword2.default.find(query).limit(10).sort().select('text');\n      (0, _responseHandler.sendSuccess)(res, 'suggested results')({ suggestions });\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function getSuggestions(_x35, _x36, _x37) {\n    return _ref14.apply(this, arguments);\n  };\n})();\n\nconst searchByKeywords = (() => {\n  var _ref15 = _asyncToGenerator(function* (req, res, next) {\n    let searchTerm = req.query.input;\n    let query = {\n      $or: [{ title: { $regex: searchTerm, $options: 'i' } }, { description: { $regex: searchTerm, $options: 'i' } }]\n    };\n    try {\n      let medias = yield _media2.default.find(query).limit(10).sort().populate('postedBy', '_id firstName lastName');\n      let isSearchSuccessful = medias && medias.length > 0;\n      if (isSearchSuccessful) {\n        _keyword4.default.create(req.user, { text: searchTerm });\n      }\n\n      (0, _responseHandler.sendSuccess)(res, 'Requested medias')({ medias });\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function searchByKeywords(_x38, _x39, _x40) {\n    return _ref15.apply(this, arguments);\n  };\n})();\n\nexports.default = {\n  create,\n  read, incrementViews,\n  list, listPopular, listByUser, listRelated, getOwnMediaList,\n  getUploadDetails,\n  mediaByID,\n  isPoster,\n  update,\n  remove,\n  like, dislike,\n  getSuggestions, searchByKeywords, getOwnMediaBySearch\n};\n\n//# sourceURL=webpack:///./server/app/media/media.controller.js?");

/***/ }),

/***/ "./server/app/media/media.model.js":
/*!*****************************************!*\
  !*** ./server/app/media/media.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst objectId = _mongoose2.default.Schema.ObjectId;\n\nconst MediaSchema = new _mongoose2.default.Schema({\n  title: {\n    type: String,\n    required: 'Title is required'\n  },\n  description: String,\n  category: {\n    type: objectId,\n    ref: 'Category',\n    required: 'Category is required'\n  },\n  tags: [{ type: objectId, ref: 'Tag' }],\n  video_url: {\n    type: String,\n    required: 'Video url is required'\n  },\n  duration: {\n    type: Number,\n    required: true\n  },\n  thumb_url: {\n    type: String,\n    required: true\n  },\n  channel: {\n    type: objectId,\n    required: false\n  },\n  views: { type: Number, default: 0 },\n\n  likes: [{ type: objectId, ref: 'User' }],\n  dislikes: [{ type: objectId, ref: 'User' }],\n\n  postedBy: { type: objectId, ref: 'User' },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  updated: {\n    type: Date\n  }\n});\n\nexports.default = _mongoose2.default.model('Media', MediaSchema);\n\n//# sourceURL=webpack:///./server/app/media/media.model.js?");

/***/ }),

/***/ "./server/app/media/media.routes.js":
/*!******************************************!*\
  !*** ./server/app/media/media.routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n        value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ../user/user.controller */ \"./server/app/user/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../auth/auth.controller */ \"./server/app/auth/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _media = __webpack_require__(/*! ./media.controller */ \"./server/app/media/media.controller.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = _express2.default.Router();\n\nrouter.route('/media/upload_link').get(_auth2.default.requireSignin, _media2.default.getUploadDetails);\n\nrouter.route('/media/new').post(_auth2.default.requireSignin, _media2.default.create);\n\nrouter.route('/media/all').get(_media2.default.list);\n\nrouter.route('/media/by').get(_auth2.default.requireSignin, _media2.default.listByUser);\n\nrouter.route('/media/history').get(_auth2.default.requireSignin, _media2.default.getOwnMediaList);\n\nrouter.route('/media/history/search').get(_auth2.default.requireSignin, _media2.default.getOwnMediaBySearch);\n\nrouter.route('/media/popular').get(_media2.default.listPopular);\n\nrouter.route('/media/watchlater').get(_auth2.default.requireSignin, _media2.default.getOwnMediaList);\n\nrouter.route('/media/watchlater/search').get(_auth2.default.requireSignin, _media2.default.getOwnMediaBySearch);\n\nrouter.route('/media/suggestions').get(_media2.default.getSuggestions);\n\nrouter.route('/media/search').get(_media2.default.searchByKeywords);\n\nrouter.route('/media/like').post(_auth2.default.requireSignin, _media2.default.like);\nrouter.route('/media/dislike').post(_auth2.default.requireSignin, _media2.default.dislike);\n\nrouter.route('/media/related/:mediaId').get(_media2.default.listRelated);\n\nrouter.route('/media/:mediaId').get(_auth2.default.requireSignin, _media2.default.incrementViews, _user2.default.addToHistory, _media2.default.read).put(_auth2.default.requireSignin, _media2.default.isPoster, _media2.default.update).delete(_auth2.default.requireSignin, _media2.default.isPoster, _media2.default.remove);\n\nrouter.param('mediaId', _media2.default.mediaByID);\n//router.param('userId', userCtrl.userByID)\n\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/app/media/media.routes.js?");

/***/ }),

/***/ "./server/app/tag/tag.controller.js":
/*!******************************************!*\
  !*** ./server/app/tag/tag.controller.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _tag = __webpack_require__(/*! ./tag.model */ \"./server/app/tag/tag.model.js\");\n\nvar _tag2 = _interopRequireDefault(_tag);\n\nvar _responseHandler = __webpack_require__(/*! ../../helpers/responseHandler */ \"./server/helpers/responseHandler.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nconst listAll = (() => {\n\tvar _ref = _asyncToGenerator(function* (req, res, next) {\n\t\ttry {\n\t\t\tconst tags = yield _tag2.default.find({});\n\t\t\t(0, _responseHandler.sendSuccess)(res, 'List of tags')({ tags });\n\t\t} catch (err) {\n\t\t\t(0, _responseHandler.sendError)(res)(error);\n\t\t}\n\t});\n\n\treturn function listAll(_x, _x2, _x3) {\n\t\treturn _ref.apply(this, arguments);\n\t};\n})();\n\nconst create = (() => {\n\tvar _ref2 = _asyncToGenerator(function* (req, res, next) {\n\t\tlet tag = new _tag2.default(req.body);\n\t\ttry {\n\t\t\tlet newTag = yield tag.save();\n\t\t\t(0, _responseHandler.sendSuccess)(res, 'Tag created')({ newTag });\n\t\t} catch (error) {\n\t\t\t(0, _responseHandler.sendError)(res)(error);\n\t\t}\n\t});\n\n\treturn function create(_x4, _x5, _x6) {\n\t\treturn _ref2.apply(this, arguments);\n\t};\n})();\n\nexports.default = {\n\tlistAll, create\n};\n\n//# sourceURL=webpack:///./server/app/tag/tag.controller.js?");

/***/ }),

/***/ "./server/app/tag/tag.model.js":
/*!*************************************!*\
  !*** ./server/app/tag/tag.model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst TagSchema = new _mongoose2.default.Schema({\n  title: {\n    type: String,\n    required: 'Title is required',\n    unique: 'Title already exists',\n    lowercase: true\n  },\n\n  createdAt: {\n    type: Date,\n    default: Date.now(),\n    required: true\n  }\n});\n\nexports.default = _mongoose2.default.model('Tag', TagSchema);\n\n//# sourceURL=webpack:///./server/app/tag/tag.model.js?");

/***/ }),

/***/ "./server/app/tag/tag.routes.js":
/*!**************************************!*\
  !*** ./server/app/tag/tag.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _tag = __webpack_require__(/*! ./tag.controller */ \"./server/app/tag/tag.controller.js\");\n\nvar _tag2 = _interopRequireDefault(_tag);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = _express2.default.Router();\n\nrouter.route('/media/tag/all').get(_tag2.default.listAll);\n\nrouter.route('/media/tag/new').post(_tag2.default.create);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/app/tag/tag.routes.js?");

/***/ }),

/***/ "./server/app/user/user.controller.js":
/*!********************************************!*\
  !*** ./server/app/user/user.controller.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ./user.model */ \"./server/app/user/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _extend = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n\nvar _extend2 = _interopRequireDefault(_extend);\n\nvar _dbErrorHandler = __webpack_require__(/*! ../../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nvar _config = __webpack_require__(/*! ./../../config/config */ \"./server/config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _cloudinary = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n\nvar _cloudinary2 = _interopRequireDefault(_cloudinary);\n\nvar _formidable = __webpack_require__(/*! formidable */ \"formidable\");\n\nvar _formidable2 = _interopRequireDefault(_formidable);\n\nvar _responseHandler = __webpack_require__(/*! ../../helpers/responseHandler */ \"./server/helpers/responseHandler.js\");\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _request = __webpack_require__(/*! request */ \"request\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nconst create = (req, res, next) => {\n  const user = new _user2.default(req.body);\n  user.save((err, newUser) => {\n    if (err) {\n      return res.status(400).json({ status: 400, data: null,\n        message: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    delete newUser.hashed_password;\n    delete newUser.salt;\n    res.status(200).json({ status: 200, data: newUser });\n  });\n};\n\nconst list = (req, res) => {\n  _user2.default.find((err, users) => {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(users);\n  }).select('name email updated created');\n};\n\nconst userByID = (req, res, next, id) => {\n  _user2.default.findById(id).populate('following', '_id name photo').populate('followers', '_id name photo').exec((err, user) => {\n    if (err || !user) return res.status('400').json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  });\n};\n\nconst read = (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nconst update = (() => {\n  var _ref = _asyncToGenerator(function* (req, res, next) {\n\n    // let form = new formidable.IncomingForm();\n    //  form.keepExtensions = true;\n    //   form.parse(req, (err, fields, files) => {\n    //    if (err) {\n    //      return res.status(400).json({\n    //        error: 'Cant upload photo'\n    //      })\n    //    }\n    let user = req.user;\n    console.log(user, '\\n', req.body);\n    try {\n      user = (0, _extend2.default)(user, req.body);\n      user.updated = Date.now();\n      let updatedProfile = yield user.save();\n      (0, _responseHandler.sendSuccess)(res, 'Profile updated')({ user: updatedProfile });\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n\n    // if(files.photo){\n    //  var pathToPhoto = files.photo.path;\n    //  Cloudinary.v2.uploader.upload(pathToPhoto,config.cloudinary,function(err,result){\n    //   if(result){\n    //     user.photo = result.secure_url;\n    //     saveUser(user,res);\n    //   }\n    //  })    \n    // }else{\n    //  }\n\n\n    // })\n  });\n\n  return function update(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n})();\n\nconst addToHistory = (() => {\n  var _ref2 = _asyncToGenerator(function* (req, res, next) {\n    let user = req.user;\n    let mediaId = req.params.mediaId;\n    if (!user) {\n      next();\n    } else {\n      try {\n        if (!user.history) {\n          user.history = [];\n        }\n        if (typeof user.saveHistory === 'undefined') {\n          user.saveHistory = true;\n        }\n        if (user.saveHistory) {\n          let history = user.history;\n          let found = history.findIndex(function (item) {\n            return item.id === mediaId;\n          });\n          if (found === -1) {\n            history.unshift({ id: mediaId });\n            yield user.save();\n          }\n        }\n        next();\n      } catch (err) {\n        next();\n      }\n    }\n  });\n\n  return function addToHistory(_x4, _x5, _x6) {\n    return _ref2.apply(this, arguments);\n  };\n})();\n\nconst clearHistory = (() => {\n  var _ref3 = _asyncToGenerator(function* (req, res, next) {\n    let user = req.user;\n    user.history = [];\n    try {\n      let updatedUser = yield user.save();\n      (0, _responseHandler.sendSuccess)(res, 'History cleared')({ user: updatedUser });\n    } catch (err) {\n      (0, _responseHandler.sendError)(res)(err);\n    }\n  });\n\n  return function clearHistory(_x7, _x8, _x9) {\n    return _ref3.apply(this, arguments);\n  };\n})();\n\nconst remove = (req, res, next) => {\n  let user = req.profile;\n  user.remove((err, deletedUser) => {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  });\n};\n\n//following\n\nconst addFollowing = (req, res, next) => {\n  _user2.default.findByIdAndUpdate(req.body.userId, { $push: { following: req.body.followId } }, (err, result) => {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    next();\n  });\n};\n\nconst addFollower = (req, res) => {\n  _user2.default.findByIdAndUpdate(req.body.followId, { $push: { followers: req.body.userId } }, { new: true }).populate('following', '_id name').populate('followers', '_id name').exec((err, result) => {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    result.hashed_password = undefined;\n    result.salt = undefined;\n    res.json(result);\n  });\n};\n\nconst removeFollowing = (req, res, next) => {\n  _user2.default.findByIdAndUpdate(req.body.userId, { $pull: { following: req.body.unfollowId } }, (err, result) => {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    next();\n  });\n};\nconst removeFollower = (req, res) => {\n  _user2.default.findByIdAndUpdate(req.body.unfollowId, { $pull: { followers: req.body.userId } }, { new: true }).populate('following', '_id name').populate('followers', '_id name').exec((err, result) => {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    result.hashed_password = undefined;\n    result.salt = undefined;\n    res.json(result);\n  });\n};\n\nconst addWatchlater = (() => {\n  var _ref4 = _asyncToGenerator(function* (req, res) {\n    let user = req.user;\n    let mediaId = req.body.mediaId;\n    if (!user) {} else {\n      try {\n        if (!user.watchlater) {\n          user.watchlater = [];\n        }\n        let message = 'You have already added this media to watchlist';\n        let watchlater = user.watchlater;\n        let found = watchlater.findIndex(function (item) {\n          return item.id === mediaId;\n        });\n        if (found === -1) {\n          message = 'Successfully added to watchlist';\n          watchlater.unshift({ id: mediaId });\n          user = yield user.save();\n        }\n\n        (0, _responseHandler.sendSuccess)(res, message)({ user });\n      } catch (err) {\n        (0, _responseHandler.sendError)(res)(err);\n      }\n    }\n  });\n\n  return function addWatchlater(_x10, _x11) {\n    return _ref4.apply(this, arguments);\n  };\n})();\n\nexports.default = {\n  create,\n  userByID,\n  read,\n  list,\n  remove,\n  update,\n  removeFollower, removeFollowing,\n  addFollower, addFollowing,\n  addWatchlater,\n  addToHistory, clearHistory\n\n};\n\n//# sourceURL=webpack:///./server/app/user/user.controller.js?");

/***/ }),

/***/ "./server/app/user/user.model.js":
/*!***************************************!*\
  !*** ./server/app/user/user.model.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst ObjectId = _mongoose2.default.Schema.ObjectId;\n\nconst HistoryEntrySchema = new _mongoose2.default.Schema({\n  id: String,\n  added: {\n    type: Date,\n    default: Date.now\n  }\n});\n\nconst WatchlaterEntrySchema = new _mongoose2.default.Schema({\n  id: String,\n  added: {\n    type: Date,\n    default: Date.now\n  }\n});\n\nconst UserSchema = new _mongoose2.default.Schema({\n  firstName: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  lastName: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  about: {\n    type: String,\n    trim: true\n  },\n  photo: {\n    type: String\n  },\n  subscriptions: [{ type: ObjectId, ref: 'User' }],\n  subscribed: [{ type: ObjectId, ref: 'Channel' }],\n  verified: {\n    type: Boolean,\n    default: false\n  },\n  history: [HistoryEntrySchema],\n  watchlater: [WatchlaterEntrySchema],\n  saveHistory: {\n    type: Boolean,\n    default: true\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String,\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\n\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\n\nUserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\n\nUserSchema.methods = {\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function (password) {\n    if (!password) return '';\n    try {\n      return _crypto2.default.createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\n\nexports.default = _mongoose2.default.model('User', UserSchema);\n\n//# sourceURL=webpack:///./server/app/user/user.model.js?");

/***/ }),

/***/ "./server/app/user/user.routes.js":
/*!****************************************!*\
  !*** ./server/app/user/user.routes.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ./user.controller */ \"./server/app/user/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../auth/auth.controller */ \"./server/app/auth/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = _express2.default.Router();\n\nrouter.route('/users/signup').post(_user2.default.create);\n\nrouter.route('/users/profile/update').put(_auth2.default.requireSignin, _user2.default.update);\n\nrouter.route('/users/profile/watchlater').put(_auth2.default.requireSignin, _user2.default.addWatchlater);\n\nrouter.route('/users/history/clear').put(_auth2.default.requireSignin, _user2.default.clearHistory);\n\nrouter.param('userId', _user2.default.userByID);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/app/user/user.routes.js?");

/***/ }),

/***/ "./server/config/config.js":
/*!*********************************!*\
  !*** ./server/config/config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nconst config = {\n\tenv: \"development\",\n\tport: process.env.PORT,\n\tjwtSecret: process.env.JWT_SECRET,\n\tserverUrl: process.env.SERVER_URL,\n\tmongoUri: process.env.MONGO_URI,\n\tcloudinary: {\n\t\tcloud_name: process.env.CLOUDINARY_CLOUD_NAME,\n\t\tapi_key: process.env.CLOUDINARY_API_KEY,\n\t\tapi_secret: process.env.CLOUDINARY_API_SECRET,\n\t\tpreset: process.env.CLOUDINARY_PRESET,\n\t\tcloudinary_api_url: process.env.CLOUDINARY_API_URL\n\t},\n\tsession: {\n\t\ttype: 'mongo',\n\t\tsecret: 'u+J%E^9!hx?piXLCfiMY.EDc',\n\t\tresave: false,\n\t\tsaveUninitialized: true\n\t}\n};\n\nexports.default = config;\n\n//# sourceURL=webpack:///./server/config/config.js?");

/***/ }),

/***/ "./server/config/passport.js":
/*!***********************************!*\
  !*** ./server/config/passport.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _jwt = __webpack_require__(/*! ./strategies/jwt */ \"./server/config/strategies/jwt.js\");\n\nvar _jwt2 = _interopRequireDefault(_jwt);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst User = _mongoose2.default.model('User');\n\nconst initPassport = function (app) {\n  _passport2.default.serializeUser(function (user, done) {\n    done(null, user.id);\n  });\n\n  _passport2.default.deserializeUser(function (id, done) {\n    User.findById(id, done);\n  });\n\n  // load strategies\n  // require('./strategies/local').init();\n  // require('./strategies/bearer').init();\n  // require('./strategies/facebook').init();\n  (0, _jwt2.default)();\n};\n\nexports.default = initPassport;\n\n//# sourceURL=webpack:///./server/config/passport.js?");

/***/ }),

/***/ "./server/config/strategies/jwt.js":
/*!*****************************************!*\
  !*** ./server/config/strategies/jwt.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n\nvar _config = __webpack_require__(/*! ../config */ \"./server/config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _user = __webpack_require__(/*! ../../app/user/user.model */ \"./server/app/user/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst cookieExtractor = req => {\n    let token = null;\n    if (req && req.cookies) token = req.cookies['jwt'];\n    return token;\n};\n\nconst jwtInit = () => {\n    const opts = {};\n    opts.jwtFromRequest = cookieExtractor;\n    opts.secretOrKey = _config2.default.jwtSecret;\n    _passport2.default.use('jwt', new _passportJwt.Strategy(opts, (jwt_payload, done) => {\n        _user2.default.findOne({ _id: jwt_payload._id }, (err, user) => {\n            if (err) {\n                return done(err, false);\n            }\n            if (user) {\n                return done(null, user);\n            } else {\n                return done(null, false);\n            }\n        });\n    }));\n};\n\nexports.default = jwtInit;\n\n//# sourceURL=webpack:///./server/config/strategies/jwt.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);\n\nvar _webpackConfigClient = __webpack_require__(/*! ../webpack.config.client.js */ \"./webpack.config.client.js\");\n\nvar _webpackConfigClient2 = _interopRequireDefault(_webpackConfigClient);\n\nvar _config = __webpack_require__(/*! ./config/config */ \"./server/config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst compile = app => {\n\n  if (_config2.default.env == \"development\") {\n    const compiler = (0, _webpack2.default)(_webpackConfigClient2.default);\n    const middleware = (0, _webpackDevMiddleware2.default)(compiler, {\n      serverSideRender: true\n    });\n    app.use(middleware);\n    app.use((0, _webpackHotMiddleware2.default)(compiler));\n  }\n};\n\nexports.default = {\n  compile\n};\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _csurf = __webpack_require__(/*! csurf */ \"csurf\");\n\nvar _csurf2 = _interopRequireDefault(_csurf);\n\nvar _expressRateLimit = __webpack_require__(/*! express-rate-limit */ \"express-rate-limit\");\n\nvar _expressRateLimit2 = _interopRequireDefault(_expressRateLimit);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _index = __webpack_require__(/*! ../index */ \"./index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _allRoutes = __webpack_require__(/*! ./app/allRoutes */ \"./server/app/allRoutes.js\");\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _expressSession = __webpack_require__(/*! express-session */ \"express-session\");\n\nvar _expressSession2 = _interopRequireDefault(_expressSession);\n\nvar _config = __webpack_require__(/*! ./config/config */ \"./server/config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _App = __webpack_require__(/*! ./../src/App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _index3 = __webpack_require__(/*! ./../src/index.css */ \"./src/index.css\");\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _StaticRouter = __webpack_require__(/*! react-router-dom/StaticRouter */ \"react-router-dom/StaticRouter\");\n\nvar _StaticRouter2 = _interopRequireDefault(_StaticRouter);\n\nvar _jss = __webpack_require__(/*! react-jss/lib/jss */ \"react-jss/lib/jss\");\n\nvar _JssProvider = __webpack_require__(/*! react-jss/lib/JssProvider */ \"react-jss/lib/JssProvider\");\n\nvar _JssProvider2 = _interopRequireDefault(_JssProvider);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _colors = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _routeConfig = __webpack_require__(/*! ./../src/routes/routeConfig */ \"./src/routes/routeConfig.js\");\n\nvar _routeConfig2 = _interopRequireDefault(_routeConfig);\n\n__webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nvar _store = __webpack_require__(/*! ./../src/store/store */ \"./src/store/store.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n//ssr\n\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst app = (0, _express2.default)();\nconst apiLimiter = new _expressRateLimit2.default({\n  windowsMs: 20 * 60 * 1000,\n  max: 150,\n  delayMs: 0\n});\napp.use(apiLimiter);\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.use((0, _cookieParser2.default)());\napp.use((0, _compression2.default)());\napp.use((0, _helmet2.default)());\napp.use((0, _csurf2.default)({ cookie: true }));\napp.use((0, _cors2.default)());\napp.use((0, _morgan2.default)(\"combined\"));\n\nconst sessionOpts = {\n  secret: _config2.default.session.secret,\n  key: \"skey.sid\",\n  resave: _config2.default.session.resave,\n  saveUninitialized: _config2.default.session.saveUninitialized\n};\n\napp.use((0, _expressSession2.default)(sessionOpts));\napp.use(_passport2.default.initialize());\napp.use(_passport2.default.session());\n\nconst loadBranchData = (location, store) => {\n  const branch = (0, _reactRouterConfig.matchRoutes)(_routeConfig2.default, location);\n  const promises = branch.map((() => {\n    var _ref = _asyncToGenerator(function* ({ route, match }) {\n      if (route.loadData) {\n        let serverData = yield route.loadData(branch[0].match.params);\n        store.dispatch(route.reduxAction(Object.values(serverData.data)[0]));\n      }\n      return yield store.getState();\n    });\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  })());\n  return Promise.all(promises);\n};\n\nconst oneWeek = 1000 * 60 * 60 * 24 * 7;\napp.use(\"/dist/\", _express2.default.static(_path2.default.join(CURRENT_WORKING_DIR, \"dist\"), { maxAge: oneWeek, lastModified: true }));\n\napp.use(\"/api\", _allRoutes.userRoutes);\napp.use(\"/api\", _allRoutes.authRoutes);\napp.use(\"/api\", _allRoutes.mediaRoutes);\napp.use(\"/api\", _allRoutes.tagRoutes);\napp.use(\"/api\", _allRoutes.categoryRoutes);\napp.use(\"/api\", _allRoutes.commentRoutes);\napp.use(\"/api\", _allRoutes.channelRoutes);\n\napp.get(\"/*\", (req, res, next) => {\n  if (\"development\" === \"development\" && (req.originalUrl.includes(\"bundle.js\") || req.originalUrl.includes(\".png\"))) {\n    //remove in production\n    return next();\n  }\n\n  let csrfToken = req.csrfToken ? req.csrfToken() : null;\n  res.cookie(\"csrfToken\", csrfToken, { sameSite: true, httpOnly: true });\n  const context = {};\n\n  const theme = (0, _styles.createMuiTheme)({\n    palette: {\n      primary: {\n        light: \"#757de8\",\n        main: \"#3f51b5\",\n        dark: \"#002984\",\n        contrastText: \"#fff\",\n        error: _colors.red[500],\n        errorHover: _colors.red[600],\n        success: _colors.green[400],\n        successHover: _colors.green[600],\n        standard: _colors.deepPurple[500],\n        standardHover: _colors.deepPurple[600],\n        grey: \"#8091a5\",\n        lightGrey: \"#c3cfd5\"\n      }\n    }\n  });\n  const sheetsRegistry = new _jss.SheetsRegistry();\n  const generateClassName = (0, _styles.createGenerateClassName)();\n  const store = (0, _store.configStore)({\n    csrf: csrfToken\n  });\n  loadBranchData(req.url, store).then(newStoreState => {\n    const state = `<script id=\"initialState\">\n        window.__APP_STATE = ${JSON.stringify(newStoreState[0])};\n      </script>`;\n    const markup = _server2.default.renderToString(_react2.default.createElement(\n      _reactRedux.Provider,\n      { store: store },\n      _react2.default.createElement(\n        _StaticRouter2.default,\n        { location: req.url, context: context },\n        _react2.default.createElement(\n          _JssProvider2.default,\n          {\n            registry: sheetsRegistry,\n            generateClassName: generateClassName\n          },\n          _react2.default.createElement(\n            _styles.MuiThemeProvider,\n            { theme: theme, sheetsManager: new Map() },\n            _react2.default.createElement(_App2.default, null)\n          )\n        )\n      )\n    ));\n    if (context.url) {\n      return res.redirect(303, context.url);\n    }\n    const materialCss = sheetsRegistry.toString();\n    const mainCss = _index4.default.toString();\n    res.writeHead(200, { \"Content-Type\": \"text/html\" });\n    res.end((0, _index2.default)({ markup, state, materialCss, mainCss }));\n  }).catch(err => {\n    console.log(err);\n    res.status(500).send(\"Data could not be loaded\");\n  });\n});\n\napp.use((err, req, res, next) => {\n  console.log(err);\n  if (err.name === \"UnauthorizedError\") {\n    res.status(401).json({ error: err.name + \": \" + err.message });\n  } else {\n    res.status(500).json({ message: err.message || \"Internal server error\" });\n  }\n});\n\nexports.default = app;\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nconst getErrorMessage = err => {\n    let message = '';\n    if (err.code) {\n        switch (err.code) {\n            case 11000:\n            case 11001:\n                message = getUniqueErrorMessage(err);\n                break;\n            default:\n                message = 'Something went wrong';\n        }\n    } else {\n        for (let errName in err.errors) {\n            if (err.errors[errName].message) message = err.errors[errName].message;\n        }\n    }\n    return message;\n};\n\nconst getUniqueErrorMessage = err => {\n    let output;\n    try {\n        let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n    } catch (ex) {\n        output = 'Unique field already exists';\n    }\n    return output;\n};\n\nexports.default = { getErrorMessage };\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/helpers/responseHandler.js":
/*!*******************************************!*\
  !*** ./server/helpers/responseHandler.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.sendError = exports.sendSuccess = exports.throwIfNoResult = exports.throwError = undefined;\n\nvar _dbErrorHandler = __webpack_require__(/*! ./dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nconst throwError = (code, errorType, errorMessage) => error => {\n  if (!error) error = new Error(errorMessage || 'Default Error');\n  error.code = code;\n  error.errorType = errorType;\n  throw error;\n};\n\nconst throwIfNoResult = (fn, code, errorType, errorMessage) => result => {\n  if (fn(result)) {\n    return throwError(code, errorType, errorMessage)();\n  }\n  return result;\n};\n\nconst sendSuccess = (res, message) => data => {\n  res.status(200).json({ status: 200, message, data });\n};\n\nconst sendError = (res, status, message) => error => {\n  let responseStatus;\n  if (error && (error.code == 11000 || error.code == 11001)) {\n    let fieldName = error.message.substring(error.message.lastIndexOf('.$') + 2, error.message.lastIndexOf('_1'));\n    message = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n    responseStatus = 500;\n  } else {\n    responseStatus = status || error.code || 400;\n  }\n  res.status(responseStatus).json({\n    status: responseStatus,\n    message: message || error.message,\n    data: null\n  });\n};\n\nexports.throwError = throwError;\nexports.throwIfNoResult = throwIfNoResult;\nexports.sendSuccess = sendSuccess;\nexports.sendError = sendError;\n\n//# sourceURL=webpack:///./server/helpers/responseHandler.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _devBundle = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n\nvar _devBundle2 = _interopRequireDefault(_devBundle);\n\nvar _config = __webpack_require__(/*! ./config/config */ \"./server/config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _express = __webpack_require__(/*! ./express */ \"./server/express.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _passport = __webpack_require__(/*! ./config/passport */ \"./server/config/passport.js\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import spdy from 'spdy';\n// import fs from 'fs';\n\n\n// const options = {\n//     key: fs.readFileSync(__dirname + '/server.key'),\n//     cert:  fs.readFileSync(__dirname + '/server.crt')\n// }\n\n// import cluster from 'cluster';\n// import os from 'os';\n\n\n// if(cluster.isMaster){\n// \tconst cpus = os.cpus().length;\n// \tconsole.log(`Forking for ${cpus} CPUs`);\n// \tfor(let i = 0;i<cpus;i++){\n// \t\tcluster.fork();\n// \t}\n// \tcluster.on('exit',(worket,code,signal)=>{\n// \t\tif(code !== 0 && !worker.exitedAfterDisconnect){\n// \t\t\tconsole.log(`Worker ${worker.id} crashed. Starting a new worker`);\n// \t\t\tcluster.fork();\n// \t\t}\n// \t})\n// }else{\nif (true) {\n\t_devBundle2.default.compile(_express2.default);\n}\n(0, _passport2.default)(_express2.default);\n_mongoose2.default.connect(_config2.default.mongoUri);\n\n// spdy\n// \t .createServer(options, app)\n_express2.default.listen(_config2.default.port, err => {\n\tif (err) {\n\t\tconsole.log(err);\n\t}\n\tconsole.info(`Server started on port ${_config2.default.port}.`);\n});\n\n_mongoose2.default.connection.on('error', () => {\n\tthrow new Error(`unable to connect to database: ${mongoUri}`);\n});\n//}\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _RootRouter = __webpack_require__(/*! ./routes/RootRouter/RootRouter */ \"./src/routes/RootRouter/RootRouter.js\");\n\nvar _RootRouter2 = _interopRequireDefault(_RootRouter);\n\nvar _MainNav = __webpack_require__(/*! ./components/core/MainNav/MainNav */ \"./src/components/core/MainNav/MainNav.js\");\n\nvar _MainNav2 = _interopRequireDefault(_MainNav);\n\nvar _DrawerNav = __webpack_require__(/*! ./components/core/DrawerNav/DrawerNav */ \"./src/components/core/DrawerNav/DrawerNav.js\");\n\nvar _DrawerNav2 = _interopRequireDefault(_DrawerNav);\n\nvar _Snackbar = __webpack_require__(/*! ./components/core/Notifications/Snackbar/Snackbar */ \"./src/components/core/Notifications/Snackbar/Snackbar.js\");\n\nvar _Snackbar2 = _interopRequireDefault(_Snackbar);\n\nvar _app = __webpack_require__(/*! ./store/states/app */ \"./src/store/states/app/index.js\");\n\nvar _app2 = __webpack_require__(/*! ./store/states/app/app.operations */ \"./src/store/states/app/app.operations.js\");\n\nvar appOperations = _interopRequireWildcard(_app2);\n\nvar _user = __webpack_require__(/*! ./store/states/user/user.operations */ \"./src/store/states/user/user.operations.js\");\n\nvar userOperations = _interopRequireWildcard(_user);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass App extends _react.Component {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.onSnackBarClose = () => {\n      const { hideSnackbar } = this.props;\n      hideSnackbar();\n    }, _temp;\n  }\n\n  componentDidMount() {\n    this.props.checkSession();\n    const jssStyles = document.getElementById('jss-server-side');\n    if (jssStyles && jssStyles.parentNode) {\n      jssStyles.parentNode.removeChild(jssStyles);\n    }\n  }\n\n  render() {\n    const { snackbarState, drawerOpened } = this.props;\n    let { message = '', opened = false, variant } = snackbarState;\n    variant = !variant ? 'success' : variant;\n\n    return _react2.default.createElement(\n      _react.Fragment,\n      null,\n      _react2.default.createElement(_Snackbar2.default, {\n        open: opened,\n        variant: variant,\n        message: message,\n        onClose: this.onSnackBarClose }),\n      _react2.default.createElement(\n        _DrawerNav2.default,\n        null,\n        _react2.default.createElement(_MainNav2.default, null),\n        _react2.default.createElement(\n          'div',\n          { style: { margin: '3rem' } },\n          _react2.default.createElement(_RootRouter2.default, null)\n        )\n      )\n    );\n  }\n}\n\nconst mapStateToProps = state => ({\n  snackbarState: (0, _app.selectSliceOfData)(state.app, 'snackbar'),\n  drawerOpened: true,\n  router: state.router\n});\n\nconst boundActionCreators = dispatch => (0, _redux.bindActionCreators)(_extends({}, appOperations, userOperations), dispatch);\n\nexports.default = (0, _reactHotLoader.hot)(module)((0, _reactRedux.connect)(mapStateToProps, boundActionCreators)(App));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"49295503c9a7d7a48eae0c5ae444ac63.png\";\n\n//# sourceURL=webpack:///./src/assets/logo.png?");

/***/ }),

/***/ "./src/components/UI/miscellaneous/Logo/Logo.js":
/*!******************************************************!*\
  !*** ./src/components/UI/miscellaneous/Logo/Logo.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _logo = __webpack_require__(/*! ../../../../assets/logo.png */ \"./src/assets/logo.png\");\n\nvar _logo2 = _interopRequireDefault(_logo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst logo = props => {\n\n  return _react2.default.createElement(\n    _reactRouterDom.Link,\n    { to: '/' },\n    _react2.default.createElement('img', { src: _logo2.default, height: '100%' })\n  );\n};\n\nexports.default = logo;\n\n//# sourceURL=webpack:///./src/components/UI/miscellaneous/Logo/Logo.js?");

/***/ }),

/***/ "./src/components/UI/miscellaneous/UserAvatarSmall/UserAvatarSmall.js":
/*!****************************************************************************!*\
  !*** ./src/components/UI/miscellaneous/UserAvatarSmall/UserAvatarSmall.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _AccountCircle = __webpack_require__(/*! @material-ui/icons/AccountCircle */ \"@material-ui/icons/AccountCircle\");\n\nvar _AccountCircle2 = _interopRequireDefault(_AccountCircle);\n\nvar _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst userAvatarSmall = props => {\n  const { user, open, handleClick, link = false } = props;\n  return _react2.default.createElement(\n    _IconButton2.default,\n    {\n      'aria-owns': open ? 'menu-appbar' : null,\n      'aria-haspopup': 'true',\n      onClick: handleClick,\n      color: 'inherit'\n    },\n    link && _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: `/profile/${user._id}` },\n      user.avatar ? _react2.default.createElement(_Avatar2.default, { src: user.avatar }) : _react2.default.createElement(_AccountCircle2.default, { style: { fontSize: '2.5rem' } })\n    ),\n    !link && (user.avatar ? _react2.default.createElement(_Avatar2.default, { src: user.avatar }) : _react2.default.createElement(_AccountCircle2.default, { style: { fontSize: '2.5rem' } }))\n  );\n};\n\nexports.default = userAvatarSmall;\n\n//# sourceURL=webpack:///./src/components/UI/miscellaneous/UserAvatarSmall/UserAvatarSmall.js?");

/***/ }),

/***/ "./src/components/UI/skeletons/HorizontalMediaCard.js":
/*!************************************************************!*\
  !*** ./src/components/UI/skeletons/HorizontalMediaCard.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n\troot: {\n\t\twidth: '100%',\n\t\tdisplay: 'inline-flex',\n\t\tmarginTop: '5px'\n\t},\n\timgPlaceholder: {\n\t\theight: 120,\n\t\twidth: 170,\n\t\tbackground: theme.palette.primary.lightGrey,\n\t\tborderRadius: '3px'\n\t},\n\tdetails: {\n\t\tflex: '1 0 auto',\n\t\tpadding: '0 5px'\n\t},\n\ttitlePlaceholder: {\n\t\theight: 20,\n\t\twidth: '80%',\n\t\tbackground: theme.palette.primary.lightGrey,\n\t\tborderRadius: '3px',\n\t\tmarginBottom: '5px'\n\t},\n\tsubtitlePlaceholder: {\n\t\theight: 15,\n\t\twidth: '70%',\n\t\tbackground: theme.palette.primary.lightGrey,\n\t\tborderRadius: '3px',\n\t\tmargin: '5px 0'\n\t}\n\n});\n\nconst horizontalMediaCard = props => {\n\tconst { classes } = props;\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\t{ className: classes.root },\n\t\t_react2.default.createElement('div', { className: classes.imgPlaceholder }),\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: classes.details },\n\t\t\t_react2.default.createElement('div', { className: classes.titlePlaceholder }),\n\t\t\t_react2.default.createElement('div', { className: classes.subtitlePlaceholder })\n\t\t)\n\t);\n};\n\nexports.default = (0, _styles.withStyles)(styles)(horizontalMediaCard);\n\n//# sourceURL=webpack:///./src/components/UI/skeletons/HorizontalMediaCard.js?");

/***/ }),

/***/ "./src/components/UI/skeletons/VerticalMediaCard.js":
/*!**********************************************************!*\
  !*** ./src/components/UI/skeletons/VerticalMediaCard.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n\timgPlaceholder: {\n\t\theight: 130,\n\t\twidth: '100%',\n\t\tbackground: theme.palette.primary.lightGrey,\n\t\tborderRadius: '3px'\n\t},\n\ttitlePlaceholder: {\n\t\theight: 20,\n\t\twidth: '80%',\n\t\tbackground: theme.palette.primary.lightGrey,\n\t\tborderRadius: '3px',\n\t\tmargin: '5px 0'\n\t},\n\tsubtitlePlaceholder: {\n\t\theight: 15,\n\t\twidth: '70%',\n\t\tbackground: theme.palette.primary.lightGrey,\n\t\tborderRadius: '3px',\n\t\tmargin: '5px 0'\n\t}\n\n});\n\nconst verticalMediaCard = props => {\n\tconst { classes } = props;\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\t{ style: { width: '100%', display: 'flex', flexDirection: 'column' } },\n\t\t_react2.default.createElement('div', { className: classes.imgPlaceholder }),\n\t\t_react2.default.createElement('div', { className: classes.titlePlaceholder }),\n\t\t_react2.default.createElement('div', { className: classes.subtitlePlaceholder })\n\t);\n};\n\nexports.default = (0, _styles.withStyles)(styles)(verticalMediaCard);\n\n//# sourceURL=webpack:///./src/components/UI/skeletons/VerticalMediaCard.js?");

/***/ }),

/***/ "./src/components/core/DrawerNav/DrawerNav.js":
/*!****************************************************!*\
  !*** ./src/components/core/DrawerNav/DrawerNav.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _classnames = __webpack_require__(/*! classnames */ \"classnames\");\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Drawer = __webpack_require__(/*! @material-ui/core/Drawer */ \"@material-ui/core/Drawer\");\n\nvar _Drawer2 = _interopRequireDefault(_Drawer);\n\nvar _AppBar = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n\nvar _AppBar2 = _interopRequireDefault(_AppBar);\n\nvar _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n\nvar _Toolbar2 = _interopRequireDefault(_Toolbar);\n\nvar _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n\nvar _MenuItem2 = _interopRequireDefault(_MenuItem);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Divider = __webpack_require__(/*! @material-ui/core/Divider */ \"@material-ui/core/Divider\");\n\nvar _Divider2 = _interopRequireDefault(_Divider);\n\nvar _Home = __webpack_require__(/*! @material-ui/icons/Home */ \"@material-ui/icons/Home\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Menu = __webpack_require__(/*! @material-ui/icons/Menu */ \"@material-ui/icons/Menu\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nvar _List = __webpack_require__(/*! @material-ui/core/List */ \"@material-ui/core/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ \"@material-ui/core/ListItem\");\n\nvar _ListItem2 = _interopRequireDefault(_ListItem);\n\nvar _ListItemIcon = __webpack_require__(/*! @material-ui/core/ListItemIcon */ \"@material-ui/core/ListItemIcon\");\n\nvar _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);\n\nvar _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ \"@material-ui/core/ListItemText\");\n\nvar _ListItemText2 = _interopRequireDefault(_ListItemText);\n\nvar _ListSubheader = __webpack_require__(/*! @material-ui/core/ListSubheader */ \"@material-ui/core/ListSubheader\");\n\nvar _ListSubheader2 = _interopRequireDefault(_ListSubheader);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _app = __webpack_require__(/*! ../../../store/states/app/app.operations */ \"./src/store/states/app/app.operations.js\");\n\nvar appOperations = _interopRequireWildcard(_app);\n\nvar _app2 = __webpack_require__(/*! ../../../store/states/app */ \"./src/store/states/app/index.js\");\n\nvar _router = __webpack_require__(/*! ../../../store/states/router */ \"./src/store/states/router/index.js\");\n\nvar _drawerMenu = __webpack_require__(/*! ../../../settings/drawer/drawerMenu */ \"./src/settings/drawer/drawerMenu.js\");\n\nvar _Logo = __webpack_require__(/*! ../../UI/miscellaneous/Logo/Logo */ \"./src/components/UI/miscellaneous/Logo/Logo.js\");\n\nvar _Logo2 = _interopRequireDefault(_Logo);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst drawerWidth = 240;\n\nconst styles = theme => ({\n  root: {\n    flexGrow: 1\n  },\n  appFrame: {\n    height: '100%',\n    zIndex: 1,\n    position: 'relative',\n    display: 'flex',\n    width: '100%'\n  },\n  hide: {\n    display: 'none'\n  },\n  drawerPaper: {\n    position: 'fixed',\n    width: drawerWidth,\n    zIndex: 1100,\n    backgroundColor: '#f5f5f5',\n    paddingBottom: '1rem'\n\n  },\n  backdrop: {\n    backgroundColor: 'rgba(0,0,0,.6)',\n    position: 'fixed',\n    width: '100%',\n    height: '100%',\n    left: 0,\n    top: 0,\n    right: 0,\n    bottom: 0,\n    zIndex: 1099\n  },\n  drawerPaperHome: {\n    zIndex: 2,\n    paddingTop: '5rem',\n    position: 'fixed'\n  },\n  drawerHeader: _extends({\n    display: 'flex',\n    alignItems: 'center',\n    position: 'relative',\n    padding: '0 0 0 5rem',\n    height: '4rem'\n  }, theme.mixins.toolbar),\n  noTransition: {\n    transition: '-webkit- !important'\n  },\n  content: {\n    flexGrow: 1\n  },\n  'content-left': {\n    marginLeft: 0\n  },\n  'contentShift-left': {\n    marginLeft: drawerWidth\n  },\n  menuIcon: {\n    position: 'absolute',\n    left: '2rem',\n    top: '50%',\n    transform: 'translateY(-50%)'\n  },\n  logo: {\n    height: '3rem'\n  },\n  active: {\n    color: `${theme.palette.primary.light}`\n  },\n  backgroundActive: {\n    backgroundColor: 'rgba(0, 0, 0, 0.08)'\n  }\n});\n\nconst isActive = (activePath, path) => {\n  return activePath === path;\n};\n\nclass DrawerNav extends _react2.default.Component {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.persistentDrawer = (history, paths) => {\n      let currLocation = history.location.pathname;\n      return paths.includes(currLocation);\n    }, this.handleDrawerClose = () => {\n      this.props.toggleDrawer();\n    }, this.componentDidUpdate = prevProps => {\n      if (prevProps.location && prevProps.location.pathname !== this.props.location.pathname) {\n        if (!this.persistentDrawer(this.props.history, ['/', '/search/medias', '/history/medias', '/user/me'])) {\n          this.props.closeDrawer();\n        } else {\n          this.props.openDrawer();\n        }\n      }\n    }, _temp;\n  }\n\n  render() {\n    const { classes, theme, drawerOpened, history, pathName } = this.props;\n    const isPersistentDrawer = this.persistentDrawer(history, ['/', '/search/medias', '/history/medias', '/user/me']);\n    const drawer = _react2.default.createElement(\n      _Drawer2.default,\n      {\n        variant: 'persistent',\n        open: drawerOpened,\n        classes: {\n          paper: [classes.drawerPaper, isPersistentDrawer ? classes.drawerPaperHome + ' ' + classes.noTransition : ''].join(' ')\n        }\n      },\n      !isPersistentDrawer && _react2.default.createElement(\n        'div',\n        { className: classes.drawerHeader },\n        _react2.default.createElement(\n          _IconButton2.default,\n          { onClick: this.handleDrawerClose, className: classes.menuIcon },\n          _react2.default.createElement(_Menu2.default, null)\n        ),\n        _react2.default.createElement(\n          'span',\n          { className: classes.logo },\n          _react2.default.createElement(_Logo2.default, null)\n        )\n      ),\n      _react2.default.createElement(\n        _List2.default,\n        null,\n        _drawerMenu.primaryMenu.map(item => {\n          return _react2.default.createElement(\n            _reactRouterDom.Link,\n            { key: item.title, to: item.link },\n            _react2.default.createElement(\n              _ListItem2.default,\n              { button: true, className: isActive(pathName, item.link) ? classes.backgroundActive : '' },\n              item.icon && _react2.default.createElement(\n                _ListItemIcon2.default,\n                { className: isActive(pathName, item.link) ? classes.active : '' },\n                item.icon\n              ),\n              _react2.default.createElement(_ListItemText2.default, { primary: item.title })\n            )\n          );\n        })\n      ),\n      _react2.default.createElement(_Divider2.default, null),\n      _react2.default.createElement(\n        _List2.default,\n        { subheader: _react2.default.createElement(\n            _ListSubheader2.default,\n            { component: 'div' },\n            'Library'\n          ) },\n        _drawerMenu.secondaryMenu.map(item => {\n          return _react2.default.createElement(\n            _reactRouterDom.Link,\n            { key: item.title, to: item.link },\n            _react2.default.createElement(\n              _ListItem2.default,\n              { button: true, className: isActive(pathName, item.link) ? classes.backgroundActive : '' },\n              item.icon && _react2.default.createElement(\n                _ListItemIcon2.default,\n                { className: isActive(pathName, item.link) ? classes.active : '' },\n                item.icon\n              ),\n              _react2.default.createElement(_ListItemText2.default, { primary: item.title })\n            )\n          );\n        })\n      )\n    );\n\n    return _react2.default.createElement(\n      'div',\n      { className: classes.root },\n      _react2.default.createElement(\n        'div',\n        { className: classes.appFrame },\n        drawer,\n        !isPersistentDrawer && drawerOpened && _react2.default.createElement('div', { onClick: this.handleDrawerClose, className: classes.backdrop }),\n        _react2.default.createElement(\n          'main',\n          {\n            className: (0, _classnames2.default)(classes.content, isPersistentDrawer ? classes[`content-left`] : '', {\n              [classes.contentShift]: drawerOpened && isPersistentDrawer,\n              [classes[`contentShift-left`]]: drawerOpened && isPersistentDrawer\n            })\n          },\n          _react2.default.createElement('div', { className: classes.drawerHeader }),\n          this.props.children\n        )\n      )\n    );\n  }\n}\n\nconst mappedStateToProps = state => ({\n  drawerOpened: (0, _app2.selectDrawerOpened)(state.app),\n  pathName: (0, _router.selectPathname)(state.router)\n});\n\nconst boundActionCreators = dispatch => (0, _redux.bindActionCreators)(_extends({}, appOperations), dispatch);\n\nexports.default = (0, _reactRedux.connect)(mappedStateToProps, boundActionCreators)((0, _styles.withStyles)(styles, { withTheme: true })((0, _reactRouterDom.withRouter)(DrawerNav)));\n\n//# sourceURL=webpack:///./src/components/core/DrawerNav/DrawerNav.js?");

/***/ }),

/***/ "./src/components/core/MainNav/MainNav.js":
/*!************************************************!*\
  !*** ./src/components/core/MainNav/MainNav.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n//material ui\n\n//router\n\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _app = __webpack_require__(/*! ../../../store/states/app/app.operations */ \"./src/store/states/app/app.operations.js\");\n\nvar appOperations = _interopRequireWildcard(_app);\n\nvar _user = __webpack_require__(/*! ../../../store/states/user */ \"./src/store/states/user/index.js\");\n\nvar _router = __webpack_require__(/*! ../../../store/states/router */ \"./src/store/states/router/index.js\");\n\nvar _AppBar = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n\nvar _AppBar2 = _interopRequireDefault(_AppBar);\n\nvar _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n\nvar _Toolbar2 = _interopRequireDefault(_Toolbar);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _VideoCall = __webpack_require__(/*! @material-ui/icons/VideoCall */ \"@material-ui/icons/VideoCall\");\n\nvar _VideoCall2 = _interopRequireDefault(_VideoCall);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Menu = __webpack_require__(/*! @material-ui/core/Menu */ \"@material-ui/core/Menu\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nvar _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n\nvar _MenuItem2 = _interopRequireDefault(_MenuItem);\n\nvar _Menu3 = __webpack_require__(/*! @material-ui/icons/Menu */ \"@material-ui/icons/Menu\");\n\nvar _Menu4 = _interopRequireDefault(_Menu3);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _UserAvatarSmall = __webpack_require__(/*! ../../UI/miscellaneous/UserAvatarSmall/UserAvatarSmall */ \"./src/components/UI/miscellaneous/UserAvatarSmall/UserAvatarSmall.js\");\n\nvar _UserAvatarSmall2 = _interopRequireDefault(_UserAvatarSmall);\n\nvar _Search = __webpack_require__(/*! ./mainNav/Search */ \"./src/components/core/MainNav/mainNav/Search.js\");\n\nvar _Search2 = _interopRequireDefault(_Search);\n\nvar _Logo = __webpack_require__(/*! ../../UI/miscellaneous/Logo/Logo */ \"./src/components/UI/miscellaneous/Logo/Logo.js\");\n\nvar _Logo2 = _interopRequireDefault(_Logo);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n  root: {\n    flexGrow: 1,\n    backgroundColor: theme.palette.primary.light,\n    boxShadow: '1px 1px 3px 0px rgba(0,0,0,.3)',\n    position: 'fixed',\n    left: 0,\n    top: 0,\n    maxHeight: '4rem',\n    height: '4rem',\n    zIndex: 50\n  },\n  logo: {\n    height: '3rem'\n  },\n  flex: {\n    flex: 1\n  },\n  rootContainer: {\n    display: 'flex',\n    justifyContent: 'space-between',\n    color: '#fff',\n    paddingLeft: '5rem'\n  },\n  leftContainer: {\n    display: 'flex',\n    alignItems: 'center'\n  },\n  icon: {\n    marginRight: '.3rem'\n  },\n  menuIcon: {\n    position: 'absolute',\n    left: '2rem',\n    top: '50%',\n    transform: 'translateY(-50%)',\n    zIndex: 55,\n    color: '#ffffff'\n  },\n  avatarContainer: {\n    display: 'flex',\n    alignItems: 'center'\n  }\n});\n\nconst isActive = (activePath, path) => {\n  if (activePath == path) return { color: '#fff', fontWeight: 900, textShadow: '1px 1px 3px rgba(0,0,0,.3)' };else return { color: '#fff', textShadow: '1px 1px 3px rgba(0,0,0,.3)' };\n};\n\nclass MainNav extends _react.Component {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      anchorEl: null\n    }, this.handleOpenProfileDropdown = event => {\n      this.setState({ anchorEl: event.currentTarget });\n    }, this.handleCloseProfileDropdown = () => {\n      this.setState({ anchorEl: null });\n    }, this.openDrawerNav = () => {\n      this.props.toggleDrawer();\n    }, _temp;\n  }\n\n  render() {\n    const open = Boolean(this.state.anchorEl);\n    const { classes, user, pathname } = this.props;\n    return _react2.default.createElement(\n      _AppBar2.default,\n      { position: 'fixed', className: classes.root },\n      _react2.default.createElement(\n        _IconButton2.default,\n        { onClick: this.openDrawerNav, className: classes.menuIcon },\n        _react2.default.createElement(_Menu4.default, null)\n      ),\n      _react2.default.createElement(\n        _Toolbar2.default,\n        { className: classes.rootContainer },\n        _react2.default.createElement(\n          'div',\n          { className: classes.leftContainer },\n          _react2.default.createElement(\n            'span',\n            { className: classes.logo },\n            _react2.default.createElement(_Logo2.default, null)\n          ),\n          _react2.default.createElement(\n            'span',\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/add/media' },\n              _react2.default.createElement(\n                _Button2.default,\n                { style: isActive(pathname, \"/add/media\") },\n                _react2.default.createElement(_VideoCall2.default, { className: classes.icon }),\n                'Add media'\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(_Search2.default, null),\n        _react2.default.createElement(\n          'div',\n          { className: classes.avatarContainer },\n          user && user.token && _react2.default.createElement(\n            _react2.default.Fragment,\n            null,\n            _react2.default.createElement(\n              'div',\n              null,\n              'Hi, ',\n              _react2.default.createElement(\n                'strong',\n                null,\n                user.firstName\n              )\n            ),\n            _react2.default.createElement(_UserAvatarSmall2.default, { handleClick: this.handleOpenProfileDropdown, user: user }),\n            _react2.default.createElement(\n              _Menu2.default,\n              {\n                id: 'menu-appbar',\n                anchorEl: this.state.anchorEl,\n                anchorOrigin: {\n                  vertical: 'top',\n                  horizontal: 'right'\n                },\n                transformOrigin: {\n                  vertical: 'top',\n                  horizontal: 'right'\n                },\n                open: open,\n                onClose: this.handleCloseProfileDropdown },\n              _react2.default.createElement(\n                _MenuItem2.default,\n                { onClick: this.handleCloseProfileDropdown },\n                _react2.default.createElement(\n                  _reactRouterDom.Link,\n                  { to: '/user/me' },\n                  'My Profile'\n                )\n              ),\n              _react2.default.createElement(\n                _MenuItem2.default,\n                { onClick: this.handleCloseProfileDropdown },\n                'Logout'\n              )\n            )\n          ),\n          !user && _react2.default.createElement(\n            'span',\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/signup' },\n              _react2.default.createElement(\n                _Button2.default,\n                { style: isActive(pathname, \"/signup\") },\n                'Sign up'\n              )\n            ),\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/signin' },\n              _react2.default.createElement(\n                _Button2.default,\n                { style: isActive(pathname, \"/signin\") },\n                'Sign In'\n              )\n            )\n          )\n        )\n      )\n    );\n  }\n\n}\n\nconst mapStateToProps = state => {\n  return {\n    user: (0, _user.selectUser)(state.user),\n    pathname: (0, _router.selectPathname)(state.router)\n  };\n};\n\nconst boundActionCreators = dispatch => (0, _redux.bindActionCreators)(_extends({}, appOperations), dispatch);\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, boundActionCreators)((0, _reactRouterDom.withRouter)((0, _styles.withStyles)(styles)(MainNav)));\n\n//# sourceURL=webpack:///./src/components/core/MainNav/MainNav.js?");

/***/ }),

/***/ "./src/components/core/MainNav/mainNav/Search.js":
/*!*******************************************************!*\
  !*** ./src/components/core/MainNav/mainNav/Search.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _debounce2 = __webpack_require__(/*! lodash/debounce */ \"lodash/debounce\");\n\nvar _debounce3 = _interopRequireDefault(_debounce2);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Search = __webpack_require__(/*! @material-ui/icons/Search */ \"@material-ui/icons/Search\");\n\nvar _Search2 = _interopRequireDefault(_Search);\n\nvar _CircularProgress = __webpack_require__(/*! @material-ui/core/CircularProgress */ \"@material-ui/core/CircularProgress\");\n\nvar _CircularProgress2 = _interopRequireDefault(_CircularProgress);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _app = __webpack_require__(/*! ../../../../store/states/app/app.operations */ \"./src/store/states/app/app.operations.js\");\n\nvar appOperations = _interopRequireWildcard(_app);\n\nvar _media = __webpack_require__(/*! ../../../../store/states/media/media.operations */ \"./src/store/states/media/media.operations.js\");\n\nvar mediaOperations = _interopRequireWildcard(_media);\n\nvar _app2 = __webpack_require__(/*! ../../../../store/states/app/app.selectors */ \"./src/store/states/app/app.selectors.js\");\n\nvar _media2 = __webpack_require__(/*! ../../../../store/states/media/media.selectors */ \"./src/store/states/media/media.selectors.js\");\n\nvar _Suggestion = __webpack_require__(/*! ./search/Suggestion */ \"./src/components/core/MainNav/mainNav/search/Suggestion.js\");\n\nvar _Suggestion2 = _interopRequireDefault(_Suggestion);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n\troot: {\n\t\theight: '1.8rem',\n\t\tdisplay: 'flex',\n\t\talignItems: 'center'\n\t},\n\tinput: {\n\t\t'-webkit-appearance': 'none',\n\t\tboxShadow: 'none',\n\t\tborder: 'none',\n\t\theight: '100%',\n\t\tminWidth: '20rem',\n\t\tborderTopLeftRadius: 3,\n\t\tbackground: '#a4aaf8',\n\t\ttransition: '.3s',\n\t\tpaddingLeft: '5px',\n\t\tcolor: '#fff',\n\t\tboxSizing: 'border-box'\n\n\t},\n\tinputFocused: {\n\t\tminWidth: '23rem',\n\t\tbackgroundColor: '#fff',\n\t\toutline: 'none',\n\t\tborder: '1px solid rgba(50,97,195,.8)',\n\t\tcolor: '#000000'\n\t},\n\tinputGroup: {\n\t\theight: '1.8rem',\n\t\tposition: 'relative',\n\t\tmargin: 0,\n\t\tpadding: 0\n\t},\n\tsuggestions: {\n\t\tdisplay: 'flex',\n\t\tflexDirection: 'column',\n\t\tbackground: 'white',\n\t\tposition: 'absolute',\n\t\tleft: 0,\n\t\twidth: '100%',\n\t\tcolor: '#000000',\n\t\tfontSize: '.9rem',\n\t\tboxSizing: 'border-box'\n\t},\n\n\tinputAddon: {\n\t\theight: '100%',\n\t\tpaddingLeft: 3,\n\t\tborder: '1px solid #a4aaf8',\n\t\tborderLeft: 'none',\n\t\ttransition: '.2s',\n\t\tboxSizing: 'border-box',\n\t\tcursor: 'pointer',\n\t\t'&:hover': {\n\t\t\tbackgroundColor: '#696fb4'\n\t\t}\n\t},\n\tsearchIcon: {\n\t\theight: '100%'\n\t},\n\tdisabled: {\n\t\tcursor: 'not-allowed',\n\t\tpointerEvents: 'none',\n\t\topacity: '.7'\n\t}\n});\n\nclass Search extends _react.Component {\n\tconstructor(...args) {\n\t\tvar _temp;\n\n\t\treturn _temp = super(...args), this.state = {\n\t\t\tsearchText: '',\n\t\t\tselected: null,\n\t\t\topened: false,\n\t\t\tfocused: false\n\t\t}, this.componentDidMount = () => {\n\t\t\tdocument.addEventListener('click', this.closeAndUnfocusSearch);\n\t\t}, this.componentWillUnmount = () => {\n\t\t\tdocument.removeEventListener('click', this.closeAndUnfocusSearch);\n\t\t}, this.closeAndUnfocusSearch = () => {\n\t\t\tthis.setState({ opened: false, focused: false });\n\t\t}, this.handleChange = e => {\n\t\t\tthis.setState({ searchText: e.target.value, opened: true }, () => {\n\t\t\t\tif (!this.state.selected) {\n\t\t\t\t\tlet query = this.state.searchText;\n\t\t\t\t\tif (query.length > 0) {\n\t\t\t\t\t\tthis.autocompleteSearchDebounced(query);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\t\t}, this.autocompleteSearch = query => {\n\t\t\tthis.props.getSuggestions(query);\n\t\t}, this.setInputRef = element => {\n\t\t\tthis.input = element;\n\t\t}, this.selectedHandler = text => {\n\t\t\tthis.setState({ searchText: text });\n\t\t}, this.searchSelectedMedia = () => {\n\t\t\tif (!this.props.mediaIsProcessing) {\n\t\t\t\tlet { searchText } = this.state;\n\t\t\t\tthis.props.searchMedia(searchText);\n\t\t\t}\n\t\t}, this.setFocus = e => {\n\t\t\te.nativeEvent.stopImmediatePropagation();\n\t\t\tif (!this.state.focused) {\n\t\t\t\tthis.setState({ focused: true });\n\t\t\t}\n\t\t}, this.setOpened = e => {\n\t\t\te.nativeEvent.stopImmediatePropagation();\n\t\t\tif (!this.state.opened) {\n\t\t\t\tthis.setState({ opened: true });\n\t\t\t}\n\t\t}, this.autocompleteSearchDebounced = (0, _debounce3.default)(this.autocompleteSearch, 2000), _temp;\n\t}\n\n\trender() {\n\t\tconst { classes, suggestions, suggestionsProcessing, mediaIsProcessing } = this.props;\n\t\tconst { searchText, selected, opened } = this.state;\n\t\treturn _react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: classes.root },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: classes.inputGroup },\n\t\t\t\t_react2.default.createElement('input', { type: 'text', onFocus: this.setFocus, onClick: this.setOpened, ref: this.setInputRef, className: [classes.input, this.state.focused ? classes.inputFocused : ''].join(' '), value: this.state.searchText, onChange: this.handleChange }),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: classes.suggestions },\n\t\t\t\t\tsuggestionsProcessing && _react2.default.createElement(_CircularProgress2.default, { style: { margin: '5px auto' }, size: 25 }),\n\t\t\t\t\tsuggestions.length && !selected && opened ? _react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ style: { padding: '10px 0' } },\n\t\t\t\t\t\tsuggestions.map(item => {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_Suggestion2.default, { selected: this.selectedHandler, item: item.text, searchText: searchText, key: item._id });\n\t\t\t\t\t\t})\n\t\t\t\t\t) : null\n\t\t\t\t)\n\t\t\t),\n\t\t\t_react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: [classes.inputAddon, mediaIsProcessing ? classes.disabled : ''].join(' '), onClick: this.searchSelectedMedia },\n\t\t\t\t_react2.default.createElement(_Search2.default, { className: classes.searchIcon })\n\t\t\t)\n\t\t);\n\t}\n}\n\nconst mappedStateToProps = state => ({\n\tsuggestions: (0, _app2.selectData)(state.app, 'suggestions'),\n\tsuggestionsProcessing: (0, _app2.selectIsProcessing)(state.app, 'suggestions'),\n\tmediaIsProcessing: (0, _media2.selectIsProcessing)(state.media.medias, 'all')\n});\n\nconst boundActionCreators = dispatch => (0, _redux.bindActionCreators)(_extends({}, appOperations, mediaOperations), dispatch);\n\nexports.default = (0, _reactRedux.connect)(mappedStateToProps, boundActionCreators)((0, _styles.withStyles)(styles)(Search));\n\n//# sourceURL=webpack:///./src/components/core/MainNav/mainNav/Search.js?");

/***/ }),

/***/ "./src/components/core/MainNav/mainNav/search/Suggestion.js":
/*!******************************************************************!*\
  !*** ./src/components/core/MainNav/mainNav/search/Suggestion.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst styles = theme => ({\n\tsuggestion: {\n\t\tpadding: '4px 15px',\n\t\ttransition: '.2s',\n\t\t'&:hover': {\n\t\t\tbackgroundColor: theme.palette.primary.lightGrey,\n\t\t\tcursor: 'pointer'\n\t\t}\n\t}\n});\n\nconst match = (item, query) => {\n\tlet matches = [];\n\tlet lastPoint = 0;\n\titem = item.toLowerCase();\n\tquery = query.toLowerCase();\n\twhile (item.indexOf(query, lastPoint) != -1) {\n\t\tlet start = item.indexOf(query, lastPoint);\n\t\tlet end = start + query.length;\n\t\tlastPoint = end;\n\t\tmatches.push([start, end]);\n\t}\n\treturn matches;\n};\n\nconst parse = (text, matches) => {\n\tlet parsed = [];\n\tif (matches.length === 0) {\n\t\tparsed.push({ text, highlight: false });\n\t} else {\n\t\tmatches.forEach((match, i, arr) => {\n\t\t\tlet start = match[0];\n\t\t\tlet end = match[1];\n\t\t\tlet sliced = text.slice(start, end);\n\t\t\tif (i === 0 && start !== 0) {\n\t\t\t\tparsed.push({\n\t\t\t\t\ttext: text.slice(0, start),\n\t\t\t\t\thighlight: false\n\t\t\t\t});\n\t\t\t}\n\t\t\tparsed.push({ text: sliced, highlight: true });\n\n\t\t\tlet isNextExist = !!arr[i + 1];\n\t\t\tif (isNextExist && end != arr[i + 1][0]) {\n\t\t\t\tlet sliced = text.slice(end, arr[i + 1][0]);\n\t\t\t\tparsed.push({\n\t\t\t\t\ttext: sliced,\n\t\t\t\t\thighlight: false\n\t\t\t\t});\n\t\t\t} else if (!isNextExist) {\n\t\t\t\t//means we need a tail here\n\t\t\t\tparsed.push({\n\t\t\t\t\ttext: text.slice(end, text.length),\n\t\t\t\t\thighlight: false\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t}\n\treturn parsed;\n};\n\nclass Suggestion extends _react.Component {\n\tconstructor(...args) {\n\t\tvar _temp;\n\n\t\treturn _temp = super(...args), this.state = {\n\t\t\tparsed: []\n\t\t}, this.handleClick = e => {\n\t\t\te.nativeEvent.stopImmediatePropagation();\n\t\t\tconst { itemId, item } = this.props;\n\t\t\tthis.props.selected(item);\n\t\t}, _temp;\n\t}\n\n\trender() {\n\t\tconst { classes } = this.props;\n\n\t\treturn _react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: classes.suggestion, onClick: this.handleClick },\n\t\t\tthis.state.parsed.map((item, i) => {\n\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{ key: i, style: { fontWeight: item.highlight ? 700 : 400,\n\t\t\t\t\t\t\tbackground: item.highlight ? 'yellow' : 'transparent' } },\n\t\t\t\t\titem.text\n\t\t\t\t);\n\t\t\t})\n\t\t);\n\t}\n}\n\nSuggestion.getDerivedStateFromProps = (nextProps, prevState) => {\n\tlet matches = match(nextProps.item, nextProps.searchText);\n\tlet parsed = parse(nextProps.item, matches);\n\treturn { parsed };\n};\n\nexports.default = (0, _styles.withStyles)(styles)(Suggestion);\n\n//# sourceURL=webpack:///./src/components/core/MainNav/mainNav/search/Suggestion.js?");

/***/ }),

/***/ "./src/components/core/Notifications/Snackbar/Snackbar.js":
/*!****************************************************************!*\
  !*** ./src/components/core/Notifications/Snackbar/Snackbar.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _classnames = __webpack_require__(/*! classnames */ \"classnames\");\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _CheckCircle = __webpack_require__(/*! @material-ui/icons/CheckCircle */ \"@material-ui/icons/CheckCircle\");\n\nvar _CheckCircle2 = _interopRequireDefault(_CheckCircle);\n\nvar _Error = __webpack_require__(/*! @material-ui/icons/Error */ \"@material-ui/icons/Error\");\n\nvar _Error2 = _interopRequireDefault(_Error);\n\nvar _Info = __webpack_require__(/*! @material-ui/icons/Info */ \"@material-ui/icons/Info\");\n\nvar _Info2 = _interopRequireDefault(_Info);\n\nvar _Close = __webpack_require__(/*! @material-ui/icons/Close */ \"@material-ui/icons/Close\");\n\nvar _Close2 = _interopRequireDefault(_Close);\n\nvar _amber = __webpack_require__(/*! @material-ui/core/colors/amber */ \"@material-ui/core/colors/amber\");\n\nvar _amber2 = _interopRequireDefault(_amber);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Snackbar = __webpack_require__(/*! @material-ui/core/Snackbar */ \"@material-ui/core/Snackbar\");\n\nvar _Snackbar2 = _interopRequireDefault(_Snackbar);\n\nvar _SnackbarContent = __webpack_require__(/*! @material-ui/core/SnackbarContent */ \"@material-ui/core/SnackbarContent\");\n\nvar _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);\n\nvar _Warning = __webpack_require__(/*! @material-ui/icons/Warning */ \"@material-ui/icons/Warning\");\n\nvar _Warning2 = _interopRequireDefault(_Warning);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst variantIcon = {\n  success: _CheckCircle2.default,\n  warning: _Warning2.default,\n  error: _Error2.default,\n  info: _Info2.default\n};\n\nconst styles = theme => ({\n  success: {\n    color: theme.palette.primary.success\n  },\n  error: {\n    color: theme.palette.primary.error\n  },\n  info: {\n    color: theme.palette.primary.light\n  },\n  warning: {\n    color: _amber2.default[700]\n  },\n  icon: {\n    fontSize: 20\n  },\n  iconVariant: {\n    opacity: 0.9,\n    marginRight: theme.spacing.unit\n  },\n  message: {\n    display: 'flex',\n    alignItems: 'center'\n  }\n});\n\nconst snackbar = props => {\n  const { classes, className, message, onClose, variant = \"success\", open = false, duration = 4000 } = props;\n  const Icon = variantIcon[variant];\n  return _react2.default.createElement(\n    _Snackbar2.default,\n    {\n      open: open,\n      onClose: onClose,\n      autoHideDuration: duration\n    },\n    _react2.default.createElement(_SnackbarContent2.default, {\n      style: { bakgroundColor: 'rgba(0,0,0,.7)' },\n      className: (0, _classnames2.default)(classes[variant], className),\n      'aria-describedby': 'client-snackbar',\n      message: _react2.default.createElement(\n        'span',\n        { id: 'client-snackbar', className: classes.message },\n        _react2.default.createElement(Icon, { className: (0, _classnames2.default)(classes.icon, classes.iconVariant) }),\n        message\n      ),\n      action: [_react2.default.createElement(\n        _IconButton2.default,\n        {\n          key: 'close',\n          'aria-label': 'Close',\n          color: 'inherit',\n          className: classes.close,\n          onClick: onClose\n        },\n        _react2.default.createElement(_Close2.default, { className: classes.icon })\n      )]\n    })\n  );\n};\n\nexports.default = (0, _styles.withStyles)(styles)(snackbar);\n\n//# sourceURL=webpack:///./src/components/core/Notifications/Snackbar/Snackbar.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"body{\\r\\n\\tmargin:0;\\r\\n\\tpadding:0;\\r\\n\\tfont-family: 'Open Sans',sans-serif;\\r\\n\\toverflow-x: hidden;\\r\\n\\tbackground-color: #fafafa;\\r\\n\\r\\n}\\r\\n\\r\\na{\\r\\n\\ttext-decoration: none;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/pages/home/HomeSkeleton/HomeSkeleton.js":
/*!*****************************************************!*\
  !*** ./src/pages/home/HomeSkeleton/HomeSkeleton.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _VerticalMediaCard = __webpack_require__(/*! ../../../components/UI/skeletons/VerticalMediaCard */ \"./src/components/UI/skeletons/VerticalMediaCard.js\");\n\nvar _VerticalMediaCard2 = _interopRequireDefault(_VerticalMediaCard);\n\nvar _HorizontalMediaCard = __webpack_require__(/*! ../../../components/UI/skeletons/HorizontalMediaCard */ \"./src/components/UI/skeletons/HorizontalMediaCard.js\");\n\nvar _HorizontalMediaCard2 = _interopRequireDefault(_HorizontalMediaCard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst homeSkeleton = props => {\n\tconst { columns = 6, rows = 2, cellHeight = 230 } = props;\n\tconst totalTilesArray = new Array(columns * rows).fill(1);\n\treturn _react2.default.createElement(\n\t\t_Grid2.default,\n\t\t{ container: true, spacing: 0 },\n\t\t_react2.default.createElement(\n\t\t\t_Grid2.default,\n\t\t\t{ item: true, sm: 12 },\n\t\t\t_react2.default.createElement(\n\t\t\t\t_Grid2.default,\n\t\t\t\t{ container: true, spacing: 8 },\n\t\t\t\ttotalTilesArray.map((_, i) => {\n\n\t\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t\t_Grid2.default,\n\t\t\t\t\t\t{ item: true, sm: 2, key: i, style: { height: cellHeight } },\n\t\t\t\t\t\t_react2.default.createElement(_VerticalMediaCard2.default, null)\n\t\t\t\t\t);\n\t\t\t\t})\n\t\t\t)\n\t\t)\n\t);\n};\n\nexports.default = homeSkeleton;\n\n//# sourceURL=webpack:///./src/pages/home/HomeSkeleton/HomeSkeleton.js?");

/***/ }),

/***/ "./src/routes/RootRouter/RootRouter.js":
/*!*********************************************!*\
  !*** ./src/routes/RootRouter/RootRouter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _routeConfig = __webpack_require__(/*! ../routeConfig */ \"./src/routes/routeConfig.js\");\n\nvar _routeConfig2 = _interopRequireDefault(_routeConfig);\n\nvar _PrivateRoute = __webpack_require__(/*! ../variations/PrivateRoute/PrivateRoute */ \"./src/routes/variations/PrivateRoute/PrivateRoute.js\");\n\nvar _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst RootRouter = ({ route }) => {\n\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\tnull,\n\t\t(0, _reactRouterConfig.renderRoutes)(_routeConfig2.default)\n\t);\n};\n\nexports.default = RootRouter;\n\n//# sourceURL=webpack:///./src/routes/RootRouter/RootRouter.js?");

/***/ }),

/***/ "./src/routes/routeConfig.js":
/*!***********************************!*\
  !*** ./src/routes/routeConfig.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.convertCustomRouteConfig = undefined;\n\nvar _reactLoadable = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nvar _media = __webpack_require__(/*! ../store/states/media/media.api */ \"./src/store/states/media/media.api.js\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HomeSkeleton = __webpack_require__(/*! ../pages/home/HomeSkeleton/HomeSkeleton */ \"./src/pages/home/HomeSkeleton/HomeSkeleton.js\");\n\nvar _HomeSkeleton2 = _interopRequireDefault(_HomeSkeleton);\n\nvar _media2 = __webpack_require__(/*! ../store/states/media/media.actions */ \"./src/store/states/media/media.actions.js\");\n\nvar _media3 = _interopRequireDefault(_media2);\n\nvar _pMinDelay = __webpack_require__(/*! p-min-delay */ \"p-min-delay\");\n\nvar _pMinDelay2 = _interopRequireDefault(_pMinDelay);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst delay = promise => {\n  if (typeof window === 'undefined') return promise;\n  return (0, _pMinDelay2.default)(promise, 1500);\n};\n\nconst routes = [{\n  path: '/',\n  exact: true,\n  component: (0, _reactLoadable2.default)({ loader: () => delay(Promise.all(/*! import() */[__webpack_require__.e(12), __webpack_require__.e(0)]).then(__webpack_require__.t.bind(null, /*! ../pages/Home */ \"./src/pages/Home.js\", 7))),\n    loading() {\n      return _react2.default.createElement(_HomeSkeleton2.default, null);\n    } }),\n  loadData: () => (0, _media.listPopular)(),\n  reduxAction: data => _media3.default.listPopularMediaSuccess(data)\n\n}, {\n  path: '/signup',\n  component: (0, _reactLoadable2.default)({ loader: () => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../pages/Signup */ \"./src/pages/Signup.js\", 7)), loading() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Loading...'\n      );\n    } })\n}, {\n  path: '/signin',\n  component: (0, _reactLoadable2.default)({ loader: () => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! ../pages/Signin */ \"./src/pages/Signin.js\", 7)), loading() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Loading...'\n      );\n    } })\n}, {\n  path: '/add/media',\n  component: (0, _reactLoadable2.default)({ loader: () => Promise.all(/*! import() */[__webpack_require__.e(10), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../pages/NewMedia */ \"./src/pages/NewMedia.js\", 7)), loading() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Loading...'\n      );\n    } })\n}, {\n  path: '/search/medias',\n  component: (0, _reactLoadable2.default)({ loader: () => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! ../pages/SearchPage */ \"./src/pages/SearchPage.js\", 7)), loading() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Loading...'\n      );\n    } })\n}, {\n  path: '/history/medias',\n  component: (0, _reactLoadable2.default)({ loader: () => Promise.all(/*! import() */[__webpack_require__.e(11), __webpack_require__.e(5)]).then(__webpack_require__.t.bind(null, /*! ../pages/History */ \"./src/pages/History.js\", 7)), loading() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Loading...'\n      );\n    } })\n}, {\n  path: '/watchlater/medias',\n  component: (0, _reactLoadable2.default)({ loader: () => Promise.all(/*! import() */[__webpack_require__.e(11), __webpack_require__.e(6)]).then(__webpack_require__.t.bind(null, /*! ../pages/WatchLater */ \"./src/pages/WatchLater.js\", 7)), loading() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Loading...'\n      );\n    } })\n}, {\n  path: '/media/edit/:mediaId',\n  component: (0, _reactLoadable2.default)({\n    loader: () => Promise.all(/*! import() */[__webpack_require__.e(10), __webpack_require__.e(7)]).then(__webpack_require__.t.bind(null, /*! ../pages/EditMedia */ \"./src/pages/EditMedia.js\", 7)),\n    loading() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Loading...'\n      );\n    } })\n}, {\n  path: '/media/:mediaId',\n  component: (0, _reactLoadable2.default)({ loader: () => __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.t.bind(null, /*! ../pages/SingleMedia */ \"./src/pages/SingleMedia.js\", 7)), loading() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Loading...'\n      );\n    } }),\n  loadData: params => (0, _media.read)(params),\n  reduxAction: data => _media3.default.readMediaSuccess(data)\n}, {\n  path: '/user/me',\n  component: (0, _reactLoadable2.default)({ loader: () => Promise.all(/*! import() */[__webpack_require__.e(12), __webpack_require__.e(9)]).then(__webpack_require__.t.bind(null, /*! ../pages/Profile */ \"./src/pages/Profile.js\", 7)), loading() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Loading...'\n      );\n    } })\n}];\n\nconst convertCustomRouteConfig = exports.convertCustomRouteConfig = (routes, parentRoute) => {\n  return routes.map(route => {\n    const pathResult = typeof route.path === 'function' ? route.path(parentRoute || '') : `${parentRoute || ''}/${route.path}`;\n    return {\n      path: pathResult.replace('//', '/'),\n      component: route.component,\n      exact: route.exact,\n      routes: route.routes ? convertCustomRouteConfig(route.routes, pathResult) : [],\n      loadData: route.loadData,\n      reduxAction: route.reduxAction\n    };\n  });\n};\n\nexports.default = convertCustomRouteConfig(routes);\n\n//# sourceURL=webpack:///./src/routes/routeConfig.js?");

/***/ }),

/***/ "./src/routes/variations/PrivateRoute/PrivateRoute.js":
/*!************************************************************!*\
  !*** ./src/routes/variations/PrivateRoute/PrivateRoute.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _user = __webpack_require__(/*! ../../../store/states/user */ \"./src/store/states/user/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nconst PrivateRoute = (_ref) => {\n  let { component: Component } = _ref,\n      rest = _objectWithoutProperties(_ref, ['component']);\n\n  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: props => rest.isAuthenticated ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {\n        pathname: '/signin',\n        state: { from: props.location }\n      } }) }));\n};\n\nconst mappedStateToProps = state => ({\n  isAuthenticated: (0, _user.selectIsAuthenticated)(state.user)\n});\n\nexports.default = (0, _reactRedux.connect)(mappedStateToProps)(PrivateRoute);\n\n//# sourceURL=webpack:///./src/routes/variations/PrivateRoute/PrivateRoute.js?");

/***/ }),

/***/ "./src/settings/drawer/drawerMenu.js":
/*!*******************************************!*\
  !*** ./src/settings/drawer/drawerMenu.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.secondaryMenu = exports.primaryMenu = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Home = __webpack_require__(/*! @material-ui/icons/Home */ \"@material-ui/icons/Home\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Whatshot = __webpack_require__(/*! @material-ui/icons/Whatshot */ \"@material-ui/icons/Whatshot\");\n\nvar _Whatshot2 = _interopRequireDefault(_Whatshot);\n\nvar _Subscriptions = __webpack_require__(/*! @material-ui/icons/Subscriptions */ \"@material-ui/icons/Subscriptions\");\n\nvar _Subscriptions2 = _interopRequireDefault(_Subscriptions);\n\nvar _History = __webpack_require__(/*! @material-ui/icons/History */ \"@material-ui/icons/History\");\n\nvar _History2 = _interopRequireDefault(_History);\n\nvar _WatchLater = __webpack_require__(/*! @material-ui/icons/WatchLater */ \"@material-ui/icons/WatchLater\");\n\nvar _WatchLater2 = _interopRequireDefault(_WatchLater);\n\nvar _Favorite = __webpack_require__(/*! @material-ui/icons/Favorite */ \"@material-ui/icons/Favorite\");\n\nvar _Favorite2 = _interopRequireDefault(_Favorite);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst primaryMenu = [{\n\ttitle: 'Home',\n\tlink: '/',\n\ticon: _react2.default.createElement(_Home2.default, null)\n}, {\n\ttitle: 'Popular',\n\tlink: '/popular',\n\ticon: _react2.default.createElement(_Whatshot2.default, null)\n}, {\n\ttitle: 'Subscriptions',\n\tlink: '/subscriptions',\n\ticon: _react2.default.createElement(_Subscriptions2.default, null)\n}];\n\nconst secondaryMenu = [{\n\ttitle: 'History',\n\tlink: '/history/medias',\n\ticon: _react2.default.createElement(_History2.default, null)\n}, {\n\ttitle: 'Watch later',\n\tlink: '/watchlater/medias',\n\ticon: _react2.default.createElement(_WatchLater2.default, null)\n}, {\n\ttitle: 'Liked',\n\tlink: '/liked',\n\ticon: _react2.default.createElement(_Favorite2.default, null)\n}];\n\nexports.primaryMenu = primaryMenu;\nexports.secondaryMenu = secondaryMenu;\n\n//# sourceURL=webpack:///./src/settings/drawer/drawerMenu.js?");

/***/ }),

/***/ "./src/store/states/app/app.actions.js":
/*!*********************************************!*\
  !*** ./src/store/states/app/app.actions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _app = __webpack_require__(/*! ./app.types */ \"./src/store/states/app/app.types.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _createAction = __webpack_require__(/*! ../utils/create-action */ \"./src/store/states/utils/create-action.js\");\n\nvar _createAction2 = _interopRequireDefault(_createAction);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst searchSuggestionsRequest = (0, _createAction2.default)(_app2.default.SEARCH_SUGGESTIONS_REQUEST);\nconst searchSuggestionsSuccess = (0, _createAction2.default)(_app2.default.SEARCH_SUGGESTIONS_SUCCESS, 'payload');\nconst searchSuggestionsError = (0, _createAction2.default)(_app2.default.SEARCH_SUGGESTIONS_ERROR, 'payload');\n\nconst openDrawer = (0, _createAction2.default)(_app2.default.OPEN_DRAWER);\nconst closeDrawer = (0, _createAction2.default)(_app2.default.CLOSE_DRAWER);\n\nconst showSnackbar = (0, _createAction2.default)(_app2.default.SHOW_SNACKBAR, 'payload');\nconst hideSnackbar = (0, _createAction2.default)(_app2.default.HIDE_SNACKBAR);\n\nexports.default = {\n\tsearchSuggestionsRequest, searchSuggestionsSuccess, searchSuggestionsError,\n\topenDrawer, closeDrawer,\n\tshowSnackbar, hideSnackbar\n};\n\n//# sourceURL=webpack:///./src/store/states/app/app.actions.js?");

/***/ }),

/***/ "./src/store/states/app/app.api.js":
/*!*****************************************!*\
  !*** ./src/store/states/app/app.api.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getSearchSuggestions = undefined;\n\nvar _queryString = __webpack_require__(/*! query-string */ \"query-string\");\n\nvar _queryString2 = _interopRequireDefault(_queryString);\n\nvar _app = __webpack_require__(/*! ./app.constants */ \"./src/store/states/app/app.constants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction handleErrors(response) {\n  if (response.ok || response.statusCode == 200) {\n    return response;\n  } else {\n    return response.json().then(err => {\n      throw new Error(`Error ${err.status}: ${err.message}`);\n    });\n  }\n}\n\nconst getSearchSuggestions = params => {\n  let query = _queryString2.default.stringify(params);\n  return fetch(`${_app.endpoints.GET_SUGGESTIONS}?${query}`, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json'\n    }\n  }).then(handleErrors).then(res => res.json());\n};\n\nexports.getSearchSuggestions = getSearchSuggestions;\n\n//# sourceURL=webpack:///./src/store/states/app/app.api.js?");

/***/ }),

/***/ "./src/store/states/app/app.constants.js":
/*!***********************************************!*\
  !*** ./src/store/states/app/app.constants.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nconst endpoints = exports.endpoints = {\n\tGET_SUGGESTIONS: '/api/media/suggestions'\n};\n\n//# sourceURL=webpack:///./src/store/states/app/app.constants.js?");

/***/ }),

/***/ "./src/store/states/app/app.operations.js":
/*!************************************************!*\
  !*** ./src/store/states/app/app.operations.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.hideSnackbar = exports.showSnackbar = exports.openDrawer = exports.closeDrawer = exports.toggleDrawer = exports.getSuggestions = undefined;\n\nvar _app = __webpack_require__(/*! ./app.api */ \"./src/store/states/app/app.api.js\");\n\nvar _app2 = __webpack_require__(/*! ./app.actions */ \"./src/store/states/app/app.actions.js\");\n\nvar _app3 = _interopRequireDefault(_app2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst getSuggestions = input => {\n\treturn dispatch => {\n\t\tdispatch(_app3.default.searchSuggestionsRequest());\n\t\t(0, _app.getSearchSuggestions)({ input }).then(response => {\n\t\t\tlet suggestions = response.data.suggestions;\n\t\t\tdispatch(_app3.default.searchSuggestionsSuccess(suggestions));\n\t\t}).catch(error => {\n\t\t\tdispatch(_app3.default.searchSuggestionsError(error.message));\n\t\t});\n\t};\n};\n\nconst toggleDrawer = () => {\n\treturn (dispatch, getState) => {\n\t\tlet opened = getState().app.data.drawerOpened;\n\t\tif (opened) {\n\t\t\tdispatch(_app3.default.closeDrawer());\n\t\t} else {\n\t\t\tdispatch(_app3.default.openDrawer());\n\t\t}\n\t};\n};\n\nconst closeDrawer = () => {\n\treturn dispatch => {\n\t\tdispatch(_app3.default.closeDrawer());\n\t};\n};\n\nconst openDrawer = () => {\n\treturn dispatch => {\n\t\tdispatch(_app3.default.openDrawer());\n\t};\n};\n\nconst showSnackbar = ({ message, variant }) => {\n\treturn dispatch => {\n\t\tdispatch(_app3.default.showSnackbar({ message, variant }));\n\t};\n};\n\nconst hideSnackbar = () => {\n\treturn dispatch => {\n\t\tdispatch(_app3.default.hideSnackbar());\n\t};\n};\n\nexports.getSuggestions = getSuggestions;\nexports.toggleDrawer = toggleDrawer;\nexports.closeDrawer = closeDrawer;\nexports.openDrawer = openDrawer;\nexports.showSnackbar = showSnackbar;\nexports.hideSnackbar = hideSnackbar;\n\n//# sourceURL=webpack:///./src/store/states/app/app.operations.js?");

/***/ }),

/***/ "./src/store/states/app/app.reducer.js":
/*!*********************************************!*\
  !*** ./src/store/states/app/app.reducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _app = __webpack_require__(/*! ./app.types */ \"./src/store/states/app/app.types.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst initialState = {\n\tprocessing: {\n\t\tsuggestions: false\n\t},\n\tisError: {\n\t\tsuggestions: false\n\t},\n\tdata: {\n\t\tsuggestions: {\n\t\t\tallIds: [],\n\t\t\tbyId: {}\n\t\t},\n\t\tdrawerOpened: true,\n\t\tsnackbar: {\n\t\t\topened: false,\n\t\t\tmessage: null,\n\t\t\tvariant: null\n\t\t}\n\t}\n};\n\nconst appReducer = (state = initialState, action) => {\n\tconst { payload, type } = action;\n\tswitch (type) {\n\t\tcase _app2.default.SEARCH_SUGGESTIONS_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tsuggestions: true\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tsuggestions: null\n\t\t\t\t}),\n\t\t\t\tdata: _extends({}, state.data, {\n\t\t\t\t\tsuggestions: null\n\t\t\t\t})\n\t\t\t});\n\t\tcase _app2.default.SEARCH_SUGGESTIONS_SUCCESS:\n\t\t\tlet byIds = {};\n\t\t\tpayload.forEach(item => {\n\t\t\t\tbyIds[item._id] = item;\n\t\t\t});\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tsuggestions: false\n\t\t\t\t}),\n\t\t\t\tdata: _extends({}, state.data, {\n\t\t\t\t\tsuggestions: {\n\t\t\t\t\t\tallIds: Object.keys(byIds),\n\t\t\t\t\t\tbyId: byIds\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t});\n\t\tcase _app2.default.SEARCH_SUGGESTIONS_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tsuggestions: false\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tsuggestions: payload\n\t\t\t\t}),\n\t\t\t\tdata: _extends({}, state.data, {\n\t\t\t\t\tsuggestions: null\n\t\t\t\t})\n\t\t\t});\n\t\tcase _app2.default.OPEN_DRAWER:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tdata: _extends({}, state.data, {\n\t\t\t\t\tdrawerOpened: true\n\t\t\t\t})\n\t\t\t});\n\t\tcase _app2.default.CLOSE_DRAWER:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tdata: _extends({}, state.data, {\n\t\t\t\t\tdrawerOpened: false\n\t\t\t\t})\n\t\t\t});\n\t\tcase _app2.default.SHOW_SNACKBAR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tdata: _extends({}, state.data, {\n\t\t\t\t\tsnackbar: {\n\t\t\t\t\t\topened: true,\n\t\t\t\t\t\tmessage: payload.message,\n\t\t\t\t\t\tvariant: payload.variant\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t});\n\t\tcase _app2.default.HIDE_SNACKBAR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tdata: _extends({}, state.data, {\n\t\t\t\t\tsnackbar: _extends({}, state.data.snackbar, {\n\t\t\t\t\t\topened: false,\n\t\t\t\t\t\tmessage: null\n\n\t\t\t\t\t})\n\t\t\t\t})\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = appReducer;\n\n//# sourceURL=webpack:///./src/store/states/app/app.reducer.js?");

/***/ }),

/***/ "./src/store/states/app/app.selectors.js":
/*!***********************************************!*\
  !*** ./src/store/states/app/app.selectors.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n\nconst selectData = (state, key) => {\n\tif (!state.data || !state.data[key]) return [];\n\tlet byId = state.data[key].byId;\n\tlet data = Object.values(byId);\n\treturn data;\n};\n\nconst selectSliceOfData = (state, key) => {\n\treturn state.data[key];\n};\n\nconst selectIsProcessing = (state, key) => state.processing[key];\nconst selectErrorText = (state, key) => state.isError[key] ? state.isError[key] : null;\n\nconst selectDrawerOpened = state => state.data ? state.data.drawerOpened : false;\n\nexports.selectData = selectData;\nexports.selectIsProcessing = selectIsProcessing;\nexports.selectErrorText = selectErrorText;\nexports.selectSliceOfData = selectSliceOfData;\nexports.selectDrawerOpened = selectDrawerOpened;\n\n//# sourceURL=webpack:///./src/store/states/app/app.selectors.js?");

/***/ }),

/***/ "./src/store/states/app/app.types.js":
/*!*******************************************!*\
  !*** ./src/store/states/app/app.types.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nconst SEARCH_SUGGESTIONS_REQUEST = 'Main nav search/SEARCH_SUGGESTIONS_REQUEST';\nconst SEARCH_SUGGESTIONS_SUCCESS = 'Api response/SEARCH_SUGGESTIONS_SUCCESS';\nconst SEARCH_SUGGESTIONS_ERROR = 'Api response/SEARCH_SUGGESTIONS_ERROR';\n\nconst OPEN_DRAWER = 'Main nav/OPEN_DRAWER';\nconst CLOSE_DRAWER = 'Drawer nav/CLOSE_DRAWER';\n\nconst SHOW_SNACKBAR = 'App page/SHOW_SNACKBAR';\nconst HIDE_SNACKBAR = 'App page/HIDE_SNACKBAR';\n\nexports.default = {\n\tSEARCH_SUGGESTIONS_REQUEST, SEARCH_SUGGESTIONS_SUCCESS, SEARCH_SUGGESTIONS_ERROR,\n\n\tOPEN_DRAWER, CLOSE_DRAWER,\n\tSHOW_SNACKBAR, HIDE_SNACKBAR\n};\n\n//# sourceURL=webpack:///./src/store/states/app/app.types.js?");

/***/ }),

/***/ "./src/store/states/app/index.js":
/*!***************************************!*\
  !*** ./src/store/states/app/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.selectors */ \"./src/store/states/app/app.selectors.js\");\n\nObject.keys(_app).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _app[key];\n    }\n  });\n});\n\nvar _app2 = __webpack_require__(/*! ./app.operations */ \"./src/store/states/app/app.operations.js\");\n\nObject.keys(_app2).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _app2[key];\n    }\n  });\n});\n\nvar _app3 = __webpack_require__(/*! ./app.reducer */ \"./src/store/states/app/app.reducer.js\");\n\nvar _app4 = _interopRequireDefault(_app3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _app4.default;\n\n//# sourceURL=webpack:///./src/store/states/app/index.js?");

/***/ }),

/***/ "./src/store/states/channel/channel.actions.js":
/*!*****************************************************!*\
  !*** ./src/store/states/channel/channel.actions.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createAction = __webpack_require__(/*! ../utils/create-action */ \"./src/store/states/utils/create-action.js\");\n\nvar _createAction2 = _interopRequireDefault(_createAction);\n\nvar _channel = __webpack_require__(/*! ./channel.types */ \"./src/store/states/channel/channel.types.js\");\n\nvar _channel2 = _interopRequireDefault(_channel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//login\nconst getChannelsTopicsRequest = (0, _createAction2.default)(_channel2.default.GET_CHANNELS_TOPICS_REQUEST);\nconst getChannelsTopicsSuccess = (0, _createAction2.default)(_channel2.default.GET_CHANNELS_TOPICS_SUCCESS, 'payload');\nconst getChannelsTopicsError = (0, _createAction2.default)(_channel2.default.GET_CHANNELS_TOPICS_ERROR, 'payload');\n\nexports.default = {\n\tgetChannelsTopicsRequest, getChannelsTopicsSuccess, getChannelsTopicsError\n};\n\n//# sourceURL=webpack:///./src/store/states/channel/channel.actions.js?");

/***/ }),

/***/ "./src/store/states/channel/channel.api.js":
/*!*************************************************!*\
  !*** ./src/store/states/channel/channel.api.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction handleErrors(response) {\n  if (response.ok || response.statusCode == 200) {\n    return response;\n  } else {\n    return response.json().then(err => {\n      throw new Error(`Error ${err.status}: ${err.message}`);\n    });\n  }\n}\n\nconst getChannelsTopics = () => {\n  return fetch('/api/channels/topic/all', {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json'\n    }\n  }).then(handleErrors).then(res => res.json());\n};\n\nexports.getChannelsTopics = getChannelsTopics;\n\n//# sourceURL=webpack:///./src/store/states/channel/channel.api.js?");

/***/ }),

/***/ "./src/store/states/channel/channel.operations.js":
/*!********************************************************!*\
  !*** ./src/store/states/channel/channel.operations.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.getChannelsTopics = undefined;\n\nvar _channel = __webpack_require__(/*! ./channel.api */ \"./src/store/states/channel/channel.api.js\");\n\nvar channelApiCalls = _interopRequireWildcard(_channel);\n\nvar _channel2 = __webpack_require__(/*! ./channel.actions */ \"./src/store/states/channel/channel.actions.js\");\n\nvar _channel3 = _interopRequireDefault(_channel2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nconst getChannelsTopics = () => {\n\treturn dispatch => {\n\t\tdispatch(_channel3.default.getChannelsTopicsRequest());\n\t\tchannelApiCalls.getChannelsTopics().then(response => {\n\t\t\tlet topics = response.data.channelTopics;\n\t\t\tdispatch(_channel3.default.getChannelsTopicsSuccess(topics));\n\t\t}).catch(error => {\n\t\t\tdispatch(_channel3.default.getChannelsTopicsError(error.message));\n\t\t});\n\t};\n};\n\nexports.getChannelsTopics = getChannelsTopics;\n\n//# sourceURL=webpack:///./src/store/states/channel/channel.operations.js?");

/***/ }),

/***/ "./src/store/states/channel/channel.reducer.js":
/*!*****************************************************!*\
  !*** ./src/store/states/channel/channel.reducer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _channel = __webpack_require__(/*! ./channel.types */ \"./src/store/states/channel/channel.types.js\");\n\nvar _channel2 = _interopRequireDefault(_channel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst initialState = {\n\tprocessing: false,\n\tisError: false,\n\tdata: null,\n\ttopics: []\n};\n\nconst channelReducer = (state = initialState, action) => {\n\tconst { type, payload } = action;\n\n\tswitch (type) {\n\t\tcase _channel2.default.GET_CHANNELS_TOPICS_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: true,\n\t\t\t\tisError: null\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _channel2.default.GET_CHANNELS_TOPICS_SUCCESS:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\ttopics: payload\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _channel2.default.GET_CHANNELS_TOPICS_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tisError: payload\n\t\t\t});\n\t\t\tbreak;\n\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = channelReducer;\n\n//# sourceURL=webpack:///./src/store/states/channel/channel.reducer.js?");

/***/ }),

/***/ "./src/store/states/channel/channel.selectors.js":
/*!*******************************************************!*\
  !*** ./src/store/states/channel/channel.selectors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n\nconst selectChannelTopics = state => state.topics;\n\nexports.selectChannelTopics = selectChannelTopics;\n\n//# sourceURL=webpack:///./src/store/states/channel/channel.selectors.js?");

/***/ }),

/***/ "./src/store/states/channel/channel.types.js":
/*!***************************************************!*\
  !*** ./src/store/states/channel/channel.types.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n\nconst GET_CHANNELS_TOPICS_REQUEST = 'Create channel modal/GET_CHANNELS_TOPICS_REQUEST';\nconst GET_CHANNELS_TOPICS_SUCCESS = 'Api response/GET_CHANNELS_TOPICS_SUCCESS';\nconst GET_CHANNELS_TOPICS_ERROR = 'Api response/GET_CHANNELS_TOPICS_ERROR';\n\nexports.default = {\n\tGET_CHANNELS_TOPICS_REQUEST, GET_CHANNELS_TOPICS_SUCCESS, GET_CHANNELS_TOPICS_ERROR\n\n};\n\n//# sourceURL=webpack:///./src/store/states/channel/channel.types.js?");

/***/ }),

/***/ "./src/store/states/channel/index.js":
/*!*******************************************!*\
  !*** ./src/store/states/channel/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _channel = __webpack_require__(/*! ./channel.selectors */ \"./src/store/states/channel/channel.selectors.js\");\n\nObject.keys(_channel).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _channel[key];\n    }\n  });\n});\n\nvar _channel2 = __webpack_require__(/*! ./channel.operations */ \"./src/store/states/channel/channel.operations.js\");\n\nObject.keys(_channel2).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _channel2[key];\n    }\n  });\n});\n\nvar _channel3 = __webpack_require__(/*! ./channel.reducer */ \"./src/store/states/channel/channel.reducer.js\");\n\nvar _channel4 = _interopRequireDefault(_channel3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _channel4.default;\n\n//# sourceURL=webpack:///./src/store/states/channel/index.js?");

/***/ }),

/***/ "./src/store/states/comment/comment.actions.js":
/*!*****************************************************!*\
  !*** ./src/store/states/comment/comment.actions.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _comment = __webpack_require__(/*! ./comment.types */ \"./src/store/states/comment/comment.types.js\");\n\nvar _comment2 = _interopRequireDefault(_comment);\n\nvar _createAction = __webpack_require__(/*! ../utils/create-action */ \"./src/store/states/utils/create-action.js\");\n\nvar _createAction2 = _interopRequireDefault(_createAction);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst getCommentsRequest = (0, _createAction2.default)(_comment2.default.GET_COMMENTS_REQUEST);\nconst getCommentsSuccess = (0, _createAction2.default)(_comment2.default.GET_COMMENTS_SUCCESS, 'payload');\nconst getCommentsError = (0, _createAction2.default)(_comment2.default.GET_COMMENTS_ERROR, 'payload');\n\nconst postCommentRequest = (0, _createAction2.default)(_comment2.default.POST_COMMENT_REQUEST);\nconst postCommentSuccess = (0, _createAction2.default)(_comment2.default.POST_COMMENT_SUCCESS, 'payload');\nconst postReplySuccess = (0, _createAction2.default)(_comment2.default.POST_REPLY_SUCCESS, 'payload');\nconst postCommentError = (0, _createAction2.default)(_comment2.default.POST_COMMENT_ERROR, 'payload');\n\nconst getRepliesByCommentRequest = (0, _createAction2.default)(_comment2.default.GET_REPLIES_BY_COMMENT, 'payload');\nconst getRepliesByCommentSuccess = (0, _createAction2.default)(_comment2.default.GET_REPLIES_BY_COMMENT_SUCCESS, 'payload');\nconst getRepliesByCommentError = (0, _createAction2.default)(_comment2.default.GET_REPLIES_BY_COMMENT_ERROR, 'payload');\n\nconst likeCommentRequest = (0, _createAction2.default)(_comment2.default.LIKE_COMMENT_REQUEST, 'payload');\nconst likeCommentSuccess = (0, _createAction2.default)(_comment2.default.LIKE_COMMENT_SUCCESS, 'payload');\nconst likeCommentError = (0, _createAction2.default)(_comment2.default.LIKE_COMMENT_ERROR, 'payload');\n\nconst dislikeCommentRequest = (0, _createAction2.default)(_comment2.default.DISLIKE_COMMENT_REQUEST, 'payload');\nconst dislikeCommentSuccess = (0, _createAction2.default)(_comment2.default.DISLIKE_COMMENT_SUCCESS, 'payload');\nconst dislikeCommentError = (0, _createAction2.default)(_comment2.default.DISLIKE_COMMENT_ERROR, 'payload');\n\nexports.default = {\n\tgetCommentsRequest, getCommentsSuccess, getCommentsError,\n\n\tpostCommentRequest, postCommentSuccess, postReplySuccess, postCommentError,\n\n\tgetRepliesByCommentRequest, getRepliesByCommentSuccess, getRepliesByCommentError,\n\n\tlikeCommentRequest, likeCommentSuccess, likeCommentError,\n\n\tdislikeCommentRequest, dislikeCommentSuccess, dislikeCommentError\n};\n\n//# sourceURL=webpack:///./src/store/states/comment/comment.actions.js?");

/***/ }),

/***/ "./src/store/states/comment/comment.api.js":
/*!*************************************************!*\
  !*** ./src/store/states/comment/comment.api.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction handleErrors(response) {\n  if (response.ok || response.statusCode == 200) {\n    return response;\n  } else {\n    return response.json().then(err => {\n      throw new Error(`Error ${err.status}: ${err.message}`);\n    });\n  }\n}\n\nconst listAllByMedia = params => {\n  return fetch('/api/comments/' + params.mediaId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json'\n    }\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst getReplies = params => {\n  return fetch('/api/comment/replies/' + params.commentId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json'\n    }\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst postComment = params => {\n  return fetch('/api/comment/new', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'CSRF-Token': params.csrfToken\n    },\n    credentials: 'include',\n    body: JSON.stringify(params.comment)\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst likeComment = params => {\n  return fetch('/api/comment/like', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'CSRF-Token': params.csrfToken\n    },\n    credentials: 'include',\n    body: JSON.stringify({ commentId: params.commentId })\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst dislikeComment = params => {\n  return fetch('/api/comment/dislike', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'CSRF-Token': params.csrfToken\n    },\n    credentials: 'include',\n    body: JSON.stringify({ commentId: params.commentId })\n  }).then(handleErrors).then(res => res.json());\n};\n\nexports.listAllByMedia = listAllByMedia;\nexports.getReplies = getReplies;\nexports.postComment = postComment;\nexports.likeComment = likeComment;\nexports.dislikeComment = dislikeComment;\n\n//# sourceURL=webpack:///./src/store/states/comment/comment.api.js?");

/***/ }),

/***/ "./src/store/states/comment/comment.operations.js":
/*!********************************************************!*\
  !*** ./src/store/states/comment/comment.operations.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.dislikeUserComment = exports.likeUserComment = exports.getRepliesByComment = exports.postNewComment = exports.getComments = undefined;\n\nvar _comment = __webpack_require__(/*! ./comment.api */ \"./src/store/states/comment/comment.api.js\");\n\nvar _comment2 = __webpack_require__(/*! ./comment.actions */ \"./src/store/states/comment/comment.actions.js\");\n\nvar _comment3 = _interopRequireDefault(_comment2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst getComments = mediaId => {\n\treturn dispatch => {\n\t\tdispatch(_comment3.default.getCommentsRequest());\n\t\t(0, _comment.listAllByMedia)({ mediaId }).then(response => {\n\t\t\tlet comments = response.data.comments;\n\t\t\tdispatch(_comment3.default.getCommentsSuccess(comments));\n\t\t}).catch(error => {\n\t\t\tdispatch(_comment3.default.getCommentsError(error.message));\n\t\t});\n\t};\n};\n\nconst postNewComment = (comment, isReply = false) => {\n\treturn (dispatch, getState) => {\n\t\tdispatch(_comment3.default.postCommentRequest());\n\t\tlet csrfToken = getState().csrf;\n\t\t(0, _comment.postComment)({ comment, csrfToken }).then(response => {\n\t\t\tconsole.log(response);\n\t\t\tlet comment = response.data.comment;\n\t\t\tlet action = isReply ? 'postReplySuccess' : 'postCommentSuccess';\n\t\t\tdispatch(_comment3.default[action](comment));\n\t\t}).catch(error => {\n\t\t\tconsole.log(error);\n\t\t\tdispatch(_comment3.default.postCommentError(error.message));\n\t\t});\n\t};\n};\n\nconst getRepliesByComment = commentId => {\n\treturn dispatch => {\n\t\tdispatch(_comment3.default.getRepliesByCommentRequest());\n\t\t(0, _comment.getReplies)({ commentId }).then(response => {\n\t\t\tconsole.log(response);\n\t\t\tlet replies = response.data.replies;\n\t\t\tdispatch(_comment3.default.getRepliesByCommentSuccess({ replies, commentId }));\n\t\t}).catch(error => {\n\t\t\tconsole.log(error);\n\t\t\tdispatch(_comment3.default.getRepliesByCommentError(error.message));\n\t\t});\n\t};\n};\n\nconst likeUserComment = commentId => {\n\treturn (dispatch, getState) => {\n\t\tdispatch(_comment3.default.likeCommentRequest());\n\t\tlet csrfToken = getState().csrf;\n\t\t(0, _comment.likeComment)({ commentId, csrfToken }).then(response => {\n\t\t\tconsole.log(response);\n\t\t\tlet comment = response.data.comment;\n\t\t\tdispatch(_comment3.default.likeCommentSuccess(comment));\n\t\t}).catch(error => {\n\t\t\tconsole.log(error);\n\t\t\tdispatch(_comment3.default.likeCommentError(error.message));\n\t\t});\n\t};\n};\n\nconst dislikeUserComment = commentId => {\n\treturn (dispatch, getState) => {\n\t\tdispatch(_comment3.default.dislikeCommentRequest());\n\t\tlet csrfToken = getState().csrf;\n\t\t(0, _comment.dislikeComment)({ commentId, csrfToken }).then(response => {\n\t\t\tconsole.log(response);\n\t\t\tlet comment = response.data.comment;\n\t\t\tdispatch(_comment3.default.dislikeCommentSuccess(comment));\n\t\t}).catch(error => {\n\t\t\tconsole.log(error);\n\t\t\tdispatch(_comment3.default.dislikeCommentError(error.message));\n\t\t});\n\t};\n};\n\nexports.getComments = getComments;\nexports.postNewComment = postNewComment;\nexports.getRepliesByComment = getRepliesByComment;\nexports.likeUserComment = likeUserComment;\nexports.dislikeUserComment = dislikeUserComment;\n\n//# sourceURL=webpack:///./src/store/states/comment/comment.operations.js?");

/***/ }),

/***/ "./src/store/states/comment/comment.reducer.js":
/*!*****************************************************!*\
  !*** ./src/store/states/comment/comment.reducer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _comment = __webpack_require__(/*! ./comment.types */ \"./src/store/states/comment/comment.types.js\");\n\nvar _comment2 = _interopRequireDefault(_comment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst initialState = {\n\tprocessing: false,\n\tisError: false,\n\tdata: {\n\t\tallIds: [],\n\t\tbyId: {}\n\t}\n};\n\nconst commentReducer = (state = initialState, action) => {\n\tconst { payload, type } = action;\n\tswitch (type) {\n\t\tcase _comment2.default.GET_COMMENTS_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: true,\n\t\t\t\tisError: null,\n\t\t\t\tdata: null\n\t\t\t});\n\t\t\tbreak;\n\t\tcase _comment2.default.GET_COMMENTS_SUCCESS:\n\t\t\tlet byIds = {};\n\t\t\tpayload.forEach(item => {\n\t\t\t\tbyIds[item._id] = item;\n\t\t\t});\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tdata: {\n\t\t\t\t\tallIds: Object.keys(byIds),\n\t\t\t\t\tbyId: byIds\n\t\t\t\t}\n\t\t\t});\n\t\t\tbreak;\n\t\tcase _comment2.default.GET_COMMENTS_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tisError: payload,\n\t\t\t\tdata: null\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _comment2.default.POST_COMMENT_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: true,\n\t\t\t\tisError: null\n\t\t\t});\n\t\t\tbreak;\n\t\tcase _comment2.default.POST_COMMENT_SUCCESS:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tdata: {\n\t\t\t\t\tallIds: [...state.data.allIds, payload._id],\n\t\t\t\t\tbyId: _extends({}, state.data.byId, {\n\t\t\t\t\t\t[payload._id]: payload\n\t\t\t\t\t})\n\t\t\t\t}\n\t\t\t});\n\t\t\tbreak;\n\t\tcase _comment2.default.POST_REPLY_SUCCESS:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tdata: _extends({}, state.data, {\n\t\t\t\t\tbyId: _extends({}, state.data.byId, {\n\t\t\t\t\t\t[payload.parent]: _extends({}, state.data.byId[payload.parent], {\n\t\t\t\t\t\t\trepliesCount: state.data.byId[payload.parent].repliesCount + 1,\n\t\t\t\t\t\t\tchildren: [...state.data.byId[payload.parent].children, payload]\n\t\t\t\t\t\t})\n\t\t\t\t\t})\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\t\tcase _comment2.default.POST_COMMENT_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tisError: payload\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _comment2.default.GET_REPLIES_BY_COMMENT_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: true\n\t\t\t});\n\t\t\tbreak;\n\t\tcase _comment2.default.GET_REPLIES_BY_COMMENT_SUCCESS:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tdata: _extends({}, state.data, {\n\t\t\t\t\tbyId: _extends({}, state.data.byId, {\n\t\t\t\t\t\t[payload.commentId]: _extends({}, state.data.byId[payload.commentId], {\n\t\t\t\t\t\t\tchildren: payload.replies\n\t\t\t\t\t\t})\n\t\t\t\t\t})\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _comment2.default.LIKE_COMMENT_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: true\n\t\t\t});\n\t\tcase _comment2.default.LIKE_COMMENT_SUCCESS:\n\t\t\tlet isComment = state.data.byId[payload._id];\n\t\t\tlet byId;\n\t\t\tif (isComment) {\n\t\t\t\tbyId = _extends({}, state.data.byId, {\n\t\t\t\t\t[payload._id]: _extends({}, payload, {\n\t\t\t\t\t\tchildren: [...state.data.byId[payload._id].children]\n\t\t\t\t\t})\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tbyId = _extends({}, state.data.byId, {\n\t\t\t\t\t[payload.parent]: _extends({}, state.data.byId[payload.parent], {\n\t\t\t\t\t\tchildren: [...state.data.byId[payload.parent].children.map(item => {\n\t\t\t\t\t\t\tif (item._id === payload._id) return payload;\n\t\t\t\t\t\t\treturn item;\n\t\t\t\t\t\t})]\n\t\t\t\t\t})\n\t\t\t\t});\n\t\t\t}\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tdata: _extends({}, state.data, {\n\t\t\t\t\tbyId: _extends({}, byId)\n\t\t\t\t})\n\t\t\t});\n\n\t\tcase _comment2.default.LIKE_COMMENT_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tisError: payload\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = commentReducer;\n\n//# sourceURL=webpack:///./src/store/states/comment/comment.reducer.js?");

/***/ }),

/***/ "./src/store/states/comment/comment.selectors.js":
/*!*******************************************************!*\
  !*** ./src/store/states/comment/comment.selectors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.selectErrorText = exports.selectIsProcessing = exports.selectAllCommentsByMedia = undefined;\n\nvar _reselect = __webpack_require__(/*! reselect */ \"reselect\");\n\nconst selectAllCommentsByMediaMemo = state => {\n\tif (!state.data) return [];\n\tlet byId = state.data.byId;\n\tlet commentsArray = Object.values(byId);\n\treturn commentsArray;\n};\n\nconst selectAllCommentsByMedia = (0, _reselect.createSelector)(selectAllCommentsByMediaMemo, comments => comments);\n\nconst selectIsProcessing = state => state.processing;\nconst selectErrorText = state => state.isError ? state.isError : null;\n\nexports.selectAllCommentsByMedia = selectAllCommentsByMedia;\nexports.selectIsProcessing = selectIsProcessing;\nexports.selectErrorText = selectErrorText;\n\n//# sourceURL=webpack:///./src/store/states/comment/comment.selectors.js?");

/***/ }),

/***/ "./src/store/states/comment/comment.types.js":
/*!***************************************************!*\
  !*** ./src/store/states/comment/comment.types.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nconst GET_COMMENTS_REQUEST = 'Single media page/GET_COMMENTS_REQUEST';\nconst GET_COMMENTS_SUCCESS = 'Api response/GET_COMMENTS_SUCCESS';\nconst GET_COMMENTS_ERROR = 'Api response/GET_COMMENTS_ERROR';\n\nconst POST_COMMENT_REQUEST = 'Single media page/POST_COMMENT_REQUEST';\nconst POST_COMMENT_SUCCESS = 'Api response/POST_COMMENT_SUCCESS';\nconst POST_REPLY_SUCCESS = 'Api response/POST_REPLY_SUCCESS';\nconst POST_COMMENT_ERROR = 'Api response/POST_COMMENT_ERROR';\n\nconst GET_REPLIES_BY_COMMENT = 'Comments single media page/GET_REPLIES_BY_COMMENT';\nconst GET_REPLIES_BY_COMMENT_SUCCESS = 'Api response/GET_REPLIES_BY_COMMENT_SUCCESS';\nconst GET_REPLIES_BY_COMMENT_ERROR = 'Api response/GET_REPLIES_BY_COMMENT_ERROR';\n\nconst LIKE_COMMENT_REQUEST = 'Comments single media page/LIKE_COMMENT_REQUEST';\nconst LIKE_COMMENT_SUCCESS = 'Api response/LIKE_COMMENT_SUCCESS';\nconst LIKE_COMMENT_ERROR = 'Api response/LIKE_COMMENT_ERROR';\n\nconst DISLIKE_COMMENT_REQUEST = 'Comments single media page/DISLIKE_COMMENT_REQUEST';\nconst DISLIKE_COMMENT_SUCCESS = 'Api response/DISLIKE_COMMENT_SUCCESS';\nconst DISLIKE_COMMENT_ERROR = 'Api response/DISLIKE_COMMENT_ERROR';\n\nexports.default = {\n\tGET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR,\n\n\tPOST_COMMENT_REQUEST, POST_COMMENT_SUCCESS, POST_REPLY_SUCCESS, POST_COMMENT_ERROR,\n\n\tGET_REPLIES_BY_COMMENT, GET_REPLIES_BY_COMMENT_SUCCESS, GET_REPLIES_BY_COMMENT_ERROR,\n\n\tLIKE_COMMENT_REQUEST, LIKE_COMMENT_SUCCESS, LIKE_COMMENT_ERROR,\n\tDISLIKE_COMMENT_REQUEST, DISLIKE_COMMENT_SUCCESS, DISLIKE_COMMENT_ERROR\n};\n\n//# sourceURL=webpack:///./src/store/states/comment/comment.types.js?");

/***/ }),

/***/ "./src/store/states/comment/index.js":
/*!*******************************************!*\
  !*** ./src/store/states/comment/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _comment = __webpack_require__(/*! ./comment.selectors */ \"./src/store/states/comment/comment.selectors.js\");\n\nObject.keys(_comment).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _comment[key];\n    }\n  });\n});\n\nvar _comment2 = __webpack_require__(/*! ./comment.operations */ \"./src/store/states/comment/comment.operations.js\");\n\nObject.keys(_comment2).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _comment2[key];\n    }\n  });\n});\n\nvar _comment3 = __webpack_require__(/*! ./comment.reducer */ \"./src/store/states/comment/comment.reducer.js\");\n\nvar _comment4 = _interopRequireDefault(_comment3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _comment4.default;\n\n//# sourceURL=webpack:///./src/store/states/comment/index.js?");

/***/ }),

/***/ "./src/store/states/media/category/category.actions.js":
/*!*************************************************************!*\
  !*** ./src/store/states/media/category/category.actions.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\t\tvalue: true\n});\n\nvar _category = __webpack_require__(/*! ./category.types */ \"./src/store/states/media/category/category.types.js\");\n\nvar _category2 = _interopRequireDefault(_category);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//category list\nconst getCategoriesRequest = () => ({\n\t\ttype: _category2.default.GET_CATEGORIES_REQUEST\n});\n\nconst getCategoriesSuccess = categories => ({\n\t\ttype: _category2.default.GET_CATEGORIES_SUCCESS,\n\t\tpayload: categories\n});\nconst getCategoriesError = error => ({\n\t\ttype: _category2.default.GET_CATEGORIES_ERROR,\n\t\tpayload: error\n});\n\nexports.default = {\n\t\tgetCategoriesRequest, getCategoriesSuccess, getCategoriesError\n};\n\n//# sourceURL=webpack:///./src/store/states/media/category/category.actions.js?");

/***/ }),

/***/ "./src/store/states/media/category/category.api.js":
/*!*********************************************************!*\
  !*** ./src/store/states/media/category/category.api.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst handleErrors = response => {\n  if (response.ok || response.statusCode == 200) {\n    return response;\n  } else {\n    return response.json().then(err => {\n      throw new Error(`Error ${err.status}: ${err.message}`);\n    });\n  }\n};\n\nconst listAll = () => {\n  return fetch('/api/media/category/all', {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json'\n    }\n  }).then(handleErrors).then(res => res.json());\n};\n\nexports.listAll = listAll;\n\n//# sourceURL=webpack:///./src/store/states/media/category/category.api.js?");

/***/ }),

/***/ "./src/store/states/media/category/category.operations.js":
/*!****************************************************************!*\
  !*** ./src/store/states/media/category/category.operations.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.getCategories = undefined;\n\nvar _connectedReactRouter = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n\nvar _category = __webpack_require__(/*! ./category.api */ \"./src/store/states/media/category/category.api.js\");\n\nvar _category2 = __webpack_require__(/*! ./category.actions */ \"./src/store/states/media/category/category.actions.js\");\n\nvar _category3 = _interopRequireDefault(_category2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst getCategories = () => {\n\treturn dispatch => {\n\t\tdispatch(_category3.default.getCategoriesRequest());\n\t\t(0, _category.listAll)().then(response => {\n\t\t\tlet categories = response.data;\n\t\t\tdispatch(_category3.default.getCategoriesSuccess(categories));\n\t\t}).catch(error => {\n\t\t\tdispatch(_category3.default.getCategoriesError(error.message));\n\t\t});\n\t};\n};\n\nexports.getCategories = getCategories;\n\n//# sourceURL=webpack:///./src/store/states/media/category/category.operations.js?");

/***/ }),

/***/ "./src/store/states/media/category/category.reducer.js":
/*!*************************************************************!*\
  !*** ./src/store/states/media/category/category.reducer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _category = __webpack_require__(/*! ./category.types */ \"./src/store/states/media/category/category.types.js\");\n\nvar _category2 = _interopRequireDefault(_category);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst initialState = {\n\tprocessing: false,\n\tisError: false,\n\tdata: {\n\t\tallIds: [],\n\t\tbyId: {}\n\t}\n};\n\nconst categoryReducer = (state = initialState, action) => {\n\tconst { payload, type } = action;\n\tswitch (type) {\n\t\tcase _category2.default.GET_CATEGORIES_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: true,\n\t\t\t\tisError: null\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _category2.default.GET_CATEGORIES_SUCCESS:\n\t\t\tlet byIds = {};\n\t\t\tpayload.forEach(item => {\n\t\t\t\tbyIds[item._id] = item;\n\t\t\t});\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tdata: {\n\t\t\t\t\tallIds: Object.keys(byIds),\n\t\t\t\t\tbyId: byIds\n\t\t\t\t}\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _category2.default.GET_CATEGORIES_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tisError: payload,\n\t\t\t\tdata: null\n\t\t\t});\n\t\t\tbreak;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = categoryReducer;\n\n//# sourceURL=webpack:///./src/store/states/media/category/category.reducer.js?");

/***/ }),

/***/ "./src/store/states/media/category/category.selectors.js":
/*!***************************************************************!*\
  !*** ./src/store/states/media/category/category.selectors.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nconst selectAllCategories = exports.selectAllCategories = state => {\n\tlet byId = state.data.byId;\n\treturn Object.values(byId);\n};\nconst selectIsProcessing = exports.selectIsProcessing = state => state.processing;\nconst selectErrorText = exports.selectErrorText = state => state.isError ? state.isError : null;\n\n//# sourceURL=webpack:///./src/store/states/media/category/category.selectors.js?");

/***/ }),

/***/ "./src/store/states/media/category/category.types.js":
/*!***********************************************************!*\
  !*** ./src/store/states/media/category/category.types.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n\nconst GET_CATEGORIES_REQUEST = 'Newmedia page/GET_CATEGORIES_REQUEST';\nconst GET_CATEGORIES_SUCCESS = 'Api response/GET_CATEGORIES_SUCCESS';\nconst GET_CATEGORIES_ERROR = 'Api response/GET_CATEGORIES_ERROR';\n\nexports.default = {\n\tGET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERROR\n};\n\n//# sourceURL=webpack:///./src/store/states/media/category/category.types.js?");

/***/ }),

/***/ "./src/store/states/media/category/index.js":
/*!**************************************************!*\
  !*** ./src/store/states/media/category/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _category = __webpack_require__(/*! ./category.selectors */ \"./src/store/states/media/category/category.selectors.js\");\n\nObject.keys(_category).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _category[key];\n    }\n  });\n});\n\nvar _category2 = __webpack_require__(/*! ./category.operations */ \"./src/store/states/media/category/category.operations.js\");\n\nObject.keys(_category2).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _category2[key];\n    }\n  });\n});\n\nvar _category3 = __webpack_require__(/*! ./category.reducer */ \"./src/store/states/media/category/category.reducer.js\");\n\nvar _category4 = _interopRequireDefault(_category3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _category4.default;\n\n//# sourceURL=webpack:///./src/store/states/media/category/index.js?");

/***/ }),

/***/ "./src/store/states/media/index.js":
/*!*****************************************!*\
  !*** ./src/store/states/media/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _media = __webpack_require__(/*! ./media.selectors */ \"./src/store/states/media/media.selectors.js\");\n\nObject.keys(_media).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _media[key];\n    }\n  });\n});\n\nvar _media2 = __webpack_require__(/*! ./media.operations */ \"./src/store/states/media/media.operations.js\");\n\nObject.keys(_media2).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _media2[key];\n    }\n  });\n});\n\nvar _media3 = __webpack_require__(/*! ./media.reducer */ \"./src/store/states/media/media.reducer.js\");\n\nvar _media4 = _interopRequireDefault(_media3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _media4.default;\n\n//# sourceURL=webpack:///./src/store/states/media/index.js?");

/***/ }),

/***/ "./src/store/states/media/media-reducers/CRUD/read-media.reducer.js":
/*!**************************************************************************!*\
  !*** ./src/store/states/media/media-reducers/CRUD/read-media.reducer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _media = __webpack_require__(/*! ../../media.initial-state */ \"./src/store/states/media/media.initial-state.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _media3 = __webpack_require__(/*! ../../media.types */ \"./src/store/states/media/media.types.js\");\n\nvar _media4 = _interopRequireDefault(_media3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst readMedia = (state = _media2.default, action) => {\n\tconst { type, payload } = action;\n\tswitch (type) {\n\t\tcase _media4.default.READ_MEDIA_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tsingleMedia: null,\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tsingleMedia: true\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tsingleMedia: null\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.READ_MEDIA_SUCCESS:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tsingleMedia: false\n\t\t\t\t}),\n\t\t\t\tsingleMedia: payload\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.READ_MEDIA_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tsingleMedia: false\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tsingleMedia: payload\n\t\t\t\t}),\n\t\t\t\tsingleMedia: null\n\t\t\t});\n\t\t\tbreak;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = readMedia;\n\n//# sourceURL=webpack:///./src/store/states/media/media-reducers/CRUD/read-media.reducer.js?");

/***/ }),

/***/ "./src/store/states/media/media-reducers/CRUD/remove-media.reducer.js":
/*!****************************************************************************!*\
  !*** ./src/store/states/media/media-reducers/CRUD/remove-media.reducer.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _media = __webpack_require__(/*! ../../media.initial-state */ \"./src/store/states/media/media.initial-state.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _media3 = __webpack_require__(/*! ../../media.types */ \"./src/store/states/media/media.types.js\");\n\nvar _media4 = _interopRequireDefault(_media3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst removeMedia = (state = _media2.default, action) => {\n\tconst { type, payload } = action;\n\tswitch (type) {\n\t\tcase _media4.default.REMOVE_MEDIA_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tsingleMedia: true\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tsingleMedia: null\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.REMOVE_MEDIA_SUCCESS:\n\t\t\tlet newState = _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tsingleMedia: false\n\t\t\t\t}),\n\t\t\t\tall: _extends({}, state.all, {\n\t\t\t\t\tallIds: state.all.allIds.filter(id => id !== payload._id)\n\t\t\t\t}),\n\t\t\t\tsingleMedia: null\n\t\t\t});\n\t\t\tdelete newState.all.byId[payload._id];\n\t\t\treturn newState;\n\t\t\tbreak;\n\n\t\tcase _media4.default.REMOVE_MEDIA_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tsingleMedia: false\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tsingleMedia: payload\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = removeMedia;\n\n//# sourceURL=webpack:///./src/store/states/media/media-reducers/CRUD/remove-media.reducer.js?");

/***/ }),

/***/ "./src/store/states/media/media-reducers/CRUD/update-media.reducer.js":
/*!****************************************************************************!*\
  !*** ./src/store/states/media/media-reducers/CRUD/update-media.reducer.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _media = __webpack_require__(/*! ../../media.initial-state */ \"./src/store/states/media/media.initial-state.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _media3 = __webpack_require__(/*! ../../media.types */ \"./src/store/states/media/media.types.js\");\n\nvar _media4 = _interopRequireDefault(_media3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst updateMedia = (state = _media2.default, action) => {\n\tconst { type, payload } = action;\n\tswitch (type) {\n\t\tcase _media4.default.UPDATE_MEDIA_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tsingleMedia: true\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tsingleMedia: null\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.UPDATE_MEDIA_SUCCESS:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tsingleMedia: false\n\t\t\t\t}),\n\t\t\t\tall: {\n\t\t\t\t\tbyId: _extends({}, state.all, state.all.byId, {\n\t\t\t\t\t\t[payload._id]: payload\n\t\t\t\t\t})\n\t\t\t\t},\n\t\t\t\tsingleMedia: payload\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.UPDATE_MEDIA_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tsingleMedia: false\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tsingleMedia: payload\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = updateMedia;\n\n//# sourceURL=webpack:///./src/store/states/media/media-reducers/CRUD/update-media.reducer.js?");

/***/ }),

/***/ "./src/store/states/media/media-reducers/UActions/like-media.reducer.js":
/*!******************************************************************************!*\
  !*** ./src/store/states/media/media-reducers/UActions/like-media.reducer.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _media = __webpack_require__(/*! ../../media.initial-state */ \"./src/store/states/media/media.initial-state.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _media3 = __webpack_require__(/*! ../../media.types */ \"./src/store/states/media/media.types.js\");\n\nvar _media4 = _interopRequireDefault(_media3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst likeDislikeMedia = (state = _media2.default, action) => {\n\tconst { type, payload } = action;\n\tswitch (type) {\n\t\tcase _media4.default.LIKE_MEDIA_REQUEST:\n\t\tcase _media4.default.DISLIKE_MEDIA_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tsingleMedia: true\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tsingleMedia: null\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.LIKE_MEDIA_SUCCESS:\n\t\tcase _media4.default.DISLIKE_MEDIA_SUCCESS:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tsingleMedia: false\n\t\t\t\t}),\n\t\t\t\tall: _extends({}, state.all, {\n\t\t\t\t\tbyId: _extends({}, state.all.byId, {\n\t\t\t\t\t\t[payload._id]: payload\n\t\t\t\t\t})\n\t\t\t\t}),\n\t\t\t\tsingleMedia: payload\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.LIKE_MEDIA_ERROR:\n\t\tcase _media4.default.DISLIKE_MEDIA_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tsingleMedia: false\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tsingleMedia: payload\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = likeDislikeMedia;\n\n//# sourceURL=webpack:///./src/store/states/media/media-reducers/UActions/like-media.reducer.js?");

/***/ }),

/***/ "./src/store/states/media/media-reducers/UActions/search.reducer.js":
/*!**************************************************************************!*\
  !*** ./src/store/states/media/media-reducers/UActions/search.reducer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _media = __webpack_require__(/*! ../../media.initial-state */ \"./src/store/states/media/media.initial-state.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _media3 = __webpack_require__(/*! ../../media.types */ \"./src/store/states/media/media.types.js\");\n\nvar _media4 = _interopRequireDefault(_media3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst searchMedia = (state = _media2.default, action) => {\n\tconst { type, payload } = action;\n\tswitch (type) {\n\t\tcase _media4.default.SEARCH_MEDIA_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tall: true\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tall: null\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.SEARCH_MEDIA_SUCCESS:\n\t\t\tlet all = {\n\t\t\t\tbyId: {},\n\t\t\t\tallIds: []\n\t\t\t};\n\t\t\tpayload.forEach(item => {\n\t\t\t\tall.byId[item._id] = item;\n\t\t\t\tall.allIds = [...all.allIds, item._id];\n\t\t\t});\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tall: false\n\t\t\t\t}),\n\t\t\t\tall: all\n\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.SEARCH_MEDIA_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tall: false\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tall: payload\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = searchMedia;\n\n//# sourceURL=webpack:///./src/store/states/media/media-reducers/UActions/search.reducer.js?");

/***/ }),

/***/ "./src/store/states/media/media-reducers/create-media.reducer.js":
/*!***********************************************************************!*\
  !*** ./src/store/states/media/media-reducers/create-media.reducer.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _media = __webpack_require__(/*! ../media.initial-state */ \"./src/store/states/media/media.initial-state.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _media3 = __webpack_require__(/*! ../media.types */ \"./src/store/states/media/media.types.js\");\n\nvar _media4 = _interopRequireDefault(_media3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst createMedia = (state = _media2.default, action) => {\n\tconst { type, payload } = action;\n\tswitch (type) {\n\t\tcase _media4.default.CREATE_MEDIA_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tall: true\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tall: null\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.CREATE_MEDIA_SUCCESS:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tall: false\n\t\t\t\t}),\n\t\t\t\tall: {\n\t\t\t\t\tallIds: [...state.all.allIds, payload._id],\n\t\t\t\t\tbyId: _extends({}, state.all.byId, {\n\t\t\t\t\t\t[payload._id]: payload\n\t\t\t\t\t})\n\t\t\t\t}\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.CREATE_MEDIA_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tall: false\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tall: payload\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = createMedia;\n\n//# sourceURL=webpack:///./src/store/states/media/media-reducers/create-media.reducer.js?");

/***/ }),

/***/ "./src/store/states/media/media-reducers/get-media-list.reducer.js":
/*!*************************************************************************!*\
  !*** ./src/store/states/media/media-reducers/get-media-list.reducer.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _media = __webpack_require__(/*! ../media.initial-state */ \"./src/store/states/media/media.initial-state.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _media3 = __webpack_require__(/*! ../media.types */ \"./src/store/states/media/media.types.js\");\n\nvar _media4 = _interopRequireDefault(_media3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst getMediaList = (state = _media2.default, action) => {\n\tconst { type, payload } = action;\n\tswitch (type) {\n\t\tcase _media4.default.GET_MEDIA_LIST_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tall: true\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tall: null\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.GET_MEDIA_LIST_SUCCESS:\n\t\t\tlet byIds = {};\n\t\t\tpayload.forEach(item => {\n\t\t\t\tbyIds[item._id] = item;\n\t\t\t});\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tall: false\n\t\t\t\t}),\n\t\t\t\tall: {\n\t\t\t\t\tallIds: Object.keys(byIds),\n\t\t\t\t\tbyId: byIds\n\t\t\t\t}\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.GET_MEDIA_LIST_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tall: false\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tall: payload\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = getMediaList;\n\n//# sourceURL=webpack:///./src/store/states/media/media-reducers/get-media-list.reducer.js?");

/***/ }),

/***/ "./src/store/states/media/media-reducers/history.reducer.js":
/*!******************************************************************!*\
  !*** ./src/store/states/media/media-reducers/history.reducer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _reduceReducers = __webpack_require__(/*! reduce-reducers */ \"reduce-reducers\");\n\nvar _reduceReducers2 = _interopRequireDefault(_reduceReducers);\n\nvar _media = __webpack_require__(/*! ../media.initial-state */ \"./src/store/states/media/media.initial-state.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _media3 = __webpack_require__(/*! ../media.types */ \"./src/store/states/media/media.types.js\");\n\nvar _media4 = _interopRequireDefault(_media3);\n\nvar _user = __webpack_require__(/*! ../../user/user.types */ \"./src/store/states/user/user.types.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst historyMediaList = (state = _media2.default, action) => {\n\tconst { type, payload } = action;\n\tswitch (type) {\n\t\tcase _media4.default.LIST_HISTORY_MEDIA_REQUEST:\n\t\tcase _media4.default.SEARCH_HISTORY_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\thistory: true\n\t\t\t\t})\n\t\t\t});\n\t\tcase _media4.default.LIST_HISTORY_MEDIA_SUCCESS:\n\t\tcase _media4.default.SEARCH_HISTORY_SUCCESS:\n\t\t\tlet byIds = {};\n\t\t\tlet { total, medias } = payload;\n\t\t\tmedias.forEach(item => {\n\t\t\t\tbyIds[item._id] = item;\n\t\t\t});\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\thistory: false\n\t\t\t\t}),\n\t\t\t\thistory: _extends({}, state.history, {\n\t\t\t\t\tallIds: [...state.history.allIds].concat(Object.keys(byIds)),\n\t\t\t\t\tbyId: _extends({}, state.history.byId, byIds),\n\t\t\t\t\tcurrentPage: state.history.currentPage + 1,\n\t\t\t\t\ttotal: total\n\t\t\t\t})\n\t\t\t});\n\t\tcase _media4.default.LIST_HISTORY_MEDIA_ERROR:\n\t\tcase _media4.default.SEARCH_HISTORY_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\thistory: payload\n\t\t\t\t}),\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\thistory: false\n\t\t\t\t})\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nconst clearHistory = (state = _media2.default, action) => {\n\tconst { type, payload } = action;\n\tswitch (type) {\n\t\tcase _user2.default.REMOVE_VIEW_HISTORY_SUCCESS:\n\t\tcase _media4.default.RESET_HISTORY_LIST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\thistory: _extends({}, state.history, {\n\t\t\t\t\tbyId: {},\n\t\t\t\t\tallIds: [],\n\t\t\t\t\tcurrentPage: 0,\n\t\t\t\t\ttotal: 0\n\t\t\t\t})\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = (0, _reduceReducers2.default)(historyMediaList, clearHistory);\n\n//# sourceURL=webpack:///./src/store/states/media/media-reducers/history.reducer.js?");

/***/ }),

/***/ "./src/store/states/media/media-reducers/popular-medias.reducer.js":
/*!*************************************************************************!*\
  !*** ./src/store/states/media/media-reducers/popular-medias.reducer.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _media = __webpack_require__(/*! ../media.initial-state */ \"./src/store/states/media/media.initial-state.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _media3 = __webpack_require__(/*! ../media.types */ \"./src/store/states/media/media.types.js\");\n\nvar _media4 = _interopRequireDefault(_media3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst getPopularMediaList = (state = _media2.default, action) => {\n\tconst { type, payload } = action;\n\tswitch (type) {\n\t\tcase _media4.default.LIST_POPULAR_MEDIA_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tpopular: true\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tpopular: null\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.LIST_POPULAR_MEDIA_SUCCESS:\n\t\t\tlet byIds = {};\n\t\t\tpayload.forEach(item => {\n\t\t\t\tbyIds[item._id] = _extends({}, item, { type: 'popular' });\n\t\t\t});\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tpopular: false\n\t\t\t\t}),\n\t\t\t\tpopular: {\n\t\t\t\t\tallIds: Object.keys(byIds),\n\t\t\t\t\tbyId: byIds\n\t\t\t\t}\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.LIST_POPULAR_MEDIA_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tpopular: false\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tpopular: payload\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = getPopularMediaList;\n\n//# sourceURL=webpack:///./src/store/states/media/media-reducers/popular-medias.reducer.js?");

/***/ }),

/***/ "./src/store/states/media/media-reducers/related-media.reducer.js":
/*!************************************************************************!*\
  !*** ./src/store/states/media/media-reducers/related-media.reducer.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _media = __webpack_require__(/*! ../media.initial-state */ \"./src/store/states/media/media.initial-state.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _media3 = __webpack_require__(/*! ../media.types */ \"./src/store/states/media/media.types.js\");\n\nvar _media4 = _interopRequireDefault(_media3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst getRelatedMediaList = (state = _media2.default, action) => {\n\tconst { type, payload } = action;\n\tswitch (type) {\n\t\tcase _media4.default.LIST_RELATED_MEDIA_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\trelated: true\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\trelated: null\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.LIST_RELATED_MEDIA_SUCCESS:\n\t\t\tlet byIds = {};\n\t\t\tpayload.forEach(item => {\n\t\t\t\tbyIds[item._id] = _extends({}, item, { type: 'related' });\n\t\t\t});\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\trelated: false\n\t\t\t\t}),\n\t\t\t\trelated: {\n\t\t\t\t\tallIds: Object.keys(byIds),\n\t\t\t\t\tbyId: byIds\n\t\t\t\t}\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.LIST_RELATED_MEDIA_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\trelated: false\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\trelated: payload\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = getRelatedMediaList;\n\n//# sourceURL=webpack:///./src/store/states/media/media-reducers/related-media.reducer.js?");

/***/ }),

/***/ "./src/store/states/media/media-reducers/user-media.reducer.js":
/*!*********************************************************************!*\
  !*** ./src/store/states/media/media-reducers/user-media.reducer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _media = __webpack_require__(/*! ../media.initial-state */ \"./src/store/states/media/media.initial-state.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _media3 = __webpack_require__(/*! ../media.types */ \"./src/store/states/media/media.types.js\");\n\nvar _media4 = _interopRequireDefault(_media3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst getUserMediaList = (state = _media2.default, action) => {\n\tconst { type, payload } = action;\n\tswitch (type) {\n\t\tcase _media4.default.LIST_USER_MEDIA_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tuser: true\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tuser: null\n\t\t\t\t})\n\t\t\t});\n\n\t\tcase _media4.default.LIST_USER_MEDIA_SUCCESS:\n\t\t\tlet byIds = {};\n\t\t\tpayload.medias.forEach(item => {\n\t\t\t\tbyIds[item._id] = _extends({}, item, { type: 'user' });\n\t\t\t});\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tuser: false\n\t\t\t\t}),\n\t\t\t\tuser: {\n\t\t\t\t\tallIds: Object.keys(byIds),\n\t\t\t\t\tbyId: byIds\n\t\t\t\t}\n\t\t\t});\n\n\t\tcase _media4.default.LIST_USER_MEDIA_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\tuser: false\n\t\t\t\t}),\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\tuser: payload\n\t\t\t\t})\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = getUserMediaList;\n\n//# sourceURL=webpack:///./src/store/states/media/media-reducers/user-media.reducer.js?");

/***/ }),

/***/ "./src/store/states/media/media-reducers/watchlater.reducer.js":
/*!*********************************************************************!*\
  !*** ./src/store/states/media/media-reducers/watchlater.reducer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _media = __webpack_require__(/*! ../media.initial-state */ \"./src/store/states/media/media.initial-state.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _media3 = __webpack_require__(/*! ../media.types */ \"./src/store/states/media/media.types.js\");\n\nvar _media4 = _interopRequireDefault(_media3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst watchlaterMediaList = (state = _media2.default, action) => {\n\tconst { type, payload } = action;\n\tswitch (type) {\n\t\tcase _media4.default.LIST_WATCHLATER_MEDIA_REQUEST:\n\t\tcase _media4.default.SEARCH_WATCHLATER_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\twatchlater: true\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _media4.default.LIST_WATCHLATER_MEDIA_SUCCESS:\n\t\tcase _media4.default.SEARCH_WATCHLATER_SUCCESS:\n\t\t\tlet byIds = {};\n\t\t\tlet { total, medias } = payload;\n\t\t\tmedias.forEach(item => {\n\t\t\t\tbyIds[item._id] = item;\n\t\t\t});\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\twatchlater: false\n\t\t\t\t}),\n\t\t\t\twatchlater: _extends({}, state.watchlater, {\n\t\t\t\t\tallIds: [...state.watchlater.allIds].concat(Object.keys(byIds)),\n\t\t\t\t\tbyId: _extends({}, state.watchlater.byId, byIds),\n\t\t\t\t\tcurrentPage: state.watchlater.currentPage + 1,\n\t\t\t\t\ttotal: total\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\t\tcase _media4.default.LIST_WATCHLATER_MEDIA_ERROR:\n\t\tcase _media4.default.SEARCH_WATCHLATER_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tisError: _extends({}, state.isError, {\n\t\t\t\t\twatchlater: payload\n\t\t\t\t}),\n\t\t\t\tprocessing: _extends({}, state.processing, {\n\t\t\t\t\twatchlater: false\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = watchlaterMediaList;\n\n//# sourceURL=webpack:///./src/store/states/media/media-reducers/watchlater.reducer.js?");

/***/ }),

/***/ "./src/store/states/media/media.actions.js":
/*!*************************************************!*\
  !*** ./src/store/states/media/media.actions.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _media = __webpack_require__(/*! ./media.types */ \"./src/store/states/media/media.types.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//creating\nconst createMediaRequest = media => ({\n\ttype: _media2.default.CREATE_MEDIA_REQUEST,\n\tpayload: media\n});\n\nconst createMediaSuccess = media => ({\n\ttype: _media2.default.CREATE_MEDIA_SUCCESS,\n\tpayload: media\n});\n\nconst createMediaError = error => ({\n\ttype: _media2.default.CREATE_MEDIA_ERROR,\n\tpayload: error\n});\n\n//listing\n//popular listUserMediaRequest\nconst listPopularMediaRequest = () => ({\n\ttype: _media2.default.LIST_POPULAR_MEDIA_REQUEST\n});\n\nconst listPopularMediaSuccess = medias => ({\n\ttype: _media2.default.LIST_POPULAR_MEDIA_SUCCESS,\n\tpayload: medias\n});\n\nconst listPopularMediaError = error => ({\n\ttype: _media2.default.LIST_POPULAR_MEDIA_ERROR,\n\tpayload: error\n});\n\n//byUser\nconst listUserMediaRequest = () => ({\n\ttype: _media2.default.LIST_USER_MEDIA_REQUEST\n});\n\nconst listUserMediaSuccess = medias => ({\n\ttype: _media2.default.LIST_USER_MEDIA_SUCCESS,\n\tpayload: medias\n});\n\nconst listUserMediaError = error => ({\n\ttype: _media2.default.LIST_USER_MEDIA_ERROR,\n\tpayload: error\n});\n\n//history\nconst listHistoryMediaRequest = () => ({\n\ttype: _media2.default.LIST_HISTORY_MEDIA_REQUEST\n});\n\nconst listHistoryMediaSuccess = medias => ({\n\ttype: _media2.default.LIST_HISTORY_MEDIA_SUCCESS,\n\tpayload: medias\n});\n\nconst listHistoryMediaError = error => ({\n\ttype: _media2.default.LIST_HISTORY_MEDIA_ERROR,\n\tpayload: error\n});\n\n//watch later\nconst listWatchlaterMediaRequest = () => ({\n\ttype: _media2.default.LIST_WATCHLATER_MEDIA_REQUEST\n});\n\nconst listWatchlaterMediaSuccess = medias => ({\n\ttype: _media2.default.LIST_WATCHLATER_MEDIA_SUCCESS,\n\tpayload: medias\n});\n\nconst listWatchlaterMediaError = error => ({\n\ttype: _media2.default.LIST_WATCHLATER_MEDIA_ERROR,\n\tpayload: error\n});\n\n//related\nconst listRelatedMediaRequest = () => ({\n\ttype: _media2.default.LIST_RELATED_MEDIA_REQUEST\n});\n\nconst listRelatedMediaSuccess = medias => ({\n\ttype: _media2.default.LIST_RELATED_MEDIA_SUCCESS,\n\tpayload: medias\n});\n\nconst listRelatedMediaError = error => ({\n\ttype: _media2.default.LIST_RELATED_MEDIA_ERROR,\n\tpayload: error\n});\n\nconst replaceMediaFromList = mediaId => ({\n\ttype: _media2.default.REPLACE_MEDIA_FROM_LIST,\n\tpayload: mediaId\n});\n\n//reading\nconst readMediaRequest = () => ({\n\ttype: _media2.default.READ_MEDIA_REQUEST\n});\n\nconst readMediaSuccess = media => ({\n\ttype: _media2.default.READ_MEDIA_SUCCESS,\n\tpayload: media\n});\n\nconst readMediaError = error => ({\n\ttype: _media2.default.READ_MEDIA_ERROR,\n\tpayload: error\n});\n\n//updating\nconst updateMediaRequest = () => ({\n\ttype: _media2.default.UPDATE_MEDIA_REQUEST\n});\n\nconst updateMediaSuccess = media => ({\n\ttype: _media2.default.UPDATE_MEDIA_SUCCESS,\n\tpayload: media\n});\n\nconst updateMediaError = error => ({\n\ttype: _media2.default.UPDATE_MEDIA_ERROR,\n\tpayload: error\n});\n\n//updating\nconst removeMediaRequest = () => ({\n\ttype: _media2.default.REMOVE_MEDIA_REQUEST\n});\n\nconst removeMediaSuccess = media => ({\n\ttype: _media2.default.REMOVE_MEDIA_SUCCESS,\n\tpayload: media\n});\n\nconst removeMediaError = error => ({\n\ttype: _media2.default.REMOVE_MEDIA_ERROR,\n\tpayload: error\n});\n\n//like dislike\nconst likeMediaRequest = () => ({\n\ttype: _media2.default.LIKE_MEDIA_REQUEST\n});\n\nconst likeMediaSuccess = media => ({\n\ttype: _media2.default.LIKE_MEDIA_SUCCESS,\n\tpayload: media\n});\n\nconst likeMediaError = error => ({\n\ttype: _media2.default.LIKE_MEDIA_ERROR,\n\tpayload: error\n});\n\nconst dislikeMediaRequest = () => ({\n\ttype: _media2.default.DISLIKE_MEDIA_REQUEST\n});\n\nconst dislikeMediaSuccess = media => ({\n\ttype: _media2.default.DISLIKE_MEDIA_SUCCESS,\n\tpayload: media\n});\n\nconst dislikeMediaError = error => ({\n\ttype: _media2.default.DISLIKE_MEDIA_ERROR,\n\tpayload: error\n});\n\n//search\n\nconst searchMediaRequest = () => ({\n\ttype: _media2.default.SEARCH_MEDIA_REQUEST\n});\n\nconst searchMediaSuccess = medias => ({\n\ttype: _media2.default.SEARCH_MEDIA_SUCCESS,\n\tpayload: medias\n});\n\nconst searchMediaError = error => ({\n\ttype: _media2.default.SEARCH_MEDIA_ERROR,\n\tpayload: error\n});\n\nconst searchHistoryRequest = () => ({\n\ttype: _media2.default.SEARCH_HISTORY_REQUEST\n});\n\nconst searchHistorySuccess = medias => ({\n\ttype: _media2.default.SEARCH_HISTORY_SUCCESS,\n\tpayload: medias\n});\n\nconst searchHistoryError = error => ({\n\ttype: _media2.default.SEARCH_HISTORY_ERROR,\n\tpayload: error\n});\n\n//Watchlater\nconst searchWatchlaterRequest = () => ({\n\ttype: _media2.default.SEARCH_WATCHLATER_REQUEST\n});\n\nconst searchWatchlaterSuccess = items => ({\n\ttype: _media2.default.SEARCH_WATCHLATER_SUCCESS,\n\tpayload: items\n});\n\nconst searchWatchlaterError = error => ({\n\ttype: _media2.default.SEARCH_WATCHLATER_ERROR,\n\tpayload: error\n});\n\nconst resetHistoryList = () => ({\n\ttype: _media2.default.RESET_HISTORY_LIST\n});\n\nexports.default = {\n\t//create\n\tcreateMediaRequest, createMediaSuccess, createMediaError,\n\t//lists\n\tlistPopularMediaRequest, listPopularMediaSuccess, listPopularMediaError,\n\tlistRelatedMediaRequest, listRelatedMediaSuccess, listRelatedMediaSuccess,\n\tlistHistoryMediaRequest, listHistoryMediaSuccess, listHistoryMediaError,\n\tlistWatchlaterMediaRequest, listWatchlaterMediaSuccess, listWatchlaterMediaError,\n\tlistUserMediaRequest, listUserMediaSuccess, listUserMediaError,\n\n\t//list manipulations\n\treplaceMediaFromList,\n\t//read\n\treadMediaRequest, readMediaSuccess, readMediaError,\n\t//update\n\tupdateMediaRequest, updateMediaSuccess, updateMediaError,\n\t//delete\n\tremoveMediaRequest, removeMediaSuccess, removeMediaError,\n\n\t//like dislike\n\tlikeMediaRequest, likeMediaSuccess, likeMediaError,\n\tdislikeMediaRequest, dislikeMediaSuccess, dislikeMediaError,\n\n\t//search\n\tsearchMediaRequest, searchMediaSuccess, searchMediaError,\n\n\tsearchHistoryRequest, searchHistorySuccess, searchHistoryError,\n\n\tsearchWatchlaterRequest, searchWatchlaterSuccess, searchWatchlaterError,\n\n\tresetHistoryList\n};\n\n//# sourceURL=webpack:///./src/store/states/media/media.actions.js?");

/***/ }),

/***/ "./src/store/states/media/media.api.js":
/*!*********************************************!*\
  !*** ./src/store/states/media/media.api.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.searchWatchlater = exports.searchHistory = exports.searchMediaBy = exports.dislike = exports.like = exports.remove = exports.update = exports.read = exports.listWatchlaterMedia = exports.listHistoryMedia = exports.listRelated = exports.listByUser = exports.listPopular = exports.create = exports.uploadVideo = exports.getDirectUploadDetails = undefined;\n\nvar _queryString = __webpack_require__(/*! query-string */ \"query-string\");\n\nvar _queryString2 = _interopRequireDefault(_queryString);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst serverUrl = process.env.SERVER_URL || 'http://localhost:8080';\n\nfunction handleErrors(response) {\n  if (response.ok || response.statusCode == 200) {\n    return response;\n  } else {\n    return response.json().then(err => {\n      throw new Error(`Error ${err.status}: ${err.message}`);\n    });\n  }\n}\n\nconst getDirectUploadDetails = ({ resourceType }) => {\n  return fetch('/api/media/upload_link?resourceType=' + resourceType, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include'\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst uploadVideo = (options, url, progressReport) => {\n  return new Promise((resolve, reject) => {\n    let xhr = new XMLHttpRequest();\n    xhr.open('POST', url, true);\n    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');\n    xhr.upload.addEventListener(\"progress\", progressReport);\n\n    xhr.onreadystatechange = function (e) {\n      if (xhr.readyState == 4) {\n        let response = JSON.parse(xhr.responseText);\n        if (xhr.status == 200) {\n          resolve(response);\n        } else {\n          reject(`Uploading failed due to technical reasons.\n               Please contact support.`);\n        }\n      }\n    };\n    xhr.send(options);\n  });\n};\n\nconst create = ({ media, csrfToken }) => {\n  return fetch('/api/media/new', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'CSRF-Token': csrfToken\n    },\n    credentials: 'include',\n    body: JSON.stringify(media)\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst listPopular = () => {\n  return fetch(serverUrl + '/api/media/popular', {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    }\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst listHistoryMedia = params => {\n  let query = _queryString2.default.stringify(params);\n  return fetch(`${serverUrl}/api/media/history?${query}`, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include'\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst listWatchlaterMedia = params => {\n  let query = _queryString2.default.stringify(params);\n  return fetch(`${serverUrl}/api/media/watchlater?${query}`, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include'\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst listRelated = ({ mediaId }) => {\n  return fetch('/api/media/related/' + mediaId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    }\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst listByUser = userId => {\n  //userId = userId ? userId : '';\n\n  return fetch(`/api/media/by`, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include'\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst read = ({ mediaId }) => {\n  return fetch(serverUrl + '/api/media/' + mediaId, {\n    method: 'GET',\n    credentials: 'include'\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst update = ({ media, mediaId, csrfToken }) => {\n  return fetch('/api/media/' + mediaId, {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'CSRF-Token': csrfToken\n    },\n    credentials: 'include',\n    body: JSON.stringify(media)\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst remove = ({ mediaId, csrfToken }) => {\n  return fetch('/api/media/' + mediaId, {\n    method: 'DELETE',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'CSRF-Token': csrfToken\n    },\n    credentials: 'include'\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst like = ({ mediaId, csrfToken }) => {\n  return fetch('/api/media/like', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'CSRF-Token': csrfToken\n    },\n    credentials: 'include',\n    body: JSON.stringify({ mediaId })\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst dislike = ({ mediaId, csrfToken }) => {\n  return fetch('/api/media/dislike', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'CSRF-Token': csrfToken\n    },\n    credentials: 'include',\n    body: JSON.stringify({ mediaId })\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst searchMediaBy = params => {\n  let query = _queryString2.default.stringify(params);\n  return fetch('/api/media/search?' + query, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include'\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst searchHistory = params => {\n\n  let query = _queryString2.default.stringify(params);\n  return fetch('/api/media/history/search?' + query, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include'\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst searchWatchlater = params => {\n  let query = _queryString2.default.stringify(params);\n  return fetch('/api/media/watchlater/search?' + query, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include'\n  }).then(handleErrors).then(res => res.json());\n};\n\nexports.getDirectUploadDetails = getDirectUploadDetails;\nexports.uploadVideo = uploadVideo;\nexports.create = create;\nexports.listPopular = listPopular;\nexports.listByUser = listByUser;\nexports.listRelated = listRelated;\nexports.listHistoryMedia = listHistoryMedia;\nexports.listWatchlaterMedia = listWatchlaterMedia;\nexports.read = read;\nexports.update = update;\nexports.remove = remove;\nexports.like = like;\nexports.dislike = dislike;\nexports.searchMediaBy = searchMediaBy;\nexports.searchHistory = searchHistory;\nexports.searchWatchlater = searchWatchlater;\n\n//# sourceURL=webpack:///./src/store/states/media/media.api.js?");

/***/ }),

/***/ "./src/store/states/media/media.initial-state.js":
/*!*******************************************************!*\
  !*** ./src/store/states/media/media.initial-state.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nconst initialState = {\n    processing: {\n        all: false,\n        popular: false,\n        related: false,\n        history: false,\n        watchlater: false,\n        singleMedia: false,\n        user: false\n    },\n    isError: {\n        all: false,\n        popular: false,\n        related: false,\n        history: false,\n        watchlater: false,\n        singleMedia: false,\n        user: false\n    },\n    all: {\n        allIds: [],\n        byId: {}\n    },\n    popular: {\n        allIds: [],\n        byId: {}\n    },\n    related: {\n        allIds: [],\n        byId: {}\n    },\n    history: {\n        allIds: [],\n        byId: {},\n        currentPage: 0,\n        total: 0,\n        pageSize: 4\n    },\n    watchlater: {\n        allIds: [],\n        byId: {},\n        currentPage: 0,\n        total: 0,\n        pageSize: 4\n    },\n    user: {\n        allIds: [],\n        byId: {}\n    },\n    singleMedia: null\n};\n\nexports.default = initialState;\n\n//# sourceURL=webpack:///./src/store/states/media/media.initial-state.js?");

/***/ }),

/***/ "./src/store/states/media/media.operations.js":
/*!****************************************************!*\
  !*** ./src/store/states/media/media.operations.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.searchWatchlater = exports.searchHistory = exports.searchMedia = exports.dislikeMedia = exports.likeMedia = exports.replaceMediaFromPlaylist = exports.removeMedia = exports.updateMedia = exports.readMedia = exports.listUserMedia = exports.listWatchlaterMedia = exports.listHistoryMedia = exports.listRelatedMedia = exports.listPopularMedia = exports.createMedia = undefined;\n\nvar _actions = __webpack_require__(/*! connected-react-router/lib/actions */ \"connected-react-router/lib/actions\");\n\nvar _media = __webpack_require__(/*! ./media.api */ \"./src/store/states/media/media.api.js\");\n\nvar mediaApiCalls = _interopRequireWildcard(_media);\n\nvar _media2 = __webpack_require__(/*! ./media.actions */ \"./src/store/states/media/media.actions.js\");\n\nvar _media3 = _interopRequireDefault(_media2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nconst createMedia = media => {\n\treturn (dispatch, getState) => {\n\t\tdispatch(_media3.default.createMediaRequest());\n\t\tlet csrfToken = getState().csrf;\n\t\tmediaApiCalls.create({ media, csrfToken }).then(response => {\n\t\t\tlet media = response.data.media;\n\t\t\tdispatch(_media3.default.createMediaSuccess(media));\n\t\t\tdispatch((0, _actions.push)('/'));\n\t\t}).catch(error => {\n\t\t\tdispatch(_media3.default.createMediaError(error.message));\n\t\t});\n\t};\n};\n\nconst listPopularMedia = () => {\n\treturn dispatch => {\n\t\tdispatch(_media3.default.listPopularMediaRequest());\n\t\tmediaApiCalls.listPopular().then(response => {\n\t\t\tlet medias = response.data.medias;\n\t\t\tdispatch(_media3.default.listPopularMediaSuccess(medias));\n\t\t}).catch(error => {\n\t\t\tdispatch(_media3.default.listPopularMediaError(error.message));\n\t\t});\n\t};\n};\n\nconst listRelatedMedia = mediaId => {\n\treturn dispatch => {\n\t\tdispatch(_media3.default.listRelatedMediaRequest());\n\t\tmediaApiCalls.listRelated({ mediaId }).then(response => {\n\t\t\tlet medias = response.data.medias;\n\t\t\tdispatch(_media3.default.listRelatedMediaSuccess(medias));\n\t\t}).catch(error => {\n\t\t\tdispatch(_media3.default.listRelatedMediaError(error.message));\n\t\t});\n\t};\n};\n\nconst listHistoryMedia = (pageNumber, pageSize) => {\n\treturn dispatch => {\n\t\tdispatch(_media3.default.listHistoryMediaRequest());\n\t\tmediaApiCalls.listHistoryMedia({ pageNumber, pageSize, searchField: 'history' }).then(response => {\n\t\t\tlet { medias, total } = response.data;\n\t\t\tdispatch(_media3.default.listHistoryMediaSuccess({ medias, total }));\n\t\t}).catch(error => {\n\t\t\tdispatch(_media3.default.listHistoryMediaError(error.message));\n\t\t});\n\t};\n};\n\nconst listWatchlaterMedia = (pageNumber, pageSize) => {\n\treturn dispatch => {\n\t\tdispatch(_media3.default.listWatchlaterMediaRequest());\n\t\tmediaApiCalls.listWatchlaterMedia({ pageNumber, pageSize, searchField: 'watchlater' }).then(response => {\n\t\t\tlet { medias, total } = response.data;\n\t\t\tdispatch(_media3.default.listWatchlaterMediaSuccess({ medias, total }));\n\t\t}).catch(error => {\n\t\t\tdispatch(_media3.default.listWatchlaterMediaError(error.message));\n\t\t});\n\t};\n};\n\nconst listUserMedia = (pageNumber, pageSize) => {\n\treturn dispatch => {\n\t\tdispatch(_media3.default.listUserMediaRequest());\n\t\tmediaApiCalls.listByUser().then(response => {\n\t\t\tlet { medias, total } = response.data;\n\t\t\tdispatch(_media3.default.listUserMediaSuccess({ medias, total }));\n\t\t}).catch(error => {\n\t\t\tdispatch(_media3.default.listUserMediaError(error.message));\n\t\t});\n\t};\n};\n\nconst readMedia = (mediaId, redirectAfterRead = false) => {\n\treturn dispatch => {\n\t\tdispatch(_media3.default.readMediaRequest());\n\t\tmediaApiCalls.read({ mediaId }).then(response => {\n\t\t\tlet media = response.data.media;\n\t\t\tdispatch(_media3.default.readMediaSuccess(media));\n\t\t\tif (redirectAfterRead) {\n\t\t\t\tdispatch((0, _actions.push)(`/media/${media._id}`));\n\t\t\t}\n\t\t}).catch(error => {\n\t\t\tdispatch(_media3.default.readMediaError(error.message));\n\t\t});\n\t};\n};\n\nconst updateMedia = (media, mediaId) => {\n\treturn (dispatch, getState) => {\n\t\tdispatch(_media3.default.updateMediaRequest());\n\t\tlet csrfToken = getState().csrf;\n\t\tmediaApiCalls.update({ media, mediaId, csrfToken }).then(response => {\n\t\t\tlet media = response.data.media;\n\t\t\tdispatch(_media3.default.updateMediaSuccess(media));\n\t\t\tdispatch((0, _actions.push)(`/media/${mediaId}`));\n\t\t}).catch(error => {\n\t\t\tdispatch(_media3.default.updateMediaError(error.message));\n\t\t});\n\t};\n};\n\nconst removeMedia = mediaId => {\n\treturn (dispatch, getState) => {\n\t\tdispatch(_media3.default.removeMediaRequest());\n\t\tlet csrfToken = getState().csrf;\n\t\tmediaApiCalls.remove({ mediaId, csrfToken }).then(response => {\n\t\t\tlet media = response.data.mediaId;\n\t\t\tdispatch(_media3.default.removeMediaSuccess(media));\n\t\t\tdispatch((0, _actions.push)('/'));\n\t\t}).catch(error => {\n\t\t\tdispatch(_media3.default.removeMediaError(error.message));\n\t\t});\n\t};\n};\n\nconst likeMedia = mediaId => {\n\treturn (dispatch, getState) => {\n\t\tdispatch(_media3.default.likeMediaRequest());\n\t\tlet csrfToken = getState().csrf;\n\t\tmediaApiCalls.like({ mediaId, csrfToken }).then(response => {\n\t\t\tlet media = response.data.media;\n\t\t\tdispatch(_media3.default.likeMediaSuccess(media));\n\t\t}).catch(error => {\n\t\t\tdispatch(_media3.default.likeMediaError(error.message));\n\t\t});\n\t};\n};\n\nconst dislikeMedia = mediaId => {\n\treturn (dispatch, getState) => {\n\t\tdispatch(_media3.default.dislikeMediaRequest());\n\t\tlet csrfToken = getState().csrf;\n\t\tmediaApiCalls.dislike({ mediaId, csrfToken }).then(response => {\n\t\t\tlet media = response.data.media;\n\t\t\tdispatch(_media3.default.dislikeMediaSuccess(media));\n\t\t}).catch(error => {\n\t\t\tdispatch(_media3.default.dislikeMediaError(error.message));\n\t\t});\n\t};\n};\n\nconst searchMedia = input => {\n\treturn dispatch => {\n\t\tdispatch(_media3.default.searchMediaRequest());\n\t\tmediaApiCalls.searchMediaBy({ input }).then(response => {\n\t\t\tlet medias = response.data.medias;\n\t\t\tdispatch(_media3.default.searchMediaSuccess(medias));\n\t\t\tdispatch((0, _actions.push)('/search/medias'));\n\t\t}).catch(error => {\n\t\t\tdispatch(_media3.default.searchMediaError(error.message));\n\t\t});\n\t};\n};\n\nconst searchHistory = (input, page, pageSize) => {\n\treturn dispatch => {\n\t\tdispatch(_media3.default.searchHistoryRequest());\n\t\t//let csrfToken = getState().csrf;\n\t\tmediaApiCalls.searchHistory({ input, page, pageSize }).then(response => {\n\t\t\tconsole.log(response);\n\t\t\tlet { medias, total } = response.data;\n\t\t\tif (page == 0) {\n\t\t\t\tdispatch(_media3.default.resetHistoryList());\n\t\t\t}\n\t\t\tdispatch(_media3.default.searchHistorySuccess({ medias, total }));\n\t\t}).catch(error => {\n\t\t\tdispatch(_media3.default.searchHistoryError(error.message));\n\t\t});\n\t};\n};\n\nconst searchWatchlater = (input, page, pageSize) => {\n\treturn dispatch => {\n\t\tdispatch(_media3.default.searchWatchlaterRequest());\n\t\t//let csrfToken = getState().csrf;\n\t\tmediaApiCalls.searchWatchlater({ input, page, pageSize }).then(response => {\n\t\t\tconsole.log(response);\n\t\t\tlet { medias, total } = response.data;\n\t\t\tif (page == 0) {\n\t\t\t\tdispatch(_media3.default.resetWatchlater());\n\t\t\t}\n\t\t\tdispatch(_media3.default.searchWatchlaterSuccess({ medias, total }));\n\t\t}).catch(error => {\n\t\t\tdispatch(_media3.default.searchWatchlaterError(error.message));\n\t\t});\n\t};\n};\n\nconst replaceMediaFromPlaylist = mediaId => {\n\treturn dispatch => {\n\t\tdispatch(_media3.default.replaceMediaFromList(mediaId));\n\t};\n};\n\nexports.createMedia = createMedia;\nexports.listPopularMedia = listPopularMedia;\nexports.listRelatedMedia = listRelatedMedia;\nexports.listHistoryMedia = listHistoryMedia;\nexports.listWatchlaterMedia = listWatchlaterMedia;\nexports.listUserMedia = listUserMedia;\nexports.readMedia = readMedia;\nexports.updateMedia = updateMedia;\nexports.removeMedia = removeMedia;\nexports.replaceMediaFromPlaylist = replaceMediaFromPlaylist;\nexports.likeMedia = likeMedia;\nexports.dislikeMedia = dislikeMedia;\nexports.searchMedia = searchMedia;\nexports.searchHistory = searchHistory;\nexports.searchWatchlater = searchWatchlater;\n\n//# sourceURL=webpack:///./src/store/states/media/media.operations.js?");

/***/ }),

/***/ "./src/store/states/media/media.reducer.js":
/*!*************************************************!*\
  !*** ./src/store/states/media/media.reducer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n//crud\n\n//UActions\n\n\nvar _media = __webpack_require__(/*! ./media.types */ \"./src/store/states/media/media.types.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _reduceReducers = __webpack_require__(/*! reduce-reducers */ \"reduce-reducers\");\n\nvar _reduceReducers2 = _interopRequireDefault(_reduceReducers);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _category = __webpack_require__(/*! ./category */ \"./src/store/states/media/category/index.js\");\n\nvar _category2 = _interopRequireDefault(_category);\n\nvar _tag = __webpack_require__(/*! ./tag */ \"./src/store/states/media/tag/index.js\");\n\nvar _tag2 = _interopRequireDefault(_tag);\n\nvar _media3 = __webpack_require__(/*! ./media.initial-state */ \"./src/store/states/media/media.initial-state.js\");\n\nvar _media4 = _interopRequireDefault(_media3);\n\nvar _createMedia = __webpack_require__(/*! ./media-reducers/create-media.reducer */ \"./src/store/states/media/media-reducers/create-media.reducer.js\");\n\nvar _createMedia2 = _interopRequireDefault(_createMedia);\n\nvar _getMediaList = __webpack_require__(/*! ./media-reducers/get-media-list.reducer */ \"./src/store/states/media/media-reducers/get-media-list.reducer.js\");\n\nvar _getMediaList2 = _interopRequireDefault(_getMediaList);\n\nvar _history = __webpack_require__(/*! ./media-reducers/history.reducer */ \"./src/store/states/media/media-reducers/history.reducer.js\");\n\nvar _history2 = _interopRequireDefault(_history);\n\nvar _userMedia = __webpack_require__(/*! ./media-reducers/user-media.reducer */ \"./src/store/states/media/media-reducers/user-media.reducer.js\");\n\nvar _userMedia2 = _interopRequireDefault(_userMedia);\n\nvar _watchlater = __webpack_require__(/*! ./media-reducers/watchlater.reducer */ \"./src/store/states/media/media-reducers/watchlater.reducer.js\");\n\nvar _watchlater2 = _interopRequireDefault(_watchlater);\n\nvar _popularMedias = __webpack_require__(/*! ./media-reducers/popular-medias.reducer */ \"./src/store/states/media/media-reducers/popular-medias.reducer.js\");\n\nvar _popularMedias2 = _interopRequireDefault(_popularMedias);\n\nvar _relatedMedia = __webpack_require__(/*! ./media-reducers/related-media.reducer */ \"./src/store/states/media/media-reducers/related-media.reducer.js\");\n\nvar _relatedMedia2 = _interopRequireDefault(_relatedMedia);\n\nvar _removeMedia = __webpack_require__(/*! ./media-reducers/CRUD/remove-media.reducer */ \"./src/store/states/media/media-reducers/CRUD/remove-media.reducer.js\");\n\nvar _removeMedia2 = _interopRequireDefault(_removeMedia);\n\nvar _readMedia = __webpack_require__(/*! ./media-reducers/CRUD/read-media.reducer */ \"./src/store/states/media/media-reducers/CRUD/read-media.reducer.js\");\n\nvar _readMedia2 = _interopRequireDefault(_readMedia);\n\nvar _updateMedia = __webpack_require__(/*! ./media-reducers/CRUD/update-media.reducer */ \"./src/store/states/media/media-reducers/CRUD/update-media.reducer.js\");\n\nvar _updateMedia2 = _interopRequireDefault(_updateMedia);\n\nvar _likeMedia = __webpack_require__(/*! ./media-reducers/UActions/like-media.reducer */ \"./src/store/states/media/media-reducers/UActions/like-media.reducer.js\");\n\nvar _likeMedia2 = _interopRequireDefault(_likeMedia);\n\nvar _search = __webpack_require__(/*! ./media-reducers/UActions/search.reducer */ \"./src/store/states/media/media-reducers/UActions/search.reducer.js\");\n\nvar _search2 = _interopRequireDefault(_search);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst listManipulations = (state = _media4.default, action) => {\n\tconst { type, payload } = action;\n\tswitch (type) {\n\t\tcase _media2.default.REPLACE_MEDIA_FROM_LIST:\n\t\t\tlet newState = _extends({}, state, {\n\t\t\t\tsingleMedia: state.related.byId[payload],\n\t\t\t\trelated: _extends({}, state.related, {\n\t\t\t\t\tallIds: [...state.related.allIds.filter(id => id != payload)]\n\t\t\t\t})\n\t\t\t});\n\t\t\tdelete newState.related.byId[payload];\n\t\t\treturn newState;\n\t\t\tbreak;\n\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nconst mediaReducer = (0, _reduceReducers2.default)(_createMedia2.default, _getMediaList2.default, _userMedia2.default, _popularMedias2.default, _relatedMedia2.default, _history2.default, _watchlater2.default, listManipulations, _readMedia2.default, _updateMedia2.default, _removeMedia2.default, _likeMedia2.default, _search2.default);\n\nconst mainMediaReducer = (0, _redux.combineReducers)({\n\tmedias: mediaReducer,\n\tcategories: _category2.default,\n\ttags: _tag2.default\n});\n\nexports.default = mainMediaReducer;\n\n//# sourceURL=webpack:///./src/store/states/media/media.reducer.js?");

/***/ }),

/***/ "./src/store/states/media/media.selectors.js":
/*!***************************************************!*\
  !*** ./src/store/states/media/media.selectors.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.selectPageSize = exports.noMoreItems = exports.selectTotal = exports.selectCurrentPage = exports.selectMediaFromResource = exports.selectSingleMedia = exports.selectErrorText = exports.selectIsProcessing = exports.selectMedias = undefined;\n\nvar _reselect = __webpack_require__(/*! reselect */ \"reselect\");\n\nconst selectMediasByKey = (state, key) => {\n\tlet byId = state[key].byId;\n\tlet allIds = state[key].allIds;\n\treturn allIds.map(id => byId[id]);\n};\n\nconst selectMedias = (0, _reselect.createSelector)(selectMediasByKey, medias => medias);\n\nconst selectMediaFromResource = (state, mediaId, key) => {\n\tlet byId = state[key] && state[key].byId;\n\tlet media = byId[mediaId];\n\treturn media;\n};\n\nconst selectIsProcessing = (state, key) => state.processing[key];\n\nconst selectCurrentPage = (state, key) => state[key].currentPage;\n\nconst selectTotal = (state, key) => state[key].total;\n\nconst selectPageSize = (state, key) => state[key].pageSize;\n\nconst noMoreItems = (state, key) => state[key].currentPage * state[key].pageSize >= state[key].total;\n\nconst selectErrorText = (state, key) => state.isError[key] ? state.isError[key] : null;\n\nconst selectSingleMedia = state => state.singleMedia;\n\nexports.selectMedias = selectMedias;\nexports.selectIsProcessing = selectIsProcessing;\nexports.selectErrorText = selectErrorText;\nexports.selectSingleMedia = selectSingleMedia;\nexports.selectMediaFromResource = selectMediaFromResource;\nexports.selectCurrentPage = selectCurrentPage;\nexports.selectTotal = selectTotal;\nexports.noMoreItems = noMoreItems;\nexports.selectPageSize = selectPageSize;\n\n//# sourceURL=webpack:///./src/store/states/media/media.selectors.js?");

/***/ }),

/***/ "./src/store/states/media/media.types.js":
/*!***********************************************!*\
  !*** ./src/store/states/media/media.types.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n\nconst CREATE_MEDIA_REQUEST = 'Newmedia page/CREATE_MEDIA_REQUEST';\nconst CREATE_MEDIA_SUCCESS = 'Api response/CREATE_MEDIA_SUCCESS';\nconst CREATE_MEDIA_ERROR = 'Api response/CREATE_MEDIA_ERROR';\n\nconst LIST_POPULAR_MEDIA_REQUEST = 'Home page/LIST_POPULAR_MEDIA_REQUEST';\nconst LIST_POPULAR_MEDIA_SUCCESS = 'Api response/LIST_POPULAR_MEDIA_SUCCESS';\nconst LIST_POPULAR_MEDIA_ERROR = 'Api response/LIST_POPULAR_MEDIA_ERROR';\n\nconst LIST_USER_MEDIA_REQUEST = 'Profile page/LIST_USER_MEDIA_REQUEST';\nconst LIST_USER_MEDIA_SUCCESS = 'Api response/LIST_USER_MEDIA_SUCCESS';\nconst LIST_USER_MEDIA_ERROR = 'Api response/LIST_USER_MEDIA_ERROR';\n\nconst LIST_RELATED_MEDIA_REQUEST = 'Single media page/LIST_RELATED_MEDIA_REQUEST';\nconst LIST_RELATED_MEDIA_SUCCESS = 'Api response/LIST_RELATED_MEDIA_SUCCESS';\nconst LIST_RELATED_MEDIA_ERROR = 'Api response/LIST_RELATED_MEDIA_ERROR';\n\nconst LIST_HISTORY_MEDIA_REQUEST = 'History media page/LIST_HISTORY_MEDIA_REQUEST';\nconst LIST_HISTORY_MEDIA_SUCCESS = 'Api response/LIST_HISTORY_MEDIA_SUCCESS';\nconst LIST_HISTORY_MEDIA_ERROR = 'Api response/LIST_HISTORY_MEDIA_ERROR';\n\nconst LIST_WATCHLATER_MEDIA_REQUEST = 'Watch later media page/LIST_WATCHLATER_MEDIA_REQUEST';\nconst LIST_WATCHLATER_MEDIA_SUCCESS = 'Api response/LIST_WATCHLATER_MEDIA_SUCCESS';\nconst LIST_WATCHLATER_MEDIA_ERROR = 'Api response/LIST_WATCHLATER_MEDIA_ERROR';\n\nconst REPLACE_MEDIA_FROM_LIST = 'Single media page autoplay/REPLACE_MEDIA_FROM_LIST';\n\nconst READ_MEDIA_REQUEST = 'Single media page/READ_MEDIA_REQUEST';\nconst READ_MEDIA_SUCCESS = 'Api response/READ_MEDIA_SUCCESS';\nconst READ_MEDIA_ERROR = 'Api response/READ_MEDIA_ERROR';\n\nconst UPDATE_MEDIA_REQUEST = 'Edit media page/UPDATE_MEDIA_REQUEST';\nconst UPDATE_MEDIA_SUCCESS = 'Api response/UPDATE_MEDIA_SUCCESS';\nconst UPDATE_MEDIA_ERROR = 'Api response/UPDATE_MEDIA_ERROR';\n\nconst REMOVE_MEDIA_REQUEST = 'Single media page/REMOVE_MEDIA_REQUEST';\nconst REMOVE_MEDIA_SUCCESS = 'Api response/REMOVE_MEDIA_SUCCESS';\nconst REMOVE_MEDIA_ERROR = 'Api response/REMOVE_MEDIA_ERROR';\n\nconst LIKE_MEDIA_REQUEST = 'Single media page/LIKE_MEDIA_REQUEST';\nconst LIKE_MEDIA_SUCCESS = 'Api response/LIKE_MEDIA_SUCCESS';\nconst LIKE_MEDIA_ERROR = 'Api response/LIKE_MEDIA_ERROR';\n\nconst DISLIKE_MEDIA_REQUEST = 'Single media page/DISLIKE_MEDIA_REQUEST';\nconst DISLIKE_MEDIA_SUCCESS = 'Api response/DISLIKE_MEDIA_SUCCESS';\nconst DISLIKE_MEDIA_ERROR = 'Api response/DISLIKE_MEDIA_ERROR';\n\nconst SEARCH_MEDIA_REQUEST = 'Main nav search/SEARCH_MEDIA_REQUEST';\nconst SEARCH_MEDIA_SUCCESS = 'Api response/SEARCH_MEDIA_SUCCESS';\nconst SEARCH_MEDIA_ERROR = 'Api response/SEARCH_MEDIA_ERROR';\n\nconst SEARCH_HISTORY_REQUEST = 'History page search/SEARCH_HISTORY_REQUEST';\nconst SEARCH_HISTORY_SUCCESS = 'Api response/SEARCH_HISTORY_SUCCESS';\nconst SEARCH_HISTORY_ERROR = 'Api response/SEARCH_HISTORY_ERROR';\n\nconst SEARCH_WATCHLATER_REQUEST = 'WATCHLATER page search/SEARCH_WATCHLATER_REQUEST';\nconst SEARCH_WATCHLATER_SUCCESS = 'Api response/SEARCH_WATCHLATER_SUCCESS';\nconst SEARCH_WATCHLATER_ERROR = 'Api response/SEARCH_WATCHLATER_ERROR';\n\nconst RESET_HISTORY_LIST = 'History page search/RESET_HISTORY_LIST';\n\nexports.default = {\n\tCREATE_MEDIA_REQUEST, CREATE_MEDIA_SUCCESS, CREATE_MEDIA_ERROR,\n\n\tLIST_RELATED_MEDIA_REQUEST, LIST_RELATED_MEDIA_SUCCESS, LIST_RELATED_MEDIA_ERROR,\n\tLIST_POPULAR_MEDIA_REQUEST, LIST_POPULAR_MEDIA_SUCCESS, LIST_POPULAR_MEDIA_ERROR,\n\tLIST_USER_MEDIA_REQUEST, LIST_USER_MEDIA_SUCCESS, LIST_USER_MEDIA_ERROR,\n\tLIST_HISTORY_MEDIA_REQUEST, LIST_HISTORY_MEDIA_SUCCESS, LIST_HISTORY_MEDIA_ERROR,\n\tLIST_WATCHLATER_MEDIA_REQUEST, LIST_WATCHLATER_MEDIA_SUCCESS, LIST_WATCHLATER_MEDIA_ERROR,\n\n\tREPLACE_MEDIA_FROM_LIST,\n\n\tREAD_MEDIA_REQUEST, READ_MEDIA_SUCCESS, READ_MEDIA_ERROR,\n\n\tUPDATE_MEDIA_REQUEST, UPDATE_MEDIA_SUCCESS, UPDATE_MEDIA_ERROR,\n\n\tREMOVE_MEDIA_REQUEST, REMOVE_MEDIA_SUCCESS, REMOVE_MEDIA_ERROR,\n\n\tLIKE_MEDIA_REQUEST, LIKE_MEDIA_SUCCESS, LIKE_MEDIA_ERROR,\n\tDISLIKE_MEDIA_REQUEST, DISLIKE_MEDIA_SUCCESS, DISLIKE_MEDIA_ERROR,\n\n\tSEARCH_MEDIA_REQUEST, SEARCH_MEDIA_SUCCESS, SEARCH_MEDIA_ERROR,\n\n\tSEARCH_HISTORY_REQUEST, SEARCH_HISTORY_SUCCESS, SEARCH_HISTORY_ERROR,\n\tSEARCH_WATCHLATER_REQUEST, SEARCH_WATCHLATER_SUCCESS, SEARCH_WATCHLATER_ERROR,\n\n\tRESET_HISTORY_LIST\n};\n\n//# sourceURL=webpack:///./src/store/states/media/media.types.js?");

/***/ }),

/***/ "./src/store/states/media/tag/index.js":
/*!*********************************************!*\
  !*** ./src/store/states/media/tag/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _tag = __webpack_require__(/*! ./tag.selectors */ \"./src/store/states/media/tag/tag.selectors.js\");\n\nObject.keys(_tag).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _tag[key];\n    }\n  });\n});\n\nvar _tag2 = __webpack_require__(/*! ./tag.operations */ \"./src/store/states/media/tag/tag.operations.js\");\n\nObject.keys(_tag2).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _tag2[key];\n    }\n  });\n});\n\nvar _tag3 = __webpack_require__(/*! ./tag.reducer */ \"./src/store/states/media/tag/tag.reducer.js\");\n\nvar _tag4 = _interopRequireDefault(_tag3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _tag4.default;\n\n//# sourceURL=webpack:///./src/store/states/media/tag/index.js?");

/***/ }),

/***/ "./src/store/states/media/tag/tag.actions.js":
/*!***************************************************!*\
  !*** ./src/store/states/media/tag/tag.actions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\t\tvalue: true\n});\n\nvar _tag = __webpack_require__(/*! ./tag.types */ \"./src/store/states/media/tag/tag.types.js\");\n\nvar _tag2 = _interopRequireDefault(_tag);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst getTagsRequest = () => ({\n\t\ttype: _tag2.default.GET_TAGS_REQUEST\n});\n\nconst getTagsSuccess = tags => ({\n\t\ttype: _tag2.default.GET_TAGS_SUCCESS,\n\t\tpayload: tags\n});\n\nconst getTagsError = error => ({\n\t\ttype: _tag2.default.GET_TAGS_ERROR,\n\t\tpayload: error\n});\n\nexports.default = {\n\t\tgetTagsRequest, getTagsSuccess, getTagsError\n};\n\n//# sourceURL=webpack:///./src/store/states/media/tag/tag.actions.js?");

/***/ }),

/***/ "./src/store/states/media/tag/tag.api.js":
/*!***********************************************!*\
  !*** ./src/store/states/media/tag/tag.api.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction handleErrors(response) {\n  if (response.ok || response.statusCode == 200) {\n    return response;\n  } else {\n    return response.json().then(err => {\n      throw new Error(`Error ${err.status}: ${err.message}`);\n    });\n  }\n}\n\nconst listAll = () => {\n  return fetch('/api/media/tag/all', {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json'\n    }\n  }).then(handleErrors).then(res => res.json());\n};\n\nexports.listAll = listAll;\n\n//# sourceURL=webpack:///./src/store/states/media/tag/tag.api.js?");

/***/ }),

/***/ "./src/store/states/media/tag/tag.operations.js":
/*!******************************************************!*\
  !*** ./src/store/states/media/tag/tag.operations.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.getTags = undefined;\n\nvar _connectedReactRouter = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n\nvar _tag = __webpack_require__(/*! ./tag.api */ \"./src/store/states/media/tag/tag.api.js\");\n\nvar _tag2 = __webpack_require__(/*! ./tag.actions */ \"./src/store/states/media/tag/tag.actions.js\");\n\nvar _tag3 = _interopRequireDefault(_tag2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst getTags = () => {\n\treturn dispatch => {\n\t\tdispatch(_tag3.default.getTagsRequest());\n\t\t(0, _tag.listAll)().then(response => {\n\t\t\tlet tags = response.data.tags;\n\t\t\tdispatch(_tag3.default.getTagsSuccess(tags));\n\t\t}).catch(error => {\n\t\t\tdispatch(_tag3.default.getTagsError(error.message));\n\t\t});\n\t};\n};\n\nexports.getTags = getTags;\n\n//# sourceURL=webpack:///./src/store/states/media/tag/tag.operations.js?");

/***/ }),

/***/ "./src/store/states/media/tag/tag.reducer.js":
/*!***************************************************!*\
  !*** ./src/store/states/media/tag/tag.reducer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _tag = __webpack_require__(/*! ./tag.types */ \"./src/store/states/media/tag/tag.types.js\");\n\nvar _tag2 = _interopRequireDefault(_tag);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst initialState = {\n\tprocessing: false,\n\tisError: false,\n\tdata: {\n\t\tallIds: [],\n\t\tbyId: {}\n\t}\n};\n\nconst tagReducer = (state = initialState, action) => {\n\tconst { payload, type } = action;\n\tswitch (type) {\n\t\tcase _tag2.default.GET_TAGS_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: true,\n\t\t\t\tisError: null\n\t\t\t});\n\t\t\tbreak;\n\t\tcase _tag2.default.GET_TAGS_SUCCESS:\n\t\t\tlet byIds = {};\n\t\t\tpayload.forEach(item => {\n\t\t\t\tbyIds[item._id] = item;\n\t\t\t});\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tdata: {\n\t\t\t\t\tallIds: Object.keys(byIds),\n\t\t\t\t\tbyId: byIds\n\t\t\t\t}\n\t\t\t});\n\t\t\tbreak;\n\t\tcase _tag2.default.GET_TAGS_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tisError: payload,\n\t\t\t\tdata: null\n\t\t\t});\n\t\t\tbreak;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = tagReducer;\n\n//# sourceURL=webpack:///./src/store/states/media/tag/tag.reducer.js?");

/***/ }),

/***/ "./src/store/states/media/tag/tag.selectors.js":
/*!*****************************************************!*\
  !*** ./src/store/states/media/tag/tag.selectors.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n\nconst selectAllTags = state => {\n\tlet byId = state.data.byId;\n\treturn Object.values(byId);\n};\nconst selectIsProcessing = state => state.processing;\nconst selectErrorText = state => state.isError ? state.isError : null;\n\nexports.selectAllTags = selectAllTags;\nexports.selectIsProcessing = selectIsProcessing;\nexports.selectErrorText = selectErrorText;\n\n//# sourceURL=webpack:///./src/store/states/media/tag/tag.selectors.js?");

/***/ }),

/***/ "./src/store/states/media/tag/tag.types.js":
/*!*************************************************!*\
  !*** ./src/store/states/media/tag/tag.types.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n\nconst GET_TAGS_REQUEST = 'Newmedia page/GET_TAGS_REQUEST';\nconst GET_TAGS_SUCCESS = 'Api response/GET_TAGS_SUCCESS';\nconst GET_TAGS_ERROR = 'Api response/GET_TAGS_ERROR';\n\nexports.default = {\n\tGET_TAGS_REQUEST, GET_TAGS_SUCCESS, GET_TAGS_ERROR\n\n};\n\n//# sourceURL=webpack:///./src/store/states/media/tag/tag.types.js?");

/***/ }),

/***/ "./src/store/states/root.reducer.js":
/*!******************************************!*\
  !*** ./src/store/states/root.reducer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _user = __webpack_require__(/*! ./user */ \"./src/store/states/user/index.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _app = __webpack_require__(/*! ./app */ \"./src/store/states/app/index.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _comment = __webpack_require__(/*! ./comment */ \"./src/store/states/comment/index.js\");\n\nvar _comment2 = _interopRequireDefault(_comment);\n\nvar _media = __webpack_require__(/*! ./media */ \"./src/store/states/media/index.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _channel = __webpack_require__(/*! ./channel */ \"./src/store/states/channel/index.js\");\n\nvar _channel2 = _interopRequireDefault(_channel);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst initialState = null;\nconst tokenReducer = (state = initialState, action) => {\n  return state;\n};\n\nconst rootReducer = (0, _redux.combineReducers)({\n  user: _user2.default,\n  media: _media2.default,\n  comment: _comment2.default,\n  channel: _channel2.default,\n  form: _reduxForm.reducer,\n  csrf: tokenReducer,\n  app: _app2.default\n});\n\nexports.default = rootReducer;\n\n//# sourceURL=webpack:///./src/store/states/root.reducer.js?");

/***/ }),

/***/ "./src/store/states/router/index.js":
/*!******************************************!*\
  !*** ./src/store/states/router/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _router = __webpack_require__(/*! ./router.selectors */ \"./src/store/states/router/router.selectors.js\");\n\nObject.keys(_router).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _router[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/store/states/router/index.js?");

/***/ }),

/***/ "./src/store/states/router/router.selectors.js":
/*!*****************************************************!*\
  !*** ./src/store/states/router/router.selectors.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst selectPathname = state => {\n  return state && state.location ? state.location.pathname : '/';\n};\n\nexports.selectPathname = selectPathname;\n\n//# sourceURL=webpack:///./src/store/states/router/router.selectors.js?");

/***/ }),

/***/ "./src/store/states/user/index.js":
/*!****************************************!*\
  !*** ./src/store/states/user/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ./user.selectors */ \"./src/store/states/user/user.selectors.js\");\n\nObject.keys(_user).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _user[key];\n    }\n  });\n});\n\nvar _user2 = __webpack_require__(/*! ./user.operations */ \"./src/store/states/user/user.operations.js\");\n\nObject.keys(_user2).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _user2[key];\n    }\n  });\n});\n\nvar _user3 = __webpack_require__(/*! ./user.reducer */ \"./src/store/states/user/user.reducer.js\");\n\nvar _user4 = _interopRequireDefault(_user3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _user4.default;\n\n//# sourceURL=webpack:///./src/store/states/user/index.js?");

/***/ }),

/***/ "./src/store/states/user/user.actions.js":
/*!***********************************************!*\
  !*** ./src/store/states/user/user.actions.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createAction = __webpack_require__(/*! ../utils/create-action */ \"./src/store/states/utils/create-action.js\");\n\nvar _createAction2 = _interopRequireDefault(_createAction);\n\nvar _user = __webpack_require__(/*! ./user.types */ \"./src/store/states/user/user.types.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//login\nconst loginUserRequest = (0, _createAction2.default)(_user2.default.LOGIN_USER_REQUEST, 'payload');\nconst loginUserSuccess = (0, _createAction2.default)(_user2.default.LOGIN_USER_SUCCESS, 'payload');\nconst loginUserError = (0, _createAction2.default)(_user2.default.LOGIN_USER_ERROR, 'payload');\n\n//update\nconst updateHistorySettingsRequest = (0, _createAction2.default)(_user2.default.UPDATE_HISTORY_SETTINGS_REQUEST);\nconst updateHistorySettingsSuccess = (0, _createAction2.default)(_user2.default.UPDATE_HISTORY_SETTINGS_SUCCESS, 'payload');\nconst updateHistorySettingsError = (0, _createAction2.default)(_user2.default.UPDATE_HISTORY_SETTINGS_ERROR, 'payload');\n\n//register\nconst registerUserRequest = (0, _createAction2.default)(_user2.default.REGISTER_USER_REQUEST, 'payload');\nconst registerUserSuccess = (0, _createAction2.default)(_user2.default.REGISTER_USER_SUCCESS, 'payload');\nconst registerUserError = (0, _createAction2.default)(_user2.default.REGISTER_USER_ERROR, 'payload');\n\n//history\nconst removeViewHistoryRequest = (0, _createAction2.default)(_user2.default.REMOVE_VIEW_HISTORY_REQUEST);\nconst removeViewHistorySuccess = (0, _createAction2.default)(_user2.default.REMOVE_VIEW_HISTORY_SUCCESS, 'payload');\nconst removeViewHistoryError = (0, _createAction2.default)(_user2.default.REMOVE_VIEW_HISTORY_ERROR, 'payload');\n\n//watch later\nconst addWatchLaterRequest = (0, _createAction2.default)(_user2.default.ADD_TO_WATCH_LATER_REQUEST);\nconst addWatchLaterSuccess = (0, _createAction2.default)(_user2.default.ADD_TO_WATCH_LATER_SUCCESS);\nconst addWatchLaterError = (0, _createAction2.default)(_user2.default.ADD_TO_WATCH_LATER_ERROR, 'payload');\n\nconst getUsersChannelsRequest = (0, _createAction2.default)(_user2.default.GET_USERS_CHANNELS_REQUEST);\nconst getUsersChannelsSuccess = (0, _createAction2.default)(_user2.default.GET_USERS_CHANNELS_SUCCESS, 'payload');\nconst getUsersChannelsError = (0, _createAction2.default)(_user2.default.GET_USERS_CHANNELS_ERROR, 'payload');\n\nexports.default = {\n\tloginUserRequest, loginUserSuccess, loginUserError,\n\n\tupdateHistorySettingsRequest, updateHistorySettingsSuccess, updateHistorySettingsError,\n\n\tregisterUserRequest, registerUserSuccess, registerUserError,\n\n\tremoveViewHistoryRequest, removeViewHistorySuccess, removeViewHistoryError,\n\n\taddWatchLaterRequest, addWatchLaterSuccess, addWatchLaterError,\n\n\tgetUsersChannelsRequest, getUsersChannelsSuccess, getUsersChannelsError\n};\n\n//# sourceURL=webpack:///./src/store/states/user/user.actions.js?");

/***/ }),

/***/ "./src/store/states/user/user.api.js":
/*!*******************************************!*\
  !*** ./src/store/states/user/user.api.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction handleErrors(response) {\n  if (response.ok || response.statusCode == 200) {\n    return response;\n  } else {\n    return response.json().then(err => {\n      throw new Error(`Error ${err.status}: ${err.message}`);\n    });\n  }\n}\n\nconst signup = ({ user, csrfToken }) => {\n  return fetch('/api/users/signup', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'CSRF-Token': csrfToken\n    },\n    body: JSON.stringify(user)\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst signin = ({ user, csrfToken }) => {\n  return fetch('/api/auth/signin/', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'CSRF-Token': csrfToken\n    },\n    credentials: 'include',\n    body: JSON.stringify(user)\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst checkSessionAndSignin = () => {\n  return fetch('/api/auth/signin/', {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include'\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst getUserChannels = () => {\n  return fetch('/api/user/channels', {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include'\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst clearHistory = ({ csrfToken }) => {\n  return fetch('/api/users/history/clear', {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'CSRF-Token': csrfToken\n    },\n    credentials: 'include'\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst update = ({ partialProfile, csrfToken }) => {\n  return fetch('/api/users/profile/update', {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'CSRF-Token': csrfToken\n    },\n    credentials: 'include',\n    body: JSON.stringify(partialProfile)\n  }).then(handleErrors).then(res => res.json());\n};\n\nconst addToWatchlater = ({ csrfToken, mediaId }) => {\n  return fetch('/api/users/profile/watchlater', {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'CSRF-Token': csrfToken\n    },\n    credentials: 'include',\n    body: JSON.stringify({ mediaId })\n  }).then(handleErrors).then(res => res.json());\n};\n\nexports.signin = signin;\nexports.signup = signup;\nexports.checkSessionAndSignin = checkSessionAndSignin;\nexports.clearHistory = clearHistory;\nexports.addToWatchlater = addToWatchlater;\nexports.update = update;\nexports.getUserChannels = getUserChannels;\n\n//# sourceURL=webpack:///./src/store/states/user/user.api.js?");

/***/ }),

/***/ "./src/store/states/user/user.operations.js":
/*!**************************************************!*\
  !*** ./src/store/states/user/user.operations.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.getUserChannels = exports.updateHistorySettings = exports.addToWatchlater = exports.clearHistory = exports.checkSession = exports.register = exports.login = undefined;\n\nvar _user = __webpack_require__(/*! ./user.api */ \"./src/store/states/user/user.api.js\");\n\nvar userApiCalls = _interopRequireWildcard(_user);\n\nvar _user2 = __webpack_require__(/*! ./user.actions */ \"./src/store/states/user/user.actions.js\");\n\nvar _user3 = _interopRequireDefault(_user2);\n\nvar _app = __webpack_require__(/*! ../app/app.operations */ \"./src/store/states/app/app.operations.js\");\n\nvar appOperations = _interopRequireWildcard(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nconst login = credentials => {\n\treturn (dispatch, getState) => {\n\t\tdispatch(_user3.default.loginUserRequest(credentials));\n\t\tlet csrfToken = getState().csrf;\n\t\tuserApiCalls.signin({ user: credentials, csrfToken }).then(response => {\n\t\t\tlet user = response.data.user;\n\t\t\tif (response.data.token) {\n\t\t\t\tuser.token = response.data.token;\n\t\t\t}\n\t\t\tdispatch(_user3.default.loginUserSuccess(user));\n\t\t}).catch(error => {\n\t\t\tdispatch(_user3.default.loginUserError(error.message));\n\t\t});\n\t};\n};\n\nconst checkSession = () => {\n\treturn dispatch => {\n\t\tuserApiCalls.checkSessionAndSignin().then(response => {\n\t\t\tlet user = response.data.user;\n\t\t\tif (response.data.token) {\n\t\t\t\tuser.token = response.data.token;\n\t\t\t}\n\t\t\tdispatch(_user3.default.loginUserSuccess(user));\n\t\t}).catch(error => {\n\t\t\tconsole.log(error);\n\t\t});\n\t};\n};\n\nconst getUserChannels = userId => {\n\treturn dispatch => {\n\t\tdispatch(_user3.default.getUsersChannelsRequest());\n\t\tuserApiCalls.getUserChannels(userId).then(response => {\n\t\t\tlet channels = response.data.channels;\n\t\t\tdispatch(_user3.default.getUsersChannelsSuccess(channels, userId));\n\t\t}).catch(error => {\n\t\t\tdispatch(_user3.default.getUsersChannelsError(error));\n\t\t});\n\t};\n};\n\nconst updateHistorySettings = historySettings => {\n\treturn (dispatch, getState) => {\n\t\tdispatch(_user3.default.updateHistorySettingsRequest());\n\t\tlet csrfToken = getState().csrf;\n\t\tlet token = getState().user.data.token;\n\t\tuserApiCalls.update({ partialProfile: historySettings, csrfToken }).then(response => {\n\t\t\tlet user = response.data.user;\n\t\t\tuser.token = token;\n\t\t\tdispatch(_user3.default.updateHistorySettingsSuccess(user));\n\t\t}).catch(error => {\n\t\t\tdispatch(_user3.default.updateHistorySettingsError(error.message));\n\t\t});\n\t};\n};\n\nconst addToWatchlater = mediaId => {\n\treturn (dispatch, getState) => {\n\t\tdispatch(_user3.default.addWatchLaterRequest());\n\t\tlet csrfToken = getState().csrf;\n\t\tuserApiCalls.addToWatchlater({ csrfToken, mediaId }).then(response => {\n\t\t\tlet user = response.data.user;\n\t\t\tdispatch(appOperations.showSnackbar({ message: 'Successfully added media to watchlist',\n\t\t\t\tvariant: 'success' }));\n\t\t\tdispatch(_user3.default.addWatchLaterSuccess(user));\n\t\t}).catch(error => {\n\t\t\tdispatch(_user3.default.addWatchLaterError(error.message));\n\t\t});\n\t};\n};\n\nconst register = credentials => {\n\treturn (dispatch, getState) => {\n\t\tdispatch(_user3.default.loginUserRequest(credentials));\n\t\tlet csrfToken = getState().csrf;\n\t\tuserApiCalls.signup({ user: credentials, csrfToken }).then(response => {\n\t\t\tdispatch(_user3.default.registerUserSuccess(response.data));\n\t\t}).catch(error => {\n\t\t\tdispatch(_user3.default.registerUserError(error.message));\n\t\t});\n\t};\n};\n\nconst clearHistory = () => {\n\treturn (dispatch, getState) => {\n\t\tdispatch(_user3.default.removeViewHistoryRequest());\n\t\tlet csrfToken = getState().csrf;\n\t\tlet user = getState().user.data;\n\t\tuserApiCalls.clearHistory({ csrfToken }).then(response => {\n\t\t\tuser.history = [];\n\t\t\tdispatch(_user3.default.removeViewHistorySuccess(user));\n\t\t}).catch(error => {\n\t\t\tdispatch(_user3.default.removeViewHistoryError(error.message));\n\t\t});\n\t};\n};\n\nexports.login = login;\nexports.register = register;\nexports.checkSession = checkSession;\nexports.clearHistory = clearHistory;\nexports.addToWatchlater = addToWatchlater;\nexports.updateHistorySettings = updateHistorySettings;\nexports.getUserChannels = getUserChannels;\n\n//# sourceURL=webpack:///./src/store/states/user/user.operations.js?");

/***/ }),

/***/ "./src/store/states/user/user.reducer.js":
/*!***********************************************!*\
  !*** ./src/store/states/user/user.reducer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _user = __webpack_require__(/*! ./user.types */ \"./src/store/states/user/user.types.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst initialState = {\n\tprocessing: false,\n\tisError: false,\n\tdata: null\n};\n\nconst userReducer = (state = initialState, action) => {\n\tconst { type, payload } = action;\n\n\tswitch (type) {\n\t\tcase _user2.default.LOGIN_USER_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: true,\n\t\t\t\tisError: null\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.LOGIN_USER_SUCCESS:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tdata: payload\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.LOGIN_USER_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tisError: payload,\n\t\t\t\tdata: null\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.UPDATE_HISTORY_SETTINGS_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: true,\n\t\t\t\tisError: null\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.UPDATE_HISTORY_SETTINGS_SUCCESS:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tdata: payload\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.UPDATE_HISTORY_SETTINGS_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tisError: payload\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.ADD_TO_WATCH_LATER_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: true,\n\t\t\t\tisError: null\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.ADD_TO_WATCH_LATER_SUCCESS:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tdata: _extends({}, state.data, payload)\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.ADD_TO_WATCH_LATER_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tisError: payload\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.REGISTER_USER_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: true,\n\t\t\t\tisError: null\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.REGISTER_USER_SUCCESS:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tdata: payload,\n\t\t\t\tisError: null\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.REGISTER_USER_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tisError: payload\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.REMOVE_VIEW_HISTORY_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: true,\n\t\t\t\tisError: null\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.REMOVE_VIEW_HISTORY_SUCCESS:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tdata: payload\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.REMOVE_VIEW_HISTORY_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tisError: payload\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.GET_USERS_CHANNELS_REQUEST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: true,\n\t\t\t\tisError: null\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.GET_USERS_CHANNELS_SUCCESS:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tdata: _extends({}, state.data, {\n\t\t\t\t\tchannels: payload\n\t\t\t\t})\n\t\t\t});\n\t\t\tbreak;\n\n\t\tcase _user2.default.GET_USERS_CHANNELS_ERROR:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tprocessing: false,\n\t\t\t\tisError: payload\n\t\t\t});\n\t\t\tbreak;\n\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = userReducer;\n\n//# sourceURL=webpack:///./src/store/states/user/user.reducer.js?");

/***/ }),

/***/ "./src/store/states/user/user.selectors.js":
/*!*************************************************!*\
  !*** ./src/store/states/user/user.selectors.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n\nconst selectUser = state => state.data;\nconst selectUserEmail = state => state.data && state.data.email;\nconst selectUserFullname = state => state.data && `${state.data.firstName} ${state.data.lastName}`;\nconst selectUserFirstName = state => state.data && state.data.firstName;\nconst selectIsProcessing = state => state.processing;\nconst selectErrorText = state => state.isError ? state.isError : null;\nconst selectIsAuthenticated = state => state.data && state.data.token;\n\nconst selectUserChannels = (state, userId) => state.data && state.data.channels;\n\nexports.selectUser = selectUser;\nexports.selectUserEmail = selectUserEmail;\nexports.selectUserFullname = selectUserFullname;\nexports.selectUserFirstName = selectUserFirstName;\nexports.selectIsProcessing = selectIsProcessing;\nexports.selectErrorText = selectErrorText;\nexports.selectIsAuthenticated = selectIsAuthenticated;\nexports.selectUserChannels = selectUserChannels;\n\n//# sourceURL=webpack:///./src/store/states/user/user.selectors.js?");

/***/ }),

/***/ "./src/store/states/user/user.types.js":
/*!*********************************************!*\
  !*** ./src/store/states/user/user.types.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n\nconst LOGIN_USER_REQUEST = 'Signin page/LOGIN_USER_REQUEST';\nconst LOGIN_USER_SUCCESS = 'Api response/LOGIN_USER_SUCCESS';\nconst LOGIN_USER_ERROR = 'Api response/LOGIN_USER_ERROR';\n\nconst REGISTER_USER_REQUEST = 'Signup page/REGISTER_USER_REQUEST';\nconst REGISTER_USER_SUCCESS = 'Api response/REGISTER_USER_SUCCESS';\nconst REGISTER_USER_ERROR = 'Api response/REGISTER_USER_ERROR';\n\nconst UPDATE_HISTORY_SETTINGS_REQUEST = 'History page/UPDATE_HISTORY_SETTINGS_REQUEST';\nconst UPDATE_HISTORY_SETTINGS_SUCCESS = 'Api response/UPDATE_HISTORY_SETTINGS_SUCCESS';\nconst UPDATE_HISTORY_SETTINGS_ERROR = 'Api response/UPDATE_HISTORY_SETTINGS_ERROR';\n\nconst GET_USERS_CHANNELS_REQUEST = 'Channels component/GET_USERS_CHANNELS_REQUEST';\nconst GET_USERS_CHANNELS_SUCCESS = 'Api response/GET_USERS_CHANNELS_SUCCESS';\nconst GET_USERS_CHANNELS_ERROR = 'Api response/GET_USERS_CHANNELS_ERROR';\n\nconst REMOVE_VIEW_HISTORY_REQUEST = 'History page/REMOVE_VIEW_HISTORY_REQUEST';\nconst REMOVE_VIEW_HISTORY_SUCCESS = 'Api response/REMOVE_VIEW_HISTORY_SUCCESS';\nconst REMOVE_VIEW_HISTORY_ERROR = 'Api response/REMOVE_VIEW_HISTORY_ERROR';\n\nconst ADD_TO_WATCH_LATER_REQUEST = 'Watch later page/ADD_TO_WATCH_LATER_REQUEST';\nconst ADD_TO_WATCH_LATER_SUCCESS = 'Api response/ADD_TO_WATCH_LATER_SUCCESS';\nconst ADD_TO_WATCH_LATER_ERROR = 'Api response/ADD_TO_WATCH_LATER_ERROR';\n\nexports.default = {\n\tLOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR,\n\n\tREGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR,\n\n\tUPDATE_HISTORY_SETTINGS_REQUEST, UPDATE_HISTORY_SETTINGS_SUCCESS, UPDATE_HISTORY_SETTINGS_ERROR,\n\tREMOVE_VIEW_HISTORY_REQUEST, REMOVE_VIEW_HISTORY_SUCCESS, REMOVE_VIEW_HISTORY_ERROR,\n\n\tADD_TO_WATCH_LATER_REQUEST, ADD_TO_WATCH_LATER_SUCCESS, ADD_TO_WATCH_LATER_ERROR,\n\n\tGET_USERS_CHANNELS_REQUEST, GET_USERS_CHANNELS_SUCCESS, GET_USERS_CHANNELS_ERROR\n};\n\n//# sourceURL=webpack:///./src/store/states/user/user.types.js?");

/***/ }),

/***/ "./src/store/states/utils/create-action.js":
/*!*************************************************!*\
  !*** ./src/store/states/utils/create-action.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nconst createAction = (type, ...argNames) => {\n    return (...args) => {\n        let action = { type };\n        argNames.forEach((argName, index) => {\n            action[argNames[index]] = args[index];\n        });\n        return action;\n    };\n};\n\nexports.default = createAction;\n\n//# sourceURL=webpack:///./src/store/states/utils/create-action.js?");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.history = exports.configStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _root = __webpack_require__(/*! ./states/root.reducer */ \"./src/store/states/root.reducer.js\");\n\nvar _root2 = _interopRequireDefault(_root);\n\nvar _connectedReactRouter = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n\nvar _history = __webpack_require__(/*! history */ \"history\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nlet history;\nif (typeof window !== 'undefined') {\n\texports.history = history = (0, _history.createBrowserHistory)();\n} else {\n\texports.history = history = (0, _history.createMemoryHistory)();\n}\n\nconst getInitialState = () => {\n\tif (typeof window !== 'undefined' && window.__APP_STATE) {\n\t\tlet state = window.__APP_STATE;\n\t\tdelete state.router; //to disable redirect to base href\n\t\tdelete window.__APP_STATE;\n\t\tlet initialScriptDom = document.getElementById('initialState');\n\t\tinitialScriptDom.parentNode.removeChild(initialScriptDom);\n\t\treturn state;\n\t}\n\treturn null;\n};\n\nconst configStore = function (defaultState = getInitialState()) {\n\n\tconst store = (0, _redux.createStore)((0, _connectedReactRouter.connectRouter)(history)(_root2.default), defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _connectedReactRouter.routerMiddleware)(history)));\n\n\tif (false) {}\n\treturn store;\n};\n\nexports.configStore = configStore;\nexports.history = history;\n\n//# sourceURL=webpack:///./src/store/store.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst CURRENT_WORKING_DIR = process.cwd();\nconst BundleAnalyzerPlugin = __webpack_require__(/*! webpack-bundle-analyzer */ \"webpack-bundle-analyzer\").BundleAnalyzerPlugin;\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  target: \"web\",\n  devtool: \"eval-source-map\",\n  entry: [path.join(CURRENT_WORKING_DIR, 'src/main.js')],\n  output: {\n    path: path.resolve(__dirname, './dist'),\n    filename: 'bundle.js',\n    publicPath: 'http://localhost:8080/'\n  },\n  module: {\n    rules: [{\n      test: /\\.js$/,\n      exclude: /(node_modules|bower_components)/,\n      loader: \"babel-loader\",\n      options: {\n        plugins: [\"react-loadable/babel\"]\n      }\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }, {\n      test: /\\.css$/,\n      loader: 'style-loader'\n    }, {\n      test: /\\.css$/,\n      loader: 'css-loader',\n      query: {\n        modules: true,\n        localIdentName: '[name]-[hash:base64:5]'\n      }\n    }]\n  },\n  plugins: [new BundleAnalyzerPlugin()]\n\n};\n\nmodule.exports = config;\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\projects\\react\\reactube\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/AppBar%22?");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Avatar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Avatar%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Card%22?");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardActions%22?");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardContent%22?");

/***/ }),

/***/ "@material-ui/core/CardHeader":
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardHeader\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardHeader%22?");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Checkbox\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Checkbox%22?");

/***/ }),

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Chip\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Chip%22?");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CircularProgress\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CircularProgress%22?");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Dialog\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Dialog%22?");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogActions%22?");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogContent%22?");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogContentText\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogContentText%22?");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogTitle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogTitle%22?");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Divider\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Divider%22?");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Drawer\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Drawer%22?");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/FormControl\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/FormControl%22?");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/FormControlLabel\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/FormControlLabel%22?");

/***/ }),

/***/ "@material-ui/core/FormLabel":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormLabel" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/FormLabel\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/FormLabel%22?");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Grid\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Grid%22?");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Icon\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Icon%22?");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/IconButton%22?");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Input\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Input%22?");

/***/ }),

/***/ "@material-ui/core/InputAdornment":
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/InputAdornment\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/InputAdornment%22?");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/InputLabel\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/InputLabel%22?");

/***/ }),

/***/ "@material-ui/core/LinearProgress":
/*!***************************************************!*\
  !*** external "@material-ui/core/LinearProgress" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/LinearProgress\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/LinearProgress%22?");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/List\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/List%22?");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItem\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItem%22?");

/***/ }),

/***/ "@material-ui/core/ListItemAvatar":
/*!***************************************************!*\
  !*** external "@material-ui/core/ListItemAvatar" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemAvatar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemAvatar%22?");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemIcon\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemIcon%22?");

/***/ }),

/***/ "@material-ui/core/ListItemSecondaryAction":
/*!************************************************************!*\
  !*** external "@material-ui/core/ListItemSecondaryAction" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemSecondaryAction\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemSecondaryAction%22?");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemText\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemText%22?");

/***/ }),

/***/ "@material-ui/core/ListSubheader":
/*!**************************************************!*\
  !*** external "@material-ui/core/ListSubheader" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListSubheader\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListSubheader%22?");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Menu\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Menu%22?");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/MenuItem\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/MenuItem%22?");

/***/ }),

/***/ "@material-ui/core/Modal":
/*!******************************************!*\
  !*** external "@material-ui/core/Modal" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Modal\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Modal%22?");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Paper\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Paper%22?");

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Radio\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Radio%22?");

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/RadioGroup\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/RadioGroup%22?");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Select\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Select%22?");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Snackbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Snackbar%22?");

/***/ }),

/***/ "@material-ui/core/SnackbarContent":
/*!****************************************************!*\
  !*** external "@material-ui/core/SnackbarContent" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/SnackbarContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/SnackbarContent%22?");

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Switch\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Switch%22?");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Tab\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Tab%22?");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Tabs\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Tabs%22?");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TextField%22?");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Toolbar%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors%22?");

/***/ }),

/***/ "@material-ui/core/colors/amber":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/amber" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/amber\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/amber%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/icons/AccessTime":
/*!************************************************!*\
  !*** external "@material-ui/icons/AccessTime" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/AccessTime\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/AccessTime%22?");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/AccountCircle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/AccountCircle%22?");

/***/ }),

/***/ "@material-ui/icons/Cancel":
/*!********************************************!*\
  !*** external "@material-ui/icons/Cancel" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Cancel\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Cancel%22?");

/***/ }),

/***/ "@material-ui/icons/Check":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Check" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Check\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Check%22?");

/***/ }),

/***/ "@material-ui/icons/CheckCircle":
/*!*************************************************!*\
  !*** external "@material-ui/icons/CheckCircle" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/CheckCircle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/CheckCircle%22?");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Close\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Close%22?");

/***/ }),

/***/ "@material-ui/icons/CloudUpload":
/*!*************************************************!*\
  !*** external "@material-ui/icons/CloudUpload" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/CloudUpload\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/CloudUpload%22?");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Delete\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Delete%22?");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Edit\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Edit%22?");

/***/ }),

/***/ "@material-ui/icons/Error":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Error" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Error\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Error%22?");

/***/ }),

/***/ "@material-ui/icons/ErrorOutline":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ErrorOutline" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ErrorOutline\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/ErrorOutline%22?");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Favorite\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Favorite%22?");

/***/ }),

/***/ "@material-ui/icons/FileUpload":
/*!************************************************!*\
  !*** external "@material-ui/icons/FileUpload" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/FileUpload\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/FileUpload%22?");

/***/ }),

/***/ "@material-ui/icons/History":
/*!*********************************************!*\
  !*** external "@material-ui/icons/History" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/History\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/History%22?");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Home\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Home%22?");

/***/ }),

/***/ "@material-ui/icons/Info":
/*!******************************************!*\
  !*** external "@material-ui/icons/Info" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Info\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Info%22?");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Menu\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Menu%22?");

/***/ }),

/***/ "@material-ui/icons/PhotoSizeSelectActual":
/*!***********************************************************!*\
  !*** external "@material-ui/icons/PhotoSizeSelectActual" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/PhotoSizeSelectActual\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/PhotoSizeSelectActual%22?");

/***/ }),

/***/ "@material-ui/icons/Save":
/*!******************************************!*\
  !*** external "@material-ui/icons/Save" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Save\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Save%22?");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Search\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Search%22?");

/***/ }),

/***/ "@material-ui/icons/Storage":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Storage" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Storage\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Storage%22?");

/***/ }),

/***/ "@material-ui/icons/Subscriptions":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Subscriptions" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Subscriptions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Subscriptions%22?");

/***/ }),

/***/ "@material-ui/icons/ThumbDown":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ThumbDown" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ThumbDown\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/ThumbDown%22?");

/***/ }),

/***/ "@material-ui/icons/ThumbUp":
/*!*********************************************!*\
  !*** external "@material-ui/icons/ThumbUp" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ThumbUp\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/ThumbUp%22?");

/***/ }),

/***/ "@material-ui/icons/VideoCall":
/*!***********************************************!*\
  !*** external "@material-ui/icons/VideoCall" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/VideoCall\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/VideoCall%22?");

/***/ }),

/***/ "@material-ui/icons/Visibility":
/*!************************************************!*\
  !*** external "@material-ui/icons/Visibility" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Visibility\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Visibility%22?");

/***/ }),

/***/ "@material-ui/icons/VisibilityOff":
/*!***************************************************!*\
  !*** external "@material-ui/icons/VisibilityOff" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/VisibilityOff\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/VisibilityOff%22?");

/***/ }),

/***/ "@material-ui/icons/Warning":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Warning" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Warning\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Warning%22?");

/***/ }),

/***/ "@material-ui/icons/WatchLater":
/*!************************************************!*\
  !*** external "@material-ui/icons/WatchLater" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/WatchLater\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/WatchLater%22?");

/***/ }),

/***/ "@material-ui/icons/Whatshot":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Whatshot" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Whatshot\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Whatshot%22?");

/***/ }),

/***/ "@material-ui/lab/Slider":
/*!******************************************!*\
  !*** external "@material-ui/lab/Slider" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/lab/Slider\");\n\n//# sourceURL=webpack:///external_%22@material-ui/lab/Slider%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cloudinary\");\n\n//# sourceURL=webpack:///external_%22cloudinary%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connected-react-router\");\n\n//# sourceURL=webpack:///external_%22connected-react-router%22?");

/***/ }),

/***/ "connected-react-router/lib/actions":
/*!*****************************************************!*\
  !*** external "connected-react-router/lib/actions" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connected-react-router/lib/actions\");\n\n//# sourceURL=webpack:///external_%22connected-react-router/lib/actions%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "csurf":
/*!************************!*\
  !*** external "csurf" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"csurf\");\n\n//# sourceURL=webpack:///external_%22csurf%22?");

/***/ }),

/***/ "downshift":
/*!****************************!*\
  !*** external "downshift" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"downshift\");\n\n//# sourceURL=webpack:///external_%22downshift%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "express-rate-limit":
/*!*************************************!*\
  !*** external "express-rate-limit" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-rate-limit\");\n\n//# sourceURL=webpack:///external_%22express-rate-limit%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack:///external_%22history%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "keycode":
/*!**************************!*\
  !*** external "keycode" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"keycode\");\n\n//# sourceURL=webpack:///external_%22keycode%22?");

/***/ }),

/***/ "lodash/debounce":
/*!**********************************!*\
  !*** external "lodash/debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/debounce\");\n\n//# sourceURL=webpack:///external_%22lodash/debounce%22?");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/extend\");\n\n//# sourceURL=webpack:///external_%22lodash/extend%22?");

/***/ }),

/***/ "lodash/throttle":
/*!**********************************!*\
  !*** external "lodash/throttle" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/throttle\");\n\n//# sourceURL=webpack:///external_%22lodash/throttle%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "p-min-delay":
/*!******************************!*\
  !*** external "p-min-delay" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"p-min-delay\");\n\n//# sourceURL=webpack:///external_%22p-min-delay%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"query-string\");\n\n//# sourceURL=webpack:///external_%22query-string%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/JssProvider\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/JssProvider%22?");

/***/ }),

/***/ "react-jss/lib/jss":
/*!************************************!*\
  !*** external "react-jss/lib/jss" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/jss\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/jss%22?");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable\");\n\n//# sourceURL=webpack:///external_%22react-loadable%22?");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-player\");\n\n//# sourceURL=webpack:///external_%22react-player%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/StaticRouter":
/*!************************************************!*\
  !*** external "react-router-dom/StaticRouter" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom/StaticRouter\");\n\n//# sourceURL=webpack:///external_%22react-router-dom/StaticRouter%22?");

/***/ }),

/***/ "reduce-reducers":
/*!**********************************!*\
  !*** external "reduce-reducers" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reduce-reducers\");\n\n//# sourceURL=webpack:///external_%22reduce-reducers%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-form\");\n\n//# sourceURL=webpack:///external_%22redux-form%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request\");\n\n//# sourceURL=webpack:///external_%22request%22?");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reselect\");\n\n//# sourceURL=webpack:///external_%22reselect%22?");

/***/ }),

/***/ "screenfull":
/*!*****************************!*\
  !*** external "screenfull" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"screenfull\");\n\n//# sourceURL=webpack:///external_%22screenfull%22?");

/***/ }),

/***/ "victory":
/*!**************************!*\
  !*** external "victory" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"victory\");\n\n//# sourceURL=webpack:///external_%22victory%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-bundle-analyzer":
/*!******************************************!*\
  !*** external "webpack-bundle-analyzer" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-bundle-analyzer\");\n\n//# sourceURL=webpack:///external_%22webpack-bundle-analyzer%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });