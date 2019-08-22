webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Scoreboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Scoreboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ \"./node_modules/core-js/modules/es6.regexp.replace.js\");\n/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TeamRow_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeamRow.vue */ \"./src/components/TeamRow.vue\");\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* eslint-disable */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'scoreboard',\n  data: function data() {\n    return {\n      teams: [],\n      challenges: []\n    };\n  },\n  created: function created() {\n    var url = new URL('/scores', window.location.href);\n    url.protocol = url.protocol.replace('http', 'ws');\n    this.connectToWS(url.href);\n  },\n  methods: {\n    connectToWS: function connectToWS(url) {\n      var self = this;\n      var ws = new WebSocket(url);\n      ws.onmessage = self.receiveMsg;\n\n      ws.onclose = function () {\n        setTimeout(function () {\n          self.connectToWS(url);\n        }, 3000);\n      };\n    },\n    receiveMsg: function receiveMsg(evt) {\n      var messages = evt.data.split('\\n');\n\n      for (var i = 0; i < messages.length; i++) {\n        var msg = messages[i];\n        var json = JSON.parse(msg);\n\n        switch (json.msg) {\n          case \"challenges\":\n            self.challenges = json.values;\n            break;\n\n          case \"teams\":\n            this.teams = json.values;\n            console.log(this.teams);\n            break;\n        }\n      }\n    }\n  },\n  components: {\n    TeamRow: _TeamRow_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvU2NvcmVib2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1Njb3JlYm9hcmQudnVlP2U3MWEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHRhYmxlIGNsYXNzPVwidGFibGUgY2VudGVyYm94IGlzLXN0cmlwZWRcIj5cbiAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDx0aD48L3RoPlxuICAgICAgPHRoPlRlYW08L3RoPlxuICAgICAgPHRoIHYtZm9yPVwiY2hhbCBpbiBjaGFsbGVuZ2VzXCIgdi1iaW5kOmtleT1cImNoYWwudGFnXCI+PGFiYnIgOnRpdGxlPVwiY2hhbC5uYW1lXCI+e3sgY2hhbC50YWcgfX08L2FiYnI+PC90aD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuICA8dGJvZHk+XG4gICAgPHRlYW0tcm93IHYtZm9yPVwiKHRlYW0sIGluZGV4KSBpbiB0ZWFtc1wiIHYtYmluZDprZXk9XCJ0ZWFtLmlkXCIgOm5hbWU9XCJ0ZWFtLm5hbWVcIiA6Y29tcGxldGlvbnM9XCJ0ZWFtLmNvbXBsZXRpb25zXCIgOnBvcz1cImluZGV4ICsgMVwiPjwvdGVhbS1yb3c+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBUZWFtUm93IGZyb20gJy4vVGVhbVJvdy52dWUnXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdzY29yZWJvYXJkJyxcbiAgZGF0YTogKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB0ZWFtczogW10sXG4gICAgICBjaGFsbGVuZ2VzOiBbXSxcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB1cmwgPSBuZXcgVVJMKCcvc2NvcmVzJywgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIHVybC5wcm90b2NvbCA9IHVybC5wcm90b2NvbC5yZXBsYWNlKCdodHRwJywgJ3dzJyk7XG4gICAgdGhpcy5jb25uZWN0VG9XUyh1cmwuaHJlZik7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjb25uZWN0VG9XUzogZnVuY3Rpb24odXJsKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgd3MgPSBuZXcgV2ViU29ja2V0KHVybCk7XG4gICAgICB3cy5vbm1lc3NhZ2UgPSBzZWxmLnJlY2VpdmVNc2dcbiAgICAgIHdzLm9uY2xvc2UgPSBmdW5jdGlvbigpe1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7c2VsZi5jb25uZWN0VG9XUyh1cmwpfSwgMzAwMCk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgcmVjZWl2ZU1zZzogZnVuY3Rpb24oZXZ0KSB7XG5cdHZhciBtZXNzYWdlcyA9IGV2dC5kYXRhLnNwbGl0KCdcXG4nKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtZXNzYWdlcy5sZW5ndGg7IGkrKykge1xuXHQgIGNvbnN0IG1zZyA9IG1lc3NhZ2VzW2ldO1xuXHQgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKG1zZyk7XG5cdCAgc3dpdGNoIChqc29uLm1zZykge1xuXHQgIGNhc2UgXCJjaGFsbGVuZ2VzXCI6XG5cdCAgICBzZWxmLmNoYWxsZW5nZXMgPSBqc29uLnZhbHVlcztcblx0ICAgIGJyZWFrO1xuXHQgIGNhc2UgXCJ0ZWFtc1wiOlxuXHQgICAgdGhpcy50ZWFtcyA9IGpzb24udmFsdWVzO1xuXHQgICAgY29uc29sZS5sb2codGhpcy50ZWFtcyk7XG5cdCAgICBicmVhaztcblx0ICB9XG5cdH1cbiAgICB9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgVGVhbVJvdyxcbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUF4QkE7QUEwQkE7QUFDQTtBQURBO0FBdkNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Scoreboard.vue?vue&type=script&lang=js&\n");

/***/ })

})