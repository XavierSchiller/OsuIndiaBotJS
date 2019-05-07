module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DiscordOsu.json":
/*!*****************************!*\
  !*** ./src/DiscordOsu.json ***!
  \*****************************/
/*! exports provided: FetchUser, GetUserBest, GetRecent, setUser, default */
/***/ (function(module) {

eval("module.exports = {\"FetchUser\":{\"Alias\":[\"user\",\"usr\",\"profile\",\"osu\"],\"ShortDesc\":\"Fetches the User Profile of a given user.\",\"LongDesc\":\"What Long Desc?\",\"ErrorMessage\":\":eyes:\",\"Usage\":\"FetchUser user1 user2\"},\"GetUserBest\":{\"Alias\":[\"top\",\"best\"],\"ShortDesc\":\"Fetches the Best Plays of a given user.\",\"LongDesc\":\"What Long Desc?\",\"ErrorMessage\":\"Wha' did ya do?\",\"Usage\":\"top user1 user2\"},\"GetRecent\":{\"Alias\":[\"recent\",\"rs\",\"r\"],\"ShortDesc\":\"Fetches the Best Plays of a given user.\",\"LongDesc\":\"What Long Desc?\",\"ErrorMessage\":\"Wha' did ya do?\",\"Usage\":\"rs user1 user2\"},\"setUser\":{\"Alias\":[\"set\"],\"ShortDesc\":\"Fetches the Best Plays of a given user.\",\"LongDesc\":\"What Long Desc?\",\"ErrorMessage\":\"Wha' did ya do?\",\"Usage\":\"set user1\"}};\n\n//# sourceURL=webpack:///./src/DiscordOsu.json?");

/***/ }),

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/*! exports provided: OsuApiKey, DiscordKey, default */
/***/ (function(module) {

eval("module.exports = {\"OsuApiKey\":\"foobar\",\"DiscordKey\":\"foobar\"};\n\n//# sourceURL=webpack:///./src/config.json?");

/***/ }),

/***/ "./src/embedCreator.js":
/*!*****************************!*\
  !*** ./src/embedCreator.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar embed =\n/*#__PURE__*/\nfunction () {\n  function embed(title, desc) {\n    _classCallCheck(this, embed);\n\n    this.embed = {};\n    this.embed.title = title;\n    this.embed.description = desc;\n    this.embed.color = 0xff000a;\n  }\n\n  _createClass(embed, [{\n    key: \"withTitle\",\n    value: function withTitle(title) {\n      this.embed.title = title;\n    }\n  }, {\n    key: \"withDesc\",\n    value: function withDesc(Desc) {\n      this.embed.description = Desc;\n    }\n  }, {\n    key: \"withAuthor\",\n    value: function withAuthor(name, avatarUrl) {\n      this.embed.author = {};\n      this.embed.author.name = name;\n      this.embed.author.icon_url = avatarUrl;\n    }\n  }, {\n    key: \"Withthumb\",\n    value: function Withthumb(url) {\n      this.embed.thumbnail = {};\n      this.embed.thumbnail.url = url;\n    }\n  }, {\n    key: \"Withimg\",\n    value: function Withimg(imgurl) {\n      this.embed.image = {};\n      this.embed.image.url = imgurl;\n    }\n  }, {\n    key: \"construct\",\n    value: function construct() {\n      return JSON.stringify(this);\n    }\n  }]);\n\n  return embed;\n}();\n\nmodule.exports = embed;\n\n//# sourceURL=webpack:///./src/embedCreator.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Tokens = __webpack_require__(/*! ./config.json */ \"./src/config.json\");\n\nvar nodeosu = __webpack_require__(/*! node-osu */ \"node-osu\");\n\nvar eris = __webpack_require__(/*! eris */ \"eris\");\n\nvar CmdConf = __webpack_require__(/*! ./DiscordOsu.json */ \"./src/DiscordOsu.json\");\n\nvar OsuMethods = __webpack_require__(/*! ./osu */ \"./src/osu/index.js\");\n\nvar nedb = __webpack_require__(/*! nedb */ \"nedb\");\n\nvar db = new nedb({\n  filename: \"./Info.db\"\n});\nvar Osu = new nodeosu.Api(Tokens.OsuApiKey, {\n  notFoundAsError: true,\n  completeScores: false\n});\nvar Discord = new eris.CommandClient(Tokens.DiscordKey, {\n  autoreconnect: true\n}, {\n  description: \"A Bot Specifically Designed for Osu!India.\",\n  owner: \"Xav\",\n  prefix: \"`\"\n});\nObject.keys(OsuMethods).forEach(function (func) {\n  Discord.registerCommand(func, function (msg, args) {\n    OsuMethods[func](func, Osu, Discord, msg, args, db);\n  }, {\n    aliases: CmdConf[func].Alias,\n    description: CmdConf[func].ShortDesc,\n    fullDescription: CmdConf[func].LongDesc,\n    usage: CmdConf[func].Usage\n  });\n});\nDiscord.on(\"ready\", function () {\n  console.log(\"Ready!\");\n});\ndb.loadDatabase(function (err) {\n  if (!err) db.ensureIndex({\n    fieldName: \"OsuID\",\n    unique: true\n  });\n  db.ensureIndex({\n    fieldName: \"discordID\",\n    unique: true\n  });\n  console.log(\"Database is Loaded!\");\n  Discord.connect();\n});\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/osu/GetRecent.js":
/*!******************************!*\
  !*** ./src/osu/GetRecent.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar embed = __webpack_require__(/*! ../embedCreator */ \"./src/embedCreator.js\");\n\nvar util = __webpack_require__(/*! ./utils */ \"./src/osu/utils.js\");\n\nmodule.exports.GetRecent =\n/*#__PURE__*/\nfunction () {\n  var _GetRecent = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(Osu, Discord, msg, msgargs, db) {\n    var res, username;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            if (!(msgargs.length == 0)) {\n              _context2.next = 4;\n              break;\n            }\n\n            //What happens when there's no username specified.\n            //Searching for username\n            db.find({\n              discordID: msg.author.id\n            },\n            /*#__PURE__*/\n            function () {\n              var _ref = _asyncToGenerator(\n              /*#__PURE__*/\n              regeneratorRuntime.mark(function _callee(err, docs) {\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        if (!(docs.length == 0)) {\n                          _context.next = 4;\n                          break;\n                        }\n\n                        res = new embed(\"Recent Scores\", \"You were not found in the database, set your username.\");\n                        _context.next = 7;\n                        break;\n\n                      case 4:\n                        _context.next = 6;\n                        return GetUserScores(Osu, docs[0].OsuID);\n\n                      case 6:\n                        res = _context.sent;\n\n                      case 7:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function (_x6, _x7) {\n                return _ref.apply(this, arguments);\n              };\n            }());\n            _context2.next = 8;\n            break;\n\n          case 4:\n            username = msgargs[0];\n            _context2.next = 7;\n            return GetUserScores(Osu, username);\n\n          case 7:\n            res = _context2.sent;\n\n          case 8:\n            Discord.createMessage(msg.channel.id, res);\n\n          case 9:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  function GetRecent(_x, _x2, _x3, _x4, _x5) {\n    return _GetRecent.apply(this, arguments);\n  }\n\n  return GetRecent;\n}();\n\nfunction GetUserScores(_x8, _x9) {\n  return _GetUserScores.apply(this, arguments);\n}\n\nfunction _GetUserScores() {\n  _GetUserScores = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee3(Osu, user) {\n    var Scores, Beatmapinfo, desc, em;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            console.log(user);\n            _context3.prev = 1;\n            _context3.next = 4;\n            return Osu.getUserRecent({\n              u: user,\n              limit: 1\n            });\n\n          case 4:\n            Scores = _context3.sent;\n            _context3.next = 7;\n            return Osu.getBeatmaps({\n              b: Scores[0].beatmapId\n            });\n\n          case 7:\n            Beatmapinfo = _context3.sent;\n            _context3.next = 13;\n            break;\n\n          case 10:\n            _context3.prev = 10;\n            _context3.t0 = _context3[\"catch\"](1);\n            return _context3.abrupt(\"return\", new embed(\"Something Went Wrong\", \"Error Description:\".concat(_context3.t0)));\n\n          case 13:\n            desc = \"\".concat(Beatmapinfo[0].title, \"+[\").concat(Beatmapinfo[0].version, \"]\").concat(util.ParseDiff(Scores[0].mods), \"\\n\");\n            desc += \"\".concat(Scores[0].maxCombo, \"/\").concat(Beatmapinfo[0].maxCombo, \" | Acc: \").concat(util.ParseAcc(Scores[0].counts), \"%\");\n            em = new embed(\"Recent Score for\" + user, desc);\n            return _context3.abrupt(\"return\", em);\n\n          case 17:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[1, 10]]);\n  }));\n  return _GetUserScores.apply(this, arguments);\n}\n\nmodule.exports.userScores = GetUserScores;\n\n//# sourceURL=webpack:///./src/osu/GetRecent.js?");

/***/ }),

/***/ "./src/osu/GetUserBest.js":
/*!********************************!*\
  !*** ./src/osu/GetUserBest.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar embed = __webpack_require__(/*! ../embedCreator */ \"./src/embedCreator.js\");\n\nvar utils = __webpack_require__(/*! ./utils */ \"./src/osu/utils.js\");\n\nmodule.exports = function GetUserScores(Osu, Discord, msg, msgargs, db) {\n  if (msgargs.length === 0) {\n    db.find({\n      discordID: msg.author.id\n    }, function (err, docs) {\n      if (!err || !docs) {\n        procUser(docs[0].OsuID, Osu, Discord, msg.channel.id);\n      } else Discord.createMessage(msg.channel.id, \"You did not set your ID!\");\n    });\n  } else procUser(msgargs[0], Osu, Discord, msg.channel.id);\n};\n\nfunction procUser(_x, _x2, _x3, _x4) {\n  return _procUser.apply(this, arguments);\n}\n\nfunction _procUser() {\n  _procUser = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(username, Osu, Discord, channelID) {\n    var em;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return getData(Osu, username);\n\n          case 3:\n            em = _context.sent;\n            Discord.createMessage(channelID, em);\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            Discord.createMessage(channelID, \"Something went wrong: \".concat(_context.t0));\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n  return _procUser.apply(this, arguments);\n}\n\nfunction getData(_x5, _x6) {\n  return _getData.apply(this, arguments);\n}\n\nfunction _getData() {\n  _getData = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(Osu, user) {\n    var UserBest, desc, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, beatmapInfo, em;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return Osu.getUserBest({\n              u: user,\n              m: '0',\n              limit: 5\n            });\n\n          case 2:\n            UserBest = _context2.sent;\n            desc = \"\";\n            _iteratorNormalCompletion = true;\n            _didIteratorError = false;\n            _iteratorError = undefined;\n            _context2.prev = 7;\n            _iterator = UserBest[Symbol.iterator]();\n\n          case 9:\n            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n              _context2.next = 18;\n              break;\n            }\n\n            element = _step.value;\n            _context2.next = 13;\n            return Osu.getBeatmaps({\n              b: element.beatmapId\n            });\n\n          case 13:\n            beatmapInfo = _context2.sent;\n            desc = descConstructor(desc, element, beatmapInfo);\n\n          case 15:\n            _iteratorNormalCompletion = true;\n            _context2.next = 9;\n            break;\n\n          case 18:\n            _context2.next = 24;\n            break;\n\n          case 20:\n            _context2.prev = 20;\n            _context2.t0 = _context2[\"catch\"](7);\n            _didIteratorError = true;\n            _iteratorError = _context2.t0;\n\n          case 24:\n            _context2.prev = 24;\n            _context2.prev = 25;\n\n            if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n              _iterator[\"return\"]();\n            }\n\n          case 27:\n            _context2.prev = 27;\n\n            if (!_didIteratorError) {\n              _context2.next = 30;\n              break;\n            }\n\n            throw _iteratorError;\n\n          case 30:\n            return _context2.finish(27);\n\n          case 31:\n            return _context2.finish(24);\n\n          case 32:\n            if (!(desc === \"\")) {\n              _context2.next = 34;\n              break;\n            }\n\n            throw \"Description is empty!\";\n\n          case 34:\n            //Create embed and send back.\n            em = new embed(\"\", desc);\n            em.withAuthor(\"Top 5 osu! Plays for: \".concat(user), \"https://a.ppy.sh/\".concat(UserBest[0].user.id));\n            em.Withthumb(\"https://a.ppy.sh/\".concat(UserBest[0].user.id));\n            return _context2.abrupt(\"return\", em);\n\n          case 38:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[7, 20, 24, 32], [25,, 27, 31]]);\n  }));\n  return _getData.apply(this, arguments);\n}\n\n;\n\nfunction descConstructor(descString, UserInfo, beatmapInfo) {\n  descString += utils.condense(\"\\n\", \"**[\".concat(beatmapInfo[0].title, \" [\").concat(beatmapInfo[0].version, \"]](https://osu.ppy.sh/b/\").concat(UserInfo.beatmapId, \")** \") + \"**\".concat(utils.ParseDiff(UserInfo.mods), \"** [\").concat(beatmapInfo[0].difficulty.rating.substring(0, 4), \"\\u2605]\"), \"**PP: \".concat(UserInfo.pp, \"** \\u2B95 \").concat(utils.ParseAcc(UserInfo.counts), \"%\"), \"\".concat(UserInfo.score, \" \\u2B95 x\").concat(UserInfo.maxCombo, \"/\").concat(beatmapInfo[0].maxCombo, \" \\u2B95\") + \"[\".concat(UserInfo.counts['300'], \"/\").concat(UserInfo.counts['100'], \"/\").concat(UserInfo.counts['50'], \"/\").concat(UserInfo.counts.miss, \"]\\n\"));\n  return descString;\n}\n\n//# sourceURL=webpack:///./src/osu/GetUserBest.js?");

/***/ }),

/***/ "./src/osu/UserProfile.js":
/*!********************************!*\
  !*** ./src/osu/UserProfile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar utils = __webpack_require__(/*! ./utils */ \"./src/osu/utils.js\");\n\nvar embed = __webpack_require__(/*! ../embedCreator */ \"./src/embedCreator.js\");\n\nmodule.exports = function GetUserScores(Osu, Discord, msg, msgargs, db) {\n  if (msgargs.length == 0) {\n    db.find({\n      discordID: msg.author.id\n    }, function (err, docs) {\n      if (!err || !docs) procUser(Osu, Discord, docs[0].OsuID, msg.channel.id);else Discord.createMessage(msg.channel.id, \"Havent Set your ID!\");\n    });\n  } else {\n    procUser(Osu, Discord, msgargs[0], msg.channel.id);\n  }\n\n  ;\n};\n\nfunction procUser(_x, _x2, _x3, _x4) {\n  return _procUser.apply(this, arguments);\n}\n\nfunction _procUser() {\n  _procUser = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(Osu, Discord, username, channelID) {\n    var em;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return GetUserData(Osu, username);\n\n          case 3:\n            em = _context.sent;\n            Discord.createMessage(channelID, em);\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            Discord.createMessage(channelID, \"Something went wrong: \".concat(_context.t0));\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n  return _procUser.apply(this, arguments);\n}\n\nfunction GetUserData(_x5, _x6) {\n  return _GetUserData.apply(this, arguments);\n}\n\nfunction _GetUserData() {\n  _GetUserData = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(Osu, user) {\n    var Info, desc, em;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return Osu.getUser({\n              u: user\n            });\n\n          case 2:\n            Info = _context2.sent;\n\n            /*Constructing the Description*/\n            desc = utils.condense(\"\\n\", \"Rank:\".concat(Info.pp.rank), \"**PP:\".concat(Info.pp.raw, \"**\"), \"Level:\".concat(Info.level), \"Country:\".concat(Info.country), \"CountryRank:\".concat(Info.pp.countryRank), \"PlayCount:\".concat(Info.counts.plays), \"Accuracy:\".concat(Info.accuracyFormatted));\n            em = new embed(\"Here's what you *probably* need...?\", desc);\n            em.withAuthor(user, \"https://osu.ppy.sh/images/flags/\".concat(Info.country, \".png\"));\n            em.Withthumb(\"https://a.ppy.sh/\".concat(Info.id));\n            return _context2.abrupt(\"return\", em);\n\n          case 8:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _GetUserData.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./src/osu/UserProfile.js?");

/***/ }),

/***/ "./src/osu/index.js":
/*!**************************!*\
  !*** ./src/osu/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  FetchUser: __webpack_require__(/*! ./UserProfile */ \"./src/osu/UserProfile.js\"),\n  GetUserBest: __webpack_require__(/*! ./GetUserBest */ \"./src/osu/GetUserBest.js\"),\n  GetRecent: __webpack_require__(/*! ./GetRecent */ \"./src/osu/GetRecent.js\").GetRecent,\n  setUser: __webpack_require__(/*! ./setUser */ \"./src/osu/setUser.js\")\n};\n\n//# sourceURL=webpack:///./src/osu/index.js?");

/***/ }),

/***/ "./src/osu/setUser.js":
/*!****************************!*\
  !*** ./src/osu/setUser.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar embed = __webpack_require__(/*! ../embedCreator */ \"./src/embedCreator.js\");\n\nmodule.exports = function setUser(Osu, Discord, msg, msgargs, db) {\n  var sendstr = new embed();\n  var osuUserName = msgargs[0]; //msgargs are seperated by ' ' so 0th arg should be name.\n\n  if (msgargs.length === 0) {\n    //Username to set not Specified.\n    sendstr.withTitle(\"Username Confirmation\");\n    sendstr.withDesc(\"You have not set a user to be tracked.\");\n    Discord.createMessage(msg.channel.id, sendstr);\n  } else {\n    db.find({\n      discordID: msg.author.id\n    }, //If there's no error, do this:\n    function (err, docs) {\n      if (err) console.log(err);else if (docs.length > 0) {\n        //Name has been set already, remap to a new name.\n        db.update({\n          //Search by discordID because the users are rarted.\n          discordID: msg.author.id\n        }, {\n          $set: {\n            //Set these feilds only. Do not change anything else.\n            OsuID: osuUserName\n          }\n        });\n        sendstr.withTitle(\"Username Confirmation\");\n        sendstr.withDesc(\"Your username has been set as \".concat(osuUserName));\n        Discord.createMessage(msg.channel.id, sendstr);\n      } else {\n        //TODO:\n\n        /**Add additional feilds when inserting the player information.\r\n         * Implement secondary DB data fetch (One for the Player Data so that it can be stored locally)(needed?);\r\n         */\n        sendstr.withTitle(\"Username Confirmation\");\n        sendstr.withDesc(\"Your username has been set as \".concat(osuUserName));\n        Discord.createMessage(msg.channel.id, sendstr);\n        db.insert({\n          discordID: msg.author.id,\n          OsuID: osuUserName\n        }); //DB now has been inserted to. ERROR check is not done. TODO.\n      }\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/osu/setUser.js?");

/***/ }),

/***/ "./src/osu/utils.js":
/*!**************************!*\
  !*** ./src/osu/utils.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports.ParseDiff = function ParseDiff(DiffString) {\n  //If there's nothing in the Diffstring.\n  if (!DiffString) return \"+NoMod\"; //Set the string to add the \"+\" by default\n\n  var str = \"+\"; //For all of the cases in the diffstring -- TO BE ADDED TO\n\n  DiffString.forEach(function (Diff) {\n    switch (Diff) {\n      case \"Hidden\":\n        str += \"HD\";\n        break;\n\n      case \"HardRock\":\n        str += \"HR\";\n        break;\n\n      case \"DoubleTime\":\n        str += \"DT\";\n        break;\n\n      case \"Flashlight\":\n        str += \"FL\";\n        break;\n    }\n  }); //constructed string.\n\n  return str;\n};\n\nmodule.exports.ParseAcc = function ParseAcc(accValues) {\n  //total is the sum of all the notes played.\n  var total = parseInt(accValues['50']) + parseInt(accValues['100']) + parseInt(accValues['300']) + parseInt(accValues['miss']); //Values from the user is then converted to float.\n\n  var acc = (parseInt(accValues['300']) * 300 + parseInt(accValues['100']) * 100 + parseInt(accValues['50']) * 50) / (total * 300) * 100; //Trim the substring to less than four significant digits.\n\n  acc = acc.toString().substring(0, 4);\n  return acc;\n};\n\nmodule.exports.condense = function condense(delim) {\n  //Set delimiter as new line if not defined\n  if (!delim) delim = \"\\n\"; //For each in strings, append the string with the delmiter.\n\n  var constring = \"\";\n\n  for (var _len = arguments.length, strings = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    strings[_key - 1] = arguments[_key];\n  }\n\n  strings.forEach(function (str) {\n    constring += str + delim;\n  });\n  return constring;\n};\n\n//# sourceURL=webpack:///./src/osu/utils.js?");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi @babel/polyfill ./src/index ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/index */\"./src/index.ts\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/index?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "eris":
/*!***********************!*\
  !*** external "eris" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"eris\");\n\n//# sourceURL=webpack:///external_%22eris%22?");

/***/ }),

/***/ "nedb":
/*!***********************!*\
  !*** external "nedb" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nedb\");\n\n//# sourceURL=webpack:///external_%22nedb%22?");

/***/ }),

/***/ "node-osu":
/*!***************************!*\
  !*** external "node-osu" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-osu\");\n\n//# sourceURL=webpack:///external_%22node-osu%22?");

/***/ })

/******/ });