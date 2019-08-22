webpackHotUpdate("flag-checker",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FlagChecker.vue?vue&type=script&lang=js&shadow":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlagChecker.vue?vue&type=script&lang=js&shadow ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_tpanum_go_src_github_com_aau_network_security_haaukins_svcs_amigo_resources_private_js_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* eslint-disable */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'flagchecker',\n  data: () => {\n    return {\n      action: 'Check',\n      description: 'Flag...',\n      flag: '',\n      errorMsg: '',\n      successMsg: ''\n    };\n  },\n  methods: {\n    clearMessages: function clearMessages() {\n      this.errorMsg = '';\n      this.successMsg = '';\n    },\n    submit: function () {\n      var _submit = Object(_home_tpanum_go_src_github_com_aau_network_security_haaukins_svcs_amigo_resources_private_js_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var opts, res;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                // eslint-disable-next-line\n                console.log(this.flag);\n                opts = {\n                  method: 'POST',\n                  headers: {\n                    'Content-Type': 'application/json'\n                  },\n                  body: JSON.stringify({\n                    flag: this.flag\n                  })\n                };\n                _context.next = 4;\n                return fetch('/flags/verify', opts).then(res => res.json());\n\n              case 4:\n                res = _context.sent;\n\n                if (!(res.error !== undefined)) {\n                  _context.next = 8;\n                  break;\n                }\n\n                this.error = res.error;\n                return _context.abrupt(\"return\");\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function submit() {\n        return _submit.apply(this, arguments);\n      }\n\n      return submit;\n    }()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvRmxhZ0NoZWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJnNoYWRvdy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9GbGFnQ2hlY2tlci52dWU/MjFjMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgPGRpdiBjbGFzcz1cImZpZWxkIGhhcy1hZGRvbnNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB2LWJpbmQ6Y2xhc3M9XCJ7ICdpcy1kYW5nZXInOiBlcnJvck1zZyB9XCIgdHlwZT1cInRleHRcIiBAY2xpY2s9XCJjbGVhck1lc3NhZ2VzXCIgdi1tb2RlbD1cImZsYWdcIiA6cGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBpcy1pbmZvXCI+XG5cdHt7IGFjdGlvbiB9fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPHAgdi1pZj1cImVycm9yTXNnXCIgY2xhc3M9XCJoZWxwIGlzLWRhbmdlclwiPnt7IGVycm9yTXNnIH19PC9wPlxuICA8L2Rpdj5cbjwvZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZmxhZ2NoZWNrZXInLFxuICBkYXRhOiAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGlvbjogJ0NoZWNrJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmxhZy4uLicsXG4gICAgICBmbGFnOiAnJyxcbiAgICAgIGVycm9yTXNnOiAnJyxcbiAgICAgIHN1Y2Nlc3NNc2c6ICcnLFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNsZWFyTWVzc2FnZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5lcnJvck1zZyA9ICcnO1xuICAgICAgdGhpcy5zdWNjZXNzTXNnID0gJyc7XG4gICAgfSxcbiAgICBzdWJtaXQ6IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZsYWcpO1xuICAgICAgXG4gICAgICBjb25zdCBvcHRzID0ge1xuXHRtZXRob2Q6ICdQT1NUJyxcblx0aGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG5cdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZmxhZzogdGhpcy5mbGFnIH0pXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9mbGFncy92ZXJpZnknLCBvcHRzKS5cbiAgICAgICAgICAgIHRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuXG4gICAgICBpZiAocmVzLmVycm9yICE9PSB1bmRlZmluZWQpIHtcblx0dGhpcy5lcnJvciA9IHJlcy5lcnJvcjtcblx0cmV0dXJuXG4gICAgICB9XG5cblxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgQGltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy5jc3MnO1xuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFKQTtBQUFBO0FBQ0E7QUFEQTtBQVNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBWUE7QUFiQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUxBO0FBWEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FlagChecker.vue?vue&type=script&lang=js&shadow\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0a69d37a-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FlagChecker.vue?vue&type=template&id=f5a9f454&shadow":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a69d37a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlagChecker.vue?vue&type=template&id=f5a9f454&shadow ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"form\",\n    {\n      on: {\n        submit: function($event) {\n          $event.preventDefault()\n          return _vm.submit($event)\n        }\n      }\n    },\n    [\n      _c(\"div\", { staticClass: \"field has-addons\" }, [\n        _c(\"div\", { staticClass: \"control\" }, [\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.flag,\n                expression: \"flag\"\n              }\n            ],\n            staticClass: \"input\",\n            class: { \"is-danger\": _vm.errorMsg },\n            attrs: { type: \"text\", placeholder: _vm.description },\n            domProps: { value: _vm.flag },\n            on: {\n              click: _vm.clearMessages,\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.flag = $event.target.value\n              }\n            }\n          })\n        ]),\n        _c(\"div\", { staticClass: \"control\" }, [\n          _c(\n            \"button\",\n            { staticClass: \"button is-info\", attrs: { type: \"submit\" } },\n            [_vm._v(\"\\n\\t\" + _vm._s(_vm.action) + \"\\n      \")]\n          )\n        ]),\n        _vm.errorMsg\n          ? _c(\"p\", { staticClass: \"help is-danger\" }, [\n              _vm._v(_vm._s(_vm.errorMsg))\n            ])\n          : _vm._e()\n      ])\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiMGE2OWQzN2EtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL0ZsYWdDaGVja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNWE5ZjQ1NCZzaGFkb3cuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GbGFnQ2hlY2tlci52dWU/NDg3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZm9ybVwiLFxuICAgIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGQgaGFzLWFkZG9uc1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250cm9sXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmxhZyxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZsYWdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtZGFuZ2VyXCI6IF92bS5lcnJvck1zZyB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBfdm0uZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmxhZyB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IF92bS5jbGVhck1lc3NhZ2VzLFxuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLmZsYWcgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250cm9sXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWluZm9cIiwgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuXFx0XCIgKyBfdm0uX3MoX3ZtLmFjdGlvbikgKyBcIlxcbiAgICAgIFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uZXJyb3JNc2dcbiAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImhlbHAgaXMtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvck1zZykpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0a69d37a-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FlagChecker.vue?vue&type=template&id=f5a9f454&shadow\n");

/***/ })

})