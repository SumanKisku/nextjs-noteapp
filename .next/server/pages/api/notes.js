/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/notes";
exports.ids = ["pages/api/notes"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Note.js":
/*!************************!*\
  !*** ./models/Note.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst NoteSchema = new mongoose.Schema({\n  title: {\n    type: String,\n    required: [true, \"Please add a title\"],\n    unique: true,\n    trim: true,\n    maxlength: [40, 'Title cannot be more than 40 characters']\n  },\n  description: {\n    type: String,\n    required: true,\n    maxlength: [20, 'Description cannot be more than 200 characters']\n  }\n});\nmodule.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvTm90ZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsMEJBQUQsQ0FBeEI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLElBQUlGLFFBQVEsQ0FBQ0csTUFBYixDQUFvQjtBQUNyQ0MsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLElBQUksRUFBRUMsTUFERDtBQUVMQyxJQUFBQSxRQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU8sb0JBQVAsQ0FGTDtBQUdMQyxJQUFBQSxNQUFNLEVBQUUsSUFISDtBQUlMQyxJQUFBQSxJQUFJLEVBQUUsSUFKRDtBQUtMQyxJQUFBQSxTQUFTLEVBQUUsQ0FBQyxFQUFELEVBQUsseUNBQUw7QUFMTixHQUQ4QjtBQVFyQ0MsRUFBQUEsV0FBVyxFQUFFO0FBQ1hOLElBQUFBLElBQUksRUFBRUMsTUFESztBQUVYQyxJQUFBQSxRQUFRLEVBQUUsSUFGQztBQUdYRyxJQUFBQSxTQUFTLEVBQUUsQ0FBQyxFQUFELEVBQUssZ0RBQUw7QUFIQTtBQVJ3QixDQUFwQixDQUFuQjtBQWVBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJiLFFBQVEsQ0FBQ2MsTUFBVCxDQUFnQkMsSUFBaEIsSUFBd0JmLFFBQVEsQ0FBQ2dCLEtBQVQsQ0FBZSxNQUFmLEVBQXVCZCxVQUF2QixDQUF6QyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vbW9kZWxzL05vdGUuanM/NDk3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG5jb25zdCBOb3RlU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgdGl0bGU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgYWRkIGEgdGl0bGVcIl0sXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgICB0cmltOiB0cnVlLFxyXG4gICAgbWF4bGVuZ3RoOiBbNDAsICdUaXRsZSBjYW5ub3QgYmUgbW9yZSB0aGFuIDQwIGNoYXJhY3RlcnMnXVxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgbWF4bGVuZ3RoOiBbMjAsICdEZXNjcmlwdGlvbiBjYW5ub3QgYmUgbW9yZSB0aGFuIDIwMCBjaGFyYWN0ZXJzJ11cclxuICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Ob3RlIHx8IG1vbmdvb3NlLm1vZGVsKCdOb3RlJywgTm90ZVNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIk5vdGVTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsInRyaW0iLCJtYXhsZW5ndGgiLCJkZXNjcmlwdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJOb3RlIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Note.js\n");

/***/ }),

/***/ "(api)/./pages/api/notes/index.js":
/*!**********************************!*\
  !*** ./pages/api/notes/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"(api)/./utils/dbConnect.js\");\n/* harmony import */ var _models_Note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Note */ \"(api)/./models/Note.js\");\n/* harmony import */ var _models_Note__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Note__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const {\n    method\n  } = req;\n\n  switch (method) {\n    case 'GET':\n      try {\n        const notes = await _models_Note__WEBPACK_IMPORTED_MODULE_1___default().find({});\n        res.status(200).json({\n          success: true,\n          data: notes\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case 'POST':\n      try {\n        const note = await _models_Note__WEBPACK_IMPORTED_MODULE_1___default().create(req.body);\n        res.status(201).json({\n          success: true,\n          date: note\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    default:\n      res.status(400).json({\n        success: false\n      });\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbm90ZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFQUEsNERBQVM7QUFFVCxpRUFBZSxPQUFPRSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDL0IsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQWFGLEdBQW5COztBQUVBLFVBQVFFLE1BQVI7QUFDSSxTQUFLLEtBQUw7QUFDSSxVQUFJO0FBQ0EsY0FBTUMsS0FBSyxHQUFHLE1BQU1KLHdEQUFBLENBQVUsRUFBVixDQUFwQjtBQUVBRSxRQUFBQSxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxVQUFBQSxPQUFPLEVBQUUsSUFBWDtBQUFpQkMsVUFBQUEsSUFBSSxFQUFFTDtBQUF2QixTQUFyQjtBQUNILE9BSkQsQ0FJRSxPQUFPTSxLQUFQLEVBQWM7QUFDWlIsUUFBQUEsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsVUFBQUEsT0FBTyxFQUFFO0FBQVgsU0FBckI7QUFDSDs7QUFDRDs7QUFDSixTQUFLLE1BQUw7QUFDSSxVQUFJO0FBQ0EsY0FBTUcsSUFBSSxHQUFHLE1BQU1YLDBEQUFBLENBQVlDLEdBQUcsQ0FBQ1ksSUFBaEIsQ0FBbkI7QUFFQVgsUUFBQUEsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsVUFBQUEsT0FBTyxFQUFFLElBQVg7QUFBaUJNLFVBQUFBLElBQUksRUFBRUg7QUFBdkIsU0FBckI7QUFDSCxPQUpELENBSUUsT0FBT0QsS0FBUCxFQUFjO0FBQ1pSLFFBQUFBLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFVBQUFBLE9BQU8sRUFBRTtBQUFYLFNBQXJCO0FBQ0g7O0FBQ0Q7O0FBQ0E7QUFDSU4sTUFBQUEsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsUUFBQUEsT0FBTyxFQUFFO0FBQVgsT0FBckI7QUFDQTtBQXJCWjtBQXVCSCxDQTFCRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vcGFnZXMvYXBpL25vdGVzL2luZGV4LmpzPzEwYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi8uLi91dGlscy9kYkNvbm5lY3QnO1xyXG5pbXBvcnQgTm90ZSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvTm90ZSdcclxuXHJcbmRiQ29ubmVjdCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xyXG5cclxuICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGVzID0gYXdhaXQgTm90ZS5maW5kKHt9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG5vdGVzIH0pXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm90ZSA9IGF3YWl0IE5vdGUuY3JlYXRlKHJlcS5ib2R5KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGU6IG5vdGUgfSlcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiTm90ZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5vdGVzIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsImVycm9yIiwibm90ZSIsImNyZWF0ZSIsImJvZHkiLCJkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/notes/index.js\n");

/***/ }),

/***/ "(api)/./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\n\nasync function dbConnect() {\n  if (connection.isConnected) {\n    return;\n  }\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://sumankisku:sumanmernstack@noteapp.vtrxj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority\", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n  connection.isConnected = db.connections[0].readyState;\n  console.log(connection.isConnected);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxVQUFVLEdBQUcsRUFBbkI7O0FBRUEsZUFBZUMsU0FBZixHQUEyQjtBQUN6QixNQUFJRCxVQUFVLENBQUNFLFdBQWYsRUFBNEI7QUFDMUI7QUFDRDs7QUFFRCxRQUFNQyxFQUFFLEdBQUcsTUFBTUosdURBQUEsQ0FBaUJNLCtHQUFqQixFQUF3QztBQUN2REcsSUFBQUEsZUFBZSxFQUFFLElBRHNDO0FBRXZEQyxJQUFBQSxrQkFBa0IsRUFBRTtBQUZtQyxHQUF4QyxDQUFqQjtBQUtBVCxFQUFBQSxVQUFVLENBQUNFLFdBQVgsR0FBeUJDLEVBQUUsQ0FBQ08sV0FBSCxDQUFlLENBQWYsRUFBa0JDLFVBQTNDO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYixVQUFVLENBQUNFLFdBQXZCO0FBQ0Q7O0FBRUQsaUVBQWVELFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3V0aWxzL2RiQ29ubmVjdC5qcz9jM2NlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XHJcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkksIHtcclxuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbiAgY29uc29sZS5sb2coY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImRiQ29ubmVjdCIsImlzQ29ubmVjdGVkIiwiZGIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/dbConnect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/notes/index.js"));
module.exports = __webpack_exports__;

})();