webpackHotUpdate("flag-checker",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FlagChecker.vue?vue&type=script&lang=js&shadow":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlagChecker.vue?vue&type=script&lang=js&shadow ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_tpanum_go_src_github_com_aau_network_security_haaukins_svcs_amigo_resources_private_js_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* eslint-disable */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'flagchecker',\n  data: () => {\n    return {\n      action: 'Check',\n      description: 'Flag...',\n      flag: '',\n      error: ''\n    };\n  },\n  methods: {\n    submit: function () {\n      var _submit = Object(_home_tpanum_go_src_github_com_aau_network_security_haaukins_svcs_amigo_resources_private_js_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var opts, res;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                // eslint-disable-next-line\n                console.log(this.flag);\n                opts = {\n                  method: 'POST',\n                  headers: {\n                    'Content-Type': 'application/json'\n                  },\n                  body: JSON.stringify({\n                    flag: this.flag\n                  })\n                };\n                _context.next = 4;\n                return fetch('/flags/verify', opts).then(res => console.log(res.json())).then(res => JSON.parse(res.data));\n\n              case 4:\n                res = _context.sent;\n                console.log('done', res);\n\n              case 6:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function submit() {\n        return _submit.apply(this, arguments);\n      }\n\n      return submit;\n    }()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvRmxhZ0NoZWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJnNoYWRvdy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9GbGFnQ2hlY2tlci52dWU/MjFjMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgPGRpdiBjbGFzcz1cImZpZWxkIGhhcy1hZGRvbnNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJmbGFnXCIgOnBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25cIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gaXMtaW5mb1wiPlxuXHR7eyBhY3Rpb24gfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxwIHYtaWY9XCJlcnJvclwiIGNsYXNzPVwiaGVscCBpcy1kYW5nZXJcIj5UaGlzIGVtYWlsIGlzIGludmFsaWQ8L3A+XG4gIDwvZGl2PlxuPC9mb3JtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8qIGVzbGludC1kaXNhYmxlICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdmbGFnY2hlY2tlcicsXG4gIGRhdGE6ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aW9uOiAnQ2hlY2snLFxuICAgICAgZGVzY3JpcHRpb246ICdGbGFnLi4uJyxcbiAgICAgIGZsYWc6ICcnLFxuICAgICAgZXJyb3I6ICcnLFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHN1Ym1pdDogYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmxhZyk7XG4gICAgICBcbiAgICAgIGNvbnN0IG9wdHMgPSB7XG5cdG1ldGhvZDogJ1BPU1QnLFxuXHRoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcblx0Ym9keTogSlNPTi5zdHJpbmdpZnkoeyBmbGFnOiB0aGlzLmZsYWcgfSlcbiAgICAgIH07XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2ZsYWdzL3ZlcmlmeScsIG9wdHMpLlxuICAgICAgICAgICAgdGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzLmpzb24oKSkpLlxuICAgICAgICAgICAgdGhlbihyZXMgPT4gSlNPTi5wYXJzZShyZXMuZGF0YSkpO1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZygnZG9uZScsIHJlcyk7XG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICBAaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzLmNzcyc7XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBSkE7QUFBQTtBQUNBO0FBREE7QUFTQTtBQUlBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFWQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FlagChecker.vue?vue&type=script&lang=js&shadow\n");

/***/ })

})