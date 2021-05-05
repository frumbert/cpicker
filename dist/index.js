/*! MIT Licence */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/xnquery.js":
/*!************************!*\
  !*** ./src/xnquery.js ***!
  \************************/
/***/ (function() {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//! xnquery.js
//! 仙女座js方法库，使用es6实现部分jquery方法
//! version : 1.0.1
//! authors : 范媛媛
//! create date:2021/01/27 V1.0.0
//! create date:2021/01/28 V1.0.1
// https://github.com/fanaiai/xndatepicker
(function (window) {
  function init(el) {
    if (typeof el == 'string') {
      this.el = this.ConvertToArray(document.querySelectorAll(el));
    }

    if (el instanceof NodeList) {
      this.el = this.ConvertToArray(el);
    } else if (Array.isArray(el)) {
      this.el = el;
    }

    if (el instanceof Node) {
      this.el = [el];
    }

    if (!this.el) {
      this.el = [];
    }
  }

  function XNQuery(el) {
    return new init(el);
  }

  XNQuery.prototype = init.prototype = {
    length: function length() {
      return this.el.length;
    },
    extend: function extend() {
      var options,
          name,
          src,
          copy,
          copyIsArray,
          clone,
          target = arguments[0] || {},
          // 目标对象
      i = 1,
          length = arguments.length,
          deep = false; // 处理深度拷贝情况（第一个参数是boolean类型且为true）

      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {}; // 跳过第一个参数（是否深度拷贝）和第二个参数（目标对象）

        i = 2;
      } // 如果目标不是对象或函数，则初始化为空对象


      if (_typeof(target) !== "object") {
        target = {};
      } // 如果只指定了一个参数，则使用jQuery自身作为目标对象


      if (length === i) {
        target = this;
        --i;
      }

      for (; i < length; i++) {
        // Only deal with non-null/undefined values
        if ((options = arguments[i]) != null) {
          // Extend the base object
          for (name in options) {
            src = target[name];
            copy = options[name]; // Prevent never-ending loop

            if (target === copy) {
              continue;
            } // 如果对象中包含了数组或者其他对象，则使用递归进行拷贝


            var _copyIsArray = Array.isArray(copy);

            if (deep && copy && (_typeof(copy) == 'object' || _copyIsArray)) {
              // 处理数组
              if (_copyIsArray) {
                _copyIsArray = false; // 如果目标对象不存在该数组，则创建一个空数组；

                clone = src && Array.isArray(src) ? src : [];
              } else {
                clone = src && _typeof(src) == 'object' ? src : {};
              } // 从不改变原始对象，只做拷贝


              target[name] = this.extend(deep, clone, copy); // 不拷贝undefined值
            } else if (copy !== undefined) {
              target[name] = copy;
            }
          }
        }
      } // 返回已经被修改的对象


      return target;
    },
    parent: function parent() {
      var el = this.el[0];

      if (el && el.parentNode) {
        return XNQuery([el.parentNode]);
      } else {
        return XNQuery([]);
      }
    },
    parents: function parents(parentSelector
    /* optional */
    ) {
      var el = this.el[0];

      if (parentSelector === undefined) {
        parentSelector = [document];
      } else {
        parentSelector = this.ConvertToArray(document.querySelectorAll(parentSelector));
      }

      var parents = [];

      if (el) {
        parentSelector.forEach(function (e) {
          var p = el.parentNode;

          while (p != e && p != null) {
            p = p.parentNode;
          }

          if (p != null) {
            parents.push(p);
          }
        });
      }

      return XNQuery(parents); // var p = el.parentNode;
      // console.log(parentSelector,p)
      // while (p !== parentSelector && p!=null) {
      //     var o = p;
      //     console.log(o)
      //     parents.push(o);
      //     p = o.parentNode;
      // }
      // parents.push(parentSelector); // Push that parentSelector you wanted to stop at
      // console.log(parents);
      // // return parents;
      // return XNQuery(this.reverseArryToNodeList(parents))
    },
    reverseArryToNodeList: function reverseArryToNodeList(arry) {
      return arry;
      var div = document.createElement('div');

      for (var i = 0; i < arry.length; i++) {
        div.appendChild(arry[i]);
      }

      return div.childNodes;
    },
    hasClass: function hasClass(className) {
      if (this.el.length > 0) {
        return this.el[0].classList.contains(className);
      } else {
        return false;
      }
    },
    attr: function attr(_attr, value) {
      if (value) {
        this.el.forEach(function (e) {
          e.setAttribute(_attr, value);
        });
        return this;
      } else {
        if (!this.el[0]) {
          return null;
        }

        return this.el[0].getAttribute(_attr);
      }
    },
    find: function find(query) {
      var _this = this;

      if (!this.el || this.el.length <= 0) {
        return XNQuery([]);
      }

      if (typeof query != 'string') {
        var list = [];
        this.el.forEach(function (e) {
          var arry = e.querySelectorAll('*');

          for (var i = 0; i < arry.length; i++) {
            if (arry[i] == query) {
              list.push(query);
            }
          }
        });
        return XNQuery(list);
      } else {
        var list = [];
        this.el.forEach(function (e) {
          list = list.concat(_this.ConvertToArray(e.querySelectorAll(query)));
        });
        return XNQuery(list);
      }
    },
    children: function children(query) {
      var _this2 = this;

      if (!this.el || this.el.length <= 0) {
        return XNQuery([]);
      }

      var queryList = [];

      if (Array.isArray(query)) {
        queryList = query;
      }

      var children = [];
      this.el.forEach(function (e) {
        children = children.concat(_this2.ConvertToArray(e.children));

        if (typeof query == 'string') {
          queryList = queryList.concat(_this2.ConvertToArray(e.querySelectorAll(query)));
        }
      });
      var list = [];
      var queryListLength = queryList.length;

      for (var i = 0; i < children.length; i++) {
        var c = children[i];

        for (var j = 0; j < queryListLength; j++) {
          if (queryList[j] == c) {
            list.push(c);
            break;
          }
        }
      }

      return XNQuery(list);
    },
    each: function each(callback) {
      return this.el.forEach(callback);
    },
    index: function index(targetDom) {
      if (!targetDom) {
        var list = this.el[0].parentNode.childNodes;

        for (var i = 0; i < list.length; i++) {
          if (list[i] == this.el[0]) {
            return i;
          }
        }

        return null;
      } else {
        for (var _i = 0; _i < this.el.length; _i++) {
          if (this.el[_i] == targetDom) {
            return _i;
          }
        }
      }
    },
    eq: function eq(index) {
      var el = this.el[index];

      if (el) {
        return XNQuery(this.reverseArryToNodeList([el]));
      } else {
        return XNQuery(this.reverseArryToNodeList([]));
      }
    },
    get: function get(index) {
      return this.el[index];
    },
    addClass: function addClass(classname) {
      this.el.forEach(function (e) {
        if (e.classList) {
          var _e$classList;

          (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(classname.split(' ')));
        }
      });
    },
    nextUntil: function nextUntil(query, isprev) {
      var el = this.el[0];

      if (!el) {
        return XNQuery([]);
      }

      if (!query) {
        var next = null;
      } else {
        if (_typeof(query) == 'object' && query instanceof Node) {
          var next = query;
        } else {
          var next = el.parentNode.querySelector(query);
        }
      }

      var list = [];
      var func = isprev ? 'previousSibling' : 'nextSibling';
      var n = el[func];

      while (n != next && n != null) {
        list.push(n);
        n = n[func];
      }

      return XNQuery(list);
    },
    prevAll: function prevAll() {
      return this.nextUntil(null, true);
    },
    nextAll: function nextAll() {
      return this.nextUntil();
    },
    removeClass: function removeClass(classname) {
      this.el.forEach(function (e) {
        e.classList.remove(classname);
      });
      return this;
    },
    val: function val(_val) {
      if (!_val) {
        return this.el[0].value;
      } else {
        this.el.forEach(function (e) {
          e.value = _val;
        });
      }
    },
    html: function html(val) {
      if (!this.el || !this.el[0]) {
        return;
      }

      if (!val) {
        return this.el[0].innerHTML;
      } else {
        this.el.forEach(function (e) {
          e.innerHTML = val;
        });
      }
    },
    empty: function empty() {
      this.el.forEach(function (e) {
        e.innerHTML = '';
      });
      return this;
    },
    parseToDOM: function parseToDOM(str) {
      var div = document.createElement("div");

      if (typeof str == "string") {
        div.innerHTML = str;
      }

      return div.childNodes;
    },
    ConvertToArray: function ConvertToArray(nodes) {
      var array = null;

      try {
        array = Array.prototype.slice.call(nodes, 0); //非ie浏览器  ie8-将NodeList实现为COM对象，不能用这种方式检测
      } catch (ex) {
        //ie8-
        array = new Array();

        for (var i = 0; i < nodes.length; i++) {
          array.push(nodes[0]);
        }
      }

      return array;
    },
    parseDomToString: function parseDomToString(dom) {},
    append: function append(newel) {
      var _this3 = this;

      var newele;

      if (typeof newel == 'string') {
        newele = this.parseToDOM(newel);
        newele = this.ConvertToArray(newele);
      } else {
        newele = [newel];
      }

      var _loop = function _loop(i) {
        var newe = newele[i];

        _this3.el.forEach(function (e) {
          e.appendChild(newe);
        });
      };

      for (var i = 0; i < newele.length; i++) {
        _loop(i);
      }
    },
    remove: function remove() {
      this.el.forEach(function (e) {
        if (e.parentNode) {
          e.parentNode.removeChild(e);
        }
      });
    },
    slideUp: function slideUp(time) {
      this.el.forEach(function (e) {
        e.style.display = 'none';
      });
    },
    css: function css() {
      var _this4 = this;

      for (var _len = arguments.length, css = new Array(_len), _key = 0; _key < _len; _key++) {
        css[_key] = arguments[_key];
      }

      if (_typeof(css[0]) == 'object') {
        var _loop2 = function _loop2(i) {
          _this4.el.forEach(function (e) {
            e.style[i] = css[0][i];
          });
        };

        for (var i in css[0]) {
          _loop2(i);
        }

        return this;
      } else {
        if (css.length == 1) {
          return this.el[0].style[css[0]];
        }

        if (css.length == 2) {
          this.el.forEach(function (e) {
            e.style[css[0]] = css[1];
          });
          return this;
        }
      }
    },
    fadeOut: function fadeOut(time) {
      var _this5 = this;

      this.el.forEach(function (e) {
        _this5.animate({
          opacity: 0
        }, time, e, function () {
          e.style.display = 'none';
        });
      });
    },
    fadeIn: function fadeIn(time) {
      var _this6 = this;

      this.el.forEach(function (e) {
        e.style.display = 'block'; // e.style.opacity = 1;

        _this6.animate({
          opacity: 1
        }, time, e);
      });
    },
    animate: function animate(css, time, ele, callback) {
      if (!time) {
        time = 300;
      }

      var totalTimes = time / 50;
      var initTime = 0;
      var initCss = {};

      for (var i in css) {
        if (!isNaN(parseFloat(css[i]))) {
          initCss[i] = {
            init: parseFloat(ele.style[i]) || 0,
            unit: String(css[i]).substring(String(parseFloat(css[i])).length)
          };
        }
      }

      var interval = window.setInterval(function () {
        for (var _i2 in initCss) {
          if (initTime >= totalTimes) {
            ele.style[_i2] = css[_i2];
          } else {
            ele.style[_i2] = (parseFloat(css[_i2]) - initCss[_i2].init) * initTime / totalTimes + initCss[_i2].init + initCss[_i2].unit;
          }
        }

        if (initTime >= totalTimes) {
          if (typeof callback == 'function') {
            callback();
          }

          window.clearInterval(interval);
        }

        initTime++;
      }, 20);
    },
    outerWidth: function outerWidth() {
      var el = this.el[0];
      return el.offsetWidth;
    },
    outerHeight: function outerHeight() {
      var el = this.el[0];
      return el.offsetHeight;
    },
    hide: function hide() {
      this.el.forEach(function (e) {
        e.style.display = 'none';
      });
      return this;
    },
    show: function show() {
      this.el.forEach(function (e) {
        e.style.display = 'block';
      });
      return this;
    },
    position: function position() {
      return {
        top: this.el[0].offsetTop,
        left: this.el[0].offsetLeft
      };
    },
    not: function not(dom) {
      this.el = this.el.filter(function (e) {
        return e != dom;
      });
      return this;
    }
  };
  XNQuery.extend = XNQuery.prototype.extend;
  window.XNQuery = XNQuery;
})(window);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _xnquery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xnquery.js */ "./src/xnquery.js");
/* harmony import */ var _xnquery_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_xnquery_js__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



(function (window, $) {
  var settings = {
    value: '#ffffff'
  };
  var CSS = '.cpicker-container input[type=color]{cursor:pointer}.cpicker-container input[type=color i],.cpicker-container input[type=color i]::-webkit-color-swatch,.cpicker-container input[type=color i]::-webkit-color-swatch-wrapper{padding:0;border-color:#fff;border-radius:5px}.cpicker-radio{display:flex;justify-content:space-evenly}.cpicker-radio>div{vertical-align:middle}.cpicker-radio>div:not(:last-of-type){margin-right:1px}.cpicker-radio input[type=radio]{position:absolute;left:-9999px}.cpicker-radio input[type=radio]+label{background-color:#fff;color:#369;border-radius:3px;padding:.25rem .5rem;transition:background-color .3s,color .3s}.cpicker-radio input[type=radio]:checked+label{background-color:#369;color:#fff}.cpicker-mode-gradient .cpicker-flex{align-items:stretch}.cpicker-row>span{margin:.5rem 0;display:block}.cpicker-modeswitch{padding:5px 0;border-bottom:1px solid #ccc}.cpicker-preview-element{width:32px;height:32px;border:1px solid #ccc;box-shadow:0 0 3px rgba(0,0,0,.2);cursor:pointer}.cpicker-container{position:absolute;width:280px;background-color:#fff;box-shadow:0 3px 6px rgba(0,0,0,.2);padding:5px}.cpicker-container>div{margin-bottom:5px}.cpicker-image-preview{vertical-align:middle;width:100px;min-height:56.25px;background-color:#f8f8f8}.cpicker-flex-between{justify-content:space-between;align-items:center}.cpicker-flex,.cpicker-flex-1{display:flex}.cpicker-checkers,.cpicker-img-preview{background:url(data:image/png;base64,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ICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDo3N0FERkY4MUNCOTcxMUUzQjE5OTk3MzZFOUEzNURDRjwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDo3N0FERkY4MkNCOTcxMUUzQjE5OTk3MzZFOUEzNURDRjwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgPC94bXBNTTpEZXJpdmVkRnJvbT4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDo3N0FERkY4NENCOTcxMUUzQjE5OTk3MzZFOUEzNURDRjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo3N0FERkY4M0NCOTcxMUUzQjE5OTk3MzZFOUEzNURDRjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CvRWRVUAAAAySURBVDgRY/wPBAx4wKFDh/DIMjAw4ZUlQnLUgMEQiCyE4tnOzg5vZI5G42CIRopjAQBajwlk46G0YgAAAABJRU5ErkJggg==)}.cpicker-img-preview{width:5rem;height:3rem;object-fit:contain;border-radius:3px;vertical-align:middle}.cpicker-controls{margin-bottom:0;padding-bottom:0}.cpicker-controls>span,.cpicker-flex-1>*,.cpicker-gradient-preview{flex:1}.cpicker-controls span>a{text-align:center;display:block;padding:.25rem;border:1px solid #ccc;background:#f8f8f8;border-radius:2px;cursor:pointer}.cpicker-controls span:first-of-type{margin-right:.25rem}.cpicker-controls,.cpicker-row:not(:first-of-type){border-top:1px solid #ccc;margin:5px 0;padding:5px 0}';

  function CPicker(element, options) {
    if (typeof element === 'string') element = document.querySelector(element);
    settings.value = element.dataset.value ? element.dataset.value : element.value ? element.value : settings.value;
    this.element = element;
    this.$element = $(element);
    this.id = this.getRandomString();
    this.settings = $.extend({}, settings, options);
    this.injectCss();
    this.updateMode(this.settings.value);
    this.createClickableControl();
  }

  CPicker.prototype = {
    /* get the checked item from a NodeList of radio buttons */
    getChecked: function getChecked(radios) {
      return this.one(radios, ":checked");
    },

    /* get a Node matching a selector from a NodeList */
    one: function one(nodes, selector) {
      return [].filter.call(nodes, function (node) {
        return node.matches(selector);
      })[0];
    },

    /* convert hex, rgb or rgba colour to 6-digit hex notation */
    colourToHex: function colourToHex(colour) {
      if (!colour) return;
      var result = colour;

      if (colour.indexOf("rgb") !== -1) {
        var _colour$substring$spl = colour.substring(colour.indexOf('(') + 1, colour.lastIndexOf(')')).split(",").map(Number),
            _colour$substring$spl2 = _slicedToArray(_colour$substring$spl, 3),
            r = _colour$substring$spl2[0],
            g = _colour$substring$spl2[1],
            b = _colour$substring$spl2[2];

        result = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      }

      return result.substr(0, 7);
    },

    /* convert hex to rgba notation */
    hexToRgb: function hexToRgb(hex, alpha) {
      if (typeof alpha === 'undefined') alpha = 1;
      if (alpha > 1) alpha /= 100;
      if (alpha < 0) alpha = 0;

      var _hex$replace$substrin = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
        return '#' + r + r + g + g + b + b;
      }).substring(1).match(/.{2}/g).map(function (x) {
        return parseInt(x, 16);
      }),
          _hex$replace$substrin2 = _slicedToArray(_hex$replace$substrin, 3),
          r = _hex$replace$substrin2[0],
          g = _hex$replace$substrin2[1],
          b = _hex$replace$substrin2[2];

      return 'rgba(' + [r, g, b, alpha].join(",") + ')';
    },

    /* get alpha from colour string */
    getAlpha: function getAlpha(colour) {
      if (colour.indexOf('rgba') === 0) {
        var _colour$substring$spl3 = colour.substring(colour.indexOf('(') + 1, colour.lastIndexOf(')')).split(",").map(Number),
            _colour$substring$spl4 = _slicedToArray(_colour$substring$spl3, 4),
            r = _colour$substring$spl4[0],
            g = _colour$substring$spl4[1],
            b = _colour$substring$spl4[2],
            a = _colour$substring$spl4[3];

        return a;
      }

      return 1;
    },

    /* get a light or dark contrast colour given a rgb(a) value */
    getContrast: function getContrast(R, G, B, A) {
      if (!A) A = 1;
      var brightness = R * 0.299 + G * 0.587 + B * 0.114 + (1 - A) * 255;
      return brightness > 186 ? "#000000" : "#FFFFFF";
    },

    /* helper function - replace using arrays of strings */
    replaceAll: function replaceAll(str, findArray, replaceArray) {
      var i,
          regex = [],
          map = {};

      for (i = 0; i < findArray.length; i++) {
        regex.push(findArray[i].replace(/([-[\]{}()*+?.\\^$|#,])/g, '\\$1'));
        map[findArray[i]] = replaceArray[i];
      }

      regex = regex.join('|');
      str = str.replace(new RegExp(regex, 'g'), function (matched) {
        return map[matched];
      });
      return str;
    },

    /* used to generate a unique identifier for this instance of the picker */
    getRandomString: function getRandomString(len) {
      len = len || 8;
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';
      var maxPos = $chars.length;
      var pwd = '';

      for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }

      return pwd;
    },

    /* create the input control that will display and store the colour value */
    createClickableControl: function createClickableControl() {
      var that = this;

      if (this.element.nodeName === 'INPUT' && (this.element.type === 'text' || this.element.type === 'color')) {
        this.previewElement = this.element;
        this.previewElement.type = 'text';
      } else {
        this.previewElement = document.createElement("input");
        this.previewElement.type = 'text';
        this.$element.empty().append(this.previewElement);
      }

      this.previewElement.classList.add("cpicker-preview-element");
      this.updatePreview(this.settings.value);

      this.previewElement.onclick = function (e) {
        that.toggleColourPicker();
      };
    },

    /* hide or show the colour picker control surface, creating it if required */
    toggleColourPicker: function toggleColourPicker(hide) {
      _toConsumableArray(document.querySelectorAll(".cpicker-container:not(#".concat(this.id, ")"))).forEach(function (div) {
        div.setAttribute('hidden', true);
      });

      if (!this.controlSurface) this.createControlSurface();

      if (!this.controlSurface.hasAttribute('hidden') || hide) {
        this.controlSurface.setAttribute('hidden', true);
      } else {
        this.controlSurface.removeAttribute('hidden');
      }
    },

    /* add the css for this script */
    injectCss: function injectCss() {
      if (!document.querySelector('link[id="cpicker"]')) {
        var link = document.createElement('link');
        link.id = 'cpicker';
        link.href = "data:text/css;base64,".concat(btoa(CSS));
        link.type = 'text/css';
        link.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(link);
      }
    },

    /* destroy this instance */
    destroyColourPicker: function destroyColourPicker() {
      var node = document.getElementById(this.id);
      node.parentNode.removeChild(node);
      this.inputs = {};
      this.controlSurface = undefined;
      this.imagePreview = undefined;
      this.gradientPreview = undefined;
    },

    /* generate and append the control surface html and cache useful pointers */
    createControlSurface: function createControlSurface() {
      var html = document.createRange().createContextualFragment("\n<div class='cpicker-container' hidden id='".concat(this.id, "'>\n    <div class='cpicker-modeswitch cpicker-radio'>\n        <div><input type='radio' name='cpicker-mode' value='solid' id='").concat(this.id, "a' checked><label for='").concat(this.id, "a'>Solid</label></div>\n        <div><input type='radio' name='cpicker-mode' value='gradient' id='").concat(this.id, "b'><label for='").concat(this.id, "b'>Gradient</label></div>\n        <div><input type='radio' name='cpicker-mode' value='image' id='").concat(this.id, "c'><label for='").concat(this.id, "c'>Image</label></div>\n    </div>\n    <div class='cpicker-mode-solid'>\n        <div class='cpicker-flex cpicker-flex-between'>\n            <label>Colour: <input type='color' value='#ffcc33' name='cpicker-single'></label>\n            <label>Opacity: <input type='number' value='100' name='cpicker-single-opacity' min='0' max='100' step='5'></label>\n        </div>\n    </div>\n    <div class='cpicker-mode-gradient'>\n        <div class='cpicker-flex cpicker-checkers'>\n            <input type='color' value='#000000' name='cpicker-from' title='Start colour'>\n            <div class='cpicker-gradient-preview'><span/></div>\n            <input type='color' value='#ffffff' name='cpicker-to' title='End colour'>\n        </div>\n        <div class='cpicker-row cpicker-flex cpicker-flex-between'>\n            <input type='number' value='100' name='cpicker-from-opacity' min='0' max='100' step='5' title='Start opacity'>\n            <input type='number' value='100' name='cpicker-to-opacity' min='0' max='100' step='5' title='End opacity'>\n        </div>\n        <div class='cpicker-row'>\n            <span>Shape:</span>\n            <div class='cpicker-radio'>\n                <div><input type='radio' name='cpicker-shape' value='linear-gradient' id='").concat(this.id, "e' checked><label for='").concat(this.id, "e'>Straight</label></div>\n                <div><input type='radio' name='cpicker-shape' value='radial-gradient' id='").concat(this.id, "d'><label for='").concat(this.id, "d'>Round</label></div>\n            </div>\n        </div>\n        <div class='cpicker-row'>\n            <span>Direction:</span>\n            <div class='cpicker-radio'>\n                <div><input type='radio' name='cpicker-direction' value='0' id='").concat(this.id, "f'><label for='").concat(this.id, "f'>&#8593;</label></div>\n                <div><input type='radio' name='cpicker-direction' value='45' id='").concat(this.id, "g'><label for='").concat(this.id, "g'>&#8599;</label></div>\n                <div><input type='radio' name='cpicker-direction' value='90' id='").concat(this.id, "h' checked><label for='").concat(this.id, "h'>&#8594;</label></div>\n                <div><input type='radio' name='cpicker-direction' value='135' id='").concat(this.id, "i'><label for='").concat(this.id, "i'>&#8600;</label></div>\n                <div><input type='radio' name='cpicker-direction' value='180' id='").concat(this.id, "j'><label for='").concat(this.id, "j'>&#8595;</label></div>\n                <div><input type='radio' name='cpicker-direction' value='225' id='").concat(this.id, "k'><label for='").concat(this.id, "k'>&#8601;</label></div>\n                <div><input type='radio' name='cpicker-direction' value='270' id='").concat(this.id, "l'><label for='").concat(this.id, "l'>&#8592;</label></div>\n                <div><input type='radio' name='cpicker-direction' value='315' id='").concat(this.id, "m'><label for='").concat(this.id, "m'>&#8598;</label></div>\n                <div><input type='radio' name='cpicker-direction' value='-1' id='").concat(this.id, "4'><label for='").concat(this.id, "4'>&#8277;</label></div>\n            </div>\n        </div>\n    </div>\n    <div class='cpicker-mode-image'>\n        <div class='cpicker-row'>\n            <img class='cpicker-img-preview'>\n            <input type=\"file\" hidden>\n            <button onclick=\"this.previousElementSibling.click()\">Upload</button>\n        </div>\n        <div class='cpicker-row'>\n            <span>Position:</span>\n            <div class='cpicker-radio'>\n                <div><input type='radio' name='cpicker-position' value='top left' id='").concat(this.id, "n'><label for='").concat(this.id, "n'>tl</label></div>\n                <div><input type='radio' name='cpicker-position' value='top center' id='").concat(this.id, "o'><label for='").concat(this.id, "o'>tc</label></div>\n                <div><input type='radio' name='cpicker-position' value='top right' id='").concat(this.id, "p'><label for='").concat(this.id, "p'>tr</label></div>\n                <div><input type='radio' name='cpicker-position' value='middle left' id='").concat(this.id, "q'><label for='").concat(this.id, "q'>ml</label></div>\n                <div><input type='radio' name='cpicker-position' value='center' id='").concat(this.id, "r' checked><label for='").concat(this.id, "r'>c</label></div>\n                <div><input type='radio' name='cpicker-position' value='middle right' id='").concat(this.id, "s'><label for='").concat(this.id, "s'>mr</label></div>\n                <div><input type='radio' name='cpicker-position' value='bottom left' id='").concat(this.id, "t'><label for='").concat(this.id, "t'>bl</label></div>\n                <div><input type='radio' name='cpicker-position' value='bottom center' id='").concat(this.id, "u'><label for='").concat(this.id, "u'>bc</label></div>\n                <div><input type='radio' name='cpicker-position' value='bottom right' id='").concat(this.id, "v'><label for='").concat(this.id, "v'>br</label></div>\n            </div>\n        </div>\n        <div class='cpicker-row'>\n            <span>Repeat:</span>\n            <div class='cpicker-radio'>\n                <div><input type='radio' name='cpicker-repeat' value='no-repeat' id='").concat(this.id, "w'><label for='").concat(this.id, "w'>None</label></div>\n                <div><input type='radio' name='cpicker-repeat' value='repeat-x' id='").concat(this.id, "x'><label for='").concat(this.id, "x'>&#8596;</label></div>\n                <div><input type='radio' name='cpicker-repeat' value='repeat-y' id='").concat(this.id, "y'><label for='").concat(this.id, "y'>&#8597;</label></div>\n                <div><input type='radio' name='cpicker-repeat' value='repeat' id='").concat(this.id, "z' checked><label for='").concat(this.id, "z'>All</label></div>\n            </div>\n        </div>\n        <div class='cpicker-row'>\n            <span>Size:</span>\n            <div class='cpicker-radio'>\n                <div><input type='radio' name='cpicker-size' value='auto' id='").concat(this.id, "1'><label for='").concat(this.id, "1'>1:1</label></div>\n                <div><input type='radio' name='cpicker-size' value='100%' id='").concat(this.id, "2'><label for='").concat(this.id, "2'>Stretch</label></div>\n                <div><input type='radio' name='cpicker-size' value='cover' id='").concat(this.id, "3' checked><label for='").concat(this.id, "3'>Cover</label></div>\n            </div>\n        </div>\n    </div>\n    <div class='cpicker-controls cpicker-flex'>\n        <span><a class=\"cpicker-button-cancel\">Cancel</a></span>\n        <span><a class=\"cpicker-button-confirm\">Select</a></span>\n    </div>\n</div>"));
      document.body.appendChild(html);
      this.controlSurface = document.getElementById(this.id);
      this.inputs = {};
      this.inputs.single = this.controlSurface.querySelector("input[name='cpicker-single']");
      this.inputs.singleo = this.controlSurface.querySelector("input[name='cpicker-single-opacity']");
      this.inputs.from = this.controlSurface.querySelector("input[name='cpicker-from']");
      this.inputs.fromo = this.controlSurface.querySelector("input[name='cpicker-from-opacity']");
      this.inputs.to = this.controlSurface.querySelector("input[name='cpicker-to']");
      this.inputs.too = this.controlSurface.querySelector("input[name='cpicker-to-opacity']");
      this.inputs.shapes = this.controlSurface.querySelectorAll("input[name='cpicker-shape']");
      this.inputs.directions = this.controlSurface.querySelectorAll("input[name='cpicker-direction']");
      this.inputs.positions = this.controlSurface.querySelectorAll("input[name='cpicker-position']");
      this.inputs.repeats = this.controlSurface.querySelectorAll("input[name='cpicker-repeat']");
      this.inputs.sizes = this.controlSurface.querySelectorAll("input[name='cpicker-size']");
      this.imagePreview = this.controlSurface.querySelector(".cpicker-img-preview");
      this.gradientPreview = this.controlSurface.querySelector(".cpicker-gradient-preview");
      this.setPosition();
      this.displayMode();
      this.updateFields();
      this.addListeners();
    },

    /* position the control surface next to the input field */
    setPosition: function setPosition() {
      if (!this.controlSurface) return;
      var ww = document.documentElement.clientWidth,
          hh = document.documentElement.clientHeight,
          pbox = this.previewElement.getBoundingClientRect();
      this.controlSurface.style.top = pbox.top + window.scrollY + 'px';
      this.controlSurface.style.left = pbox.left + window.scrollX + pbox.width + 'px';
    },

    /* figure out the correct display mode based on the input value */
    updateMode: function updateMode(data) {
      this.currentMode = 'solid';

      if (data.indexOf('url') !== -1) {
        this.currentMode = 'image';
      } else if (data.indexOf('-gradient') !== -1) {
        this.currentMode = 'gradient';
      }

      this.displayMode();
    },

    /* switches modes by hiding or showing dom nodes */
    displayMode: function displayMode() {
      if (!this.controlSurface) return;
      this.controlSurface.querySelector(".cpicker-modeswitch input[type='radio'][value='" + this.currentMode + "']").setAttribute("checked", true);
      $("#" + this.id + " [class^='cpicker-mode-']").hide();
      $("#" + this.id + " .cpicker-mode-" + this.currentMode).show();
    },

    /* update both the input control background image and value */
    updatePreview: function updatePreview(data) {
      this.previewElement.style.background = data;
      this.previewElement.value = data;
    },

    /* displays the left-to-right gradient between the from and to colour pickers */
    showGradient: function showGradient() {
      var c = this.calculateColour(90);
      this.gradientPreview.style.background = c;
    },

    /* populates the fields in this instance with the relevant colour information */
    updateFields: function updateFields() {
      if (!this.controlSurface) return;
      var props = this.colourProperties(this.previewElement.value);

      switch (this.currentMode) {
        case "solid":
          this.inputs.single.value = props.solid;
          this.inputs.singleo.value = props.solido * 100;
          break;

        case "gradient":
          console.log(props);
          this.inputs.from.value = props.from || props.solid || "#000000";
          this.inputs.to.value = props.to || props.solid || "#ffffff";
          this.inputs.fromo.value = props.fromo * 100;
          this.inputs.too.value = props.too * 100;
          this.one(this.inputs.shapes, "[value='" + props.shape + "']").setAttribute('checked', true);
          this.one(this.inputs.directions, "[value='" + props.direction + "']").setAttribute('checked', true);
          this.showGradient();
          break;

        case "image":
          this.one(this.inputs.sizes, "[value='" + props.size + "']").setAttribute('checked', true);
          this.one(this.inputs.repeats, "[value='" + props.repeat + "']").setAttribute('checked', true);
          this.one(this.inputs.positions, "[value='" + props.position + "']").setAttribute('checked', true);
          this.imagePreview.src = props.url;
          break;
      }
    },

    /* bind events to interface elements */
    addListeners: function addListeners() {
      var _this = this;

      var that = this;
      this.inputs.single.addEventListener('change', function (e) {
        that.selectColour(e.target.value);
      });
      this.inputs.from.addEventListener('change', function (e) {
        that.selectColour(e.target.value);
      });
      this.inputs.to.addEventListener('change', function (e) {
        that.selectColour(e.target.value, 1);
      });
      this.controlSurface.addEventListener("change", function (e) {
        if (e.target && e.target.type && e.target.type === "file") {
          if (e.target.files[0].type.indexOf("image/") === -1) return;
          var reader = new FileReader();

          reader.onload = function (obj) {
            that.imagePreview.src = obj.target.result;
            that.selectColour();
          };

          reader.readAsDataURL(e.target.files[0]);
        } else if (e.target && e.target.type) {
          _this.selectColour();
        }

        if (e.target === _this.inputs.from || e.target === _this.inputs.to || e.target === _this.inputs.too || e.target === _this.inputs.fromo) {
          _this.showGradient();
        }
      });
      this.controlSurface.addEventListener("click", function (e) {
        e.stopPropagation();

        if (e.target.type === 'radio' && e.target.name === 'cpicker-mode') {
          _this.currentMode = e.target.value;
          return _this.displayMode();
        } else if (e.target.classList.contains("cpicker-button-cancel")) {
          _this.updatePreview(that.settings.value); // initial value


          _this.toggleColourPicker();
        } else if (e.target.classList.contains("cpicker-button-confirm")) {
          var colour = _this.calculateColour();

          _this.updatePreview(colour);

          _this.toggleColourPicker();

          if (_this.settings.callback) _this.settings.callback(colour);
        }
      });
    },

    /* sets up the existing colour and then calls the preview */
    selectColour: function selectColour() {
      var colour = this.calculateColour();
      this.updatePreview(colour);
    },

    /* calculates properties of a colour string */
    colourProperties: function colourProperties(value) {
      var gfrom = '',
          gto = '',
          colours;
      var brackettedValue = value.indexOf("(") !== -1 ? value.substring(value.indexOf('(') + 1, value.lastIndexOf(')')) : null;

      if (brackettedValue !== null && value.indexOf('base64') === -1) {
        if (brackettedValue.indexOf("(") === -1) {
          colours = brackettedValue.split(",").map(Function.prototype.call, String.prototype.trim); // or map(s => { s.trim() })

          gfrom = colours[1];
          gto = colours[2];
        } else {
          // assuming rgb values and not supporting other colour types, and only supporting 2 stops
          colours = brackettedValue.match(/rgba?\([^\)]*\)/gi);
          gfrom = colours[0];
          gto = colours[1];
        }
      } // normalise values to


      value = this.replaceAll(value, ['centre', 'to top', 'to right', 'to bottom', 'to left', 'middle center', 'center middle', 'left top', 'left middle', 'left bottom', 'center top', 'center center', 'center bottom', 'right top', 'right middle', 'right bottom'], ['center', '0', '90', '180', '270', 'center', 'center', 'top left', 'middle left', 'bottom left', 'top center', 'center', 'bottom center', 'top right', 'middle right', 'bottom right']);
      var dir = value.match(/\(?\s?(\d{1,3})deg/);
      if (dir) dir = Number(dir[1]);

      if (!dir && value.indexOf('circle') !== -1) {
        dir = -1;
      } // ugly string finding


      var pos = value.includes('top left') ? 'top left' : value.includes('middle left') ? 'middle left' : value.includes('bottom left') ? 'bottom left' : value.includes('top center') ? 'top center' : value.includes('center') ? 'center' : value.includes('bottom center') ? 'bottom center' : value.includes('top right') ? 'top right' : value.includes('middle right') ? 'middle right' : value.includes('bottom right') ? 'bottom right' : '';
      var props = {
        solid: value.indexOf("#") === 0 || value.indexOf("rgb") === 0 ? this.colourToHex(value) // could still be a gradient
        : '',
        solido: this.getAlpha(value),
        shape: value.indexOf("radial-gradient") === 0 ? "radial-gradient" : "linear-gradient",
        size: value.indexOf('cover') !== -1 ? "cover" : value.indexOf('100%') !== -1 ? "100%" : 'auto',
        repeat: value.indexOf('repeat-x') !== -1 ? "repeat-x" : value.indexOf('repeat-y') !== -1 ? "repeat-y" : value.indexOf('repeat') !== -1 ? "repeat" : 'no-repeat',
        url: value.indexOf('url(') !== -1 ? brackettedValue : 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        // http://disq.us/p/d5a8xb
        from: this.colourToHex(gfrom),
        fromo: this.getAlpha(gfrom),
        to: this.colourToHex(gto),
        too: this.getAlpha(gto),
        position: pos,
        direction: dir
      };
      return props;
    },

    /* calculates a colour based on the dislpayMode (solid, gradient, image) */
    calculateColour: function calculateColour(altDirection) {
      var colour = this.settings.value,
          direction = 'center';

      switch (this.currentMode) {
        case "solid":
          colour = this.inputs.single.value;
          var alpha = this.inputs.singleo.value / 100;
          if (alpha < 1) colour = this.hexToRgb(colour, alpha);
          break;

        case "gradient":
          var shape = this.getChecked(this.inputs.shapes).value,
              _direction = Number(this.getChecked(this.inputs.directions).value),
              cFrom = this.inputs.from.value,
              aFrom = this.inputs.fromo.value / 100,
              cTo = this.inputs.to.value,
              aTo = this.inputs.too.value / 100;

          if (aFrom < 1) cFrom = this.hexToRgb(cFrom, aFrom);
          if (aTo < 1) cTo = this.hexToRgb(cTo, aTo);

          if (shape === "radial-gradient" && !altDirection) {
            switch (_direction) {
              case -1:
                _direction = "circle at center";
                break;

              case 0:
                _direction = "circle at top center";
                break;

              case 45:
                _direction = "circle at top right";
                break;

              case 90:
                _direction = "circle at right";
                break;

              case 135:
                _direction = "circle at bottom right";
                break;

              case 180:
                _direction = "circle at bottom";
                break;

              case 225:
                _direction = "circle at bottom left";
                break;

              case 270:
                _direction = "circle at left";
                break;

              case 315:
                _direction = "circle at top left";
                break;
            }

            colour = "radial-gradient(" + [_direction, cFrom + " 1%", cTo + " 99%"].join(", ") + ")";
          } else {
            if (altDirection) _direction = altDirection;
            colour = "linear-gradient(" + [_direction + "deg", cFrom + " 1%", cTo + " 99%"].join(", ") + ")";
          }

          break;

        case "image":
          var repeat = this.getChecked(this.inputs.repeats).value,
              position = this.getChecked(this.inputs.positions).value,
              size = this.getChecked(this.inputs.sizes).value;
          colour = "url(" + this.imagePreview.src + ") " + repeat + " " + position + " / " + size;
          break;
      }

      return colour;
    }
  };
  window.CPicker = CPicker;
})(window, XNQuery);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map