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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Axios.js":
/*!**********************!*\
  !*** ./src/Axios.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(opts) {\r\n\tlet {method,url,data} = opts\r\n\r\n\treturn new Promise ((resolve,reject)=> {\r\n\t\tlet xhr =new XMLHttpRequest()\r\n\r\n\t\txhr.open('post',url,true)\r\n\r\n\t\txhr.setRequestHeader(\"Content-Type\",\"application/json; charset=utf-8\"); \r\n\r\n\t\tlet res = {ck:1,one:1}\r\n\t\tlet oo = {ok:1}\r\n\t\tconsole.log(typeof(oo))\r\n\t\tlet no = JSON.stringify(oo)\r\n\t\tconsole.log(typeof(no))\r\n\t\txhr.send(JSON.stringify(res))\r\n\r\n\t\txhr.onload = function() {\r\n\t\t\tif(xhr.readyState === 4) {\r\n\r\n\t\t\t\tlet {response,status,statusText} = xhr\r\n\r\n\t\t\t\tlet _headers = xhr.getAllResponseHeaders().split('\\r\\n')\r\n\t\t\t\t_headers.pop() // 去掉最后一个空\r\n\r\n\t\t\t\tlet headers =_headers.reduce((pre,cur)=> {\r\n\t\t\t\t\tlet [name,val] = cur.split(':')\r\n\t\t\t\t\t pre[name.trim()] = val.trim()\r\n\t\t\t\t\t return pre\r\n\t\t\t\t},{})\r\n\t\t\t\t\r\n\t\t\t\tlet data = {\r\n\t\t\t\t\tdata:response,\r\n\t\t\t\t\tstatus,\r\n\t\t\t\t\tstatusText,\r\n\t\t\t\t\theaders,\r\n\t\t\t\t\tconfig:{},\r\n\t\t\t\t}\r\n\t\t\t\tresolve(data)\r\n\t\t\t}\r\n\t\t}\r\n\t})\r\n});\n\n//# sourceURL=webpack:///./src/Axios.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet defaultConfig ={\r\n\tmethod:'get',\r\n\theaders: {'Content-Type': 'application/json; charset=utf-8'},\r\n\ttimeout:200,\r\n\turl:'/',\r\n\tresponseType:'json'\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (defaultConfig);\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _Axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Axios */ \"./src/Axios.js\");\n\r\n\r\n\r\nfunction axios (options) {\r\n\tlet opts = merger(options,_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n\treturn Object(_Axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(opts)\r\n}\r\n\r\naxios.create = function(){\r\n\treturn axios()\r\n}\r\n\r\nlet methods = ['get','post']\r\n\r\nmethods.forEach((i)=> {\r\n\t// console.log(i)\r\n}) \r\n\r\n\r\nfunction merger(opt,config) {\r\n\tfor(let name in opt) {\r\n\t\tconfig[name] = opt[name]\r\n\t}\r\n\treturn config\r\n}\r\n\r\n\r\n// export default axios\r\nwindow.axios = axios\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });